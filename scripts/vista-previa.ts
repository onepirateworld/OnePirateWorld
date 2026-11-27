// Junta varios sprites en una lámina ampliada (solo para revisar).
import { writeFileSync } from 'node:fs';
import { Lienzo } from '../src/arte/lienzo';
import { C } from '../src/arte/paleta';
import { codificarPNG } from './png';
export function lamina(sprites: Lienzo[], ruta: string, escala = 6, fondo: number = C.pergamino) {
  const pad = 4;
  const w = sprites.reduce((s, l) => s + l.w + pad, pad);
  const h = Math.max(...sprites.map((l) => l.h)) + pad * 2;
  const L = new Lienzo(w, h);
  L.rect(0, 0, w, h, fondo);
  let x = pad;
  for (const s of sprites) { L.pegar(s, x, h - pad - s.h); x += s.w + pad; }
  writeFileSync(ruta, codificarPNG(L.w, L.h, L.aRGBA(), escala));
}
