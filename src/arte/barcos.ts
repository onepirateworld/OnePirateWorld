import { Lienzo } from './lienzo';
import { C } from './paleta';

// Barcos vistos de lado, mirando a la derecha.

export interface AspectoBarco {
  colorCasco: number;
  colorVela: number;
  colorBandera: number;
  colorInsignia: number;
}

function vela(L: Lienzo, x: number, y: number, w: number, h: number, c: number) {
  // Vela hinchada: rectángulo con los lados curvados hacia la derecha.
  for (let j = 0; j < h; j++) {
    const t = j / (h - 1);
    const panza = Math.round(Math.sin(t * Math.PI) * 2);
    L.rect(x + panza, y + j, w, 1, c);
  }
  // Costura central
  for (let j = 1; j < h - 1; j += 1) L.pxSobre(x + Math.floor(w / 2) + Math.round(Math.sin((j / (h - 1)) * Math.PI) * 2), y + j, c === C.hueso ? C.niebla : c);
}

function bandera(L: Lienzo, x: number, y: number, a: AspectoBarco) {
  L.rect(x, y, 6, 4, a.colorBandera);
  L.px(x + 6, y + 1, a.colorBandera); L.px(x + 6, y + 2, a.colorBandera);
  // Insignia: una estrella de 4 puntas propia
  L.px(x + 2, y + 1, a.colorInsignia); L.px(x + 3, y + 1, a.colorInsignia);
  L.px(x + 2, y + 2, a.colorInsignia); L.px(x + 3, y + 2, a.colorInsignia);
  L.px(x + 1, y + 2, a.colorInsignia); L.px(x + 4, y + 1, a.colorInsignia);
}

export function dibujarBarca(a: AspectoBarco): Lienzo {
  const L = new Lienzo(32, 24);
  L.linea(14, 3, 14, 17, C.corteza);                         // mástil
  vela(L, 15, 5, 8, 9, a.colorVela);
  L.poligono([[2, 15], [30, 15], [26, 21], [6, 21]], a.colorCasco);
  L.rect(3, 15, 27, 1, C.maderaClara);                       // borda
  L.rect(6, 18, 20, 1, C.corteza);                           // tablón
  L.linea(3, 14, 3, 15, C.corteza);                          // remo apoyado
  L.linea(14, 3, 17, 2, a.colorBandera); L.px(16, 3, a.colorBandera);
  L.volumen({ excluir: [C.corteza] });
  L.contorno(C.tinta);
  return L;
}

export function dibujarCarabela(a: AspectoBarco): Lienzo {
  const L = new Lienzo(48, 40);
  // Mástiles
  L.linea(18, 6, 18, 28, C.corteza);
  L.linea(31, 4, 31, 28, C.corteza);
  // Vela latina (triangular) en el de popa
  L.poligono([[19, 8], [19, 26], [29, 25]], a.colorVela);
  L.linea(13, 26, 22, 5, C.corteza);                         // entena
  // Velas cuadradas en el mayor
  vela(L, 24, 8, 12, 7, a.colorVela);
  vela(L, 23, 16, 14, 8, a.colorVela);
  bandera(L, 32, 2, a);
  // Casco
  L.poligono([[3, 26], [45, 26], [40, 35], [9, 35]], a.colorCasco);
  L.rect(3, 22, 9, 5, a.colorCasco);                          // castillo de popa
  L.rect(3, 22, 9, 1, C.maderaClara);
  L.rect(4, 26, 41, 1, C.oro);                                // filete dorado
  L.rect(8, 31, 33, 1, C.corteza);
  for (const x of [15, 23, 31]) L.rect(x, 28, 2, 2, C.tinta); // portas
  L.linea(45, 26, 47, 21, C.corteza);                         // bauprés
  L.volumen({ excluir: [C.corteza, C.tinta] });
  L.contorno(C.tinta);
  return L;
}

