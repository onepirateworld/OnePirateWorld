import { Lienzo } from './lienzo';
import { C, LUZ } from './paleta';

// Sprites de frutas 24x24. Cada fruta tiene una silueta y un dibujo propio.

// --- Marca común de las frutas del poder: vetas claras, tallo rizado con dos hojas y destellos

/** Fila más alta del cuerpo en el centro de la fruta. */
function cima(L: Lienzo) {
  for (let y = 0; y < L.h; y++) for (let x = 10; x <= 13; x++) if (L.get(x, y)) return y;
  return 6;
}
/** Vetas: un nervio central que baja y dos ramas, en un tono más claro que la fruta. */
function vetas(L: Lienzo, top: number) {
  const aclarar = (x: number, y: number) => { const c = L.get(x, y); if (c && c !== C.tinta && c !== C.corteza) L.px(x, y, LUZ[c]); };
  const fin = top + 11;
  for (let y = top + 2; y < fin; y++) aclarar(12 + Math.round(Math.sin(y * 0.6) * 0.6), y);
  for (let i = 0; i < 4; i++) { aclarar(11 - i, top + 4 + i); aclarar(13 + i, top + 6 + i); }
}
/** Tallo rizado con una hoja grande a la izquierda y una pequeña a la derecha. */
function corona(L: Lienzo, top: number) {
  const t = Math.max(3, top);
  for (let y = t - 1; y >= t - 3; y--) L.px(12, y, C.corteza);
  L.px(13, t - 4, C.corteza); L.px(14, t - 4, C.corteza); L.px(14, t - 3, C.corteza);   // rizo
  L.rect(8, t - 3, 4, 1, C.hoja); L.rect(9, t - 4, 3, 1, C.hoja); L.px(9, t - 4, C.brote); L.px(10, t - 4, C.brote);
  L.px(13, t - 2, C.hoja); L.px(14, t - 2, C.hoja); L.px(15, t - 2, C.brote);
}
function destellos(L: Lienzo) {
  for (const [x, y] of [[3, 5], [20, 18]]) {
    if (L.get(x, y)) continue;
    L.px(x, y, C.limon);
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (!L.get(x + dx, y + dy)) L.px(x + dx, y + dy, C.hueso);
  }
}

function terminar(L: Lienzo, excluir: number[] = [], conCorona = true) {
  const top = cima(L);
  L.volumen({ excluir: [C.tinta, C.corteza, ...excluir] });
  vetas(L, top);
  if (conCorona) corona(L, top);
  L.contorno(C.tinta);
  destellos(L);
}

