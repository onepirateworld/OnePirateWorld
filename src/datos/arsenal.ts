// Armas, escudos, habilidades y mejoras del personaje. Todo se compra con doblones
// y se mejora por niveles (1 a 5).
import type { Rareza } from './frutas';

export type TipoArma = 'espada' | 'pistola' | 'punos' | 'escudo';

export interface Arma {
  id: string;
  nombre: string;
  tipo: TipoArma;
  rareza: Rareza;
  nivelMin: number;
  precio: number;
  /** Multiplicador de daño (escudos: puntos de defensa). */
  dano: number;
  dosManos?: boolean;
  /** Técnica propia del arma (además de las de su tipo). */
  tecnica?: string;
  descripcion: string;
}

export const CATALOGO_ARMAS: Arma[] = [
  // Espadas
  { id: 'sable-grumete', nombre: 'Sable de grumete', tipo: 'espada', rareza: 'comun', nivelMin: 1, precio: 0, dano: 1, descripcion: 'Viejo y mellado, pero corta.' },
  { id: 'alfanje', nombre: 'Alfanje', tipo: 'espada', rareza: 'comun', nivelMin: 3, precio: 300, dano: 1.1, descripcion: 'Hoja ancha y curva de marinero.' },
  { id: 'florete', nombre: 'Florete', tipo: 'espada', rareza: 'comun', nivelMin: 5, precio: 450, dano: 0.95, tecnica: 'estocada-triple', descripcion: 'Fino y rápido: pica tres veces.' },
  { id: 'cimitarra', nombre: 'Cimitarra', tipo: 'espada', rareza: 'rara', nivelMin: 8, precio: 900, dano: 1.2, tecnica: 'media-luna', descripcion: 'Curva como la luna; corta en arco.' },
  { id: 'ropera', nombre: 'Espada ropera', tipo: 'espada', rareza: 'rara', nivelMin: 10, precio: 1200, dano: 1.15, tecnica: 'finta', descripcion: 'De duelista. Engaña y luego hiere.' },
  { id: 'sable-abordaje', nombre: 'Sable de abordaje', tipo: 'espada', rareza: 'rara', nivelMin: 12, precio: 1600, dano: 1.25, tecnica: 'abordaje', descripcion: 'Para saltar de barco en barco.' },
  { id: 'mandoble', nombre: 'Mandoble', tipo: 'espada', rareza: 'epica', nivelMin: 18, precio: 4000, dano: 1.45, dosManos: true, tecnica: 'tajo-demoledor', descripcion: 'Enorme y lento. Se usa con las dos manos.' },
  { id: 'dos-sables', nombre: 'Dos sables', tipo: 'espada', rareza: 'epica', nivelMin: 22, precio: 6000, dano: 1.3, dosManos: true, tecnica: 'remolino', descripcion: 'Uno en cada mano.' },
  { id: 'hoja-coral', nombre: 'Hoja de Coral', tipo: 'espada', rareza: 'legendaria', nivelMin: 35, precio: 25000, dano: 1.7, tecnica: 'marea-cortante', descripcion: 'Forjada con coral del fondo del mar.' },
  { id: 'espada-espinazo', nombre: 'Espada del Espinazo', tipo: 'espada', rareza: 'legendaria', nivelMin: 45, precio: 60000, dano: 2, tecnica: 'filo-montana', descripcion: 'Dicen que la forjaron en lo alto de El Espinazo.' },
  // Pistolas
  { id: 'pistola-chispa', nombre: 'Pistola de chispa', tipo: 'pistola', rareza: 'comun', nivelMin: 1, precio: 200, dano: 1, descripcion: 'Un tiro y a recargar.' },
  { id: 'pistola-doble', nombre: 'Pistola de dos cañones', tipo: 'pistola', rareza: 'rara', nivelMin: 9, precio: 1100, dano: 1.15, tecnica: 'doble-disparo', descripcion: 'Dos balas de una vez.' },
  { id: 'trabuco', nombre: 'Trabuco', tipo: 'pistola', rareza: 'rara', nivelMin: 12, precio: 1500, dano: 1.3, tecnica: 'perdigonada', descripcion: 'Escupe perdigones a corta distancia.' },
  { id: 'mosquete', nombre: 'Mosquete largo', tipo: 'pistola', rareza: 'epica', nivelMin: 20, precio: 5000, dano: 1.45, dosManos: true, tecnica: 'francotirador', descripcion: 'Lento de cargar, letal de lejos.' },
  // Puños
  { id: 'punos', nombre: 'Puños', tipo: 'punos', rareza: 'comun', nivelMin: 1, precio: 0, dano: 1, descripcion: 'Siempre a mano.' },
  { id: 'nudilleras', nombre: 'Nudilleras de hierro', tipo: 'punos', rareza: 'comun', nivelMin: 4, precio: 350, dano: 1.2, descripcion: 'Cada puñetazo suena a campana.' },
  { id: 'guanteletes', nombre: 'Guanteletes de ancla', tipo: 'punos', rareza: 'epica', nivelMin: 20, precio: 4500, dano: 1.5, tecnica: 'puno-ancla', descripcion: 'Pesan como un ancla, pegan como un ancla.' },
  // Escudos (en la otra mano; no se pueden llevar con armas de dos manos)
  { id: 'broquel', nombre: 'Broquel', tipo: 'escudo', rareza: 'comun', nivelMin: 3, precio: 250, dano: 2, descripcion: 'Pequeño y redondo. +2 de defensa.' },
  { id: 'rodela', nombre: 'Rodela de roble', tipo: 'escudo', rareza: 'rara', nivelMin: 10, precio: 1200, dano: 5, descripcion: 'Madera dura con remaches. +5 de defensa.' },
  { id: 'caparazon', nombre: 'Escudo de caparazón', tipo: 'escudo', rareza: 'epica', nivelMin: 25, precio: 7000, dano: 10, descripcion: 'El caparazón de una tortuga gigante. +10 de defensa.' },
];

