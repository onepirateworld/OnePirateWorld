// Frutas del poder. En la fase 1 hay 10 de prueba; en la fase 4 llegarán a 35+.

export type CategoriaFruta = 'tallada' | 'salvaje' | 'primordial';
export type Rareza = 'comun' | 'rara' | 'epica' | 'legendaria';

export const CATEGORIAS: Record<CategoriaFruta, { nombre: string; descripcion: string }> = {
  tallada: { nombre: 'Talladas', descripcion: 'Moldean el cuerpo: lo estiran, lo endurecen o le dan propiedades nuevas.' },
  salvaje: { nombre: 'Salvajes', descripcion: 'Despiertan una bestia: transforman en un animal, entero o a medias.' },
  primordial: { nombre: 'Primordiales', descripcion: 'Disuelven el cuerpo en un elemento de la naturaleza.' },
};

export const RAREZAS: Record<Rareza, { nombre: string; color: string }> = {
  comun: { nombre: 'Común', color: '#a9a7b8' },
  rara: { nombre: 'Rara', color: '#5cc3d8' },
  epica: { nombre: 'Épica', color: '#b89ae0' },
  legendaria: { nombre: 'Legendaria', color: '#f2b63d' },
};

/** Debilidad común a todos los portadores (propuesta, se puede cambiar). */
export const DEBILIDAD_COMUN = {
  nombre: 'La Noche Hueca',
  descripcion:
    'En cada luna nueva del juego, todos los portadores de frutas pierden su poder durante una noche entera y quedan agotados. ' +
    'Además, la fruta rechaza el agua dulce: no pueden nadar en ríos ni lagos sin hundirse.',
};

export interface Fruta {
  id: string;
  nombre: string;
  categoria: CategoriaFruta;
  rareza: Rareza;
  poder: string;
  tecnicas: string[];
  debilidad: string;
}

