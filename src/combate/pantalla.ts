// Pantalla de combate por turnos: el rival al fondo, tu personaje de espaldas delante,
// cuadros de vida y un menú de acciones. Efectos sencillos y de pocos colores.
import { Lienzo } from '../arte/lienzo';
import { C, PALETA } from '../arte/paleta';
import { dibujarPersonaje, dibujarPersonajeEspalda } from '../arte/personajes';
import type { BiomaIsla } from '../mundo/geografia';
import { Combate, armasParaCambiar, habilidadesActivas, tecnicasArma, tecnicasFruta, type Accion, type Luchador, type Paso } from './motor';
import { arma } from '../datos/arsenal';
import { pintarAnim, DURACION_ANIM } from './animaciones';
import type { Anim, Tecnica } from './tecnicas';

const W = 240, H = 160;
const hex = (c: number) => PALETA[c - 1].hex;
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const espera = (ms: number) => new Promise((r) => setTimeout(r, ms));

function aCanvas(L: Lienzo) {
  const cv = document.createElement('canvas');
  cv.width = L.w; cv.height = L.h;
  cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
  return cv;
}

/** Fondo del combate según el tipo de isla. */
function fondo(bioma: BiomaIsla): HTMLCanvasElement {
  const L = new Lienzo(W, H);
  const suelo = { tropical: [C.hoja, C.selva], ciudad: [C.arena, C.maderaClara], nevada: [C.hueso, C.niebla], volcanica: [C.piedra, C.sombraVioleta],
    desierto: [C.arena, C.maderaClara], ruinas: [C.hoja, C.selva], flotante: [C.hoja, C.selva] }[bioma];
  // Cielo con franjas y nubes
  L.rect(0, 0, W, 54, C.bajio);
  L.rect(0, 0, W, 18, C.mar);
  for (let x = 0; x < W; x += 2) { L.px(x, 18, C.bajio); L.px(x + 1, 36, C.espuma); }
  L.rect(0, 37, W, 17, C.espuma);
  for (const [x, y, w] of [[20, 10, 30], [150, 24, 40], [90, 6, 22]]) { L.elipse(x + w / 2, y, w / 2, 4, C.hueso); L.elipse(x + w / 2 + 6, y - 3, w / 4, 3, C.hueso); }
  // Mar al fondo con una isla lejana
  L.rect(0, 54, W, 20, C.mar);
  L.elipse(200, 56, 26, 6, C.hoja); L.elipse(200, 57, 26, 3, C.arena);
  for (let i = 0; i < 30; i++) L.rect((i * 37) % W, 58 + (i * 7) % 14, 4, 1, C.bajio);
  // Suelo
  L.rect(0, 74, W, H - 74, suelo[0]);
  L.rect(0, 74, W, 2, C.arena);
  for (let i = 0; i < 160; i++) L.px((i * 53) % W, 78 + (i * 29) % (H - 80), suelo[1]);
  // Plataformas
  L.elipse(172, 76, 46, 10, suelo[1]); L.elipse(172, 74, 42, 8, suelo[0] === C.hueso ? C.espuma : C.arena);
  L.elipse(72, 146, 60, 13, suelo[1]); L.elipse(72, 144, 56, 11, suelo[0] === C.hueso ? C.espuma : C.arena);
  return aCanvas(L);
}

interface Estado { dx: number; dy: number; visible: boolean; alfa: number }