export type TipoHabilidad = 'defensa' | 'ataque' | 'apoyo' | 'pasiva';

export interface Habilidad {
  id: string;
  nombre: string;
  tipo: TipoHabilidad;
  nivelMin: number;
  precio: number;
  requiere?: TipoArma;
  descripcion: string;
  /** Qué mejora cada nivel. */
  porNivel: string;
}

export const CATALOGO_HABILIDADES: Habilidad[] = [
  { id: 'bloqueo-frontal', nombre: 'Bloqueo frontal', tipo: 'defensa', nivelMin: 1, precio: 0, requiere: 'espada', descripcion: 'Cruza la espada delante: para el 60% del golpe y devuelve un poco.', porNivel: '+5% bloqueado' },
  { id: 'guardia-escudo', nombre: 'Guardia de escudo', tipo: 'defensa', nivelMin: 3, precio: 200, requiere: 'escudo', descripcion: 'Se cubre tras el escudo: para el 80% del golpe.', porNivel: '+4% bloqueado' },
  { id: 'esquiva', nombre: 'Esquiva rodando', tipo: 'defensa', nivelMin: 4, precio: 350, descripcion: '60% de esquivar por completo el siguiente ataque.', porNivel: '+6% de esquivar' },
  { id: 'contraataque', nombre: 'Contraataque', tipo: 'defensa', nivelMin: 8, precio: 900, descripcion: 'Espera el golpe: para el 30% y responde con fuerza.', porNivel: '+10% de daño devuelto' },
  { id: 'grito', nombre: 'Grito de guerra', tipo: 'apoyo', nivelMin: 2, precio: 150, descripcion: 'Sube tu fuerza un 20% el resto del combate.', porNivel: '+5% de fuerza' },
  { id: 'respirar', nombre: 'Respirar hondo', tipo: 'apoyo', nivelMin: 1, precio: 0, descripcion: 'Recupera un 10% de vida y 20 de energía.', porNivel: '+3% de vida' },
  { id: 'vendaje', nombre: 'Vendaje rápido', tipo: 'apoyo', nivelMin: 6, precio: 500, descripcion: 'Recupera un 20% de vida. Una vez por combate.', porNivel: '+4% de vida' },
  { id: 'arena', nombre: 'Lanzar arena', tipo: 'apoyo', nivelMin: 5, precio: 400, descripcion: 'El rival falla más durante 3 turnos.', porNivel: '+5% de fallo' },
  { id: 'golpe-bajo', nombre: 'Golpe bajo', tipo: 'ataque', nivelMin: 3, precio: 250, descripcion: 'Poder 55. Ignora la mitad de la defensa.', porNivel: '+8 de poder' },
  { id: 'carga', nombre: 'Carga del toro', tipo: 'ataque', nivelMin: 10, precio: 1200, descripcion: 'Poder 90, pero te deja sin guardia un turno.', porNivel: '+10 de poder' },
  { id: 'desenfundar', nombre: 'Desenfundar', tipo: 'ataque', nivelMin: 6, precio: 600, requiere: 'pistola', descripcion: 'Dispara antes que nadie. Poder 40.', porNivel: '+6 de poder' },
  { id: 'piel-hierro', nombre: 'Piel de hierro', tipo: 'pasiva', nivelMin: 5, precio: 600, descripcion: 'Siempre activa: más resistencia.', porNivel: '+8% de resistencia' },
  { id: 'ojo-critico', nombre: 'Ojo crítico', tipo: 'pasiva', nivelMin: 7, precio: 800, descripcion: 'Siempre activa: más golpes críticos.', porNivel: '+3% de crítico' },
  { id: 'pies-ligeros', nombre: 'Pies ligeros', tipo: 'pasiva', nivelMin: 9, precio: 1000, descripcion: 'Siempre activa: esquivas más.', porNivel: '+5% de esquiva' },
  { id: 'corazon-leon', nombre: 'Corazón de león', tipo: 'pasiva', nivelMin: 12, precio: 1500, descripcion: 'Siempre activa: más vida máxima.', porNivel: '+6% de vida' },
];