export const FRUTAS: Fruta[] = [
  {
    id: 'muelle', nombre: 'Fruta Muelle', categoria: 'tallada', rareza: 'rara',
    poder: 'El cuerpo se vuelve un resorte: se comprime y sale disparado.',
    tecnicas: ['Salto de Ballesta', 'Puño Retráctil', 'Rebote Loco'],
    debilidad: 'El frío intenso lo deja rígido y sin rebote.',
  },
  {
    id: 'espejo', nombre: 'Fruta Espejo', categoria: 'tallada', rareza: 'epica',
    poder: 'Crea superficies de espejo que devuelven golpes y luz.',
    tecnicas: ['Muro de Azogue', 'Reflejo Devuelto', 'Laberinto de Plata'],
    debilidad: 'Si rompen su espejo principal, el portador se agrieta también.',
  },
  {
    id: 'eco', nombre: 'Fruta Eco', categoria: 'tallada', rareza: 'rara',
    poder: 'Guarda sonidos dentro del cuerpo y los suelta multiplicados.',
    tecnicas: ['Grito Guardado', 'Tambor de Pecho', 'Oído de Murciélago'],
    debilidad: 'En silencio total (niebla espesa, nieve) se queda sin munición.',
  },
  {
    id: 'raiz', nombre: 'Fruta Raíz', categoria: 'tallada', rareza: 'comun',
    poder: 'Le brotan raíces del cuerpo que agarran, trepan y anclan.',
    tecnicas: ['Lazo de Raíz', 'Ancla Viva', 'Bosque en Puño'],
    debilidad: 'El fuego y la sequía marchitan sus raíces.',
  },
  {
    id: 'jaguar', nombre: 'Fruta Fiera modelo Jaguar', categoria: 'salvaje', rareza: 'rara',
    poder: 'Se transforma en jaguar o en un híbrido mitad hombre, mitad felino.',
    tecnicas: ['Zarpazo Moteado', 'Acecho Nocturno', 'Salto de Rama'],
    debilidad: 'Mojado pierde casi toda su velocidad.',
  },
  {
    id: 'pulpo', nombre: 'Fruta Fiera modelo Pulpo', categoria: 'salvaje', rareza: 'epica',
    poder: 'Ocho brazos con ventosas, piel que cambia de color y tinta.',
    tecnicas: ['Tinta Ciega', 'Ocho Nudos', 'Ventosa de Hierro'],
    debilidad: 'Se reseca enseguida en zonas de desierto o volcán.',
  },
  {
    id: 'halcon', nombre: 'Fruta Fiera modelo Halcón', categoria: 'salvaje', rareza: 'rara',
    poder: 'Alas, vista de largo alcance y picados a gran velocidad.',
    tecnicas: ['Picado de Halcón', 'Ojo de Altura', 'Garra Cortavientos'],
    debilidad: 'El viento de tormenta lo tira al suelo.',
  },
  {
    id: 'ceniza', nombre: 'Fruta Ceniza', categoria: 'primordial', rareza: 'legendaria',
    poder: 'El cuerpo se convierte en ceniza ardiente que quema y ciega.',
    tecnicas: ['Nube Ardiente', 'Lluvia Gris', 'Brasa Dormida'],
    debilidad: 'El agua la vuelve barro pesado y lento.',
  },
  {
    id: 'niebla', nombre: 'Fruta Niebla', categoria: 'primordial', rareza: 'epica',
    poder: 'Se disuelve en niebla: atraviesa golpes y esconde barcos enteros.',
    tecnicas: ['Velo Blanco', 'Paso de Bruma', 'Abrazo Húmedo'],
    debilidad: 'El viento fuerte la dispersa y le cuesta volver a juntarse.',
  },
  {
    id: 'ambar', nombre: 'Fruta Ámbar', categoria: 'primordial', rareza: 'legendaria',
    poder: 'Resina dorada que se endurece y atrapa todo lo que toca.',
    tecnicas: ['Gota Eterna', 'Prisión de Miel', 'Coraza Dorada'],
    debilidad: 'El calor la ablanda y la vuelve pegajosa para él mismo.',
  },
  // --- Talladas nuevas
  {
    id: 'brujula', nombre: 'Fruta Brújula', categoria: 'tallada', rareza: 'rara',
    poder: 'Su cuerpo siempre apunta al norte... o a donde él quiera: desvía golpes y nunca se pierde.',
    tecnicas: ['Aguja Norte', 'Rosa de los Vientos', 'Rumbo Fijo'],
    debilidad: 'Cerca del hierro en grandes cantidades se marea y pierde el rumbo.',
  },
  {
    id: 'vela', nombre: 'Fruta Vela', categoria: 'tallada', rareza: 'comun',
    poder: 'La piel se vuelve lona de velamen: atrapa el viento, planea y se infla como un globo.',
    tecnicas: ['Velamen Hinchado', 'Planeo de Gaviota', 'Golpe de Botavara'],
    debilidad: 'Sin viento no puede volar, y la lona mojada pesa el doble.',
  },
  {
    id: 'coral', nombre: 'Fruta Coral', categoria: 'tallada', rareza: 'rara',
    poder: 'Le crece coral por el cuerpo: armadura, púas y arrecifes que brotan del suelo.',
    tecnicas: ['Arrecife Súbito', 'Coraza de Coral', 'Lanza de Madrépora'],
    debilidad: 'El coral es quebradizo: un golpe muy fuerte lo parte en pedazos.',
  },
  {
    id: 'nudo', nombre: 'Fruta Nudo', categoria: 'tallada', rareza: 'epica',
    poder: 'Puede hacer nudos en cualquier cosa larga: brazos, cuerdas, mástiles... o en el aire.',
    tecnicas: ['Nudo Marinero', 'As de Guía', 'Lazo Corredizo'],
    debilidad: 'Si le deshacen un nudo propio, se le enreda todo el cuerpo un rato.',
  },
  {
    id: 'lija', nombre: 'Fruta Lija', categoria: 'tallada', rareza: 'comun',
    poder: 'Su piel se vuelve áspera como la lija: raspa, pule y desgasta lo que toca.',
    tecnicas: ['Raspado', 'Pulido Total', 'Roce de Escofina'],
    debilidad: 'Se desgasta a sí mismo si abusa: cada técnica le cuesta piel.',
  },
  {
    id: 'esponja', nombre: 'Fruta Esponja', categoria: 'tallada', rareza: 'comun',
    poder: 'El cuerpo absorbe líquidos y golpes como una esponja, y luego los suelta de golpe.',
    tecnicas: ['Chupar', 'Escurrido', 'Cuerpo Blando'],
    debilidad: 'Empapado del todo se vuelve lento y pesado como un saco.',
  },
  {
    id: 'pendulo', nombre: 'Fruta Péndulo', categoria: 'tallada', rareza: 'epica',
    poder: 'Se balancea con un ritmo hipnótico: cada vaivén golpea más fuerte que el anterior.',
    tecnicas: ['Vaivén', 'Compás Hipnótico', 'Golpe de Contrapeso'],
    debilidad: 'Si le rompen el ritmo, tiene que empezar el balanceo desde cero.',
  },
  {
    id: 'escama', nombre: 'Fruta Escama', categoria: 'tallada', rareza: 'comun',
    poder: 'Le salen escamas duras que puede erizar como escudo o lanzar como cuchillas.',
    tecnicas: ['Lluvia de Escamas', 'Piel de Pez', 'Escudo Imbricado'],
    debilidad: 'Las escamas se le caen con el agua dulce caliente.',
  },
  {
    id: 'anzuelo', nombre: 'Fruta Anzuelo', categoria: 'tallada', rareza: 'rara',
    poder: 'De sus dedos salen anzuelos con sedal: engancha, arrastra y recoge lo que quiera.',
    tecnicas: ['Lance', 'Recogida', 'Cebo Falso'],
    debilidad: 'Si el sedal se enreda en algo grande, lo arrastra a él.',
  },
  // --- Salvajes nuevas
  {
    id: 'tiburon', nombre: 'Fruta Fiera modelo Tiburón Martillo', categoria: 'salvaje', rareza: 'epica',
    poder: 'Se transforma en un tiburón martillo: huele la sangre a millas y muerde con fuerza brutal.',
    tecnicas: ['Mordida Martillo', 'Olfato de Sangre', 'Embestida de Aleta'],
    debilidad: 'Lejos de la humedad se agota enseguida: necesita mojarse cada poco.',
  },
  {
    id: 'manta', nombre: 'Fruta Fiera modelo Manta Raya', categoria: 'salvaje', rareza: 'rara',
    poder: 'Alas planas enormes para planear sobre las olas y una cola que da descargas.',
    tecnicas: ['Vuelo Rasante', 'Coletazo', 'Sombra Plana'],
    debilidad: 'En tierra seca y sin viento se arrastra torpemente.',
  },
  {
    id: 'tortuga', nombre: 'Fruta Fiera modelo Tortuga', categoria: 'salvaje', rareza: 'comun',
    poder: 'Un caparazón durísimo que aguanta cañonazos. Lento, pero imposible de tumbar.',
    tecnicas: ['Caparazón', 'Mordida Lenta', 'Bola Rodante'],
    debilidad: 'Si lo ponen boca arriba tarda una eternidad en darse la vuelta.',
  },
  {
    id: 'rinoceronte', nombre: 'Fruta Fiera modelo Rinoceronte', categoria: 'salvaje', rareza: 'rara',
    poder: 'Piel de coraza y un cuerno que derriba muros. Cuando embiste, no hay quien lo pare.',
    tecnicas: ['Embestida Cornuda', 'Piel de Coraza', 'Estampida'],
    debilidad: 'Ve muy poco: si se queda quieto pierde de vista al rival.',
  },
  {
    id: 'escorpion', nombre: 'Fruta Fiera modelo Escorpión', categoria: 'salvaje', rareza: 'epica',
    poder: 'Pinzas que aprietan como cepos y una cola con aguijón que adormece.',
    tecnicas: ['Aguijón', 'Pinza Cepo', 'Danza del Desierto'],
    debilidad: 'El frío lo aletarga hasta casi dormirlo.',
  },
  {
    id: 'cangrejo', nombre: 'Fruta Fiera modelo Cangrejo', categoria: 'salvaje', rareza: 'comun',
    poder: 'Caparazón, pinzas que cortan cabos y un paso lateral que nadie sabe seguir.',
    tecnicas: ['Tijereta', 'Paso de Lado', 'Concha Cerrada'],
    debilidad: 'Las patas traseras son su punto débil: si se las tocan, se cae.',
  },
  {
    id: 'camaleon', nombre: 'Fruta Fiera modelo Camaleón', categoria: 'salvaje', rareza: 'epica',
    poder: 'Cambia de color hasta volverse invisible y dispara una lengua larguísima.',
    tecnicas: ['Lengua Látigo', 'Piel del Paisaje', 'Ojos Giratorios'],
    debilidad: 'Cuando se asusta o se enfada se pone de colores chillones y se delata.',
  },
  {
    id: 'puercoespin', nombre: 'Fruta Fiera modelo Puercoespín', categoria: 'salvaje', rareza: 'comun',
    poder: 'Se cubre de púas: quien le golpea se pincha, y puede lanzarlas en ráfaga.',
    tecnicas: ['Erizarse', 'Ráfaga de Púas', 'Bola de Pinchos'],
    debilidad: 'Tras lanzar las púas tarda en que le vuelvan a crecer.',
  },
  {
    id: 'gorila', nombre: 'Fruta Fiera modelo Gorila', categoria: 'salvaje', rareza: 'rara',
    poder: 'Fuerza descomunal, brazos larguísimos y un rugido que hace temblar la cubierta.',
    tecnicas: ['Golpe de Pecho', 'Puño de Selva', 'Lanzamiento de Barril'],
    debilidad: 'Se enfada con facilidad y entonces deja de defenderse.',
  },
  // --- Primordiales nuevas
  {
    id: 'marea', nombre: 'Fruta Marea', categoria: 'primordial', rareza: 'legendaria',
    poder: 'Se vuelve agua de mar que sube y baja a su voluntad, arrastrando todo lo que pilla.',
    tecnicas: ['Pleamar', 'Resaca', 'Ola Gigante'],
    debilidad: 'Bajo el sol del desierto se evapora poco a poco y pierde fuerza.',
  },
  {
    id: 'viento', nombre: 'Fruta Viento', categoria: 'primordial', rareza: 'legendaria',
    poder: 'Se convierte en viento: empuja barcos, corta como cuchillas de aire y se vuelve intocable.',
    tecnicas: ['Ráfaga Cortante', 'Calma Chicha', 'Tornado de Cubierta'],
    debilidad: 'Dentro de un lugar cerrado se queda sin fuerza y se marea.',
  },
  {
    id: 'mercurio', nombre: 'Fruta Mercurio', categoria: 'primordial', rareza: 'legendaria',
    poder: 'Metal líquido y plateado: se escurre de cualquier golpe y se endurece al instante.',
    tecnicas: ['Gota de Plata', 'Hoja Líquida', 'Espejo Fundido'],
    debilidad: 'El frío extremo lo congela en una estatua de plata.',
  },
  {
    id: 'oxido', nombre: 'Fruta Óxido', categoria: 'primordial', rareza: 'epica',
    poder: 'Se deshace en polvo de herrumbre que corroe armas, cadenas y cascos de hierro.',
    tecnicas: ['Herrumbre', 'Nube Rojiza', 'Corrosión'],
    debilidad: 'No le hace nada a la madera ni a la piedra, y el aceite lo repele.',
  },
  {
    id: 'arcilla', nombre: 'Fruta Arcilla', categoria: 'primordial', rareza: 'epica',
    poder: 'Barro moldeable: toma cualquier forma, absorbe los golpes y se endurece al secarse.',
    tecnicas: ['Moldeado', 'Ladrillo Volador', 'Gólem de Barro'],
    debilidad: 'Si se seca del todo se agrieta y se rompe con un buen golpe.',
  },
  {
    id: 'musgo', nombre: 'Fruta Musgo', categoria: 'primordial', rareza: 'rara',
    poder: 'Se vuelve musgo verde y húmedo que crece sobre todo, ablanda caídas y lo cura despacio.',
    tecnicas: ['Alfombra Verde', 'Musgo Curativo', 'Enredadera Húmeda'],
    debilidad: 'Se seca y se apaga al sol del mediodía.',
  },
  {
    id: 'polen', nombre: 'Fruta Polen', categoria: 'primordial', rareza: 'rara',
    poder: 'Una nube dorada de polen que hace estornudar, adormece y ciega a quien la respira.',
    tecnicas: ['Estornudo', 'Nube Dorada', 'Siesta de Primavera'],
    debilidad: 'La lluvia lo pega al suelo y lo deja inútil.',
  },
  {
    id: 'sal', nombre: 'Fruta Sal', categoria: 'primordial', rareza: 'rara',
    poder: 'Cristales de sal que resecan, escuecen en las heridas y forman muros blancos.',
    tecnicas: ['Salazón', 'Muro Blanco', 'Lluvia Salada'],
    debilidad: 'El agua dulce lo disuelve: con una buena tormenta se queda en nada.',
  }
];
