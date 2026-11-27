// Reglas del combate por turnos. Sin interfaz: sirve igual para el combate que juega
// el jugador y para el que se simula solo cuando no está (fase 6).
import { azar } from '../arte/lienzo';
import { estadisticasIniciales } from '../datos/progreso';
import { arma, habilidad, habilidadUsable, MEJORA_POR_PUNTO, type Arsenal, type Estadistica } from '../datos/arsenal';
import type { AspectoPersonaje } from '../arte/personajes';
import type { Bando } from '../cuenta';
import {
  TECNICAS_ARMA, TECNICAS_FRUTA, TECNICAS_HABILIDAD, TECNICAS_TIPO, escalarHabilidad,
  type Anim, type Tecnica,
} from './tecnicas';

export interface Luchador {
  nombre: string;
  bando: Bando;
  aspecto: AspectoPersonaje;
  nivel: number;
  rasgos: string[];
  arsenal: Arsenal;
  fruta?: string;
  arma: string;              // id del arma en la mano
  vida: number;
  vidaMax: number;
  energia: number;
  fuerza: number;
  resistencia: number;
  velocidad: number;
  tecnica: number;
  critico: number;
  esquivaBase: number;
  mejoras: { fuerza: number; resistencia: number; velocidad: number };
  pociones: number;      // tragos de grog (curan 25%)
  botiquines: number;    // botiquines (curan 50%)
  // Estado del turno
  bloqueo: number;
  devuelve: number;
  esquiva: number;
  sinGuardia: number;        // turnos con la guardia baja
  cegado: { cantidad: number; turnos: number };
  usadas: Set<string>;
}

export function crearLuchador(d: { nombre: string; bando: Bando; aspecto: AspectoPersonaje; nivel: number; rasgos: string[]; arsenal: Arsenal; fruta?: string; creador?: boolean; bolsa?: { grog: number; botiquin: number } }): Luchador {
  const e = estadisticasIniciales(d.rasgos, d.nivel);
  for (const [k, n] of Object.entries(d.arsenal.mejoras) as [Estadistica, number][]) (e as any)[k] += MEJORA_POR_PUNTO[k].cantidad * n;
  const pasiva = (id: string) => (d.arsenal.equipadas.includes(id) ? d.arsenal.habilidades[id] ?? 0 : 0);
  let vidaMax = Math.round((60 + e.vida * 1.3) * (1 + 0.06 * pasiva('corazon-leon')));
  let resistencia = e.resistencia * (1 + 0.08 * pasiva('piel-hierro')) + (d.arsenal.escudo ? arma(d.arsenal.escudo).dano : 0);
  let fuerza = e.fuerza, tecnica = e.tecnica, velocidad = e.velocidad;
  if (d.creador) { vidaMax *= 3; resistencia *= 3; fuerza *= 3; tecnica *= 3; velocidad *= 3; }
  return {
    nombre: d.nombre, bando: d.bando, aspecto: d.aspecto, nivel: d.nivel, rasgos: d.rasgos, arsenal: d.arsenal, fruta: d.fruta,
    arma: d.arsenal.principal, vida: vidaMax, vidaMax, energia: 100,
    fuerza, resistencia, velocidad, tecnica,
    critico: 0.06 + 0.03 * pasiva('ojo-critico'), esquivaBase: (d.rasgos.includes('astuto') ? 0.05 : 0) + 0.05 * pasiva('pies-ligeros'),
    mejoras: { fuerza: 0, resistencia: 0, velocidad: 0 }, pociones: d.creador ? 9 : d.bolsa?.grog ?? 1, botiquines: d.creador ? 9 : d.bolsa?.botiquin ?? 0,
    bloqueo: 0, devuelve: 0, esquiva: 0, sinGuardia: 0, cegado: { cantidad: 0, turnos: 0 }, usadas: new Set(),
  };
}

// --- Qué puede usar cada luchador