export const NIVEL_MAX = 5;
export const MAX_EQUIPADAS = 4;
export const PUNTOS_POR_NIVEL = 3;

const MULT_RAREZA: Record<Rareza, number> = { comun: 1, rara: 2, epica: 4, legendaria: 8 };
/** Precio de mejorar un arma al siguiente nivel en la forja. */
export const precioForja = (a: Arma, nivel: number) => 150 * nivel * nivel * MULT_RAREZA[a.rareza];
/** Precio de subir una habilidad al siguiente nivel. */
export const precioHabilidad = (h: Habilidad, nivel: number) => Math.max(100, h.precio) * nivel;

export type Estadistica = 'vida' | 'fuerza' | 'tecnica' | 'resistencia' | 'velocidad';
export const MEJORA_POR_PUNTO: Record<Estadistica, { texto: string; cantidad: number }> = {
  vida: { texto: '+8 de vida', cantidad: 8 }, fuerza: { texto: '+1 de fuerza', cantidad: 1 }, tecnica: { texto: '+1 de técnica', cantidad: 1 },
  resistencia: { texto: '+1 de resistencia', cantidad: 1 }, velocidad: { texto: '+1 de velocidad', cantidad: 1 },
};

/** Lo que tiene y lleva equipado un personaje. */
export interface Arsenal {
  armas: Record<string, number>;          // id -> nivel de forja
  principal: string;                      // arma en la mano
  secundaria?: string;                    // segunda arma para cambiar en combate
  escudo?: string;
  habilidades: Record<string, number>;    // id -> nivel
  equipadas: string[];                    // máx. 4
  mejoras: Record<Estadistica, number>;   // puntos gastados
}

export function arsenalInicial(): Arsenal {
  return {
    armas: { 'sable-grumete': 1, punos: 1 }, principal: 'sable-grumete', secundaria: 'punos',
    habilidades: { 'bloqueo-frontal': 1, respirar: 1 }, equipadas: ['bloqueo-frontal', 'respirar'],
    mejoras: { vida: 0, fuerza: 0, tecnica: 0, resistencia: 0, velocidad: 0 },
  };
}

export const puntosLibres = (nivel: number, a: Arsenal) =>
  (nivel - 1) * PUNTOS_POR_NIVEL - Object.values(a.mejoras).reduce((s, x) => s + x, 0);

export const arma = (id: string) => CATALOGO_ARMAS.find((x) => x.id === id)!;
export const habilidad = (id: string) => CATALOGO_HABILIDADES.find((x) => x.id === id)!;

/** ¿Puede usar esta habilidad con lo que lleva equipado? */
export function habilidadUsable(h: Habilidad, a: Arsenal) {
  if (!h.requiere) return true;
  if (h.requiere === 'escudo') return !!a.escudo;
  return [a.principal, a.secundaria].filter(Boolean).some((id) => arma(id!).tipo === h.requiere);
}

/** Arsenal de un bot según su nivel (siempre el mismo para el mismo bot). */
export function arsenalBot(nivel: number, r: () => number): Arsenal {
  const a = arsenalInicial();
  // Un poco por detrás de su nivel: un jugador que mejora su equipo debe poder ganarles
  const armas = CATALOGO_ARMAS.filter((x) => x.nivelMin <= Math.max(1, nivel - 3) && x.tipo !== 'escudo');
  const principal = armas[Math.floor(r() * armas.length)];
  a.armas[principal.id] = 1 + Math.min(4, Math.floor(nivel / 15));
  a.principal = principal.id;
  const escudos = CATALOGO_ARMAS.filter((x) => x.tipo === 'escudo' && x.nivelMin <= nivel);
  if (!principal.dosManos && escudos.length && r() < 0.4) a.escudo = escudos[Math.floor(r() * escudos.length)].id;
  const habs = CATALOGO_HABILIDADES.filter((h) => h.nivelMin <= nivel && habilidadUsable(h, a));
  const elegidas = new Set<string>();
  while (elegidas.size < Math.min(MAX_EQUIPADAS, habs.length, 2 + Math.floor(nivel / 15))) elegidas.add(habs[Math.floor(r() * habs.length)].id);
  a.habilidades = Object.fromEntries([...elegidas].map((id) => [id, 1 + Math.min(4, Math.floor(nivel / 15))]));
  a.equipadas = [...elegidas];
  return a;
}
