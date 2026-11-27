# Arte del juego

Todos estos PNG se generan por código con `npm run assets` (scripts en `src/arte/`).

Para sustituir uno por arte hecho a mano:
1. Dibuja el PNG con el **mismo nombre y tamaño** (ver `manifiesto.json`).
2. Usa la paleta de `src/arte/paleta.ts` (32 colores).
3. Ojo: `npm run assets` lo sobrescribe. Cuando haya arte a mano, lo marcaremos
   para que el generador no lo pise.

Carpetas: personajes/ (32×32), barcos/, islas/ (64×64), frutas/ (24×24) y
frutas/siluetas/, ui/ (piezas de 9 trozos para border-image).
