// Búsqueda de frutas del poder: rumor → 3 pistas (como mucho una al día) → isla del guardián →
// vencerlo → comerla. Solo hay una de cada fruta por mar: si otro llega antes, se acabó.
// Recompensas (piratas y revolucionarios) y méritos (marines), con topes diarios.
import { FRUTAS } from '../datos/frutas';
import { personajes, personajesDeOtros, type PersonajeGuardado } from '../cuenta';
import { frutasDelMar, RANGOS } from './cronica';
import { islaDePersonaje, islasDelMundo, nombreZona, type IslaMundo } from './habitantes';
import { ZONAS } from './geografia';

export interface Busqueda {
  fruta: string;
  isla: number;
  pistas: number;
  /** Día (AAAA-MM-DD) de la última pista: como mucho una al día. */
  ultimaPista: string;
  empezada: number;
  /** Ya venció al guardián: solo falta decidir si se la come. */
  vencido?: boolean;
}
export const PISTAS_NECESARIAS = 3;
export const NIVEL_RUMORES = 5;
/** El guardián tiene como mínimo nivel 39; desde el nivel 40, el mismo nivel que tú. */
export const NIVEL_GUARDIAN = 39;
export const nivelGuardian = (nivelJugador: number) => Math.max(NIVEL_GUARDIAN, nivelJugador);
const diaDe = (t: number) => new Date(t).toISOString().slice(0, 10);

/** Frutas que ya tienen dueño en este mar (jugadores y el único bot con fruta). */
export function frutasOcupadas(mar: number): string[] {
  const jugadores = [...personajes(), ...personajesDeOtros()].filter((x) => x.mar === mar && x.fruta).map((x) => x.fruta!);
  return [...jugadores, ...frutasDelMar(mar, jugadores).keys()];
}

/** Una fruta libre al azar (las legendarias salen mucho menos). */
function frutaLibre(mar: number, r: () => number): string | null {
  const ocupadas = frutasOcupadas(mar);
  const peso = { comun: 6, rara: 4, epica: 2, legendaria: 0.5 } as const;
  const libres = FRUTAS.filter((f) => !ocupadas.includes(f.id));
  if (!libres.length) return null;
  let t = r() * libres.reduce((s, f) => s + peso[f.rareza], 0);
  for (const f of libres) { t -= peso[f.rareza]; if (t <= 0) return f.id; }
  return libres[libres.length - 1].id;
}

const BIOMAS: Record<string, string> = {
  tropical: 'una isla de palmeras y arena blanca', desierto: 'una isla de dunas y sol que quema', nevada: 'una isla helada',
  volcanica: 'una isla con un volcán', flotante: 'una isla rara que parece flotar', ciudad: 'una isla con una ciudad grande', ruinas: 'una isla de ruinas antiguas',
};
const comoEs = (i: IslaMundo) => BIOMAS[i.bioma] ?? 'una isla poco conocida';

export const islaDeBusqueda = (b: Busqueda) => islasDelMundo()[b.isla];
export const nombreFruta = (id: string) => FRUTAS.find((f) => f.id === id)?.nombre ?? 'una fruta';

/** Texto de cada pista, cada vez más clara. */
export function textoPista(b: Busqueda): string {
  const i = islaDeBusqueda(b);
  if (b.pistas <= 0) return 'Un viejo marinero habla de una fruta con vetas brillantes escondida en algún lugar del mar.';
  if (b.pistas === 1) return `La fruta está en algún lugar del ${nombreZona(i.zona)}.`;
  if (b.pistas === 2) return `Es ${comoEs(i)}, en el ${nombreZona(i.zona)}.`;
  return `¡Está en ${i.nombre}! La vigila un guardián de nivel ${NIVEL_GUARDIAN} o más.`;
}

/**
 * Al explorar a veces se oye algo. Empieza una búsqueda o suma una pista (una al día).
 * Devuelve el texto para el diario o null si no ha pasado nada.
 */
