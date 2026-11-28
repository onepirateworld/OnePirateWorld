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
  // --- Talladas nuevas
  brujula: [
    T({ id: 'aguja-norte', nombre: 'Aguja Norte', poder: 70, precision: 1, energia: 15, dano: 'fruta', anim: { forma: 'estocada', veces: 1, color: C.rojo }, descripcion: 'Una punta que nunca falla el rumbo.' }),
    T({ id: 'rosa-vientos', nombre: 'Rosa de los Vientos', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.hueso }, efectos: { esquiva: 0.6, prioridad: true }, descripcion: 'Desvía el golpe hacia otro lado.' }),
    T({ id: 'rumbo-fijo', nombre: 'Rumbo Fijo', poder: 0, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.rojo }, efectos: { mejora: { stat: 'velocidad', cantidad: 0.35 } }, descripcion: 'Sabe exactamente dónde ir.' }),
  ],
  vela: [
    T({ id: 'velamen-hinchado', nombre: 'Velamen Hinchado', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'burbuja', color: C.pergamino }, efectos: { bloqueo: 0.55, prioridad: true }, descripcion: 'Se infla y amortigua el golpe.' }),
    T({ id: 'planeo-gaviota', nombre: 'Planeo de Gaviota', poder: 75, precision: 0.9, energia: 20, dano: 'fruta', mov: 'salto', anim: { forma: 'salto', color: C.pergamino }, descripcion: 'Planea y cae encima.' }),
    T({ id: 'golpe-botavara', nombre: 'Golpe de Botavara', poder: 60, precision: 0.95, energia: 10, dano: 'fruta', anim: { forma: 'arco', color: C.madera }, descripcion: 'Un barrido de lona tensa.' }),
  ],
  coral: [
    T({ id: 'arrecife-subito', nombre: 'Arrecife Súbito', poder: 75, precision: 0.9, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.coral }, descripcion: 'Brotan púas de coral del suelo.' }),
    T({ id: 'coraza-coral', nombre: 'Coraza de Coral', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'raices', color: C.coral }, efectos: { bloqueo: 0.6, devuelve: 0.15, prioridad: true }, descripcion: 'Armadura que pincha.' }),
    T({ id: 'lanza-madrepora', nombre: 'Lanza de Madrépora', poder: 85, precision: 0.85, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 1, color: C.coral, tam: 3 }, descripcion: 'Lanza una rama de coral afilada.' }),
  ],
  nudo: [
    T({ id: 'nudo-marinero', nombre: 'Nudo Marinero', poder: 55, precision: 0.95, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.madera }, efectos: { cegar: 0.2 }, descripcion: 'Ata al rival de pies a cabeza.' }),
    T({ id: 'as-guia', nombre: 'As de Guía', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.maderaClara }, efectos: { mejora: { stat: 'resistencia', cantidad: 0.4 } }, descripcion: 'El nudo que nunca se suelta.' }),
    T({ id: 'lazo-corredizo', nombre: 'Lazo Corredizo', poder: 90, precision: 0.85, energia: 25, dano: 'fruta', anim: { forma: 'giro', color: C.maderaClara }, efectos: { ignoraDefensa: 0.3 }, descripcion: 'Aprieta hasta que no queda aire.' }),
  ],
  lija: [
    T({ id: 'raspado', nombre: 'Raspado', poder: 55, precision: 1, energia: 10, dano: 'fruta', anim: { forma: 'garras', color: C.arena }, descripcion: 'Una pasada que arranca la piel.' }),
    T({ id: 'pulido-total', nombre: 'Pulido Total', poder: 15, precision: 0.9, energia: 20, golpes: 4, dano: 'fruta', anim: { forma: 'giro', color: C.arena }, efectos: { ignoraDefensa: 0.4 }, descripcion: 'Desgasta hasta la armadura.' }),
    T({ id: 'roce-escofina', nombre: 'Roce de Escofina', poder: 75, precision: 0.9, energia: 15, dano: 'fruta', anim: { forma: 'corte', lineas: 2, color: C.arena }, efectos: { retroceso: 0.1 }, descripcion: 'Rasca fuerte... y le escuece a él también.' }),
  ],
  esponja: [
    T({ id: 'chupar', nombre: 'Chupar', poder: 0, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'cura', color: C.limon }, efectos: { cura: 0.18, energia: 15 }, descripcion: 'Absorbe y se recompone.' }),
    T({ id: 'escurrido', nombre: 'Escurrido', poder: 70, precision: 0.9, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'lluvia', color: C.bajio }, descripcion: 'Suelta de golpe todo lo absorbido.' }),
    T({ id: 'cuerpo-blando', nombre: 'Cuerpo Blando', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'burbuja', color: C.limon }, efectos: { bloqueo: 0.7, prioridad: true }, descripcion: 'Los golpes se hunden sin hacer daño.' }),
  ],
  pendulo: [
    T({ id: 'vaiven', nombre: 'Vaivén', poder: 20, precision: 0.95, energia: 20, golpes: 3, dano: 'fruta', anim: { forma: 'arco', color: C.oro }, descripcion: 'Ida, vuelta y otra vez.' }),
    T({ id: 'compas-hipnotico', nombre: 'Compás Hipnótico', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'onda', color: C.lila, haciaRival: true }, efectos: { cegar: 0.35 }, descripcion: 'El rival no puede dejar de mirar.' }),
    T({ id: 'golpe-contrapeso', nombre: 'Golpe de Contrapeso', poder: 95, precision: 0.8, energia: 25, dano: 'fruta', anim: { forma: 'impacto', color: C.oro, tam: 3 }, descripcion: 'Todo el impulso en un solo golpe.' }),
  ],
  escama: [
    T({ id: 'lluvia-escamas', nombre: 'Lluvia de Escamas', poder: 18, precision: 0.9, energia: 20, golpes: 4, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 4, color: C.bajio, tam: 2, abanico: true }, descripcion: 'Escamas afiladas en abanico.' }),
    T({ id: 'piel-pez', nombre: 'Piel de Pez', poder: 0, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.bajio }, efectos: { esquiva: 0.5, prioridad: true }, descripcion: 'Resbaladizo como un pez.' }),
    T({ id: 'escudo-imbricado', nombre: 'Escudo Imbricado', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'escudo', color: C.bajio }, efectos: { bloqueo: 0.65, prioridad: true }, descripcion: 'Escamas superpuestas como tejas.' }),
  ],
  anzuelo: [
    T({ id: 'lance', nombre: 'Lance', poder: 65, precision: 0.95, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'estocada', veces: 1, color: C.niebla }, efectos: { prioridad: true }, descripcion: 'Lanza el anzuelo antes que nadie.' }),
    T({ id: 'recogida', nombre: 'Recogida', poder: 80, precision: 0.85, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.niebla }, descripcion: 'Engancha y tira hacia sí.' }),
    T({ id: 'cebo-falso', nombre: 'Cebo Falso', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'nube', color: C.oro }, efectos: { cegar: 0.25 }, descripcion: 'Distrae con un brillo tentador.' }),
  ],
  // --- Salvajes nuevas
  tiburon: [
    T({ id: 'mordida-martillo', nombre: 'Mordida Martillo', poder: 95, precision: 0.85, energia: 20, dano: 'fruta', anim: { forma: 'impacto', color: C.piedra, tam: 3 }, descripcion: 'Una mordida que parte maderos.' }),
    T({ id: 'olfato-sangre', nombre: 'Olfato de Sangre', poder: 0, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.granate }, efectos: { mejora: { stat: 'fuerza', cantidad: 0.4 } }, descripcion: 'Huele la herida y se enfurece.' }),
    T({ id: 'embestida-aleta', nombre: 'Embestida de Aleta', poder: 75, precision: 0.9, energia: 15, dano: 'fruta', anim: { forma: 'arco', color: C.piedra }, descripcion: 'Corta como una aleta dorsal.' }),
  ],
  manta: [
    T({ id: 'vuelo-rasante', nombre: 'Vuelo Rasante', poder: 80, precision: 0.9, energia: 20, dano: 'fruta', mov: 'salto', anim: { forma: 'salto', color: C.marHondo }, descripcion: 'Planea a ras del suelo y golpea.' }),
    T({ id: 'coletazo', nombre: 'Coletazo', poder: 55, precision: 0.95, energia: 15, dano: 'fruta', anim: { forma: 'rayo', color: C.limon }, efectos: { cegar: 0.15 }, descripcion: 'La cola suelta una descarga.' }),
    T({ id: 'sombra-plana', nombre: 'Sombra Plana', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.marHondo }, efectos: { esquiva: 0.65, prioridad: true }, descripcion: 'Se aplana y pasa por debajo del golpe.' }),
  ],
  tortuga: [
    T({ id: 'caparazon', nombre: 'Caparazón', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'escudo', color: C.selva }, efectos: { bloqueo: 0.8, prioridad: true }, descripcion: 'Se mete dentro y aguanta lo que sea.' }),
    T({ id: 'mordida-lenta', nombre: 'Mordida Lenta', poder: 70, precision: 0.95, energia: 10, dano: 'fruta', anim: { forma: 'impacto', color: C.selva, tam: 2 }, descripcion: 'Lenta, pero no suelta.' }),
    T({ id: 'bola-rodante', nombre: 'Bola Rodante', poder: 85, precision: 0.8, energia: 20, dano: 'fruta', anim: { forma: 'giro', color: C.selva }, descripcion: 'Rueda dentro del caparazón.' }),
  ],
  rinoceronte: [
    T({ id: 'embestida-cornuda', nombre: 'Embestida Cornuda', poder: 95, precision: 0.8, energia: 25, dano: 'fruta', anim: { forma: 'estocada', veces: 1, color: C.piedra }, efectos: { ignoraDefensa: 0.2 }, descripcion: 'El cuerno por delante, sin frenar.' }),
    T({ id: 'piel-coraza', nombre: 'Piel de Coraza', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.piedra }, efectos: { mejora: { stat: 'resistencia', cantidad: 0.45 } }, descripcion: 'La piel se vuelve placas.' }),
    T({ id: 'estampida', nombre: 'Estampida', poder: 25, precision: 0.85, energia: 25, golpes: 3, dano: 'fruta', anim: { forma: 'impacto', color: C.madera, tam: 2 }, descripcion: 'Pisotones que hacen temblar el suelo.' }),
  ],
  escorpion: [
    T({ id: 'aguijon', nombre: 'Aguijón', poder: 70, precision: 0.9, energia: 15, dano: 'fruta', anim: { forma: 'estocada', veces: 1, color: C.magenta }, efectos: { cegar: 0.25 }, descripcion: 'Un picotazo que adormece.' }),
    T({ id: 'pinza-cepo', nombre: 'Pinza Cepo', poder: 85, precision: 0.85, energia: 20, dano: 'fruta', anim: { forma: 'garras', color: C.oro }, efectos: { ignoraDefensa: 0.2 }, descripcion: 'Aprieta y no suelta.' }),
    T({ id: 'danza-desierto', nombre: 'Danza del Desierto', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.arena }, efectos: { esquiva: 0.55, mejora: { stat: 'velocidad', cantidad: 0.2 } }, descripcion: 'Se mueve en círculos, esperando.' }),
  ],
  cangrejo: [
    T({ id: 'tijereta', nombre: 'Tijereta', poder: 60, precision: 0.95, energia: 10, dano: 'fruta', anim: { forma: 'corte', lineas: 2, color: C.rojo }, descripcion: 'Dos pinzas que cortan a la vez.' }),
    T({ id: 'paso-lado', nombre: 'Paso de Lado', poder: 0, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.rojo }, efectos: { esquiva: 0.6, prioridad: true }, descripcion: 'Nadie espera que se mueva de lado.' }),
    T({ id: 'concha-cerrada', nombre: 'Concha Cerrada', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'escudo', color: C.rojo }, efectos: { bloqueo: 0.65, devuelve: 0.1, prioridad: true }, descripcion: 'Se cierra y pincha al que golpea.' }),
  ],
  camaleon: [
    T({ id: 'lengua-latigo', nombre: 'Lengua Látigo', poder: 75, precision: 0.95, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'estocada', veces: 1, color: C.coral }, efectos: { prioridad: true }, descripcion: 'Más rápida que la vista.' }),
    T({ id: 'piel-paisaje', nombre: 'Piel del Paisaje', poder: 0, precision: 1, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'nube', color: C.hoja, sobreMi: true }, efectos: { esquiva: 0.75, prioridad: true }, descripcion: 'Desaparece contra el fondo.' }),
    T({ id: 'ojos-giratorios', nombre: 'Ojos Giratorios', poder: 0, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.brote }, efectos: { mejora: { stat: 'velocidad', cantidad: 0.35 } }, descripcion: 'Lo ve todo a la vez.' }),
  ],
  puercoespin: [
    T({ id: 'erizarse', nombre: 'Erizarse', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'espada', color: C.corteza }, efectos: { bloqueo: 0.4, devuelve: 0.4, prioridad: true }, descripcion: 'Quien le pega, se pincha.' }),
    T({ id: 'rafaga-puas', nombre: 'Ráfaga de Púas', poder: 16, precision: 0.9, energia: 20, golpes: 5, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 5, color: C.corteza, tam: 2, abanico: true }, descripcion: 'Dispara púas en todas direcciones.' }),
    T({ id: 'bola-pinchos', nombre: 'Bola de Pinchos', poder: 80, precision: 0.85, energia: 20, dano: 'fruta', anim: { forma: 'giro', color: C.corteza }, descripcion: 'Se enrolla y rueda encima.' }),
  ],
  gorila: [
    T({ id: 'golpe-pecho', nombre: 'Golpe de Pecho', poder: 0, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'onda', color: C.tinta, haciaRival: false }, efectos: { mejora: { stat: 'fuerza', cantidad: 0.45 } }, descripcion: 'Retumba y asusta a todos.' }),
    T({ id: 'puno-selva', nombre: 'Puño de Selva', poder: 90, precision: 0.85, energia: 20, dano: 'fruta', anim: { forma: 'impacto', color: C.tinta, tam: 3 }, descripcion: 'Un puñetazo descomunal.' }),
    T({ id: 'lanzamiento-barril', nombre: 'Lanzamiento de Barril', poder: 75, precision: 0.85, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 1, color: C.madera, tam: 5 }, descripcion: 'Agarra un barril y lo lanza.' }),
  ],
  // --- Primordiales nuevas
  marea: [
    T({ id: 'pleamar', nombre: 'Pleamar', poder: 95, precision: 0.85, energia: 25, dano: 'fruta', mov: 'quieto', anim: { forma: 'onda', color: C.mar, haciaRival: true }, descripcion: 'El agua sube y lo arrastra todo.' }),
    T({ id: 'resaca', nombre: 'Resaca', poder: 60, precision: 0.95, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.bajio }, efectos: { cegar: 0.2 }, descripcion: 'Una corriente que tira hacia abajo.' }),
    T({ id: 'ola-gigante', nombre: 'Ola Gigante', poder: 30, precision: 0.9, energia: 30, golpes: 4, dano: 'fruta', mov: 'quieto', anim: { forma: 'lluvia', color: C.mar }, efectos: { unaVez: true }, descripcion: 'Una vez por combate: un muro de agua.' }),
  ],
  viento: [
    T({ id: 'rafaga-cortante', nombre: 'Ráfaga Cortante', poder: 22, precision: 0.95, energia: 20, golpes: 4, dano: 'fruta', mov: 'quieto', anim: { forma: 'corte', lineas: 3, color: C.espuma }, descripcion: 'Cuchillas de aire invisibles.' }),
    T({ id: 'calma-chicha', nombre: 'Calma Chicha', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'aura', color: C.espuma }, efectos: { esquiva: 0.8, prioridad: true }, descripcion: 'Se vuelve aire quieto: nada lo toca.' }),
    T({ id: 'tornado-cubierta', nombre: 'Tornado de Cubierta', poder: 100, precision: 0.8, energia: 30, dano: 'fruta', mov: 'quieto', anim: { forma: 'giro', color: C.espuma }, descripcion: 'Un remolino que levanta al rival.' }),
  ],
  mercurio: [
    T({ id: 'gota-plata', nombre: 'Gota de Plata', poder: 85, precision: 0.95, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 3, color: C.niebla, tam: 3 }, descripcion: 'Gotas de metal que se endurecen al volar.' }),
    T({ id: 'hoja-liquida', nombre: 'Hoja Líquida', poder: 95, precision: 0.85, energia: 25, dano: 'fruta', anim: { forma: 'corte', lineas: 1, color: C.hueso }, efectos: { ignoraDefensa: 0.35 }, descripcion: 'El brazo se vuelve una cuchilla fluida.' }),
    T({ id: 'espejo-fundido', nombre: 'Espejo Fundido', poder: 0, precision: 1, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'burbuja', color: C.niebla }, efectos: { bloqueo: 0.75, devuelve: 0.2, prioridad: true }, descripcion: 'Se escurre y el golpe resbala.' }),
  ],
  oxido: [
    T({ id: 'herrumbre', nombre: 'Herrumbre', poder: 70, precision: 0.9, energia: 15, dano: 'fruta', anim: { forma: 'impacto', color: C.naranja, tam: 2 }, efectos: { ignoraDefensa: 0.5 }, descripcion: 'Corroe la armadura y la atraviesa.' }),
    T({ id: 'nube-rojiza', nombre: 'Nube Rojiza', poder: 20, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'nube', color: C.granate }, efectos: { cegar: 0.3 }, descripcion: 'Polvo de óxido en los ojos.' }),
    T({ id: 'corrosion', nombre: 'Corrosión', poder: 20, precision: 0.9, energia: 25, golpes: 4, dano: 'fruta', mov: 'quieto', anim: { forma: 'lluvia', color: C.naranja }, efectos: { ignoraDefensa: 0.3 }, descripcion: 'Lo oxida poco a poco.' }),
  ],
  arcilla: [
    T({ id: 'moldeado', nombre: 'Moldeado', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'escudo', color: C.madera }, efectos: { bloqueo: 0.7, prioridad: true }, descripcion: 'Se vuelve blando y absorbe el golpe.' }),
    T({ id: 'ladrillo-volador', nombre: 'Ladrillo Volador', poder: 70, precision: 0.95, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 2, color: C.madera, tam: 4 }, descripcion: 'Endurece barro y lo lanza.' }),
    T({ id: 'golem-barro', nombre: 'Gólem de Barro', poder: 95, precision: 0.8, energia: 25, dano: 'fruta', anim: { forma: 'impacto', color: C.corteza, tam: 3 }, descripcion: 'Un puño enorme de arcilla.' }),
  ],
  musgo: [
    T({ id: 'alfombra-verde', nombre: 'Alfombra Verde', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'raices', color: C.hoja }, efectos: { bloqueo: 0.55, prioridad: true }, descripcion: 'Un colchón de musgo que amortigua.' }),
    T({ id: 'musgo-curativo', nombre: 'Musgo Curativo', poder: 0, precision: 1, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'cura', color: C.hoja }, efectos: { cura: 0.25 }, descripcion: 'Cubre las heridas y las cierra.' }),
    T({ id: 'enredadera-humeda', nombre: 'Enredadera Húmeda', poder: 65, precision: 0.9, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'enredo', color: C.selva }, efectos: { cegar: 0.15 }, descripcion: 'Crece sobre el rival y lo atrapa.' }),
  ],
  polen: [
    T({ id: 'estornudo', nombre: 'Estornudo', poder: 30, precision: 1, energia: 10, dano: 'fruta', mov: 'quieto', anim: { forma: 'nube', color: C.limon }, efectos: { cegar: 0.3 }, descripcion: 'El rival no para de estornudar.' }),
    T({ id: 'nube-dorada', nombre: 'Nube Dorada', poder: 80, precision: 0.9, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'nube', color: C.oro }, descripcion: 'Polen tan denso que pesa.' }),
    T({ id: 'siesta-primavera', nombre: 'Siesta de Primavera', poder: 0, precision: 1, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'onda', color: C.limon, haciaRival: true }, efectos: { cegar: 0.45, unaVez: true }, descripcion: 'Una vez por combate: adormece al rival.' }),
  ],
  sal: [
    T({ id: 'salazon', nombre: 'Salazón', poder: 75, precision: 0.9, energia: 20, dano: 'fruta', mov: 'quieto', anim: { forma: 'lluvia', color: C.hueso }, efectos: { ignoraDefensa: 0.2 }, descripcion: 'Seca y escuece en cada herida.' }),
    T({ id: 'muro-blanco', nombre: 'Muro Blanco', poder: 0, precision: 1, energia: 15, dano: 'fruta', mov: 'quieto', anim: { forma: 'escudo', tipo: 'escudo', color: C.hueso }, efectos: { bloqueo: 0.65, prioridad: true }, descripcion: 'Un muro de cristales de sal.' }),
    T({ id: 'lluvia-salada', nombre: 'Lluvia Salada', poder: 18, precision: 0.95, energia: 20, golpes: 4, dano: 'fruta', mov: 'quieto', anim: { forma: 'proyectil', n: 4, color: C.hueso, tam: 2, abanico: true }, descripcion: 'Cristales que vuelan como perdigones.' }),
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
