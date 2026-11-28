// Paneles de la pantalla principal: Mi pirata, Noticias, Taberna, Tablones, Más, En vivo...
// Se abren en una hoja sobre el mapa. Lo que aún no existe aparece bloqueado.
import { Lienzo } from './arte/lienzo';
import { C } from './arte/paleta';
import { dibujarPersonaje, type AspectoPersonaje } from './arte/personajes';
import { dibujarFruta, siluetaFruta } from './arte/frutas';
import { FRUTAS, CATEGORIAS, RAREZAS, DEBILIDAD_COMUN } from './datos/frutas';
import { RASGOS } from './datos/caracter';
import { abrirCartel } from './cartel';
import { LOGROS, NOMBRES_ESTADISTICAS, estadisticasIniciales, objetivosPara, type Estadisticas } from './datos/progreso';
import {
  BANDOS, actualizarPersonaje, arsenalDe, cuentaActual, esModerador, marActual, personajeActivo, personajes, personajesDeOtros, type Bando, type PersonajeGuardado,
} from './cuenta';
import {
  CATALOGO_ARMAS, CATALOGO_HABILIDADES, MAX_EQUIPADAS, MEJORA_POR_PUNTO, NIVEL_MAX, arma, habilidadUsable, precioForja, precioHabilidad,
  puntosLibres, type Arsenal, type Estadistica,
} from './datos/arsenal';
import { TECNICAS_FRUTA } from './combate/tecnicas';
import { cargarMensajes, enviarMensaje, escucharMensajes, estado as estadoServidor, ocultarMensaje, reportar, type FilaMensaje } from './servidor';
import { botsDelMar, islaDePersonaje, islasDelMundo, nombreZona, posicionBot, type Bot } from './mundo/habitantes';
import { cronica, frutasDelMar, formatoDoblones, haceCuanto, rangoDe, recompensa, type Suceso } from './mundo/cronica';
import { icono } from './iconos';
import { REQUISITOS, estadoPrenda } from './datos/vestuario';
import { OPCIONES } from './arte/personajes';
import { NIVEL_FUNDAR, botsDeTripulaciones, resumenTripulacion, tripulacionDe, tripulacionesDelMar } from './mundo/tripulaciones';
import { ultimosDuelos } from './servidor';
import { adminBorrar, adminPersonaje, adminRol, adminRoles, adminTodos, disolverTripulacion, fundarTripulacion } from './servidor';
import { volverConTripulacion } from './mundo/vida';
import { NIVEL_RUMORES, PISTAS_NECESARIAS, nivelGuardian, guardianAqui, islaDeBusqueda, rangoMarine, textoPista, topeMeritosDia, topeRecompensaDia } from './mundo/busqueda';
import { ruta } from './rutas';
import { BARCOS_PRUEBA } from './arte/barcos';
import { BARCOS, PRECIO_SASTRE, PROVISIONES, bolsaDe, type IdBarco } from './datos/tienda';

export type IdPanel = 'arsenal' | 'mi-pirata' | 'noticias' | 'taberna' | 'tablones' | 'mas' | 'en-vivo' | 'se-busca' | 'cofre' | 'compendio' | 'guia' | 'normas' | 'privacidad' | 'tienda' | 'creador';

