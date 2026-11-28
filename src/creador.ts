// Menú de personalización (paso 2 "Aspecto" de la creación de personaje).
// Empieza con un maniquí sin color, sin pelo y en ropa interior.
import { portada } from './rutas';
import './estilos.css';
import './creador.css';
import { Lienzo, azar } from './arte/lienzo';
import { PALETA } from './arte/paleta';
import { guardarAhora } from './servidor';
import { BANDOS, actualizarPersonaje, cuentaActual, guardarPersonaje, marActual, modoCreador, personajes, type Bando } from './cuenta';
import { PRECIO_SASTRE } from './datos/tienda';
import { estadoPrenda, type Meritos } from './datos/vestuario';
import { MAX_RASGOS, RASGOS, puedeAnadir, suenosPara } from './datos/caracter';
import { iniciar as iniciarServidor } from './servidor';

// Recupera la sesión para poder guardar el personaje en el servidor
await iniciarServidor(marActual());
import {
  dibujarPersonaje, aspectoAlAzar, ASPECTO_BASE, OPCIONES, COLORES,
  type AspectoPersonaje, type Pelo,
} from './arte/personajes';

type Clave = keyof AspectoPersonaje;
interface Pestana {
  id: string;
  titulo: string;
  clave?: Clave;                                   // opción de una sola elección
  multi?: 'accesorios' | 'cicatrices';             // opción de varias
  opciones: (a: AspectoPersonaje) => Record<string, string | undefined>;
  colores?: { titulo: string; clave: Clave; lista: number[]; ninguno?: string; visible?: (a: AspectoPersonaje) => boolean }[];
  cabeza?: boolean;                                // miniaturas con zoom a la cabeza
  nota?: string;
}

const PESTANAS: Pestana[] = [
  { id: 'cuerpo', titulo: 'Cuerpo', clave: 'cuerpo', opciones: () => OPCIONES.cuerpo },
  { id: 'complexion', titulo: 'Complexión', clave: 'complexion', opciones: () => OPCIONES.complexion },
  { id: 'piel', titulo: 'Piel', clave: 'piel', opciones: () => OPCIONES.piel },
  {
    id: 'pelo', titulo: 'Pelo', clave: 'pelo', cabeza: true,
    opciones: (a) => (a.cuerpo === 'hombre' ? OPCIONES.peloHombre : OPCIONES.peloMujer),
    colores: [{ titulo: 'Color de pelo', clave: 'colorPelo', lista: COLORES.pelo }],
  },
  {
    id: 'cara', titulo: 'Cara', clave: 'rasgo', cabeza: true,
    opciones: (a) => (a.cuerpo === 'hombre' ? OPCIONES.rasgoHombre : OPCIONES.rasgoMujer),
    nota: 'La barba, la perilla y el bigote usan el color del pelo.',
  },
  {
    id: 'ropa', titulo: 'Ropa', clave: 'ropa', opciones: () => OPCIONES.ropa,
    colores: [
      { titulo: 'Color de la ropa', clave: 'colorRopa', lista: COLORES.ropa, visible: (a) => a.ropa !== 'ninguna' },
      { titulo: 'Faja', clave: 'colorFaja', lista: COLORES.faja, ninguno: 'Sin faja' },
    ],
  },
  {
    id: 'pantalon', titulo: 'Pantalón', clave: 'pantalon', opciones: () => OPCIONES.pantalon,
    colores: [{ titulo: 'Color del pantalón', clave: 'colorPantalon', lista: COLORES.pantalon, visible: (a) => a.pantalon !== 'ninguno' }],
  },
  {
    id: 'calzado', titulo: 'Calzado', clave: 'calzado', opciones: () => OPCIONES.calzado,
    colores: [{ titulo: 'Color del calzado', clave: 'colorCalzado', lista: COLORES.calzado, visible: (a) => a.calzado !== 'descalzo' }],
  },
  {
    id: 'sombrero', titulo: 'Sombrero', clave: 'sombrero', cabeza: true, opciones: () => OPCIONES.sombrero,
    colores: [{ titulo: 'Color (en el de paja, la cinta)', clave: 'colorSombrero', lista: COLORES.sombrero, visible: (a) => a.sombrero !== 'ninguno' }],
  },
  { id: 'accesorios', titulo: 'Accesorios', multi: 'accesorios', opciones: () => OPCIONES.accesorios, nota: 'Puedes llevar varios a la vez.' },
  { id: 'cicatrices', titulo: 'Cicatrices', multi: 'cicatrices', cabeza: true, opciones: () => OPCIONES.cicatrices, nota: 'Puedes marcar varias.' },
];

