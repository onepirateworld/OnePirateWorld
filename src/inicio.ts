// Pantalla principal: el planeta de fondo y la interfaz encima.
import { portada, ruta } from './rutas';
import './estilos.css';
import './inicio.css';
import { Lienzo } from './arte/lienzo';
import { C } from './arte/paleta';
import { dibujarPersonaje, ASPECTO_BASE, PERSONAJES_PRUEBA, type AspectoPersonaje } from './arte/personajes';
import { crearPlaneta, type Planeta } from './mundo/planeta';
import { crearMapa, type Mapa, type Marcador } from './mundo/mapa';
import { botsDelMar, islaDePersonaje, islasDelMundo, nombreZona, posicionBot, type IslaMundo } from './mundo/habitantes';
import { RASGOS } from './datos/caracter';
import { crearPaneles, type IdPanel } from './paneles';
import { crearLuchador } from './combate/motor';
import { arsenalBot } from './datos/arsenal';
import { frutasDelMar } from './mundo/cronica';
import { azar } from './arte/lienzo';
import { arsenalDe, modoCreador } from './cuenta';
import { TEXTO_ACCION, avanzarVida, islasCercanas, mandar, posicionPersonaje, segundosViaje } from './mundo/vida';
import { ZONAS } from './mundo/geografia';
import { iniciarCombate } from './combate/pantalla';
import { actualizarPersonaje, type PersonajeGuardado } from './cuenta';
import type { Bot } from './mundo/habitantes';
import { icono } from './iconos';
import {
  BANDOS, MARES, META_COMUNIDAD, cerrarSesion, cuentaActual, elegirActivo, firmarPacto, marActual,
  personajeActivo, personajes, type Bando,
} from './cuenta';

const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s)!;
/** Estado vivo del personaje activo (lo que hace ahora, dónde está...). */
let miEstado: PersonajeGuardado | null = null;
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

// ---------------------------------------------------------------------------
// Sprites del personaje en la interfaz

function aCanvas(L: Lienzo, escala: number) {
  const cv = document.createElement('canvas');
  cv.width = L.w; cv.height = L.h;
  cv.style.width = `${L.w * escala}px`; cv.style.height = `${L.h * escala}px`;
  cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
  return cv;
}
function cabeza(a: AspectoPersonaje, escala: number) {
  const L = dibujarPersonaje(a);
  const r = new Lienzo(20, 20);
  for (let y = 0; y < 20; y++) for (let x = 0; x < 20; x++) r.px(x, y, L.get(x + 6, y));
  return aCanvas(r, escala);
}

/** Aspectos de muestra para elegir bando (hasta que haya uniformes propios). */
const MUESTRA_BANDO: Record<Bando, AspectoPersonaje> = {
  pirata: PERSONAJES_PRUEBA[1].aspecto,
  marine: { ...ASPECTO_BASE, piel: 'clara', pelo: 'rapado', colorPelo: C.oro, ropa: 'casaca', colorRopa: C.azulMarina, colorFaja: C.hueso,
    pantalon: 'largo', colorPantalon: C.hueso, calzado: 'botas', colorCalzado: C.tinta, sombrero: 'gorro', colorSombrero: C.hueso },
  revolucionario: { ...ASPECTO_BASE, cuerpo: 'mujer', piel: 'oscura', pelo: 'trenza', colorPelo: C.tinta, ropa: 'chaleco', colorRopa: C.selva,
    colorFaja: C.granate, pantalon: 'largo', colorPantalon: C.piedra, calzado: 'botasAltas', colorCalzado: C.corteza,
    sombrero: 'panuelo', colorSombrero: C.selva, accesorios: ['panueloCuello'] },
};

// ---------------------------------------------------------------------------
// Aviso flotante

let temporizadorAviso: number | undefined;
function aviso(texto: string) {
  const el = $('#aviso');
  el.textContent = texto;
  el.hidden = false;
  clearTimeout(temporizadorAviso);
  temporizadorAviso = window.setTimeout(() => (el.hidden = true), 3500);
}

// ---------------------------------------------------------------------------
// Pintar la interfaz según el estado (sin cuenta / sin personaje / con personaje)