const DIBUJOS: Record<string, () => Lienzo> = {
  muelle() {
    const L = new Lienzo(24, 24);
    // Cuerpo en espiral: anillos apilados y desplazados
    const anillos = [[12, 7, 5], [11, 10, 6], [13, 13, 7], [11, 16, 7], [12, 19, 5]];
    anillos.forEach(([x, y, r], i) => {
      L.elipse(x, y, r, 2.2, i % 2 ? C.hoja : C.brote);
    });
    anillos.forEach(([x, y, r]) => { L.linea(x - r + 1, y + 1, x + r - 2, y + 1, C.selva); });
    L.px(9, 6, C.limon); L.px(8, 9, C.limon);
    terminar(L, [C.selva, C.limon]);
    return L;
  },
  espejo() {
    const L = new Lienzo(24, 24);
    // Fruta tallada en facetas, como una gema
    L.poligono([[12, 4], [19, 9], [19, 16], [12, 21], [5, 16], [5, 9]], C.lila);
    L.poligono([[12, 4], [19, 9], [12, 12]], C.hueso);
    L.poligono([[5, 9], [12, 4], [12, 12]], C.espuma);
    L.poligono([[12, 12], [19, 16], [12, 21]], C.violeta);
    L.poligono([[5, 16], [12, 12], [12, 21]], C.lila);
    L.linea(5, 9, 19, 16, C.violeta); L.linea(19, 9, 5, 16, C.lila);
    L.px(8, 8, C.hueso); L.px(9, 7, C.hueso); L.px(7, 9, C.hueso);
    terminar(L, [C.hueso, C.espuma, C.violeta, C.lila]);
    return L;
  },
  eco() {
    const L = new Lienzo(24, 24);
    // Forma de campana con anillos de sonido grabados
    L.poligono([[8, 6], [16, 6], [18, 12], [21, 19], [3, 19], [6, 12]], C.oro);
    L.elipse(12, 6, 4, 2, C.oro);
    for (const y of [10, 14, 17]) L.linea(5 + (y - 10) * 0.3, y, 19 - (y - 10) * 0.3, y, C.naranja);
    L.rect(4, 19, 16, 2, C.naranja);
    L.rect(11, 21, 2, 1, C.granate); // badajo
    L.px(8, 8, C.limon); L.px(7, 11, C.limon);
    terminar(L, [C.limon]);
    return L;
  },
  raiz() {
    const L = new Lienzo(24, 24);
    // Tubérculo alargado con raíces abajo y brote arriba
    L.elipse(12, 12, 5, 7, C.maderaClara);
    for (const [x, y] of [[10, 9], [14, 12], [10, 15], [13, 7]]) L.px(x, y, C.madera);
    L.linea(10, 18, 7, 22, C.madera); L.linea(12, 19, 12, 23, C.madera); L.linea(14, 18, 17, 21, C.madera); L.px(18, 22, C.madera);
    L.linea(8, 16, 4, 18, C.madera);
    L.rect(11, 3, 2, 3, C.hoja); L.px(10, 2, C.brote); L.px(9, 2, C.brote); L.px(13, 2, C.brote); L.px(14, 1, C.brote);
    terminar(L, [C.madera], false);   // la raíz ya tiene su brote
    return L;
  },
  jaguar() {
    const L = new Lienzo(24, 24);
    // Redonda, con manchas de roseta y dos hojas como orejas
    L.elipse(12, 13, 8, 7.5, C.naranja);
    L.poligono([[6, 8], [7, 3], [10, 7]], C.hoja);
    L.poligono([[14, 7], [17, 3], [18, 8]], C.hoja);
    for (const [x, y] of [[8, 11], [14, 10], [11, 15], [16, 15], [7, 16], [12, 19]]) {
      L.px(x, y, C.corteza); L.px(x + 1, y, C.corteza); L.px(x, y + 1, C.corteza); L.px(x + 2, y + 1, C.corteza); L.px(x + 1, y + 2, C.corteza);
      L.px(x + 1, y + 1, C.oro);
    }
    L.px(9, 8, C.limon); L.px(8, 9, C.limon);
    terminar(L, [C.limon, C.oro]);
    return L;
  },
  pulpo() {
    const L = new Lienzo(24, 24);
    // Bulbo con cuatro tentáculos ondulados
    L.elipse(12, 9, 7, 6, C.violeta);
    for (const x0 of [6, 10, 14, 18]) {
      for (let j = 0; j < 9; j++) {
        const x = x0 + Math.round(Math.sin(j * 0.9 + x0) * 1.2) - (x0 > 12 ? 1 : 0);
        L.rect(x - 1 + (j > 5 ? 1 : 0), 13 + j, j > 5 ? 1 : 2, 1, C.violeta);
        if (j % 3 === 1) L.px(x, 13 + j, C.coral);
      }
    }
    L.px(9, 7, C.lila); L.px(10, 6, C.lila); L.px(15, 8, C.coral); L.px(9, 11, C.coral);
    terminar(L, [C.coral, C.lila]);
    return L;
  },
  halcon() {
    const L = new Lienzo(24, 24);
    // Pera puntiaguda con barras como plumas y hojas largas como alas
    L.elipse(12, 15, 6, 6, C.niebla);
    L.poligono([[8, 12], [12, 4], [16, 12]], C.niebla);
    for (const y of [9, 12, 15, 18]) for (let x = 7; x < 18; x++) if ((x + y) % 4 === 0) L.pxSobre(x, y, C.piedra);
    L.poligono([[5, 6], [11, 5], [8, 8]], C.hoja);
    L.poligono([[13, 5], [20, 4], [16, 8]], C.hoja);
    L.px(10, 10, C.hueso); L.px(9, 12, C.hueso); L.px(11, 21, C.oro); L.px(12, 21, C.oro);
    terminar(L, [C.piedra, C.hueso]);
    return L;
  },
  ceniza() {
    const L = new Lienzo(24, 24);
    // Esfera gris con grietas incandescentes y humo
    L.elipse(12, 14, 7.5, 7, C.piedra);
    const grietas: [number, number, number, number][] = [[12, 8, 10, 13], [10, 13, 13, 17], [13, 17, 11, 20], [10, 13, 6, 14], [13, 17, 17, 16], [17, 16, 18, 12]];
    for (const [a, b, c, d] of grietas) L.linea(a, b, c, d, C.naranja);
    L.px(10, 13, C.limon); L.px(13, 17, C.limon); L.px(12, 15, C.oro);
    L.px(8, 10, C.niebla); L.px(9, 9, C.niebla);
    terminar(L, [C.naranja, C.limon, C.oro]);
    // Humo (sin contorno), a un lado del tallo
    L.px(18, 6, C.niebla); L.px(19, 5, C.niebla); L.px(19, 4, C.niebla); L.px(18, 3, C.niebla);
    return L;
  },
  niebla() {
    const L = new Lienzo(24, 24);
    // Fruta difusa: núcleo sólido y bordes que se deshacen en puntos
    L.elipse(12, 13, 6, 6, C.espuma);
    L.elipse(11, 12, 4, 4, C.hueso);
    L.px(10, 10, C.hueso);
    const top = cima(L);
    L.volumen({ luz: false, excluir: [C.hueso] });
    vetas(L, top);
    corona(L, top);
    L.contorno(C.bajio);
    for (let y = 4; y < 23; y++) for (let x = 3; x < 22; x++) {
      const d = Math.hypot(x - 12, y - 13);
      if (d > 7 && d < 10 && (x * 3 + y * 5) % 7 === 0) L.px(x, y, C.bajio);
    }
    // Volutas de niebla alrededor
    L.linea(3, 9, 7, 8, C.espuma); L.linea(17, 18, 21, 17, C.espuma); L.linea(16, 5, 19, 6, C.espuma);
    destellos(L);
    return L;
  },
  ambar() {
    const L = new Lienzo(24, 24);
    // Gota de resina con un insecto atrapado dentro
    L.elipse(12, 15, 6.5, 6.5, C.oro);
    L.poligono([[7, 12], [12, 3], [17, 12]], C.oro);
    L.elipse(13, 16, 4, 4, C.naranja);
    // Insecto
    L.rect(12, 15, 2, 3, C.tinta); L.px(11, 14, C.tinta); L.px(14, 14, C.tinta);
    L.px(11, 17, C.corteza); L.px(14, 17, C.corteza); L.px(12, 14, C.granate);
    L.px(9, 10, C.hueso); L.px(9, 11, C.limon); L.px(8, 13, C.limon);
    terminar(L, [C.hueso, C.naranja]);
    return L;
  },
};

export function dibujarFruta(id: string): Lienzo {
  const f = DIBUJOS[id];
  if (!f) throw new Error(`Fruta sin dibujo: ${id}`);
  return f();
}

/** Silueta para el compendio (frutas aún no encontradas). */
export function siluetaFruta(id: string): Lienzo {
  const L = dibujarFruta(id);
  for (let i = 0; i < L.d.length; i++) if (L.d[i]) L.d[i] = L.d[i] === 1 ? 1 : 3;
  return L;
}
