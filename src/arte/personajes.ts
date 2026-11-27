import { Lienzo } from './lienzo';
import { C } from './paleta';

// Sprite de personaje 32x32, vista frontal "chibi".
// Todo es paramétrico para que la creación de personaje (fase 5) use lo mismo.

export type Piel = 'clara' | 'media' | 'oscura';
export type Pelo = 'corto' | 'largo' | 'erizo' | 'rapado' | 'coleta';
export type Ropa = 'chaleco' | 'abrigoMarina' | 'tunica';
export type Sombrero = 'ninguno' | 'tricornio' | 'gorraMarina' | 'capucha';
export type Accesorio = 'ninguno' | 'parche' | 'panuelo' | 'pendiente';

export interface AspectoPersonaje {
  piel: Piel;
  pelo: Pelo;
  colorPelo: number;
  ropa: Ropa;
  colorRopa: number;
  colorPantalon: number;
  colorBotas: number;
  sombrero: Sombrero;
  colorSombrero: number;
  accesorio: Accesorio;
  cicatriz: boolean;
}

const PIEL: Record<Piel, [number, number]> = {
  clara: [C.pielClara, C.pielMedia],
  media: [C.pielMedia, C.pielOscura],
  oscura: [C.pielOscura, C.corteza],
};

export function dibujarPersonaje(a: AspectoPersonaje): Lienzo {
  const L = new Lienzo(32, 32);
  const [piel, pielS] = PIEL[a.piel];

  // --- Piernas y botas
  L.rect(12, 24, 8, 4, a.colorPantalon);
  L.rect(15, 26, 2, 2, C.T);
  L.rect(11, 28, 4, 3, a.colorBotas);
  L.rect(17, 28, 4, 3, a.colorBotas);

  // --- Torso y brazos según la ropa
  if (a.ropa === 'chaleco') {
    L.rect(11, 17, 10, 7, C.hueso);           // camisa
    L.rect(11, 17, 3, 7, a.colorRopa);       // chaleco abierto
    L.rect(18, 17, 3, 7, a.colorRopa);
    L.rect(14, 17, 4, 1, piel);              // escote
    L.px(15, 18, piel); L.px(16, 18, piel);
    L.rect(11, 23, 10, 1, C.rojo);           // faja
    L.px(19, 24, C.rojo); L.px(19, 25, C.granate);
    L.rect(9, 18, 2, 5, C.hueso);            // mangas
    L.rect(21, 18, 2, 5, C.hueso);
  } else if (a.ropa === 'abrigoMarina') {
    L.rect(11, 17, 10, 8, a.colorRopa);      // abrigo
    L.rect(14, 17, 4, 2, C.hueso);           // cuello blanco
    L.px(15, 19, C.hueso); L.px(16, 19, C.hueso);
    L.px(16, 20, C.oro); L.px(16, 22, C.oro); // botones
    L.rect(11, 23, 10, 1, C.hueso);          // cinturón blanco
    L.rect(9, 18, 2, 5, a.colorRopa);
    L.rect(21, 18, 2, 5, a.colorRopa);
    L.px(9, 22, C.oro); L.px(22, 22, C.oro); // puños dorados
  } else {
    L.rect(11, 17, 10, 8, a.colorRopa);      // túnica
    L.linea(13, 17, 16, 21, C.selva);        // cruce
    L.rect(11, 22, 10, 1, C.corteza);        // cinturón
    L.px(13, 22, C.oro);
    L.rect(9, 18, 2, 5, a.colorRopa);
    L.rect(21, 18, 2, 5, a.colorRopa);
  }
  // Manos
  L.rect(9, 23, 2, 2, piel);
  L.rect(21, 23, 2, 2, piel);

  // --- Cuello y cabeza
  L.rect(14, 16, 4, 1, pielS);
  L.rect(10, 6, 12, 10, piel);
  L.px(10, 6, C.T); L.px(21, 6, C.T); L.px(10, 15, C.T); L.px(21, 15, C.T);
  L.px(9, 11, piel); L.px(9, 12, piel); L.px(22, 11, piel); L.px(22, 12, piel);
  L.rect(21, 8, 1, 7, pielS); // lado en sombra
  L.px(22, 12, pielS);

  // Cara
  L.rect(13, 11, 2, 2, C.tinta); L.px(13, 11, C.hueso);
  L.rect(17, 11, 2, 2, C.tinta); L.px(17, 11, C.hueso);
  L.px(15, 14, pielS); L.px(16, 14, pielS);
  L.px(12, 13, C.coral); L.px(19, 13, C.coral);

  // --- Pelo
  const pc = a.colorPelo;
  if (a.pelo !== 'rapado') {
    L.rect(10, 5, 12, 3, pc);
    L.rect(11, 4, 10, 1, pc);
    L.px(10, 8, pc); L.px(21, 8, pc); L.px(21, 9, pc);
    L.px(12, 8, pc); L.px(15, 8, pc); L.px(16, 8, pc); L.px(19, 8, pc);
  } else {
    L.rect(11, 5, 10, 1, pc);
  }
  if (a.pelo === 'largo') {
    L.rect(9, 7, 2, 11, pc); L.rect(21, 7, 2, 11, pc);
    L.px(10, 18, C.T);
  } else if (a.pelo === 'erizo') {
    for (const x of [10, 13, 16, 19]) { L.px(x, 3, pc); L.px(x + 1, 2, pc); L.px(x + 1, 3, pc); }
  } else if (a.pelo === 'coleta') {
    L.rect(22, 6, 2, 2, pc); L.rect(23, 8, 2, 4, pc); L.px(24, 12, pc);
  }

  // --- Sombreros
  const sc = a.colorSombrero;
  if (a.sombrero === 'tricornio') {
    L.rect(11, 1, 10, 4, sc);
    L.rect(6, 5, 20, 2, sc);
    L.px(6, 4, sc); L.px(7, 4, sc); L.px(25, 4, sc); L.px(24, 4, sc);
    L.rect(11, 4, 10, 1, C.oro);              // cinta dorada
    L.rect(15, 2, 2, 2, C.oro);               // insignia (moneda)
    L.px(15, 2, C.limon);
  } else if (a.sombrero === 'gorraMarina') {
    L.rect(10, 2, 12, 4, C.hueso);
    L.rect(9, 3, 1, 2, C.hueso); L.rect(22, 3, 1, 2, C.hueso);
    L.rect(10, 5, 12, 1, sc);                 // banda
    L.rect(11, 6, 10, 1, C.tinta);            // visera
    L.rect(15, 3, 2, 2, C.oro);               // ancla dorada
  } else if (a.sombrero === 'capucha') {
    L.rect(10, 3, 12, 3, sc);
    L.rect(9, 5, 14, 2, sc);
    L.rect(9, 7, 2, 10, sc); L.rect(21, 7, 2, 10, sc);
    L.rect(11, 16, 10, 1, sc);
    L.px(9, 17, sc); L.px(22, 17, sc);
  }

  // --- Accesorios
  if (a.accesorio === 'parche') {
    L.linea(10, 10, 21, 8, C.tinta);
    L.rect(12, 10, 4, 3, C.tinta);
    L.px(13, 13, C.tinta); L.px(14, 13, C.tinta);
  } else if (a.accesorio === 'panuelo') {
    L.rect(11, 14, 10, 2, C.rojo);
    L.px(12, 14, C.granate); L.px(19, 15, C.granate);
  } else if (a.accesorio === 'pendiente') {
    L.px(22, 13, C.oro);
  }
  if (a.cicatriz) {
    L.px(18, 9, C.granate); L.px(19, 10, C.granate); L.px(18, 13, C.granate); L.px(19, 14, C.granate);
  }

  L.volumen({ luz: false, excluir: [C.tinta, piel, pielS, C.hueso] });
  L.contorno(C.tinta);
  return L;
}

