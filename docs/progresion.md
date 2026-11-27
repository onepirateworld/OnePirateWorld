# Progresión: niveles, experiencia, recompensas, rangos y misiones

Propuesta de equilibrio para el motor de simulación (fase 6). Los números son el
punto de partida: se ajustarán al probar con bots.

## Ritmo del juego

- El servidor hace un **tick cada 10 minutos**: 144 acciones por personaje y día.
- Un personaje "normal" (sin que el jugador haga nada especial) debe sentir progreso
  **cada día**, pero las metas grandes llevan **meses**.

## 1. Niveles y experiencia (XP)

Experiencia para pasar del nivel `n` al `n+1`: **`50 × n²`** (nivel máximo: 80).

| Nivel | XP total | Tiempo aproximado | Dónde suele estar |
|---|---|---|---|
| 5 | 1.500 | 1 día | Su isla de inicio |
| 10 | 14.250 | 4–5 días | Su mar de inicio |
| 15 | 49.000 | 2 semanas | Puede intentar cruzar las Aguas Dormidas |
| 20 | 123.500 | 3–4 semanas | Senda de las Mareas |
| 35 | 684.000 | 3 meses | Final de la Senda de las Mareas |
| 50 | 2.000.000 | 6–7 meses | Senda Profunda |
| 60 | 3.500.000 | ~1 año | Leyendas del mar |

**De dónde sale la XP** (por acción; se multiplica por la zona: mares ×1, Senda de las Mareas ×2,5, Senda Profunda ×5):

| Acción | XP |
|---|---|
| Explorar | 6 |
| Entrenar | 12 (×3 con un maestro) |
| Ganar un combate | 20 + 5 × nivel del rival |
| Perder un combate | 5 |
| Completar una misión | 100–2.000 según dificultad |
| Paso del objetivo cumplido | 300 |
| Paso del sueño cumplido | 2.000 |
| Descansar / viajar | 0 (pero recupera vida o acerca a otra isla) |

Cada nivel sube un poco las estadísticas (fuerza, técnica, velocidad, resistencia
+2; vida +6). Los rasgos modifican la XP (Inteligente +25% al entrenar, etc.).

## 2. Recompensas (piratas y revolucionarios)

### Notoriedad
Las acciones ilegales suman **notoriedad**:

| Acción | Notoriedad |
|---|---|
| Robo o pelea en un puerto | +1 |
| Pelear contra un marine | +5 |
| Saquear un barco mercante | +8 |
| Sabotaje revolucionario | +15 |
| Derrotar a un oficial (Teniente o más) | +20 |
| Hundir un barco de la marina | +40 |
| Asaltar una base de la marina | +100 |
| Derrotar a un Vicealmirante | +250 |
| Derrotar a un Almirante | +600 |

### Cálculo al amanecer (una vez al día del juego)
`recompensa = notoriedad × valor por punto de la zona`, con un **techo** por zona:

| Zona | Valor por punto | Techo de recompensa |
|---|---|---|
| Los cuatro mares | 50.000 | 50 millones |
| Senda de las Mareas | 300.000 | 500 millones |
| Senda Profunda | 1.000.000 | Sin techo |

- Si pasa **3 días sin hacer nada ilegal**, la recompensa baja un **2% al día**
  (nunca por debajo de la mitad de su máximo histórico).
- Los Avariciosos ganan notoriedad un 30% más rápido; los Honrados un 30% más lento.
- Carteles de **Se busca** al amanecer para los 20 más buscados de cada mar.

### ¿Cuánto cuesta llegar a 300 millones?
- Es **imposible en los cuatro mares** (el techo es 50 millones).
- Hay que estar en la **Senda de las Mareas** (nivel 20+) y juntar unos
  **1.000 puntos de notoriedad** allí.
- Un pirata activo saca 15–25 puntos al día en la Senda → **unos 2 meses** allí.
- En total, desde que se crea el personaje: **unos 5–6 meses de juego**, nivel 35–45.
- Solo lo conseguirá **el 1–2% de los piratas** de cada mar.