/** Técnicas del arma que tiene en la mano (las de su tipo + la especial del arma). */
export function tecnicasArma(l: Luchador): Tecnica[] {
  const a = arma(l.arma);
  const base = a.tipo === 'escudo' ? TECNICAS_TIPO.punos : TECNICAS_TIPO[a.tipo];
  return a.tecnica ? [...base, TECNICAS_ARMA[a.tecnica]] : base;
}
/** Habilidades equipadas que se pueden usar ahora (las pasivas no salen). */
export function habilidadesActivas(l: Luchador): Tecnica[] {
  return l.arsenal.equipadas
    .map((id) => habilidad(id))
    .filter((h) => h && h.tipo !== 'pasiva' && habilidadUsable(h, { ...l.arsenal, principal: l.arma }))
    .map((h) => escalarHabilidad(TECNICAS_HABILIDAD[h.id], l.arsenal.habilidades[h.id] ?? 1))
    .filter((t) => !(t.efectos?.unaVez && l.usadas.has(t.id)));
}
export const tecnicasFruta = (l: Luchador): Tecnica[] => (l.fruta ? TECNICAS_FRUTA[l.fruta] ?? [] : []);
export const armasParaCambiar = (l: Luchador) => [l.arsenal.principal, l.arsenal.secundaria].filter((x): x is string => !!x);

export type Accion =
  | { tipo: 'tecnica'; tecnica: Tecnica; deArma: boolean }
  | { tipo: 'defender' }
  | { tipo: 'arma'; arma: string }
  | { tipo: 'objeto'; item?: 'grog' | 'botiquin' }
  | { tipo: 'huir' };

