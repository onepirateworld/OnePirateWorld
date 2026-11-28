// Conexión con el servidor (Supabase): cuenta, personajes de todos y chat.
// Guarda una copia en el navegador para arrancar rápido y aguantar cortes de red.
import { createClient, type RealtimeChannel, type User } from '@supabase/supabase-js';
import { SUPABASE_CLAVE_PUBLICA, SUPABASE_URL } from './config';

export const sb = createClient(SUPABASE_URL, SUPABASE_CLAVE_PUBLICA, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'implicit' },
});

export interface FilaTripulacion { id: string; mar: number; nombre: string; capitan: string; dueno: string; creada: string }

export interface Perfil { id: string; nombre: string; rol: 'jugador' | 'moderador' | 'creador' }

/** Fila de la tabla personajes. "datos" guarda todo lo demás (aspecto, arsenal, acción...). */
export interface FilaPersonaje {
  id: string;
  dueno: string;
  mar: number;
  nombre: string;
  apodo: string | null;
  bando: string;
  datos: Record<string, unknown>;
  nivel: number;
  doblones: number;
  recompensa: number;
  creador: boolean;
  creado: string;
  jugado?: string;
}

export const estado = {
  usuario: null as User | null,
  perfil: null as Perfil | null,
  mios: [] as FilaPersonaje[],
  otros: new Map<string, FilaPersonaje>(),
  tripulaciones: [] as FilaTripulacion[],
  conectado: false,
};

const leer = <T,>(k: string, d: T): T => { try { const t = localStorage.getItem(k); return t ? JSON.parse(t) : d; } catch { return d; } };
const escribir = (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* nada */ } };

/** Arranca: recupera la sesión (también al volver del enlace del correo) y carga los datos. */
export async function iniciar(mar: number): Promise<void> {
  // Copia local para pintar algo al instante
  estado.perfil = leer<Perfil | null>('srv.perfil', null);
  estado.mios = leer<FilaPersonaje[]>('srv.mios', []);
  try {
    const { data } = await sb.auth.getSession();
    estado.usuario = data.session?.user ?? null;
    if (!estado.usuario) { estado.perfil = null; estado.mios = []; escribir('srv.perfil', null); escribir('srv.mios', []); }
    else {
      const [p, m] = await Promise.all([
        sb.from('perfiles').select('id,nombre,rol').eq('id', estado.usuario.id).maybeSingle(),
        sb.from('personajes').select('*').eq('dueno', estado.usuario.id).order('creado'),
      ]);
      if (p.data) {
        // Si eligió nombre antes de recibir el correo, se lo ponemos ahora
        const pendiente = leer<string | null>('srv.nombrePendiente', null);
        if (pendiente && p.data.nombre === 'Marinero') {
          await sb.from('perfiles').update({ nombre: pendiente }).eq('id', estado.usuario.id);
          p.data.nombre = pendiente;
        }
        escribir('srv.nombrePendiente', null);
        estado.perfil = p.data as Perfil;
      }
      if (m.data) estado.mios = m.data as FilaPersonaje[];
      // Cambios que no llegaron a enviarse (página cerrada o cambiada justo después)
      const sinEnviar = leer<FilaPersonaje[]>('srv.pendientes', []).filter((f) => f.dueno === estado.usuario!.id);
      for (const f of sinEnviar) {
        const i = estado.mios.findIndex((x) => x.id === f.id);
        if (i >= 0) estado.mios[i] = f; else estado.mios.push(f);
        pendientes.set(f.id, f);
      }
      if (sinEnviar.length) void enviarPendientes();
      escribir('srv.perfil', estado.perfil);
      escribir('srv.mios', estado.mios);
    }
    await cargarOtros(mar);
    await cargarTripulaciones(mar);
    escucharMundo(mar);
    estado.conectado = true;
  } catch (e) {
    console.warn('Sin conexión con el servidor; uso la copia local.', e);
  }
}

async function cargarOtros(mar: number) {
  const { data } = await sb.from('personajes').select('*').eq('mar', mar).order('actualizado', { ascending: false }).limit(300);
  estado.otros.clear();
  for (const f of (data ?? []) as FilaPersonaje[]) if (f.dueno !== estado.usuario?.id) estado.otros.set(f.id, f);
}

