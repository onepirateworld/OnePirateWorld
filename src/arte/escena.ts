// Vista de isla a escala del personaje (32 px de alto): casas, árboles, muelle...
// Cada isla tiene un "escenario" fijo: su suelo y una lista de objetos colocados.
// Los objetos y los personajes se ordenan por su base para que unos tapen a otros.
import { Lienzo, azar } from './lienzo';
import { C, SOMBRA, LUZ } from './paleta';
import { FRACCION_TIERRA, formaIsla, type IslaParaDibujar } from './islaDetalle';
import { BARCOS_PRUEBA } from './barcos';

export interface Objeto {
  /** Base del objeto (donde toca el suelo), en px de escena; (0,0) es el centro de la isla. */
  x: number;
  y: number;
  sprite: Lienzo;
  /** Radio de la sombra (0 = sin sombra). */
  sombra: number;
  /** Radio que ocupa en el suelo (para no poner nada encima). */
  huella: number;
}

export interface Escenario {
  /** Diámetro de la tierra en px de escena. */
  D: number;
  objetos: Objeto[];
  /** Sitios libres donde pueden estar los personajes. */
  sitios: [number, number][];
  caminos: [number, number][][];
  agua?: { x: number; y: number; rx: number; ry: number };
  muelle?: { x: number; y: number; ang: number; largo: number };
}

/** Diámetro de la tierra a escala de personaje según el radio de la isla (en grados). */
export const diametroEscena = (radio: number) => Math.round(240 + radio * 220);

// ---------------------------------------------------------------------------
// Sprites de objetos

function terminar(L: Lienzo, excluir: number[] = []) {
  L.contorno(C.tinta);
  void excluir;
  return L;
}

function casa(tejado: number, pared: number, ancho = 64): Lienzo {
  const w = ancho, h = 60;
  const L = new Lienzo(w + 2, h + 2);
  const ox = 1;
  // Paredes
  L.rect(ox + 5, 28, w - 10, 28, pared);
  L.rect(ox + 5, 52, w - 10, 4, SOMBRA[pared]);
  L.rect(ox + w - 9, 28, 4, 28, SOMBRA[pared]);
  // Tejado (trapecio con tejas)
  L.poligono([[ox + 10, 2], [ox + w - 10, 2], [ox + w, 30], [ox, 30]], tejado);
  for (let y = 7; y < 30; y += 5) L.linea(ox + 2 + (30 - y) * 0.33, y, ox + w - 2 - (30 - y) * 0.33, y, SOMBRA[tejado]);
  L.linea(ox + 11, 3, ox + w - 11, 3, LUZ[tejado]);
  L.rect(ox, 29, w, 2, SOMBRA[tejado]);
  // Chimenea
  L.rect(ox + w - 22, 0, 7, 9, C.piedra); L.rect(ox + w - 22, 0, 7, 2, C.niebla);
  // Puerta y ventanas
  const px = ox + Math.round(w / 2) - 5;
  L.rect(px, 38, 10, 18, C.corteza); L.rect(px + 1, 39, 8, 17, C.madera); L.px(px + 7, 47, C.oro);
  for (const vx of [ox + 11, ox + w - 22]) {
    L.rect(vx, 36, 11, 10, C.madera); L.rect(vx + 1, 37, 9, 8, C.limon);
    L.rect(vx + 5, 37, 1, 8, C.madera); L.rect(vx + 1, 40, 9, 1, C.madera);
  }
  return terminar(L);
}

function taberna(): Lienzo {
  const base = casa(C.granate, C.maderaClara, 72);
  const L = new Lienzo(base.w + 14, base.h);
  L.pegar(base, 0, 0);
  // Cartel con una jarra
  L.rect(base.w - 2, 30, 14, 2, C.corteza);
  L.rect(base.w + 2, 32, 10, 10, C.madera); L.rect(base.w + 4, 34, 5, 6, C.oro); L.rect(base.w + 9, 35, 1, 3, C.oro); L.rect(base.w + 4, 34, 5, 1, C.hueso);
  L.contorno(C.tinta);
  return L;
}