interface Acciones {
  aviso(t: string): void;
  localizar(): void;
  abrirPerfil(): void;
  abrirMares(): void;
  cerrarSesion(): void;
  entrenar(): void;
  guardian(): void;
  navegarA(isla: number): void;
  comerFruta(): void;
  desafiar(id: string): void;
  rutaGaleria: string;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const nombreBot = (b: Bot) => (b.apodo ? `${b.nombre} «${b.apodo}»` : b.nombre);

function aCanvas(L: Lienzo, escala: number) {
  const cv = document.createElement('canvas');
  cv.width = L.w; cv.height = L.h;
  cv.style.width = `${L.w * escala}px`; cv.style.height = `${L.h * escala}px`;
  cv.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
  return cv;
}
function cara(a: AspectoPersonaje, escala: number) {
  const L = dibujarPersonaje(a);
  const r = new Lienzo(20, 16);
  for (let y = 0; y < 16; y++) for (let x = 0; x < 20; x++) r.px(x, y, L.get(x + 6, y));
  return aCanvas(r, escala);
}
/** Sustituye los <i data-sprite="..."> por canvas. */
function ponerSprites(raiz: HTMLElement, sprites: Map<string, HTMLCanvasElement>) {
  raiz.querySelectorAll<HTMLElement>('[data-sprite]').forEach((el) => { const cv = sprites.get(el.dataset.sprite!); if (cv) el.replaceWith(cv.cloneNode(true) instanceof HTMLCanvasElement ? copiarCanvas(cv) : cv); });
}
function copiarCanvas(cv: HTMLCanvasElement) {
  const c = document.createElement('canvas');
  c.width = cv.width; c.height = cv.height; c.style.cssText = cv.style.cssText;
  c.getContext('2d')!.drawImage(cv, 0, 0);
  return c;
}

function bloqueado(titulo: string, texto: string) {
  return `<div class="bloqueado"><span class="candado">🔒</span><b>${titulo}</b><small>${texto}</small></div>`;
}

export function crearPaneles(acc: Acciones) {
  const hoja = document.querySelector<HTMLElement>('#hoja')!;
  const titulo = hoja.querySelector<HTMLElement>('.hoja-titulo')!;
  let cuerpo = hoja.querySelector<HTMLElement>('.hoja-cuerpo')!;
  const volver = hoja.querySelector<HTMLButtonElement>('.hoja-volver')!;
  let actual: IdPanel | null = null;
  const pila: IdPanel[] = [];

  hoja.querySelector('.hoja-cerrar')!.addEventListener('click', cerrar);
  volver.addEventListener('click', () => { const ant = pila.pop(); if (ant) abrir(ant, false); });

  function cerrar() {
    limpiarChat?.(); limpiarChat = null;
    hoja.hidden = true; actual = null; pila.length = 0;
    document.body.classList.remove('con-hoja');
    document.querySelectorAll('.barra-inf button').forEach((b) => b.classList.remove('activo'));
  }

  function abrir(id: IdPanel, apilar = true) {
    if (apilar && actual && actual !== id && ['mas', 'tablones', 'mi-pirata'].includes(actual)) pila.push(actual);
    if (!apilar && id === actual) { /* recarga del mismo panel */ }
    if (apilar && (!actual || !['mas', 'tablones', 'mi-pirata'].includes(actual))) pila.length = 0;
    actual = id;
    hoja.hidden = false;
    document.body.classList.add('con-hoja');
    document.querySelectorAll<HTMLElement>('.barra-inf button').forEach((b) => b.classList.toggle('activo', b.dataset.panel === id));
    volver.hidden = pila.length === 0;
    // Contenedor nuevo en cada apertura: así no se acumulan los «clics» de la vez anterior
    const limpio = cuerpo.cloneNode(false) as HTMLElement;
    cuerpo.replaceWith(limpio); cuerpo = limpio;
    cuerpo.scrollTop = 0;
    const r = PANELES[id]();
    titulo.textContent = r.titulo;
    cuerpo.innerHTML = r.html;
    r.despues?.(cuerpo);
  }

  // -------------------------------------------------------------------------
  const PANELES: Record<IdPanel, () => { titulo: string; html: string; despues?: (el: HTMLElement) => void }> = {
    'mi-pirata': miPirata,
    arsenal: arsenalPanel,
    noticias,
    taberna,
    tablones,
    mas,
    'en-vivo': enVivo,
    'se-busca': seBusca,
    cofre,
    compendio,
    guia,
    normas,
    privacidad,
    tienda,
    creador: panelCreador,
  };

  // --- Mi pirata --------------------------------------------------------------
  function miPirata() {
    const p = cuentaActual() ? personajeActivo() : null;
    if (!p) return { titulo: 'Mi pirata', html: `<p class="vacio">Aún no tienes personaje.</p><button class="boton-oro ancho" data-accion="perfil">Crear personaje</button>`,
      despues: enlazarAcciones };
    const isla = islaDePersonaje(p);
    // Estadísticas reales: nivel + rasgos + mejoras del Arsenal (+ fama según recompensa o méritos)
    const est = estadisticasIniciales(p.rasgos, p.nivel);
    for (const [k, n] of Object.entries(arsenalDe(p).mejoras) as [Estadistica, number][]) (est as unknown as Record<string, number>)[k] += MEJORA_POR_PUNTO[k].cantidad * n;
    est.fama = Math.min(100, p.bando === 'marine' ? Math.floor((p.meritos ?? 0) / 100) : Math.floor(Math.log10(1 + (p.recompensa ?? 0)) * 10));
    const rasgos = p.rasgos.map((id) => RASGOS.find((r) => r.id === id)).filter(Boolean);
    const objetivos = objetivosPara(p.bando);
    const obj = objetivos.find((o) => o.id === p.objetivo);
    const vecinos = botsDelMar(marActual()).filter((b) => { const pos = posicionBot(b); return !pos.navegando && pos.islaId === isla.id; }).slice(0, 6);
    const html = `
      <div class="perfil-cabecera">
        <i data-sprite="yo"></i>
        <div>
          <b class="perfil-nombre">${esc(p.nombre)}${p.apodo ? ` <span>«${esc(p.apodo)}»</span>` : ''}</b>
          <span class="bando-${p.bando}">${BANDOS[p.bando].nombre}${p.creador ? ' · <b class="creador">Creador</b>' : p.bando === 'marine' ? ` · ${rangoMarine(p)} (${p.meritos ?? 0} méritos)` : ''} · Nv. ${p.nivel}</span>
          <span class="oro">${icono('moneda', '#f2b63d')} ${p.creador ? '∞' : formatoDoblones(p.doblones)} doblones</span>
          ${p.bando === 'marine' ? `<span class="recompensa-txt">Capturas: ${p.capturas?.pirata ?? 0} piratas · ${p.capturas?.revolucionario ?? 0} revolucionarios</span>`
            : p.recompensa ? `<span class="recompensa-txt">Recompensa: ${formatoDoblones(p.recompensa)} doblones</span>` : ''}
          ${p.fruta ? `<span class="fruta-txt">Fruta: ${esc(FRUTAS.find((f) => f.id === p.fruta)!.nombre)}</span>` : ''}
          <button class="enlace-oro" data-accion="localizar">${icono('diana', '#f2b63d')} En ${esc(isla.nombre)} · ${esc(nombreZona(isla.zona))}</button>
        </div>
      </div>

      <div class="botones-fila"><button class="boton-oro" data-accion="hoja">📜 Hoja de vida</button><button class="boton-oro" data-ir="tienda">🛒 Tienda</button><button class="boton-oro" data-ir="arsenal">🗡 Arsenal</button><button class="boton-oro" data-accion="entrenar">⚔ Entrenar</button></div>

      <h3>Estadísticas</h3>
      <div class="barras">${(Object.keys(NOMBRES_ESTADISTICAS) as (keyof Estadisticas)[]).map((k) => `
        <div class="barra"><span>${NOMBRES_ESTADISTICAS[k]}</span><i><b style="width:${Math.min(100, est[k])}%"></b></i><em>${est[k]}</em></div>`).join('')}
      </div>
      <p class="nota-hoja">Suben con el nivel y con los puntos de mejora del Arsenal. La fama crece con tu ${p.bando === 'marine' ? 'número de méritos' : 'recompensa'}.</p>

      <h3>Objetivo</h3>
      ${obj ? `<div class="objetivo">
          <b>${esc(obj.texto)}</b>
          <div class="progreso"><i style="width:4%"></i></div><small>0 de ${obj.pasos.length} pasos</small>
          <ol>${obj.pasos.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
        </div>` : '<p class="nota-hoja">Elige qué quieres que persiga. Lo dividirá en pasos y trabajará en ello aunque no estés.</p>'}
      <div class="chips">${objetivos.map((o) => `<button class="chip-hoja ${o.id === p.objetivo ? 'sel' : ''}" data-objetivo="${o.id}">${esc(o.texto)}</button>`).join('')}</div>

      ${p.bando === 'pirata' ? `<h3>Tripulación</h3>${seccionTripulacion(p)}` : ''}

      <h3>Fruta del poder</h3>
      ${seccionFruta(p)}

      <h3>${p.bando === 'marine' ? 'Méritos' : 'Recompensa'}</h3>
      <p class="nota-hoja">${p.bando === 'marine'
        ? `Llevas <b>${p.meritos ?? 0}</b> méritos (${rangoMarine(p)}). Capturar piratas y revolucionarios te da méritos: como mucho ${topeMeritosDia(p.nivel)} al día. Solo los 4 marines con más méritos de cada mar llegan a Almirante.`
        : `Tu recompensa es <b>${formatoDoblones(p.recompensa ?? 0)}</b> doblones. Sube al ganar combates (mucho más contra marines): como mucho ${formatoDoblones(topeRecompensaDia(p.nivel))} al día. Si pasas 3 días sin ganar ninguno, baja un 2% cada día.`}</p>

      <h3>Carácter</h3>
      <div class="rasgos-hoja">${rasgos.map((r) => `<div><b>${r!.nombre}</b><small class="mas">▲ ${esc(r!.ventaja)}</small><small class="menos">▼ ${esc(r!.desventaja)}</small></div>`).join('') || '<p class="vacio">Sin rasgos.</p>'}</div>

      <h3>Sueño</h3>
      <p class="sueno-hoja">${esc(p.sueno || 'Todavía no tiene un sueño.')}</p>

      <h3>Diario</h3>
      <ul class="diario">${diario(p).map(([t, txt]) => `<li><small>${haceCuanto(t)}</small>${esc(txt)}</li>`).join('')}</ul>

      <h3>Equipo</h3>
      <div class="ranuras">
        <div class="ranura"><b>Barco</b><small>${esc(BARCOS.find((x) => x.id === (p.barco ?? 'barca'))!.nombre)}</small></div>
        <div class="ranura"><b>Bolsa</b><small>${bolsaDe(p).grog} grog · ${bolsaDe(p).botiquin} botiquines</small></div>
        <div class="ranura"><b>Arma</b><small>${esc(arma(arsenalDe(p).principal).nombre)}${arsenalDe(p).escudo ? ` + ${esc(arma(arsenalDe(p).escudo!).nombre)}` : ''}</small></div>
        <div class="ranura"><b>Fruta del poder</b><small>${p.fruta ? esc(FRUTAS.find((f) => f.id === p.fruta)?.nombre ?? '') : 'Ninguna (aún)'}</small></div>
        ${p.tripulacion && tripulacionDe(p) ? `<div class="ranura"><b>Tripulación</b><small>${esc(tripulacionDe(p)!.nombre)}</small></div>` : ''}
      </div>

      <h3>Relaciones</h3>
      ${vecinos.length ? `<p class="nota-hoja">Personajes que están ahora en ${esc(isla.nombre)}. Aún no os conocéis.</p>
        <ul class="lista-gente">${vecinos.map((b) => `<li><i data-sprite="b-${b.id}"></i><span><b>${esc(nombreBot(b))}</b><small class="bando-${b.bando}">${BANDOS[b.bando].nombre} · Nv. ${b.nivel}</small></span><em>Desconocido</em></li>`).join('')}</ul>`
        : '<p class="vacio">Nadie más en la isla ahora mismo.</p>'}`;
    return {
      titulo: 'Mi pirata', html, despues: (el: HTMLElement) => {
        const sprites = new Map<string, HTMLCanvasElement>([['yo', aCanvas(dibujarPersonaje(p.aspecto), 3)]]);
        for (const b of vecinos) sprites.set(`b-${b.id}`, cara(b.aspecto, 2));
        ponerSprites(el, sprites);
        enlazarAcciones(el);
        enlazarTripulacion(el, 'mi-pirata');
        el.querySelectorAll<HTMLButtonElement>('[data-ir]').forEach((b) => b.addEventListener('click', () => abrir(b.dataset.ir as IdPanel)));
        el.querySelectorAll<HTMLButtonElement>('[data-objetivo]').forEach((b) => b.addEventListener('click', () => {
          actualizarPersonaje({ ...p, objetivo: b.dataset.objetivo });
          acc.aviso('Nuevo objetivo fijado.');
          abrir('mi-pirata', false);
        }));
      },
    };
  }

  function diario(p: PersonajeGuardado): [number, string][] {
    const isla = islaDePersonaje(p);
    const entradas: [number, string][] = [
      [p.creado, `${p.nombre} pisó por primera vez ${isla.nombre}. Olía a sal y a aventura.`],
      [p.creado + 60_000, `Juró que cumpliría su sueño: ${p.sueno.charAt(0).toLowerCase()}${p.sueno.slice(1)}`],
    ];
    if (p.objetivo) entradas.push([Date.now(), `Se propuso un nuevo objetivo y empezó a pensar cómo conseguirlo.`]);
    for (const r of p.registro ?? []) entradas.push(r);
    return entradas.sort((a, b) => b[0] - a[0]);
  }

  // --- Noticias ---------------------------------------------------------------
  function noticias() {
    const mar = marActual();
    const p = cuentaActual() ? personajeActivo() : null;
    const todas = cronica(mar, Date.now() - 24 * 3600_000).filter((s) => s.importante).slice(0, 40);
    const mias: Suceso[] = p ? diario(p).map(([t, texto]) => ({ t, texto, tipo: 'llega', ids: [p.id], importante: true })) : [];
    const lista = (xs: Suceso[]) => xs.length ? `<ul class="noticias">${xs.map((s) => `<li class="n-${s.tipo}"><small>${haceCuanto(s.t)}</small>${esc(s.texto)}</li>`).join('')}</ul>`
      : '<p class="vacio">Todavía no hay noticias tuyas. Cuando tu personaje haga algo sonado, saldrá aquí.</p>';
    return {
      titulo: 'Noticias',
      html: `<div class="pestanas-hoja"><button class="sel" data-filtro="todo">Todo el mar</button><button data-filtro="duelos">⚔ Duelos</button><button data-filtro="mio">Lo mío</button></div>
        <div data-vista="todo">${lista(todas)}</div>
        <div data-vista="duelos" hidden><p class="vacio">Cargando duelos…</p></div>
        <div data-vista="mio" hidden>${lista(mias)}</div>`,
      despues: (el: HTMLElement) => {
        pestanasLocales(el);
        void ultimosDuelos(mar, 30).then((ds) => {
          const caja = el.querySelector<HTMLElement>('[data-vista="duelos"]');
          if (!caja) return;
          const misIds = new Set(personajes().map((x) => x.id));
          caja.innerHTML = ds.length ? `<ul class="noticias">${ds.map((d) => {
            const gana = d.ganador === 'atacante' ? d.atacante_nombre : d.ganador === 'defensor' ? d.defensor_nombre : null;
            const pierde = d.ganador === 'atacante' ? d.defensor_nombre : d.atacante_nombre;
            const texto = gana ? `⚔ ${gana} venció a ${pierde} en duelo${d.premio && d.ganador === 'atacante' ? ` (+${formatoDoblones(d.premio)})` : ''}.` : `⚔ ${d.atacante_nombre} desafió a ${d.defensor_nombre}, pero huyó.`;
            const mio = misIds.has(d.atacante) || misIds.has(d.defensor);
            return `<li class="n-duelo ${mio ? 'n-mio' : ''}"><small>${haceCuanto(Date.parse(d.creado))}</small>${esc(texto)}</li>`;
          }).join('')}</ul>` : '<p class="vacio">Aún no ha habido duelos en este mar. Desafía a otro jugador desde el mapa o los Tablones.</p>';
        });
      },
    };
  }

  // --- En vivo ----------------------------------------------------------------
  function enVivo() {
    const mar = marActual();
    const bots = botsDelMar(mar);
    const navegando = bots.filter((b) => posicionBot(b).navegando).length;
    const sucesos = cronica(mar, Date.now() - 3600_000);
    return {
      titulo: 'En vivo',
      html: `<div class="cifras"><div><b>${bots.length + (personajeActivo() ? 1 : 0)}</b><small>personajes en este mar</small></div><div><b>${navegando}</b><small>navegando ahora</small></div><div><b>${sucesos.length}</b><small>sucesos en la última hora</small></div></div>
        <ul class="noticias">${sucesos.map((s) => `<li class="n-${s.tipo}"><small>${haceCuanto(s.t)}</small>${esc(s.texto)}</li>`).join('')}</ul>`,
    };
  }

  // --- Taberna (chat) ---------------------------------------------------------
  function taberna() {
    const mar = marActual();
    const cuenta = cuentaActual();
    return {
      titulo: 'La Taberna',
      html: `
        <details class="normas-chat"><summary>Normas de la taberna</summary>
          <ul><li>Respeto: nada de insultos, acoso ni odio.</li><li>Nada de datos personales (tuyos ni de nadie).</li><li>Sin spam: como mucho 5 mensajes por minuto.</li><li>Los mensajes se borran a los 90 días.</li><li>Puedes reportar y silenciar a quien quieras.</li></ul>
        </details>
        <p class="nota-hoja">Chat en tiempo real con todos los jugadores de este mar. Con 3 reportes, un mensaje se oculta hasta que lo revise la moderación.</p>
        <ul class="chat" id="chat"></ul>
        <div class="silenciados" id="silenciados"></div>
        ${cuenta ? `<form class="chat-form" id="chat-form"><input id="chat-texto" maxlength="200" autocomplete="off" placeholder="Di algo en la taberna..." /><button class="boton-oro">Enviar</button></form>`
          : '<p class="vacio">Firma el pacto para hablar en la taberna.</p>'}`,
      despues: (el: HTMLElement) => montarChat(el, mar),
    };
  }

  let pestanaTablones = 'rec';
  // --- Tripulaciones -----------------------------------------------------------
  function listaTripulaciones(p: PersonajeGuardado | null, max = 30): string {
    const mar = marActual();
    const bots = botsDeTripulaciones(mar);
    const lista = tripulacionesDelMar(mar).map((t) => ({ t, ...resumenTripulacion(t, bots.get(t.id) ?? []) })).sort((a, b) => b.total - a.total).slice(0, max);
    if (!lista.length) return `<p class="vacio">Aún no hay tripulaciones en este mar. Un pirata de nivel ${NIVEL_FUNDAR} puede fundar la primera desde «Mi pirata».</p>`;
    const puede = p && p.bando === 'pirata' && !tripulacionDe(p);
    return `<ol class="ranking tripulaciones">${lista.map((x, i) => `<li class="${p?.tripulacion === x.t.id ? 'fila-mia' : ''}"><span class="pos">${i + 1}</span>
      <span><b>🏴‍☠️ ${esc(x.t.nombre)}</b><small>Capitán: ${esc(x.capitan?.nombre ?? '¿?')} · ${x.miembros} miembros (${x.jugadores.length} jugadores)</small><small>Recompensa total: ${formatoDoblones(x.total)}</small></span>
      ${puede ? `<button class="mini-boton" data-unirse="${x.t.id}">Unirse</button>` : p?.tripulacion === x.t.id ? '<em>Tu tripulación</em>' : ''}</li>`).join('')}</ol>
      ${p && p.bando !== 'pirata' ? '<p class="nota-hoja">Solo los piratas pueden unirse a una tripulación.</p>' : ''}`;
  }
  function seccionTripulacion(p: PersonajeGuardado): string {
    const t = tripulacionDe(p);
    if (t) {
      const r = resumenTripulacion(t, botsDeTripulaciones(p.mar).get(t.id) ?? []);
      const capitan = t.capitan === p.id;
      return `<div class="objetivo tripulacion"><b>🏴‍☠️ ${esc(t.nombre)}</b><small>${capitan ? 'Eres el capitán' : `Capitán: ${esc(r.capitan?.nombre ?? '¿?')}`} · ${r.miembros} miembros · recompensa total ${formatoDoblones(r.total)}</small>
        <ul class="miembros">${r.jugadores.map((x) => `<li><b>${esc(x.nombre)}</b>${x.id === t.capitan ? ' <span class="chip-jugador creador">Capitán</span>' : ' <span class="chip-jugador">Jugador</span>'}</li>`).join('')}
        ${r.bots.map((b) => `<li>${esc(nombreBot(b))} <small>Nv. ${b.nivel}</small></li>`).join('')}</ul>
        ${capitan ? '<p class="nota-hoja">⚓ Tu tripulación te sigue a donde vayas.</p>' : p.separado
          ? '<p class="nota-hoja">⛵ Ahora va por su cuenta. Volverá al barco la próxima vez que entres al juego.</p><button class="mini-boton" data-volver-barco>Volver ya al barco</button>'
          : '<p class="nota-hoja">⚓ Va con su tripulación y sigue al capitán. Si lo mandas a navegar a otro sitio, irá solo hasta que vuelvas a entrar.</p>'}
        <p class="nota-hoja">Cada 2 horas se une un pirata nuevo, hasta 12 bots. Cualquier jugador pirata puede unirse desde Tablones → Tripulaciones.</p>
        <button class="mini-boton peligro" data-${capitan ? 'disolver' : 'dejar'}="${t.id}">${capitan ? 'Disolver la tripulación' : 'Dejar la tripulación'}</button></div>`;
    }
    const fundar = p.nivel >= NIVEL_FUNDAR || p.creador
      ? `<div class="fundar"><input id="nombre-tripulacion" maxlength="24" placeholder="Nombre de tu tripulación" /><button class="boton-oro" data-fundar>Fundar</button></div>`
      : `<p class="vacio">Desde el nivel ${NIVEL_FUNDAR} podrás fundar tu propia tripulación. Mientras tanto, puedes unirte a una:</p>`;
    return `${fundar}<h4>Unirse a una tripulación</h4>${listaTripulaciones(p, 6)}`;
  }
  function enlazarTripulacion(el: HTMLElement, panel: IdPanel) {
    el.addEventListener('click', async (e) => {
      const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-unirse],[data-fundar],[data-dejar],[data-disolver],[data-volver-barco]');
      if (!b || b.disabled) return;
      const yo = personajeActivo();
      if (!yo) return;
      const nota = (texto: string): [number, string][] => [...(yo.registro ?? []), [Date.now(), texto] as [number, string]].slice(-30);
      b.disabled = true;
      if ('volverBarco' in b.dataset) {
        const v = volverConTripulacion({ ...yo, accion: yo.accion?.tipo === 'viajar' ? undefined : yo.accion }, true);
        actualizarPersonaje({ ...v.p, separado: false });
        acc.aviso('¡De vuelta al barco con tu tripulación!');
      } else if (b.dataset.unirse) {
        const t = estadoTripulacion(b.dataset.unirse);
        if (!t) return;
        actualizarPersonaje({ ...yo, tripulacion: t.id, registro: nota(`Se unió a la tripulación «${t.nombre}».`) });
        acc.aviso(`¡Bienvenido a bordo de «${t.nombre}»!`);
      } else if ('fundar' in b.dataset) {
        const nombre = el.querySelector<HTMLInputElement>('#nombre-tripulacion')?.value.trim() ?? '';
        if (nombre.length < 3) { acc.aviso('El nombre necesita al menos 3 letras.'); b.disabled = false; return; }
        b.textContent = 'Fundando…';
        const r = await fundarTripulacion(marActual(), nombre, yo.id);
        if (r.error) { acc.aviso(r.error); b.disabled = false; b.textContent = 'Fundar'; return; }
        actualizarPersonaje({ ...yo, tripulacion: r.fila!.id, registro: nota(`Fundó la tripulación «${nombre}» y se nombró capitán.`) });
        acc.aviso(`¡Nace la tripulación «${nombre}»! Pronto se unirán los primeros piratas.`);
      } else if (b.dataset.dejar) {
        const t = estadoTripulacion(b.dataset.dejar);
        actualizarPersonaje({ ...yo, tripulacion: undefined, registro: nota(`Dejó la tripulación «${t?.nombre ?? ''}».`) });
        acc.aviso('Has dejado la tripulación.');
      } else if (b.dataset.disolver) {
        if (!confirm('¿Disolver la tripulación? Todos sus miembros se quedarán sin ella.')) { b.disabled = false; return; }
        const t = estadoTripulacion(b.dataset.disolver);
        await disolverTripulacion(b.dataset.disolver);
        actualizarPersonaje({ ...yo, tripulacion: undefined, registro: nota(`Disolvió la tripulación «${t?.nombre ?? ''}».`) });
        acc.aviso('La tripulación se ha disuelto.');
      }
      abrir(panel, false);
    });
  }
  const estadoTripulacion = (id: string) => tripulacionesDelMar(marActual()).find((t) => t.id === id) ?? null;

  /** Bots y jugadores reales de este mar, en un mismo formato para los rankings. */
  interface Entrada { id: string; nombre: string; bando: Bando; nivel: number; aspecto: AspectoPersonaje; recompensa: number; jugador: boolean; mio: boolean; creador: boolean }
  function entradasDelMar(mar: number): Entrada[] {
    const yo = personajes().filter((x) => x.mar === mar);
    const jug = (x: PersonajeGuardado, mio: boolean): Entrada => ({ id: `j-${x.id}`, nombre: x.apodo ? `${x.nombre} «${x.apodo}»` : x.nombre, bando: x.bando, nivel: x.nivel, aspecto: x.aspecto,
      recompensa: x.bando === 'marine' ? 0 : x.recompensa ?? 0, jugador: true, mio, creador: !!x.creador });
    return [
      ...botsDelMar(mar).map((b): Entrada => ({ id: `b-${b.id}`, nombre: nombreBot(b), bando: b.bando, nivel: b.nivel, aspecto: b.aspecto, recompensa: recompensa(b), jugador: false, mio: false, creador: false })),
      ...yo.map((x) => jug(x, true)),
      ...personajesDeOtros().filter((x) => x.mar === mar && !yo.some((y) => y.id === x.id)).map((x) => jug(x, false)),
    ];
  }
  const marcaJugador = (e: Entrada) => e.creador ? ' <span class="chip-jugador creador">Creador</span>' : e.mio ? ' <span class="chip-jugador mio">Tú</span>' : e.jugador ? ' <span class="chip-jugador">Jugador</span>' : '';

  // --- Tablones ---------------------------------------------------------------
  function tablones() {
    const mar = marActual();
    const todosMar = entradasDelMar(mar);
    const p = cuentaActual() ? personajeActivo() : null;
    const fila = (i: number, e: Entrada, valor: string) => `<li class="${e.mio ? 'fila-mia' : ''}"><span class="pos">${i + 1}</span><i data-sprite="${e.id}"></i><span><b>${esc(e.nombre)}${marcaJugador(e)}</b><small class="bando-${e.bando}">${BANDOS[e.bando].nombre} · Nv. ${e.nivel}</small></span><em>${valor}</em>${e.jugador && !e.mio && p ? `<button class="mini-boton duelo" data-desafiar="${e.id.slice(2)}" title="Desafiar a un duelo">⚔</button>` : ''}</li>`;
    const top = (lista: Entrada[]) => {
      // Los 15 primeros y, si tu personaje no está entre ellos, también él con su puesto
      const r = lista.slice(0, 15).map((e, i) => [i, e] as const);
      const i = lista.findIndex((e) => e.mio);
      if (i >= 15) r.push([i, lista[i]]);
      return r;
    };
    const buscados = todosMar.filter((e) => e.bando !== 'marine' && (e.recompensa > 0 || e.jugador)).sort((a, b) => b.recompensa - a.recompensa);
    const marines = todosMar.filter((e) => e.bando === 'marine').sort((a, b) => b.nivel - a.nivel);
    const fuertes = [...todosMar].sort((a, b) => b.nivel - a.nivel);
    const lr = top(buscados), lm = top(marines), lf = top(fuertes);
    const conFruta = [...personajes(), ...personajesDeOtros()].filter((x) => x.mar === mar && x.fruta);
    const frutas = frutasDelMar(mar, conFruta.map((x) => x.fruta!));
    const botFruta = [...frutas.entries()].map(([fid, bid]) => ({ e: todosMar.find((y) => y.id === `b-${bid}`)!, fid }));
    const visibles = new Map<string, Entrada>();
    for (const [, e] of [...lr, ...lm, ...lf]) visibles.set(e.id, e);
    for (const x of conFruta) { const e = todosMar.find((y) => y.id === `j-${x.id}`); if (e) visibles.set(e.id, e); }
    for (const { e } of botFruta) visibles.set(e.id, e);
    const yoSinRec = p && p.bando !== 'marine' && !(p.recompensa ?? 0);
    const html = `
      <div class="pestanas-hoja"><button class="sel" data-filtro="rec">Recompensas</button><button data-filtro="rangos">Marina</button><button data-filtro="fuertes">Más fuertes</button><button data-filtro="trip">Tripulaciones</button><button data-filtro="frutas">Frutas</button></div>
      <div data-vista="rec"><ol class="ranking">${lr.map(([i, e]) => fila(i, e, e.recompensa ? formatoDoblones(e.recompensa) : 'Sin recompensa')).join('')}</ol>
        ${yoSinRec ? `<p class="nota-hoja">${esc(p!.nombre)} aún no tiene recompensa.</p>` : ''}</div>
      <div data-vista="rangos" hidden><ol class="ranking">${lm.map(([i, e]) => fila(i, e, e.creador ? 'Creador' : e.jugador ? rangoMarine([...personajes(), ...personajesDeOtros()].find((x) => `j-${x.id}` === e.id)!) : rangoDe(e.nivel))).join('')}</ol></div>
      <div data-vista="fuertes" hidden><ol class="ranking">${lf.map(([i, e]) => fila(i, e, `Nv. ${e.nivel}`)).join('')}</ol></div>
      <div data-vista="trip" hidden>${listaTripulaciones(p)}</div>
      <div data-vista="frutas" hidden><ol class="ranking">${conFruta.map((x, i) => {
        const e = visibles.get(`j-${x.id}`)!; const f = FRUTAS.find((y) => y.id === x.fruta);
        return fila(i, e, esc(f?.nombre ?? '???'));
      }).join('')}${botFruta.map(({ e, fid }, i) => fila(conFruta.length + i, e, esc(FRUTAS.find((f) => f.id === fid)!.nombre))).join('')}</ol><p class="nota-hoja">${conFruta.length + frutas.size} de ${FRUTAS.length} frutas encontradas en este mar. Solo un bot por mar tiene una; las demás son para los jugadores, y no es fácil conseguirlas.</p></div>`;
    return {
      titulo: 'Tablones', html, despues: (el: HTMLElement) => {
        ponerSprites(el, new Map([...visibles.values()].map((e) => [e.id, cara(e.aspecto, 1.6)])));
        pestanasLocales(el);
        enlazarTripulacion(el, 'tablones');
        el.querySelectorAll<HTMLButtonElement>('[data-desafiar]').forEach((b) => b.addEventListener('click', () => { cerrar(); acc.desafiar(b.dataset.desafiar!); }));
        // Recordar la pestaña (por ejemplo, al unirse a una tripulación)
        el.querySelectorAll<HTMLButtonElement>('[data-filtro]').forEach((b) => b.addEventListener('click', () => (pestanaTablones = b.dataset.filtro!)));
        if (pestanaTablones !== 'rec') el.querySelector<HTMLButtonElement>(`[data-filtro="${pestanaTablones}"]`)?.click();
      },
    };
  }

  // --- Más --------------------------------------------------------------------
  function mas() {
    const items: [string, string, string][] = [
      ['tienda', 'Tienda', 'Provisiones, barcos y sastre'], ['arsenal', 'Arsenal', 'Armas, habilidades y mejoras'], ['se-busca', 'Se busca', 'Los carteles del día'], ['cofre', 'Cofre', 'Objetos, tesoros y logros'], ['compendio', 'Compendio', 'Las frutas del poder'],
      ['guia', 'Guía', 'Cómo funciona el juego'], ['normas', 'Normas', 'Para convivir en los mares'], ['privacidad', 'Privacidad', 'Qué datos guardamos'],
    ];
    return {
      titulo: 'Más',
      html: `<img class="logo-mas" src="${ruta('assets/logo/logo-banner.jpg')}" alt="OnePirateWorld" /><div class="rejilla-mas">${items.map(([id, t, s]) => `<button data-ir="${id}"><b>${t}</b><small>${s}</small></button>`).join('')}
        <button data-accion="mares"><b>Cambiar de mar</b><small>Mar ${marActual()}</small></button>
        <a href="${acc.rutaGaleria}"><b>Galería de arte</b><small>Todos los dibujos</small></a>
        ${estadoServidor.perfil?.rol === 'creador' ? '<button data-ir="creador" class="boton-creador"><b>👑 Panel del Creador</b><small>Regalos, nombres, roles</small></button>' : ''}
        ${cuentaActual() ? '<button data-accion="salir"><b>Cerrar sesión</b><small>Salir de tu cuenta</small></button>' : ''}</div>`,
      despues: (el: HTMLElement) => {
        el.querySelectorAll<HTMLButtonElement>('[data-ir]').forEach((b) => b.addEventListener('click', () => abrir(b.dataset.ir as IdPanel)));
        enlazarAcciones(el);
      },
    };
  }

  // --- Se busca ---------------------------------------------------------------
  function seBusca() {
    const buscados = entradasDelMar(marActual()).filter((e) => e.bando !== 'marine' && e.recompensa > 0).sort((a, b) => b.recompensa - a.recompensa).slice(0, 8);
    const p = cuentaActual() ? personajeActivo() : null;
    const yoSinRec = p && p.bando !== 'marine' && !(p.recompensa ?? 0);
    return {
      titulo: 'Se busca',
      html: `<p class="nota-hoja">Carteles publicados al amanecer. La recompensa baja poco a poco si el buscado pasa días tranquilo.</p>
        <div class="carteles">${buscados.map((e) => `<div class="cartel ${e.mio ? 'cartel-mio' : ''}"><span class="cartel-titulo">SE BUSCA</span><i data-sprite="${e.id}"></i><b>${esc(e.nombre)}</b>${e.jugador ? `<small>${e.creador ? 'Creador' : e.mio ? 'Tú' : 'Jugador'}</small>` : ''}<span class="cartel-cifra">${formatoDoblones(e.recompensa)}</span><small class="cartel-pie">doblones</small></div>`).join('')}</div>
        ${yoSinRec ? `<p class="vacio">Todavía nadie busca a ${esc(p!.nombre)}. Con unas cuantas fechorías, su cara acabará aquí.</p>` : ''}`,
      despues: (el: HTMLElement) => ponerSprites(el, new Map(buscados.map((e) => [e.id, cara(e.aspecto, 3)]))),
    };
  }

  // --- Panel del Creador (solo cuentas con rol «creador»; el servidor lo vuelve a comprobar) ---
  let filtroCreador = '';
  function panelCreador() {
    if (estadoServidor.perfil?.rol !== 'creador') return { titulo: 'Panel del Creador', html: '<p class="vacio">Solo para el Creador.</p>' };
    return {
      titulo: '👑 Panel del Creador',
      html: `<p class="nota-hoja">Todos los personajes de todos los mares. Toca uno para editarlo. Los cambios llegan al momento.</p>
        <input id="buscar-creador" class="buscador" placeholder="Buscar por nombre…" value="${esc(filtroCreador)}" />
        <div id="lista-creador"><p class="vacio">Cargando…</p></div>`,
      despues: (el: HTMLElement) => { void pintarCreador(el); },
    };
  }
  async function pintarCreador(el: HTMLElement) {
    const [todos, roles] = await Promise.all([adminTodos(), adminRoles()]);
    const lista = el.querySelector<HTMLElement>('#lista-creador');
    if (!lista) return;
    const opcionesFruta = `<option value="">— Sin fruta —</option>${FRUTAS.map((f) => `<option value="${f.id}">${esc(f.nombre)} (${RAREZAS[f.rareza].nombre})</option>`).join('')}`;
    const pinta = () => {
      const q = filtroCreador.toLowerCase();
      const vis = todos.filter((f) => !q || f.nombre.toLowerCase().includes(q));
      lista.innerHTML = vis.map((f) => {
        const d = f.datos as { fruta?: string };
        const rol = roles.get(f.id) ?? 'jugador';
        return `<details class="admin-fila" data-id="${f.id}"><summary><b>${esc(f.nombre)}</b> <small class="bando-${f.bando}">${BANDOS[f.bando as Bando].nombre}</small>
            <small>Mar ${f.mar} · Nv. ${f.nivel} · ${formatoDoblones(Number(f.doblones))} 🪙${f.bando !== 'marine' ? ` · 💀 ${formatoDoblones(Number(f.recompensa))}` : ''}${d.fruta ? ` · 🍈 ${esc(FRUTAS.find((x) => x.id === d.fruta)?.nombre ?? d.fruta)}` : ''}${rol !== 'jugador' ? ` · <b class="creador">${rol}</b>` : ''}</small></summary>
          <div class="admin-form">
            <label>Dar doblones <span><input type="number" data-campo="doblones" value="100000" /><button class="mini-boton" data-op="doblones">Dar</button></span></label>
            ${f.bando !== 'marine' ? `<label>Recompensa <span><input type="number" data-campo="recompensa" value="${Number(f.recompensa)}" /><button class="mini-boton" data-op="recompensa">Poner</button></span></label>` : ''}
            <label>Nivel <span><input type="number" min="1" max="80" data-campo="nivel" value="${f.nivel}" /><button class="mini-boton" data-op="nivel">Poner</button></span></label>
            <label>Fruta <span><select data-campo="fruta">${opcionesFruta.replace(`value="${d.fruta ?? ''}"`, `value="${d.fruta ?? ''}" selected`)}</select><button class="mini-boton" data-op="fruta">Dar</button></span></label>
            <label>Nombre <span><input data-campo="nombre" maxlength="24" value="${esc(f.nombre)}" /><button class="mini-boton" data-op="nombre">Cambiar</button></span></label>
            ${rol === 'creador' ? '' : `<div class="fila-mini"><button class="mini-boton" data-op="rol" data-rol="${rol === 'moderador' ? 'jugador' : 'moderador'}">${rol === 'moderador' ? 'Quitar moderador' : 'Hacer moderador'}</button>
              ${f.creador ? '' : '<button class="mini-boton peligro" data-op="borrar">Borrar personaje</button>'}</div>`}
          </div></details>`;
      }).join('') || '<p class="vacio">No hay nadie con ese nombre.</p>';
    };
    pinta();
    el.querySelector<HTMLInputElement>('#buscar-creador')?.addEventListener('input', (e) => { filtroCreador = (e.target as HTMLInputElement).value; pinta(); });
    lista.addEventListener('click', async (e) => {
      const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-op]');
      if (!b) return;
      e.preventDefault();
      const fila = b.closest<HTMLElement>('.admin-fila')!;
      const id = fila.dataset.id!;
      const f = todos.find((x) => x.id === id)!;
      const valor = (campo: string) => fila.querySelector<HTMLInputElement | HTMLSelectElement>(`[data-campo="${campo}"]`)!.value;
      let error: string | null = null, msg = '';
      b.disabled = true;
      switch (b.dataset.op) {
        case 'doblones': { const n = Math.round(Number(valor('doblones'))); error = await adminPersonaje(id, { doblones_suma: n, nota: `El Creador le regaló ${formatoDoblones(n)} doblones.` }); msg = `${f.nombre} recibe ${formatoDoblones(n)} doblones.`; break; }
        case 'recompensa': { const n = Math.max(0, Math.round(Number(valor('recompensa')))); error = await adminPersonaje(id, { recompensa: n, nota: `La Marina publicó un cartel nuevo: SE BUSCA por ${formatoDoblones(n)} doblones.` }); msg = `Recompensa de ${f.nombre}: ${formatoDoblones(n)}.`; break; }
        case 'nivel': { const n = Math.round(Number(valor('nivel'))); error = await adminPersonaje(id, { nivel: n }); msg = `${f.nombre} pasa a nivel ${n}.`; break; }
        case 'fruta': { const fr = valor('fruta') || null; const nom = fr ? FRUTAS.find((x) => x.id === fr)!.nombre : ''; error = await adminPersonaje(id, { fruta: fr, ...(fr ? { nota: `Un mensajero del Creador le entregó la ${nom}. Se la comió de un bocado.` } : {}) }); msg = fr ? `${f.nombre} tiene ahora la ${nom}.` : `${f.nombre} se queda sin fruta.`; break; }
        case 'nombre': { const n = valor('nombre').trim(); if (n.length < 1) { b.disabled = false; return; } error = await adminPersonaje(id, { nombre: n }); msg = `Ahora se llama ${n}.`; break; }
        case 'rol': { const r = b.dataset.rol as 'jugador' | 'moderador'; error = await adminRol(id, r); msg = r === 'moderador' ? `El dueño de ${f.nombre} ya es moderador.` : `El dueño de ${f.nombre} ya no es moderador.`; break; }
        case 'borrar': { if (!confirm(`¿Borrar a ${f.nombre} para siempre?`)) { b.disabled = false; return; } error = await adminBorrar(id); msg = `${f.nombre} ha sido borrado.`; break; }
      }
      acc.aviso(error ?? msg);
      if (!error) abrir('creador', false); else b.disabled = false;
    });
  }

