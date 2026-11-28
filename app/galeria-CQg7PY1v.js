import{P as y,O as i,d as C,a as E,F as q,r as F}from"./frutas-CnIhnYQ7.js";import{t as w,p as B,D as P}from"./tecnicas-CFOPusQ2.js";function H(e,a,s){e.width=a.w,e.height=a.h,e.style.width=`${a.w*s}px`,e.style.height=`${a.h*s}px`,e.getContext("2d").putImageData(new ImageData(a.aRGBA(),a.w,a.h),0,0)}function T(e){const a=structuredClone(y[0].aspecto);Object.assign(a,{sombrero:"ninguno",accesorios:[],cicatrices:[],rasgo:"ninguno",ropa:"chaleco",pelo:"despeinado"});const s={...structuredClone(a),cuerpo:"mujer",pelo:"melena",colorPelo:8},n=[{titulo:"Complexión",items:Object.entries(i.complexion).flatMap(([o,t])=>[{t:`${t} ♂`,a:{...a,complexion:o,ropa:"ninguna",colorFaja:0}},{t:`${t} ♀`,a:{...s,complexion:o,ropa:"ninguna",colorFaja:0}},{t:`${t} ♂ vestido`,a:{...a,complexion:o}}])},{titulo:"Piel",items:Object.entries(i.piel).map(([o,t])=>({t,a:{...a,piel:o}}))},{titulo:"Pelo (hombre y mujer)",items:[...Object.entries(i.peloHombre).map(([o,t])=>({t,a:{...a,pelo:o}})),...Object.entries(i.peloMujer).map(([o,t])=>({t,a:{...s,pelo:o}}))]},{titulo:"Cara (hombre y mujer)",items:[...Object.entries(i.rasgoHombre).filter(([o])=>o!=="ninguno").map(([o,t])=>({t,a:{...a,rasgo:o}})),...Object.entries(i.rasgoMujer).filter(([o])=>o!=="ninguno").map(([o,t])=>({t,a:{...s,rasgo:o}}))]},{titulo:"Ropa",items:Object.entries(i.ropa).flatMap(([o,t])=>[{t:`${t} ♂`,a:{...a,ropa:o}},{t:`${t} ♀`,a:{...s,ropa:o}}])},{titulo:"Sombreros",items:Object.entries(i.sombrero).filter(([o])=>o!=="ninguno").map(([o,t])=>({t,a:{...a,sombrero:o}}))},{titulo:"Accesorios",items:Object.entries(i.accesorios).map(([o,t])=>({t,a:{...a,accesorios:[o]}}))},{titulo:"Cicatrices",items:Object.entries(i.cicatrices).map(([o,t])=>({t,a:{...a,cicatrices:[o]}}))},{titulo:"Pantalón, calzado y conjuntos",items:[{t:"Largo + botas altas",a:{...a}},{t:"Largo + botas",a:{...a,calzado:"botas"}},{t:"Bombacho + sandalias",a:{...a,pantalon:"corto",calzado:"sandalias"}},{t:"Bombacho + botas",a:{...s,pantalon:"corto",calzado:"botas"}},{t:"A rayas + zapatos",a:{...a,pantalon:"rayas",calzado:"zapatos"}},{t:"Remendado + descalzo",a:{...a,pantalon:"rotos",calzado:"descalzo"}},{t:"Bombacho largo + correas",a:{...a,pantalon:"ancho",calzado:"botasHebilla"}},{t:"Bombacho largo ♀",a:{...s,pantalon:"ancho",calzado:"botas"}},{t:"Uniforme de marine completo",a:{...a,ropa:"uniformeMarine",colorRopa:28,pantalon:"uniforme",colorPantalon:6,sombrero:"gorraMarine",colorSombrero:28,calzado:"botas",colorCalzado:1,colorFaja:0,accesorios:["charreteras","medallas"]}},{t:"Almirante",a:{...a,ropa:"casacaAlmirante",colorRopa:28,pantalon:"uniforme",colorPantalon:6,sombrero:"gorraMarine",colorSombrero:28,calzado:"botas",colorCalzado:1,colorFaja:0,accesorios:["charreteras","medallas"]}},{t:"Rebelde",a:{...s,ropa:"gabardina",colorRopa:2,sombrero:"boina",colorSombrero:15,colorFaja:0,accesorios:["brazalete"]}},{t:"Rebelde encapuchado",a:{...a,ropa:"gabardina",colorRopa:20,sombrero:"capucha",colorSombrero:20,colorFaja:0,accesorios:["brazalete"]}},{t:"Capitán legendario",a:{...a,ropa:"casacaLegendaria",colorRopa:15,sombrero:"plumas",colorSombrero:1,colorFaja:0,accesorios:["loro","catalejo"]}},{t:"Rey pirata",a:{...a,ropa:"casacaLegendaria",colorRopa:2,sombrero:"corona",colorFaja:0,accesorios:["loro"]}},{t:"Chaleco de cuero ♀",a:{...s,ropa:"chalecoCuero",colorRopa:8,colorFaja:0}},{t:"Cota de malla",a:{...a,ropa:"cotaMalla",colorFaja:0,accesorios:["catalejo"]}}]}];e.innerHTML=n.map((o,t)=>`
    <h3 class="muestrario-titulo">${o.titulo}</h3>
    <div class="muestrario" data-fila="${t}">
      ${o.items.map(m=>`<figure><canvas></canvas><figcaption>${m.t}</figcaption></figure>`).join("")}
    </div>`).join(""),n.forEach((o,t)=>{const m=e.querySelectorAll(`[data-fila="${t}"] canvas`);o.items.forEach((f,u)=>H(m[u],C(f.a),4))})}const v=128,S=80;function x(e){const a=document.createElement("canvas");return a.width=e.w,a.height=e.h,a.getContext("2d").putImageData(new ImageData(e.aRGBA(),e.w,e.h),0,0),a}function D(e){const a=x(E(y[1].aspecto)),s=x(C(y[0].aspecto)),n=p=>q.find(c=>`Fruta ${c.id}`===p)?.nombre??p,o=w();e.innerHTML=`<p class="nota">${o.length} ataques y habilidades. Cada uno se repite en bucle: el de espaldas ataca al de enfrente.</p>
    <div class="ataques">${o.map(({grupo:p,t:c},b)=>`
      <figure class="ataque"><canvas width="${v}" height="${S}" data-i="${b}"></canvas>
        <figcaption><b>${c.nombre}</b><small>${n(p)}${c.poder?` · Poder ${c.poder}${c.golpes?` ×${c.golpes}`:""}`:""}</small><small>${c.descripcion}</small></figcaption>
      </figure>`).join("")}</div>`;const t=Array.from(e.querySelectorAll("canvas[data-i]")),m={x:34,y:54},f={x:96,y:26};function u(p){for(const c of t){const b=c.getBoundingClientRect();if(b.bottom<0||b.top>innerHeight)continue;const{t:$}=o[Number(c.dataset.i)],r=c.getContext("2d");r.imageSmoothingEnabled=!1,r.fillStyle="#5cc3d8",r.fillRect(0,0,v,S),r.fillStyle="#3d8a4a",r.fillRect(0,40,v,40),r.fillStyle="#e0c088",r.beginPath(),r.ellipse(96,42,20,5,0,0,Math.PI*2),r.fill(),r.beginPath(),r.ellipse(34,74,26,6,0,0,Math.PI*2),r.fill();const O=P+700,j=p%O/P,d=Math.min(1,j);let h=0,g=0;if(j<=1){if($.mov==="salto")h=Math.sin(d*Math.PI)*30*d,g=-Math.sin(d*Math.PI)*26;else if($.mov!=="quieto"){const R=Math.sin(Math.min(1,d*2)*Math.PI);h=R*12,g=-R*6}}r.drawImage(s,80,4,32,32),r.drawImage(a,10+h,26+g,48,48),j<=1&&B(r,$.anim,d,{x:m.x+h,y:m.y+g-6},f)}requestAnimationFrame(u)}requestAnimationFrame(u)}D(document.getElementById("ataques"));T(document.getElementById("muestrario"));const N=document.getElementById("galeria");let z=4;const l=e=>e.replace(/[&<>"]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[a]);function A(e,a,s,n=""){return`<img src="${F("assets/"+e)}" width="${a*z}" height="${s*z}" alt="" ${n}>`}function I(e){const a=`
    <section class="panel-pergamino seccion">
      <h2>Paleta (32 colores)</h2>
      <p class="nota">Todo el arte del juego usa solo estos colores.</p>
      <div class="paleta">
        ${e.paleta.map(o=>`<div class="muestra" title="${o.id}. ${l(o.nombre)} ${o.hex}"><span style="background:${o.hex}"></span><small>${l(o.nombre)}</small></div>`).join("")}
      </div>
    </section>`,s=e.grupos.map(o=>`
    <section class="panel-pergamino seccion">
      <h2>${l(o.titulo)} <small>(${o.items.length})</small></h2>
      <div class="rejilla">
        ${o.items.map(t=>U(o,t)).join("")}
      </div>
    </section>`).join(""),n=`
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
    </section>`;N.innerHTML=a+s+n}function U(e,a){const s=a.meta??{},n=e.id==="frutas";return`
    <article class="tarjeta" ${n?`style="--rareza:${s.colorRareza}"`:""}>
      <div class="lamina fondo-${e.fondo}">
        ${A(a.archivo,a.ancho,a.alto)}
        ${n?A(s.silueta,a.ancho,a.alto,'class="silueta" title="Silueta para el compendio"'):""}
      </div>
      <h3>${l(a.nombre)}</h3>
      ${n?`<p class="etiquetas"><span class="rareza">${l(s.rareza)}</span> · ${l(s.categoria)}</p>`:""}
      ${a.descripcion?`<p>${l(a.descripcion)}</p>`:""}
      ${n?`<p><b>Técnicas:</b> ${s.tecnicas.map(l).join(", ")}</p><p><b>Debilidad:</b> ${l(s.debilidad)}</p>`:""}
      <p class="archivo">assets/${l(a.archivo)} · ${a.ancho}×${a.alto}</p>
    </article>`}let M;fetch(F("assets/manifiesto.json")).then(e=>e.json()).then(e=>{M=e,I(e)});document.querySelectorAll("[data-zoom]").forEach(e=>e.addEventListener("click",()=>{z=Number(e.dataset.zoom),document.querySelectorAll("[data-zoom]").forEach(a=>a.classList.toggle("activo",a===e)),M&&I(M)}));