export function dibujarGaleon(a: AspectoBarco): Lienzo {
  const L = new Lienzo(64, 56);
  const mastiles = [20, 34, 47];
  mastiles.forEach((m, i) => L.linea(m, i === 1 ? 6 : 10, m, 38, C.corteza));
  // Velas: dos por mástil, la mayor más alta
  mastiles.forEach((m, i) => {
    const top = i === 1 ? 10 : 14;
    vela(L, m - 7, top, 13, 8, a.colorVela);
    vela(L, m - 8, top + 10, 15, 9, a.colorVela);
  });
  bandera(L, 35, 3, a);
  // Casco
  L.poligono([[4, 38], [60, 38], [55, 50], [11, 50]], a.colorCasco);
  L.rect(2, 30, 16, 9, a.colorCasco);                          // castillo de popa
  L.rect(2, 30, 16, 1, C.maderaClara);
  for (const x of [5, 9, 13]) L.rect(x, 33, 2, 2, C.oro);     // ventanas iluminadas
  L.rect(50, 34, 9, 5, a.colorCasco);                         // castillo de proa
  L.rect(50, 34, 9, 1, C.maderaClara);
  L.rect(3, 38, 57, 1, C.oro);
  L.rect(8, 45, 46, 1, C.corteza);
  for (const x of [20, 27, 34, 41]) L.rect(x, 41, 2, 2, C.tinta); // cañoneras
  L.linea(59, 37, 63, 30, C.corteza);                           // bauprés
  // Mascarón: cabeza de pez espada estilizada
  L.px(60, 39, C.oro); L.px(61, 39, C.oro); L.px(62, 40, C.oro);
  L.volumen({ excluir: [C.corteza, C.tinta, C.oro] });
  L.contorno(C.tinta);
  return L;
}

export type TipoNave = 'barca' | 'carabela' | 'galeon';
/** Colores de serie de cada barco. */
export const COLORES_BARCO: Record<TipoNave, AspectoBarco> = {
  barca: { colorCasco: C.madera, colorVela: C.hueso, colorBandera: C.rojo, colorInsignia: C.hueso },
  carabela: { colorCasco: C.maderaClara, colorVela: C.pergamino, colorBandera: C.tinta, colorInsignia: C.oro },
  galeon: { colorCasco: C.corteza, colorVela: C.rojo, colorBandera: C.tinta, colorInsignia: C.hueso },
};
/** Colores que se pueden elegir para personalizar el barco. */
export const PALETA_BARCO = {
  colorCasco: [C.madera, C.maderaClara, C.corteza, C.noche, C.granate, C.azulMarina, C.selva, C.hueso],
  colorVela: [C.hueso, C.pergamino, C.rojo, C.tinta, C.azulMarina, C.oro, C.selva, C.violeta],
  colorBandera: [C.tinta, C.rojo, C.azulMarina, C.selva, C.oro, C.hueso, C.granate, C.violeta],
  colorInsignia: [C.hueso, C.oro, C.rojo, C.tinta, C.limon, C.mar],
};
/** Dibuja un barco con sus colores (o los de serie). */
export function dibujarBarco(tipo: TipoNave, a?: Partial<AspectoBarco>): Lienzo {
  const c = { ...COLORES_BARCO[tipo], ...a };
  return tipo === 'barca' ? dibujarBarca(c) : tipo === 'carabela' ? dibujarCarabela(c) : dibujarGaleon(c);
}

export const BARCOS_PRUEBA = [
  { id: 'barca', nombre: 'Barca', descripcion: 'El primer barco: una vela, dos remos y mucha fe.', dibujar: () => dibujarBarco('barca') },
  { id: 'carabela', nombre: 'Carabela', descripcion: 'Rápida y ágil. Vela latina y dos mástiles.', dibujar: () => dibujarBarco('carabela') },
  { id: 'galeon', nombre: 'Galeón', descripcion: 'Tres mástiles, ocho cañones y castillo de popa.', dibujar: () => dibujarBarco('galeon') },
];
