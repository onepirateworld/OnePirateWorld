// Mapa 2D de cerca: aparece al acercar el planeta. Funciona como un mapa web:
// arrastrar para moverse, rueda o pellizco para acercar. Cuanto más cerca, más detalle.
import { Lienzo } from '../arte/lienzo';
import { PALETA, C, hexARgb } from '../arte/paleta';
import { dibujarPersonaje, type AspectoPersonaje } from '../arte/personajes';
import { BARCOS_PRUEBA } from '../arte/barcos';
import { FRACCION_TIERRA, lienzoACanvas, spriteIsla } from '../arte/islaDetalle';
import { diametroEscena, escenario, sueloEscena } from '../arte/escena';

/** A partir de esta escala la isla se dibuja como escena (casas y árboles de verdad). */
const UMBRAL_ESCENA = 0.42;
const suelos = new Map<number, HTMLCanvasElement>();
function sueloCanvas(isla: IslaMundo) {
  let cv = suelos.get(isla.id);
  if (!cv) {
    cv = lienzoACanvas(sueloEscena(isla));
    suelos.set(isla.id, cv);
    if (suelos.size > 10) suelos.delete(suelos.keys().next().value!);
  }
  return cv;
}
import { ANCHO_CONTINENTE, LAT_CALMA, LAT_RUTA, ZONAS, distanciaContinente } from './geografia';
import type { Bando } from '../cuenta';
import type { IslaMundo, Posicion, TipoBarco } from './habitantes';

export interface Marcador {
  id: string;
  nombre: string;
  bando: Bando;
  aspecto: AspectoPersonaje;
  posicion: Posicion;
  barco: TipoBarco;
  esMio: boolean;
}

export interface Mapa {
  visible: boolean;
  mostrar(lat: number, lon: number, zoom?: number): void;
  ocultar(): void;
  centrarEn(lat: number, lon: number, zoom?: number): void;
  /** Zoom en el que la isla se ve a tamaño real del personaje. */
  zoomIsla(isla: IslaMundo): number;
  /** Punto exacto del mapa donde está un personaje (en su sitio de la isla). */
  posicionDe(m: Marcador): { lat: number; lon: number };
}

const envolver = (g: number) => ((((g + 180) % 360) + 360) % 360) - 180;
const RGB = PALETA.map((p) => hexARgb(p.hex));
const COLOR_BANDO: Record<Bando, string> = { pirata: '#e88ba0', marine: '#5cc3d8', revolucionario: '#8cc85a' };

function aCanvas(L: Lienzo) {
  const cv = document.createElement('canvas');
  cv.width = L.w; cv.height = L.h;
  cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
  return cv;
}
const hash = (x: number, y: number) => {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};

