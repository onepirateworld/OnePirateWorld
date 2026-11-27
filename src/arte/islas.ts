import { Lienzo, azar } from './lienzo';
import { C } from './paleta';

// Islas 64x64 vistas desde arriba (con su anillo de aguas poco profundas),
// listas para colocarse sobre el mar del mapa 2D.

export type Bioma = 'tropical' | 'nevada' | 'volcanica' | 'desierto' | 'flotante';

/** Forma orgánica: radio que varía con el ángulo. */
function forma(semilla: number) {
  const r = azar(semilla);
  const armonicos = [2, 3, 5, 7].map((k) => ({ k, a: (r() * 0.12) / (k / 2), f: r() * Math.PI * 2 }));
  return (ang: number) => 1 + armonicos.reduce((s, h) => s + h.a * Math.sin(h.k * ang + h.f), 0);
}

function palmera(L: Lienzo, x: number, y: number) {
  L.linea(x, y, x + 1, y - 4, C.maderaClara);
  const hx = x + 1, hy = y - 5;
  for (const [dx, dy] of [[-2, 0], [-1, -1], [1, -1], [2, 0], [0, 0], [-3, 1], [3, 1], [0, -1]]) L.px(hx + dx, hy + dy, C.brote);
  L.px(hx - 1, hy, C.hoja); L.px(hx + 1, hy, C.hoja);
  L.px(hx, hy + 1, C.corteza);
}
function copa(L: Lienzo, x: number, y: number) {
  L.elipse(x, y, 2.6, 2.2, C.selva);
  L.px(x - 1, y - 1, C.brote); L.px(x, y - 1, C.brote); L.px(x - 1, y, C.hoja);
  L.px(x + 1, y + 1, C.tinta);
}
function pino(L: Lienzo, x: number, y: number) {
  L.px(x, y - 4, C.hueso);
  L.rect(x - 1, y - 3, 3, 1, C.selva); L.px(x, y - 3, C.hueso);
  L.rect(x - 2, y - 2, 5, 1, C.selva); L.px(x - 1, y - 2, C.hueso);
  L.rect(x - 2, y - 1, 5, 1, C.selva);
  L.px(x, y, C.corteza);
}
function cactus(L: Lienzo, x: number, y: number) {
  L.rect(x, y - 4, 1, 5, C.hoja);
  L.px(x - 1, y - 2, C.hoja); L.px(x - 1, y - 3, C.hoja);
  L.px(x + 1, y - 1, C.hoja); L.px(x + 1, y - 2, C.hoja);
  L.px(x, y - 4, C.brote);
}
function roca(L: Lienzo, x: number, y: number) {
  L.rect(x, y, 2, 1, C.piedra); L.px(x, y - 1, C.niebla);
}

