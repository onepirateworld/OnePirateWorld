// La vida propia del personaje: siempre está haciendo algo. Si el jugador no decide,
// elige él según su carácter y su objetivo. Sigue avanzando aunque el jugador no esté.
// El mismo código lo usa el servidor (supabase/funciones/vida-mundo.ts) cada 5 minutos con el juego cerrado.
import { azar } from '../arte/lienzo';
import { actualizarPersonaje, type PersonajeGuardado } from '../cuenta';
import { islaDePersonaje, islasDelMundo, nombreZona, travesia, type IslaMundo, type Posicion } from './habitantes';
import { ZONAS } from './geografia';
import { PISTAS_NECESARIAS, nombreFruta, oirRumor } from './busqueda';
import { cargoDe, tripulacionDe } from './tripulaciones';
import { personajes, personajesDeOtros } from '../cuenta';

// --- Tripulación: los miembros van siempre con su capitán ---------------------
/** El capitán de su tripulación (null si no tiene o si él es el capitán). */
export function capitanDe(p: PersonajeGuardado): PersonajeGuardado | null {
  const t = tripulacionDe(p);
  if (!t || t.capitan === p.id) return null;
  return [...personajes(), ...personajesDeOtros()].find((x) => x.id === t.capitan) ?? null;
}
/** ¿Va con su tripulación? (sí, salvo que lo hayas mandado a navegar a otro sitio) */
export const conTripulacion = (p: PersonajeGuardado) => !p.separado && !!capitanDe(p);

/**
 * Al volver a entrar al juego, el personaje regresa al barco de su tripulación.
 * También se usa mientras juegas para seguir al capitán cuando cambia de isla.
 */
export function volverConTripulacion(p: PersonajeGuardado, alEntrar: boolean, ahora = Date.now()): { p: PersonajeGuardado; volvio: boolean } {
  const cap = capitanDe(p);
  if (!cap) return { p, volvio: false };
  if (p.separado && !alEntrar) return { p, volvio: false };
  const pos = posicionPersonaje(cap, ahora);
  if (pos.navegando || pos.islaId === undefined) return { p: p.separado && alEntrar ? { ...p, separado: false } : p, volvio: !!p.separado && alEntrar };
  if (!p.separado && p.islaId === pos.islaId) return { p, volvio: false };
  const t = tripulacionDe(p)!;
  const isla = islasDelMundo()[pos.islaId];
  const nota: [number, string] = [ahora, `Volvió al barco de «${t.nombre}», en ${isla.nombre}.`];
  return { p: { ...p, separado: false, islaId: pos.islaId, accion: p.accion?.tipo === 'viajar' ? undefined : p.accion, registro: p.separado ? [...(p.registro ?? []), nota].slice(-40) : p.registro }, volvio: !!p.separado };
}

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
import { VELOCIDAD_BARCO } from '../datos/tienda';
export const segundosViaje = (a: IslaMundo, b: IslaMundo) => Math.round(Math.min(240, 30 + distancia(a, b) * 12));

/** Las islas a las que puede navegar desde aquí (las más cercanas). */
export function islasCercanas(isla: IslaMundo, n = 6): IslaMundo[] {
  return islasDelMundo().filter((x) => x.id !== isla.id).sort((x, y) => distancia(isla, x) - distancia(isla, y)).slice(0, n);
}

