// Dibuja las animaciones de los ataques. Sencillas, de pocos colores, pero se entiende qué pasa.
// f va de 0 a 1 durante la animación. "de" es quien ataca y "a" quien recibe.
import { C, PALETA } from '../arte/paleta';
import type { Anim } from './tecnicas';

export const DURACION_ANIM = 520;
type P = { x: number; y: number };
const hex = (c: number) => PALETA[c - 1].hex;

function px(ctx: CanvasRenderingContext2D, x: number, y: number, t = 2) { ctx.fillRect(Math.round(x - t / 2), Math.round(y - t / 2), t, t); }
function linea(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, grosor = 2) {
  const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / (grosor * 0.7)));
  for (let i = 0; i <= n; i++) px(ctx, x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * i) / n, grosor);
}
function aro(ctx: CanvasRenderingContext2D, c: P, r: number, desde = 0, hasta = Math.PI * 2, grosor = 2) {
  const n = Math.max(8, Math.ceil((r * (hasta - desde)) / 2));
  for (let i = 0; i <= n; i++) { const a = desde + ((hasta - desde) * i) / n; px(ctx, c.x + Math.cos(a) * r, c.y + Math.sin(a) * r * 0.8, grosor); }
}
const azar = (i: number) => { const s = Math.sin(i * 12.9898) * 43758.5453; return s - Math.floor(s); };

