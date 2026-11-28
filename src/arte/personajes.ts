import { Lienzo } from './lienzo';
import { C, SOMBRA, LUZ } from './paleta';
import { prendaBasica } from '../datos/vestuario';

// Sprite de personaje 32x32, vista frontal, proporciones de adulto (cabeza pequeña, cara seria).
// Todo es paramétrico: la creación de personaje usa exactamente este dibujo.
// Eje de simetría: x = 15.5 (las parejas izquierda/derecha suman 31).

export type Cuerpo = 'hombre' | 'mujer';
export type Complexion = 'normal' | 'delgado' | 'fuerte' | 'grande';
export type Piel = 'base' | 'muyClara' | 'clara' | 'media' | 'oscura' | 'muyOscura';
export type Pelo = 'ninguno' | 'despeinado' | 'coleta' | 'rapado' | 'cresta' | 'largoSuelto' | 'rizos' | 'melena' | 'trenza' | 'mono' | 'corto' | 'coletas' | 'ondas';
export type Rasgo = 'ninguno' | 'barba' | 'perilla' | 'bigote' | 'labios' | 'pecas' | 'lunar';
export type Ropa = 'ninguna' | 'chaleco' | 'casaca' | 'rayas' | 'sinMangas' | 'camisaAbierta' | 'camisola' | 'tirantes' | 'jubon' | 'abrigo' | 'capa' | 'marinera'
  | 'uniformeMarine' | 'casacaAlmirante' | 'gabardina' | 'chalecoCuero' | 'cotaMalla' | 'casacaLegendaria';
export type Pantalon = 'ninguno' | 'largo' | 'corto' | 'rayas' | 'rotos' | 'ancho' | 'uniforme';
export type Calzado = 'descalzo' | 'botasAltas' | 'botas' | 'sandalias' | 'zapatos' | 'botasHebilla';
export type Sombrero = 'ninguno' | 'tricornio' | 'bicornio' | 'paja' | 'panuelo' | 'gorro' | 'gorraMarine' | 'boina' | 'capucha' | 'plumas' | 'corona';
export type Accesorio = 'parche' | 'aro' | 'garfio' | 'collar' | 'pipa' | 'panueloCuello' | 'cinturon' | 'bandolera' | 'charreteras' | 'medallas' | 'catalejo' | 'loro' | 'brazalete';
export type Cicatriz = 'mejilla' | 'ojo' | 'cruz' | 'frente' | 'barbilla';

export interface AspectoPersonaje {
  cuerpo: Cuerpo;
  /** Si falta, 'normal' (personajes de antes). */
  complexion?: Complexion;
  piel: Piel;
  pelo: Pelo;
  colorPelo: number;
  rasgo: Rasgo;
  ropa: Ropa;
  colorRopa: number;
  colorFaja: number;
  pantalon: Pantalon;
  colorPantalon: number;
  calzado: Calzado;
  colorCalzado: number;
  sombrero: Sombrero;
  colorSombrero: number;
  accesorios: Accesorio[];
  cicatrices: Cicatriz[];
}

// ---------------------------------------------------------------------------
// Opciones (con su texto en español) para la interfaz de creación.

export const OPCIONES = {
  cuerpo: { hombre: 'Hombre', mujer: 'Mujer' } as Record<Cuerpo, string>,
  complexion: { normal: 'Normal', delgado: 'Delgado', fuerte: 'Musculoso', grande: 'Corpulento' } as Record<Complexion, string>,
  piel: { muyClara: 'Muy clara', clara: 'Clara', media: 'Morena', oscura: 'Oscura', muyOscura: 'Muy oscura' } as Record<Piel, string>,
  peloHombre: { ninguno: 'Sin pelo', despeinado: 'Despeinado', coleta: 'Coleta de marinero', rapado: 'Rapado', cresta: 'Cresta', largoSuelto: 'Pelo largo', rizos: 'Rizos' } as Partial<Record<Pelo, string>>,
  peloMujer: { ninguno: 'Sin pelo', melena: 'Melena suelta', trenza: 'Trenza', mono: 'Moño alto', corto: 'Corto', coletas: 'Dos coletas', ondas: 'Ondas largas' } as Partial<Record<Pelo, string>>,
  rasgoHombre: { ninguno: 'Ninguno', barba: 'Barba', perilla: 'Perilla', bigote: 'Bigote' } as Partial<Record<Rasgo, string>>,
  rasgoMujer: { ninguno: 'Ninguno', labios: 'Labios pintados', pecas: 'Pecas', lunar: 'Lunar' } as Partial<Record<Rasgo, string>>,
  ropa: { ninguna: 'Ropa interior', chaleco: 'Camisa y chaleco', casaca: 'Casaca de capitán', rayas: 'Camiseta a rayas', sinMangas: 'Chaleco sin camisa',
    camisaAbierta: 'Camisa abierta', camisola: 'Camisola con cordones', tirantes: 'Camisa con tirantes', jubon: 'Jubón abotonado', abrigo: 'Abrigo largo', capa: 'Capa de viaje', marinera: 'Blusa de marinero',
    uniformeMarine: 'Uniforme de marine', casacaAlmirante: 'Casaca de almirante', gabardina: 'Gabardina rebelde', chalecoCuero: 'Chaleco de cuero', cotaMalla: 'Cota de malla', casacaLegendaria: 'Casaca legendaria' } as Record<Ropa, string>,
  pantalon: { ninguno: 'Ropa interior', largo: 'Largo', corto: 'Bombacho corto', rayas: 'A rayas', rotos: 'Remendado y roto', ancho: 'Bombacho largo', uniforme: 'Pantalón de uniforme' } as Record<Pantalon, string>,
  calzado: { descalzo: 'Descalzo', botasAltas: 'Botas altas', botas: 'Botas', sandalias: 'Sandalias', zapatos: 'Zapatos con hebilla', botasHebilla: 'Botas con correas' } as Record<Calzado, string>,
  sombrero: { ninguno: 'Ninguno', tricornio: 'Tricornio', bicornio: 'Bicornio', paja: 'Sombrero de paja', panuelo: 'Pañuelo atado', gorro: 'Gorro de lana', gorraMarine: 'Gorra de oficial', boina: 'Boina', capucha: 'Capucha', plumas: 'Tricornio con plumas', corona: 'Corona pirata' } as Record<Sombrero, string>,
  accesorios: { parche: 'Parche', aro: 'Aro de oro', garfio: 'Garfio', collar: 'Collar de monedas', pipa: 'Pipa', panueloCuello: 'Pañuelo al cuello', cinturon: 'Cinturón', bandolera: 'Bandolera', charreteras: 'Charreteras', medallas: 'Medallas', catalejo: 'Catalejo', loro: 'Loro al hombro', brazalete: 'Brazalete rojo' } as Record<Accesorio, string>,
  cicatrices: { mejilla: 'En la mejilla', ojo: 'Sobre el ojo', cruz: 'En cruz', frente: 'En la frente', barbilla: 'En la barbilla' } as Record<Cicatriz, string>,
};

