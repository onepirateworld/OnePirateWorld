// Prendas exclusivas de un bando y prendas que se desbloquean por nivel, recompensa o capturas.
// Lo que no aparece aquí está disponible para todos desde el principio.
import type { Bando } from '../cuenta';

export interface Requisito {
  bando?: Bando;
  nivel?: number;
  recompensa?: number;
  /** Solo marines: piratas + revolucionarios capturados. */
  capturas?: number;
}

/** Clave: "campo:valor" (por ejemplo "ropa:uniformeMarine" o "accesorios:loro"). */
export const REQUISITOS: Record<string, Requisito> = {
  // ⚓ Marines
  'ropa:uniformeMarine': { bando: 'marine' },
  'pantalon:uniforme': { bando: 'marine' },
  'sombrero:gorraMarine': { bando: 'marine' },
  'accesorios:charreteras': { bando: 'marine', capturas: 10 },
  'accesorios:medallas': { bando: 'marine', capturas: 25 },
  'ropa:casacaAlmirante': { bando: 'marine', capturas: 60 },
  // 🏴‍☠️ Piratas
  'ropa:chalecoCuero': { bando: 'pirata' },
  'sombrero:plumas': { bando: 'pirata', recompensa: 10_000_000 },
  'accesorios:loro': { bando: 'pirata', recompensa: 50_000_000 },
  'ropa:casacaLegendaria': { bando: 'pirata', recompensa: 300_000_000 },
  'sombrero:corona': { bando: 'pirata', recompensa: 1_000_000_000 },
  // ✊ Revolucionarios
  'ropa:gabardina': { bando: 'revolucionario' },
  'sombrero:boina': { bando: 'revolucionario' },
  'accesorios:brazalete': { bando: 'revolucionario', nivel: 10 },
  'sombrero:capucha': { bando: 'revolucionario', nivel: 20 },
  // Para todos
  'accesorios:catalejo': { nivel: 10 },
  'ropa:cotaMalla': { nivel: 30 },
};

/** Lo que ha conseguido el personaje (para saber qué tiene desbloqueado). */
export interface Meritos { bando: Bando; nivel: number; recompensa: number; capturas: number; creador?: boolean }

const millones = (n: number) => (n >= 1_000_000 ? `${(n / 1_000_000).toLocaleString('es-ES')} M` : n.toLocaleString('es-ES'));

/**
 * 'oculta' = de otro bando (no se muestra); 'libre' = se puede usar;
 * si no, el texto del candado (por ejemplo «Recompensa 50 M»).
 */
export function estadoPrenda(campo: string, valor: string, m: Meritos): 'oculta' | 'libre' | string {
  const r = REQUISITOS[`${campo}:${valor}`];
  if (!r) return 'libre';
  if (r.bando && r.bando !== m.bando) return 'oculta';
  if (m.creador) return 'libre';
  if (r.nivel && m.nivel < r.nivel) return `Nivel ${r.nivel}`;
  if (r.recompensa && m.recompensa < r.recompensa) return `Recompensa ${millones(r.recompensa)}`;
  if (r.capturas && m.capturas < r.capturas) return `${r.capturas} capturas`;
  return 'libre';
}

/** ¿Se puede usar sin requisitos de progreso (solo el bando)? Para los bots y el «al azar». */
export const prendaBasica = (campo: string, valor: string, bando?: Bando) => {
  const r = REQUISITOS[`${campo}:${valor}`];
  return !r || (!r.nivel && !r.recompensa && !r.capturas && (!r.bando || r.bando === bando));
};
