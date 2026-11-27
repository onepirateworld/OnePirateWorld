// Geografía del mundo: zonas, nombres y las islas (generadas con semilla).
// Coordenadas en grados: longitud -180..180 (este positivo), latitud -90..90 (norte positivo).
import { azar } from '../arte/lienzo';

export type IdZona =
  | 'alba' | 'ocaso' | 'coral' | 'bruma'       // los cuatro mares
  | 'mareas' | 'profunda'                      // la ruta central y su segunda mitad
  | 'dormidas'                                 // franjas de mar en calma
  | 'espinazo'                                 // el continente-anillo
  | 'polo';

export interface Zona {
  id: IdZona;
  nombre: string;
  descripcion: string;
  nivelMinimo: number;
  etiqueta?: { lat: number; lon: number };
}

export const NOMBRE_CONTINENTE = 'El Espinazo';
export const NOMBRE_CALMA = 'Aguas Dormidas';

export const ZONAS: Record<IdZona, Zona> = {
  alba: { id: 'alba', nombre: 'Mar del Alba', descripcion: 'El mar del nordeste. Aguas templadas y pueblos pesqueros.', nivelMinimo: 1, etiqueta: { lat: 42, lon: 90 } },
  ocaso: { id: 'ocaso', nombre: 'Mar del Ocaso', descripcion: 'El mar del noroeste. Nieblas, faros y contrabandistas.', nivelMinimo: 1, etiqueta: { lat: 42, lon: -90 } },
  coral: { id: 'coral', nombre: 'Mar del Coral', descripcion: 'El mar del sudeste. Arrecifes, calor y tesoros hundidos.', nivelMinimo: 1, etiqueta: { lat: -42, lon: 90 } },
  bruma: { id: 'bruma', nombre: 'Mar de la Bruma', descripcion: 'El mar del sudoeste. Islas frías y ruinas antiguas.', nivelMinimo: 1, etiqueta: { lat: -42, lon: -90 } },
  mareas: { id: 'mareas', nombre: 'Senda de las Mareas', descripcion: 'La ruta central. Corrientes locas y los piratas más famosos.', nivelMinimo: 15, etiqueta: { lat: 0, lon: 90 } },
  profunda: { id: 'profunda', nombre: 'Senda Profunda', descripcion: 'La segunda mitad de la ruta central. Solo para leyendas.', nivelMinimo: 35, etiqueta: { lat: 0, lon: -90 } },
  dormidas: { id: 'dormidas', nombre: NOMBRE_CALMA, descripcion: 'Dos franjas sin viento que rodean la ruta central. Allí duermen bestias enormes.', nivelMinimo: 25, etiqueta: { lat: 12, lon: 140 } },
  espinazo: { id: 'espinazo', nombre: NOMBRE_CONTINENTE, descripcion: 'Un continente largo y estrecho que da la vuelta al mundo de polo a polo.', nivelMinimo: 0, etiqueta: { lat: 28, lon: 0 } },
  polo: { id: 'polo', nombre: 'Hielos Eternos', descripcion: 'Casquetes de hielo en los polos.', nivelMinimo: 40 },
};

/** Límites de latitud de la ruta central y las franjas en calma. */
export const LAT_RUTA = 8;
export const LAT_CALMA = 14;

const rad = Math.PI / 180;
const envolver = (g: number) => ((((g + 180) % 360) + 360) % 360) - 180;

/** Distancia (en grados de longitud) al eje del continente-anillo, que serpentea un poco. */
export function distanciaContinente(lon: number, lat: number) {
  const eje1 = 2.5 * Math.sin(lat * rad * 5) + 1.2 * Math.sin(lat * rad * 13);
  const eje2 = 180 + 2.5 * Math.sin(lat * rad * 4 + 1) + 1.2 * Math.sin(lat * rad * 11);
  return Math.min(Math.abs(envolver(lon - eje1)), Math.abs(envolver(lon - eje2))) * Math.cos(lat * rad);
}
export const ANCHO_CONTINENTE = 4.6;

export function zonaDe(lon: number, lat: number): IdZona {
  if (Math.abs(lat) > 80) return 'polo';
  if (distanciaContinente(lon, lat) < ANCHO_CONTINENTE) return 'espinazo';
  const a = Math.abs(lat);
  if (a < LAT_RUTA) return envolver(lon) > 0 ? 'mareas' : 'profunda';
  if (a < LAT_CALMA) return 'dormidas';
  if (lat > 0) return envolver(lon) > 0 ? 'alba' : 'ocaso';
  return envolver(lon) > 0 ? 'coral' : 'bruma';
}

