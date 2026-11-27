// Frutas del poder. En la fase 1 hay 10 de prueba; en la fase 4 llegarán a 35+.

export type CategoriaFruta = 'tallada' | 'salvaje' | 'primordial';
export type Rareza = 'comun' | 'rara' | 'epica' | 'legendaria';

export const CATEGORIAS: Record<CategoriaFruta, { nombre: string; descripcion: string }> = {
  tallada: { nombre: 'Talladas', descripcion: 'Moldean el cuerpo: lo estiran, lo endurecen o le dan propiedades nuevas.' },
  salvaje: { nombre: 'Salvajes', descripcion: 'Despiertan una bestia: transforman en un animal, entero o a medias.' },
  primordial: { nombre: 'Primordiales', descripcion: 'Disuelven el cuerpo en un elemento de la naturaleza.' },
};

export const RAREZAS: Record<Rareza, { nombre: string; color: string }> = {
  comun: { nombre: 'Común', color: '#a9a7b8' },
  rara: { nombre: 'Rara', color: '#5cc3d8' },
  epica: { nombre: 'Épica', color: '#b89ae0' },
  legendaria: { nombre: 'Legendaria', color: '#f2b63d' },
};

/** Debilidad común a todos los portadores (propuesta, se puede cambiar). */
export const DEBILIDAD_COMUN = {
  nombre: 'La Noche Hueca',
  descripcion:
    'En cada luna nueva del juego, todos los portadores de frutas pierden su poder durante una noche entera y quedan agotados. ' +
    'Además, la fruta rechaza el agua dulce: no pueden nadar en ríos ni lagos sin hundirse.',
};

export interface Fruta {
  id: string;
  nombre: string;
  categoria: CategoriaFruta;
  rareza: Rareza;
  poder: string;
  tecnicas: string[];
  debilidad: string;
}

export const FRUTAS: Fruta[] = [
  {
    id: 'muelle', nombre: 'Fruta Muelle', categoria: 'tallada', rareza: 'rara',
    poder: 'El cuerpo se vuelve un resorte: se comprime y sale disparado.',
    tecnicas: ['Salto de Ballesta', 'Puño Retráctil', 'Rebote Loco'],
    debilidad: 'El frío intenso lo deja rígido y sin rebote.',
  },
  {
    id: 'espejo', nombre: 'Fruta Espejo', categoria: 'tallada', rareza: 'epica',
    poder: 'Crea superficies de espejo que devuelven golpes y luz.',
    tecnicas: ['Muro de Azogue', 'Reflejo Devuelto', 'Laberinto de Plata'],
    debilidad: 'Si rompen su espejo principal, el portador se agrieta también.',
  },
  {
    id: 'eco', nombre: 'Fruta Eco', categoria: 'tallada', rareza: 'rara',
    poder: 'Guarda sonidos dentro del cuerpo y los suelta multiplicados.',
    tecnicas: ['Grito Guardado', 'Tambor de Pecho', 'Oído de Murciélago'],
    debilidad: 'En silencio total (niebla espesa, nieve) se queda sin munición.',
  },
  {
    id: 'raiz', nombre: 'Fruta Raíz', categoria: 'tallada', rareza: 'comun',
    poder: 'Le brotan raíces del cuerpo que agarran, trepan y anclan.',
    tecnicas: ['Lazo de Raíz', 'Ancla Viva', 'Bosque en Puño'],
    debilidad: 'El fuego y la sequía marchitan sus raíces.',
  },
  {
    id: 'jaguar', nombre: 'Fruta Fiera modelo Jaguar', categoria: 'salvaje', rareza: 'rara',
    poder: 'Se transforma en jaguar o en un híbrido mitad hombre, mitad felino.',
    tecnicas: ['Zarpazo Moteado', 'Acecho Nocturno', 'Salto de Rama'],
    debilidad: 'Mojado pierde casi toda su velocidad.',
  },
  {
    id: 'pulpo', nombre: 'Fruta Fiera modelo Pulpo', categoria: 'salvaje', rareza: 'epica',
    poder: 'Ocho brazos con ventosas, piel que cambia de color y tinta.',
    tecnicas: ['Tinta Ciega', 'Ocho Nudos', 'Ventosa de Hierro'],
    debilidad: 'Se reseca enseguida en zonas de desierto o volcán.',
  },
  {
    id: 'halcon', nombre: 'Fruta Fiera modelo Halcón', categoria: 'salvaje', rareza: 'rara',
    poder: 'Alas, vista de largo alcance y picados a gran velocidad.',
    tecnicas: ['Picado de Halcón', 'Ojo de Altura', 'Garra Cortavientos'],
    debilidad: 'El viento de tormenta lo tira al suelo.',
  },
  {
    id: 'ceniza', nombre: 'Fruta Ceniza', categoria: 'primordial', rareza: 'legendaria',
    poder: 'El cuerpo se convierte en ceniza ardiente que quema y ciega.',
    tecnicas: ['Nube Ardiente', 'Lluvia Gris', 'Brasa Dormida'],
    debilidad: 'El agua la vuelve barro pesado y lento.',
  },
  {
    id: 'niebla', nombre: 'Fruta Niebla', categoria: 'primordial', rareza: 'epica',
    poder: 'Se disuelve en niebla: atraviesa golpes y esconde barcos enteros.',
    tecnicas: ['Velo Blanco', 'Paso de Bruma', 'Abrazo Húmedo'],
    debilidad: 'El viento fuerte la dispersa y le cuesta volver a juntarse.',
  },
  {
    id: 'ambar', nombre: 'Fruta Ámbar', categoria: 'primordial', rareza: 'legendaria',
    poder: 'Resina dorada que se endurece y atrapa todo lo que toca.',
    tecnicas: ['Gota Eterna', 'Prisión de Miel', 'Coraza Dorada'],
    debilidad: 'El calor la ablanda y la vuelve pegajosa para él mismo.',
  },
];
