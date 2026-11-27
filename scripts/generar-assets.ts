// Genera todos los PNG del juego en public/assets y un manifiesto para la galería.
// Uso: npm run assets
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Lienzo } from '../src/arte/lienzo';
import { PALETA } from '../src/arte/paleta';
import { PERSONAJES_PRUEBA, dibujarPersonaje } from '../src/arte/personajes';
import { BARCOS_PRUEBA } from '../src/arte/barcos';
import { ISLAS_PRUEBA, dibujarIsla } from '../src/arte/islas';
import { dibujarFruta, siluetaFruta } from '../src/arte/frutas';
import { UI_PRUEBA } from '../src/arte/ui';
import { FRUTAS, CATEGORIAS, RAREZAS } from '../src/datos/frutas';
import { codificarPNG } from './png';

const RAIZ = join(import.meta.dirname, '..', 'public', 'assets');

interface Item { id: string; nombre: string; archivo: string; ancho: number; alto: number; descripcion?: string; meta?: Record<string, unknown> }
interface Grupo { id: string; titulo: string; fondo: string; items: Item[] }

function guardar(carpeta: string, id: string, L: Lienzo): Pick<Item, 'archivo' | 'ancho' | 'alto'> {
  mkdirSync(join(RAIZ, carpeta), { recursive: true });
  const archivo = `${carpeta}/${id}.png`;
  writeFileSync(join(RAIZ, archivo), codificarPNG(L.w, L.h, L.aRGBA()));
  return { archivo, ancho: L.w, alto: L.h };
}

const grupos: Grupo[] = [
  {
    id: 'personajes', titulo: 'Personajes', fondo: 'pergamino',
    items: PERSONAJES_PRUEBA.map((p) => ({ id: p.id, nombre: p.nombre, descripcion: p.descripcion, ...guardar('personajes', p.id, dibujarPersonaje(p.aspecto)) })),
  },
  {
    id: 'barcos', titulo: 'Barcos', fondo: 'mar',
    items: BARCOS_PRUEBA.map((b) => ({ id: b.id, nombre: b.nombre, descripcion: b.descripcion, ...guardar('barcos', b.id, b.dibujar()) })),
  },
  {
    id: 'islas', titulo: 'Islas', fondo: 'mar',
    items: ISLAS_PRUEBA.map((i) => ({ id: i.id, nombre: i.nombre, descripcion: i.descripcion, ...guardar('islas', i.id, dibujarIsla(i.bioma, i.semilla)) })),
  },
  {
    id: 'frutas', titulo: 'Frutas del poder', fondo: 'pergamino',
    items: FRUTAS.map((f) => {
      guardar('frutas/siluetas', f.id, siluetaFruta(f.id));
      return {
        id: f.id, nombre: f.nombre, descripcion: f.poder,
        ...guardar('frutas', f.id, dibujarFruta(f.id)),
        meta: {
          categoria: CATEGORIAS[f.categoria].nombre, rareza: RAREZAS[f.rareza].nombre, colorRareza: RAREZAS[f.rareza].color,
          tecnicas: f.tecnicas, debilidad: f.debilidad, silueta: `frutas/siluetas/${f.id}.png`,
        },
      };
    }),
  },
  {
    id: 'ui', titulo: 'Interfaz', fondo: 'noche',
    items: UI_PRUEBA.map((u) => ({ id: u.id, nombre: u.nombre, descripcion: u.descripcion, ...guardar('ui', u.id, u.dibujar()) })),
  },
];

writeFileSync(join(RAIZ, 'manifiesto.json'), JSON.stringify({ paleta: PALETA, grupos }, null, 2));
const total = grupos.reduce((s, g) => s + g.items.length, 0);
console.log(`✔ ${total} sprites generados en public/assets`);
