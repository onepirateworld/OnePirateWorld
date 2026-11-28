// Logros: se comprueban con lo que ya guarda el personaje y, una vez conseguidos, son para siempre.
import { LOGROS } from '../datos/progreso';
import type { PersonajeGuardado } from '../cuenta';
import { tripulacionDe } from './tripulaciones';
import { PISTAS_NECESARIAS, rangoMarine } from './busqueda';

const hay = (p: PersonajeGuardado, re: RegExp) => (p.registro ?? []).some(([, t]) => re.test(t)) || (p.mientras ?? []).some(([, t]) => re.test(t));

const CONDICION: Record<string, (p: PersonajeGuardado) => boolean> = {
  'primer-viaje': (p) => hay(p, /Desembarcó en|ha vuelto al barco|Volvió al barco/),
  'primera-victoria': (p) => hay(p, /Venció a|Capturó a|Ganó un duelo|Venció al guardián/),
  duelista: (p) => hay(p, /Ganó un duelo|Duelo contra .*: ganó/),
  'a-bordo': (p) => !!tripulacionDe(p),
  capitan: (p) => tripulacionDe(p)?.capitan === p.id,
  cartel: (p) => p.bando !== 'marine' && (p.recompensa ?? 0) > 0,
  'muy-buscado': (p) => p.bando !== 'marine' && (p.recompensa ?? 0) >= 100_000_000,
  capturas: (p) => p.bando === 'marine' && ((p.capturas?.pirata ?? 0) + (p.capturas?.revolucionario ?? 0)) >= 10,
  almirante: (p) => p.bando === 'marine' && rangoMarine(p) === 'Almirante',
  pista: (p) => !!p.fruta || (p.busqueda?.pistas ?? 0) >= PISTAS_NECESARIAS,
  fruta: (p) => !!p.fruta,
  nivel10: (p) => p.nivel >= 10,
  nivel25: (p) => p.nivel >= 25,
  nivel50: (p) => p.nivel >= 50,
  rico: (p) => p.doblones >= 100_000,
  galeon: (p) => p.barco === 'galeon',
};

/** Logros nuevos que acaba de conseguir (ids). Los creadores no cuentan: lo tienen todo. */
export function logrosNuevos(p: PersonajeGuardado): string[] {
  if (p.creador) return [];
  const ya = new Set(p.logros ?? []);
  return LOGROS.filter((l) => !ya.has(l.id) && CONDICION[l.id]?.(p)).map((l) => l.id);
}
