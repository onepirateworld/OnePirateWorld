// Reglas del combate por turnos: atacar, defender, cambiar de arma, usar objeto o huir.
// Sin interfaz: sirve igual para el combate que juega el jugador y para el que se
// simula solo cuando no está (fase 6).
import { azar } from '../arte/lienzo';
import { estadisticasIniciales } from '../datos/progreso';
import type { AspectoPersonaje } from '../arte/personajes';
import type { Bando } from '../cuenta';

export type IdArma = 'punos' | 'espada' | 'pistola';
export type Efecto = 'golpe' | 'corte' | 'disparo' | 'fruta';

export interface Tecnica {
  id: string;
  nombre: string;
  poder: number;        // 0 = no hace daño (mejora)
  precision: number;    // 0..1
  energia: number;      // coste
  golpes?: number;      // varios golpes seguidos
  efecto: Efecto;
  mejora?: { stat: 'fuerza' | 'resistencia' | 'velocidad'; cantidad: number };
  retroceso?: number;   // fracción del daño que se hace a sí mismo
}

export const ARMAS: Record<IdArma, { nombre: string; tecnicas: Tecnica[] }> = {
  punos: { nombre: 'Puños', tecnicas: [
    { id: 'punetazo', nombre: 'Puñetazo', poder: 40, precision: 1, energia: 0, efecto: 'golpe' },
    { id: 'patada', nombre: 'Patada giratoria', poder: 60, precision: 0.85, energia: 10, efecto: 'golpe' },
    { id: 'cabezazo', nombre: 'Cabezazo', poder: 80, precision: 0.8, energia: 15, efecto: 'golpe', retroceso: 0.2 },
    { id: 'furia', nombre: 'Calentar puños', poder: 0, precision: 1, energia: 10, efecto: 'golpe', mejora: { stat: 'fuerza', cantidad: 0.25 } },
  ] },
  espada: { nombre: 'Sable', tecnicas: [
    { id: 'tajo', nombre: 'Tajo', poder: 50, precision: 0.95, energia: 0, efecto: 'corte' },
    { id: 'estocada', nombre: 'Estocada', poder: 65, precision: 0.9, energia: 10, efecto: 'corte' },
    { id: 'cruzado', nombre: 'Corte cruzado', poder: 85, precision: 0.75, energia: 20, efecto: 'corte' },
    { id: 'guardia', nombre: 'Guardia de acero', poder: 0, precision: 1, energia: 10, efecto: 'corte', mejora: { stat: 'resistencia', cantidad: 0.3 } },
  ] },
  pistola: { nombre: 'Pistola', tecnicas: [
    { id: 'disparo', nombre: 'Disparo', poder: 45, precision: 0.9, energia: 0, efecto: 'disparo' },
    { id: 'rafaga', nombre: 'Ráfaga', poder: 18, precision: 0.75, energia: 15, efecto: 'disparo', golpes: 3 },
    { id: 'certero', nombre: 'Tiro certero', poder: 75, precision: 1, energia: 25, efecto: 'disparo' },
    { id: 'apuntar', nombre: 'Apuntar con calma', poder: 0, precision: 1, energia: 5, efecto: 'disparo', mejora: { stat: 'velocidad', cantidad: 0.3 } },
  ] },
};

export interface Luchador {
  nombre: string;
  bando: Bando;
  aspecto: AspectoPersonaje;
  nivel: number;
  rasgos: string[];
  armas: IdArma[];
  arma: IdArma;
  vida: number;
  vidaMax: number;
  energia: number;
  fuerza: number;
  resistencia: number;
  velocidad: number;
  tecnica: number;
  defendiendo: boolean;
  mejoras: { fuerza: number; resistencia: number; velocidad: number };
  pociones: number;
}

export function crearLuchador(d: { nombre: string; bando: Bando; aspecto: AspectoPersonaje; nivel: number; rasgos: string[]; armas: IdArma[] }): Luchador {
  const e = estadisticasIniciales(d.rasgos, d.nivel);
  const vidaMax = Math.round(60 + e.vida * 1.3);
  return {
    ...d, arma: d.armas[0], vida: vidaMax, vidaMax, energia: 100,
    fuerza: e.fuerza, resistencia: e.resistencia, velocidad: e.velocidad, tecnica: e.tecnica,
    defendiendo: false, mejoras: { fuerza: 0, resistencia: 0, velocidad: 0 }, pociones: 1,
  };
}

