// Tripulaciones: las fundan los piratas de nivel 10+, se une cualquier pirata y también bots.
// Los bots se van uniendo solos con el tiempo (reparto fijo para que todos vean lo mismo).
import { personajes, personajesDeOtros, type PersonajeGuardado } from '../cuenta';
import { estado, type FilaTripulacion } from '../servidor';
import { botsDelMar, type Bot } from './habitantes';
import { recompensa } from './cronica';

export const NIVEL_FUNDAR = 10;
/** Bots que se unen al fundarla, cada cuánto llega otro y el máximo. */
const BOTS_INICIALES = 2, HORAS_POR_BOT = 2, MAX_BOTS = 12;

export const tripulacionesDelMar = (mar: number) => estado.tripulaciones.filter((t) => t.mar === mar);
export const tripulacionDe = (p: PersonajeGuardado) => (p.tripulacion ? estado.tripulaciones.find((t) => t.id === p.tripulacion) ?? null : null);

const hash = (s: string) => { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };

/** Qué bots hay en cada tripulación del mar (cada bot solo en una). */
export function botsDeTripulaciones(mar: number, ahora = Date.now()): Map<string, Bot[]> {
  const piratas = botsDelMar(mar).filter((b) => b.bando === 'pirata');
  const libres = new Set(piratas.map((b) => b.id));
  const r = new Map<string, Bot[]>();
  for (const t of tripulacionesDelMar(mar)) {           // por orden de fundación
    const horas = Math.max(0, (ahora - Date.parse(t.creada)) / 3600_000);
    const cuantos = Math.min(MAX_BOTS, BOTS_INICIALES + Math.floor(horas / HORAS_POR_BOT));
    const orden = piratas.filter((b) => libres.has(b.id)).sort((a, b) => hash(t.id + a.id) - hash(t.id + b.id));
    const elegidos = orden.slice(0, cuantos);
    for (const b of elegidos) libres.delete(b.id);
    r.set(t.id, elegidos);
  }
  return r;
}

/** Jugadores (los tuyos y los de otros) que están en una tripulación. */
export function jugadoresDe(t: FilaTripulacion): PersonajeGuardado[] {
  const yo = personajes();
  return [...yo, ...personajesDeOtros().filter((x) => !yo.some((y) => y.id === x.id))].filter((x) => x.tripulacion === t.id || x.id === t.capitan);
}

/** Resumen para listas: miembros, capitán y recompensa total. */
export function resumenTripulacion(t: FilaTripulacion, bots: Bot[]) {
  const jugadores = jugadoresDe(t);
  const capitan = jugadores.find((x) => x.id === t.capitan);
  const total = jugadores.reduce((s, x) => s + (x.recompensa ?? 0), 0) + bots.reduce((s, b) => s + recompensa(b), 0);
  return { jugadores, bots, capitan, miembros: jugadores.length + bots.length, total };
}