function pintar() {
  const cuenta = cuentaActual();
  const p = personajeActivo();
  const mar = MARES.find((m) => m.id === marActual())!;

  $('#nombre-mar').textContent = mar.nombre;
  const total = personajes().length;
  $('#meta-barra').style.width = `${Math.max(4, Math.min(100, (total / META_COMUNIDAD) * 100))}%`;
  $('.meta').title = `Meta de la comunidad: ${total} de ${META_COMUNIDAD} personajes creados`;

  // Botón de perfil
  const bp = $('#btn-perfil');
  bp.innerHTML = cuenta ? `<span class="inicial">${esc(cuenta.nombre[0].toUpperCase())}</span>` : icono('perfil');
  bp.classList.toggle('sin-cuenta', !cuenta);

  // Avatar de la barra inferior
  const av = $('#avatar-nav');
  av.innerHTML = '';
  av.append(cabeza(p ? p.aspecto : ASPECTO_BASE, 2.4));
  $('#texto-mi-pirata').textContent = p ? (p.bando === 'pirata' ? 'Mi pirata' : p.bando === 'marine' ? 'Mi marine' : 'Mi rebelde') : 'Mi pirata';

  // Ficha inferior
  const ficha = $('#ficha');
  ficha.innerHTML = '';
  const marco = document.createElement('div');
  marco.className = 'ficha-avatar';
  marco.append(aCanvas(dibujarPersonaje(p ? p.aspecto : ASPECTO_BASE), 2));
  ficha.append(marco);
  const cuerpo = document.createElement('div');
  cuerpo.className = 'ficha-cuerpo';
  if (!cuenta) {
    cuerpo.innerHTML = `
      <b class="ficha-nombre">Sin personaje</b>
      <span class="ficha-texto">Mira el mundo libremente. Firma el pacto para crear el tuyo.</span>`;
    ficha.append(cuerpo, boton('Firmar el pacto', abrirPacto));
  } else if (!p) {
    cuerpo.innerHTML = `
      <b class="ficha-nombre">¡Hola, ${esc(cuenta.nombre)}!</b>
      <span class="ficha-texto">Crea tu primer pirata, marine o revolucionario.</span>`;
    ficha.append(cuerpo, boton('Crear personaje', abrirPerfil));
  } else {
    cuerpo.innerHTML = `
      <b class="ficha-nombre">${esc(p.nombre)}</b>
      <span class="insignias">
        <span class="insignia bando-${p.bando}">${icono('bandera', '#f2b63d')} ${BANDOS[p.bando].nombre}</span>
        ${p.creador ? '<span class="insignia creador-ins">Creador</span>' : ''}
        <span class="insignia oro">${icono('moneda', '#f2b63d')} ${p.creador ? '∞' : p.doblones}</span>
        <span class="insignia">Nv. ${p.nivel}</span>
      </span>
      <button class="ficha-lugar" id="ficha-lugar">${icono('diana', '#f2b63d')} <span id="ficha-lugar-texto">En ${esc(islaDePersonaje(p).nombre)} · ${esc(nombreZona(islaDePersonaje(p).zona))}</span></button>`;
    const momentos = boton('', () => paneles.abrir('mi-pirata'));
    momentos.classList.add('momentos');
    momentos.title = 'Momentos clave pendientes';
    momentos.innerHTML = '<span class="chispa">✦</span><span class="cuenta">0</span>';
    const accion = document.createElement('button');
    accion.className = 'ficha-accion'; accion.id = 'ficha-accion';
    const ordenes = document.createElement('div');
    ordenes.className = 'ordenes'; ordenes.id = 'ordenes';
    ordenes.innerHTML = `
      <button data-orden="navegar"><span>⛵</span>Navegar</button>
      <button data-orden="pelear"><span>⚔</span>Pelear</button>
      <button data-orden="entrenar"><span>💪</span>Entrenar</button>
      <button data-orden="explorar"><span>🔍</span>Explorar</button>
      <button data-orden="descansar"><span>💤</span>Descansar</button>`;
    ficha.append(cuerpo, momentos, accion, ordenes);
    lineaAccion();
  }
}

function boton(texto: string, fn: () => void) {
  const b = document.createElement('button');
  b.className = 'boton-oro';
  b.textContent = texto;
  b.addEventListener('click', fn);
  return b;
}

// ---------------------------------------------------------------------------
// Diálogos

function abrir(id: string) { $<HTMLDialogElement>(id).showModal(); }
document.querySelectorAll('[data-cerrar]').forEach((b) => b.addEventListener('click', () => (b.closest('dialog') as HTMLDialogElement).close()));
document.querySelectorAll('dialog').forEach((d) => d.addEventListener('click', (e) => { if (e.target === d) d.close(); }));

