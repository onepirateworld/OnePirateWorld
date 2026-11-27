// Paleta única del juego: 32 colores. El índice 0 es siempre "transparente".
// Todos los sprites se dibujan con índices de esta paleta.

export interface ColorPaleta {
  id: number;
  nombre: string;
  hex: string;
}

export const PALETA: ColorPaleta[] = [
  { id: 1, nombre: 'Tinta', hex: '#1a1423' },
  { id: 2, nombre: 'Noche', hex: '#2b2d4f' },
  { id: 3, nombre: 'Sombra violeta', hex: '#4a3a6b' },
  { id: 4, nombre: 'Piedra', hex: '#6b6a7d' },
  { id: 5, nombre: 'Niebla', hex: '#a9a7b8' },
  { id: 6, nombre: 'Hueso', hex: '#f2ecdc' },
  { id: 7, nombre: 'Corteza', hex: '#4a2c22' },
  { id: 8, nombre: 'Madera', hex: '#7a4a2e' },
  { id: 9, nombre: 'Madera clara', hex: '#b07a45' },
  { id: 10, nombre: 'Arena', hex: '#e0c088' },
  { id: 11, nombre: 'Pergamino', hex: '#f0dcae' },
  { id: 12, nombre: 'Piel oscura', hex: '#5e3a2a' },
  { id: 13, nombre: 'Piel media', hex: '#a86b48' },
  { id: 14, nombre: 'Piel clara', hex: '#e8b58f' },
  { id: 15, nombre: 'Granate', hex: '#7d2230' },
  { id: 16, nombre: 'Rojo', hex: '#c43a3a' },
  { id: 17, nombre: 'Naranja', hex: '#e77b33' },
  { id: 18, nombre: 'Oro', hex: '#f2b63d' },
  { id: 19, nombre: 'Limón', hex: '#f7e27a' },
  { id: 20, nombre: 'Selva', hex: '#1f4a3a' },
  { id: 21, nombre: 'Hoja', hex: '#3d8a4a' },
  { id: 22, nombre: 'Brote', hex: '#8cc85a' },
  { id: 23, nombre: 'Abismo', hex: '#12304f' },
  { id: 24, nombre: 'Mar hondo', hex: '#1d5a85' },
  { id: 25, nombre: 'Mar', hex: '#2f8ac0' },
  { id: 26, nombre: 'Bajío', hex: '#5cc3d8' },
  { id: 27, nombre: 'Espuma', hex: '#b8ecef' },
  { id: 28, nombre: 'Azul marina', hex: '#2c4a8a' },
  { id: 29, nombre: 'Coral', hex: '#e88ba0' },
  { id: 30, nombre: 'Magenta', hex: '#a33a7a' },
  { id: 31, nombre: 'Violeta', hex: '#7a4ac0' },
  { id: 32, nombre: 'Lila', hex: '#b89ae0' },
];

/** Nombres cortos para dibujar sin recordar números. */
export const C = {
  T: 0,
  tinta: 1, noche: 2, sombraVioleta: 3, piedra: 4, niebla: 5, hueso: 6,
  corteza: 7, madera: 8, maderaClara: 9, arena: 10, pergamino: 11,
  pielOscura: 12, pielMedia: 13, pielClara: 14,
  granate: 15, rojo: 16, naranja: 17, oro: 18, limon: 19,
  selva: 20, hoja: 21, brote: 22,
  abismo: 23, marHondo: 24, mar: 25, bajio: 26, espuma: 27,
  azulMarina: 28, coral: 29, magenta: 30, violeta: 31, lila: 32,
} as const;

/** Color "un paso más oscuro" de cada color (para sombrear). */
export const SOMBRA: Record<number, number> = {
  1: 1, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5,
  7: 1, 8: 7, 9: 8, 10: 9, 11: 10,
  12: 7, 13: 12, 14: 13,
  15: 7, 16: 15, 17: 16, 18: 17, 19: 18,
  20: 1, 21: 20, 22: 21,
  23: 1, 24: 23, 25: 24, 26: 25, 27: 26,
  28: 2, 29: 30, 30: 15, 31: 3, 32: 31,
};

/** Color "un paso más claro" de cada color (para brillos). */
export const LUZ: Record<number, number> = {
  1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 6,
  7: 8, 8: 9, 9: 10, 10: 11, 11: 6,
  12: 13, 13: 14, 14: 11,
  15: 16, 16: 17, 17: 18, 18: 19, 19: 6,
  20: 21, 21: 22, 22: 19,
  23: 24, 24: 25, 25: 26, 26: 27, 27: 6,
  28: 25, 29: 11, 30: 29, 31: 32, 32: 6,
};

export function hexARgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