/** Colores que se ofrecen para elegir (índices de la paleta). */
export const COLORES = {
  pelo: [C.tinta, C.corteza, C.madera, C.maderaClara, C.oro, C.naranja, C.rojo, C.niebla, C.hueso, C.azulMarina, C.hoja, C.coral],
  ropa: [C.granate, C.rojo, C.azulMarina, C.noche, C.selva, C.hoja, C.madera, C.corteza, C.violeta, C.tinta, C.hueso, C.oro],
  pantalon: [C.madera, C.corteza, C.noche, C.tinta, C.azulMarina, C.piedra, C.hueso, C.maderaClara, C.granate, C.selva],
  calzado: [C.corteza, C.tinta, C.madera, C.granate, C.noche, C.hueso],
  sombrero: [C.tinta, C.noche, C.corteza, C.granate, C.rojo, C.azulMarina, C.selva, C.hueso],
  faja: [C.rojo, C.granate, C.oro, C.azulMarina, C.hoja, C.violeta, C.tinta, C.hueso],
};

const PIEL: Record<Piel, [number, number]> = {
  base: [C.niebla, C.piedra], // maniquí sin color
  muyClara: [C.pergamino, C.pielClara],
  clara: [C.pielClara, C.pielMedia],
  media: [C.pielMedia, C.pielOscura],
  oscura: [C.pielOscura, C.corteza],
  muyOscura: [C.corteza, C.noche],
};

// ---------------------------------------------------------------------------
// Geometría de cada cuerpo

interface Geo {
  torso: (y: number) => [number, number] | null; // columnas del torso en la fila y (11..19)
  brazos: { izq: number; der: number; y0: number; y1: number; w: number }; // x de cada brazo y su ancho
  piernas: { izq: [number, number]; der: [number, number] };
  cuello: [number, number];
}

const GEO: Record<Cuerpo, Record<Complexion, Geo>> = {
  hombre: {
    normal: {
      torso: (y) => (y < 11 || y > 19 ? null : y <= 16 ? [10, 21] : [11, 20]),
      brazos: { izq: 8, der: 22, y0: 12, y1: 19, w: 2 },
      piernas: { izq: [11, 14], der: [17, 20] },
      cuello: [14, 17],
    },
    delgado: {
      torso: (y) => (y < 11 || y > 19 ? null : y <= 14 ? [11, 20] : [12, 19]),
      brazos: { izq: 9, der: 21, y0: 12, y1: 19, w: 2 },
      piernas: { izq: [12, 14], der: [17, 19] },
      cuello: [14, 17],
    },
    fuerte: {
      torso: (y) => (y < 11 || y > 19 ? null : y === 11 ? [9, 22] : y <= 15 ? [8, 23] : y <= 17 ? [9, 22] : [10, 21]),
      brazos: { izq: 5, der: 24, y0: 12, y1: 19, w: 3 },
      piernas: { izq: [10, 14], der: [17, 21] },
      cuello: [13, 18],
    },
    grande: {
      torso: (y) => (y < 11 || y > 19 ? null : y <= 13 ? [9, 22] : [8, 23]),
      brazos: { izq: 5, der: 24, y0: 12, y1: 19, w: 3 },
      piernas: { izq: [10, 14], der: [17, 21] },
      cuello: [13, 18],
    },
  },
  mujer: {
    normal: {
      torso: (y) => (y < 11 || y > 19 ? null : y === 11 ? [12, 19] : y <= 15 ? [11, 20] : y <= 17 ? [12, 19] : [11, 20]),
      brazos: { izq: 9, der: 21, y0: 12, y1: 18, w: 2 },
      piernas: { izq: [12, 14], der: [17, 19] },
      cuello: [15, 16],
    },
    delgado: {
      torso: (y) => (y < 11 || y > 19 ? null : y === 11 ? [13, 18] : y <= 15 ? [12, 19] : y <= 17 ? [13, 18] : [12, 19]),
      brazos: { izq: 10, der: 20, y0: 12, y1: 18, w: 2 },
      piernas: { izq: [13, 14], der: [17, 18] },
      cuello: [15, 16],
    },
    fuerte: {
      torso: (y) => (y < 11 || y > 19 ? null : y === 11 ? [11, 20] : y <= 15 ? [10, 21] : y <= 17 ? [11, 20] : [10, 21]),
      brazos: { izq: 8, der: 22, y0: 12, y1: 18, w: 2 },
      piernas: { izq: [11, 14], der: [17, 20] },
      cuello: [14, 17],
    },
    grande: {
      torso: (y) => (y < 11 || y > 19 ? null : y === 11 ? [11, 20] : y <= 13 ? [10, 21] : [9, 22]),
      brazos: { izq: 6, der: 23, y0: 12, y1: 18, w: 3 },
      piernas: { izq: [11, 14], der: [17, 20] },
      cuello: [14, 17],
    },
  },
};

const dx = (x: number) => Math.abs(x - 15.5);

/** Pinta un pequeño mapa de caracteres (cada carácter, un píxel). */
function pintarMapa(L: Lienzo, ox: number, oy: number, filas: string[], colores: Record<string, number>) {
  filas.forEach((f, y) => [...f].forEach((ch, x) => { if (colores[ch]) L.px(ox + x, oy + y, colores[ch]); }));
}

