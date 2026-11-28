// Momentos clave con decisiones y maestros en las islas.
// Los momentos aparecen mientras el personaje vive (también con el juego cerrado). Si el jugador
// no decide en 12 horas, el personaje decide solo según su carácter.
import type { PersonajeGuardado } from '../cuenta';
import { arsenalDe } from '../cuenta';
import { CATALOGO_HABILIDADES, habilidadUsable } from '../datos/arsenal';
import { islaDePersonaje, type IslaMundo } from './habitantes';
import { tripulacionDe } from './tripulaciones';

const HORA = 3_600_000;
export const HORAS_PARA_DECIDIR = 12;
const diaDe = (t: number) => new Date(t).toISOString().slice(0, 10);
const tiene = (p: PersonajeGuardado, r: string) => p.rasgos.includes(r);
const nota = (p: PersonajeGuardado, t: number, texto: string): PersonajeGuardado => ({ ...p, registro: [...(p.registro ?? []), [t, texto] as [number, string]].slice(-40) });
const oro = (p: PersonajeGuardado, n: number) => (p.creador ? p : { ...p, doblones: Math.max(0, p.doblones + n) });
const xp = (p: PersonajeGuardado, n: number): PersonajeGuardado => {
  let nivel = p.nivel, x = (p.xp ?? 0) + n;
  while (x >= 50 * nivel * nivel && nivel < 80) { x -= 50 * nivel * nivel; nivel++; }
  return { ...p, nivel, xp: x };
};

export interface Momento { id: string; desde: number; caduca: number }
interface Opcion { id: string; texto: string; efecto: (p: PersonajeGuardado, t: number) => { p: PersonajeGuardado; texto: string } }
interface DefMomento {
  id: string; titulo: string; texto: string;
  puede: (p: PersonajeGuardado) => boolean;
  opciones: Opcion[];
  /** Qué elegiría él solo, según su carácter. */
  porCaracter: (p: PersonajeGuardado) => string;
}

