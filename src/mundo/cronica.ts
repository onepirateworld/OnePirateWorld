// Crónica del mundo: lo que hacen los bots, generado a partir del reloj.
// Mismo mar + misma hora = mismos sucesos para todos (hasta tener el servidor, fase 9).
import { azar } from '../arte/lienzo';
import { FRUTAS } from '../datos/frutas';
import { botsDelMar, islasDelMundo, posicionBot, nombreZona, type Bot } from './habitantes';

export type TipoSuceso = 'zarpa' | 'llega' | 'duelo' | 'tesoro' | 'recluta' | 'ascenso' | 'sabotaje' | 'recompensa' | 'entrena' | 'fruta';

export interface Suceso {
  t: number;              // marca de tiempo (ms)
  tipo: TipoSuceso;
  texto: string;
  ids: string[];          // personajes implicados
  importante: boolean;    // sale en Noticias
}

const MIN = 60_000;
const PASO = 6 * MIN;     // un suceso cada 6 minutos

const nombre = (b: Bot) => (b.apodo ? `${b.nombre} «${b.apodo}»` : b.nombre);

// --- Recompensas y rangos

export function recompensa(b: Bot): number {
  if (b.bando === 'marine') return 0;
  let h = 0; for (const ch of b.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const base = b.nivel * b.nivel * 1200 * (b.bando === 'revolucionario' ? 1.4 : 1);
  return Math.round((base * (0.6 + (h % 100) / 100)) / 1000) * 1000;
}

export const RANGOS = ['Recluta', 'Marinero', 'Cabo', 'Sargento', 'Teniente', 'Capitán', 'Comodoro', 'Vicealmirante', 'Almirante'];
export const rangoDe = (nivel: number) => RANGOS[Math.min(RANGOS.length - 1, Math.floor(nivel / 7))];

export const formatoDoblones = (n: number) => n.toLocaleString('es-ES');

// --- Frutas: los bots más fuertes ya tienen alguna (una de cada por mundo)

export function frutasDelMar(mar: number): Map<string, string> {
  const bots = [...botsDelMar(mar)].sort((a, b) => b.nivel - a.nivel);
  const r = azar(mar * 4441);
  const libres = [...FRUTAS];
  const duenos = new Map<string, string>(); // idFruta -> idBot
  for (const b of bots.slice(0, 4)) {
    const i = Math.floor(r() * libres.length);
    duenos.set(libres[i].id, b.id);
    libres.splice(i, 1);
  }
  return duenos;
}

// --- Sucesos

function suceso(mar: number, slot: number): Suceso {
  const bots = botsDelMar(mar);
  const islas = islasDelMundo();
  const r = azar(mar * 1_000_003 + slot);
  const t = slot * PASO + Math.floor(r() * PASO);
  const a = bots[Math.floor(r() * bots.length)];
  let b = bots[Math.floor(r() * bots.length)];
  if (b.id === a.id) b = bots[(bots.indexOf(a) + 1) % bots.length];
  const pos = posicionBot(a, t);
  const isla = islas[pos.islaId ?? a.islaA];
  const tirada = r();
  if (pos.navegando && tirada < 0.5) {
    const destino = islas[pos.rumbo > 0 ? a.islaB : a.islaA];
    return { t, tipo: 'zarpa', texto: `${nombre(a)} navega rumbo a ${destino.nombre}.`, ids: [a.id], importante: false };
  }
  const opciones: [TipoSuceso, number][] = [['llega', 3], ['duelo', 3], ['entrena', 2], ['tesoro', 1], ['recluta', 1.5], ['recompensa', a.bando === 'pirata' ? 1.5 : 0],
    ['ascenso', a.bando === 'marine' ? 1.5 : 0], ['sabotaje', a.bando === 'revolucionario' ? 1.5 : 0]];
  let x = r() * opciones.reduce((s, [, p]) => s + p, 0);
  let tipo: TipoSuceso = 'llega';
  for (const [k, p] of opciones) { if ((x -= p) <= 0) { tipo = k; break; } }
  switch (tipo) {
    case 'llega': return { t, tipo, texto: `${nombre(a)} desembarca en ${isla.nombre} (${nombreZona(isla.zona)}).`, ids: [a.id], importante: false };
    case 'entrena': return { t, tipo, texto: `${nombre(a)} entrena en ${isla.nombre} hasta caer rendido.`, ids: [a.id], importante: false };
    case 'duelo': {
      const gana = a.nivel + r() * 10 >= b.nivel + r() * 10 ? a : b, pierde = gana === a ? b : a;
      return { t, tipo, texto: `Duelo en ${isla.nombre}: ${nombre(gana)} vence a ${nombre(pierde)}.`, ids: [a.id, b.id], importante: true };
    }
    case 'tesoro': return { t, tipo, texto: `${nombre(a)} desentierra un cofre en ${isla.nombre}: ${formatoDoblones(500 + Math.floor(r() * 40) * 250)} doblones.`, ids: [a.id], importante: true };
    case 'recluta': return { t, tipo, texto: `${nombre(b)} se une a la tripulación de ${nombre(a)}.`, ids: [a.id, b.id], importante: true };
    case 'recompensa': return { t, tipo, texto: `Sube la recompensa por ${nombre(a)}: ahora ${formatoDoblones(recompensa(a))} doblones.`, ids: [a.id], importante: true };
    case 'ascenso': return { t, tipo, texto: `La marina asciende a ${nombre(a)} a ${rangoDe(a.nivel)}.`, ids: [a.id], importante: true };
    case 'sabotaje': return { t, tipo, texto: `Sabotaje en ${isla.nombre}: los revolucionarios de ${nombre(a)} liberan el puerto.`, ids: [a.id], importante: true };
    default: return { t, tipo, texto: '', ids: [], importante: false };
  }
}

/** Sucesos entre `desde` y `hasta` (más recientes primero). */
export function cronica(mar: number, desde: number, hasta = Date.now()): Suceso[] {
  const lista: Suceso[] = [];
  for (let slot = Math.floor(hasta / PASO); slot >= Math.floor(desde / PASO); slot--) {
    const s = suceso(mar, slot);
    if (s.t <= hasta && s.t >= desde) lista.push(s);
  }
  return lista;
}

/** Hace cuánto, en texto. */
export function haceCuanto(t: number, ahora = Date.now()) {
  const m = Math.max(0, Math.round((ahora - t) / MIN));
  if (m < 1) return 'ahora mismo';
  if (m < 60) return `hace ${m} min`;
  const h = Math.round(m / 60);
  if (h < 24) return `hace ${h} h`;
  return `hace ${Math.round(h / 24)} d`;
}
