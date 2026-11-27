// Rasgos de carácter (se eligen 3) y sueños. Los "efectos" los usará el motor de simulación (fase 6).
import type { Bando } from '../cuenta';

export interface Rasgo {
  id: string;
  nombre: string;
  ventaja: string;
  desventaja: string;
  /** Rasgos con los que no se puede combinar. */
  choca?: string[];
  /** Modificadores para la simulación (pesos de acciones y estadísticas). */
  efectos: Record<string, number>;
}

export const RASGOS: Rasgo[] = [
  { id: 'inteligente', nombre: 'Inteligente', ventaja: 'Aprende técnicas nuevas un 25% más rápido.', desventaja: 'Empieza con menos fuerza.',
    efectos: { aprendizaje: 1.25, fuerza: -1 } },
  { id: 'rudo', nombre: 'Rudo', ventaja: 'Pega más fuerte en el cuerpo a cuerpo.', desventaja: 'Le cuesta mucho hacer amigos.',
    efectos: { danio: 1.2, amistad: 0.7 } },
  { id: 'astuto', nombre: 'Astuto', ventaja: 'Encuentra atajos y engaña en los combates.', desventaja: 'Los demás desconfían de él.',
    efectos: { esquiva: 1.2, confianza: 0.8 } },
  { id: 'valiente', nombre: 'Valiente', ventaja: 'Nunca se acobarda: lucha mejor contra rivales más fuertes.', desventaja: 'Se mete en peleas que no puede ganar.',
    choca: ['prudente'], efectos: { contraFuertes: 1.25, temeridad: 1.5 } },
  { id: 'prudente', nombre: 'Prudente', ventaja: 'Se hiere menos y sabe retirarse a tiempo.', desventaja: 'Deja pasar oportunidades arriesgadas.',
    choca: ['valiente'], efectos: { heridas: 0.75, riesgo: 0.6 } },
  { id: 'leal', nombre: 'Leal', ventaja: 'Su tripulación le quiere: lucha mejor en equipo.', desventaja: 'Nunca abandona a nadie, aunque le convenga.',
    efectos: { equipo: 1.2, traicion: 0 } },
  { id: 'avaricioso', nombre: 'Avaricioso', ventaja: 'Saca más doblones de tesoros y comercio.', desventaja: 'Gana notoriedad antes y puede caer en la traición.',
    choca: ['honrado'], efectos: { botin: 1.3, notoriedad: 1.3, traicion: 1.5 } },
  { id: 'honrado', nombre: 'Honrado', ventaja: 'La gente confía en él y la marina le persigue menos.', desventaja: 'No puede robar, mentir ni hacer trampas.',
    choca: ['avaricioso'], efectos: { confianza: 1.3, notoriedad: 0.7, robo: 0 } },
  { id: 'curioso', nombre: 'Curioso', ventaja: 'Descubre islas, tesoros y frutas antes que nadie.', desventaja: 'Se distrae a menudo de su objetivo.',
    efectos: { exploracion: 1.4, foco: 0.8 } },
  { id: 'carismatico', nombre: 'Carismático', ventaja: 'Recluta tripulantes con facilidad.', desventaja: 'Atrae rivales celosos.',
    efectos: { reclutar: 1.4, rivales: 1.3 } },
  { id: 'gloton', nombre: 'Glotón', ventaja: 'Recupera la vida más rápido cuando come.', desventaja: 'Gasta muchos doblones en comida.',
    efectos: { curacion: 1.4, gastos: 1.3 } },
  { id: 'orgulloso', nombre: 'Orgulloso', ventaja: 'Acepta todos los duelos y gana fama con ellos.', desventaja: 'Nunca pide ayuda, ni herido.',
    efectos: { fama: 1.3, pedirAyuda: 0 } },
];

export const MAX_RASGOS = 3;

/** ¿Se puede añadir este rasgo a los ya elegidos? Devuelve el motivo si no. */
export function puedeAnadir(elegidos: string[], id: string): string | null {
  if (elegidos.includes(id)) return null;
  if (elegidos.length >= MAX_RASGOS) return `Ya tienes ${MAX_RASGOS} rasgos. Quita uno para elegir otro.`;
  const r = RASGOS.find((x) => x.id === id)!;
  const choque = elegidos.find((e) => r.choca?.includes(e));
  if (choque) return `${r.nombre} no casa con ${RASGOS.find((x) => x.id === choque)!.nombre}.`;
  return null;
}

export interface Sueno { id: string; texto: string; bandos?: Bando[] }

export const SUENOS: Sueno[] = [
  { id: 'isla-sin-nombre', texto: 'Encontrar la Isla Sin Nombre, la que no aparece en ningún mapa.' },
  { id: 'fortuna', texto: 'Reunir una fortuna que haya que contar en barcos llenos de oro.' },
  { id: 'cancion', texto: 'Que su nombre se cante en todas las tabernas de los cuatro mares.' },
  { id: 'espinazo', texto: 'Descubrir qué hay en lo alto de El Espinazo.' },
  { id: 'barco', texto: 'Construir el barco más rápido que haya surcado el mar.' },
  { id: 'faro', texto: 'Reunir las tres llaves del Faro Hundido y abrir su puerta.' },
  { id: 'venganza', texto: 'Vengar al pueblo donde nació, que ardió cuando era niño.' },
  { id: 'familia', texto: 'Encontrar a su hermano, que se fue al mar y nunca volvió.' },
  { id: 'senda', texto: 'Cruzar la Senda Profunda de punta a punta y volver para contarlo.' },
  { id: 'almirante', texto: 'Llegar a almirante y llevar la paz a los cuatro mares.', bandos: ['marine'] },
  { id: 'cazador', texto: 'Atrapar al pirata más buscado del mundo.', bandos: ['marine'] },
  { id: 'liberar', texto: 'Liberar todas las islas que viven bajo el yugo de un tirano.', bandos: ['revolucionario'] },
  { id: 'consejo', texto: 'Derribar al Consejo de los Mares y que cada isla se gobierne sola.', bandos: ['revolucionario'] },
];

export const suenosPara = (b: Bando) => SUENOS.filter((s) => !s.bandos || s.bandos.includes(b));