export type Accion =
  | { tipo: 'atacar'; tecnica: Tecnica }
  | { tipo: 'defender' }
  | { tipo: 'arma'; arma: IdArma }
  | { tipo: 'objeto' }
  | { tipo: 'huir' };

/** Lo que pasa en un turno, paso a paso, para que la pantalla lo anime. */
export type Paso =
  | { tipo: 'texto'; texto: string }
  | { tipo: 'ataque'; quien: 0 | 1; efecto: Efecto }
  | { tipo: 'dano'; quien: 0 | 1; cantidad: number; critico: boolean }
  | { tipo: 'cura'; quien: 0 | 1; cantidad: number }
  | { tipo: 'arma'; quien: 0 | 1 }
  | { tipo: 'fin'; ganador: 0 | 1 | null };

export class Combate {
  readonly l: [Luchador, Luchador];
  terminado = false;
  private r: () => number;
  constructor(jugador: Luchador, rival: Luchador, semilla = Date.now()) {
    this.l = [jugador, rival];
    this.r = azar(semilla);
  }

  /** La IA del rival (y del personaje cuando el jugador no está): según su carácter. */
  eleccionIA(quien: 0 | 1): Accion {
    const yo = this.l[quien], otro = this.l[1 - quien];
    const prudente = yo.rasgos.includes('prudente'), valiente = yo.rasgos.includes('valiente');
    if (yo.vida < yo.vidaMax * (valiente ? 0.15 : 0.3) && yo.pociones > 0) return { tipo: 'objeto' };
    if (yo.vida < yo.vidaMax * 0.25 && prudente && this.r() < 0.4) return { tipo: 'defender' };
    if (yo.energia < 15 && this.r() < 0.5) return { tipo: 'defender' };
    const tecnicas = ARMAS[yo.arma].tecnicas.filter((t) => t.energia <= yo.energia);
    const ofensivas = tecnicas.filter((t) => t.poder > 0);
    if (this.r() < 0.15 && tecnicas.some((t) => t.mejora)) return { tipo: 'atacar', tecnica: tecnicas.find((t) => t.mejora)! };
    // La más fuerte si el rival está débil o si es valiente
    const t = (otro.vida < otro.vidaMax * 0.35 || valiente) ? ofensivas.sort((a, b) => b.poder - a.poder)[0] : ofensivas[Math.floor(this.r() * ofensivas.length)];
    return { tipo: 'atacar', tecnica: t ?? ARMAS[yo.arma].tecnicas[0] };
  }

  /** Resuelve un turno completo con la acción del jugador y la del rival. */
  turno(accionJugador: Accion): Paso[] {
    const pasos: Paso[] = [];
    const acciones: [Accion, Accion] = [accionJugador, this.eleccionIA(1)];
    for (const l of this.l) l.defendiendo = false;
    // Orden: defender, cambiar de arma, objetos y huir van primero; luego el más rápido
    const prioridad = (a: Accion) => (a.tipo === 'atacar' ? 0 : 1);
    const vel = (i: 0 | 1) => this.l[i].velocidad * (1 + this.l[i].mejoras.velocidad) + this.r();
    const orden: (0 | 1)[] = prioridad(acciones[0]) !== prioridad(acciones[1])
      ? (prioridad(acciones[0]) > prioridad(acciones[1]) ? [0, 1] : [1, 0])
      : vel(0) >= vel(1) ? [0, 1] : [1, 0];
    for (const i of orden) {
      if (this.terminado) break;
      this.ejecutar(i, acciones[i], pasos);
    }
    // Recuperan un poco de energía cada turno
    for (const l of this.l) l.energia = Math.min(100, l.energia + 5);
    return pasos;
  }

