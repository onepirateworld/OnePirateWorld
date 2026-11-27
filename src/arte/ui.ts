import { Lienzo, azar } from './lienzo';
import { C } from './paleta';

// Piezas de interfaz en "9 trozos" (border-image): las esquinas se mantienen
// y el centro se repite. Tamaño 24x24, borde de 8 px.

export function panelPergamino(): Lienzo {
  const L = new Lienzo(24, 24);
  const r = azar(4);
  L.rect(1, 1, 22, 22, C.pergamino);
  for (let i = 0; i < 18; i++) L.px(2 + Math.floor(r() * 20), 2 + Math.floor(r() * 20), C.arena);
  L.rect(1, 1, 22, 1, C.hueso);
  L.rect(1, 22, 22, 1, C.arena);
  L.rect(22, 1, 1, 22, C.arena);
  // Bordes enrollados arriba y abajo
  L.rect(0, 0, 24, 3, C.arena); L.rect(0, 1, 24, 1, C.maderaClara);
  L.rect(0, 21, 24, 3, C.arena); L.rect(0, 22, 24, 1, C.maderaClara);
  L.rect(0, 0, 24, 1, C.madera); L.rect(0, 23, 24, 1, C.madera);
  L.rect(0, 0, 1, 24, C.madera); L.rect(23, 0, 1, 24, C.madera);
  for (const [x, y] of [[0, 0], [23, 0], [0, 23], [23, 23]]) L.px(x, y, C.T);
  return L;
}

export function panelMadera(): Lienzo {
  const L = new Lienzo(24, 24);
  for (let y = 0; y < 24; y++) L.rect(0, y, 24, 1, y % 6 === 5 ? C.corteza : y % 6 === 0 ? C.maderaClara : C.madera);
  for (const y of [2, 8, 14, 20]) L.px((y * 7) % 20 + 2, y, C.corteza);
  L.rect(3, 3, 18, 18, C.madera);
  L.rect(4, 4, 16, 16, C.corteza);
  L.rect(5, 5, 14, 14, C.noche);
  L.rect(0, 0, 24, 1, C.tinta); L.rect(0, 23, 24, 1, C.tinta);
  L.rect(0, 0, 1, 24, C.tinta); L.rect(23, 0, 1, 24, C.tinta);
  for (const [x, y] of [[2, 2], [21, 2], [2, 21], [21, 21]]) { L.px(x, y, C.niebla); }
  return L;
}

export function boton(pulsado = false): Lienzo {
  const L = new Lienzo(24, 24);
  L.rect(1, 1, 22, 22, pulsado ? C.madera : C.maderaClara);
  L.rect(1, 1, 22, 2, pulsado ? C.corteza : C.arena);
  L.rect(1, 20, 22, 3, pulsado ? C.maderaClara : C.madera);
  L.rect(0, 1, 1, 22, C.tinta); L.rect(23, 1, 1, 22, C.tinta);
  L.rect(1, 0, 22, 1, C.tinta); L.rect(1, 23, 22, 1, C.tinta);
  return L;
}

export const UI_PRUEBA = [
  { id: 'panel-pergamino', nombre: 'Panel pergamino', descripcion: 'Fondo de fichas y textos. 9 trozos, borde 8 px.', dibujar: panelPergamino },
  { id: 'panel-madera', nombre: 'Panel madera', descripcion: 'Marcos de menú y barras. 9 trozos, borde 8 px.', dibujar: panelMadera },
  { id: 'boton', nombre: 'Botón', descripcion: 'Botón de madera. 9 trozos, borde 6 px.', dibujar: () => boton(false) },
  { id: 'boton-pulsado', nombre: 'Botón pulsado', descripcion: 'Estado al pulsar.', dibujar: () => boton(true) },
];
