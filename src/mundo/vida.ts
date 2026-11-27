// La vida propia del personaje: siempre está haciendo algo. Si el jugador no decide,
// elige él según su carácter y su objetivo. Sigue avanzando aunque el jugador no esté.
// (Versión local: cuando haya servidor, esto lo hará el tick del servidor, fase 9.)
import { azar } from '../arte/lienzo';
import { actualizarPersonaje, type PersonajeGuardado } from '../cuenta';
import { islaDePersonaje, islasDelMundo, nombreZona, travesia, type IslaMundo, type Posicion } from './habitantes';
import { ZONAS } from './geografia';

export type TipoAccion = 'pasear' | 'entrenar' | 'explorar' | 'descansar' | 'viajar';

export interface AccionPersonaje {
  tipo: TipoAccion;
  desde: number;
  hasta: number;
  origen?: number;
  destino?: number;
  /** La eligió el jugador (si no, la eligió el personaje solo). */
  mandada?: boolean;
}

export const TEXTO_ACCION: Record<TipoAccion, string> = {
  pasear: 'Paseando', entrenar: 'Entrenando', explorar: 'Explorando', descansar: 'Descansando', viajar: 'Navegando',
};

// Duraciones de prueba (segundos) para ver el movimiento; luego irán al ritmo del diseño.
const DURACION: Record<Exclude<TipoAccion, 'viajar'>, number> = { pasear: 45, entrenar: 60, explorar: 75, descansar: 40 };
const envolver = (g: number) => ((((g + 180) % 360) + 360) % 360) - 180;
const distancia = (a: IslaMundo, b: IslaMundo) => Math.hypot(envolver(a.lon - b.lon) * Math.cos(((a.lat + b.lat) / 2) * Math.PI / 180), a.lat - b.lat);
export const segundosViaje = (a: IslaMundo, b: IslaMundo) => Math.round(Math.min(240, 30 + distancia(a, b) * 12));

/** Las islas a las que puede navegar desde aquí (las más cercanas). */
export function islasCercanas(isla: IslaMundo, n = 6): IslaMundo[] {
  return islasDelMundo().filter((x) => x.id !== isla.id).sort((x, y) => distancia(isla, x) - distancia(isla, y)).slice(0, n);
}

export function nuevaAccion(p: PersonajeGuardado, tipo: TipoAccion, desde: number, destino?: IslaMundo, mandada = false): AccionPersonaje {
  if (tipo === 'viajar' && destino) {
    const origen = islaDePersonaje(p);
    return { tipo, desde, hasta: desde + segundosViaje(origen, destino) * 1000, origen: origen.id, destino: destino.id, mandada };
  }
  return { tipo, desde, hasta: desde + DURACION[tipo as Exclude<TipoAccion, 'viajar'>] * 1000, mandada };
}

/** Elige solo qué hacer, según rasgos y objetivo. */
function elegir(p: PersonajeGuardado, r: () => number, desde: number): AccionPersonaje {
  const t = (id: string) => p.rasgos.includes(id);
  const pesos: [TipoAccion, number][] = [
    ['pasear', 3],
    ['entrenar', 2 + (p.objetivo === 'fuerte' ? 2 : 0) + (t('orgulloso') ? 1 : 0) + (t('valiente') ? 1 : 0)],
    ['explorar', 2 + (t('curioso') ? 2 : 0) + (p.objetivo === 'fruta' ? 2 : 0) + (t('avaricioso') ? 1 : 0)],
    ['descansar', 1 + (t('gloton') ? 1 : 0) + (t('prudente') ? 1 : 0)],
    ['viajar', 1 + (t('curioso') ? 1 : 0) + (p.objetivo === 'zona' || p.objetivo === 'tripulacion' ? 2 : 0)],
  ];
  let x = r() * pesos.reduce((s, [, w]) => s + w, 0);
  let tipo: TipoAccion = 'pasear';
  for (const [k, w] of pesos) { if ((x -= w) <= 0) { tipo = k; break; } }
  if (tipo === 'viajar') {
    // Prefiere no meterse en zonas de nivel mucho más alto que el suyo
    const opciones = islasCercanas(islaDePersonaje(p), 4).filter((i) => ZONAS[i.zona].nivelMinimo <= p.nivel + 3);
    if (!opciones.length) return nuevaAccion(p, 'pasear', desde);
    return nuevaAccion(p, 'viajar', desde, opciones[Math.floor(r() * opciones.length)]);
  }
  return nuevaAccion(p, tipo, desde);
}