  // --- Tienda -----------------------------------------------------------------
  let pestanaTienda = 'provisiones';
  function tienda() {
    const p = cuentaActual() ? personajeActivo() : null;
    if (!p) return { titulo: 'Tienda', html: `<p class="vacio">Crea un personaje para comprar.</p><button class="boton-oro ancho" data-accion="perfil">Crear personaje</button>`, despues: enlazarAcciones };
    const tiene = (n: number) => p.creador || p.doblones >= n;
    const bolsa = bolsaDe(p);
    const barco = p.barco ?? 'barca';
    const orden: IdBarco[] = ['barca', 'carabela', 'galeon'];
    const provisiones = `<div class="items">${PROVISIONES.map((x) => {
      const n = bolsa[x.id], lleno = n >= x.max;
      return `<div class="item tienda-item"><i data-sprite="pr-${x.id}"></i><b>${x.nombre}</b><small>${esc(x.texto)}</small><em>Llevas ${n} de ${x.max}</em>
        <span class="fila-mini"><button class="mini-boton" data-provision="${x.id}" data-n="1" ${!lleno && tiene(x.precio) ? '' : 'disabled'}>${lleno ? 'Bolsa llena' : `Comprar · ${formatoDoblones(x.precio)}`}</button>
        ${!lleno && x.max - n >= 3 ? `<button class="mini-boton" data-provision="${x.id}" data-n="3" ${tiene(x.precio * 3) ? '' : 'disabled'}>×3 · ${formatoDoblones(x.precio * 3)}</button>` : ''}</span></div>`;
    }).join('')}</div>`;
    const barcos = `<div class="items">${BARCOS.map((x) => {
      const propio = x.id === barco, peor = orden.indexOf(x.id) < orden.indexOf(barco);
      const nivelOk = p.nivel >= x.nivel || p.creador;
      const boton = propio ? '<em>⚓ Tu barco</em>' : peor ? '<em>Ya tienes uno mejor</em>' : !nivelOk ? `<em>🔒 Nivel ${x.nivel}</em>`
        : `<button class="mini-boton" data-barco="${x.id}" ${tiene(x.precio) ? '' : 'disabled'}>Comprar · ${formatoDoblones(x.precio)}</button>`;
      return `<div class="item tienda-item ${propio ? 'puesta' : ''}"><i data-sprite="bc-${x.id}"></i><b>${x.nombre}</b><small>${esc(x.texto)}</small>${boton}</div>`;
    }).join('')}</div>`;
    const sastre = `<div class="sastre"><i data-sprite="yo"></i><div>
        <p>Cambia el peinado, la ropa, el sombrero, la complexión o lo que quieras de tu personaje.</p>
        <a class="boton-oro ${tiene(PRECIO_SASTRE) ? '' : 'apagado'}" href="${tiene(PRECIO_SASTRE) ? ruta(`nuevo/index.html?sastre=${encodeURIComponent(p.id)}&mar=${marActual()}`) : '#'}">✂ Ir al sastre · ${p.creador ? 'gratis' : formatoDoblones(PRECIO_SASTRE)}</a>
        <small>Solo pagas si guardas los cambios.</small></div></div>`;
    const armeria = `<p class="nota-hoja">Espadas, pistolas, puños y escudos. También puedes forjarlas y aprender habilidades.</p>
      <button class="boton-oro ancho" data-ir="arsenal">🗡 Ir a la armería</button>`;
    const pest = [['provisiones', 'Provisiones', provisiones], ['barcos', 'Barcos', barcos], ['sastre', 'Sastre', sastre], ['armeria', 'Armería', armeria]];
    return {
      titulo: 'Tienda',
      html: `<p class="saldo">${icono('moneda', '#f2b63d')} <b>${p.creador ? '∞' : formatoDoblones(p.doblones)}</b> doblones</p>
        <div class="pestanas-hoja">${pest.map(([id, t]) => `<button class="${id === pestanaTienda ? 'sel' : ''}" data-filtro="${id}">${t}</button>`).join('')}</div>
        ${pest.map(([id, , h]) => `<div data-vista="${id}" ${id === pestanaTienda ? '' : 'hidden'}>${h}</div>`).join('')}`,
      despues: (el: HTMLElement) => {
        pestanasLocales(el);
        el.querySelectorAll<HTMLButtonElement>('[data-filtro]').forEach((b) => b.addEventListener('click', () => (pestanaTienda = b.dataset.filtro!)));
        const sprites = new Map<string, HTMLCanvasElement>([['yo', aCanvas(dibujarPersonaje(p.aspecto), 3)]]);
        for (const b of BARCOS_PRUEBA) sprites.set(`bc-${b.id}`, aCanvas(b.dibujar(), 2));
        sprites.set('pr-grog', aCanvas(dibujarProvision('grog'), 3));
        sprites.set('pr-botiquin', aCanvas(dibujarProvision('botiquin'), 3));
        ponerSprites(el, sprites);
        el.querySelectorAll<HTMLButtonElement>('[data-ir]').forEach((b) => b.addEventListener('click', () => abrir(b.dataset.ir as IdPanel)));
        el.addEventListener('click', (e) => {
          const b = (e.target as HTMLElement).closest('button');
          if (!b || b.disabled || b.dataset.filtro || b.dataset.ir) return;
          const yo = personajeActivo()!;
          const pagar = (n: number) => (yo.creador ? yo.doblones : yo.doblones - n);
          if (b.dataset.provision) {
            const x = PROVISIONES.find((y) => y.id === b.dataset.provision)!;
            const bo = { ...bolsaDe(yo) };
            const n = Math.min(Number(b.dataset.n), x.max - bo[x.id]);
            if (n <= 0 || (!yo.creador && yo.doblones < x.precio * n)) return;
            bo[x.id] += n;
            actualizarPersonaje({ ...yo, bolsa: bo, doblones: pagar(x.precio * n) });
            acc.aviso(`Compras ${n > 1 ? n + ' de ' : ''}${x.nombre.toLowerCase()}. Ya va en la bolsa.`);
          } else if (b.dataset.barco) {
            const x = BARCOS.find((y) => y.id === b.dataset.barco)!;
            if (!yo.creador && yo.doblones < x.precio) return;
            actualizarPersonaje({ ...yo, barco: x.id, doblones: pagar(x.precio), registro: [...(yo.registro ?? []), [Date.now(), `Compró una ${x.nombre.toLowerCase()} y la bautizó con ron.`] as [number, string]].slice(-30) });
            acc.aviso(`¡${x.nombre} comprada! Tus viajes serán más rápidos.`);
          } else return;
          abrir('tienda', false);
        });
      },
    };
  }