// Filas clave (sprite 32x32): cabeza 3-9, cuello 10, torso 11-19, piernas 20-29, suela 30.
export function dibujarPersonaje(a: AspectoPersonaje): Lienzo {
  const L = new Lienzo(32, 32);
  const g = GEO[a.cuerpo][a.complexion ?? 'normal'];
  const [piel, pielS] = PIEL[a.piel];
  const pc = a.colorPelo;
  const mujer = a.cuerpo === 'mujer';

  // ---- 1. Pelo de detrás
  if (a.pelo === 'melena') { L.rect(11, 3, 10, 9, pc); L.rect(10, 5, 12, 5, pc); }
  if (a.pelo === 'largoSuelto') { L.rect(11, 4, 10, 8, pc); L.rect(12, 12, 8, 1, SOMBRA[pc]); }
  if (a.pelo === 'ondas') {
    L.rect(10, 4, 12, 11, pc);
    for (let y = 5; y <= 14; y += 3) { L.px(10, y, SOMBRA[pc]); L.px(21, y + 1, SOMBRA[pc]); }
    for (const x of [10, 12, 19, 21]) L.px(x, 15, pc);
  }
  if (a.pelo === 'coleta') { L.rect(19, 5, 2, 7, pc); L.px(20, 12, pc); L.rect(19, 6, 2, 1, C.rojo); }

  // ---- 2. Piernas, pantalón y calzado
  const [li0, li1] = g.piernas.izq, [ld0, ld1] = g.piernas.der;
  const sinPantalon = a.pantalon === 'ninguno';
  const finPantalon = a.pantalon === 'corto' ? 25 : a.pantalon === 'rotos' ? 27 : sinPantalon ? 21 : 29;
  L.rect(li0, 20, ld1 - li0 + 1, 2, sinPantalon ? C.hueso : a.colorPantalon); // cadera (o calzón)
  for (let y = 22; y <= 29; y++) {
    const c = y <= finPantalon && !sinPantalon ? a.colorPantalon : piel;
    L.rect(li0, y, li1 - li0 + 1, 1, c);
    L.rect(ld0, y, ld1 - ld0 + 1, 1, c);
  }
  if (a.pantalon === 'corto') { L.rect(li0, 25, li1 - li0 + 1, 1, SOMBRA[a.colorPantalon]); L.rect(ld0, 25, ld1 - ld0 + 1, 1, SOMBRA[a.colorPantalon]); }
  if (a.pantalon === 'rayas') // rayas verticales
    for (let y = 20; y <= 29; y++) for (const [x0, x1] of [[li0, li1], [ld0, ld1]]) for (let x = x0 + 1; x <= x1; x += 2) L.px(x, y, C.hueso);
  if (a.pantalon === 'rotos') {
    for (const [x0, x1] of [[li0, li1], [ld0, ld1]]) for (let x = x0; x <= x1; x++) if ((x + 1) % 2 === 0) L.px(x, 27, piel); // bajos deshilachados
    L.px(li0 + 1, 24, piel); L.px(li0 + 2, 24, pielS);                                            // rodilla rota
    L.rect(ld1 - 1, 22, 2, 2, LUZ[a.colorPantalon] ?? a.colorPantalon);                             // remiendo
  }
  if (a.pantalon === 'uniforme') for (let y = 21; y <= 29; y++) { L.px(li0, y, C.azulMarina); L.px(ld1, y, C.azulMarina); }   // galón lateral
  if (a.pantalon === 'ancho') { // bombacho largo, ancho y metido en la bota
    for (let y = 22; y <= 27; y++) { L.px(li0 - 1, y, a.colorPantalon); L.px(ld1 + 1, y, a.colorPantalon); }
    L.rect(li0 - 1, 28, li1 - li0 + 3, 1, SOMBRA[a.colorPantalon]); L.rect(ld0 - 1, 28, ld1 - ld0 + 3, 1, SOMBRA[a.colorPantalon]);
    for (let y = 22; y <= 27; y += 2) { L.px(li1, y, SOMBRA[a.colorPantalon]); L.px(ld0, y, SOMBRA[a.colorPantalon]); }
  }
  const pie = (x0: number, x1: number, haciaFuera: number) => {
    const ancho = x1 - x0 + 2;
    const xi = haciaFuera < 0 ? x0 - 1 : x0;
    if (a.calzado === 'descalzo') {
      L.rect(xi, 29, ancho, 2, piel);
    } else if (a.calzado === 'sandalias') {
      L.rect(xi, 29, ancho, 1, piel);
      L.rect(xi, 30, ancho, 1, a.colorCalzado);
      L.rect(x0, 28, x1 - x0 + 1, 1, a.colorCalzado);
    } else if (a.calzado === 'zapatos') {
      L.rect(xi, 29, ancho, 1, a.colorCalzado);
      L.rect(xi, 30, ancho, 1, SOMBRA[a.colorCalzado]);
      L.px(haciaFuera < 0 ? x0 + 1 : x1 - 1, 29, C.oro);                 // hebilla
    } else {
      const y0 = a.calzado === 'botasAltas' || a.calzado === 'botasHebilla' ? 24 : 27;
      L.rect(x0, y0, x1 - x0 + 1, 30 - y0, a.colorCalzado);
      L.rect(xi, 29, ancho, 2, a.colorCalzado);
      L.rect(x0, y0, x1 - x0 + 1, 1, LUZ[a.colorCalzado]);      // vuelta de la bota
      L.rect(xi, 30, ancho, 1, SOMBRA[a.colorCalzado]);          // suela
      if (a.calzado === 'botasHebilla') for (const y of [25, 27]) { L.rect(x0, y, x1 - x0 + 1, 1, SOMBRA[a.colorCalzado]); L.px(haciaFuera < 0 ? x0 : x1, y, C.oro); }
    }
  };
  pie(li0, li1, -1);
  pie(ld0, ld1, 1);

  // ---- 3. Torso y brazos según la ropa
  const B = g.brazos;
  for (let y = 11; y <= 19; y++) {
    const t = g.torso(y);
    if (!t) continue;
    const borde = (t[1] - t[0]) / 2;
    for (let x = t[0]; x <= t[1]; x++) {
      const d = dx(x);
      let c: number;
      switch (a.ropa) {
        case 'chaleco':
          c = d >= borde - 2 ? a.colorRopa : C.hueso;
          if ((y === 11 && d <= 1.5) || (y <= 13 && d <= 0.5)) c = piel;
          break;
        case 'casaca':
          c = a.colorRopa;
          if (d <= 0.5 && y <= 17) c = C.hueso;
          else if (d <= 1.5 && y <= 13) c = C.oro;               // solapas
          if (d === 2.5 && (y === 14 || y === 16)) c = C.oro;    // botones
          break;
        case 'rayas':
          c = y % 2 === 0 ? a.colorRopa : C.hueso;
          if (y === 11 && d <= 1.5) c = piel;
          break;
        case 'ninguna':
          c = piel;
          if (mujer && d <= 4.5 && y >= 13 && y <= 15) c = C.hueso; // ropa interior
          break;
        case 'sinMangas':
          c = d <= (mujer ? 1.5 : 2.5) ? piel : a.colorRopa;
          if (mujer && d <= 3.5 && y >= 13 && y <= 15) c = C.hueso; // top
          break;
        case 'camisaAbierta':
          c = a.colorRopa;
          if (y <= 16 && d <= 3.5 - (y - 11) * 0.75) c = mujer && y >= 13 ? C.hueso : piel; // escote en V
          if (y <= 12 && d >= 2.5 && d <= 3.5) c = LUZ[a.colorRopa] ?? a.colorRopa;          // cuello
          break;
        case 'camisola':
          c = a.colorRopa;
          if (d <= 0.5 && y <= 14) c = piel;
          if (d === 1.5 && (y === 12 || y === 14)) c = C.hueso;   // cordones
          if (y === 11 && d >= 1.5 && d <= 3.5) c = LUZ[a.colorRopa] ?? a.colorRopa;
          break;
        case 'tirantes':
          c = C.hueso;
          if (y === 11 && d <= 1.5) c = piel;
          if (d === (mujer ? 2.5 : 3.5)) c = a.colorRopa;          // tirantes
          if (y >= 16 && d >= borde - 0.5) c = SOMBRA[C.hueso] ?? C.hueso;
          break;
        case 'jubon':
          c = a.colorRopa;
          if (d <= 0.5) c = (y % 2 === 0) ? C.oro : SOMBRA[a.colorRopa];     // botonadura
          if (y === 11) c = LUZ[a.colorRopa] ?? a.colorRopa;                  // cuello alto
          if (y === 15 && d >= 1.5) c = SOMBRA[a.colorRopa];                  // costura
          break;
        case 'abrigo': {
          const dentro = a.colorRopa === C.noche || a.colorRopa === C.tinta ? C.granate : C.noche;
          c = d >= borde - 2 ? a.colorRopa : dentro;
          if (y <= 13 && d >= borde - 3 && d < borde - 2) c = LUZ[a.colorRopa] ?? a.colorRopa;  // solapas
          if (y === 11 && d <= 1.5) c = piel;
          break;
        }
        case 'capa':
          c = d >= borde - 1.5 ? a.colorRopa : C.hueso;
          if (y === 11 && d <= 1.5) c = piel;
          if (y === 11 && d === 2.5) c = C.oro;                     // broche
          break;
        case 'uniformeMarine':
          c = a.colorRopa;
          if (y <= 12 && d >= 1.5) c = C.hueso;                     // cuello blanco
          if (y <= 13 && d <= 1.5 - (y - 11) * 0.5) c = piel;
          if (d === 2.5 && (y === 14 || y === 16 || y === 18)) c = C.oro;   // dos filas de botones
          break;
        case 'casacaAlmirante':
          c = a.colorRopa;
          if (d <= 0.5 && y <= 17) c = C.hueso;
          else if (d <= 1.5 && y <= 14) c = C.oro;                  // solapas doradas
          if (d >= borde - 0.5 && y >= 13) c = C.oro;               // ribete
          break;
        case 'gabardina':
          c = a.colorRopa;
          if (y <= 12 && d >= 2.5) c = LUZ[a.colorRopa] ?? a.colorRopa;   // cuello alto
          if (y === 11 && d <= 2) c = piel;
          if (d === 2.5 && (y === 13 || y === 15)) c = SOMBRA[a.colorRopa];
          if (y === 17) c = d <= 0.5 ? C.oro : C.tinta;               // cinturón con hebilla
          break;
        case 'chalecoCuero':
          c = d <= (mujer ? 1.5 : 2.5) ? piel : a.colorRopa;
          if (mujer && d <= 3.5 && y >= 13 && y <= 15) c = C.hueso;
          if (d > 2.5 && d <= 3.5 && (y === 13 || y === 15 || y === 17)) c = C.tinta;   // cordones
          if (y === 11 && d > 2.5) c = SOMBRA[a.colorRopa];
          break;
        case 'cotaMalla':
          c = (x + y) % 2 ? C.niebla : C.piedra;
          if (y === 11 && d <= 1.5) c = piel;
          break;
        case 'casacaLegendaria':
          c = a.colorRopa;
          if (y <= 12) c = (x + y) % 2 ? C.hueso : C.pergamino;        // cuello de piel
          else if (d <= 0.5 && y <= 17) c = C.tinta;
          else if ((x * 3 + y) % 5 === 0) c = C.oro;                    // bordados
          break;
        case 'marinera':
          c = a.colorRopa;
          if (y <= 12 && d >= 1.5) c = C.hueso;                     // cuello de marinero
          if (y === 12 && d >= 2.5 && d <= 4.5) c = a.colorRopa === C.azulMarina ? C.rojo : C.azulMarina;
          if (y <= 13 && d <= 1.5 - (y - 11) * 0.5) c = piel;
          if (y === 14 && d <= 0.5) c = C.rojo;                      // lazo
          if (y === 15 && d === 1.5) c = C.rojo;
          break;
      }
      L.px(x, y, c);
    }
  }
  const manga: [number, number] = a.ropa === 'rayas' ? [B.y0, B.y0 + 2] : a.ropa === 'sinMangas' || a.ropa === 'ninguna' ? [B.y0, B.y0 - 1]
    : a.ropa === 'camisaAbierta' || a.ropa === 'tirantes' || a.ropa === 'cotaMalla' ? [B.y0, B.y0 + 4]
    : a.ropa === 'chalecoCuero' ? [B.y0, B.y0 - 1] : [B.y0, B.y1];
  const colorManga = a.ropa === 'chaleco' || a.ropa === 'tirantes' ? C.hueso : a.ropa === 'cotaMalla' ? C.piedra : a.colorRopa;
  for (const bx of [B.izq, B.der]) {
    for (let y = B.y0; y <= B.y1; y++) {
      const enManga = y >= manga[0] && y <= manga[1];
      let c = enManga ? colorManga : piel;
      if (a.ropa === 'rayas' && enManga) c = y % 2 === 0 ? a.colorRopa : C.hueso;
      L.rect(bx, y, B.w, 1, c);
    }
    L.rect(bx, B.y1 + 1, B.w, 2, piel);                            // mano
    L.px(bx === B.izq ? bx + B.w - 1 : bx, 11, a.ropa === 'ninguna' ? piel : a.ropa === 'sinMangas' ? a.colorRopa : colorManga); // hombro
  }
  // Separación brazo/torso cuando ambos son piel
  for (let y = B.y0; y <= B.y1; y++) {
    const t = g.torso(y);
    if (!t) continue;
    if (L.get(t[0], y) === piel && L.get(B.izq + B.w - 1, y) === piel) L.px(t[0], y, pielS);
    if (L.get(t[1], y) === piel && L.get(B.der, y) === piel) L.px(t[1], y, pielS);
    if (L.get(B.der + B.w - 1, y) === piel) L.px(B.der + B.w - 1, y, pielS);
  }
  if (sinPantalon) { // calzón
    const t = g.torso(19)!;
    L.rect(t[0], 19, t[1] - t[0] + 1, 1, C.niebla);
    L.rect(li0, 20, ld1 - li0 + 1, 2, C.hueso);
  }
  if (a.ropa === 'uniformeMarine') for (const bx of [B.izq, B.der]) L.rect(bx, B.y1, B.w, 1, C.hueso);    // puños blancos
  if (a.ropa === 'casacaAlmirante' || a.ropa === 'casacaLegendaria' || a.ropa === 'gabardina') {
    // Faldones largos
    const borde = a.ropa === 'gabardina' ? SOMBRA[a.colorRopa] : C.oro;
    L.rect(li0 - 1, 20, 3, 8, a.colorRopa); L.rect(ld1 - 1, 20, 3, 8, a.colorRopa);
    L.rect(li0 - 1, 27, 3, 1, borde); L.rect(ld1 - 1, 27, 3, 1, borde);
    for (const bx of [B.izq, B.der]) L.rect(bx, B.y1 - 1, B.w, 2, a.ropa === 'gabardina' ? SOMBRA[a.colorRopa] : C.oro);   // puños
  }
  if (a.ropa === 'casacaLegendaria') { const t = g.torso(11)!; L.rect(t[0] - 1, 11, t[1] - t[0] + 3, 1, C.pergamino); }   // piel sobre los hombros
  if (a.ropa === 'abrigo') {                                       // faldones largos hasta las botas
    for (const bx of [B.izq, B.der]) L.rect(bx, B.y1, B.w, 1, SOMBRA[a.colorRopa]);
    L.rect(li0 - 1, 20, 2, 9, a.colorRopa); L.rect(ld1, 20, 2, 9, a.colorRopa);
    L.rect(li0 - 1, 28, 2, 1, SOMBRA[a.colorRopa]); L.rect(ld1, 28, 2, 1, SOMBRA[a.colorRopa]);
  }
  if (a.ropa === 'capa') {                                         // la capa cae por detrás de los brazos
    for (let y = 12; y <= 25; y++) { L.px(B.izq - 1, y, SOMBRA[a.colorRopa]); L.px(B.der + B.w, y, SOMBRA[a.colorRopa]); }
    for (let y = 21; y <= 25; y++) { L.rect(B.izq, y, B.w, 1, a.colorRopa); L.rect(B.der, y, B.w, 1, a.colorRopa); }
  }
  if (a.ropa === 'camisola') for (const bx of [B.izq, B.der]) L.rect(bx, B.y1, B.w, 1, LUZ[a.colorRopa] ?? a.colorRopa); // puños anchos
  if (a.ropa === 'marinera') for (const bx of [B.izq, B.der]) L.rect(bx, B.y1, B.w, 1, C.hueso);
  if (a.ropa === 'casaca') {
    for (const bx of [B.izq, B.der]) L.rect(bx, B.y1 - 1, B.w, 2, C.oro); // puños
    L.rect(li0 - 1, 20, 4, 6, a.colorRopa);                       // faldones
    L.rect(ld1 - 2, 20, 4, 6, a.colorRopa);
    L.rect(li0 - 1, 25, 4, 1, C.oro); L.rect(ld1 - 2, 25, 4, 1, C.oro);
  }
  if (mujer) for (const x of [12, 13, 18, 19]) L.px(x, 15, SOMBRA[L.get(x, 15)] ?? 0);
  if (a.complexion === 'fuerte') {                                 // pectorales y abdominales si se ven
    const marca = (x: number, y: number) => { if (L.get(x, y) === piel) L.px(x, y, pielS); };
    if (!mujer) { for (const x of [10, 11, 12, 13, 14, 17, 18, 19, 20, 21]) marca(x, 14); marca(15, 13); marca(16, 13); }
    for (const y of [16, 18]) { marca(13, y); marca(14, y); marca(17, y); marca(18, y); }
    for (const bx of [B.izq, B.der]) marca(bx === B.izq ? bx : bx + B.w - 1, 14);   // bíceps
  }
  if (a.complexion === 'grande') {                                 // barriga
    const t = g.torso(18)!;
    if (L.get(15, 17) === piel) { L.px(15, 17, pielS); }
    L.px(t[0], 19, SOMBRA[L.get(t[0], 19)] ?? 0); L.px(t[1], 19, SOMBRA[L.get(t[1], 19)] ?? 0);
  }
  if (a.colorFaja) { // 0 = sin faja
    const tf = g.torso(18)!;
    L.rect(tf[0], 18, tf[1] - tf[0] + 1, 2, a.colorFaja);
    L.px(19, 20, a.colorFaja); L.px(19, 21, a.colorFaja); L.px(20, 21, SOMBRA[a.colorFaja]);
  }

  // ---- 4. Cuello y cabeza (8x7, cara seria)
  L.rect(g.cuello[0], 10, g.cuello[1] - g.cuello[0] + 1, 1, pielS);
  L.rect(12, 3, 8, 7, piel);
  for (const [x, y] of [[12, 3], [19, 3], [12, 9], [19, 9]]) L.px(x, y, C.T);
  if (mujer) { L.px(13, 9, C.T); L.px(18, 9, C.T); }
  L.px(11, 6, piel); L.px(11, 7, piel); L.px(20, 6, pielS); L.px(20, 7, pielS);
  L.rect(19, 4, 1, 5, pielS);
  // Ojos: blanco por fuera, pupila por dentro
  L.px(13, 6, C.hueso); L.px(14, 6, C.tinta);
  L.px(18, 6, C.hueso); L.px(17, 6, C.tinta);
  if (mujer) { L.px(13, 5, C.tinta); L.px(18, 5, C.tinta); }      // pestañas
  else { L.px(14, 5, SOMBRA[pielS] ?? C.tinta); L.px(17, 5, SOMBRA[pielS] ?? C.tinta); } // ceño
  L.px(16, 7, pielS);                                             // nariz
  L.px(15, 8, SOMBRA[pielS] ?? pielS); L.px(16, 8, SOMBRA[pielS] ?? pielS); // boca

  switch (a.rasgo) {
    case 'barba':
      L.rect(12, 7, 1, 2, pc); L.rect(19, 7, 1, 2, pc);
      L.rect(14, 8, 4, 1, pc); L.rect(13, 9, 6, 1, pc); L.rect(14, 10, 4, 1, pc);
      L.px(13, 8, pc); L.px(18, 8, pc);
      break;
    case 'perilla':
      L.rect(14, 8, 4, 1, pc); L.rect(15, 9, 2, 2, pc);
      break;
    case 'bigote':
      L.rect(14, 8, 4, 1, pc); L.px(13, 9, pc); L.px(18, 9, pc);
      break;
    case 'labios':
      L.px(15, 8, C.rojo); L.px(16, 8, C.granate);
      break;
    case 'pecas':
      L.px(13, 7, pielS); L.px(18, 7, pielS); L.px(14, 7, pielS);
      break;
    case 'lunar':
      L.px(18, 8, C.tinta);
      break;
  }

  // ---- 5. Pelo de delante
  switch (a.pelo) {
    case 'despeinado':
      // Mechones de punta, estilo anime (dibujado a mano, píxel a píxel).
      // '#' pelo, 's' sombra entre mechones, 'l' brillo. La columna 0 es x = 8.
      pintarMapa(L, 8, 0, [
        '...#..#...#.....',
        '..###.##.###.#..',
        '...#ll#s##ls##..',
        '.#####s####s###.',
        '##.###.##.###.##',
        '...##..#...#....',
        '...........#....',
      ], { '#': pc, s: SOMBRA[pc], l: LUZ[pc] });
      break;
    case 'coleta':
      L.rect(13, 1, 6, 1, pc); L.rect(12, 2, 8, 2, pc);
      L.px(12, 4, pc); L.px(19, 4, pc); L.px(19, 5, pc);
      L.px(14, 2, SOMBRA[pc]);
      break;
    case 'rapado':
      L.rect(13, 2, 6, 1, pc); L.rect(12, 3, 8, 1, pc); L.px(12, 4, pc); L.px(19, 4, pc);
      break;
    case 'melena':
      L.rect(13, 1, 6, 1, pc); L.rect(12, 2, 8, 3, pc); L.px(11, 3, pc); L.px(20, 3, pc);
      L.rect(12, 5, 1, 4, pc); L.rect(19, 5, 1, 4, pc);
      L.px(15, 2, SOMBRA[pc]); L.px(15, 3, SOMBRA[pc]);
      break;
    case 'trenza':
      L.rect(13, 1, 6, 1, pc); L.rect(12, 2, 8, 3, pc);
      L.px(12, 5, pc); L.px(19, 5, pc); L.px(19, 6, pc);
      L.px(16, 2, SOMBRA[pc]);
      for (let y = 8; y <= 16; y++) { L.px(19, y, y % 2 ? pc : SOMBRA[pc]); L.px(20, y, y % 2 ? SOMBRA[pc] : pc); }
      L.rect(19, 17, 2, 1, C.rojo); L.px(19, 18, pc); L.px(20, 18, pc);
      break;
    case 'cresta':
      pintarMapa(L, 12, 0, [
        '..#..#..',
        '..#l##..',
        '..##l#..',
        'ss####ss',
        's......s',
      ], { '#': pc, s: SOMBRA[pc], l: LUZ[pc] });
      break;
    case 'largoSuelto':
      L.rect(13, 1, 6, 1, pc); L.rect(12, 2, 8, 2, pc);
      L.rect(12, 4, 1, 3, pc); L.rect(19, 4, 1, 4, pc); L.px(13, 4, pc);
      L.px(15, 2, SOMBRA[pc]); L.px(15, 3, SOMBRA[pc]); L.px(17, 2, LUZ[pc]);
      break;
    case 'rizos':
      pintarMapa(L, 10, 0, [
        '...#.##.#...',
        '..########..',
        '.##l###l###.',
        '############',
        '##l#....#l##',
        '.##......##.',
        '.#........#.',
      ], { '#': pc, l: LUZ[pc] });
      break;
    case 'corto':
      L.rect(13, 1, 6, 1, pc); L.rect(12, 2, 8, 3, pc); L.px(13, 5, pc);
      L.rect(11, 3, 1, 5, pc); L.rect(20, 3, 1, 5, pc); L.rect(12, 5, 1, 3, pc); L.rect(19, 5, 1, 3, pc);
      L.px(16, 2, SOMBRA[pc]); L.px(14, 2, LUZ[pc]);
      break;
    case 'coletas':
      L.rect(13, 1, 6, 1, pc); L.rect(12, 2, 8, 3, pc); L.px(15, 2, SOMBRA[pc]); L.px(15, 3, SOMBRA[pc]);
      for (const [x, d] of [[10, -1], [20, 1]] as const) {
        L.px(x + (d < 0 ? 1 : 0), 4, C.rojo); L.px(x + (d < 0 ? 0 : 1), 4, C.rojo);
        for (let y = 5; y <= 12; y++) L.rect(x + (y > 8 ? d : 0), y, 2, 1, y % 2 ? pc : SOMBRA[pc]);
      }
      break;
    case 'ondas':
      L.rect(13, 1, 6, 1, pc); L.rect(12, 2, 8, 3, pc); L.px(11, 3, pc); L.px(20, 3, pc);
      L.rect(12, 5, 1, 4, pc); L.rect(19, 5, 1, 4, pc); L.px(18, 5, pc);
      L.px(14, 2, SOMBRA[pc]); L.px(15, 3, SOMBRA[pc]); L.px(17, 2, LUZ[pc]);
      break;
    case 'mono':
      L.rect(14, 0, 4, 2, pc); L.px(14, 0, C.T); L.px(17, 0, C.T);
      L.rect(12, 2, 8, 3, pc);
      L.rect(14, 2, 4, 1, C.oro);                                 // cinta
      L.px(12, 5, pc); L.px(12, 6, pc); L.px(19, 5, pc);
      break;
  }

  // ---- 6. Sombreros
  const sc = a.colorSombrero;
  switch (a.sombrero) {
    case 'tricornio':
      L.rect(11, 0, 10, 2, sc);
      L.rect(8, 2, 16, 2, sc);
      L.px(8, 1, sc); L.px(9, 1, sc); L.px(23, 1, sc); L.px(22, 1, sc);
      L.rect(11, 1, 10, 1, C.oro);
      L.px(15, 0, C.hueso); L.px(16, 0, C.hueso);
      break;
    case 'bicornio':
      L.poligono([[6, 4], [9, 1], [13, -1], [19, -1], [23, 1], [26, 4]], sc);
      L.rect(7, 3, 18, 1, C.oro);
      L.px(15, 0, C.rojo); L.px(16, 0, C.oro); L.px(15, 1, C.rojo); L.px(16, 1, C.rojo);
      break;
    case 'paja':
      L.elipse(15.5, 1.5, 4.5, 2.5, C.arena);                     // copa
      L.rect(11, 1, 10, 2, sc);                                   // cinta
      L.rect(7, 3, 18, 1, C.arena);                               // ala ancha
      L.rect(6, 4, 20, 1, C.maderaClara);
      for (const x of [8, 11, 14, 17, 20, 23]) L.px(x, 3, C.maderaClara);
      L.px(14, 0, C.maderaClara); L.px(17, 0, C.maderaClara);
      break;
    case 'panuelo':
      L.rect(12, 1, 8, 4, sc); L.rect(11, 2, 10, 3, sc);
      L.rect(20, 3, 2, 2, sc); L.px(22, 5, sc); L.px(21, 6, sc); L.px(22, 6, SOMBRA[sc]);
      for (const x of [13, 16, 19]) L.px(x, 2, LUZ[sc]);
      break;
    case 'gorraMarine':
      L.rect(11, 0, 10, 3, C.hueso); L.rect(10, 1, 12, 2, C.hueso);   // plato blanco
      L.rect(12, 3, 8, 1, sc);                                        // cinta
      L.rect(15, 2, 2, 2, C.oro);                                     // insignia
      L.rect(12, 4, 8, 1, C.tinta);                                   // visera
      break;
    case 'boina':
      L.elipse(15, 2.5, 6, 2, sc); L.rect(10, 3, 11, 1, sc);
      L.px(16, 0, sc); L.rect(11, 4, 9, 1, SOMBRA[sc]);
      L.px(13, 2, LUZ[sc]); L.px(14, 2, LUZ[sc]);
      break;
    case 'capucha':
      L.rect(11, 1, 10, 3, sc); L.rect(12, 0, 8, 1, sc);
      L.rect(10, 3, 2, 8, sc); L.rect(20, 3, 2, 8, sc);
      L.rect(11, 10, 10, 1, SOMBRA[sc]);
      L.rect(12, 3, 8, 1, SOMBRA[sc]);                                // sombra sobre la frente
      break;
    case 'plumas':
      L.rect(11, 0, 10, 2, sc); L.rect(8, 2, 16, 2, sc);
      L.px(8, 1, sc); L.px(9, 1, sc); L.px(23, 1, sc); L.px(22, 1, sc);
      L.rect(11, 1, 10, 1, C.oro);
      // Pluma grande que sale hacia atrás
      L.linea(20, 1, 27, 0, C.rojo); L.linea(20, 2, 28, 1, C.rojo); L.linea(21, 3, 27, 3, C.coral); L.px(28, 2, C.coral);
      break;
    case 'corona':
      L.rect(12, 2, 8, 3, C.oro);
      for (const x of [12, 14, 17, 19]) L.px(x, 1, C.oro);
      L.px(12, 0, C.limon); L.px(19, 0, C.limon); L.px(15, 0, C.oro); L.px(16, 0, C.oro); L.px(15, 1, C.oro); L.px(16, 1, C.oro);
      L.px(13, 3, C.rojo); L.px(18, 3, C.mar); L.px(15, 3, C.coral); L.px(16, 3, C.coral);
      L.rect(12, 4, 8, 1, C.naranja);
      break;
    case 'gorro':
      L.elipse(15.5, 2, 5, 3, sc);
      L.rect(11, 3, 10, 2, sc);
      L.rect(11, 4, 10, 1, SOMBRA[sc]);
      for (const x of [13, 15, 17, 19]) L.px(x, 3, SOMBRA[sc]);
      break;
  }

  // ---- 7. Accesorios
  for (const ac of a.accesorios) {
    switch (ac) {
      case 'parche':
        L.linea(12, 4, 19, 3, C.tinta);
        L.rect(13, 5, 2, 2, C.tinta); L.px(15, 5, C.tinta);
        break;
      case 'aro':
        L.px(20, 8, C.oro); L.px(21, 9, C.oro);
        break;
      case 'garfio': {
        const hx = B.izq, hy = B.y1 + 1;
        L.rect(hx, hy, 2, 2, C.T);
        L.rect(hx, hy, 2, 1, C.corteza);
        L.px(hx, hy + 1, C.niebla); L.px(hx, hy + 2, C.niebla); L.px(hx + 1, hy + 3, C.niebla); L.px(hx + 2, hy + 2, C.niebla);
        break;
      }
      case 'collar':
        for (const [x, y] of [[13, 11], [14, 12], [15, 13], [16, 13], [17, 12], [18, 11]]) L.px(x, y, C.oro);
        L.px(15, 14, C.limon);
        break;
      case 'pipa':
        L.px(17, 8, C.madera); L.px(18, 8, C.madera); L.px(19, 8, C.madera);
        L.px(20, 7, C.corteza); L.px(20, 8, C.corteza);
        L.px(21, 5, C.niebla); L.px(21, 4, C.niebla); L.px(22, 3, C.niebla);
        break;
      case 'cinturon': {
        const t = g.torso(19)!;
        L.rect(t[0], 19, t[1] - t[0] + 1, 1, C.corteza);
        L.rect(15, 19, 2, 1, C.oro); L.px(15, 20, C.oro); L.px(16, 20, C.oro);
        break;
      }
      case 'bandolera':
      {
        const [t0] = g.torso(11)!, t1 = g.torso(19)![1];
        for (let y = 11; y <= 19; y++) L.px(Math.round(t0 + ((t1 - t0) * (y - 11)) / 8), y, C.corteza);
        L.px(Math.round(t0 + (t1 - t0) * 3 / 8), 14, C.oro);
      }
        break;
      case 'charreteras': {
        const t = g.torso(11)!;
        for (const [x0, lado] of [[t[0] - 1, -1], [t[1] - 1, 1]] as const) {
          L.rect(x0, 11, 3, 1, C.oro);
          for (let k = 0; k < 3; k++) L.px(x0 + k, 12, k % 2 ? C.limon : C.oro);   // flecos
          void lado;
        }
        break;
      }
      case 'medallas':
        for (const [x, cint] of [[17, C.rojo], [19, C.mar]] as const) { L.px(x, 13, cint); L.px(x, 14, cint); L.px(x, 15, C.oro); }
        L.px(18, 13, C.hueso); L.px(18, 15, C.limon);
        break;
      case 'catalejo': {
        const hx = B.izq, hy = B.y1 + 1;
        L.linea(hx - 1, hy, hx - 5, hy - 4, C.oro); L.linea(hx, hy, hx - 4, hy - 4, C.oro);
        L.px(hx - 5, hy - 5, C.madera); L.px(hx - 6, hy - 5, C.madera); L.px(hx - 3, hy - 2, C.madera);
        break;
      }
      case 'loro': {
        const x = B.der + B.w - 1, y = 6;   // posado en el hombro
        L.rect(x - 1, y + 1, 3, 4, C.rojo); L.px(x, y, C.rojo); L.px(x + 1, y, C.rojo);
        L.px(x + 2, y + 1, C.oro);                       // pico
        L.px(x + 1, y + 1, C.tinta);                     // ojo
        L.rect(x - 1, y + 3, 1, 2, C.mar); L.px(x, y + 4, C.hoja);   // ala
        L.px(x, y + 5, C.oro); L.px(x - 1, y + 6, C.rojo);           // cola
        break;
      }
      case 'brazalete':
        L.rect(B.der, 14, B.w, 2, C.rojo); L.px(B.der + (B.w > 2 ? 1 : 0), 14, C.hueso);
        break;
      case 'panueloCuello':
        L.rect(13, 10, 6, 2, C.rojo); L.rect(14, 12, 4, 1, C.rojo); L.px(15, 13, C.granate); L.px(16, 13, C.granate);
        break;
    }
  }

  // ---- 8. Cicatrices
  const cic = C.granate;
  for (const ci of a.cicatrices) {
    switch (ci) {
      case 'mejilla': L.px(17, 8, cic); L.px(18, 7, cic); break;
      case 'ojo': L.px(17, 4, cic); L.px(17, 5, cic); L.px(17, 7, cic); break;
      case 'cruz': L.px(13, 7, cic); L.px(14, 8, cic); L.px(14, 7, cic); L.px(13, 8, cic); break;
      case 'frente': L.px(14, 4, cic); L.px(15, 4, cic); L.px(16, 5, cic); break;
      case 'barbilla': L.px(16, 9, cic); L.px(17, 9, cic); break;
    }
  }

  L.volumen({ luz: false, excluir: [C.tinta, piel, pielS, C.oro, C.hueso, C.niebla, cic] });
  L.contorno(C.tinta);
  return L;
}

