// La tienda: provisiones, barcos y sastre. Todo se paga con doblones.
import type { PersonajeGuardado } from '../cuenta';

export type IdProvision = 'grog' | 'botiquin';
export const PROVISIONES: { id: IdProvision; nombre: string; precio: number; max: number; texto: string }[] = [
  { id: 'grog', nombre: 'Grog', precio: 60, max: 10, texto: 'Un trago fuerte. En combate cura un 25% de la vida.' },
  { id: 'botiquin', nombre: 'Botiquín', precio: 250, max: 5, texto: 'Vendas y ungüento. En combate cura un 50% de la vida.' },
];

/** Bolsa del personaje. Los personajes de antes empiezan con 3 tragos de grog. */
export const bolsaDe = (p: PersonajeGuardado) => p.bolsa ?? { grog: 3, botiquin: 0 };

export type IdBarco = 'barca' | 'carabela' | 'galeon';
export const BARCOS: { id: IdBarco; nombre: string; precio: number; nivel: number; texto: string }[] = [
  { id: 'barca', nombre: 'Barca de remos', precio: 0, nivel: 1, texto: 'Con la que empieza todo el mundo. Lenta pero tuya.' },
  { id: 'carabela', nombre: 'Carabela', precio: 4000, nivel: 8, texto: 'Velas latinas y casco ligero. Viajes un 30% más rápidos.' },
  { id: 'galeon', nombre: 'Galeón', precio: 30000, nivel: 20, texto: 'Tres palos y bodega enorme. Viajes un 50% más rápidos.' },
];
/** Multiplica la duración de los viajes. */
export const VELOCIDAD_BARCO: Record<IdBarco, number> = { barca: 1, carabela: 0.7, galeon: 0.5 };

/** Cambiar de aspecto en el sastre. */
export const PRECIO_SASTRE = 300;