  // --- Cofre ------------------------------------------------------------------
  function cofre() {
    const p = cuentaActual() ? personajeActivo() : null;
    if (!p) return { titulo: 'Cofre', html: `<p class="vacio">Crea un personaje para tener cofre.</p><button class="boton-oro ancho" data-accion="perfil">Crear personaje</button>`, despues: enlazarAcciones };
    const a = arsenalDe(p), bolsa = bolsaDe(p);
    const c = p.capturas ?? { pirata: 0, revolucionario: 0 };
    const m = { bando: p.bando, nivel: p.nivel, recompensa: p.recompensa ?? 0, capturas: c.pirata + c.revolucionario, creador: p.creador };
    const ranura = (titulo: string, texto: string) => `<div class="ranura"><b>${titulo}</b><small>${texto}</small></div>`;
    const objetos = `<div class="ranuras">
        ${ranura('🍶 Grog', `${bolsa.grog} en la bolsa`)}${ranura('🩹 Botiquines', `${bolsa.botiquin} en la bolsa`)}
        ${ranura('⛵ Barco', esc(BARCOS.find((x) => x.id === (p.barco ?? 'barca'))!.nombre))}
        ${ranura('🗡 Armas', `${Object.keys(a.armas).length} de ${CATALOGO_ARMAS.length}`)}
        ${ranura('📖 Habilidades', `${Object.keys(a.habilidades).length} de ${CATALOGO_HABILIDADES.length}`)}
        ${ranura('💰 Doblones', p.creador ? '∞' : formatoDoblones(p.doblones))}</div>`;
    // Prendas especiales de su bando: las que tiene y lo que falta para las demás
    const prendas = Object.keys(REQUISITOS).map((k) => { const [campo, valor] = k.split(':'); return { campo, valor, estado: estadoPrenda(campo, valor, m) }; })
      .filter((x) => x.estado !== 'oculta');
    const nombre = (campo: string, valor: string) => (OPCIONES as unknown as Record<string, Record<string, string>>)[campo]?.[valor] ?? valor;
    const prendasHtml = `<p class="nota-hoja">Prendas especiales de tu bando. Póntelas en el sastre (Tienda → Sastre).</p>
      <div class="logros">${prendas.map((x) => `<div class="logro ${x.estado === 'libre' ? 'hecho' : ''}"><span class="candado">${x.estado === 'libre' ? '✅' : '🔒'}</span><b>${esc(nombre(x.campo, x.valor))}</b><small>${x.estado === 'libre' ? 'Desbloqueada' : esc(x.estado)}</small></div>`).join('')}</div>`;
    const f = p.fruta ? FRUTAS.find((x) => x.id === p.fruta) : null;
    const frutaHtml = f ? `<div class="fruta-cofre"><i data-sprite="mi-fruta"></i><div><b>${esc(f.nombre)}</b><small>${CATEGORIAS[f.categoria].nombre} · ${RAREZAS[f.rareza].nombre}</small><p>${esc(f.poder)}</p><small>Técnicas: ${esc(f.tecnicas.join(', '))}</small><small>Debilidad: ${esc(f.debilidad)}</small></div></div>`
      : `<p class="vacio">${p.busqueda ? `Sigues la pista de una fruta (${Math.min(p.busqueda.pistas, 3)} de 3 pistas). Mira «Mi pirata».` : 'No tienes ninguna fruta. Desde el nivel 5, al explorar, oirás rumores. Mira el Compendio para ver cuáles hay.'}</p>`;
    const tengo = new Set(p.creador ? LOGROS.map((l) => l.id) : p.logros ?? []);
    const logrosHtml = `<p class="nota-hoja">${tengo.size} de ${LOGROS.length} logros.</p><div class="logros">${LOGROS.map((l) => `<div class="logro ${tengo.has(l.id) ? 'hecho' : ''}"><span class="candado">${tengo.has(l.id) ? l.icono : '🔒'}</span><b>${esc(l.nombre)}</b><small>${esc(l.como)}</small></div>`).join('')}</div>`;
    return {
      titulo: 'Cofre',
      html: `<div class="pestanas-hoja"><button class="sel" data-filtro="obj">Objetos</button><button data-filtro="pre">Prendas</button><button data-filtro="fru">Fruta</button><button data-filtro="log">Logros</button></div>
        <div data-vista="obj">${objetos}</div>
        <div data-vista="pre" hidden>${prendasHtml}</div>
        <div data-vista="fru" hidden>${frutaHtml}</div>
        <div data-vista="log" hidden>${logrosHtml}</div>`,
      despues: (el: HTMLElement) => {
        pestanasLocales(el);
        if (f) ponerSprites(el, new Map([['mi-fruta', aCanvas(dibujarFruta(f.id), 4)]]));
      },
    };
  }

