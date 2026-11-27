// Todas las técnicas del juego: las de cada tipo de arma, las especiales de cada arma,
// las habilidades y las de las frutas. Cada una dice cómo se anima (sencillo pero claro).
import { C } from '../arte/paleta';
import type { TipoArma } from '../datos/arsenal';

export type TipoDano = 'golpe' | 'corte' | 'disparo' | 'fruta';

/** Recetas de animación: piezas simples que se combinan. */
export type Anim =
  | { forma: 'corte'; lineas: number; color?: number }           // tajos que cruzan al rival
  | { forma: 'estocada'; veces: number; color?: number }         // línea recta que atraviesa
  | { forma: 'arco'; color?: number }                            // media luna
  | { forma: 'giro'; color?: number }                            // círculos que giran alrededor del rival
  | { forma: 'proyectil'; n: number; color: number; tam: number; abanico?: boolean }
  | { forma: 'rayo'; color: number }                             // haz instantáneo
  | { forma: 'impacto'; color?: number; tam?: number }          // estallido en el rival
  | { forma: 'onda'; color: number; haciaRival: boolean }        // anillos que crecen
  | { forma: 'aura'; color: number }                             // partículas que suben del que la usa
  | { forma: 'escudo'; tipo: 'espada' | 'escudo' | 'burbuja' | 'raices'; color: number }
  | { forma: 'cura'; color: number }                             // cruces que suben
  | { forma: 'nube'; color: number; sobreMi?: boolean }          // bocanadas
  | { forma: 'lluvia'; color: number }                           // cae sobre el rival
  | { forma: 'enredo'; color: number }                           // líneas que salen del suelo y atrapan
  | { forma: 'garras'; color?: number }                          // tres zarpazos paralelos
  | { forma: 'salto'; color?: number };                          // el atacante salta y cae encima

export interface Efectos {
  bloqueo?: number;          // fracción de daño parado este turno
  devuelve?: number;         // fracción del daño recibido que se devuelve
  esquiva?: number;          // probabilidad de esquivar el siguiente golpe este turno
  cura?: number;             // fracción de vida máxima
  energia?: number;          // energía que recupera
  cegar?: number;            // baja la precisión del rival (3 turnos)
  mejora?: { stat: 'fuerza' | 'resistencia' | 'velocidad'; cantidad: number };
  sinGuardia?: boolean;      // el siguiente turno recibe más daño
  ignoraDefensa?: number;    // fracción de defensa ignorada
  prioridad?: boolean;       // actúa antes que el rival
  unaVez?: boolean;          // solo una vez por combate
  retroceso?: number;        // fracción del daño que se hace a sí mismo
}

export interface Tecnica {
  id: string;
  nombre: string;
  poder: number;
  precision: number;
  energia: number;
  golpes?: number;
  dano: TipoDano;
  anim: Anim;
  /** El que ataca se mueve: embiste, salta o se queda quieto. */
  mov?: 'embestida' | 'salto' | 'quieto';
  efectos?: Efectos;
  descripcion: string;
}

const T = (t: Tecnica) => t;