export function dibujarIsla(bioma: Bioma, semilla: number): Lienzo {
  if (bioma === 'flotante') return islaFlotante(semilla);
  const L = new Lienzo(64, 64);
  const r = azar(semilla * 31 + 7);
  const radio = forma(semilla);
  const cx = 32, cy = 32, R = 25;
  const grano = azar(semilla * 97 + 1);

  const orilla = bioma === 'volcanica' ? C.sombraVioleta : bioma === 'nevada' ? C.piedra : bioma === 'desierto' ? C.pergamino : C.arena;
  const tierra = { tropical: C.hoja, nevada: C.hueso, volcanica: C.piedra, desierto: C.arena }[bioma];
  const tierraOscura = { tropical: C.selva, nevada: C.niebla, volcanica: C.sombraVioleta, desierto: C.maderaClara }[bioma];

  // Capas: bajío, espuma, orilla, tierra
  for (let y = 0; y < 64; y++)
    for (let x = 0; x < 64; x++) {
      const dx = x + 0.5 - cx, dy = y + 0.5 - cy;
      const d = Math.hypot(dx, dy) / (R * radio(Math.atan2(dy, dx)));
      if (d < 0.72) {
        // Interior con textura de puntos (dither suave)
        const ruido = grano() < 0.06;
        L.px(x, y, ruido || d > 0.68 ? tierraOscura : tierra);
      } else if (d < 0.86) L.px(x, y, orilla);
      else if (d < 0.92) L.px(x, y, (x + y) % 2 ? C.espuma : C.bajio);
      else if (d < 1.12) L.px(x, y, C.bajio);
      else if (d < 1.2 && (x + y) % 2) L.px(x, y, C.bajio);
    }

  const puntoInterior = (max = 0.55) => {
    for (;;) {
      const a = r() * Math.PI * 2, d = Math.sqrt(r()) * max;
      const x = Math.round(cx + Math.cos(a) * d * R * radio(a)), y = Math.round(cy + Math.sin(a) * d * R * radio(a));
      if (Math.hypot(x - cx, y - cy) > 6 || bioma === 'tropical') return [x, y] as const;
    }
  };

  if (bioma === 'tropical') {
    // Muelle y cabaña
    L.rect(cx + 14, cy + 2, 10, 2, C.madera); L.px(cx + 16, cy + 4, C.corteza); L.px(cx + 21, cy + 4, C.corteza);
    L.rect(cx + 6, cy - 2, 6, 4, C.maderaClara); L.rect(cx + 5, cy - 4, 8, 2, C.naranja); L.px(cx + 8, cy + 1, C.corteza);
    for (let i = 0; i < 16; i++) { const [x, y] = puntoInterior(0.58); if (Math.abs(x - cx - 8) > 6 || Math.abs(y - cy) > 5) copa(L, x, y); }
    palmera(L, cx - 4, cy + 15); palmera(L, cx + 3, cy - 14); palmera(L, cx - 15, cy - 2);
  } else if (bioma === 'nevada') {
    // Montaña central
    L.poligono([[cx - 10, cy + 5], [cx, cy - 10], [cx + 10, cy + 5]], C.piedra);
    L.poligono([[cx, cy - 10], [cx + 10, cy + 5], [cx + 1, cy + 5]], C.sombraVioleta);
    L.poligono([[cx - 5, cy - 2], [cx, cy - 10], [cx + 5, cy - 2], [cx + 2, cy - 4], [cx, cy - 1], [cx - 2, cy - 4]], C.hueso);
    L.px(cx - 1, cy - 8, C.espuma);
    for (let i = 0; i < 12; i++) { const [x, y] = puntoInterior(0.6); pino(L, x, y); }
  } else if (bioma === 'volcanica') {
    L.elipse(cx, cy, 11, 9, C.sombraVioleta);
    L.elipse(cx, cy - 1, 8, 6, C.piedra);
    L.elipse(cx, cy - 1, 4, 3, C.granate);
    L.elipse(cx, cy - 1, 3, 2, C.naranja);
    L.px(cx - 1, cy - 2, C.limon); L.px(cx, cy - 1, C.oro);
    // Ríos de lava
    for (const ang of [0.6, 2.4, 4.2]) {
      let x = cx + Math.cos(ang) * 3, y = cy - 1 + Math.sin(ang) * 2;
      for (let k = 0; k < 13; k++) { x += Math.cos(ang + Math.sin(k) * 0.4); y += Math.sin(ang + Math.sin(k) * 0.4); L.px(x, y, k < 6 ? C.naranja : C.rojo); }
    }
    for (let i = 0; i < 8; i++) { const [x, y] = puntoInterior(0.62); if (Math.hypot(x - cx, y - cy) > 11) roca(L, x, y); }
  } else if (bioma === 'desierto') {
    // Dunas
    for (let y = 0; y < 64; y++) for (let x = 0; x < 64; x++)
      if (L.get(x, y) === C.arena && (Math.round(y + Math.sin(x / 4) * 2) % 7 === 0) && (x % 9 > 1)) L.px(x, y, C.maderaClara);
    // Oasis
    L.elipse(cx - 4, cy + 2, 4, 3, C.mar); L.elipse(cx - 5, cy + 1, 2, 1, C.bajio);
    palmera(L, cx - 9, cy + 2); palmera(L, cx + 1, cy + 1);
    for (let i = 0; i < 7; i++) { const [x, y] = puntoInterior(0.6); if (Math.hypot(x - cx + 4, y - cy - 2) > 8) cactus(L, x, y); }
    // Ruinas de una torre
    L.rect(cx + 6, cy - 9, 4, 4, C.piedra); L.rect(cx + 7, cy - 11, 2, 2, C.niebla); L.px(cx + 7, cy - 7, C.tinta);
  }
  return L;
}

