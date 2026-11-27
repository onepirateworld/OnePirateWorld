import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  // En GitHub Pages la web vive en /OnePirateWorld/; en local y en Vercel, en la raíz.
  base: process.env.BASE_URL_WEB || '/',
  build: {
    assetsDir: '_app', // no mezclar con public/assets (arte)
    rollupOptions: {
      input: {
        inicio: resolve(__dirname, 'index.html'),
        galeria: resolve(__dirname, 'galeria/index.html'),
        nuevo: resolve(__dirname, 'nuevo/index.html'),
      },
    },
  },
});
