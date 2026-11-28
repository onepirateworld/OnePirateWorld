#!/usr/bin/env bash
# Empaqueta y sube la función del servidor «vida-mundo» (mueve el mundo cada 5 minutos).
# Hay que volver a subirla cuando cambia la vida de los personajes (src/mundo/vida.ts, busqueda.ts...).
# Necesita SUPABASE_TOKEN (token de la API de gestión) y el secreto TICK_SECRETO ya guardado en Supabase.
set -euo pipefail
cd "$(dirname "$0")/.."
PROYECTO=umifpodyelcyfrgtdvlf
SALIDA=$(mktemp -d)
npx esbuild supabase/funciones/vida-mundo.ts --bundle --format=esm --platform=browser --target=es2022 --outfile="$SALIDA/index.js"
curl -sf -X POST "https://api.supabase.com/v1/projects/$PROYECTO/functions/deploy?slug=vida-mundo" \
  -H "Authorization: Bearer ${SUPABASE_TOKEN}" \
  -F 'metadata={"entrypoint_path":"index.js","name":"vida-mundo","verify_jwt":false};type=application/json' \
  -F "file=@$SALIDA/index.js;filename=index.js;type=application/javascript" > /dev/null
echo "Función vida-mundo publicada."