export const MOMENTOS: DefMomento[] = [
  {
    id: 'naufrago', titulo: 'Un náufrago', texto: 'Flotando agarrado a un tablón, un náufrago pide ayuda a gritos. Subirlo a bordo cuesta comida y tiempo.',
    puede: () => true,
    opciones: [
      { id: 'salvar', texto: '🛟 Salvarlo (−50 doblones)', efecto: (p, t) => { const x = xp(oro(p, -50), 20 + p.nivel * 4); return { p: nota(x, t, 'Salvó a un náufrago. Le contó historias de islas lejanas.'), texto: 'Lo salvas. Agradecido, te cuenta secretos del mar (+experiencia).' }; } },
      { id: 'ignorar', texto: '⛵ Seguir de largo', efecto: (p, t) => ({ p: nota(p, t, 'Dejó atrás a un náufrago. Los gritos se perdieron en el viento.'), texto: 'Sigues tu rumbo. Los gritos se pierden en el viento.' }) },
    ],
    porCaracter: (p) => (tiene(p, 'honrado') || tiene(p, 'leal') || tiene(p, 'valiente') ? 'salvar' : 'ignorar'),
  },
  {
    id: 'cofre', titulo: 'Un cofre sospechoso', texto: 'Entre las rocas aparece un cofre cerrado. Tiene marcas extrañas en la cerradura... podría tener trampa.',
    puede: () => true,
    opciones: [
      { id: 'abrir', texto: '🗝 Abrirlo', efecto: (p, t) => {
        const suerte = ((t / 1000) | 0) % 3 !== 0;   // 2 de cada 3 veces sale bien
        return suerte
          ? { p: nota(oro(p, 400), t, 'Abrió un cofre misterioso: ¡400 doblones dentro!'), texto: '¡Clic! Dentro hay 400 doblones.' }
          : { p: nota(oro(p, -150), t, 'Abrió un cofre con trampa y tuvo que pagar 150 doblones en curas.'), texto: '¡Era una trampa! Las curas te cuestan 150 doblones.' };
      } },
      { id: 'dejar', texto: '🚶 Dejarlo donde está', efecto: (p, t) => ({ p: nota(p, t, 'Dejó un cofre sospechoso sin tocar. Nunca sabrá qué había dentro.'), texto: 'Más vale prevenir. Nunca sabrás qué había dentro.' }) },
    ],
    porCaracter: (p) => (tiene(p, 'prudente') ? 'dejar' : 'abrir'),
  },
  {
    id: 'soborno', titulo: 'Un soborno', texto: 'Un pirata acorralado te ofrece 500 doblones a cambio de dejarlo escapar.',
    puede: (p) => p.bando === 'marine',
    opciones: [
      { id: 'aceptar', texto: '💰 Aceptar los 500 doblones', efecto: (p, t) => ({ p: nota({ ...oro(p, 500), meritos: Math.max(0, (p.meritos ?? 0) - 20) }, t, 'Aceptó un soborno. La Marina sospecha algo (−20 méritos).'), texto: 'Cobras 500 doblones... pero la Marina sospecha (−20 méritos).' }) },
      { id: 'capturar', texto: '⚓ Rechazarlo y capturarlo', efecto: (p, t) => { const c = p.capturas ?? { pirata: 0, revolucionario: 0 }; return { p: nota({ ...p, meritos: (p.meritos ?? 0) + 15, capturas: { ...c, pirata: c.pirata + 1 } }, t, 'Rechazó un soborno y capturó al pirata (+15 méritos).'), texto: 'La justicia no se vende: lo capturas (+15 méritos).' }; } },
    ],
    porCaracter: (p) => (tiene(p, 'avaricioso') && !tiene(p, 'honrado') ? 'aceptar' : 'capturar'),
  },
  {
    id: 'traicion', titulo: 'Una propuesta de traición', texto: 'Un tripulante te susurra un plan: robar parte del botín al capitán esta noche y desaparecer.',
    puede: (p) => !!tripulacionDe(p) && tripulacionDe(p)!.capitan !== p.id,
    opciones: [
      { id: 'traicionar', texto: '🗡 Robar el botín y marcharse', efecto: (p, t) => ({ p: nota({ ...oro(p, 600), tripulacion: undefined, separado: undefined }, t, 'Traicionó a su tripulación: robó parte del botín y se marchó.'), texto: 'Robas 600 doblones y te largas. Ya no tienes tripulación.' }) },
      { id: 'leal', texto: '🤝 Avisar al capitán', efecto: (p, t) => ({ p: nota(xp(p, 30 + p.nivel * 5), t, 'Descubrió una traición y avisó al capitán. La tripulación confía más en él.'), texto: 'Avisas al capitán. La tripulación confía más en ti (+experiencia).' }) },
    ],
    porCaracter: (p) => (tiene(p, 'leal') || tiene(p, 'honrado') ? 'leal' : tiene(p, 'avaricioso') ? 'traicionar' : 'leal'),
  },
  {
    id: 'reto', titulo: 'Un reto de honor', texto: 'Un viejo espadachín te desafía: «Demuestra lo que vales». Si ganas, aprenderás de él; si pierdes, te dolerá el orgullo.',
    puede: () => true,
    opciones: [
      { id: 'aceptar', texto: '⚔ Aceptar el reto', efecto: (p, t) => {
        const gana = tiene(p, 'valiente') || tiene(p, 'rudo') || ((t / 1000) | 0) % 2 === 0;
        return gana
          ? { p: nota(xp(p, 40 + p.nivel * 6), t, 'Ganó un reto de honor contra un viejo espadachín.'), texto: '¡Ganas! El viejo sonríe y te enseña un par de trucos (+experiencia).' }
          : { p: nota(xp(p, 10), t, 'Perdió un reto de honor, pero aprendió la lección.'), texto: 'Pierdes, pero aprendes la lección (+un poco de experiencia).' };
      } },
      { id: 'rechazar', texto: '🙇 Rechazarlo con respeto', efecto: (p, t) => ({ p: nota(p, t, 'Rechazó con respeto un reto de honor.'), texto: 'Rechazas el reto con una reverencia.' }) },
    ],
    porCaracter: (p) => (tiene(p, 'valiente') || tiene(p, 'orgulloso') || tiene(p, 'rudo') ? 'aceptar' : 'rechazar'),
  },
  {
    id: 'mapa', titulo: 'Un mapa a la venta', texto: 'En el puerto, un tipo con un solo ojo vende «el mapa de un tesoro» por 200 doblones.',
    puede: (p) => p.doblones >= 200,
    opciones: [
      { id: 'comprar', texto: '🗺 Comprarlo (−200 doblones)', efecto: (p, t) => {
        const bueno = ((t / 1000) | 0) % 2 === 0;
        return bueno
          ? { p: nota(oro(p, 300), t, 'Compró un mapa del tesoro... ¡y era de verdad! Sacó 500 doblones (300 de ganancia).'), texto: '¡Era verdadero! Encuentras 500 doblones (+300 de ganancia).' }
          : { p: nota(oro(p, -200), t, 'Le vendieron un mapa falso por 200 doblones.'), texto: 'El mapa era falso. Adiós a 200 doblones.' };
      } },
      { id: 'pasar', texto: '🙅 No fiarse', efecto: (p, t) => ({ p: nota(p, t, 'No se fió de un vendedor de mapas tuerto.'), texto: 'No te fías. El tuerto se va refunfuñando.' }) },
    ],
    porCaracter: (p) => (tiene(p, 'curioso') || tiene(p, 'avaricioso') ? 'comprar' : 'pasar'),
  },
  {
    id: 'denuncia', titulo: 'La Marina ofrece perdón', texto: 'Un oficial de la Marina te ofrece 400 doblones y olvidar tus delitos si delatas a otros rebeldes.',
    puede: (p) => p.bando === 'revolucionario',
    opciones: [
      { id: 'delatar', texto: '📜 Delatar (+400 doblones)', efecto: (p, t) => ({ p: nota({ ...oro(p, 400), recompensa: Math.floor((p.recompensa ?? 0) * 0.9) }, t, 'Delató a otros rebeldes a cambio de dinero. Su recompensa baja un 10%.'), texto: 'Cobras 400 doblones y tu recompensa baja un 10%... pero los tuyos no lo olvidarán.' }) },
      { id: 'negarse', texto: '✊ Negarse', efecto: (p, t) => ({ p: nota(xp(p, 25 + p.nivel * 5), t, 'Se negó a delatar a sus compañeros. La revolución sigue en pie.'), texto: 'Te niegas. La causa es más fuerte que el oro (+experiencia).' }) },
    ],
    porCaracter: (p) => (tiene(p, 'avaricioso') && !tiene(p, 'leal') ? 'delatar' : 'negarse'),
  },
];