/** Punto de partida del creador: maniquí sin color, sin pelo y en ropa interior. */
export const ASPECTO_BASE: AspectoPersonaje = {
  cuerpo: 'hombre', complexion: 'normal', piel: 'base', pelo: 'ninguno', colorPelo: C.corteza, rasgo: 'ninguno',
  ropa: 'ninguna', colorRopa: C.granate, colorFaja: 0, pantalon: 'ninguno', colorPantalon: C.madera,
  calzado: 'descalzo', colorCalzado: C.corteza, sombrero: 'ninguno', colorSombrero: C.granate,
  accesorios: [], cicatrices: [],
};

/** Un aspecto al azar (para bots y el botón "al azar"). */
export function aspectoAlAzar(r: () => number, cuerpo?: Cuerpo, bando?: 'pirata' | 'marine' | 'revolucionario'): AspectoPersonaje {
  const elige = <T,>(xs: readonly T[]) => xs[Math.floor(r() * xs.length)];
  // Solo prendas sin requisitos de progreso (y las de su bando, si se sabe)
  const ok = (campo: string) => (v: string) => prendaBasica(campo, v, bando);
  const cu = cuerpo ?? elige(['hombre', 'mujer'] as const);
  const pelos = (Object.keys(cu === 'hombre' ? OPCIONES.peloHombre : OPCIONES.peloMujer) as Pelo[]).filter((p) => p !== 'ninguno' || r() < 0.3);
  const rasgos = Object.keys(cu === 'hombre' ? OPCIONES.rasgoHombre : OPCIONES.rasgoMujer) as Rasgo[];
  const accs = (Object.keys(OPCIONES.accesorios) as Accesorio[]).filter(ok('accesorios')).filter(() => r() < 0.2);
  const cics = (Object.keys(OPCIONES.cicatrices) as Cicatriz[]).filter(() => r() < 0.15);
  const a: AspectoPersonaje = {
    cuerpo: cu,
    piel: elige(Object.keys(OPCIONES.piel) as Piel[]),
    pelo: elige(pelos), colorPelo: elige(COLORES.pelo), rasgo: elige(rasgos),
    ropa: elige((Object.keys(OPCIONES.ropa) as Ropa[]).filter((x) => x !== 'ninguna').filter(ok('ropa'))), colorRopa: elige(COLORES.ropa), colorFaja: elige(COLORES.faja),
    pantalon: elige(['largo', 'largo', 'corto', 'rayas', 'rotos', 'ancho'] as const), colorPantalon: elige(COLORES.pantalon),
    calzado: elige((Object.keys(OPCIONES.calzado) as Calzado[]).filter((x) => x !== 'descalzo')), colorCalzado: elige(COLORES.calzado),
    sombrero: elige((Object.keys(OPCIONES.sombrero) as Sombrero[]).filter(ok('sombrero'))), colorSombrero: elige(COLORES.sombrero),
    accesorios: accs, cicatrices: cics,
    complexion: elige(['normal', 'normal', 'delgado', 'fuerte', 'grande'] as const),
  };
  // Muchos marines van de uniforme
  if (bando === 'marine' && r() < 0.6) Object.assign(a, { ropa: 'uniformeMarine', colorRopa: C.azulMarina, pantalon: 'uniforme', colorPantalon: C.hueso, sombrero: r() < 0.6 ? 'gorraMarine' : a.sombrero, colorSombrero: C.azulMarina, colorFaja: 0 });
  return a;
}

