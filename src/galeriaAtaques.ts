// Galería: todos los ataques animados en bucle, para revisarlos de un vistazo.
import { Lienzo } from './arte/lienzo';
import { C } from './arte/paleta';
import { dibujarPersonaje, dibujarPersonajeEspalda, PERSONAJES_PRUEBA } from './arte/personajes';
import { pintarAnim, DURACION_ANIM } from './combate/animaciones';
import { todasLasTecnicas } from './combate/tecnicas';
import { FRUTAS } from './datos/frutas';

const W = 128, H = 80;
function aCanvas(L: Lienzo) {
  const cv = document.createElement('canvas');
  cv.width = L.w; cv.height = L.h;
  cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
  return cv;
}

export function montarAtaques(raiz: HTMLElement) {
  const yo = aCanvas(dibujarPersonajeEspalda(PERSONAJES_PRUEBA[1].aspecto));
  const rival = aCanvas(dibujarPersonaje(PERSONAJES_PRUEBA[0].aspecto));
  const nombreFruta = (g: string) => FRUTAS.find((f) => `Fruta ${f.id}` === g)?.nombre ?? g;
  const lista = todasLasTecnicas();
  raiz.innerHTML = `<p class="nota">${lista.length} ataques y habilidades. Cada uno se repite en bucle: el de espaldas ataca al de enfrente.</p>
    <div class="ataques">${lista.map(({ grupo, t }, i) => `
      <figure class="ataque"><canvas width="${W}" height="${H}" data-i="${i}"></canvas>
        <figcaption><b>${t.nombre}</b><small>${nombreFruta(grupo)}${t.poder ? ` · Poder ${t.poder}${t.golpes ? ` ×${t.golpes}` : ''}` : ''}</small><small>${t.descripcion}</small></figcaption>
      </figure>`).join('')}</div>`;
  const lienzos = Array.from(raiz.querySelectorAll<HTMLCanvasElement>('canvas[data-i]'));
  const de = { x: 34, y: 54 }, a = { x: 96, y: 26 };
  function cuadro(t: number) {
    for (const cv of lienzos) {
      const r = cv.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) continue;
      const { t: tec } = lista[Number(cv.dataset.i)];
      const ctx = cv.getContext('2d')!;
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = '#5cc3d8'; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#3d8a4a'; ctx.fillRect(0, 40, W, 40);
      ctx.fillStyle = '#e0c088';
      ctx.beginPath(); ctx.ellipse(96, 42, 20, 5, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(34, 74, 26, 6, 0, 0, Math.PI * 2); ctx.fill();
      const ciclo = DURACION_ANIM + 700;
      const fase = (t % ciclo) / DURACION_ANIM;
      const f = Math.min(1, fase);
      // Movimiento del atacante
      let dx = 0, dy = 0;
      if (fase <= 1) {
        if (tec.mov === 'salto') { dx = Math.sin(f * Math.PI) * 30 * f; dy = -Math.sin(f * Math.PI) * 26; }
        else if (tec.mov !== 'quieto') { const s = Math.sin(Math.min(1, f * 2) * Math.PI); dx = s * 12; dy = -s * 6; }
      }
      ctx.drawImage(rival, 80, 4, 32, 32);
      ctx.drawImage(yo, 10 + dx, 26 + dy, 48, 48);
      if (fase <= 1) pintarAnim(ctx, tec.anim, f, { x: de.x + dx, y: de.y + dy - 6 }, a);
    }
    requestAnimationFrame(cuadro);
  }
  requestAnimationFrame(cuadro);
}
void C;