  // --- Compendio de frutas ----------------------------------------------------
  function compendio() {
    const mar = marActual();
    const bots = botsDelMar(mar);
    const jugadores = [...personajes(), ...personajesDeOtros()].filter((x) => x.mar === mar && x.fruta);
    const nombres = new Map<string, string>(jugadores.map((x) => [x.fruta!, x.nombre]));
    for (const [fid, bid] of frutasDelMar(mar, jugadores.map((x) => x.fruta!))) nombres.set(fid, nombreBot(bots.find((x) => x.id === bid)!));
    const duenos = nombres;
    return {
      titulo: 'Compendio de frutas',
      html: `<p class="nota-hoja">Solo existe una de cada fruta en cada mar. ${duenos.size} de ${FRUTAS.length} ya tienen dueño.</p>
        <div class="compendio">${FRUTAS.map((f) => {
          const quien = duenos.get(f.id);
          return quien ? `<div class="fruta conocida" style="--rareza:${RAREZAS[f.rareza].color}"><i data-sprite="f-${f.id}"></i><b>${esc(f.nombre)}</b><small>${CATEGORIAS[f.categoria].nombre} · ${RAREZAS[f.rareza].nombre}</small><small>${esc(f.poder)}</small><em>La tiene ${esc(quien)}</em></div>`
            : `<div class="fruta" style="--rareza:${RAREZAS[f.rareza].color}"><i data-sprite="s-${f.id}"></i><b>???</b><small>${CATEGORIAS[f.categoria].nombre} · ${RAREZAS[f.rareza].nombre}</small><em>Nadie la ha encontrado</em></div>`;
        }).join('')}</div>
        <h3>Debilidad común: ${esc(DEBILIDAD_COMUN.nombre)}</h3><p class="nota-hoja">${esc(DEBILIDAD_COMUN.descripcion)}</p>`,
      despues: (el: HTMLElement) => ponerSprites(el, new Map(FRUTAS.flatMap((f) => [[`f-${f.id}`, aCanvas(dibujarFruta(f.id), 3)], [`s-${f.id}`, aCanvas(siluetaFruta(f.id), 3)]] as [string, HTMLCanvasElement][]))),
    };
  }

