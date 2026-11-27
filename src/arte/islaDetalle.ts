// Islas del mapa 2D dibujadas al tamaño que pide el zoom.
// Cuanto más grande, más detalle: árboles, casas, calles, puertos, volcanes, ruinas...
import { Lienzo, azar } from './lienzo';
import { C } from './paleta';
import type { BiomaIsla } from '../mundo/geografia';

export interface IslaParaDibujar { id: number; bioma: BiomaIsla; especial?: 'base' | 'taberna' | 'maestro' | 'tesoro' }

/** Proporción del sprite que ocupa la tierra (el resto es agua poco profunda). */
export const FRACCION_TIERRA = 0.74;

// --- Piezas pequeñas (tamaño fijo en píxeles: al acercar caben más)

function copa(L: Lienzo, x: number, y: number, oscuro: number = C.selva) {
  L.elipse(x, y, 2.6, 2.2, oscuro);
  L.px(x - 1, y - 1, C.brote); L.px(x, y - 1, C.brote); L.px(x - 1, y, C.hoja);
  L.px(x + 1, y + 1, C.tinta);
}
function palmera(L: Lienzo, x: number, y: number) {
  L.px(x, y, C.corteza); L.px(x, y - 1, C.maderaClara); L.px(x + 1, y - 2, C.maderaClara);
  const hx = x + 1, hy = y - 3;
  for (const [dx, dy] of [[-2, 0], [-1, -1], [1, -1], [2, 0], [0, 0], [-2, 1], [2, 1], [0, -1]]) L.px(hx + dx, hy + dy, C.brote);
  L.px(hx - 1, hy, C.hoja); L.px(hx + 1, hy, C.hoja);
}
function pino(L: Lienzo, x: number, y: number) {
  L.px(x, y - 3, C.hueso);
  L.rect(x - 1, y - 2, 3, 1, C.selva); L.px(x, y - 2, C.hueso);
  L.rect(x - 2, y - 1, 5, 1, C.selva);
  L.px(x, y, C.corteza);
}
function cactus(L: Lienzo, x: number, y: number) {
  L.rect(x, y - 3, 1, 4, C.hoja); L.px(x - 1, y - 2, C.hoja); L.px(x + 1, y - 1, C.hoja); L.px(x, y - 3, C.brote);
}
function roca(L: Lienzo, x: number, y: number) { L.rect(x, y, 2, 1, C.piedra); L.px(x, y - 1, C.niebla); }
function casa(L: Lienzo, x: number, y: number, tejado: number, pared: number = C.hueso) {
  L.rect(x, y, 5, 2, tejado); L.rect(x + 1, y - 1, 3, 1, tejado); L.px(x + 1, y - 1, LUZ_TEJADO[tejado] ?? tejado);
  L.rect(x, y + 2, 5, 2, pared); L.px(x + 2, y + 3, C.corteza); L.px(x + 4, y + 2, C.limon);
  L.rect(x, y + 4, 5, 1, C.tinta);
}
const LUZ_TEJADO: Record<number, number> = { [C.rojo]: C.naranja, [C.granate]: C.rojo, [C.azulMarina]: C.mar, [C.madera]: C.maderaClara, [C.hueso]: C.espuma, [C.naranja]: C.oro };
function edificio(L: Lienzo, x: number, y: number, w: number, h: number, tejado: number) {
  L.rect(x, y, w, h, tejado); L.rect(x, y, w, 1, LUZ_TEJADO[tejado] ?? tejado);
  L.rect(x, y + h, w, 3, C.hueso);
  for (let i = x + 1; i < x + w - 1; i += 2) L.px(i, y + h + 1, C.noche);
  L.rect(x, y + h + 3, w, 1, C.tinta);
}
function bandera(L: Lienzo, x: number, y: number, color: number) {
  L.rect(x, y - 6, 1, 7, C.corteza); L.rect(x + 1, y - 6, 3, 2, color);
}
function barquita(L: Lienzo, x: number, y: number) {
  L.rect(x, y, 5, 1, C.madera); L.rect(x + 1, y + 1, 3, 1, C.corteza); L.px(x + 2, y - 1, C.hueso); L.px(x + 2, y - 2, C.hueso);
}
function columna(L: Lienzo, x: number, y: number, rota: boolean) {
  L.rect(x, y - (rota ? 2 : 4), 2, rota ? 3 : 5, C.niebla); L.px(x + 1, y - (rota ? 2 : 4), C.hueso); L.rect(x, y + 1, 2, 1, C.piedra);
}