function baseMarina(): Lienzo {
  const L = new Lienzo(100, 86);
  L.rect(8, 40, 84, 42, C.hueso);
  L.rect(8, 76, 84, 6, C.niebla);
  L.poligono([[14, 18], [86, 18], [96, 42], [4, 42]], C.azulMarina);
  for (let y = 23; y < 42; y += 5) L.linea(6, y, 94, y, C.noche);
  L.rect(4, 41, 92, 2, C.noche);
  for (const vx of [16, 34, 58, 76]) { L.rect(vx, 50, 9, 10, C.noche); L.rect(vx + 1, 51, 7, 8, C.mar); }
  L.rect(44, 56, 12, 26, C.azulMarina); L.rect(45, 57, 10, 25, C.noche);
  // Mástil con bandera
  L.rect(49, 0, 2, 20, C.piedra);
  L.rect(51, 1, 16, 10, C.azulMarina); L.rect(57, 4, 4, 4, C.hueso);
  return terminar(L);
}

function templo(): Lienzo {
  const L = new Lienzo(90, 70);
  L.rect(2, 58, 86, 10, C.piedra); L.rect(6, 54, 78, 5, C.niebla);
  L.poligono([[8, 20], [45, 2], [82, 20]], C.niebla); L.rect(6, 20, 78, 6, C.hueso);
  for (const cx of [10, 28, 56, 74]) { L.rect(cx, 26, 7, 28, C.hueso); L.rect(cx + 5, 26, 2, 28, C.niebla); }
  L.rect(38, 30, 14, 24, C.tinta); L.px(44, 12, C.oro); L.px(45, 12, C.oro);
  return terminar(L);
}

function arbol(r: () => number): Lienzo {
  const L = new Lienzo(46, 54);
  L.rect(20, 34, 6, 19, C.corteza); L.rect(21, 34, 2, 19, C.madera);
  L.elipse(23, 21, 21, 18, C.selva);
  L.elipse(21, 18, 17, 14, C.hoja);
  L.elipse(17, 13, 8, 6, C.brote);
  for (let i = 0; i < 10; i++) L.pxSobre(6 + Math.floor(r() * 34), 6 + Math.floor(r() * 26), C.selva);
  return terminar(L);
}

function palmera(r: () => number): Lienzo {
  const L = new Lienzo(44, 58);
  const dir = r() < 0.5 ? 1 : -1;
  for (let y = 56; y > 18; y--) {
    const x = 22 + Math.round(Math.sin((56 - y) / 16) * 5 * dir);
    L.rect(x - 2, y, 4, 1, y % 4 === 0 ? C.madera : C.maderaClara);
  }
  const tx = 22 + Math.round(Math.sin(38 / 16) * 5 * dir), ty = 18;
  for (const [ax, ay] of [[-20, 6], [20, 6], [-14, -8], [14, -8], [0, -12], [-8, 12], [8, 12]]) {
    L.poligono([[tx, ty - 1], [tx + ax, ty + ay], [tx + ax * 0.6, ty + ay + 4]], C.hoja);
    L.linea(tx, ty, tx + ax * 0.9, ty + ay * 0.9, C.brote);
  }
  L.rect(tx - 2, ty + 1, 4, 3, C.corteza);
  return terminar(L);
}

function pino(): Lienzo {
  const L = new Lienzo(34, 52);
  L.rect(15, 42, 4, 10, C.corteza);
  for (const [y0, mitad, alto] of [[30, 16, 14], [18, 12, 14], [6, 8, 13]] as const) {
    L.poligono([[17 - mitad, y0 + alto], [17, y0], [17 + mitad, y0 + alto]], C.selva);
    L.poligono([[17, y0], [17 + mitad, y0 + alto], [17 + 2, y0 + alto]], C.hoja);
    L.poligono([[17 - mitad * 0.45, y0 + alto * 0.45], [17, y0], [17 + mitad * 0.45, y0 + alto * 0.45]], C.hueso);
  }
  return terminar(L);
}

