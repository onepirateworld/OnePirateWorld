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
function corona(L: Lienzo, top: number, cx = 12) {
  const t = Math.max(3, top), d = cx - 12;
  for (let y = t - 1; y >= t - 3; y--) L.px(12 + d, y, C.corteza);
  L.px(13 + d, t - 4, C.corteza); L.px(14 + d, t - 4, C.corteza); L.px(14 + d, t - 3, C.corteza);   // rizo
  L.rect(8 + d, t - 3, 4, 1, C.hoja); L.rect(9 + d, t - 4, 3, 1, C.hoja); L.px(9 + d, t - 4, C.brote); L.px(10 + d, t - 4, C.brote);
  L.px(13 + d, t - 2, C.hoja); L.px(14 + d, t - 2, C.hoja); L.px(15 + d, t - 2, C.brote);
}
/** Fila más alta del cuerpo en una columna dada. */
function cimaEn(L: Lienzo, cx: number) {
  for (let y = 0; y < L.h; y++) for (let x = cx - 1; x <= cx + 1; x++) if (L.get(x, y)) return y;
  return 6;
}
function destellos(L: Lienzo) {
  for (const [x, y] of [[3, 5], [20, 18]]) {
    if (L.get(x, y)) continue;
    L.px(x, y, C.limon);
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (!L.get(x + dx, y + dy)) L.px(x + dx, y + dy, C.hueso);
  }
}