export function pintarAnim(ctx: CanvasRenderingContext2D, anim: Anim, f: number, de: P, a: P) {
  const color = hex(('color' in anim && anim.color) || C.hueso);
  ctx.fillStyle = color;
  const dir = a.x > de.x ? 1 : -1;
  switch (anim.forma) {
    case 'corte': {
      // Cada línea aparece una tras otra, de arriba a abajo
      const angulos = [[-1, -1, 1, 1], [1, -1, -1, 1], [-1, 0, 1, 0]];
      for (let i = 0; i < anim.lineas; i++) {
        const fi = Math.min(1, Math.max(0, f * anim.lineas * 1.3 - i * 0.9));
        if (fi <= 0) continue;
        const [x0, y0, x1, y1] = angulos[i % 3].map((v) => v * 22);
        linea(ctx, a.x + x0, a.y + y0, a.x + x0 + (x1 - x0) * fi, a.y + y0 + (y1 - y0) * fi, 3);
      }
      break;
    }
    case 'estocada': {
      for (let i = 0; i < anim.veces; i++) {
        const fi = Math.min(1, Math.max(0, f * anim.veces - i));
        if (fi <= 0 || fi >= 1) continue;
        const off = (i - (anim.veces - 1) / 2) * 8;
        const punta = { x: de.x + (a.x - de.x) * fi, y: de.y + off * 0.5 + (a.y - de.y) * fi };
        linea(ctx, punta.x - dir * 18, punta.y - (a.y - de.y) * 0.1, punta.x, punta.y, 2);
        ctx.fillStyle = hex(C.limon); px(ctx, punta.x, punta.y, 4); ctx.fillStyle = color;
      }
      break;
    }
    case 'arco': aro(ctx, a, 26, -Math.PI * 0.9, -Math.PI * 0.9 + Math.PI * 1.3 * f, 3); break;
    case 'giro': {
      for (let k = 0; k < 3; k++) { const ang = f * Math.PI * 4 + (k * Math.PI * 2) / 3; aro(ctx, a, 24, ang, ang + 1, 2); }
      break;
    }
    case 'proyectil': {
      for (let i = 0; i < anim.n; i++) {
        const retraso = anim.abanico ? 0 : i * 0.18;
        const fi = Math.min(1, Math.max(0, (f - retraso) / (1 - (anim.abanico ? 0 : (anim.n - 1) * 0.18))));
        if (fi <= 0 || fi >= 1) continue;
        const dispersion = anim.abanico ? (i - (anim.n - 1) / 2) * 6 * fi : 0;
        px(ctx, de.x + (a.x - de.x) * fi, de.y + (a.y - de.y) * fi + dispersion, anim.tam + 1);
      }
      if (f > 0.85) { ctx.fillStyle = hex(C.hueso); aro(ctx, a, 6 + (f - 0.85) * 40, 0, Math.PI * 2, 1); }
      break;
    }
    case 'rayo': {
      if (f < 0.15) { px(ctx, de.x, de.y, 4); break; }
      const g = f < 0.6 ? 3 : 1;
      linea(ctx, de.x, de.y, a.x, a.y, g);
      if (f > 0.4) { ctx.fillStyle = hex(C.hueso); aro(ctx, a, 4 + f * 10, 0, Math.PI * 2, 1); }
      break;
    }
    case 'impacto': {
      const tam = anim.tam ?? 1;
      const r = (6 + f * 12) * (0.8 + tam * 0.3);
      for (let k = 0; k < 8; k++) {
        const ang = (k / 8) * Math.PI * 2;
        linea(ctx, a.x + Math.cos(ang) * r * 0.5, a.y + Math.sin(ang) * r * 0.5, a.x + Math.cos(ang) * r, a.y + Math.sin(ang) * r, 2);
      }
      if (f < 0.3) { ctx.fillStyle = hex(C.limon); px(ctx, a.x, a.y, 6 + tam * 2); }
      break;
    }
    case 'onda': {
      const centro = anim.haciaRival ? { x: de.x + (a.x - de.x) * f, y: de.y + (a.y - de.y) * f } : de;
      for (let k = 0; k < 3; k++) { const r = ((f * 3 + k) % 3) * 9 + 6; aro(ctx, centro, r, 0, Math.PI * 2, 2); }
      break;
    }
    case 'aura': {
      for (let i = 0; i < 12; i++) {
        const fx = (azar(i) - 0.5) * 34, fy = ((f + azar(i + 50)) % 1) * 40;
        px(ctx, de.x + fx, de.y + 18 - fy, 2);
      }
      break;
    }
    case 'escudo': {
      const x = de.x + dir * 22, y = de.y;
      const alfa = f < 0.2 ? f * 5 : f > 0.85 ? (1 - f) * 6 : 1;
      ctx.globalAlpha = Math.min(1, alfa);
      if (anim.tipo === 'espada') { linea(ctx, x - 10, y - 18, x + 10, y + 18, 3); linea(ctx, x - 6, y - 4, x + 2, y - 8, 2); }
      else if (anim.tipo === 'escudo') { ctx.fillRect(Math.round(x - 9), Math.round(y - 14), 18, 26); ctx.fillStyle = hex(C.corteza); ctx.fillRect(Math.round(x - 2), Math.round(y - 14), 4, 26); }
      else if (anim.tipo === 'raices') { for (let k = -2; k <= 2; k++) linea(ctx, x + k * 5, y + 20, x + k * 3, y - 16 + Math.abs(k) * 4, 2); }
      else aro(ctx, de, 28, 0, Math.PI * 2, 2);
      ctx.globalAlpha = 1;
      break;
    }
    case 'cura': {
      for (let i = 0; i < 5; i++) {
        const fy = ((f + i * 0.2) % 1) * 36, fx = (i - 2) * 9;
        const cx = de.x + fx, cy = de.y + 14 - fy;
        ctx.fillRect(Math.round(cx - 3), Math.round(cy - 1), 6, 2); ctx.fillRect(Math.round(cx - 1), Math.round(cy - 3), 2, 6);
      }
      break;
    }
    case 'nube': {
      const c = anim.sobreMi ? de : a;
      for (let i = 0; i < 7; i++) {
        const ang = azar(i) * Math.PI * 2, r = 6 + f * 16 * (0.5 + azar(i + 9));
        ctx.globalAlpha = 1 - f * 0.6;
        aro(ctx, { x: c.x + Math.cos(ang) * r, y: c.y + Math.sin(ang) * r * 0.6 }, 4 + f * 4, 0, Math.PI * 2, 3);
      }
      ctx.globalAlpha = 1;
      break;
    }
    case 'lluvia': {
      for (let i = 0; i < 14; i++) {
        const x = a.x + (azar(i) - 0.5) * 46, y = a.y - 40 + ((f * 1.5 + azar(i + 3)) % 1) * 56;
        linea(ctx, x, y, x - 2, y + 5, 1);
      }
      break;
    }
    case 'enredo': {
      for (let k = 0; k < 5; k++) {
        const base = a.x + (k - 2) * 9;
        const alto = Math.min(1, f * 1.6) * 34;
        let x = base, y = a.y + 22;
        for (let s = 0; s < alto; s += 2) { x = base + Math.sin(s / 5 + k) * 4; y = a.y + 22 - s; px(ctx, x, y, 2); }
      }
      break;
    }
    case 'garras': {
      for (let k = 0; k < 3; k++) {
        const fi = Math.min(1, f * 1.4);
        const x0 = a.x - 16 + k * 9, y0 = a.y - 18;
        linea(ctx, x0, y0, x0 + 10 * fi, y0 + 34 * fi, 2);
      }
      break;
    }
    case 'salto': {
      // El salto lo hace la pantalla moviendo al atacante; aquí, el golpe al caer
      if (f > 0.55) {
        const g = (f - 0.55) / 0.45;
        for (let k = 0; k < 6; k++) { const ang = Math.PI + (k / 5) * Math.PI; linea(ctx, a.x + Math.cos(ang) * 8, a.y + 18, a.x + Math.cos(ang) * (8 + g * 18), a.y + 18 + Math.sin(ang) * g * 10, 2); }
      }
      break;
    }
  }
}