/** Sube experiencia y niveles (50 × nivel² por nivel). */
export function ganarXp(p: PersonajeGuardado, xp: number): { p: PersonajeGuardado; subidas: number } {
  let nivel = p.nivel, resto = (p.xp ?? 0) + xp, subidas = 0;
  while (resto >= 50 * nivel * nivel) { resto -= 50 * nivel * nivel; nivel++; subidas++; }
  return { p: { ...p, nivel, xp: resto }, subidas };
}

/** Termina una acción: aplica lo que ha conseguido y lo apunta en el diario. */
function terminar(p: PersonajeGuardado, a: AccionPersonaje, r: () => number): { p: PersonajeGuardado; resumen?: string } {
  const registro = [...(p.registro ?? [])];
  const isla = islaDePersonaje(p);
  let resumen: string | undefined;
  switch (a.tipo) {
    case 'entrenar': {
      const xp = Math.round((30 + p.nivel * 5) * (p.rasgos.includes('inteligente') ? 1.25 : 1));
      const g = ganarXp(p, xp);
      p = g.p;
      resumen = g.subidas ? `entrenó duro y subió a nivel ${p.nivel}` : `entrenó (+${xp} de experiencia)`;
      registro.push([a.hasta, `Entrenó en ${isla.nombre} hasta que le dolieron los brazos.${g.subidas ? ` ¡Subió a nivel ${p.nivel}!` : ''}`]);
      break;
    }
    case 'explorar': {
      const tirada = r() * (p.rasgos.includes('curioso') ? 1.3 : 1);
      if (tirada > 0.5) {
        const oro = 20 + Math.floor(r() * 100);
        p = { ...p, doblones: p.doblones + oro };
        resumen = `encontró ${oro} doblones explorando`;
        registro.push([a.hasta, `Exploró ${isla.nombre} y encontró una bolsa con ${oro} doblones.`]);
      } else if (tirada > 0.42) {
        resumen = 'oyó un rumor interesante';
        registro.push([a.hasta, `En ${isla.nombre} oyó a un viejo hablar de un tesoro escondido... pero no dijo dónde.`]);
      } else registro.push([a.hasta, `Exploró ${isla.nombre} sin encontrar nada.`]);
      p = ganarXp(p, 10).p;
      break;
    }
    case 'viajar': {
      const destino = islasDelMundo()[a.destino!];
      p = { ...p, islaId: destino.id };
      resumen = `llegó a ${destino.nombre}`;
      registro.push([a.hasta, `Desembarcó en ${destino.nombre} (${nombreZona(destino.zona)}).`]);
      break;
    }
    default: break;
  }
  return { p: { ...p, registro: registro.slice(-40) }, resumen };
}

/**
 * Avanza la vida del personaje hasta ahora. Devuelve el personaje actualizado y,
 * si han pasado cosas mientras el jugador no estaba, un resumen.
 */
export function avanzarVida(p: PersonajeGuardado, ahora = Date.now()): { p: PersonajeGuardado; resumen: string[] } {
  let h = 0; for (const ch of p.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const resumen: string[] = [];
  let a = p.accion;
  let vueltas = 0;
  if (!a) a = elegir(p, azar(h + Math.floor(ahora / 1000)), ahora);
  while (a.hasta <= ahora && vueltas++ < 200) {
    const r = azar(h + Math.floor(a.hasta / 1000));
    const fin = terminar(p, a, r);
    p = fin.p;
    if (fin.resumen) resumen.push(fin.resumen);
    a = elegir(p, r, a.hasta);
  }
  p = { ...p, accion: a };
  actualizarPersonaje(p);
  return { p, resumen };
}

/** Mandar al personaje a hacer algo ahora mismo. */
export function mandar(p: PersonajeGuardado, tipo: TipoAccion, destino?: IslaMundo): PersonajeGuardado {
  const nuevo = { ...p, accion: nuevaAccion(p, tipo, Date.now(), destino, true) };
  actualizarPersonaje(nuevo);
  return nuevo;
}

/** Dónde está ahora (en una isla o navegando). */
export function posicionPersonaje(p: PersonajeGuardado, ahora = Date.now()): Posicion {
  const a = p.accion;
  if (a?.tipo === 'viajar' && a.origen !== undefined && a.destino !== undefined && ahora < a.hasta) {
    const islas = islasDelMundo();
    const A = islas[a.origen], B = islas[a.destino];
    const f = Math.min(1, Math.max(0, (ahora - a.desde) / (a.hasta - a.desde)));
    return travesia(A, B, f);
  }
  // Si el viaje ya acabó (por ejemplo, el de otro jugador que aún no ha vuelto), está en el destino
  const isla = a?.tipo === 'viajar' && a.destino !== undefined && ahora >= a.hasta ? islasDelMundo()[a.destino] : islaDePersonaje(p);
  return { lat: isla.lat, lon: isla.lon, navegando: false, islaId: isla.id, rumbo: 1 };
}