function cactus(): Lienzo {
  const L = new Lienzo(20, 30);
  L.rect(8, 2, 5, 27, C.hoja); L.rect(9, 2, 1, 27, C.brote);
  L.rect(2, 10, 4, 10, C.hoja); L.rect(2, 18, 7, 3, C.hoja);
  L.rect(15, 6, 4, 9, C.hoja); L.rect(12, 13, 7, 3, C.hoja);
  L.px(10, 1, C.coral);
  return terminar(L);
}

function roca(grande: boolean): Lienzo {
  const L = new Lienzo(grande ? 30 : 18, grande ? 20 : 12);
  L.elipse(L.w / 2, L.h / 2 + 1, L.w / 2 - 1, L.h / 2 - 1, C.piedra);
  L.elipse(L.w / 2 - 2, L.h / 2 - 1, L.w / 3, L.h / 4, C.niebla);
  return terminar(L);
}

function columna(rota: boolean): Lienzo {
  const L = new Lienzo(14, 36);
  const alto = rota ? 16 : 30;
  L.rect(2, 34 - alto, 10, alto, C.hueso); L.rect(9, 34 - alto, 3, alto, C.niebla);
  L.rect(0, 33, 14, 3, C.piedra);
  if (!rota) L.rect(0, 2, 14, 3, C.niebla);
  return terminar(L);
}

function barril(): Lienzo {
  const L = new Lienzo(12, 14);
  L.rect(1, 1, 10, 12, C.madera); L.rect(1, 3, 10, 1, C.corteza); L.rect(1, 10, 10, 1, C.corteza); L.rect(3, 1, 2, 12, C.maderaClara);
  return terminar(L);
}

function farol(): Lienzo {
  const L = new Lienzo(10, 38);
  L.rect(4, 8, 2, 29, C.tinta); L.rect(2, 2, 6, 7, C.noche); L.rect(3, 3, 4, 5, C.limon);
  return terminar(L);
}

function tienda(color: number): Lienzo {
  const L = new Lienzo(46, 34);
  L.poligono([[2, 32], [23, 2], [44, 32]], C.arena);
  for (let i = 0; i < 4; i++) L.poligono([[2 + i * 11, 32], [23, 2], [7 + i * 11, 32]], color);
  L.poligono([[18, 32], [23, 18], [28, 32]], C.corteza);
  return terminar(L);
}

function volcan(): Lienzo {
  const L = new Lienzo(200, 130);
  L.poligono([[0, 128], [70, 20], [130, 20], [200, 128]], C.piedra);
  L.poligono([[100, 20], [130, 20], [200, 128], [110, 128]], C.sombraVioleta);
  L.elipse(100, 22, 32, 8, C.granate); L.elipse(100, 22, 24, 5, C.naranja); L.elipse(97, 21, 10, 2, C.limon);
  for (const [x0, dx] of [[88, -1], [112, 1], [100, 0.3]] as const) {
    let x = x0;
    for (let y = 26; y < 120; y++) { x += dx * 0.45 + Math.sin(y / 7) * 0.6; L.rect(Math.round(x), y, 3, 1, y < 70 ? C.naranja : C.rojo); }
  }
  // Humo
  for (const [x, y, rr] of [[96, 10, 8], [108, 4, 6], [90, 2, 5]] as const) L.elipse(x, y, rr, rr * 0.8, C.niebla);
  return terminar(L);
}

let barcaCache: Lienzo | null = null;
const barca = () => (barcaCache ??= BARCOS_PRUEBA[0].dibujar());

// ---------------------------------------------------------------------------
// Colocación

const cacheEscenarios = new Map<number, Escenario>();

