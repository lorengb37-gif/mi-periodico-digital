/*
  El Pulso Publicitario · edición N.º 284 · 11 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 284,
  fechaISO: "2026-10-11",
  fecha: "Domingo 11 de octubre 2026",
  fechaCorta: "11 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Gana la semana el que se entera primero de lo que cambia en el inventario, en los datos y en el bolsillo del cliente.",
    largo: "Esta semana el mapa se movió por todos lados. Amazon Ads crece con Prime Big Deal Days y el dinero se muda al DSP y la CTV. WARC subió su pronóstico y dice que lo social crece más rápido que cualquier otro canal. Italia multó con €7 millones a IQVIA por datos «anónimos» que se podían rastrear. Y aquí en el patio, las remesas siguen por encima de los mil millones de dólares al mes y Arajet se plantó de segunda en pasajeros. Escoge hoy un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del viernes.",
    porDep: {
      medios: "Cuando el dinero se muda de formato, pide la medición antes de seguirlo. Lo que no se prueba como incremental es difícil de defender ante el cliente.",
      creatividad: "Cuando la marca hace de verdad lo que dice, la idea casi se escribe sola. Mira lo que tu cliente hace todos los días y busca ahí el sonido, la imagen o el gesto propio.",
      planning: "Si lo social y la búsqueda crecen más que la TV, el plan de 2027 no se puede armar con el mapa de 2024. Revisa el reparto antes de que lo pida el cliente.",
      data: "Quitarle el nombre a un dato no lo vuelve anónimo. Pregúntales a tus proveedores si cada persona sigue teniendo un código fijo en el tiempo.",
      content: "Las plataformas premian lo original y las marcas pueden impulsar a creadores sin pactar de antemano. Deja un buen rastro de contenido propio y te van a encontrar.",
      rd: "Cuando entran más dólares y más visitantes, el mensaje tiene que hablarle al que ya está aquí y al que viene llegando. Fíjate en quién gasta y desde dónde."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon Ads crece entre 15 % y 40 % con Prime Big Deal Days y se mueve hacia DSP y CTV · Google simplifica los controles de brand suitability en DV360" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Chipotle graba una canción con instrumentos de vegetales en Abbey Road · Faith In Nature debuta en TV después de 52 años con disfraces de cartón" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "WARC sube a US$1.34 billones el pronóstico de inversión publicitaria y lo social lidera · La Gen Alpha dice que la IA en los anuncios la espanta" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Italia multa con €7 millones a IQVIA por datos «anónimos» que se podían rastrear · Un estudio dice que 1 de cada 4 grandes empresas de EE. UU. no tiene quien coordine la IA" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Pinterest deja que las marcas patrocinen Pins de creadores sin acuerdo previo · Estudio: la IA cita más a las marcas con presencia activa en redes" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "prime", dep: "medios", peso: "principal",
      etiquetas: ["Amazon Ads", "Retail media", "CTV"],
      titular: "Prime Big Deal Days empuja la inversión en Amazon Ads: sube entre 15 % y 40 % y se va pa’ arriba del embudo",
      corto: "Amazon Ads: la inversión sube 15 %–40 % con Prime Big Deal Days",
      cuerpo: "Cinco compradores de medios le contaron a Digiday que la inversión de sus clientes en Amazon Ads antes del Prime Big Deal Days (6 y 7 de octubre) está entre 15 % y 40 % por encima de la del año pasado, y que podría crecer hasta una tercera parte más antes de cerrar 2026. Wpromote ve +30 % anual en anunciantes que venden en Amazon y +40 % en los que no. Otra ejecutiva de la agencia aclaró que el ritmo es más bajo que el de años anteriores, cuando se veían crecimientos de 40 % a 50 %. Buena parte del dinero va hacia Amazon DSP, con más CTV y video en línea y menos sponsored products, porque la medición permite probar retornos incrementales fuera de Amazon.",
      cifras: [
        { v: "15%–40%", t: "más inversión en Amazon Ads antes de Prime Big Deal Days frente al año pasado, según cinco compradores de medios" },
        { v: "15%–20%", t: "crecimiento que una agencia ve este año, contra 40 %–50 % en años anteriores" },
        { v: "US$19.8 mil millones", t: "ingresos publicitarios de Amazon en el segundo trimestre" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "La plata sigue llegando a Amazon, pero cambia de lugar: del producto patrocinado hacia el DSP, la CTV y el video. Las cifras vienen de lo que cuentan agencias, no de Amazon, así que sirven de brújula y no de promesa.",
      hacer: "Esta semana, revisar con un cliente que vende en Amazon cuánto de su inversión va a sponsored products frente a DSP y CTV, y pedir una prueba de incrementalidad de la parte de arriba del embudo antes de cerrar el plan de Q4.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/defensible-to-the-cfo-prime-day-catalyzes-amazon-video-and-dsp-spend-growth/" }]
    },
    {
      id: "dv360", dep: "medios", peso: "secundaria",
      etiquetas: ["Google", "DV360", "Brand safety"],
      titular: "Google le quita a DV360 las categorías sensibles y deja tres niveles y diez temas",
      corto: "DV360 cambia sus controles de brand suitability",
      cuerpo: "Desde el 1 de octubre de 2026, Google retiró en DV360 las categorías sensibles y las etiquetas de contenido digital para la mayor parte del inventario programático. En su lugar quedan tres modos de inventario (Maximum, Moderate y Limited) y diez temas de contenido que se crearon primero para YouTube. Con eso, la TV conectada y el audio programático pasan a depender de la misma clasificación de YouTube, pero la auditoría independiente detrás de esa clasificación, por ahora, cubre YouTube en computadoras y teléfonos y no en pantallas de TV, según PPC Land.",
      cifras: [
        { v: "3 + 10", t: "tres modos de inventario y diez temas de contenido reemplazan las casillas anteriores" },
        { v: "1 oct 2026", t: "fecha de entrada en vigor, según la página de Google" }
      ],
      toca: "Si un cliente tenía listas de exclusión por categoría, ya no funcionan igual. Conviene revisar qué quedó activo y qué se perdió, sobre todo en CTV y audio.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-drops-dv360-sensitive-categories-leaving-3-tiers-and-10-themes/" }]
    },

    {
      id: "chipotle", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Chipotle", "Sonido de marca"],
      titular: "Chipotle graba en Abbey Road una canción tocada con instrumentos hechos de vegetales",
      corto: "Chipotle toca una canción con vegetales en Abbey Road",
      cuerpo: "Chipotle lanzó «From Ground to Sound», una pieza grabada en el Estudio Dos de Abbey Road con la London Vegetable Orchestra, un grupo de cinco músicos. Usaron flautas de maíz, trompetas de jalapeño, un cuerno hecho de pimientos y semilla de aguacate, percusión de lechuga y un bajo de cebolla. Fueron tres meses de pruebas y decenas de versiones, porque cada vegetal solo sirve pa’ tocar por unas horas. La dirección creativa fue de KIDS y la composición, de Beacon Street Studios, y Chipotle piensa usarla como firma sonora en campañas futuras.",
      cifras: [
        { v: "53", t: "ingredientes reales que la marca dice usar y que inspiran la pieza" },
        { v: "3 meses", t: "de experimentación con los instrumentos" },
        { v: "5", t: "músicos en la London Vegetable Orchestra" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "El sonido sale de lo que la marca hace todos los días, no de un jingle pegado encima. Así la idea es imposible de separar del producto, como dijo su directivo de marca, Fernando Machado.",
      hacer: "Esta semana, en la reunión creativa, escoger un cliente y listar tres cosas que su producto hace o deja a diario (un ruido, un gesto, un material) pa’ ver si alguna puede volverse un sonido o un símbolo de marca.",
      fuentes: [
        { nombre: "Nation’s Restaurant News", url: "https://www.nrn.com/fast-casual/chipotle-has-recorded-a-song-using-vegetables" },
        { nombre: "The Drum", url: "https://www.thedrum.com/news/ads-of-the-week-wet-ones-gets-cheeky-ghostface-goes-retro-and-vegetables-make-music" }
      ]
    },
    {
      id: "faith", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Faith In Nature", "Craft"],
      titular: "Faith In Nature debuta en TV después de 52 años y lo hace con disfraces de cartón",
      corto: "Faith In Nature debuta en TV con disfraces de cartón",
      cuerpo: "«Bees R Good» es el primer anuncio de TV de Faith In Nature en 52 años de historia, posible gracias a un premio del concurso B Corp de Channel 4. Los empleados y sus amigos salen con disfraces y accesorios armados con cajas de envío y materiales rescatados de la basura, con música de una versión de «Ebeneezer Goode», de The Shamen. La idea es de Simeon Rose y Anne Hopkins, de Dream Quickly; John Ogunmuyiwa dirigió con Blink Productions.",
      cifras: [
        { v: "52 años", t: "sin anunciarse en TV hasta este spot" }
      ],
      toca: "Un spot hecho a mano, con la gente de la propia marca, puede destacar más que uno de producción pulida. El presupuesto chico se vuelve parte de la personalidad.",
      fuentes: [{ nombre: "The Drum", url: "https://www.thedrum.com/news/ad-of-the-day-faith-in-nature-stays-true-to-its-kooky-handmade-roots-in-tv-debut" }]
    },

    {
      id: "warc", dep: "planning", peso: "principal",
      etiquetas: ["Pronóstico", "WARC", "Inversión"],
      titular: "WARC sube a US$1.34 billones la inversión publicitaria de 2026 y lo social va de primero",
      corto: "WARC: US$1.34 billones en 2026, lidera lo social",
      cuerpo: "WARC Media, en su pronóstico del tercer trimestre publicado el 8 de octubre, espera que la inversión publicitaria mundial suba 11.9 % hasta US$1.34 billones en 2026. Lo social es el canal que más crece: 21.3 %, hasta US$394.6 mil millones, seguido de la búsqueda, con 14.2 % (US$295.7 mil millones), y el retail media, con 14.3 % (US$202.1 mil millones). La TV crece solo 1.2 % (US$176.2 mil millones) y se proyecta que baje 1.8 % en 2027. Alphabet, Amazon y Meta se llevarían el 59.7 % de la inversión mundial fuera de China, y el crecimiento total bajaría a 8.4 % en 2027.",
      cifras: [
        { v: "+11.9%", t: "crecimiento de la inversión publicitaria mundial en 2026" },
        { v: "+21.3%", t: "lo social, el canal de mayor crecimiento: US$394.6 mil millones" },
        { v: "59.7%", t: "de la inversión mundial fuera de China, pa’ Alphabet, Amazon y Meta" },
        { v: "−1.8%", t: "baja que WARC proyecta pa’ la TV en 2027" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a planning?",
      toca: "Es el dato pa’ la conversación de presupuesto 2027: el dinero se sigue moviendo hacia social, búsqueda y retail media, y la TV pierde terreno. Ojo: es un pronóstico mundial y no un dato de RD.",
      hacer: "Esta semana, tomar el plan de 2027 de un cliente y comparar su reparto actual entre TV, social, búsqueda y retail media contra estos porcentajes de WARC, pa’ llevar al cliente una pregunta clara: ¿por qué nos movemos distinto?",
      fuentes: [{ nombre: "PPC Land (con datos de WARC Media)", url: "https://ppc.land/warc-forecasts-social-media-ad-spend-gains-21-3-to-394-6bn-in-2026/" }]
    },
    {
      id: "genalpha", dep: "planning", peso: "secundaria",
      etiquetas: ["Gen Alpha", "Consumidor", "IA"],
      titular: "La Gen Alpha le dice a las marcas: menos IA en los anuncios y más gente real",
      corto: "Gen Alpha: la IA en los anuncios la espanta",
      cuerpo: "En Shoptalk Fall, en Nashville, cinco jóvenes de la Gen Alpha, de secundaria, les dijeron a las marcas lo que quieren y lo que no. Usar IA en los anuncios les resulta un rechazo total y piden ver gente real y representantes con los que se identifiquen. Según el reporte, esta generación influye en casi la mitad del gasto total de los hogares de EE. UU. con hijos de 8 a 14 años y suma unos US$100,000 millones de gasto directo al año.",
      cifras: [
        { v: "US$100,000M", t: "de gasto directo anual de la Gen Alpha, según el reporte" },
        { v: "~50%", t: "del gasto de hogares de EE. UU. con hijos de 8 a 14 años recibe su influencia" }
      ],
      toca: "Es una muestra de cinco panelistas, no un estudio, pero marca un tono: pa’ el público joven, lo auténtico se nota. Vale la pena preguntarse dónde la IA suma y dónde le resta confianza a la marca.",
      fuentes: [{ nombre: "Digiday (vía Modern Retail)", url: "https://digiday.com/marketing/from-influencers-to-ai-heres-what-gen-alpha-thinks-about-your-brand/" }]
    },

    {
      id: "iqvia", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Italia", "GDPR"],
      titular: "Italia multa con €7 millones a IQVIA: sus datos «anónimos» de pacientes se podían rastrear",
      corto: "Italia multa a IQVIA con €7 millones por datos «anónimos»",
      cuerpo: "La autoridad de privacidad de Italia, el Garante, multó con €7 millones a IQVIA Solutions Italy. La empresa recibía historias clínicas de pacientes de médicos de cabecera que usaban un software gratuito y las llamaba anónimas porque les había quitado los nombres. Pero cada paciente mantenía el mismo código con el tiempo, así que se podía seguirlo y, según el Garante, eran datos personales de salud que necesitan una base legal y avisar al paciente. Si quiere seguir con la base de datos, IQVIA tiene 120 días pa’ cambiar cómo la alimenta. El caso fue reportado por PPC Land.",
      cifras: [
        { v: "€7 millones", t: "multa que impuso el Garante a IQVIA Solutions Italy" },
        { v: "120 días", t: "plazo pa’ cambiar cómo se alimenta la base de datos si IQVIA quiere mantenerla" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Quitar el nombre no hace anónimo un dato: si un código permite seguir a una persona en el tiempo, sigue siendo dato personal.",
        "Los reguladores miran cómo se usan los datos de terceros pa’ estudios que contratan empresas, y eso incluye a las farmacéuticas."
      ],
      hacer: "Esta semana, revisar con el equipo qué conjuntos de datos «anonimizados» usan los clientes (audiencias, paneles, salud o bienestar) y preguntarle a cada proveedor si cada persona mantiene un código fijo en el tiempo.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/italys-garante-fines-iqvia-eur7m-over-data-on-1m-patients-it-called-anonymous/" }]
    },
    {
      id: "iagobierno", dep: "data", peso: "secundaria",
      etiquetas: ["IA", "Gobernanza", "Estudio"],
      titular: "Una de cada cuatro grandes empresas de EE. UU. no tiene quien coordine su IA",
      corto: "1 de cada 4 grandes empresas no tiene responsable de IA",
      cuerpo: "Un informe de WSJ Intelligence y la agencia Code and Theory, anunciado el 7 de octubre, encuestó a 801 ejecutivos de empresas de EE. UU. con al menos US$500 millones al año. Encontró que usan en promedio 183 herramientas y plataformas de IA, pero solo el 15 % de sus inversiones en IA funciona como un sistema unificado. Una de cada cuatro admite que nadie es responsable de coordinar la IA en la empresa. Ojo: el estudio lo hizo el área publicitaria del WSJ junto con una agencia que vende ese tipo de solución, y mide opiniones de ejecutivos, no resultados auditados.",
      cifras: [
        { v: "183", t: "herramientas de IA en promedio por empresa grande" },
        { v: "15%", t: "de las inversiones en IA que operan como un sistema unificado" },
        { v: "1 de 4", t: "empresas sin un responsable de coordinar la IA" }
      ],
      toca: "Si el cliente grande tiene la IA regada, la agencia que lleve su inventario de herramientas ordenado se vuelve un aliado. Eso sí, hay que tomar el dato con cuidado por quién lo pagó.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/1-in-4-big-us-firms-has-no-one-in-charge-of-ai-code-and-theory-finds/" }]
    },

    {
      id: "pincreators", dep: "content", peso: "principal",
      etiquetas: ["Pinterest", "Creadores", "Marcas"],
      titular: "Pinterest deja que las marcas patrocinen los Pins de creadores sin acuerdo previo",
      corto: "Pinterest: marcas patrocinan Pins de creadores",
      cuerpo: "Pinterest amplió sus herramientas de monetización: ahora una marca puede promover Pins elegibles de creadores con los que no tenía un acuerdo, incluso si el producto no estaba etiquetado como parte de un patrocinio. El creador recibe un correo cuando una marca decide promover su Pin y puede aceptar la promoción o rechazarla, o salirse por completo de las promociones de marcas a nivel de cuenta. Pinterest recomienda a los creadores mencionar marcas en los títulos y descripciones de sus Pins, crear contenido que se pueda comprar y cuidar que sea seguro pa’ las marcas.",
      cifras: [
        { v: "Sin acuerdo previo", t: "la marca puede promover Pins de creadores con los que no había pactado" },
        { v: "Opt-out", t: "el creador puede rechazar cada promoción o salirse a nivel de cuenta" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de content?",
      toca: "Los creadores que ya hablan bien de tu cliente en Pinterest pueden recibir impulso pago, y los de tu cliente también pueden recibirlo de la competencia. Conviene mirar quién habla de la marca y con qué tono.",
      hacer: "Esta semana, buscar en Pinterest los Pins de creadores que mencionan a un cliente o a su categoría, hacer una lista corta de los que encajan con la marca y evaluar con el cliente si vale promoverlos en el último trimestre.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/pinterest-expands-creator-content-promotions/832447/" }]
    },
    {
      id: "iasocial", dep: "content", peso: "secundaria",
      etiquetas: ["IA", "Búsqueda", "Social"],
      titular: "Estudio: la IA cita más a las marcas con presencia activa en redes",
      corto: "La IA cita más a las marcas activas en redes",
      cuerpo: "Un estudio de SE Ranking analizó 100,000 palabras clave de varias categorías de marcas pa’ ver qué fuentes aparecen en Google y en chatbots de IA. Los enlaces a redes sociales aparecieron en el 67.66 % de las respuestas de AI Overviews de Google, el 32.39 % de las de AI Mode y el 8.4 % de las de ChatGPT. YouTube es la fuente más citada en los AI Overviews de Google, y Reddit y LinkedIn son las redes más mencionadas por ChatGPT.",
      cifras: [
        { v: "67.66%", t: "de las respuestas de AI Overviews de Google incluyen enlaces a redes sociales" },
        { v: "8.4%", t: "de las respuestas de ChatGPT incluyen enlaces a redes sociales" }
      ],
      toca: "Mantener un perfil activo en redes también ayuda a que la marca aparezca en las respuestas de la IA. El peso cambia según la herramienta, así que no es lo mismo pa’ Google que pa’ ChatGPT.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/ai-favors-brands-with-an-active-social-media-presence/832450/" }]
    },

    {
      id: "remesas", dep: "rd", peso: "principal", para: ["planning", "medios"],
      etiquetas: ["Economía", "Consumo", "Banco Central"], fecha: "11 oct 2026",
      titular: "Las remesas pasan de US$9,489 millones y llevan siete meses seguidos arriba de los mil millones",
      corto: "Remesas: US$9,489 millones de enero a septiembre",
      cuerpo: "Santo Domingo.— El Banco Central informó que entre enero y septiembre de 2026 las remesas alcanzaron US$9,489.8 millones, US$577.0 millones (6.5 %) más que en el mismo período de 2025. Solo en septiembre entraron US$1,057.1 millones, 6.6 % más que en septiembre del año pasado, y fue el séptimo mes seguido arriba de US$1,000 millones. El 80.9 % de lo canalizado en septiembre vino de EE. UU. y España fue el segundo país, con 6.2 %. El Distrito Nacional captó el 51.2 % del flujo, y las áreas metropolitanas concentraron el 67.3 %.",
      cifras: [
        { v: "US$9,489.8M", t: "remesas de enero a septiembre de 2026, +6.5 %" },
        { v: "US$1,057.1M", t: "en septiembre, séptimo mes seguido sobre US$1,000 millones" },
        { v: "80.9%", t: "de las remesas de septiembre vino de EE. UU." },
        { v: "67.3%", t: "de lo recibido en septiembre llegó a las áreas metropolitanas" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Es plata que entra a los hogares dominicanos, y más de la mitad llega al Distrito Nacional. Es una pista de dónde hay consumo y de cuándo, en especial pa’ las marcas que venden en temporada.",
      hacer: "Esta semana, revisar con los clientes de retail, banca y telecom el calendario de temporada navideña y evaluar un mensaje pa’ el hogar que recibe remesas, con foco en el Gran Santo Domingo.",
      fuentes: [{ nombre: "El Dinero (Banco Central)", url: "https://eldinero.com.do/384453/bcrd-informa-que-los-flujos-de-remesas-alcanzaron-los-us9489-8-millones-en-el-periodo-enero-septiembre-de-2026/" }]
    },
    {
      id: "arajet", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Aerolíneas", "Turismo", "Datos"], fecha: "10 oct 2026",
      titular: "Arajet pasa a American Airlines y queda segunda en pasajeros en septiembre",
      corto: "Arajet, segunda en pasajeros en septiembre",
      cuerpo: "Santo Domingo.— La aerolínea dominicana Arajet transportó 158,407 pasajeros desde y hacia el país en septiembre, y superó a American Airlines, con 115,406. Solo la superó JetBlue, con 243,955. Según estadísticas de la Junta de Aviación Civil citadas en un comunicado de la empresa, Arajet creció 62 % frente a los 97,797 pasajeros de un año antes. EE. UU. fue su principal mercado, con 43,021 pasajeros, seguido de Colombia (35,413) y Argentina (21,164); la ruta más movida fue Bogotá, con 18,413.",
      cifras: [
        { v: "158,407", t: "pasajeros de Arajet en septiembre, segunda aerolínea del país" },
        { v: "+62%", t: "crecimiento interanual, según estadísticas de la JAC citadas por la empresa" },
        { v: "Bogotá", t: "ruta con más pasajeros: 18,413" }
      ],
      toca: "Colombia y Argentina ya pesan en el tráfico de Arajet. Eso le abre puertas a mensajes pa’ visitantes sudamericanos y pa’ dominicanos que viajan, con medios de aeropuerto y de a bordo.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/10/10/arajet-transporta-158407-pasajeros-en-septiembre/3685247" }]
    },
    {
      id: "mlb", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Béisbol", "Grandes Ligas", "Deportes"], fecha: "10–11 oct 2026",
      titular: "José Ramírez lleva a los Guardianes a la Serie de Campeonato y el béisbol de octubre se pone bueno",
      corto: "Guardianes de José Ramírez van a la Serie de Campeonato",
      cuerpo: "El dominicano José Ramírez selló el pase de los Guardianes de Cleveland a la Serie de Campeonato de la Liga Americana. Cleveland completó una remontada de 3-2 tras perder los dos primeros juegos de la Serie Divisional, y su mánager, Stephen Vogt, dijo que están «a un paso de la Serie Mundial». Revista Mercado recuerda que la Liga Nacional abre su Serie de Campeonato este domingo 11, con los Cerveceros de Milwaukee y los Dodgers de Los Ángeles, y que en RD las Grandes Ligas tienen una comunidad de fanáticos enorme.",
      cifras: [
        { v: "3-2", t: "remontada de Cleveland tras perder los dos primeros juegos" },
        { v: "11 oct", t: "arranque de la Serie de Campeonato de la Liga Nacional" }
      ],
      toca: "Cada juego con un dominicano en la pelea es conversación, tráfico y minutos de pantalla. Pa’ medios es un espacio de pauta deportiva, y pa’ content, un momento pa’ subirse a la conversación.",
      fuentes: [
        { nombre: "Acento", url: "https://acento.com.do/deportes/dominicano-jose-ramirez-sella-pase-de-guardianes-a-la-serie-de-campeonato-9768219.html" },
        { nombre: "Revista Mercado", url: "https://revistamercado.do/empresas/sport-business/que-partidos-de-mlb-se-juegan-este-fin-de-semana-horarios-y-donde-verlos-en-rd-los-dias-9-al-11-de-octubre-de-2026/" }
      ]
    },
    {
      id: "licey", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Béisbol", "Licey", "Pretemporada"], fecha: "10 oct 2026",
      titular: "Licey le gana 8-1 a las Águilas en la pretemporada y calienta el clásico del patio",
      corto: "Licey vence a las Águilas 8-1 en pretemporada",
      cuerpo: "Santiago.— Un cuadrangular de tres carreras de José Barrero coronó un rally de cuatro anotaciones en el séptimo inning y encaminó a los Tigres del Licey a vencer 8-1 a las Águilas Cibaeñas, en un juego de pretemporada en el Estadio Cibao. La ofensiva azul arrancó en el tercer inning con dobles de Kevin Alcántara y Gustavo Núñez, y el abridor Daniel Martínez trabajó tres entradas y un tercio sin permitir carreras.",
      toca: "El béisbol invernal ya se está calentando. Pa’ medios y content es el momento de mirar auspicios, transmisiones y los calendarios de las marcas que viven de la afición.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/licey-domina-a-las-aguilas-en-pretemporada/" }]
    },
    {
      id: "huevos", dep: "rd", peso: "secundaria", para: ["planning", "content"],
      etiquetas: ["Consumo", "Alimentos"], fecha: "9 oct 2026",
      titular: "El dominicano promedio se come unos 320 huevos al año, casi uno por día",
      corto: "El dominicano promedio come 320 huevos al año",
      cuerpo: "Con motivo del Día Mundial del Huevo, que se celebró el viernes 9 de octubre y cumplió 30 años, Steffanía Lajara, gerente de marca de Huevos del Sol, dijo que el dominicano promedio consume unos 320 huevos al año, según cifras del sector avícola. La producción nacional supera los 400 millones de huevos al mes, suficientes pa’ abastecer el mercado interno y dejar excedentes pa’ exportar. El huevo forma parte de desayunos, almuerzos y cenas, con plátano, yuca, pan y vegetales.",
      cifras: [
        { v: "320", t: "huevos por persona al año, según el sector avícola" },
        { v: "400 millones", t: "de huevos al mes de producción nacional" }
      ],
      toca: "Es un producto de todos los días, en todas las comidas. Pa’ planning es un hábito de consumo con dato propio, y pa’ content, un tema que se puede contar con recetas y costumbres del patio.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/10/09/en-republica-dominicana-consumen-unos-320-huevos-al-ano-por-persona/3682725" }]
    }
  ],

  pizarra: ["prime", "chipotle", "warc", "iqvia", "pincreators", "remesas"],

  frases: [
    { dep: "medios", texto: "El dinero sigue llegando a Amazon, pero se muda del producto patrocinado al DSP, la CTV y el video.", uso: "para conversaciones de retail media y Q4" },
    { dep: "creatividad", texto: "Chipotle no pegó un jingle encima de la marca: grabó en Abbey Road una canción tocada con maíz, jalapeños y lechuga.", uso: "para conversaciones de sonido de marca" },
    { dep: "planning", texto: "WARC espera que lo social crezca 21.3 % este año y que la TV baje 1.8 % en 2027: el plan del año que viene no se arma con el mapa de ayer.", uso: "para conversaciones de presupuesto 2027" },
    { dep: "data", texto: "Quitarle el nombre a un dato no lo hace anónimo: Italia multó a IQVIA con €7 millones porque cada paciente mantenía el mismo código.", uso: "para conversaciones de privacidad y datos de terceros" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Amazon Ads sube con Prime Big Deal Days" },
      { id: "creatividad", texto: "Chipotle y su canción de vegetales" },
      { id: "planning", texto: "WARC: lo social lidera en 2026" },
      { id: "data", texto: "Italia multa a IQVIA por datos «anónimos»" },
      { id: "content", texto: "Pinterest patrocina Pins de creadores" },
      { id: "rd", texto: "Zoom a RD: las remesas pasan de US$9,489 millones" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "prime", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "warc", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Octubre es el mes de armar el plan del año que viene: WARC proyecta que lo social crezca 21.3 % en 2026 y que la TV baje 1.8 % en 2027. Llega al cliente con su reparto comparado."
    },
    data: {
      tipo: "secreto", nota: "iagobierno", titulo: "Destapa el expediente",
      texto: "Las grandes empresas de EE. UU. usan en promedio [[183 herramientas de IA]], pero solo el [[15 %]] de sus inversiones en IA funciona como un sistema unificado."
    },
    rd: {
      tipo: "pregunta", nota: "arajet", titulo: "La pregunta del patio",
      p: "¿Qué aerolínea quedó segunda en pasajeros en septiembre, por encima de American Airlines?",
      opciones: ["JetBlue", "Arajet", "Copa Airlines"],
      correcta: 1,
      explicacion: "Arajet movió 158,407 pasajeros contra 115,406 de American Airlines. Solo JetBlue, con 243,955, estuvo por encima."
    }
  }
};
