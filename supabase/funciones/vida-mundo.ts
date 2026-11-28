// Función del servidor «vida-mundo»: hace que el mundo siga vivo aunque nadie tenga el juego abierto.
// Cada 5 minutos (pg_cron) avanza la vida de los personajes cuyo dueño lleva >10 min sin jugar,
// con exactamente el mismo código que usa el juego (vida.ts): viajes, entrenamiento, exploración,
// pistas de frutas, seguir a la tripulación... y deja apuntado lo que pasó para enseñarlo al volver.
//
// Se empaqueta con esbuild (scripts/desplegar-vida.sh) y se sube a Supabase Edge Functions.
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL } from '../../src/config';
import { estado, type FilaPersonaje, type FilaTripulacion } from '../../src/servidor';
import { filaAPersonaje, personajeAFila, type PersonajeGuardado } from '../../src/cuenta';
import { avanzarVida, volverConTripulacion } from '../../src/mundo/vida';

declare const Deno: { env: { get(k: string): string | undefined }; serve(f: (r: Request) => Response | Promise<Response>): void };

const INACTIVO_MS = 10 * 60_000;
const MAX_MIENTRAS = 40;

async function tick() {
  const db = createClient(SUPABASE_URL, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
  const ahora = Date.now();
  const [pj, tr] = await Promise.all([
    db.from('personajes').select('*'),
    db.from('tripulaciones').select('*'),
  ]);
  if (pj.error) throw new Error(pj.error.message);
  const filas = (pj.data ?? []) as FilaPersonaje[];
  // El código del juego lee el mundo de «estado»: le damos a todos como «otros»
  estado.usuario = null; estado.mios = [];
  estado.otros = new Map(filas.map((f) => [f.id, f]));
  estado.tripulaciones = (tr.data ?? []) as FilaTripulacion[];

  const cambios: FilaPersonaje[] = [];
  let movidos = 0;
  for (const f of filas) {
    const jugado = f.jugado ? Date.parse(f.jugado) : 0;
    if (ahora - jugado < INACTIVO_MS) continue;               // su dueño está jugando: no lo tocamos
    const d = f.datos as { aspecto?: unknown };
    if (!d.aspecto) continue;
    let p: PersonajeGuardado = filaAPersonaje(f);
    const antes = JSON.stringify([p.accion, p.islaId, p.nivel, p.doblones, p.busqueda, p.recompensa]);
    p = volverConTripulacion(p, false, ahora).p;             // sigue a su capitán
    const r = avanzarVida(p, ahora);
    p = r.p;
    if (r.resumen.length) {
      const nuevas = r.resumen.map((t) => [ahora, `${p.nombre} ${t}`] as [number, string]);
      p = { ...p, mientras: [...(p.mientras ?? []), ...nuevas].slice(-MAX_MIENTRAS) };
    }
    if (JSON.stringify([p.accion, p.islaId, p.nivel, p.doblones, p.busqueda, p.recompensa]) === antes && !r.resumen.length) continue;
    const fila = personajeAFila(p);
    cambios.push({ ...fila, dueno: f.dueno, jugado: f.jugado });   // «jugado» no cambia: lo hizo el servidor
    estado.otros.set(f.id, { ...f, ...fila, dueno: f.dueno });
    movidos++;
  }
  // Guardar en tandas
  for (let i = 0; i < cambios.length; i += 100) {
    const { error } = await db.from('personajes').upsert(cambios.slice(i, i + 100));
    if (error) throw new Error(error.message);
  }
  return { personajes: filas.length, movidos };
}

Deno.serve(async (req) => {
  if (req.headers.get('x-secreto') !== Deno.env.get('TICK_SECRETO')) return new Response('No', { status: 401 });
  try {
    const r = await tick();
    return new Response(JSON.stringify({ ok: true, ...r }), { headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
});
