// Objetivos con pasos que se comprueban de verdad, contadores de lo que hace el personaje,
// y el estilo de combate y el código (las 2 reglas que cumple siempre).
import type { Bando, PersonajeGuardado } from '../cuenta';
import { arsenalDe } from '../cuenta';
import { puntosLibres } from '../datos/arsenal';
import { islaDePersonaje } from './habitantes';
import { MERITOS_RANGO, PISTAS_NECESARIAS } from './busqueda';
import { botsDeTripulaciones, resumenTripulacion, tripulacionDe } from './tripulaciones';

// --- Contadores ---------------------------------------------------------------
export type Contador = 'entrenos' | 'exploraciones' | 'viajes' | 'victorias' | 'victoriasMarine';
export function sumar(p: PersonajeGuardado, k: Contador, n = 1): PersonajeGuardado {
  return { ...p, cuenta: { ...p.cuenta, [k]: (p.cuenta?.[k] ?? 0) + n } };
}

/** Foto de cómo estaba el personaje al elegir el objetivo (los pasos cuentan desde ahí). */
export interface BaseObjetivo { cuenta: Partial<Record<Contador, number>>; nivel: number; meritos: number; capturasPirata: number }
export const fotoBase = (p: PersonajeGuardado): BaseObjetivo => ({ cuenta: { ...p.cuenta }, nivel: p.nivel, meritos: p.meritos ?? 0, capturasPirata: p.capturas?.pirata ?? 0 });

const rangoIdx = (m: number) => { let i = 0; while (i + 1 < MERITOS_RANGO.length && m >= MERITOS_RANGO[i + 1]) i++; return i; };

// --- Objetivos -------------------------------------------------------------------
interface Paso { texto: string; hecho: (p: PersonajeGuardado, b: BaseObjetivo) => boolean }
export interface ObjetivoReal { id: string; texto: string; bandos?: Bando[]; pasos: Paso[] }
const d = (p: PersonajeGuardado, b: BaseObjetivo, k: Contador) => (p.cuenta?.[k] ?? 0) - (b.cuenta?.[k] ?? 0);

export const OBJETIVOS_REALES: ObjetivoReal[] = [
  { id: 'fuerte', texto: 'Hacerse más fuerte', pasos: [
    { texto: 'Entrenar 5 veces', hecho: (p, b) => d(p, b, 'entrenos') >= 5 },
    { texto: 'Ganar 3 combates', hecho: (p, b) => d(p, b, 'victorias') >= 3 },
    { texto: 'Gastar todos tus puntos de mejora', hecho: (p) => puntosLibres(p.nivel, arsenalDe(p)) === 0 },
    { texto: 'Subir 2 niveles', hecho: (p, b) => p.nivel - b.nivel >= 2 },
  ] },
  { id: 'fruta', texto: 'Encontrar una fruta del poder', pasos: [
    { texto: 'Explorar 3 islas', hecho: (p, b) => d(p, b, 'exploraciones') >= 3 || !!p.fruta },
    { texto: 'Oír un rumor sobre una fruta', hecho: (p) => !!p.busqueda || !!p.fruta },
    { texto: `Reunir las ${PISTAS_NECESARIAS} pistas`, hecho: (p) => (p.busqueda?.pistas ?? 0) >= PISTAS_NECESARIAS || !!p.fruta },
    { texto: 'Vencer al guardián', hecho: (p) => !!p.busqueda?.vencido || !!p.fruta },
    { texto: 'Comerte la fruta', hecho: (p) => !!p.fruta },
  ] },
  { id: 'tripulacion', texto: 'Formar una tripulación', bandos: ['pirata'], pasos: [
    { texto: 'Llegar al nivel 10', hecho: (p) => p.nivel >= 10 },
    { texto: 'Conseguir una carabela o un galeón', hecho: (p) => (p.barco ?? 'barca') !== 'barca' },
    { texto: 'Fundar una tripulación o unirte a una', hecho: (p) => !!tripulacionDe(p) },
    { texto: 'Que la tripulación tenga 5 miembros', hecho: (p) => { const t = tripulacionDe(p); return !!t && resumenTripulacion(t, botsDeTripulaciones(t.mar).get(t.id) ?? []).miembros >= 5; } },
  ] },
  { id: 'zona', texto: 'Llegar a la Senda de las Mareas', pasos: [
    { texto: 'Llegar al nivel 15', hecho: (p) => p.nivel >= 15 },
    { texto: 'Viajar 5 veces', hecho: (p, b) => d(p, b, 'viajes') >= 5 },
    { texto: 'Desembarcar en la Senda de las Mareas', hecho: (p) => islaDePersonaje(p).zona === 'mareas' },
  ] },
  { id: 'rango', texto: 'Subir de rango', bandos: ['marine'], pasos: [
    { texto: 'Ganar 3 combates', hecho: (p, b) => d(p, b, 'victorias') >= 3 },
    { texto: 'Capturar a 2 piratas', hecho: (p, b) => (p.capturas?.pirata ?? 0) - b.capturasPirata >= 2 },
    { texto: 'Ganar 50 méritos', hecho: (p, b) => (p.meritos ?? 0) - b.meritos >= 50 },
    { texto: 'Ascender un rango', hecho: (p, b) => rangoIdx(p.meritos ?? 0) > rangoIdx(b.meritos) },
  ] },
  { id: 'recompensa', texto: 'Conseguir recompensa', bandos: ['pirata', 'revolucionario'], pasos: [
    { texto: 'Vencer a un marine', hecho: (p, b) => d(p, b, 'victoriasMarine') >= 1 },
    { texto: 'Tener recompensa por tu cabeza', hecho: (p) => (p.recompensa ?? 0) > 0 },
    { texto: 'Llegar a 100.000 doblones de recompensa', hecho: (p) => (p.recompensa ?? 0) >= 100_000 },
  ] },
  { id: 'celula', texto: 'Plantar cara a la Marina', bandos: ['revolucionario'], pasos: [
    { texto: 'Explorar 3 islas', hecho: (p, b) => d(p, b, 'exploraciones') >= 3 },
    { texto: 'Vencer a 3 marines', hecho: (p, b) => d(p, b, 'victoriasMarine') >= 3 },
    { texto: 'Llegar al nivel 10 (furia revolucionaria)', hecho: (p) => p.nivel >= 10 },
  ] },
  { id: 'fortuna', texto: 'Hacer fortuna', pasos: [
    { texto: 'Explorar 5 veces', hecho: (p, b) => d(p, b, 'exploraciones') >= 5 },
    { texto: 'Ganar 5 combates', hecho: (p, b) => d(p, b, 'victorias') >= 5 },
    { texto: 'Reunir 10.000 doblones', hecho: (p) => p.doblones >= 10_000 },
  ] },
];
export const objetivosReales = (b: Bando) => OBJETIVOS_REALES.filter((o) => !o.bandos || o.bandos.includes(b));
export const objetivoDe = (p: PersonajeGuardado) => OBJETIVOS_REALES.find((o) => o.id === p.objetivo) ?? null;

