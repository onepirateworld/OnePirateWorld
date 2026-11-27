// Rutas que funcionan en cualquier sitio donde se publique el juego:
// en la raíz (/), en una subcarpeta (GitHub Pages) o como página de Claude.
// Cada HTML declara dónde está la raíz con <meta name="raiz">.
const base = import.meta.env.BASE_URL;
const raiz = base.startsWith('/')
  ? base
  : document.querySelector<HTMLMetaElement>('meta[name="raiz"]')?.content ?? './';

/** Página o archivo desde la raíz, p. ej. ruta('nuevo/index.html?bando=pirata'). */
export const ruta = (p = '') => raiz + p.replace(/^\//, '');
/** La portada (con parámetros opcionales). */
export const portada = (q = '') => ruta(`index.html${q}`);