function abrirPacto() {
  abrir('#dlg-pacto');
  $<HTMLInputElement>('#pacto-nombre').focus();
}
function completarPacto(metodo: 'google' | 'correo') {
  const nombre = $<HTMLInputElement>('#pacto-nombre').value.trim();
  if (!nombre) { $<HTMLInputElement>('#pacto-nombre').reportValidity(); return; }
  const correo = $<HTMLInputElement>('#pacto-correo').value.trim();
  if (metodo === 'correo' && !$<HTMLInputElement>('#pacto-correo').checkValidity()) { $<HTMLInputElement>('#pacto-correo').reportValidity(); return; }
  if (metodo === 'correo' && !correo) { $<HTMLInputElement>('#pacto-correo').focus(); return; }
  firmarPacto(nombre, metodo, correo || undefined);
  $<HTMLDialogElement>('#dlg-pacto').close();
  aviso(`¡Pacto firmado! Bienvenido a los mares, ${nombre}.`);
  pintar();
  abrirPerfil();
}
$('#pacto-google').addEventListener('click', () => completarPacto('google'));
$('#pacto-correo-btn').addEventListener('click', () => completarPacto('correo'));
$('#form-pacto').addEventListener('submit', (e) => { e.preventDefault(); completarPacto('google'); });

function abrirPerfil() {
  const cuenta = cuentaActual();
  if (!cuenta) { abrirPacto(); return; }
  $('#perfil-titulo').textContent = cuenta.nombre;
  const lista = $('#perfil-lista');
  const ps = personajes();
  const activo = personajeActivo();
  lista.innerHTML = ps.length ? '<h3>Tus personajes</h3>' : '<p>Todavía no tienes personajes.</p>';
  for (const p of ps) {
    const fila = document.createElement('button');
    fila.className = `fila-personaje ${activo?.id === p.id ? 'activo' : ''}`;
    fila.append(cabeza(p.aspecto, 2));
    fila.insertAdjacentHTML('beforeend', `<span><b>${esc(p.nombre)}</b><small>${BANDOS[p.bando].nombre} · Nv. ${p.nivel}</small></span>${activo?.id === p.id ? '<em>En juego</em>' : ''}`);
    fila.addEventListener('click', () => { elegirActivo(p.id); pintar(); abrirPerfil(); });
    lista.append(fila);
  }
  const bandos = $('#perfil-bandos');
  bandos.innerHTML = '';
  for (const b of Object.keys(BANDOS) as Bando[]) {
    const a = document.createElement('a');
    a.className = `bando bando-${b}`;
    a.href = ruta(`nuevo/index.html?bando=${b}&mar=${marActual()}`);
    a.append(aCanvas(dibujarPersonaje(MUESTRA_BANDO[b]), 2));
    a.insertAdjacentHTML('beforeend', `<b>${BANDOS[b].nombre}</b><small>${BANDOS[b].descripcion}</small>`);
    bandos.append(a);
  }
  if (!$<HTMLDialogElement>('#dlg-perfil').open) abrir('#dlg-perfil');
}
$('#cerrar-sesion').addEventListener('click', () => { cerrarSesion(); $<HTMLDialogElement>('#dlg-perfil').close(); pintar(); aviso('Sesión cerrada.'); });

function abrirMares() {
  const actual = marActual();
  $('#lista-mares').innerHTML = MARES.map((m) => `
    <a class="mar ${m.id === actual ? 'actual' : ''}" href="${portada(`?mar=${m.id}`)}">
      <b>${m.nombre}</b><small>${m.id === actual ? 'Estás aquí' : `Mar ${m.id}`}</small>
    </a>`).join('');
  abrir('#dlg-mares');
}

// ---------------------------------------------------------------------------
// Botones

$('#btn-mapa').innerHTML = icono('mapa', '#5cc3d8');
$('#ico-brujula').innerHTML = icono('brujula', '#f2b63d');
$('#btn-envivo').innerHTML = icono('envivo', '#e77b33');
$('#btn-globo').innerHTML = icono('globo');
$('#btn-guia').innerHTML = icono('guia', '#f2b63d');
document.querySelectorAll<HTMLElement>('[data-ico]').forEach((el) => (el.innerHTML = icono(el.dataset.ico!, '#f2b63d')));

$('#btn-perfil').addEventListener('click', abrirPerfil);

$('#btn-mar').addEventListener('click', abrirMares);
$('#btn-mapa').addEventListener('click', () => { if (!mapa?.visible) abrirMapa(); });
$('#btn-localizar').innerHTML = icono('diana', '#f2b63d');
$('#btn-localizar').addEventListener('click', localizar);
document.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('#ficha-lugar')) localizar(); });
const paneles = crearPaneles({
  aviso, localizar: () => localizar(), abrirPerfil: () => abrirPerfil(), abrirMares: () => abrirMares(),
  cerrarSesion: () => { cerrarSesion(); pintar(); aviso('Sesión cerrada.'); }, rutaGaleria: ruta('galeria/index.html'),
  entrenar: () => {
    const p = personajeActivo();
    if (!p) return;
    const rivales = botsDelMar(marActual()).filter((b) => esRival(p.bando, b.bando));
    const bot = rivales[Math.floor(Math.random() * rivales.length)];
    pelearCon(bot, `${bot.nombre} acepta un combate de entrenamiento. ¡En guardia!`);
  },
});
$('#btn-envivo').addEventListener('click', () => paneles.abrir('en-vivo'));
$('#btn-guia').addEventListener('click', () => paneles.abrir('guia'));
document.querySelectorAll<HTMLButtonElement>('.barra-inf [data-panel]').forEach((b) => b.addEventListener('click', () => {
  const id = b.dataset.panel as IdPanel;
  if (paneles.actual === id) paneles.cerrar(); else paneles.abrir(id);
}));
$('#btn-globo').addEventListener('click', () => (mapa?.visible ? volverAlGlobo() : aviso('Arrastra para girar el planeta. Pellizca o usa la rueda para acercarte.')));


