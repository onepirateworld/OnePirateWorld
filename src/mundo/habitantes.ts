// Quién vive en el mundo: las islas con nombre, los bots y dónde está cada uno.
// Los bots van y vienen entre islas cercanas siguiendo el reloj real, así todos
// los que miran el mismo mar los ven en el mismo sitio.
import { azar } from '../arte/lienzo';
import { aspectoAlAzar, type AspectoPersonaje } from '../arte/personajes';
import { RASGOS, puedeAnadir } from '../datos/caracter';
import { actualizarPersonaje, type Bando, type PersonajeGuardado } from '../cuenta';
import { generarIslas, ZONAS, type IdZona, type Isla } from './geografia';
import { nombreIsla, nombrePersona } from './nombres';

export interface IslaMundo extends Isla {
  nombre: string;
  especial?: 'base' | 'taberna' | 'maestro' | 'tesoro';
}

let islasCache: IslaMundo[] | null = null;
export function islasDelMundo(): IslaMundo[] {
  if (islasCache) return islasCache;
  islasCache = generarIslas().map((i) => {
    let especial: IslaMundo['especial'];
    if (i.bioma === 'ciudad' && i.id % 3 === 0) especial = 'base';
    else if (i.id % 6 === 1 && (i.bioma === 'tropical' || i.bioma === 'desierto')) especial = 'taberna';
    else if (i.id % 13 === 4) especial = 'maestro';
    else if (i.id % 17 === 9) especial = 'tesoro';
    return { ...i, nombre: nombreIsla(i.id, i.bioma), especial };
  });
  return islasCache;
}

const envolver = (g: number) => ((((g + 180) % 360) + 360) % 360) - 180;
const distancia = (a: Isla, b: Isla) => Math.hypot(envolver(a.lon - b.lon) * Math.cos(((a.lat + b.lat) / 2) * Math.PI / 180), a.lat - b.lat);

export type TipoBarco = 'barca' | 'carabela' | 'galeon';

export interface Bot {
  id: string;
  nombre: string;
  apodo?: string;
  bando: Bando;
  aspecto: AspectoPersonaje;
  nivel: number;
  rasgos: string[];
  barco: TipoBarco;
  /** Ruta de ida y vuelta entre dos islas cercanas. */
  islaA: number;
  islaB: number;
  periodoMin: number;   // minutos por ciclo completo
  desfase: number;      // 0..1
}

export interface Posicion {
  lat: number;
  lon: number;
  navegando: boolean;
  islaId?: number;
  /** Dirección del barco: 1 hacia el este, -1 hacia el oeste. */
  rumbo: number;
}

const MARES_INICIO: IdZona[] = ['alba', 'ocaso', 'coral', 'bruma'];
const NIVEL_ZONA: Partial<Record<IdZona, [number, number]>> = {
  alba: [1, 14], ocaso: [1, 14], coral: [1, 14], bruma: [1, 14], dormidas: [20, 35], mareas: [15, 34], profunda: [35, 60],
};

const botsCache = new Map<number, Bot[]>();
export function botsDelMar(mar: number, cantidad = 70): Bot[] {
  const hecho = botsCache.get(mar);
  if (hecho) return hecho;
  const islas = islasDelMundo();
  const r = azar(mar * 9973 + 17);
  const bots: Bot[] = [];
  for (let i = 0; i < cantidad; i++) {
    const a = islas[Math.floor(r() * islas.length)];
    const vecinas = islas.filter((x) => x.id !== a.id).sort((x, y) => distancia(a, x) - distancia(a, y)).slice(0, 4);
    const b = vecinas[Math.floor(r() * vecinas.length)];
    const t = r();
    const bando: Bando = t < 0.55 ? 'pirata' : t < 0.85 ? 'marine' : 'revolucionario';
    const aspecto = aspectoAlAzar(r);
    const { nombre, apodo } = nombrePersona(r, aspecto.cuerpo === 'mujer');
    const [n0, n1] = NIVEL_ZONA[a.zona] ?? [1, 10];
    const nivel = n0 + Math.floor(r() * (n1 - n0 + 1));
    const rasgos: string[] = [];
    while (rasgos.length < 3) { const id = RASGOS[Math.floor(r() * RASGOS.length)].id; if (!puedeAnadir(rasgos, id)) rasgos.push(id); }
    bots.push({
      id: `bot-${mar}-${i}`, nombre, apodo, bando, aspecto, nivel, rasgos,
      barco: nivel < 12 ? 'barca' : nivel < 30 ? 'carabela' : 'galeon',
      islaA: a.id, islaB: b.id, periodoMin: 20 + Math.floor(r() * 70), desfase: r(),
    });
  }
  botsCache.set(mar, bots);
  return bots;
}

/** Dónde está un bot ahora: un rato en cada isla y el resto navegando. */
export function posicionBot(bot: Bot, ahora = Date.now()): Posicion {
  const islas = islasDelMundo();
  const A = islas[bot.islaA], B = islas[bot.islaB];
  const f = ((ahora / 60000 / bot.periodoMin + bot.desfase) % 1 + 1) % 1;
  // 0-0.3 en A, 0.3-0.5 navegando A→B, 0.5-0.8 en B, 0.8-1 navegando B→A
  const viaje = (de: Isla, a: Isla, t: number): Posicion => {
    const s = t * t * (3 - 2 * t);
    const dlon = envolver(a.lon - de.lon);
    return { lat: de.lat + (a.lat - de.lat) * s, lon: envolver(de.lon + dlon * s), navegando: true, rumbo: dlon >= 0 ? 1 : -1 };
  };
  if (f < 0.3) return { lat: A.lat, lon: A.lon, navegando: false, islaId: A.id, rumbo: 1 };
  if (f < 0.5) return viaje(A, B, (f - 0.3) / 0.2);
  if (f < 0.8) return { lat: B.lat, lon: B.lon, navegando: false, islaId: B.id, rumbo: -1 };
  return viaje(B, A, (f - 0.8) / 0.2);
}

/** Isla del personaje del jugador. Si aún no tiene, le toca una al azar de un mar de inicio. */
export function islaDePersonaje(p: PersonajeGuardado): IslaMundo {
  const islas = islasDelMundo();
  if (p.islaId !== undefined && islas[p.islaId]) return islas[p.islaId];
  let h = 0;
  for (const ch of p.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const r = azar(h);
  const mar = MARES_INICIO[Math.floor(r() * MARES_INICIO.length)];
  const candidatas = islas.filter((i) => i.zona === mar && i.bioma !== 'flotante');
  const isla = candidatas[Math.floor(r() * candidatas.length)];
  actualizarPersonaje({ ...p, islaId: isla.id });
  return isla;
}

export const nombreZona = (z: IdZona) => ZONAS[z].nombre;
