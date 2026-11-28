// Estadísticas, objetivos y logros.
import type { Bando } from '../cuenta';

export interface Estadisticas { vida: number; fuerza: number; tecnica: number; velocidad: number; resistencia: number; fama: number }

export const NOMBRES_ESTADISTICAS: Record<keyof Estadisticas, string> = {
  vida: 'Vida', fuerza: 'Fuerza', tecnica: 'Técnica', velocidad: 'Velocidad', resistencia: 'Resistencia', fama: 'Fama',
};

/** Estadísticas de partida según los rasgos (sobre 100). */
export function estadisticasIniciales(rasgos: string[], nivel = 1): Estadisticas {
  const e: Estadisticas = { vida: 40, fuerza: 8, tecnica: 8, velocidad: 8, resistencia: 8, fama: 0 };
  const suma: Record<string, Partial<Estadisticas>> = {
    inteligente: { tecnica: 5, fuerza: -2 }, rudo: { fuerza: 5, resistencia: 1 }, astuto: { velocidad: 4, tecnica: 1 },
    valiente: { fuerza: 2, resistencia: 2 }, prudente: { resistencia: 4, vida: 5 }, leal: { resistencia: 2, vida: 5 },
    avaricioso: { velocidad: 2 }, honrado: { resistencia: 2, fama: 2 }, curioso: { velocidad: 3, tecnica: 1 },
    carismatico: { fama: 5 }, gloton: { vida: 10, velocidad: -1 }, orgulloso: { fuerza: 2, fama: 3 },
  };
  for (const r of rasgos) for (const [k, v] of Object.entries(suma[r] ?? {})) e[k as keyof Estadisticas] += v as number;
  const extra = (nivel - 1) * 2;
  e.fuerza += extra; e.tecnica += extra; e.velocidad += extra; e.resistencia += extra; e.vida += extra * 3;
  return e;
}

export interface Objetivo { id: string; texto: string; pasos: string[]; bandos?: Bando[] }

export const OBJETIVOS: Objetivo[] = [
  { id: 'fuerte', texto: 'Hacerse más fuerte', pasos: ['Entrenar 5 veces', 'Ganar 3 combates', 'Encontrar un maestro', 'Llegar al nivel 10'] },
  { id: 'fruta', texto: 'Encontrar una fruta del poder', pasos: ['Explorar 3 islas', 'Oír un rumor sobre una fruta', 'Llegar a la isla del rumor', 'Conseguir la fruta'] },
  { id: 'tripulacion', texto: 'Formar una tripulación', pasos: ['Hacer 3 amigos', 'Conseguir un barco mejor', 'Reclutar 2 tripulantes'], bandos: ['pirata'] },
  { id: 'zona', texto: 'Llegar a la Senda de las Mareas', pasos: ['Llegar al nivel 15', 'Conseguir un barco que aguante', 'Cruzar las Aguas Dormidas'] },
  { id: 'rango', texto: 'Subir de rango', pasos: ['Cumplir 3 misiones', 'Atrapar a un pirata', 'Ganar méritos ante un oficial'], bandos: ['marine'] },
  { id: 'recompensa', texto: 'Conseguir recompensa', pasos: ['Hacer algo ilegal', 'Que te vea la marina', 'Salir en un cartel de Se busca'], bandos: ['pirata', 'revolucionario'] },
  { id: 'celula', texto: 'Unirse a una célula revolucionaria', pasos: ['Encontrar a un contacto', 'Superar una prueba', 'Completar un sabotaje'], bandos: ['revolucionario'] },
];
export const objetivosPara = (b: Bando) => OBJETIVOS.filter((o) => !o.bandos || o.bandos.includes(b));

export interface Logro { id: string; nombre: string; como: string; icono: string }
export const LOGROS: Logro[] = [
  { id: 'primer-viaje', nombre: 'Primera travesía', como: 'Viaja a otra isla.', icono: '⛵' },
  { id: 'primera-victoria', nombre: 'Primera victoria', como: 'Gana un combate.', icono: '⚔' },
  { id: 'duelista', nombre: 'Duelista', como: 'Gana un duelo contra otro jugador.', icono: '🤺' },
  { id: 'a-bordo', nombre: 'A bordo', como: 'Únete a una tripulación.', icono: '🏴‍☠️' },
  { id: 'capitan', nombre: 'Capitán', como: 'Funda tu propia tripulación.', icono: '🧭' },
  { id: 'cartel', nombre: 'Se busca', como: 'Ten una recompensa por tu cabeza.', icono: '📜' },
  { id: 'muy-buscado', nombre: 'Muy buscado', como: 'Llega a 100 M de recompensa.', icono: '💀' },
  { id: 'capturas', nombre: 'Mano dura', como: 'Captura a 10 piratas o revolucionarios (marines).', icono: '⚓' },
  { id: 'almirante', nombre: 'Almirante', como: 'Llega al rango de Almirante (marines).', icono: '🎖' },
  { id: 'pista', nombre: 'Tras la pista', como: 'Reúne las 3 pistas de una fruta.', icono: '🔎' },
  { id: 'fruta', nombre: 'Sabor prohibido', como: 'Cómete una fruta del poder.', icono: '🍈' },
  { id: 'nivel10', nombre: 'Curtido', como: 'Llega al nivel 10.', icono: '⭐' },
  { id: 'nivel25', nombre: 'Veterano', como: 'Llega al nivel 25.', icono: '🌟' },
  { id: 'nivel50', nombre: 'Leyenda', como: 'Llega al nivel 50.', icono: '👑' },
  { id: 'rico', nombre: 'Bolsillos llenos', como: 'Junta 100.000 doblones.', icono: '💰' },
  { id: 'galeon', nombre: 'Señor de los mares', como: 'Compra un galeón.', icono: '🚢' },
];