// ---------------------------------------------------------------------------
// Arranque

const enModoCreador = modoCreador();   // ?modo=creador lo activa en este navegador
pintar();
const params = new URLSearchParams(location.search);
if (params.get('modo') === 'creador' && enModoCreador) aviso('Modo creador activado en este navegador. Tus nuevos personajes saldrán con todo al máximo.');
if (params.has('pacto')) abrirPacto();
if (params.has('perfil')) abrirPerfil();
if (params.has('creado')) aviso('¡Tu personaje ya navega por el mundo!');

// ---------------------------------------------------------------------------
// Planeta, mapa y personajes

let planeta: Planeta | null = null;
let mapa: Mapa | null = null;
let cabezaMia: { id: string; cv: HTMLCanvasElement } | null = null;

/** Todos los personajes visibles en este mar: los bots y tu personaje. */
function marcadores(): Marcador[] {
  const ahora = Date.now();
  const lista: Marcador[] = botsDelMar(marActual()).map((b) => ({
    id: b.id, nombre: b.apodo ? `${b.nombre} «${b.apodo}»` : b.nombre, bando: b.bando, aspecto: b.aspecto,
    posicion: posicionBot(b, ahora), barco: b.barco, esMio: false,
  }));
  const p = personajeActivo();
  const yo = miEstado && cuentaActual() && p?.id === miEstado.id ? miEstado : null;
  if (yo) {
    const tipo = yo.accion?.tipo ?? 'pasear';
    lista.push({ id: yo.id, nombre: yo.nombre, bando: yo.bando, aspecto: yo.aspecto, barco: yo.barco ?? 'barca', esMio: true,
      posicion: posicionPersonaje(yo, ahora), quieto: tipo === 'entrenar' || tipo === 'descansar', actividad: TEXTO_ACCION[tipo] });
  }
  return lista;
}

function abrirMapa(lat?: number, lon?: number, zoom?: number) {
  if (!planeta || !mapa) return;
  const c = lat === undefined ? planeta.centroVista() : { lat, lon: lon! };
  planeta.pausar();
  document.body.classList.add('en-mapa');
  $('#btn-globo').classList.remove('activo');
  $('#btn-mapa').classList.add('activo');
  mapa.mostrar(c.lat, c.lon, zoom);
}
function volverAlGlobo(lat?: number, lon?: number) {
  if (!planeta || !mapa) return;
  mapa.ocultar();
  ocultarTarjeta();
  document.body.classList.remove('en-mapa');
  $('#btn-globo').classList.add('activo');
  $('#btn-mapa').classList.remove('activo');
  planeta.reanudar();
  if (lat !== undefined) planeta.irA(lat, lon!, 2.7);
}
function localizar() {
  const p = miEstado ?? personajeActivo();
  if (!p || !cuentaActual()) { aviso('Aún no tienes personaje. Firma el pacto y crea uno.'); return; }
  const isla = islaDePersonaje(p);
  mapa?.seguir(p.id);
  const mio = marcadores().find((m) => m.esMio)!;
  const sitio = mapa!.posicionDe(mio);
  const zoom = mapa!.zoomIsla(isla);
  if (mapa?.visible) mapa.centrarEn(sitio.lat, sitio.lon, zoom);
  else planeta?.irA(isla.lat, isla.lon, 2.3, () => abrirMapa(sitio.lat, sitio.lon, zoom));
  const navegando = p.accion?.tipo === 'viajar' && Date.now() < p.accion.hasta;
  if (!navegando) setTimeout(() => encuentroAutomatico(p), 2200);
  aviso(navegando ? `${p.nombre} navega hacia ${islasDelMundo()[p.accion!.destino!].nombre}.` : `${p.nombre} está en ${isla.nombre} (${nombreZona(isla.zona)}).`);
}

// ---------------------------------------------------------------------------
// Combates

const esRival = (a: Bando, b: Bando) => (a === 'marine') !== (b === 'marine');
let combatiendo = false;