export function escenario(isla: IslaParaDibujar & { radio: number }): Escenario {
  const hecho = cacheEscenarios.get(isla.id);
  if (hecho) return hecho;
  const D = diametroEscena(isla.radio);
  const R = D / 2;
  const forma = formaIsla(isla.id);
  const r = azar(isla.id * 15485863 + 11);
  /** 0 en el centro, 1 en la orilla. */
  const d = (x: number, y: number) => Math.hypot(x, y) / (R * forma(Math.atan2(y, x)));
  const objetos: Objeto[] = [];
  const libre = (x: number, y: number, huella: number, maxD: number) =>
    d(x, y) < maxD && objetos.every((o) => Math.hypot(o.x - x, (o.y - y) * 1.4) > o.huella + huella);
  const poner = (sprite: Lienzo, huella: number, maxD = 0.8, minD = 0, cerca?: [number, number, number], sombra = huella * 0.8) => {
    for (let k = 0; k < 80; k++) {
      let x: number, y: number;
      if (cerca) { const a = r() * Math.PI * 2, rr = r() * cerca[2]; x = cerca[0] + Math.cos(a) * rr; y = cerca[1] + Math.sin(a) * rr * 0.7; }
      else { const a = r() * Math.PI * 2, rr = (minD + Math.sqrt(r()) * (maxD - minD)) * R * forma(a); x = Math.cos(a) * rr; y = Math.sin(a) * rr; }
      if (libre(x, y, huella, maxD)) { const o = { x: Math.round(x), y: Math.round(y), sprite, sombra, huella }; objetos.push(o); return o; }
    }
    return null;
  };
  const b = isla.bioma;
  const area = Math.PI * R * R;
  const caminos: [number, number][][] = [];
  const esc: Escenario = { D, objetos, sitios: [], caminos };

  // Muelle hacia el mar con una barca amarrada
  if (b !== 'flotante') {
    const ang = 0.5 + r() * 1.4;
    let rr = 0; while (d(Math.cos(ang) * rr, Math.sin(ang) * rr) < 0.93) rr += 2;
    const x = Math.cos(ang) * rr, y = Math.sin(ang) * rr;
    const largo = 60 + Math.round(r() * 30);
    esc.muelle = { x, y, ang, largo };
    const bx = x + Math.cos(ang) * largo * 0.7 + 22, by = y + Math.sin(ang) * largo * 0.7 + 14;
    objetos.push({ x: Math.round(bx), y: Math.round(by), sprite: barca(), sombra: 0, huella: 0 });
  }

  // El pueblo: un centro y unas pocas casas alrededor
  const nCasas = { tropical: 2 + Math.floor(isla.radio * 1.3), ciudad: 4 + Math.floor(isla.radio * 2.6), nevada: 1 + Math.floor(isla.radio * 0.8),
    desierto: 1 + Math.floor(isla.radio * 0.6), volcanica: isla.radio > 1.4 ? 1 : 0, ruinas: 0, flotante: 0 }[b];
  const centro: [number, number] = esc.muelle ? [esc.muelle.x * 0.45, esc.muelle.y * 0.45] : [0, 0];
  const radioPueblo = 50 + nCasas * 14;
  const puertas: [number, number][] = [];
  const tejados = [C.rojo, C.naranja, C.granate, C.madera, C.azulMarina];

  if (isla.especial === 'base') { const o = poner(baseMarina(), 52, 0.6, 0, [centro[0], centro[1] - 30, 60]); if (o) puertas.push([o.x, o.y]); }
  if (isla.especial === 'taberna') { const o = poner(taberna(), 42, 0.65, 0, [...centro, radioPueblo]); if (o) puertas.push([o.x, o.y]); }
  for (let i = 0; i < nCasas; i++) {
    const s = b === 'desierto' ? tienda(r() < 0.5 ? C.rojo : C.azulMarina)
      : b === 'nevada' ? casa(C.hueso, C.maderaClara) : casa(tejados[Math.floor(r() * tejados.length)], b === 'ciudad' ? C.hueso : C.pergamino);
    const o = poner(s, b === 'desierto' ? 28 : 42, 0.72, 0, [...centro, radioPueblo]);
    if (o) {
      puertas.push([o.x, o.y]);
      if (r() < 0.6) poner(barril(), 6, 0.8, 0, [o.x + 30, o.y + 4, 10], 0);
    }
  }
  if (b === 'ciudad' || nCasas >= 3) for (let i = 0; i < 2; i++) poner(farol(), 5, 0.75, 0, [...centro, radioPueblo * 0.6], 0);

  // Caminos: de cada puerta al centro y del centro al muelle
  for (const [px, py] of puertas) caminos.push([[px, py + 2], [px, py + 14], [centro[0], centro[1]]]);
  if (esc.muelle && puertas.length) caminos.push([[centro[0], centro[1]], [esc.muelle.x, esc.muelle.y]]);

  // Elementos según el bioma
  if (b === 'volcanica') {
    const vx = Math.round(-centro[0] * 0.5), vy = Math.round(-centro[1] * 0.5 + 50);
    objetos.push({ x: vx, y: vy, sprite: volcan(), sombra: 0, huella: 90 });
    // bloqueos invisibles para que nada quede "dentro" de la montaña
    for (const dy of [40, 80]) objetos.push({ x: vx, y: vy - dy, sprite: new Lienzo(1, 1), sombra: 0, huella: 90 - dy * 0.5 });
    for (let i = 0; i < area / 18000; i++) poner(roca(r() < 0.4), 10, 0.88);
  }
  if (b === 'ruinas' || b === 'flotante') {
    poner(templo(), 46, 0.45);
    if (b === 'ruinas') for (let i = 0; i < 6 + isla.radio * 3; i++) poner(columna(r() < 0.6), 7, 0.85);
  }
  if (b === 'desierto') {
    const ax = -centro[0] * 0.6, ay = -centro[1] * 0.6;
    esc.agua = { x: ax, y: ay, rx: 34 + isla.radio * 8, ry: 20 + isla.radio * 5 };
    objetos.push({ x: Math.round(ax), y: Math.round(ay), sprite: new Lienzo(1, 1), sombra: 0, huella: esc.agua.rx });
    for (let i = 0; i < 3; i++) poner(palmera(r), 9, 0.9, 0, [ax, ay, esc.agua.rx + 20]);
    for (let i = 0; i < area / 14000; i++) poner(cactus(), 7, 0.88);
    for (let i = 0; i < area / 20000; i++) poner(roca(false), 8, 0.88);
  }
  const arboles = { tropical: area / 5200, ciudad: area / 14000, nevada: area / 6000, desierto: 0, volcanica: area / 30000, ruinas: area / 6000, flotante: area / 6000 }[b];
  for (let i = 0; i < arboles; i++) {
    const s = b === 'nevada' ? pino() : b === 'tropical' && r() < 0.25 ? palmera(r) : arbol(r);
    poner(s, 19, b === 'tropical' ? 0.88 : 0.86, 0);
  }
  if (b === 'tropical' || b === 'ruinas') for (let i = 0; i < area / 16000; i++) poner(palmera(r), 9, 0.95, 0.82);
  for (let i = 0; i < area / 30000; i++) poner(roca(false), 8, 0.92, 0.75);

  // Sitios libres para personajes: cerca del pueblo primero
  for (let k = 0; k < 500 && esc.sitios.length < 40; k++) {
    const cerca = k < 250;
    const a = r() * Math.PI * 2;
    const rr = cerca ? Math.sqrt(r()) * radioPueblo : Math.sqrt(r()) * R * 0.8;
    const x = (cerca ? centro[0] : 0) + Math.cos(a) * rr, y = (cerca ? centro[1] : 0) + Math.sin(a) * rr * 0.8;
    if (d(x, y) < 0.82 && objetos.every((o) => Math.hypot(o.x - x, (o.y - y) * 1.6) > o.huella * 0.9 + 8)
      && esc.sitios.every(([sx, sy]) => Math.hypot(sx - x, sy - y) > 18)) esc.sitios.push([Math.round(x), Math.round(y)]);
  }
  if (!esc.sitios.length) esc.sitios.push([0, 0]);

  cacheEscenarios.set(isla.id, esc);
  if (cacheEscenarios.size > 300) cacheEscenarios.delete(cacheEscenarios.keys().next().value!);
  return esc;
}