// ---------------------------------------------------------------------------
// Estado (con borrador guardado en este navegador)

const CLAVE_BORRADOR = 'creador.aspecto';
const copia = (a: AspectoPersonaje): AspectoPersonaje => structuredClone(a);
function cargar(): AspectoPersonaje {
  try {
    const t = localStorage.getItem(CLAVE_BORRADOR);
    if (t) return { ...copia(ASPECTO_BASE), ...JSON.parse(t) };
  } catch { /* sin almacenamiento: empezamos de cero */ }
  return copia(ASPECTO_BASE);
}
// Sastre: editar el aspecto de un personaje que ya existe (se paga al guardar)
const idSastre = new URLSearchParams(location.search).get('sastre');
const enSastre = idSastre ? personajes().find((x) => x.id === idSastre) ?? null : null;

function guardar(a: AspectoPersonaje) {
  if (enSastre) return;
  try { localStorage.setItem(CLAVE_BORRADOR, JSON.stringify(a)); } catch { /* da igual */ }
}

let a = enSastre ? { ...copia(ASPECTO_BASE), ...copia(enSastre.aspecto) } : cargar();
let pestana = 0;
const historial: AspectoPersonaje[] = [];
let semilla = (Date.now() % 100000) + 1;

function cambiar(f: (n: AspectoPersonaje) => void) {
  historial.push(copia(a));
  if (historial.length > 50) historial.shift();
  const n = copia(a);
  f(n);
  a = n;
  guardar(a);
  render();
}

// ---------------------------------------------------------------------------
// Dibujo

function recortar(L: Lienzo, x: number, y: number, w: number, h: number) {
  const r = new Lienzo(w, h);
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) r.px(i, j, L.get(x + i, y + j));
  return r;
}
function aCanvas(L: Lienzo, escala: number, cv = document.createElement('canvas')) {
  cv.width = L.w; cv.height = L.h;
  cv.style.width = `${L.w * escala}px`; cv.style.height = `${L.h * escala}px`;
  cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
  return cv;
}
function miniatura(asp: AspectoPersonaje, cabeza: boolean) {
  const L = dibujarPersonaje(asp);
  return cabeza ? aCanvas(recortar(L, 6, 0, 20, 15), 4) : aCanvas(L, 3);
}

const hex = (c: number) => PALETA[c - 1].hex;
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** Lo conseguido por el personaje (en el sastre) o por uno nuevo (todo a cero). */
function meritos(): Meritos {
  if (enSastre) {
    const c = enSastre.capturas ?? { pirata: 0, revolucionario: 0 };
    return { bando: enSastre.bando, nivel: enSastre.nivel, recompensa: enSastre.recompensa ?? 0, capturas: c.pirata + c.revolucionario, creador: enSastre.creador };
  }
  return { bando, nivel: 1, recompensa: 0, capturas: 0, creador: modoCreador() };
}

function hecha(p: Pestana) {
  if (p.multi) return a[p.multi].length > 0;
  return p.clave ? a[p.clave] !== ASPECTO_BASE[p.clave] : false;
}

// ---------------------------------------------------------------------------
// Interfaz

const $ = <T extends HTMLElement>(s: string) => document.querySelector<T>(s)!;
const vistaGrande = $<HTMLCanvasElement>('#vista-grande');
const vistaReal = $<HTMLCanvasElement>('#vista-real');
const pestanasEl = $('#pestanas');
const panelEl = $('#panel');
const resumenEl = $('#resumen');

// ---------------------------------------------------------------------------
// Pasos 3 y 4: carácter y sueño (con borrador propio)