/** Dibuja la isla en un sprite cuadrado de `tam` píxeles. */
export function dibujarIslaMapa(isla: IslaParaDibujar, tam: number): Lienzo {
  const L = new Lienzo(tam, tam);
  const r = azar(isla.id * 7919 + tam);
  const rf = azar(isla.id * 104729 + 3);          // forma estable a cualquier tamaño
  const arm = [2, 3, 4, 6].map((k) => ({ k, a: (rf() * 0.16) / (k / 2), f: rf() * Math.PI * 2 }));
  const forma = (ang: number) => 1 + arm.reduce((s, h) => s + h.a * Math.sin(h.k * ang + h.f), 0);
  const c = tam / 2;
  const RL = (tam / 2) * FRACCION_TIERRA;          // radio de la tierra
  const d = (x: number, y: number) => {
    const dx = x + 0.5 - c, dy = y + 0.5 - c;
    return Math.hypot(dx, dy) / (RL * forma(Math.atan2(dy, dx)));
  };
  const b = isla.bioma;
  const flotante = b === 'flotante';
  const P = ({
    tropical: { orilla: C.arena, tierra: C.hoja, oscura: C.selva },
    nevada: { orilla: C.piedra, tierra: C.hueso, oscura: C.niebla },
    volcanica: { orilla: C.sombraVioleta, tierra: C.piedra, oscura: C.sombraVioleta },
    desierto: { orilla: C.pergamino, tierra: C.arena, oscura: C.maderaClara },
    flotante: { orilla: C.piedra, tierra: C.hoja, oscura: C.selva },
    ciudad: { orilla: C.arena, tierra: C.hoja, oscura: C.selva },
    ruinas: { orilla: C.arena, tierra: C.hoja, oscura: C.selva },
  } as Record<BiomaIsla, { orilla: number; tierra: number; oscura: number }>)[b];
  const anchoOrilla = Math.max(0.06, 1.6 / RL);

  // --- Suelo, orilla y agua
  for (let y = 0; y < tam; y++)
    for (let x = 0; x < tam; x++) {
      const v = d(x, y);
      const grano = r();
      if (v < 1 - anchoOrilla) L.px(x, y, grano < 0.07 || v > 0.92 - anchoOrilla ? P.oscura : P.tierra);
      else if (v < 1) L.px(x, y, P.orilla);
      else if (flotante) { if (v < 1.25 && (x + y) % 2 === 0) L.px(x, y, C.hueso); }   // nubes alrededor
      else if (v < 1 + 2 / RL + 0.05) L.px(x, y, (x + y) % 2 ? C.espuma : C.bajio);
      else if (v < 1.26) L.px(x, y, C.bajio);
      else if (v < 1.33 && (x + y) % 2) L.px(x, y, C.bajio);
    }
  if (RL < 7) return L;                            // de lejos: solo la forma

  // --- Detalles, en proporción al área
  const area = Math.PI * RL * RL;
  const ocupado = new Uint8Array(tam * tam);
  const libre = (x: number, y: number, w: number, h: number, maxD = 0.85) => {
    for (let j = y - 1; j <= y + h; j++) for (let i = x - 1; i <= x + w; i++) {
      if (i < 0 || j < 0 || i >= tam || j >= tam || ocupado[j * tam + i] || d(i, j) > maxD) return false;
    }
    return true;
  };
  const ocupar = (x: number, y: number, w: number, h: number) => {
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) if (i >= 0 && j >= 0 && i < tam && j < tam) ocupado[j * tam + i] = 1;
  };
  const sitio = (w: number, h: number, maxD = 0.8, minD = 0, intentos = 40): [number, number] | null => {
    for (let k = 0; k < intentos; k++) {
      const a = r() * Math.PI * 2, rr = (minD + Math.sqrt(r()) * (maxD - minD)) * RL * forma(a);
      const x = Math.round(c + Math.cos(a) * rr - w / 2), y = Math.round(c + Math.sin(a) * rr - h / 2);
      if (libre(x, y, w, h, maxD + 0.05)) { ocupar(x, y, w, h); return [x, y]; }
    }
    return null;
  };

  // Puerto: muelle hacia el mar por el lado sur-este
  const conPuerto = b !== 'flotante' && RL >= 12;
  if (conPuerto) {
    const ang = 0.6 + rf() * 1.2;
    let x = c, y = c;
    while (d(Math.round(x), Math.round(y)) < 0.97) { x += Math.cos(ang); y += Math.sin(ang); }
    const largo = Math.max(4, Math.round(RL * 0.35));
    for (let k = 0; k < largo; k++) {
      const px = Math.round(x + Math.cos(ang) * k), py = Math.round(y + Math.sin(ang) * k);
      L.rect(px, py, 2, 2, C.madera); ocupar(px - 1, py - 1, 4, 4);
    }
    barquita(L, Math.round(x + Math.cos(ang) * largo * 0.6 + 3), Math.round(y + Math.sin(ang) * largo * 0.6 + 2));
  }

  // Edificio especial
  if (isla.especial === 'base' && RL >= 12) {
    const s = sitio(12, 7, 0.5);
    if (s) { edificio(L, s[0], s[1], 12, 4, C.azulMarina); bandera(L, s[0] + 12, s[1] + 1, C.azulMarina); }
  }
  if (isla.especial === 'taberna' && RL >= 12) {
    const s = sitio(7, 5, 0.6);
    if (s) { casa(L, s[0], s[1], C.granate, C.maderaClara); L.px(s[0] + 6, s[1] + 2, C.oro); }
  }

  if (b === 'ciudad') {
    // Calles en cuadrícula y manzanas de casas
    const paso = 8;
    for (let y = 0; y < tam; y++) for (let x = 0; x < tam; x++) {
      if (d(x, y) < 0.85 && (x % paso === 0 || y % paso === 0)) { L.px(x, y, C.arena); }
    }
    const tejados = [C.rojo, C.granate, C.naranja, C.azulMarina, C.madera];
    for (let y = 1; y < tam - 6; y += paso) for (let x = 1; x < tam - 6; x += paso) {
      if (d(x + 3, y + 3) < 0.78 && libre(x + 1, y + 1, 5, 5, 0.85)) { casa(L, x + 1, y + 2, tejados[Math.floor(r() * tejados.length)]); ocupar(x, y, 7, 7); }
    }
    for (let i = 0; i < area / 120; i++) { const s = sitio(5, 5, 0.95, 0.8); if (s) copa(L, s[0] + 2, s[1] + 2); }
  } else if (b === 'tropical') {
    // Un poblado agrupado cerca de la costa
    const pueblo = Math.min(14, Math.max(1, Math.round(area / 900)));
    const angP = rf() * Math.PI * 2, distP = RL * 0.5;
    const px0 = c + Math.cos(angP) * distP, py0 = c + Math.sin(angP) * distP;
    for (let i = 0, k = 0; i < pueblo && k < 200; k++) {
      const a2 = r() * Math.PI * 2, rr = Math.sqrt(r()) * (4 + Math.sqrt(pueblo) * 5);
      const x = Math.round(px0 + Math.cos(a2) * rr), y = Math.round(py0 + Math.sin(a2) * rr);
      if (libre(x, y, 5, 5, 0.85)) { ocupar(x, y, 5, 5); casa(L, x, y + 1, r() < 0.5 ? C.naranja : C.madera, C.maderaClara); i++; }
    }
    for (let i = 0; i < area / 22; i++) { const s = sitio(5, 5, 0.85); if (s) copa(L, s[0] + 2, s[1] + 2); }
    for (let i = 0; i < area / 90; i++) { const s = sitio(5, 5, 0.97, 0.82); if (s) palmera(L, s[0] + 1, s[1] + 4); }
  } else if (b === 'nevada') {
    const m = Math.round(RL * 0.45);
    L.poligono([[c - m, c + m * 0.4], [c, c - m], [c + m, c + m * 0.4]], C.piedra);
    L.poligono([[c, c - m], [c + m, c + m * 0.4], [c + 1, c + m * 0.4]], C.sombraVioleta);
    L.poligono([[c - m * 0.45, c - m * 0.35], [c, c - m], [c + m * 0.45, c - m * 0.35]], C.hueso);
    ocupar(Math.round(c - m), Math.round(c - m), m * 2, Math.round(m * 1.5));
    for (let i = 0; i < Math.max(1, area / 700); i++) { const s = sitio(5, 5, 0.8, 0.4); if (s) casa(L, s[0], s[1] + 1, C.hueso, C.madera); }
    for (let i = 0; i < area / 28; i++) { const s = sitio(5, 5, 0.88); if (s) pino(L, s[0] + 2, s[1] + 4); }
  } else if (b === 'volcanica') {
    const m = RL * 0.45;
    L.elipse(c, c, m, m * 0.85, C.sombraVioleta);
    L.elipse(c, c - 1, m * 0.72, m * 0.6, C.piedra);
    L.elipse(c, c - 1, m * 0.36, m * 0.3, C.granate);
    L.elipse(c, c - 1, m * 0.26, m * 0.2, C.naranja);
    L.px(c - 1, c - 2, C.limon);
    ocupar(Math.round(c - m), Math.round(c - m), Math.round(m * 2), Math.round(m * 2));
    for (const ang of [0.5, 2.3, 4.1, 5.4].slice(0, RL > 20 ? 4 : 3)) {
      let x = c + Math.cos(ang) * m * 0.3, y = c - 1 + Math.sin(ang) * m * 0.25;
      for (let k = 0; k < RL * 0.85; k++) {
        x += Math.cos(ang + Math.sin(k * 0.35 + ang * 3) * 0.9); y += Math.sin(ang + Math.sin(k * 0.35 + ang * 3) * 0.9);
        if (d(Math.round(x), Math.round(y)) > 0.95) break;
        L.px(x, y, k < RL * 0.35 ? C.naranja : C.rojo);
        if (RL > 24) L.px(x + 1, y, C.granate);
      }
    }
    for (let i = 0; i < area / 60; i++) { const s = sitio(2, 2, 0.92, 0.55); if (s) roca(L, s[0], s[1] + 1); }
  } else if (b === 'desierto') {
    for (let y = 0; y < tam; y++) for (let x = 0; x < tam; x++)
      if (L.get(x, y) === C.arena && Math.round(y + Math.sin(x / 4) * 2) % 7 === 0 && x % 9 > 1) L.px(x, y, C.maderaClara);
    const oa = sitio(Math.round(RL * 0.5), Math.round(RL * 0.35), 0.5);
    if (oa) {
      const [ox, oy] = oa, w = Math.round(RL * 0.5), h = Math.round(RL * 0.35);
      L.elipse(ox + w / 2, oy + h / 2, w / 2, h / 2, C.mar); L.elipse(ox + w / 2 - 1, oy + h / 2 - 1, w / 4, h / 4, C.bajio);
      palmera(L, ox - 1, oy + h); palmera(L, ox + w, oy + h - 1);
    }
    for (let i = 0; i < Math.max(1, area / 600); i++) { const s = sitio(5, 5, 0.7, 0.3); if (s) casa(L, s[0], s[1] + 1, C.arena, C.pergamino); }
    for (let i = 0; i < area / 70; i++) { const s = sitio(3, 4, 0.88); if (s) cactus(L, s[0] + 1, s[1] + 3); }
  } else if (b === 'ruinas') {
    const s = sitio(14, 10, 0.5);
    if (s) {
      const [tx, ty] = s;
      L.rect(tx, ty + 2, 14, 7, C.piedra); L.rect(tx + 1, ty + 3, 12, 5, C.niebla);
      L.rect(tx + 5, ty + 5, 4, 3, C.tinta);
      for (const cx of [tx, tx + 4, tx + 9, tx + 12]) columna(L, cx, ty + 2, r() < 0.4);
      L.px(tx + 7, ty + 1, C.oro);
    }
    for (let i = 0; i < area / 80; i++) { const s2 = sitio(2, 5, 0.85); if (s2) columna(L, s2[0], s2[1] + 4, r() < 0.6); }
    for (let i = 0; i < area / 30; i++) { const s2 = sitio(5, 5, 0.9); if (s2) copa(L, s2[0] + 2, s2[1] + 2); }
  } else if (b === 'flotante') {
    const s = sitio(10, 9, 0.45);
    if (s) {
      L.rect(s[0], s[1] + 2, 10, 6, C.niebla); L.rect(s[0] - 1, s[1] + 1, 12, 2, C.hueso); L.rect(s[0] + 4, s[1] + 5, 2, 3, C.tinta);
      L.rect(s[0] + 4, s[1] - 1, 2, 2, C.oro);
    }
    for (let i = 0; i < area / 35; i++) { const s2 = sitio(5, 5, 0.88); if (s2) copa(L, s2[0] + 2, s2[1] + 2, C.hoja); }
  }
  return L;
}

/** Sprites de islas cacheados por tamaño (potencias de 2: 16..256). */
const cache = new Map<string, HTMLCanvasElement>();
export function spriteIsla(isla: IslaParaDibujar, tamDeseado: number): HTMLCanvasElement {
  const tam = Math.min(256, Math.max(16, 2 ** Math.ceil(Math.log2(Math.max(16, tamDeseado)))));
  const k = `${isla.id}:${tam}`;
  let cv = cache.get(k);
  if (!cv) {
    const L = dibujarIslaMapa(isla, tam);
    cv = document.createElement('canvas');
    cv.width = tam; cv.height = tam;
    cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), tam, tam), 0, 0);
    cache.set(k, cv);
    if (cache.size > 400) cache.delete(cache.keys().next().value!);
  }
  return cv;
}