/** Si hay un enemigo en tu isla, salta el combate (como mucho uno cada 10 minutos). */
function encuentroAutomatico(p: PersonajeGuardado) {
  if (combatiendo) return;
  let ultimo = 0;
  try { ultimo = Number(localStorage.getItem('ultimoEncuentro') ?? 0); } catch { /* nada */ }
  if (Date.now() - ultimo < 10 * 60_000) return;
  const isla = islaDePersonaje(p);
  const rival = botsDelMar(marActual()).find((b) => { const pos = posicionBot(b); return !pos.navegando && pos.islaId === isla.id && esRival(p.bando, b.bando); });
  if (!rival) return;
  try { localStorage.setItem('ultimoEncuentro', String(Date.now())); } catch { /* nada */ }
  const quien = rival.bando === 'marine' ? 'Un marine' : rival.bando === 'pirata' ? 'Un pirata buscado' : 'Un revolucionario';
  pelearCon(rival, `¡${quien} te ha visto! ${rival.nombre} te corta el paso.`);
}

async function pelearCon(bot: Bot, motivo: string) {
  const p = personajeActivo();
  if (!p || combatiendo) return;
  combatiendo = true;
  let h = 0; for (const ch of bot.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  // Enemigos adaptados: cerca de tu nivel para que un personaje nuevo pueda ganar
  const nivelRival = Math.max(1, p.nivel + (h % 3) - 1);
  const jugador = crearLuchador({ nombre: p.nombre, bando: p.bando, aspecto: p.aspecto, nivel: p.nivel, rasgos: p.rasgos, arsenal: arsenalDe(p), fruta: p.fruta, creador: p.creador });
  const frutaBot = [...frutasDelMar(marActual()).entries()].find(([, id]) => id === bot.id)?.[0];
  const rival = crearLuchador({ nombre: bot.nombre, bando: bot.bando, aspecto: bot.aspecto, nivel: nivelRival, rasgos: bot.rasgos, arsenal: arsenalBot(nivelRival, azar(h)), fruta: frutaBot });
  const isla = islaDePersonaje(p);
  await iniciarCombate(jugador, rival, {
    bioma: isla.bioma, motivo,
    alTerminar: (ganador) => {
      const yo = personajeActivo()!;
      const registro = [...(yo.registro ?? [])];
      const lineas: string[] = [];
      let { nivel, doblones } = yo;
      let xp = yo.xp ?? 0;
      if (ganador === 0) {
        const ganaXp = 20 + 5 * nivelRival, ganaOro = 40 + 10 * nivelRival;
        xp += ganaXp; doblones += ganaOro;
        lineas.push(`¡${yo.nombre} gana el combate!`, `+${ganaXp} de experiencia y +${ganaOro} doblones.`);
        while (xp >= 50 * nivel * nivel) { xp -= 50 * nivel * nivel; nivel++; lineas.push(`¡${yo.nombre} sube a nivel ${nivel}!`); }
        registro.push([Date.now(), `Venció a ${bot.nombre} en ${isla.nombre}.`]);
      } else if (ganador === 1) {
        const pierde = Math.floor(doblones * 0.1);
        doblones -= pierde; xp += 5;
        lineas.push(`${yo.nombre} ha perdido...`, `Pierde ${pierde} doblones y vuelve a curarse.`);
        registro.push([Date.now(), `Perdió un combate contra ${bot.nombre} en ${isla.nombre}. Se curó las heridas y juró revancha.`]);
      } else {
        registro.push([Date.now(), `Escapó por los pelos de ${bot.nombre}.`]);
      }
      actualizarPersonaje({ ...yo, nivel, xp, doblones, registro: registro.slice(-30) });
      return lineas;
    },
  });
  combatiendo = false;
  pintar();
}

// Tarjeta al tocar un personaje o una isla del mapa
function ocultarTarjeta() { $('#tarjeta').hidden = true; }
function mostrarTarjeta(m: Marcador | null, isla: IslaMundo | null) {
  const t = $('#tarjeta');
  if (!m && !isla) { t.hidden = true; return; }
  t.innerHTML = '';
  if (m) {
    const bot = botsDelMar(marActual()).find((b) => b.id === m.id);
    const p = m.esMio ? personajeActivo() : null;
    const rasgos = (bot?.rasgos ?? p?.rasgos ?? []).map((id) => RASGOS.find((r) => r.id === id)?.nombre).filter(Boolean).join(', ');
    const lugar = m.posicion.navegando ? 'Navegando' : `En ${islasDelMundo()[m.posicion.islaId!].nombre}`;
    t.append(aCanvas(dibujarPersonaje(m.aspecto), 2));
    t.insertAdjacentHTML('beforeend', `<div>
      <b>${esc(m.nombre)}${m.esMio ? ' <em>(tú)</em>' : ''}</b>
      <span class="${'bando-' + m.bando}">${BANDOS[m.bando].nombre} · Nv. ${bot?.nivel ?? p?.nivel ?? 1}</span>
      <small>${esc(lugar)}${rasgos ? ` · ${esc(rasgos)}` : ''}</small>
      ${p?.sueno ? `<small class="sueno-txt">Sueño: ${esc(p.sueno)}</small>` : ''}
    </div>`);
    const mio = cuentaActual() ? personajeActivo() : null;
    if (bot && mio && !m.posicion.navegando) {
      const b = document.createElement('button');
      b.className = 'boton-oro boton-pelear';
      b.textContent = esRival(mio.bando, bot.bando) ? '¡Pelear!' : 'Retar';
      b.addEventListener('click', () => { ocultarTarjeta(); pelearCon(bot, `¡${mio.nombre} se planta delante de ${bot.nombre}!`); });
      t.append(b);
    }
  } else if (isla) {
    const biomas: Record<string, string> = { tropical: 'Tropical', nevada: 'Nevada', volcanica: 'Volcánica', desierto: 'Desierto', flotante: 'Flotante', ciudad: 'Ciudad', ruinas: 'Ruinas' };
    const especial = { base: 'Hay una base de la marina.', taberna: 'Tiene taberna.', maestro: 'Dicen que aquí vive un maestro.', tesoro: 'Se habla de un tesoro escondido.' };
    const aqui = marcadores().filter((x) => !x.posicion.navegando && x.posicion.islaId === isla.id).length;
    t.insertAdjacentHTML('beforeend', `<div>
      <b>${esc(isla.nombre)}</b>
      <span>${biomas[isla.bioma]} · ${esc(nombreZona(isla.zona))}</span>
      <small>${isla.especial ? especial[isla.especial] + ' ' : ''}${aqui ? `${aqui} personaje${aqui > 1 ? 's' : ''} aquí ahora.` : 'Nadie a la vista.'}</small>
    </div>`);
    const yo = miEstado;
    if (yo && cuentaActual() && !navegandoAhora(yo) && islaDePersonaje(yo).id !== isla.id) {
      const b = document.createElement('button');
      b.className = 'boton-oro boton-pelear';
      b.textContent = `⛵ Navegar aquí (${mmss(segundosViaje(islaDePersonaje(yo), isla) * 1000)})`;
      b.addEventListener('click', () => { ocultarTarjeta(); zarpar(isla); });
      t.append(b);
    }
  }
  const cerrar = document.createElement('button');
  cerrar.className = 'tarjeta-cerrar'; cerrar.textContent = '✕'; cerrar.setAttribute('aria-label', 'Cerrar');
  cerrar.addEventListener('click', ocultarTarjeta);
  t.append(cerrar);
  t.hidden = false;
}

// ---------------------------------------------------------------------------
// La vida del personaje: avanza sola y el jugador puede mandarle

const mmss = (ms: number) => { const s = Math.max(0, Math.round(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

function refrescarVida(primera = false) {
  const p = cuentaActual() ? personajeActivo() : null;
  if (!p) { miEstado = null; return; }
  const antes = miEstado?.nivel;
  const { p: nuevo, resumen } = avanzarVida(p);
  miEstado = nuevo;
  if (primera && resumen.length) {
    $('#resumen-lista').innerHTML = resumen.slice(-12).map((r) => `<li>${esc(nuevo.nombre)} ${esc(r)}.</li>`).join('')
      + (resumen.length > 12 ? `<li>…y ${resumen.length - 12} cosas más (míralo en su diario).</li>` : '');
    abrir('#dlg-resumen');
  } else if (resumen.length) aviso(`${nuevo.nombre} ${resumen[resumen.length - 1]}.`);
  if (antes !== undefined && antes !== nuevo.nivel) pintar();
  lineaAccion();
}

function lineaAccion() {
  const el = document.querySelector<HTMLElement>('#ficha-accion');
  const p = miEstado;
  if (!el || !p?.accion) return;
  const a = p.accion;
  const falta = mmss(a.hasta - Date.now());
  const detalle = a.tipo === 'viajar' ? `hacia ${islasDelMundo()[a.destino!].nombre}` : `en ${islaDePersonaje(p).nombre}`;
  el.innerHTML = `<span>${TEXTO_ACCION[a.tipo]} ${esc(detalle)} <small>(${falta})${a.mandada ? '' : ' · decide solo'}</small></span><b>¿Qué hace? ›</b>`;
  const lugar = document.querySelector('#ficha-lugar-texto');
  const isla = islaDePersonaje(p);
  if (lugar) lugar.textContent = a.tipo === 'viajar' ? `Navegando hacia ${islasDelMundo()[a.destino!].nombre}` : `En ${isla.nombre} · ${nombreZona(isla.zona)}`;
}

const navegandoAhora = (p: PersonajeGuardado) => p.accion?.tipo === 'viajar' && Date.now() < p.accion.hasta;
let eligiendoDestino = false;

function zarpar(destino: IslaMundo) {
  const p = miEstado;
  if (!p) return;
  if (navegandoAhora(p)) { aviso(`${p.nombre} ya está navegando. Espera a que llegue.`); return; }
  if (destino.id === islaDePersonaje(p).id) { aviso(`${p.nombre} ya está en ${destino.nombre}. Toca otra isla.`); return; }
  miEstado = mandar(p, 'viajar', destino);
  eligiendoDestino = false;
  document.body.classList.remove('eligiendo-destino');
  lineaAccion();
  const peligro = ZONAS[destino.zona].nivelMinimo > p.nivel;
  aviso(`${p.nombre} zarpa hacia ${destino.nombre}.${peligro ? ' ¡Cuidado, es una zona de nivel alto!' : ''}`);
  if (mapa?.visible) mapa.seguir(p.id); else localizar();
}

/** Las órdenes directas de la ficha. */
function ordenar(orden: string) {
  const p = miEstado;
  if (!p) return;
  if (navegandoAhora(p)) { aviso(`${p.nombre} está navegando: no puede hacer otra cosa hasta llegar.`); return; }
  const isla = islaDePersonaje(p);
  if (orden === 'navegar') { abrirDecidir('navegar'); return; }
  if (orden === 'pelear') {
    const rival = botsDelMar(marActual()).find((b) => { const pos = posicionBot(b); return !pos.navegando && pos.islaId === isla.id && esRival(p.bando, b.bando); });
    if (!rival) { aviso(`No hay rivales en ${isla.nombre}. Prueba a navegar a otra isla.`); return; }
    pelearCon(rival, `${p.nombre} busca pelea y encuentra a ${rival.nombre}.`);
    return;
  }
  miEstado = mandar(p, orden as 'entrenar' | 'explorar' | 'descansar');
  lineaAccion();
  aviso(`${p.nombre}: ¡a ${orden === 'entrenar' ? 'entrenar' : orden === 'explorar' ? 'explorar' : 'descansar'}!`);
}
document.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-orden]');
  if (b) ordenar(b.dataset.orden!);
});

function abrirDecidir(modo: 'todo' | 'navegar' = 'todo') {
  const p = miEstado;
  if (!p) return;
  const isla = islaDePersonaje(p);
  const a = p.accion!;
  const navegando = a.tipo === 'viajar' && Date.now() < a.hasta;
  const rivales = botsDelMar(marActual()).filter((b) => { const pos = posicionBot(b); return !pos.navegando && pos.islaId === isla.id && esRival(p.bando, b.bando); });
  const cuerpo = $('#decidir-cuerpo');
  if (modo === 'navegar') {
    $('#dlg-decidir h2').textContent = '¿A dónde navega?';
    cuerpo.innerHTML = `<p>Elige una isla cercana o <b>toca cualquier isla del mapa</b>.</p>
      <div class="destinos">${islasCercanas(isla, 8).map((d) => {
        const peligro = ZONAS[d.zona].nivelMinimo > p.nivel;
        return `<button data-zarpar="${d.id}"><b>${esc(d.nombre)}</b><small>${esc(nombreZona(d.zona))} · ${mmss(segundosViaje(isla, d) * 1000)} de viaje${peligro ? ` · <span class="peligro">⚠ nivel ${ZONAS[d.zona].nivelMinimo}</span>` : ''}</small></button>`;
      }).join('')}</div>
      <button class="boton-grande" id="elegir-en-mapa" style="margin-top:10px">🗺 Elegir en el mapa</button>`;
    cuerpo.querySelector('#elegir-en-mapa')!.addEventListener('click', () => {
      $<HTMLDialogElement>('#dlg-decidir').close();
      eligiendoDestino = true;
      document.body.classList.add('eligiendo-destino');
      // Alejamos el mapa para que se vean las islas de alrededor
      const zoomVer = (mapa?.zoomIsla(isla) ?? 200) / 16;
      mapa?.seguir(null);
      if (!mapa?.visible) abrirMapa(isla.lat, isla.lon, zoomVer); else mapa.centrarEn(isla.lat, isla.lon, zoomVer);
      aviso('Toca la isla a la que quieres navegar.');
    });
    cuerpo.querySelectorAll<HTMLButtonElement>('[data-zarpar]').forEach((b) => b.addEventListener('click', () => {
      $<HTMLDialogElement>('#dlg-decidir').close();
      zarpar(islasDelMundo()[Number(b.dataset.zarpar)]);
    }));
    abrir('#dlg-decidir');
    return;
  }
  $('#dlg-decidir h2').textContent = '¿Qué hace?';
  cuerpo.innerHTML = `
    <p>Ahora: <b>${TEXTO_ACCION[a.tipo]}</b> ${a.tipo === 'viajar' ? `hacia ${esc(islasDelMundo()[a.destino!].nombre)}` : `en ${esc(isla.nombre)}`} (${mmss(a.hasta - Date.now())}).
      ${a.mandada ? 'Se lo has mandado tú.' : 'Lo ha decidido él solo.'}</p>
    ${navegando ? '<p class="nota-prueba">Está navegando: no puede hacer otra cosa hasta llegar.</p>' : `
    <div class="opciones-decidir">
      <button data-hacer="entrenar"><b>Entrenar</b><small>Gana experiencia</small></button>
      <button data-hacer="explorar"><b>Explorar</b><small>Puede encontrar doblones o rumores</small></button>
      <button data-hacer="descansar"><b>Descansar</b><small>Recupera fuerzas</small></button>
      <button data-hacer="pelear" ${rivales.length ? '' : 'disabled'}><b>Buscar pelea</b><small>${rivales.length ? `${rivales.length} rival${rivales.length > 1 ? 'es' : ''} en la isla` : 'No hay rivales aquí'}</small></button>
      <button data-hacer="solo"><b>Que decida solo</b><small>Según su carácter</small></button>
    </div>
    <h3>Zarpar hacia...</h3>
    <div class="destinos">${islasCercanas(isla).map((d) => {
      const peligro = ZONAS[d.zona].nivelMinimo > p.nivel;
      return `<button data-zarpar="${d.id}"><b>${esc(d.nombre)}</b><small>${esc(nombreZona(d.zona))} · ${mmss(segundosViaje(isla, d) * 1000)} de viaje${peligro ? ` · <span class="peligro">⚠ nivel ${ZONAS[d.zona].nivelMinimo}</span>` : ''}</small></button>`;
    }).join('')}</div>`}`;
  cuerpo.querySelectorAll<HTMLButtonElement>('[data-hacer]').forEach((b) => b.addEventListener('click', () => {
    const que = b.dataset.hacer!;
    $<HTMLDialogElement>('#dlg-decidir').close();
    if (que === 'pelear') { pelearCon(rivales[0], `${p.nombre} busca pelea y encuentra a ${rivales[0].nombre}.`); return; }
    if (que === 'solo') { miEstado = { ...p, accion: { ...a, hasta: Date.now(), mandada: false } }; actualizarPersonaje(miEstado); refrescarVida(); aviso(`${p.nombre} decidirá por su cuenta.`); return; }
    miEstado = mandar(p, que as 'entrenar' | 'explorar' | 'descansar');
    lineaAccion();
    aviso(`${p.nombre}: ${TEXTO_ACCION[que as 'entrenar'].toLowerCase()}.`);
  }));
  cuerpo.querySelectorAll<HTMLButtonElement>('[data-zarpar]').forEach((b) => b.addEventListener('click', () => {
    $<HTMLDialogElement>('#dlg-decidir').close();
    zarpar(islasDelMundo()[Number(b.dataset.zarpar)]);
  }));
  abrir('#dlg-decidir');
}
document.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('#ficha-accion')) abrirDecidir(); });

refrescarVida(true);
setInterval(() => refrescarVida(), 2000);

requestAnimationFrame(() => {
  planeta = crearPlaneta($('#mundo'), $('#etiquetas'), {
    alAcercar: (cerca) => { if (cerca && !mapa?.visible) abrirMapa(); },
    marcadores: () => marcadores().map((m) => {
      if (m.esMio && cabezaMia?.id !== m.id) cabezaMia = { id: m.id, cv: cabeza(m.aspecto, 1.4) };
      return { id: m.id, lat: m.posicion.lat, lon: m.posicion.lon, esMio: m.esMio,
        color: m.bando === 'pirata' ? '#e88ba0' : m.bando === 'marine' ? '#5cc3d8' : '#8cc85a', cabeza: m.esMio ? cabezaMia!.cv : undefined };
    }),
  });
  mapa = crearMapa($('#mapa'), islasDelMundo(), {
    marcadores,
    alAlejar: (lat, lon) => volverAlGlobo(lat, lon),
    alTocar: (m, isla) => {
      if (eligiendoDestino && isla) { zarpar(isla); return; }
      mostrarTarjeta(m, isla);
    },
  });
  if (params.has('creado')) setTimeout(localizar, 1200);
});
