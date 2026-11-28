// Palabras no permitidas en nombres (la misma lista que la función nombre_limpio del servidor).
const PROHIBIDAS = ['idiota', 'imbécil', 'imbecil', 'estúpido', 'estupido', 'gilipollas', 'subnormal', 'puta', 'puto', 'mierda', 'cabrón', 'cabron',
  'pendejo', 'mamón', 'maricón', 'maricon', 'zorra', 'conchetumare', 'culiao', 'aweonao', 'ctm', 'cagon', 'cagón', 'weon', 'huevón', 'huevon', 'verga', 'pico', 'chucha'];

/** true si el texto no contiene ninguna palabra prohibida (como palabra suelta). */
export function nombreLimpio(t: string): boolean {
  const bajo = t.toLowerCase();
  return !PROHIBIDAS.some((p) => new RegExp(`(^|[^a-záéíóúñ])${p}($|[^a-záéíóúñ])`).test(bajo));
}