  // --- Textos -----------------------------------------------------------------
  function guia() {
    return {
      titulo: 'Guía',
      html: `<div class="texto">
        <h3>Tu personaje vive solo</h3><p>No lo manejas tú: navega, pelea, entrena y hace amigos por su cuenta, incluso cuando cierras el juego. Al volver verás un resumen de lo que ha pasado.</p>
        <h3>Tú decides lo importante</h3><p>Le pones un <b>objetivo</b> (hacerse fuerte, encontrar una fruta, formar tripulación…) y él lo divide en pasos. En los <b>momentos clave</b> (comerse una fruta, unirse a una tripulación, traicionar…) te pregunta qué hacer. Si no contestas a tiempo, decide según su carácter.</p>
        <h3>El carácter importa</h3><p>Sus 3 rasgos cambian lo que prefiere hacer y cómo le va: un Curioso explora más, un Rudo pega más fuerte pero hace menos amigos.</p>
        <h3>El mundo</h3><p>Cuatro mares (Alba, Ocaso, Coral y Bruma) separados por ${esc('El Espinazo')}, un continente que da la vuelta al planeta, y por las Aguas Dormidas, sin viento. En el centro está la Senda de las Mareas, solo para los más fuertes.</p>
        <h3>Frutas del poder</h3><p>Hay 36, y solo una de cada en cada mar. Para conseguir una: desde el nivel 5, al explorar oirás rumores; reúne 3 pistas (una al día), navega a la isla y vence a su guardián (nivel 39 o más). Si otro se la come antes, llegas tarde. Todas comparten una debilidad: la Noche Hueca.</p>
        <h3>Recompensas y méritos</h3><p>Los piratas y revolucionarios ganan recompensa al vencer (mucho más contra marines y en duelos). Si pasan 3 días sin ganar, baja un 2% al día. Los marines ganan méritos al capturar: solo los 4 con más méritos de cada mar llegan a Almirante.</p>
        <h3>Duelos</h3><p>Desafía a otros jugadores desde el mapa o los Tablones (⚔). Tú controlas a tu personaje y el rival pelea solo con sus datos reales. Máximo 5 duelos al día.</p>
        <h3>Tripulaciones</h3><p>Desde el nivel 10, un pirata puede fundar una tripulación. Cualquier pirata puede unirse, y los bots se van sumando solos. La tripulación va siempre junta, siguiendo al capitán.</p>
        <h3>Tienda, sastre y prendas</h3><p>En la Tienda compras provisiones para el combate, barcos más rápidos y visitas al sastre. Algunas prendas se desbloquean con el nivel, la recompensa o las capturas.</p></div>`,
    };
  }
  function normas() {
    return { titulo: 'Normas', html: `<div class="texto"><ul>
      <li>Trata a todos con respeto. Nada de insultos, acoso, amenazas ni odio.</li>
      <li>No compartas datos personales: ni tuyos ni de otros (nombre real, dirección, teléfono…).</li>
      <li>Nada de contenido sexual, violento de verdad ni ilegal.</li>
      <li>No hagas spam ni publicidad.</li>
      <li>Un nombre de personaje ofensivo puede ser cambiado por la moderación.</li>
      <li>Si algo te molesta, repórtalo o silencia a esa persona. Los moderadores revisan los reportes.</li></ul></div>` };
  }
  function privacidad() {
    return { titulo: 'Privacidad', html: `<div class="texto">
      <h3>Qué guardamos</h3>
      <p>Para tu cuenta: tu <b>correo</b> y tu <b>nombre de usuario</b> (con los dos se entra; no hay contraseña aparte). Para el juego: tus personajes, sus duelos y tus mensajes de la Taberna.</p>
      <h3>Dónde</h3>
      <p>En los servidores de Supabase, el servicio que usa el juego, y una copia en tu navegador para que cargue más rápido.</p>
      <h3>Qué ven los demás</h3>
      <p>Los demás jugadores ven a tus personajes (nombre, aspecto, nivel, recompensa…) y tus mensajes de la Taberna, firmados con el nombre de tu pirata. <b>Nadie ve tu correo ni tu nombre de usuario.</b> No le digas a nadie tu nombre de usuario: con él y tu correo se entra en tu cuenta.</p>
      <h3>Cuánto tiempo</h3>
      <p>Los mensajes de la Taberna se borran a los 90 días. Tus personajes se guardan mientras exista tu cuenta.</p>
      <h3>Borrar tu cuenta</h3>
      <p>Puedes pedir que borremos tu cuenta y todo lo tuyo en cualquier momento. No vendemos datos a nadie.</p></div>` };
  }