function terminar(L: Lienzo, excluir: number[] = [], conCorona: boolean | number = true) {
  const top = cima(L);
  L.volumen({ excluir: [C.tinta, C.corteza, ...excluir] });
  vetas(L, top);
  // conCorona puede ser la columna donde va el tallo (para formas raras)
  if (conCorona !== false) { const cx = typeof conCorona === 'number' ? conCorona : 12; corona(L, typeof conCorona === 'number' ? cimaEn(L, cx) : top, cx); }
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
  // ===================== Talladas nuevas =====================
  brujula() {
    const L = new Lienzo(24, 24);
    // Esfera de brújula: aro de latón, esfera clara y una aguja grande en rombo
    L.elipse(12, 13, 8, 8, C.oro);
    L.elipse(12, 13, 6, 6, C.pergamino);
    L.poligono([[12, 6], [14, 13], [10, 13]], C.rojo);          // aguja norte
    L.poligono([[12, 20], [14, 13], [10, 13]], C.azulMarina);   // aguja sur
    for (const [x, y] of [[6, 13], [18, 13], [12, 7], [12, 19]]) L.pxSobre(x, y, C.madera);   // marcas N S E O
    L.px(12, 13, C.hueso);
    L.px(8, 9, C.hueso);
    terminar(L, [C.rojo, C.azulMarina, C.hueso, C.pergamino]);
    return L;
  },
  vela() {
    const L = new Lienzo(24, 24);
    // Fruta con forma de vela hinchada y costuras de lona
    L.poligono([[7, 6], [17, 6], [20, 13], [17, 20], [7, 20], [9, 13]], C.pergamino);
    for (const y of [9, 13, 17]) L.linea(8 + (y === 13 ? 1 : 0), y, 18 + (y === 13 ? 1 : 0), y, C.arena);
    L.linea(7, 6, 7, 20, C.madera);                               // mástil
    L.px(16, 8, C.hueso); L.px(17, 9, C.hueso);
    terminar(L, [C.madera, C.hueso]);
    return L;
  },
  coral() {
    const L = new Lienzo(24, 24);
    // Cuerpo redondo con ramas de coral que brotan
    L.elipse(12, 15, 6.5, 6, C.coral);
    for (const [x0, y0, x1, y1] of [[8, 11, 5, 6], [12, 9, 12, 5], [16, 11, 19, 6], [6, 8, 4, 8], [18, 8, 20, 9]] as const) L.linea(x0, y0, x1, y1, C.coral);
    for (const [x, y] of [[9, 14], [14, 13], [11, 18], [16, 17], [8, 17]]) L.px(x, y, C.magenta);
    L.px(9, 12, C.hueso);
    terminar(L, [C.magenta, C.hueso]);
    return L;
  },
  nudo() {
    const L = new Lienzo(24, 24);
    // Dos lazos de cuerda trenzados formando un nudo
    L.elipse(9, 12, 5, 5, C.maderaClara);
    L.elipse(15, 14, 5, 5, C.maderaClara);
    L.elipse(9, 12, 2.5, 2.5, C.T);
    L.elipse(15, 14, 2.5, 2.5, C.T);
    for (let i = 0; i < 24; i += 2) for (let j = 0; j < 24; j++) if (L.get(i, j) === C.maderaClara && (i + j) % 4 === 0) L.px(i, j, C.madera);
    L.linea(12, 18, 10, 22, C.maderaClara); L.linea(13, 18, 15, 22, C.maderaClara);   // cabos sueltos
    terminar(L, [C.madera]);
    return L;
  },
  lija() {
    const L = new Lienzo(24, 24);
    // Fruta cuadrada y rugosa, con granitos por toda la piel
    L.rect(6, 7, 12, 13, C.arena);
    L.rect(7, 6, 10, 15, C.arena);
    for (let y = 7; y < 20; y++) for (let x = 7; x < 18; x++) if ((x * 7 + y * 13) % 5 === 0) L.px(x, y, C.madera);
    L.px(8, 8, C.pergamino); L.px(9, 8, C.pergamino);
    terminar(L, [C.madera, C.pergamino]);
    return L;
  },
  esponja() {
    const L = new Lienzo(24, 24);
    // Bloque blando y amarillo lleno de poros
    L.elipse(12, 14, 7.5, 6.5, C.limon);
    L.rect(6, 10, 12, 9, C.limon);
    for (const [x, y, r] of [[9, 12, 1], [14, 11, 1.4], [11, 16, 1.2], [16, 16, 1], [7, 16, 0.8], [13, 19, 0.8]] as const) L.elipse(x, y, r, r, C.oro);
    L.px(8, 10, C.hueso);
    terminar(L, [C.oro, C.hueso]);
    return L;
  },
  pendulo() {
    const L = new Lienzo(24, 24);
    // Gota que cuelga de un hilo, con anillos dorados
    L.elipse(12, 15, 6, 6, C.oro);
    L.poligono([[8, 12], [12, 6], [16, 12]], C.oro);
    L.linea(6, 14, 18, 14, C.naranja); L.linea(7, 17, 17, 17, C.naranja);
    L.px(12, 21, C.naranja); L.px(9, 11, C.limon); L.px(9, 12, C.limon);
    terminar(L, [C.naranja, C.limon]);
    // Estela del balanceo (sin contorno)
    for (const [x, y] of [[3, 15], [4, 18], [20, 15], [19, 18]]) L.px(x, y, C.arena);
    return L;
  },
  escama() {
    const L = new Lienzo(24, 24);
    // Ovalada, cubierta de escamas en media luna bien marcadas
    L.elipse(12, 13, 7, 7.5, C.bajio);
    for (let fila = 0; fila < 5; fila++) {
      const y = 8 + fila * 3;
      for (let x = 6 + (fila % 2) * 2; x < 19; x += 4) {
        if (L.get(x, y) !== C.bajio) continue;
        L.pxSobre(x - 1, y, C.marHondo); L.pxSobre(x, y + 1, C.marHondo); L.pxSobre(x + 1, y + 1, C.marHondo); L.pxSobre(x + 2, y, C.marHondo);
        L.pxSobre(x, y, C.espuma);
      }
    }
    terminar(L, [C.marHondo, C.espuma]);
    return L;
  },
  anzuelo() {
    const L = new Lienzo(24, 24);
    // Fruta en forma de anzuelo: ojal arriba, caña recta y curva en J con lengüeta
    L.elipse(15, 6, 2.6, 2.6, C.niebla); L.px(15, 6, C.T);      // ojal
    L.rect(14, 8, 3, 9, C.niebla);                               // caña
    for (let k = 0; k <= 22; k++) {                              // la curva de la J
      const a = (k / 22) * Math.PI * 1.15;
      const x = 10.5 + Math.cos(a) * 5, y = 16.5 + Math.sin(a) * 4.5;
      L.rect(Math.round(x) - 1, Math.round(y) - 1, 3, 3, C.niebla);
    }
    L.poligono([[5, 10], [8, 15], [5, 15]], C.niebla);          // punta con lengüeta
    L.px(15, 10, C.hueso); L.px(15, 11, C.hueso); L.px(12, 20, C.hueso);
    terminar(L, [C.hueso], 15);
    return L;
  },
  // ===================== Salvajes nuevas =====================
  tiburon() {
    const L = new Lienzo(24, 24);
    // Cabeza de martillo ancha arriba, cuerpo de aleta y ojos en los extremos
    L.rect(3, 9, 18, 4, C.piedra);
    L.elipse(12, 15, 5, 6, C.piedra);
    L.poligono([[11, 9], [14, 4], [15, 9]], C.piedra);         // aleta dorsal
    L.rect(9, 16, 6, 3, C.niebla);                              // vientre claro
    L.px(4, 10, C.tinta); L.px(19, 10, C.tinta);
    for (const x of [9, 11, 13]) L.px(x, 19, C.hueso);         // dientes
    terminar(L, [C.niebla, C.hueso]);
    return L;
  },
  manta() {
    const L = new Lienzo(24, 24);
    // Rombo ancho como alas de manta, con cola larga
    L.poligono([[2, 13], [12, 7], [22, 13], [12, 17]], C.marHondo);
    L.elipse(12, 12, 3, 3, C.marHondo);
    for (const [x, y] of [[8, 12], [16, 12], [12, 14]]) L.px(x, y, C.mar);
    L.linea(12, 17, 13, 23, C.marHondo);
    L.px(10, 10, C.bajio); L.px(14, 10, C.bajio);
    terminar(L, [C.mar, C.bajio]);
    return L;
  },
  tortuga() {
    const L = new Lienzo(24, 24);
    // Cúpula de caparazón con placas hexagonales
    L.elipse(12, 14, 8, 6.5, C.selva);
    L.rect(4, 14, 16, 4, C.selva);
    for (const [x, y] of [[12, 11], [8, 14], [16, 14], [12, 16]]) L.poligono([[x - 2, y], [x - 1, y - 2], [x + 1, y - 2], [x + 2, y], [x + 1, y + 2], [x - 1, y + 2]], C.hoja);
    L.rect(5, 18, 14, 2, C.arena);                              // borde del peto
    L.px(9, 10, C.brote);
    terminar(L, [C.hoja, C.arena, C.brote]);
    return L;
  },
  rinoceronte() {
    const L = new Lienzo(24, 24);
    // Fruta gorda y gris con un cuerno curvo delante
    L.elipse(12, 15, 7.5, 6, C.piedra);
    L.poligono([[15, 12], [21, 6], [18, 13]], C.hueso);         // cuerno
    L.poligono([[13, 11], [16, 8], [16, 12]], C.niebla);        // cuerno pequeño
    for (const y of [14, 17]) L.linea(6, y, 17, y + 1, C.sombraVioleta);   // pliegues de la piel
    L.px(16, 14, C.tinta);
    terminar(L, [C.hueso, C.niebla, C.sombraVioleta]);
    return L;
  },
  escorpion() {
    const L = new Lienzo(24, 24);
    // Cuerpo segmentado con cola curvada y aguijón arriba
    L.elipse(12, 16, 5.5, 4.5, C.oro);
    for (const y of [14, 17]) L.linea(7, y, 17, y, C.naranja);
    const cola: [number, number][] = [[16, 13], [18, 11], [19, 8], [18, 5], [16, 4]];
    for (const [x, y] of cola) L.elipse(x, y, 1.4, 1.4, C.oro);
    L.poligono([[15, 3], [13, 5], [16, 5]], C.magenta);         // aguijón
    L.poligono([[3, 14], [7, 13], [6, 16]], C.oro); L.poligono([[3, 18], [7, 17], [6, 19]], C.oro);   // pinzas
    terminar(L, [C.naranja, C.magenta], 10);
    return L;
  },
  cangrejo() {
    const L = new Lienzo(24, 24);
    // Ancha y roja, con dos pinzas a los lados y ojos saltones
    L.elipse(12, 15, 7, 5, C.rojo);
    L.elipse(4, 10, 2.5, 2.5, C.rojo); L.elipse(20, 10, 2.5, 2.5, C.rojo);
    L.px(4, 9, C.T); L.px(20, 9, C.T);                          // pinzas abiertas
    L.linea(6, 13, 5, 12, C.rojo); L.linea(18, 13, 19, 12, C.rojo);
    for (const x of [7, 10, 14, 17]) L.linea(x, 19, x - (x < 12 ? 1 : -1), 21, C.granate);   // patas
    L.px(10, 11, C.hueso); L.px(14, 11, C.hueso); L.px(10, 12, C.tinta); L.px(14, 12, C.tinta);
    terminar(L, [C.granate, C.hueso]);
    return L;
  },
  camaleon() {
    const L = new Lienzo(24, 24);
    // Fruta que cambia de color: franjas de verdes y una cola en espiral
    L.elipse(12, 13, 7, 6.5, C.hoja);
    for (let y = 7; y < 20; y++) for (let x = 5; x < 20; x++) if (L.get(x, y) === C.hoja && (x + y) % 6 < 2) L.px(x, y, (x + y) % 12 < 6 ? C.brote : C.selva);
    L.elipse(15, 20, 2.5, 2.5, C.hoja); L.elipse(15, 20, 1, 1, C.T);   // cola enrollada
    L.elipse(8, 11, 1.6, 1.6, C.limon); L.px(8, 11, C.tinta);          // ojo giratorio
    terminar(L, [C.brote, C.selva, C.limon]);
    return L;
  },
  puercoespin() {
    const L = new Lienzo(24, 24);
    // Bola marrón erizada de púas claras
    L.elipse(12, 14, 6, 5.5, C.corteza);
    for (let k = 0; k < 14; k++) {
      const a = (k / 14) * Math.PI * 2;
      L.linea(Math.round(12 + Math.cos(a) * 5), Math.round(14 + Math.sin(a) * 4.5), Math.round(12 + Math.cos(a) * 9), Math.round(14 + Math.sin(a) * 8), k % 2 ? C.pergamino : C.madera);
    }
    L.px(10, 12, C.madera);
    terminar(L, [C.pergamino, C.madera]);
    return L;
  },
  gorila() {
    const L = new Lienzo(24, 24);
    // Fruta oscura y peluda con una "cara" de pecho más clara
    L.elipse(12, 14, 7.5, 7, C.noche);
    L.elipse(12, 15, 4, 4, C.piedra);
    L.rect(10, 13, 1, 2, C.tinta); L.rect(14, 13, 1, 2, C.tinta);   // fosas
    for (const [x, y] of [[6, 9], [17, 9], [5, 14], [19, 14], [8, 20], [16, 20]]) L.px(x, y, C.sombraVioleta);
    L.px(9, 9, C.niebla);
    terminar(L, [C.piedra, C.sombraVioleta, C.niebla]);
    return L;
  },
  // ===================== Primordiales nuevas =====================
  marea() {
    const L = new Lienzo(24, 24);
    // Esfera de agua con olas dentro y espuma en la cresta
    L.elipse(12, 13, 7.5, 7.5, C.mar);
    for (let x = 5; x < 20; x++) {
      const y = 12 + Math.round(Math.sin(x * 0.8) * 1.2);
      L.pxSobre(x, y, C.espuma); L.pxSobre(x, y + 1, C.bajio);
      const y2 = 16 + Math.round(Math.sin(x * 0.8 + 2) * 1.2);
      L.pxSobre(x, y2, C.bajio);
    }
    L.elipse(12, 18, 5, 2, C.marHondo);
    L.px(8, 8, C.hueso); L.px(9, 7, C.hueso);
    terminar(L, [C.espuma, C.bajio, C.marHondo, C.hueso]);
    return L;
  },
  viento() {
    const L = new Lienzo(24, 24);
    // Fruta casi transparente con remolinos grabados
    L.elipse(12, 13, 7, 7, C.espuma);
    const espiral = (cx: number, cy: number, r: number) => {
      for (let k = 0; k < 26; k++) { const a = k * 0.5, rr = 0.6 + (k / 26) * r; L.pxSobre(Math.round(cx + Math.cos(a) * rr), Math.round(cy + Math.sin(a) * rr), C.mar); }
    };
    espiral(10, 12, 4.5); espiral(15, 16, 3.2);
    L.px(8, 8, C.hueso);
    terminar(L, [C.mar, C.hueso]);
    // Corrientes de aire alrededor (sin contorno)
    L.linea(1, 10, 4, 9, C.espuma); L.linea(20, 17, 23, 16, C.espuma); L.linea(19, 7, 22, 6, C.espuma);
    return L;
  },
  mercurio() {
    const L = new Lienzo(24, 24);
    // Gota de metal líquido muy brillante, con una gotita que se separa
    L.elipse(12, 15, 6.5, 6.5, C.niebla);
    L.poligono([[7, 12], [12, 4], [17, 12]], C.niebla);
    L.elipse(10, 12, 2.5, 3, C.hueso);
    L.elipse(15, 18, 2, 1.5, C.piedra);
    L.elipse(19, 21, 1.3, 1.3, C.niebla);                     // gotita
    terminar(L, [C.hueso, C.piedra]);
    return L;
  },
  oxido() {
    const L = new Lienzo(24, 24);
    // Fruta metálica comida por manchas de herrumbre
    L.elipse(12, 13, 7, 7.5, C.piedra);
    for (const [x, y, r] of [[9, 10, 2.2], [15, 14, 2.6], [10, 17, 1.8], [16, 9, 1.3]] as const) { L.elipse(x, y, r, r, C.naranja); L.px(x, y, C.granate); }
    L.px(8, 8, C.niebla);
    terminar(L, [C.naranja, C.granate, C.niebla]);
    // Polvo que se desprende (sin contorno)
    for (const [x, y] of [[19, 19], [20, 21], [4, 18], [3, 20]]) L.px(x, y, C.naranja);
    return L;
  },
  arcilla() {
    const L = new Lienzo(24, 24);
    // Bola de barro con huellas de dedos
    // Vasija de barro a medio modelar: surcos del torno y huellas de dedos
    L.elipse(12, 15, 7.5, 6, C.madera);
    L.rect(9, 7, 6, 4, C.madera); L.rect(8, 7, 8, 1, C.madera);      // cuello
    for (const y of [13, 16, 19]) L.linea(6 + (y === 19 ? 2 : 0), y, 18 - (y === 19 ? 2 : 0), y, C.corteza);
    for (const [x, y] of [[9, 14], [14, 17], [15, 12]]) { L.px(x, y, C.maderaClara); L.px(x + 1, y, C.maderaClara); }
    L.px(8, 11, C.pergamino);
    terminar(L, [C.corteza, C.pergamino]);
    return L;
  },
  musgo() {
    const L = new Lienzo(24, 24);
    // Fruta redonda cubierta de musgo esponjoso
    L.elipse(12, 14, 7, 7, C.selva);
    for (let y = 8; y < 21; y++) for (let x = 5; x < 20; x++) if (L.get(x, y) === C.selva && (x * 5 + y * 3) % 7 < 3) L.px(x, y, C.hoja);
    for (const [x, y] of [[8, 10], [14, 9], [16, 15], [9, 17]]) L.px(x, y, C.brote);
    terminar(L, [C.hoja, C.brote]);
    // Gotas de rocío (sin contorno)
    L.px(4, 19, C.espuma); L.px(20, 11, C.espuma);
    return L;
  },
  polen() {
    const L = new Lienzo(24, 24);
    // Fruta-flor: un centro dorado con pétalos y nube de polen
    for (let k = 0; k < 6; k++) { const a = (k / 6) * Math.PI * 2; L.elipse(12 + Math.cos(a) * 4.5, 14 + Math.sin(a) * 4.5, 3, 3, C.limon); }
    L.elipse(12, 14, 3.5, 3.5, C.oro);
    for (const [x, y] of [[11, 13], [13, 15], [12, 12]]) L.px(x, y, C.naranja);
    terminar(L, [C.oro, C.naranja]);
    // Polen flotando (sin contorno)
    for (const [x, y] of [[3, 8], [5, 5], [20, 6], [21, 9], [19, 21], [4, 21]]) L.px(x, y, C.limon);
    return L;
  },
  sal() {
    const L = new Lienzo(24, 24);
    // Fruta hecha de cristales cúbicos blancos
    L.rect(7, 9, 10, 11, C.hueso);
    L.rect(5, 12, 4, 5, C.hueso); L.rect(16, 11, 4, 5, C.hueso); L.rect(9, 6, 5, 4, C.hueso);
    for (const [x, y, w, h] of [[7, 9, 10, 11], [5, 12, 4, 5], [16, 11, 4, 5], [9, 6, 5, 4]] as const) { L.linea(x, y + h - 1, x + w - 1, y + h - 1, C.niebla); L.linea(x + w - 1, y, x + w - 1, y + h - 1, C.niebla); }
    L.px(8, 10, C.espuma); L.px(10, 7, C.espuma);
    terminar(L, [C.niebla, C.espuma]);
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