// --- Por tipo de arma -------------------------------------------------------
export const TECNICAS_TIPO: Record<Exclude<TipoArma, 'escudo'>, Tecnica[]> = {
  punos: [
    T({ id: 'punetazo', nombre: 'Puñetazo', poder: 40, precision: 1, energia: 0, dano: 'golpe', anim: { forma: 'impacto' }, descripcion: 'Un buen directo.' }),
    T({ id: 'patada', nombre: 'Patada giratoria', poder: 60, precision: 0.85, energia: 10, dano: 'golpe', anim: { forma: 'giro' }, descripcion: 'Gira sobre sí mismo y golpea.' }),
    T({ id: 'cabezazo', nombre: 'Cabezazo', poder: 80, precision: 0.8, energia: 15, dano: 'golpe', anim: { forma: 'impacto', tam: 2 }, efectos: { retroceso: 0.2 }, descripcion: 'Duele a los dos.' }),
    T({ id: 'calentar', nombre: 'Calentar puños', poder: 0, precision: 1, energia: 10, dano: 'golpe', mov: 'quieto', anim: { forma: 'aura', color: C.naranja }, efectos: { mejora: { stat: 'fuerza', cantidad: 0.25 } }, descripcion: 'Sube la fuerza.' }),
  ],
  espada: [
    T({ id: 'tajo', nombre: 'Tajo', poder: 50, precision: 0.95, energia: 0, dano: 'corte', anim: { forma: 'corte', lineas: 1 }, descripcion: 'Un corte limpio.' }),
    T({ id: 'estocada', nombre: 'Estocada', poder: 65, precision: 0.9, energia: 10, dano: 'corte', anim: { forma: 'estocada', veces: 1 }, descripcion: 'Atraviesa en línea recta.' }),
    T({ id: 'cruzado', nombre: 'Corte cruzado', poder: 85, precision: 0.75, energia: 20, dano: 'corte', anim: { forma: 'corte', lineas: 2 }, descripcion: 'Dos cortes en aspa.' }),
    T({ id: 'guardia-acero', nombre: 'Guardia de acero', poder: 0, precision: 1, energia: 10, dano: 'corte', mov: 'quieto', anim: { forma: 'aura', color: C.niebla }, efectos: { mejora: { stat: 'resistencia', cantidad: 0.3 } }, descripcion: 'Sube la defensa.' }),
  ],
  pistola: [
    T({ id: 'disparo', nombre: 'Disparo', poder: 45, precision: 0.9, energia: 0, dano: 'disparo', mov: 'quieto', anim: { forma: 'proyectil', n: 1, color: C.limon, tam: 2 }, descripcion: 'Un tiro.' }),
    T({ id: 'rafaga', nombre: 'Ráfaga', poder: 18, precision: 0.75, energia: 15, golpes: 3, dano: 'disparo', mov: 'quieto', anim: { forma: 'proyectil', n: 3, color: C.limon, tam: 2 }, descripcion: 'Tres tiros seguidos.' }),
    T({ id: 'certero', nombre: 'Tiro certero', poder: 75, precision: 1, energia: 25, dano: 'disparo', mov: 'quieto', anim: { forma: 'rayo', color: C.limon }, descripcion: 'No falla.' }),
    T({ id: 'apuntar', nombre: 'Apuntar con calma', poder: 0, precision: 1, energia: 5, dano: 'disparo', mov: 'quieto', anim: { forma: 'aura', color: C.bajio }, efectos: { mejora: { stat: 'velocidad', cantidad: 0.3 } }, descripcion: 'Sube la puntería.' }),
  ],
};