export async function iniciarCombate(
  jugador: Luchador,
  rival: Luchador,
  opciones: { bioma: BiomaIsla; motivo: string; alTerminar: (ganador: 0 | 1 | null, combate: Combate) => string[] },
) {
  const combate = new Combate(jugador, rival);
  const raiz = document.createElement('div');
  raiz.className = 'combate';
  raiz.innerHTML = `
    <div class="combate-arriba">
      <canvas class="combate-escena" width="${W}" height="${H}"></canvas>
      <div class="combate-info rival"></div>
      <div class="combate-info yo"></div>
      <div class="combate-cortina"></div>
    </div>
    <div class="combate-panel">
      <p class="combate-texto" aria-live="polite"></p>
      <div class="combate-menu"></div>
    </div>`;
  document.body.append(raiz);
  const cv = raiz.querySelector<HTMLCanvasElement>('.combate-escena')!;
  const ctx = cv.getContext('2d')!;
  const texto = raiz.querySelector<HTMLElement>('.combate-texto')!;
  const menu = raiz.querySelector<HTMLElement>('.combate-menu')!;
  const infoRival = raiz.querySelector<HTMLElement>('.combate-info.rival')!;
  const infoYo = raiz.querySelector<HTMLElement>('.combate-info.yo')!;

  const bg = fondo(opciones.bioma);
  const spriteRival = aCanvas(dibujarPersonaje(rival.aspecto));
  const spriteYo = aCanvas(dibujarPersonajeEspalda(jugador.aspecto));
  const est: [Estado, Estado] = [{ dx: -200, dy: 0, visible: true, alfa: 1 }, { dx: 200, dy: 0, visible: true, alfa: 1 }];
  let efectos: { anim: Anim; t0: number; de: 0 | 1 }[] = [];
  const vidaMostrada = [jugador.vida, rival.vida];
  let vivo = true;

  // --- Dibujo
  function pintar(t: number) {
    if (!vivo) return;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(bg, 0, 0);
    const respira = (i: number) => Math.round(Math.sin(t / 500 + i) * 1);
    // Rival (al fondo, ×2)
    if (est[1].visible) {
      ctx.globalAlpha = est[1].alfa;
      ctx.drawImage(spriteRival, 140 + est[1].dx, 12 + est[1].dy + respira(1), 64, 64);
    }
    // Jugador (delante, de espaldas, ×3)
    if (est[0].visible) {
      ctx.globalAlpha = est[0].alfa;
      ctx.drawImage(spriteYo, 24 + est[0].dx, 56 + est[0].dy + respira(0), 96, 96);
    }
    ctx.globalAlpha = 1;
    // Animaciones de los ataques
    const centro = (i: 0 | 1) => (i === 1 ? { x: 172 + est[1].dx, y: 44 + est[1].dy } : { x: 72 + est[0].dx, y: 100 + est[0].dy });
    efectos = efectos.filter((e) => t - e.t0 < DURACION_ANIM);
    for (const e of efectos) pintarAnim(ctx, e.anim, (t - e.t0) / DURACION_ANIM, centro(e.de), centro((1 - e.de) as 0 | 1));
    requestAnimationFrame(pintar);
  }
  requestAnimationFrame(pintar);

  function pintarInfo() {
    const barra = (v: number, max: number) => {
      const p = Math.max(0, v / max);
      return `<span class="cv-barra"><i style="width:${p * 100}%" class="${p < 0.2 ? 'roja' : p < 0.5 ? 'amarilla' : ''}"></i></span>`;
    };
    infoRival.innerHTML = `<b>${esc(rival.nombre)}</b><small>Nv. ${rival.nivel}</small>${barra(vidaMostrada[1], rival.vidaMax)}`;
    infoYo.innerHTML = `<b>${esc(jugador.nombre)}</b><small>Nv. ${jugador.nivel}</small>${barra(vidaMostrada[0], jugador.vidaMax)}
      <span class="cv-num">${Math.round(vidaMostrada[0])} / ${jugador.vidaMax}</span>
      <span class="cv-energia" title="Energía"><i style="width:${jugador.energia}%"></i></span>`;
  }

  // --- Texto con efecto de máquina de escribir; se adelanta al tocar
  let saltar = false;
  raiz.addEventListener('pointerdown', (e) => { if (!(e.target as HTMLElement).closest('.combate-menu')) saltar = true; });
  async function decir(t: string, pausa = 750) {
    texto.textContent = '';
    saltar = false;
    for (let i = 0; i < t.length; i++) {
      if (saltar) { texto.textContent = t; break; }
      texto.textContent = t.slice(0, i + 1);
      await espera(18);
    }
    saltar = false;
    const t0 = performance.now();
    while (performance.now() - t0 < pausa && !saltar) await espera(30);
  }

  async function animarVida(quien: 0 | 1, hasta: number) {
    const desde = vidaMostrada[quien];
    for (let k = 1; k <= 12; k++) { vidaMostrada[quien] = desde + (hasta - desde) * (k / 12); pintarInfo(); await espera(30); }
  }

  async function reproducir(p: Paso) {
    switch (p.tipo) {
      case 'texto': await decir(p.texto); break;
      case 'anim': {
        const s = est[p.quien];
        const dir = p.quien === 0 ? [1, -1] : [-1, 1];
        efectos.push({ anim: p.anim, t0: performance.now(), de: p.quien });
        if (p.mov === 'salto') {
          for (let k = 0; k <= 10; k++) { const f = k / 10; s.dx = dir[0] * Math.sin(f * Math.PI) * 40 * f; s.dy = -Math.sin(f * Math.PI) * 30; await espera(DURACION_ANIM / 12); }
          s.dx = 0; s.dy = 0;
        } else if (p.mov === 'embestida') {
          for (let k = 0; k < 4; k++) { s.dx = dir[0] * k * 5; s.dy = dir[1] * k * 2; await espera(30); }
          for (let k = 3; k >= 0; k--) { s.dx = dir[0] * k * 5; s.dy = dir[1] * k * 2; await espera(30); }
          await espera(DURACION_ANIM - 240);
        } else await espera(DURACION_ANIM);
        break;
      }
      case 'dano': {
        const s = est[p.quien];
        for (let k = 0; k < 6; k++) { s.visible = k % 2 === 1; s.dx = k % 2 ? 2 : -2; await espera(60); }
        s.visible = true; s.dx = 0;
        await animarVida(p.quien, combate.l[p.quien].vida);
        break;
      }
      case 'cura': await animarVida(p.quien, combate.l[p.quien].vida); break;
      case 'arma': { const s = est[p.quien]; for (let k = 0; k < 3; k++) { s.alfa = 0.4; await espera(70); s.alfa = 1; await espera(70); } break; }
      case 'fin': break;
    }
    pintarInfo();
  }

  // --- Menús
  type Vista = 'principal' | 'atacar' | 'habilidad' | 'fruta' | 'arma';
  let enMenu: Tecnica[] = [];
  const botonTecnica = (t: Tecnica, i: number) => `<button data-t="${i}" ${t.energia > jugador.energia ? 'disabled' : ''}><b>${t.nombre}</b><small>${t.poder ? `Poder ${t.poder}${t.golpes ? ` ×${t.golpes}` : ''}` : esc(t.descripcion)} · ${t.energia ? `${t.energia} energía` : 'Gratis'}</small></button>`;
  let menuArma = true;
  function mostrarMenu(vista: Vista) {
    if (vista === 'principal') {
      texto.textContent = `¿Qué hará ${jugador.nombre}?`;
      menu.className = 'combate-menu principal';
      const fruta = tecnicasFruta(jugador).length > 0;
      menu.innerHTML = `
        <button data-m="atacar">Atacar</button><button data-m="habilidad">Habilidad</button>
        ${fruta ? '<button data-m="fruta" class="fruta">Fruta</button>' : ''}
        <button data-m="defender">Defender</button><button data-m="arma">Arma</button>
        <button data-m="objeto">Bolsa <small>${jugador.pociones}</small></button>
        <button data-m="huir" class="huir">Huir</button>`;
      return;
    }
    menu.className = 'combate-menu tecnicas';
    if (vista === 'arma') {
      menu.innerHTML = armasParaCambiar(jugador).map((a) => `<button data-a="${a}" ${a === jugador.arma ? 'disabled' : ''}><b>${arma(a).nombre}</b><small>${a === jugador.arma ? 'En la mano' : 'Gasta el turno'}</small></button>`).join('')
        + '<button data-m="volver" class="volver">← Volver</button>';
      return;
    }
    enMenu = vista === 'atacar' ? tecnicasArma(jugador) : vista === 'habilidad' ? habilidadesActivas(jugador) : tecnicasFruta(jugador);
    menuArma = vista === 'atacar';
    menu.innerHTML = (enMenu.length ? enMenu.map(botonTecnica).join('') : '<p class="vacio-combate">No tienes ninguna equipada.</p>')
      + '<button data-m="volver" class="volver">← Volver</button>';
  }
  let elegir: (a: Accion) => void = () => {};
  menu.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest('button');
    if (!b || b.disabled) return;
    const d = b.dataset;
    if (d.m === 'atacar' || d.m === 'habilidad' || d.m === 'fruta' || d.m === 'arma') mostrarMenu(d.m);
    else if (d.m === 'volver') mostrarMenu('principal');
    else if (d.m === 'defender') elegir({ tipo: 'defender' });
    else if (d.m === 'objeto') elegir({ tipo: 'objeto' });
    else if (d.m === 'huir') elegir({ tipo: 'huir' });
    else if (d.t !== undefined) elegir({ tipo: 'tecnica', tecnica: enMenu[Number(d.t)], deArma: menuArma });
    else if (d.a) elegir({ tipo: 'arma', arma: d.a });
  });

  // --- Entrada: cortina y los dos luchadores deslizándose
  pintarInfo();
  raiz.classList.add('entrando');
  for (let k = 0; k <= 20; k++) { est[0].dx = -200 + k * 10; est[1].dx = 200 - k * 10; await espera(16); }
  raiz.classList.remove('entrando');
  await decir(opciones.motivo, 900);

  // --- Bucle de turnos
  let ganador: 0 | 1 | null = null;
  while (!combate.terminado) {
    mostrarMenu('principal');
    const accion = await new Promise<Accion>((r) => (elegir = r));
    menu.innerHTML = '';
    for (const p of combate.turno(accion)) {
      await reproducir(p);
      if (p.tipo === 'fin') ganador = p.ganador;
    }
  }
  // Derrotado: se hunde y desaparece
  if (ganador !== null) {
    const s = est[1 - ganador];
    for (let k = 0; k < 12; k++) { s.dy += 3; s.alfa = 1 - k / 12; await espera(30); }
    s.visible = false;
  }
  for (const linea of opciones.alTerminar(ganador, combate)) await decir(linea, 1100);
  menu.className = 'combate-menu principal';
  menu.innerHTML = '<button class="salir" data-salir>Volver al mapa</button>';
  await new Promise<void>((r) => menu.querySelector('[data-salir]')!.addEventListener('click', () => r()));
  vivo = false;
  raiz.classList.add('saliendo');
  await espera(250);
  raiz.remove();
}

