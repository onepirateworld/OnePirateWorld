// Pantalla principal: el planeta de fondo y la interfaz encima.
import { ruta } from './rutas';
import './estilos.css';
import './inicio.css';
import { Lienzo } from './arte/lienzo';
import { C } from './arte/paleta';
import { dibujarPersonaje, ASPECTO_BASE, PERSONAJES_PRUEBA, type AspectoPersonaje } from './arte/personajes';
import { crearPlaneta } from './mundo/planeta';
import { icono } from './iconos';
import {
  BANDOS, MARES, META_COMUNIDAD, cerrarSesion, cuentaActual, elegirActivo, firmarPacto, marActual,
  personajeActivo, personajes, type Bando,
} from './cuenta';

const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s)!;
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
        <span class="insignia oro">${icono('moneda', '#f2b63d')} ${p.doblones}</span>
        <span class="insignia">Nv. ${p.nivel}</span>
      </span>`;
    const momentos = boton('', () => aviso('Momentos clave: llegarán con el motor de simulación (fase 6).'));
    momentos.classList.add('momentos');
    momentos.title = 'Momentos clave pendientes';
    momentos.innerHTML = '<span class="chispa">✦</span><span class="cuenta">0</span>';
    ficha.append(cuerpo, momentos);
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
    a.href = ruta(`nuevo/?bando=${b}&mar=${marActual()}`);
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
    <a class="mar ${m.id === actual ? 'actual' : ''}" href="${ruta(`?mar=${m.id}`)}">
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
$('#btn-mi-pirata').addEventListener('click', () => (personajeActivo() ? aviso('La ficha de tu personaje llegará con el motor de simulación (fase 6).') : abrirPerfil()));
$('#btn-mar').addEventListener('click', abrirMares);
$('#btn-mapa').addEventListener('click', () => aviso('El mapa de cerca llega en la fase 3. De momento, gira y acerca el planeta.'));
$('#btn-envivo').addEventListener('click', () => aviso('«En vivo» mostrará lo que pasa en el mundo ahora mismo (fase 6).'));
$('#btn-guia').addEventListener('click', () => aviso('La Guía del juego llega en la fase 10.'));
$('#btn-globo').addEventListener('click', () => aviso('Arrastra para girar el planeta. Pellizca o usa la rueda para acercarte.'));
document.querySelectorAll<HTMLButtonElement>('[data-seccion]').forEach((b) =>
  b.addEventListener('click', () => aviso(`${b.dataset.seccion}: llega en la fase 10.`)));

// ---------------------------------------------------------------------------
// Arranque

pintar();
const params = new URLSearchParams(location.search);
if (params.has('pacto')) abrirPacto();
if (params.has('perfil')) abrirPerfil();
if (params.has('creado')) aviso('¡Tu personaje ya navega por el mundo!');

requestAnimationFrame(() => {
  crearPlaneta($('#mundo'), $('#etiquetas'), {
    alAcercar: (cerca) => cerca && aviso('Muy pronto: al acercarte verás el mapa de la zona (fase 3).'),
  });
});
