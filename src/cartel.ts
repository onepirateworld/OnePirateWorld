// "Hoja de vida": la ficha en pergamino de tu personaje (nombre, recompensa, sueño...).
import './cartel.css';
import { dibujarPersonaje } from './arte/personajes';
import type { Lienzo } from './arte/lienzo';
import { RASGOS } from './datos/caracter';
import { FRUTAS } from './datos/frutas';
import { BANDOS, MARES, type PersonajeGuardado } from './cuenta';
import { formatoDoblones, rangoDe } from './mundo/cronica';
import { islaDePersonaje } from './mundo/habitantes';
import { rangoMarine } from './mundo/busqueda';

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

/** Título según el bando y el nivel (los marines usan los rangos de la Marina). */
export function tituloDe(p: PersonajeGuardado): string {
  if (p.creador) return 'Creador';
  if (p.bando === 'marine') return rangoMarine(p);
  const escala = p.bando === 'pirata'
    ? ['Grumete', 'Bucanero', 'Corsario', 'Capitán', 'Señor de los mares']
    : ['Simpatizante', 'Rebelde', 'Agitador', 'Comandante', 'Líder de la revolución'];
  return escala[Math.min(escala.length - 1, Math.floor(p.nivel / 16))];
}

function lienzoACanvas(L: Lienzo, escala: number) {
  const cv = document.createElement('canvas');
  cv.width = L.w; cv.height = L.h;
  cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
  cv.style.width = `${L.w * escala}px`; cv.style.height = `${L.h * escala}px`;
  return cv;
}

/** Número corto y estable para cada personaje (como un número de registro). */
const numero = (id: string) => { let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0; return 1000 + (h % 9000); };

export function abrirCartel(p: PersonajeGuardado) {
  document.querySelector('#dlg-cartel')?.remove();
  const dlg = document.createElement('dialog');
  dlg.id = 'dlg-cartel';
  dlg.className = 'cartel-dlg';
  const rasgos = p.rasgos.map((id) => RASGOS.find((r) => r.id === id)?.nombre.toLowerCase()).filter(Boolean);
  const fruta = p.fruta ? FRUTAS.find((f) => f.id === p.fruta) : null;
  const dias = Math.max(1, Math.ceil((Date.now() - p.creado) / 86_400_000));
  const mar = MARES.find((m) => m.id === p.mar)?.nombre ?? '';
  const recompensa = p.bando === 'marine' ? 0 : p.recompensa ?? 0;
  const capturas = p.capturas ?? { pirata: 0, revolucionario: 0 };
  const cifra = recompensa.toLocaleString('es-ES');

  const cartel = p.bando === 'marine'
    ? `<div class="cartel-caja marina"><div class="cartel-caja-fila"><span>AL SERVICIO</span><span class="azul">DE LA MARINA</span></div>
         <b class="cartel-cifra rango">${esc(tituloDe(p))}</b>
         <div class="capturas"><div><b>${capturas.pirata}</b><small>piratas capturados</small></div><div><b>${capturas.revolucionario}</b><small>revolucionarios capturados</small></div></div></div>`
    : `<div class="cartel-caja"><div class="cartel-caja-fila"><span>SE BUSCA</span><span class="rojo">VIVO O MUERTO</span></div>
         ${recompensa ? `<b class="cartel-cifra ${cifra.length > 11 ? 'larga' : ''}">${cifra}</b><small>doblones${recompensa >= 1_000_000 ? ` · ${formatoDoblones(recompensa)}` : ''}</small>`
           : '<b class="cartel-cifra sin">Sin recompensa</b><small>Aún nadie paga por su cabeza.</small>'}</div>`;

  dlg.innerHTML = `
    <div class="pergamino">
      <button class="cartel-cerrar" aria-label="Cerrar">✕</button>
      <header><span class="cartel-titulo">Hoja de vida</span><span class="cartel-num">Nº ${numero(p.id)}</span></header>
      <div class="cartel-retrato"></div>
      <h2 class="cartel-nombre">${esc(p.nombre)}</h2>
      ${p.apodo ? `<p class="cartel-apodo">«${esc(p.apodo)}»</p>` : ''}
      <p class="cartel-bando bando-${p.bando}">${esc(BANDOS[p.bando].nombre)} · ${esc(tituloDe(p))}</p>
      ${cartel}
      <div class="cartel-sueno"><span class="estrella">☆</span><div><small>SU SUEÑO</small><p>${esc(p.sueno || 'Todavía no tiene un sueño.')}</p></div></div>
      ${fruta ? `<div class="cartel-sueno fruta"><span class="estrella">✦</span><div><small>FRUTA DEL PODER</small><p>${esc(fruta.nombre)}</p></div></div>` : ''}
      <div class="cartel-cifras">
        <div><b>${p.nivel}</b><small>NIVEL</small></div>
        <div><b>${p.creador ? '∞' : formatoDoblones(p.doblones)}</b><small>DOBLONES</small></div>
        <div><b>${dias}</b><small>${dias === 1 ? 'DÍA' : 'DÍAS'} EN EL MAR</small></div>
      </div>
      ${rasgos.length ? `<p class="cartel-rasgos">~ ${rasgos.map((r) => esc(r!)).join(' ~ ')} ~</p>` : ''}
      <p class="cartel-lugar">Visto por última vez en ${esc(islaDePersonaje(p).nombre)} · ${esc(mar)}</p>
    </div>`;
  dlg.querySelector('.cartel-retrato')!.append(lienzoACanvas(dibujarPersonaje(p.aspecto), 4));
  document.body.append(dlg);
  const cerrar = () => { dlg.close(); dlg.remove(); };
  dlg.querySelector('.cartel-cerrar')!.addEventListener('click', cerrar);
  dlg.addEventListener('click', (e) => { if (e.target === dlg) cerrar(); });
  dlg.addEventListener('cancel', () => dlg.remove());
  dlg.showModal();
}