export function oirRumor(p: PersonajeGuardado, r: () => number, t: number): { p: PersonajeGuardado; texto: string } | null {
  if (p.fruta || p.nivel < NIVEL_RUMORES || p.creador) return null;
  const dia = diaDe(t);
  const b = p.busqueda;
  if (!b) {
    const fruta = frutaLibre(p.mar, r);
    if (!fruta) return null;
    // La isla: lejos de aquí y en un mar donde su nivel le deje entrar
    const aqui = islaDePersonaje(p);
    const candidatas = islasDelMundo().filter((i) => i.id !== aqui.id && ZONAS[i.zona].nivelMinimo <= p.nivel + 5);
    const isla = candidatas[Math.floor(r() * candidatas.length)];
    const nueva: Busqueda = { fruta, isla: isla.id, pistas: 0, ultimaPista: dia, empezada: t };
    return { p: { ...p, busqueda: nueva }, texto: `Oyó un rumor: ${textoPista(nueva)}` };
  }
  if (b.pistas >= PISTAS_NECESARIAS || b.ultimaPista === dia) return null;
  const n: Busqueda = { ...b, pistas: b.pistas + 1, ultimaPista: dia };
  return { p: { ...p, busqueda: n }, texto: `Encontró una pista (${n.pistas} de ${PISTAS_NECESARIAS}): ${textoPista(n)}` };
}

/** ¿Está en la isla del guardián con todas las pistas? */
export function guardianAqui(p: PersonajeGuardado): boolean {
  const b = p.busqueda;
  return !!b && b.pistas >= PISTAS_NECESARIAS && islaDePersonaje(p).id === b.isla;
}

/** ¿Sigue libre la fruta que busca? (alguien pudo comérsela antes) */
export const frutaSigueLibre = (p: PersonajeGuardado) => !!p.busqueda && !frutasOcupadas(p.mar).includes(p.busqueda.fruta);

// --- Recompensas y méritos ---------------------------------------------------

/** Recompensa máxima que se puede ganar en un día (crece con el nivel). */
export const topeRecompensaDia = (nivel: number) => 40_000 * nivel;
/** Méritos máximos al día para un marine. */
export const topeMeritosDia = (nivel: number) => 20 + nivel * 4;

/** Lo que sube la recompensa al vencer (más si el rival es un marine). */
export const recompensaPorVictoria = (nivelRival: number, rivalMarine: boolean) => (rivalMarine ? 6000 : 1500) * nivelRival;
/** Méritos de un marine por capturar (más por los revolucionarios). */
export const meritosPorCaptura = (nivelRival: number, revolucionario: boolean) => Math.round(nivelRival * (revolucionario ? 1.5 : 1));

export function ganarRecompensa(p: PersonajeGuardado, cuanto: number, t = Date.now()): { p: PersonajeGuardado; sube: number } {
  if (p.bando === 'marine' || p.creador) return { p, sube: 0 };
  const dia = diaDe(t);
  const hoy = p.notoriedad?.dia === dia ? p.notoriedad.valor : 0;
  const sube = Math.max(0, Math.min(cuanto, topeRecompensaDia(p.nivel) - hoy));
  return { p: { ...p, recompensa: (p.recompensa ?? 0) + sube, notoriedad: { dia, valor: hoy + sube }, ...(sube > 0 ? { ultimaFechoria: t } : {}) }, sube };
}
export function ganarMeritos(p: PersonajeGuardado, cuanto: number, t = Date.now()): { p: PersonajeGuardado; sube: number } {
  if (p.bando !== 'marine') return { p, sube: 0 };
  const dia = diaDe(t);
  const hoy = p.notoriedad?.dia === dia ? p.notoriedad.valor : 0;
  const sube = Math.max(0, Math.min(cuanto, topeMeritosDia(p.nivel) - hoy));
  return { p: { ...p, meritos: (p.meritos ?? 0) + sube, notoriedad: { dia, valor: hoy + sube } }, sube };
}

/** Méritos necesarios para cada rango de la Marina (mismo orden que RANGOS). */
export const MERITOS_RANGO = [0, 30, 120, 350, 900, 2200, 5000, 10000, 18000];
/** Almirantes por mar. */
export const ALMIRANTES_POR_MAR = 4;

/** Rango de un marine jugador: por méritos, y Almirante solo los 4 con más méritos del mar. */
export function rangoMarine(p: PersonajeGuardado): string {
  if (p.creador) return 'Creador';
  const m = p.meritos ?? 0;
  let i = 0;
  while (i + 1 < MERITOS_RANGO.length && m >= MERITOS_RANGO[i + 1]) i++;
  if (RANGOS[i] === 'Almirante') {
    const rivales = [...personajes(), ...personajesDeOtros()].filter((x) => x.mar === p.mar && x.bando === 'marine' && x.id !== p.id && !x.creador && (x.meritos ?? 0) > m);
    if (rivales.length >= ALMIRANTES_POR_MAR) i--;
  }
  return RANGOS[i];
}