/** Lo que pasa en un turno, paso a paso, para que la pantalla lo anime. */
export type Paso =
  | { tipo: 'texto'; texto: string }
  | { tipo: 'anim'; quien: 0 | 1; anim: Anim; mov: 'embestida' | 'salto' | 'quieto' }
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
    const valiente = yo.rasgos.includes('valiente'), prudente = yo.rasgos.includes('prudente');
    const habs = habilidadesActivas(yo).filter((t) => t.energia <= yo.energia);
    const curas = habs.filter((t) => t.efectos?.cura);
    if (yo.vida < yo.vidaMax * (valiente ? 0.15 : 0.3)) {
      if (curas.length) return { tipo: 'tecnica', tecnica: curas[0], deArma: false };
      if (yo.botiquines > 0) return { tipo: 'objeto', item: 'botiquin' };
      if (yo.pociones > 0) return { tipo: 'objeto', item: 'grog' };
    }
    const defensas = habs.filter((t) => t.efectos?.bloqueo || t.efectos?.esquiva);
    if (defensas.length && this.r() < (prudente ? 0.3 : 0.15)) return { tipo: 'tecnica', tecnica: defensas[Math.floor(this.r() * defensas.length)], deArma: false };
    if (yo.energia < 15 && this.r() < 0.5) return { tipo: 'defender' };
    const fruta = tecnicasFruta(yo).filter((t) => t.energia <= yo.energia);
    if (fruta.length && this.r() < 0.45) return { tipo: 'tecnica', tecnica: fruta[Math.floor(this.r() * fruta.length)], deArma: false };
    const apoyo = [...tecnicasArma(yo), ...habs].filter((t) => t.energia <= yo.energia && t.poder === 0 && (t.efectos?.mejora || t.efectos?.cegar));
    if (apoyo.length && this.r() < 0.15) return { tipo: 'tecnica', tecnica: apoyo[Math.floor(this.r() * apoyo.length)], deArma: !!tecnicasArma(yo).find((t) => t.id === apoyo[0].id) };
    const ofensivas = tecnicasArma(yo).filter((t) => t.poder > 0 && t.energia <= yo.energia);
    const t = (otro.vida < otro.vidaMax * 0.35 || valiente) ? [...ofensivas].sort((a, b) => b.poder - a.poder)[0] : ofensivas[Math.floor(this.r() * ofensivas.length)];
    return { tipo: 'tecnica', tecnica: t ?? tecnicasArma(yo)[0], deArma: true };
  }

  /** Resuelve un turno completo con la acción del jugador y la del rival. */
  turno(accionJugador: Accion): Paso[] {
    const pasos: Paso[] = [];
    const acciones: [Accion, Accion] = [accionJugador, this.eleccionIA(1)];
    for (const l of this.l) { l.bloqueo = 0; l.devuelve = 0; l.esquiva = 0; }
    const prioridad = (a: Accion) => (a.tipo !== 'tecnica' ? 2 : a.tecnica.efectos?.prioridad ? 1 : 0);
    const vel = (i: 0 | 1) => this.l[i].velocidad * (1 + this.l[i].mejoras.velocidad) + this.r() * 3;
    const orden: (0 | 1)[] = prioridad(acciones[0]) !== prioridad(acciones[1])
      ? (prioridad(acciones[0]) > prioridad(acciones[1]) ? [0, 1] : [1, 0])
      : vel(0) >= vel(1) ? [0, 1] : [1, 0];
    for (const i of orden) {
      if (this.terminado) break;
      this.ejecutar(i, acciones[i], pasos);
    }
    for (const l of this.l) {
      l.energia = Math.min(100, l.energia + 5);
      if (l.cegado.turnos > 0 && --l.cegado.turnos === 0) l.cegado.cantidad = 0;
      if (l.sinGuardia > 0) l.sinGuardia--;
    }
    return pasos;
  }

  private ejecutar(i: 0 | 1, a: Accion, pasos: Paso[]) {
    const yo = this.l[i], otro = this.l[1 - i] as Luchador;
    const j = (1 - i) as 0 | 1;
    switch (a.tipo) {
      case 'defender':
        yo.bloqueo = 0.5; yo.energia = Math.min(100, yo.energia + 15);
        pasos.push({ tipo: 'texto', texto: `${yo.nombre} se pone en guardia.` });
        return;
      case 'arma':
        yo.arma = a.arma;
        pasos.push({ tipo: 'arma', quien: i }, { tipo: 'texto', texto: `${yo.nombre} saca su ${arma(a.arma).nombre.toLowerCase()}.` });
        return;
      case 'objeto': {
        let item = a.item ?? (yo.pociones > 0 ? 'grog' : 'botiquin');
        if (item === 'grog' && yo.pociones <= 0) item = 'botiquin';
        if (item === 'botiquin' && yo.botiquines <= 0) item = 'grog';
        if (item === 'grog' ? yo.pociones <= 0 : yo.botiquines <= 0) { pasos.push({ tipo: 'texto', texto: `${yo.nombre} busca en la bolsa... ¡no queda nada!` }); return; }
        if (item === 'grog') yo.pociones--; else yo.botiquines--;
        const cura = Math.min(yo.vidaMax - yo.vida, Math.round(yo.vidaMax * (item === 'grog' ? 0.25 : 0.5)));
        yo.vida += cura;
        pasos.push({ tipo: 'texto', texto: item === 'grog' ? `${yo.nombre} bebe un trago de grog.` : `${yo.nombre} se venda las heridas con un botiquín.` }, { tipo: 'anim', quien: i, anim: { forma: 'cura', color: 18 }, mov: 'quieto' }, { tipo: 'cura', quien: i, cantidad: cura });
        return;
      }
      case 'huir': {
        const ok = this.r() < 0.35 + (yo.velocidad - otro.velocidad) * 0.04;
        pasos.push({ tipo: 'texto', texto: ok ? `${yo.nombre} escapa a toda prisa.` : `¡${yo.nombre} no consigue escapar!` });
        if (ok) { this.terminado = true; pasos.push({ tipo: 'fin', ganador: null }); }
        return;
      }
      case 'tecnica': {
        const t = a.tecnica, ef = t.efectos ?? {};
        yo.energia = Math.max(0, yo.energia - t.energia);
        if (ef.unaVez) yo.usadas.add(t.id);
        pasos.push({ tipo: 'texto', texto: `${yo.nombre} usa ${t.nombre}.` });
        pasos.push({ tipo: 'anim', quien: i, anim: t.anim, mov: t.mov ?? (t.poder ? 'embestida' : 'quieto') });
        // Efectos sobre uno mismo
        if (ef.bloqueo) { yo.bloqueo = ef.bloqueo; yo.devuelve = ef.devuelve ?? 0; pasos.push({ tipo: 'texto', texto: `Se prepara para parar el golpe.` }); }
        if (ef.esquiva) { yo.esquiva = ef.esquiva; pasos.push({ tipo: 'texto', texto: `Está listo para esquivar.` }); }
        if (ef.mejora) {
          yo.mejoras[ef.mejora.stat] += ef.mejora.cantidad;
          pasos.push({ tipo: 'texto', texto: `Su ${{ fuerza: 'fuerza', resistencia: 'defensa', velocidad: 'rapidez' }[ef.mejora.stat]} sube.` });
        }
        if (ef.cura || ef.energia) {
          const cura = Math.min(yo.vidaMax - yo.vida, Math.round(yo.vidaMax * (ef.cura ?? 0)));
          yo.vida += cura; yo.energia = Math.min(100, yo.energia + (ef.energia ?? 0));
          if (cura) pasos.push({ tipo: 'cura', quien: i, cantidad: cura });
        }
        if (ef.sinGuardia) yo.sinGuardia = 2;
        if (!t.poder) {
          if (ef.cegar) { otro.cegado = { cantidad: ef.cegar, turnos: 3 }; pasos.push({ tipo: 'texto', texto: `${otro.nombre} casi no ve.` }); }
          return;
        }
        // Ataque
        const multArma = a.deArma ? arma(yo.arma).dano * (1 + 0.1 * ((yo.arsenal.armas[yo.arma] ?? 1) - 1)) : t.dano === 'fruta' ? 1.15 : 1;
        const golpes = t.golpes ?? 1;
        let total = 0, acertados = 0;
        for (let g = 0; g < golpes; g++) {
          const fallo = yo.cegado.cantidad + otro.esquivaBase;
          if (this.r() > t.precision - fallo) continue;
          if (otro.esquiva && this.r() < otro.esquiva) { pasos.push({ tipo: 'texto', texto: `¡${otro.nombre} lo esquiva!` }); otro.esquiva = 0; continue; }
          acertados++;
          const critico = this.r() < yo.critico + yo.tecnica * 0.002;
          const atk = (t.dano === 'disparo' ? yo.tecnica + yo.fuerza * 0.3 : t.dano === 'fruta' ? (yo.fuerza + yo.tecnica) * 0.65 : yo.fuerza + yo.tecnica * 0.3) * (1 + yo.mejoras.fuerza);
          const def = otro.resistencia * (1 + otro.mejoras.resistencia) * (1 - (ef.ignoraDefensa ?? 0));
          let dano = t.poder * (atk / (atk + def)) * (0.5 + yo.nivel * 0.06) * multArma * (0.85 + this.r() * 0.15);
          if (critico) dano *= 1.5;
          if (otro.sinGuardia) dano *= 1.2;
          if (yo.rasgos.includes('rudo') && t.dano === 'golpe') dano *= 1.2;
          const parado = dano * otro.bloqueo;
          dano = Math.max(1, Math.round(dano - parado));
          otro.vida = Math.max(0, otro.vida - dano);
          total += dano;
          pasos.push({ tipo: 'dano', quien: j, cantidad: dano, critico });
          if (critico) pasos.push({ tipo: 'texto', texto: '¡Golpe crítico!' });
          if (otro.bloqueo) pasos.push({ tipo: 'texto', texto: `${otro.nombre} para buena parte del golpe.` });
          if (otro.devuelve && parado) {
            const vuelta = Math.max(1, Math.round((parado + dano) * otro.devuelve));
            yo.vida = Math.max(0, yo.vida - vuelta);
            pasos.push({ tipo: 'anim', quien: j, anim: { forma: 'impacto', tam: 1 }, mov: 'quieto' }, { tipo: 'dano', quien: i, cantidad: vuelta, critico: false }, { tipo: 'texto', texto: `¡Y devuelve el golpe!` });
          }
          if (otro.vida <= 0 || yo.vida <= 0) break;
        }
        if (!acertados && !pasos.some((p) => p.tipo === 'texto' && p.texto.includes('esquiva'))) pasos.push({ tipo: 'texto', texto: `¡Falla!` });
        else if (golpes > 1 && acertados) pasos.push({ tipo: 'texto', texto: `¡${acertados} impactos!` });
        if (ef.cegar && acertados) { otro.cegado = { cantidad: ef.cegar, turnos: 3 }; pasos.push({ tipo: 'texto', texto: `${otro.nombre} casi no ve.` }); }
        if (ef.retroceso && total) {
          const r = Math.max(1, Math.round(total * ef.retroceso));
          yo.vida = Math.max(1, yo.vida - r);
          pasos.push({ tipo: 'dano', quien: i, cantidad: r, critico: false }, { tipo: 'texto', texto: `${yo.nombre} también se hace daño.` });
        }
        const caido = otro.vida <= 0 ? j : yo.vida <= 0 ? i : null;
        if (caido !== null) {
          this.terminado = true;
          pasos.push({ tipo: 'texto', texto: `¡${this.l[caido].nombre} cae derrotado!` }, { tipo: 'fin', ganador: (1 - caido) as 0 | 1 });
        }
      }
    }
  }
}