// ---------------------------------------------------------------------------
// Suelo de la escena (grande, solo cuando estás cerca)

export function sueloEscena(isla: IslaParaDibujar & { radio: number }): Lienzo {
  const esc = escenario(isla);
  const R = esc.D / 2;
  const tam = Math.round(esc.D / FRACCION_TIERRA) & ~1;
  const c = tam / 2;
  const forma = formaIsla(isla.id);
  const L = new Lienzo(tam, tam);
  const r = azar(isla.id * 31 + 5);
  const b = isla.bioma;
  const P = ({
    tropical: [C.arena, C.hoja, C.selva], nevada: [C.niebla, C.hueso, C.espuma], volcanica: [C.sombraVioleta, C.piedra, C.sombraVioleta],
    desierto: [C.pergamino, C.arena, C.maderaClara], flotante: [C.hueso, C.hoja, C.selva], ciudad: [C.arena, C.hoja, C.selva], ruinas: [C.arena, C.hoja, C.selva],
  } as Record<string, number[]>)[b];
  const anchoArena = 16 / R;
  for (let y = 0; y < tam; y++) for (let x = 0; x < tam; x++) {
    const dx = x + 0.5 - c, dy = y + 0.5 - c;
    const v = Math.hypot(dx, dy) / (R * forma(Math.atan2(dy, dx)));
    if (v < 1 - anchoArena) {
      // hierba con manchas grandes (celdas de 6 px) y algún punto
      // hierba con matas (zonas de puntos) y briznas sueltas
      const mancha = Math.sin(x / 23 + isla.id) * Math.cos(y / 19 - isla.id) > 0.6 && (x + 2 * y) % 5 === 0;
      const brizna = r() < 0.012;
      L.px(x, y, mancha || brizna ? P[2] : P[1]);
      if (brizna) L.px(x, y - 1, P[2]);
    } else if (v < 1) L.px(x, y, v > 1 - anchoArena * 0.25 && (x + y) % 2 ? SOMBRA[P[0]] : P[0]);
    else if (b === 'flotante') { if (v < 1.15 && (x + y) % 2 === 0) L.px(x, y, C.hueso); }
    else if (v < 1 + 6 / R) L.px(x, y, (x >> 1) % 2 === (y >> 1) % 2 ? C.espuma : C.bajio);
    else if (v < 1.22) L.px(x, y, C.bajio);
    else if (v < 1.3 && (x + y) % 2) L.px(x, y, C.bajio);
  }
  // Caminos de tierra
  const colorCamino = b === 'desierto' ? C.maderaClara : b === 'nevada' ? C.niebla : b === 'volcanica' ? C.sombraVioleta : C.arena;
  for (const tramo of esc.caminos) {
    for (let i = 0; i + 1 < tramo.length; i++) {
      const [x0, y0] = tramo[i], [x1, y1] = tramo[i + 1];
      const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0));
      for (let t = 0; t <= n; t++) {
        const x = c + x0 + (x1 - x0) * (t / n), y = c + y0 + (y1 - y0) * (t / n);
        L.elipse(x, y, 4.5, 3.5, colorCamino);
      }
    }
  }
  // Oasis
  if (esc.agua) {
    const a = esc.agua;
    L.elipse(c + a.x, c + a.y, a.rx + 3, a.ry + 3, C.arena);
    L.elipse(c + a.x, c + a.y, a.rx, a.ry, C.mar);
    L.elipse(c + a.x - a.rx * 0.2, c + a.y - a.ry * 0.25, a.rx * 0.45, a.ry * 0.35, C.bajio);
  }
  // Muelle de tablones
  if (esc.muelle) {
    const m = esc.muelle;
    for (let k = -6; k < m.largo; k++) {
      const x = c + m.x + Math.cos(m.ang) * k, y = c + m.y + Math.sin(m.ang) * k;
      L.elipse(x, y, 5, 5, k % 6 === 0 ? C.corteza : C.madera);
    }
  }
  return L;
}
