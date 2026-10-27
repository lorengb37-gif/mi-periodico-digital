/*
  El Pulso Publicitario · edición N.º 300 · 27 de octubre de 2026
*/
window.EDICION = {
  numero: 300,
  fechaISO: "2026-10-27",
  fecha: "Martes 27 de octubre 2026",
  fechaCorta: "27 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Las agencias se están pegando al inventario, y el cliente se queda con quien le explica de dónde sale cada peso y cada dato.",
    largo: "Hoy se juntaron varias señales: Stagwell compra Freestar pa’ meter la venta de espacios dentro de la agencia, Apple le cierra la puerta a los identificadores, Salesforce se come a Braze y Clorox cambia las campañas grandes por sistemas que aprenden to’ los días. Aquí en el patio, Turismo se pone la meta de pasar de 1.3 millones de canadienses. El consejo: antes del viernes, escoge un «Lo que toca hacer» de esta edición, ponle responsable y llévaselo al cliente con fecha.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, llévalo al cliente esta semana y ponle fecha. Así de fácil.",
    porDep: {
      medios: "Cuando tu agencia compra y vende desde la misma casa, pídele al cliente que te deje explicar cómo escoges cada espacio. La transparencia se gana antes de que pregunten.",
      creatividad: "No esperes la gran campaña. Prueba una idea chiquita en redes, mira qué pega y súbele la inversión solo a lo que ya funcionó.",
      planning: "Cuando una marca gasta más en publicidad, el cliente quiere saber qué le devuelve. Ten listo un número de resultado por cada peso que propongas.",
      data: "Si tu medición depende de un identificador que Apple puede cortar, ten un plan B con datos propios y contexto antes de diciembre.",
      content: "Los videos largos llegaron a Instagram. Revisa qué material tu cliente ya tiene grabado antes de pensar en grabar uno nuevo.",
      rd: "Cuando Turismo se fija una meta con un mercado, todas las marcas del sector pueden subirse. Llega con la propuesta antes que la competencia."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Stagwell compra Freestar y mete la venta de espacios en la agencia · TikTok muestra cuánto cuestan sus formatos premium pa’ la temporada" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Clorox cambia las campañas grandes por sistemas que aprenden to’ los días · Jay-Z será la figura del show de medio tiempo del Super Bowl LXI" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Anthropic pasó de gastar US$33 millones en publicidad a US$147 millones · Pew: 58 % de los adultos de EE. UU. usa redes pa’ enterarse" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "El bloqueo de Apple a los identificadores ya se nota en las pujas · Salesforce compra Braze por unos US$5,660 millones" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Instagram prueba videos de hasta 90 minutos · Los creadores de noticias la tienen difícil con las marcas" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Turismo busca más de 1.3 millones de canadienses · Las compras por courier crecen · Influencers pasan a la radio · Merengueros El Festival" }
  },

  notas: [
    {
      id: "freestar", dep: "medios", peso: "principal",
      etiquetas: ["Agencias", "Stagwell", "Ad Tech"],
      titular: "Stagwell compra Freestar y mete la venta de espacios dentro de la agencia",
      corto: "Stagwell compra Freestar",
      cuerpo: "El holding de agencias Stagwell anunció el lunes que adquirió Freestar, una red que ayuda a los medios a vender su publicidad. La compra ya cerró y el precio no se reveló. Con ella, el negocio de medios de Stagwell puede usar directamente el inventario y los datos de más de 1,000 publishers que mueven cerca de mil millones de solicitudes de anuncios al día. Stagwell no compra los medios, sino la tecnología que usan pa’ monetizar y las relaciones con sus clientes. Según su directivo, cada anunciante decide si incluye o no ese inventario en su campaña.",
      cifras: [
        { v: "1,000+", t: "publishers en la red de Freestar" },
        { v: "~1,000 millones", t: "de solicitudes de anuncios al día" },
        { v: "Sin precio", t: "la compra ya cerró y no se reveló el monto" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Una agencia que compra y también tiene su propia vía de venta de espacios se acerca más al publisher y acorta el camino del dinero. Pa’ el cliente, la pregunta es quién gana en cada compra.",
      hacer: "Preguntarle a tu agencia o a tus socios de compra si usan inventario propio o de su grupo y cómo se les cobra al cliente, y dejar esa respuesta por escrito antes del próximo plan.",
      fuentes: [
        { nombre: "AdExchanger", url: "https://www.adexchanger.com/agencies/stagwell-acquires-publisher-monetization-network-freestar/" },
        { nombre: "Digiday", url: "https://digiday.com/media-buying/stagwell-buys-freestar-putting-publisher-ad-sales-inside-a-holdco/" }
      ]
    },
    {
      id: "tiktok", dep: "medios", peso: "secundaria",
      etiquetas: ["TikTok", "Temporada", "Formatos premium"],
      titular: "TikTok muestra cuánto vale poner su anuncio de primero pa’ la temporada",
      corto: "TikTok vende su primer lugar pa’ la temporada",
      cuerpo: "TikTok publicó una guía de 12 páginas pa’ que las marcas usen TopView y Pulse Suite en sus promociones de fin de año. TopView pone el anuncio como el primero que ve la persona al abrir la app ese día, y Pulse deja pautar al lado de contenido de medios importantes. La guía trae datos de uso en momentos como el Super Bowl y la final del Mundial. Según Stackmatix, citado por Social Media Today, una campaña TopView cuesta como mínimo US$50,000 por un día.",
      cifras: [
        { v: "US$50,000", t: "mínimo por un día de TopView, según Stackmatix" },
        { v: "12 páginas", t: "tiene la guía de temporada de TikTok" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Son formatos pa’ presupuestos grandes. Aun así, la guía sirve pa’ saber qué momentos de la temporada TikTok considera más fuertes.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-playbook-outlines-the-value-of-its-high-end-ad-options/872827/" }]
    },

    {
      id: "clorox", dep: "creatividad", peso: "principal",
      etiquetas: ["Clorox", "Social", "Sistemas de contenido"],
      titular: "Clorox cambia las campañas grandes por sistemas que aprenden to’ los días",
      corto: "Clorox cambia campañas por sistemas",
      cuerpo: "Eric Schwartz, CMO de Clorox, dijo el 22 de octubre en el ANA Masters of Marketing que planear, lanzar y repetir una gran campaña ya no alcanza. Su apuesta son «sistemas de relevancia continua»: gente atenta a las señales, IA que acelera y agencias que ayudan a escalar. Con «OMG Da Pine», Pine-Sol pasó de casi no existir en redes a unas 150 publicaciones orgánicas al mes y 13 % de engagement. Brita, con «At Least I’m Hydrated», sacó 22 millones de interacciones y subió 1,742 % sus impresiones orgánicas frente al año anterior.",
      cifras: [
        { v: "150+", t: "publicaciones orgánicas al mes de Pine-Sol" },
        { v: "13 %", t: "de engagement promedio de Pine-Sol" },
        { v: "22 millones", t: "de interacciones de Brita, con 8.17 % de engagement" },
        { v: "+1,742 %", t: "de impresiones orgánicas de Brita vs. el año anterior" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "El trabajo creativo ya no termina cuando se lanza la pieza. Clorox la mejora mientras está en la calle, y eso cambia cómo se le cobra y se le presenta al cliente.",
      hacer: "Escoger un cliente y proponerle un piloto de 30 días: un tema, un formato en redes y una reunión semanal pa’ ver qué pegó y qué se ajusta.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/why-clorox-shifted-from-creating-brand-campaigns-to-systems-of-relevance/838232/" }]
    },
    {
      id: "jayz", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Super Bowl", "Música", "Apple Music"],
      titular: "Jay-Z será la figura del show de medio tiempo del Super Bowl LXI",
      corto: "Jay-Z encabeza el medio tiempo del Super Bowl",
      cuerpo: "Apple Music, la NFL y Roc Nation confirmaron hoy, 27 de octubre, que Jay-Z será el artista principal del show de medio tiempo del Super Bowl LXI, el 14 de febrero de 2027. Roc Nation produce el espectáculo con la NFL desde 2019, pero será la primera vez que él lo encabece. Hamish Hamilton dirigirá el show y Apple Music es el patrocinador.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/jay-z-will-finally-headline-super-bowl-61-halftime-show-after-years-behind-the-scenes/" }]
    },

    {
      id: "anthropic", dep: "planning", peso: "principal",
      etiquetas: ["Inversión publicitaria", "IA", "Anthropic"],
      titular: "Anthropic ya gasta US$147 millones al año en publicidad, según su documento pa’ salir a bolsa",
      corto: "Anthropic gasta US$147 millones en publicidad",
      cuerpo: "El documento S-1 que Anthropic presentó ante los reguladores de EE. UU. antes de salir a bolsa muestra que su gasto publicitario subió de US$33 millones en 2024 a US$147 millones en 2025. Eso es más de lo que Duolingo, famosa por su mercadeo, gastó en ventas y mercadeo juntos ese año, que fueron US$125.7 millones. En el primer semestre de 2026 el gasto siguió subiendo. El documento atribuye el aumento a más gasto en medios y relaciones públicas pa’ apoyar lanzamientos de productos.",
      cifras: [
        { v: "US$33 millones", t: "de gasto publicitario en 2024" },
        { v: "US$147 millones", t: "de gasto publicitario en 2025" },
        { v: "US$125.7 millones", t: "lo que Duolingo gastó en ventas y mercadeo en 2025" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Las empresas de IA se están volviendo grandes anunciantes. Pa’ planning es un competidor nuevo por los espacios y una categoría nueva que entender.",
      hacer: "Anotar a las marcas de IA como categoría en el calendario de Q4 y revisar si compiten con tu cliente por los mismos espacios y fechas.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/anthropics-ad-bill-is-soaring-according-to-ipo-filing/" }]
    },
    {
      id: "pew", dep: "planning", peso: "secundaria",
      etiquetas: ["Audiencias", "Pew", "Redes"],
      titular: "Pew: 58 % de los adultos de EE. UU. usa las redes pa’ enterarse de lo que pasa",
      corto: "Pew: 58 % usa redes pa’ enterarse",
      cuerpo: "Pew Research publicó el 23 de octubre una encuesta a más de 3,500 adultos de EE. UU., hecha en junio. El 58 % considera las redes sociales una forma importante de estar al tanto de lo que pasa, frente a 43 % en 2022. El 13 % las ve como su fuente más importante, frente a 5 % en 2022. Es un dato de EE. UU., no de RD.",
      cifras: [
        { v: "58 %", t: "ve las redes como forma importante de enterarse (43 % en 2022)" },
        { v: "13 %", t: "las ve como su fuente más importante (5 % en 2022)" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Muestra hacia dónde va la atención en un mercado grande. Sirve de referencia, pero antes de aplicarlo en RD hay que buscar el dato local.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/more-than-half-of-us-adults-use-social-media-to-get-their-news/872828/" }]
    },

    {
      id: "apple", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Apple", "Identidad"],
      titular: "El bloqueo de Apple a los identificadores ya se nota en las pujas",
      corto: "El bloqueo de Apple ya se nota en las pujas",
      cuerpo: "Apple explicó el 19 de octubre que su navegador ahora corta el acceso de red a las empresas de resolución de identidad, las que unen datos sueltos de una persona pa’ reconocerla entre sitios y dispositivos. Según datos de Aditude citados por Digiday, el WebKit, que cubre Safari y todos los navegadores del iPhone, es 30 % de las impresiones y 28.5 % de los ingresos de sus clientes. Donde la actualización ya llegó, los compradores pujan menos: las pujas en iOS bajaron 14 % entre el 15 de septiembre y el 8 de octubre, y las de Mac, cerca de 25 %.",
      cifras: [
        { v: "30 %", t: "de las impresiones de los clientes de Aditude vienen de navegadores WebKit" },
        { v: "−14 %", t: "en las pujas de iOS del 15 de septiembre al 8 de octubre" },
        { v: "−25 %", t: "aproximado en las pujas de Mac" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Apple sigue apretando la privacidad y la industria tendrá que depender más del contexto y las señales agregadas.",
        "Mientras más usuarios actualicen, más impresiones quedarán sin identificador."
      ],
      hacer: "Sacar de tu medición cuánto del tráfico y de las conversiones de cada cliente viene de Safari y iPhone, y preparar una versión con datos propios y contexto pa’ comparar.",
      fuentes: [
        { nombre: "Digiday", url: "https://digiday.com/marketing/in-graphic-detail-what-apples-identity-block-means-for-the-ad-money/" },
        { nombre: "AdExchanger", url: "https://www.adexchanger.com/daily-news-roundup/monday-26102026/" }
      ]
    },
    {
      id: "braze", dep: "data", peso: "secundaria",
      etiquetas: ["Martech", "Salesforce", "Braze"],
      titular: "Salesforce compra Braze por unos US$5,660 millones y junta más datos bajo un mismo techo",
      corto: "Salesforce compra Braze",
      cuerpo: "Salesforce y Braze anunciaron el 20 de octubre un acuerdo definitivo que valora a Braze en unos US$5,660 millones, pendiente de aprobaciones. Salesforce dice que la tecnología de Braze, de mensajes en tiempo real y decisiones con IA, se sumará a Marketing Cloud, Data 360 y Agentforce. Digiday advierte que un sistema más unido concentra más del trabajo en un solo proveedor, y que será importante ver qué tan fácil queda mover los datos después del cierre.",
      cifras: [{ v: "US$5,660 millones", t: "valor aproximado del acuerdo" }],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/salesforces-5-7-billion-braze-deal-puts-marketers-at-an-ecosystem-crossroads/" }]
    },

    {
      id: "instagram", dep: "content", peso: "principal",
      etiquetas: ["Instagram", "Video largo", "Creadores"],
      titular: "Instagram prueba videos de hasta 90 minutos pa’ competirle a YouTube",
      corto: "Instagram prueba videos de 90 minutos",
      cuerpo: "Adam Mosseri y Tessa Lyons presentaron el lunes varias opciones de video largo que Instagram está probando. «Features» deja subir videos de hasta 90 minutos, pa’ podcasts, vlogs y entrevistas, y empezó con creadores seleccionados en EE. UU. el 26 de octubre, tras pruebas en Brasil. «Clips as Reels» permite enlazar hasta ocho clips en Reels a un video largo. «Series» agrupa Reels de un mismo tema y se prueba desde junio.",
      cifras: [
        { v: "90 min", t: "duración máxima de un video en «Features»" },
        { v: "8", t: "clips en Reels que se pueden enlazar a un video largo" },
        { v: "26 oct", t: "arrancó la prueba con creadores seleccionados en EE. UU." }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si un cliente ya tiene podcast, entrevistas o eventos grabados, Instagram pronto podría ser otra vía pa’ ese material. Por ahora es una prueba limitada.",
      hacer: "Hacer esta semana una lista del contenido largo que tienen tus clientes y marcar qué se puede cortar en clips pa’ Reels cuando la función llegue a RD.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-rolls-out-limited-features-test-in-the-us/872825/" }]
    },
    {
      id: "noticiascreadores", dep: "content", peso: "secundaria",
      etiquetas: ["Creadores", "Marcas", "Noticias"],
      titular: "Los creadores de noticias la tienen difícil pa’ conseguir marcas",
      corto: "Creadores de noticias y marcas",
      cuerpo: "Digiday reporta que los creadores de noticias tienen un camino difícil pa’ conseguir acuerdos con marcas, por la cautela de los anunciantes y lo cambiante de los algoritmos. Casi 60 % de los estadounidenses se entera de las noticias por redes, según un estudio de Syracuse University citado en el artículo. El mismo texto estima que la economía de creadores moverá US$43,900 millones este año.",
      cifras: [
        { v: "~60 %", t: "se entera de las noticias por redes (estudio de Syracuse, EE. UU.)" },
        { v: "US$43,900 millones", t: "estimado de la economía de creadores este año" }
      ],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media/creators-say-its-difficult-to-make-money-from-news-with-platform-rules-and-brand-guidelines/" }]
    },

    {
      id: "canada", dep: "rd", peso: "principal", para: ["medios", "creatividad", "planning"],
      etiquetas: ["Turismo", "Mitur", "Canadá"], fecha: "26 oct 2026",
      titular: "Turismo se pone la meta de pasar de 1.3 millones de canadienses",
      corto: "Turismo busca más de 1.3 millones de canadienses",
      cuerpo: "Santo Domingo.— El ministro de Turismo, David Collado, celebró la primera feria dedicada solo a promover República Dominicana en Canadá, «Meet in Paradise Canadá 2026». Allí anunció que el país busca superar los 1.3 millones de visitantes canadienses.",
      cifras: [{ v: "1.3 millones", t: "de visitantes canadienses: la meta que el país quiere superar" }],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Cuando hay una meta clara con un mercado, hoteles, aerolíneas y tours buscan cómo subirse. Es temporada de armar planes de invierno.",
      hacer: "Llevarles esta semana a los clientes de turismo una propuesta pa’ el mercado canadiense: un mensaje y un plan de medios pa’ la temporada de invierno.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/rd-busca-superar-los-1-3-millones-de-turistas-canadienses/" }]
    },
    {
      id: "courier", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Consumo", "Compras en línea"], fecha: "26 oct 2026",
      titular: "Las exenciones a las compras por courier se duplicaron entre 2021 y 2024",
      cuerpo: "El gasto tributario estimado por envíos vía courier subió de RD$5,372.76 millones en 2021 a RD$11,433.97 millones en 2024, un aumento de 112.82 %, o RD$6,061.21 millones adicionales, según Hacienda y Economía. Es una estimación de impuestos que el Estado deja de cobrar, no una cifra de ventas, pero muestra que el comercio por courier ha crecido.",
      cifras: [
        { v: "RD$11,433.97 millones", t: "estimado de exenciones por courier en 2024" },
        { v: "+112.82 %", t: "frente a 2021" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ los clientes de comercio en línea, es una señal de que cada vez más gente compra afuera. La competencia de las tiendas locales no es solo la tienda de al lado.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386244/exenciones-a-compras-de-compras-por-courier-suman-rd11433-97-millones/" }]
    },
    {
      id: "radio", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Radio", "Influencers", "Tendencia"], fecha: "26 oct 2026",
      titular: "Influencers dan el salto de las redes a la radio dominicana",
      cuerpo: "Remolacha destacó a siete creadores de contenido que han llegado a programas de radio en el país: Ramcelis de Jesús, Edward Cruz, Enger Luna, La Psicóloga, Natalie B, Semi Popi y Juanma García. El medio señala que la radio, antes reservada a locutores y profesionales del micrófono, se ha ido abriendo en los últimos años.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ los de medios, la radio ahora trae caras que ya tienen seguidores en redes. Pa’ content, es una forma de llevar a un creador de la pantalla al micrófono.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/influencers-radio-dominicana/" }]
    },
    {
      id: "merengueros", dep: "rd", peso: "secundaria", para: ["creatividad", "content", "medios"],
      etiquetas: ["Música", "Agenda", "Merengue"], fecha: "13 al 15 nov 2026",
      titular: "Merengueros El Festival: tres días de merengue gratis en el Hostos",
      cuerpo: "La orquesta Los Hermanos Rosario se sumó a la cartelera de Merengueros El Festival, que celebrará su primera edición del 13 al 15 de noviembre en el parque Eugenio María de Hostos, con entrada gratuita. El evento forma parte de las celebraciones del Día Nacional del Merengue.",
      cifras: [{ v: "13–15 nov", t: "fechas de la primera edición del festival" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Un evento gratis y con mucha gente es oportunidad de activación y de contenido pa’ marcas que quieran asociarse con el Día Nacional del Merengue.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/los-hermanos-rosario-2/" }]
    }
  ],

  pizarra: ["freestar", "clorox", "anthropic", "apple", "instagram", "canada"],

  frases: [
    { dep: "medios", texto: "Stagwell compró Freestar: la agencia ya no solo compra espacios, también tiene una vía pa’ venderlos.", uso: "para conversaciones de transparencia en la compra" },
    { dep: "creatividad", texto: "Clorox dejó de pensar en la gran campaña y empezó a pensar en un sistema que mejora mientras está en la calle.", uso: "para proponer pilotos en redes" },
    { dep: "data", texto: "Apple cortó los identificadores y las pujas en iOS ya bajaron 14 %: el plan B de medición no puede esperar a diciembre.", uso: "para conversaciones de medición y privacidad" },
    { dep: "planning", texto: "Anthropic pasó de US$33 millones a US$147 millones en publicidad en un año: las marcas de IA ya son anunciantes grandes.", uso: "para conversaciones de competencia por inventario" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Stagwell compra Freestar" },
      { id: "creatividad", texto: "Clorox y sus sistemas de relevancia" },
      { id: "planning", texto: "Anthropic y su gasto en publicidad" },
      { id: "data", texto: "El bloqueo de Apple a los identificadores" },
      { id: "content", texto: "Videos de 90 minutos en Instagram" },
      { id: "rd", texto: "Zoom a RD: la meta con Canadá" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "freestar", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "pew", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Pew encontró que 58 % de los adultos de EE. UU. ve las redes como una forma importante de enterarse, frente a 43 % en 2022. Busca el dato local antes de aplicarlo en RD."
    },
    data: {
      tipo: "secreto", nota: "braze", titulo: "Destapa el expediente",
      texto: "Salesforce y Braze anunciaron el 20 de octubre un acuerdo que valora a Braze en unos [[US$5,660 millones]], con la tecnología de Braze sumándose a [[Marketing Cloud, Data 360 y Agentforce]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "canada", titulo: "La pregunta del patio",
      p: "¿Qué meta anunció Turismo pa’ el mercado canadiense?",
      opciones: ["Superar los 1.3 millones de visitantes", "Llegar a 500,000 visitantes", "Abrir 13 oficinas en Canadá"], correcta: 0,
      explicacion: "El ministro David Collado la anunció en «Meet in Paradise Canadá 2026», la primera feria dedicada solo a promover RD en Canadá."
    }
  }
};