type Paso = 'aspecto' | 'caracter' | 'sueno';
let paso: Paso = 'aspecto';
interface Extra { rasgos: string[]; sueno: string; suenoPropio: string; nombre: string; apodo: string }
const CLAVE_EXTRA = 'creador.extra';
let extra: Extra = (() => {
  const base: Extra = { rasgos: [], sueno: '', suenoPropio: '', nombre: '', apodo: '' };
  try { return { ...base, ...JSON.parse(localStorage.getItem(CLAVE_EXTRA) ?? '{}') }; } catch { return base; }
})();
const guardarExtra = () => { try { localStorage.setItem(CLAVE_EXTRA, JSON.stringify(extra)); } catch { /* nada */ } };
let mensajeRasgo = '';

function render() {
  const L = dibujarPersonaje(a);
  aCanvas(L, 9, vistaGrande);
  aCanvas(L, 2, vistaReal);
  $<HTMLButtonElement>('#deshacer').disabled = historial.length === 0;
  document.querySelectorAll<HTMLButtonElement>('[data-paso]').forEach((b) => {
    const li = b.parentElement!;
    li.classList.toggle('actual', b.dataset.paso === paso);
    li.classList.toggle('hecho', b.dataset.paso === 'caracter' ? extra.rasgos.length === MAX_RASGOS : b.dataset.paso === 'aspecto' && paso !== 'aspecto');
  });
  $('.acciones').hidden = paso !== 'aspecto';
  pestanasEl.hidden = paso !== 'aspecto';
  resumenEl.innerHTML = resumen().map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('');
  if (paso === 'caracter') return renderCaracter();
  if (paso === 'sueno') return renderSueno();
  renderAspecto();
}

function renderCaracter() {
  panelEl.innerHTML = `
    <h2>Carácter</h2>
    <p class="nota">Elige <b>${MAX_RASGOS} rasgos</b>. Deciden cómo se comporta tu personaje cuando tú no estás. Llevas ${extra.rasgos.length} de ${MAX_RASGOS}.</p>
    <p class="aviso-rasgo" role="status">${esc(mensajeRasgo)}</p>
    <div class="rasgos">
      ${RASGOS.map((r) => {
        const sel = extra.rasgos.includes(r.id);
        const bloqueado = !sel && puedeAnadir(extra.rasgos, r.id) !== null;
        return `<button class="rasgo ${sel ? 'sel' : ''} ${bloqueado ? 'bloqueado' : ''}" data-rasgo="${r.id}" aria-pressed="${sel}">
          <b>${r.nombre}</b>
          <span class="ventaja">▲ ${esc(r.ventaja)}</span>
          <span class="desventaja">▼ ${esc(r.desventaja)}</span>
        </button>`;
      }).join('')}
    </div>
    <div class="navegacion">
      <button class="boton" data-paso="aspecto">← Aspecto</button>
      <button class="boton" data-paso="sueno" ${extra.rasgos.length < MAX_RASGOS ? 'disabled title="Elige 3 rasgos primero"' : ''}>Sueño →</button>
    </div>`;
}

