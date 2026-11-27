// Rutas que funcionan tanto en la raíz (/) como en una subcarpeta (GitHub Pages: /OnePirateWorld/).
export const ruta = (p = '') => import.meta.env.BASE_URL + p.replace(/^\//, '');
