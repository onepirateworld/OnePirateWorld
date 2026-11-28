// Probador de personaje: elige cada opción y ve el sprite al momento.
// (Es la base del paso 2 "Aspecto" de la creación de personaje.)
import { Lienzo, azar } from './arte/lienzo';
import { PALETA } from './arte/paleta';
import {
  dibujarPersonaje, aspectoAlAzar, OPCIONES, COLORES, PERSONAJES_PRUEBA,
  type AspectoPersonaje, type Pelo, type Rasgo,
} from './arte/personajes';

export function pintarLienzo(canvas: HTMLCanvasElement, L: Lienzo, escala: number) {
  canvas.width = L.w; canvas.height = L.h;
  canvas.style.width = `${L.w * escala}px`; canvas.style.height = `${L.h * escala}px`;
  canvas.getContext('2d')!.putImageData(new ImageData(L.aRGBA(), L.w, L.h), 0, 0);
}

const hex = (c: number) => PALETA[c - 1].hex;
const nombreColor = (c: number) => PALETA[c - 1].nombre;

type Clave = keyof AspectoPersonaje;

export function montarProbador(raiz: HTMLElement) {
  let a: AspectoPersonaje = structuredClone(PERSONAJES_PRUEBA[0].aspecto);
  let semilla = 1;

  raiz.innerHTML = `
    <div class="probador">
      <div class="probador-vista">
        <canvas class="grande"></canvas>
        <canvas class="real" title="Tamaño en el mapa (×2)"></canvas>
        <div class="probador-azar">
          <button class="boton" data-azar="hombre">Al azar ♂</button>
          <button class="boton" data-azar="mujer">Al azar ♀</button>
        </div>
      </div>
      <div class="probador-opciones"></div>
    </div>`;
  const grande = raiz.querySelector<HTMLCanvasElement>('canvas.grande')!;
  const real = raiz.querySelector<HTMLCanvasElement>('canvas.real')!;
  const opciones = raiz.querySelector<HTMLElement>('.probador-opciones')!;

  const grupoTexto = (titulo: string, clave: Clave, mapa: Record<string, string | undefined>) => `
    <fieldset><legend>${titulo}</legend>
      ${Object.entries(mapa).map(([v, t]) => `<button class="chip ${a[clave] === v ? 'sel' : ''}" data-k="${clave}" data-v="${v}">${t}</button>`).join('')}
    </fieldset>`;
  const grupoColor = (titulo: string, clave: Clave, lista: number[]) => `
    <fieldset><legend>${titulo}</legend>
      ${lista.map((c) => `<button class="color ${a[clave] === c ? 'sel' : ''}" style="background:${hex(c)}" title="${nombreColor(c)}" data-k="${clave}" data-c="${c}"></button>`).join('')}
    </fieldset>`;
  const grupoVarios = (titulo: string, clave: 'accesorios' | 'cicatrices', mapa: Record<string, string>) => `
    <fieldset><legend>${titulo} <small>(puedes marcar varios)</small></legend>
      ${Object.entries(mapa).map(([v, t]) => `<button class="chip ${(a[clave] as string[]).includes(v) ? 'sel' : ''}" data-multi="${clave}" data-v="${v}">${t}</button>`).join('')}
    </fieldset>`;

  function render() {
    const hombre = a.cuerpo === 'hombre';
    opciones.innerHTML = [
      grupoTexto('Cuerpo', 'cuerpo', OPCIONES.cuerpo),
      grupoTexto('Piel', 'piel', OPCIONES.piel),
      grupoTexto('Pelo', 'pelo', hombre ? OPCIONES.peloHombre : OPCIONES.peloMujer),
      grupoColor('Color de pelo', 'colorPelo', COLORES.pelo),
      grupoTexto('Cara', 'rasgo', hombre ? OPCIONES.rasgoHombre : OPCIONES.rasgoMujer),
      grupoTexto('Ropa', 'ropa', OPCIONES.ropa),
      grupoColor('Color de la ropa', 'colorRopa', COLORES.ropa),
      grupoColor('Faja', 'colorFaja', COLORES.faja),
      grupoTexto('Pantalón', 'pantalon', OPCIONES.pantalon),
      grupoColor('Color del pantalón', 'colorPantalon', COLORES.pantalon),
      grupoTexto('Calzado', 'calzado', OPCIONES.calzado),
      grupoColor('Color del calzado', 'colorCalzado', COLORES.calzado),
      grupoTexto('Sombrero', 'sombrero', OPCIONES.sombrero),
      grupoColor('Color del sombrero (cinta en el de paja)', 'colorSombrero', COLORES.sombrero),
      grupoVarios('Accesorios', 'accesorios', OPCIONES.accesorios),
      grupoVarios('Cicatrices', 'cicatrices', OPCIONES.cicatrices),
    ].join('');
    const L = dibujarPersonaje(a);
    pintarLienzo(grande, L, 8);
    pintarLienzo(real, L, 2);
  }

  raiz.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest('button');
    if (!b) return;
    const d = b.dataset;
    if (d.azar) {
      a = aspectoAlAzar(azar(semilla++ * 7919 + Date.now() % 1000), d.azar as 'hombre' | 'mujer');
    } else if (d.multi) {
      const lista = a[d.multi as 'accesorios'] as string[];
      const i = lista.indexOf(d.v!);
      if (i >= 0) lista.splice(i, 1); else lista.push(d.v!);
    } else if (d.k && d.c) {
      (a as any)[d.k] = Number(d.c);
    } else if (d.k && d.v) {
      (a as any)[d.k] = d.v;
      if (d.k === 'cuerpo') {
        const hombre = d.v === 'hombre';
        a.pelo = Object.keys(hombre ? OPCIONES.peloHombre : OPCIONES.peloMujer)[0] as Pelo;
        a.rasgo = 'ninguno' as Rasgo;
      }
    } else return;
    render();
  });

  render();
}

