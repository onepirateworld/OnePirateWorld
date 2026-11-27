// Menú de personalización (paso 2 "Aspecto" de la creación de personaje).
// Empieza con un maniquí sin color, sin pelo y en ropa interior.
import './estilos.css';
import './creador.css';
import { Lienzo, azar } from './arte/lienzo';
import { PALETA } from './arte/paleta';
import { BANDOS, cuentaActual, guardarPersonaje, marActual, type Bando } from './cuenta';
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
function guardar(a: AspectoPersonaje) {
  try { localStorage.setItem(CLAVE_BORRADOR, JSON.stringify(a)); } catch { /* da igual */ }
}

let a = cargar();
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
  // --- Bando elegido en la pantalla principal
const bandoParam = new URLSearchParams(location.search).get('bando') as Bando | null;
const bando: Bando = bandoParam && bandoParam in BANDOS ? bandoParam : 'pirata';
const pasoBando = document.querySelector<HTMLElement>('#paso-bando')!;
pasoBando.innerHTML = `<a href="/?perfil=1">1 · ${BANDOS[bando].nombre} ✓</a>`;

// --- Guardar: pide el nombre y suelta al personaje en el mundo
const dlg = document.querySelector<HTMLDialogElement>('#dlg-nombre')!;
const inputNombre = document.querySelector<HTMLInputElement>('#input-nombre')!;
document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('#guardar')) {
    if (!cuentaActual()) { location.href = '/?pacto=1'; return; }
    document.querySelector('#dlg-bando')!.textContent = BANDOS[bando].nombre.toLowerCase();
    dlg.showModal();
    inputNombre.focus();
  }
});
document.querySelector('#cancelar-nombre')!.addEventListener('click', () => dlg.close());
document.querySelector<HTMLFormElement>('#form-nombre')!.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = inputNombre.value.trim();
  if (!nombre) return;
  guardarPersonaje({ nombre, bando, aspecto: a, mar: marActual() });
  try { localStorage.removeItem(CLAVE_BORRADOR); } catch { /* nada */ }
  location.href = `/?mar=${marActual()}&creado=1`;
});

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

function render() {
  const L = dibujarPersonaje(a);
  aCanvas(L, 9, vistaGrande);
  aCanvas(L, 2, vistaReal);
  $<HTMLButtonElement>('#deshacer').disabled = historial.length === 0;

  pestanasEl.innerHTML = PESTANAS.map((p, i) =>
    `<button class="pestana ${i === pestana ? 'activa' : ''} ${hecha(p) ? 'hecha' : ''}" data-pestana="${i}">${p.titulo}</button>`).join('');

  const p = PESTANAS[pestana];
  const ops = Object.entries(p.opciones(a)).filter(([, t]) => t) as [string, string][];
  panelEl.innerHTML = `
    <h2>${p.titulo}</h2>
    ${p.nota ? `<p class="nota">${p.nota}</p>` : ''}
    <div class="opciones ${p.cabeza ? 'cabeza' : ''}">
      ${ops.map(([v, t]) => {
        const sel = p.multi ? (a[p.multi] as string[]).includes(v) : a[p.clave!] === v;
        return `<button class="opcion ${sel ? 'sel' : ''}" data-v="${v}" aria-pressed="${sel}"><span class="mini"></span><span>${esc(t)}</span></button>`;
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
        : `<button class="boton" id="guardar">Guardar personaje ✓</button>`}
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

  resumenEl.innerHTML = resumen().map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join('');
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
  ];
}

document.addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest('button');
  if (!b || b.disabled) return;
  const d = b.dataset;
  const p = PESTANAS[pestana];
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
  else if (b.id === 'azar') cambiar((n) => Object.assign(n, aspectoAlAzar(azar(semilla++ * 7919), a.cuerpo)));
  else if (b.id === 'cero') cambiar((n) => Object.assign(n, copia(ASPECTO_BASE), { cuerpo: a.cuerpo }));
  else if (b.id === 'deshacer' && historial.length) { a = historial.pop()!; guardar(a); render(); }
});

// --- Bando elegido en la pantalla principal
const bandoParam = new URLSearchParams(location.search).get('bando') as Bando | null;
const bando: Bando = bandoParam && bandoParam in BANDOS ? bandoParam : 'pirata';
const pasoBando = document.querySelector<HTMLElement>('#paso-bando')!;
pasoBando.innerHTML = `<a href="/?perfil=1">1 · ${BANDOS[bando].nombre} ✓</a>`;

// --- Guardar: pide el nombre y suelta al personaje en el mundo
const dlg = document.querySelector<HTMLDialogElement>('#dlg-nombre')!;
const inputNombre = document.querySelector<HTMLInputElement>('#input-nombre')!;
document.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('#guardar')) {
    if (!cuentaActual()) { location.href = '/?pacto=1'; return; }
    document.querySelector('#dlg-bando')!.textContent = BANDOS[bando].nombre.toLowerCase();
    dlg.showModal();
    inputNombre.focus();
  }
});
document.querySelector('#cancelar-nombre')!.addEventListener('click', () => dlg.close());
document.querySelector<HTMLFormElement>('#form-nombre')!.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = inputNombre.value.trim();
  if (!nombre) return;
  guardarPersonaje({ nombre, bando, aspecto: a, mar: marActual() });
  try { localStorage.removeItem(CLAVE_BORRADOR); } catch { /* nada */ }
  location.href = `/?mar=${marActual()}&creado=1`;
});

render();
