// Cuenta y personajes del jugador, guardados en el servidor (Supabase) con copia local.
import type { AspectoPersonaje } from './arte/personajes';
import { entrarConNombre, estado, guardar, salir, type FilaPersonaje } from './servidor';
import { CATALOGO_ARMAS, CATALOGO_HABILIDADES, arsenalInicial, type Arsenal } from './datos/arsenal';

export type Bando = 'pirata' | 'marine' | 'revolucionario';
export const BANDOS: Record<Bando, { nombre: string; descripcion: string }> = {
  pirata: { nombre: 'Pirata', descripcion: 'Libre como el viento. Busca tesoros, fama y una tripulación.' },
  marine: { nombre: 'Marine', descripcion: 'Defiende el orden de los mares. Sube de rango cazando piratas.' },
  revolucionario: { nombre: 'Revolucionario', descripcion: 'Lucha en la sombra contra los poderosos. Sabotea y libera islas.' },
};

export interface Cuenta { nombre: string; metodo: 'correo'; correo?: string; creada: number }
export interface PersonajeGuardado {
  id: string;
  nombre: string;
  bando: Bando;
  aspecto: AspectoPersonaje;
  rasgos: string[];
  sueno: string;
  apodo?: string;
  /** Objetivo actual que el jugador le ha puesto. */
  objetivo?: string;
  /** Experiencia acumulada en el nivel actual. */
  xp?: number;
  /** Armas, habilidades y mejoras. */
  arsenal?: Arsenal;
  /** Fruta del poder que se ha comido. */
  fruta?: string;
  recompensa?: number;
  /** Solo marines: piratas y revolucionarios que ha capturado. */
  capturas?: { pirata: number; revolucionario: number };
  barco?: 'barca' | 'carabela' | 'galeon';
  /** Provisiones compradas en la tienda (se gastan en combate). */
  bolsa?: { grog: number; botiquin: number };
  /** Personaje de una cuenta con rol de creador. */
  creador?: boolean;
  /** Lo que está haciendo ahora (ver mundo/vida.ts). */
  accion?: import('./mundo/vida').AccionPersonaje;
  /** Sucesos de su vida para el diario: [fecha, texto]. */
  registro?: [number, string][];
  /** Búsqueda de fruta en curso (rumor, pistas e isla del guardián). */
  busqueda?: import('./mundo/busqueda').Busqueda;
  /** Méritos de marine (deciden su rango). */
  meritos?: number;
  /** Recompensa o méritos ganados hoy (tope diario). */
  notoriedad?: { dia: string; valor: number };
  /** Lo ganado hoy (para los topes diarios de la economía). */
  ganado?: { dia: string; oro: number; xp: number; victorias: number };
  /** Isla donde está ahora (si falta, se le asigna una al cargar). */
  islaId?: number;
  nivel: number;
  doblones: number;
  mar: number;
  creado: number;
}

export const MARES = [
  { id: 1, nombre: 'Mar Esmeralda' },
  { id: 2, nombre: 'Mar Plateado' },
  { id: 3, nombre: 'Mar Escarlata' },
];
export const META_COMUNIDAD = 1000;

function leer<T>(clave: string, defecto: T): T {
  try { const t = localStorage.getItem(clave); return t ? (JSON.parse(t) as T) : defecto; } catch { return defecto; }
}
function escribir(clave: string, v: unknown) {
  try { localStorage.setItem(clave, JSON.stringify(v)); } catch { /* sin almacenamiento */ }
}

// --- Conversión entre el personaje del juego y la fila del servidor ---------
function filaAPersonaje(f: FilaPersonaje): PersonajeGuardado {
  const d = f.datos as Partial<PersonajeGuardado>;
  return {
    ...d, rasgos: d.rasgos ?? [], sueno: d.sueno ?? '', aspecto: d.aspecto!,
    id: f.id, nombre: f.nombre, apodo: f.apodo ?? undefined, bando: f.bando as Bando, nivel: f.nivel,
    doblones: Number(f.doblones), recompensa: f.bando === 'marine' ? 0 : Number(f.recompensa), creador: f.creador, mar: f.mar, creado: Date.parse(f.creado),
  };
}
function personajeAFila(p: PersonajeGuardado): FilaPersonaje {
  const { id, nombre, apodo, bando, nivel, doblones, recompensa, creador, mar, creado, ...datos } = p;
  return {
    id, dueno: estado.usuario?.id ?? '', mar, nombre, apodo: apodo ?? null, bando, datos, nivel: Math.min(80, nivel),
    doblones, recompensa: bando === 'marine' ? 0 : recompensa ?? 0, creador: !!creador, creado: new Date(creado).toISOString(),
  };
}