// --- Especiales de cada arma ------------------------------------------------
export const TECNICAS_ARMA: Record<string, Tecnica> = Object.fromEntries([
  T({ id: 'estocada-triple', nombre: 'Estocada triple', poder: 22, precision: 0.9, energia: 15, golpes: 3, dano: 'corte', anim: { forma: 'estocada', veces: 3 }, descripcion: 'Tres pinchazos rapidísimos.' }),
  T({ id: 'media-luna', nombre: 'Media luna', poder: 90, precision: 0.75, energia: 20, dano: 'corte', anim: { forma: 'arco' }, descripcion: 'Un corte en arco.' }),
  T({ id: 'finta', nombre: 'Finta', poder: 60, precision: 1, energia: 15, dano: 'corte', anim: { forma: 'estocada', veces: 1 }, efectos: { ignoraDefensa: 0.4 }, descripcion: 'Amaga y hiere donde no hay guardia.' }),
  T({ id: 'abordaje', nombre: 'Al abordaje', poder: 85, precision: 0.85, energia: 20, dano: 'corte', mov: 'salto', anim: { forma: 'salto' }, descripcion: 'Salta sobre el rival con el sable por delante.' }),
  T({ id: 'tajo-demoledor', nombre: 'Tajo demoledor', poder: 120, precision: 0.65, energia: 30, dano: 'corte', anim: { forma: 'corte', lineas: 1, color: C.naranja }, descripcion: 'Un golpe enorme y lento.' }),
  T({ id: 'remolino', nombre: 'Remolino de acero', poder: 45, precision: 0.85, energia: 25, golpes: 2, dano: 'corte', anim: { forma: 'giro', color: C.hueso }, descripcion: 'Gira con los dos sables.' }),
  T({ id: 'marea-cortante', nombre: 'Marea cortante', poder: 110, precision: 0.9, energia: 30, dano: 'corte', anim: { forma: 'arco', color: C.bajio }, descripcion: 'Un corte que suena a ola.' }),
  T({ id: 'filo-montana', nombre: 'Filo de montaña', poder: 140, precision: 0.85, energia: 40, dano: 'corte', anim: { forma: 'corte', lineas: 3 }, descripcion: 'Tres cortes que parten rocas.' }),
  T({ id: 'doble-disparo', nombre: 'Doble disparo', poder: 35, precision: 0.85, energia: 15, golpes: 2, dano: 'disparo', mov: 'quieto', anim: { forma: 'proyectil', n: 2, color: C.limon, tam: 2 }, descripcion: 'Los dos cañones a la vez.' }),
  T({ id: 'perdigonada', nombre: 'Perdigonada', poder: 90, precision: 0.75, energia: 20, dano: 'disparo', mov: 'quieto', anim: { forma: 'proyectil', n: 7, color: C.niebla, tam: 1, abanico: true }, descripcion: 'Una nube de perdigones.' }),
  T({ id: 'francotirador', nombre: 'Tiro de francotirador', poder: 125, precision: 0.95, energia: 35, dano: 'disparo', mov: 'quieto', anim: { forma: 'rayo', color: C.hueso }, descripcion: 'Un disparo perfecto desde lejos.' }),
  T({ id: 'puno-ancla', nombre: 'Puño de ancla', poder: 110, precision: 0.8, energia: 30, dano: 'golpe', mov: 'salto', anim: { forma: 'impacto', tam: 3, color: C.niebla }, descripcion: 'Cae como un ancla.' }),
].map((t) => [t.id, t]));

// --- Habilidades (cualquiera puede aprenderlas) ------------------------------
export const TECNICAS_HABILIDAD: Record<string, Tecnica> = Object.fromEntries([
  T({ id: 'bloqueo-frontal', nombre: 'Bloqueo frontal', poder: 0, precision: 1, energia: 10, dano: 'corte', mov: 'quieto', anim: { forma: 'escudo', tipo: 'espada', color: C.hueso }, efectos: { bloqueo: 0.6, devuelve: 0.15, prioridad: true }, descripcion: 'Para el golpe con la espada.' }),
  T({ id: 'guardia-escudo', nombre: 'Guardia de escudo', poder: 0, precision: 1, energia: 10, dano: 'golpe', mov: 'quieto', anim: { forma: 'escudo', tipo: 'escudo', color: C.madera }, efectos: { bloqueo: 0.8, prioridad: true }, descripcion: 'Se cubre tras el escudo.' }),
  T({ id: 'esquiva', nombre: 'Esquiva rodando', poder: 0, precision: 1, energia: 12, dano: 'golpe', mov: 'quieto', anim: { forma: 'aura', color: C.espuma }, efectos: { esquiva: 0.6, prioridad: true }, descripcion: 'Rueda para esquivar.' }),
  T({ id: 'contraataque', nombre: 'Contraataque', poder: 0, precision: 1, energia: 15, dano: 'golpe', mov: 'quieto', anim: { forma: 'escudo', tipo: 'espada', color: C.oro }, efectos: { bloqueo: 0.3, devuelve: 0.7, prioridad: true }, descripcion: 'Aguanta y devuelve el golpe.' }),
  T({ id: 'grito', nombre: 'Grito de guerra', poder: 0, precision: 1, energia: 15, dano: 'golpe', mov: 'quieto', anim: { forma: 'onda', color: C.oro, haciaRival: false }, efectos: { mejora: { stat: 'fuerza', cantidad: 0.2 } }, descripcion: 'Sube la fuerza.' }),
  T({ id: 'respirar', nombre: 'Respirar hondo', poder: 0, precision: 1, energia: 0, dano: 'golpe', mov: 'quieto', anim: { forma: 'cura', color: C.brote }, efectos: { cura: 0.1, energia: 20 }, descripcion: 'Recupera vida y energía.' }),
  T({ id: 'vendaje', nombre: 'Vendaje rápido', poder: 0, precision: 1, energia: 20, dano: 'golpe', mov: 'quieto', anim: { forma: 'cura', color: C.hueso }, efectos: { cura: 0.2, unaVez: true }, descripcion: 'Una cura rápida.' }),
  T({ id: 'arena', nombre: 'Lanzar arena', poder: 0, precision: 1, energia: 12, dano: 'golpe', anim: { forma: 'nube', color: C.arena }, efectos: { cegar: 0.2 }, descripcion: 'El rival no ve bien.' }),
  T({ id: 'golpe-bajo', nombre: 'Golpe bajo', poder: 55, precision: 0.95, energia: 15, dano: 'golpe', anim: { forma: 'impacto', color: C.coral }, efectos: { ignoraDefensa: 0.5 }, descripcion: 'Donde más duele.' }),
  T({ id: 'carga', nombre: 'Carga del toro', poder: 90, precision: 0.8, energia: 25, dano: 'golpe', mov: 'embestida', anim: { forma: 'impacto', tam: 3 }, efectos: { sinGuardia: true }, descripcion: 'Embiste con todo.' }),
  T({ id: 'desenfundar', nombre: 'Desenfundar', poder: 40, precision: 0.95, energia: 10, dano: 'disparo', mov: 'quieto', anim: { forma: 'proyectil', n: 1, color: C.hueso, tam: 2 }, efectos: { prioridad: true }, descripcion: 'Dispara antes que nadie.' }),
].map((t) => [t.id, t]));