  // -------------------------------------------------------------------------
  // --- Arsenal: equipo, tienda, forja, habilidades y mejoras --------------------
  let pestanaArsenal = 'equipo';
  function arsenalPanel() {
    const p = cuentaActual() ? personajeActivo() : null;
    if (!p) return { titulo: 'Arsenal', html: '<p class="vacio">Crea un personaje para tener arsenal.</p>' };
    const a = arsenalDe(p);
    const libres = puntosLibres(p.nivel, a);
    const dinero = (n: number) => (p.creador ? true : p.doblones >= n);
    const rar = (r: keyof typeof RAREZAS) => `<span class="rareza-chip" style="--r:${RAREZAS[r].color}">${RAREZAS[r].nombre}</span>`;
    const tarjetaArma = (id: string, pie: string) => { const x = arma(id); return `<div class="item" style="--r:${RAREZAS[x.rareza].color}"><b>${esc(x.nombre)}</b>${rar(x.rareza)}<small>${esc(x.descripcion)}</small><small>${x.tipo === 'escudo' ? `+${x.dano} de defensa` : `Daño ×${x.dano}`}${x.dosManos ? ' · Dos manos' : ''}</small>${pie}</div>`; };
    const enMano = [a.principal, a.secundaria].filter(Boolean) as string[];
    const equipo = `
      <p class="nota-hoja">Llevas dos armas para cambiar en combate, un escudo si tu arma lo permite y hasta ${MAX_EQUIPADAS} habilidades.</p>
      <h3>Armas en la mano</h3>
      <div class="items">${enMano.map((id, i) => tarjetaArma(id, `<em>${i === 0 ? 'Principal' : 'Secundaria'} · Nivel ${a.armas[id] ?? 1}</em>`)).join('')}
        ${a.escudo ? tarjetaArma(a.escudo, `<em>Escudo · Nivel ${a.armas[a.escudo] ?? 1}</em><button class="mini-boton" data-quitar-escudo>Quitar</button>`) : '<div class="item vacio-item"><b>Sin escudo</b><small>Compra uno en la tienda.</small></div>'}</div>
      <h3>Cambiar armas</h3>
      <div class="items">${Object.keys(a.armas).filter((id) => !enMano.includes(id) && id !== a.escudo).map((id) => {
        const x = arma(id);
        if (x.tipo === 'escudo') {
          const bloqueado = enMano.some((m) => arma(m).dosManos);
          return tarjetaArma(id, bloqueado ? '<em>No con armas de dos manos</em>' : `<button class="mini-boton" data-escudo="${id}">Equipar escudo</button>`);
        }
        return tarjetaArma(id, `<span class="fila-mini"><button class="mini-boton" data-principal="${id}">Principal</button><button class="mini-boton" data-secundaria="${id}">Secundaria</button></span>`);
      }).join('') || '<p class="vacio">No tienes más armas. Compra en la tienda.</p>'}</div>
      <h3>Habilidades equipadas (${a.equipadas.length}/${MAX_EQUIPADAS})</h3>
      <div class="items">${Object.keys(a.habilidades).map((id) => {
        const h = CATALOGO_HABILIDADES.find((x) => x.id === id)!;
        const puesta = a.equipadas.includes(id);
        const usable = habilidadUsable(h, a);
        return `<div class="item ${puesta ? 'puesta' : ''}"><b>${esc(h.nombre)}</b><span class="tipo-hab">${h.tipo}</span><small>${esc(h.descripcion)}</small><em>Nivel ${a.habilidades[id]}${usable ? '' : ' · necesita ' + h.requiere}</em>
          <button class="mini-boton" data-equipar="${id}">${puesta ? 'Quitar' : 'Equipar'}</button></div>`;
      }).join('')}</div>
      ${p.fruta ? `<h3>Fruta del poder</h3><div class="items">${(TECNICAS_FRUTA[p.fruta] ?? []).map((t) => `<div class="item"><b>${esc(t.nombre)}</b><small>${esc(t.descripcion)}</small></div>`).join('')}</div>` : ''}`;
    const tienda = `
      <p class="nota-hoja">Tienes ${p.creador ? '∞' : formatoDoblones(p.doblones)} doblones.</p>
      <div class="items">${CATALOGO_ARMAS.filter((x) => !(x.id in a.armas)).map((x) => {
        const nivelOk = p.nivel >= x.nivelMin || p.creador;
        return tarjetaArma(x.id, `<em>${formatoDoblones(x.precio)} doblones · Nivel ${x.nivelMin}</em>
          <button class="mini-boton" data-comprar="${x.id}" ${nivelOk && dinero(x.precio) ? '' : 'disabled'}>${nivelOk ? 'Comprar' : '🔒 Nivel ' + x.nivelMin}</button>`);
      }).join('')}</div>`;
    const forja = `
      <p class="nota-hoja">Cada nivel de forja sube un 10% el daño del arma (máximo nivel ${NIVEL_MAX}).</p>
      <div class="items">${Object.entries(a.armas).filter(([id]) => arma(id).precio > 0 || id === 'sable-grumete').map(([id, n]) => {
        const x = arma(id);
        const coste = precioForja(x, n);
        return tarjetaArma(id, `<em>Nivel ${n} de ${NIVEL_MAX}</em>${n >= NIVEL_MAX ? '<em>¡Al máximo!</em>' : `<button class="mini-boton" data-forjar="${id}" ${dinero(coste) ? '' : 'disabled'}>Mejorar · ${formatoDoblones(coste)}</button>`}`);
      }).join('')}</div>`;
    const habilidades = `
      <div class="items">${CATALOGO_HABILIDADES.map((h) => {
        const n = a.habilidades[h.id] ?? 0;
        const coste = n ? precioHabilidad(h, n) : h.precio;
        const nivelOk = p.nivel >= h.nivelMin || p.creador;
        const boton = n >= NIVEL_MAX ? '<em>¡Al máximo!</em>' : !nivelOk ? `<em>🔒 Nivel ${h.nivelMin}</em>`
          : `<button class="mini-boton" data-aprender="${h.id}" ${dinero(coste) ? '' : 'disabled'}>${n ? 'Mejorar' : 'Aprender'} · ${coste ? formatoDoblones(coste) : 'Gratis'}</button>`;
        return `<div class="item ${n ? '' : 'sin-aprender'}"><b>${esc(h.nombre)}</b><span class="tipo-hab">${h.tipo}</span><small>${esc(h.descripcion)}</small><small>Por nivel: ${esc(h.porNivel)}${h.requiere ? ` · Necesita ${h.requiere}` : ''}</small><em>${n ? `Nivel ${n} de ${NIVEL_MAX}` : 'Sin aprender'}</em>${boton}</div>`;
      }).join('')}</div>`;
    const mejoras = `
      <p class="nota-hoja">Ganas 3 puntos por cada nivel. Te quedan <b>${p.creador ? '∞' : libres}</b>.</p>
      <div class="mejoras">${(Object.keys(MEJORA_POR_PUNTO) as Estadistica[]).map((k) => `
        <div class="mejora"><b>${k[0].toUpperCase() + k.slice(1)}</b><small>${MEJORA_POR_PUNTO[k].texto} por punto</small><em>${a.mejoras[k]} puntos</em>
          <button class="mini-boton" data-punto="${k}" ${libres > 0 || p.creador ? '' : 'disabled'}>+1</button></div>`).join('')}</div>`;
    const pest = [['equipo', 'Equipo', equipo], ['tienda', 'Tienda', tienda], ['forja', 'Forja', forja], ['habilidades', 'Habilidades', habilidades], ['mejoras', 'Mejoras', mejoras]];
    return {
      titulo: 'Arsenal',
      html: `<div class="pestanas-hoja">${pest.map(([id, t]) => `<button class="${id === pestanaArsenal ? 'sel' : ''}" data-filtro="${id}">${t}</button>`).join('')}</div>
        ${pest.map(([id, , h]) => `<div data-vista="${id}" ${id === pestanaArsenal ? '' : 'hidden'}>${h}</div>`).join('')}`,
      despues: (el: HTMLElement) => {
        pestanasLocales(el);
        el.querySelectorAll<HTMLButtonElement>('[data-filtro]').forEach((b) => b.addEventListener('click', () => (pestanaArsenal = b.dataset.filtro!)));
        el.addEventListener('click', (e) => {
          const b = (e.target as HTMLElement).closest('button');
          if (!b || b.disabled || b.dataset.filtro) return;
          const d = b.dataset;
          const n: Arsenal = structuredClone(a);
          let gasto = 0, msg = '';
          if (d.comprar) { const x = arma(d.comprar); n.armas[x.id] = 1; gasto = x.precio; msg = `Has comprado: ${x.nombre}.`; }
          else if (d.forjar) { const x = arma(d.forjar); gasto = precioForja(x, n.armas[x.id]); n.armas[x.id]++; msg = `${x.nombre} sube a nivel ${n.armas[x.id]}.`; }
          else if (d.aprender) { const h = CATALOGO_HABILIDADES.find((x) => x.id === d.aprender)!; const nv = n.habilidades[h.id] ?? 0; gasto = nv ? precioHabilidad(h, nv) : h.precio; n.habilidades[h.id] = nv + 1; msg = nv ? `${h.nombre} sube a nivel ${nv + 1}.` : `Has aprendido ${h.nombre}.`; }
          else if (d.equipar) {
            const i = n.equipadas.indexOf(d.equipar);
            if (i >= 0) n.equipadas.splice(i, 1);
            else if (n.equipadas.length >= MAX_EQUIPADAS) { acc.aviso(`Solo puedes llevar ${MAX_EQUIPADAS}. Quita una primero.`); return; }
            else n.equipadas.push(d.equipar);
          }
          else if (d.principal || d.secundaria) {
            const id = (d.principal || d.secundaria)!;
            if (d.principal) n.principal = id; else n.secundaria = id;
            if (arma(id).dosManos) n.escudo = undefined;
          }
          else if (d.escudo) n.escudo = d.escudo;
          else if ('quitarEscudo' in d) n.escudo = undefined;
          else if (d.punto) n.mejoras[d.punto as Estadistica]++;
          else return;
          if (gasto && !p.creador && p.doblones < gasto) return;
          actualizarPersonaje({ ...p, arsenal: n, doblones: p.creador ? p.doblones : p.doblones - gasto });
          if (msg) acc.aviso(msg);
          abrir('arsenal', false);
        });
      },
    };
  }