/** Muestrario: cada opción aplicada sobre un personaje base. */
export function montarMuestrario(raiz: HTMLElement) {
  const baseH = structuredClone(PERSONAJES_PRUEBA[0].aspecto);
  Object.assign(baseH, { sombrero: 'ninguno', accesorios: [], cicatrices: [], rasgo: 'ninguno', ropa: 'chaleco', pelo: 'despeinado' });
  const baseM: AspectoPersonaje = { ...structuredClone(baseH), cuerpo: 'mujer', pelo: 'melena', colorPelo: 8 };

  const filas: { titulo: string; items: { t: string; a: AspectoPersonaje }[] }[] = [
    { titulo: 'Complexión', items: Object.entries(OPCIONES.complexion).flatMap(([v, t]) => [
      { t: `${t} ♂`, a: { ...baseH, complexion: v as any, ropa: 'ninguna', colorFaja: 0 } }, { t: `${t} ♀`, a: { ...baseM, complexion: v as any, ropa: 'ninguna', colorFaja: 0 } },
      { t: `${t} ♂ vestido`, a: { ...baseH, complexion: v as any } }]) },
    { titulo: 'Piel', items: Object.entries(OPCIONES.piel).map(([v, t]) => ({ t, a: { ...baseH, piel: v as any } })) },
    {
      titulo: 'Pelo (hombre y mujer)',
      items: [
        ...Object.entries(OPCIONES.peloHombre).map(([v, t]) => ({ t: t!, a: { ...baseH, pelo: v as Pelo } })),
        ...Object.entries(OPCIONES.peloMujer).map(([v, t]) => ({ t: t!, a: { ...baseM, pelo: v as Pelo } })),
      ],
    },
    {
      titulo: 'Cara (hombre y mujer)',
      items: [
        ...Object.entries(OPCIONES.rasgoHombre).filter(([v]) => v !== 'ninguno').map(([v, t]) => ({ t: t!, a: { ...baseH, rasgo: v as Rasgo } })),
        ...Object.entries(OPCIONES.rasgoMujer).filter(([v]) => v !== 'ninguno').map(([v, t]) => ({ t: t!, a: { ...baseM, rasgo: v as Rasgo } })),
      ],
    },
    { titulo: 'Ropa', items: Object.entries(OPCIONES.ropa).flatMap(([v, t]) => [{ t: `${t} ♂`, a: { ...baseH, ropa: v as any } }, { t: `${t} ♀`, a: { ...baseM, ropa: v as any } }]) },
    { titulo: 'Sombreros', items: Object.entries(OPCIONES.sombrero).filter(([v]) => v !== 'ninguno').map(([v, t]) => ({ t, a: { ...baseH, sombrero: v as any } })) },
    { titulo: 'Accesorios', items: Object.entries(OPCIONES.accesorios).map(([v, t]) => ({ t, a: { ...baseH, accesorios: [v as any] } })) },
    { titulo: 'Cicatrices', items: Object.entries(OPCIONES.cicatrices).map(([v, t]) => ({ t, a: { ...baseH, cicatrices: [v as any] } })) },
    { titulo: 'Pantalón, calzado y conjuntos', items: [
      { t: 'Largo + botas altas', a: { ...baseH } },
      { t: 'Largo + botas', a: { ...baseH, calzado: 'botas' } },
      { t: 'Bombacho + sandalias', a: { ...baseH, pantalon: 'corto', calzado: 'sandalias' } },
      { t: 'Bombacho + botas', a: { ...baseM, pantalon: 'corto', calzado: 'botas' } },
      { t: 'A rayas + zapatos', a: { ...baseH, pantalon: 'rayas', calzado: 'zapatos' } },
      { t: 'Remendado + descalzo', a: { ...baseH, pantalon: 'rotos', calzado: 'descalzo' } },
      { t: 'Bombacho largo + correas', a: { ...baseH, pantalon: 'ancho', calzado: 'botasHebilla' } },
      { t: 'Bombacho largo ♀', a: { ...baseM, pantalon: 'ancho', calzado: 'botas' } },
      { t: 'Uniforme de marine completo', a: { ...baseH, ropa: 'uniformeMarine', colorRopa: 28, pantalon: 'uniforme', colorPantalon: 6, sombrero: 'gorraMarine', colorSombrero: 28, calzado: 'botas', colorCalzado: 1, colorFaja: 0, accesorios: ['charreteras', 'medallas'] } },
      { t: 'Almirante', a: { ...baseH, ropa: 'casacaAlmirante', colorRopa: 28, pantalon: 'uniforme', colorPantalon: 6, sombrero: 'gorraMarine', colorSombrero: 28, calzado: 'botas', colorCalzado: 1, colorFaja: 0, accesorios: ['charreteras', 'medallas'] } },
      { t: 'Rebelde', a: { ...baseM, ropa: 'gabardina', colorRopa: 2, sombrero: 'boina', colorSombrero: 15, colorFaja: 0, accesorios: ['brazalete'] } },
      { t: 'Rebelde encapuchado', a: { ...baseH, ropa: 'gabardina', colorRopa: 20, sombrero: 'capucha', colorSombrero: 20, colorFaja: 0, accesorios: ['brazalete'] } },
      { t: 'Capitán legendario', a: { ...baseH, ropa: 'casacaLegendaria', colorRopa: 15, sombrero: 'plumas', colorSombrero: 1, colorFaja: 0, accesorios: ['loro', 'catalejo'] } },
      { t: 'Rey pirata', a: { ...baseH, ropa: 'casacaLegendaria', colorRopa: 2, sombrero: 'corona', colorFaja: 0, accesorios: ['loro'] } },
      { t: 'Chaleco de cuero ♀', a: { ...baseM, ropa: 'chalecoCuero', colorRopa: 8, colorFaja: 0 } },
      { t: 'Cota de malla', a: { ...baseH, ropa: 'cotaMalla', colorFaja: 0, accesorios: ['catalejo'] } },
    ] },
  ];

  raiz.innerHTML = filas.map((f, i) => `
    <h3 class="muestrario-titulo">${f.titulo}</h3>
    <div class="muestrario" data-fila="${i}">
      ${f.items.map((it) => `<figure><canvas></canvas><figcaption>${it.t}</figcaption></figure>`).join('')}
    </div>`).join('');
  filas.forEach((f, i) => {
    const cs = raiz.querySelectorAll<HTMLCanvasElement>(`[data-fila="${i}"] canvas`);
    f.items.forEach((it, j) => pintarLienzo(cs[j], dibujarPersonaje(it.a), 4));
  });
}