export const defMomento = (id: string) => MOMENTOS.find((m) => m.id === id) ?? null;

/** A veces (como mucho uno al día) aparece un momento clave. */
export function quizaMomento(p: PersonajeGuardado, r: () => number, t: number): { p: PersonajeGuardado; texto: string } | null {
  if (p.momento || p.momentoDia === diaDe(t) || r() > 0.12) return null;
  const posibles = MOMENTOS.filter((m) => m.puede(p));
  if (!posibles.length) return null;
  const m = posibles[Math.floor(r() * posibles.length)];
  return { p: { ...p, momento: { id: m.id, desde: t, caduca: t + HORAS_PARA_DECIDIR * HORA }, momentoDia: diaDe(t) }, texto: `tiene un momento clave: ${m.titulo.toLowerCase()}` };
}

/** Aplica la decisión (del jugador o, si no contestó a tiempo, la de su carácter). */
export function resolverMomento(p: PersonajeGuardado, opcion: string | null, t: number): { p: PersonajeGuardado; texto: string } | null {
  const m = p.momento && defMomento(p.momento.id);
  if (!m) return null;
  const solo = opcion === null;
  const o = m.opciones.find((x) => x.id === (opcion ?? m.porCaracter(p))) ?? m.opciones[0];
  const r = o.efecto({ ...p, momento: undefined }, t);
  return { p: r.p, texto: solo ? `decidió solo («${o.texto.replace(/^\S+\s/, '')}»): ${r.texto}` : r.texto };
}

// --- Maestros ----------------------------------------------------------------------
const MAESTROS = ['la Vieja Remedios', 'el Tuerto Anselmo', 'Doña Quiteria', 'el Hermano Celso', 'Maese Gorka', 'la Capitana Iria',
  'el Abuelo Tiburcio', 'Madre Coral', 'el Silencioso Bento', 'Doña Salitre', 'el Gran Faustino', 'Ama Lucía'];
export const esMaestro = (i: IslaMundo) => i.especial === 'maestro';
export const nombreMaestro = (i: IslaMundo) => MAESTROS[i.id % MAESTROS.length];

/** Entrenar con un maestro: doble experiencia y, la primera vez, una habilidad nueva gratis. */
export function entrenarConMaestro(p: PersonajeGuardado, t: number): { p: PersonajeGuardado; multiplicador: number; texto?: string } {
  const isla = islaDePersonaje(p);
  if (!esMaestro(isla)) return { p, multiplicador: 1 };
  if ((p.maestros ?? []).includes(isla.id)) return { p, multiplicador: 2 };
  const a = structuredClone(arsenalDe(p));
  const nuevas = CATALOGO_HABILIDADES.filter((h) => !(h.id in a.habilidades) && h.nivelMin <= Math.max(p.nivel, 3) && habilidadUsable(h, a));
  let texto = `entrenó con ${nombreMaestro(isla)}, que vive en ${isla.nombre}`;
  if (nuevas.length) {
    const h = nuevas[(isla.id + p.nivel) % nuevas.length];
    a.habilidades[h.id] = 1;
    texto += ` y aprendió gratis la habilidad «${h.nombre}»`;
  }
  return { p: nota({ ...p, arsenal: a, maestros: [...(p.maestros ?? []), isla.id] }, t, `${texto[0].toUpperCase()}${texto.slice(1)}.`), multiplicador: 2, texto };
}