const base = {
  colorFaja: C.rojo, pantalon: 'largo', colorPantalon: C.madera, calzado: 'botasAltas', colorCalzado: C.corteza,
  accesorios: [], cicatrices: [],
} as const;

/** Personajes de ejemplo: 3 hombres y 3 mujeres. */
export const PERSONAJES_PRUEBA: { id: string; nombre: string; descripcion: string; aspecto: AspectoPersonaje }[] = [
  {
    id: 'capitan', nombre: 'Capitán de casaca', descripcion: 'Tricornio, casaca con solapas doradas, barba y parche.',
    aspecto: { ...base, cuerpo: 'hombre', piel: 'clara', pelo: 'coleta', colorPelo: C.tinta, rasgo: 'barba', ropa: 'casaca', colorRopa: C.granate,
      colorPantalon: C.noche, sombrero: 'tricornio', colorSombrero: C.tinta, accesorios: ['parche'], cicatrices: [] },
  },
  {
    id: 'grumete', nombre: 'Grumete de paja', descripcion: 'Sombrero de paja, chaleco sin camisa, bombacho y sandalias.',
    aspecto: { ...base, cuerpo: 'hombre', piel: 'media', pelo: 'despeinado', colorPelo: C.tinta, rasgo: 'ninguno', ropa: 'sinMangas', colorRopa: C.azulMarina,
      colorFaja: C.oro, pantalon: 'corto', colorPantalon: C.maderaClara, calzado: 'sandalias', colorCalzado: C.madera,
      sombrero: 'paja', colorSombrero: C.corteza, accesorios: [], cicatrices: ['mejilla'] },
  },
  {
    id: 'contramaestre', nombre: 'Contramaestre', descripcion: 'Rapado, bigote, camiseta a rayas, garfio y pipa.',
    aspecto: { ...base, cuerpo: 'hombre', piel: 'muyOscura', pelo: 'rapado', colorPelo: C.tinta, rasgo: 'bigote', ropa: 'rayas', colorRopa: C.azulMarina,
      colorPantalon: C.corteza, calzado: 'botas', sombrero: 'ninguno', colorSombrero: C.tinta, accesorios: ['garfio', 'pipa', 'aro'], cicatrices: ['ojo'] },
  },
  {
    id: 'capitana', nombre: 'Capitana del bicornio', descripcion: 'Melena roja, bicornio de capitana y casaca azul.',
    aspecto: { ...base, cuerpo: 'mujer', piel: 'muyClara', pelo: 'melena', colorPelo: C.naranja, rasgo: 'pecas', ropa: 'casaca', colorRopa: C.azulMarina,
      colorPantalon: C.hueso, colorCalzado: C.tinta, sombrero: 'bicornio', colorSombrero: C.tinta, accesorios: ['aro'], cicatrices: [] },
  },
  {
    id: 'artillera', nombre: 'Artillera', descripcion: 'Trenza, pañuelo atado a la cabeza, camisa y chaleco verde.',
    aspecto: { ...base, cuerpo: 'mujer', piel: 'oscura', pelo: 'trenza', colorPelo: C.tinta, rasgo: 'labios', ropa: 'chaleco', colorRopa: C.selva,
      colorFaja: C.granate, colorPantalon: C.corteza, sombrero: 'panuelo', colorSombrero: C.rojo, accesorios: ['collar'], cicatrices: ['barbilla'] },
  },
  {
    id: 'navegante', nombre: 'Navegante', descripcion: 'Moño alto, chaleco sin camisa, bombacho y lunar.',
    aspecto: { ...base, cuerpo: 'mujer', piel: 'clara', pelo: 'mono', colorPelo: C.corteza, rasgo: 'lunar', ropa: 'sinMangas', colorRopa: C.granate,
      colorFaja: C.oro, pantalon: 'corto', colorPantalon: C.noche, calzado: 'botas', sombrero: 'ninguno', colorSombrero: C.tinta,
      accesorios: ['panueloCuello'], cicatrices: ['cruz'] },
  },
];

/** El personaje visto de espaldas (para el combate): la cabeza se tapa con el pelo. */
export function dibujarPersonajeEspalda(a: AspectoPersonaje): Lienzo {
  const atras: AspectoPersonaje = {
    ...a, rasgo: 'ninguno', cicatrices: [],
    accesorios: a.accesorios.filter((x) => x === 'garfio' || x === 'aro'),
  };
  const L = dibujarPersonaje(atras);
  const [piel, pielS] = PIEL[a.piel];
  const pelo = a.pelo === 'ninguno' || a.pelo === 'rapado' ? null : a.colorPelo;
  for (let y = 4; y <= 8; y++)
    for (let x = 12; x <= 19; x++) {
      const c = L.get(x, y);
      if (!c) continue;
      const deCara = c === piel || c === pielS || ((c === C.tinta || c === C.hueso || c === C.coral || c === SOMBRA[pielS]) && x > 12 && x < 19);
      if (deCara) L.px(x, y, pelo ?? (x === 19 ? pielS : piel));
    }
  if (pelo) for (let x = 13; x <= 18; x++) L.px(x, 9, SOMBRA[pelo]);   // nuca
  return L;
}
