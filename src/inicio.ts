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
import { arsenalDe, migrarLocales, modoCreador, personajesDeOtros } from './cuenta';
import { iniciar as iniciarServidor } from './servidor';
import { contarVictoria, ganarOro, ganarXp, volverConTripulacion } from './mundo/vida';
import { botsDeTripulaciones, tripulacionesDelMar } from './mundo/tripulaciones';
import { TEXTO_ACCION, avanzarVida, islasCercanas, mandar, posicionPersonaje, segundosViaje } from './mundo/vida';
import { ZONAS } from './mundo/geografia';
import { iniciarCombate } from './combate/pantalla';
import { actualizarPersonaje, type PersonajeGuardado } from './cuenta';
import type { Bot } from './mundo/habitantes';
import { icono } from './iconos';
import { abrirCartel } from './cartel';
import { bolsaDe } from './datos/tienda';
/** Furia revolucionaria (desde nivel 10, +50% de daño contra piratas y marines). */
const NIVEL_FURIA = 10, BONO_FURIA = 0.5;
import { nivelGuardian, PISTAS_NECESARIAS, frutaSigueLibre, ganarMeritos, ganarRecompensa, guardianAqui, islaDeBusqueda, meritosPorCaptura, nombreFruta, recompensaPorVictoria } from './mundo/busqueda';
import { aspectoAlAzar } from './arte/personajes';
import { dibujarFruta } from './arte/frutas';
import { FRUTAS } from './datos/frutas';
import { formatoDoblones } from './mundo/cronica';
import { duelosRecibidos, guardarAhora, marcarDuelosVistos, misDuelosDeHoy, registrarDuelo } from './servidor';
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
  bp.innerHTML = cuenta ? `<span class="inicial">${esc((personajeActivo()?.nombre ?? '⚓')[0].toUpperCase())}</span>` : icono('perfil');
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
      <b class="ficha-nombre">¡Hola, marinero!</b>
      <span class="ficha-texto">Crea tu primer pirata, marine o revolucionario.</span>`;
    ficha.append(cuerpo, boton('Crear personaje', abrirPerfil));
  } else {
    cuerpo.innerHTML = `
      <div class="ficha-nombre-fila"><b class="ficha-nombre">${esc(p.nombre)}</b><button class="btn-hoja" id="btn-hoja" title="Ver hoja de vida">📜 Ver</button></div>
      <span class="insignias">
        <span class="insignia bando-${p.bando}">${icono('bandera', '#f2b63d')} ${BANDOS[p.bando].nombre}</span>
        ${p.creador ? '<span class="insignia creador-ins">Creador</span>' : ''}
        <span class="insignia oro">${icono('moneda', '#f2b63d')} ${p.creador ? '∞' : p.doblones}</span>
        <span class="insignia">Nv. ${p.nivel}</span>
      </span>
      <button class="ficha-lugar" id="ficha-lugar">${icono('diana', '#f2b63d')} <span id="ficha-lugar-texto">En ${esc(islaDePersonaje(p).nombre)} · ${esc(nombreZona(islaDePersonaje(p).zona))}</span></button>`;
    const pendiente = p.busqueda && (p.busqueda.vencido || p.busqueda.pistas >= PISTAS_NECESARIAS) ? 1 : 0;
    const momentos = boton('', () => (p.busqueda?.vencido ? abrirComerFruta() : paneles.abrir('mi-pirata')));
    momentos.classList.add('momentos');
    momentos.classList.toggle('pendiente', pendiente > 0);
    momentos.title = 'Momentos clave pendientes';
    momentos.innerHTML = `<span class="chispa">✦</span><span class="cuenta">${pendiente}</span>`;
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
async function completarPacto() {
  const nombre = $<HTMLInputElement>('#pacto-nombre').value.trim();
  const inCorreo = $<HTMLInputElement>('#pacto-correo');
  if (!nombre) { $<HTMLInputElement>('#pacto-nombre').reportValidity(); return; }
  if (!inCorreo.value.trim() || !inCorreo.checkValidity()) { inCorreo.reportValidity(); return; }
  const estadoEl = $('#pacto-estado');
  const boton = $<HTMLButtonElement>('#pacto-correo-btn');
  boton.disabled = true; estadoEl.textContent = 'Entrando…';
  const error = await firmarPacto(nombre, inCorreo.value.trim());
  boton.disabled = false;
  if (error) { estadoEl.innerHTML = `<span class="peligro">${esc(error)}</span>`; return; }
  estadoEl.textContent = '';
await iniciarServidor(marActual());
  const subidos = migrarLocales();
  $<HTMLDialogElement>('#dlg-pacto').close();
  miEstado = null;
  refrescarVida(true);
  pintar();
  aviso(`¡Pacto firmado! Bienvenido a los mares.${subidos ? ` Hemos subido ${subidos} personaje${subidos > 1 ? 's' : ''} que tenías en este navegador.` : ''}`);
  if (!personajes().length) abrirPerfil();
}
$('#form-pacto').addEventListener('submit', (e) => { e.preventDefault(); void completarPacto(); });

function abrirPerfil() {
  const cuenta = cuentaActual();
  if (!cuenta) { abrirPacto(); return; }
  $('#perfil-titulo').textContent = modoCreador() ? 'Tu cuenta · Creador' : 'Tu cuenta';
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
$('#cerrar-sesion').addEventListener('click', async () => { await cerrarSesion(); $<HTMLDialogElement>('#dlg-perfil').close(); miEstado = null; pintar(); aviso('Sesión cerrada.'); });

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
document.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('#btn-hoja')) { const p = personajeActivo(); if (p) abrirCartel(p); } });
const paneles = crearPaneles({
  aviso, localizar: () => localizar(), abrirPerfil: () => abrirPerfil(), abrirMares: () => abrirMares(),
  cerrarSesion: async () => { await cerrarSesion(); miEstado = null; pintar(); aviso('Sesión cerrada.'); }, rutaGaleria: ruta('galeria/index.html'),
  guardian: () => { paneles.cerrar(); enfrentarGuardian(); },
  navegarA: (id: number) => { paneles.cerrar(); const d = islasDelMundo()[id]; if (d) zarpar(d); },
  comerFruta: () => abrirComerFruta(),
  desafiar: (id: string) => { const o = personajesDeOtros().find((x) => x.id === id); if (o) void desafiarJugador(o); else aviso('Ese jugador no está en este mar ahora.'); },
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

// Conecta con el servidor antes de pintar (también recoge la sesión al volver del enlace del correo)
const volviendoDelCorreo = location.hash.includes('access_token');
await iniciarServidor(marActual());
if (volviendoDelCorreo) history.replaceState(null, '', location.pathname + location.search);
const migrados = migrarLocales();
pintar();
// Quita la portada con el logo (se deja ver al menos un momento)
{
  const carga = document.querySelector<HTMLElement>('#portada-carga');
  if (carga) setTimeout(() => { carga.classList.add('fuera'); setTimeout(() => carga.remove(), 700); }, Math.max(0, 1100 - performance.now()));
}
if (new URLSearchParams(location.search).has('sastre')) aviso('¡Como nuevo! El sastre ha hecho un buen trabajo.');
if (volviendoDelCorreo && cuentaActual()) aviso(`¡Pacto firmado! Bienvenido a los mares.${modoCreador() ? ' Tu cuenta tiene el rol de Creador.' : ''}`);
if (migrados) aviso(`Hemos subido a tu cuenta ${migrados} personaje${migrados > 1 ? 's' : ''} que tenías en este navegador.`);
const params = new URLSearchParams(location.search);
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
  // Los bots de una tripulación van con su capitán
  const todosJug = [...personajes(), ...personajesDeOtros()];
  for (const [tid, bots] of botsDeTripulaciones(marActual(), ahora)) {
    const t = tripulacionesDelMar(marActual()).find((x) => x.id === tid);
    const cap = t && (miEstado?.id === t.capitan ? miEstado : todosJug.find((x) => x.id === t.capitan));
    if (!cap) continue;
    const pos = posicionPersonaje(cap, ahora);
    for (const b of bots) { const m = lista.find((x) => x.id === b.id); if (m) m.posicion = pos; }
  }
  // Los personajes de los demás jugadores de este mar
  for (const o of personajesDeOtros()) {
    const tipo = o.accion && ahora < o.accion.hasta ? o.accion.tipo : 'pasear';
    lista.push({ id: `j-${o.id}`, nombre: o.apodo ? `${o.nombre} «${o.apodo}»` : o.nombre, bando: o.bando, aspecto: o.aspecto, barco: o.barco ?? 'barca',
      esMio: false, posicion: posicionPersonaje(o, ahora), quieto: tipo === 'entrenar' || tipo === 'descansar', actividad: TEXTO_ACCION[tipo] });
  }
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

async function pelearCon(bot: Bot, motivo: string, guardian = false) {
  const p = personajeActivo();
  if (!p || combatiendo) return;
  combatiendo = true;
  let h = 0; for (const ch of bot.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  // Enemigos adaptados: cerca de tu nivel para que un personaje nuevo pueda ganar
  const nivelRival = guardian ? nivelGuardian(p.nivel) : Math.max(1, p.nivel + (h % 3) - 1);
  const jugador = crearLuchador({ nombre: p.nombre, bando: p.bando, aspecto: p.aspecto, nivel: p.nivel, rasgos: p.rasgos, arsenal: arsenalDe(p), fruta: p.fruta, creador: p.creador, bolsa: bolsaDe(p) });
  const frutaBot = [...frutasDelMar(marActual(), [...personajes(), ...personajesDeOtros()].filter((x) => x.mar === marActual() && x.fruta).map((x) => x.fruta!)).entries()].find(([, id]) => id === bot.id)?.[0];
  const rival = crearLuchador({ nombre: bot.nombre, bando: bot.bando, aspecto: bot.aspecto, nivel: nivelRival, rasgos: bot.rasgos, arsenal: arsenalBot(nivelRival + (guardian ? 4 : 0), azar(h)), fruta: guardian ? undefined : frutaBot });
  if (guardian) { rival.vidaMax = Math.round(rival.vidaMax * 1.6); rival.vida = rival.vidaMax; }
  // Furia revolucionaria: desde nivel 10, los revolucionarios golpean mucho más fuerte a piratas y marines
  const furia = p.bando === 'revolucionario' && p.nivel >= NIVEL_FURIA && bot.bando !== 'revolucionario';
  if (furia) { jugador.fuerza *= 1 + BONO_FURIA; jugador.tecnica *= 1 + BONO_FURIA; motivo += ' ¡Furia revolucionaria: +50% de daño!'; }
  let frutaGanada = false;
  const isla = islaDePersonaje(p);
  await iniciarCombate(jugador, rival, {
    bioma: isla.bioma, motivo,
    alTerminar: (ganador) => {
      const yo = personajeActivo()!;
      const registro = [...(yo.registro ?? [])];
      const lineas: string[] = [];
      let { nivel, doblones } = yo;
      let xp = yo.xp ?? 0;
      let capturas = yo.capturas ?? { pirata: 0, revolucionario: 0 };
      let ganado = yo.ganado;
      let tmp: PersonajeGuardado = { ...yo };
      if (ganador === 0) {
        // Premios con topes diarios (si no, entrenar sin parar rompería la economía)
        const v = contarVictoria(tmp); tmp = v.p;
        const gx = ganarXp(tmp, v.premio ? 20 + 5 * nivelRival : 5); tmp = gx.p;
        const go = ganarOro(tmp, v.premio ? 15 + 3 * nivelRival : 0); tmp = go.p;
        ({ nivel, xp, doblones } = { nivel: tmp.nivel, xp: tmp.xp ?? 0, doblones: tmp.doblones });
        ganado = tmp.ganado;
        lineas.push(`¡${yo.nombre} gana el combate!`, go.oro || gx.xp ? `+${gx.xp} de experiencia y +${go.oro} doblones.` : 'Hoy ya no ganas más premios: vuelve mañana.');
        if (v.premio === false && (go.oro || gx.xp)) lineas.push('Has llegado al límite de victorias con premio por hoy.');
        if (gx.subidas) lineas.push(`¡${yo.nombre} sube a nivel ${nivel}!`);
        if (guardian) {
          frutaGanada = true;
          tmp = { ...tmp, busqueda: tmp.busqueda ? { ...tmp.busqueda, vencido: true } : undefined };
          lineas.push('¡El guardián cae derrotado! Detrás de él, en un cofre, brilla la fruta...');
          registro.push([Date.now(), `Venció al guardián de ${isla.nombre} y encontró la ${nombreFruta(tmp.busqueda?.fruta ?? '')}.`]);
          const gr = ganarRecompensa(tmp, recompensaPorVictoria(nivelRival, true) * 2); tmp = gr.p;
          if (gr.sube) lineas.push(`La noticia corre: tu recompensa sube ${formatoDoblones(gr.sube)}.`);
        } else if (v.premio && yo.bando !== 'marine') {
          // Piratas y revolucionarios: cada victoria hace crecer la recompensa (más contra la Marina)
          const gr = ganarRecompensa(tmp, recompensaPorVictoria(nivelRival, bot.bando === 'marine')); tmp = gr.p;
          if (gr.sube) lineas.push(`Tu recompensa sube ${formatoDoblones(gr.sube)}: ahora ${formatoDoblones(tmp.recompensa ?? 0)} doblones.`);
          else lineas.push('Hoy la Marina ya no sube más tu recompensa.');
        } else if (v.premio && yo.bando === 'marine' && bot.bando !== 'marine') {
          const gm = ganarMeritos(tmp, meritosPorCaptura(nivelRival, bot.bando === 'revolucionario')); tmp = gm.p;
          if (gm.sube) lineas.push(`+${gm.sube} méritos para la Marina (llevas ${tmp.meritos}).`);
        }
        if (guardian) { /* ya anotado */ } else if (yo.bando === 'marine' && bot.bando !== 'marine') {
          capturas = { ...capturas, [bot.bando]: capturas[bot.bando] + 1 };
          lineas.push(`${bot.nombre} queda capturado y bajo custodia de la Marina.`);
          registro.push([Date.now(), `Capturó a ${bot.nombre} (${bot.bando === 'pirata' ? 'pirata' : 'revolucionario'}) en ${isla.nombre}.`]);
        } else registro.push([Date.now(), `Venció a ${bot.nombre} en ${isla.nombre}.`]);
      } else if (ganador === 1) {
        const pierde = Math.floor(doblones * 0.1);
        doblones -= pierde; xp += 5;
        lineas.push(`${yo.nombre} ha perdido...`, `Pierde ${pierde} doblones y vuelve a curarse.`);
        registro.push([Date.now(), `Perdió un combate contra ${bot.nombre} en ${isla.nombre}. Se curó las heridas y juró revancha.`]);
      } else {
        registro.push([Date.now(), `Escapó por los pelos de ${bot.nombre}.`]);
      }
      actualizarPersonaje({ ...tmp, nivel, xp, doblones, ganado, registro: registro.slice(-30), bolsa: yo.creador ? bolsaDe(yo) : { grog: jugador.pociones, botiquin: jugador.botiquines }, ...(yo.bando === 'marine' ? { capturas } : {}) });
      return lineas;
    },
  });
  combatiendo = false;
  pintar();
  if (frutaGanada) abrirComerFruta();
}

// --- Duelos contra otros jugadores ------------------------------------------
const MAX_DUELOS_DIA = 5, DIFERENCIA_NIVEL = 10;
/** ¿Pueden pelear? Marines contra el resto, y piratas de tripulaciones distintas. */
function rivalesJugadores(a: PersonajeGuardado, b: PersonajeGuardado) {
  if ((a.bando === 'marine') !== (b.bando === 'marine')) return true;
  if (a.bando === 'pirata' && b.bando === 'pirata') return !a.tripulacion || a.tripulacion !== b.tripulacion;
  return a.bando === 'revolucionario' && b.bando === 'pirata' || a.bando === 'pirata' && b.bando === 'revolucionario';
}
/** Motivo por el que no se puede (o null si se puede). */
function porQueNoDuelo(yo: PersonajeGuardado, otro: PersonajeGuardado): string | null {
  if (!rivalesJugadores(yo, otro)) return yo.bando === otro.bando && yo.bando === 'pirata' ? 'Misma tripulación' : 'Sois aliados';
  if (otro.nivel < yo.nivel - DIFERENCIA_NIVEL && !yo.creador) return 'Es de nivel muy bajo';
  if (miEstado && navegandoAhora(miEstado)) return 'Estás navegando';
  return null;
}

async function desafiarJugador(otro: PersonajeGuardado) {
  const p = personajeActivo();
  if (!p || combatiendo) return;
  const no = porQueNoDuelo(p, otro);
  if (no) { aviso(no); return; }
  const hechos = await misDuelosDeHoy();
  if (hechos.length >= MAX_DUELOS_DIA && !p.creador) { aviso(`Como mucho ${MAX_DUELOS_DIA} duelos al día. Vuelve mañana.`); return; }
  if (hechos.some((d) => d.defensor === otro.id)) { aviso(`Ya te enfrentaste a ${otro.nombre} hoy.`); return; }
  combatiendo = true;
  const jugador = crearLuchador({ nombre: p.nombre, bando: p.bando, aspecto: p.aspecto, nivel: p.nivel, rasgos: p.rasgos, arsenal: arsenalDe(p), fruta: p.fruta, creador: p.creador, bolsa: bolsaDe(p) });
  // El rival pelea solo, con todo lo suyo de verdad
  const rival = crearLuchador({ nombre: otro.nombre, bando: otro.bando, aspecto: otro.aspecto, nivel: otro.nivel, rasgos: otro.rasgos, arsenal: arsenalDe(otro), fruta: otro.fruta, creador: otro.creador, bolsa: bolsaDe(otro) });
  if (p.bando === 'revolucionario' && p.nivel >= NIVEL_FURIA && otro.bando !== 'revolucionario') { jugador.fuerza *= 1 + BONO_FURIA; jugador.tecnica *= 1 + BONO_FURIA; }
  const isla = islaDePersonaje(p);
  let resultado: 'atacante' | 'defensor' | 'huida' = 'huida', premio = 0;
  await iniciarCombate(jugador, rival, {
    bioma: isla.bioma, motivo: `¡Duelo! ${p.nombre} desafía a ${otro.nombre}${otro.creador ? ', el Creador' : ''}.`,
    alTerminar: (ganador) => {
      const yo = personajeActivo()!;
      let tmp: PersonajeGuardado = { ...yo };
      const lineas: string[] = [];
      const nota = (t: string) => { tmp = { ...tmp, registro: [...(tmp.registro ?? []), [Date.now(), t] as [number, string]].slice(-30) }; };
      if (ganador === 0) {
        resultado = 'atacante';
        const v = contarVictoria(tmp); tmp = v.p;
        const gx = ganarXp(tmp, 30 + 6 * otro.nivel); tmp = gx.p;
        lineas.push(`¡${yo.nombre} gana el duelo contra ${otro.nombre}!`, `+${gx.xp} de experiencia.`);
        if (gx.subidas) lineas.push(`¡${yo.nombre} sube a nivel ${tmp.nivel}!`);
        if (yo.bando !== 'marine') {
          // Vencer a alguien buscado da fama: el doble de lo normal o el 10% de su recompensa
          const gr = ganarRecompensa(tmp, Math.max(recompensaPorVictoria(otro.nivel, otro.bando === 'marine') * 2, Math.floor((otro.recompensa ?? 0) * 0.1))); tmp = gr.p;
          premio = gr.sube;
          lineas.push(gr.sube ? `Tu recompensa sube ${formatoDoblones(gr.sube)}: ahora ${formatoDoblones(tmp.recompensa ?? 0)}.` : 'Hoy tu recompensa ya no sube más.');
        } else {
          const gm = ganarMeritos(tmp, meritosPorCaptura(otro.nivel, otro.bando === 'revolucionario') * 3 + Math.floor((otro.recompensa ?? 0) / 1_000_000)); tmp = gm.p;
          premio = gm.sube;
          const cap = tmp.capturas ?? { pirata: 0, revolucionario: 0 };
          if (otro.bando !== 'marine') tmp = { ...tmp, capturas: { ...cap, [otro.bando]: cap[otro.bando as 'pirata' | 'revolucionario'] + 1 } };
          lineas.push(`${otro.nombre} queda capturado.`, gm.sube ? `+${gm.sube} méritos (llevas ${tmp.meritos}).` : 'Hoy ya no ganas más méritos.');
        }
        nota(`Ganó un duelo contra ${otro.nombre} en ${isla.nombre}.`);
      } else if (ganador === 1) {
        resultado = 'defensor';
        const pierde = Math.min(2000, Math.floor(tmp.doblones * 0.05));
        tmp = { ...tmp, doblones: tmp.doblones - pierde };
        lineas.push(`${otro.nombre} gana el duelo...`, `${yo.nombre} pierde ${pierde} doblones.`);
        nota(`Perdió un duelo contra ${otro.nombre}. Juró revancha.`);
      } else nota(`Huyó de un duelo contra ${otro.nombre}.`);
      actualizarPersonaje({ ...tmp, bolsa: yo.creador ? bolsaDe(yo) : { grog: jugador.pociones, botiquin: jugador.botiquines } });
      return lineas;
    },
  });
  combatiendo = false;
  const error = await registrarDuelo({ mar: marActual(), atacante: p.id, atacante_nombre: p.nombre, defensor: otro.id, defensor_dueno: otro.dueno ?? '', defensor_nombre: otro.nombre, ganador: resultado, premio });
  if (error) console.warn('No se pudo registrar el duelo', error);
  pintar();
}

/** Al entrar: duelos en los que te atacaron mientras no estabas. */
async function duelosMientrasNoEstabas(): Promise<string[]> {
  const lista = await duelosRecibidos();
  const lineas: string[] = [];
  for (const d of lista) {
    const yo = personajes().find((x) => x.id === d.defensor);
    if (!yo) continue;
    let tmp: PersonajeGuardado = { ...yo };
    if (d.ganador === 'atacante') {
      const pierde = Math.min(2000, Math.floor(tmp.doblones * 0.05));
      tmp = { ...tmp, doblones: tmp.doblones - pierde };
      lineas.push(`${d.atacante_nombre} desafió a ${yo.nombre} y ganó: perdiste ${pierde} doblones.`);
    } else if (d.ganador === 'defensor') {
      const r = yo.bando === 'marine' ? ganarMeritos(tmp, 5 + yo.nivel) : ganarRecompensa(tmp, recompensaPorVictoria(yo.nivel, false));
      tmp = r.p;
      lineas.push(`${d.atacante_nombre} desafió a ${yo.nombre} y perdió.${r.sube ? (yo.bando === 'marine' ? ` +${r.sube} méritos.` : ` Tu recompensa sube ${formatoDoblones(r.sube)}.`) : ''}`);
    } else lineas.push(`${d.atacante_nombre} desafió a ${yo.nombre}, pero salió huyendo.`);
    tmp = { ...tmp, registro: [...(tmp.registro ?? []), [Date.parse(d.creado), `Duelo contra ${d.atacante_nombre}: ${d.ganador === 'defensor' ? 'ganó' : d.ganador === 'atacante' ? 'perdió' : 'el rival huyó'}.`] as [number, string]].slice(-30) };
    actualizarPersonaje(tmp);
  }
  await marcarDuelosVistos(lista.map((d) => d.id));
  return lineas;
}

// --- Frutas: el guardián y el momento de comérsela --------------------------
function enfrentarGuardian() {
  const p = personajeActivo();
  if (!p?.busqueda) return;
  if (!frutaSigueLibre(p)) {
    actualizarPersonaje({ ...p, busqueda: undefined, registro: [...(p.registro ?? []), [Date.now(), `Llegó tarde: alguien se comió la ${nombreFruta(p.busqueda.fruta)} antes que él.`] as [number, string]].slice(-30) });
    aviso('Llegas tarde: otro ya se comió esa fruta. El rumor se apaga...');
    pintar();
    return;
  }
  if (p.busqueda.vencido) { abrirComerFruta(); return; }
  const r = azar(p.busqueda.empezada % 100000);
  const aspecto = { ...aspectoAlAzar(r, 'hombre'), complexion: 'fuerte' as const, sombrero: 'ninguno' as const, accesorios: ['parche' as const] };
  const guardian = { id: `guardian-${p.busqueda.fruta}`, nombre: 'El Guardián', apodo: undefined, bando: p.bando === 'marine' ? 'pirata' : 'marine', aspecto, rasgos: ['valiente', 'rudo', 'orgulloso'], nivel: nivelGuardian(p.nivel) } as unknown as Bot;
  pelearCon(guardian, `En ${islaDePersonaje(p).nombre}, una sombra enorme se interpone: «Nadie toca la fruta mientras yo respire».`, true);
}

function abrirComerFruta() {
  const p = personajeActivo();
  const b = p?.busqueda;
  if (!p || !b?.vencido) return;
  const f = FRUTAS.find((x) => x.id === b.fruta)!;
  document.querySelector('#dlg-fruta')?.remove();
  const dlg = document.createElement('dialog');
  dlg.id = 'dlg-fruta'; dlg.className = 'dialogo dlg-fruta';
  dlg.innerHTML = `<div><span class="momento-chip">✦ Momento clave</span><h2>${esc(f.nombre)}</h2><div class="fruta-grande"></div>
    <p><b>${esc(f.poder)}</b></p><p>Técnicas: ${esc(f.tecnicas.join(', '))}.</p><p>Debilidad: ${esc(f.debilidad)}</p>
    <p class="nota-fruta">Si te la comes, será tuya para siempre y no podrás comer otra. Si otro jugador se la come antes, la perderás.</p>
    <div class="fila-botones"><button class="boton-grande oro" data-comer>Comérmela</button><button class="boton-grande" data-cerrar>Ahora no</button></div></div>`;
  const L = dibujarFruta(f.id);
  dlg.querySelector('.fruta-grande')!.append(aCanvas(L, 6));
  document.body.append(dlg);
  dlg.querySelector('[data-cerrar]')!.addEventListener('click', () => { dlg.close(); dlg.remove(); });
  dlg.querySelector<HTMLButtonElement>('[data-comer]')!.addEventListener('click', async (e) => {
    const boton = e.currentTarget as HTMLButtonElement;
    boton.disabled = true; boton.textContent = 'Mordiendo…';
    const yo = personajeActivo()!;
    const nota: [number, string] = [Date.now(), `Se comió la ${f.nombre}. Sabía horrible... pero algo cambió dentro de él para siempre.`];
    actualizarPersonaje({ ...yo, fruta: f.id, busqueda: undefined, registro: [...(yo.registro ?? []), nota].slice(-30) });
    const error = await guardarAhora();
    dlg.close(); dlg.remove();
    if (error && /fruta_unica|duplicate/i.test(error)) {
      // Otro jugador fue más rápido: el servidor no deja dos frutas iguales en un mar
      const otra = personajeActivo()!;
      actualizarPersonaje({ ...otra, fruta: undefined, busqueda: undefined, registro: [...(otra.registro ?? []), [Date.now(), `Llegó tarde: otro se comió la ${f.nombre} un instante antes.`] as [number, string]].slice(-30) });
      await guardarAhora();
      aviso('¡Demasiado tarde! Otro jugador se la comió un instante antes.');
    } else if (error) aviso(`No se pudo guardar: ${error}. Inténtalo otra vez.`);
    else aviso(`¡Te has comido la ${f.nombre}! Mira sus técnicas en el Arsenal.`);
    pintar();
  });
  dlg.showModal();
}

// Tarjeta al tocar un personaje o una isla del mapa
function ocultarTarjeta() { $('#tarjeta').hidden = true; }
function mostrarTarjeta(m: Marcador | null, isla: IslaMundo | null) {
  const t = $('#tarjeta');
  if (!m && !isla) { t.hidden = true; return; }
  t.innerHTML = '';
  if (m) {
    const bot = botsDelMar(marActual()).find((b) => b.id === m.id);
    const otro = m.id.startsWith('j-') ? personajesDeOtros().find((x) => `j-${x.id}` === m.id) : null;
    const p = m.esMio ? personajeActivo() : otro ?? null;
    const rasgos = (bot?.rasgos ?? p?.rasgos ?? []).map((id) => RASGOS.find((r) => r.id === id)?.nombre).filter(Boolean).join(', ');
    const lugar = m.posicion.navegando ? 'Navegando' : `En ${islasDelMundo()[m.posicion.islaId!].nombre}`;
    t.append(aCanvas(dibujarPersonaje(m.aspecto), 2));
    t.insertAdjacentHTML('beforeend', `<div>
      <b>${esc(m.nombre)}${m.esMio ? ' <em>(tú)</em>' : ''}</b>
      <span class="${'bando-' + m.bando}">${otro ? '<b class="jugador-tag">Jugador</b> · ' : ''}${p?.creador ? '<b class="creador">Creador</b> · ' : ''}${BANDOS[m.bando].nombre} · Nv. ${bot?.nivel ?? p?.nivel ?? 1}</span>
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
    if (otro && mio) {
      const motivo = porQueNoDuelo(mio, otro);
      const b = document.createElement('button');
      b.className = 'boton-oro boton-pelear';
      b.textContent = '⚔ Desafiar';
      if (motivo) { b.disabled = true; b.title = motivo; b.textContent = `⚔ ${motivo}`; }
      b.addEventListener('click', () => { ocultarTarjeta(); void desafiarJugador(otro); });
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
  // Con tripulación: al entrar vuelve al barco; mientras juegas, sigue al capitán
  const v = volverConTripulacion(p, primera);
  if (v.p !== p) actualizarPersonaje(v.p);
  if (v.volvio) aviso(`${p.nombre} ha vuelto al barco de su tripulación.`);
  const { p: avanzado, resumen } = avanzarVida(v.p);
  let nuevo = avanzado;
  // Lo que hizo mientras no jugabas (lo apunta el servidor, que mueve el mundo cada 5 minutos)
  const delServidor = primera ? (nuevo.mientras ?? []).map(([, t]) => t) : [];
  if (primera && nuevo.mientras?.length) { nuevo = { ...nuevo, mientras: undefined }; actualizarPersonaje(nuevo); }
  miEstado = nuevo;
  const todo = [...delServidor, ...resumen.map((r) => `${nuevo.nombre} ${r}`)];
  if (primera && todo.length) {
    $('#resumen-lista').innerHTML = todo.slice(-12).map((r) => `<li>${esc(r)}.</li>`).join('')
      + (todo.length > 12 ? `<li>…y ${todo.length - 12} cosas más (míralo en su diario).</li>` : '');
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
  if ((orden === 'pelear' || orden === 'explorar') && guardianAqui(p)) { enfrentarGuardian(); return; }
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
// Duelos que te hicieron mientras no estabas
void duelosMientrasNoEstabas().then((lineas) => {
  if (!lineas.length) return;
  const d = $<HTMLDialogElement>('#dlg-resumen');
  const ul = $('#resumen-lista');
  if (!d.open) ul.innerHTML = '';
  ul.insertAdjacentHTML('beforeend', lineas.map((x) => `<li>⚔ ${esc(x)}</li>`).join(''));
  if (!d.open) abrir('#dlg-resumen');
  pintar();
});
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