// --- Frutas del poder -------------------------------------------------------
export const TECNICAS_FRUTA: Record<string, Tecnica[]> = {
  muelle: [
    T({ id: 'salto-ballesta', nombre: 'Salto de Ballesta', poder: 80, precision: 0.85, energia: 20, dano: 'fruta', mov: 'salto', anim: { forma: 'salto', color: C.brote }, descripcion: 'Se comprime y sale disparado.' }),
    T({ id: 'puno-retractil', nombre: 'Puño Retráctil', poder: 55, precision: 0.95, energia: 15, dano: 'fruta', anim: { forma: 'estocada', veces: 1, color: C.brote }, efectos: { prioridad: true }, descripcion: 'El brazo se estira como un muelle.' }),
    T({ id: 'rebote-loco', nombre: 'Rebote Loco', poder: 28, precision: 0.8, energia: 25, golpes: 3, dano: 'fruta', anim: { forma: 'giro', color: C.brote }, descripcion: 'Rebota por todas partes.' }),
  ],
  espejo: [
    T({ id: 'muro-azogue', nombre: 'Muro de Azogue', poder: 0, precision: 1, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'burbuja', color: C.lila }, efectos: { bloqueo: 0.7, devuelve: 0.3, prioridad: true }, descripcion: 'Un espejo que devuelve el golpe.' }),
    T({ id: 'reflejo-devuelto', nombre: 'Reflejo Devuelto', poder: 85, precision: 0.9, energia: 25, dano: 'fruta', mov: 'quieto', anim: { forma: 'rayo', color: C.lila }, descripcion: 'Un rayo de luz rebotado.' }),
    T({ id: 'laberinto-plata', nombre: 'Laberinto de Plata', poder: 0, precision: 1, energia: 20, dano: 'fruta', anim: { forma: 'nube', color: C.lila }, efectos: { cegar: 0.3 }, descripcion: 'Rodea al rival de reflejos.' }),
  ],
  eco: [
    T({ id: 'grito-guardado', nombre: 'Grito Guardado', poder: 80, precision: 0.9, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'onda', color: C.oro, haciaRival: true }, descripcion: 'Suelta un grito acumulado.' }),
    T({ id: 'tambor-pecho', nombre: 'Tambor de Pecho', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'onda', color: C.naranja, haciaRival: false }, efectos: { mejora: { stat: 'fuerza', cantidad: 0.3 } }, descripcion: 'Retumba y se crece.' }),
    T({ id: 'oido-murcielago', nombre: 'Oído de Murciélago', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.oro }, efectos: { esquiva: 0.7, prioridad: true }, descripcion: 'Oye venir cada golpe.' }),
  ],
  raiz: [
    T({ id: 'lazo-raiz', nombre: 'Lazo de Raíz', poder: 50, precision: 0.9, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.madera }, efectos: { cegar: 0.15 }, descripcion: 'Atrapa al rival.' }),
    T({ id: 'ancla-viva', nombre: 'Ancla Viva', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'raices', color: C.madera }, efectos: { bloqueo: 0.65, prioridad: true }, descripcion: 'Echa raíces y aguanta.' }),
    T({ id: 'bosque-puno', nombre: 'Bosque en Puño', poder: 90, precision: 0.85, energia: 25, dano: 'fruta', anim: { forma: 'impacto', color: C.hoja, tam: 3 }, descripcion: 'Un puño hecho de troncos.' }),
  ],
  jaguar: [
    T({ id: 'zarpazo-moteado', nombre: 'Zarpazo Moteado', poder: 70, precision: 0.9, energia: 15, dano: 'fruta', anim: { forma: 'garras', color: C.naranja }, descripcion: 'Tres garras a la vez.' }),
    T({ id: 'acecho-nocturno', nombre: 'Acecho Nocturno', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.noche }, efectos: { mejora: { stat: 'velocidad', cantidad: 0.4 } }, descripcion: 'Se agazapa en la sombra.' }),
    T({ id: 'salto-rama', nombre: 'Salto de Rama', poder: 85, precision: 0.85, energia: 20, dano: 'fruta', mov: 'salto', anim: { forma: 'salto', color: C.naranja }, descripcion: 'Cae desde arriba.' }),
  ],
  pulpo: [
    T({ id: 'tinta-ciega', nombre: 'Tinta Ciega', poder: 20, precision: 1, energia: 15, dano: 'fruta', anim: { forma: 'nube', color: C.tinta }, efectos: { cegar: 0.3 }, descripcion: 'Una nube de tinta.' }),
    T({ id: 'ocho-nudos', nombre: 'Ocho Nudos', poder: 14, precision: 0.85, energia: 25, golpes: 6, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.violeta }, descripcion: 'Brazos que golpean sin parar.' }),
    T({ id: 'ventosa-hierro', nombre: 'Ventosa de Hierro', poder: 85, precision: 0.85, energia: 20, dano: 'fruta', anim: { forma: 'impacto', color: C.violeta, tam: 2 }, descripcion: 'Agarra y aprieta.' }),
  ],
  halcon: [
    T({ id: 'picado-halcon', nombre: 'Picado de Halcón', poder: 95, precision: 0.8, energia: 25, dano: 'fruta', mov: 'salto', anim: { forma: 'salto', color: C.niebla }, descripcion: 'Baja en picado.' }),
    T({ id: 'ojo-altura', nombre: 'Ojo de Altura', poder: 0, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.hueso }, efectos: { mejora: { stat: 'velocidad', cantidad: 0.3 } }, descripcion: 'Lo ve todo desde arriba.' }),
    T({ id: 'garra-cortavientos', nombre: 'Garra Cortavientos', poder: 75, precision: 0.9, energia: 20, dano: 'fruta', anim: { forma: 'garras', color: C.hueso }, descripcion: 'Garras que cortan el aire.' }),
  ],
  ceniza: [
    T({ id: 'nube-ardiente', nombre: 'Nube Ardiente', poder: 90, precision: 0.85, energia: 25, dano: 'fruta', mov: 'quieto', anim: { forma: 'nube', color: C.naranja }, descripcion: 'Ceniza que quema.' }),
    T({ id: 'lluvia-gris', nombre: 'Lluvia Gris', poder: 26, precision: 0.9, energia: 25, golpes: 3, dano: 'fruta', mov: 'quieto', anim: { forma: 'lluvia', color: C.piedra }, efectos: { cegar: 0.1 }, descripcion: 'Llueve ceniza encima.' }),
    T({ id: 'brasa-dormida', nombre: 'Brasa Dormida', poder: 70, precision: 0.95, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 1, color: C.naranja, tam: 4 }, descripcion: 'Lanza una brasa.' }),
  ],
  niebla: [
    T({ id: 'velo-blanco', nombre: 'Velo Blanco', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'nube', color: C.hueso, sobreMi: true }, efectos: { esquiva: 0.75, prioridad: true }, descripcion: 'Se vuelve niebla.' }),
    T({ id: 'paso-bruma', nombre: 'Paso de Bruma', poder: 65, precision: 1, energia: 20, dano: 'fruta', mov: 'embestida', anim: { forma: 'nube', color: C.espuma }, descripcion: 'Aparece detrás del rival.' }),
    T({ id: 'abrazo-humedo', nombre: 'Abrazo Húmedo', poder: 75, precision: 0.85, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.espuma }, descripcion: 'La niebla le ahoga.' }),
  ],
  ambar: [
    T({ id: 'gota-eterna', nombre: 'Gota Eterna', poder: 75, precision: 0.9, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 1, color: C.oro, tam: 5 }, descripcion: 'Una gota de resina dura como piedra.' }),
    T({ id: 'prision-miel', nombre: 'Prisión de Miel', poder: 30, precision: 0.9, energia: 25, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.oro }, efectos: { cegar: 0.3 }, descripcion: 'Le deja pegado.' }),
    T({ id: 'coraza-dorada', nombre: 'Coraza Dorada', poder: 0, precision: 1, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'burbuja', color: C.oro }, efectos: { bloqueo: 0.75, prioridad: true }, descripcion: 'Una coraza de resina.' }),
  ],
};

