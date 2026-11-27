// Islas del mapa vistas de lejos. Usan la misma forma y los mismos objetos que la
// vista de cerca (escena.ts), pero en miniatura, para que no haya saltos al acercar.
import { Lienzo, azar } from './lienzo';
import { C } from './paleta';
import type { BiomaIsla } from '../mundo/geografia';
import { escenario } from './escena';

export interface IslaParaDibujar { id: number; bioma: BiomaIsla; especial?: 'base' | 'taberna' | 'maestro' | 'tesoro' }

/** Proporción del sprite que ocupa la tierra (el resto es agua poco profunda). */
export const FRACCION_TIERRA = 0.74;

/** Forma de la isla: radio relativo según el ángulo. Es la misma a cualquier tamaño. */
export function formaIsla(id: number) {
  const rf = azar(id * 104729 + 3);
  const arm = [2, 3, 4, 6].map((k) => ({ k, a: (rf() * 0.16) / (k / 2), f: rf() * Math.PI * 2 }));
  return (ang: number) => 1 + arm.reduce((s, h) => s + h.a * Math.sin(h.k * ang + h.f), 0);
}

const COLORES: Record<BiomaIsla, [number, number, number]> = {
  tropical: [C.arena, C.hoja, C.selva], nevada: [C.niebla, C.hueso, C.espuma], volcanica: [C.sombraVioleta, C.piedra, C.sombraVioleta],
  desierto: [C.pergamino, C.arena, C.maderaClara], flotante: [C.hueso, C.hoja, C.selva], ciudad: [C.arena, C.hoja, C.selva], ruinas: [C.arena, C.hoja, C.selva],
};

/** Suelo de la isla (sin objetos) en un sprite cuadrado de `tam` píxeles. */
export function dibujarIslaMapa(isla: IslaParaDibujar, tam: number): Lienzo {
  const L = new Lienzo(tam, tam);
  const forma = formaIsla(isla.id);
  const c = tam / 2;
  const RL = (tam / 2) * FRACCION_TIERRA;
  const [orilla, tierra, oscura] = COLORES[isla.bioma];
  const anchoOrilla = Math.max(0.06, 1.6 / RL);
  const r = azar(isla.id * 7 + tam);
  for (let y = 0; y < tam; y++)
    for (let x = 0; x < tam; x++) {
      const dx = x + 0.5 - c, dy = y + 0.5 - c;
      const v = Math.hypot(dx, dy) / (RL * forma(Math.atan2(dy, dx)));
      if (v < 1 - anchoOrilla) L.px(x, y, r() < 0.05 ? oscura : tierra);
      else if (v < 1) L.px(x, y, orilla);
      else if (isla.bioma === 'flotante') { if (v < 1.2 && (x + y) % 2 === 0) L.px(x, y, C.hueso); }
      else if (v < 1 + 2 / RL + 0.04) L.px(x, y, (x + y) % 2 ? C.espuma : C.bajio);
      else if (v < 1.22) L.px(x, y, C.bajio);
      else if (v < 1.3 && (x + y) % 2) L.px(x, y, C.bajio);
    }
  return L;
}

const canvasDeLienzo = new WeakMap<Lienzo, HTMLCanvasElement>();
export function lienzoACanvas(L: Lienzo): HTMLCanvasElement {
  let cv = canvasDeLienzo.get(L);
  if (!cv) {
    cv = document.createElement('canvas');
    cv.width = L.w; cv.height = L.h;
    cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
    canvasDeLienzo.set(L, cv);
  }
  return cv;
}

/** Sprite de lejos: suelo + objetos de la escena en miniatura. Cacheado por tamaño. */
const cache = new Map<string, HTMLCanvasElement>();
export function spriteIsla(isla: IslaParaDibujar & { radio: number }, tamDeseado: number): HTMLCanvasElement {
  const tam = Math.min(256, Math.max(16, 2 ** Math.ceil(Math.log2(Math.max(16, tamDeseado)))));
  const k = `${isla.id}:${tam}`;
  let cv = cache.get(k);
  if (cv) return cv;
  const L = dibujarIslaMapa(isla, tam);
  cv = document.createElement('canvas');
  cv.width = tam; cv.height = tam;
  const ctx = cv.getContext('2d')!;
  ctx.putImageData(new ImageData(L.aRGBA(), tam, tam), 0, 0);
  if (tam >= 32) {
    const esc = escenario(isla);
    const f = (tam * FRACCION_TIERRA) / esc.D;      // px de sprite por px de escena
    ctx.imageSmoothingEnabled = false;
    if (esc.muelle) {
      const m = esc.muelle;
      ctx.strokeStyle = '#7a4a2e'; ctx.lineWidth = Math.max(1, 8 * f);
      ctx.beginPath(); ctx.moveTo(tam / 2 + m.x * f, tam / 2 + m.y * f);
      ctx.lineTo(tam / 2 + (m.x + Math.cos(m.ang) * m.largo) * f, tam / 2 + (m.y + Math.sin(m.ang) * m.largo) * f); ctx.stroke();
    }
    if (esc.agua) {
      ctx.fillStyle = '#2f8ac0';
      ctx.beginPath(); ctx.ellipse(tam / 2 + esc.agua.x * f, tam / 2 + esc.agua.y * f, esc.agua.rx * f, esc.agua.ry * f, 0, 0, Math.PI * 2); ctx.fill();
    }
    for (const o of [...esc.objetos].sort((a, b) => a.y - b.y)) {
      if (o.sprite.w < 2) continue;
      const w = Math.max(1, Math.round(o.sprite.w * f)), h = Math.max(1, Math.round(o.sprite.h * f));
      ctx.drawImage(lienzoACanvas(o.sprite), Math.round(tam / 2 + o.x * f - w / 2), Math.round(tam / 2 + o.y * f - h), w, h);
    }
  }
  cache.set(k, cv);
  if (cache.size > 400) cache.delete(cache.keys().next().value!);
  return cv;
}