  function pestanasLocales(el: HTMLElement) {
    el.querySelectorAll<HTMLButtonElement>('[data-filtro]').forEach((b) => b.addEventListener('click', () => {
      el.querySelectorAll('[data-filtro]').forEach((x) => x.classList.toggle('sel', x === b));
      el.querySelectorAll<HTMLElement>('[data-vista]').forEach((v) => (v.hidden = v.dataset.vista !== b.dataset.filtro));
    }));
  }
  function enlazarAcciones(el: HTMLElement) {
    el.querySelectorAll<HTMLButtonElement>('[data-accion]').forEach((b) => b.addEventListener('click', () => {
      const a = b.dataset.accion;
      if (a === 'localizar') { cerrar(); acc.localizar(); }
      else if (a === 'perfil') { cerrar(); acc.abrirPerfil(); }
      else if (a === 'mares') acc.abrirMares();
      else if (a === 'salir') { cerrar(); acc.cerrarSesion(); }
      else if (a === 'entrenar') { cerrar(); acc.entrenar(); }
      else if (a === 'guardian') acc.guardian();
      else if (a === 'comer-fruta') acc.comerFruta();
      else if (a === 'navegar-busqueda') { const yo = personajeActivo(); if (yo?.busqueda) acc.navegarA(yo.busqueda.isla); }
      else if (a === 'hoja') { const p = personajeActivo(); if (p) abrirCartel(p); }
    }));
  }

  return { abrir, cerrar, get actual() { return actual; } };
}

// ---------------------------------------------------------------------------
// Chat de la taberna (local hasta tener servidor)

interface Mensaje { id: string; autor: string; texto: string; t: number; bot?: boolean; mio?: boolean; oculto?: boolean }

const FRASES_BOT = ['¿Alguien ha visto un barco con velas negras por el Mar del Alba?', 'Busco tripulación. Sé cocinar y pelear un poco.', 'Dicen que en Cayo Ballena hay un maestro de espada.',
  '¡Una ronda para todos, invito yo!', 'Cuidado con la marina, hoy hay muchos barcos en la zona.', 'He oído que alguien encontró una fruta rara cerca de las ruinas.',
  'Mañana zarpo hacia la Senda de las Mareas. Deseadme suerte.', '¿Qué tal las tormentas por el Ocaso?', 'Alguien me debe 300 doblones y sabe quién es.',
  'Las Aguas Dormidas dan miedo de verdad. No hay ni una brisa.', 'Vendo mapa casi completo, le falta un trozo.', 'Hoy he ganado mi primer duelo :)'];

function leer<T>(k: string, d: T): T { try { const t = localStorage.getItem(k); return t ? JSON.parse(t) : d; } catch { return d; } }
function escribir(k: string, v: unknown) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* nada */ } }

let limpiarChat: (() => void) | null = null;

function montarChat(el: HTMLElement, mar: number) {
  limpiarChat?.();
  const lista = el.querySelector<HTMLElement>('#chat')!;
  const silEl = el.querySelector<HTMLElement>('#silenciados')!;
  // Algún bot también habla, para que la taberna no esté vacía (uno cada 4 minutos)
  const bots = botsDelMar(mar);
  const ahora = Date.now();
  const deBots: Mensaje[] = [];
  for (let i = 0; i < 8; i++) {
    const slot = Math.floor(ahora / 240_000) - i;
    const b = bots[(slot * 7919) % bots.length];
    deBots.push({ id: `b${slot}`, autor: nombreBot(b), texto: FRASES_BOT[(slot * 31) % FRASES_BOT.length], t: slot * 240_000, bot: true });
  }
  let reales: FilaMensaje[] = [];
  const miId = estadoServidor.usuario?.id;
  const moderador = esModerador();
  const pintar = () => {
    const silenciados = leer<string[]>('taberna.silenciados', []);
    const reportados = leer<string[]>('taberna.reportados', []);
    const todos: Mensaje[] = [
      ...deBots,
      ...reales.map((m) => ({ id: String(m.id), autor: m.autor_nombre, texto: m.texto, t: Date.parse(m.creado), mio: m.autor === miId, oculto: m.oculto })),
    ].sort((a, b) => a.t - b.t).filter((m) => !silenciados.includes(m.autor));
    lista.innerHTML = todos.map((m) => reportados.includes(m.id) || (m.oculto && !moderador)
      ? `<li class="reportado">Mensaje oculto: lo revisará la moderación.</li>`
      : `<li class="${m.mio ? 'mio' : ''} ${m.oculto ? 'oculto' : ''}"><b>${esc(m.autor)}</b>${m.bot ? '<small class="bot-tag">bot</small>' : ''}<small>${haceCuanto(m.t)}</small><p>${esc(m.texto)}</p>
        ${m.mio || m.bot ? '' : `<span class="acciones-msg"><button data-reportar="${m.id}">Reportar</button><button data-silenciar="${esc(m.autor)}">Silenciar</button>${moderador ? `<button data-ocultar="${m.id}">Ocultar (moderador)</button>` : ''}</span>`}</li>`).join('');
    silEl.innerHTML = silenciados.length ? `Silenciados: ${silenciados.map((x) => `<button data-quitar="${esc(x)}">${esc(x)} ✕</button>`).join(' ')}` : '';
    el.scrollTop = el.scrollHeight;   // baja hasta el último mensaje
  };
  el.addEventListener('click', async (e) => {
    const b = (e.target as HTMLElement).closest('button');
    if (!b) return;
    if (b.dataset.reportar) {
      escribir('taberna.reportados', [...leer<string[]>('taberna.reportados', []), b.dataset.reportar]);
      if (/^\d+$/.test(b.dataset.reportar)) await reportar(Number(b.dataset.reportar));
      pintar();
    } else if (b.dataset.silenciar) { escribir('taberna.silenciados', [...new Set([...leer<string[]>('taberna.silenciados', []), b.dataset.silenciar])]); pintar(); }
    else if (b.dataset.quitar) { escribir('taberna.silenciados', leer<string[]>('taberna.silenciados', []).filter((x) => x !== b.dataset.quitar)); pintar(); }
    else if (b.dataset.ocultar) { await ocultarMensaje(Number(b.dataset.ocultar)); reales = reales.map((m) => (String(m.id) === b.dataset.ocultar ? { ...m, oculto: true } : m)); pintar(); }
  });
  const form = el.querySelector<HTMLFormElement>('#chat-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = el.querySelector<HTMLInputElement>('#chat-texto')!;
    const texto = input.value.trim();
    if (!texto) return;
    const p = personajeActivo();
    // En el juego solo se ve el nombre del pirata; el de usuario es secreto
    const autor = p?.nombre ?? 'Marinero sin nombre';
    input.disabled = true;
    const error = await enviarMensaje(mar, autor, texto);
    input.disabled = false;
    if (error) { input.setCustomValidity(error); input.reportValidity(); setTimeout(() => input.setCustomValidity(''), 2500); return; }
    input.value = '';
    input.focus();
  });
  pintar();
  void cargarMensajes(mar).then((m) => { reales = m; pintar(); });
  limpiarChat = escucharMensajes(mar, (m) => { if (!reales.some((x) => x.id === m.id)) { reales.push(m); pintar(); } });
}

void islasDelMundo;

/** La búsqueda de fruta en el panel «Mi pirata». */
function seccionFruta(p: PersonajeGuardado): string {
  if (p.fruta) return `<p class="nota-hoja">Ya te comiste la <b>${esc(FRUTAS.find((f) => f.id === p.fruta)?.nombre ?? '')}</b>. Nadie puede comer dos.</p>`;
  const b = p.busqueda;
  if (!b) return p.nivel < NIVEL_RUMORES
    ? `<p class="vacio">A partir del nivel ${NIVEL_RUMORES}, al explorar islas tu personaje empezará a oír rumores sobre frutas.</p>`
    : '<p class="vacio">Aún no has oído ningún rumor. Explora islas: con el objetivo «Encontrar una fruta del poder» los oirás más a menudo.</p>';
  const isla = islaDeBusqueda(b);
  const barra = `<div class="progreso"><i style="width:${Math.round((Math.min(b.pistas, PISTAS_NECESARIAS) / PISTAS_NECESARIAS) * 100)}%"></i></div>`;
  let boton = '';
  if (b.vencido) boton = '<button class="boton-oro ancho" data-accion="comer-fruta">✦ Decidir: ¿comérsela?</button>';
  else if (b.pistas >= PISTAS_NECESARIAS) boton = guardianAqui(p)
    ? `<button class="boton-oro ancho" data-accion="guardian">⚔ Enfrentar al guardián (Nv. ${nivelGuardian(p.nivel)})</button>`
    : `<button class="boton-oro ancho" data-accion="navegar-busqueda">⛵ Navegar a ${esc(isla.nombre)}</button>`;
  return `<div class="objetivo busqueda"><b>${b.vencido ? 'La fruta te espera' : b.pistas >= PISTAS_NECESARIAS ? 'Ya sabes dónde está' : 'Siguiendo un rumor'}</b>
    ${barra}<small>${Math.min(b.pistas, PISTAS_NECESARIAS)} de ${PISTAS_NECESARIAS} pistas · como mucho una al día, explorando</small>
    <p>${esc(textoPista(b))}</p>${boton}</div>`;
}

/** Dibujitos de las provisiones (16x16). */
function dibujarProvision(id: 'grog' | 'botiquin'): Lienzo {
  const L = new Lienzo(16, 16);
  if (id === 'grog') {                     // botella
    L.rect(6, 1, 4, 2, C.corteza); L.rect(7, 3, 2, 3, C.selva); L.rect(5, 6, 6, 8, C.selva);
    L.rect(6, 7, 1, 5, C.hoja); L.rect(5, 9, 6, 3, C.pergamino); L.rect(6, 10, 4, 1, C.granate); L.rect(5, 14, 6, 1, C.noche);
  } else {                                 // caja con cruz
    L.rect(3, 4, 10, 9, C.hueso); L.rect(3, 12, 10, 1, C.niebla); L.rect(6, 2, 4, 2, C.corteza);
    L.rect(7, 5, 2, 7, C.rojo); L.rect(5, 7, 6, 2, C.rojo);
  }
  return L;
}
