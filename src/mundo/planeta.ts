// Planeta 3D pixelado: se renderiza a baja resolución y se escala sin suavizar.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Lienzo } from '../arte/lienzo';
import { PALETA } from '../arte/paleta';
import { generarIslas, ZONAS, type Isla } from './geografia';
import { pintarNubes, pintarPlaneta } from './textura';

/** Posición 3D (radio 1) de una latitud/longitud, igual que el mapeo UV de THREE.SphereGeometry. */
export function posicion(lat: number, lon: number, radio = 1) {
  const u = (lon + 180) / 360;
  const phi = u * Math.PI * 2;
  const theta = ((90 - lat) * Math.PI) / 180;
  return new THREE.Vector3(-Math.cos(phi) * Math.sin(theta), Math.cos(theta), Math.sin(phi) * Math.sin(theta)).multiplyScalar(radio);
}

function texturaDe(L: Lienzo) {
  // DataTexture: la fila 0 es abajo (sur), así que volteamos.
  const rgba = L.aRGBA();
  const volteado = new Uint8Array(rgba.length);
  const fila = L.w * 4;
  for (let y = 0; y < L.h; y++) volteado.set(rgba.subarray(y * fila, (y + 1) * fila), (L.h - 1 - y) * fila);
  const t = new THREE.DataTexture(volteado, L.w, L.h, THREE.RGBAFormat);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

export interface Etiqueta { texto: string; lat: number; lon: number; tipo: 'mar' | 'ruta' | 'continente' | 'calma' }

export interface MarcadorGlobo { id: string; lat: number; lon: number; esMio: boolean; color: string; cabeza?: HTMLCanvasElement }

export interface Planeta {
  islas: Isla[];
  /** Latitud y longitud del punto del planeta que hay en el centro de la pantalla. */
  centroVista(): { lat: number; lon: number };
  /** Gira (y acerca o aleja) la cámara hasta mirar a ese punto. */
  irA(lat: number, lon: number, distancia?: number, alTerminar?: () => void): void;
  pausar(): void;
  reanudar(): void;
  /** Cambia cuántos píxeles de pantalla mide cada píxel del render. */
  setPixel(n: number): void;
  destruir(): void;
}

export function crearPlaneta(contenedor: HTMLElement, capaEtiquetas: HTMLElement, opciones: { alAcercar?: (cerca: boolean) => void; marcadores?: () => MarcadorGlobo[] } = {}): Planeta {
  let tamPixel = window.innerWidth < 700 ? 2 : 3;

  const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const lienzo = renderer.domElement;
  lienzo.className = 'planeta-lienzo';
  contenedor.prepend(lienzo);

  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(32, 1, 0.1, 200);

  // --- Planeta
  const islas = generarIslas();
  const globo = new THREE.Mesh(
    new THREE.SphereGeometry(1, 128, 96),
    new THREE.MeshLambertMaterial({ map: texturaDe(pintarPlaneta(islas)) }),
  );
  escena.add(globo);

  // --- Nubes animadas
  const nubes = new THREE.Mesh(
    new THREE.SphereGeometry(1.025, 96, 64),
    new THREE.MeshLambertMaterial({ map: texturaDe(pintarNubes()), transparent: true, opacity: 0.8, alphaTest: 0.5, depthWrite: false }),
  );
  escena.add(nubes);

  // --- Atmósfera (brillo en el borde)
  const atmosfera = new THREE.Mesh(
    new THREE.SphereGeometry(1.13, 64, 48),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
      uniforms: { color: { value: new THREE.Color(PALETA[25].hex) } },
      vertexShader: `varying vec3 vN; varying vec3 vP;
        void main(){ vN = normalize(normalMatrix * normal); vec4 p = modelViewMatrix * vec4(position,1.0); vP = p.xyz; gl_Position = projectionMatrix * p; }`,
      fragmentShader: `uniform vec3 color; varying vec3 vN; varying vec3 vP;
        void main(){ float f = pow(1.0 - abs(dot(normalize(-vP), vN)), 3.0); float b = floor(f * 4.0) / 4.0; gl_FragColor = vec4(color, b * 0.9); }`,
    }),
  );
  escena.add(atmosfera);

  // --- Estrellas
  {
    const n = 700, pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
    const tonos = [PALETA[5], PALETA[26], PALETA[18], PALETA[4]].map((c) => new THREE.Color(c.hex));
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(60 + Math.random() * 30);
      pos.set([v.x, v.y, v.z], i * 3);
      const t = tonos[Math.floor(Math.random() * tonos.length)];
      col.set([t.r, t.g, t.b], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    escena.add(new THREE.Points(g, new THREE.PointsMaterial({ size: 1, sizeAttenuation: false, vertexColors: true })));
  }

  // --- Luz: el sol gira despacio (día y noche)
  const sol = new THREE.DirectionalLight(0xffffff, 2.6);
  escena.add(sol);
  escena.add(new THREE.AmbientLight(new THREE.Color(PALETA[1].hex), 1.3)); // la cara oscura queda azul noche

  // --- Controles: girar con ratón o dedo, zoom con rueda o pellizco
  const controles = new OrbitControls(camara, contenedor);
  controles.enablePan = false;
  controles.enableDamping = true;
  controles.dampingFactor = 0.08;
  controles.rotateSpeed = 0.5;
  controles.minDistance = 1.7;
  controles.maxDistance = 8;
  controles.autoRotate = true;
  controles.autoRotateSpeed = 0.35;
  let reanudar: number | undefined;
  controles.addEventListener('start', () => { controles.autoRotate = false; clearTimeout(reanudar); });
  controles.addEventListener('end', () => { reanudar = window.setTimeout(() => (controles.autoRotate = true), 6000); });

  // --- Etiquetas HTML pegadas al planeta
  const etiquetas: (Etiqueta & { el: HTMLElement; p: THREE.Vector3 })[] = [];
  const nuevas: Etiqueta[] = [
    ...(['alba', 'ocaso', 'coral', 'bruma'] as const).map((id) => ({ texto: ZONAS[id].nombre, ...ZONAS[id].etiqueta!, tipo: 'mar' as const })),
    { texto: ZONAS.mareas.nombre, ...ZONAS.mareas.etiqueta!, tipo: 'ruta' },
    { texto: ZONAS.profunda.nombre, ...ZONAS.profunda.etiqueta!, tipo: 'ruta' },
    { texto: ZONAS.dormidas.nombre, lat: 11, lon: 140, tipo: 'calma' },
    { texto: ZONAS.dormidas.nombre, lat: -11, lon: -40, tipo: 'calma' },
    { texto: ZONAS.espinazo.nombre, lat: 30, lon: 0, tipo: 'continente' },
    { texto: ZONAS.espinazo.nombre, lat: -30, lon: 180, tipo: 'continente' },
  ];
  for (const e of nuevas) {
    const el = document.createElement('div');
    el.className = `etiqueta etiqueta-${e.tipo}`;
    el.textContent = e.texto;
    capaEtiquetas.append(el);
    etiquetas.push({ ...e, el, p: posicion(e.lat, e.lon, 1.03) });
  }

  /** Distancia para que el planeta (con su brillo) quepa entero, dejando sitio a la interfaz. */
  function distanciaAjustada() {
    const w = contenedor.clientWidth, h = contenedor.clientHeight;
    const tan = Math.tan((camara.fov / 2) * Math.PI / 180);
    const radio = 1.15;
    const porAlto = radio / (tan * 0.62);              // ocupa ~62% del alto
    const porAncho = radio / (tan * (w / h) * 0.86);    // y como mucho ~86% del ancho
    return Math.max(porAlto, porAncho);
  }

  function redimensionar() {
    const w = contenedor.clientWidth, h = contenedor.clientHeight;
    renderer.setSize(Math.ceil(w / tamPixel), Math.ceil(h / tamPixel), false);
    camara.aspect = w / h;
    // Subimos el planeta para centrarlo en el hueco entre la barra de arriba y la ficha de abajo
    camara.setViewOffset(w, h, 0, Math.round(h * (w < h ? 0.07 : 0.03)), w, h);
    camara.updateProjectionMatrix();
    const d = distanciaAjustada();
    controles.maxDistance = d * 1.5;
  }
  window.addEventListener('resize', redimensionar);
  redimensionar();
  // Cámara inicial: mirando al Mar del Alba, con el planeta entero a la vista
  camara.position.copy(posicion(16, 28, 1)).normalize().multiplyScalar(distanciaAjustada());

  const reloj = new THREE.Clock();
  const tmp = new THREE.Vector3();
  let cercaAntes = false;
  const elMarcadores = new Map<string, HTMLElement>();
  let vuelo: { de: THREE.Vector3; a: THREE.Vector3; dDe: number; dA: number; t0: number; dur: number; fin?: () => void } | null = null;
  let vivo = true;
  function bucle() {
    if (!vivo) return;
    requestAnimationFrame(bucle);
    const t = reloj.getElapsedTime();
    nubes.rotation.y = t * 0.012;
    sol.position.set(Math.cos(t * 0.03) * 5, 1.5, Math.sin(t * 0.03) * 5);
    controles.update();
    renderer.render(escena, camara);

    // Etiquetas: visibles solo en la cara que mira a la cámara
    const w = contenedor.clientWidth, h = contenedor.clientHeight;
    const dirCam = tmp.copy(camara.position).normalize();
    for (const e of etiquetas) {
      const cara = e.p.clone().normalize().dot(dirCam);
      if (cara < 0.25) { e.el.style.opacity = '0'; continue; }
      const s = e.p.clone().project(camara);
      e.el.style.opacity = String(Math.min(1, (cara - 0.25) * 4));
      e.el.style.transform = `translate(${((s.x + 1) / 2) * w}px, ${((1 - s.y) / 2) * h}px) translate(-50%, -50%)`;
    }

    // Marcadores de personajes
    const lista = opciones.marcadores?.() ?? [];
    const vistos = new Set<string>();
    for (const m of lista) {
      vistos.add(m.id);
      let el = elMarcadores.get(m.id);
      if (!el) {
        el = document.createElement('div');
        el.className = m.esMio ? 'marca marca-yo' : 'marca marca-bot';
        if (m.esMio) { el.innerHTML = '<span class="marca-texto">Tú</span>'; if (m.cabeza) el.prepend(m.cabeza); }
        else el.style.background = m.color;
        capaEtiquetas.append(el);
        elMarcadores.set(m.id, el);
      }
      const p = posicion(m.lat, m.lon, 1.01);
      const cara = p.clone().normalize().dot(dirCam);
      if (cara < 0.15) { el.style.opacity = '0'; continue; }
      const s = p.project(camara);
      el.style.opacity = String(Math.min(1, (cara - 0.15) * 5));
      el.style.transform = `translate(${((s.x + 1) / 2) * w}px, ${((1 - s.y) / 2) * h}px) translate(-50%, ${m.esMio ? '-100%' : '-50%'})`;
    }
    for (const [id, el] of elMarcadores) if (!vistos.has(id)) { el.remove(); elMarcadores.delete(id); }

    // Animación de la cámara (irA)
    if (vuelo) {
      const f = Math.min(1, (performance.now() - vuelo.t0) / vuelo.dur), sm = f * f * (3 - 2 * f);
      camara.position.copy(vuelo.de).lerp(vuelo.a, sm).normalize().multiplyScalar(vuelo.dDe + (vuelo.dA - vuelo.dDe) * sm);
      if (f >= 1) { const fin = vuelo.fin; vuelo = null; fin?.(); }
    }

    const cerca = camara.position.length() < 2.1;
    if (cerca !== cercaAntes) { cercaAntes = cerca; opciones.alAcercar?.(cerca); }
  }
  bucle();

  return {
    islas,
    centroVista() {
      const v = camara.position.clone().normalize();
      const lat = Math.asin(v.y) * 180 / Math.PI;
      let phi = Math.atan2(v.z, -v.x);
      if (phi < 0) phi += Math.PI * 2;
      return { lat, lon: (phi / (Math.PI * 2)) * 360 - 180 };
    },
    irA(lat, lon, distancia, alTerminar) {
      controles.autoRotate = false;
      clearTimeout(reanudar);
      const dDe = camara.position.length();
      vuelo = { de: camara.position.clone().normalize(), a: posicion(lat, lon).normalize(), dDe, dA: distancia ?? dDe, t0: performance.now(), dur: 900, fin: alTerminar };
      reanudar = window.setTimeout(() => (controles.autoRotate = true), 9000);
    },
    pausar() { vivo = false; },
    reanudar() { if (!vivo) { vivo = true; cercaAntes = camara.position.length() < 2.1; bucle(); } },
    setPixel(n) { tamPixel = n; redimensionar(); },
    destruir() { vivo = false; renderer.dispose(); lienzo.remove(); capaEtiquetas.innerHTML = ''; },
  };
}