/** Todas las técnicas, para la galería. */
export function todasLasTecnicas(): { grupo: string; t: Tecnica }[] {
  return [
    ...TECNICAS_TIPO.punos.map((t) => ({ grupo: 'Puños', t })),
    ...TECNICAS_TIPO.espada.map((t) => ({ grupo: 'Espada', t })),
    ...TECNICAS_TIPO.pistola.map((t) => ({ grupo: 'Pistola', t })),
    ...Object.values(TECNICAS_ARMA).map((t) => ({ grupo: 'Especial de arma', t })),
    ...Object.values(TECNICAS_HABILIDAD).map((t) => ({ grupo: 'Habilidad', t })),
    ...Object.entries(TECNICAS_FRUTA).flatMap(([f, ts]) => ts.map((t) => ({ grupo: `Fruta ${f}`, t }))),
  ];
}

/** Una habilidad mejora con su nivel (1 a 5). */
export function escalarHabilidad(t: Tecnica, nivel: number): Tecnica {
  const n = nivel - 1;
  if (n <= 0) return t;
  const e = { ...t.efectos };
  if (e.bloqueo) e.bloqueo = Math.min(0.95, e.bloqueo + n * (t.id === 'guardia-escudo' ? 0.04 : 0.05));
  if (e.devuelve && t.id === 'contraataque') e.devuelve += n * 0.1;
  if (e.esquiva) e.esquiva = Math.min(0.95, e.esquiva + n * 0.06);
  if (e.cura) e.cura += n * (t.id === 'vendaje' ? 0.04 : 0.03);
  if (e.cegar) e.cegar += n * 0.05;
  if (e.mejora) e.mejora = { ...e.mejora, cantidad: e.mejora.cantidad + n * 0.05 };
  const poder = t.poder ? t.poder + n * ({ 'golpe-bajo': 8, carga: 10, desenfundar: 6 } as Record<string, number>)[t.id] : 0;
  return { ...t, poder: poder || t.poder, efectos: e };
}