export function crearMapa(
  contenedor: HTMLElement,
  islas: IslaMundo[],
  opciones: {
    marcadores: () => Marcador[];
    alAlejar: (lat: number, lon: number) => void;
    alTocar: (m: Marcador | null, isla: IslaMundo | null) => void;
  },
): Mapa {
  const lienzo = document.createElement('canvas');
  lienzo.className = 'mapa-lienzo';
  const capa = document.createElement('div');
  capa.className = 'mapa-etiquetas';
  contenedor.append(lienzo, capa);
  const ctx = lienzo.getContext('2d')!;

  const P = window.innerWidth < 700 ? 2 : 3;        // píxeles de pantalla por píxel del mapa
  let W = 0, H = 0;
  let lat0 = 0, lon0 = 0, k = 10;                   // k: píxeles del mapa por grado
  let kMin = 6;
  const kMax = 420;
  let fondo: ImageData | null = null;
  let fondoClave = '';
  let vivo = false;

  // Sprites de barcos (y su versión mirando a la izquierda) y de personajes
  const barcos = Object.fromEntries(BARCOS_PRUEBA.map((b) => {
    const L = b.dibujar();
    return [b.id, { der: aCanvas(L), izq: aCanvas(L.voltear()) }];
  })) as Record<TipoBarco, { der: HTMLCanvasElement; izq: HTMLCanvasElement }>;
  const spritesPersonaje = new Map<string, HTMLCanvasElement>();
  const spritePersonaje = (m: Marcador) => {
    let s = spritesPersonaje.get(m.id);
    if (!s) { s = aCanvas(dibujarPersonaje(m.aspecto)); spritesPersonaje.set(m.id, s); }
    return s;
  };

  function redimensionar() {
    W = Math.ceil(contenedor.clientWidth / P);
    H = Math.ceil(contenedor.clientHeight / P);
    lienzo.width = W; lienzo.height = H;
    kMin = Math.max(3, W / 55);
    fondoClave = '';
  }
  window.addEventListener('resize', redimensionar);

  const cosLat = () => Math.cos(lat0 * Math.PI / 180);
  const aPantalla = (lat: number, lon: number): [number, number] => [W / 2 + envolver(lon - lon0) * cosLat() * k, H / 2 - (lat - lat0) * k];
  const aMundo = (x: number, y: number): [number, number] => [lat0 - (y - H / 2) / k, envolver(lon0 + (x - W / 2) / (k * cosLat()))];

  // --- Fondo: mar, franjas en calma, ruta central, continente y polos
  function pintarFondo() {
    const img = ctx.createImageData(W, H);
    const d = img.data;
    const cl = cosLat();
    for (let y = 0; y < H; y++) {
      const lat = lat0 - (y - H / 2) / k;
      const al = Math.abs(lat);
      for (let x = 0; x < W; x++) {
        const lon = lon0 + (x - W / 2) / (k * cl);
        // Olas: pequeños trazos en celdas fijas al mundo, para que no "bailen" al moverse
        const fx = lon * cl * k, fy = lat * k;
        const gx = Math.floor(fx / 7), gy = Math.floor(fy / 7);
        const lx = Math.floor(fx - gx * 7), ly = Math.floor(fy - gy * 7);
        const h = hash(gx, gy);
        let c: number = C.marHondo;
        const hondo = Math.sin(lat * 0.21 + 1.3) * Math.sin(lon * 0.17) + Math.sin(lat * 0.5 + lon * 0.3) * 0.3;
        if (hondo < -0.75 && (x + y) % 2) c = C.abismo;
        if (h < 0.14 && ly === 3 && lx >= 1 && lx <= 3 + Math.floor(h * 20)) c = C.mar;
        else if (h > 0.93 && ly === 3 && (lx === 2 || lx === 3)) c = C.bajio;
        if (al < LAT_RUTA) {
          const corriente = Math.sin(lat * 1.3 + Math.sin(lon * 0.09) * 3);
          if (corriente > 0.95 && (x + y) % 2) c = C.mar;
        } else if (al < LAT_CALMA) {
          c = h < 0.2 && ly === 3 && lx >= 1 && lx <= 4 ? C.espuma : C.bajio;
          if (al < LAT_RUTA + 0.4 || al > LAT_CALMA - 0.4) c = (x + y) % 2 ? C.bajio : C.espuma;
        }
        if (al > 79) c = h < 0.5 ? C.hueso : C.espuma;
        const dc = distanciaContinente(lon, lat);
        const ancho = ANCHO_CONTINENTE + Math.sin(lat * 0.7) * 0.6;
        if (dc < ancho) {
          const t = dc / ancho;
          c = t < 0.25 ? (h < 0.6 ? C.hueso : C.niebla) : t < 0.7 ? (h < 0.15 ? C.selva : h > 0.9 ? C.sombraVioleta : C.piedra) : h < 0.4 ? C.hoja : C.sombraVioleta;
          if (t > 0.93) c = C.tinta;
        } else if (dc < ancho + 0.25) c = (x + y) % 2 ? C.bajio : C.espuma;
        const [r, g, b] = RGB[c - 1];
        const i = (y * W + x) * 4;
        d[i] = r; d[i + 1] = g; d[i + 2] = b; d[i + 3] = 255;
      }
    }
    fondo = img;
  }

  // --- Etiquetas HTML (nombres de islas, zonas, "Tú")
  const pool = new Map<string, HTMLElement>();
  let usadas = new Set<string>();
  function etiqueta(id: string, html: string, x: number, y: number, clase: string) {
    let el = pool.get(id);
    if (!el) { el = document.createElement('div'); pool.set(id, el); capa.append(el); }
    if (el.dataset.html !== html) { el.innerHTML = html; el.dataset.html = html; }
    el.className = `mapa-etq ${clase}`;
    el.style.transform = `translate(${Math.round(x * P)}px, ${Math.round(y * P)}px) translate(-50%, -50%)`;
    usadas.add(id);
  }

  let tocables: { m: Marcador; x: number; y: number; r: number }[] = [];
  let islasEnPantalla: { isla: IslaMundo; x: number; y: number; r: number }[] = [];

  /** Sitio (en px de escena) que ocupa un personaje en su isla. */
  function sitioEn(m: Marcador, isla: IslaMundo): [number, number] {
    const esc = escenario(isla);
    if (m.esMio) return esc.sitios[0];
    let h = 0; for (const ch of m.id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return esc.sitios[1 + (h % Math.max(1, esc.sitios.length - 1))] ?? esc.sitios[0];
  }
  /** Escala de escena de una isla con el zoom actual (1 = tamaño real del personaje). */
  const escalaIsla = (isla: IslaMundo) => (2 * isla.radio * k) / diametroEscena(isla.radio);

  function dibujar(ahora: number) {
    const clave = `${W}x${H}:${lat0.toFixed(4)}:${lon0.toFixed(4)}:${k.toFixed(3)}`;
    if (clave !== fondoClave) { pintarFondo(); fondoClave = clave; }
    ctx.putImageData(fondo!, 0, 0);
    ctx.imageSmoothingEnabled = false;
    usadas = new Set();
    islasEnPantalla = [];
    tocables = [];

    // Cosas que se ordenan por profundidad (su base): objetos de las islas cercanas y personajes en ellas
    const capas: { y: number; pintar: () => void }[] = [];
    const sombras: [number, number, number][] = [];
    const enEscena = new Map<number, { x: number; y: number; s: number }>();

    // Islas
    for (const isla of islas) {
      const [x, y] = aPantalla(isla.lat, isla.lon);
      const tam = (2 * isla.radio / FRACCION_TIERRA) * k;
      if (x + tam < 0 || x - tam > W || y + tam < 0 || y - tam > H) continue;
      if (tam < 3) { ctx.fillStyle = PALETA[C.arena - 1].hex; ctx.fillRect(Math.round(x), Math.round(y), 1, 1); continue; }
      const s = escalaIsla(isla);
      const t = Math.round(tam);
      if (s >= UMBRAL_ESCENA) {
        // De cerca: suelo grande y objetos de verdad
        const suelo = sueloCanvas(isla);
        const ts = Math.round(suelo.width * s);
        ctx.drawImage(suelo, Math.round(x - ts / 2), Math.round(y - ts / 2), ts, ts);
        enEscena.set(isla.id, { x, y, s });
        for (const o of escenario(isla).objetos) {
          if (o.sprite.w < 2) continue;
          const sp = lienzoACanvas(o.sprite);
          const ox = x + o.x * s, oy = y + o.y * s;
          const w = Math.round(sp.width * s), h = Math.round(sp.height * s);
          if (ox + w < 0 || ox - w > W || oy - h > H || oy + 10 < 0) continue;
          if (o.sombra) sombras.push([ox, oy, o.sombra * s]);
          capas.push({ y: oy, pintar: () => ctx.drawImage(sp, Math.round(ox - w / 2), Math.round(oy - h + 2 * s), w, h) });
        }
      } else {
        ctx.drawImage(spriteIsla(isla, tam), Math.round(x - t / 2), Math.round(y - t / 2), t, t);
      }
      islasEnPantalla.push({ isla, x, y, r: (t / 2) * FRACCION_TIERRA });
      if (t * P > 90) {
        const extra = isla.especial === 'base' ? '<small>Base de la marina</small>' : isla.especial === 'taberna' ? '<small>Taberna</small>'
          : isla.especial === 'maestro' ? '<small>Maestro</small>' : '';
        const yE = Math.max(14, y - (t / 2) * FRACCION_TIERRA - 6);
        etiqueta(`i${isla.id}`, `${isla.nombre}${t * P > 260 ? extra : ''}`, x, yE, 'etq-isla');
      }
    }

    // Zonas (de lejos)
    if (k < kMin * 3) {
      for (const z of Object.values(ZONAS)) {
        if (!z.etiqueta) continue;
        const [x, y] = aPantalla(z.etiqueta.lat, z.etiqueta.lon);
        if (x > -50 && x < W + 50 && y > -20 && y < H + 20) etiqueta(`z${z.id}`, z.nombre, x, y, `etq-zona etq-${z.id}`);
      }
    }

    // Personajes y barcos
    const escGlobal = Math.min(2, Math.max(0.34, k / 230));
    const marcadores = opciones.marcadores();
    let yo: { x: number; y: number; alto: number } | null = null;
    for (const m of marcadores) {
      const pos = m.posicion;
      let [x, y] = aPantalla(pos.lat, pos.lon);
      const isla = pos.islaId !== undefined && !pos.navegando ? islas[pos.islaId] : null;
      const escena = isla ? enEscena.get(isla.id) : undefined;
      if (isla) {
        const [sx, sy] = sitioEn(m, isla);
        const f = escena ? escena.s : (2 * isla.radio * k) / diametroEscena(isla.radio);
        x += sx * f; y += sy * f;
      }
      if (x < -60 || x > W + 60 || y < -60 || y > H + 80) continue;
      if (pos.navegando) {
        const b = barcos[m.barco];
        const sp = pos.rumbo > 0 ? b.der : b.izq;
        const w = Math.max(6, Math.round(sp.width * escGlobal)), h = Math.max(4, Math.round(sp.height * escGlobal));
        const balanceo = Math.round(Math.sin(ahora / 400 + x) * escGlobal);
        capas.push({ y, pintar: () => {
          ctx.drawImage(sp, Math.round(x - w / 2), Math.round(y - h + 2 + balanceo), w, h);
          ctx.fillStyle = PALETA[C.espuma - 1].hex;
          for (let i = 1; i <= 3; i++) ctx.fillRect(Math.round(x - pos.rumbo * (w / 2 + i * 3 * escGlobal)), Math.round(y + 1), Math.max(1, Math.round(2 * escGlobal)), 1);
        } });
        tocables.push({ m, x, y: y - h / 2, r: Math.max(6, w / 2) });
        if (m.esMio) yo = { x, y, alto: h };
      } else if (escena) {
        const s = escena.s;
        const sp = spritePersonaje(m);
        const w = Math.round(32 * s);
        const respira = m.esMio ? 0 : Math.round(Math.sin(ahora / 600 + x * 0.1) * 0.6 * s);
        sombras.push([x, y, 7 * s]);
        capas.push({ y, pintar: () => ctx.drawImage(sp, Math.round(x - w / 2), Math.round(y - w + 2 * s + respira), w, w) });
        tocables.push({ m, x, y: y - w / 2, r: Math.max(8, w / 2.5) });
        if (m.esMio) yo = { x, y, alto: w };
      } else {
        capas.push({ y, pintar: () => {
          ctx.fillStyle = '#1a1423'; ctx.fillRect(Math.round(x) - 2, Math.round(y) - 2, 4, 4);
          ctx.fillStyle = m.esMio ? '#f2b63d' : COLOR_BANDO[m.bando]; ctx.fillRect(Math.round(x) - 1, Math.round(y) - 1, 2, 2);
        } });
        tocables.push({ m, x, y, r: 5 });
        if (m.esMio) yo = { x, y, alto: 4 };
      }
      if (m.esMio && yo) etiqueta('yo', `<span class="pin-yo">Tú · ${m.nombre}</span>`, yo.x, yo.y - yo.alto - 6, 'etq-yo');
    }

    // Sombras suaves y luego todo ordenado de atrás hacia delante
    ctx.fillStyle = 'rgba(18, 20, 40, 0.28)';
    for (const [x, y, rx] of sombras) { ctx.beginPath(); ctx.ellipse(x, y, rx, rx * 0.35, 0, 0, Math.PI * 2); ctx.fill(); }
    capas.sort((a, b) => a.y - b.y);
    for (const c of capas) c.pintar();

    for (const [id, el] of pool) if (!usadas.has(id)) { el.remove(); pool.delete(id); }
  }

  function bucle() {
    if (!vivo) return;
    dibujar(performance.now());
    requestAnimationFrame(bucle);
  }

  // --- Interacción: arrastrar, rueda y pellizco
  const punteros = new Map<number, { x: number; y: number }>();
  let pellizco = 0;
  let movido = 0;
  const limitar = () => { lat0 = Math.max(-82, Math.min(82, lat0)); lon0 = envolver(lon0); };
  function zoomEn(factor: number, sx: number, sy: number) {
    const [la, lo] = aMundo(sx, sy);
    const kNuevo = Math.min(kMax, k * factor);
    k = kNuevo;
    const [la2, lo2] = aMundo(sx, sy);
    lat0 += la - la2; lon0 += envolver(lo - lo2);
    limitar();
    if (k < kMin * 0.8) { vivo = false; opciones.alAlejar(lat0, lon0); }
  }
  lienzo.addEventListener('pointerdown', (e) => {
    lienzo.setPointerCapture(e.pointerId);
    punteros.set(e.pointerId, { x: e.clientX, y: e.clientY });
    movido = 0;
    if (punteros.size === 2) { const [a, b] = [...punteros.values()]; pellizco = Math.hypot(a.x - b.x, a.y - b.y); }
  });
  lienzo.addEventListener('pointermove', (e) => {
    const ant = punteros.get(e.pointerId);
    if (!ant) return;
    const act = { x: e.clientX, y: e.clientY };
    punteros.set(e.pointerId, act);
    if (punteros.size === 1) {
      const dx = (act.x - ant.x) / P, dy = (act.y - ant.y) / P;
      movido += Math.abs(dx) + Math.abs(dy);
      lat0 += dy / k; lon0 -= dx / (k * cosLat());
      limitar();
    } else if (punteros.size === 2) {
      const [a, b] = [...punteros.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (pellizco > 0) {
        const r = lienzo.getBoundingClientRect();
        zoomEn(dist / pellizco, ((a.x + b.x) / 2 - r.left) / P, ((a.y + b.y) / 2 - r.top) / P);
      }
      pellizco = dist;
      movido += 10;
    }
  });
  const soltar = (e: PointerEvent) => {
    const estaba = punteros.has(e.pointerId);
    punteros.delete(e.pointerId);
    if (punteros.size < 2) pellizco = 0;
    if (estaba && punteros.size === 0 && movido < 6) {
      const r = lienzo.getBoundingClientRect();
      const x = (e.clientX - r.left) / P, y = (e.clientY - r.top) / P;
      const toque = tocables.filter((t) => Math.hypot(t.x - x, t.y - y) < t.r + 4).sort((a, b) => Number(b.m.esMio) - Number(a.m.esMio))[0];
      const isla = islasEnPantalla.find((i) => Math.hypot(i.x - x, i.y - y) < i.r);
      opciones.alTocar(toque?.m ?? null, toque ? null : isla?.isla ?? null);
    }
  };
  lienzo.addEventListener('pointerup', soltar);
  lienzo.addEventListener('pointercancel', soltar);
  let abiertoEn = 0;
  lienzo.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (performance.now() - abiertoEn < 500) return;   // la rueda que venía del planeta no cuenta
    const r = lienzo.getBoundingClientRect();
    const f = Math.min(1.25, Math.max(0.8, Math.exp(-e.deltaY * 0.0015)));
    zoomEn(f, (e.clientX - r.left) / P, (e.clientY - r.top) / P);
  }, { passive: false });

  const mapa: Mapa = {
    visible: false,
    mostrar(lat, lon, zoom) {
      redimensionar();
      lat0 = lat; lon0 = lon; k = zoom ?? kMin * 1.4;
      limitar();
      contenedor.classList.add('activo');
      mapa.visible = true;
      abiertoEn = performance.now();
      if (!vivo) { vivo = true; bucle(); }
    },
    ocultar() {
      vivo = false;
      mapa.visible = false;
      contenedor.classList.remove('activo');
    },
    centrarEn(lat, lon, zoom) {
      // Animación suave hasta el destino
      const de = { lat: lat0, lon: lon0, k }, a = { lat, lon, k: zoom ?? k };
      const dlon = envolver(a.lon - de.lon);
      const t0 = performance.now(), dur = 700;
      const paso = (t: number) => {
        const f = Math.min(1, (t - t0) / dur), s = f * f * (3 - 2 * f);
        lat0 = de.lat + (a.lat - de.lat) * s; lon0 = envolver(de.lon + dlon * s);
        k = Math.exp(Math.log(de.k) + (Math.log(a.k) - Math.log(de.k)) * s);
        if (f < 1 && vivo) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    },
    zoomIsla(isla) {
      redimensionar();
      return Math.min(kMax, diametroEscena(isla.radio) / (2 * isla.radio));   // escala 1: tamaño real
    },
    posicionDe(m) {
      const pos = m.posicion;
      if (pos.navegando || pos.islaId === undefined) return { lat: pos.lat, lon: pos.lon };
      const isla = islas[pos.islaId];
      const [sx, sy] = sitioEn(m, isla);
      const gradosPorPx = (2 * isla.radio) / diametroEscena(isla.radio);
      return { lat: isla.lat - sy * gradosPorPx, lon: envolver(isla.lon + (sx * gradosPorPx) / Math.cos(isla.lat * Math.PI / 180)) };
    },
  };
  return mapa;
}
