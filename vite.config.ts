import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  // Rutas relativas: el juego funciona en la raíz, en una subcarpeta o como página de Claude.
  base: process.env.BASE_URL_WEB || './',
  build: {
    target: 'es2022', // para poder esperar al servidor al arrancar (top-level await)
    assetsDir: 'app', // no mezclar con public/assets (arte)
    rollupOptions: {
      input: {
        inicio: resolve(__dirname, 'index.html'),
        galeria: resolve(__dirname, 'galeria/index.html'),
        nuevo: resolve(__dirname, 'nuevo/index.html'),
      },
    },
  },
});
