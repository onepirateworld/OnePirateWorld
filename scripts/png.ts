import { deflateSync } from 'node:zlib';

// Codificador PNG mínimo (RGBA de 8 bits) sin dependencias.
const TABLA = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(buf: Uint8Array) {
  let c = 0xffffffff;
  for (const b of buf) c = TABLA[(c ^ b) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function trozo(tipo: string, datos: Uint8Array) {
  const out = Buffer.alloc(12 + datos.length);
  out.writeUInt32BE(datos.length, 0);
  out.write(tipo, 4, 'ascii');
  Buffer.from(datos).copy(out, 8);
  out.writeUInt32BE(crc32(out.subarray(4, 8 + datos.length)), 8 + datos.length);
  return out;
}

export function codificarPNG(w: number, h: number, rgba: Uint8ClampedArray, escala = 1): Buffer {
  const W = w * escala, H = h * escala;
  const crudo = Buffer.alloc((W * 4 + 1) * H);
  for (let y = 0; y < H; y++) {
    const fila = y * (W * 4 + 1);
    crudo[fila] = 0;
    for (let x = 0; x < W; x++) {
      const s = (Math.floor(y / escala) * w + Math.floor(x / escala)) * 4;
      crudo.set(rgba.subarray(s, s + 4), fila + 1 + x * 4);
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    trozo('IHDR', ihdr),
    trozo('IDAT', deflateSync(crudo)),
    trozo('IEND', new Uint8Array(0)),
  ]);
}