  private ejecutar(i: 0 | 1, a: Accion, pasos: Paso[]) {
    const yo = this.l[i], otro = this.l[1 - i] as Luchador;
    const j = (1 - i) as 0 | 1;
    switch (a.tipo) {
      case 'defender':
        yo.defendiendo = true; yo.energia = Math.min(100, yo.energia + 15);
        pasos.push({ tipo: 'texto', texto: `${yo.nombre} se pone en guardia.` });
        return;
      case 'arma':
        yo.arma = a.arma;
        pasos.push({ tipo: 'arma', quien: i }, { tipo: 'texto', texto: `${yo.nombre} cambia a ${ARMAS[a.arma].nombre.toLowerCase()}.` });
        return;
      case 'objeto': {
        if (yo.pociones <= 0) { pasos.push({ tipo: 'texto', texto: `${yo.nombre} busca algo en la bolsa... ¡no queda nada!` }); return; }
        yo.pociones--;
        const cura = Math.min(yo.vidaMax - yo.vida, Math.round(yo.vidaMax * 0.25));
        yo.vida += cura;
        pasos.push({ tipo: 'texto', texto: `${yo.nombre} bebe un trago de grog y recupera fuerzas.` }, { tipo: 'cura', quien: i, cantidad: cura });
        return;
      }
      case 'huir': {
        const ok = this.r() < 0.35 + (yo.velocidad - otro.velocidad) * 0.04;
        pasos.push({ tipo: 'texto', texto: ok ? `${yo.nombre} escapa a toda prisa.` : `¡${yo.nombre} no consigue escapar!` });
        if (ok) { this.terminado = true; pasos.push({ tipo: 'fin', ganador: null }); }
        return;
      }
      case 'atacar': {
        const t = a.tecnica;
        yo.energia -= t.energia;
        pasos.push({ tipo: 'texto', texto: `${yo.nombre} usa ${t.nombre}.` });
        if (t.mejora) {
          yo.mejoras[t.mejora.stat] += t.mejora.cantidad;
          const q = { fuerza: 'fuerza', resistencia: 'defensa', velocidad: 'puntería' }[t.mejora.stat];
          pasos.push({ tipo: 'texto', texto: `Su ${q} sube.` });
          return;
        }
        const golpes = t.golpes ?? 1;
        let total = 0, acertados = 0;
        for (let g = 0; g < golpes; g++) {
          const esquiva = otro.rasgos.includes('astuto') ? 0.05 : 0;
          if (this.r() > t.precision - esquiva) continue;
          acertados++;
          const critico = this.r() < 0.06 + yo.tecnica * 0.002;
          // Golpes y cortes dependen sobre todo de la fuerza; los disparos, de la técnica
          const ataque = (t.efecto === 'disparo' ? yo.tecnica + yo.fuerza * 0.3 : yo.fuerza + yo.tecnica * 0.3) * (1 + yo.mejoras.fuerza);
          const defensa = otro.resistencia * (1 + otro.mejoras.resistencia);
          let dano = t.poder * (ataque / (ataque + defensa)) * (0.5 + yo.nivel * 0.06) * (0.85 + this.r() * 0.15);
          if (critico) dano *= 1.5;
          if (otro.defendiendo) dano *= 0.5;
          if (yo.rasgos.includes('rudo') && t.efecto === 'golpe') dano *= 1.2;
          dano = Math.max(1, Math.round(dano));
          otro.vida = Math.max(0, otro.vida - dano);
          total += dano;
          pasos.push({ tipo: 'ataque', quien: i, efecto: t.efecto }, { tipo: 'dano', quien: j, cantidad: dano, critico });
          if (critico) pasos.push({ tipo: 'texto', texto: '¡Golpe crítico!' });
          if (otro.vida <= 0) break;
        }
        if (!acertados) pasos.push({ tipo: 'texto', texto: `¡${otro.nombre} lo esquiva!` });
        else if (golpes > 1) pasos.push({ tipo: 'texto', texto: `¡${acertados} impactos!` });
        if (t.retroceso && total) {
          const r = Math.max(1, Math.round(total * t.retroceso));
          yo.vida = Math.max(1, yo.vida - r);
          pasos.push({ tipo: 'dano', quien: i, cantidad: r, critico: false }, { tipo: 'texto', texto: `${yo.nombre} también se hace daño.` });
        }
        if (otro.vida <= 0) {
          this.terminado = true;
          pasos.push({ tipo: 'texto', texto: `¡${otro.nombre} cae derrotado!` }, { tipo: 'fin', ganador: i });
        }
      }
    }
  }
}