/** Estado de cada paso del objetivo actual. */
export function progresoObjetivo(p: PersonajeGuardado): { o: ObjetivoReal; hechos: boolean[]; completo: boolean } | null {
  const o = objetivoDe(p);
  if (!o) return null;
  const b = p.objetivoBase ?? fotoBase({ ...p, cuenta: {}, nivel: 1, meritos: 0, capturas: undefined });
  const hechos = o.pasos.map((x) => x.hecho(p, b));
  return { o, hechos, completo: hechos.every(Boolean) };
}

/** Premio por cumplir un objetivo: un nivel de experiencia y 1.000 doblones. */
export const premioObjetivo = (p: PersonajeGuardado) => ({ xp: 50 * p.nivel * p.nivel, oro: 1000 });

// --- Estilo de combate -------------------------------------------------------------
export const ESTILOS = {
  espada: { nombre: 'Espadachín', icono: '🗡', ventaja: '+8% de fuerza peleando con espada.' },
  punos: { nombre: 'Luchador', icono: '👊', ventaja: '+8% de fuerza peleando con los puños. Empieza con los puños en la mano.' },
  tirador: { nombre: 'Tirador', icono: '🔫', ventaja: '+10% de técnica con pistola. Empieza con una pistola de chispa.' },
  navegante: { nombre: 'Navegante', icono: '🧭', ventaja: 'Viajes un 10% más rápidos.' },
  medico: { nombre: 'Médico', icono: '🩹', ventaja: '+1 botiquín gratis en cada combate.' },
  cocinero: { nombre: 'Cocinero', icono: '🍲', ventaja: '+1 grog gratis en cada combate.' },
  cientifico: { nombre: 'Científico', icono: '⚗', ventaja: '+10% de técnica en todos los combates.' },
} as const;
export type Estilo = keyof typeof ESTILOS;

// --- Código: 2 reglas que cumple siempre ---------------------------------------------
export const CODIGOS = {
  'nunca-huye': { nombre: 'Nunca huye', ventaja: '+5% de fuerza', regla: 'No puede huir de un combate.' },
  'protege-amigos': { nombre: 'Protege a sus amigos', ventaja: '+5% de resistencia si va en tripulación', regla: 'Siempre se queda con los suyos.' },
  'no-debiles': { nombre: 'No ataca a los débiles', ventaja: '+10% de recompensa o méritos al ganar', regla: 'No desafía a nadie 5 o más niveles por debajo.' },
  madrugador: { nombre: 'Madruga siempre', ventaja: '+10% de experiencia al entrenar', regla: 'Entrena aunque llueva.' },
  buscatesoros: { nombre: 'Nunca deja un tesoro atrás', ventaja: '+20% de oro al explorar', regla: 'Explora cada rincón.' },
  'respeta-mar': { nombre: 'Respeta el mar', ventaja: 'Nadie le corta el paso por sorpresa', regla: 'Solo pelea cuando él quiere.' },
} as const;
export type Codigo = keyof typeof CODIGOS;
export const MAX_CODIGO = 2;
export const tieneCodigo = (p: PersonajeGuardado, c: Codigo) => (p.codigo ?? []).includes(c);
