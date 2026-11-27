import './estilos.css';
import './galeria.css';
import { montarMuestrario } from './probador';

montarMuestrario(document.getElementById('muestrario')!);

interface Item { id: string; nombre: string; archivo: string; ancho: number; alto: number; descripcion?: string; meta?: Record<string, any> }
interface Grupo { id: string; titulo: string; fondo: string; items: Item[] }
interface Manifiesto { paleta: { id: number; nombre: string; hex: string }[]; grupos: Grupo[] }

const raiz = document.getElementById('galeria')!;
let zoom = 4;

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

function sprite(archivo: string, w: number, h: number, extra = '') {
  return `<img src="/assets/${archivo}" width="${w * zoom}" height="${h * zoom}" alt="" ${extra}>`;
}

function pintar(m: Manifiesto) {
  const paleta = `
    <section class="panel-pergamino seccion">
      <h2>Paleta (32 colores)</h2>
      <p class="nota">Todo el arte del juego usa solo estos colores.</p>
      <div class="paleta">
        ${m.paleta.map((c) => `<div class="muestra" title="${c.id}. ${esc(c.nombre)} ${c.hex}"><span style="background:${c.hex}"></span><small>${esc(c.nombre)}</small></div>`).join('')}
      </div>
    </section>`;

  const grupos = m.grupos.map((g) => `
    <section class="panel-pergamino seccion">
      <h2>${esc(g.titulo)} <small>(${g.items.length})</small></h2>
      <div class="rejilla">
        ${g.items.map((it) => tarjeta(g, it)).join('')}
      </div>
    </section>`).join('');

  const ejemplo = `
    <section class="panel-pergamino seccion">
      <h2>Interfaz en uso</h2>
      <div class="demo-ui">
        <div class="panel-madera demo-barra">⚓ Mundo · Mi personaje · Noticias · Se busca</div>
        <div class="panel-pergamino demo-ficha">
          <h3>Ficha de prueba</h3>
          <p>Texto con la fuente pixelada: ¿Ñandú? ¡Sí! Áéíóú ü 0123456789</p>
          <button class="boton">Firmar el pacto</button>
        </div>
      </div>
    </section>`;

  raiz.innerHTML = paleta + grupos + ejemplo;
}

function tarjeta(g: Grupo, it: Item) {
  const meta = it.meta ?? {};
  const fruta = g.id === 'frutas';
  return `
    <article class="tarjeta" ${fruta ? `style="--rareza:${meta.colorRareza}"` : ''}>
      <div class="lamina fondo-${g.fondo}">
        ${sprite(it.archivo, it.ancho, it.alto)}
        ${fruta ? sprite(meta.silueta, it.ancho, it.alto, 'class="silueta" title="Silueta para el compendio"') : ''}
      </div>
      <h3>${esc(it.nombre)}</h3>
      ${fruta ? `<p class="etiquetas"><span class="rareza">${esc(meta.rareza)}</span> · ${esc(meta.categoria)}</p>` : ''}
      ${it.descripcion ? `<p>${esc(it.descripcion)}</p>` : ''}
      ${fruta ? `<p><b>Técnicas:</b> ${meta.tecnicas.map(esc).join(', ')}</p><p><b>Debilidad:</b> ${esc(meta.debilidad)}</p>` : ''}
      <p class="archivo">assets/${esc(it.archivo)} · ${it.ancho}×${it.alto}</p>
    </article>`;
}

let manifiesto: Manifiesto;
fetch('/assets/manifiesto.json')
  .then((r) => r.json())
  .then((m: Manifiesto) => { manifiesto = m; pintar(m); });

document.querySelectorAll<HTMLButtonElement>('[data-zoom]').forEach((b) =>
  b.addEventListener('click', () => {
    zoom = Number(b.dataset.zoom);
    document.querySelectorAll('[data-zoom]').forEach((o) => o.classList.toggle('activo', o === b));
    if (manifiesto) pintar(manifiesto);
  }),
);
