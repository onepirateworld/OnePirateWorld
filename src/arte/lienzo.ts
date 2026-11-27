import { PALETA, SOMBRA, LUZ, hexARgb } from './paleta';

/** Generador pseudoaleatorio con semilla (mismo resultado siempre). */
export function azar(semilla: number) {
  let a = semilla >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Lienzo de píxeles con índices de paleta (0 = transparente).
 * No depende del DOM: se usa igual en Node (generar PNG) y en el navegador.
 */
export class Lienzo {
  readonly d: Uint8Array;
  constructor(readonly w: number, readonly h: number) {
    this.d = new Uint8Array(w * h);
  }

  dentro(x: number, y: number) {
    return x >= 0 && y >= 0 && x < this.w && y < this.h;
  }
  get(x: number, y: number) {
    return this.dentro(x, y) ? this.d[y * this.w + x] : 0;
  }
  px(x: number, y: number, c: number) {
    x = Math.round(x); y = Math.round(y);
    if (this.dentro(x, y)) this.d[y * this.w + x] = c;
  }
  /** Pinta solo si ya hay algo (no se sale de la forma). */
  pxSobre(x: number, y: number, c: number) {
    if (this.get(x, y)) this.px(x, y, c);
  }

  rect(x: number, y: number, w: number, h: number, c: number) {
    for (let j = y; j < y + h; j++) for (let i = x; i < x + w; i++) this.px(i, j, c);
  }

  elipse(cx: number, cy: number, rx: number, ry: number, c: number) {
    for (let y = Math.floor(cy - ry - 1); y <= cy + ry + 1; y++)
      for (let x = Math.floor(cx - rx - 1); x <= cx + rx + 1; x++) {
        const dx = (x + 0.5 - cx) / rx, dy = (y + 0.5 - cy) / ry;
        if (dx * dx + dy * dy <= 1) this.px(x, y, c);
      }
  }

  linea(x0: number, y0: number, x1: number, y1: number, c: number) {
    x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;
    for (;;) {
      this.px(x0, y0, c);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
  }

  /** Relleno de polígono por líneas de barrido. */
  poligono(pts: [number, number][], c: number) {
    const ys = pts.map((p) => p[1]);
    const y0 = Math.floor(Math.min(...ys)), y1 = Math.ceil(Math.max(...ys));
    for (let y = y0; y <= y1; y++) {
      const yc = y + 0.5;
      const xs: number[] = [];
      for (let i = 0; i < pts.length; i++) {
        const [ax, ay] = pts[i], [bx, by] = pts[(i + 1) % pts.length];
        if ((ay <= yc && by > yc) || (by <= yc && ay > yc)) xs.push(ax + ((yc - ay) / (by - ay)) * (bx - ax));
      }
      xs.sort((a, b) => a - b);
      for (let k = 0; k + 1 < xs.length; k += 2)
        for (let x = Math.round(xs[k]); x < Math.round(xs[k + 1]); x++) this.px(x, y, c);
    }
  }

  /** Cambia un color por otro en todo el lienzo (o en una zona). */
  reemplazar(de: number, a: number) {
    for (let i = 0; i < this.d.length; i++) if (this.d[i] === de) this.d[i] = a;
  }

  /** Sombrea el borde derecho e inferior y aclara el superior izquierdo. */
  volumen(opts: { sombra?: boolean; luz?: boolean; excluir?: number[] } = {}) {
    const { sombra = true, luz = true, excluir = [] } = opts;
    const copia = this.d.slice();
    const g = (x: number, y: number) => (this.dentro(x, y) ? copia[y * this.w + x] : 0);
    for (let y = 0; y < this.h; y++)
      for (let x = 0; x < this.w; x++) {
        const c = g(x, y);
        if (!c || excluir.includes(c)) continue;
        if (sombra && (g(x + 1, y) === 0 || g(x, y + 1) === 0)) this.d[y * this.w + x] = SOMBRA[c];
        else if (luz && (g(x - 1, y) === 0 || g(x, y - 1) === 0)) this.d[y * this.w + x] = LUZ[c];
      }
  }

  /** Contorno exterior de 1 px. */
  contorno(c: number, diagonales = false) {
    const copia = this.d.slice();
    const g = (x: number, y: number) => (this.dentro(x, y) ? copia[y * this.w + x] : 0);
    for (let y = 0; y < this.h; y++)
      for (let x = 0; x < this.w; x++) {
        if (g(x, y)) continue;
        let toca = g(x - 1, y) || g(x + 1, y) || g(x, y - 1) || g(x, y + 1);
        if (diagonales) toca = toca || g(x - 1, y - 1) || g(x + 1, y - 1) || g(x - 1, y + 1) || g(x + 1, y + 1);
        if (toca) this.d[y * this.w + x] = c;
      }
  }

  /** Copia otro lienzo encima (0 = no pinta). */
  pegar(otro: Lienzo, ox: number, oy: number) {
    for (let y = 0; y < otro.h; y++)
      for (let x = 0; x < otro.w; x++) {
        const c = otro.d[y * otro.w + x];
        if (c) this.px(ox + x, oy + y, c);
      }
  }

  /** Espejo horizontal. */
  voltear(): Lienzo {
    const n = new Lienzo(this.w, this.h);
    for (let y = 0; y < this.h; y++) for (let x = 0; x < this.w; x++) n.d[y * this.w + (this.w - 1 - x)] = this.d[y * this.w + x];
    return n;
  }

  /** Convierte a RGBA (para PNG o canvas). */
  aRGBA(): Uint8ClampedArray {
    const rgb = PALETA.map((p) => hexARgb(p.hex));
    const out = new Uint8ClampedArray(this.w * this.h * 4);
    for (let i = 0; i < this.d.length; i++) {
      const c = this.d[i];
      if (!c) continue;
      const [r, g, b] = rgb[c - 1];
      out[i * 4] = r; out[i * 4 + 1] = g; out[i * 4 + 2] = b; out[i * 4 + 3] = 255;
    }
    return out;
  }
}
