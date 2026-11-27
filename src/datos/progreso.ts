// Estadísticas, objetivos y logros. El motor de simulación (fase 6) los hará avanzar.
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

export interface Logro { id: string; nombre: string; como: string }
export const LOGROS: Logro[] = [
  { id: 'primer-viaje', nombre: 'Primera travesía', como: 'Viaja a otra isla.' },
  { id: 'primer-duelo', nombre: 'Primer duelo', como: 'Gana un combate.' },
  { id: 'amigos', nombre: 'Buena compañía', como: 'Haz 5 amigos.' },
  { id: 'tripulacion', nombre: 'Capitán', como: 'Forma tu propia tripulación.' },
  { id: 'cartel', nombre: 'Se busca', como: 'Sal en un cartel con recompensa.' },
  { id: 'fruta', nombre: 'Sabor prohibido', como: 'Cómete una fruta del poder.' },
  { id: 'maestro', nombre: 'Discípulo', como: 'Entrena con un maestro.' },
  { id: 'tesoro', nombre: 'Cazatesoros', como: 'Encuentra un tesoro.' },
  { id: 'senda', nombre: 'Más allá de la calma', como: 'Llega a la Senda de las Mareas.' },
  { id: 'nivel25', nombre: 'Veterano', como: 'Llega al nivel 25.' },
];