/** Los tres personajes de prueba (uno por bando). */
export const PERSONAJES_PRUEBA: { id: string; nombre: string; descripcion: string; aspecto: AspectoPersonaje }[] = [
  {
    id: 'pirata',
    nombre: 'Pirata',
    descripcion: 'Tricornio, chaleco abierto y faja roja. Parche en el ojo.',
    aspecto: {
      piel: 'media', pelo: 'largo', colorPelo: C.tinta, ropa: 'chaleco', colorRopa: C.granate,
      colorPantalon: C.madera, colorBotas: C.corteza, sombrero: 'tricornio', colorSombrero: C.noche,
      accesorio: 'parche', cicatriz: false,
    },
  },
  {
    id: 'marine',
    nombre: 'Marine',
    descripcion: 'Gorra blanca con ancla, abrigo azul con botones dorados.',
    aspecto: {
      piel: 'clara', pelo: 'corto', colorPelo: C.oro, ropa: 'abrigoMarina', colorRopa: C.azulMarina,
      colorPantalon: C.hueso, colorBotas: C.tinta, sombrero: 'gorraMarina', colorSombrero: C.azulMarina,
      accesorio: 'ninguno', cicatriz: true,
    },
  },
  {
    id: 'revolucionario',
    nombre: 'Revolucionario',
    descripcion: 'Capucha verde, pañuelo que tapa la boca y túnica de viaje.',
    aspecto: {
      piel: 'oscura', pelo: 'corto', colorPelo: C.tinta, ropa: 'tunica', colorRopa: C.hoja,
      colorPantalon: C.piedra, colorBotas: C.corteza, sombrero: 'capucha', colorSombrero: C.selva,
      accesorio: 'panuelo', cicatriz: false,
    },
  },
];
