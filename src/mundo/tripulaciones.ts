// Tripulaciones: las fundan los piratas de nivel 10+, se une cualquier pirata y también bots.
// Los bots se van uniendo solos con el tiempo (reparto fijo para que todos vean lo mismo).
import { personajes, personajesDeOtros, type PersonajeGuardado } from '../cuenta';
import { estado, type FilaTripulacion } from '../servidor';
import { botsDelMar, type Bot } from './habitantes';
import { recompensa } from './cronica';
import { COLORES_BARCO } from '../arte/barcos';

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

// --- Ventajas de ir en tripulación -----------------------------------------------

/** Bonus de fuerza y resistencia en combate: +1% por miembro, como mucho +10%. */
export function bonoTripulacion(p: PersonajeGuardado): number {
  const t = tripulacionDe(p);
  if (!t) return 0;
  const r = resumenTripulacion(t, botsDeTripulaciones(t.mar).get(t.id) ?? []);
  return Math.min(0.10, 0.01 * r.miembros);
}

/** Cargos que puede nombrar el capitán, con su ventaja. */
export const CARGOS = {
  segundo: { nombre: 'Segundo de a bordo', ventaja: '+5% de fuerza en combate' },
  contramaestre: { nombre: 'Contramaestre', ventaja: '+5% de resistencia en combate' },
  navegante: { nombre: 'Navegante', ventaja: 'Viajes un 10% más rápidos' },
  cocinero: { nombre: 'Cocinero', ventaja: '+1 grog gratis en cada combate' },
  medico: { nombre: 'Médico', ventaja: '+1 botiquín gratis en cada combate' },
} as const;
export type Cargo = keyof typeof CARGOS;

/** El cargo de un personaje en su tripulación (o null). */
export function cargoDe(p: PersonajeGuardado): Cargo | null {
  const t = tripulacionDe(p);
  if (!t?.cargos) return null;
  return (Object.entries(t.cargos).find(([, id]) => id === p.id)?.[0] as Cargo) ?? null;
}

/** Bandera de la tripulación: los colores de bandera del barco del capitán. */
export function banderaDe(t: FilaTripulacion): { colorBandera: number; colorInsignia: number } {
  const yo = personajes();
  const cap = [...yo, ...personajesDeOtros()].find((x) => x.id === t.capitan);
  const serie = COLORES_BARCO[cap?.barco ?? 'barca'];
  return { colorBandera: cap?.navio?.colorBandera ?? serie.colorBandera, colorInsignia: cap?.navio?.colorInsignia ?? serie.colorInsignia };
}