export async function cargarTripulaciones(mar: number) {
  const { data } = await sb.from('tripulaciones').select('*').eq('mar', mar).order('creada');
  estado.tripulaciones = (data ?? []) as FilaTripulacion[];
}
/** Funda una tripulación. Devuelve el error en texto o null. */
export async function fundarTripulacion(mar: number, nombre: string, capitan: string): Promise<{ error: string | null; fila?: FilaTripulacion }> {
  const { data, error } = await sb.from('tripulaciones').insert({ mar, nombre, capitan }).select().single();
  if (error) {
    if (/tripulaciones_nombre|duplicate/i.test(error.message)) return { error: 'Ya existe una tripulación con ese nombre en este mar.' };
    if (/row-level security|policy/i.test(error.message)) return { error: 'Ese nombre no está permitido (o tu pirata aún no puede fundar una).' };
    return { error: error.message };
  }
  estado.tripulaciones.push(data as FilaTripulacion);
  return { error: null, fila: data as FilaTripulacion };
}
export async function disolverTripulacion(id: string) {
  await sb.from('tripulaciones').delete().eq('id', id);
  estado.tripulaciones = estado.tripulaciones.filter((t) => t.id !== id);
}

let canalMundo: RealtimeChannel | null = null;
function escucharMundo(mar: number) {
  canalMundo?.unsubscribe();
  canalMundo = sb.channel(`mundo-${mar}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'personajes', filter: `mar=eq.${mar}` }, (cambio) => {
      const f = (cambio.new ?? cambio.old) as FilaPersonaje;
      if (!f?.id) return;
      if (f.dueno === estado.usuario?.id) {
        // Un cambio en uno de los míos que no hice yo (por ejemplo, un regalo del Creador)
        if (cambio.eventType === 'DELETE') { estado.mios = estado.mios.filter((x) => x.id !== f.id); escribir('srv.mios', estado.mios); return; }
        const i = estado.mios.findIndex((x) => x.id === f.id);
        if (i >= 0 && !pendientes.has(f.id)) { estado.mios[i] = cambio.new as FilaPersonaje; escribir('srv.mios', estado.mios); }
        return;
      }
      if (cambio.eventType === 'DELETE') estado.otros.delete(f.id);
      else estado.otros.set(f.id, cambio.new as FilaPersonaje);
    })
    .on('postgres_changes', { event: '*', schema: 'public', table: 'tripulaciones', filter: `mar=eq.${mar}` }, () => { void cargarTripulaciones(mar); })
    .subscribe();
}

// --- Cuenta ---------------------------------------------------------------

/**
 * Entrar con nombre de usuario + correo (sin contraseña ni correos).
 * La primera vez crea la cuenta; después, el mismo nombre y correo vuelven a abrirla.
 * Por debajo usamos una clave derivada de los dos datos.
 */
async function claveDe(nombre: string, correo: string) {
  const datos = new TextEncoder().encode(`opw:${nombre.trim().toLowerCase()}:${correo.trim().toLowerCase()}`);
  const h = new Uint8Array(await crypto.subtle.digest('SHA-256', datos));
  return 'opw-' + [...h].map((b) => b.toString(16).padStart(2, '0')).join('').slice(0, 40);
}
export async function entrarConNombre(nombre: string, correo: string): Promise<string | null> {
  nombre = nombre.trim(); correo = correo.trim().toLowerCase();
  const password = await claveDe(nombre, correo);
  const entrada = await sb.auth.signInWithPassword({ email: correo, password });
  if (!entrada.error) { estado.usuario = entrada.data.user; return null; }
  // No existe esa combinación: creamos la cuenta (los nombres de usuario son privados y únicos)
  const alta = await sb.auth.signUp({ email: correo, password, options: { data: { nombre } } });
  if (alta.error) {
    if (/registered|exists|database error/i.test(alta.error.message)) return 'No coinciden: ese nombre de usuario o ese correo ya se usan en otra cuenta. Revisa que los dos sean los tuyos.';
    if (/rate limit/i.test(alta.error.message)) return 'Demasiados intentos. Espera unos minutos.';
    return alta.error.message;
  }
  if (!alta.data.session) return 'Tu cuenta se ha creado, pero el servidor pide confirmar el correo. Hay que desactivar «Confirm email» en Supabase.';
  estado.usuario = alta.data.user;
  return null;
}

/** Manda el enlace mágico al correo. Al pulsarlo vuelve al juego con la sesión iniciada. */
export async function enviarEnlace(correo: string, nombre: string): Promise<string | null> {
  escribir('srv.nombrePendiente', nombre);
  const { error } = await sb.auth.signInWithOtp({
    email: correo,
    options: { emailRedirectTo: location.origin + location.pathname, data: { nombre } },
  });
  if (!error) return null;
  if (/rate limit/i.test(error.message)) return 'Se han pedido demasiados enlaces. Espera unos minutos y vuelve a probar.';
  return error.message;
}

export async function salir() {
  await sb.auth.signOut();
  estado.usuario = null; estado.perfil = null; estado.mios = [];
  escribir('srv.perfil', null); escribir('srv.mios', []); escribir('srv.pendientes', []);
}

export async function cambiarNombre(nombre: string) {
  if (!estado.usuario || !estado.perfil) return;
  await sb.from('perfiles').update({ nombre }).eq('id', estado.usuario.id);
  estado.perfil = { ...estado.perfil, nombre };
  escribir('srv.perfil', estado.perfil);
}

// --- Personajes -----------------------------------------------------------

const pendientes = new Map<string, FilaPersonaje>();
let temporizador: number | undefined;

/** Guarda (crea o actualiza) un personaje propio. Se agrupan los cambios cada 1,5 s. */
export function guardar(f: FilaPersonaje) {
  const i = estado.mios.findIndex((x) => x.id === f.id);
  if (i >= 0) estado.mios[i] = f; else estado.mios.push(f);
  escribir('srv.mios', estado.mios);
  if (!estado.usuario) return;
  pendientes.set(f.id, f);
  escribir('srv.pendientes', [...pendientes.values()]);   // por si se cierra la página antes de enviarlos
  clearTimeout(temporizador);
  temporizador = setTimeout(enviarPendientes, 1500) as unknown as number;
}
/** Envía ya lo pendiente (antes de cambiar de página). Devuelve un error en texto o null. */
export async function guardarAhora(): Promise<string | null> {
  clearTimeout(temporizador);
  return enviarPendientes();
}
async function enviarPendientes(): Promise<string | null> {
  const filas = [...pendientes.values()];
  pendientes.clear();
  if (!filas.length || !estado.usuario) return null;
  escribir('srv.pendientes', []);
  // «jugado»: el dueño está jugando (el servidor no moverá a este personaje mientras tanto)
  const jugado = new Date().toISOString();
  const { data, error } = await sb.from('personajes').upsert(filas.map((f) => ({ ...f, dueno: estado.usuario!.id, jugado }))).select();
  if (error) {
    console.warn('No se pudo guardar en el servidor', error.message);
    for (const f of filas) if (!pendientes.has(f.id)) pendientes.set(f.id, f);   // se reintenta luego
    escribir('srv.pendientes', [...pendientes.values()]);
    return error.message;
  }
  // El servidor puede corregir cosas (por ejemplo, los datos del creador)
  for (const f of (data ?? []) as FilaPersonaje[]) {
    const i = estado.mios.findIndex((x) => x.id === f.id);
    // Solo si no ha cambiado nada más desde que lo enviamos (si no, pisaríamos lo nuevo)
    if (i >= 0 && filas.includes(estado.mios[i]) && !pendientes.has(f.id)) estado.mios[i] = { ...f, datos: estado.mios[i].datos };
  }
  escribir('srv.mios', estado.mios);
  return null;
}
if (typeof window !== 'undefined') window.addEventListener('beforeunload', () => { if (pendientes.size) void enviarPendientes(); });

export async function borrar(id: string) {
  estado.mios = estado.mios.filter((x) => x.id !== id);
  escribir('srv.mios', estado.mios);
  if (estado.usuario) await sb.from('personajes').delete().eq('id', id);
}

// --- La Taberna -----------------------------------------------------------

export interface FilaMensaje { id: number; mar: number; autor: string; autor_nombre: string; texto: string; oculto: boolean; creado: string }

export async function cargarMensajes(mar: number): Promise<FilaMensaje[]> {
  const { data } = await sb.from('mensajes').select('*').eq('mar', mar).order('creado', { ascending: false }).limit(60);
  return ((data ?? []) as FilaMensaje[]).reverse();
}
export async function enviarMensaje(mar: number, autorNombre: string, texto: string): Promise<string | null> {
  const { error } = await sb.from('mensajes').insert({ mar, autor_nombre: autorNombre, texto });
  return error ? (error.message.includes('5 mensajes') ? 'Como mucho 5 mensajes por minuto. Espera un poco.' : error.message) : null;
}
export async function reportar(mensajeId: number) {
  await sb.from('reportes').insert({ mensaje_id: mensajeId });
}
export async function ocultarMensaje(mensajeId: number) {
  await sb.from('mensajes').update({ oculto: true }).eq('id', mensajeId);
}
export function escucharMensajes(mar: number, alLlegar: (m: FilaMensaje) => void): () => void {
  const canal = sb.channel(`taberna-${mar}`)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'mensajes', filter: `mar=eq.${mar}` }, (c) => alLlegar(c.new as FilaMensaje))
    .subscribe();
  return () => { void canal.unsubscribe(); };
}

// --- Duelos entre jugadores ---------------------------------------------------

export interface FilaDuelo {
  id: number; mar: number; atacante: string; atacante_dueno: string; atacante_nombre: string;
  defensor: string; defensor_dueno: string; defensor_nombre: string; ganador: 'atacante' | 'defensor' | 'huida'; premio: number; visto: boolean; creado: string;
}
export async function registrarDuelo(d: Omit<FilaDuelo, 'id' | 'atacante_dueno' | 'visto' | 'creado'>): Promise<string | null> {
  const { error } = await sb.from('duelos').insert(d);
  return error ? error.message : null;
}
/** Duelos de hoy que ya hice (para los límites). */
export async function misDuelosDeHoy(): Promise<FilaDuelo[]> {
  if (!estado.usuario) return [];
  const { data } = await sb.from('duelos').select('*').eq('atacante_dueno', estado.usuario.id).gte('creado', new Date(Date.now() - 86400_000).toISOString());
  return (data ?? []) as FilaDuelo[];
}
/** Duelos en los que me atacaron y aún no he visto. */
export async function duelosRecibidos(): Promise<FilaDuelo[]> {
  if (!estado.usuario) return [];
  const { data } = await sb.from('duelos').select('*').eq('defensor_dueno', estado.usuario.id).eq('visto', false).order('creado');
  return (data ?? []) as FilaDuelo[];
}
export async function marcarDuelosVistos(ids: number[]) {
  if (ids.length) await sb.from('duelos').update({ visto: true }).in('id', ids);
}
export async function ultimosDuelos(mar: number, n = 20): Promise<FilaDuelo[]> {
  const { data } = await sb.from('duelos').select('*').eq('mar', mar).order('creado', { ascending: false }).limit(n);
  return (data ?? []) as FilaDuelo[];
}

// --- Panel del Creador ----------------------------------------------------------

export async function adminTodos(): Promise<FilaPersonaje[]> {
  const { data } = await sb.from('personajes').select('*').order('mar').order('nombre').limit(1000);
  return (data ?? []) as FilaPersonaje[];
}
export async function adminRoles(): Promise<Map<string, string>> {
  const { data } = await sb.rpc('admin_roles');
  return new Map(((data ?? []) as { personaje: string; rol: string }[]).map((x) => [x.personaje, x.rol]));
}
export async function adminPersonaje(id: string, cambios: Record<string, unknown>): Promise<string | null> {
  const { error } = await sb.rpc('admin_personaje', { p_id: id, p_cambios: cambios });
  if (!error) return null;
  if (/fruta_unica|duplicate/i.test(error.message)) return 'Otro jugador de ese mar ya tiene esa fruta.';
  return error.message;
}
export async function adminRol(id: string, rol: 'jugador' | 'moderador'): Promise<string | null> {
  const { error } = await sb.rpc('admin_rol', { p_id: id, p_rol: rol });
  return error ? error.message : null;
}
export async function adminBorrar(id: string): Promise<string | null> {
  const { error } = await sb.rpc('admin_borrar', { p_id: id });
  return error ? error.message : null;
}