### Títulos de los piratas (según su recompensa)
| Recompensa | Título |
|---|---|
| 0 | Grumete |
| < 1 millón | Ratero de puerto |
| 1–10 millones | Pirata |
| 10–50 millones | Terror del mar |
| 50–300 millones | Azote de la Senda |
| 300 millones – 1.000 millones | Gran Corsario |
| > 1.000 millones | Leyenda viva |

## 3. Rangos de la marina

Los marines no tienen recompensa: tienen **méritos**. Para subir hacen falta los
méritos **y** el nivel mínimo. Los rangos altos tienen **plazas limitadas en cada
uno de los cuatro mares** (Alba, Ocaso, Coral y Bruma): cada mar tiene su propia
cadena de mando. Si no hay hueco, hay que esperar o ganárselo en un duelo de ascenso.

| Rango | Méritos | Nivel mín. | Plazas en cada mar | Total por mundo |
|---|---|---|---|---|
| Recluta | 0 | 1 | ∞ | ∞ |
| Marinero | 50 | 5 | ∞ | ∞ |
| Cabo | 150 | 10 | ∞ | ∞ |
| Sargento | 400 | 15 | ∞ | ∞ |
| Teniente | 1.000 | 20 | ∞ | ∞ |
| Capitán | 2.500 | 28 | 12 | 48 |
| Comodoro | 6.000 | 35 | 5 | 20 |
| Vicealmirante | 15.000 | 45 | 2 | 8 |
| Almirante | 40.000 | 55 | **1** | **4** |

- Cada **Almirante** manda en su mar: decide dónde patrulla su flota y qué piratas
  son prioridad. Para ascender a Almirante hay que estar destinado en ese mar.
- La Senda de las Mareas y la Senda Profunda no tienen Almirante propio: allí
  van los mejores de los cuatro mares en misiones especiales.

Méritos: misión cumplida 10–50 · patrulla 5 · capturar a un pirata = su recompensa
÷ 1 millón (mínimo 5) · defender una base 100. Desertar o perder contra un pirata
mucho más débil resta méritos.

## 4. Rangos revolucionarios

| Rango | Requisito |
|---|---|
| Simpatizante | Al unirse |
| Agente | 5 misiones de célula |
| Saboteador | 20 misiones y nivel 15 |
| Jefe de célula | Liberar una isla y nivel 25 |
| Comandante | Liberar 5 islas y nivel 40 (10 plazas por mar) |
| Consejo de la Rebelión | Nivel 55 y votación de los Comandantes (3 plazas por mar) |

Los revolucionarios también tienen recompensa (con un 40% más de valor por punto).

## 5. Misiones

Cada día del juego, el personaje recibe **3 misiones** de su bando y escoge una
según su carácter y su objetivo (el jugador puede fijarla).

| Tipo | Ejemplos | Duración | Recompensa |
|---|---|---|---|
| Diarias | Pirata: saquear un mercante. Marine: patrullar una ruta. Revolucionario: repartir panfletos. | Horas | XP, doblones, méritos o notoriedad |
| De zona | Despejar las ruinas de una isla, escoltar un barco, cazar a un buscado concreto | 1–3 días | Mucha XP, equipo |
| De historia | Pasos del sueño del personaje | Semanas | Grandes saltos de XP y fama |
| De tripulación | Las elige el capitán: asaltar, explorar, defender | Variable | Para toda la tripulación |

## 6. Doblones

| Fuente | Cantidad aproximada |
|---|---|
| Misión diaria | 200–2.000 |
| Tesoro | 500–10.000 (cofres legendarios: hasta 1 millón) |
| Saquear un mercante | 1.000–5.000 |
| Paga de marine (al día) | 100 × rango |

| Gasto | Precio |
|---|---|
| Comida y curación | 20–200 al día |
| Entrenar con un maestro | 500–20.000 por sesión |
| Carabela | 20.000 |
| Bergantín | 80.000 |
| Galeón | 250.000 |
| Mejoras del barco | 5.000–100.000 |

## 7. Frutas del poder

Ver el sistema de rumores, pistas, guardián y carrera (nivel mínimo 10 / 20 / 35 / 50
según rareza). Solo una de cada fruta por mar.
