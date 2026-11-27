// Pinta las texturas del planeta (mapa equirectangular) con la paleta del juego.
import { Lienzo, azar } from '../arte/lienzo';
import { C } from '../arte/paleta';
import {
  ANCHO_CONTINENTE, LAT_CALMA, LAT_RUTA, crearRuido, distanciaContinente, type Isla,
} from './geografia';

const tablero = (x: number, y: number) => (x + y) % 2 === 0;

export function pintarPlaneta(islas: Isla[], ancho = 1024): Lienzo {
  const alto = ancho / 2;
  const L = new Lienzo(ancho, alto);
  const ruido = crearRuido(11);
  const ruido2 = crearRuido(23, 18);
  const r = azar(5);

  for (let y = 0; y < alto; y++) {
    const lat = 90 - ((y + 0.5) / alto) * 180;
    const al = Math.abs(lat);
    for (let x = 0; x < ancho; x++) {
      const lon = ((x + 0.5) / ancho) * 360 - 180;
      const n = ruido(lon, lat);
      let c: number;

      // Océano con profundidades
      if (n > 0.55) c = C.mar;
      else if (n > 0.47) c = tablero(x, y) ? C.mar : C.marHondo;
      else if (n < -0.5) c = C.abismo;
      else if (n < -0.4) c = tablero(x, y) ? C.abismo : C.marHondo;
      else c = C.marHondo;

      // Ruta central: corrientes que van de este a oeste
      if (al < LAT_RUTA) {
        const corriente = Math.sin(lat * 1.3 + Math.sin(lon * 0.09) * 3 + n * 4);
        if (corriente > 0.93) c = C.mar;
      }
      // Franjas en calma: agua clara y quieta
      if (al >= LAT_RUTA && al < LAT_CALMA) {
        c = n > 0.25 && tablero(x, y) ? C.mar : C.bajio;
        if (al < LAT_RUTA + 0.5 || al > LAT_CALMA - 0.5) c = tablero(x, y) ? C.bajio : C.mar;
      }
      // Casquetes polares
      if (al > 79 + n * 3) c = n > 0.1 ? C.hueso : C.espuma;
      else if (al > 77 + n * 3) c = tablero(x, y) ? C.espuma : c;

      // Continente-anillo
      const d = distanciaContinente(lon, lat);
      const anchoC = ANCHO_CONTINENTE + ruido2(lon, lat) * 0.9;
      if (d < anchoC) {
        const t = d / anchoC;
        const m = ruido2(lon * 3, lat * 3);
        if (t < 0.3) c = m > 0.15 ? C.hueso : C.niebla;                  // cumbres nevadas
        else if (t < 0.7) c = m > 0.35 ? C.selva : m < -0.4 ? C.sombraVioleta : C.piedra;
        else c = m > 0.2 ? C.hoja : C.sombraVioleta;                      // laderas
        if (al > 76) c = C.hueso;
      } else if (d < anchoC + 0.5) {
        c = tablero(x, y) ? C.bajio : C.espuma;                           // rompientes
      }
      L.px(x, y, c);
    }
  }

  // Islas
  const gx = ancho / 360, gy = alto / 180;
  for (const isla of islas) {
    const cx = (isla.lon + 180) * gx, cy = (90 - isla.lat) * gy;
    const esc = 1 / Math.max(0.25, Math.cos(isla.lat * Math.PI / 180));
    const rx = isla.radio * gx * esc, ry = isla.radio * gy;
    const semilla = r() * 1000;
    const forma = (ang: number) => 1 + 0.14 * Math.sin(ang * 2 + semilla) + 0.1 * Math.sin(ang * 3 + semilla * 2) + 0.06 * Math.sin(ang * 5 + semilla * 3);
    const capas: [number, number][] = [];
    const base = {
      tropical: [C.arena, C.hoja, C.selva], nevada: [C.niebla, C.hueso, C.espuma], volcanica: [C.sombraVioleta, C.piedra, C.rojo],
      desierto: [C.pergamino, C.arena, C.maderaClara], flotante: [C.hueso, C.brote, C.hoja], ciudad: [C.arena, C.niebla, C.pergamino],
      ruinas: [C.arena, C.piedra, C.hoja],
    }[isla.bioma];
    capas.push([1.7, C.bajio], [1.0, base[0]], [0.7, base[1]], [0.32, base[2]]);
    for (let y = Math.floor(cy - ry * 2); y <= cy + ry * 2; y++) {
      for (let x = Math.floor(cx - rx * 2); x <= cx + rx * 2; x++) {
        const dx = (x + 0.5 - cx) / rx, dy = (y + 0.5 - cy) / ry;
        const d = Math.hypot(dx, dy) / forma(Math.atan2(dy, dx));
        const xx = ((x % ancho) + ancho) % ancho;
        for (const [lim, col] of capas) {
          if (d < lim) {
            if (col === C.bajio) {
              const actual = L.get(xx, y);
              if (actual !== C.marHondo && actual !== C.mar && actual !== C.abismo) continue;
              if (d > 1.35 && !tablero(x, y)) continue;
            }
            L.px(xx, y, col);
          }
        }
        // Detalles: tejados en las ciudades, lava en volcanes
        if (d < 0.6 && isla.bioma === 'ciudad' && (x + y * 3) % 4 === 0) L.px(xx, y, C.rojo);
      }
    }
    if (isla.bioma === 'volcanica' && isla.radio > 1.1) L.px(Math.round(cx), Math.round(cy), C.naranja);
  }
  return L;
}

/** Nubes: blanco donde el ruido supera un umbral, transparente el resto. */
export function pintarNubes(ancho = 512): Lienzo {
  const alto = ancho / 2;
  const L = new Lienzo(ancho, alto);
  const ruido = crearRuido(99, 22);
  for (let y = 0; y < alto; y++) {
    const lat = 90 - ((y + 0.5) / alto) * 180;
    for (let x = 0; x < ancho; x++) {
      const lon = ((x + 0.5) / ancho) * 360 - 180;
      const n = ruido(lon * 3, lat * 2.5) + 0.35 * ruido(lon, lat) + 0.15 * Math.cos(lat * Math.PI / 30);
      if (n > 0.62) L.px(x, y, C.hueso);
      else if (n > 0.55) L.px(x, y, (x + y) % 2 ? C.hueso : C.T);
    }
  }
  return L;
}