// ---------------------------------------------------------------------------
// Ruido suave sin costuras sobre la esfera (suma de ondas en 3D).

export function crearRuido(semilla: number, octavas = 28) {
  const r = azar(semilla);
  const ondas = Array.from({ length: octavas }, (_, i) => {
    const z = r() * 2 - 1, t = r() * Math.PI * 2, s = Math.sqrt(1 - z * z);
    const frec = 1.6 * Math.pow(2, i / 5);
    return { x: s * Math.cos(t), y: z, z: s * Math.sin(t), frec, fase: r() * Math.PI * 2, amp: 1 / frec };
  });
  const total = ondas.reduce((s, o) => s + o.amp, 0);
  return (lon: number, lat: number) => {
    const cl = Math.cos(lat * rad);
    const px = cl * Math.cos(lon * rad), py = Math.sin(lat * rad), pz = cl * Math.sin(lon * rad);
    let v = 0;
    for (const o of ondas) v += o.amp * Math.sin(o.frec * (o.x * px + o.y * py + o.z * pz) * 3 + o.fase);
    return (v / total) * 2.2; // aprox. -1..1
  };
}

// ---------------------------------------------------------------------------
// Islas

export type BiomaIsla = 'tropical' | 'nevada' | 'volcanica' | 'desierto' | 'flotante' | 'ciudad' | 'ruinas';

export interface Isla {
  id: number;
  lat: number;
  lon: number;
  radio: number; // en grados
  bioma: BiomaIsla;
  zona: IdZona;
}

const BIOMAS_POR_ZONA: Record<string, [BiomaIsla, number][]> = {
  alba: [['tropical', 5], ['ciudad', 2], ['ruinas', 1], ['volcanica', 1]],
  ocaso: [['nevada', 3], ['ciudad', 2], ['ruinas', 2], ['tropical', 1]],
  coral: [['tropical', 5], ['desierto', 3], ['volcanica', 1]],
  bruma: [['nevada', 4], ['ruinas', 3], ['volcanica', 1]],
  mareas: [['tropical', 3], ['volcanica', 2], ['desierto', 2], ['ciudad', 2], ['flotante', 1], ['ruinas', 2]],
  profunda: [['volcanica', 3], ['nevada', 2], ['flotante', 2], ['ruinas', 3], ['ciudad', 1]],
  dormidas: [['ruinas', 1], ['tropical', 1]],
};

export function generarIslas(semilla = 7, cantidad = 340): Isla[] {
  const r = azar(semilla);
  const islas: Isla[] = [];
  let intentos = 0;
  while (islas.length < cantidad && intentos++ < cantidad * 40) {
    // Más densidad en la ruta central
    const enRuta = r() < 0.28;
    const lat = enRuta ? (r() * 2 - 1) * (LAT_RUTA - 1.5) : (Math.asin(r() * 2 - 1) / rad) * 0.86;
    const lon = r() * 360 - 180;
    const zona = zonaDe(lon, lat);
    if (zona === 'polo' || zona === 'espinazo') continue;
    if (zona === 'dormidas' && r() > 0.08) continue;                 // casi vacías
    if (distanciaContinente(lon, lat) < ANCHO_CONTINENTE + 2.5) continue;
    if (Math.abs(lat) > 72) continue;
    const radio = 0.55 + Math.pow(r(), 2.2) * 2.1;
    // Separación mínima
    if (islas.some((o) => Math.hypot((o.lon - lon) * Math.cos(lat * rad), o.lat - lat) < (o.radio + radio) * 1.9)) continue;
    const pesos = BIOMAS_POR_ZONA[zona];
    let t = r() * pesos.reduce((s, [, p]) => s + p, 0);
    let bioma = pesos[0][0];
    for (const [b, p] of pesos) { if ((t -= p) <= 0) { bioma = b; break; } }
    if (Math.abs(lat) > 50 && bioma === 'tropical') bioma = 'nevada';
    islas.push({ id: islas.length, lat, lon, radio, bioma, zona });
  }
  return islas;
}