function islaFlotante(semilla: number): Lienzo {
  const L = new Lienzo(64, 64);
  const r = azar(semilla);
  // Base de roca en forma de cono invertido
  L.poligono([[10, 28], [54, 28], [44, 40], [36, 54], [30, 58], [24, 44]], C.piedra);
  for (let y = 30; y < 58; y += 3) for (let x = 12; x < 52; x++) if ((x * 7 + y * 3) % 11 === 0) L.pxSobre(x, y, C.sombraVioleta);
  // Raíces colgantes
  for (const x of [18, 27, 40, 47]) { const largo = 4 + Math.floor(r() * 6); L.linea(x, 32, x + (r() > 0.5 ? 1 : -1), 32 + largo, C.corteza); }
  // Cascada
  L.rect(45, 26, 2, 26, C.bajio); L.px(46, 30, C.espuma); L.px(45, 38, C.espuma); L.px(46, 46, C.espuma);
  // Cima de hierba
  L.elipse(32, 26, 23, 6, C.hoja);
  L.elipse(31, 25, 20, 4, C.brote);
  L.elipse(44, 25, 3, 2, C.mar); // laguna que alimenta la cascada
  // Templo de piedra
  L.rect(24, 15, 10, 9, C.niebla); L.rect(23, 14, 12, 2, C.hueso); L.rect(27, 19, 3, 5, C.tinta);
  L.px(25, 17, C.piedra); L.px(32, 17, C.piedra);
  L.rect(28, 11, 2, 3, C.oro);
  palmera(L, 16, 25); palmera(L, 38, 24);
  L.volumen({ luz: false, excluir: [C.bajio, C.espuma, C.tinta, C.corteza] });
  L.contorno(C.tinta);
  // Nubes alrededor (sin contorno)
  for (const [x, y, w] of [[2, 44, 10], [48, 52, 12], [6, 12, 8]] as const) {
    L.elipse(x + w / 2, y, w / 2, 2, C.hueso); L.elipse(x + w / 2 + 2, y - 1, w / 4, 2, C.hueso);
    L.rect(x + 1, y + 1, w - 2, 1, C.espuma);
  }
  return L;
}

export const ISLAS_PRUEBA: { id: string; nombre: string; bioma: Bioma; semilla: number; descripcion: string }[] = [
  { id: 'isla-tropical', nombre: 'Cayo Palmera', bioma: 'tropical', semilla: 3, descripcion: 'Tropical. Muelle de madera y cabaña de pescadores.' },
  { id: 'isla-nevada', nombre: 'Escarcha Alta', bioma: 'nevada', semilla: 11, descripcion: 'Nevada. Pinos y un pico helado en el centro.' },
  { id: 'isla-volcanica', nombre: 'Fragua Negra', bioma: 'volcanica', semilla: 5, descripcion: 'Volcánica. Ríos de lava y playas de piedra oscura.' },
  { id: 'isla-desierto', nombre: 'Dunas de Sal', bioma: 'desierto', semilla: 8, descripcion: 'Desierto. Oasis y una torre en ruinas.' },
  { id: 'isla-flotante', nombre: 'Peñón del Cielo', bioma: 'flotante', semilla: 2, descripcion: 'Flotante. Un templo antiguo sobre una roca que vuela.' },
];