function renderSueno() {
  const lista = suenosPara(bando);
  const propio = extra.sueno === 'propio';
  panelEl.innerHTML = `
    <h2>Sueño y nombre</h2>
    <p class="nota">El sueño es el gran objetivo de su vida. Todo lo que haga le acercará (o no) a cumplirlo.</p>
    <div class="suenos" role="radiogroup" aria-label="Sueño">
      ${lista.map((x) => `<button class="sueno ${extra.sueno === x.id ? 'sel' : ''}" role="radio" aria-checked="${extra.sueno === x.id}" data-sueno="${x.id}">${esc(x.texto)}</button>`).join('')}
      <button class="sueno ${propio ? 'sel' : ''}" role="radio" aria-checked="${propio}" data-sueno="propio">✎ Escribir el mío</button>
    </div>
    ${propio ? `<label class="campo">Su sueño<textarea id="sueno-propio" maxlength="120" rows="2" placeholder="Quiere...">${esc(extra.suenoPropio)}</textarea></label>` : ''}
    <div class="campos">
      <label class="campo">Nombre<input id="campo-nombre" maxlength="24" value="${esc(extra.nombre)}" placeholder="Nombre del personaje" autocomplete="off" /></label>
      <label class="campo">Apodo <small>(opcional)</small><input id="campo-apodo" maxlength="24" value="${esc(extra.apodo)}" placeholder="el Rojo, Manos de Hierro..." autocomplete="off" /></label>
    </div>
    <p class="vista-nombre" id="vista-nombre"></p>
    <div class="navegacion">
      <button class="boton" data-paso="caracter">← Carácter</button>
      <button class="boton" id="soltar">Soltar al mundo ⚓</button>
    </div>`;
  actualizarVistaNombre();
  const enlazar = (id: string, k: 'nombre' | 'apodo' | 'suenoPropio') => {
    const el = panelEl.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${id}`);
    el?.addEventListener('input', () => { extra[k] = el.value; guardarExtra(); actualizarVistaNombre(); });
  };
  enlazar('campo-nombre', 'nombre'); enlazar('campo-apodo', 'apodo'); enlazar('sueno-propio', 'suenoPropio');
}

function textoSueno() {
  if (extra.sueno === 'propio') return extra.suenoPropio.trim();
  return suenosPara(bando).find((x) => x.id === extra.sueno)?.texto ?? '';
}
function actualizarVistaNombre() {
  const el = document.querySelector('#vista-nombre');
  if (!el) return;
  const n = extra.nombre.trim();
  el.innerHTML = n ? `Le conocerán como <b>${esc(n)}${extra.apodo.trim() ? ` «${esc(extra.apodo.trim())}»` : ''}</b>` : '';
}

function renderAspecto() {
  pestanasEl.innerHTML = PESTANAS.map((p, i) =>
    `<button class="pestana ${i === pestana ? 'activa' : ''} ${hecha(p) ? 'hecha' : ''}" data-pestana="${i}">${p.titulo}</button>`).join('');

  const p = PESTANAS[pestana];
  const campo = (p.multi ?? p.clave) as string;
  const merito = meritos();
  // Las prendas de otros bandos no se muestran; las que aún no has ganado salen con candado
  const ops = (Object.entries(p.opciones(a)).filter(([, t]) => t) as [string, string][])
    .map(([v, t]) => [v, t, estadoPrenda(campo, v, merito)] as const)
    .filter(([, , e]) => e !== 'oculta');
  panelEl.innerHTML = `
    <h2>${p.titulo}</h2>
    ${p.nota ? `<p class="nota">${p.nota}</p>` : ''}
    <div class="opciones ${p.cabeza ? 'cabeza' : ''}">
      ${ops.map(([v, t, e]) => {
        const sel = p.multi ? (a[p.multi] as string[]).includes(v) : a[p.clave!] === v;
        const bloqueada = e !== 'libre';
        return `<button class="opcion ${sel ? 'sel' : ''} ${bloqueada ? 'bloqueada' : ''}" data-v="${v}" aria-pressed="${sel}" ${bloqueada && !sel ? 'disabled' : ''}><span class="mini"></span><span>${esc(t)}</span>${bloqueada ? `<small class="candado">🔒 ${esc(e)}</small>` : ''}</button>`;
      }).join('')}
    </div>
    ${(p.colores ?? []).filter((c) => !c.visible || c.visible(a)).map((c) => `
      <h3>${c.titulo}</h3>
      <div class="colores">
        ${c.ninguno ? `<button class="chip ${a[c.clave] === 0 ? 'sel' : ''}" data-ck="${c.clave}" data-c="0">${c.ninguno}</button>` : ''}
        ${c.lista.map((col) => `<button class="color ${a[c.clave] === col ? 'sel' : ''}" style="background:${hex(col)}" title="${PALETA[col - 1].nombre}" aria-label="${PALETA[col - 1].nombre}" data-ck="${c.clave}" data-c="${col}"></button>`).join('')}
      </div>`).join('')}
    <div class="navegacion">
      ${pestana > 0 ? `<button class="boton" data-ir="${pestana - 1}">← ${PESTANAS[pestana - 1].titulo}</button>` : '<span></span>'}
      ${pestana < PESTANAS.length - 1
        ? `<button class="boton" data-ir="${pestana + 1}">${PESTANAS[pestana + 1].titulo} →</button>`
        : enSastre ? `<button class="boton" id="guardar-sastre">Guardar · ${enSastre.creador ? 'gratis' : `${PRECIO_SASTRE} doblones`}</button>`
        : `<button class="boton" data-paso="caracter">Siguiente: Carácter →</button>`}
    </div>`;

  // Miniaturas: tu personaje con cada opción puesta
  panelEl.querySelectorAll<HTMLButtonElement>('.opcion').forEach((b) => {
    const v = b.dataset.v!;
    const asp = copia(a);
    if (p.multi) asp[p.multi] = [v as never];
    else (asp as any)[p.clave!] = v;
    if (p.clave === 'cuerpo') ajustarCuerpo(asp);
    b.querySelector('.mini')!.append(miniatura(asp, !!p.cabeza));
  });
}

function ajustarCuerpo(n: AspectoPersonaje) {
  const pelos = n.cuerpo === 'hombre' ? OPCIONES.peloHombre : OPCIONES.peloMujer;
  if (!(n.pelo in pelos)) n.pelo = 'ninguno' as Pelo;
  const rasgos = n.cuerpo === 'hombre' ? OPCIONES.rasgoHombre : OPCIONES.rasgoMujer;
  if (!(n.rasgo in rasgos)) n.rasgo = 'ninguno';
}

function resumen(): [string, string][] {
  const pelos = { ...OPCIONES.peloHombre, ...OPCIONES.peloMujer };
  const rasgos = { ...OPCIONES.rasgoHombre, ...OPCIONES.rasgoMujer };
  const col = (c: number) => (c ? PALETA[c - 1].nombre.toLowerCase() : '');
  return [
    ['Cuerpo', OPCIONES.cuerpo[a.cuerpo]],
    ['Piel', a.piel === 'base' ? 'Sin elegir' : OPCIONES.piel[a.piel]],
    ['Pelo', a.pelo === 'ninguno' ? 'Sin pelo' : `${pelos[a.pelo]} (${col(a.colorPelo)})`],
    ['Cara', rasgos[a.rasgo] ?? 'Ninguno'],
    ['Ropa', a.ropa === 'ninguna' ? 'Ropa interior' : `${OPCIONES.ropa[a.ropa]} (${col(a.colorRopa)})`],
    ['Faja', a.colorFaja ? PALETA[a.colorFaja - 1].nombre : 'Sin faja'],
    ['Pantalón', a.pantalon === 'ninguno' ? 'Ropa interior' : `${OPCIONES.pantalon[a.pantalon]} (${col(a.colorPantalon)})`],
    ['Calzado', OPCIONES.calzado[a.calzado]],
    ['Sombrero', OPCIONES.sombrero[a.sombrero]],
    ['Accesorios', a.accesorios.map((x) => OPCIONES.accesorios[x]).join(', ') || 'Ninguno'],
    ['Cicatrices', a.cicatrices.map((x) => OPCIONES.cicatrices[x]).join(', ') || 'Ninguna'],
    ['Carácter', extra.rasgos.map((x) => RASGOS.find((r) => r.id === x)!.nombre).join(', ') || 'Sin elegir'],
    ['Sueño', textoSueno() || 'Sin elegir'],
  ];
}

document.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest('button');
  if (!b || b.disabled) return;
  const d = b.dataset;
  const p = PESTANAS[pestana];
  if (d.paso) {
    if (d.paso === 'sueno' && extra.rasgos.length < MAX_RASGOS) { paso = 'caracter'; mensajeRasgo = 'Elige 3 rasgos antes de pasar al sueño.'; render(); return; }
    paso = d.paso as Paso; mensajeRasgo = ''; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); return;
  }
  if (d.rasgo) {
    const i = extra.rasgos.indexOf(d.rasgo);
    if (i >= 0) { extra.rasgos.splice(i, 1); mensajeRasgo = ''; }
    else { const motivo = puedeAnadir(extra.rasgos, d.rasgo); if (motivo) mensajeRasgo = motivo; else { extra.rasgos.push(d.rasgo); mensajeRasgo = ''; } }
    guardarExtra(); render(); return;
  }
  if (d.sueno) { extra.sueno = d.sueno; guardarExtra(); render(); if (d.sueno === 'propio') document.querySelector<HTMLTextAreaElement>('#sueno-propio')?.focus(); return; }
  if (d.pestana !== undefined) { pestana = Number(d.pestana); render(); }
  else if (d.ir !== undefined) { pestana = Number(d.ir); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  else if (b.classList.contains('opcion')) {
    const v = d.v!;
    cambiar((n) => {
      if (p.multi) {
        const l = n[p.multi] as string[];
        const i = l.indexOf(v);
        if (i >= 0) l.splice(i, 1); else l.push(v);
      } else {
        (n as any)[p.clave!] = v;
        if (p.clave === 'cuerpo') ajustarCuerpo(n);
      }
    });
  } else if (d.ck) cambiar((n) => { (n as any)[d.ck!] = Number(d.c); });
  else if (b.id === 'azar') cambiar((n) => Object.assign(n, aspectoAlAzar(azar(semilla++ * 7919), a.cuerpo, enSastre?.bando ?? bando)));
  else if (b.id === 'cero') cambiar((n) => Object.assign(n, copia(ASPECTO_BASE), { cuerpo: a.cuerpo }));
  else if (b.id === 'deshacer' && historial.length) { a = historial.pop()!; guardar(a); render(); }
});

// --- Bando elegido en la pantalla principal
const bandoParam = new URLSearchParams(location.search).get('bando') as Bando | null;
const bando: Bando = bandoParam && bandoParam in BANDOS ? bandoParam : 'pirata';
const pasoBando = document.querySelector<HTMLElement>('#paso-bando')!;
pasoBando.innerHTML = `<a href="${portada('?perfil=1')}">1 · ${BANDOS[bando].nombre} ✓</a>`;

// --- Soltar al mundo: comprueba que esté todo y guarda
document.addEventListener('click', async (e) => {
  if (!(e.target as HTMLElement).closest('#soltar')) return;
  const nombre = extra.nombre.trim();
  const sueno = textoSueno();
  const faltan = [!nombre && 'un nombre', !sueno && 'un sueño', extra.rasgos.length < MAX_RASGOS && `${MAX_RASGOS} rasgos`].filter(Boolean);
  if (faltan.length) {
    const el = document.querySelector('#vista-nombre')!;
    el.innerHTML = `<span class="falta">Falta ${faltan.join(' y ')}.</span>`;
    return;
  }
  if (!cuentaActual()) { location.href = portada('?pacto=1'); return; }
  guardarPersonaje({ nombre, apodo: extra.apodo.trim() || undefined, bando, aspecto: a, rasgos: [...extra.rasgos], sueno, mar: marActual() });
  const boton = document.querySelector<HTMLButtonElement>('#soltar')!;
  boton.disabled = true; boton.textContent = 'Guardando…';
  const error = await guardarAhora();
  if (error) {
    boton.disabled = false; boton.textContent = 'Soltar al mundo ⚓';
    document.querySelector('#vista-nombre')!.innerHTML = `<span class="falta">No se pudo guardar: ${error}</span>`;
    return;
  }
  try { localStorage.removeItem(CLAVE_BORRADOR); localStorage.removeItem(CLAVE_EXTRA); } catch { /* nada */ }
  location.href = portada(`?mar=${marActual()}&creado=1`);
});

let guardandoSastre = false;
if (enSastre) {
  document.title = 'Sastre';
  document.querySelector('.cabecera h1')!.lastChild!.textContent = ` Sastre · ${enSastre.nombre}`;
  document.querySelector<HTMLElement>('.pasos')!.innerHTML = `<li class="actual">Cambia lo que quieras. Pagas ${enSastre.creador ? 'nada' : `${PRECIO_SASTRE} doblones`} al guardar.</li>`;
  document.addEventListener('click', async (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('#guardar-sastre');
    if (!b || guardandoSastre) return;
    guardandoSastre = true;
    const yo = personajes().find((x) => x.id === enSastre.id)!;
    if (!yo.creador && yo.doblones < PRECIO_SASTRE) { b.textContent = `Te faltan doblones (tienes ${yo.doblones})`; guardandoSastre = false; return; }
    b.disabled = true; b.textContent = 'Guardando…';
    actualizarPersonaje({ ...yo, aspecto: copia(a), doblones: yo.creador ? yo.doblones : yo.doblones - PRECIO_SASTRE });
    const error = await guardarAhora();
    if (error) { b.disabled = false; b.textContent = `No se pudo guardar: ${error}`; guardandoSastre = false; return; }
    location.href = portada(`?mar=${marActual()}&sastre=1`);
  });
} else if (idSastre) location.href = portada();

render();