export function nuevaAccion(p: PersonajeGuardado, tipo: TipoAccion, desde: number, destino?: IslaMundo, mandada = false): AccionPersonaje {
  if (tipo === 'viajar' && destino) {
    const origen = islaDePersonaje(p);
    const navegante = cargoDe(p) === 'navegante' ? 0.9 : 1;
    return { tipo, desde, hasta: desde + Math.round(segundosViaje(origen, destino) * VELOCIDAD_BARCO[p.barco ?? 'barca'] * navegante * 1000), origen: origen.id, destino: destino.id, mandada };
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
    ['viajar', conTripulacion(p) ? 0 : 1 + (t('curioso') ? 1 : 0) + (p.objetivo === 'zona' || p.objetivo === 'tripulacion' ? 2 : 0)],
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

// --- Topes diarios: lo que se puede ganar en un día, para no romper la economía
export const TOPES = {
  /** Oro al día por explorar y por combates. */
  oro: (nivel: number) => 300 + nivel * 40,
  /** Experiencia al día: como mucho un nivel y medio. */
  xp: (nivel: number) => Math.round(75 * nivel * nivel),
  /** Victorias al día que dan oro y experiencia completos. */
  victorias: 10,
};
const diaDe = (t: number) => new Date(t).toISOString().slice(0, 10);
function ganadoDe(p: PersonajeGuardado, t: number) {
  const d = diaDe(t);
  return p.ganado?.dia === d ? { ...p.ganado } : { dia: d, oro: 0, xp: 0, victorias: 0 };
}
/** Suma oro respetando el tope del día. Devuelve cuánto se ha sumado de verdad. */
export function ganarOro(p: PersonajeGuardado, oro: number, t = Date.now()): { p: PersonajeGuardado; oro: number } {
  if (p.creador) return { p, oro: 0 };
  const g = ganadoDe(p, t);
  const real = Math.max(0, Math.min(oro, TOPES.oro(p.nivel) - g.oro));
  g.oro += real;
  return { p: { ...p, doblones: p.doblones + real, ganado: g }, oro: real };
}
/** Cuenta una victoria del día. true si aún da premio completo. */
export function contarVictoria(p: PersonajeGuardado, t = Date.now()): { p: PersonajeGuardado; premio: boolean } {
  const g = ganadoDe(p, t);
  g.victorias++;
  return { p: { ...p, ganado: g }, premio: g.victorias <= TOPES.victorias };
}

/** Sube experiencia y niveles (50 × nivel² por nivel), con tope diario. */
export function ganarXp(p: PersonajeGuardado, xp: number, t = Date.now()): { p: PersonajeGuardado; subidas: number; xp: number } {
  const g = ganadoDe(p, t);
  xp = Math.max(0, Math.min(xp, TOPES.xp(p.nivel) - g.xp));
  g.xp += xp;
  p = { ...p, ganado: g };
  let nivel = p.nivel, resto = (p.xp ?? 0) + xp, subidas = 0;
  while (resto >= 50 * nivel * nivel) { resto -= 50 * nivel * nivel; nivel++; subidas++; }
  return { p: { ...p, nivel: Math.min(80, nivel), xp: resto }, subidas, xp };
}

/** Termina una acción: aplica lo que ha conseguido y lo apunta en el diario. */
function terminar(p: PersonajeGuardado, a: AccionPersonaje, r: () => number): { p: PersonajeGuardado; resumen?: string } {
  const registro = [...(p.registro ?? [])];
  const isla = islaDePersonaje(p);
  let resumen: string | undefined;
  switch (a.tipo) {
    case 'entrenar': {
      const xp = Math.round((30 + p.nivel * 5) * (p.rasgos.includes('inteligente') ? 1.25 : 1));
      const g = ganarXp(p, xp, a.hasta);
      p = g.p;
      resumen = g.subidas ? `entrenó duro y subió a nivel ${p.nivel}` : g.xp ? `entrenó (+${g.xp} de experiencia)` : undefined;
      registro.push([a.hasta, `Entrenó en ${isla.nombre} hasta que le dolieron los brazos.${g.subidas ? ` ¡Subió a nivel ${p.nivel}!` : ''}`]);
      break;
    }
    case 'explorar': {
      const tirada = r() * (p.rasgos.includes('curioso') ? 1.3 : 1);
      if (tirada > 0.5) {
        const g = ganarOro(p, 5 + Math.floor(r() * 25), a.hasta);
        p = g.p;
        if (g.oro) {
          resumen = `encontró ${g.oro} doblones explorando`;
          registro.push([a.hasta, `Exploró ${isla.nombre} y encontró una bolsa con ${g.oro} doblones.`]);
        } else registro.push([a.hasta, `Exploró ${isla.nombre}, pero hoy ya no queda nada que encontrar.`]);
      } else if (tirada > (p.objetivo === 'fruta' ? 0.3 : 0.4)) {
        // Rumores de frutas: empezar una búsqueda o sumar una pista (como mucho una al día)
        const rumor = oirRumor(p, r, a.hasta);
        if (rumor) {
          p = rumor.p;
          resumen = rumor.p.busqueda!.pistas >= PISTAS_NECESARIAS ? `¡descubrió dónde está la ${nombreFruta(rumor.p.busqueda!.fruta).toLowerCase()}!` : 'oyó algo sobre una fruta del poder';
          registro.push([a.hasta, `En ${isla.nombre}: ${rumor.texto}`]);
        } else registro.push([a.hasta, `En ${isla.nombre} oyó a un viejo hablar de un tesoro escondido... pero no dijo dónde.`]);
      } else registro.push([a.hasta, `Exploró ${isla.nombre} sin encontrar nada.`]);
      p = ganarXp(p, 10, a.hasta).p;
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
  const original = a;
  if (!a) a = elegir(p, azar(h + Math.floor(ahora / 1000)), ahora);
  // Si lleva mucho tiempo sin abrir el juego, solo cuentan las últimas 8 horas
  const OCHO_HORAS = 8 * 3600_000;
  if (a.hasta < ahora - OCHO_HORAS) a = elegir(p, azar(h + Math.floor(ahora / 1000)), ahora - OCHO_HORAS);
  while (a.hasta <= ahora && vueltas++ < 200) {
    const r = azar(h + Math.floor(a.hasta / 1000));
    const fin = terminar(p, a, r);
    p = fin.p;
    if (fin.resumen) resumen.push(fin.resumen);
    a = elegir(p, r, a.hasta);
  }
  p = { ...p, accion: a };
  const baja = bajarRecompensa(p, ahora);
  if (baja) { p = baja.p; resumen.push(baja.texto); }
  if (a !== original || baja) actualizarPersonaje(p);   // solo se guarda si ha pasado algo
  return { p, resumen };
}

// --- La recompensa baja si pasa días tranquilo ----------------------------------
const DIA = 86_400_000;
/** Días de calma antes de que empiece a bajar, y cuánto baja cada día. */
export const DIAS_CALMA = 3, BAJADA_DIARIA = 0.02;
function bajarRecompensa(p: PersonajeGuardado, ahora: number): { p: PersonajeGuardado; texto: string } | null {
  if (p.bando === 'marine' || p.creador || !(p.recompensa ?? 0)) return null;
  const desde = Math.max((p.ultimaFechoria ?? p.creado) + DIAS_CALMA * DIA, p.bajadaHasta ?? 0);
  const dias = Math.floor((ahora - desde) / DIA);
  if (dias < 1) return null;
  const antes = p.recompensa!;
  const ahoraR = Math.max(0, Math.round((antes * Math.pow(1 - BAJADA_DIARIA, dias)) / 1000) * 1000);
  const texto = `pasó ${dias === 1 ? 'un día' : `${dias} días`} sin dar guerra y su recompensa bajó a ${ahoraR.toLocaleString('es-ES')} doblones`;
  return { p: { ...p, recompensa: ahoraR, bajadaHasta: desde + dias * DIA }, texto };
}

/** Mandar al personaje a hacer algo ahora mismo. */
export function mandar(p: PersonajeGuardado, tipo: TipoAccion, destino?: IslaMundo): PersonajeGuardado {
  const nuevo = { ...p, accion: nuevaAccion(p, tipo, Date.now(), destino, true), ...(tipo === 'viajar' && capitanDe(p) ? { separado: true } : {}) };
  actualizarPersonaje(nuevo);
  return nuevo;
}

/** Dónde está ahora (en una isla o navegando). */
export function posicionPersonaje(p: PersonajeGuardado, ahora = Date.now()): Posicion {
  if (!p.separado) { const cap = capitanDe(p); if (cap) return posicionPersonaje(cap, ahora); }
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
