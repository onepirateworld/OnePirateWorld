// Cuenta y personajes del jugador.
// MODO DE PRUEBA: hasta conectar Supabase (fase 9) todo se guarda en este navegador.
import type { AspectoPersonaje } from './arte/personajes';

export type Bando = 'pirata' | 'marine' | 'revolucionario';
export const BANDOS: Record<Bando, { nombre: string; descripcion: string }> = {
  pirata: { nombre: 'Pirata', descripcion: 'Libre como el viento. Busca tesoros, fama y una tripulación.' },
  marine: { nombre: 'Marine', descripcion: 'Defiende el orden de los mares. Sube de rango cazando piratas.' },
  revolucionario: { nombre: 'Revolucionario', descripcion: 'Lucha en la sombra contra los poderosos. Sabotea y libera islas.' },
};

export interface Cuenta { nombre: string; metodo: 'google' | 'correo'; correo?: string; creada: number }
export interface PersonajeGuardado {
  id: string;
  nombre: string;
  bando: Bando;
  aspecto: AspectoPersonaje;
  rasgos: string[];
  sueno: string;
  apodo?: string;
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

export const cuentaActual = () => leer<Cuenta | null>('cuenta', null);
export function firmarPacto(nombre: string, metodo: Cuenta['metodo'], correo?: string): Cuenta {
  const c: Cuenta = { nombre, metodo, correo, creada: Date.now() };
  escribir('cuenta', c);
  return c;
}
export function cerrarSesion() {
  try { localStorage.removeItem('cuenta'); } catch { /* nada */ }
}

export const personajes = () => leer<PersonajeGuardado[]>('personajes', []).map((p) => ({ ...p, rasgos: p.rasgos ?? [], sueno: p.sueno ?? '' }));
export function actualizarPersonaje(p: PersonajeGuardado) {
  escribir('personajes', personajes().map((x) => (x.id === p.id ? p : x)));
}
export function guardarPersonaje(p: Omit<PersonajeGuardado, 'id' | 'nivel' | 'doblones' | 'creado'>): PersonajeGuardado {
  const nuevo: PersonajeGuardado = { ...p, id: Math.random().toString(36).slice(2, 10), nivel: 1, doblones: 100, creado: Date.now() };
  escribir('personajes', [...personajes(), nuevo]);
  escribir('activo', nuevo.id);
  return nuevo;
}
export function personajeActivo(): PersonajeGuardado | null {
  const lista = personajes();
  const id = leer<string | null>('activo', null);
  return lista.find((p) => p.id === id) ?? lista[0] ?? null;
}
export const elegirActivo = (id: string) => escribir('activo', id);

export function marActual(): number {
  const q = Number(new URLSearchParams(location.search).get('mar'));
  if (MARES.some((m) => m.id === q)) return q;
  return 1;
}
