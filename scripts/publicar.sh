#!/usr/bin/env bash
# Compila el juego y lo sube a la rama gh-pages (la web pública).
set -euo pipefail
cd "$(dirname "$0")/.."
rm -rf dist
npm run build
rm -f dist/pagina-claude.html
touch dist/.nojekyll
cd dist
git init -q -b gh-pages
git add -A
git -c user.email=noreply@anthropic.com -c user.name=Claude commit -qm "Publicar el juego"
git push -f -q "$(git -C .. remote get-url origin)" gh-pages
echo "Publicado en https://onepirateworld.github.io/OnePirateWorld/"