// --- Cuenta (ahora con el servidor: inicio de sesión por enlace al correo) --
export function cuentaActual(): Cuenta | null {
  if (!estado.usuario) return null;
  return { nombre: estado.perfil?.nombre ?? 'Marinero', metodo: 'correo', correo: estado.usuario.email, creada: Date.parse(estado.usuario.created_at) };
}
/** Entra (o crea la cuenta) con nombre de usuario + correo. Devuelve un error en texto o null. */
export const firmarPacto = (nombre: string, correo: string) => entrarConNombre(nombre, correo);
export async function cerrarSesion() { await salir(); }

export const personajes = (): PersonajeGuardado[] => estado.mios.map(filaAPersonaje);
/** Personajes de otros jugadores en este mar (para verlos en el mapa). */
export const personajesDeOtros = (): PersonajeGuardado[] => [...estado.otros.values()].filter((f) => (f.datos as { aspecto?: unknown }).aspecto).map(filaAPersonaje);
export function actualizarPersonaje(p: PersonajeGuardado) { guardar(personajeAFila(p)); }
export function guardarPersonaje(p: Omit<PersonajeGuardado, 'id' | 'nivel' | 'doblones' | 'creado'>): PersonajeGuardado {
  let nuevo: PersonajeGuardado = { ...p, id: crypto.randomUUID().slice(0, 12), nivel: 1, doblones: 100, creado: Date.now(), arsenal: arsenalInicial(), barco: 'barca' };
  if (modoCreador()) nuevo = { ...nuevo, ...equipoCreador() };
  guardar(personajeAFila(nuevo));
  escribir('activo', nuevo.id);
  return nuevo;
}
export function personajeActivo(): PersonajeGuardado | null {
  const lista = personajes();
  const id = leer<string | null>('activo', null);
  return lista.find((p) => p.id === id) ?? lista[0] ?? null;
}
export const elegirActivo = (id: string) => escribir('activo', id);

/** Sube al servidor los personajes que se crearon en la versión de prueba (solo en el navegador). */
export function migrarLocales() {
  if (!estado.usuario) return 0;
  const viejos = leer<PersonajeGuardado[]>('personajes', []);
  if (!viejos.length) return 0;
  for (const p of viejos) if (!estado.mios.some((f) => f.id === p.id)) guardar(personajeAFila({ ...p, creador: false }));
  try { localStorage.removeItem('personajes'); } catch { /* nada */ }
  return viejos.length;
}

export function marActual(): number {
  const q = Number(new URLSearchParams(location.search).get('mar'));
  if (MARES.some((m) => m.id === q)) return q;
  return 1;
}

export const arsenalDe = (p: PersonajeGuardado): Arsenal => p.arsenal ?? arsenalInicial();

// ---------------------------------------------------------------------------
// Modo creador: lo decide el servidor según el rol de la cuenta (tabla perfiles).
// No se puede activar desde el navegador.

export const RECOMPENSA_MAXIMA = 9_999_999_999;
export const modoCreador = (): boolean => estado.perfil?.rol === 'creador';
export const esModerador = (): boolean => estado.perfil?.rol === 'moderador' || estado.perfil?.rol === 'creador';
export function equipoCreador(): Partial<PersonajeGuardado> {
  return {
    creador: true, nivel: 80, doblones: 999_999_999, recompensa: RECOMPENSA_MAXIMA, barco: 'galeon', fruta: 'ceniza',
    arsenal: {
      armas: Object.fromEntries(CATALOGO_ARMAS.map((a) => [a.id, 5])),
      principal: 'espada-espinazo', secundaria: 'guanteletes', escudo: 'caparazon',
      habilidades: Object.fromEntries(CATALOGO_HABILIDADES.map((h) => [h.id, 5])),
      equipadas: ['contraataque', 'vendaje', 'corazon-leon', 'piel-hierro'],
      mejoras: { vida: 60, fuerza: 40, tecnica: 40, resistencia: 50, velocidad: 47 },
    },
  };
}
