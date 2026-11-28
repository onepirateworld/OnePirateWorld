// Generadores de nombres originales para islas y personajes.
import { azar } from '../arte/lienzo';

const SUSTANTIVOS = ['Ballena', 'Cuervo', 'Ancla', 'Brasa', 'Coral', 'Calavera', 'Gaviota', 'Tortuga', 'Sirena', 'Tormenta', 'Faro', 'Campana',
  'Ostra', 'Tiburón', 'Lagarto', 'Pólvora', 'Brújula', 'Medusa', 'Cangrejo', 'Ceniza', 'Espuma', 'Marea', 'Cometa', 'Lince', 'Halcón', 'Perla',
  'Mástil', 'Timón', 'Ron', 'Canela', 'Escarcha', 'Trueno', 'Niebla', 'Luna', 'Sal', 'Hierro', 'Ámbar', 'Musgo', 'Pez Luna', 'Pulpo'];
const ADJETIVOS_M = ['Negro', 'Rojo', 'Dorado', 'Perdido', 'Dormido', 'Hundido', 'Salvaje', 'Viejo', 'Torcido', 'Silencioso', 'Roto', 'Blanco', 'Alto', 'Escondido'];
const ADJETIVOS_F = ['Negra', 'Roja', 'Dorada', 'Perdida', 'Dormida', 'Hundida', 'Salvaje', 'Vieja', 'Torcida', 'Silenciosa', 'Rota', 'Blanca', 'Alta', 'Escondida'];
const FEMENINOS = new Set(['Ballena', 'Ancla', 'Brasa', 'Calavera', 'Gaviota', 'Tortuga', 'Sirena', 'Tormenta', 'Campana', 'Ostra', 'Pólvora', 'Brújula',
  'Medusa', 'Ceniza', 'Espuma', 'Marea', 'Perla', 'Canela', 'Escarcha', 'Niebla', 'Luna', 'Sal']);
const PREFIJOS = ['Isla', 'Cayo', 'Roca', 'Puerto', 'Bahía', 'Atolón', 'Peñón', 'Islote', 'Arrecife'];
const CIUDADES = ['Villasal', 'Puertobrea', 'Altamarea', 'Muelleviejo', 'Ciudad Farol', 'Fondeadero', 'Tres Velas', 'Villacoral', 'Bocanegra',
  'Puerto Canela', 'Ciudad Campana', 'Marisma Alta', 'Rada Dorada', 'Villa Gaviota'];

export function nombreIsla(id: number, bioma: string): string {
  const r = azar(id * 2654435761);
  const elige = <T,>(xs: T[]) => xs[Math.floor(r() * xs.length)];
  if (bioma === 'ciudad' && r() < 0.6) return elige(CIUDADES) + (r() < 0.3 ? ` ${['Norte', 'Sur', 'del Este', 'Nueva'][Math.floor(r() * 4)]}` : '');
  const s = elige(SUSTANTIVOS);
  const fem = FEMENINOS.has(s);
  const tipo = r();
  if (tipo < 0.35) return `${elige(PREFIJOS)} ${fem ? 'de la' : 'del'} ${s}`;
  if (tipo < 0.6) return `${elige(PREFIJOS)} ${s}`;
  if (tipo < 0.85) return `${elige(PREFIJOS)} ${fem ? elige(ADJETIVOS_F) : elige(ADJETIVOS_M)}`;
  return `${s} ${fem ? elige(ADJETIVOS_F) : elige(ADJETIVOS_M)}`;
}

const NOMBRES_H = ['Bruno', 'Teo', 'Gael', 'Simón', 'Darío', 'Iker', 'Mateo', 'Rubén', 'Nilo', 'Ezequiel', 'Tobías', 'Abel', 'Ciro', 'Fermín',
  'Lucio', 'Bastián', 'Rodrigo', 'Amaro', 'Hugo', 'Elio', 'Joaquín', 'Ramiro', 'Tadeo', 'Saúl'];
const NOMBRES_M = ['Lía', 'Vera', 'Nora', 'Alba', 'Iris', 'Greta', 'Olivia', 'Candela', 'Maite', 'Marina', 'Selene', 'Lucía', 'Noa', 'Ainhoa',
  'Brisa', 'Dafne', 'Elena', 'Irene', 'Mara', 'Zoe', 'Paloma', 'Carmela', 'Estela', 'Julia'];
const APODOS = ['el Rojo', 'Diente de Oro', 'Manos de Hierro', 'la Sombra', 'el Tuerto', 'Pies Ligeros', 'Sin Miedo', 'la Brasa', 'el Callado',
  'Ojo de Halcón', 'Barbagris', 'la Tormenta', 'Mil Nudos', 'el Zurdo', 'Risa Loca', 'Cara de Sal', 'el Faro', 'Puño de Ancla'];

export function nombrePersona(r: () => number, mujer: boolean): { nombre: string; apodo?: string } {
  const lista = mujer ? NOMBRES_M : NOMBRES_H;
  const nombre = lista[Math.floor(r() * lista.length)];
  let apodo: string | undefined;
  if (r() < 0.45) {
    apodo = APODOS[Math.floor(r() * APODOS.length)];
    if (mujer) apodo = apodo.replace(/^el /, 'la ');
    else apodo = apodo.replace(/^la (Sombra|Brasa|Tormenta)$/, 'el $1').replace(/^la /, 'el ');
  }
  return { nombre, apodo };
}
