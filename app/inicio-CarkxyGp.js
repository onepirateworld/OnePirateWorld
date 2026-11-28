import{L as Le,C as c,b as Mn,c as gn,S as Ia,e as Tu,h as Zd,d as Pn,F as Nt,r as Zo,R as Au,f as wu,g as Tr,i as Nn,O as Cu,D as Zl,a as Kd,A as Ko,P as Jd,p as Qd,j as eh}from"./frutas-CnIhnYQ7.js";import{c as gs,A as Ru,d as Pu,L as ka,a as Jo,g as th,Z as wt,B as pl,b as Lu,R as ml,M as gl,f as et,e as bn,t as Ot,i as _t,r as Va,h as Wt,C as Ua,j as vl,k as Yt,l as nh,m as ht,p as on,n as An,s as Ai,o as di,q as Sn,u as ih,P as kn,v as _l,w as Du,V as ah,x as Ct,y as Ye,z as Bo,D as oh,E as hr,F as xn,G as rt,H as oa,I as En,J as lo,K as Kn,N as rh,O as sh,Q as Na,S as co,T as vn,U as It,W as lh,X as ch,Y as Kl,_ as uh,$ as Jl,a0 as vs,a1 as Iu,a2 as Ui,a3 as Ar,a4 as zo,a5 as bl,a6 as dh,a7 as hh,a8 as fh,a9 as ph,aa as _s,ab as mh,ac as Ql,ad as gh,ae as vh,af as ec,ag as Xa,ah as uo,ai as ba,aj as tc,ak as nc,al as bs,am as _h,an as wr,ao as ic,ap as bh,aq as Uu,ar as xl,as as xh,at as Mh,au as Sh,av as yh,aw as Eh,ax as Th,ay as Ah,az as wh,aA as Ch,aB as Rh,aC as Ph,aD as Lh,aE as xa,aF as Dh,aG as Nu,aH as Fu,aI as Ih,aJ as Ou,aK as Uh,aL as ac,aM as Nh,aN as Bu,aO as Fh,aP as Ml,aQ as Qo,aR as er,aS as Oh,aT as Bh,aU as zh,aV as oc,aW as zu,aX as $u,aY as $h,aZ as Hh}from"./palabras-BewA-_bX.js";import{T as Hu,a as rc,b as kh,e as Vh,c as Gh,D as Ma,p as jh}from"./tecnicas-CFOPusQ2.js";import"./_commonjsHelpers-C4iS2aBk.js";import"./browser-Be3LZzHR.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sl="170",ea={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wh=0,sc=1,qh=2,ku=1,Xh=2,Hn=3,hi=0,Bt=1,Vn=2,li=0,ta=1,xs=2,lc=3,cc=4,Yh=5,Si=100,Zh=101,Kh=102,Jh=103,Qh=104,ef=200,tf=201,nf=202,af=203,Ms=204,Ss=205,of=206,rf=207,sf=208,lf=209,cf=210,uf=211,df=212,hf=213,ff=214,ys=0,Es=1,Ts=2,ra=3,As=4,ws=5,Cs=6,Rs=7,yl=0,pf=1,mf=2,ci=0,gf=1,vf=2,_f=3,bf=4,xf=5,Mf=6,Sf=7,Vu=300,sa=301,la=302,Ps=303,Ls=304,fr=306,Ds=1e3,Ei=1001,Is=1002,zt=1003,yf=1004,ho=1005,wn=1006,Cr=1007,Ti=1008,qn=1009,Gu=1010,ju=1011,Ya=1012,El=1013,Ci=1014,Gn=1015,Ja=1016,Tl=1017,Al=1018,ca=1020,Wu=35902,qu=1021,Xu=1022,rn=1023,Yu=1024,Zu=1025,na=1026,ua=1027,Ku=1028,wl=1029,Ju=1030,Cl=1031,Rl=1033,$o=33776,Ho=33777,ko=33778,Vo=33779,Us=35840,Ns=35841,Fs=35842,Os=35843,Bs=36196,zs=37492,$s=37496,Hs=37808,ks=37809,Vs=37810,Gs=37811,js=37812,Ws=37813,qs=37814,Xs=37815,Ys=37816,Zs=37817,Ks=37818,Js=37819,Qs=37820,el=37821,Go=36492,tl=36494,nl=36495,Qu=36283,il=36284,al=36285,ol=36286,Ef=3200,Tf=3201,ed=0,Af=1,si="",qt="srgb",ha="srgb-linear",pr="linear",st="srgb",Ni=7680,uc=519,wf=512,Cf=513,Rf=514,td=515,Pf=516,Lf=517,Df=518,If=519,dc=35044,hc="300 es",jn=2e3,tr=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,r=a.length;o<r;o++)a[o].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jo=Math.PI/180,rl=180/Math.PI;function Qa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Ft(n,e,t){return Math.max(e,Math.min(t,n))}function Uf(n,e){return(n%e+e)%e}function Rr(n,e,t){return(1-t)*n+t*e}function Sa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nf={DEG2RAD:jo};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*i-r*a+e.x,this.y=o*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,a,o,r,s,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,r,s,l,u)}set(e,t,i,a,o,r,s,l,u){const h=this.elements;return h[0]=e,h[1]=a,h[2]=s,h[3]=t,h[4]=o,h[5]=l,h[6]=i,h[7]=r,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,r=i[0],s=i[3],l=i[6],u=i[1],h=i[4],d=i[7],f=i[2],p=i[5],_=i[8],b=a[0],g=a[3],m=a[6],P=a[1],w=a[4],S=a[7],O=a[2],R=a[5],D=a[8];return o[0]=r*b+s*P+l*O,o[3]=r*g+s*w+l*R,o[6]=r*m+s*S+l*D,o[1]=u*b+h*P+d*O,o[4]=u*g+h*w+d*R,o[7]=u*m+h*S+d*D,o[2]=f*b+p*P+_*O,o[5]=f*g+p*w+_*R,o[8]=f*m+p*S+_*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],u=e[7],h=e[8];return t*r*h-t*s*u-i*o*h+i*s*l+a*o*u-a*r*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],u=e[7],h=e[8],d=h*r-s*u,f=s*l-h*o,p=u*o-r*l,_=t*d+i*f+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=d*b,e[1]=(a*u-h*i)*b,e[2]=(s*i-a*r)*b,e[3]=f*b,e[4]=(h*t-a*l)*b,e[5]=(a*o-s*t)*b,e[6]=p*b,e[7]=(i*l-u*t)*b,e[8]=(r*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,r,s){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*r+u*s)+r+e,-a*u,a*l,-a*(-u*r+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Ve;function nd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ff(){const n=nr("canvas");return n.style.display="block",n}const fc={};function Fa(n){n in fc||(fc[n]=!0,console.warn(n))}function Of(n,e,t){return new Promise(function(i,a){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}function Bf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zf(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const tt={enabled:!0,workingColorSpace:ha,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(n.r=Wn(n.r),n.g=Wn(n.g),n.b=Wn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(n.r=ia(n.r),n.g=ia(n.g),n.b=ia(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===si?pr:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const pc=[.64,.33,.3,.6,.15,.06],mc=[.2126,.7152,.0722],gc=[.3127,.329],vc=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[ha]:{primaries:pc,whitePoint:gc,transfer:pr,toXYZ:vc,fromXYZ:_c,luminanceCoefficients:mc,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:pc,whitePoint:gc,transfer:st,toXYZ:vc,fromXYZ:_c,luminanceCoefficients:mc,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});let Fi;class $f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=nr("canvas")),Fi.width=e.width,Fi.height=e.height;const i=Fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let r=0;r<o.length;r++)o[r]=Wn(o[r]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hf=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Qa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let r=0,s=a.length;r<s;r++)a[r].isDataTexture?o.push(Lr(a[r].image)):o.push(Lr(a[r]))}else o=Lr(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Lr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$f.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kf=0;class $t extends Di{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Ei,a=Ei,o=wn,r=Ti,s=rn,l=qn,u=$t.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Qa(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=r,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case Is:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case Is:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Vu;$t.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,a=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*a+r[12]*o,this.y=r[1]*t+r[5]*i+r[9]*a+r[13]*o,this.z=r[2]*t+r[6]*i+r[10]*a+r[14]*o,this.w=r[3]*t+r[7]*i+r[11]*a+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const l=e.elements,u=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-b)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+b)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(u+1)/2,S=(p+1)/2,O=(m+1)/2,R=(h+f)/4,D=(d+b)/4,F=(_+g)/4;return w>S&&w>O?w<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(w),a=R/i,o=D/i):S>O?S<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(S),i=R/a,o=F/a):O<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(O),i=D/o,a=F/o),this.set(i,a,o,t),this}let P=Math.sqrt((g-_)*(g-_)+(d-b)*(d-b)+(f-h)*(f-h));return Math.abs(P)<.001&&(P=1),this.x=(g-_)/P,this.y=(d-b)/P,this.z=(f-h)/P,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vf extends Di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const a={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new $t(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new id(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends Vf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ad extends $t{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=zt,this.minFilter=zt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gf extends $t{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=zt,this.minFilter=zt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,r,s){let l=i[a+0],u=i[a+1],h=i[a+2],d=i[a+3];const f=o[r+0],p=o[r+1],_=o[r+2],b=o[r+3];if(s===0){e[t+0]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=b;return}if(d!==b||l!==f||u!==p||h!==_){let g=1-s;const m=l*f+u*p+h*_+d*b,P=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){const O=Math.sqrt(w),R=Math.atan2(O,m*P);g=Math.sin(g*R)/O,s=Math.sin(s*R)/O}const S=s*P;if(l=l*g+f*S,u=u*g+p*S,h=h*g+_*S,d=d*g+b*S,g===1-s){const O=1/Math.sqrt(l*l+u*u+h*h+d*d);l*=O,u*=O,h*=O,d*=O}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,a,o,r){const s=i[a],l=i[a+1],u=i[a+2],h=i[a+3],d=o[r],f=o[r+1],p=o[r+2],_=o[r+3];return e[t]=s*_+h*d+l*p-u*f,e[t+1]=l*_+h*f+u*d-s*p,e[t+2]=u*_+h*p+s*f-l*d,e[t+3]=h*_-s*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,r=e._order,s=Math.cos,l=Math.sin,u=s(i/2),h=s(a/2),d=s(o/2),f=l(i/2),p=l(a/2),_=l(o/2);switch(r){case"XYZ":this._x=f*h*d+u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d+f*p*_;break;case"YZX":this._x=f*h*d+u*p*_,this._y=u*p*d+f*h*_,this._z=u*h*_-f*p*d,this._w=u*h*d-f*p*_;break;case"XZY":this._x=f*h*d-u*p*_,this._y=u*p*d-f*h*_,this._z=u*h*_+f*p*d,this._w=u*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],r=t[1],s=t[5],l=t[9],u=t[2],h=t[6],d=t[10],f=i+s+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-u)*p,this._z=(r-a)*p}else if(i>s&&i>d){const p=2*Math.sqrt(1+i-s-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(o+u)/p}else if(s>d){const p=2*Math.sqrt(1+s-i-d);this._w=(o-u)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-s);this._w=(r-a)/p,this._x=(o+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,r=e._w,s=t._x,l=t._y,u=t._z,h=t._w;return this._x=i*h+r*s+a*u-o*l,this._y=a*h+r*l+o*s-i*u,this._z=o*h+r*u+i*l-a*s,this._w=r*h-i*s-a*l-o*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,o=this._z,r=this._w;let s=r*e._w+i*e._x+a*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=r,this._x=i,this._y=a,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*a+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,s),d=Math.sin((1-t)*h)/u,f=Math.sin(t*h)/u;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=a*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,r=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*r,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*r,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,r=e.y,s=e.z,l=e.w,u=2*(r*a-s*i),h=2*(s*t-o*a),d=2*(o*i-r*t);return this.x=t+l*u+r*d-s*h,this.y=i+l*h+s*u-o*d,this.z=a+l*d+o*h-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,r=t.x,s=t.y,l=t.z;return this.x=a*l-o*s,this.y=o*r-i*l,this.z=i*s-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new K,bc=new Pi;class eo{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,s=o.count;r<s;r++)e.isMesh===!0?e.getVertexPosition(r,dn):dn.fromBufferAttribute(o,r),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const a=e.children;for(let o=0,r=a.length;o<r;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),po.subVectors(this.max,ya),Oi.subVectors(e.a,ya),Bi.subVectors(e.b,ya),zi.subVectors(e.c,ya),Jn.subVectors(Bi,Oi),Qn.subVectors(zi,Bi),pi.subVectors(Oi,zi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-pi.z,pi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,pi.z,0,-pi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-pi.y,pi.x,0];return!Ir(t,Oi,Bi,zi,po)||(t=[1,0,0,0,1,0,0,0,1],!Ir(t,Oi,Bi,zi,po))?!1:(mo.crossVectors(Jn,Qn),t=[mo.x,mo.y,mo.z],Ir(t,Oi,Bi,zi,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new K,new K,new K,new K,new K,new K,new K,new K],dn=new K,fo=new eo,Oi=new K,Bi=new K,zi=new K,Jn=new K,Qn=new K,pi=new K,ya=new K,po=new K,mo=new K,mi=new K;function Ir(n,e,t,i,a){for(let o=0,r=n.length-3;o<=r;o+=3){mi.fromArray(n,o);const s=a.x*Math.abs(mi.x)+a.y*Math.abs(mi.y)+a.z*Math.abs(mi.z),l=e.dot(mi),u=t.dot(mi),h=i.dot(mi);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>s)return!1}return!0}const jf=new eo,Ea=new K,Ur=new K;class mr{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jf.setFromPoints(e).getCenter(i);let a=0;for(let o=0,r=e.length;o<r;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);const t=Ea.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Ea,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(Ur)),this.expandByPoint(Ea.copy(e.center).sub(Ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new K,Nr=new K,go=new K,ei=new K,Fr=new K,vo=new K,Or=new K;class Pl{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Nr.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Nr);const o=e.distanceTo(t)*.5,r=-this.direction.dot(go),s=ei.dot(this.direction),l=-ei.dot(go),u=ei.lengthSq(),h=Math.abs(1-r*r);let d,f,p,_;if(h>0)if(d=r*l-s,f=r*s-l,_=o*h,d>=0)if(f>=-_)if(f<=_){const b=1/h;d*=b,f*=b,p=d*(d+r*f+2*s)+f*(r*d+f+2*l)+u}else f=o,d=Math.max(0,-(r*f+s)),p=-d*d+f*(f+2*l)+u;else f=-o,d=Math.max(0,-(r*f+s)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-r*o+s)),f=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-o,-l),o),p=f*(f+2*l)+u):(d=Math.max(0,-(r*o+s)),f=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+f*(f+2*l)+u);else f=r>0?-o:o,d=Math.max(0,-(r*f+s)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Nr).addScaledVector(go,f),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),a=On.dot(On)-i*i,o=e.radius*e.radius;if(a>o)return null;const r=Math.sqrt(o-a),s=i-r,l=i+r;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,r,s,l;const u=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,a=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,a=(e.min.x-f.x)*u),h>=0?(o=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(o=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),i>r||o>a||((o>i||isNaN(i))&&(i=o),(r<a||isNaN(a))&&(a=r),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||s>a)||((s>i||i!==i)&&(i=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,i,a,o){Fr.subVectors(t,e),vo.subVectors(i,e),Or.crossVectors(Fr,vo);let r=this.direction.dot(Or),s;if(r>0){if(a)return null;s=1}else if(r<0)s=-1,r=-r;else return null;ei.subVectors(this.origin,e);const l=s*this.direction.dot(vo.crossVectors(ei,vo));if(l<0)return null;const u=s*this.direction.dot(Fr.cross(ei));if(u<0||l+u>r)return null;const h=-s*ei.dot(Or);return h<0?null:this.at(h/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,a,o,r,s,l,u,h,d,f,p,_,b,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,r,s,l,u,h,d,f,p,_,b,g)}set(e,t,i,a,o,r,s,l,u,h,d,f,p,_,b,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=a,m[1]=o,m[5]=r,m[9]=s,m[13]=l,m[2]=u,m[6]=h,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/$i.setFromMatrixColumn(e,0).length(),o=1/$i.setFromMatrixColumn(e,1).length(),r=1/$i.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,r=Math.cos(i),s=Math.sin(i),l=Math.cos(a),u=Math.sin(a),h=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=r*h,p=r*d,_=s*h,b=s*d;t[0]=l*h,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-b*u,t[9]=-s*l,t[2]=b-f*u,t[6]=_+p*u,t[10]=r*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,_=u*h,b=u*d;t[0]=f+b*s,t[4]=_*s-p,t[8]=r*u,t[1]=r*d,t[5]=r*h,t[9]=-s,t[2]=p*s-_,t[6]=b+f*s,t[10]=r*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,_=u*h,b=u*d;t[0]=f-b*s,t[4]=-r*d,t[8]=_+p*s,t[1]=p+_*s,t[5]=r*h,t[9]=b-f*s,t[2]=-r*u,t[6]=s,t[10]=r*l}else if(e.order==="ZYX"){const f=r*h,p=r*d,_=s*h,b=s*d;t[0]=l*h,t[4]=_*u-p,t[8]=f*u+b,t[1]=l*d,t[5]=b*u+f,t[9]=p*u-_,t[2]=-u,t[6]=s*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*u,_=s*l,b=s*u;t[0]=l*h,t[4]=b-f*d,t[8]=_*d+p,t[1]=d,t[5]=r*h,t[9]=-s*h,t[2]=-u*h,t[6]=p*d+_,t[10]=f-b*d}else if(e.order==="XZY"){const f=r*l,p=r*u,_=s*l,b=s*u;t[0]=l*h,t[4]=-d,t[8]=u*h,t[1]=f*d+b,t[5]=r*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=s*h,t[10]=b*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wf,e,qf)}lookAt(e,t,i){const a=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ti.crossVectors(i,Kt),ti.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ti.crossVectors(i,Kt)),ti.normalize(),_o.crossVectors(Kt,ti),a[0]=ti.x,a[4]=_o.x,a[8]=Kt.x,a[1]=ti.y,a[5]=_o.y,a[9]=Kt.y,a[2]=ti.z,a[6]=_o.z,a[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,r=i[0],s=i[4],l=i[8],u=i[12],h=i[1],d=i[5],f=i[9],p=i[13],_=i[2],b=i[6],g=i[10],m=i[14],P=i[3],w=i[7],S=i[11],O=i[15],R=a[0],D=a[4],F=a[8],A=a[12],M=a[1],I=a[5],ee=a[9],q=a[13],U=a[2],Y=a[6],j=a[10],J=a[14],Q=a[3],_e=a[7],ye=a[11],Re=a[15];return o[0]=r*R+s*M+l*U+u*Q,o[4]=r*D+s*I+l*Y+u*_e,o[8]=r*F+s*ee+l*j+u*ye,o[12]=r*A+s*q+l*J+u*Re,o[1]=h*R+d*M+f*U+p*Q,o[5]=h*D+d*I+f*Y+p*_e,o[9]=h*F+d*ee+f*j+p*ye,o[13]=h*A+d*q+f*J+p*Re,o[2]=_*R+b*M+g*U+m*Q,o[6]=_*D+b*I+g*Y+m*_e,o[10]=_*F+b*ee+g*j+m*ye,o[14]=_*A+b*q+g*J+m*Re,o[3]=P*R+w*M+S*U+O*Q,o[7]=P*D+w*I+S*Y+O*_e,o[11]=P*F+w*ee+S*j+O*ye,o[15]=P*A+w*q+S*J+O*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],r=e[1],s=e[5],l=e[9],u=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],b=e[7],g=e[11],m=e[15];return _*(+o*l*d-a*u*d-o*s*f+i*u*f+a*s*p-i*l*p)+b*(+t*l*p-t*u*f+o*r*f-a*r*p+a*u*h-o*l*h)+g*(+t*u*d-t*s*p-o*r*d+i*r*p+o*s*h-i*u*h)+m*(-a*s*h-t*l*d+t*s*f+a*r*d-i*r*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],u=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],b=e[13],g=e[14],m=e[15],P=d*g*u-b*f*u+b*l*p-s*g*p-d*l*m+s*f*m,w=_*f*u-h*g*u-_*l*p+r*g*p+h*l*m-r*f*m,S=h*b*u-_*d*u+_*s*p-r*b*p-h*s*m+r*d*m,O=_*d*l-h*b*l-_*s*f+r*b*f+h*s*g-r*d*g,R=t*P+i*w+a*S+o*O;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=P*D,e[1]=(b*f*o-d*g*o-b*a*p+i*g*p+d*a*m-i*f*m)*D,e[2]=(s*g*o-b*l*o+b*a*u-i*g*u-s*a*m+i*l*m)*D,e[3]=(d*l*o-s*f*o-d*a*u+i*f*u+s*a*p-i*l*p)*D,e[4]=w*D,e[5]=(h*g*o-_*f*o+_*a*p-t*g*p-h*a*m+t*f*m)*D,e[6]=(_*l*o-r*g*o-_*a*u+t*g*u+r*a*m-t*l*m)*D,e[7]=(r*f*o-h*l*o+h*a*u-t*f*u-r*a*p+t*l*p)*D,e[8]=S*D,e[9]=(_*d*o-h*b*o-_*i*p+t*b*p+h*i*m-t*d*m)*D,e[10]=(r*b*o-_*s*o+_*i*u-t*b*u-r*i*m+t*s*m)*D,e[11]=(h*s*o-r*d*o-h*i*u+t*d*u+r*i*p-t*s*p)*D,e[12]=O*D,e[13]=(h*b*a-_*d*a+_*i*f-t*b*f-h*i*g+t*d*g)*D,e[14]=(_*s*a-r*b*a-_*i*l+t*b*l+r*i*g-t*s*g)*D,e[15]=(r*d*a-h*s*a+h*i*l-t*d*l-r*i*f+t*s*f)*D,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,r=e.x,s=e.y,l=e.z,u=o*r,h=o*s;return this.set(u*r+i,u*s-a*l,u*l+a*s,0,u*s+a*l,h*s+i,h*l-a*r,0,u*l-a*s,h*l+a*r,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,r){return this.set(1,i,o,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,r=t._y,s=t._z,l=t._w,u=o+o,h=r+r,d=s+s,f=o*u,p=o*h,_=o*d,b=r*h,g=r*d,m=s*d,P=l*u,w=l*h,S=l*d,O=i.x,R=i.y,D=i.z;return a[0]=(1-(b+m))*O,a[1]=(p+S)*O,a[2]=(_-w)*O,a[3]=0,a[4]=(p-S)*R,a[5]=(1-(f+m))*R,a[6]=(g+P)*R,a[7]=0,a[8]=(_+w)*D,a[9]=(g-P)*D,a[10]=(1-(f+b))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let o=$i.set(a[0],a[1],a[2]).length();const r=$i.set(a[4],a[5],a[6]).length(),s=$i.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],hn.copy(this);const u=1/o,h=1/r,d=1/s;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),i.x=o,i.y=r,i.z=s,this}makePerspective(e,t,i,a,o,r,s=jn){const l=this.elements,u=2*o/(t-e),h=2*o/(i-a),d=(t+e)/(t-e),f=(i+a)/(i-a);let p,_;if(s===jn)p=-(r+o)/(r-o),_=-2*r*o/(r-o);else if(s===tr)p=-r/(r-o),_=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,o,r,s=jn){const l=this.elements,u=1/(t-e),h=1/(i-a),d=1/(r-o),f=(t+e)*u,p=(i+a)*h;let _,b;if(s===jn)_=(r+o)*d,b=-2*d;else if(s===tr)_=o*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $i=new K,hn=new mt,Wf=new K(0,0,0),qf=new K(1,1,1),ti=new K,_o=new K,Kt=new K,xc=new mt,Mc=new Pi;class Ln{constructor(e=0,t=0,i=0,a=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],r=a[4],s=a[8],l=a[1],u=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Ft(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xf=0;const Sc=new K,Hi=new Pi,Bn=new mt,bo=new K,Ta=new K,Yf=new K,Zf=new Pi,yc=new K(1,0,0),Ec=new K(0,1,0),Tc=new K(0,0,1),Ac={type:"added"},Kf={type:"removed"},ki={type:"childadded",child:null},Br={type:"childremoved",child:null};class Rt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new K,t=new Ln,i=new Pi,a=new K(1,1,1);function o(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ve}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(yc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bo.copy(e):bo.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Ta,bo,this.up):Bn.lookAt(bo,Ta,this.up),this.quaternion.setFromRotationMatrix(Bn),a&&(Bn.extractRotation(a.matrixWorld),Hi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ac),ki.child=e,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kf),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ac),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ta,Zf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(o(e.materials,this.material[l]));a.material=s}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(o(e.animations,l))}}if(t){const s=r(e.geometries),l=r(e.materials),u=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),p=r(e.animations),_=r(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function r(s){const l=[];for(const u in s){const h=s[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Rt.DEFAULT_UP=new K(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new K,zn=new K,zr=new K,$n=new K,Vi=new K,Gi=new K,wc=new K,$r=new K,Hr=new K,kr=new K,Vr=new vt,Gr=new vt,jr=new vt;class _n{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),fn.subVectors(e,t),a.cross(fn);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){fn.subVectors(a,t),zn.subVectors(i,t),zr.subVectors(e,t);const r=fn.dot(fn),s=fn.dot(zn),l=fn.dot(zr),u=zn.dot(zn),h=zn.dot(zr),d=r*u-s*s;if(d===0)return o.set(0,0,0),null;const f=1/d,p=(u*l-s*h)*f,_=(r*h-s*l)*f;return o.set(1-p-_,_,p)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,a,o,r,s,l){return this.getBarycoord(e,t,i,a,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,$n.x),l.addScaledVector(r,$n.y),l.addScaledVector(s,$n.z),l)}static getInterpolatedAttribute(e,t,i,a,o,r){return Vr.setScalar(0),Gr.setScalar(0),jr.setScalar(0),Vr.fromBufferAttribute(e,t),Gr.fromBufferAttribute(e,i),jr.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Vr,o.x),r.addScaledVector(Gr,o.y),r.addScaledVector(jr,o.z),r}static isFrontFacing(e,t,i,a){return fn.subVectors(i,t),zn.subVectors(e,t),fn.cross(zn).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),fn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let r,s;Vi.subVectors(a,i),Gi.subVectors(o,i),$r.subVectors(e,i);const l=Vi.dot($r),u=Gi.dot($r);if(l<=0&&u<=0)return t.copy(i);Hr.subVectors(e,a);const h=Vi.dot(Hr),d=Gi.dot(Hr);if(h>=0&&d<=h)return t.copy(a);const f=l*d-h*u;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(Vi,r);kr.subVectors(e,o);const p=Vi.dot(kr),_=Gi.dot(kr);if(_>=0&&p<=_)return t.copy(o);const b=p*u-l*_;if(b<=0&&u>=0&&_<=0)return s=u/(u-_),t.copy(i).addScaledVector(Gi,s);const g=h*_-p*d;if(g<=0&&d-h>=0&&p-_>=0)return wc.subVectors(o,a),s=(d-h)/(d-h+(p-_)),t.copy(a).addScaledVector(wc,s);const m=1/(g+b+f);return r=b*m,s=f*m,t.copy(i).addScaledVector(Vi,r).addScaledVector(Gi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Wr(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=tt.workingColorSpace){if(e=Uf(e,1),t=Ft(t,0,1),i=Ft(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,r=2*i-o;this.r=Wr(r,o,e+1/3),this.g=Wr(r,o,e),this.b=Wr(r,o,e-1/3)}return tt.toWorkingColorSpace(this,a),this}setStyle(e,t=qt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=a[1],s=a[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return tt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ft(Dt.r*255,0,255))*65536+Math.round(Ft(Dt.g*255,0,255))*256+Math.round(Ft(Dt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,a=Dt.g,o=Dt.b,r=Math.max(i,a,o),s=Math.min(i,a,o);let l,u;const h=(s+r)/2;if(s===r)l=0,u=0;else{const d=r-s;switch(u=h<=.5?d/(r+s):d/(2-r-s),r){case i:l=(a-o)/d+(a<o?6:0);break;case a:l=(o-i)/d+2;break;case o:l=(i-a)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=qt){tt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,a=Dt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(xo);const i=Rr(ni.h,xo.h,t),a=Rr(ni.s,xo.s,t),o=Rr(ni.l,xo.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ke;Ke.NAMES=rd;let Jf=0;class fa extends Di{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Qa(),this.name="",this.blending=ta,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ms,this.blendDst=Ss,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ms&&(i.blendSrc=this.blendSrc),this.blendDst!==Ss&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const r=[];for(const s in o){const l=o[s];delete l.metadata,r.push(l)}return r}if(t){const o=a(e.textures),r=a(e.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sd extends fa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new K,Mo=new Ge;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),a=Vt(a,this.array),o=Vt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),e}}class ld extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cd extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Cn extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qf=0;const tn=new mt,qr=new Rt,ji=new K,Jt=new eo,Aa=new eo,Et=new K;class Dn extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?cd:ld)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ve().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return qr.lookAt(e),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Cn(i,3))}else{for(let i=0,a=t.count;i<a;i++){const o=e[i];t.setXYZ(i,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Jt.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const s=t[o];Aa.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(Jt.min,Aa.min),Jt.expandByPoint(Et),Et.addVectors(Jt.max,Aa.max),Jt.expandByPoint(Et)):(Jt.expandByPoint(Aa.min),Jt.expandByPoint(Aa.max))}Jt.getCenter(i);let a=0;for(let o=0,r=e.count;o<r;o++)Et.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(Et));if(t)for(let o=0,r=t.length;o<r;o++){const s=t[o],l=this.morphTargetsRelative;for(let u=0,h=s.count;u<h;u++)Et.fromBufferAttribute(s,u),l&&(ji.fromBufferAttribute(e,u),Et.add(ji)),a=Math.max(a,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),s=[],l=[];for(let F=0;F<i.count;F++)s[F]=new K,l[F]=new K;const u=new K,h=new K,d=new K,f=new Ge,p=new Ge,_=new Ge,b=new K,g=new K;function m(F,A,M){u.fromBufferAttribute(i,F),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,M),f.fromBufferAttribute(o,F),p.fromBufferAttribute(o,A),_.fromBufferAttribute(o,M),h.sub(u),d.sub(u),p.sub(f),_.sub(f);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(b.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(I),s[F].add(b),s[A].add(b),s[M].add(b),l[F].add(g),l[A].add(g),l[M].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let F=0,A=P.length;F<A;++F){const M=P[F],I=M.start,ee=M.count;for(let q=I,U=I+ee;q<U;q+=3)m(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new K,S=new K,O=new K,R=new K;function D(F){O.fromBufferAttribute(a,F),R.copy(O);const A=s[F];w.copy(A),w.sub(O.multiplyScalar(O.dot(A))).normalize(),S.crossVectors(R,A);const I=S.dot(l[F])<0?-1:1;r.setXYZW(F,w.x,w.y,w.z,I)}for(let F=0,A=P.length;F<A;++F){const M=P[F],I=M.start,ee=M.count;for(let q=I,U=I+ee;q<U;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const a=new K,o=new K,r=new K,s=new K,l=new K,u=new K,h=new K,d=new K;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),b=e.getX(f+1),g=e.getX(f+2);a.fromBufferAttribute(t,_),o.fromBufferAttribute(t,b),r.fromBufferAttribute(t,g),h.subVectors(r,o),d.subVectors(a,o),h.cross(d),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,g),s.add(h),l.add(h),u.add(h),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,o),d.subVectors(a,o),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(s,l){const u=s.array,h=s.itemSize,d=s.normalized,f=new u.constructor(l.length*h);let p=0,_=0;for(let b=0,g=l.length;b<g;b++){s.isInterleavedBufferAttribute?p=l[b]*s.data.stride+s.offset:p=l[b]*h;for(let m=0;m<h;m++)f[_++]=u[p++]}return new ln(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,i=this.index.array,a=this.attributes;for(const s in a){const l=a[s],u=e(l,i);t.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const l=[],u=o[s];for(let h=0,d=u.length;h<d;h++){const f=u[h],p=e(f,i);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let s=0,l=r.length;s<l;s++){const u=r[s];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const a={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];h.push(p.toJSON(e.data))}h.length>0&&(a[l]=h,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const u in a){const h=a[u];this.setAttribute(u,h.clone(t))}const o=e.morphAttributes;for(const u in o){const h=[],d=o[u];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let u=0,h=r.length;u<h;u++){const d=r[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new mt,gi=new Pl,So=new mr,Rc=new K,yo=new K,Eo=new K,To=new K,Xr=new K,Ao=new K,Pc=new K,wo=new K;class sn extends Rt{constructor(e=new Dn,t=new sd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(o&&s){Ao.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const h=s[l],d=o[l];h!==0&&(Xr.fromBufferAttribute(d,e),r?Ao.addScaledVector(Xr,h):Ao.addScaledVector(Xr.sub(t),h))}t.add(Ao)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(o),gi.copy(e.ray).recast(e.near),!(So.containsPoint(gi.origin)===!1&&(gi.intersectSphere(So,Rc)===null||gi.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Cc.copy(o).invert(),gi.copy(e.ray).applyMatrix4(Cc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let a;const o=this.geometry,r=this.material,s=o.index,l=o.attributes.position,u=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,f=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(r))for(let _=0,b=f.length;_<b;_++){const g=f[_],m=r[g.materialIndex],P=Math.max(g.start,p.start),w=Math.min(s.count,Math.min(g.start+g.count,p.start+p.count));for(let S=P,O=w;S<O;S+=3){const R=s.getX(S),D=s.getX(S+1),F=s.getX(S+2);a=Co(this,m,e,i,u,h,d,R,D,F),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),b=Math.min(s.count,p.start+p.count);for(let g=_,m=b;g<m;g+=3){const P=s.getX(g),w=s.getX(g+1),S=s.getX(g+2);a=Co(this,r,e,i,u,h,d,P,w,S),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,b=f.length;_<b;_++){const g=f[_],m=r[g.materialIndex],P=Math.max(g.start,p.start),w=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=P,O=w;S<O;S+=3){const R=S,D=S+1,F=S+2;a=Co(this,m,e,i,u,h,d,R,D,F),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let g=_,m=b;g<m;g+=3){const P=g,w=g+1,S=g+2;a=Co(this,r,e,i,u,h,d,P,w,S),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function ep(n,e,t,i,a,o,r,s){let l;if(e.side===Bt?l=i.intersectTriangle(r,o,a,!0,s):l=i.intersectTriangle(a,o,r,e.side===hi,s),l===null)return null;wo.copy(s),wo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(wo);return u<t.near||u>t.far?null:{distance:u,point:wo.clone(),object:n}}function Co(n,e,t,i,a,o,r,s,l,u){n.getVertexPosition(s,yo),n.getVertexPosition(l,Eo),n.getVertexPosition(u,To);const h=ep(n,e,t,i,yo,Eo,To,Pc);if(h){const d=new K;_n.getBarycoord(Pc,yo,Eo,To,d),a&&(h.uv=_n.getInterpolatedAttribute(a,s,l,u,d,new Ge)),o&&(h.uv1=_n.getInterpolatedAttribute(o,s,l,u,d,new Ge)),r&&(h.normal=_n.getInterpolatedAttribute(r,s,l,u,d,new K),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:s,b:l,c:u,normal:new K,materialIndex:0};_n.getNormal(yo,Eo,To,f.normal),h.face=f,h.barycoord=d}return h}class to extends Dn{constructor(e=1,t=1,i=1,a=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:r};const s=this;a=Math.floor(a),o=Math.floor(o),r=Math.floor(r);const l=[],u=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,r,o,0),_("z","y","x",1,-1,i,t,-e,r,o,1),_("x","z","y",1,1,e,i,t,a,r,2),_("x","z","y",1,-1,e,i,-t,a,r,3),_("x","y","z",1,-1,e,t,i,a,o,4),_("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(l),this.setAttribute("position",new Cn(u,3)),this.setAttribute("normal",new Cn(h,3)),this.setAttribute("uv",new Cn(d,2));function _(b,g,m,P,w,S,O,R,D,F,A){const M=S/D,I=O/F,ee=S/2,q=O/2,U=R/2,Y=D+1,j=F+1;let J=0,Q=0;const _e=new K;for(let ye=0;ye<j;ye++){const Re=ye*I-q;for(let ze=0;ze<Y;ze++){const qe=ze*M-ee;_e[b]=qe*P,_e[g]=Re*w,_e[m]=U,u.push(_e.x,_e.y,_e.z),_e[b]=0,_e[g]=0,_e[m]=R>0?1:-1,h.push(_e.x,_e.y,_e.z),d.push(ze/D),d.push(1-ye/F),J+=1}}for(let ye=0;ye<F;ye++)for(let Re=0;Re<D;Re++){const ze=f+Re+Y*ye,qe=f+Re+Y*(ye+1),de=f+(Re+1)+Y*(ye+1),y=f+(Re+1)+Y*ye;l.push(ze,qe,y),l.push(qe,de,y),Q+=6}s.addGroup(p,Q,A),p+=Q,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function da(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function Ut(n){const e={};for(let t=0;t<n.length;t++){const i=da(n[t]);for(const a in i)e[a]=i[a]}return e}function tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ud(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const np={clone:da,merge:Ut};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends fa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=da(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dd extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new K,Lc=new Ge,Dc=new Ge;class an extends dd{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Lc,Dc),t.subVectors(Dc,Lc)}setViewOffset(e,t,i,a,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,u=r.fullHeight;o+=r.offsetX*a/l,t-=r.offsetY*i/u,a*=r.width/l,i*=r.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,qi=1;class op extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new an(Wi,qi,e,t);a.layers=this.layers,this.add(a);const o=new an(Wi,qi,e,t);o.layers=this.layers,this.add(o);const r=new an(Wi,qi,e,t);r.layers=this.layers,this.add(r);const s=new an(Wi,qi,e,t);s.layers=this.layers,this.add(s);const l=new an(Wi,qi,e,t);l.layers=this.layers,this.add(l);const u=new an(Wi,qi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,r,s,l]=t;for(const u of t)this.remove(u);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,s,l,u,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,o),e.setRenderTarget(i,1,a),e.render(t,r),e.setRenderTarget(i,2,a),e.render(t,s),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,u),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class hd extends $t{constructor(e,t,i,a,o,r,s,l,u,h){e=e!==void 0?e:[],t=t!==void 0?t:sa,super(e,t,i,a,o,r,s,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rp extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new hd(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new to(5,5,5),o=new Xn({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:li});o.uniforms.tEquirect.value=t;const r=new sn(a,o),s=t.minFilter;return t.minFilter===Ti&&(t.minFilter=wn),new op(1,10,this).update(e,r),t.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,a){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,a);e.setRenderTarget(o)}}const Yr=new K,sp=new K,lp=new Ve;class ri{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Yr.subVectors(i,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yr),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lp.getNormalMatrix(e),a=this.coplanarPoint(Yr).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new mr,Ro=new K;class Ll{constructor(e=new ri,t=new ri,i=new ri,a=new ri,o=new ri,r=new ri){this.planes=[e,t,i,a,o,r]}set(e,t,i,a,o,r){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(a),s[4].copy(o),s[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jn){const i=this.planes,a=e.elements,o=a[0],r=a[1],s=a[2],l=a[3],u=a[4],h=a[5],d=a[6],f=a[7],p=a[8],_=a[9],b=a[10],g=a[11],m=a[12],P=a[13],w=a[14],S=a[15];if(i[0].setComponents(l-o,f-u,g-p,S-m).normalize(),i[1].setComponents(l+o,f+u,g+p,S+m).normalize(),i[2].setComponents(l+r,f+h,g+_,S+P).normalize(),i[3].setComponents(l-r,f-h,g-_,S-P).normalize(),i[4].setComponents(l-s,f-d,g-b,S-w).normalize(),t===jn)i[5].setComponents(l+s,f+d,g+b,S+w).normalize();else if(t===tr)i[5].setComponents(s,d,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Ro.x=a.normal.x>0?e.max.x:e.min.x,Ro.y=a.normal.y>0?e.max.y:e.min.y,Ro.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fd(){let n=null,e=!1,t=null,i=null;function a(o,r){t(o,r),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function cp(n){const e=new WeakMap;function t(s,l){const u=s.array,h=s.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,h),s.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:d}}function i(s,l,u){const h=l.array,d=l.updateRanges;if(n.bindBuffer(u,s),d.length===0)n.bufferSubData(u,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],b=d[p];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,d[f]=b)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const b=d[p];n.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(n.deleteBuffer(l.buffer),e.delete(s))}function r(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const h=e.get(s);(!h||h.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const u=e.get(s);if(u===void 0)e.set(s,t(s,l));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,l),u.version=s.version}}return{get:a,remove:o,update:r}}class gr extends Dn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,r=t/2,s=Math.floor(i),l=Math.floor(a),u=s+1,h=l+1,d=e/s,f=t/l,p=[],_=[],b=[],g=[];for(let m=0;m<h;m++){const P=m*f-r;for(let w=0;w<u;w++){const S=w*d-o;_.push(S,-P,0),b.push(0,0,1),g.push(w/s),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let P=0;P<s;P++){const w=P+u*m,S=P+u*(m+1),O=P+1+u*(m+1),R=P+1+u*m;p.push(w,S,R),p.push(S,O,R)}this.setIndex(p),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(b,3)),this.setAttribute("uv",new Cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.widthSegments,e.heightSegments)}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ep=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Np=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,um=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$m=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ag=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_g=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Eg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:up,alphahash_pars_fragment:dp,alphamap_fragment:hp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:vp,batching_pars_vertex:_p,batching_vertex:bp,begin_vertex:xp,beginnormal_vertex:Mp,bsdfs:Sp,iridescence_fragment:yp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Cp,color_fragment:Rp,color_pars_fragment:Pp,color_pars_vertex:Lp,color_vertex:Dp,common:Ip,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Fp,displacementmap_vertex:Op,emissivemap_fragment:Bp,emissivemap_pars_fragment:zp,colorspace_fragment:$p,colorspace_pars_fragment:Hp,envmap_fragment:kp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:Gp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:nm,envmap_vertex:Wp,fog_vertex:qp,fog_pars_vertex:Xp,fog_fragment:Yp,fog_pars_fragment:Zp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:em,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:am,lights_phong_fragment:om,lights_phong_pars_fragment:rm,lights_physical_fragment:sm,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:um,lights_fragment_end:dm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:vm,map_particle_fragment:_m,map_particle_pars_fragment:bm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:Mm,morphinstance_vertex:Sm,morphcolor_vertex:ym,morphnormal_vertex:Em,morphtarget_pars_vertex:Tm,morphtarget_vertex:Am,normal_fragment_begin:wm,normal_fragment_maps:Cm,normal_pars_fragment:Rm,normal_pars_vertex:Pm,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Fm,opaque_fragment:Om,packing:Bm,premultiplied_alpha_fragment:zm,project_vertex:$m,dithering_fragment:Hm,dithering_pars_fragment:km,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:jm,shadowmap_pars_vertex:Wm,shadowmap_vertex:qm,shadowmask_pars_fragment:Xm,skinbase_vertex:Ym,skinning_pars_vertex:Zm,skinning_vertex:Km,skinnormal_vertex:Jm,specularmap_fragment:Qm,specularmap_pars_fragment:eg,tonemapping_fragment:tg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:ag,uv_pars_fragment:og,uv_pars_vertex:rg,uv_vertex:sg,worldpos_vertex:lg,background_vert:cg,background_frag:ug,backgroundCube_vert:dg,backgroundCube_frag:hg,cube_vert:fg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distanceRGBA_vert:vg,distanceRGBA_frag:_g,equirect_vert:bg,equirect_frag:xg,linedashed_vert:Mg,linedashed_frag:Sg,meshbasic_vert:yg,meshbasic_frag:Eg,meshlambert_vert:Tg,meshlambert_frag:Ag,meshmatcap_vert:wg,meshmatcap_frag:Cg,meshnormal_vert:Rg,meshnormal_frag:Pg,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ig,meshphysical_frag:Ug,meshtoon_vert:Ng,meshtoon_frag:Fg,points_vert:Og,points_frag:Bg,shadow_vert:zg,shadow_frag:$g,sprite_vert:Hg,sprite_frag:kg},Se={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Tn={basic:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ut([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ut([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ut([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ut([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ut([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ut([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ut([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ut([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ut([Se.common,Se.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ut([Se.lights,Se.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Tn.physical={uniforms:Ut([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Po={r:0,b:0,g:0},_i=new Ln,Vg=new mt;function Gg(n,e,t,i,a,o,r){const s=new Ke(0);let l=o===!0?0:1,u,h,d=null,f=0,p=null;function _(P){let w=P.isScene===!0?P.background:null;return w&&w.isTexture&&(w=(P.backgroundBlurriness>0?t:e).get(w)),w}function b(P){let w=!1;const S=_(P);S===null?m(s,l):S&&S.isColor&&(m(S,1),w=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(P,w){const S=_(w);S&&(S.isCubeTexture||S.mapping===fr)?(h===void 0&&(h=new sn(new to(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:da(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),_i.copy(w.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(_i)),h.material.toneMapped=tt.getTransfer(S.colorSpace)!==st,(d!==S||f!==S.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new sn(new gr(2,2),new Xn({name:"BackgroundMaterial",uniforms:da(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.toneMapped=tt.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null))}function m(P,w){P.getRGB(Po,ud(n)),i.buffers.color.setClear(Po.r,Po.g,Po.b,w,r)}return{getClearColor:function(){return s},setClearColor:function(P,w=1){s.set(P),l=w,m(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(P){l=P,m(s,l)},render:b,addToRenderList:g}}function jg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},a=f(null);let o=a,r=!1;function s(M,I,ee,q,U){let Y=!1;const j=d(q,ee,I);o!==j&&(o=j,u(o.object)),Y=p(M,q,ee,U),Y&&_(M,q,ee,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,S(M,I,ee,q),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,I,ee){const q=ee.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let Y=U[I.id];Y===void 0&&(Y={},U[I.id]=Y);let j=Y[q];return j===void 0&&(j=f(l()),Y[q]=j),j}function f(M){const I=[],ee=[],q=[];for(let U=0;U<t;U++)I[U]=0,ee[U]=0,q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ee,attributeDivisors:q,object:M,attributes:{},index:null}}function p(M,I,ee,q){const U=o.attributes,Y=I.attributes;let j=0;const J=ee.getAttributes();for(const Q in J)if(J[Q].location>=0){const ye=U[Q];let Re=Y[Q];if(Re===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(Re=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(Re=M.instanceColor)),ye===void 0||ye.attribute!==Re||Re&&ye.data!==Re.data)return!0;j++}return o.attributesNum!==j||o.index!==q}function _(M,I,ee,q){const U={},Y=I.attributes;let j=0;const J=ee.getAttributes();for(const Q in J)if(J[Q].location>=0){let ye=Y[Q];ye===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor));const Re={};Re.attribute=ye,ye&&ye.data&&(Re.data=ye.data),U[Q]=Re,j++}o.attributes=U,o.attributesNum=j,o.index=q}function b(){const M=o.newAttributes;for(let I=0,ee=M.length;I<ee;I++)M[I]=0}function g(M){m(M,0)}function m(M,I){const ee=o.newAttributes,q=o.enabledAttributes,U=o.attributeDivisors;ee[M]=1,q[M]===0&&(n.enableVertexAttribArray(M),q[M]=1),U[M]!==I&&(n.vertexAttribDivisor(M,I),U[M]=I)}function P(){const M=o.newAttributes,I=o.enabledAttributes;for(let ee=0,q=I.length;ee<q;ee++)I[ee]!==M[ee]&&(n.disableVertexAttribArray(ee),I[ee]=0)}function w(M,I,ee,q,U,Y,j){j===!0?n.vertexAttribIPointer(M,I,ee,U,Y):n.vertexAttribPointer(M,I,ee,q,U,Y)}function S(M,I,ee,q){b();const U=q.attributes,Y=ee.getAttributes(),j=I.defaultAttributeValues;for(const J in Y){const Q=Y[J];if(Q.location>=0){let _e=U[J];if(_e===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),_e!==void 0){const ye=_e.normalized,Re=_e.itemSize,ze=e.get(_e);if(ze===void 0)continue;const qe=ze.buffer,de=ze.type,y=ze.bytesPerElement,X=de===n.INT||de===n.UNSIGNED_INT||_e.gpuType===El;if(_e.isInterleavedBufferAttribute){const Z=_e.data,B=Z.stride,he=_e.offset;if(Z.isInstancedInterleavedBuffer){for(let le=0;le<Q.locationSize;le++)m(Q.location+le,Z.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<Q.locationSize;le++)g(Q.location+le);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let le=0;le<Q.locationSize;le++)w(Q.location+le,Re/Q.locationSize,de,ye,B*y,(he+Re/Q.locationSize*le)*y,X)}else{if(_e.isInstancedBufferAttribute){for(let Z=0;Z<Q.locationSize;Z++)m(Q.location+Z,_e.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Z=0;Z<Q.locationSize;Z++)g(Q.location+Z);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Z=0;Z<Q.locationSize;Z++)w(Q.location+Z,Re/Q.locationSize,de,ye,Re*y,Re/Q.locationSize*Z*y,X)}}else if(j!==void 0){const ye=j[J];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(Q.location,ye);break;case 3:n.vertexAttrib3fv(Q.location,ye);break;case 4:n.vertexAttrib4fv(Q.location,ye);break;default:n.vertexAttrib1fv(Q.location,ye)}}}}P()}function O(){F();for(const M in i){const I=i[M];for(const ee in I){const q=I[ee];for(const U in q)h(q[U].object),delete q[U];delete I[ee]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const ee in I){const q=I[ee];for(const U in q)h(q[U].object),delete q[U];delete I[ee]}delete i[M.id]}function D(M){for(const I in i){const ee=i[I];if(ee[M.id]===void 0)continue;const q=ee[M.id];for(const U in q)h(q[U].object),delete q[U];delete ee[M.id]}}function F(){A(),r=!0,o!==a&&(o=a,u(o.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:F,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:b,enableAttribute:g,disableUnusedAttributes:P}}function Wg(n,e,t){let i;function a(u){i=u}function o(u,h){n.drawArrays(i,u,h),t.update(h,i,1)}function r(u,h,d){d!==0&&(n.drawArraysInstanced(i,u,h,d),t.update(h,i,d))}function s(u,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];t.update(p,i,1)}function l(u,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)r(u[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,d);let _=0;for(let b=0;b<d;b++)_+=h[b]*f[b];t.update(_,i,1)}}this.setMode=a,this.render=o,this.renderInstances=r,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function qg(n,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(D){return!(D!==rn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(D){const F=D===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==qn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Gn&&!F)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:P,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:O,maxSamples:R}}function Xg(n){const e=this;let t=null,i=0,a=!1,o=!1;const r=new ri,s=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||a;return a=f,i=d.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!a||_===null||_.length===0||o&&!g)o?h(null):u();else{const P=o?0:i,w=P*4;let S=m.clippingState||null;l.value=S,S=h(_,f,w,p);for(let O=0;O!==w;++O)S[O]=t[O];m.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,_){const b=d!==null?d.length:0;let g=null;if(b!==0){if(g=l.value,_!==!0||g===null){const m=p+b*4,P=f.matrixWorldInverse;s.getNormalMatrix(P),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,S=p;w!==b;++w,S+=4)r.copy(d[w]).applyMatrix4(P,s),r.normal.toArray(g,S),g[S+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function Yg(n){let e=new WeakMap;function t(r,s){return s===Ps?r.mapping=sa:s===Ls&&(r.mapping=la),r}function i(r){if(r&&r.isTexture){const s=r.mapping;if(s===Ps||s===Ls)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const u=new rp(l.height);return u.fromEquirectangularTexture(n,r),e.set(r,u),r.addEventListener("dispose",a),t(u.texture,r.mapping)}else return null}}return r}function a(r){const s=r.target;s.removeEventListener("dispose",a);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class pd extends dd{constructor(e=-1,t=1,i=1,a=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,r=i+e,s=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,r=o+u*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Ic=[.125,.215,.35,.446,.526,.582],yi=20,Zr=new pd,Uc=new Ke;let Kr=null,Jr=0,Qr=0,es=!1;const Mi=(1+Math.sqrt(5))/2,Xi=1/Mi,Nc=[new K(-Mi,Xi,0),new K(Mi,Xi,0),new K(-Xi,0,Mi),new K(Xi,0,Mi),new K(0,Mi,-Xi),new K(0,Mi,Xi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){Kr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,a,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kr,Jr,Qr),this._renderer.xr.enabled=es,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sa||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ja,format:rn,colorSpace:ha,depthBuffer:!1},a=Oc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(o)),this._blurMaterial=Kg(o,e,t)}return a}_compileMaterial(e){const t=new sn(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,i,a){const s=new an(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Uc),h.toneMapping=ci,h.autoClear=!1;const p=new sd({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),_=new sn(new to,p);let b=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,b=!0):(p.color.copy(Uc),b=!0);for(let m=0;m<6;m++){const P=m%3;P===0?(s.up.set(0,l[m],0),s.lookAt(u[m],0,0)):P===1?(s.up.set(0,0,l[m]),s.lookAt(0,u[m],0)):(s.up.set(0,l[m],0),s.lookAt(0,0,u[m]));const w=this._cubeSize;Lo(a,P*w,m>2?w:0,w,w),h.setRenderTarget(a),b&&h.render(_,s),h.render(e,s)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===sa||e.mapping===la;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());const o=a?this._cubemapMaterial:this._equirectMaterial,r=new sn(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Lo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Zr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=Nc[(a-o-1)%Nc.length];this._blur(e,o-1,o,r,s)}t.autoClear=i}_blur(e,t,i,a,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,a,"latitudinal",o),this._halfBlur(r,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,r,s){const l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new sn(this._lodPlanes[a],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*yi-1),b=o/_,g=isFinite(o)?1+Math.floor(h*b):yi;g>yi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);const m=[];let P=0;for(let D=0;D<yi;++D){const F=D/b,A=Math.exp(-F*F/2);m.push(A),D===0?P+=A:D<g&&(P+=2*A)}for(let D=0;D<m.length;D++)m[D]=m[D]/P;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=r==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-i;const S=this._sizeLods[a],O=3*S*(a>w-Ji?a-w+Ji:0),R=4*(this._cubeSize-S);Lo(t,O,R,3*S,2*S),l.setRenderTarget(t),l.render(d,Zr)}}function Zg(n){const e=[],t=[],i=[];let a=n;const o=n-Ji+1+Ic.length;for(let r=0;r<o;r++){const s=Math.pow(2,a);t.push(s);let l=1/s;r>n-Ji?l=Ic[r-n+Ji-1]:r===0&&(l=0),i.push(l);const u=1/(s-2),h=-u,d=1+u,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,b=3,g=2,m=1,P=new Float32Array(b*_*p),w=new Float32Array(g*_*p),S=new Float32Array(m*_*p);for(let R=0;R<p;R++){const D=R%3*2/3-1,F=R>2?0:-1,A=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];P.set(A,b*_*R),w.set(f,g*_*R);const M=[R,R,R,R,R,R];S.set(M,m*_*R)}const O=new Dn;O.setAttribute("position",new ln(P,b)),O.setAttribute("uv",new ln(w,g)),O.setAttribute("faceIndex",new ln(S,m)),e.push(O),a>Ji&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Oc(n,e,t){const i=new Ri(n,e,t);return i.texture.mapping=fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function Kg(n,e,t){const i=new Float32Array(yi),a=new K(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Bc(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function zc(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jg(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===Ps||l===Ls,h=l===sa||l===la;if(u||h){let d=e.get(s);const f=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==f)return t===null&&(t=new Fc(n)),d=u?t.fromEquirectangular(s,d):t.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),d.texture;if(d!==void 0)return d.texture;{const p=s.image;return u&&p&&p.height>0||h&&p&&a(p)?(t===null&&(t=new Fc(n)),d=u?t.fromEquirectangular(s):t.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),s.addEventListener("dispose",o),d.texture):null}}}return s}function a(s){let l=0;const u=6;for(let h=0;h<u;h++)s[h]!==void 0&&l++;return l===u}function o(s){const l=s.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Qg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Fa("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function ev(n,e,t,i){const a={},o=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const b=f.morphAttributes[_];for(let g=0,m=b.length;g<m;g++)e.remove(b[g])}f.removeEventListener("dispose",r),delete a[f.id];const p=o.get(f);p&&(e.remove(p),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const b=p[_];for(let g=0,m=b.length;g<m;g++)e.update(b[g],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let b=0;if(p!==null){const P=p.array;b=p.version;for(let w=0,S=P.length;w<S;w+=3){const O=P[w+0],R=P[w+1],D=P[w+2];f.push(O,R,R,D,D,O)}}else if(_!==void 0){const P=_.array;b=_.version;for(let w=0,S=P.length/3-1;w<S;w+=3){const O=w+0,R=w+1,D=w+2;f.push(O,R,R,D,D,O)}}else return;const g=new(nd(f)?cd:ld)(f,1);g.version=b;const m=o.get(d);m&&e.remove(m),o.set(d,g)}function h(d){const f=o.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:s,update:l,getWireframeAttribute:h}}function tv(n,e,t){let i;function a(f){i=f}let o,r;function s(f){o=f.type,r=f.bytesPerElement}function l(f,p){n.drawElements(i,p,o,f*r),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,o,f*r,_),t.update(p,i,_))}function h(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];t.update(g,i,1)}function d(f,p,_,b){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)u(f[m]/r,p[m],b[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,o,f,0,b,0,_);let m=0;for(let P=0;P<_;P++)m+=p[P]*b[P];t.update(m,i,1)}}this.setMode=a,this.setIndex=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function nv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,s){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function iv(n,e,t){const i=new WeakMap,a=new vt;function o(r,s,l){const u=r.morphTargetInfluences,h=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(s);if(f===void 0||f.count!==d){let A=function(){D.dispose(),i.delete(s),s.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const p=s.morphAttributes.position!==void 0,_=s.morphAttributes.normal!==void 0,b=s.morphAttributes.color!==void 0,g=s.morphAttributes.position||[],m=s.morphAttributes.normal||[],P=s.morphAttributes.color||[];let w=0;p===!0&&(w=1),_===!0&&(w=2),b===!0&&(w=3);let S=s.attributes.position.count*w,O=1;S>e.maxTextureSize&&(O=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const R=new Float32Array(S*O*4*d),D=new ad(R,S,O,d);D.type=Gn,D.needsUpdate=!0;const F=w*4;for(let M=0;M<d;M++){const I=g[M],ee=m[M],q=P[M],U=S*O*4*M;for(let Y=0;Y<I.count;Y++){const j=Y*F;p===!0&&(a.fromBufferAttribute(I,Y),R[U+j+0]=a.x,R[U+j+1]=a.y,R[U+j+2]=a.z,R[U+j+3]=0),_===!0&&(a.fromBufferAttribute(ee,Y),R[U+j+4]=a.x,R[U+j+5]=a.y,R[U+j+6]=a.z,R[U+j+7]=0),b===!0&&(a.fromBufferAttribute(q,Y),R[U+j+8]=a.x,R[U+j+9]=a.y,R[U+j+10]=a.z,R[U+j+11]=q.itemSize===4?a.w:1)}}f={count:d,texture:D,size:new Ge(S,O)},i.set(s,f),s.addEventListener("dispose",A)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let p=0;for(let b=0;b<u.length;b++)p+=u[b];const _=s.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:o}}function av(n,e,t,i){let a=new WeakMap;function o(l){const u=i.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return d}function r(){a=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:r}}class md extends $t{constructor(e,t,i,a,o,r,s,l,u,h=na){if(h!==na&&h!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===na&&(i=Ci),i===void 0&&h===ua&&(i=ca),super(null,a,o,r,s,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gd=new $t,$c=new md(1,1),vd=new ad,_d=new Gf,bd=new hd,Hc=[],kc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),jc=new Float32Array(4);function pa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let o=Hc[a];if(o===void 0&&(o=new Float32Array(a),Hc[a]=o),e!==0){i.toArray(o,0);for(let r=1,s=0;r!==e;++r)s+=t,n[r].toArray(o,s)}return o}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vr(n,e){let t=kc[e];t===void 0&&(t=new Int32Array(e),kc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ov(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function cv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;jc.set(i),n.uniformMatrix2fv(this.addr,!1,jc),yt(t,i)}}function uv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;Gc.set(i),n.uniformMatrix3fv(this.addr,!1,Gc),yt(t,i)}}function dv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(St(t,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),yt(t,i)}}function hv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function gv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function _v(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function xv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);let o;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=td,o=$c):o=gd,t.setTexture2D(e||o,a)}function Mv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||_d,a)}function Sv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||bd,a)}function yv(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||vd,a)}function Ev(n){switch(n){case 5126:return ov;case 35664:return rv;case 35665:return sv;case 35666:return lv;case 35674:return cv;case 35675:return uv;case 35676:return dv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return pv;case 35669:case 35673:return mv;case 5125:return gv;case 36294:return vv;case 36295:return _v;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return yv}}function Tv(n,e){n.uniform1fv(this.addr,e)}function Av(n,e){const t=pa(e,this.size,2);n.uniform2fv(this.addr,t)}function wv(n,e){const t=pa(e,this.size,3);n.uniform3fv(this.addr,t)}function Cv(n,e){const t=pa(e,this.size,4);n.uniform4fv(this.addr,t)}function Rv(n,e){const t=pa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Pv(n,e){const t=pa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Lv(n,e){const t=pa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dv(n,e){n.uniform1iv(this.addr,e)}function Iv(n,e){n.uniform2iv(this.addr,e)}function Uv(n,e){n.uniform3iv(this.addr,e)}function Nv(n,e){n.uniform4iv(this.addr,e)}function Fv(n,e){n.uniform1uiv(this.addr,e)}function Ov(n,e){n.uniform2uiv(this.addr,e)}function Bv(n,e){n.uniform3uiv(this.addr,e)}function zv(n,e){n.uniform4uiv(this.addr,e)}function $v(n,e,t){const i=this.cache,a=e.length,o=vr(t,a);St(i,o)||(n.uniform1iv(this.addr,o),yt(i,o));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||gd,o[r])}function Hv(n,e,t){const i=this.cache,a=e.length,o=vr(t,a);St(i,o)||(n.uniform1iv(this.addr,o),yt(i,o));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||_d,o[r])}function kv(n,e,t){const i=this.cache,a=e.length,o=vr(t,a);St(i,o)||(n.uniform1iv(this.addr,o),yt(i,o));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||bd,o[r])}function Vv(n,e,t){const i=this.cache,a=e.length,o=vr(t,a);St(i,o)||(n.uniform1iv(this.addr,o),yt(i,o));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||vd,o[r])}function Gv(n){switch(n){case 5126:return Tv;case 35664:return Av;case 35665:return wv;case 35666:return Cv;case 35674:return Rv;case 35675:return Pv;case 35676:return Lv;case 5124:case 35670:return Dv;case 35667:case 35671:return Iv;case 35668:case 35672:return Uv;case 35669:case 35673:return Nv;case 5125:return Fv;case 36294:return Ov;case 36295:return Bv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Vv}}class jv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ev(t.type)}}class Wv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}}class qv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,r=a.length;o!==r;++o){const s=a[o];s.setValue(e,t[s.id],i)}}}const ts=/(\w+)(\])?(\[|\.)?/g;function Wc(n,e){n.seq.push(e),n.map[e.id]=e}function Xv(n,e,t){const i=n.name,a=i.length;for(ts.lastIndex=0;;){const o=ts.exec(i),r=ts.lastIndex;let s=o[1];const l=o[2]==="]",u=o[3];if(l&&(s=s|0),u===void 0||u==="["&&r+2===a){Wc(t,u===void 0?new jv(s,n,e):new Wv(s,n,e));break}else{let d=t.map[s];d===void 0&&(d=new qv(s),Wc(t,d)),t=d}}}class Wo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),r=e.getUniformLocation(t,o.name);Xv(o,r,this)}}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,r=t.length;o!==r;++o){const s=t[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const r=e[a];r.id in t&&i.push(r)}return i}}function qc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Yv=37297;let Zv=0;function Kv(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=a;r<o;r++){const s=r+1;i.push(`${s===e?">":" "} ${s}: ${t[r]}`)}return i.join(`
`)}const Xc=new Ve;function Jv(n){tt._getMatrix(Xc,tt.workingColorSpace,n);const e=`mat3( ${Xc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case pr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Kv(n.getShaderSource(e),r)}else return a}function Qv(n,e){const t=Jv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e_(n,e){let t;switch(e){case gf:t="Linear";break;case vf:t="Reinhard";break;case _f:t="Cineon";break;case bf:t="ACESFilmic";break;case Mf:t="AgX";break;case Sf:t="Neutral";break;case xf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Do=new K;function t_(){tt.getLuminanceCoefficients(Do);const n=Do.x.toFixed(4),e=Do.y.toFixed(4),t=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function i_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=n.getActiveAttrib(e,a),r=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:s}}return t}function Oa(n){return n!==""}function Zc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(n){return n.replace(o_,s_)}const r_=new Map;function s_(n,e){let t=We[e];if(t===void 0){const i=r_.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sl(t)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(n){return n.replace(l_,c_)}function c_(n,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Qc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function d_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sa:case la:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case la:e="ENVMAP_MODE_REFRACTION";break}return e}function f_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yl:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function p_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function m_(n,e,t,i){const a=n.getContext(),o=t.defines;let r=t.vertexShader,s=t.fragmentShader;const l=u_(t),u=d_(t),h=h_(t),d=f_(t),f=p_(t),p=n_(t),_=i_(o),b=a.createProgram();let g,m,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oa).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Oa).join(`
`),m.length>0&&(m+=`
`)):(g=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),m=[Qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?We.tonemapping_pars_fragment:"",t.toneMapping!==ci?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),r=sl(r),r=Zc(r,t),r=Kc(r,t),s=sl(s),s=Zc(s,t),s=Kc(s,t),r=Jc(r),s=Jc(s),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=P+g+r,S=P+m+s,O=qc(a,a.VERTEX_SHADER,w),R=qc(a,a.FRAGMENT_SHADER,S);a.attachShader(b,O),a.attachShader(b,R),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function D(I){if(n.debug.checkShaderErrors){const ee=a.getProgramInfoLog(b).trim(),q=a.getShaderInfoLog(O).trim(),U=a.getShaderInfoLog(R).trim();let Y=!0,j=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,b,O,R);else{const J=Yc(a,O,"vertex"),Q=Yc(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ee+`
`+J+`
`+Q)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(q===""||U==="")&&(j=!1);j&&(I.diagnostics={runnable:Y,programLog:ee,vertexShader:{log:q,prefix:g},fragmentShader:{log:U,prefix:m}})}a.deleteShader(O),a.deleteShader(R),F=new Wo(a,b),A=a_(a,b)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let A;this.getAttributes=function(){return A===void 0&&D(this),A};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(b,Yv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=O,this.fragmentShader=R,this}let g_=0;class v_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new __(e),t.set(e,i)),i}}class __{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}}function b_(n,e,t,i,a,o,r){const s=new od,l=new v_,u=new Set,h=[],d=a.logarithmicDepthBuffer,f=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return u.add(A),A===0?"uv":`uv${A}`}function g(A,M,I,ee,q){const U=ee.fog,Y=q.geometry,j=A.isMeshStandardMaterial?ee.environment:null,J=(A.isMeshStandardMaterial?t:e).get(A.envMap||j),Q=J&&J.mapping===fr?J.image.height:null,_e=_[A.type];A.precision!==null&&(p=a.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Re=ye!==void 0?ye.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let qe,de,y,X;if(_e){const ot=Tn[_e];qe=ot.vertexShader,de=ot.fragmentShader}else qe=A.vertexShader,de=A.fragmentShader,l.update(A),y=l.getVertexShaderID(A),X=l.getFragmentShaderID(A);const Z=n.getRenderTarget(),B=n.state.buffers.depth.getReversed(),he=q.isInstancedMesh===!0,le=q.isBatchedMesh===!0,ue=!!A.map,xe=!!A.matcap,N=!!J,T=!!A.aoMap,ce=!!A.lightMap,te=!!A.bumpMap,re=!!A.normalMap,L=!!A.displacementMap,V=!!A.emissiveMap,ae=!!A.metalnessMap,x=!!A.roughnessMap,v=A.anisotropy>0,C=A.clearcoat>0,$=A.dispersion>0,W=A.iridescence>0,G=A.sheen>0,ge=A.transmission>0,fe=v&&!!A.anisotropyMap,me=C&&!!A.clearcoatMap,Ne=C&&!!A.clearcoatNormalMap,se=C&&!!A.clearcoatRoughnessMap,be=W&&!!A.iridescenceMap,Pe=W&&!!A.iridescenceThicknessMap,Be=G&&!!A.sheenColorMap,Ce=G&&!!A.sheenRoughnessMap,Xe=!!A.specularMap,je=!!A.specularColorMap,ut=!!A.specularIntensityMap,z=ge&&!!A.transmissionMap,Ee=ge&&!!A.thicknessMap,oe=!!A.gradientMap,pe=!!A.alphaMap,we=A.alphaTest>0,Te=!!A.alphaHash,He=!!A.extensions;let gt=ci;A.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(gt=n.toneMapping);const Pt={shaderID:_e,shaderType:A.type,shaderName:A.name,vertexShader:qe,fragmentShader:de,defines:A.defines,customVertexShaderID:y,customFragmentShaderID:X,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:le,batchingColor:le&&q._colorsTexture!==null,instancing:he,instancingColor:he&&q.instanceColor!==null,instancingMorph:he&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ha,alphaToCoverage:!!A.alphaToCoverage,map:ue,matcap:xe,envMap:N,envMapMode:N&&J.mapping,envMapCubeUVHeight:Q,aoMap:T,lightMap:ce,bumpMap:te,normalMap:re,displacementMap:f&&L,emissiveMap:V,normalMapObjectSpace:re&&A.normalMapType===Af,normalMapTangentSpace:re&&A.normalMapType===ed,metalnessMap:ae,roughnessMap:x,anisotropy:v,anisotropyMap:fe,clearcoat:C,clearcoatMap:me,clearcoatNormalMap:Ne,clearcoatRoughnessMap:se,dispersion:$,iridescence:W,iridescenceMap:be,iridescenceThicknessMap:Pe,sheen:G,sheenColorMap:Be,sheenRoughnessMap:Ce,specularMap:Xe,specularColorMap:je,specularIntensityMap:ut,transmission:ge,transmissionMap:z,thicknessMap:Ee,gradientMap:oe,opaque:A.transparent===!1&&A.blending===ta&&A.alphaToCoverage===!1,alphaMap:pe,alphaTest:we,alphaHash:Te,combine:A.combine,mapUv:ue&&b(A.map.channel),aoMapUv:T&&b(A.aoMap.channel),lightMapUv:ce&&b(A.lightMap.channel),bumpMapUv:te&&b(A.bumpMap.channel),normalMapUv:re&&b(A.normalMap.channel),displacementMapUv:L&&b(A.displacementMap.channel),emissiveMapUv:V&&b(A.emissiveMap.channel),metalnessMapUv:ae&&b(A.metalnessMap.channel),roughnessMapUv:x&&b(A.roughnessMap.channel),anisotropyMapUv:fe&&b(A.anisotropyMap.channel),clearcoatMapUv:me&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&b(A.sheenRoughnessMap.channel),specularMapUv:Xe&&b(A.specularMap.channel),specularColorMapUv:je&&b(A.specularColorMap.channel),specularIntensityMapUv:ut&&b(A.specularIntensityMap.channel),transmissionMapUv:z&&b(A.transmissionMap.channel),thicknessMapUv:Ee&&b(A.thicknessMap.channel),alphaMapUv:pe&&b(A.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(re||v),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(ue||pe),fog:!!U,useFog:A.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:B,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:ue&&A.map.isVideoTexture===!0&&tt.getTransfer(A.map.colorSpace)===st,decodeVideoTextureEmissive:V&&A.emissiveMap.isVideoTexture===!0&&tt.getTransfer(A.emissiveMap.colorSpace)===st,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Vn,flipSided:A.side===Bt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:He&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&A.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=u.has(1),Pt.vertexUv2s=u.has(2),Pt.vertexUv3s=u.has(3),u.clear(),Pt}function m(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)M.push(I),M.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(P(M,A),w(M,A),M.push(n.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function P(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function w(A,M){s.disableAll(),M.supportsVertexTextures&&s.enable(0),M.instancing&&s.enable(1),M.instancingColor&&s.enable(2),M.instancingMorph&&s.enable(3),M.matcap&&s.enable(4),M.envMap&&s.enable(5),M.normalMapObjectSpace&&s.enable(6),M.normalMapTangentSpace&&s.enable(7),M.clearcoat&&s.enable(8),M.iridescence&&s.enable(9),M.alphaTest&&s.enable(10),M.vertexColors&&s.enable(11),M.vertexAlphas&&s.enable(12),M.vertexUv1s&&s.enable(13),M.vertexUv2s&&s.enable(14),M.vertexUv3s&&s.enable(15),M.vertexTangents&&s.enable(16),M.anisotropy&&s.enable(17),M.alphaHash&&s.enable(18),M.batching&&s.enable(19),M.dispersion&&s.enable(20),M.batchingColor&&s.enable(21),A.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reverseDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),A.push(s.mask)}function S(A){const M=_[A.type];let I;if(M){const ee=Tn[M];I=np.clone(ee.uniforms)}else I=A.uniforms;return I}function O(A,M){let I;for(let ee=0,q=h.length;ee<q;ee++){const U=h[ee];if(U.cacheKey===M){I=U,++I.usedTimes;break}}return I===void 0&&(I=new m_(n,M,A,o),h.push(I)),I}function R(A){if(--A.usedTimes===0){const M=h.indexOf(A);h[M]=h[h.length-1],h.pop(),A.destroy()}}function D(A){l.remove(A)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:O,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:F}}function x_(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let s=n.get(r);return s===void 0&&(s={},n.set(r,s)),s}function i(r){n.delete(r)}function a(r,s,l){n.get(r)[s]=l}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function M_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function eu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tu(){const n=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function r(d,f,p,_,b,g){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:b,group:g},n[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=b,m.group=g),e++,m}function s(d,f,p,_,b,g){const m=r(d,f,p,_,b,g);p.transmission>0?i.push(m):p.transparent===!0?a.push(m):t.push(m)}function l(d,f,p,_,b,g){const m=r(d,f,p,_,b,g);p.transmission>0?i.unshift(m):p.transparent===!0?a.unshift(m):t.unshift(m)}function u(d,f){t.length>1&&t.sort(d||M_),i.length>1&&i.sort(f||eu),a.length>1&&a.sort(f||eu)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:s,unshift:l,finish:h,sort:u}}function S_(){let n=new WeakMap;function e(i,a){const o=n.get(i);let r;return o===void 0?(r=new tu,n.set(i,[r])):a>=o.length?(r=new tu,o.push(r)):r=o[a],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function y_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ke};break;case"SpotLight":t={position:new K,direction:new K,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function E_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let T_=0;function A_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function w_(n){const e=new y_,t=E_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const a=new K,o=new mt,r=new mt;function s(u){let h=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,b=0,g=0,m=0,P=0,w=0,S=0,O=0,R=0,D=0;u.sort(A_);for(let A=0,M=u.length;A<M;A++){const I=u[A],ee=I.color,q=I.intensity,U=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=ee.r*q,d+=ee.g*q,f+=ee.b*q;else if(I.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(I.sh.coefficients[j],q);D++}else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const J=I.shadow,Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=I.shadow.matrix,P++}i.directional[p]=j,p++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(ee).multiplyScalar(q),j.distance=U,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,i.spot[b]=j;const J=I.shadow;if(I.map&&(i.spotLightMap[O]=I.map,O++,J.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[b]=J.matrix,I.castShadow){const Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,i.spotShadow[b]=Q,i.spotShadowMap[b]=Y,S++}b++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(ee).multiplyScalar(q),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=j,g++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity),j.distance=I.distance,j.decay=I.decay,I.castShadow){const J=I.shadow,Q=t.get(I);Q.shadowIntensity=J.intensity,Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,i.pointShadow[_]=Q,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=I.shadow.matrix,w++}i.point[_]=j,_++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(q),j.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[m]=j,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==b||F.rectAreaLength!==g||F.hemiLength!==m||F.numDirectionalShadows!==P||F.numPointShadows!==w||F.numSpotShadows!==S||F.numSpotMaps!==O||F.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+O-R,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,F.directionalLength=p,F.pointLength=_,F.spotLength=b,F.rectAreaLength=g,F.hemiLength=m,F.numDirectionalShadows=P,F.numPointShadows=w,F.numSpotShadows=S,F.numSpotMaps=O,F.numLightProbes=D,i.version=T_++)}function l(u,h){let d=0,f=0,p=0,_=0,b=0;const g=h.matrixWorldInverse;for(let m=0,P=u.length;m<P;m++){const w=u[m];if(w.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),d++}else if(w.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),r.identity(),o.copy(w.matrixWorld),o.premultiply(g),r.extractRotation(o),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),_++}else if(w.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(g),f++}else if(w.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(g),b++}}}return{setup:s,setupView:l,state:i}}function nu(n){const e=new w_(n),t=[],i=[];function a(h){u.camera=h,t.length=0,i.length=0}function o(h){t.push(h)}function r(h){i.push(h)}function s(){e.setup(t)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:r}}function C_(n){let e=new WeakMap;function t(a,o=0){const r=e.get(a);let s;return r===void 0?(s=new nu(n),e.set(a,[s])):o>=r.length?(s=new nu(n),r.push(s)):s=r[o],s}function i(){e=new WeakMap}return{get:t,dispose:i}}class R_ extends fa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P_ extends fa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function I_(n,e,t){let i=new Ll;const a=new Ge,o=new Ge,r=new vt,s=new R_({depthPacking:Tf}),l=new P_,u={},h=t.maxTextureSize,d={[hi]:Bt,[Bt]:hi,[Vn]:Vn},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:L_,fragmentShader:D_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Dn;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new sn(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let m=this.type;this.render=function(R,D,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const A=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(li),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const q=m!==Hn&&this.type===Hn,U=m===Hn&&this.type!==Hn;for(let Y=0,j=R.length;Y<j;Y++){const J=R[Y],Q=J.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;a.copy(Q.mapSize);const _e=Q.getFrameExtents();if(a.multiply(_e),o.copy(Q.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(o.x=Math.floor(h/_e.x),a.x=o.x*_e.x,Q.mapSize.x=o.x),a.y>h&&(o.y=Math.floor(h/_e.y),a.y=o.y*_e.y,Q.mapSize.y=o.y)),Q.map===null||q===!0||U===!0){const Re=this.type!==Hn?{minFilter:zt,magFilter:zt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ri(a.x,a.y,Re),Q.map.texture.name=J.name+".shadowMap",Q.camera.updateProjectionMatrix()}n.setRenderTarget(Q.map),n.clear();const ye=Q.getViewportCount();for(let Re=0;Re<ye;Re++){const ze=Q.getViewport(Re);r.set(o.x*ze.x,o.y*ze.y,o.x*ze.z,o.y*ze.w),ee.viewport(r),Q.updateMatrices(J,Re),i=Q.getFrustum(),S(D,F,Q.camera,J,this.type)}Q.isPointLightShadow!==!0&&this.type===Hn&&P(Q,F),Q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(A,M,I)};function P(R,D){const F=e.update(b);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ri(a.x,a.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(D,null,F,f,b,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(D,null,F,p,b,null)}function w(R,D,F,A){let M=null;const I=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=F.isPointLight===!0?l:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const ee=M.uuid,q=D.uuid;let U=u[ee];U===void 0&&(U={},u[ee]=U);let Y=U[q];Y===void 0&&(Y=M.clone(),U[q]=Y,D.addEventListener("dispose",O)),M=Y}if(M.visible=D.visible,M.wireframe=D.wireframe,A===Hn?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:d[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ee=n.properties.get(M);ee.light=F}return M}function S(R,D,F,A,M){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Hn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const q=e.update(R),U=R.material;if(Array.isArray(U)){const Y=q.groups;for(let j=0,J=Y.length;j<J;j++){const Q=Y[j],_e=U[Q.materialIndex];if(_e&&_e.visible){const ye=w(R,_e,A,M);R.onBeforeShadow(n,R,D,F,q,ye,Q),n.renderBufferDirect(F,null,q,ye,R,Q),R.onAfterShadow(n,R,D,F,q,ye,Q)}}}else if(U.visible){const Y=w(R,U,A,M);R.onBeforeShadow(n,R,D,F,q,Y,null),n.renderBufferDirect(F,null,q,Y,R,null),R.onAfterShadow(n,R,D,F,q,Y,null)}}const ee=R.children;for(let q=0,U=ee.length;q<U;q++)S(ee[q],D,F,A,M)}function O(R){R.target.removeEventListener("dispose",O);for(const F in u){const A=u[F],M=R.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const U_={[ys]:Es,[Ts]:Cs,[As]:Rs,[ra]:ws,[Es]:ys,[Cs]:Ts,[Rs]:As,[ws]:ra};function N_(n,e){function t(){let z=!1;const Ee=new vt;let oe=null;const pe=new vt(0,0,0,0);return{setMask:function(we){oe!==we&&!z&&(n.colorMask(we,we,we,we),oe=we)},setLocked:function(we){z=we},setClear:function(we,Te,He,gt,Pt){Pt===!0&&(we*=gt,Te*=gt,He*=gt),Ee.set(we,Te,He,gt),pe.equals(Ee)===!1&&(n.clearColor(we,Te,He,gt),pe.copy(Ee))},reset:function(){z=!1,oe=null,pe.set(-1,0,0,0)}}}function i(){let z=!1,Ee=!1,oe=null,pe=null,we=null;return{setReversed:function(Te){if(Ee!==Te){const He=e.get("EXT_clip_control");Ee?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const gt=we;we=null,this.setClear(gt)}Ee=Te},getReversed:function(){return Ee},setTest:function(Te){Te?Z(n.DEPTH_TEST):B(n.DEPTH_TEST)},setMask:function(Te){oe!==Te&&!z&&(n.depthMask(Te),oe=Te)},setFunc:function(Te){if(Ee&&(Te=U_[Te]),pe!==Te){switch(Te){case ys:n.depthFunc(n.NEVER);break;case Es:n.depthFunc(n.ALWAYS);break;case Ts:n.depthFunc(n.LESS);break;case ra:n.depthFunc(n.LEQUAL);break;case As:n.depthFunc(n.EQUAL);break;case ws:n.depthFunc(n.GEQUAL);break;case Cs:n.depthFunc(n.GREATER);break;case Rs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=Te}},setLocked:function(Te){z=Te},setClear:function(Te){we!==Te&&(Ee&&(Te=1-Te),n.clearDepth(Te),we=Te)},reset:function(){z=!1,oe=null,pe=null,we=null,Ee=!1}}}function a(){let z=!1,Ee=null,oe=null,pe=null,we=null,Te=null,He=null,gt=null,Pt=null;return{setTest:function(ot){z||(ot?Z(n.STENCIL_TEST):B(n.STENCIL_TEST))},setMask:function(ot){Ee!==ot&&!z&&(n.stencilMask(ot),Ee=ot)},setFunc:function(ot,cn,In){(oe!==ot||pe!==cn||we!==In)&&(n.stencilFunc(ot,cn,In),oe=ot,pe=cn,we=In)},setOp:function(ot,cn,In){(Te!==ot||He!==cn||gt!==In)&&(n.stencilOp(ot,cn,In),Te=ot,He=cn,gt=In)},setLocked:function(ot){z=ot},setClear:function(ot){Pt!==ot&&(n.clearStencil(ot),Pt=ot)},reset:function(){z=!1,Ee=null,oe=null,pe=null,we=null,Te=null,He=null,gt=null,Pt=null}}}const o=new t,r=new i,s=new a,l=new WeakMap,u=new WeakMap;let h={},d={},f=new WeakMap,p=[],_=null,b=!1,g=null,m=null,P=null,w=null,S=null,O=null,R=null,D=new Ke(0,0,0),F=0,A=!1,M=null,I=null,ee=null,q=null,U=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,J=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=J>=2);let _e=null,ye={};const Re=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),qe=new vt().fromArray(Re),de=new vt().fromArray(ze);function y(z,Ee,oe,pe){const we=new Uint8Array(4),Te=n.createTexture();n.bindTexture(z,Te),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<oe;He++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Ee+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Te}const X={};X[n.TEXTURE_2D]=y(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=y(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=y(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=y(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),s.setClear(0),Z(n.DEPTH_TEST),r.setFunc(ra),te(!1),re(sc),Z(n.CULL_FACE),T(li);function Z(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function B(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function he(z,Ee){return d[z]!==Ee?(n.bindFramebuffer(z,Ee),d[z]=Ee,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ee),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function le(z,Ee){let oe=p,pe=!1;if(z){oe=f.get(Ee),oe===void 0&&(oe=[],f.set(Ee,oe));const we=z.textures;if(oe.length!==we.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,He=we.length;Te<He;Te++)oe[Te]=n.COLOR_ATTACHMENT0+Te;oe.length=we.length,pe=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,pe=!0);pe&&n.drawBuffers(oe)}function ue(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const xe={[Si]:n.FUNC_ADD,[Zh]:n.FUNC_SUBTRACT,[Kh]:n.FUNC_REVERSE_SUBTRACT};xe[Jh]=n.MIN,xe[Qh]=n.MAX;const N={[ef]:n.ZERO,[tf]:n.ONE,[nf]:n.SRC_COLOR,[Ms]:n.SRC_ALPHA,[cf]:n.SRC_ALPHA_SATURATE,[sf]:n.DST_COLOR,[of]:n.DST_ALPHA,[af]:n.ONE_MINUS_SRC_COLOR,[Ss]:n.ONE_MINUS_SRC_ALPHA,[lf]:n.ONE_MINUS_DST_COLOR,[rf]:n.ONE_MINUS_DST_ALPHA,[uf]:n.CONSTANT_COLOR,[df]:n.ONE_MINUS_CONSTANT_COLOR,[hf]:n.CONSTANT_ALPHA,[ff]:n.ONE_MINUS_CONSTANT_ALPHA};function T(z,Ee,oe,pe,we,Te,He,gt,Pt,ot){if(z===li){b===!0&&(B(n.BLEND),b=!1);return}if(b===!1&&(Z(n.BLEND),b=!0),z!==Yh){if(z!==g||ot!==A){if((m!==Si||S!==Si)&&(n.blendEquation(n.FUNC_ADD),m=Si,S=Si),ot)switch(z){case ta:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFunc(n.ONE,n.ONE);break;case lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ta:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case xs:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}P=null,w=null,O=null,R=null,D.set(0,0,0),F=0,g=z,A=ot}return}we=we||Ee,Te=Te||oe,He=He||pe,(Ee!==m||we!==S)&&(n.blendEquationSeparate(xe[Ee],xe[we]),m=Ee,S=we),(oe!==P||pe!==w||Te!==O||He!==R)&&(n.blendFuncSeparate(N[oe],N[pe],N[Te],N[He]),P=oe,w=pe,O=Te,R=He),(gt.equals(D)===!1||Pt!==F)&&(n.blendColor(gt.r,gt.g,gt.b,Pt),D.copy(gt),F=Pt),g=z,A=!1}function ce(z,Ee){z.side===Vn?B(n.CULL_FACE):Z(n.CULL_FACE);let oe=z.side===Bt;Ee&&(oe=!oe),te(oe),z.blending===ta&&z.transparent===!1?T(li):T(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const pe=z.stencilWrite;s.setTest(pe),pe&&(s.setMask(z.stencilWriteMask),s.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),s.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),V(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):B(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function re(z){z!==Wh?(Z(n.CULL_FACE),z!==I&&(z===sc?n.cullFace(n.BACK):z===qh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):B(n.CULL_FACE),I=z}function L(z){z!==ee&&(j&&n.lineWidth(z),ee=z)}function V(z,Ee,oe){z?(Z(n.POLYGON_OFFSET_FILL),(q!==Ee||U!==oe)&&(n.polygonOffset(Ee,oe),q=Ee,U=oe)):B(n.POLYGON_OFFSET_FILL)}function ae(z){z?Z(n.SCISSOR_TEST):B(n.SCISSOR_TEST)}function x(z){z===void 0&&(z=n.TEXTURE0+Y-1),_e!==z&&(n.activeTexture(z),_e=z)}function v(z,Ee,oe){oe===void 0&&(_e===null?oe=n.TEXTURE0+Y-1:oe=_e);let pe=ye[oe];pe===void 0&&(pe={type:void 0,texture:void 0},ye[oe]=pe),(pe.type!==z||pe.texture!==Ee)&&(_e!==oe&&(n.activeTexture(oe),_e=oe),n.bindTexture(z,Ee||X[z]),pe.type=z,pe.texture=Ee)}function C(){const z=ye[_e];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(z){qe.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),qe.copy(z))}function Ce(z){de.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),de.copy(z))}function Xe(z,Ee){let oe=u.get(Ee);oe===void 0&&(oe=new WeakMap,u.set(Ee,oe));let pe=oe.get(z);pe===void 0&&(pe=n.getUniformBlockIndex(Ee,z.name),oe.set(z,pe))}function je(z,Ee){const pe=u.get(Ee).get(z);l.get(Ee)!==pe&&(n.uniformBlockBinding(Ee,pe,z.__bindingPointIndex),l.set(Ee,pe))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},_e=null,ye={},d={},f=new WeakMap,p=[],_=null,b=!1,g=null,m=null,P=null,w=null,S=null,O=null,R=null,D=new Ke(0,0,0),F=0,A=!1,M=null,I=null,ee=null,q=null,U=null,qe.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),s.reset()}return{buffers:{color:o,depth:r,stencil:s},enable:Z,disable:B,bindFramebuffer:he,drawBuffers:le,useProgram:ue,setBlending:T,setMaterial:ce,setFlipSided:te,setCullFace:re,setLineWidth:L,setPolygonOffset:V,setScissorTest:ae,activeTexture:x,bindTexture:v,unbindTexture:C,compressedTexImage2D:$,compressedTexImage3D:W,texImage2D:be,texImage3D:Pe,updateUBOMapping:Xe,uniformBlockBinding:je,texStorage2D:Ne,texStorage3D:se,texSubImage2D:G,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:me,scissor:Be,viewport:Ce,reset:ut}}function iu(n,e,t,i){const a=F_(i);switch(t){case qu:return n*e;case Yu:return n*e;case Zu:return n*e*2;case Ku:return n*e/a.components*a.byteLength;case wl:return n*e/a.components*a.byteLength;case Ju:return n*e*2/a.components*a.byteLength;case Cl:return n*e*2/a.components*a.byteLength;case Xu:return n*e*3/a.components*a.byteLength;case rn:return n*e*4/a.components*a.byteLength;case Rl:return n*e*4/a.components*a.byteLength;case $o:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ko:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ns:case Os:return Math.max(n,16)*Math.max(e,8)/4;case Us:case Fs:return Math.max(n,8)*Math.max(e,8)/2;case Bs:case zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ks:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Vs:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case js:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ws:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xs:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ys:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ks:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Js:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qs:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Go:case tl:case nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qu:case il:return Math.ceil(n/4)*Math.ceil(e/4)*8;case al:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function F_(n){switch(n){case qn:case Gu:return{byteLength:1,components:1};case Ya:case ju:case Ja:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case Ci:case El:case Gn:return{byteLength:4,components:1};case Wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function O_(n,e,t,i,a,o,r){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ge,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,v){return p?new OffscreenCanvas(x,v):nr("canvas")}function b(x,v,C){let $=1;const W=ae(x);if((W.width>C||W.height>C)&&($=C/Math.max(W.width,W.height)),$<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const G=Math.floor($*W.width),ge=Math.floor($*W.height);d===void 0&&(d=_(G,ge));const fe=v?_(G,ge):d;return fe.width=G,fe.height=ge,fe.getContext("2d").drawImage(x,0,0,G,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+G+"x"+ge+")."),fe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),x;return x}function g(x){return x.generateMipmaps}function m(x){n.generateMipmap(x)}function P(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(x,v,C,$,W=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=v;if(v===n.RED&&(C===n.FLOAT&&(G=n.R32F),C===n.HALF_FLOAT&&(G=n.R16F),C===n.UNSIGNED_BYTE&&(G=n.R8)),v===n.RED_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.R8UI),C===n.UNSIGNED_SHORT&&(G=n.R16UI),C===n.UNSIGNED_INT&&(G=n.R32UI),C===n.BYTE&&(G=n.R8I),C===n.SHORT&&(G=n.R16I),C===n.INT&&(G=n.R32I)),v===n.RG&&(C===n.FLOAT&&(G=n.RG32F),C===n.HALF_FLOAT&&(G=n.RG16F),C===n.UNSIGNED_BYTE&&(G=n.RG8)),v===n.RG_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RG8UI),C===n.UNSIGNED_SHORT&&(G=n.RG16UI),C===n.UNSIGNED_INT&&(G=n.RG32UI),C===n.BYTE&&(G=n.RG8I),C===n.SHORT&&(G=n.RG16I),C===n.INT&&(G=n.RG32I)),v===n.RGB_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGB8UI),C===n.UNSIGNED_SHORT&&(G=n.RGB16UI),C===n.UNSIGNED_INT&&(G=n.RGB32UI),C===n.BYTE&&(G=n.RGB8I),C===n.SHORT&&(G=n.RGB16I),C===n.INT&&(G=n.RGB32I)),v===n.RGBA_INTEGER&&(C===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),C===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),C===n.UNSIGNED_INT&&(G=n.RGBA32UI),C===n.BYTE&&(G=n.RGBA8I),C===n.SHORT&&(G=n.RGBA16I),C===n.INT&&(G=n.RGBA32I)),v===n.RGB&&C===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),v===n.RGBA){const ge=W?pr:tt.getTransfer($);C===n.FLOAT&&(G=n.RGBA32F),C===n.HALF_FLOAT&&(G=n.RGBA16F),C===n.UNSIGNED_BYTE&&(G=ge===st?n.SRGB8_ALPHA8:n.RGBA8),C===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),C===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function S(x,v){let C;return x?v===null||v===Ci||v===ca?C=n.DEPTH24_STENCIL8:v===Gn?C=n.DEPTH32F_STENCIL8:v===Ya&&(C=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===ca?C=n.DEPTH_COMPONENT24:v===Gn?C=n.DEPTH_COMPONENT32F:v===Ya&&(C=n.DEPTH_COMPONENT16),C}function O(x,v){return g(x)===!0||x.isFramebufferTexture&&x.minFilter!==zt&&x.minFilter!==wn?Math.log2(Math.max(v.width,v.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?v.mipmaps.length:1}function R(x){const v=x.target;v.removeEventListener("dispose",R),F(v),v.isVideoTexture&&h.delete(v)}function D(x){const v=x.target;v.removeEventListener("dispose",D),M(v)}function F(x){const v=i.get(x);if(v.__webglInit===void 0)return;const C=x.source,$=f.get(C);if($){const W=$[v.__cacheKey];W.usedTimes--,W.usedTimes===0&&A(x),Object.keys($).length===0&&f.delete(C)}i.remove(x)}function A(x){const v=i.get(x);n.deleteTexture(v.__webglTexture);const C=x.source,$=f.get(C);delete $[v.__cacheKey],r.memory.textures--}function M(x){const v=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let W=0;W<v.__webglFramebuffer[$].length;W++)n.deleteFramebuffer(v.__webglFramebuffer[$][W]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const C=x.textures;for(let $=0,W=C.length;$<W;$++){const G=i.get(C[$]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),r.memory.textures--),i.remove(C[$])}i.remove(x)}let I=0;function ee(){I=0}function q(){const x=I;return x>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+a.maxTextures),I+=1,x}function U(x){const v=[];return v.push(x.wrapS),v.push(x.wrapT),v.push(x.wrapR||0),v.push(x.magFilter),v.push(x.minFilter),v.push(x.anisotropy),v.push(x.internalFormat),v.push(x.format),v.push(x.type),v.push(x.generateMipmaps),v.push(x.premultiplyAlpha),v.push(x.flipY),v.push(x.unpackAlignment),v.push(x.colorSpace),v.join()}function Y(x,v){const C=i.get(x);if(x.isVideoTexture&&L(x),x.isRenderTargetTexture===!1&&x.version>0&&C.__version!==x.version){const $=x.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(C,x,v);return}}t.bindTexture(n.TEXTURE_2D,C.__webglTexture,n.TEXTURE0+v)}function j(x,v){const C=i.get(x);if(x.version>0&&C.__version!==x.version){de(C,x,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,C.__webglTexture,n.TEXTURE0+v)}function J(x,v){const C=i.get(x);if(x.version>0&&C.__version!==x.version){de(C,x,v);return}t.bindTexture(n.TEXTURE_3D,C.__webglTexture,n.TEXTURE0+v)}function Q(x,v){const C=i.get(x);if(x.version>0&&C.__version!==x.version){y(C,x,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+v)}const _e={[Ds]:n.REPEAT,[Ei]:n.CLAMP_TO_EDGE,[Is]:n.MIRRORED_REPEAT},ye={[zt]:n.NEAREST,[yf]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Cr]:n.LINEAR_MIPMAP_NEAREST,[Ti]:n.LINEAR_MIPMAP_LINEAR},Re={[wf]:n.NEVER,[If]:n.ALWAYS,[Cf]:n.LESS,[td]:n.LEQUAL,[Rf]:n.EQUAL,[Df]:n.GEQUAL,[Pf]:n.GREATER,[Lf]:n.NOTEQUAL};function ze(x,v){if(v.type===Gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===wn||v.magFilter===Cr||v.magFilter===ho||v.magFilter===Ti||v.minFilter===wn||v.minFilter===Cr||v.minFilter===ho||v.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,_e[v.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,_e[v.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,_e[v.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ye[v.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ye[v.minFilter]),v.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===zt||v.minFilter!==ho&&v.minFilter!==Ti||v.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");n.texParameterf(x,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function qe(x,v){let C=!1;x.__webglInit===void 0&&(x.__webglInit=!0,v.addEventListener("dispose",R));const $=v.source;let W=f.get($);W===void 0&&(W={},f.set($,W));const G=U(v);if(G!==x.__cacheKey){W[G]===void 0&&(W[G]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,C=!0),W[G].usedTimes++;const ge=W[x.__cacheKey];ge!==void 0&&(W[x.__cacheKey].usedTimes--,ge.usedTimes===0&&A(v)),x.__cacheKey=G,x.__webglTexture=W[G].texture}return C}function de(x,v,C){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const W=qe(x,v),G=v.source;t.bindTexture($,x.__webglTexture,n.TEXTURE0+C);const ge=i.get(G);if(G.version!==ge.__version||W===!0){t.activeTexture(n.TEXTURE0+C);const fe=tt.getPrimaries(tt.workingColorSpace),me=v.colorSpace===si?null:tt.getPrimaries(v.colorSpace),Ne=v.colorSpace===si||fe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let se=b(v.image,!1,a.maxTextureSize);se=V(v,se);const be=o.convert(v.format,v.colorSpace),Pe=o.convert(v.type);let Be=w(v.internalFormat,be,Pe,v.colorSpace,v.isVideoTexture);ze($,v);let Ce;const Xe=v.mipmaps,je=v.isVideoTexture!==!0,ut=ge.__version===void 0||W===!0,z=G.dataReady,Ee=O(v,se);if(v.isDepthTexture)Be=S(v.format===ua,v.type),ut&&(je?t.texStorage2D(n.TEXTURE_2D,1,Be,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Be,se.width,se.height,0,be,Pe,null));else if(v.isDataTexture)if(Xe.length>0){je&&ut&&t.texStorage2D(n.TEXTURE_2D,Ee,Be,Xe[0].width,Xe[0].height);for(let oe=0,pe=Xe.length;oe<pe;oe++)Ce=Xe[oe],je?z&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,be,Pe,Ce.data):t.texImage2D(n.TEXTURE_2D,oe,Be,Ce.width,Ce.height,0,be,Pe,Ce.data);v.generateMipmaps=!1}else je?(ut&&t.texStorage2D(n.TEXTURE_2D,Ee,Be,se.width,se.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,be,Pe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Be,se.width,se.height,0,be,Pe,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){je&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Be,Xe[0].width,Xe[0].height,se.depth);for(let oe=0,pe=Xe.length;oe<pe;oe++)if(Ce=Xe[oe],v.format!==rn)if(be!==null)if(je){if(z)if(v.layerUpdates.size>0){const we=iu(Ce.width,Ce.height,v.format,v.type);for(const Te of v.layerUpdates){const He=Ce.data.subarray(Te*we/Ce.data.BYTES_PER_ELEMENT,(Te+1)*we/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Te,Ce.width,Ce.height,1,be,He)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Ce.width,Ce.height,se.depth,be,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Be,Ce.width,Ce.height,se.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Ce.width,Ce.height,se.depth,be,Pe,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Be,Ce.width,Ce.height,se.depth,0,be,Pe,Ce.data)}else{je&&ut&&t.texStorage2D(n.TEXTURE_2D,Ee,Be,Xe[0].width,Xe[0].height);for(let oe=0,pe=Xe.length;oe<pe;oe++)Ce=Xe[oe],v.format!==rn?be!==null?je?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,be,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?z&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,be,Pe,Ce.data):t.texImage2D(n.TEXTURE_2D,oe,Be,Ce.width,Ce.height,0,be,Pe,Ce.data)}else if(v.isDataArrayTexture)if(je){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Be,se.width,se.height,se.depth),z)if(v.layerUpdates.size>0){const oe=iu(se.width,se.height,v.format,v.type);for(const pe of v.layerUpdates){const we=se.data.subarray(pe*oe/se.data.BYTES_PER_ELEMENT,(pe+1)*oe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,se.width,se.height,1,be,Pe,we)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Pe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,se.width,se.height,se.depth,0,be,Pe,se.data);else if(v.isData3DTexture)je?(ut&&t.texStorage3D(n.TEXTURE_3D,Ee,Be,se.width,se.height,se.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Pe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Be,se.width,se.height,se.depth,0,be,Pe,se.data);else if(v.isFramebufferTexture){if(ut)if(je)t.texStorage2D(n.TEXTURE_2D,Ee,Be,se.width,se.height);else{let oe=se.width,pe=se.height;for(let we=0;we<Ee;we++)t.texImage2D(n.TEXTURE_2D,we,Be,oe,pe,0,be,Pe,null),oe>>=1,pe>>=1}}else if(Xe.length>0){if(je&&ut){const oe=ae(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Be,oe.width,oe.height)}for(let oe=0,pe=Xe.length;oe<pe;oe++)Ce=Xe[oe],je?z&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,be,Pe,Ce):t.texImage2D(n.TEXTURE_2D,oe,Be,be,Pe,Ce);v.generateMipmaps=!1}else if(je){if(ut){const oe=ae(se);t.texStorage2D(n.TEXTURE_2D,Ee,Be,oe.width,oe.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Pe,se)}else t.texImage2D(n.TEXTURE_2D,0,Be,be,Pe,se);g(v)&&m($),ge.__version=G.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function y(x,v,C){if(v.image.length!==6)return;const $=qe(x,v),W=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+C);const G=i.get(W);if(W.version!==G.__version||$===!0){t.activeTexture(n.TEXTURE0+C);const ge=tt.getPrimaries(tt.workingColorSpace),fe=v.colorSpace===si?null:tt.getPrimaries(v.colorSpace),me=v.colorSpace===si||ge===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,be=[];for(let pe=0;pe<6;pe++)!Ne&&!se?be[pe]=b(v.image[pe],!0,a.maxCubemapSize):be[pe]=se?v.image[pe].image:v.image[pe],be[pe]=V(v,be[pe]);const Pe=be[0],Be=o.convert(v.format,v.colorSpace),Ce=o.convert(v.type),Xe=w(v.internalFormat,Be,Ce,v.colorSpace),je=v.isVideoTexture!==!0,ut=G.__version===void 0||$===!0,z=W.dataReady;let Ee=O(v,Pe);ze(n.TEXTURE_CUBE_MAP,v);let oe;if(Ne){je&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Xe,Pe.width,Pe.height);for(let pe=0;pe<6;pe++){oe=be[pe].mipmaps;for(let we=0;we<oe.length;we++){const Te=oe[we];v.format!==rn?Be!==null?je?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we,0,0,Te.width,Te.height,Be,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we,Xe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we,0,0,Te.width,Te.height,Be,Ce,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we,Xe,Te.width,Te.height,0,Be,Ce,Te.data)}}}else{if(oe=v.mipmaps,je&&ut){oe.length>0&&Ee++;const pe=ae(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Xe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(se){je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,be[pe].width,be[pe].height,Be,Ce,be[pe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Xe,be[pe].width,be[pe].height,0,Be,Ce,be[pe].data);for(let we=0;we<oe.length;we++){const He=oe[we].image[pe].image;je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we+1,0,0,He.width,He.height,Be,Ce,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we+1,Xe,He.width,He.height,0,Be,Ce,He.data)}}else{je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Be,Ce,be[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Xe,Be,Ce,be[pe]);for(let we=0;we<oe.length;we++){const Te=oe[we];je?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we+1,0,0,Be,Ce,Te.image[pe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we+1,Xe,Be,Ce,Te.image[pe])}}}g(v)&&m(n.TEXTURE_CUBE_MAP),G.__version=W.version,v.onUpdate&&v.onUpdate(v)}x.__version=v.version}function X(x,v,C,$,W,G){const ge=o.convert(C.format,C.colorSpace),fe=o.convert(C.type),me=w(C.internalFormat,ge,fe,C.colorSpace),Ne=i.get(v),se=i.get(C);if(se.__renderTarget=v,!Ne.__hasExternalTextures){const be=Math.max(1,v.width>>G),Pe=Math.max(1,v.height>>G);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?t.texImage3D(W,G,me,be,Pe,v.depth,0,ge,fe,null):t.texImage2D(W,G,me,be,Pe,0,ge,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),re(v)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,W,se.__webglTexture,0,te(v)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,W,se.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(x,v,C){if(n.bindRenderbuffer(n.RENDERBUFFER,x),v.depthBuffer){const $=v.depthTexture,W=$&&$.isDepthTexture?$.type:null,G=S(v.stencilBuffer,W),ge=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=te(v);re(v)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,fe,G,v.width,v.height):C?n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,G,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,G,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,x)}else{const $=v.textures;for(let W=0;W<$.length;W++){const G=$[W],ge=o.convert(G.format,G.colorSpace),fe=o.convert(G.type),me=w(G.internalFormat,ge,fe,G.colorSpace),Ne=te(v);C&&re(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,me,v.width,v.height):re(v)?s.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function B(x,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const W=$.__webglTexture,G=te(v);if(v.depthTexture.format===na)re(v)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===ua)re(v)?s.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function he(x){const v=i.get(x),C=x.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==x.depthTexture){const $=x.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const W=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",W)};$.addEventListener("dispose",W),v.__depthDisposeCallback=W}v.__boundDepthTexture=$}if(x.depthTexture&&!v.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");B(v.__webglFramebuffer,x)}else if(C){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),Z(v.__webglDepthbuffer[$],x,!1);else{const W=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,G)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Z(v.__webglDepthbuffer,x,!1);else{const $=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,W)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(x,v,C){const $=i.get(x);v!==void 0&&X($.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),C!==void 0&&he(x)}function ue(x){const v=x.texture,C=i.get(x),$=i.get(v);x.addEventListener("dispose",D);const W=x.textures,G=x.isWebGLCubeRenderTarget===!0,ge=W.length>1;if(ge||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,r.memory.textures++),G){C.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer[fe]=[];for(let me=0;me<v.mipmaps.length;me++)C.__webglFramebuffer[fe][me]=n.createFramebuffer()}else C.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){C.__webglFramebuffer=[];for(let fe=0;fe<v.mipmaps.length;fe++)C.__webglFramebuffer[fe]=n.createFramebuffer()}else C.__webglFramebuffer=n.createFramebuffer();if(ge)for(let fe=0,me=W.length;fe<me;fe++){const Ne=i.get(W[fe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),r.memory.textures++)}if(x.samples>0&&re(x)===!1){C.__webglMultisampledFramebuffer=n.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let fe=0;fe<W.length;fe++){const me=W[fe];C.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,C.__webglColorRenderbuffer[fe]);const Ne=o.convert(me.format,me.colorSpace),se=o.convert(me.type),be=w(me.internalFormat,Ne,se,me.colorSpace,x.isXRRenderTarget===!0),Pe=te(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,be,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,C.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(C.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(C.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ze(n.TEXTURE_CUBE_MAP,v);for(let fe=0;fe<6;fe++)if(v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)X(C.__webglFramebuffer[fe][me],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else X(C.__webglFramebuffer[fe],x,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let fe=0,me=W.length;fe<me;fe++){const Ne=W[fe],se=i.get(Ne);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ze(n.TEXTURE_2D,Ne),X(C.__webglFramebuffer,x,Ne,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),g(Ne)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(fe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),ze(fe,v),v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)X(C.__webglFramebuffer[me],x,v,n.COLOR_ATTACHMENT0,fe,me);else X(C.__webglFramebuffer,x,v,n.COLOR_ATTACHMENT0,fe,0);g(v)&&m(fe),t.unbindTexture()}x.depthBuffer&&he(x)}function xe(x){const v=x.textures;for(let C=0,$=v.length;C<$;C++){const W=v[C];if(g(W)){const G=P(x),ge=i.get(W).__webglTexture;t.bindTexture(G,ge),m(G),t.unbindTexture()}}}const N=[],T=[];function ce(x){if(x.samples>0){if(re(x)===!1){const v=x.textures,C=x.width,$=x.height;let W=n.COLOR_BUFFER_BIT;const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(x),fe=v.length>1;if(fe)for(let me=0;me<v.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let me=0;me<v.length;me++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const Ne=i.get(v[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,C,$,0,0,C,$,W,n.NEAREST),l===!0&&(N.length=0,T.length=0,N.push(n.COLOR_ATTACHMENT0+me),x.depthBuffer&&x.resolveDepthBuffer===!1&&(N.push(G),T.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,T)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let me=0;me<v.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const Ne=i.get(v[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const v=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function te(x){return Math.min(a.maxSamples,x.samples)}function re(x){const v=i.get(x);return x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(x){const v=r.render.frame;h.get(x)!==v&&(h.set(x,v),x.update())}function V(x,v){const C=x.colorSpace,$=x.format,W=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||C!==ha&&C!==si&&(tt.getTransfer(C)===st?($!==rn||W!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),v}function ae(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(u.width=x.naturalWidth||x.width,u.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(u.width=x.displayWidth,u.height=x.displayHeight):(u.width=x.width,u.height=x.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=ee,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=le,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=X,this.useMultisampledRTT=re}function B_(n,e){function t(i,a=si){let o;const r=tt.getTransfer(a);if(i===qn)return n.UNSIGNED_BYTE;if(i===Tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Al)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Gu)return n.BYTE;if(i===ju)return n.SHORT;if(i===Ya)return n.UNSIGNED_SHORT;if(i===El)return n.INT;if(i===Ci)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===Ja)return n.HALF_FLOAT;if(i===qu)return n.ALPHA;if(i===Xu)return n.RGB;if(i===rn)return n.RGBA;if(i===Yu)return n.LUMINANCE;if(i===Zu)return n.LUMINANCE_ALPHA;if(i===na)return n.DEPTH_COMPONENT;if(i===ua)return n.DEPTH_STENCIL;if(i===Ku)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===Ju)return n.RG;if(i===Cl)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===$o||i===Ho||i===ko||i===Vo)if(r===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===$o)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===$o)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Us||i===Ns||i===Fs||i===Os)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Us)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ns)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Os)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bs||i===zs||i===$s)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Bs||i===zs)return r===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===$s)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hs||i===ks||i===Vs||i===Gs||i===js||i===Ws||i===qs||i===Xs||i===Ys||i===Zs||i===Ks||i===Js||i===Qs||i===el)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Hs)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ks)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vs)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gs)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===js)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ws)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qs)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xs)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ys)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zs)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ks)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Js)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qs)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===el)return r===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===tl||i===nl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Go)return r===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qu||i===il||i===al||i===ol)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Go)return o.COMPRESSED_RED_RGTC1_EXT;if(i===il)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===al)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ol)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class z_ extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Io extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $_={type:"move"};class ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,r=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),m=this._getHandJoint(u,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent($_)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Io;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const a=new $t,o=e.properties.get(a);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xn({vertexShader:H_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new sn(new gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G_ extends Di{constructor(e,t){super();const i=this;let a=null,o=1,r=null,s="local-floor",l=1,u=null,h=null,d=null,f=null,p=null,_=null;const b=new V_,g=t.getContextAttributes();let m=null,P=null;const w=[],S=[],O=new Ge;let R=null;const D=new an;D.viewport=new vt;const F=new an;F.viewport=new vt;const A=[D,F],M=new z_;let I=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(de){let y=w[de];return y===void 0&&(y=new ns,w[de]=y),y.getTargetRaySpace()},this.getControllerGrip=function(de){let y=w[de];return y===void 0&&(y=new ns,w[de]=y),y.getGripSpace()},this.getHand=function(de){let y=w[de];return y===void 0&&(y=new ns,w[de]=y),y.getHandSpace()};function q(de){const y=S.indexOf(de.inputSource);if(y===-1)return;const X=w[y];X!==void 0&&(X.update(de.inputSource,de.frame,u||r),X.dispatchEvent({type:de.type,data:de.inputSource}))}function U(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",U),a.removeEventListener("inputsourceschange",Y);for(let de=0;de<w.length;de++){const y=S[de];y!==null&&(S[de]=null,w[de].disconnect(y))}I=null,ee=null,b.reset(),e.setRenderTarget(m),p=null,f=null,d=null,a=null,P=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(de){o=de,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(de){s=de,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(de){u=de},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(de){if(a=de,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",U),a.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(O),a.renderState.layers===void 0){const y={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(a,t,y),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),P=new Ri(p.framebufferWidth,p.framebufferHeight,{format:rn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let y=null,X=null,Z=null;g.depth&&(Z=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,y=g.stencil?ua:na,X=g.stencil?ca:Ci);const B={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:o};d=new XRWebGLBinding(a,t),f=d.createProjectionLayer(B),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),P=new Ri(f.textureWidth,f.textureHeight,{format:rn,type:qn,depthTexture:new md(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,y),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await a.requestReferenceSpace(s),qe.setContext(a),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Y(de){for(let y=0;y<de.removed.length;y++){const X=de.removed[y],Z=S.indexOf(X);Z>=0&&(S[Z]=null,w[Z].disconnect(X))}for(let y=0;y<de.added.length;y++){const X=de.added[y];let Z=S.indexOf(X);if(Z===-1){for(let he=0;he<w.length;he++)if(he>=S.length){S.push(X),Z=he;break}else if(S[he]===null){S[he]=X,Z=he;break}if(Z===-1)break}const B=w[Z];B&&B.connect(X)}}const j=new K,J=new K;function Q(de,y,X){j.setFromMatrixPosition(y.matrixWorld),J.setFromMatrixPosition(X.matrixWorld);const Z=j.distanceTo(J),B=y.projectionMatrix.elements,he=X.projectionMatrix.elements,le=B[14]/(B[10]-1),ue=B[14]/(B[10]+1),xe=(B[9]+1)/B[5],N=(B[9]-1)/B[5],T=(B[8]-1)/B[0],ce=(he[8]+1)/he[0],te=le*T,re=le*ce,L=Z/(-T+ce),V=L*-T;if(y.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(V),de.translateZ(L),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),B[10]===-1)de.projectionMatrix.copy(y.projectionMatrix),de.projectionMatrixInverse.copy(y.projectionMatrixInverse);else{const ae=le+L,x=ue+L,v=te-V,C=re+(Z-V),$=xe*ue/x*ae,W=N*ue/x*ae;de.projectionMatrix.makePerspective(v,C,$,W,ae,x),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}}function _e(de,y){y===null?de.matrixWorld.copy(de.matrix):de.matrixWorld.multiplyMatrices(y.matrixWorld,de.matrix),de.matrixWorldInverse.copy(de.matrixWorld).invert()}this.updateCamera=function(de){if(a===null)return;let y=de.near,X=de.far;b.texture!==null&&(b.depthNear>0&&(y=b.depthNear),b.depthFar>0&&(X=b.depthFar)),M.near=F.near=D.near=y,M.far=F.far=D.far=X,(I!==M.near||ee!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,ee=M.far),D.layers.mask=de.layers.mask|2,F.layers.mask=de.layers.mask|4,M.layers.mask=D.layers.mask|F.layers.mask;const Z=de.parent,B=M.cameras;_e(M,Z);for(let he=0;he<B.length;he++)_e(B[he],Z);B.length===2?Q(M,D,F):M.projectionMatrix.copy(D.projectionMatrix),ye(de,M,Z)};function ye(de,y,X){X===null?de.matrix.copy(y.matrixWorld):(de.matrix.copy(X.matrixWorld),de.matrix.invert(),de.matrix.multiply(y.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(y.projectionMatrix),de.projectionMatrixInverse.copy(y.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=rl*2*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(de){l=de,f!==null&&(f.fixedFoveation=de),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=de)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let Re=null;function ze(de,y){if(h=y.getViewerPose(u||r),_=y,h!==null){const X=h.views;p!==null&&(e.setRenderTargetFramebuffer(P,p.framebuffer),e.setRenderTarget(P));let Z=!1;X.length!==M.cameras.length&&(M.cameras.length=0,Z=!0);for(let he=0;he<X.length;he++){const le=X[he];let ue=null;if(p!==null)ue=p.getViewport(le);else{const N=d.getViewSubImage(f,le);ue=N.viewport,he===0&&(e.setRenderTargetTextures(P,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(P))}let xe=A[he];xe===void 0&&(xe=new an,xe.layers.enable(he),xe.viewport=new vt,A[he]=xe),xe.matrix.fromArray(le.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(le.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(ue.x,ue.y,ue.width,ue.height),he===0&&(M.matrix.copy(xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Z===!0&&M.cameras.push(xe)}const B=a.enabledFeatures;if(B&&B.includes("depth-sensing")){const he=d.getDepthInformation(X[0]);he&&he.isValid&&he.texture&&b.init(e,he,a.renderState)}}for(let X=0;X<w.length;X++){const Z=S[X],B=w[X];Z!==null&&B!==void 0&&B.update(Z,y,u||r)}Re&&Re(de,y),y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:y}),_=null}const qe=new fd;qe.setAnimationLoop(ze),this.setAnimationLoop=function(de){Re=de},this.dispose=function(){}}}const bi=new Ln,j_=new mt;function W_(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,ud(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function a(g,m,P,w,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),d(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m)):m.isMeshStandardMaterial?(o(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,S)):m.isMeshMatcapMaterial?(o(g,m),_(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),b(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&s(g,m)):m.isPointsMaterial?l(g,m,P,w):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Bt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Bt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const P=e.get(m),w=P.envMap,S=P.envMapRotation;w&&(g.envMap.value=w,bi.copy(S),bi.x*=-1,bi.y*=-1,bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),g.envMapRotation.value.setFromMatrix4(j_.makeRotationFromEuler(bi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function s(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,P,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*P,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,P){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Bt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=P.texture,g.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){const P=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(P.matrixWorld),g.nearDistance.value=P.shadow.camera.near,g.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function q_(n,e,t,i){let a={},o={},r=[];const s=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(P,w){const S=w.program;i.uniformBlockBinding(P,S)}function u(P,w){let S=a[P.id];S===void 0&&(_(P),S=h(P),a[P.id]=S,P.addEventListener("dispose",g));const O=w.program;i.updateUBOMapping(P,O);const R=e.render.frame;o[P.id]!==R&&(f(P),o[P.id]=R)}function h(P){const w=d();P.__bindingPointIndex=w;const S=n.createBuffer(),O=P.__size,R=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,O,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function d(){for(let P=0;P<s;P++)if(r.indexOf(P)===-1)return r.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(P){const w=a[P.id],S=P.uniforms,O=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let R=0,D=S.length;R<D;R++){const F=Array.isArray(S[R])?S[R]:[S[R]];for(let A=0,M=F.length;A<M;A++){const I=F[A];if(p(I,R,A,O)===!0){const ee=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let U=0;for(let Y=0;Y<q.length;Y++){const j=q[Y],J=b(j);typeof j=="number"||typeof j=="boolean"?(I.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,ee+U,I.__data)):j.isMatrix3?(I.__data[0]=j.elements[0],I.__data[1]=j.elements[1],I.__data[2]=j.elements[2],I.__data[3]=0,I.__data[4]=j.elements[3],I.__data[5]=j.elements[4],I.__data[6]=j.elements[5],I.__data[7]=0,I.__data[8]=j.elements[6],I.__data[9]=j.elements[7],I.__data[10]=j.elements[8],I.__data[11]=0):(j.toArray(I.__data,U),U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(P,w,S,O){const R=P.value,D=w+"_"+S;if(O[D]===void 0)return typeof R=="number"||typeof R=="boolean"?O[D]=R:O[D]=R.clone(),!0;{const F=O[D];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return O[D]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(P){const w=P.uniforms;let S=0;const O=16;for(let D=0,F=w.length;D<F;D++){const A=Array.isArray(w[D])?w[D]:[w[D]];for(let M=0,I=A.length;M<I;M++){const ee=A[M],q=Array.isArray(ee.value)?ee.value:[ee.value];for(let U=0,Y=q.length;U<Y;U++){const j=q[U],J=b(j),Q=S%O,_e=Q%J.boundary,ye=Q+_e;S+=_e,ye!==0&&O-ye<J.storage&&(S+=O-ye),ee.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=S,S+=J.storage}}}const R=S%O;return R>0&&(S+=O-R),P.__size=S,P.__cache={},this}function b(P){const w={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function g(P){const w=P.target;w.removeEventListener("dispose",g);const S=r.indexOf(w.__bindingPointIndex);r.splice(S,1),n.deleteBuffer(a[w.id]),delete a[w.id],delete o[w.id]}function m(){for(const P in a)n.deleteBuffer(a[P]);r=[],a={},o={}}return{bind:l,update:u,dispose:m}}class X_{constructor(e={}){const{canvas:t=Ff(),context:i=null,depth:a=!0,stencil:o=!1,alpha:r=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const _=new Uint32Array(4),b=new Int32Array(4);let g=null,m=null;const P=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=ci,this.toneMappingExposure=1;const S=this;let O=!1,R=0,D=0,F=null,A=-1,M=null;const I=new vt,ee=new vt;let q=null;const U=new Ke(0);let Y=0,j=t.width,J=t.height,Q=1,_e=null,ye=null;const Re=new vt(0,0,j,J),ze=new vt(0,0,j,J);let qe=!1;const de=new Ll;let y=!1,X=!1;const Z=new mt,B=new mt,he=new K,le=new vt,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function N(){return F===null?Q:1}let T=i;function ce(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:a,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sl}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Te,!1),T===null){const H="webgl2";if(T=ce(H,E),T===null)throw ce(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let te,re,L,V,ae,x,v,C,$,W,G,ge,fe,me,Ne,se,be,Pe,Be,Ce,Xe,je,ut,z;function Ee(){te=new Qg(T),te.init(),je=new B_(T,te),re=new qg(T,te,e,je),L=new N_(T,te),re.reverseDepthBuffer&&f&&L.buffers.depth.setReversed(!0),V=new nv(T),ae=new x_,x=new O_(T,te,L,ae,re,je,V),v=new Yg(S),C=new Jg(S),$=new cp(T),ut=new jg(T,$),W=new ev(T,$,V,ut),G=new av(T,W,$,V),Be=new iv(T,re,x),se=new Xg(ae),ge=new b_(S,v,C,te,re,ut,se),fe=new W_(S,ae),me=new S_,Ne=new C_(te),Pe=new Gg(S,v,C,L,G,p,l),be=new I_(S,G,re),z=new q_(T,V,re,L),Ce=new Wg(T,te,V),Xe=new tv(T,te,V),V.programs=ge.programs,S.capabilities=re,S.extensions=te,S.properties=ae,S.renderLists=me,S.shadowMap=be,S.state=L,S.info=V}Ee();const oe=new G_(S,T);this.xr=oe,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(j,J,!1))},this.getSize=function(E){return E.set(j,J)},this.setSize=function(E,H,ne=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,J=H,t.width=Math.floor(E*Q),t.height=Math.floor(H*Q),ne===!0&&(t.style.width=E+"px",t.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(j*Q,J*Q).floor()},this.setDrawingBufferSize=function(E,H,ne){j=E,J=H,Q=ne,t.width=Math.floor(E*ne),t.height=Math.floor(H*ne),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,H,ne,ie){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,H,ne,ie),L.viewport(I.copy(Re).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(ze)},this.setScissor=function(E,H,ne,ie){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,H,ne,ie),L.scissor(ee.copy(ze).multiplyScalar(Q).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){L.setScissorTest(qe=E)},this.setOpaqueSort=function(E){_e=E},this.setTransparentSort=function(E){ye=E},this.getClearColor=function(E){return E.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(E=!0,H=!0,ne=!0){let ie=0;if(E){let k=!1;if(F!==null){const ve=F.texture.format;k=ve===Rl||ve===Cl||ve===wl}if(k){const ve=F.texture.type,Ae=ve===qn||ve===Ci||ve===Ya||ve===ca||ve===Tl||ve===Al,De=Pe.getClearColor(),Ie=Pe.getClearAlpha(),$e=De.r,ke=De.g,Ue=De.b;Ae?(_[0]=$e,_[1]=ke,_[2]=Ue,_[3]=Ie,T.clearBufferuiv(T.COLOR,0,_)):(b[0]=$e,b[1]=ke,b[2]=Ue,b[3]=Ie,T.clearBufferiv(T.COLOR,0,b))}else ie|=T.COLOR_BUFFER_BIT}H&&(ie|=T.DEPTH_BUFFER_BIT),ne&&(ie|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),me.dispose(),Ne.dispose(),ae.dispose(),v.dispose(),C.dispose(),G.dispose(),ut.dispose(),z.dispose(),ge.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",kl),oe.removeEventListener("sessionend",Vl),fi.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const E=V.autoReset,H=be.enabled,ne=be.autoUpdate,ie=be.needsUpdate,k=be.type;Ee(),V.autoReset=E,be.enabled=H,be.autoUpdate=ne,be.needsUpdate=ie,be.type=k}function Te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const H=E.target;H.removeEventListener("dispose",He),gt(H)}function gt(E){Pt(E),ae.remove(E)}function Pt(E){const H=ae.get(E).programs;H!==void 0&&(H.forEach(function(ne){ge.releaseProgram(ne)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,ne,ie,k,ve){H===null&&(H=ue);const Ae=k.isMesh&&k.matrixWorld.determinant()<0,De=qd(E,H,ne,ie,k);L.setMaterial(ie,Ae);let Ie=ne.index,$e=1;if(ie.wireframe===!0){if(Ie=W.getWireframeAttribute(ne),Ie===void 0)return;$e=2}const ke=ne.drawRange,Ue=ne.attributes.position;let nt=ke.start*$e,dt=(ke.start+ke.count)*$e;ve!==null&&(nt=Math.max(nt,ve.start*$e),dt=Math.min(dt,(ve.start+ve.count)*$e)),Ie!==null?(nt=Math.max(nt,0),dt=Math.min(dt,Ie.count)):Ue!=null&&(nt=Math.max(nt,0),dt=Math.min(dt,Ue.count));const ft=dt-nt;if(ft<0||ft===1/0)return;ut.setup(k,ie,De,ne,Ie);let kt,it=Ce;if(Ie!==null&&(kt=$.get(Ie),it=Xe,it.setIndex(kt)),k.isMesh)ie.wireframe===!0?(L.setLineWidth(ie.wireframeLinewidth*N()),it.setMode(T.LINES)):it.setMode(T.TRIANGLES);else if(k.isLine){let Fe=ie.linewidth;Fe===void 0&&(Fe=1),L.setLineWidth(Fe*N()),k.isLineSegments?it.setMode(T.LINES):k.isLineLoop?it.setMode(T.LINE_LOOP):it.setMode(T.LINE_STRIP)}else k.isPoints?it.setMode(T.POINTS):k.isSprite&&it.setMode(T.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Fe=k._multiDrawStarts,Un=k._multiDrawCounts,at=k._multiDrawCount,un=Ie?$.get(Ie).bytesPerElement:1,Ii=ae.get(ie).currentProgram.getUniforms();for(let Zt=0;Zt<at;Zt++)Ii.setValue(T,"_gl_DrawID",Zt),it.render(Fe[Zt]/un,Un[Zt])}else if(k.isInstancedMesh)it.renderInstances(nt,ft,k.count);else if(ne.isInstancedBufferGeometry){const Fe=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Un=Math.min(ne.instanceCount,Fe);it.renderInstances(nt,ft,Un)}else it.render(nt,ft)};function ot(E,H,ne){E.transparent===!0&&E.side===Vn&&E.forceSinglePass===!1?(E.side=Bt,E.needsUpdate=!0,so(E,H,ne),E.side=hi,E.needsUpdate=!0,so(E,H,ne),E.side=Vn):so(E,H,ne)}this.compile=function(E,H,ne=null){ne===null&&(ne=E),m=Ne.get(ne),m.init(H),w.push(m),ne.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==ne&&E.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const ie=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ve=k.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const De=ve[Ae];ot(De,ne,k),ie.add(De)}else ot(ve,ne,k),ie.add(ve)}),w.pop(),m=null,ie},this.compileAsync=function(E,H,ne=null){const ie=this.compile(E,H,ne);return new Promise(k=>{function ve(){if(ie.forEach(function(Ae){ae.get(Ae).currentProgram.isReady()&&ie.delete(Ae)}),ie.size===0){k(E);return}setTimeout(ve,10)}te.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let cn=null;function In(E){cn&&cn(E)}function kl(){fi.stop()}function Vl(){fi.start()}const fi=new fd;fi.setAnimationLoop(In),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(E){cn=E,oe.setAnimationLoop(E),E===null?fi.stop():fi.start()},oe.addEventListener("sessionstart",kl),oe.addEventListener("sessionend",Vl),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,H,F),m=Ne.get(E,w.length),m.init(H),w.push(m),B.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),de.setFromProjectionMatrix(B),X=this.localClippingEnabled,y=se.init(this.clippingPlanes,X),g=me.get(E,P.length),g.init(),P.push(g),oe.enabled===!0&&oe.isPresenting===!0){const ve=S.xr.getDepthSensingMesh();ve!==null&&Er(ve,H,-1/0,S.sortObjects)}Er(E,H,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(_e,ye),xe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,xe&&Pe.addToRenderList(g,E),this.info.render.frame++,y===!0&&se.beginShadows();const ne=m.state.shadowsArray;be.render(ne,E,H),y===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=g.opaque,k=g.transmissive;if(m.setupLights(),H.isArrayCamera){const ve=H.cameras;if(k.length>0)for(let Ae=0,De=ve.length;Ae<De;Ae++){const Ie=ve[Ae];jl(ie,k,E,Ie)}xe&&Pe.render(E);for(let Ae=0,De=ve.length;Ae<De;Ae++){const Ie=ve[Ae];Gl(g,E,Ie,Ie.viewport)}}else k.length>0&&jl(ie,k,E,H),xe&&Pe.render(E),Gl(g,E,H);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),E.isScene===!0&&E.onAfterRender(S,E,H),ut.resetDefaultState(),A=-1,M=null,w.pop(),w.length>0?(m=w[w.length-1],y===!0&&se.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,P.pop(),P.length>0?g=P[P.length-1]:g=null};function Er(E,H,ne,ie){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||de.intersectsSprite(E)){ie&&le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(B);const Ae=G.update(E),De=E.material;De.visible&&g.push(E,Ae,De,ne,le.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||de.intersectsObject(E))){const Ae=G.update(E),De=E.material;if(ie&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),le.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),le.copy(Ae.boundingSphere.center)),le.applyMatrix4(E.matrixWorld).applyMatrix4(B)),Array.isArray(De)){const Ie=Ae.groups;for(let $e=0,ke=Ie.length;$e<ke;$e++){const Ue=Ie[$e],nt=De[Ue.materialIndex];nt&&nt.visible&&g.push(E,Ae,nt,ne,le.z,Ue)}}else De.visible&&g.push(E,Ae,De,ne,le.z,null)}}const ve=E.children;for(let Ae=0,De=ve.length;Ae<De;Ae++)Er(ve[Ae],H,ne,ie)}function Gl(E,H,ne,ie){const k=E.opaque,ve=E.transmissive,Ae=E.transparent;m.setupLightsView(ne),y===!0&&se.setGlobalState(S.clippingPlanes,ne),ie&&L.viewport(I.copy(ie)),k.length>0&&ro(k,H,ne),ve.length>0&&ro(ve,H,ne),Ae.length>0&&ro(Ae,H,ne),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function jl(E,H,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ie.id]===void 0&&(m.state.transmissionRenderTarget[ie.id]=new Ri(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ja:qn,minFilter:Ti,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ve=m.state.transmissionRenderTarget[ie.id],Ae=ie.viewport||I;ve.setSize(Ae.z,Ae.w);const De=S.getRenderTarget();S.setRenderTarget(ve),S.getClearColor(U),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),xe&&Pe.render(ne);const Ie=S.toneMapping;S.toneMapping=ci;const $e=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),m.setupLightsView(ie),y===!0&&se.setGlobalState(S.clippingPlanes,ie),ro(E,ne,ie),x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve),te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ue=0,nt=H.length;Ue<nt;Ue++){const dt=H[Ue],ft=dt.object,kt=dt.geometry,it=dt.material,Fe=dt.group;if(it.side===Vn&&ft.layers.test(ie.layers)){const Un=it.side;it.side=Bt,it.needsUpdate=!0,Wl(ft,ne,ie,kt,it,Fe),it.side=Un,it.needsUpdate=!0,ke=!0}}ke===!0&&(x.updateMultisampleRenderTarget(ve),x.updateRenderTargetMipmap(ve))}S.setRenderTarget(De),S.setClearColor(U,Y),$e!==void 0&&(ie.viewport=$e),S.toneMapping=Ie}function ro(E,H,ne){const ie=H.isScene===!0?H.overrideMaterial:null;for(let k=0,ve=E.length;k<ve;k++){const Ae=E[k],De=Ae.object,Ie=Ae.geometry,$e=ie===null?Ae.material:ie,ke=Ae.group;De.layers.test(ne.layers)&&Wl(De,H,ne,Ie,$e,ke)}}function Wl(E,H,ne,ie,k,ve){E.onBeforeRender(S,H,ne,ie,k,ve),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(S,H,ne,ie,E,ve),k.transparent===!0&&k.side===Vn&&k.forceSinglePass===!1?(k.side=Bt,k.needsUpdate=!0,S.renderBufferDirect(ne,H,ie,k,E,ve),k.side=hi,k.needsUpdate=!0,S.renderBufferDirect(ne,H,ie,k,E,ve),k.side=Vn):S.renderBufferDirect(ne,H,ie,k,E,ve),E.onAfterRender(S,H,ne,ie,k,ve)}function so(E,H,ne){H.isScene!==!0&&(H=ue);const ie=ae.get(E),k=m.state.lights,ve=m.state.shadowsArray,Ae=k.state.version,De=ge.getParameters(E,k.state,ve,H,ne),Ie=ge.getProgramCacheKey(De);let $e=ie.programs;ie.environment=E.isMeshStandardMaterial?H.environment:null,ie.fog=H.fog,ie.envMap=(E.isMeshStandardMaterial?C:v).get(E.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,$e===void 0&&(E.addEventListener("dispose",He),$e=new Map,ie.programs=$e);let ke=$e.get(Ie);if(ke!==void 0){if(ie.currentProgram===ke&&ie.lightsStateVersion===Ae)return Xl(E,De),ke}else De.uniforms=ge.getUniforms(E),E.onBeforeCompile(De,S),ke=ge.acquireProgram(De,Ie),$e.set(Ie,ke),ie.uniforms=De.uniforms;const Ue=ie.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=se.uniform),Xl(E,De),ie.needsLights=Yd(E),ie.lightsStateVersion=Ae,ie.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),ie.currentProgram=ke,ie.uniformsList=null,ke}function ql(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Wo.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Xl(E,H){const ne=ae.get(E);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function qd(E,H,ne,ie,k){H.isScene!==!0&&(H=ue),x.resetTextureUnits();const ve=H.fog,Ae=ie.isMeshStandardMaterial?H.environment:null,De=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ha,Ie=(ie.isMeshStandardMaterial?C:v).get(ie.envMap||Ae),$e=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ke=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ue=!!ne.morphAttributes.position,nt=!!ne.morphAttributes.normal,dt=!!ne.morphAttributes.color;let ft=ci;ie.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ft=S.toneMapping);const kt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,it=kt!==void 0?kt.length:0,Fe=ae.get(ie),Un=m.state.lights;if(y===!0&&(X===!0||E!==M)){const en=E===M&&ie.id===A;se.setState(ie,E,en)}let at=!1;ie.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Un.state.version||Fe.outputColorSpace!==De||k.isBatchedMesh&&Fe.batching===!1||!k.isBatchedMesh&&Fe.batching===!0||k.isBatchedMesh&&Fe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Fe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Fe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Fe.instancingMorph===!1&&k.morphTexture!==null||Fe.envMap!==Ie||ie.fog===!0&&Fe.fog!==ve||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==se.numPlanes||Fe.numIntersection!==se.numIntersection)||Fe.vertexAlphas!==$e||Fe.vertexTangents!==ke||Fe.morphTargets!==Ue||Fe.morphNormals!==nt||Fe.morphColors!==dt||Fe.toneMapping!==ft||Fe.morphTargetsCount!==it)&&(at=!0):(at=!0,Fe.__version=ie.version);let un=Fe.currentProgram;at===!0&&(un=so(ie,H,k));let Ii=!1,Zt=!1,va=!1;const pt=un.getUniforms(),yn=Fe.uniforms;if(L.useProgram(un.program)&&(Ii=!0,Zt=!0,va=!0),ie.id!==A&&(A=ie.id,Zt=!0),Ii||M!==E){L.buffers.depth.getReversed()?(Z.copy(E.projectionMatrix),Bf(Z),zf(Z),pt.setValue(T,"projectionMatrix",Z)):pt.setValue(T,"projectionMatrix",E.projectionMatrix),pt.setValue(T,"viewMatrix",E.matrixWorldInverse);const Yn=pt.map.cameraPosition;Yn!==void 0&&Yn.setValue(T,he.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&pt.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&pt.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Zt=!0,va=!0)}if(k.isSkinnedMesh){pt.setOptional(T,k,"bindMatrix"),pt.setOptional(T,k,"bindMatrixInverse");const en=k.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),pt.setValue(T,"boneTexture",en.boneTexture,x))}k.isBatchedMesh&&(pt.setOptional(T,k,"batchingTexture"),pt.setValue(T,"batchingTexture",k._matricesTexture,x),pt.setOptional(T,k,"batchingIdTexture"),pt.setValue(T,"batchingIdTexture",k._indirectTexture,x),pt.setOptional(T,k,"batchingColorTexture"),k._colorsTexture!==null&&pt.setValue(T,"batchingColorTexture",k._colorsTexture,x));const _a=ne.morphAttributes;if((_a.position!==void 0||_a.normal!==void 0||_a.color!==void 0)&&Be.update(k,ne,un),(Zt||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,pt.setValue(T,"receiveShadow",k.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(yn.envMap.value=Ie,yn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&H.environment!==null&&(yn.envMapIntensity.value=H.environmentIntensity),Zt&&(pt.setValue(T,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&Xd(yn,va),ve&&ie.fog===!0&&fe.refreshFogUniforms(yn,ve),fe.refreshMaterialUniforms(yn,ie,Q,J,m.state.transmissionRenderTarget[E.id]),Wo.upload(T,ql(Fe),yn,x)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Wo.upload(T,ql(Fe),yn,x),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&pt.setValue(T,"center",k.center),pt.setValue(T,"modelViewMatrix",k.modelViewMatrix),pt.setValue(T,"normalMatrix",k.normalMatrix),pt.setValue(T,"modelMatrix",k.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const en=ie.uniformsGroups;for(let Yn=0,Zn=en.length;Yn<Zn;Yn++){const Yl=en[Yn];z.update(Yl,un),z.bind(Yl,un)}}return un}function Xd(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Yd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,H,ne){ae.get(E.texture).__webglTexture=H,ae.get(E.depthTexture).__webglTexture=ne;const ie=ae.get(E);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const ne=ae.get(E);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,ne=0){F=E,R=H,D=ne;let ie=!0,k=null,ve=!1,Ae=!1;if(E){const Ie=ae.get(E);if(Ie.__useDefaultFramebuffer!==void 0)L.bindFramebuffer(T.FRAMEBUFFER,null),ie=!1;else if(Ie.__webglFramebuffer===void 0)x.setupRenderTarget(E);else if(Ie.__hasExternalTextures)x.rebindTextures(E,ae.get(E.texture).__webglTexture,ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(Ie.__boundDepthTexture!==Ue){if(Ue!==null&&ae.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(E)}}const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ae=!0);const ke=ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[H])?k=ke[H][ne]:k=ke[H],ve=!0):E.samples>0&&x.useMultisampledRTT(E)===!1?k=ae.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[ne]:k=ke,I.copy(E.viewport),ee.copy(E.scissor),q=E.scissorTest}else I.copy(Re).multiplyScalar(Q).floor(),ee.copy(ze).multiplyScalar(Q).floor(),q=qe;if(L.bindFramebuffer(T.FRAMEBUFFER,k)&&ie&&L.drawBuffers(E,k),L.viewport(I),L.scissor(ee),L.setScissorTest(q),ve){const Ie=ae.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,ne)}else if(Ae){const Ie=ae.get(E.texture),$e=H||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ie.__webglTexture,ne||0,$e)}A=-1},this.readRenderTargetPixels=function(E,H,ne,ie,k,ve,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){L.bindFramebuffer(T.FRAMEBUFFER,De);try{const Ie=E.texture,$e=Ie.format,ke=Ie.type;if(!re.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-ie&&ne>=0&&ne<=E.height-k&&T.readPixels(H,ne,ie,k,je.convert($e),je.convert(ke),ve)}finally{const Ie=F!==null?ae.get(F).__webglFramebuffer:null;L.bindFramebuffer(T.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(E,H,ne,ie,k,ve,Ae){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){const Ie=E.texture,$e=Ie.format,ke=Ie.type;if(!re.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-ie&&ne>=0&&ne<=E.height-k){L.bindFramebuffer(T.FRAMEBUFFER,De);const Ue=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ue),T.bufferData(T.PIXEL_PACK_BUFFER,ve.byteLength,T.STREAM_READ),T.readPixels(H,ne,ie,k,je.convert($e),je.convert(ke),0);const nt=F!==null?ae.get(F).__webglFramebuffer:null;L.bindFramebuffer(T.FRAMEBUFFER,nt);const dt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await Of(T,dt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ue),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ve),T.deleteBuffer(Ue),T.deleteSync(dt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,ne=0){E.isTexture!==!0&&(Fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const ie=Math.pow(2,-ne),k=Math.floor(E.image.width*ie),ve=Math.floor(E.image.height*ie),Ae=H!==null?H.x:0,De=H!==null?H.y:0;x.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,ne,0,0,Ae,De,k,ve),L.unbindTexture()},this.copyTextureToTexture=function(E,H,ne=null,ie=null,k=0){E.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,E=arguments[1],H=arguments[2],k=arguments[3]||0,ne=null);let ve,Ae,De,Ie,$e,ke,Ue,nt,dt;const ft=E.isCompressedTexture?E.mipmaps[k]:E.image;ne!==null?(ve=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,De=ne.isBox3?ne.max.z-ne.min.z:1,Ie=ne.min.x,$e=ne.min.y,ke=ne.isBox3?ne.min.z:0):(ve=ft.width,Ae=ft.height,De=ft.depth||1,Ie=0,$e=0,ke=0),ie!==null?(Ue=ie.x,nt=ie.y,dt=ie.z):(Ue=0,nt=0,dt=0);const kt=je.convert(H.format),it=je.convert(H.type);let Fe;H.isData3DTexture?(x.setTexture3D(H,0),Fe=T.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(x.setTexture2DArray(H,0),Fe=T.TEXTURE_2D_ARRAY):(x.setTexture2D(H,0),Fe=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const Un=T.getParameter(T.UNPACK_ROW_LENGTH),at=T.getParameter(T.UNPACK_IMAGE_HEIGHT),un=T.getParameter(T.UNPACK_SKIP_PIXELS),Ii=T.getParameter(T.UNPACK_SKIP_ROWS),Zt=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ie),T.pixelStorei(T.UNPACK_SKIP_ROWS,$e),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ke);const va=E.isDataArrayTexture||E.isData3DTexture,pt=H.isDataArrayTexture||H.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const yn=ae.get(E),_a=ae.get(H),en=ae.get(yn.__renderTarget),Yn=ae.get(_a.__renderTarget);L.bindFramebuffer(T.READ_FRAMEBUFFER,en.__webglFramebuffer),L.bindFramebuffer(T.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Zn=0;Zn<De;Zn++)va&&T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(E).__webglTexture,k,ke+Zn),E.isDepthTexture?(pt&&T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,k,dt+Zn),T.blitFramebuffer(Ie,$e,ve,Ae,Ue,nt,ve,Ae,T.DEPTH_BUFFER_BIT,T.NEAREST)):pt?T.copyTexSubImage3D(Fe,k,Ue,nt,dt+Zn,Ie,$e,ve,Ae):T.copyTexSubImage2D(Fe,k,Ue,nt,dt+Zn,Ie,$e,ve,Ae);L.bindFramebuffer(T.READ_FRAMEBUFFER,null),L.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Fe,k,Ue,nt,dt,ve,Ae,De,kt,it,ft.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(Fe,k,Ue,nt,dt,ve,Ae,De,kt,ft.data):T.texSubImage3D(Fe,k,Ue,nt,dt,ve,Ae,De,kt,it,ft):E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,k,Ue,nt,ve,Ae,kt,it,ft.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,k,Ue,nt,ft.width,ft.height,kt,ft.data):T.texSubImage2D(T.TEXTURE_2D,k,Ue,nt,ve,Ae,kt,it,ft);T.pixelStorei(T.UNPACK_ROW_LENGTH,Un),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,at),T.pixelStorei(T.UNPACK_SKIP_PIXELS,un),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ii),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Zt),k===0&&H.generateMipmaps&&T.generateMipmap(Fe),L.unbindTexture()},this.copyTextureToTexture3D=function(E,H,ne=null,ie=null,k=0){return E.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,E=arguments[2],H=arguments[3],k=arguments[4]||0),Fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,ne,ie,k)},this.initRenderTarget=function(E){ae.get(E).__webglFramebuffer===void 0&&x.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?x.setTextureCube(E,0):E.isData3DTexture?x.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?x.setTexture2DArray(E,0):x.setTexture2D(E,0),L.unbindTexture()},this.resetState=function(){R=0,D=0,F=null,L.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}class Y_ extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Z_ extends $t{constructor(e=null,t=1,i=1,a,o,r,s,l,u=zt,h=zt,d,f){super(null,r,s,l,u,h,a,o,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xd extends fa{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const au=new mt,ll=new Pl,Uo=new mr,No=new K;class K_ extends Rt{constructor(e=new Dn,t=new xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(a),Uo.radius+=o,e.ray.intersectsSphere(Uo)===!1)return;au.copy(a).invert(),ll.copy(e.ray).applyMatrix4(au);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let _=f,b=p;_<b;_++){const g=u.getX(_);No.fromBufferAttribute(d,g),ou(No,g,l,a,e,t,this)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let _=f,b=p;_<b;_++)No.fromBufferAttribute(d,_),ou(No,_,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function ou(n,e,t,i,a,o,r){const s=ll.distanceSqToPoint(n);if(s<t){const l=new K;ll.closestPointToPoint(n,l),l.applyMatrix4(i);const u=a.ray.origin.distanceTo(l);if(u<a.near||u>a.far)return;o.push({distance:u,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ga extends Dn{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,r=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:r,thetaLength:s},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+s,Math.PI);let u=0;const h=[],d=new K,f=new K,p=[],_=[],b=[],g=[];for(let m=0;m<=i;m++){const P=[],w=m/i;let S=0;m===0&&r===0?S=.5/t:m===i&&l===Math.PI&&(S=-.5/t);for(let O=0;O<=t;O++){const R=O/t;d.x=-e*Math.cos(a+R*o)*Math.sin(r+w*s),d.y=e*Math.cos(r+w*s),d.z=e*Math.sin(a+R*o)*Math.sin(r+w*s),_.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),g.push(R+S,1-w),P.push(u++)}h.push(P)}for(let m=0;m<i;m++)for(let P=0;P<t;P++){const w=h[m][P+1],S=h[m][P],O=h[m+1][P],R=h[m+1][P+1];(m!==0||r>0)&&p.push(w,S,R),(m!==i-1||l<Math.PI)&&p.push(S,O,R)}this.setIndex(p),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(b,3)),this.setAttribute("uv",new Cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ru extends fa{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Md extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const is=new mt,su=new K,lu=new K;class J_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;su.setFromMatrixPosition(e.matrixWorld),t.position.copy(su),lu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lu),t.updateMatrixWorld(),is.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(is),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(is)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Q_ extends J_{constructor(){super(new pd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e0 extends Md{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Q_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class t0 extends Md{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class n0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cu(){return performance.now()}class uu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class i0 extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sl);const du={type:"change"},Il={type:"start"},Sd={type:"end"},Fo=new Pl,hu=new ri,a0=Math.cos(70*Nf.DEG2RAD),xt=new K,Gt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},as=1e-6;class o0 extends i0{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ea.ROTATE,MIDDLE:ea.DOLLY,RIGHT:ea.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Pi,this._lastTargetPosition=new K,this._quat=new Pi().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uu,this._sphericalDelta=new uu,this._scale=1,this._panOffset=new K,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new K,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=s0.bind(this),this._onPointerDown=r0.bind(this),this._onPointerUp=l0.bind(this),this._onContextMenu=m0.bind(this),this._onMouseWheel=d0.bind(this),this._onKeyDown=h0.bind(this),this._onTouchStart=f0.bind(this),this._onTouchMove=p0.bind(this),this._onMouseDown=c0.bind(this),this._onMouseMove=u0.bind(this),this._interceptControlDown=g0.bind(this),this._interceptControlUp=v0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(du),this.update(),this.state=lt.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=Gt:i>Math.PI&&(i-=Gt),a<-Math.PI?a+=Gt:a>Math.PI&&(a-=Gt),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const s=xt.length();r=this._clampDistance(s*this._scale);const l=s-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const s=new K(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const u=new K(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(s),this.object.updateMatrixWorld(),r=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Fo.origin.copy(this.object.position),Fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fo.direction))<a0?this.object.lookAt(this.target):(hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fo.intersectPlane(hu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>as||8*(1-this._lastQuaternion.dot(this.object.quaternion))>as||this._lastTargetPosition.distanceToSquared(this.target)>as?(this.dispatchEvent(du),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;xt.copy(a).sub(this.target);let o=xt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,o=t-i.top,r=i.width,s=i.height;this._mouse.x=a/r*2-1,this._mouse.y=-(o/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Gt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,s=(e.pageY+t.y)*.5;this._updateZoomParameters(r,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function r0(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function s0(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function l0(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sd),this.state=lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function c0(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ea.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case ea.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case ea.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Il)}function u0(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function d0(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(Il),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sd))}function h0(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function f0(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Il)}function p0(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function m0(n){this.enabled!==!1&&n.preventDefault()}function g0(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function v0(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const xi=(n,e)=>(n+e)%2===0;function _0(n,e=1024){const t=e/2,i=new Le(e,t),a=gs(11),o=gs(23,18),r=Mn(5);for(let u=0;u<t;u++){const h=90-(u+.5)/t*180,d=Math.abs(h);for(let f=0;f<e;f++){const p=(f+.5)/e*360-180,_=a(p,h);let b;_>.55?b=c.mar:_>.47?b=xi(f,u)?c.mar:c.marHondo:_<-.5?b=c.abismo:_<-.4?b=xi(f,u)?c.abismo:c.marHondo:b=c.marHondo,d<ka&&Math.sin(h*1.3+Math.sin(p*.09)*3+_*4)>.93&&(b=c.mar),d>=ka&&d<Jo&&(b=_>.25&&xi(f,u)?c.mar:c.bajio,(d<ka+.5||d>Jo-.5)&&(b=xi(f,u)?c.bajio:c.mar)),d>79+_*3?b=_>.1?c.hueso:c.espuma:d>77+_*3&&(b=xi(f,u)?c.espuma:b);const g=Pu(p,h),m=Ru+o(p,h)*.9;if(g<m){const P=g/m,w=o(p*3,h*3);P<.3?b=w>.15?c.hueso:c.niebla:P<.7?b=w>.35?c.selva:w<-.4?c.sombraVioleta:c.piedra:b=w>.2?c.hoja:c.sombraVioleta,d>76&&(b=c.hueso)}else g<m+.5&&(b=xi(f,u)?c.bajio:c.espuma);i.px(f,u,b)}}const s=e/360,l=t/180;for(const u of n){const h=(u.lon+180)*s,d=(90-u.lat)*l,f=1/Math.max(.25,Math.cos(u.lat*Math.PI/180)),p=u.radio*s*f,_=u.radio*l,b=r()*1e3,g=w=>1+.14*Math.sin(w*2+b)+.1*Math.sin(w*3+b*2)+.06*Math.sin(w*5+b*3),m=[],P={tropical:[c.arena,c.hoja,c.selva],nevada:[c.niebla,c.hueso,c.espuma],volcanica:[c.sombraVioleta,c.piedra,c.rojo],desierto:[c.pergamino,c.arena,c.maderaClara],flotante:[c.hueso,c.brote,c.hoja],ciudad:[c.arena,c.niebla,c.pergamino],ruinas:[c.arena,c.piedra,c.hoja]}[u.bioma];m.push([1.7,c.bajio],[1,P[0]],[.7,P[1]],[.32,P[2]]);for(let w=Math.floor(d-_*2);w<=d+_*2;w++)for(let S=Math.floor(h-p*2);S<=h+p*2;S++){const O=(S+.5-h)/p,R=(w+.5-d)/_,D=Math.hypot(O,R)/g(Math.atan2(R,O)),F=(S%e+e)%e;for(const[A,M]of m)if(D<A){if(M===c.bajio){const I=i.get(F,w);if(I!==c.marHondo&&I!==c.mar&&I!==c.abismo||D>1.35&&!xi(S,w))continue}i.px(F,w,M)}D<.6&&u.bioma==="ciudad"&&(S+w*3)%4===0&&i.px(F,w,c.rojo)}u.bioma==="volcanica"&&u.radio>1.1&&i.px(Math.round(h),Math.round(d),c.naranja)}return i}function b0(n=512){const e=n/2,t=new Le(n,e),i=gs(99,22);for(let a=0;a<e;a++){const o=90-(a+.5)/e*180;for(let r=0;r<n;r++){const s=(r+.5)/n*360-180,l=i(s*3,o*2.5)+.35*i(s,o)+.15*Math.cos(o*Math.PI/30);l>.62?t.px(r,a,c.hueso):l>.55&&t.px(r,a,(r+a)%2?c.hueso:c.T)}}return t}function Oo(n,e,t=1){const a=(e+180)/360*Math.PI*2,o=(90-n)*Math.PI/180;return new K(-Math.cos(a)*Math.sin(o),Math.cos(o),Math.sin(a)*Math.sin(o)).multiplyScalar(t)}function fu(n){const e=n.aRGBA(),t=new Uint8Array(e.length),i=n.w*4;for(let o=0;o<n.h;o++)t.set(e.subarray(o*i,(o+1)*i),(n.h-1-o)*i);const a=new Z_(t,n.w,n.h,rn);return a.magFilter=zt,a.minFilter=zt,a.generateMipmaps=!1,a.colorSpace=qt,a.needsUpdate=!0,a}function x0(n,e,t={}){let i=window.innerWidth<700?2:3;const a=new X_({antialias:!1,alpha:!0,powerPreference:"low-power"});a.setPixelRatio(1),a.outputColorSpace=qt;const o=a.domElement;o.className="planeta-lienzo",n.prepend(o);const r=new Y_,s=new an(32,1,.1,200),l=th(),u=new sn(new Ga(1,128,96),new ru({map:fu(_0(l))}));r.add(u);const h=new sn(new Ga(1.025,96,64),new ru({map:fu(b0()),transparent:!0,opacity:.8,alphaTest:.5,depthWrite:!1}));r.add(h);const d=new sn(new Ga(1.13,64,48),new Xn({side:Bt,transparent:!0,blending:xs,depthWrite:!1,uniforms:{color:{value:new Ke(gn[25].hex)}},vertexShader:`varying vec3 vN; varying vec3 vP;
        void main(){ vN = normalize(normalMatrix * normal); vec4 p = modelViewMatrix * vec4(position,1.0); vP = p.xyz; gl_Position = projectionMatrix * p; }`,fragmentShader:`uniform vec3 color; varying vec3 vN; varying vec3 vP;
        void main(){ float f = pow(1.0 - abs(dot(normalize(-vP), vN)), 3.0); float b = floor(f * 4.0) / 4.0; gl_FragColor = vec4(color, b * 0.9); }`}));r.add(d);{const I=new Float32Array(2100),ee=new Float32Array(700*3),q=[gn[5],gn[26],gn[18],gn[4]].map(Y=>new Ke(Y.hex));for(let Y=0;Y<700;Y++){const j=new K().randomDirection().multiplyScalar(60+Math.random()*30);I.set([j.x,j.y,j.z],Y*3);const J=q[Math.floor(Math.random()*q.length)];ee.set([J.r,J.g,J.b],Y*3)}const U=new Dn;U.setAttribute("position",new ln(I,3)),U.setAttribute("color",new ln(ee,3)),r.add(new K_(U,new xd({size:1,sizeAttenuation:!1,vertexColors:!0})))}const f=new e0(16777215,2.6);r.add(f),r.add(new t0(new Ke(gn[1].hex),1.3));const p=new o0(s,n);p.enablePan=!1,p.enableDamping=!0,p.dampingFactor=.08,p.rotateSpeed=.5,p.minDistance=1.7,p.maxDistance=8,p.autoRotate=!0,p.autoRotateSpeed=.35;let _;p.addEventListener("start",()=>{p.autoRotate=!1,clearTimeout(_)}),p.addEventListener("end",()=>{_=window.setTimeout(()=>p.autoRotate=!0,6e3)});const b=[],g=[...["alba","ocaso","coral","bruma"].map(M=>({texto:wt[M].nombre,...wt[M].etiqueta,tipo:"mar"})),{texto:wt.mareas.nombre,...wt.mareas.etiqueta,tipo:"ruta"},{texto:wt.profunda.nombre,...wt.profunda.etiqueta,tipo:"ruta"},{texto:wt.dormidas.nombre,lat:11,lon:140,tipo:"calma"},{texto:wt.dormidas.nombre,lat:-11,lon:-40,tipo:"calma"},{texto:wt.espinazo.nombre,lat:30,lon:0,tipo:"continente"},{texto:wt.espinazo.nombre,lat:-30,lon:180,tipo:"continente"}];for(const M of g){const I=document.createElement("div");I.className=`etiqueta etiqueta-${M.tipo}`,I.textContent=M.texto,e.append(I),b.push({...M,el:I,p:Oo(M.lat,M.lon,1.03)})}function m(){const M=n.clientWidth,I=n.clientHeight,ee=Math.tan(s.fov/2*Math.PI/180),q=1.15,U=q/(ee*.62),Y=q/(ee*(M/I)*.86);return Math.max(U,Y)}function P(){const M=n.clientWidth,I=n.clientHeight;a.setSize(Math.ceil(M/i),Math.ceil(I/i),!1),s.aspect=M/I,s.setViewOffset(M,I,0,Math.round(I*(M<I?.07:.03)),M,I),s.updateProjectionMatrix();const ee=m();p.maxDistance=ee*1.5}window.addEventListener("resize",P),P(),s.position.copy(Oo(16,28,1)).normalize().multiplyScalar(m());const w=new n0,S=new K;let O=!1;const R=new Map;let D=null,F=!0;function A(){if(!F)return;requestAnimationFrame(A);const M=w.getElapsedTime();h.rotation.y=M*.012,f.position.set(Math.cos(M*.03)*5,1.5,Math.sin(M*.03)*5),p.update(),a.render(r,s);const I=n.clientWidth,ee=n.clientHeight,q=S.copy(s.position).normalize();for(const J of b){const Q=J.p.clone().normalize().dot(q);if(Q<.25){J.el.style.opacity="0";continue}const _e=J.p.clone().project(s);J.el.style.opacity=String(Math.min(1,(Q-.25)*4)),J.el.style.transform=`translate(${(_e.x+1)/2*I}px, ${(1-_e.y)/2*ee}px) translate(-50%, -50%)`}const U=t.marcadores?.()??[],Y=new Set;for(const J of U){Y.add(J.id);let Q=R.get(J.id);Q||(Q=document.createElement("div"),Q.className=J.esMio?"marca marca-yo":"marca marca-bot",J.esMio?(Q.innerHTML='<span class="marca-texto">Tú</span>',J.cabeza&&Q.prepend(J.cabeza)):Q.style.background=J.color,e.append(Q),R.set(J.id,Q));const _e=Oo(J.lat,J.lon,1.01),ye=_e.clone().normalize().dot(q);if(ye<.15){Q.style.opacity="0";continue}const Re=_e.project(s);Q.style.opacity=String(Math.min(1,(ye-.15)*5)),Q.style.transform=`translate(${(Re.x+1)/2*I}px, ${(1-Re.y)/2*ee}px) translate(-50%, ${J.esMio?"-100%":"-50%"})`}for(const[J,Q]of R)Y.has(J)||(Q.remove(),R.delete(J));if(D){const J=Math.min(1,(performance.now()-D.t0)/D.dur),Q=J*J*(3-2*J);if(s.position.copy(D.de).lerp(D.a,Q).normalize().multiplyScalar(D.dDe+(D.dA-D.dDe)*Q),J>=1){const _e=D.fin;D=null,_e?.()}}const j=s.position.length()<2.1;j!==O&&(O=j,t.alAcercar?.(j))}return A(),{islas:l,centroVista(){const M=s.position.clone().normalize(),I=Math.asin(M.y)*180/Math.PI;let ee=Math.atan2(M.z,-M.x);return ee<0&&(ee+=Math.PI*2),{lat:I,lon:ee/(Math.PI*2)*360-180}},irA(M,I,ee,q){p.autoRotate=!1,clearTimeout(_);const U=s.position.length();D={de:s.position.clone().normalize(),a:Oo(M,I).normalize(),dDe:U,dA:ee??U,t0:performance.now(),dur:900,fin:q},_=window.setTimeout(()=>p.autoRotate=!0,9e3)},pausar(){F=!1},reanudar(){F||(F=!0,O=s.position.length()<2.1,A())},setPixel(M){i=M,P()},destruir(){F=!1,a.dispose(),o.remove(),e.innerHTML=""}}}const Ba=n=>Math.round(240+n*220);function Qt(n,e=[]){return n.contorno(c.tinta),n}function cl(n,e,t=64){const i=t,a=60,o=new Le(i+2,a+2),r=1;o.rect(r+5,28,i-10,28,e),o.rect(r+5,52,i-10,4,Ia[e]),o.rect(r+i-9,28,4,28,Ia[e]),o.poligono([[r+10,2],[r+i-10,2],[r+i,30],[r,30]],n);for(let l=7;l<30;l+=5)o.linea(r+2+(30-l)*.33,l,r+i-2-(30-l)*.33,l,Ia[n]);o.linea(r+11,3,r+i-11,3,Tu[n]),o.rect(r,29,i,2,Ia[n]),o.rect(r+i-22,0,7,9,c.piedra),o.rect(r+i-22,0,7,2,c.niebla);const s=r+Math.round(i/2)-5;o.rect(s,38,10,18,c.corteza),o.rect(s+1,39,8,17,c.madera),o.px(s+7,47,c.oro);for(const l of[r+11,r+i-22])o.rect(l,36,11,10,c.madera),o.rect(l+1,37,9,8,c.limon),o.rect(l+5,37,1,8,c.madera),o.rect(l+1,40,9,1,c.madera);return Qt(o)}function M0(){const n=cl(c.granate,c.maderaClara,72),e=new Le(n.w+14,n.h);return e.pegar(n,0,0),e.rect(n.w-2,30,14,2,c.corteza),e.rect(n.w+2,32,10,10,c.madera),e.rect(n.w+4,34,5,6,c.oro),e.rect(n.w+9,35,1,3,c.oro),e.rect(n.w+4,34,5,1,c.hueso),e.contorno(c.tinta),e}function S0(){const n=new Le(100,86);n.rect(8,40,84,42,c.hueso),n.rect(8,76,84,6,c.niebla),n.poligono([[14,18],[86,18],[96,42],[4,42]],c.azulMarina);for(let e=23;e<42;e+=5)n.linea(6,e,94,e,c.noche);n.rect(4,41,92,2,c.noche);for(const e of[16,34,58,76])n.rect(e,50,9,10,c.noche),n.rect(e+1,51,7,8,c.mar);return n.rect(44,56,12,26,c.azulMarina),n.rect(45,57,10,25,c.noche),n.rect(49,0,2,20,c.piedra),n.rect(51,1,16,10,c.azulMarina),n.rect(57,4,4,4,c.hueso),Qt(n)}function y0(){const n=new Le(90,70);n.rect(2,58,86,10,c.piedra),n.rect(6,54,78,5,c.niebla),n.poligono([[8,20],[45,2],[82,20]],c.niebla),n.rect(6,20,78,6,c.hueso);for(const e of[10,28,56,74])n.rect(e,26,7,28,c.hueso),n.rect(e+5,26,2,28,c.niebla);return n.rect(38,30,14,24,c.tinta),n.px(44,12,c.oro),n.px(45,12,c.oro),Qt(n)}function E0(n){const e=new Le(46,54);e.rect(20,34,6,19,c.corteza),e.rect(21,34,2,19,c.madera),e.elipse(23,21,21,18,c.selva),e.elipse(21,18,17,14,c.hoja),e.elipse(17,13,8,6,c.brote);for(let t=0;t<10;t++)e.pxSobre(6+Math.floor(n()*34),6+Math.floor(n()*26),c.selva);return Qt(e)}function os(n){const e=new Le(44,58),t=n()<.5?1:-1;for(let o=56;o>18;o--){const r=22+Math.round(Math.sin((56-o)/16)*5*t);e.rect(r-2,o,4,1,o%4===0?c.madera:c.maderaClara)}const i=22+Math.round(Math.sin(38/16)*5*t),a=18;for(const[o,r]of[[-20,6],[20,6],[-14,-8],[14,-8],[0,-12],[-8,12],[8,12]])e.poligono([[i,a-1],[i+o,a+r],[i+o*.6,a+r+4]],c.hoja),e.linea(i,a,i+o*.9,a+r*.9,c.brote);return e.rect(i-2,a+1,4,3,c.corteza),Qt(e)}function T0(){const n=new Le(34,52);n.rect(15,42,4,10,c.corteza);for(const[e,t,i]of[[30,16,14],[18,12,14],[6,8,13]])n.poligono([[17-t,e+i],[17,e],[17+t,e+i]],c.selva),n.poligono([[17,e],[17+t,e+i],[19,e+i]],c.hoja),n.poligono([[17-t*.45,e+i*.45],[17,e],[17+t*.45,e+i*.45]],c.hueso);return Qt(n)}function A0(){const n=new Le(20,30);return n.rect(8,2,5,27,c.hoja),n.rect(9,2,1,27,c.brote),n.rect(2,10,4,10,c.hoja),n.rect(2,18,7,3,c.hoja),n.rect(15,6,4,9,c.hoja),n.rect(12,13,7,3,c.hoja),n.px(10,1,c.coral),Qt(n)}function rs(n){const e=new Le(n?30:18,n?20:12);return e.elipse(e.w/2,e.h/2+1,e.w/2-1,e.h/2-1,c.piedra),e.elipse(e.w/2-2,e.h/2-1,e.w/3,e.h/4,c.niebla),Qt(e)}function w0(n){const e=new Le(14,36),t=n?16:30;return e.rect(2,34-t,10,t,c.hueso),e.rect(9,34-t,3,t,c.niebla),e.rect(0,33,14,3,c.piedra),n||e.rect(0,2,14,3,c.niebla),Qt(e)}function C0(){const n=new Le(12,14);return n.rect(1,1,10,12,c.madera),n.rect(1,3,10,1,c.corteza),n.rect(1,10,10,1,c.corteza),n.rect(3,1,2,12,c.maderaClara),Qt(n)}function R0(){const n=new Le(10,38);return n.rect(4,8,2,29,c.tinta),n.rect(2,2,6,7,c.noche),n.rect(3,3,4,5,c.limon),Qt(n)}function P0(n){const e=new Le(46,34);e.poligono([[2,32],[23,2],[44,32]],c.arena);for(let t=0;t<4;t++)e.poligono([[2+t*11,32],[23,2],[7+t*11,32]],n);return e.poligono([[18,32],[23,18],[28,32]],c.corteza),Qt(e)}function L0(){const n=new Le(200,130);n.poligono([[0,128],[70,20],[130,20],[200,128]],c.piedra),n.poligono([[100,20],[130,20],[200,128],[110,128]],c.sombraVioleta),n.elipse(100,22,32,8,c.granate),n.elipse(100,22,24,5,c.naranja),n.elipse(97,21,10,2,c.limon);for(const[e,t]of[[88,-1],[112,1],[100,.3]]){let i=e;for(let a=26;a<120;a++)i+=t*.45+Math.sin(a/7)*.6,n.rect(Math.round(i),a,3,1,a<70?c.naranja:c.rojo)}for(const[e,t,i]of[[96,10,8],[108,4,6],[90,2,5]])n.elipse(e,t,i,i*.8,c.niebla);return Qt(n)}let D0=null;const I0=()=>D0??=pl[0].dibujar(),wa=new Map;function ir(n){const e=wa.get(n.id);if(e)return e;const t=Ba(n.radio),i=t/2,a=Ul(n.id),o=Mn(n.id*15485863+11),r=(S,O)=>Math.hypot(S,O)/(i*a(Math.atan2(O,S))),s=[],l=(S,O,R,D)=>r(S,O)<D&&s.every(F=>Math.hypot(F.x-S,(F.y-O)*1.4)>F.huella+R),u=(S,O,R=.8,D=0,F,A=O*.8)=>{for(let M=0;M<80;M++){let I,ee;if(F){const q=o()*Math.PI*2,U=o()*F[2];I=F[0]+Math.cos(q)*U,ee=F[1]+Math.sin(q)*U*.7}else{const q=o()*Math.PI*2,U=(D+Math.sqrt(o())*(R-D))*i*a(q);I=Math.cos(q)*U,ee=Math.sin(q)*U}if(l(I,ee,O,R)){const q={x:Math.round(I),y:Math.round(ee),sprite:S,sombra:A,huella:O};return s.push(q),q}}return null},h=n.bioma,d=Math.PI*i*i,f=[],p={D:t,objetos:s,sitios:[],caminos:f};if(h!=="flotante"){const S=.5+o()*1.4;let O=0;for(;r(Math.cos(S)*O,Math.sin(S)*O)<.93;)O+=2;const R=Math.cos(S)*O,D=Math.sin(S)*O,F=60+Math.round(o()*30);p.muelle={x:R,y:D,ang:S,largo:F};const A=R+Math.cos(S)*F*.7+22,M=D+Math.sin(S)*F*.7+14;s.push({x:Math.round(A),y:Math.round(M),sprite:I0(),sombra:0,huella:0})}const _={tropical:2+Math.floor(n.radio*1.3),ciudad:4+Math.floor(n.radio*2.6),nevada:1+Math.floor(n.radio*.8),desierto:1+Math.floor(n.radio*.6),volcanica:n.radio>1.4?1:0,ruinas:0,flotante:0}[h],b=p.muelle?[p.muelle.x*.45,p.muelle.y*.45]:[0,0],g=50+_*14,m=[],P=[c.rojo,c.naranja,c.granate,c.madera,c.azulMarina];if(n.especial==="base"){const S=u(S0(),52,.6,0,[b[0],b[1]-30,60]);S&&m.push([S.x,S.y])}if(n.especial==="taberna"){const S=u(M0(),42,.65,0,[...b,g]);S&&m.push([S.x,S.y])}for(let S=0;S<_;S++){const O=h==="desierto"?P0(o()<.5?c.rojo:c.azulMarina):h==="nevada"?cl(c.hueso,c.maderaClara):cl(P[Math.floor(o()*P.length)],h==="ciudad"?c.hueso:c.pergamino),R=u(O,h==="desierto"?28:42,.72,0,[...b,g]);R&&(m.push([R.x,R.y]),o()<.6&&u(C0(),6,.8,0,[R.x+30,R.y+4,10],0))}if(h==="ciudad"||_>=3)for(let S=0;S<2;S++)u(R0(),5,.75,0,[...b,g*.6],0);for(const[S,O]of m)f.push([[S,O+2],[S,O+14],[b[0],b[1]]]);if(p.muelle&&m.length&&f.push([[b[0],b[1]],[p.muelle.x,p.muelle.y]]),h==="volcanica"){const S=Math.round(-b[0]*.5),O=Math.round(-b[1]*.5+50);s.push({x:S,y:O,sprite:L0(),sombra:0,huella:90});for(const R of[40,80])s.push({x:S,y:O-R,sprite:new Le(1,1),sombra:0,huella:90-R*.5});for(let R=0;R<d/18e3;R++)u(rs(o()<.4),10,.88)}if((h==="ruinas"||h==="flotante")&&(u(y0(),46,.45),h==="ruinas"))for(let S=0;S<6+n.radio*3;S++)u(w0(o()<.6),7,.85);if(h==="desierto"){const S=-b[0]*.6,O=-b[1]*.6;p.agua={x:S,y:O,rx:34+n.radio*8,ry:20+n.radio*5},s.push({x:Math.round(S),y:Math.round(O),sprite:new Le(1,1),sombra:0,huella:p.agua.rx});for(let R=0;R<3;R++)u(os(o),9,.9,0,[S,O,p.agua.rx+20]);for(let R=0;R<d/14e3;R++)u(A0(),7,.88);for(let R=0;R<d/2e4;R++)u(rs(!1),8,.88)}const w={tropical:d/5200,ciudad:d/14e3,nevada:d/6e3,desierto:0,volcanica:d/3e4,ruinas:d/6e3,flotante:d/6e3}[h];for(let S=0;S<w;S++){const O=h==="nevada"?T0():h==="tropical"&&o()<.25?os(o):E0(o);u(O,19,h==="tropical"?.88:.86,0)}if(h==="tropical"||h==="ruinas")for(let S=0;S<d/16e3;S++)u(os(o),9,.95,.82);for(let S=0;S<d/3e4;S++)u(rs(!1),8,.92,.75);for(let S=0;S<500&&p.sitios.length<40;S++){const O=S<250,R=o()*Math.PI*2,D=O?Math.sqrt(o())*g:Math.sqrt(o())*i*.8,F=(O?b[0]:0)+Math.cos(R)*D,A=(O?b[1]:0)+Math.sin(R)*D*.8;r(F,A)<.82&&s.every(M=>Math.hypot(M.x-F,(M.y-A)*1.6)>M.huella*.9+8)&&p.sitios.every(([M,I])=>Math.hypot(M-F,I-A)>18)&&p.sitios.push([Math.round(F),Math.round(A)])}return p.sitios.length||p.sitios.push([0,0]),wa.set(n.id,p),wa.size>300&&wa.delete(wa.keys().next().value),p}function U0(n){const e=ir(n),t=e.D/2,i=Math.round(e.D/aa)&-2,a=i/2,o=Ul(n.id),r=new Le(i,i),s=Mn(n.id*31+5),l=n.bioma,u={tropical:[c.arena,c.hoja,c.selva],nevada:[c.niebla,c.hueso,c.espuma],volcanica:[c.sombraVioleta,c.piedra,c.sombraVioleta],desierto:[c.pergamino,c.arena,c.maderaClara],flotante:[c.hueso,c.hoja,c.selva],ciudad:[c.arena,c.hoja,c.selva],ruinas:[c.arena,c.hoja,c.selva]}[l],h=16/t;for(let f=0;f<i;f++)for(let p=0;p<i;p++){const _=p+.5-a,b=f+.5-a,g=Math.hypot(_,b)/(t*o(Math.atan2(b,_)));if(g<1-h){const m=Math.sin(p/23+n.id)*Math.cos(f/19-n.id)>.6&&(p+2*f)%5===0,P=s()<.012;r.px(p,f,m||P?u[2]:u[1]),P&&r.px(p,f-1,u[2])}else g<1?r.px(p,f,g>1-h*.25&&(p+f)%2?Ia[u[0]]:u[0]):l==="flotante"?g<1.15&&(p+f)%2===0&&r.px(p,f,c.hueso):g<1+6/t?r.px(p,f,(p>>1)%2===(f>>1)%2?c.espuma:c.bajio):g<1.22?r.px(p,f,c.bajio):g<1.3&&(p+f)%2&&r.px(p,f,c.bajio)}const d=l==="desierto"?c.maderaClara:l==="nevada"?c.niebla:l==="volcanica"?c.sombraVioleta:c.arena;for(const f of e.caminos)for(let p=0;p+1<f.length;p++){const[_,b]=f[p],[g,m]=f[p+1],P=Math.ceil(Math.hypot(g-_,m-b));for(let w=0;w<=P;w++){const S=a+_+(g-_)*(w/P),O=a+b+(m-b)*(w/P);r.elipse(S,O,4.5,3.5,d)}}if(e.agua){const f=e.agua;r.elipse(a+f.x,a+f.y,f.rx+3,f.ry+3,c.arena),r.elipse(a+f.x,a+f.y,f.rx,f.ry,c.mar),r.elipse(a+f.x-f.rx*.2,a+f.y-f.ry*.25,f.rx*.45,f.ry*.35,c.bajio)}if(e.muelle){const f=e.muelle;for(let p=-6;p<f.largo;p++){const _=a+f.x+Math.cos(f.ang)*p,b=a+f.y+Math.sin(f.ang)*p;r.elipse(_,b,5,5,p%6===0?c.corteza:c.madera)}}return r}const aa=.74;function Ul(n){const e=Mn(n*104729+3),t=[2,3,4,6].map(i=>({k:i,a:e()*.16/(i/2),f:e()*Math.PI*2}));return i=>1+t.reduce((a,o)=>a+o.a*Math.sin(o.k*i+o.f),0)}const N0={tropical:[c.arena,c.hoja,c.selva],nevada:[c.niebla,c.hueso,c.espuma],volcanica:[c.sombraVioleta,c.piedra,c.sombraVioleta],desierto:[c.pergamino,c.arena,c.maderaClara],flotante:[c.hueso,c.hoja,c.selva],ciudad:[c.arena,c.hoja,c.selva],ruinas:[c.arena,c.hoja,c.selva]};function F0(n,e){const t=new Le(e,e),i=Ul(n.id),a=e/2,o=e/2*aa,[r,s,l]=N0[n.bioma],u=Math.max(.06,1.6/o),h=Mn(n.id*7+e);for(let d=0;d<e;d++)for(let f=0;f<e;f++){const p=f+.5-a,_=d+.5-a,b=Math.hypot(p,_)/(o*i(Math.atan2(_,p)));b<1-u?t.px(f,d,h()<.05?l:s):b<1?t.px(f,d,r):n.bioma==="flotante"?b<1.2&&(f+d)%2===0&&t.px(f,d,c.hueso):b<1+2/o+.04?t.px(f,d,(f+d)%2?c.espuma:c.bajio):b<1.22?t.px(f,d,c.bajio):b<1.3&&(f+d)%2&&t.px(f,d,c.bajio)}return t}const pu=new WeakMap;function Nl(n){let e=pu.get(n);return e||(e=document.createElement("canvas"),e.width=n.w,e.height=n.h,e.getContext("2d").putImageData(new ImageData(n.aRGBA(),n.w,n.h),0,0),pu.set(n,e)),e}const Ca=new Map;function O0(n,e){const t=Math.min(256,Math.max(16,2**Math.ceil(Math.log2(Math.max(16,e))))),i=`${n.id}:${t}`;let a=Ca.get(i);if(a)return a;const o=F0(n,t);a=document.createElement("canvas"),a.width=t,a.height=t;const r=a.getContext("2d");if(r.putImageData(new ImageData(o.aRGBA(),t,t),0,0),t>=32){const s=ir(n),l=t*aa/s.D;if(r.imageSmoothingEnabled=!1,s.muelle){const u=s.muelle;r.strokeStyle="#7a4a2e",r.lineWidth=Math.max(1,8*l),r.beginPath(),r.moveTo(t/2+u.x*l,t/2+u.y*l),r.lineTo(t/2+(u.x+Math.cos(u.ang)*u.largo)*l,t/2+(u.y+Math.sin(u.ang)*u.largo)*l),r.stroke()}s.agua&&(r.fillStyle="#2f8ac0",r.beginPath(),r.ellipse(t/2+s.agua.x*l,t/2+s.agua.y*l,s.agua.rx*l,s.agua.ry*l,0,0,Math.PI*2),r.fill());for(const u of[...s.objetos].sort((h,d)=>h.y-d.y)){if(u.sprite.w<2)continue;const h=Math.max(1,Math.round(u.sprite.w*l)),d=Math.max(1,Math.round(u.sprite.h*l));r.drawImage(Nl(u.sprite),Math.round(t/2+u.x*l-h/2),Math.round(t/2+u.y*l-d),h,d)}}return Ca.set(i,a),Ca.size>400&&Ca.delete(Ca.keys().next().value),a}const B0=.42,Ra=new Map;function z0(n){let e=Ra.get(n.id);return e||(e=Nl(U0(n)),Ra.set(n.id,e),Ra.size>10&&Ra.delete(Ra.keys().next().value)),e}const ai=n=>((n+180)%360+360)%360-180,$0=gn.map(n=>Zd(n.hex)),H0={pirata:"#e88ba0",marine:"#5cc3d8",revolucionario:"#8cc85a"};function Pa(n){const e=document.createElement("canvas");return e.width=n.w,e.height=n.h,e.getContext("2d").putImageData(new ImageData(n.aRGBA(),n.w,n.h),0,0),e}const k0=(n,e)=>{let t=n*374761393+e*668265263|0;return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function V0(n,e,t){const i=document.createElement("canvas");i.className="mapa-lienzo";const a=document.createElement("div");a.className="mapa-etiquetas",n.append(i,a);const o=i.getContext("2d"),r=window.innerWidth<700?2:3;let s=0,l=0,u=0,h=0,d=10,f=6;const p=420;let _=null,b="",g=!1;const m=Object.fromEntries(pl.map(N=>{const T=N.dibujar();return[N.id,{der:Pa(T),izq:Pa(T.voltear())}]})),P=new Map,w=(N,T)=>{const ce=N+JSON.stringify(T);let te=P.get(ce);if(!te){const re=Lu(N,T);te={der:Pa(re),izq:Pa(re.voltear())},P.set(ce,te)}return te},S=new Map,O=(N,T=!1)=>{const ce=`${N.id}:${T?"i":"d"}:${JSON.stringify(N.aspecto).length}`;let te=S.get(ce);if(!te){const re=Pn(N.aspecto);te=Pa(T?re.voltear():re),S.set(ce,te)}return te};function R(){s=Math.ceil(n.clientWidth/r),l=Math.ceil(n.clientHeight/r),i.width=s,i.height=l,f=Math.max(3,s/55),b=""}window.addEventListener("resize",R);const D=()=>Math.cos(u*Math.PI/180),F=(N,T)=>[s/2+ai(T-h)*D()*d,l/2-(N-u)*d],A=(N,T)=>[u-(T-l/2)/d,ai(h+(N-s/2)/(d*D()))];function M(){const N=o.createImageData(s,l),T=N.data,ce=D();for(let te=0;te<l;te++){const re=u-(te-l/2)/d,L=Math.abs(re);for(let V=0;V<s;V++){const ae=h+(V-s/2)/(d*ce),x=ae*ce*d,v=re*d,C=Math.floor(x/7),$=Math.floor(v/7),W=Math.floor(x-C*7),G=Math.floor(v-$*7),ge=k0(C,$);let fe=c.marHondo;Math.sin(re*.21+1.3)*Math.sin(ae*.17)+Math.sin(re*.5+ae*.3)*.3<-.75&&(V+te)%2&&(fe=c.abismo),ge<.14&&G===3&&W>=1&&W<=3+Math.floor(ge*20)?fe=c.mar:ge>.93&&G===3&&(W===2||W===3)&&(fe=c.bajio),L<ka?Math.sin(re*1.3+Math.sin(ae*.09)*3)>.95&&(V+te)%2&&(fe=c.mar):L<Jo&&(fe=ge<.2&&G===3&&W>=1&&W<=4?c.espuma:c.bajio,(L<ka+.4||L>Jo-.4)&&(fe=(V+te)%2?c.bajio:c.espuma)),L>79&&(fe=ge<.5?c.hueso:c.espuma);const Ne=Pu(ae,re),se=Ru+Math.sin(re*.7)*.6;if(Ne<se){const Xe=Ne/se;fe=Xe<.25?ge<.6?c.hueso:c.niebla:Xe<.7?ge<.15?c.selva:ge>.9?c.sombraVioleta:c.piedra:ge<.4?c.hoja:c.sombraVioleta,Xe>.93&&(fe=c.tinta)}else Ne<se+.25&&(fe=(V+te)%2?c.bajio:c.espuma);const[be,Pe,Be]=$0[fe-1],Ce=(te*s+V)*4;T[Ce]=be,T[Ce+1]=Pe,T[Ce+2]=Be,T[Ce+3]=255}}_=N}const I=new Map;let ee=new Set;function q(N,T,ce,te,re){let L=I.get(N);L||(L=document.createElement("div"),I.set(N,L),a.append(L)),L.dataset.html!==T&&(L.innerHTML=T,L.dataset.html=T),L.className=`mapa-etq ${re}`,L.style.transform=`translate(${Math.round(ce*r)}px, ${Math.round(te*r)}px) translate(-50%, -50%)`,ee.add(N)}let U=[],Y=[];const j=new WeakMap;function J(N){let T=j.get(N);return T||(T=N.map(([ce,te],re)=>N.map((L,V)=>[V,Math.hypot(L[0]-ce,L[1]-te)]).filter(([L])=>L!==re).sort((L,V)=>L[1]-V[1]).slice(0,4).map(([L])=>L)),j.set(N,T)),T}const Q=(N,T)=>{let ce=N*374761393+T*668265263|0;return ce=Math.imul(ce^ce>>>13,1274126177),(ce^ce>>>16)>>>0};function _e(N,T,ce=Date.now()){const te=ir(T).sitios;let re=0;for(const se of N.id)re=re*31+se.charCodeAt(0)>>>0;const L=te.length;if(L<2)return[te[0][0],te[0][1],!1,!1];if(N.quieto){const se=te[N.esMio?0:1+re%(L-1)];return[se[0],se[1],!1,!1]}const V=J(te),ae=9e3,x=(ce+re%ae)/ae,v=Math.floor(x),C=x-v,$=Math.floor(v/40);let W=(re+$*7919)%L;for(let se=$*40;se<v;se++)W=V[W][Q(re,se)%V[W].length];const G=V[W][Q(re,v)%V[W].length],[ge,fe]=te[W],[me,Ne]=te[G];if(C<.6){const se=C/.6,be=se*se*(3-2*se);return[ge+(me-ge)*be,fe+(Ne-fe)*be,me<ge,!0]}return[me,Ne,me<ge,!1]}const ye=N=>2*N.radio*d/Ba(N.radio);function Re(N){const T=`${s}x${l}:${u.toFixed(4)}:${h.toFixed(4)}:${d.toFixed(3)}`;T!==b&&(M(),b=T),o.putImageData(_,0,0),o.imageSmoothingEnabled=!1,ee=new Set,Y=[],U=[];const ce=[],te=[],re=new Map;for(const x of e){const[v,C]=F(x.lat,x.lon),$=2*x.radio/aa*d;if(v+$<0||v-$>s||C+$<0||C-$>l)continue;if($<3){o.fillStyle=gn[c.arena-1].hex,o.fillRect(Math.round(v),Math.round(C),1,1);continue}const W=ye(x),G=Math.round($);if(W>=B0){const ge=z0(x),fe=Math.round(ge.width*W);o.drawImage(ge,Math.round(v-fe/2),Math.round(C-fe/2),fe,fe),re.set(x.id,{x:v,y:C,s:W});for(const me of ir(x).objetos){if(me.sprite.w<2)continue;const Ne=Nl(me.sprite),se=v+me.x*W,be=C+me.y*W,Pe=Math.round(Ne.width*W),Be=Math.round(Ne.height*W);se+Pe<0||se-Pe>s||be-Be>l||be+10<0||(me.sombra&&te.push([se,be,me.sombra*W]),ce.push({y:be,pintar:()=>o.drawImage(Ne,Math.round(se-Pe/2),Math.round(be-Be+2*W),Pe,Be)}))}}else o.drawImage(O0(x,$),Math.round(v-G/2),Math.round(C-G/2),G,G);if(Y.push({isla:x,x:v,y:C,r:G/2*aa}),G*r>90){const ge=x.especial==="base"?"<small>Base de la marina</small>":x.especial==="taberna"?"<small>Taberna</small>":x.especial==="maestro"?"<small>Maestro</small>":"",fe=Math.max(14,C-G/2*aa-6);q(`i${x.id}`,`${x.nombre}${G*r>260?ge:""}`,v,fe,"etq-isla")}}if(d<f*3)for(const x of Object.values(wt)){if(!x.etiqueta)continue;const[v,C]=F(x.etiqueta.lat,x.etiqueta.lon);v>-50&&v<s+50&&C>-20&&C<l+20&&q(`z${x.id}`,x.nombre,v,C,`etq-zona etq-${x.id}`)}const L=Math.min(2,Math.max(.34,d/230)),V=t.marcadores();let ae=null;for(const x of V){const v=x.posicion;let[C,$]=F(v.lat,v.lon);const W=v.islaId!==void 0&&!v.navegando?e[v.islaId]:null,G=W?re.get(W.id):void 0;let ge=!1,fe=!1;if(W){const[me,Ne,se,be]=_e(x,W);ge=se,fe=be;const Pe=G?G.s:2*W.radio*d/Ba(W.radio);C+=me*Pe,$+=Ne*Pe}if(!(C<-60||C>s+60||$<-60||$>l+80)){if(v.navegando){const me=x.navio?w(x.barco,x.navio):m[x.barco],Ne=v.rumbo>0?me.der:me.izq,se=Math.max(6,Math.round(Ne.width*L)),be=Math.max(4,Math.round(Ne.height*L)),Pe=Math.round(Math.sin(N/400+C)*L);ce.push({y:$,pintar:()=>{o.drawImage(Ne,Math.round(C-se/2),Math.round($-be+2+Pe),se,be),o.fillStyle=gn[c.espuma-1].hex;for(let Be=1;Be<=3;Be++)o.fillRect(Math.round(C-v.rumbo*(se/2+Be*3*L)),Math.round($+1),Math.max(1,Math.round(2*L)),1)}}),U.push({m:x,x:C,y:$-be/2,r:Math.max(6,se/2)}),x.esMio&&(ae={x:C,y:$,alto:be})}else if(G){const me=G.s,Ne=O(x,ge),se=Math.round(32*me),be=fe?-Math.round(Math.abs(Math.sin(N/110))*1.5*me):x.actividad==="Entrenando"?-Math.round(Math.abs(Math.sin(N/90))*2*me):Math.round(Math.sin(N/600+C*.1)*.6*me);te.push([C,$,7*me]),ce.push({y:$,pintar:()=>o.drawImage(Ne,Math.round(C-se/2),Math.round($-se+2*me+be),se,se)}),U.push({m:x,x:C,y:$-se/2,r:Math.max(8,se/2.5)}),x.esMio&&(ae={x:C,y:$,alto:se})}else ce.push({y:$,pintar:()=>{o.fillStyle="#1a1423",o.fillRect(Math.round(C)-2,Math.round($)-2,4,4),o.fillStyle=x.esMio?"#f2b63d":H0[x.bando],o.fillRect(Math.round(C)-1,Math.round($)-1,2,2)}}),U.push({m:x,x:C,y:$,r:5}),x.esMio&&(ae={x:C,y:$,alto:4});x.id===ze&&(qe={x:C,y:$-16}),x.esMio&&ae&&q("yo",`<span class="pin-yo">Tú · ${x.nombre}${x.actividad?` · ${x.actividad}`:""}</span>`,ae.x,ae.y-ae.alto-6,"etq-yo")}}o.fillStyle="rgba(18, 20, 40, 0.28)";for(const[x,v,C]of te)o.beginPath(),o.ellipse(x,v,C,C*.35,0,0,Math.PI*2),o.fill();ce.sort((x,v)=>x.y-v.y);for(const x of ce)x.pintar();for(const[x,v]of I)ee.has(x)||(v.remove(),I.delete(x));if(ze&&qe){const x=qe.x-s/2,v=qe.y-l/2;Math.abs(x)+Math.abs(v)>.5&&(h=ai(h+x*.12/(d*D())),u-=v*.12/d)}}let ze=null,qe=null;function de(){g&&(Re(performance.now()),requestAnimationFrame(de))}const y=new Map;let X=0,Z=0;const B=()=>{u=Math.max(-82,Math.min(82,u)),h=ai(h)};function he(N,T,ce){const[te,re]=A(T,ce);d=Math.min(p,d*N);const[V,ae]=A(T,ce);u+=te-V,h+=ai(re-ae),B(),d<f*.8&&(g=!1,t.alAlejar(u,h))}i.addEventListener("pointerdown",N=>{if(i.setPointerCapture(N.pointerId),y.set(N.pointerId,{x:N.clientX,y:N.clientY}),Z=0,y.size===2){const[T,ce]=[...y.values()];X=Math.hypot(T.x-ce.x,T.y-ce.y)}}),i.addEventListener("pointermove",N=>{const T=y.get(N.pointerId);if(!T)return;const ce={x:N.clientX,y:N.clientY};if(y.set(N.pointerId,ce),y.size===1){const te=(ce.x-T.x)/r,re=(ce.y-T.y)/r;Z+=Math.abs(te)+Math.abs(re),u+=re/d,h-=te/(d*D()),Z>4&&(ze=null),B()}else if(y.size===2){const[te,re]=[...y.values()],L=Math.hypot(te.x-re.x,te.y-re.y);if(X>0){const V=i.getBoundingClientRect();he(L/X,((te.x+re.x)/2-V.left)/r,((te.y+re.y)/2-V.top)/r)}X=L,Z+=10}});const le=N=>{const T=y.has(N.pointerId);if(y.delete(N.pointerId),y.size<2&&(X=0),T&&y.size===0&&Z<6){const ce=i.getBoundingClientRect(),te=(N.clientX-ce.left)/r,re=(N.clientY-ce.top)/r,L=U.filter(ae=>Math.hypot(ae.x-te,ae.y-re)<ae.r+4).sort((ae,x)=>Number(x.m.esMio)-Number(ae.m.esMio))[0],V=Y.find(ae=>Math.hypot(ae.x-te,ae.y-re)<ae.r);t.alTocar(L?.m??null,L?null:V?.isla??null)}};i.addEventListener("pointerup",le),i.addEventListener("pointercancel",le);let ue=0;i.addEventListener("wheel",N=>{if(N.preventDefault(),performance.now()-ue<500)return;const T=i.getBoundingClientRect(),ce=Math.min(1.25,Math.max(.8,Math.exp(-N.deltaY*.0015)));he(ce,(N.clientX-T.left)/r,(N.clientY-T.top)/r)},{passive:!1});const xe={visible:!1,mostrar(N,T,ce){R(),u=N,h=T,d=ce??f*1.4,B(),n.classList.add("activo"),xe.visible=!0,ue=performance.now(),g||(g=!0,de())},ocultar(){g=!1,xe.visible=!1,n.classList.remove("activo")},centrarEn(N,T,ce){const te={lat:u,lon:h,k:d},re={lat:N,lon:T,k:ce??d},L=ai(re.lon-te.lon),V=performance.now(),ae=700,x=v=>{const C=Math.min(1,(v-V)/ae),$=C*C*(3-2*C);u=te.lat+(re.lat-te.lat)*$,h=ai(te.lon+L*$),d=Math.exp(Math.log(te.k)+(Math.log(re.k)-Math.log(te.k))*$),C<1&&g&&requestAnimationFrame(x)};requestAnimationFrame(x)},zoomIsla(N){return R(),Math.min(p,Ba(N.radio)/(2*N.radio))},seguir(N){ze=N,qe=null},posicionDe(N){const T=N.posicion;if(T.navegando||T.islaId===void 0)return{lat:T.lat,lon:T.lon};const ce=e[T.islaId],[te,re]=_e(N,ce),L=2*ce.radio/Ba(ce.radio);return{lat:ce.lat-re*L,lon:ai(ce.lon+te*L/Math.cos(ce.lat*Math.PI/180))}}};return xe}function yd(n){for(let e=0;e<n.h;e++)for(let t=10;t<=13;t++)if(n.get(t,e))return e;return 6}function Ed(n,e){const t=(a,o)=>{const r=n.get(a,o);r&&r!==c.tinta&&r!==c.corteza&&n.px(a,o,Tu[r])},i=e+11;for(let a=e+2;a<i;a++)t(12+Math.round(Math.sin(a*.6)*.6),a);for(let a=0;a<4;a++)t(11-a,e+4+a),t(13+a,e+6+a)}function Td(n,e,t=12){const i=Math.max(3,e),a=t-12;for(let o=i-1;o>=i-3;o--)n.px(12+a,o,c.corteza);n.px(13+a,i-4,c.corteza),n.px(14+a,i-4,c.corteza),n.px(14+a,i-3,c.corteza),n.rect(8+a,i-3,4,1,c.hoja),n.rect(9+a,i-4,3,1,c.hoja),n.px(9+a,i-4,c.brote),n.px(10+a,i-4,c.brote),n.px(13+a,i-2,c.hoja),n.px(14+a,i-2,c.hoja),n.px(15+a,i-2,c.brote)}function G0(n,e){for(let t=0;t<n.h;t++)for(let i=e-1;i<=e+1;i++)if(n.get(i,t))return t;return 6}function Ad(n){for(const[e,t]of[[3,5],[20,18]])if(!n.get(e,t)){n.px(e,t,c.limon);for(const[i,a]of[[1,0],[-1,0],[0,1],[0,-1]])n.get(e+i,t+a)||n.px(e+i,t+a,c.hueso)}}function Ze(n,e=[],t=!0){const i=yd(n);if(n.volumen({excluir:[c.tinta,c.corteza,...e]}),Ed(n,i),t!==!1){const a=typeof t=="number"?t:12;Td(n,typeof t=="number"?G0(n,a):i,a)}n.contorno(c.tinta),Ad(n)}const j0={muelle(){const n=new Le(24,24),e=[[12,7,5],[11,10,6],[13,13,7],[11,16,7],[12,19,5]];return e.forEach(([t,i,a],o)=>{n.elipse(t,i,a,2.2,o%2?c.hoja:c.brote)}),e.forEach(([t,i,a])=>{n.linea(t-a+1,i+1,t+a-2,i+1,c.selva)}),n.px(9,6,c.limon),n.px(8,9,c.limon),Ze(n,[c.selva,c.limon]),n},espejo(){const n=new Le(24,24);return n.poligono([[12,4],[19,9],[19,16],[12,21],[5,16],[5,9]],c.lila),n.poligono([[12,4],[19,9],[12,12]],c.hueso),n.poligono([[5,9],[12,4],[12,12]],c.espuma),n.poligono([[12,12],[19,16],[12,21]],c.violeta),n.poligono([[5,16],[12,12],[12,21]],c.lila),n.linea(5,9,19,16,c.violeta),n.linea(19,9,5,16,c.lila),n.px(8,8,c.hueso),n.px(9,7,c.hueso),n.px(7,9,c.hueso),Ze(n,[c.hueso,c.espuma,c.violeta,c.lila]),n},eco(){const n=new Le(24,24);n.poligono([[8,6],[16,6],[18,12],[21,19],[3,19],[6,12]],c.oro),n.elipse(12,6,4,2,c.oro);for(const e of[10,14,17])n.linea(5+(e-10)*.3,e,19-(e-10)*.3,e,c.naranja);return n.rect(4,19,16,2,c.naranja),n.rect(11,21,2,1,c.granate),n.px(8,8,c.limon),n.px(7,11,c.limon),Ze(n,[c.limon]),n},raiz(){const n=new Le(24,24);n.elipse(12,12,5,7,c.maderaClara);for(const[e,t]of[[10,9],[14,12],[10,15],[13,7]])n.px(e,t,c.madera);return n.linea(10,18,7,22,c.madera),n.linea(12,19,12,23,c.madera),n.linea(14,18,17,21,c.madera),n.px(18,22,c.madera),n.linea(8,16,4,18,c.madera),n.rect(11,3,2,3,c.hoja),n.px(10,2,c.brote),n.px(9,2,c.brote),n.px(13,2,c.brote),n.px(14,1,c.brote),Ze(n,[c.madera],!1),n},jaguar(){const n=new Le(24,24);n.elipse(12,13,8,7.5,c.naranja),n.poligono([[6,8],[7,3],[10,7]],c.hoja),n.poligono([[14,7],[17,3],[18,8]],c.hoja);for(const[e,t]of[[8,11],[14,10],[11,15],[16,15],[7,16],[12,19]])n.px(e,t,c.corteza),n.px(e+1,t,c.corteza),n.px(e,t+1,c.corteza),n.px(e+2,t+1,c.corteza),n.px(e+1,t+2,c.corteza),n.px(e+1,t+1,c.oro);return n.px(9,8,c.limon),n.px(8,9,c.limon),Ze(n,[c.limon,c.oro]),n},pulpo(){const n=new Le(24,24);n.elipse(12,9,7,6,c.violeta);for(const e of[6,10,14,18])for(let t=0;t<9;t++){const i=e+Math.round(Math.sin(t*.9+e)*1.2)-(e>12?1:0);n.rect(i-1+(t>5?1:0),13+t,t>5?1:2,1,c.violeta),t%3===1&&n.px(i,13+t,c.coral)}return n.px(9,7,c.lila),n.px(10,6,c.lila),n.px(15,8,c.coral),n.px(9,11,c.coral),Ze(n,[c.coral,c.lila]),n},halcon(){const n=new Le(24,24);n.elipse(12,15,6,6,c.niebla),n.poligono([[8,12],[12,4],[16,12]],c.niebla);for(const e of[9,12,15,18])for(let t=7;t<18;t++)(t+e)%4===0&&n.pxSobre(t,e,c.piedra);return n.poligono([[5,6],[11,5],[8,8]],c.hoja),n.poligono([[13,5],[20,4],[16,8]],c.hoja),n.px(10,10,c.hueso),n.px(9,12,c.hueso),n.px(11,21,c.oro),n.px(12,21,c.oro),Ze(n,[c.piedra,c.hueso]),n},ceniza(){const n=new Le(24,24);n.elipse(12,14,7.5,7,c.piedra);const e=[[12,8,10,13],[10,13,13,17],[13,17,11,20],[10,13,6,14],[13,17,17,16],[17,16,18,12]];for(const[t,i,a,o]of e)n.linea(t,i,a,o,c.naranja);return n.px(10,13,c.limon),n.px(13,17,c.limon),n.px(12,15,c.oro),n.px(8,10,c.niebla),n.px(9,9,c.niebla),Ze(n,[c.naranja,c.limon,c.oro]),n.px(18,6,c.niebla),n.px(19,5,c.niebla),n.px(19,4,c.niebla),n.px(18,3,c.niebla),n},niebla(){const n=new Le(24,24);n.elipse(12,13,6,6,c.espuma),n.elipse(11,12,4,4,c.hueso),n.px(10,10,c.hueso);const e=yd(n);n.volumen({luz:!1,excluir:[c.hueso]}),Ed(n,e),Td(n,e),n.contorno(c.bajio);for(let t=4;t<23;t++)for(let i=3;i<22;i++){const a=Math.hypot(i-12,t-13);a>7&&a<10&&(i*3+t*5)%7===0&&n.px(i,t,c.bajio)}return n.linea(3,9,7,8,c.espuma),n.linea(17,18,21,17,c.espuma),n.linea(16,5,19,6,c.espuma),Ad(n),n},ambar(){const n=new Le(24,24);return n.elipse(12,15,6.5,6.5,c.oro),n.poligono([[7,12],[12,3],[17,12]],c.oro),n.elipse(13,16,4,4,c.naranja),n.rect(12,15,2,3,c.tinta),n.px(11,14,c.tinta),n.px(14,14,c.tinta),n.px(11,17,c.corteza),n.px(14,17,c.corteza),n.px(12,14,c.granate),n.px(9,10,c.hueso),n.px(9,11,c.limon),n.px(8,13,c.limon),Ze(n,[c.hueso,c.naranja]),n},brujula(){const n=new Le(24,24);n.elipse(12,13,8,8,c.oro),n.elipse(12,13,6,6,c.pergamino),n.poligono([[12,6],[14,13],[10,13]],c.rojo),n.poligono([[12,20],[14,13],[10,13]],c.azulMarina);for(const[e,t]of[[6,13],[18,13],[12,7],[12,19]])n.pxSobre(e,t,c.madera);return n.px(12,13,c.hueso),n.px(8,9,c.hueso),Ze(n,[c.rojo,c.azulMarina,c.hueso,c.pergamino]),n},vela(){const n=new Le(24,24);n.poligono([[7,6],[17,6],[20,13],[17,20],[7,20],[9,13]],c.pergamino);for(const e of[9,13,17])n.linea(8+(e===13?1:0),e,18+(e===13?1:0),e,c.arena);return n.linea(7,6,7,20,c.madera),n.px(16,8,c.hueso),n.px(17,9,c.hueso),Ze(n,[c.madera,c.hueso]),n},coral(){const n=new Le(24,24);n.elipse(12,15,6.5,6,c.coral);for(const[e,t,i,a]of[[8,11,5,6],[12,9,12,5],[16,11,19,6],[6,8,4,8],[18,8,20,9]])n.linea(e,t,i,a,c.coral);for(const[e,t]of[[9,14],[14,13],[11,18],[16,17],[8,17]])n.px(e,t,c.magenta);return n.px(9,12,c.hueso),Ze(n,[c.magenta,c.hueso]),n},nudo(){const n=new Le(24,24);n.elipse(9,12,5,5,c.maderaClara),n.elipse(15,14,5,5,c.maderaClara),n.elipse(9,12,2.5,2.5,c.T),n.elipse(15,14,2.5,2.5,c.T);for(let e=0;e<24;e+=2)for(let t=0;t<24;t++)n.get(e,t)===c.maderaClara&&(e+t)%4===0&&n.px(e,t,c.madera);return n.linea(12,18,10,22,c.maderaClara),n.linea(13,18,15,22,c.maderaClara),Ze(n,[c.madera]),n},lija(){const n=new Le(24,24);n.rect(6,7,12,13,c.arena),n.rect(7,6,10,15,c.arena);for(let e=7;e<20;e++)for(let t=7;t<18;t++)(t*7+e*13)%5===0&&n.px(t,e,c.madera);return n.px(8,8,c.pergamino),n.px(9,8,c.pergamino),Ze(n,[c.madera,c.pergamino]),n},esponja(){const n=new Le(24,24);n.elipse(12,14,7.5,6.5,c.limon),n.rect(6,10,12,9,c.limon);for(const[e,t,i]of[[9,12,1],[14,11,1.4],[11,16,1.2],[16,16,1],[7,16,.8],[13,19,.8]])n.elipse(e,t,i,i,c.oro);return n.px(8,10,c.hueso),Ze(n,[c.oro,c.hueso]),n},pendulo(){const n=new Le(24,24);n.elipse(12,15,6,6,c.oro),n.poligono([[8,12],[12,6],[16,12]],c.oro),n.linea(6,14,18,14,c.naranja),n.linea(7,17,17,17,c.naranja),n.px(12,21,c.naranja),n.px(9,11,c.limon),n.px(9,12,c.limon),Ze(n,[c.naranja,c.limon]);for(const[e,t]of[[3,15],[4,18],[20,15],[19,18]])n.px(e,t,c.arena);return n},escama(){const n=new Le(24,24);n.elipse(12,13,7,7.5,c.bajio);for(let e=0;e<5;e++){const t=8+e*3;for(let i=6+e%2*2;i<19;i+=4)n.get(i,t)===c.bajio&&(n.pxSobre(i-1,t,c.marHondo),n.pxSobre(i,t+1,c.marHondo),n.pxSobre(i+1,t+1,c.marHondo),n.pxSobre(i+2,t,c.marHondo),n.pxSobre(i,t,c.espuma))}return Ze(n,[c.marHondo,c.espuma]),n},anzuelo(){const n=new Le(24,24);n.elipse(15,6,2.6,2.6,c.niebla),n.px(15,6,c.T),n.rect(14,8,3,9,c.niebla);for(let e=0;e<=22;e++){const t=e/22*Math.PI*1.15,i=10.5+Math.cos(t)*5,a=16.5+Math.sin(t)*4.5;n.rect(Math.round(i)-1,Math.round(a)-1,3,3,c.niebla)}return n.poligono([[5,10],[8,15],[5,15]],c.niebla),n.px(15,10,c.hueso),n.px(15,11,c.hueso),n.px(12,20,c.hueso),Ze(n,[c.hueso],15),n},tiburon(){const n=new Le(24,24);n.rect(3,9,18,4,c.piedra),n.elipse(12,15,5,6,c.piedra),n.poligono([[11,9],[14,4],[15,9]],c.piedra),n.rect(9,16,6,3,c.niebla),n.px(4,10,c.tinta),n.px(19,10,c.tinta);for(const e of[9,11,13])n.px(e,19,c.hueso);return Ze(n,[c.niebla,c.hueso]),n},manta(){const n=new Le(24,24);n.poligono([[2,13],[12,7],[22,13],[12,17]],c.marHondo),n.elipse(12,12,3,3,c.marHondo);for(const[e,t]of[[8,12],[16,12],[12,14]])n.px(e,t,c.mar);return n.linea(12,17,13,23,c.marHondo),n.px(10,10,c.bajio),n.px(14,10,c.bajio),Ze(n,[c.mar,c.bajio]),n},tortuga(){const n=new Le(24,24);n.elipse(12,14,8,6.5,c.selva),n.rect(4,14,16,4,c.selva);for(const[e,t]of[[12,11],[8,14],[16,14],[12,16]])n.poligono([[e-2,t],[e-1,t-2],[e+1,t-2],[e+2,t],[e+1,t+2],[e-1,t+2]],c.hoja);return n.rect(5,18,14,2,c.arena),n.px(9,10,c.brote),Ze(n,[c.hoja,c.arena,c.brote]),n},rinoceronte(){const n=new Le(24,24);n.elipse(12,15,7.5,6,c.piedra),n.poligono([[15,12],[21,6],[18,13]],c.hueso),n.poligono([[13,11],[16,8],[16,12]],c.niebla);for(const e of[14,17])n.linea(6,e,17,e+1,c.sombraVioleta);return n.px(16,14,c.tinta),Ze(n,[c.hueso,c.niebla,c.sombraVioleta]),n},escorpion(){const n=new Le(24,24);n.elipse(12,16,5.5,4.5,c.oro);for(const t of[14,17])n.linea(7,t,17,t,c.naranja);const e=[[16,13],[18,11],[19,8],[18,5],[16,4]];for(const[t,i]of e)n.elipse(t,i,1.4,1.4,c.oro);return n.poligono([[15,3],[13,5],[16,5]],c.magenta),n.poligono([[3,14],[7,13],[6,16]],c.oro),n.poligono([[3,18],[7,17],[6,19]],c.oro),Ze(n,[c.naranja,c.magenta],10),n},cangrejo(){const n=new Le(24,24);n.elipse(12,15,7,5,c.rojo),n.elipse(4,10,2.5,2.5,c.rojo),n.elipse(20,10,2.5,2.5,c.rojo),n.px(4,9,c.T),n.px(20,9,c.T),n.linea(6,13,5,12,c.rojo),n.linea(18,13,19,12,c.rojo);for(const e of[7,10,14,17])n.linea(e,19,e-(e<12?1:-1),21,c.granate);return n.px(10,11,c.hueso),n.px(14,11,c.hueso),n.px(10,12,c.tinta),n.px(14,12,c.tinta),Ze(n,[c.granate,c.hueso]),n},camaleon(){const n=new Le(24,24);n.elipse(12,13,7,6.5,c.hoja);for(let e=7;e<20;e++)for(let t=5;t<20;t++)n.get(t,e)===c.hoja&&(t+e)%6<2&&n.px(t,e,(t+e)%12<6?c.brote:c.selva);return n.elipse(15,20,2.5,2.5,c.hoja),n.elipse(15,20,1,1,c.T),n.elipse(8,11,1.6,1.6,c.limon),n.px(8,11,c.tinta),Ze(n,[c.brote,c.selva,c.limon]),n},puercoespin(){const n=new Le(24,24);n.elipse(12,14,6,5.5,c.corteza);for(let e=0;e<14;e++){const t=e/14*Math.PI*2;n.linea(Math.round(12+Math.cos(t)*5),Math.round(14+Math.sin(t)*4.5),Math.round(12+Math.cos(t)*9),Math.round(14+Math.sin(t)*8),e%2?c.pergamino:c.madera)}return n.px(10,12,c.madera),Ze(n,[c.pergamino,c.madera]),n},gorila(){const n=new Le(24,24);n.elipse(12,14,7.5,7,c.noche),n.elipse(12,15,4,4,c.piedra),n.rect(10,13,1,2,c.tinta),n.rect(14,13,1,2,c.tinta);for(const[e,t]of[[6,9],[17,9],[5,14],[19,14],[8,20],[16,20]])n.px(e,t,c.sombraVioleta);return n.px(9,9,c.niebla),Ze(n,[c.piedra,c.sombraVioleta,c.niebla]),n},marea(){const n=new Le(24,24);n.elipse(12,13,7.5,7.5,c.mar);for(let e=5;e<20;e++){const t=12+Math.round(Math.sin(e*.8)*1.2);n.pxSobre(e,t,c.espuma),n.pxSobre(e,t+1,c.bajio);const i=16+Math.round(Math.sin(e*.8+2)*1.2);n.pxSobre(e,i,c.bajio)}return n.elipse(12,18,5,2,c.marHondo),n.px(8,8,c.hueso),n.px(9,7,c.hueso),Ze(n,[c.espuma,c.bajio,c.marHondo,c.hueso]),n},viento(){const n=new Le(24,24);n.elipse(12,13,7,7,c.espuma);const e=(t,i,a)=>{for(let o=0;o<26;o++){const r=o*.5,s=.6+o/26*a;n.pxSobre(Math.round(t+Math.cos(r)*s),Math.round(i+Math.sin(r)*s),c.mar)}};return e(10,12,4.5),e(15,16,3.2),n.px(8,8,c.hueso),Ze(n,[c.mar,c.hueso]),n.linea(1,10,4,9,c.espuma),n.linea(20,17,23,16,c.espuma),n.linea(19,7,22,6,c.espuma),n},mercurio(){const n=new Le(24,24);return n.elipse(12,15,6.5,6.5,c.niebla),n.poligono([[7,12],[12,4],[17,12]],c.niebla),n.elipse(10,12,2.5,3,c.hueso),n.elipse(15,18,2,1.5,c.piedra),n.elipse(19,21,1.3,1.3,c.niebla),Ze(n,[c.hueso,c.piedra]),n},oxido(){const n=new Le(24,24);n.elipse(12,13,7,7.5,c.piedra);for(const[e,t,i]of[[9,10,2.2],[15,14,2.6],[10,17,1.8],[16,9,1.3]])n.elipse(e,t,i,i,c.naranja),n.px(e,t,c.granate);n.px(8,8,c.niebla),Ze(n,[c.naranja,c.granate,c.niebla]);for(const[e,t]of[[19,19],[20,21],[4,18],[3,20]])n.px(e,t,c.naranja);return n},arcilla(){const n=new Le(24,24);n.elipse(12,15,7.5,6,c.madera),n.rect(9,7,6,4,c.madera),n.rect(8,7,8,1,c.madera);for(const e of[13,16,19])n.linea(6+(e===19?2:0),e,18-(e===19?2:0),e,c.corteza);for(const[e,t]of[[9,14],[14,17],[15,12]])n.px(e,t,c.maderaClara),n.px(e+1,t,c.maderaClara);return n.px(8,11,c.pergamino),Ze(n,[c.corteza,c.pergamino]),n},musgo(){const n=new Le(24,24);n.elipse(12,14,7,7,c.selva);for(let e=8;e<21;e++)for(let t=5;t<20;t++)n.get(t,e)===c.selva&&(t*5+e*3)%7<3&&n.px(t,e,c.hoja);for(const[e,t]of[[8,10],[14,9],[16,15],[9,17]])n.px(e,t,c.brote);return Ze(n,[c.hoja,c.brote]),n.px(4,19,c.espuma),n.px(20,11,c.espuma),n},polen(){const n=new Le(24,24);for(let e=0;e<6;e++){const t=e/6*Math.PI*2;n.elipse(12+Math.cos(t)*4.5,14+Math.sin(t)*4.5,3,3,c.limon)}n.elipse(12,14,3.5,3.5,c.oro);for(const[e,t]of[[11,13],[13,15],[12,12]])n.px(e,t,c.naranja);Ze(n,[c.oro,c.naranja]);for(const[e,t]of[[3,8],[5,5],[20,6],[21,9],[19,21],[4,21]])n.px(e,t,c.limon);return n},sal(){const n=new Le(24,24);n.rect(7,9,10,11,c.hueso),n.rect(5,12,4,5,c.hueso),n.rect(16,11,4,5,c.hueso),n.rect(9,6,5,4,c.hueso);for(const[e,t,i,a]of[[7,9,10,11],[5,12,4,5],[16,11,4,5],[9,6,5,4]])n.linea(e,t+a-1,e+i-1,t+a-1,c.niebla),n.linea(e+i-1,t,e+i-1,t+a-1,c.niebla);return n.px(8,10,c.espuma),n.px(10,7,c.espuma),Ze(n,[c.niebla,c.espuma]),n}};function ar(n){const e=j0[n];if(!e)throw new Error(`Fruta sin dibujo: ${n}`);return e()}function W0(n){const e=ar(n);for(let t=0;t<e.d.length;t++)e.d[t]&&(e.d[t]=e.d[t]===1?1:3);return e}const nn=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function mu(n){if(n.creador)return"Creador";if(n.bando==="marine")return Va(n);const e=n.bando==="pirata"?["Grumete","Bucanero","Corsario","Capitán","Señor de los mares"]:["Simpatizante","Rebelde","Agitador","Comandante","Líder de la revolución"];return e[Math.min(e.length-1,Math.floor(n.nivel/16))]}function q0(n,e){const t=document.createElement("canvas");return t.width=n.w,t.height=n.h,t.getContext("2d").putImageData(new ImageData(n.aRGBA(),n.w,n.h),0,0),t.style.width=`${n.w*e}px`,t.style.height=`${n.h*e}px`,t}const X0=n=>{let e=0;for(const t of n)e=e*31+t.charCodeAt(0)>>>0;return 1e3+e%9e3};function wd(n){document.querySelector("#dlg-cartel")?.remove();const e=document.createElement("dialog");e.id="dlg-cartel",e.className="cartel-dlg";const t=n.rasgos.map(d=>ml.find(f=>f.id===d)?.nombre.toLowerCase()).filter(Boolean),i=n.fruta?Nt.find(d=>d.id===n.fruta):null,a=Math.max(1,Math.ceil((Date.now()-n.creado)/864e5)),o=gl.find(d=>d.id===n.mar)?.nombre??"",r=n.bando==="marine"?0:n.recompensa??0,s=n.capturas??{pirata:0,revolucionario:0},l=r.toLocaleString("es-ES"),u=n.bando==="marine"?`<div class="cartel-caja marina"><div class="cartel-caja-fila"><span>AL SERVICIO</span><span class="azul">DE LA MARINA</span></div>
         <b class="cartel-cifra rango">${nn(mu(n))}</b>
         <div class="capturas"><div><b>${s.pirata}</b><small>piratas capturados</small></div><div><b>${s.revolucionario}</b><small>revolucionarios capturados</small></div></div></div>`:`<div class="cartel-caja"><div class="cartel-caja-fila"><span>SE BUSCA</span><span class="rojo">VIVO O MUERTO</span></div>
         ${r?`<b class="cartel-cifra ${l.length>11?"larga":""}">${l}</b><small>doblones${r>=1e6?` · ${et(r)}`:""}</small>`:'<b class="cartel-cifra sin">Sin recompensa</b><small>Aún nadie paga por su cabeza.</small>'}</div>`;e.innerHTML=`
    <div class="pergamino">
      <button class="cartel-cerrar" aria-label="Cerrar">✕</button>
      <header><span class="cartel-titulo">Hoja de vida</span><span class="cartel-num">Nº ${X0(n.id)}</span></header>
      <div class="cartel-retrato"></div>
      <h2 class="cartel-nombre">${nn(n.nombre)}</h2>
      ${n.apodo?`<p class="cartel-apodo">«${nn(n.apodo)}»</p>`:""}
      <p class="cartel-bando bando-${n.bando}">${nn(bn[n.bando].nombre)} · ${nn(mu(n))}</p>
      ${Ot(n)?`<p class="cartel-trip">Tripulación «${nn(Ot(n).nombre)}»</p>`:""}
      ${u}
      <div class="cartel-sueno"><span class="estrella">☆</span><div><small>SU SUEÑO</small><p>${nn(n.sueno||"Todavía no tiene un sueño.")}</p></div></div>
      ${i?`<div class="cartel-sueno fruta"><span class="estrella">✦</span><div><small>FRUTA DEL PODER</small><p>${nn(i.nombre)}</p></div></div>`:""}
      <div class="cartel-cifras">
        <div><b>${n.nivel}</b><small>NIVEL</small></div>
        <div><b>${n.creador?"∞":et(n.doblones)}</b><small>DOBLONES</small></div>
        <div><b>${a}</b><small>${a===1?"DÍA":"DÍAS"} EN EL MAR</small></div>
      </div>
      ${t.length?`<p class="cartel-rasgos">~ ${t.map(d=>nn(d)).join(" ~ ")} ~</p>`:""}
      ${n.navio?.nombre?`<p class="cartel-lugar">A bordo de «${nn(n.navio.nombre)}»</p>`:""}
      <p class="cartel-lugar">Visto por última vez en ${nn(_t(n).nombre)} · ${nn(o)}</p>
    </div>`,e.querySelector(".cartel-retrato").append(q0(Pn(n.aspecto),4)),document.body.append(e);const h=()=>{e.close(),e.remove()};e.querySelector(".cartel-cerrar").addEventListener("click",h),e.addEventListener("click",d=>{d.target===e&&h()}),e.addEventListener("cancel",()=>e.remove()),e.showModal()}const gu={vida:"Vida",fuerza:"Fuerza",tecnica:"Técnica",velocidad:"Velocidad",resistencia:"Resistencia",fama:"Fama"};function Cd(n,e=1){const t={vida:40,fuerza:8,tecnica:8,velocidad:8,resistencia:8,fama:0},i={inteligente:{tecnica:5,fuerza:-2},rudo:{fuerza:5,resistencia:1},astuto:{velocidad:4,tecnica:1},valiente:{fuerza:2,resistencia:2},prudente:{resistencia:4,vida:5},leal:{resistencia:2,vida:5},avaricioso:{velocidad:2},honrado:{resistencia:2,fama:2},curioso:{velocidad:3,tecnica:1},carismatico:{fama:5},gloton:{vida:10,velocidad:-1},orgulloso:{fuerza:2,fama:3}};for(const o of n)for(const[r,s]of Object.entries(i[o]??{}))t[r]+=s;const a=(e-1)*2;return t.fuerza+=a,t.tecnica+=a,t.velocidad+=a,t.resistencia+=a,t.vida+=a*3,t}const ja=[{id:"primer-viaje",nombre:"Primera travesía",como:"Viaja a otra isla.",icono:"⛵"},{id:"primera-victoria",nombre:"Primera victoria",como:"Gana un combate.",icono:"⚔"},{id:"duelista",nombre:"Duelista",como:"Gana un duelo contra otro jugador.",icono:"🤺"},{id:"a-bordo",nombre:"A bordo",como:"Únete a una tripulación.",icono:"🏴‍☠️"},{id:"capitan",nombre:"Capitán",como:"Funda tu propia tripulación.",icono:"🧭"},{id:"cartel",nombre:"Se busca",como:"Ten una recompensa por tu cabeza.",icono:"📜"},{id:"muy-buscado",nombre:"Muy buscado",como:"Llega a 100 M de recompensa.",icono:"💀"},{id:"capturas",nombre:"Mano dura",como:"Captura a 10 piratas o revolucionarios (marines).",icono:"⚓"},{id:"almirante",nombre:"Almirante",como:"Llega al rango de Almirante (marines).",icono:"🎖"},{id:"pista",nombre:"Tras la pista",como:"Reúne las 3 pistas de una fruta.",icono:"🔎"},{id:"fruta",nombre:"Sabor prohibido",como:"Cómete una fruta del poder.",icono:"🍈"},{id:"nivel10",nombre:"Curtido",como:"Llega al nivel 10.",icono:"⭐"},{id:"nivel25",nombre:"Veterano",como:"Llega al nivel 25.",icono:"🌟"},{id:"nivel50",nombre:"Leyenda",como:"Llega al nivel 50.",icono:"👑"},{id:"rico",nombre:"Bolsillos llenos",como:"Junta 100.000 doblones.",icono:"💰"},{id:"galeon",nombre:"Señor de los mares",como:"Compra un galeón.",icono:"🚢"}],Y0={mapa:["............",".##..##..##.",".#o##o.##o#.",".#o.#o..#o#.",".#o.#o..#o#.",".#o.#o..#o#.",".#o.#o..#o#.",".#o.#o..#o#.",".#o.#o..#o#.",".#o##o##.o#.",".##..##..##.","............"],brujula:["....####....","..##....##..",".#.......o#.",".#......oo#.","#......ooo.#","#....#oo...#","#...##o....#","#..###.....#",".#.##.....#.",".#.#......#.","..##....##..","....####...."],perfil:["............","....####....","...######...","...######...","...######...","....####....","............","..########..",".##########.",".##########.",".##########.","............"],envivo:["............","............",".#........#.","#..#....#..#","#.#..oo..#.#","#.#.oooo.#.#","#.#.oooo.#.#","#.#..oo..#.#","#..#....#..#",".#........#.","............","............"],globo:["....####....","..##.##.##..",".#..#..#..#.",".#..#..#..#.","############","#...#..#...#","#...#..#...#","############",".#..#..#..#.",".#..#..#..#.","..##.##.##..","....####...."],guia:[".##########.",".#........#.",".#..oooo..#.",".#.oo..oo.#.",".#.....oo.#.",".#....oo..#.",".#...oo...#.",".#........#.",".#...oo...#.",".#........#.",".##########.","............"],noticias:["............","##########..","#........##.","#.oooo...#.#","#.oooo...#.#","#........#.#","#.######.#.#","#........#.#","#.######.#.#","#........#.#","###########.","............"],taberna:["............","..#######...",".#ooooooo#..",".#########..",".#.......###",".#.......#.#",".#.......#.#",".#.......###",".#.......#..",".#.......#..","..#######...","............"],tablones:["............","....####....","....#oo#....","....#oo#....",".####oo#....",".#..#oo#####",".#..#oo#...#",".#..#oo#...#",".#..#oo#...#","############","............","............"],diana:[".....##.....","...#.##.#...","..#......#..",".#...oo...#.","....o..o....","###o.##.o###","###o.##.o###","....o..o....",".#...oo...#.","..#......#..","...#.##.#...",".....##....."],mas:["............","............","............","............","............",".##..##..##.",".##..##..##.","............","............","............","............","............"],bandera:["............",".#..........",".#oooooooo..",".#oooo#ooo..",".#ooo###oo..",".#oooo#ooo..",".#oooooooo..",".#..........",".#..........",".#..........",".#..........","............"],moneda:["............","...######...","..#oooooo#..",".#oo#oo#oo#.",".#oooo#ooo#.",".#ooo##ooo#.",".#ooo#oooo#.",".#oo#oo#oo#.","..#oooooo#..","...######...","............","............"]};function Xt(n,e="currentColor"){const t=Y0[n];let i="";return t.forEach((a,o)=>[...a].forEach((r,s)=>{r==="#"?i+=`<rect x="${s}" y="${o}" width="1" height="1"/>`:r==="o"&&(i+=`<rect x="${s}" y="${o}" width="1" height="1" fill="${e}"/>`)})),`<svg class="icono" viewBox="0 0 12 12" fill="currentColor" shape-rendering="crispEdges" aria-hidden="true">${i}</svg>`}const Z0=36e5,K0=12,vu=n=>new Date(n).toISOString().slice(0,10),Tt=(n,e)=>n.rasgos.includes(e),At=(n,e,t)=>({...n,registro:[...n.registro??[],[e,t]].slice(-40)}),oi=(n,e)=>n.creador?n:{...n,doblones:Math.max(0,n.doblones+e)},La=(n,e)=>{let t=n.nivel,i=(n.xp??0)+e;for(;i>=50*t*t&&t<80;)i-=50*t*t,t++;return{...n,nivel:t,xp:i}},Rd=[{id:"naufrago",titulo:"Un náufrago",texto:"Flotando agarrado a un tablón, un náufrago pide ayuda a gritos. Subirlo a bordo cuesta comida y tiempo.",puede:()=>!0,opciones:[{id:"salvar",texto:"🛟 Salvarlo (−50 doblones)",efecto:(n,e)=>{const t=La(oi(n,-50),20+n.nivel*4);return{p:At(t,e,"Salvó a un náufrago. Le contó historias de islas lejanas."),texto:"Lo salvas. Agradecido, te cuenta secretos del mar (+experiencia)."}}},{id:"ignorar",texto:"⛵ Seguir de largo",efecto:(n,e)=>({p:At(n,e,"Dejó atrás a un náufrago. Los gritos se perdieron en el viento."),texto:"Sigues tu rumbo. Los gritos se pierden en el viento."})}],porCaracter:n=>Tt(n,"honrado")||Tt(n,"leal")||Tt(n,"valiente")?"salvar":"ignorar"},{id:"cofre",titulo:"Un cofre sospechoso",texto:"Entre las rocas aparece un cofre cerrado. Tiene marcas extrañas en la cerradura... podría tener trampa.",puede:()=>!0,opciones:[{id:"abrir",texto:"🗝 Abrirlo",efecto:(n,e)=>(e/1e3|0)%3!==0?{p:At(oi(n,400),e,"Abrió un cofre misterioso: ¡400 doblones dentro!"),texto:"¡Clic! Dentro hay 400 doblones."}:{p:At(oi(n,-150),e,"Abrió un cofre con trampa y tuvo que pagar 150 doblones en curas."),texto:"¡Era una trampa! Las curas te cuestan 150 doblones."}},{id:"dejar",texto:"🚶 Dejarlo donde está",efecto:(n,e)=>({p:At(n,e,"Dejó un cofre sospechoso sin tocar. Nunca sabrá qué había dentro."),texto:"Más vale prevenir. Nunca sabrás qué había dentro."})}],porCaracter:n=>Tt(n,"prudente")?"dejar":"abrir"},{id:"soborno",titulo:"Un soborno",texto:"Un pirata acorralado te ofrece 500 doblones a cambio de dejarlo escapar.",puede:n=>n.bando==="marine",opciones:[{id:"aceptar",texto:"💰 Aceptar los 500 doblones",efecto:(n,e)=>({p:At({...oi(n,500),meritos:Math.max(0,(n.meritos??0)-20)},e,"Aceptó un soborno. La Marina sospecha algo (−20 méritos)."),texto:"Cobras 500 doblones... pero la Marina sospecha (−20 méritos)."})},{id:"capturar",texto:"⚓ Rechazarlo y capturarlo",efecto:(n,e)=>{const t=n.capturas??{pirata:0,revolucionario:0};return{p:At({...n,meritos:(n.meritos??0)+15,capturas:{...t,pirata:t.pirata+1}},e,"Rechazó un soborno y capturó al pirata (+15 méritos)."),texto:"La justicia no se vende: lo capturas (+15 méritos)."}}}],porCaracter:n=>Tt(n,"avaricioso")&&!Tt(n,"honrado")?"aceptar":"capturar"},{id:"traicion",titulo:"Una propuesta de traición",texto:"Un tripulante te susurra un plan: robar parte del botín al capitán esta noche y desaparecer.",puede:n=>!!Ot(n)&&Ot(n).capitan!==n.id,opciones:[{id:"traicionar",texto:"🗡 Robar el botín y marcharse",efecto:(n,e)=>({p:At({...oi(n,600),tripulacion:void 0,separado:void 0},e,"Traicionó a su tripulación: robó parte del botín y se marchó."),texto:"Robas 600 doblones y te largas. Ya no tienes tripulación."})},{id:"leal",texto:"🤝 Avisar al capitán",efecto:(n,e)=>({p:At(La(n,30+n.nivel*5),e,"Descubrió una traición y avisó al capitán. La tripulación confía más en él."),texto:"Avisas al capitán. La tripulación confía más en ti (+experiencia)."})}],porCaracter:n=>Tt(n,"leal")||Tt(n,"honrado")?"leal":Tt(n,"avaricioso")?"traicionar":"leal"},{id:"reto",titulo:"Un reto de honor",texto:"Un viejo espadachín te desafía: «Demuestra lo que vales». Si ganas, aprenderás de él; si pierdes, te dolerá el orgullo.",puede:()=>!0,opciones:[{id:"aceptar",texto:"⚔ Aceptar el reto",efecto:(n,e)=>Tt(n,"valiente")||Tt(n,"rudo")||(e/1e3|0)%2===0?{p:At(La(n,40+n.nivel*6),e,"Ganó un reto de honor contra un viejo espadachín."),texto:"¡Ganas! El viejo sonríe y te enseña un par de trucos (+experiencia)."}:{p:At(La(n,10),e,"Perdió un reto de honor, pero aprendió la lección."),texto:"Pierdes, pero aprendes la lección (+un poco de experiencia)."}},{id:"rechazar",texto:"🙇 Rechazarlo con respeto",efecto:(n,e)=>({p:At(n,e,"Rechazó con respeto un reto de honor."),texto:"Rechazas el reto con una reverencia."})}],porCaracter:n=>Tt(n,"valiente")||Tt(n,"orgulloso")||Tt(n,"rudo")?"aceptar":"rechazar"},{id:"mapa",titulo:"Un mapa a la venta",texto:"En el puerto, un tipo con un solo ojo vende «el mapa de un tesoro» por 200 doblones.",puede:n=>n.doblones>=200,opciones:[{id:"comprar",texto:"🗺 Comprarlo (−200 doblones)",efecto:(n,e)=>(e/1e3|0)%2===0?{p:At(oi(n,300),e,"Compró un mapa del tesoro... ¡y era de verdad! Sacó 500 doblones (300 de ganancia)."),texto:"¡Era verdadero! Encuentras 500 doblones (+300 de ganancia)."}:{p:At(oi(n,-200),e,"Le vendieron un mapa falso por 200 doblones."),texto:"El mapa era falso. Adiós a 200 doblones."}},{id:"pasar",texto:"🙅 No fiarse",efecto:(n,e)=>({p:At(n,e,"No se fió de un vendedor de mapas tuerto."),texto:"No te fías. El tuerto se va refunfuñando."})}],porCaracter:n=>Tt(n,"curioso")||Tt(n,"avaricioso")?"comprar":"pasar"},{id:"denuncia",titulo:"La Marina ofrece perdón",texto:"Un oficial de la Marina te ofrece 400 doblones y olvidar tus delitos si delatas a otros rebeldes.",puede:n=>n.bando==="revolucionario",opciones:[{id:"delatar",texto:"📜 Delatar (+400 doblones)",efecto:(n,e)=>({p:At({...oi(n,400),recompensa:Math.floor((n.recompensa??0)*.9)},e,"Delató a otros rebeldes a cambio de dinero. Su recompensa baja un 10%."),texto:"Cobras 400 doblones y tu recompensa baja un 10%... pero los tuyos no lo olvidarán."})},{id:"negarse",texto:"✊ Negarse",efecto:(n,e)=>({p:At(La(n,25+n.nivel*5),e,"Se negó a delatar a sus compañeros. La revolución sigue en pie."),texto:"Te niegas. La causa es más fuerte que el oro (+experiencia)."})}],porCaracter:n=>Tt(n,"avaricioso")&&!Tt(n,"leal")?"delatar":"negarse"}],Pd=n=>Rd.find(e=>e.id===n)??null;function J0(n,e,t){if(n.momento||n.momentoDia===vu(t)||e()>.12)return null;const i=Rd.filter(o=>o.puede(n));if(!i.length)return null;const a=i[Math.floor(e()*i.length)];return{p:{...n,momento:{id:a.id,desde:t,caduca:t+K0*Z0},momentoDia:vu(t)},texto:`tiene un momento clave: ${a.titulo.toLowerCase()}`}}function Ld(n,e,t){const i=n.momento&&Pd(n.momento.id);if(!i)return null;const a=e===null,o=i.opciones.find(s=>s.id===(e??i.porCaracter(n)))??i.opciones[0],r=o.efecto({...n,momento:void 0},t);return{p:r.p,texto:a?`decidió solo («${o.texto.replace(/^\S+\s/,"")}»): ${r.texto}`:r.texto}}const _u=["la Vieja Remedios","el Tuerto Anselmo","Doña Quiteria","el Hermano Celso","Maese Gorka","la Capitana Iria","el Abuelo Tiburcio","Madre Coral","el Silencioso Bento","Doña Salitre","el Gran Faustino","Ama Lucía"],za=n=>n.especial==="maestro",or=n=>_u[n.id%_u.length];function Q0(n,e){const t=_t(n);if(!za(t))return{p:n,multiplicador:1};if((n.maestros??[]).includes(t.id))return{p:n,multiplicador:2};const i=structuredClone(Wt(n)),a=Ua.filter(r=>!(r.id in i.habilidades)&&r.nivelMin<=Math.max(n.nivel,3)&&vl(r,i));let o=`entrenó con ${or(t)}, que vive en ${t.nombre}`;if(a.length){const r=a[(t.id+n.nivel)%a.length];i.habilidades[r.id]=1,o+=` y aprendió gratis la habilidad «${r.nombre}»`}return{p:At({...n,arsenal:i,maestros:[...n.maestros??[],t.id]},e,`${o[0].toUpperCase()}${o.slice(1)}.`),multiplicador:2,texto:o}}function _r(n){const e=Ot(n);return!e||e.capitan===n.id?null:[...on(),...An()].find(t=>t.id===e.capitan)??null}const eb=n=>!n.separado&&!!_r(n);function Dd(n,e,t=Date.now()){const i=_r(n);if(!i)return{p:n,volvio:!1};if(n.separado&&!e)return{p:n,volvio:!1};const a=qa(i,t);if(a.navegando||a.islaId===void 0)return{p:n.separado&&e?{...n,separado:!1}:n,volvio:!!n.separado&&e};if(!n.separado&&n.islaId===a.islaId)return{p:n,volvio:!1};const o=Ot(n),r=Yt()[a.islaId],s=[t,`Volvió al barco de «${o.nombre}», en ${r.nombre}.`];return{p:{...n,separado:!1,islaId:a.islaId,accion:n.accion?.tipo==="viajar"?void 0:n.accion,registro:n.separado?[...n.registro??[],s].slice(-40):n.registro},volvio:!!n.separado}}const Za={pasear:"Paseando",entrenar:"Entrenando",explorar:"Explorando",descansar:"Descansando",viajar:"Navegando"},tb={pasear:45,entrenar:60,explorar:75,descansar:40},nb=n=>((n+180)%360+360)%360-180,ul=(n,e)=>Math.hypot(nb(n.lon-e.lon)*Math.cos((n.lat+e.lat)/2*Math.PI/180),n.lat-e.lat),Wa=(n,e)=>Math.round(Math.min(240,30+ul(n,e)*12));function qo(n,e=6){return Yt().filter(t=>t.id!==n.id).sort((t,i)=>ul(n,t)-ul(n,i)).slice(0,e)}function Xo(n,e,t,i,a=!1){if(e==="viajar"&&i){const o=_t(n),r=(Du(n)==="navegante"?.9:1)*(n.estilo==="navegante"?.9:1);return{tipo:e,desde:t,hasta:t+Math.round(Wa(o,i)*ah[n.barco??"barca"]*r*1e3),origen:o.id,destino:i.id,mandada:a}}return{tipo:e,desde:t,hasta:t+tb[e]*1e3,mandada:a}}function ss(n,e,t){const i=s=>n.rasgos.includes(s),a=[["pasear",3],["entrenar",2+(n.objetivo==="fuerte"?2:0)+(i("orgulloso")?1:0)+(i("valiente")?1:0)],["explorar",2+(i("curioso")?2:0)+(n.objetivo==="fruta"||n.objetivo==="fortuna"?2:0)+(i("avaricioso")?1:0)],["descansar",1+(i("gloton")?1:0)+(i("prudente")?1:0)],["viajar",eb(n)?0:1+(i("curioso")?1:0)+(n.objetivo==="zona"||n.objetivo==="tripulacion"?2:0)]];let o=e()*a.reduce((s,[,l])=>s+l,0),r="pasear";for(const[s,l]of a)if((o-=l)<=0){r=s;break}if(r==="viajar"){const s=qo(_t(n),4).filter(l=>wt[l.zona].nivelMinimo<=n.nivel+3);return s.length?Xo(n,"viajar",t,s[Math.floor(e()*s.length)]):Xo(n,"pasear",t)}return Xo(n,r,t)}const Fl={oro:n=>300+n*40,xp:n=>Math.round(75*n*n),victorias:10},ib=n=>new Date(n).toISOString().slice(0,10);function Ol(n,e){const t=ib(e);return n.ganado?.dia===t?{...n.ganado}:{dia:t,oro:0,xp:0,victorias:0}}function Id(n,e,t=Date.now()){if(n.creador)return{p:n,oro:0};const i=Ol(n,t),a=Math.max(0,Math.min(e,Fl.oro(n.nivel)-i.oro));return i.oro+=a,{p:{...n,doblones:n.doblones+a,ganado:i},oro:a}}function Ud(n,e=Date.now()){const t=Ol(n,e);return t.victorias++,{p:{...n,ganado:t},premio:t.victorias<=Fl.victorias}}function rr(n,e,t=Date.now()){const i=Ol(n,t);e=Math.max(0,Math.min(e,Fl.xp(n.nivel)-i.xp)),i.xp+=e,n={...n,ganado:i};let a=n.nivel,o=(n.xp??0)+e,r=0;for(;o>=50*a*a;)o-=50*a*a,a++,r++;return{p:{...n,nivel:Math.min(80,a),xp:o},subidas:r,xp:e}}function ab(n,e,t){const i=[...n.registro??[]],a=_t(n);let o;switch(e.tipo){case"entrenar":{n=Ai(n,"entrenos");const r=Q0(n,e.hasta);n=r.p;const s=Math.round((30+n.nivel*5)*(n.rasgos.includes("inteligente")?1.25:1)*(Sn(n,"madrugador")?1.1:1)*r.multiplicador),l=rr(n,s,e.hasta);n=l.p,o=r.texto??(l.subidas?`entrenó duro y subió a nivel ${n.nivel}`:l.xp?`entrenó${r.multiplicador>1?" con el maestro":""} (+${l.xp} de experiencia)`:void 0),i.push([e.hasta,`Entrenó en ${a.nombre} hasta que le dolieron los brazos.${l.subidas?` ¡Subió a nivel ${n.nivel}!`:""}`]);break}case"explorar":{n=Ai(n,"exploraciones");const r=t()*(n.rasgos.includes("curioso")?1.3:1);if(r>.5){const s=Id(n,Math.round((5+Math.floor(t()*25))*(Sn(n,"buscatesoros")?1.2:1)),e.hasta);n=s.p,s.oro?(o=`encontró ${s.oro} doblones explorando`,i.push([e.hasta,`Exploró ${a.nombre} y encontró una bolsa con ${s.oro} doblones.`])):i.push([e.hasta,`Exploró ${a.nombre}, pero hoy ya no queda nada que encontrar.`])}else if(r>(n.objetivo==="fruta"?.3:.4)){const s=ih(n,t,e.hasta);s?(n=s.p,o=s.p.busqueda.pistas>=kn?`¡descubrió dónde está la ${_l(s.p.busqueda.fruta).toLowerCase()}!`:"oyó algo sobre una fruta del poder",i.push([e.hasta,`En ${a.nombre}: ${s.texto}`])):i.push([e.hasta,`En ${a.nombre} oyó a un viejo hablar de un tesoro escondido... pero no dijo dónde.`])}else i.push([e.hasta,`Exploró ${a.nombre} sin encontrar nada.`]);n=rr(n,10,e.hasta).p;break}case"viajar":{const r=Yt()[e.destino];n=Ai({...n,islaId:r.id},"viajes"),o=`llegó a ${r.nombre}`,i.push([e.hasta,`Desembarcó en ${r.nombre} (${di(r.zona)}).`]);break}}return{p:{...n,registro:i.slice(-40)},resumen:o}}function ob(n,e=Date.now()){let t=0;for(const u of n.id)t=t*31+u.charCodeAt(0)>>>0;const i=[];let a=n.accion,o=0;const r=a;a||(a=ss(n,Mn(t+Math.floor(e/1e3)),e));const s=8*36e5;for(a.hasta<e-s&&(a=ss(n,Mn(t+Math.floor(e/1e3)),e-s));a.hasta<=e&&o++<200;){const u=Mn(t+Math.floor(a.hasta/1e3)),h=ab(n,a,u);if(n=h.p,h.resumen&&i.push(h.resumen),n.momento&&a.hasta>n.momento.caduca){const d=Ld(n,null,a.hasta);d&&(n=d.p,i.push(d.texto))}if(a.tipo!=="viajar"){const d=J0(n,u,a.hasta);d&&(n=d.p,i.push(d.texto))}a=ss(n,u,a.hasta)}n={...n,accion:a};const l=lb(n,e);return l&&(n=l.p,i.push(l.texto)),(a!==r||l)&&ht(n),{p:n,resumen:i}}const ls=864e5,rb=3,sb=.02;function lb(n,e){if(n.bando==="marine"||n.creador||!(n.recompensa??0))return null;const t=Math.max((n.ultimaFechoria??n.creado)+rb*ls,n.bajadaHasta??0),i=Math.floor((e-t)/ls);if(i<1)return null;const a=n.recompensa,o=Math.max(0,Math.round(a*Math.pow(1-sb,i)/1e3)*1e3),r=`pasó ${i===1?"un día":`${i} días`} sin dar guerra y su recompensa bajó a ${o.toLocaleString("es-ES")} doblones`;return{p:{...n,recompensa:o,bajadaHasta:t+i*ls},texto:r}}function Bl(n,e,t){const i={...n,accion:Xo(n,e,Date.now(),t,!0),...e==="viajar"&&_r(n)?{separado:!0}:{}};return ht(i),i}function qa(n,e=Date.now()){if(!n.separado){const a=_r(n);if(a)return qa(a,e)}const t=n.accion;if(t?.tipo==="viajar"&&t.origen!==void 0&&t.destino!==void 0&&e<t.hasta){const a=Yt(),o=a[t.origen],r=a[t.destino],s=Math.min(1,Math.max(0,(e-t.desde)/(t.hasta-t.desde)));return nh(o,r,s)}const i=t?.tipo==="viajar"&&t.destino!==void 0&&e>=t.hasta?Yt()[t.destino]:_t(n);return{lat:i.lat,lon:i.lon,navegando:!1,islaId:i.id,rumbo:1}}const Me=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Zi=n=>n.apodo?`${n.nombre} «${n.apodo}»`:n.nombre;function pn(n,e){const t=document.createElement("canvas");return t.width=n.w,t.height=n.h,t.style.width=`${n.w*e}px`,t.style.height=`${n.h*e}px`,t.getContext("2d").putImageData(new ImageData(n.aRGBA(),n.w,n.h),0,0),t}function cs(n,e){const t=Pn(n),i=new Le(20,16);for(let a=0;a<16;a++)for(let o=0;o<20;o++)i.px(o,a,t.get(o+6,a));return pn(i,e)}function Yi(n,e){n.querySelectorAll("[data-sprite]").forEach(t=>{const i=e.get(t.dataset.sprite);i&&t.replaceWith(i.cloneNode(!0)instanceof HTMLCanvasElement?cb(i):i)})}function cb(n){const e=document.createElement("canvas");return e.width=n.width,e.height=n.height,e.style.cssText=n.style.cssText,e.getContext("2d").drawImage(n,0,0),e}function ub(n){const e=document.querySelector("#hoja"),t=e.querySelector(".hoja-titulo");let i=e.querySelector(".hoja-cuerpo");const a=e.querySelector(".hoja-volver");let o=null;const r=[];e.querySelector(".hoja-cerrar").addEventListener("click",s),a.addEventListener("click",()=>{const y=r.pop();y&&l(y,!1)});function s(){sr?.(),sr=null,e.hidden=!0,o=null,r.length=0,document.body.classList.remove("con-hoja"),document.querySelectorAll(".barra-inf button").forEach(y=>y.classList.remove("activo"))}function l(y,X=!0){X&&o&&o!==y&&["mas","tablones","mi-pirata"].includes(o)&&r.push(o),X&&(!o||!["mas","tablones","mi-pirata"].includes(o))&&(r.length=0),o=y,e.hidden=!1,document.body.classList.add("con-hoja"),document.querySelectorAll(".barra-inf button").forEach(he=>he.classList.toggle("activo",he.dataset.panel===y)),a.hidden=r.length===0;const Z=i.cloneNode(!1);i.replaceWith(Z),i=Z,i.scrollTop=0;const B=u[y]();t.textContent=B.titulo,i.innerHTML=B.html,B.despues?.(i)}const u={"mi-pirata":h,arsenal:Re,noticias:f,taberna:_,tablones:D,mas:F,"en-vivo":p,"se-busca":A,cofre:Y,compendio:j,guia:J,normas:Q,privacidad:_e,tienda:U,creador:I};function h(){const y=Ct()?Ye():null;if(!y)return{titulo:"Mi pirata",html:'<p class="vacio">Aún no tienes personaje.</p><button class="boton-oro ancho" data-accion="perfil">Crear personaje</button>',despues:qe};const X=_t(y),Z=Cd(y.rasgos,y.nivel);for(const[N,T]of Object.entries(Wt(y).mejoras))Z[N]+=Bo[N].cantidad*T;Z.fama=Math.min(100,y.bando==="marine"?Math.floor((y.meritos??0)/100):Math.floor(Math.log10(1+(y.recompensa??0))*10));const B=y.rasgos.map(N=>ml.find(T=>T.id===N)).filter(Boolean),he=oh(y.bando),le=hr(y),ue=xn(rt()).filter(N=>{const T=oa(N);return!T.navegando&&T.islaId===X.id}).slice(0,6);return{titulo:"Mi pirata",html:`
      <div class="perfil-cabecera">
        <i data-sprite="yo"></i>
        <div>
          <b class="perfil-nombre">${Me(y.nombre)}${y.apodo?` <span>«${Me(y.apodo)}»</span>`:""}</b>
          <span class="bando-${y.bando}">${bn[y.bando].nombre}${y.creador?' · <b class="creador">Creador</b>':y.bando==="marine"?` · ${Va(y)} (${y.meritos??0} méritos)`:""} · Nv. ${y.nivel}</span>
          <span class="oro">${Xt("moneda","#f2b63d")} ${y.creador?"∞":et(y.doblones)} doblones</span>
          ${y.bando==="marine"?`<span class="recompensa-txt">Capturas: ${y.capturas?.pirata??0} piratas · ${y.capturas?.revolucionario??0} revolucionarios</span>`:y.recompensa?`<span class="recompensa-txt">Recompensa: ${et(y.recompensa)} doblones</span>`:""}
          ${y.fruta?`<span class="fruta-txt">Fruta: ${Me(Nt.find(N=>N.id===y.fruta).nombre)}</span>`:""}
          <button class="enlace-oro" data-accion="localizar">${Xt("diana","#f2b63d")} En ${Me(X.nombre)} · ${Me(di(X.zona))}</button>
        </div>
      </div>

      <div class="botones-fila"><button class="boton-oro" data-accion="hoja">📜 Hoja de vida</button><button class="boton-oro" data-ir="tienda">🛒 Tienda</button><button class="boton-oro" data-ir="arsenal">🗡 Arsenal</button><button class="boton-oro" data-accion="entrenar">⚔ Entrenar</button></div>

      <h3>Estadísticas</h3>
      <div class="barras">${Object.keys(gu).map(N=>`
        <div class="barra"><span>${gu[N]}</span><i><b style="width:${Math.min(100,Z[N])}%"></b></i><em>${Z[N]}</em></div>`).join("")}
      </div>
      <p class="nota-hoja">Suben con el nivel y con los puntos de mejora del Arsenal. La fama crece con tu ${y.bando==="marine"?"número de méritos":"recompensa"}.</p>

      <h3>Objetivo</h3>
      ${le?`<div class="objetivo">
          <b>${Me(le.o.texto)}</b>
          <div class="progreso"><i style="width:${Math.max(4,Math.round(le.hechos.filter(Boolean).length/le.hechos.length*100))}%"></i></div>
          <small>${le.hechos.filter(Boolean).length} de ${le.hechos.length} pasos${le.completo?" · ¡cumplido! Toca el ✦ de tu ficha para cobrar":""}</small>
          <ol class="pasos-objetivo">${le.o.pasos.map((N,T)=>`<li class="${le.hechos[T]?"hecho":""}">${le.hechos[T]?"✓":"○"} ${Me(N.texto)}</li>`).join("")}</ol>
          ${le.completo?'<button class="boton-oro ancho" data-accion="cobrar-objetivo">✦ Cobrar la recompensa</button>':""}
        </div>`:'<p class="nota-hoja">Elige qué quieres que persiga. Trabajará en ello aunque no estés, y al cumplirlo te llevas experiencia y doblones.</p>'}
      ${(y.objetivosHechos??[]).length?`<p class="nota-hoja">Objetivos cumplidos: ${(y.objetivosHechos??[]).length}.</p>`:""}
      <div class="chips">${he.map(N=>`<button class="chip-hoja ${N.id===y.objetivo?"sel":""}" data-objetivo="${N.id}">${Me(N.texto)}${(y.objetivosHechos??[]).includes(N.id)?" ✓":""}</button>`).join("")}</div>

      <h3>Estilo de combate</h3>
      ${y.estilo?`<p class="nota-hoja">${En[y.estilo].icono} <b>${En[y.estilo].nombre}</b>: ${Me(En[y.estilo].ventaja)}</p>`:`<p class="nota-hoja">Aún no tiene estilo. Elige uno (solo se puede elegir una vez):</p>
          <div class="chips">${Object.keys(En).map(N=>`<button class="chip-hoja" data-estilo="${N}" title="${Me(En[N].ventaja)}">${En[N].icono} ${En[N].nombre}</button>`).join("")}</div>`}

      <h3>Código</h3>
      ${(y.codigo??[]).length>=lo?`<ul class="codigo-lista">${(y.codigo??[]).map(N=>`<li><b>${Kn[N].nombre}</b><small>▲ ${Me(Kn[N].ventaja)}</small><small>▼ ${Me(Kn[N].regla)}</small></li>`).join("")}</ul>`:`<p class="nota-hoja">Las ${lo} reglas que tu personaje cumple siempre. Elige ${lo-(y.codigo??[]).length} (no se pueden cambiar):</p>
          <div class="chips">${Object.keys(Kn).filter(N=>!(y.codigo??[]).includes(N)).map(N=>`<button class="chip-hoja" data-codigo="${N}" title="${Me(Kn[N].ventaja+" · "+Kn[N].regla)}">${Kn[N].nombre}</button>`).join("")}</div>`}

      ${y.bando==="pirata"?`<h3>Tripulación</h3>${P(y)}`:""}

      <h3>Fruta del poder</h3>
      ${hb(y)}

      <h3>${y.bando==="marine"?"Méritos":"Recompensa"}</h3>
      <p class="nota-hoja">${y.bando==="marine"?`Llevas <b>${y.meritos??0}</b> méritos (${Va(y)}). Capturar piratas y revolucionarios te da méritos: como mucho ${rh(y.nivel)} al día. Solo los 4 marines con más méritos de cada mar llegan a Almirante.`:`Tu recompensa es <b>${et(y.recompensa??0)}</b> doblones. Sube al ganar combates (mucho más contra marines): como mucho ${et(sh(y.nivel))} al día. Si pasas 3 días sin ganar ninguno, baja un 2% cada día.`}</p>

      <h3>Carácter</h3>
      <div class="rasgos-hoja">${B.map(N=>`<div><b>${N.nombre}</b><small class="mas">▲ ${Me(N.ventaja)}</small><small class="menos">▼ ${Me(N.desventaja)}</small></div>`).join("")||'<p class="vacio">Sin rasgos.</p>'}</div>

      <h3>Sueño</h3>
      <p class="sueno-hoja">${Me(y.sueno||"Todavía no tiene un sueño.")}</p>

      <h3>Diario</h3>
      <ul class="diario">${d(y).map(([N,T])=>`<li><small>${Na(N)}</small>${Me(T)}</li>`).join("")}</ul>

      <h3>Equipo</h3>
      <div class="ranuras">
        <div class="ranura"><b>Barco</b><small>${Me(co.find(N=>N.id===(y.barco??"barca")).nombre)}${y.navio?.nombre?` «${Me(y.navio.nombre)}»`:""}</small></div>
        <div class="ranura"><b>Bolsa</b><small>${vn(y).grog} grog · ${vn(y).botiquin} botiquines</small></div>
        <div class="ranura"><b>Arma</b><small>${Me(It(Wt(y).principal).nombre)}${Wt(y).escudo?` + ${Me(It(Wt(y).escudo).nombre)}`:""}</small></div>
        <div class="ranura"><b>Fruta del poder</b><small>${y.fruta?Me(Nt.find(N=>N.id===y.fruta)?.nombre??""):"Ninguna (aún)"}</small></div>
        ${y.tripulacion&&Ot(y)?`<div class="ranura"><b>Tripulación</b><small>${Me(Ot(y).nombre)}</small></div>`:""}
      </div>

      <h3>Relaciones</h3>
      ${ue.length?`<p class="nota-hoja">Personajes que están ahora en ${Me(X.nombre)}. Aún no os conocéis.</p>
        <ul class="lista-gente">${ue.map(N=>`<li><i data-sprite="b-${N.id}"></i><span><b>${Me(Zi(N))}</b><small class="bando-${N.bando}">${bn[N.bando].nombre} · Nv. ${N.nivel}</small></span><em>Desconocido</em></li>`).join("")}</ul>`:'<p class="vacio">Nadie más en la isla ahora mismo.</p>'}`,despues:N=>{const T=new Map([["yo",pn(Pn(y.aspecto),3)]]);for(const ce of ue)T.set(`b-${ce.id}`,cs(ce.aspecto,2));Yi(N,T),qe(N),w(N,"mi-pirata"),N.querySelectorAll("[data-ir]").forEach(ce=>ce.addEventListener("click",()=>l(ce.dataset.ir))),N.querySelectorAll("[data-estilo]").forEach(ce=>ce.addEventListener("click",()=>{const te=Ye();if(te.estilo)return;const re=ce.dataset.estilo;confirm(`¿Elegir el estilo ${En[re].nombre}? No se podrá cambiar.`)&&(ht({...te,estilo:re,arsenal:lh(Wt(te),re)}),n.aviso(`${En[re].icono} Ahora es ${En[re].nombre}.`),l("mi-pirata",!1))})),N.querySelectorAll("[data-codigo]").forEach(ce=>ce.addEventListener("click",()=>{const te=Ye(),re=ce.dataset.codigo;(te.codigo??[]).length>=lo||confirm(`¿Añadir «${Kn[re].nombre}» a su código? No se podrá quitar.`)&&(ht({...te,codigo:[...te.codigo??[],re]}),l("mi-pirata",!1))})),N.querySelectorAll("[data-objetivo]").forEach(ce=>ce.addEventListener("click",()=>{ce.dataset.objetivo!==y.objetivo&&(ht({...y,objetivo:ce.dataset.objetivo,objetivoBase:ch(y)}),n.aviso("Nuevo objetivo fijado."),l("mi-pirata",!1))}))}}}function d(y){const X=_t(y),Z=[[y.creado,`${y.nombre} pisó por primera vez ${X.nombre}. Olía a sal y a aventura.`],[y.creado+6e4,`Juró que cumpliría su sueño: ${y.sueno.charAt(0).toLowerCase()}${y.sueno.slice(1)}`]];y.objetivo&&Z.push([Date.now(),"Se propuso un nuevo objetivo y empezó a pensar cómo conseguirlo."]);for(const B of y.registro??[])Z.push(B);return Z.sort((B,he)=>he[0]-B[0])}function f(){const y=rt(),X=Ct()?Ye():null,Z=Kl(y,Date.now()-24*36e5).filter(le=>le.importante).slice(0,40),B=X?d(X).map(([le,ue])=>({t:le,texto:ue,tipo:"llega",ids:[X.id],importante:!0})):[],he=le=>le.length?`<ul class="noticias">${le.map(ue=>`<li class="n-${ue.tipo}"><small>${Na(ue.t)}</small>${Me(ue.texto)}</li>`).join("")}</ul>`:'<p class="vacio">Todavía no hay noticias tuyas. Cuando tu personaje haga algo sonado, saldrá aquí.</p>';return{titulo:"Noticias",html:`<div class="pestanas-hoja"><button class="sel" data-filtro="todo">Todo el mar</button><button data-filtro="duelos">⚔ Duelos</button><button data-filtro="mio">Lo mío</button></div>
        <div data-vista="todo">${he(Z)}</div>
        <div data-vista="duelos" hidden><p class="vacio">Cargando duelos…</p></div>
        <div data-vista="mio" hidden>${he(B)}</div>`,despues:le=>{ze(le),uh(y,30).then(ue=>{const xe=le.querySelector('[data-vista="duelos"]');if(!xe)return;const N=new Set(on().map(T=>T.id));xe.innerHTML=ue.length?`<ul class="noticias">${ue.map(T=>{const ce=T.ganador==="atacante"?T.atacante_nombre:T.ganador==="defensor"?T.defensor_nombre:null,te=T.ganador==="atacante"?T.defensor_nombre:T.atacante_nombre,re=ce?`⚔ ${ce} venció a ${te} en duelo${T.premio&&T.ganador==="atacante"?` (+${et(T.premio)})`:""}.`:`⚔ ${T.atacante_nombre} desafió a ${T.defensor_nombre}, pero huyó.`;return`<li class="n-duelo ${N.has(T.atacante)||N.has(T.defensor)?"n-mio":""}"><small>${Na(Date.parse(T.creado))}</small>${Me(re)}</li>`}).join("")}</ul>`:'<p class="vacio">Aún no ha habido duelos en este mar. Desafía a otro jugador desde el mapa o los Tablones.</p>'})}}}function p(){const y=rt(),X=xn(y),Z=X.filter(he=>oa(he).navegando).length,B=Kl(y,Date.now()-36e5);return{titulo:"En vivo",html:`<div class="cifras"><div><b>${X.length+(Ye()?1:0)}</b><small>personajes en este mar</small></div><div><b>${Z}</b><small>navegando ahora</small></div><div><b>${B.length}</b><small>sucesos en la última hora</small></div></div>
        <ul class="noticias">${B.map(he=>`<li class="n-${he.tipo}"><small>${Na(he.t)}</small>${Me(he.texto)}</li>`).join("")}</ul>`}}function _(){const y=rt(),X=Ct(),Z=X?Ye():null,B=Z?Ot(Z):null;B||(g="mar");const he=g==="trip"&&B;return{titulo:"La Taberna",html:`
        <details class="normas-chat"><summary>Normas de la taberna</summary>
          <ul><li>Respeto: nada de insultos, acoso ni odio.</li><li>Nada de datos personales (tuyos ni de nadie).</li><li>Sin spam: como mucho 5 mensajes por minuto.</li><li>Los mensajes se borran a los 90 días.</li><li>Puedes reportar y silenciar a quien quieras.</li></ul>
        </details>
        ${B?`<div class="pestanas-hoja"><button class="${he?"":"sel"}" data-canal="mar">🍺 Todo el mar</button><button class="${he?"sel":""}" data-canal="trip">🏴‍☠️ ${Me(B.nombre)}</button></div>`:""}
        <p class="nota-hoja">${he?"Chat privado de tu tripulación: solo lo leen sus miembros.":"Chat en tiempo real con todos los jugadores de este mar. Con 3 reportes, un mensaje se oculta hasta que lo revise la moderación."}</p>
        <ul class="chat" id="chat"></ul>
        <div class="silenciados" id="silenciados"></div>
        ${X?`<form class="chat-form" id="chat-form"><input id="chat-texto" maxlength="200" autocomplete="off" placeholder="${he?"Habla con tu tripulación...":"Di algo en la taberna..."}" /><button class="boton-oro">Enviar</button></form>`:'<p class="vacio">Firma el pacto para hablar en la taberna.</p>'}`,despues:le=>{le.querySelectorAll("[data-canal]").forEach(ue=>ue.addEventListener("click",()=>{g=ue.dataset.canal,l("taberna",!1)})),db(le,y,he?B.id:null)}}}let b="rec",g="mar";function m(y,X=30){const Z=rt(),B=vs(Z),he=zo(Z).map(ue=>({t:ue,...Jl(ue,B.get(ue.id)??[])})).sort((ue,xe)=>xe.total-ue.total).slice(0,X);if(!he.length)return`<p class="vacio">Aún no hay tripulaciones en este mar. Un pirata de nivel ${Ar} puede fundar la primera desde «Mi pirata».</p>`;const le=y&&y.bando==="pirata"&&!Ot(y);return`<ol class="ranking tripulaciones">${he.map((ue,xe)=>`<li class="${y?.tripulacion===ue.t.id?"fila-mia":""}"><span class="pos">${xe+1}</span>
      <span><b><i class="bandera" data-bandera="${ue.t.id}"></i> ${Me(ue.t.nombre)}</b><small>Capitán: ${Me(ue.capitan?.nombre??"¿?")} · ${ue.miembros} miembros (${ue.jugadores.length} jugadores)</small><small>Recompensa total: ${et(ue.total)}</small></span>
      ${le?`<button class="mini-boton" data-unirse="${ue.t.id}">Unirse</button>`:y?.tripulacion===ue.t.id?"<em>Tu tripulación</em>":""}</li>`).join("")}</ol>
      ${y&&y.bando!=="pirata"?'<p class="nota-hoja">Solo los piratas pueden unirse a una tripulación.</p>':""}`}function P(y){const X=Ot(y);if(X){const B=Jl(X,vs(y.mar).get(X.id)??[]),he=X.capitan===y.id,le=X.cargos??{},ue=te=>Object.entries(le).find(([,re])=>re===te)?.[0],xe=te=>{const re=ue(te);return re?` <span class="chip-jugador cargo">${Ui[re].nombre}</span>`:""},N=ue(y.id),T=[...B.jugadores.filter(te=>te.id!==X.capitan).map(te=>({id:te.id,nombre:te.nombre})),...B.bots.map(te=>({id:te.id,nombre:Zi(te)}))],ce=Math.round(Iu(y)*100);return`<div class="objetivo tripulacion"><b><i class="bandera" data-bandera="${X.id}"></i> ${Me(X.nombre)}</b><small>${he?"Eres el capitán":`Capitán: ${Me(B.capitan?.nombre??"¿?")}`} · ${B.miembros} miembros · recompensa total ${et(B.total)}</small>
        <p class="ventaja-trip">💪 Bonus de tripulación: <b>+${ce}%</b> de fuerza y resistencia en combate (+1% por miembro, máximo +10%).${N?`<br>🎖 Tu cargo: <b>${Ui[N].nombre}</b> (${Ui[N].ventaja}).`:""}</p>
        <ul class="miembros">${B.jugadores.map(te=>`<li><b>${Me(te.nombre)}</b>${te.id===X.capitan?' <span class="chip-jugador creador">Capitán</span>':' <span class="chip-jugador">Jugador</span>'}${xe(te.id)}</li>`).join("")}
        ${B.bots.map(te=>`<li>${Me(Zi(te))} <small>Nv. ${te.nivel}</small>${xe(te.id)}</li>`).join("")}</ul>
        ${he?`<details class="cargos"><summary>🎖 Nombrar cargos</summary>
          ${Object.keys(Ui).map(te=>`<label>${Ui[te].nombre} <small>${Ui[te].ventaja}</small>
            <select data-cargo="${te}"><option value="">— Nadie —</option>${T.map(re=>`<option value="${re.id}" ${le[te]===re.id?"selected":""}>${Me(re.nombre)}</option>`).join("")}</select></label>`).join("")}
          <button class="mini-boton" data-guardar-cargos="${X.id}">Guardar cargos</button></details>
          <p class="nota-hoja">🏴 La bandera de la tripulación usa los colores de bandera de tu barco (Tienda → Barcos).</p>`:""}
        ${he?'<p class="nota-hoja">⚓ Tu tripulación te sigue a donde vayas.</p>':y.separado?'<p class="nota-hoja">⛵ Ahora va por su cuenta. Volverá al barco la próxima vez que entres al juego.</p><button class="mini-boton" data-volver-barco>Volver ya al barco</button>':'<p class="nota-hoja">⚓ Va con su tripulación y sigue al capitán. Si lo mandas a navegar a otro sitio, irá solo hasta que vuelvas a entrar.</p>'}
        <p class="nota-hoja">Cada 2 horas se une un pirata nuevo, hasta 12 bots. Cualquier jugador pirata puede unirse desde Tablones → Tripulaciones.</p>
        <button class="mini-boton peligro" data-${he?"disolver":"dejar"}="${X.id}">${he?"Disolver la tripulación":"Dejar la tripulación"}</button></div>`}return`${y.nivel>=Ar||y.creador?'<div class="fundar"><input id="nombre-tripulacion" maxlength="24" placeholder="Nombre de tu tripulación" /><button class="boton-oro" data-fundar>Fundar</button></div>':`<p class="vacio">Desde el nivel ${Ar} podrás fundar tu propia tripulación. Mientras tanto, puedes unirte a una:</p>`}<h4>Unirse a una tripulación</h4>${m(y,6)}`}function w(y,X){y.querySelectorAll("[data-bandera]").forEach(Z=>{const B=zo(rt()).find(ue=>ue.id===Z.dataset.bandera);if(!B)return;const{colorBandera:he,colorInsignia:le}=bl(B);Z.replaceWith(pn(dh(he,le),2))}),y.addEventListener("click",async Z=>{const B=Z.target.closest("[data-unirse],[data-fundar],[data-dejar],[data-disolver],[data-volver-barco],[data-guardar-cargos]");if(!B||B.disabled)return;const he=Ye();if(!he)return;const le=ue=>[...he.registro??[],[Date.now(),ue]].slice(-30);if(B.disabled=!0,B.dataset.guardarCargos){const ue={};y.querySelectorAll("[data-cargo]").forEach(T=>{T.value&&(ue[T.dataset.cargo]=T.value)});const xe=Object.values(ue);if(new Set(xe).size!==xe.length){n.aviso("Cada miembro solo puede tener un cargo."),B.disabled=!1;return}const N=await hh(B.dataset.guardarCargos,ue);n.aviso(N??"¡Cargos nombrados!")}else if("volverBarco"in B.dataset){const ue=Dd({...he,accion:he.accion?.tipo==="viajar"?void 0:he.accion},!0);ht({...ue.p,separado:!1}),n.aviso("¡De vuelta al barco con tu tripulación!")}else if(B.dataset.unirse){const ue=S(B.dataset.unirse);if(!ue)return;ht({...he,tripulacion:ue.id,registro:le(`Se unió a la tripulación «${ue.nombre}».`)}),n.aviso(`¡Bienvenido a bordo de «${ue.nombre}»!`)}else if("fundar"in B.dataset){const ue=y.querySelector("#nombre-tripulacion")?.value.trim()??"";if(ue.length<3){n.aviso("El nombre necesita al menos 3 letras."),B.disabled=!1;return}B.textContent="Fundando…";const xe=await fh(rt(),ue,he.id);if(xe.error){n.aviso(xe.error),B.disabled=!1,B.textContent="Fundar";return}ht({...he,tripulacion:xe.fila.id,registro:le(`Fundó la tripulación «${ue}» y se nombró capitán.`)}),n.aviso(`¡Nace la tripulación «${ue}»! Pronto se unirán los primeros piratas.`)}else if(B.dataset.dejar){const ue=S(B.dataset.dejar);ht({...he,tripulacion:void 0,registro:le(`Dejó la tripulación «${ue?.nombre??""}».`)}),n.aviso("Has dejado la tripulación.")}else if(B.dataset.disolver){if(!confirm("¿Disolver la tripulación? Todos sus miembros se quedarán sin ella.")){B.disabled=!1;return}const ue=S(B.dataset.disolver);await ph(B.dataset.disolver),ht({...he,tripulacion:void 0,registro:le(`Disolvió la tripulación «${ue?.nombre??""}».`)}),n.aviso("La tripulación se ha disuelto.")}l(X,!1)})}const S=y=>zo(rt()).find(X=>X.id===y)??null;function O(y){const X=on().filter(B=>B.mar===y),Z=(B,he)=>({id:`j-${B.id}`,nombre:B.apodo?`${B.nombre} «${B.apodo}»`:B.nombre,bando:B.bando,nivel:B.nivel,aspecto:B.aspecto,recompensa:B.bando==="marine"?0:B.recompensa??0,jugador:!0,mio:he,creador:!!B.creador});return[...xn(y).map(B=>({id:`b-${B.id}`,nombre:Zi(B),bando:B.bando,nivel:B.nivel,aspecto:B.aspecto,recompensa:wh(B),jugador:!1,mio:!1,creador:!1})),...X.map(B=>Z(B,!0)),...An().filter(B=>B.mar===y&&!X.some(he=>he.id===B.id)).map(B=>Z(B,!1))]}const R=y=>y.creador?' <span class="chip-jugador creador">Creador</span>':y.mio?' <span class="chip-jugador mio">Tú</span>':y.jugador?' <span class="chip-jugador">Jugador</span>':"";function D(){const y=rt(),X=O(y),Z=Ct()?Ye():null,B=(v,C,$)=>`<li class="${C.mio?"fila-mia":""}"><span class="pos">${v+1}</span><i data-sprite="${C.id}"></i><span><b>${Me(C.nombre)}${R(C)}</b><small class="bando-${C.bando}">${bn[C.bando].nombre} · Nv. ${C.nivel}</small></span><em>${$}</em>${C.jugador&&!C.mio&&Z?`<button class="mini-boton duelo" data-desafiar="${C.id.slice(2)}" title="Desafiar a un duelo">⚔</button>`:""}</li>`,he=v=>{const C=v.slice(0,15).map((W,G)=>[G,W]),$=v.findIndex(W=>W.mio);return $>=15&&C.push([$,v[$]]),C},le=X.filter(v=>v.bando!=="marine"&&(v.recompensa>0||v.jugador)).sort((v,C)=>C.recompensa-v.recompensa),ue=X.filter(v=>v.bando==="marine").sort((v,C)=>C.nivel-v.nivel),xe=[...X].sort((v,C)=>C.nivel-v.nivel),N=he(le),T=he(ue),ce=he(xe),te=[...on(),...An()].filter(v=>v.mar===y&&v.fruta),re=_s(y,te.map(v=>v.fruta)),L=[...re.entries()].map(([v,C])=>({e:X.find($=>$.id===`b-${C}`),fid:v})),V=new Map;for(const[,v]of[...N,...T,...ce])V.set(v.id,v);for(const v of te){const C=X.find($=>$.id===`j-${v.id}`);C&&V.set(C.id,C)}for(const{e:v}of L)V.set(v.id,v);const ae=Z&&Z.bando!=="marine"&&!(Z.recompensa??0);return{titulo:"Tablones",html:`
      <div class="pestanas-hoja"><button class="sel" data-filtro="rec">Recompensas</button><button data-filtro="rangos">Marina</button><button data-filtro="fuertes">Más fuertes</button><button data-filtro="trip">Tripulaciones</button><button data-filtro="frutas">Frutas</button></div>
      <div data-vista="rec"><ol class="ranking">${N.map(([v,C])=>B(v,C,C.recompensa?et(C.recompensa):"Sin recompensa")).join("")}</ol>
        ${ae?`<p class="nota-hoja">${Me(Z.nombre)} aún no tiene recompensa.</p>`:""}</div>
      <div data-vista="rangos" hidden><ol class="ranking">${T.map(([v,C])=>B(v,C,C.creador?"Creador":C.jugador?Va([...on(),...An()].find($=>`j-${$.id}`===C.id)):mh(C.nivel))).join("")}</ol></div>
      <div data-vista="fuertes" hidden><ol class="ranking">${ce.map(([v,C])=>B(v,C,`Nv. ${C.nivel}`)).join("")}</ol></div>
      <div data-vista="trip" hidden>${m(Z)}</div>
      <div data-vista="frutas" hidden><ol class="ranking">${te.map((v,C)=>{const $=V.get(`j-${v.id}`),W=Nt.find(G=>G.id===v.fruta);return B(C,$,Me(W?.nombre??"???"))}).join("")}${L.map(({e:v,fid:C},$)=>B(te.length+$,v,Me(Nt.find(W=>W.id===C).nombre))).join("")}</ol><p class="nota-hoja">${te.length+re.size} de ${Nt.length} frutas encontradas en este mar. Solo un bot por mar tiene una; las demás son para los jugadores, y no es fácil conseguirlas.</p></div>`,despues:v=>{Yi(v,new Map([...V.values()].map(C=>[C.id,cs(C.aspecto,1.6)]))),ze(v),w(v,"tablones"),v.querySelectorAll("[data-desafiar]").forEach(C=>C.addEventListener("click",()=>{s(),n.desafiar(C.dataset.desafiar)})),v.querySelectorAll("[data-filtro]").forEach(C=>C.addEventListener("click",()=>b=C.dataset.filtro)),b!=="rec"&&v.querySelector(`[data-filtro="${b}"]`)?.click()}}}function F(){const y=[["tienda","Tienda","Provisiones, barcos y sastre"],["arsenal","Arsenal","Armas, habilidades y mejoras"],["se-busca","Se busca","Los carteles del día"],["cofre","Cofre","Objetos, tesoros y logros"],["compendio","Compendio","Las frutas del poder"],["guia","Guía","Cómo funciona el juego"],["normas","Normas","Para convivir en los mares"],["privacidad","Privacidad","Qué datos guardamos"]];return{titulo:"Más",html:`<img class="logo-mas" src="${Zo("assets/logo/logo-banner.jpg")}" alt="OnePirateWorld" /><div class="rejilla-mas">${y.map(([X,Z,B])=>`<button data-ir="${X}"><b>${Z}</b><small>${B}</small></button>`).join("")}
        <button data-accion="mares"><b>Cambiar de mar</b><small>Mar ${rt()}</small></button>
        <a href="${n.rutaGaleria}"><b>Galería de arte</b><small>Todos los dibujos</small></a>
        ${bs.perfil?.rol==="creador"?'<button data-ir="creador" class="boton-creador"><b>👑 Panel del Creador</b><small>Regalos, nombres, roles</small></button>':""}
        ${Ct()?'<button data-accion="salir"><b>Cerrar sesión</b><small>Salir de tu cuenta</small></button>':""}</div>`,despues:X=>{X.querySelectorAll("[data-ir]").forEach(Z=>Z.addEventListener("click",()=>l(Z.dataset.ir))),qe(X)}}}function A(){const y=O(rt()).filter(B=>B.bando!=="marine"&&B.recompensa>0).sort((B,he)=>he.recompensa-B.recompensa).slice(0,8),X=Ct()?Ye():null,Z=X&&X.bando!=="marine"&&!(X.recompensa??0);return{titulo:"Se busca",html:`<p class="nota-hoja">Carteles publicados al amanecer. La recompensa baja poco a poco si el buscado pasa días tranquilo.</p>
        <div class="carteles">${y.map(B=>`<div class="cartel ${B.mio?"cartel-mio":""}"><span class="cartel-titulo">SE BUSCA</span><i data-sprite="${B.id}"></i><b>${Me(B.nombre)}</b>${B.jugador?`<small>${B.creador?"Creador":B.mio?"Tú":"Jugador"}</small>`:""}<span class="cartel-cifra">${et(B.recompensa)}</span><small class="cartel-pie">doblones</small></div>`).join("")}</div>
        ${Z?`<p class="vacio">Todavía nadie busca a ${Me(X.nombre)}. Con unas cuantas fechorías, su cara acabará aquí.</p>`:""}`,despues:B=>Yi(B,new Map(y.map(he=>[he.id,cs(he.aspecto,3)])))}}let M="";function I(){return bs.perfil?.rol!=="creador"?{titulo:"Panel del Creador",html:'<p class="vacio">Solo para el Creador.</p>'}:{titulo:"👑 Panel del Creador",html:`<p class="nota-hoja">Todos los personajes de todos los mares. Toca uno para editarlo. Los cambios llegan al momento.</p>
        <input id="buscar-creador" class="buscador" placeholder="Buscar por nombre…" value="${Me(M)}" />
        <div id="lista-creador"><p class="vacio">Cargando…</p></div>`,despues:y=>{ee(y)}}}async function ee(y){const[X,Z]=await Promise.all([Ch(),Rh()]),B=y.querySelector("#lista-creador");if(!B)return;const he=`<option value="">— Sin fruta —</option>${Nt.map(ue=>`<option value="${ue.id}">${Me(ue.nombre)} (${Nn[ue.rareza].nombre})</option>`).join("")}`,le=()=>{const ue=M.toLowerCase(),xe=X.filter(N=>!ue||N.nombre.toLowerCase().includes(ue));B.innerHTML=xe.map(N=>{const T=N.datos,ce=Z.get(N.id)??"jugador";return`<details class="admin-fila" data-id="${N.id}"><summary><b>${Me(N.nombre)}</b> <small class="bando-${N.bando}">${bn[N.bando].nombre}</small>
            <small>Mar ${N.mar} · Nv. ${N.nivel} · ${et(Number(N.doblones))} 🪙${N.bando!=="marine"?` · 💀 ${et(Number(N.recompensa))}`:""}${T.fruta?` · 🍈 ${Me(Nt.find(te=>te.id===T.fruta)?.nombre??T.fruta)}`:""}${ce!=="jugador"?` · <b class="creador">${ce}</b>`:""}</small></summary>
          <div class="admin-form">
            <label>Dar doblones <span><input type="number" data-campo="doblones" value="100000" /><button class="mini-boton" data-op="doblones">Dar</button></span></label>
            ${N.bando!=="marine"?`<label>Recompensa <span><input type="number" data-campo="recompensa" value="${Number(N.recompensa)}" /><button class="mini-boton" data-op="recompensa">Poner</button></span></label>`:""}
            <label>Nivel <span><input type="number" min="1" max="80" data-campo="nivel" value="${N.nivel}" /><button class="mini-boton" data-op="nivel">Poner</button></span></label>
            <label>Fruta <span><select data-campo="fruta">${he.replace(`value="${T.fruta??""}"`,`value="${T.fruta??""}" selected`)}</select><button class="mini-boton" data-op="fruta">Dar</button></span></label>
            <label>Nombre <span><input data-campo="nombre" maxlength="24" value="${Me(N.nombre)}" /><button class="mini-boton" data-op="nombre">Cambiar</button></span></label>
            ${ce==="creador"?"":`<div class="fila-mini"><button class="mini-boton" data-op="rol" data-rol="${ce==="moderador"?"jugador":"moderador"}">${ce==="moderador"?"Quitar moderador":"Hacer moderador"}</button>
              ${N.creador?"":'<button class="mini-boton peligro" data-op="borrar">Borrar personaje</button>'}</div>`}
          </div></details>`}).join("")||'<p class="vacio">No hay nadie con ese nombre.</p>'};le(),y.querySelector("#buscar-creador")?.addEventListener("input",ue=>{M=ue.target.value,le()}),B.addEventListener("click",async ue=>{const xe=ue.target.closest("[data-op]");if(!xe)return;ue.preventDefault();const N=xe.closest(".admin-fila"),T=N.dataset.id,ce=X.find(V=>V.id===T),te=V=>N.querySelector(`[data-campo="${V}"]`).value;let re=null,L="";switch(xe.disabled=!0,xe.dataset.op){case"doblones":{const V=Math.round(Number(te("doblones")));re=await xa(T,{doblones_suma:V,nota:`El Creador le regaló ${et(V)} doblones.`}),L=`${ce.nombre} recibe ${et(V)} doblones.`;break}case"recompensa":{const V=Math.max(0,Math.round(Number(te("recompensa"))));re=await xa(T,{recompensa:V,nota:`La Marina publicó un cartel nuevo: SE BUSCA por ${et(V)} doblones.`}),L=`Recompensa de ${ce.nombre}: ${et(V)}.`;break}case"nivel":{const V=Math.round(Number(te("nivel")));re=await xa(T,{nivel:V}),L=`${ce.nombre} pasa a nivel ${V}.`;break}case"fruta":{const V=te("fruta")||null,ae=V?Nt.find(x=>x.id===V).nombre:"";re=await xa(T,{fruta:V,...V?{nota:`Un mensajero del Creador le entregó la ${ae}. Se la comió de un bocado.`}:{}}),L=V?`${ce.nombre} tiene ahora la ${ae}.`:`${ce.nombre} se queda sin fruta.`;break}case"nombre":{const V=te("nombre").trim();if(V.length<1){xe.disabled=!1;return}re=await xa(T,{nombre:V}),L=`Ahora se llama ${V}.`;break}case"rol":{const V=xe.dataset.rol;re=await Lh(T,V),L=V==="moderador"?`El dueño de ${ce.nombre} ya es moderador.`:`El dueño de ${ce.nombre} ya no es moderador.`;break}case"borrar":{if(!confirm(`¿Borrar a ${ce.nombre} para siempre?`)){xe.disabled=!1;return}re=await Ph(T),L=`${ce.nombre} ha sido borrado.`;break}}n.aviso(re??L),re?xe.disabled=!1:l("creador",!1)})}let q="provisiones";function U(){const y=Ct()?Ye():null;if(!y)return{titulo:"Tienda",html:'<p class="vacio">Crea un personaje para comprar.</p><button class="boton-oro ancho" data-accion="perfil">Crear personaje</button>',despues:qe};const X=L=>y.creador||y.doblones>=L,Z=vn(y),B=y.barco??"barca",he=["barca","carabela","galeon"],le=`<div class="items">${Ql.map(L=>{const V=Z[L.id],ae=V>=L.max;return`<div class="item tienda-item"><i data-sprite="pr-${L.id}"></i><b>${L.nombre}</b><small>${Me(L.texto)}</small><em>Llevas ${V} de ${L.max}</em>
        <span class="fila-mini"><button class="mini-boton" data-provision="${L.id}" data-n="1" ${!ae&&X(L.precio)?"":"disabled"}>${ae?"Bolsa llena":`Comprar · ${et(L.precio)}`}</button>
        ${!ae&&L.max-V>=3?`<button class="mini-boton" data-provision="${L.id}" data-n="3" ${X(L.precio*3)?"":"disabled"}>×3 · ${et(L.precio*3)}</button>`:""}</span></div>`}).join("")}</div>`,ue=`<div class="items">${co.map(L=>{const V=L.id===B,ae=he.indexOf(L.id)<he.indexOf(B),x=y.nivel>=L.nivel||y.creador,v=V?"<em>⚓ Tu barco</em>":ae?"<em>Ya tienes uno mejor</em>":x?`<button class="mini-boton" data-barco="${L.id}" ${X(L.precio)?"":"disabled"}>Comprar · ${et(L.precio)}</button>`:`<em>🔒 Nivel ${L.nivel}</em>`;return`<div class="item tienda-item ${V?"puesta":""}"><i data-sprite="bc-${L.id}"></i><b>${L.nombre}</b><small>${Me(L.texto)}</small>${v}</div>`}).join("")}</div>`,xe={...gh[B],...y.navio},N=(L,V)=>`<h4>${V}</h4><div class="colores-barco">${_h[L].map(ae=>`<button class="color-barco ${xe[L]===ae?"sel":""}" style="background:${gn[ae-1].hex}" data-navio="${L}" data-c="${ae}" aria-label="${gn[ae-1].nombre}"></button>`).join("")}</div>`,T=`<div class="mi-barco"><h3>Tu barco</h3>
        <div class="vista-barco" id="vista-barco"></div>
        <label class="nombre-barco">Nombre del barco <input id="nombre-barco" maxlength="20" placeholder="Por ejemplo: La Gaviota Roja" value="${Me(y.navio?.nombre??"")}" /></label>
        ${N("colorCasco","Casco")}${N("colorVela","Velas")}${N("colorBandera","Bandera")}${N("colorInsignia","Insignia de la bandera")}
        <button class="boton-oro ancho" data-guardar-navio>⚓ Guardar mi barco (gratis)</button></div>`,ce=`<div class="sastre"><i data-sprite="yo"></i><div>
        <p>Cambia el peinado, la ropa, el sombrero, la complexión o lo que quieras de tu personaje.</p>
        <a class="boton-oro ${X(wr)?"":"apagado"}" href="${X(wr)?Zo(`nuevo/index.html?sastre=${encodeURIComponent(y.id)}&mar=${rt()}`):"#"}">✂ Ir al sastre · ${y.creador?"gratis":et(wr)}</a>
        <small>Solo pagas si guardas los cambios.</small></div></div>`,re=[["provisiones","Provisiones",le],["barcos","Barcos",T+ue],["sastre","Sastre",ce],["armeria","Armería",`<p class="nota-hoja">Espadas, pistolas, puños y escudos. También puedes forjarlas y aprender habilidades.</p>
      <button class="boton-oro ancho" data-ir="arsenal">🗡 Ir a la armería</button>`]];return{titulo:"Tienda",html:`<p class="saldo">${Xt("moneda","#f2b63d")} <b>${y.creador?"∞":et(y.doblones)}</b> doblones</p>
        <div class="pestanas-hoja">${re.map(([L,V])=>`<button class="${L===q?"sel":""}" data-filtro="${L}">${V}</button>`).join("")}</div>
        ${re.map(([L,,V])=>`<div data-vista="${L}" ${L===q?"":"hidden"}>${V}</div>`).join("")}`,despues:L=>{ze(L),L.querySelectorAll("[data-filtro]").forEach(v=>v.addEventListener("click",()=>q=v.dataset.filtro));const V=new Map([["yo",pn(Pn(y.aspecto),3)]]);for(const v of pl)V.set(`bc-${v.id}`,pn(v.dibujar(),2));V.set("pr-grog",pn(xu("grog"),3)),V.set("pr-botiquin",pn(xu("botiquin"),3)),Yi(L,V);const ae=L.querySelector("#vista-barco"),x=()=>{ae.innerHTML="",ae.append(pn(Lu(B,xe),4))};x(),L.querySelectorAll("[data-ir]").forEach(v=>v.addEventListener("click",()=>l(v.dataset.ir))),L.addEventListener("click",v=>{const C=v.target.closest("button");if(!C||C.disabled||C.dataset.filtro||C.dataset.ir)return;if(C.dataset.navio){xe[C.dataset.navio]=Number(C.dataset.c),C.parentElement.querySelectorAll(".color-barco").forEach(G=>G.classList.toggle("sel",G===C)),x();return}const $=Ye();if("guardarNavio"in C.dataset){const G=L.querySelector("#nombre-barco").value.trim();if(G&&!vh(G)){n.aviso("Ese nombre de barco no está permitido.");return}const{colorCasco:ge,colorVela:fe,colorBandera:me,colorInsignia:Ne}=xe;ht({...$,navio:{nombre:G||void 0,colorCasco:ge,colorVela:fe,colorBandera:me,colorInsignia:Ne}}),n.aviso(G?`¡«${G}» luce como nuevo!`:"¡Tu barco luce como nuevo!"),q="barcos",l("tienda",!1);return}const W=G=>$.creador?$.doblones:$.doblones-G;if(C.dataset.provision){const G=Ql.find(me=>me.id===C.dataset.provision),ge={...vn($)},fe=Math.min(Number(C.dataset.n),G.max-ge[G.id]);if(fe<=0||!$.creador&&$.doblones<G.precio*fe)return;ge[G.id]+=fe,ht({...$,bolsa:ge,doblones:W(G.precio*fe)}),n.aviso(`Compras ${fe>1?fe+" de ":""}${G.nombre.toLowerCase()}. Ya va en la bolsa.`)}else if(C.dataset.barco){const G=co.find(ge=>ge.id===C.dataset.barco);if(!$.creador&&$.doblones<G.precio)return;ht({...$,barco:G.id,doblones:W(G.precio),registro:[...$.registro??[],[Date.now(),`Compró una ${G.nombre.toLowerCase()} y la bautizó con ron.`]].slice(-30)}),n.aviso(`¡${G.nombre} comprada! Tus viajes serán más rápidos.`)}else return;l("tienda",!1)})}}}function Y(){const y=Ct()?Ye():null;if(!y)return{titulo:"Cofre",html:'<p class="vacio">Crea un personaje para tener cofre.</p><button class="boton-oro ancho" data-accion="perfil">Crear personaje</button>',despues:qe};const X=Wt(y),Z=vn(y),B=y.capturas??{pirata:0,revolucionario:0},he={bando:y.bando,nivel:y.nivel,recompensa:y.recompensa??0,capturas:B.pirata+B.revolucionario,creador:y.creador},le=(V,ae)=>`<div class="ranura"><b>${V}</b><small>${ae}</small></div>`,ue=`<div class="ranuras">
        ${le("🍶 Grog",`${Z.grog} en la bolsa`)}${le("🩹 Botiquines",`${Z.botiquin} en la bolsa`)}
        ${le("⛵ Barco",Me(co.find(V=>V.id===(y.barco??"barca")).nombre))}
        ${le("🗡 Armas",`${Object.keys(X.armas).length} de ${ec.length}`)}
        ${le("📖 Habilidades",`${Object.keys(X.habilidades).length} de ${Ua.length}`)}
        ${le("💰 Doblones",y.creador?"∞":et(y.doblones))}</div>`,xe=Object.keys(Au).map(V=>{const[ae,x]=V.split(":");return{campo:ae,valor:x,estado:wu(ae,x,he)}}).filter(V=>V.estado!=="oculta"),N=(V,ae)=>Cu[V]?.[ae]??ae,T=`<p class="nota-hoja">Prendas especiales de tu bando. Póntelas en el sastre (Tienda → Sastre).</p>
      <div class="logros">${xe.map(V=>`<div class="logro ${V.estado==="libre"?"hecho":""}"><span class="candado">${V.estado==="libre"?"✅":"🔒"}</span><b>${Me(N(V.campo,V.valor))}</b><small>${V.estado==="libre"?"Desbloqueada":Me(V.estado)}</small></div>`).join("")}</div>`,ce=y.fruta?Nt.find(V=>V.id===y.fruta):null,te=ce?`<div class="fruta-cofre"><i data-sprite="mi-fruta"></i><div><b>${Me(ce.nombre)}</b><small>${Tr[ce.categoria].nombre} · ${Nn[ce.rareza].nombre}</small><p>${Me(ce.poder)}</p><small>Técnicas: ${Me(ce.tecnicas.join(", "))}</small><small>Debilidad: ${Me(ce.debilidad)}</small></div></div>`:`<p class="vacio">${y.busqueda?`Sigues la pista de una fruta (${Math.min(y.busqueda.pistas,3)} de 3 pistas). Mira «Mi pirata».`:"No tienes ninguna fruta. Desde el nivel 5, al explorar, oirás rumores. Mira el Compendio para ver cuáles hay."}</p>`,re=new Set(y.creador?ja.map(V=>V.id):y.logros??[]),L=`<p class="nota-hoja">${re.size} de ${ja.length} logros.</p><div class="logros">${ja.map(V=>`<div class="logro ${re.has(V.id)?"hecho":""}"><span class="candado">${re.has(V.id)?V.icono:"🔒"}</span><b>${Me(V.nombre)}</b><small>${Me(V.como)}</small></div>`).join("")}</div>`;return{titulo:"Cofre",html:`<div class="pestanas-hoja"><button class="sel" data-filtro="obj">Objetos</button><button data-filtro="pre">Prendas</button><button data-filtro="fru">Fruta</button><button data-filtro="log">Logros</button></div>
        <div data-vista="obj">${ue}</div>
        <div data-vista="pre" hidden>${T}</div>
        <div data-vista="fru" hidden>${te}</div>
        <div data-vista="log" hidden>${L}</div>`,despues:V=>{ze(V),ce&&Yi(V,new Map([["mi-fruta",pn(ar(ce.id),4)]]))}}}function j(){const y=rt(),X=xn(y),Z=[...on(),...An()].filter(le=>le.mar===y&&le.fruta),B=new Map(Z.map(le=>[le.fruta,le.nombre]));for(const[le,ue]of _s(y,Z.map(xe=>xe.fruta)))B.set(le,Zi(X.find(xe=>xe.id===ue)));const he=B;return{titulo:"Compendio de frutas",html:`<p class="nota-hoja">Solo existe una de cada fruta en cada mar. ${he.size} de ${Nt.length} ya tienen dueño.</p>
        <div class="compendio">${Nt.map(le=>{const ue=he.get(le.id);return ue?`<div class="fruta conocida" style="--rareza:${Nn[le.rareza].color}"><i data-sprite="f-${le.id}"></i><b>${Me(le.nombre)}</b><small>${Tr[le.categoria].nombre} · ${Nn[le.rareza].nombre}</small><small>${Me(le.poder)}</small><em>La tiene ${Me(ue)}</em></div>`:`<div class="fruta" style="--rareza:${Nn[le.rareza].color}"><i data-sprite="s-${le.id}"></i><b>???</b><small>${Tr[le.categoria].nombre} · ${Nn[le.rareza].nombre}</small><em>Nadie la ha encontrado</em></div>`}).join("")}</div>
        <h3>Debilidad común: ${Me(Zl.nombre)}</h3><p class="nota-hoja">${Me(Zl.descripcion)}</p>`,despues:le=>Yi(le,new Map(Nt.flatMap(ue=>[[`f-${ue.id}`,pn(ar(ue.id),3)],[`s-${ue.id}`,pn(W0(ue.id),3)]])))}}function J(){const y=(X,Z,B)=>`<details class="guia-sec" ${X==="empezar"?"open":""}><summary>${Z}</summary><div>${B}</div></details>`;return{titulo:"Guía",html:`<div class="texto guia">
        <p class="nota-hoja">Toca cada apartado para abrirlo.</p>
        ${y("empezar","🚀 Primeros pasos",`<ol>
          <li><b>Mira el mundo</b> sin cuenta: gira el planeta, acércate (pellizca o usa la rueda) y verás islas, barcos y personajes.</li>
          <li><b>Firma el pacto</b> (botón «Firmar el pacto»): un nombre de usuario secreto y tu correo. Con los dos vuelves a entrar desde cualquier sitio. Nadie más los ve.</li>
          <li><b>Crea tu personaje</b> en 5 pasos: <b>bando</b> (pirata, marine o revolucionario), <b>aspecto</b>, <b>estilo de combate</b>, <b>carácter</b> (3 rasgos y 2 reglas de código) y <b>sueño</b> con nombre y apodo.</li>
          <li><b>Ponle un objetivo</b> en «Mi pirata» y déjalo vivir. ¡Ya está en el mar!</li></ol>`)}
        ${y("vive","🌊 Tu personaje vive solo",`<p>No lo manejas como un muñeco: pasea, entrena, explora, descansa y navega por su cuenta, según su carácter y su objetivo. <b>Sigue viviendo con el juego cerrado</b>: el servidor lo mueve cada pocos minutos. Al volver verás «Mientras no estabas…» con todo lo que hizo.</p>
          <p>La línea de tu ficha dice qué está haciendo ahora. Todo queda en su <b>diario</b> (Mi pirata).</p>`)}
        ${y("ordenes","🎯 Las órdenes",`<p>Cuando quieras, le das una orden con los botones de la ficha:</p><ul>
          <li><b>⛵ Navegar</b>: elige una isla cercana o tócala en el mapa. Los barcos mejores (Tienda) viajan más rápido.</li>
          <li><b>⚔ Pelear</b>: busca un rival en la isla donde está.</li>
          <li><b>💪 Entrenar</b>, <b>🔍 Explorar</b> (oro y rumores de frutas) y <b>💤 Descansar</b>.</li></ul>
          <p>El botón <b>◎</b> te lleva hasta tu personaje en el mapa.</p>`)}
        ${y("objetivos","✦ Objetivos y momentos clave",`<p>En «Mi pirata» eliges un <b>objetivo</b> (hacerse fuerte, encontrar una fruta, formar tripulación, hacer fortuna…). Tiene pasos que se marcan solos con ✓ cuando los cumples, y tu personaje se esfuerza en ellos.</p>
          <p>Cuando pasa algo importante se enciende el <b>✦ de tu ficha</b>: un <b>momento clave</b>. Por ejemplo, cobrar la recompensa de un objetivo cumplido (experiencia y doblones) o decidir si te comes una fruta.</p>
          <p>A veces a tu personaje <b>le pasan cosas y te pregunta qué hacer</b>: un náufrago pidiendo ayuda, un cofre con trampa, un soborno, una traición en la tripulación, un reto de honor, un mapa del tesoro dudoso… Cada decisión tiene consecuencias (doblones, experiencia, méritos, ¡o quedarte sin tripulación!). Si no contestas en <b>12 horas</b>, decide él solo según su carácter, aunque tengas el juego cerrado.</p>
          <p><b>🥋 Maestros:</b> algunas islas tienen un maestro. Entrenar allí da el <b>doble de experiencia</b>, y la primera vez que entrenas con cada maestro te enseña <b>una habilidad gratis</b>. En «Navegar» tienes el botón «Ir al maestro más cercano».</p>`)}
        ${y("combate","⚔ Combate",`<p>Por turnos: <b>Atacar</b> (técnicas de tu arma), <b>Habilidad</b>, <b>Fruta</b> (si tienes), <b>Defender</b>, cambiar de <b>Arma</b>, <b>Bolsa</b> (grog cura un 25 %, botiquín un 50 %) y <b>Huir</b>.</p>
          <ul><li><b>Puntos de mejora</b>: cada nivel te da 3. ¡Gástalos! Si ves «💪 N puntos» en tu ficha, tócalo, o usa «Repartir automáticamente» en Arsenal → Mejoras. Sin ellos peleas muy por debajo de tu nivel.</li>
          <li><b>Arsenal</b>: compra armas, fórjalas (+10 % de daño por nivel) y aprende habilidades.</li>
          <li><b>Perder</b> contra un bot cuesta el 5 % de tus doblones (como mucho 2.000). Un entrenamiento no cuesta nada.</li></ul>`)}
        ${y("estilo","🗡 Estilo de combate y código",`<p>El <b>estilo</b> (espadachín, luchador, tirador, navegante, médico, cocinero o científico) da una ventaja para siempre. El <b>código</b> son 2 reglas que tu personaje cumple siempre: cada una da una ventaja, pero también un compromiso (por ejemplo, «Nunca huye» da +5 % de fuerza, pero no te deja huir).</p>
          <p>Si tu personaje es de antes, puedes elegirlos una vez en «Mi pirata».</p>`)}
        ${y("duelos","🤺 Duelos contra jugadores",`<p>Toca a otro jugador en el mapa o el botón ⚔ en los Tablones. Tú controlas a tu personaje y el rival pelea solo con todo lo suyo. Pueden pelear los marines contra los demás, y los piratas de distintas tripulaciones.</p>
          <p>Como mucho 5 duelos al día y uno por rival. Ganar da mucha recompensa (o méritos); el rival se entera al volver. Los últimos duelos salen en Noticias → Duelos.</p>`)}
        ${y("bandos","🏴‍☠️ Recompensas, méritos y bandos",`<ul>
          <li><b>Piratas y revolucionarios</b> ganan <b>recompensa</b> al vencer (mucho más contra marines y en duelos), con un tope diario. Si pasan 3 días sin ganar, baja un 2 % al día.</li>
          <li><b>Marines</b>: sin recompensa; ganan <b>méritos</b> al capturar. Su rango sube con los méritos, y solo los 4 con más méritos de cada mar llegan a <b>Almirante</b>. A nivel 10 la Marina les regala 10.000 doblones.</li>
          <li><b>Revolucionarios</b>: desde nivel 10, <b>furia</b> (+50 % de daño contra piratas y marines).</li></ul>`)}
        ${y("frutas","🍈 Frutas del poder",`<p>Hay 36 y solo una de cada en cada mar. Son difíciles de conseguir:</p><ol>
          <li>Desde el nivel 5, al <b>explorar</b> puedes oír un rumor (con el objetivo «Encontrar una fruta» los oyes más).</li>
          <li>Reúne <b>3 pistas</b> (como mucho una al día): el mar, cómo es la isla y su nombre.</li>
          <li>Navega a esa isla y vence a su <b>guardián</b> (nivel 39 o más, y con mucha vida).</li>
          <li>En el momento clave decides si te la comes. ¡Si otro jugador se la come antes, llegas tarde!</li></ol>
          <p>Todas comparten una debilidad: la Noche Hueca. Las ves en el Compendio.</p>`)}
        ${y("tripulacion","⚓ Tripulaciones",`<p>Un pirata de nivel 10 funda una tripulación solo con el nombre; cualquier pirata se puede unir (Tablones → Tripulaciones) y los bots se suman solos con el tiempo. La tripulación va <b>siempre junta</b> siguiendo al capitán; si mandas a tu pirata a otro sitio, vuelve al barco cuando entras otra vez.</p>
          <ul><li><b>Bonus</b>: +1 % de fuerza y resistencia por miembro (máximo +10 %).</li>
          <li><b>Bandera</b>: los colores del barco del capitán.</li>
          <li><b>Cargos</b> que nombra el capitán: Segundo, Contramaestre, Navegante, Cocinero y Médico, cada uno con su ventaja.</li>
          <li><b>Chat privado</b> en la Taberna.</li></ul>`)}
        ${y("tienda","🛒 Tienda, barco y sastre",`<ul><li><b>Provisiones</b>: grog y botiquines para la bolsa.</li>
          <li><b>Barcos</b>: carabela (30 % más rápida) y galeón (50 %). Personaliza el tuyo: nombre y colores del casco, las velas y la bandera.</li>
          <li><b>Sastre</b>: cambia el aspecto de tu personaje. Algunas prendas se <b>desbloquean</b> con el nivel, la recompensa o las capturas (míralas en el Cofre → Prendas).</li></ul>`)}
        ${y("progreso","🏆 Progreso, logros y cofre","<p>Ganas experiencia y oro con un <b>tope diario</b>, para que nadie se dispare el primer día: el juego premia volver cada día. El <b>Cofre</b> guarda tus objetos, prendas, tu fruta y tus <b>16 logros</b>. Los <b>Tablones</b> muestran a los más buscados, los marines con más rango, los más fuertes, las tripulaciones y quién tiene cada fruta.</p>")}
        ${y("mundo","🌍 El mundo","<p>Cuatro mares (Alba, Ocaso, Coral y Bruma) separados por <b>El Espinazo</b>, un continente que da la vuelta al planeta, y por las <b>Aguas Dormidas</b>, sin viento. En el centro está la <b>Senda de las Mareas</b>, solo para los más fuertes: algunas zonas tienen nivel mínimo. Hay 3 mundos (Mar Esmeralda, Plateado y Escarlata), cada uno con sus personajes, noticias y chat; cámbialo con el botón «Cambiar».</p>")}
        ${y("consejos","💡 Consejos",`<ul><li>Gasta siempre tus puntos de mejora.</li><li>Lleva grog en la bolsa antes de pelear.</li><li>Elige un objetivo: tu personaje trabaja mejor con un rumbo y te llevas premio al cumplirlo.</li>
          <li>Únete a una tripulación: el bonus y los cargos ayudan mucho.</li><li>No le digas a nadie tu nombre de usuario.</li></ul>`)}
      </div>`}}function Q(){return{titulo:"Normas",html:`<div class="texto"><ul>
      <li>Trata a todos con respeto. Nada de insultos, acoso, amenazas ni odio.</li>
      <li>No compartas datos personales: ni tuyos ni de otros (nombre real, dirección, teléfono…).</li>
      <li>Nada de contenido sexual, violento de verdad ni ilegal.</li>
      <li>No hagas spam ni publicidad.</li>
      <li>Un nombre de personaje ofensivo puede ser cambiado por la moderación.</li>
      <li>Si algo te molesta, repórtalo o silencia a esa persona. Los moderadores revisan los reportes.</li></ul></div>`}}function _e(){return{titulo:"Privacidad",html:`<div class="texto">
      <h3>Qué guardamos</h3>
      <p>Para tu cuenta: tu <b>correo</b> y tu <b>nombre de usuario</b> (con los dos se entra; no hay contraseña aparte). Para el juego: tus personajes, sus duelos y tus mensajes de la Taberna.</p>
      <h3>Dónde</h3>
      <p>En los servidores de Supabase, el servicio que usa el juego, y una copia en tu navegador para que cargue más rápido.</p>
      <h3>Qué ven los demás</h3>
      <p>Los demás jugadores ven a tus personajes (nombre, aspecto, nivel, recompensa…) y tus mensajes de la Taberna, firmados con el nombre de tu pirata. <b>Nadie ve tu correo ni tu nombre de usuario.</b> No le digas a nadie tu nombre de usuario: con él y tu correo se entra en tu cuenta.</p>
      <h3>Cuánto tiempo</h3>
      <p>Los mensajes de la Taberna se borran a los 90 días. Tus personajes se guardan mientras exista tu cuenta.</p>
      <h3>Borrar tu cuenta</h3>
      <p>Puedes pedir que borremos tu cuenta y todo lo tuyo en cualquier momento. No vendemos datos a nadie.</p></div>`}}let ye="equipo";function Re(){const y=Ct()?Ye():null;if(!y)return{titulo:"Arsenal",html:'<p class="vacio">Crea un personaje para tener arsenal.</p>'};const X=Wt(y),Z=Xa(y.nivel,X),B=L=>y.creador?!0:y.doblones>=L,he=L=>`<span class="rareza-chip" style="--r:${Nn[L].color}">${Nn[L].nombre}</span>`,le=(L,V)=>{const ae=It(L);return`<div class="item" style="--r:${Nn[ae.rareza].color}"><b>${Me(ae.nombre)}</b>${he(ae.rareza)}<small>${Me(ae.descripcion)}</small><small>${ae.tipo==="escudo"?`+${ae.dano} de defensa`:`Daño ×${ae.dano}`}${ae.dosManos?" · Dos manos":""}</small>${V}</div>`},ue=[X.principal,X.secundaria].filter(Boolean),xe=`
      <p class="nota-hoja">Llevas dos armas para cambiar en combate, un escudo si tu arma lo permite y hasta ${uo} habilidades.</p>
      <h3>Armas en la mano</h3>
      <div class="items">${ue.map((L,V)=>le(L,`<em>${V===0?"Principal":"Secundaria"} · Nivel ${X.armas[L]??1}</em>`)).join("")}
        ${X.escudo?le(X.escudo,`<em>Escudo · Nivel ${X.armas[X.escudo]??1}</em><button class="mini-boton" data-quitar-escudo>Quitar</button>`):'<div class="item vacio-item"><b>Sin escudo</b><small>Compra uno en la tienda.</small></div>'}</div>
      <h3>Cambiar armas</h3>
      <div class="items">${Object.keys(X.armas).filter(L=>!ue.includes(L)&&L!==X.escudo).map(L=>{if(It(L).tipo==="escudo"){const ae=ue.some(x=>It(x).dosManos);return le(L,ae?"<em>No con armas de dos manos</em>":`<button class="mini-boton" data-escudo="${L}">Equipar escudo</button>`)}return le(L,`<span class="fila-mini"><button class="mini-boton" data-principal="${L}">Principal</button><button class="mini-boton" data-secundaria="${L}">Secundaria</button></span>`)}).join("")||'<p class="vacio">No tienes más armas. Compra en la tienda.</p>'}</div>
      <h3>Habilidades equipadas (${X.equipadas.length}/${uo})</h3>
      <div class="items">${Object.keys(X.habilidades).map(L=>{const V=Ua.find(v=>v.id===L),ae=X.equipadas.includes(L),x=vl(V,X);return`<div class="item ${ae?"puesta":""}"><b>${Me(V.nombre)}</b><span class="tipo-hab">${V.tipo}</span><small>${Me(V.descripcion)}</small><em>Nivel ${X.habilidades[L]}${x?"":" · necesita "+V.requiere}</em>
          <button class="mini-boton" data-equipar="${L}">${ae?"Quitar":"Equipar"}</button></div>`}).join("")}</div>
      ${y.fruta?`<h3>Fruta del poder</h3><div class="items">${(Hu[y.fruta]??[]).map(L=>`<div class="item"><b>${Me(L.nombre)}</b><small>${Me(L.descripcion)}</small></div>`).join("")}</div>`:""}`,N=`
      <p class="nota-hoja">Tienes ${y.creador?"∞":et(y.doblones)} doblones.</p>
      <div class="items">${ec.filter(L=>!(L.id in X.armas)).map(L=>{const V=y.nivel>=L.nivelMin||y.creador;return le(L.id,`<em>${et(L.precio)} doblones · Nivel ${L.nivelMin}</em>
          <button class="mini-boton" data-comprar="${L.id}" ${V&&B(L.precio)?"":"disabled"}>${V?"Comprar":"🔒 Nivel "+L.nivelMin}</button>`)}).join("")}</div>`,T=`
      <p class="nota-hoja">Cada nivel de forja sube un 10% el daño del arma (máximo nivel ${ba}).</p>
      <div class="items">${Object.entries(X.armas).filter(([L])=>It(L).precio>0||L==="sable-grumete").map(([L,V])=>{const ae=It(L),x=tc(ae,V);return le(L,`<em>Nivel ${V} de ${ba}</em>${V>=ba?"<em>¡Al máximo!</em>":`<button class="mini-boton" data-forjar="${L}" ${B(x)?"":"disabled"}>Mejorar · ${et(x)}</button>`}`)}).join("")}</div>`,ce=`
      <div class="items">${Ua.map(L=>{const V=X.habilidades[L.id]??0,ae=V?nc(L,V):L.precio,x=y.nivel>=L.nivelMin||y.creador,v=V>=ba?"<em>¡Al máximo!</em>":x?`<button class="mini-boton" data-aprender="${L.id}" ${B(ae)?"":"disabled"}>${V?"Mejorar":"Aprender"} · ${ae?et(ae):"Gratis"}</button>`:`<em>🔒 Nivel ${L.nivelMin}</em>`;return`<div class="item ${V?"":"sin-aprender"}"><b>${Me(L.nombre)}</b><span class="tipo-hab">${L.tipo}</span><small>${Me(L.descripcion)}</small><small>Por nivel: ${Me(L.porNivel)}${L.requiere?` · Necesita ${L.requiere}`:""}</small><em>${V?`Nivel ${V} de ${ba}`:"Sin aprender"}</em>${v}</div>`}).join("")}</div>`,te=`
      <p class="nota-hoja">Ganas 3 puntos por cada nivel. Te quedan <b>${y.creador?"∞":Z}</b>. ¡Úsalos! Sin ellos tu personaje pelea muy por debajo de su nivel.</p>
      ${Z>0&&!y.creador?`<button class="boton-oro ancho" data-repartir>✨ Repartir ${Z} puntos automáticamente</button>`:""}
      <div class="mejoras">${Object.keys(Bo).map(L=>`
        <div class="mejora"><b>${L[0].toUpperCase()+L.slice(1)}</b><small>${Bo[L].texto} por punto</small><em>${X.mejoras[L]} puntos</em>
          <button class="mini-boton" data-punto="${L}" ${Z>0||y.creador?"":"disabled"}>+1</button></div>`).join("")}</div>`,re=[["equipo","Equipo",xe],["tienda","Tienda",N],["forja","Forja",T],["habilidades","Habilidades",ce],["mejoras","Mejoras",te]];return{titulo:"Arsenal",html:`<div class="pestanas-hoja">${re.map(([L,V])=>`<button class="${L===ye?"sel":""}" data-filtro="${L}">${V}</button>`).join("")}</div>
        ${re.map(([L,,V])=>`<div data-vista="${L}" ${L===ye?"":"hidden"}>${V}</div>`).join("")}`,despues:L=>{ze(L),L.querySelectorAll("[data-filtro]").forEach(V=>V.addEventListener("click",()=>ye=V.dataset.filtro)),L.addEventListener("click",V=>{const ae=V.target.closest("button");if(!ae||ae.disabled||ae.dataset.filtro)return;const x=ae.dataset,v=structuredClone(X);let C=0,$="";if(x.comprar){const W=It(x.comprar);v.armas[W.id]=1,C=W.precio,$=`Has comprado: ${W.nombre}.`}else if(x.forjar){const W=It(x.forjar);C=tc(W,v.armas[W.id]),v.armas[W.id]++,$=`${W.nombre} sube a nivel ${v.armas[W.id]}.`}else if(x.aprender){const W=Ua.find(ge=>ge.id===x.aprender),G=v.habilidades[W.id]??0;C=G?nc(W,G):W.precio,v.habilidades[W.id]=G+1,$=G?`${W.nombre} sube a nivel ${G+1}.`:`Has aprendido ${W.nombre}.`}else if(x.equipar){const W=v.equipadas.indexOf(x.equipar);if(W>=0)v.equipadas.splice(W,1);else if(v.equipadas.length>=uo){n.aviso(`Solo puedes llevar ${uo}. Quita una primero.`);return}else v.equipadas.push(x.equipar)}else if(x.principal||x.secundaria){const W=x.principal||x.secundaria;x.principal?v.principal=W:v.secundaria=W,It(W).dosManos&&(v.escudo=void 0)}else if(x.escudo)v.escudo=x.escudo;else if("quitarEscudo"in x)v.escudo=void 0;else if(x.punto)v.mejoras[x.punto]++;else if("repartir"in x){const W=Xa(y.nivel,v),G=[["vida",.3],["fuerza",.25],["resistencia",.2],["tecnica",.15],["velocidad",.1]];let ge=0;for(const[fe,me]of G){const Ne=Math.floor(W*me);v.mejoras[fe]+=Ne,ge+=Ne}for(let fe=0;ge<W;fe++,ge++)v.mejoras[G[fe%G.length][0]]++;$=`Repartidos ${W} puntos de mejora.`}else return;C&&!y.creador&&y.doblones<C||(ht({...y,arsenal:v,doblones:y.creador?y.doblones:y.doblones-C}),$&&n.aviso($),l("arsenal",!1))})}}}function ze(y){y.querySelectorAll("[data-filtro]").forEach(X=>X.addEventListener("click",()=>{y.querySelectorAll("[data-filtro]").forEach(Z=>Z.classList.toggle("sel",Z===X)),y.querySelectorAll("[data-vista]").forEach(Z=>Z.hidden=Z.dataset.vista!==X.dataset.filtro)}))}function qe(y){y.querySelectorAll("[data-accion]").forEach(X=>X.addEventListener("click",()=>{const Z=X.dataset.accion;if(Z==="localizar")s(),n.localizar();else if(Z==="perfil")s(),n.abrirPerfil();else if(Z==="mares")n.abrirMares();else if(Z==="salir")s(),n.cerrarSesion();else if(Z==="entrenar")s(),n.entrenar();else if(Z==="guardian")n.guardian();else if(Z==="cobrar-objetivo")s(),n.cobrarObjetivo();else if(Z==="comer-fruta")n.comerFruta();else if(Z==="navegar-busqueda"){const B=Ye();B?.busqueda&&n.navegarA(B.busqueda.isla)}else if(Z==="hoja"){const B=Ye();B&&wd(B)}}))}function de(y){ye=y,l("arsenal")}return{abrir:l,cerrar:s,abrirArsenal:de,get actual(){return o}}}const bu=["¿Alguien ha visto un barco con velas negras por el Mar del Alba?","Busco tripulación. Sé cocinar y pelear un poco.","Dicen que en Cayo Ballena hay un maestro de espada.","¡Una ronda para todos, invito yo!","Cuidado con la marina, hoy hay muchos barcos en la zona.","He oído que alguien encontró una fruta rara cerca de las ruinas.","Mañana zarpo hacia la Senda de las Mareas. Deseadme suerte.","¿Qué tal las tormentas por el Ocaso?","Alguien me debe 300 doblones y sabe quién es.","Las Aguas Dormidas dan miedo de verdad. No hay ni una brisa.","Vendo mapa casi completo, le falta un trozo.","Hoy he ganado mi primer duelo :)"];function Da(n,e){try{const t=localStorage.getItem(n);return t?JSON.parse(t):e}catch{return e}}function us(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}let sr=null;function db(n,e,t=null){sr?.();const i=n.querySelector("#chat"),a=n.querySelector("#silenciados"),o=xn(e),r=Date.now(),s=[];for(let p=0;p<(t?0:8);p++){const _=Math.floor(r/24e4)-p,b=o[_*7919%o.length];s.push({id:`b${_}`,autor:Zi(b),texto:bu[_*31%bu.length],t:_*24e4,bot:!0})}let l=[];const u=bs.usuario?.id,h=Mh(),d=()=>{const p=Da("taberna.silenciados",[]),_=Da("taberna.reportados",[]),b=[...s,...l.map(g=>({id:String(g.id),autor:g.autor_nombre,texto:g.texto,t:Date.parse(g.creado),mio:g.autor===u,oculto:g.oculto}))].sort((g,m)=>g.t-m.t).filter(g=>!p.includes(g.autor));i.innerHTML=b.map(g=>_.includes(g.id)||g.oculto&&!h?'<li class="reportado">Mensaje oculto: lo revisará la moderación.</li>':`<li class="${g.mio?"mio":""} ${g.oculto?"oculto":""}"><b>${Me(g.autor)}</b>${g.bot?'<small class="bot-tag">bot</small>':""}<small>${Na(g.t)}</small><p>${Me(g.texto)}</p>
        ${g.mio||g.bot?"":`<span class="acciones-msg"><button data-reportar="${g.id}">Reportar</button><button data-silenciar="${Me(g.autor)}">Silenciar</button>${h?`<button data-ocultar="${g.id}">Ocultar (moderador)</button>`:""}</span>`}</li>`).join(""),a.innerHTML=p.length?`Silenciados: ${p.map(g=>`<button data-quitar="${Me(g)}">${Me(g)} ✕</button>`).join(" ")}`:"",n.scrollTop=n.scrollHeight};n.addEventListener("click",async p=>{const _=p.target.closest("button");_&&(_.dataset.reportar?(us("taberna.reportados",[...Da("taberna.reportados",[]),_.dataset.reportar]),/^\d+$/.test(_.dataset.reportar)&&await Sh(Number(_.dataset.reportar)),d()):_.dataset.silenciar?(us("taberna.silenciados",[...new Set([...Da("taberna.silenciados",[]),_.dataset.silenciar])]),d()):_.dataset.quitar?(us("taberna.silenciados",Da("taberna.silenciados",[]).filter(b=>b!==_.dataset.quitar)),d()):_.dataset.ocultar&&(await yh(Number(_.dataset.ocultar)),l=l.map(b=>String(b.id)===_.dataset.ocultar?{...b,oculto:!0}:b),d()))}),n.querySelector("#chat-form")?.addEventListener("submit",async p=>{p.preventDefault();const _=n.querySelector("#chat-texto"),b=_.value.trim();if(!b)return;const m=Ye()?.nombre??"Marinero sin nombre";_.disabled=!0;const P=await Eh(e,m,b,t);if(_.disabled=!1,P){_.setCustomValidity(P),_.reportValidity(),setTimeout(()=>_.setCustomValidity(""),2500);return}_.value="",_.focus()}),d(),Th(e,t).then(p=>{l=p,d()}),sr=Ah(e,p=>{(p.tripulacion??null)===t&&(l.some(_=>_.id===p.id)||(l.push(p),d()))})}function hb(n){if(n.fruta)return`<p class="nota-hoja">Ya te comiste la <b>${Me(Nt.find(o=>o.id===n.fruta)?.nombre??"")}</b>. Nadie puede comer dos.</p>`;const e=n.busqueda;if(!e)return n.nivel<ic?`<p class="vacio">A partir del nivel ${ic}, al explorar islas tu personaje empezará a oír rumores sobre frutas.</p>`:'<p class="vacio">Aún no has oído ningún rumor. Explora islas: con el objetivo «Encontrar una fruta del poder» los oirás más a menudo.</p>';const t=bh(e),i=`<div class="progreso"><i style="width:${Math.round(Math.min(e.pistas,kn)/kn*100)}%"></i></div>`;let a="";return e.vencido?a='<button class="boton-oro ancho" data-accion="comer-fruta">✦ Decidir: ¿comérsela?</button>':e.pistas>=kn&&(a=Uu(n)?`<button class="boton-oro ancho" data-accion="guardian">⚔ Enfrentar al guardián (Nv. ${xl(n.nivel)})</button>`:`<button class="boton-oro ancho" data-accion="navegar-busqueda">⛵ Navegar a ${Me(t.nombre)}</button>`),`<div class="objetivo busqueda"><b>${e.vencido?"La fruta te espera":e.pistas>=kn?"Ya sabes dónde está":"Siguiendo un rumor"}</b>
    ${i}<small>${Math.min(e.pistas,kn)} de ${kn} pistas · como mucho una al día, explorando</small>
    <p>${Me(xh(e))}</p>${a}</div>`}function xu(n){const e=new Le(16,16);return n==="grog"?(e.rect(6,1,4,2,c.corteza),e.rect(7,3,2,3,c.selva),e.rect(5,6,6,8,c.selva),e.rect(6,7,1,5,c.hoja),e.rect(5,9,6,3,c.pergamino),e.rect(6,10,4,1,c.granate),e.rect(5,14,6,1,c.noche)):(e.rect(3,4,10,9,c.hueso),e.rect(3,12,10,1,c.niebla),e.rect(6,2,4,2,c.corteza),e.rect(7,5,2,7,c.rojo),e.rect(5,7,6,2,c.rojo)),e}function lr(n){const e=Cd(n.rasgos,n.nivel);for(const[l,u]of Object.entries(n.arsenal.mejoras))e[l]+=Bo[l].cantidad*u;const t=l=>n.arsenal.equipadas.includes(l)?n.arsenal.habilidades[l]??0:0;let i=Math.round((60+e.vida*1.3)*(1+.06*t("corazon-leon"))),a=e.resistencia*(1+.08*t("piel-hierro"))+(n.arsenal.escudo?It(n.arsenal.escudo).dano:0),o=e.fuerza,r=e.tecnica,s=e.velocidad;return n.creador&&(i*=3,a*=3,o*=3,r*=3,s*=3),{nombre:n.nombre,bando:n.bando,aspecto:n.aspecto,nivel:n.nivel,rasgos:n.rasgos,arsenal:n.arsenal,fruta:n.fruta,arma:n.arsenal.principal,vida:i,vidaMax:i,energia:100,fuerza:o,resistencia:a,velocidad:s,tecnica:r,critico:.06+.03*t("ojo-critico"),esquivaBase:(n.rasgos.includes("astuto")?.05:0)+.05*t("pies-ligeros"),mejoras:{fuerza:0,resistencia:0,velocidad:0},pociones:n.creador?9:n.bolsa?.grog??1,botiquines:n.creador?9:n.bolsa?.botiquin??0,bloqueo:0,devuelve:0,esquiva:0,sinGuardia:0,cegado:{cantidad:0,turnos:0},usadas:new Set}}function $a(n){const e=It(n.arma),t=e.tipo==="escudo"?rc.punos:rc[e.tipo];return e.tecnica?[...t,kh[e.tecnica]]:t}function Nd(n){return n.arsenal.equipadas.map(e=>Dh(e)).filter(e=>e&&e.tipo!=="pasiva"&&vl(e,{...n.arsenal,principal:n.arma})).map(e=>Vh(Gh[e.id],n.arsenal.habilidades[e.id]??1)).filter(e=>!(e.efectos?.unaVez&&n.usadas.has(e.id)))}const dl=n=>n.fruta?Hu[n.fruta]??[]:[],fb=n=>[n.arsenal.principal,n.arsenal.secundaria].filter(e=>!!e);class pb{l;terminado=!1;r;constructor(e,t,i=Date.now()){this.l=[e,t],this.r=Mn(i)}eleccionIA(e){const t=this.l[e],i=this.l[1-e],a=t.rasgos.includes("valiente"),o=t.rasgos.includes("prudente"),r=Nd(t).filter(p=>p.energia<=t.energia),s=r.filter(p=>p.efectos?.cura);if(t.vida<t.vidaMax*(a?.15:.3)){if(s.length)return{tipo:"tecnica",tecnica:s[0],deArma:!1};if(t.botiquines>0)return{tipo:"objeto",item:"botiquin"};if(t.pociones>0)return{tipo:"objeto",item:"grog"}}const l=r.filter(p=>p.efectos?.bloqueo||p.efectos?.esquiva);if(l.length&&this.r()<(o?.3:.15))return{tipo:"tecnica",tecnica:l[Math.floor(this.r()*l.length)],deArma:!1};if(t.energia<15&&this.r()<.5)return{tipo:"defender"};const u=dl(t).filter(p=>p.energia<=t.energia);if(u.length&&this.r()<.45)return{tipo:"tecnica",tecnica:u[Math.floor(this.r()*u.length)],deArma:!1};const h=[...$a(t),...r].filter(p=>p.energia<=t.energia&&p.poder===0&&(p.efectos?.mejora||p.efectos?.cegar));if(h.length&&this.r()<.15)return{tipo:"tecnica",tecnica:h[Math.floor(this.r()*h.length)],deArma:!!$a(t).find(p=>p.id===h[0].id)};const d=$a(t).filter(p=>p.poder>0&&p.energia<=t.energia);return{tipo:"tecnica",tecnica:(i.vida<i.vidaMax*.35||a?[...d].sort((p,_)=>_.poder-p.poder)[0]:d[Math.floor(this.r()*d.length)])??$a(t)[0],deArma:!0}}turno(e){const t=[],i=[e,this.eleccionIA(1)];for(const s of this.l)s.bloqueo=0,s.devuelve=0,s.esquiva=0;const a=s=>s.tipo!=="tecnica"?2:s.tecnica.efectos?.prioridad?1:0,o=s=>this.l[s].velocidad*(1+this.l[s].mejoras.velocidad)+this.r()*3,r=a(i[0])!==a(i[1])?a(i[0])>a(i[1])?[0,1]:[1,0]:o(0)>=o(1)?[0,1]:[1,0];for(const s of r){if(this.terminado)break;this.ejecutar(s,i[s],t)}for(const s of this.l)s.energia=Math.min(100,s.energia+5),s.cegado.turnos>0&&--s.cegado.turnos===0&&(s.cegado.cantidad=0),s.sinGuardia>0&&s.sinGuardia--;return t}ejecutar(e,t,i){const a=this.l[e],o=this.l[1-e],r=1-e;switch(t.tipo){case"defender":a.bloqueo=.5,a.energia=Math.min(100,a.energia+15),i.push({tipo:"texto",texto:`${a.nombre} se pone en guardia.`});return;case"arma":a.arma=t.arma,i.push({tipo:"arma",quien:e},{tipo:"texto",texto:`${a.nombre} saca su ${It(t.arma).nombre.toLowerCase()}.`});return;case"objeto":{let s=t.item??(a.pociones>0?"grog":"botiquin");if(s==="grog"&&a.pociones<=0&&(s="botiquin"),s==="botiquin"&&a.botiquines<=0&&(s="grog"),s==="grog"?a.pociones<=0:a.botiquines<=0){i.push({tipo:"texto",texto:`${a.nombre} busca en la bolsa... ¡no queda nada!`});return}s==="grog"?a.pociones--:a.botiquines--;const l=Math.min(a.vidaMax-a.vida,Math.round(a.vidaMax*(s==="grog"?.25:.5)));a.vida+=l,i.push({tipo:"texto",texto:s==="grog"?`${a.nombre} bebe un trago de grog.`:`${a.nombre} se venda las heridas con un botiquín.`},{tipo:"anim",quien:e,anim:{forma:"cura",color:18},mov:"quieto"},{tipo:"cura",quien:e,cantidad:l});return}case"huir":{const s=this.r()<.35+(a.velocidad-o.velocidad)*.04;i.push({tipo:"texto",texto:s?`${a.nombre} escapa a toda prisa.`:`¡${a.nombre} no consigue escapar!`}),s&&(this.terminado=!0,i.push({tipo:"fin",ganador:null}));return}case"tecnica":{const s=t.tecnica,l=s.efectos??{};if(a.energia=Math.max(0,a.energia-s.energia),l.unaVez&&a.usadas.add(s.id),i.push({tipo:"texto",texto:`${a.nombre} usa ${s.nombre}.`}),i.push({tipo:"anim",quien:e,anim:s.anim,mov:s.mov??(s.poder?"embestida":"quieto")}),l.bloqueo&&(a.bloqueo=l.bloqueo,a.devuelve=l.devuelve??0,i.push({tipo:"texto",texto:"Se prepara para parar el golpe."})),l.esquiva&&(a.esquiva=l.esquiva,i.push({tipo:"texto",texto:"Está listo para esquivar."})),l.mejora&&(a.mejoras[l.mejora.stat]+=l.mejora.cantidad,i.push({tipo:"texto",texto:`Su ${{fuerza:"fuerza",resistencia:"defensa",velocidad:"rapidez"}[l.mejora.stat]} sube.`})),l.cura||l.energia){const _=Math.min(a.vidaMax-a.vida,Math.round(a.vidaMax*(l.cura??0)));a.vida+=_,a.energia=Math.min(100,a.energia+(l.energia??0)),_&&i.push({tipo:"cura",quien:e,cantidad:_})}if(l.sinGuardia&&(a.sinGuardia=2),!s.poder){l.cegar&&(o.cegado={cantidad:l.cegar,turnos:3},i.push({tipo:"texto",texto:`${o.nombre} casi no ve.`}));return}const u=t.deArma?It(a.arma).dano*(1+.1*((a.arsenal.armas[a.arma]??1)-1)):s.dano==="fruta"?1.15:1,h=s.golpes??1;let d=0,f=0;for(let _=0;_<h;_++){const b=a.cegado.cantidad+o.esquivaBase;if(this.r()>s.precision-b)continue;if(o.esquiva&&this.r()<o.esquiva){i.push({tipo:"texto",texto:`¡${o.nombre} lo esquiva!`}),o.esquiva=0;continue}f++;const g=this.r()<a.critico+a.tecnica*.002,m=(s.dano==="disparo"?a.tecnica+a.fuerza*.3:s.dano==="fruta"?(a.fuerza+a.tecnica)*.65:a.fuerza+a.tecnica*.3)*(1+a.mejoras.fuerza),P=o.resistencia*(1+o.mejoras.resistencia)*(1-(l.ignoraDefensa??0));let w=s.poder*(m/(m+P))*(.5+a.nivel*.06)*u*(.85+this.r()*.15);g&&(w*=1.5),o.sinGuardia&&(w*=1.2),a.rasgos.includes("rudo")&&s.dano==="golpe"&&(w*=1.2);const S=w*o.bloqueo;if(w=Math.max(1,Math.round(w-S)),o.vida=Math.max(0,o.vida-w),d+=w,i.push({tipo:"dano",quien:r,cantidad:w,critico:g}),g&&i.push({tipo:"texto",texto:"¡Golpe crítico!"}),o.bloqueo&&i.push({tipo:"texto",texto:`${o.nombre} para buena parte del golpe.`}),o.devuelve&&S){const O=Math.max(1,Math.round((S+w)*o.devuelve));a.vida=Math.max(0,a.vida-O),i.push({tipo:"anim",quien:r,anim:{forma:"impacto",tam:1},mov:"quieto"},{tipo:"dano",quien:e,cantidad:O,critico:!1},{tipo:"texto",texto:"¡Y devuelve el golpe!"})}if(o.vida<=0||a.vida<=0)break}if(!f&&!i.some(_=>_.tipo==="texto"&&_.texto.includes("esquiva"))?i.push({tipo:"texto",texto:"¡Falla!"}):h>1&&f&&i.push({tipo:"texto",texto:`¡${f} impactos!`}),l.cegar&&f&&(o.cegado={cantidad:l.cegar,turnos:3},i.push({tipo:"texto",texto:`${o.nombre} casi no ve.`})),l.retroceso&&d){const _=Math.max(1,Math.round(d*l.retroceso));a.vida=Math.max(1,a.vida-_),i.push({tipo:"dano",quien:e,cantidad:_,critico:!1},{tipo:"texto",texto:`${a.nombre} también se hace daño.`})}const p=o.vida<=0?r:a.vida<=0?e:null;p!==null&&(this.terminado=!0,i.push({tipo:"texto",texto:`¡${this.l[p].nombre} cae derrotado!`},{tipo:"fin",ganador:1-p}))}}}}const mn=240,Yo=160,ds=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),jt=n=>new Promise(e=>setTimeout(e,n));function hl(n){const e=document.createElement("canvas");return e.width=n.w,e.height=n.h,e.getContext("2d").putImageData(new ImageData(n.aRGBA(),n.w,n.h),0,0),e}function mb(n){const e=new Le(mn,Yo),t={tropical:[c.hoja,c.selva],ciudad:[c.arena,c.maderaClara],nevada:[c.hueso,c.niebla],volcanica:[c.piedra,c.sombraVioleta],desierto:[c.arena,c.maderaClara],ruinas:[c.hoja,c.selva],flotante:[c.hoja,c.selva]}[n];e.rect(0,0,mn,54,c.bajio),e.rect(0,0,mn,18,c.mar);for(let i=0;i<mn;i+=2)e.px(i,18,c.bajio),e.px(i+1,36,c.espuma);e.rect(0,37,mn,17,c.espuma);for(const[i,a,o]of[[20,10,30],[150,24,40],[90,6,22]])e.elipse(i+o/2,a,o/2,4,c.hueso),e.elipse(i+o/2+6,a-3,o/4,3,c.hueso);e.rect(0,54,mn,20,c.mar),e.elipse(200,56,26,6,c.hoja),e.elipse(200,57,26,3,c.arena);for(let i=0;i<30;i++)e.rect(i*37%mn,58+i*7%14,4,1,c.bajio);e.rect(0,74,mn,Yo-74,t[0]),e.rect(0,74,mn,2,c.arena);for(let i=0;i<160;i++)e.px(i*53%mn,78+i*29%(Yo-80),t[1]);return e.elipse(172,76,46,10,t[1]),e.elipse(172,74,42,8,t[0]===c.hueso?c.espuma:c.arena),e.elipse(72,146,60,13,t[1]),e.elipse(72,144,56,11,t[0]===c.hueso?c.espuma:c.arena),hl(e)}async function Fd(n,e,t){const i=new pb(n,e),a=document.createElement("div");a.className="combate",a.innerHTML=`
    <div class="combate-arriba">
      <canvas class="combate-escena" width="${mn}" height="${Yo}"></canvas>
      <div class="combate-info rival"></div>
      <div class="combate-info yo"></div>
      <div class="combate-cortina"></div>
    </div>
    <div class="combate-panel">
      <p class="combate-texto" aria-live="polite"></p>
      <div class="combate-menu"></div>
    </div>`,document.body.append(a);const r=a.querySelector(".combate-escena").getContext("2d"),s=a.querySelector(".combate-texto"),l=a.querySelector(".combate-menu"),u=a.querySelector(".combate-info.rival"),h=a.querySelector(".combate-info.yo"),d=mb(t.bioma),f=hl(Pn(e.aspecto)),p=hl(Kd(n.aspecto)),_=[{dx:-200,dy:0,visible:!0,alfa:1},{dx:200,dy:0,visible:!0,alfa:1}];let b=[];const g=[n.vida,e.vida];let m=!0;function P(U){if(!m)return;r.imageSmoothingEnabled=!1,r.drawImage(d,0,0);const Y=J=>Math.round(Math.sin(U/500+J)*1);_[1].visible&&(r.globalAlpha=_[1].alfa,r.drawImage(f,140+_[1].dx,12+_[1].dy+Y(1),64,64)),_[0].visible&&(r.globalAlpha=_[0].alfa,r.drawImage(p,24+_[0].dx,56+_[0].dy+Y(0),96,96)),r.globalAlpha=1;const j=J=>J===1?{x:172+_[1].dx,y:44+_[1].dy}:{x:72+_[0].dx,y:100+_[0].dy};b=b.filter(J=>U-J.t0<Ma);for(const J of b)jh(r,J.anim,(U-J.t0)/Ma,j(J.de),j(1-J.de));requestAnimationFrame(P)}requestAnimationFrame(P);function w(){const U=(Y,j)=>{const J=Math.max(0,Y/j);return`<span class="cv-barra"><i style="width:${J*100}%" class="${J<.2?"roja":J<.5?"amarilla":""}"></i></span>`};u.innerHTML=`<b>${ds(e.nombre)}</b><small>Nv. ${e.nivel}</small>${U(g[1],e.vidaMax)}`,h.innerHTML=`<b>${ds(n.nombre)}</b><small>Nv. ${n.nivel}</small>${U(g[0],n.vidaMax)}
      <span class="cv-num">${Math.round(g[0])} / ${n.vidaMax}</span>
      <span class="cv-energia" title="Energía"><i style="width:${n.energia}%"></i></span>`}let S=!1;a.addEventListener("pointerdown",U=>{U.target.closest(".combate-menu")||(S=!0)});async function O(U,Y=750){s.textContent="",S=!1;for(let J=0;J<U.length;J++){if(S){s.textContent=U;break}s.textContent=U.slice(0,J+1),await jt(18)}S=!1;const j=performance.now();for(;performance.now()-j<Y&&!S;)await jt(30)}async function R(U,Y){const j=g[U];for(let J=1;J<=12;J++)g[U]=j+(Y-j)*(J/12),w(),await jt(30)}async function D(U){switch(U.tipo){case"texto":await O(U.texto);break;case"anim":{const Y=_[U.quien],j=U.quien===0?[1,-1]:[-1,1];if(b.push({anim:U.anim,t0:performance.now(),de:U.quien}),U.mov==="salto"){for(let J=0;J<=10;J++){const Q=J/10;Y.dx=j[0]*Math.sin(Q*Math.PI)*40*Q,Y.dy=-Math.sin(Q*Math.PI)*30,await jt(Ma/12)}Y.dx=0,Y.dy=0}else if(U.mov==="embestida"){for(let J=0;J<4;J++)Y.dx=j[0]*J*5,Y.dy=j[1]*J*2,await jt(30);for(let J=3;J>=0;J--)Y.dx=j[0]*J*5,Y.dy=j[1]*J*2,await jt(30);await jt(Ma-240)}else await jt(Ma);break}case"dano":{const Y=_[U.quien];for(let j=0;j<6;j++)Y.visible=j%2===1,Y.dx=j%2?2:-2,await jt(60);Y.visible=!0,Y.dx=0,await R(U.quien,i.l[U.quien].vida);break}case"cura":await R(U.quien,i.l[U.quien].vida);break;case"arma":{const Y=_[U.quien];for(let j=0;j<3;j++)Y.alfa=.4,await jt(70),Y.alfa=1,await jt(70);break}}w()}let F=[];const A=(U,Y)=>`<button data-t="${Y}" ${U.energia>n.energia?"disabled":""}><b>${U.nombre}</b><small>${U.poder?`Poder ${U.poder}${U.golpes?` ×${U.golpes}`:""}`:ds(U.descripcion)} · ${U.energia?`${U.energia} energía`:"Gratis"}</small></button>`;let M=!0;function I(U){if(U==="principal"){s.textContent=`¿Qué hará ${n.nombre}?`,l.className="combate-menu principal";const Y=dl(n).length>0;l.innerHTML=`
        <button data-m="atacar">Atacar</button><button data-m="habilidad">Habilidad</button>
        ${Y?'<button data-m="fruta" class="fruta">Fruta</button>':""}
        <button data-m="defender">Defender</button><button data-m="arma">Arma</button>
        <button data-m="bolsa">Bolsa <small>${n.pociones+n.botiquines}</small></button>
        ${t.sinHuir?'<button class="huir" disabled title="Su código: nunca huye">No huye</button>':'<button data-m="huir" class="huir">Huir</button>'}`;return}if(l.className="combate-menu tecnicas",U==="bolsa"){l.innerHTML=`<button data-o="grog" ${n.pociones?"":"disabled"}><b>Grog ×${n.pociones}</b><small>Cura un 25% de la vida</small></button>
        <button data-o="botiquin" ${n.botiquines?"":"disabled"}><b>Botiquín ×${n.botiquines}</b><small>Cura un 50% de la vida</small></button>
        <button data-m="volver" class="volver">← Volver</button>`;return}if(U==="arma"){l.innerHTML=fb(n).map(Y=>`<button data-a="${Y}" ${Y===n.arma?"disabled":""}><b>${It(Y).nombre}</b><small>${Y===n.arma?"En la mano":"Gasta el turno"}</small></button>`).join("")+'<button data-m="volver" class="volver">← Volver</button>';return}F=U==="atacar"?$a(n):U==="habilidad"?Nd(n):dl(n),M=U==="atacar",l.innerHTML=(F.length?F.map(A).join(""):'<p class="vacio-combate">No tienes ninguna equipada.</p>')+'<button data-m="volver" class="volver">← Volver</button>'}let ee=()=>{};l.addEventListener("click",U=>{const Y=U.target.closest("button");if(!Y||Y.disabled)return;const j=Y.dataset;j.m==="atacar"||j.m==="habilidad"||j.m==="fruta"||j.m==="arma"||j.m==="bolsa"?I(j.m):j.o?ee({tipo:"objeto",item:j.o}):j.m==="volver"?I("principal"):j.m==="defender"?ee({tipo:"defender"}):j.m==="objeto"?ee({tipo:"objeto"}):j.m==="huir"?ee({tipo:"huir"}):j.t!==void 0?ee({tipo:"tecnica",tecnica:F[Number(j.t)],deArma:M}):j.a&&ee({tipo:"arma",arma:j.a})}),w(),a.classList.add("entrando");for(let U=0;U<=20;U++)_[0].dx=-200+U*10,_[1].dx=200-U*10,await jt(16);a.classList.remove("entrando"),await O(t.motivo,900);let q=null;for(;!i.terminado;){I("principal");const U=await new Promise(Y=>ee=Y);l.innerHTML="";for(const Y of i.turno(U))await D(Y),Y.tipo==="fin"&&(q=Y.ganador)}if(q!==null){const U=_[1-q];for(let Y=0;Y<12;Y++)U.dy+=3,U.alfa=1-Y/12,await jt(30);U.visible=!1}for(const U of t.alTerminar(q,i))await O(U,1100);l.className="combate-menu principal",l.innerHTML='<button class="salir" data-salir>Volver al mapa</button>',await new Promise(U=>l.querySelector("[data-salir]").addEventListener("click",()=>U())),m=!1,a.classList.add("saliendo"),await jt(250),a.remove()}const hs=(n,e)=>(n.registro??[]).some(([,t])=>e.test(t))||(n.mientras??[]).some(([,t])=>e.test(t)),gb={"primer-viaje":n=>hs(n,/Desembarcó en|ha vuelto al barco|Volvió al barco/),"primera-victoria":n=>hs(n,/Venció a|Capturó a|Ganó un duelo|Venció al guardián/),duelista:n=>hs(n,/Ganó un duelo|Duelo contra .*: ganó/),"a-bordo":n=>!!Ot(n),capitan:n=>Ot(n)?.capitan===n.id,cartel:n=>n.bando!=="marine"&&(n.recompensa??0)>0,"muy-buscado":n=>n.bando!=="marine"&&(n.recompensa??0)>=1e8,capturas:n=>n.bando==="marine"&&(n.capturas?.pirata??0)+(n.capturas?.revolucionario??0)>=10,almirante:n=>n.bando==="marine"&&Va(n)==="Almirante",pista:n=>!!n.fruta||(n.busqueda?.pistas??0)>=kn,fruta:n=>!!n.fruta,nivel10:n=>n.nivel>=10,nivel25:n=>n.nivel>=25,nivel50:n=>n.nivel>=50,rico:n=>n.doblones>=1e5,galeon:n=>n.barco==="galeon"};function vb(n){if(n.creador)return[];const e=new Set(n.logros??[]);return ja.filter(t=>!e.has(t.id)&&gb[t.id]?.(n)).map(t=>t.id)}const Od=10,cr=.5,Oe=n=>document.querySelector(n);let ct=null;const Je=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function no(n,e){const t=document.createElement("canvas");return t.width=n.w,t.height=n.h,t.style.width=`${n.w*e}px`,t.style.height=`${n.h*e}px`,t.getContext("2d").putImageData(new ImageData(n.aRGBA(),n.w,n.h),0,0),t}function zl(n,e){const t=Pn(n),i=new Le(20,20);for(let a=0;a<20;a++)for(let o=0;o<20;o++)i.px(o,a,t.get(o+6,a));return no(i,e)}const _b={pirata:Jd[1].aspecto,marine:{...Ko,piel:"clara",pelo:"rapado",colorPelo:c.oro,ropa:"casaca",colorRopa:c.azulMarina,colorFaja:c.hueso,pantalon:"largo",colorPantalon:c.hueso,calzado:"botas",colorCalzado:c.tinta,sombrero:"gorro",colorSombrero:c.hueso},revolucionario:{...Ko,cuerpo:"mujer",piel:"oscura",pelo:"trenza",colorPelo:c.tinta,ropa:"chaleco",colorRopa:c.selva,colorFaja:c.granate,pantalon:"largo",colorPantalon:c.piedra,calzado:"botasAltas",colorCalzado:c.corteza,sombrero:"panuelo",colorSombrero:c.selva,accesorios:["panueloCuello"]}};let Mu;function Qe(n){const e=Oe("#aviso");e.textContent=n,e.hidden=!1,clearTimeout(Mu),Mu=window.setTimeout(()=>e.hidden=!0,3500)}function Ht(){const n=Ct(),e=Ye(),t=gl.find(u=>u.id===rt());Oe("#nombre-mar").textContent=t.nombre;const i=on().length;Oe("#meta-barra").style.width=`${Math.max(4,Math.min(100,i/ac*100))}%`,Oe(".meta").title=`Meta de la comunidad: ${i} de ${ac} personajes creados`;const a=Oe("#btn-perfil");a.innerHTML=n?`<span class="inicial">${Je((Ye()?.nombre??"⚓")[0].toUpperCase())}</span>`:Xt("perfil"),a.classList.toggle("sin-cuenta",!n);const o=Oe("#avatar-nav");o.innerHTML="",o.append(zl(e?e.aspecto:Ko,2.4)),Oe("#texto-mi-pirata").textContent=e?e.bando==="pirata"?"Mi pirata":e.bando==="marine"?"Mi marine":"Mi rebelde":"Mi pirata";const r=Oe("#ficha");r.innerHTML="";const s=document.createElement("div");s.className="ficha-avatar",s.append(no(Pn(e?e.aspecto:Ko),2)),r.append(s);const l=document.createElement("div");if(l.className="ficha-cuerpo",!n)l.innerHTML=`
      <b class="ficha-nombre">Sin personaje</b>
      <span class="ficha-texto">Mira el mundo libremente. Firma el pacto para crear el tuyo.</span>`,r.append(l,fs("Firmar el pacto",$l));else if(!e)l.innerHTML=`
      <b class="ficha-nombre">¡Hola, marinero!</b>
      <span class="ficha-texto">Crea tu primer pirata, marine o revolucionario.</span>`,r.append(l,fs("Crear personaje",ma));else{l.innerHTML=`
      <div class="ficha-nombre-fila"><b class="ficha-nombre">${Je(e.nombre)}</b><button class="btn-hoja" id="btn-hoja" title="Ver hoja de vida">📜 Ver</button></div>
      <span class="insignias">
        <span class="insignia bando-${e.bando}">${Xt("bandera","#f2b63d")} ${bn[e.bando].nombre}</span>
        ${e.creador?'<span class="insignia creador-ins">Creador</span>':""}
        <span class="insignia oro">${Xt("moneda","#f2b63d")} ${e.creador?"∞":e.doblones}</span>
        <span class="insignia">Nv. ${e.nivel}</span>
        ${!e.creador&&Xa(e.nivel,Wt(e))>0?`<button class="insignia puntos-libres" id="btn-puntos">💪 ${Xa(e.nivel,Wt(e))} puntos</button>`:""}
      </span>
      <button class="ficha-lugar" id="ficha-lugar">${Xt("diana","#f2b63d")} <span id="ficha-lugar-texto">En ${Je(_t(e).nombre)} · ${Je(di(_t(e).zona))}</span></button>`;const u=!!hr(e)?.completo,h=(e.busqueda&&(e.busqueda.vencido||e.busqueda.pistas>=kn)?1:0)+(u?1:0)+(e.momento?1:0),d=fs("",()=>e.momento?Ab():u?Gd():e.busqueda?.vencido?Mr():Rn.abrir("mi-pirata"));d.classList.add("momentos"),d.classList.toggle("pendiente",h>0),d.title="Momentos clave pendientes",d.innerHTML=`<span class="chispa">✦</span><span class="cuenta">${h}</span>`;const f=document.createElement("button");f.className="ficha-accion",f.id="ficha-accion";const p=document.createElement("div");p.className="ordenes",p.id="ordenes",p.innerHTML=`
      <button data-orden="navegar"><span>⛵</span>Navegar</button>
      <button data-orden="pelear"><span>⚔</span>Pelear</button>
      <button data-orden="entrenar"><span>💪</span>Entrenar</button>
      <button data-orden="explorar"><span>🔍</span>Explorar</button>
      <button data-orden="descansar"><span>💤</span>Descansar</button>`,r.append(l,d,f,p),oo()}}function fs(n,e){const t=document.createElement("button");return t.className="boton-oro",t.textContent=n,t.addEventListener("click",e),t}function Li(n){Oe(n).showModal()}document.querySelectorAll("[data-cerrar]").forEach(n=>n.addEventListener("click",()=>n.closest("dialog").close()));document.querySelectorAll("dialog").forEach(n=>n.addEventListener("click",e=>{e.target===n&&n.close()}));function $l(){Li("#dlg-pacto"),Oe("#pacto-nombre").focus()}async function bb(){const n=Oe("#pacto-nombre").value.trim(),e=Oe("#pacto-correo");if(!n){Oe("#pacto-nombre").reportValidity();return}if(!e.value.trim()||!e.checkValidity()){e.reportValidity();return}const t=Oe("#pacto-estado"),i=Oe("#pacto-correo-btn");i.disabled=!0,t.textContent="Entrando…";const a=await Uh(n,e.value.trim());if(i.disabled=!1,a){t.innerHTML=`<span class="peligro">${Je(a)}</span>`;return}t.textContent="",await Fu(rt());const o=Bu();Oe("#dlg-pacto").close(),ct=null,Sr(!0),Ht(),Qe(`¡Pacto firmado! Bienvenido a los mares.${o?` Hemos subido ${o} personaje${o>1?"s":""} que tenías en este navegador.`:""}`),on().length||ma()}Oe("#form-pacto").addEventListener("submit",n=>{n.preventDefault(),bb()});function ma(){if(!Ct()){$l();return}Oe("#perfil-titulo").textContent=zu()?"Tu cuenta · Creador":"Tu cuenta";const e=Oe("#perfil-lista"),t=on(),i=Ye();e.innerHTML=t.length?"<h3>Tus personajes</h3>":"<p>Todavía no tienes personajes.</p>";for(const o of t){const r=document.createElement("button");r.className=`fila-personaje ${i?.id===o.id?"activo":""}`,r.append(zl(o.aspecto,2)),r.insertAdjacentHTML("beforeend",`<span><b>${Je(o.nombre)}</b><small>${bn[o.bando].nombre} · Nv. ${o.nivel}</small></span>${i?.id===o.id?"<em>En juego</em>":""}`),r.addEventListener("click",()=>{Nh(o.id),Ht(),ma()}),e.append(r)}const a=Oe("#perfil-bandos");a.innerHTML="";for(const o of Object.keys(bn)){const r=document.createElement("a");r.className=`bando bando-${o}`,r.href=Zo(`nuevo/index.html?bando=${o}&mar=${rt()}`),r.append(no(Pn(_b[o]),2)),r.insertAdjacentHTML("beforeend",`<b>${bn[o].nombre}</b><small>${bn[o].descripcion}</small>`),a.append(r)}Oe("#dlg-perfil").open||Li("#dlg-perfil")}Oe("#cerrar-sesion").addEventListener("click",async()=>{await Nu(),Oe("#dlg-perfil").close(),ct=null,Ht(),Qe("Sesión cerrada.")});function Bd(){const n=rt();Oe("#lista-mares").innerHTML=gl.map(e=>`
    <a class="mar ${e.id===n?"actual":""}" href="${Qd(`?mar=${e.id}`)}">
      <b>${e.nombre}</b><small>${e.id===n?"Estás aquí":`Mar ${e.id}`}</small>
    </a>`).join(""),Li("#dlg-mares")}Oe("#btn-mapa").innerHTML=Xt("mapa","#5cc3d8");Oe("#ico-brujula").innerHTML=Xt("brujula","#f2b63d");Oe("#btn-envivo").innerHTML=Xt("envivo","#e77b33");Oe("#btn-globo").innerHTML=Xt("globo");Oe("#btn-guia").innerHTML=Xt("guia","#f2b63d");document.querySelectorAll("[data-ico]").forEach(n=>n.innerHTML=Xt(n.dataset.ico,"#f2b63d"));Oe("#btn-perfil").addEventListener("click",ma);Oe("#btn-mar").addEventListener("click",Bd);Oe("#btn-mapa").addEventListener("click",()=>{Mt?.visible||xr()});Oe("#btn-localizar").innerHTML=Xt("diana","#f2b63d");Oe("#btn-localizar").addEventListener("click",io);document.addEventListener("click",n=>{n.target.closest("#ficha-lugar")&&io()});document.addEventListener("click",n=>{n.target.closest("#btn-puntos")&&Rn.abrirArsenal("mejoras")});document.addEventListener("click",n=>{if(n.target.closest("#btn-hoja")){const e=Ye();e&&wd(e)}});const Rn=ub({aviso:Qe,localizar:()=>io(),abrirPerfil:()=>ma(),abrirMares:()=>Bd(),cerrarSesion:async()=>{await Nu(),ct=null,Ht(),Qe("Sesión cerrada.")},rutaGaleria:Zo("galeria/index.html"),guardian:()=>{Rn.cerrar(),jd()},navegarA:n=>{Rn.cerrar();const e=Yt()[n];e&&Ka(e)},comerFruta:()=>Mr(),cobrarObjetivo:()=>Gd(),desafiar:n=>{const e=An().find(t=>t.id===n);e?Vd(e):Qe("Ese jugador no está en este mar ahora.")},entrenar:()=>{const n=Ye();if(!n)return;const e=xn(rt()).filter(i=>ao(n.bando,i.bando)),t=e[Math.floor(Math.random()*e.length)];ga(t,`${t.nombre} acepta un combate de entrenamiento. ¡En guardia!`,!1,!0)}});Oe("#btn-envivo").addEventListener("click",()=>Rn.abrir("en-vivo"));Oe("#btn-guia").addEventListener("click",()=>Rn.abrir("guia"));document.querySelectorAll(".barra-inf [data-panel]").forEach(n=>n.addEventListener("click",()=>{const e=n.dataset.panel;Rn.actual===e?Rn.cerrar():Rn.abrir(e)}));Oe("#btn-globo").addEventListener("click",()=>Mt?.visible?$d():Qe("Arrastra para girar el planeta. Pellizca o usa la rueda para acercarte."));const zd=location.hash.includes("access_token");await Fu(rt());zd&&history.replaceState(null,"",location.pathname+location.search);const ps=Bu();Ht();{const n=document.querySelector("#portada-carga");n&&setTimeout(()=>{n.classList.add("fuera"),setTimeout(()=>n.remove(),700)},Math.max(0,1100-performance.now()))}new URLSearchParams(location.search).has("sastre")&&Qe("¡Como nuevo! El sastre ha hecho un buen trabajo.");zd&&Ct()&&Qe(`¡Pacto firmado! Bienvenido a los mares.${zu()?" Tu cuenta tiene el rol de Creador.":""}`);ps&&Qe(`Hemos subido a tu cuenta ${ps} personaje${ps>1?"s":""} que tenías en este navegador.`);const br=new URLSearchParams(location.search);br.has("pacto")&&$l();br.has("perfil")&&ma();br.has("creado")&&Qe("¡Tu personaje ya navega por el mundo!");let ui=null,Mt=null,ms=null;function Su(n){const e=Ot(n);return e&&e.capitan!==n.id?{...n.navio,...bl(e)}:n.navio}function ur(){const n=Date.now(),e=xn(rt()).map(o=>({id:o.id,nombre:o.apodo?`${o.nombre} «${o.apodo}»`:o.nombre,bando:o.bando,aspecto:o.aspecto,posicion:oa(o,n),barco:o.barco,esMio:!1})),t=Ye(),i=[...on(),...An()];for(const[o,r]of vs(rt(),n)){const s=zo(rt()).find(d=>d.id===o),l=s&&(ct?.id===s.capitan?ct:i.find(d=>d.id===s.capitan));if(!l)continue;const u=qa(l,n),h=bl(s);for(const d of r){const f=e.find(p=>p.id===d.id);f&&(f.posicion=u,f.navio={...f.navio,...h})}}for(const o of An()){const r=o.accion&&n<o.accion.hasta?o.accion.tipo:"pasear";e.push({id:`j-${o.id}`,nombre:o.apodo?`${o.nombre} «${o.apodo}»`:o.nombre,bando:o.bando,aspecto:o.aspecto,barco:o.barco??"barca",navio:Su(o),esMio:!1,posicion:qa(o,n),quieto:r==="entrenar"||r==="descansar",actividad:Za[r]})}const a=ct&&Ct()&&t?.id===ct.id?ct:null;if(a){const o=a.accion?.tipo??"pasear";e.push({id:a.id,nombre:a.nombre,bando:a.bando,aspecto:a.aspecto,barco:a.barco??"barca",navio:Su(a),esMio:!0,posicion:qa(a,n),quieto:o==="entrenar"||o==="descansar",actividad:Za[o]})}return e}function xr(n,e,t){if(!ui||!Mt)return;const i=n===void 0?ui.centroVista():{lat:n,lon:e};ui.pausar(),document.body.classList.add("en-mapa"),Oe("#btn-globo").classList.remove("activo"),Oe("#btn-mapa").classList.add("activo"),Mt.mostrar(i.lat,i.lon,t)}function $d(n,e){!ui||!Mt||(Mt.ocultar(),Ha(),document.body.classList.remove("en-mapa"),Oe("#btn-globo").classList.add("activo"),Oe("#btn-mapa").classList.remove("activo"),ui.reanudar(),n!==void 0&&ui.irA(n,e,2.7))}function io(){const n=ct??Ye();if(!n||!Ct()){Qe("Aún no tienes personaje. Firma el pacto y crea uno.");return}const e=_t(n);Mt?.seguir(n.id);const t=ur().find(r=>r.esMio),i=Mt.posicionDe(t),a=Mt.zoomIsla(e);Mt?.visible?Mt.centrarEn(i.lat,i.lon,a):ui?.irA(e.lat,e.lon,2.3,()=>xr(i.lat,i.lon,a));const o=n.accion?.tipo==="viajar"&&Date.now()<n.accion.hasta;o||setTimeout(()=>xb(n),2200),Qe(o?`${n.nombre} navega hacia ${Yt()[n.accion.destino].nombre}.`:`${n.nombre} está en ${e.nombre} (${di(e.zona)}).`)}const ao=(n,e)=>n==="marine"!=(e==="marine");let wi=!1;function xb(n){if(wi||Sn(n,"respeta-mar"))return;let e=0;try{e=Number(localStorage.getItem("ultimoEncuentro")??0)}catch{}if(Date.now()-e<10*6e4)return;const t=_t(n),i=xn(rt()).find(o=>{const r=oa(o);return!r.navegando&&r.islaId===t.id&&ao(n.bando,o.bando)});if(!i)return;try{localStorage.setItem("ultimoEncuentro",String(Date.now()))}catch{}const a=i.bando==="marine"?"Un marine":i.bando==="pirata"?"Un pirata buscado":"Un revolucionario";ga(i,`¡${a} te ha visto! ${i.nombre} te corta el paso.`)}async function ga(n,e,t=!1,i=!1){const a=Ye();if(!a||wi)return;wi=!0;let o=0;for(const p of n.id)o=o*31+p.charCodeAt(0)>>>0;const r=t?xl(a.nivel):Math.max(1,a.nivel+o%3-1),s=lr({nombre:a.nombre,bando:a.bando,aspecto:a.aspecto,nivel:a.nivel,rasgos:a.rasgos,arsenal:Wt(a),fruta:a.fruta,creador:a.creador,bolsa:vn(a)});fl(s,a);const l=[..._s(rt(),[...on(),...An()].filter(p=>p.mar===rt()&&p.fruta).map(p=>p.fruta)).entries()].find(([,p])=>p===n.id)?.[0],u=lr({nombre:n.nombre,bando:n.bando,aspecto:n.aspecto,nivel:r,rasgos:n.rasgos,arsenal:Ih(r+(t?4:0),Mn(o)),fruta:t?void 0:l});t&&(u.vidaMax=Math.round(u.vidaMax*1.6),u.vida=u.vidaMax),a.bando==="revolucionario"&&a.nivel>=Od&&n.bando!=="revolucionario"&&(s.fuerza*=1+cr,s.tecnica*=1+cr,e+=" ¡Furia revolucionaria: +50% de daño!");let d=!1;const f=_t(a);await Fd(s,u,{bioma:f.bioma,motivo:e,sinHuir:Sn(a,"nunca-huye"),alTerminar:p=>{const _=Ye(),b=[..._.registro??[]],g=[];let{nivel:m,doblones:P}=_,w=_.xp??0,S=_.capturas??{pirata:0,revolucionario:0},O=_.ganado,R={..._};if(p===0){const D=Ud(R);R=D.p,R=Ai(R,"victorias"),n.bando==="marine"&&(R=Ai(R,"victoriasMarine"));const F=rr(R,D.premio?20+5*r:5);R=F.p;const A=Id(R,D.premio?15+3*r:0);if(R=A.p,{nivel:m,xp:w,doblones:P}={nivel:R.nivel,xp:R.xp??0,doblones:R.doblones},O=R.ganado,g.push(`¡${_.nombre} gana el combate!`,A.oro||F.xp?`+${F.xp} de experiencia y +${A.oro} doblones.`:"Hoy ya no ganas más premios: vuelve mañana."),D.premio===!1&&(A.oro||F.xp)&&g.push("Has llegado al límite de victorias con premio por hoy."),F.subidas&&g.push(`¡${_.nombre} sube a nivel ${m}! Tienes ${3*F.subidas} puntos de mejora nuevos: úsalos en el Arsenal.`),t){d=!0,R={...R,busqueda:R.busqueda?{...R.busqueda,vencido:!0}:void 0},g.push("¡El guardián cae derrotado! Detrás de él, en un cofre, brilla la fruta..."),b.push([Date.now(),`Venció al guardián de ${f.nombre} y encontró la ${_l(R.busqueda?.fruta??"")}.`]);const M=Qo(R,er(r,!0)*2);R=M.p,M.sube&&g.push(`La noticia corre: tu recompensa sube ${et(M.sube)}.`)}else if(D.premio&&_.bando!=="marine"){const M=Qo(R,Math.round(er(r,n.bando==="marine")*dr(_)));R=M.p,M.sube?g.push(`Tu recompensa sube ${et(M.sube)}: ahora ${et(R.recompensa??0)} doblones.`):g.push("Hoy la Marina ya no sube más tu recompensa.")}else if(D.premio&&_.bando==="marine"&&n.bando!=="marine"){const M=Ml(R,Math.round($u(r,n.bando==="revolucionario")*dr(_)));R=M.p,M.sube&&g.push(`+${M.sube} méritos para la Marina (llevas ${R.meritos}).`)}t||(_.bando==="marine"&&n.bando!=="marine"?(S={...S,[n.bando]:S[n.bando]+1},g.push(`${n.nombre} queda capturado y bajo custodia de la Marina.`),b.push([Date.now(),`Capturó a ${n.nombre} (${n.bando==="pirata"?"pirata":"revolucionario"}) en ${f.nombre}.`])):b.push([Date.now(),`Venció a ${n.nombre} en ${f.nombre}.`]))}else if(p===1){const D=i?0:Math.min(2e3,Math.floor(P*.05));P-=D,w+=5,g.push(`${_.nombre} ha perdido...`,D?`Pierde ${D} doblones y vuelve a curarse.`:"Era solo un entrenamiento: se cura y aprende de sus errores."),b.push([Date.now(),`Perdió un combate contra ${n.nombre} en ${f.nombre}. Se curó las heridas y juró revancha.`])}else b.push([Date.now(),`Escapó por los pelos de ${n.nombre}.`]);return ht({...R,nivel:m,xp:w,doblones:P,ganado:O,registro:b.slice(-30),bolsa:_.creador?vn(_):Hd(_,s),..._.bando==="marine"?{capturas:S}:{}}),g}}),wi=!1,Ht(),d&&Mr()}function Mb(n){if(n.creador)return;const e=n.capturas??{pirata:0,revolucionario:0},t={bando:n.bando,nivel:n.nivel,recompensa:n.recompensa??0,capturas:e.pirata+e.revolucionario},i=new Set(n.prendasAvisadas??[]),a=Object.entries(Au).filter(([s,l])=>(l.nivel||l.recompensa||l.capturas)&&!i.has(s)).filter(([s])=>{const[l,u]=s.split(":");return wu(l,u,t)==="libre"}).map(([s])=>s),o=vb(n),r=[];if(o.length){n={...n,logros:[...n.logros??[],...o]};const s=o.map(l=>ja.find(u=>u.id===l));r.push(s.length===1?`${s[0].icono} ¡Logro: ${s[0].nombre}!`:`🏆 ¡${s.length} logros: ${s.map(l=>l.nombre).join(", ")}!`)}if(a.length){const s=a.map(l=>{const[u,h]=l.split(":");return Cu[u]?.[h]??h});n={...n,prendasAvisadas:[...i,...a]},r.push(`🔓 Desbloqueado: ${s.join(", ")} (pásate por el sastre).`)}r.length&&(ht(n),Qe(r.join(" ")))}const dr=n=>Sn(n,"no-debiles")?1.1:1;function fl(n,e){const t=Iu(e),i=Du(e);n.fuerza*=(1+t)*(i==="segundo"?1.05:1),n.resistencia*=(1+t)*(i==="contramaestre"?1.05:1);const a=It(n.arma).tipo;(e.estilo==="espada"&&a==="espada"||e.estilo==="punos"&&a==="punos")&&(n.fuerza*=1.08),(e.estilo==="tirador"&&a==="pistola"||e.estilo==="cientifico")&&(n.tecnica*=1.1),Sn(e,"nunca-huye")&&(n.fuerza*=1.05),Sn(e,"protege-amigos")&&Ot(e)&&(n.resistencia*=1.05);const o={grog:(i==="cocinero"?1:0)+(e.estilo==="cocinero"?1:0),botiquin:(i==="medico"?1:0)+(e.estilo==="medico"?1:0)};return n.pociones+=o.grog,n.botiquines+=o.botiquin,o}function Hd(n,e,t){const i=vn(n);return{grog:Math.min(i.grog,e.pociones),botiquin:Math.min(i.botiquin,e.botiquines)}}const yu=5,Sb=10;function yb(n,e){return n.bando==="marine"!=(e.bando==="marine")?!0:n.bando==="pirata"&&e.bando==="pirata"?!n.tripulacion||n.tripulacion!==e.tripulacion:n.bando==="revolucionario"&&e.bando==="pirata"||n.bando==="pirata"&&e.bando==="revolucionario"}function kd(n,e){return yb(n,e)?e.nivel<n.nivel-Sb&&!n.creador?"Es de nivel muy bajo":Sn(n,"no-debiles")&&e.nivel<=n.nivel-5?"Tu código: no ataca a los débiles":ct&&yr(ct)?"Estás navegando":null:n.bando===e.bando&&n.bando==="pirata"?"Misma tripulación":"Sois aliados"}async function Vd(n){const e=Ye();if(!e||wi)return;const t=kd(e,n);if(t){Qe(t);return}const i=await $h();if(i.length>=yu&&!e.creador){Qe(`Como mucho ${yu} duelos al día. Vuelve mañana.`);return}if(i.some(h=>h.defensor===n.id)){Qe(`Ya te enfrentaste a ${n.nombre} hoy.`);return}wi=!0;const a=lr({nombre:e.nombre,bando:e.bando,aspecto:e.aspecto,nivel:e.nivel,rasgos:e.rasgos,arsenal:Wt(e),fruta:e.fruta,creador:e.creador,bolsa:vn(e)});fl(a,e);const o=lr({nombre:n.nombre,bando:n.bando,aspecto:n.aspecto,nivel:n.nivel,rasgos:n.rasgos,arsenal:Wt(n),fruta:n.fruta,creador:n.creador,bolsa:vn(n)});fl(o,n),e.bando==="revolucionario"&&e.nivel>=Od&&n.bando!=="revolucionario"&&(a.fuerza*=1+cr,a.tecnica*=1+cr);const r=_t(e);let s="huida",l=0;await Fd(a,o,{bioma:r.bioma,motivo:`¡Duelo! ${e.nombre} desafía a ${n.nombre}${n.creador?", el Creador":""}.`,sinHuir:Sn(e,"nunca-huye"),alTerminar:h=>{const d=Ye();let f={...d};const p=[],_=b=>{f={...f,registro:[...f.registro??[],[Date.now(),b]].slice(-30)}};if(h===0){s="atacante",f=Ud(f).p,f=Ai(f,"victorias"),n.bando==="marine"&&(f=Ai(f,"victoriasMarine"));const g=rr(f,30+6*n.nivel);if(f=g.p,p.push(`¡${d.nombre} gana el duelo contra ${n.nombre}!`,`+${g.xp} de experiencia.`),g.subidas&&p.push(`¡${d.nombre} sube a nivel ${f.nivel}!`),d.bando!=="marine"){const m=Qo(f,Math.round(Math.max(er(n.nivel,n.bando==="marine")*2,Math.floor((n.recompensa??0)*.1))*dr(d)));f=m.p,l=m.sube,p.push(m.sube?`Tu recompensa sube ${et(m.sube)}: ahora ${et(f.recompensa??0)}.`:"Hoy tu recompensa ya no sube más.")}else{const m=Ml(f,Math.round(($u(n.nivel,n.bando==="revolucionario")*3+Math.floor((n.recompensa??0)/1e6))*dr(d)));f=m.p,l=m.sube;const P=f.capturas??{pirata:0,revolucionario:0};n.bando!=="marine"&&(f={...f,capturas:{...P,[n.bando]:P[n.bando]+1}}),p.push(`${n.nombre} queda capturado.`,m.sube?`+${m.sube} méritos (llevas ${f.meritos}).`:"Hoy ya no ganas más méritos.")}_(`Ganó un duelo contra ${n.nombre} en ${r.nombre}.`)}else if(h===1){s="defensor";const b=Math.min(2e3,Math.floor(f.doblones*.05));f={...f,doblones:f.doblones-b},p.push(`${n.nombre} gana el duelo...`,`${d.nombre} pierde ${b} doblones.`),_(`Perdió un duelo contra ${n.nombre}. Juró revancha.`)}else _(`Huyó de un duelo contra ${n.nombre}.`);return ht({...f,bolsa:d.creador?vn(d):Hd(d,a)}),p}}),wi=!1;const u=await Hh({mar:rt(),atacante:e.id,atacante_nombre:e.nombre,defensor:n.id,defensor_dueno:n.dueno??"",defensor_nombre:n.nombre,ganador:s,premio:l});u&&console.warn("No se pudo registrar el duelo",u),Ht()}async function Eb(){const n=await Fh(),e=[];for(const t of n){const i=on().find(o=>o.id===t.defensor);if(!i)continue;let a={...i};if(t.ganador==="atacante"){const o=Math.min(2e3,Math.floor(a.doblones*.05));a={...a,doblones:a.doblones-o},e.push(`${t.atacante_nombre} desafió a ${i.nombre} y ganó: perdiste ${o} doblones.`)}else if(t.ganador==="defensor"){const o=i.bando==="marine"?Ml(a,5+i.nivel):Qo(a,er(i.nivel,!1));a=o.p,e.push(`${t.atacante_nombre} desafió a ${i.nombre} y perdió.${o.sube?i.bando==="marine"?` +${o.sube} méritos.`:` Tu recompensa sube ${et(o.sube)}.`:""}`)}else e.push(`${t.atacante_nombre} desafió a ${i.nombre}, pero salió huyendo.`);a={...a,registro:[...a.registro??[],[Date.parse(t.creado),`Duelo contra ${t.atacante_nombre}: ${t.ganador==="defensor"?"ganó":t.ganador==="atacante"?"perdió":"el rival huyó"}.`]].slice(-30)},ht(a)}return await Oh(n.map(t=>t.id)),e}const Eu=new Set;function Tb(n){const e=hr(n);!e?.completo||Eu.has(n.id+e.o.id)||(Eu.add(n.id+e.o.id),Qe(`✦ ¡Objetivo cumplido: ${e.o.texto}! Toca el ✦ de tu ficha para cobrar la recompensa.`),Ht())}function Ab(){const n=Ye(),e=n?.momento&&Pd(n.momento.id);if(!n||!e)return;const t=Math.max(0,Math.ceil((n.momento.caduca-Date.now())/36e5));document.querySelector("#dlg-momento")?.remove();const i=document.createElement("dialog");i.id="dlg-momento",i.className="dialogo dlg-fruta",i.innerHTML=`<div><span class="momento-chip">✦ Momento clave</span><h2>${Je(e.titulo)}</h2><p>${Je(e.texto)}</p>
    <div class="opciones-momento">${e.opciones.map(a=>`<button class="boton-grande" data-opcion="${a.id}">${Je(a.texto)}</button>`).join("")}</div>
    <p class="nota-prueba">Si no decides en ${t} hora${t===1?"":"s"}, ${Je(n.nombre)} decidirá solo según su carácter.</p>
    <button class="boton-grande" data-luego>Decidir más tarde</button></div>`,document.body.append(i),i.querySelector("[data-luego]").addEventListener("click",()=>{i.close(),i.remove()}),i.querySelectorAll("[data-opcion]").forEach(a=>a.addEventListener("click",()=>{const o=Ye(),r=o&&Ld(o,a.dataset.opcion,Date.now());i.close(),i.remove(),r&&(ct=r.p,ht(r.p),Qe(r.texto),Ht())})),i.showModal()}function Gd(){const n=Ye(),e=n?hr(n):null;if(!n||!e?.completo)return;const t=zh(n);document.querySelector("#dlg-objetivo")?.remove();const i=document.createElement("dialog");i.id="dlg-objetivo",i.className="dialogo dlg-fruta",i.innerHTML=`<div><span class="momento-chip">✦ Momento clave</span><h2>¡Objetivo cumplido!</h2><p><b>${Je(e.o.texto)}</b></p>
    <ul class="pasos-hechos">${e.o.pasos.map(a=>`<li>✓ ${Je(a.texto)}</li>`).join("")}</ul>
    <p>Recompensa: <b>+${t.xp.toLocaleString("es-ES")} de experiencia</b> y <b>+${t.oro.toLocaleString("es-ES")} doblones</b>.</p>
    <button class="boton-grande oro" data-cobrar>¡Cobrar y elegir el siguiente!</button></div>`,document.body.append(i),i.querySelector("[data-cobrar]").addEventListener("click",()=>{const a=Ye();let o=a.nivel,r=(a.xp??0)+t.xp,s=0;for(;r>=50*o*o&&o<80&&s<2;)r-=50*o*o,o++,s++;ht({...a,nivel:o,xp:r,doblones:a.creador?a.doblones:a.doblones+t.oro,objetivo:void 0,objetivoBase:void 0,objetivosHechos:[...a.objetivosHechos??[],e.o.id],registro:[...a.registro??[],[Date.now(),`Cumplió su objetivo: ${e.o.texto.toLowerCase()}.`]].slice(-30)}),i.close(),i.remove(),Qe(s?`¡Recompensa cobrada! ${a.nombre} sube a nivel ${o}.`:"¡Recompensa cobrada! Elige un nuevo objetivo."),Ht(),Rn.abrir("mi-pirata")}),i.showModal()}function jd(){const n=Ye();if(!n?.busqueda)return;if(!Bh(n)){ht({...n,busqueda:void 0,registro:[...n.registro??[],[Date.now(),`Llegó tarde: alguien se comió la ${_l(n.busqueda.fruta)} antes que él.`]].slice(-30)}),Qe("Llegas tarde: otro ya se comió esa fruta. El rumor se apaga..."),Ht();return}if(n.busqueda.vencido){Mr();return}const e=Mn(n.busqueda.empezada%1e5),t={...eh(e,"hombre"),complexion:"fuerte",sombrero:"ninguno",accesorios:["parche"]},i={id:`guardian-${n.busqueda.fruta}`,nombre:"El Guardián",bando:n.bando==="marine"?"pirata":"marine",aspecto:t,rasgos:["valiente","rudo","orgulloso"],nivel:xl(n.nivel)};ga(i,`En ${_t(n).nombre}, una sombra enorme se interpone: «Nadie toca la fruta mientras yo respire».`,!0)}function Mr(){const n=Ye(),e=n?.busqueda;if(!n||!e?.vencido)return;const t=Nt.find(o=>o.id===e.fruta);document.querySelector("#dlg-fruta")?.remove();const i=document.createElement("dialog");i.id="dlg-fruta",i.className="dialogo dlg-fruta",i.innerHTML=`<div><span class="momento-chip">✦ Momento clave</span><h2>${Je(t.nombre)}</h2><div class="fruta-grande"></div>
    <p><b>${Je(t.poder)}</b></p><p>Técnicas: ${Je(t.tecnicas.join(", "))}.</p><p>Debilidad: ${Je(t.debilidad)}</p>
    <p class="nota-fruta">Si te la comes, será tuya para siempre y no podrás comer otra. Si otro jugador se la come antes, la perderás.</p>
    <div class="fila-botones"><button class="boton-grande oro" data-comer>Comérmela</button><button class="boton-grande" data-cerrar>Ahora no</button></div></div>`;const a=ar(t.id);i.querySelector(".fruta-grande").append(no(a,6)),document.body.append(i),i.querySelector("[data-cerrar]").addEventListener("click",()=>{i.close(),i.remove()}),i.querySelector("[data-comer]").addEventListener("click",async o=>{const r=o.currentTarget;r.disabled=!0,r.textContent="Mordiendo…";const s=Ye(),l=[Date.now(),`Se comió la ${t.nombre}. Sabía horrible... pero algo cambió dentro de él para siempre.`];ht({...s,fruta:t.id,busqueda:void 0,registro:[...s.registro??[],l].slice(-30)});const u=await oc();if(i.close(),i.remove(),u&&/fruta_unica|duplicate/i.test(u)){const h=Ye();ht({...h,fruta:void 0,busqueda:void 0,registro:[...h.registro??[],[Date.now(),`Llegó tarde: otro se comió la ${t.nombre} un instante antes.`]].slice(-30)}),await oc(),Qe("¡Demasiado tarde! Otro jugador se la comió un instante antes.")}else Qe(u?`No se pudo guardar: ${u}. Inténtalo otra vez.`:`¡Te has comido la ${t.nombre}! Mira sus técnicas en el Arsenal.`);Ht()}),i.showModal()}function Ha(){Oe("#tarjeta").hidden=!0}function wb(n,e){const t=Oe("#tarjeta");if(!n&&!e){t.hidden=!0;return}if(t.innerHTML="",n){const a=xn(rt()).find(h=>h.id===n.id),o=n.id.startsWith("j-")?An().find(h=>`j-${h.id}`===n.id):null,r=n.esMio?Ye():o??null,s=(a?.rasgos??r?.rasgos??[]).map(h=>ml.find(d=>d.id===h)?.nombre).filter(Boolean).join(", "),l=n.posicion.navegando?"Navegando":`En ${Yt()[n.posicion.islaId].nombre}`;t.append(no(Pn(n.aspecto),2)),t.insertAdjacentHTML("beforeend",`<div>
      <b>${Je(n.nombre)}${n.esMio?" <em>(tú)</em>":""}</b>
      <span class="${"bando-"+n.bando}">${o?'<b class="jugador-tag">Jugador</b> · ':""}${r?.creador?'<b class="creador">Creador</b> · ':""}${bn[n.bando].nombre} · Nv. ${a?.nivel??r?.nivel??1}</span>
      <small>${Je(l)}${s?` · ${Je(s)}`:""}</small>
      ${r?.sueno?`<small class="sueno-txt">Sueño: ${Je(r.sueno)}</small>`:""}
    </div>`);const u=Ct()?Ye():null;if(a&&u&&!n.posicion.navegando){const h=document.createElement("button");h.className="boton-oro boton-pelear",h.textContent=ao(u.bando,a.bando)?"¡Pelear!":"Retar",h.addEventListener("click",()=>{Ha(),ga(a,`¡${u.nombre} se planta delante de ${a.nombre}!`)}),t.append(h)}if(o&&u){const h=kd(u,o),d=document.createElement("button");d.className="boton-oro boton-pelear",d.textContent="⚔ Desafiar",h&&(d.disabled=!0,d.title=h,d.textContent=`⚔ ${h}`),d.addEventListener("click",()=>{Ha(),Vd(o)}),t.append(d)}}else if(e){const a={tropical:"Tropical",nevada:"Nevada",volcanica:"Volcánica",desierto:"Desierto",flotante:"Flotante",ciudad:"Ciudad",ruinas:"Ruinas"},o={base:"Hay una base de la marina.",taberna:"Tiene taberna.",maestro:`Aquí vive ${or(e)} 🥋: entrenar aquí da el doble de experiencia${ct&&!(ct.maestros??[]).includes(e.id)?" y la primera vez te enseña una habilidad":""}.`,tesoro:"Se habla de un tesoro escondido."},r=ur().filter(l=>!l.posicion.navegando&&l.posicion.islaId===e.id).length;t.insertAdjacentHTML("beforeend",`<div>
      <b>${Je(e.nombre)}</b>
      <span>${a[e.bioma]} · ${Je(di(e.zona))}</span>
      <small>${e.especial?o[e.especial]+" ":""}${r?`${r} personaje${r>1?"s":""} aquí ahora.`:"Nadie a la vista."}</small>
    </div>`);const s=ct;if(s&&Ct()&&!yr(s)&&_t(s).id!==e.id){const l=document.createElement("button");l.className="boton-oro boton-pelear",l.textContent=`⛵ Navegar aquí (${Qi(Wa(_t(s),e)*1e3)})`,l.addEventListener("click",()=>{Ha(),Ka(e)}),t.append(l)}}const i=document.createElement("button");i.className="tarjeta-cerrar",i.textContent="✕",i.setAttribute("aria-label","Cerrar"),i.addEventListener("click",Ha),t.append(i),t.hidden=!1}const Qi=n=>{const e=Math.max(0,Math.round(n/1e3));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`};function Sr(n=!1){const e=Ct()?Ye():null;if(!e){ct=null;return}const t=ct?.nivel,i=Dd(e,n);i.p!==e&&ht(i.p),i.volvio&&Qe(`${e.nombre} ha vuelto al barco de su tripulación.`);const{p:a,resumen:o}=ob(i.p);let r=a;const s=n?(r.mientras??[]).map(([,d])=>d):[];n&&r.mientras?.length&&(r={...r,mientras:void 0},ht(r)),ct=r;const l=[...s,...o.map(d=>`${r.nombre} ${d}`)];n&&l.length?(Oe("#resumen-lista").innerHTML=l.slice(-12).map(d=>`<li>${Je(d)}.</li>`).join("")+(l.length>12?`<li>…y ${l.length-12} cosas más (míralo en su diario).</li>`:""),Li("#dlg-resumen")):o.length&&Qe(`${r.nombre} ${o[o.length-1]}.`),t!==void 0&&t!==r.nivel&&Ht(),Mb(r),Tb(r);const u=document.querySelector("#btn-puntos"),h=r.creador?0:Xa(r.nivel,Wt(r));u&&!h?u.remove():u?u.textContent=`💪 ${h} puntos`:h&&Ht(),oo()}function oo(){const n=document.querySelector("#ficha-accion"),e=ct;if(!n||!e?.accion)return;const t=e.accion,i=Qi(t.hasta-Date.now()),a=t.tipo==="viajar"?`hacia ${Yt()[t.destino].nombre}`:`en ${_t(e).nombre}`;n.innerHTML=`<span>${Za[t.tipo]} ${Je(a)} <small>(${i})${t.mandada?"":" · decide solo"}</small></span><b>¿Qué hace? ›</b>`;const o=document.querySelector("#ficha-lugar-texto"),r=_t(e);o&&(o.textContent=t.tipo==="viajar"?`Navegando hacia ${Yt()[t.destino].nombre}`:`En ${r.nombre} · ${di(r.zona)}`)}const yr=n=>n.accion?.tipo==="viajar"&&Date.now()<n.accion.hasta;let Hl=!1;function Ka(n){const e=ct;if(!e)return;if(yr(e)){Qe(`${e.nombre} ya está navegando. Espera a que llegue.`);return}if(n.id===_t(e).id){Qe(`${e.nombre} ya está en ${n.nombre}. Toca otra isla.`);return}ct=Bl(e,"viajar",n),Hl=!1,document.body.classList.remove("eligiendo-destino"),oo();const t=wt[n.zona].nivelMinimo>e.nivel;Qe(`${e.nombre} zarpa hacia ${n.nombre}.${t?" ¡Cuidado, es una zona de nivel alto!":""}`),Mt?.visible?Mt.seguir(e.id):io()}function Cb(n){const e=ct;if(!e)return;if(yr(e)){Qe(`${e.nombre} está navegando: no puede hacer otra cosa hasta llegar.`);return}const t=_t(e);if(n==="navegar"){Wd("navegar");return}if((n==="pelear"||n==="explorar")&&Uu(e)){jd();return}if(n==="pelear"){const i=xn(rt()).find(a=>{const o=oa(a);return!o.navegando&&o.islaId===t.id&&ao(e.bando,a.bando)&&!(Sn(e,"no-debiles")&&a.nivel<=e.nivel-5)});if(!i){Qe(`No hay rivales${Sn(e,"no-debiles")?" dignos":""} en ${t.nombre}. Prueba a navegar a otra isla.`);return}ga(i,`${e.nombre} busca pelea y encuentra a ${i.nombre}.`);return}ct=Bl(e,n),oo(),Qe(`${e.nombre}: ¡a ${n==="entrenar"?"entrenar":n==="explorar"?"explorar":"descansar"}!`)}document.addEventListener("click",n=>{const e=n.target.closest("[data-orden]");e&&Cb(e.dataset.orden)});function Wd(n="todo"){const e=ct;if(!e)return;const t=_t(e),i=e.accion,a=i.tipo==="viajar"&&Date.now()<i.hasta,o=xn(rt()).filter(s=>{const l=oa(s);return!l.navegando&&l.islaId===t.id&&ao(e.bando,s.bando)}),r=Oe("#decidir-cuerpo");if(n==="navegar"){Oe("#dlg-decidir h2").textContent="¿A dónde navega?";const s=qo(t,400).find(l=>za(l)&&wt[l.zona].nivelMinimo<=e.nivel);r.innerHTML=`<p>Elige una isla cercana o <b>toca cualquier isla del mapa</b>.</p>
      ${s&&!za(t)?`<button class="boton-grande oro" data-zarpar="${s.id}" style="margin-bottom:10px">🥋 Ir al maestro más cercano: ${Je(or(s))} en ${Je(s.nombre)} (${Qi(Wa(t,s)*1e3)})</button>`:""}
      ${za(t)?`<p class="nota-prueba">🥋 Estás en la isla de ${Je(or(t))}: entrena aquí para ganar el doble.</p>`:""}
      <div class="destinos">${qo(t,8).map(l=>{const u=wt[l.zona].nivelMinimo>e.nivel;return`<button data-zarpar="${l.id}"><b>${za(l)?"🥋 ":""}${Je(l.nombre)}</b><small>${Je(di(l.zona))} · ${Qi(Wa(t,l)*1e3)} de viaje${u?` · <span class="peligro">⚠ nivel ${wt[l.zona].nivelMinimo}</span>`:""}</small></button>`}).join("")}</div>
      <button class="boton-grande" id="elegir-en-mapa" style="margin-top:10px">🗺 Elegir en el mapa</button>`,r.querySelector("#elegir-en-mapa").addEventListener("click",()=>{Oe("#dlg-decidir").close(),Hl=!0,document.body.classList.add("eligiendo-destino");const l=(Mt?.zoomIsla(t)??200)/16;Mt?.seguir(null),Mt?.visible?Mt.centrarEn(t.lat,t.lon,l):xr(t.lat,t.lon,l),Qe("Toca la isla a la que quieres navegar.")}),r.querySelectorAll("[data-zarpar]").forEach(l=>l.addEventListener("click",()=>{Oe("#dlg-decidir").close(),Ka(Yt()[Number(l.dataset.zarpar)])})),Li("#dlg-decidir");return}Oe("#dlg-decidir h2").textContent="¿Qué hace?",r.innerHTML=`
    <p>Ahora: <b>${Za[i.tipo]}</b> ${i.tipo==="viajar"?`hacia ${Je(Yt()[i.destino].nombre)}`:`en ${Je(t.nombre)}`} (${Qi(i.hasta-Date.now())}).
      ${i.mandada?"Se lo has mandado tú.":"Lo ha decidido él solo."}</p>
    ${a?'<p class="nota-prueba">Está navegando: no puede hacer otra cosa hasta llegar.</p>':`
    <div class="opciones-decidir">
      <button data-hacer="entrenar"><b>Entrenar</b><small>Gana experiencia</small></button>
      <button data-hacer="explorar"><b>Explorar</b><small>Puede encontrar doblones o rumores</small></button>
      <button data-hacer="descansar"><b>Descansar</b><small>Recupera fuerzas</small></button>
      <button data-hacer="pelear" ${o.length?"":"disabled"}><b>Buscar pelea</b><small>${o.length?`${o.length} rival${o.length>1?"es":""} en la isla`:"No hay rivales aquí"}</small></button>
      <button data-hacer="solo"><b>Que decida solo</b><small>Según su carácter</small></button>
    </div>
    <h3>Zarpar hacia...</h3>
    <div class="destinos">${qo(t).map(s=>{const l=wt[s.zona].nivelMinimo>e.nivel;return`<button data-zarpar="${s.id}"><b>${Je(s.nombre)}</b><small>${Je(di(s.zona))} · ${Qi(Wa(t,s)*1e3)} de viaje${l?` · <span class="peligro">⚠ nivel ${wt[s.zona].nivelMinimo}</span>`:""}</small></button>`}).join("")}</div>`}`,r.querySelectorAll("[data-hacer]").forEach(s=>s.addEventListener("click",()=>{const l=s.dataset.hacer;if(Oe("#dlg-decidir").close(),l==="pelear"){ga(o[0],`${e.nombre} busca pelea y encuentra a ${o[0].nombre}.`);return}if(l==="solo"){ct={...e,accion:{...i,hasta:Date.now(),mandada:!1}},ht(ct),Sr(),Qe(`${e.nombre} decidirá por su cuenta.`);return}ct=Bl(e,l),oo(),Qe(`${e.nombre}: ${Za[l].toLowerCase()}.`)})),r.querySelectorAll("[data-zarpar]").forEach(s=>s.addEventListener("click",()=>{Oe("#dlg-decidir").close(),Ka(Yt()[Number(s.dataset.zarpar)])})),Li("#dlg-decidir")}document.addEventListener("click",n=>{n.target.closest("#ficha-accion")&&Wd()});Sr(!0);Ou();setInterval(()=>{document.visibilityState==="visible"&&Ou()},4*6e4);Eb().then(n=>{if(!n.length)return;const e=Oe("#dlg-resumen"),t=Oe("#resumen-lista");e.open||(t.innerHTML=""),t.insertAdjacentHTML("beforeend",n.map(i=>`<li>⚔ ${Je(i)}</li>`).join("")),e.open||Li("#dlg-resumen"),Ht()});setInterval(()=>Sr(),2e3);requestAnimationFrame(()=>{ui=x0(Oe("#mundo"),Oe("#etiquetas"),{alAcercar:n=>{n&&!Mt?.visible&&xr()},marcadores:()=>ur().map(n=>(n.esMio&&ms?.id!==n.id&&(ms={id:n.id,cv:zl(n.aspecto,1.4)}),{id:n.id,lat:n.posicion.lat,lon:n.posicion.lon,esMio:n.esMio,color:n.bando==="pirata"?"#e88ba0":n.bando==="marine"?"#5cc3d8":"#8cc85a",cabeza:n.esMio?ms.cv:void 0}))}),Mt=V0(Oe("#mapa"),Yt(),{marcadores:ur,alAlejar:(n,e)=>$d(n,e),alTocar:(n,e)=>{if(Hl&&e){Ka(e);return}wb(n,e)}}),br.has("creado")&&setTimeout(io,1200)});
