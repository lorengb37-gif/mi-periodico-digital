/*
  El Pulso Publicitario · edición N.º 308 · 4 de noviembre de 2026
*/
window.EDICION = {
  numero: 308,
  fechaISO: "2026-11-04",
  fecha: "Miércoles 4 de noviembre 2026",
  fechaCorta: "4 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Quien controla los datos y la confianza del cliente manda: antes de estrenar un canal o una herramienta, sabe quién la maneja y qué datos toca.",
    largo: "Reddit prueba anuncios en sus búsquedas, Publicis cerró la compra de LiveRamp y ya hay marcas que se van, LinkedIn estrena nuevas métricas pa’ creadores y Levi’s apuesta por la plastilina frente a tanta IA. Aquí en el patio, el Gobierno aprobó un Código de Ética de la IA pa’ los servicios públicos con 180 días pa’ adecuarse. El consejo: esta semana haz una lista corta de quién maneja los datos y las herramientas de IA en cada cuenta, y llévala a la próxima reunión con el cliente.",
    corto: "Esta semana anota quién maneja los datos y las herramientas de IA en cada cuenta, y llévalo al cliente.",
    porDep: {
      medios: "Antes de sumar un formato nuevo al plan, pídele al rep de la plataforma qué datos de búsqueda y qué medición trae.",
      creatividad: "Lo hecho a mano se nota. Cuando todo el mundo usa IA, una pieza con oficio visible se vuelve tema de conversación.",
      planning: "Un estudio de la plataforma es una pista, no una prueba. Compara siempre con tu propia data antes de mover presupuesto.",
      data: "Si tu cliente usa una plataforma de datos de identidad, averigua quién es el dueño y qué datos pasan por ahí.",
      content: "Mide lo que guardan y comparten, no solo lo que ven. Los guardados y envíos dicen qué contenido vale la pena repetir.",
      rd: "El Estado ya puso reglas pa’ su propia IA. Si trabajas con entidades públicas, prepárate pa’ explicar cómo usas la tuya."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Reddit prueba anuncios en los resultados de su búsqueda" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Levi’s hace su campaña navideña en claymation, sin IA" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Reddit presenta datos de TransUnion sobre su audiencia de videojuegos" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Publicis cierra la compra de LiveRamp y algunas marcas dicen que se van" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "LinkedIn estrena una tabla de rendimiento y métricas nuevas pa’ creadores" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "El Gobierno aprueba el Código de Ética de la IA pa’ los servicios públicos · La pelota mueve el comercio alrededor del Quisqueya · Turismo: ingresos crecerían 13 % en 2026" }
  },

  notas: [
    {
      id: "redditsearch", dep: "medios", peso: "principal",
      etiquetas: ["Reddit", "Búsqueda", "Inventario"],
      titular: "Reddit empieza a probar anuncios en sus resultados de búsqueda",
      corto: "Reddit prueba anuncios en su búsqueda",
      cuerpo: "Reddit está probando anuncios en los resultados de búsqueda dentro de la app, según Social Media Today. Los anuncios se segmentan por la consulta, llevan una marca pequeña de anuncio en la parte de arriba y se muestran sobre todo por relevancia contextual. La prueba arranca con un grupo selecto de anunciantes. La plataforma dice que su búsqueda tiene alta intención de compra, aunque su CEO, Steve Huffman, admitió que el tráfico de búsqueda bajó en más de 1 millón de visitas por semana en octubre.",
      cifras: [
        { v: "72 %", t: "de los usuarios de Reddit llegan buscando información, según un estudio de julio de la plataforma" },
        { v: "1 millón+", t: "menos visitas semanales desde buscadores en octubre, según Huffman" },
        { v: "Prueba", t: "solo con un grupo selecto de anunciantes por ahora" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Es un inventario nuevo, pegado a lo que la gente busca. Pa’ medios, la pregunta es qué medición trae y si se justifica probarlo mientras baja el tráfico que llega desde afuera.",
      hacer: "Esta semana, preguntarle al rep de Reddit si tu cuenta califica pa’ la prueba y qué métricas de búsqueda entrega, antes de reservar presupuesto del primer trimestre.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-tests-ads-in-search-results/873676/" }]
    },
    {
      id: "levis", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Levi’s", "Navidad"],
      titular: "Levi’s hace su campaña navideña en claymation y sin IA",
      corto: "Levi’s apuesta por la plastilina en Navidad",
      cuerpo: "Levi’s lanzó «Let’s Get Fuzzy», una campaña navideña centrada en un spot de 60 segundos en stop-motion con plastilina, según Marketing Dive. Un yeti llamado Gus irrumpe en una cabaña y termina aceptado en la fiesta cuando le lanzan un suéter rojo. Cada segundo de animación requirió cuatro horas de filmación, los sets y personajes se hicieron a mano y la marca asegura que no usó IA. Se inspira en «Clayman», su anuncio de 1995. La campaña correrá en digital, redes y tiendas, y E.l.f. y Prada también salieron con campañas hechas a mano esta temporada.",
      cifras: [
        { v: "60 s", t: "duración del spot en claymation" },
        { v: "4 horas", t: "de filmación por cada segundo de animación" },
        { v: "1995", t: "año de «Clayman», el anuncio que inspira la campaña" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Mientras la IA inunda la publicidad, mostrar el trabajo hecho a mano se vuelve un gancho. Según un estudio de Gartner de 2026 citado por Marketing Dive, la mitad de los consumidores prefiere marcas que no usan IA generativa en su comunicación.",
      hacer: "En la próxima sesión creativa, escoger un cliente y bocetar una pieza donde el oficio manual (ilustración, maqueta, stop-motion) sea la idea, y cotizar cuánto costaría hacerla.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/levis-claymation-holiday-campaign-celebrates-handmade-craft-amid-ai-bloat/873496/" }]
    },

    {
      id: "redditgaming", dep: "planning", peso: "principal",
      etiquetas: ["Reddit", "Audiencias", "Gaming"],
      titular: "Reddit dice que las marcas de videojuegos le invierten poco, y trae datos de TransUnion pa’ probarlo",
      corto: "Reddit: los gamers están subatendidos en la plataforma",
      cuerpo: "Reddit presentó un manual pa’ anunciantes de videojuegos con una investigación de TransUnion, según Social Media Today. Dice tener más de 1,300 comunidades relacionadas con juegos. Sus anuncios dieron un retorno promedio de US$8.58 por dólar invertido a los anunciantes de gaming, y 32 % de los gamers de EE. UU. en Reddit no está en TikTok. Además, 71 % de los gamers estadounidenses en Reddit ha comprado un producto de juegos a partir de lo que vio ahí. Reddit representa solo 5 % de la inversión promedio en social pagado de esas marcas. Son datos de la propia plataforma, así que conviene verificarlos.",
      cifras: [
        { v: "US$8.58", t: "de retorno promedio por dólar invertido en Reddit por anunciantes de gaming, según Reddit y TransUnion" },
        { v: "32 %", t: "de los gamers de EE. UU. en Reddit no está en TikTok" },
        { v: "5 %", t: "de la inversión promedio en social pagado de las marcas de gaming va a Reddit" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Un estudio de la propia plataforma con un tercero muestra audiencia que no se encuentra en TikTok. Pa’ planning, sirve como argumento de duplicación de alcance, siempre con cautela porque la fuente es interesada.",
      hacer: "Si tienes un cliente de videojuegos, tecnología o entretenimiento, pedirle a tu rep de Reddit el estudio completo y comparar esa audiencia con la que ya tienes en TikTok antes de cerrar el plan del primer trimestre.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-pitches-its-1300-gaming-related-communities-to-brands/873673/" }]
    },

    {
      id: "liveramp", dep: "data", peso: "principal",
      etiquetas: ["Identidad", "Publicis", "LiveRamp"],
      titular: "Publicis cierra la compra de LiveRamp y ya hay marcas que dicen que se van",
      corto: "Publicis cierra LiveRamp y algunas marcas se van",
      cuerpo: "Publicis Groupe cerró el lunes su compra de LiveRamp por US$2,200 millones, según Marketing Dive. El cierre llega después de un acuerdo con la FTC el mes pasado que busca preservar la neutralidad de la plataforma. Aun así, Liquid Death confirmó que planea salirse de LiveRamp, y rivales de Publicis como WPP y Omnicom ya habían dicho que reducirían su uso. Publicis promete un «motor de crecimiento con IA» que junta LiveRamp con los datos de Epsilon.",
      cifras: [
        { v: "US$2,200 millones", t: "valor de la compra de LiveRamp por Publicis" },
        { v: "FTC", t: "acuerdo de consentimiento pa’ preservar la neutralidad de LiveRamp" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Que una agencia competidora sea dueña de la plataforma de datos del cliente genera desconfianza, aun con reglas del regulador.",
        "Los rivales de LiveRamp ya compiten por los clientes que quieran moverse."
      ],
      hacer: "Esta semana, revisar en qué cuentas se usa LiveRamp, quién es dueño del contrato y qué datos del cliente pasan por ahí, y tener lista una alternativa por si el cliente lo pregunta.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/as-publicis-closes-liveramp-deal-some-brands-say-theyre-jumping-ship/873561/" }]
    },
    {
      id: "linkedininsights", dep: "content", peso: "principal",
      etiquetas: ["LinkedIn", "Analítica", "Creadores"],
      titular: "LinkedIn estrena tabla de rendimiento de posts y mide guardados, envíos y alcance fuera de tu red",
      corto: "LinkedIn estrena nuevas métricas pa’ creadores",
      cuerpo: "LinkedIn explicó el martes cómo funcionan sus nuevas opciones de analítica pa’ creadores, según Social Media Today. La nueva «Post Performance Table» muestra en una sola lista las impresiones, vistas y tiempo de reproducción de cada publicación. También agrega métricas de seguidores ganados por post, de guardados y envíos, y de vistas dentro y fuera de la red de contactos. LinkedIn dijo que seguirá evaluando cómo las usan los creadores y que desarrolla nuevas opciones de monetización.",
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Ahora se puede comparar posts sin abrirlos uno por uno y saber cuánto alcance viene de gente fuera de la red. Pa’ content B2B, es material pa’ el reporte mensual del cliente.",
      hacer: "Esta semana, sacar la tabla de rendimiento de la página de un cliente, marcar los tres posts con más guardados y envíos, y repetir ese formato en el calendario de noviembre.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/linkedin-shares-information-on-new-creator-insights-options/873675/" }]
    },

    {
      id: "codigoia", dep: "rd", peso: "principal", para: ["data", "content", "planning"],
      etiquetas: ["IA", "Gobierno", "Regulación"], fecha: "4 nov 2026",
      titular: "El Gobierno aprueba el Código de Ética de la IA pa’ los servicios públicos",
      corto: "El Estado dominicano pone reglas a su IA",
      cuerpo: "Santo Domingo.— Mediante el Decreto 787-26, el Gobierno aprobó el Código de Ética de la Inteligencia Artificial para los Servicios Públicos, según Remolacha. Los sistemas de alto impacto tendrán que pasar una evaluación ética y de derechos antes de usarse, y la ciudadanía tendrá derecho a saber cuándo una decisión fue apoyada por IA y a pedir revisión humana. Prohíbe, entre otras cosas, el scoring social generalizado y la identificación biométrica masiva en espacios públicos sin orden judicial. Las instituciones exigirán a sus proveedores trazabilidad, ciberseguridad y control de los datos de los dominicanos, y tienen 180 días pa’ adecuarse.",
      cifras: [
        { v: "Decreto 787-26", t: "norma que aprueba el código" },
        { v: "180 días", t: "plazo de las entidades públicas pa’ adecuarse" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El código aplica a las instituciones públicas, pero también a sus proveedores: se les va a pedir trazabilidad, seguridad y control de datos. Si tu agencia trabaja con el Estado, te van a preguntar cómo usas la IA.",
      hacer: "Esta semana, preparar una página sencilla que diga qué herramientas de IA usa tu agencia, con qué datos y dónde hay revisión humana, pa’ tenerla lista si una entidad pública la pide.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/gobierno-dominicano-regula-el-uso-de-la-ia-en-el-estado/" }]
    },
    {
      id: "lidom", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Lidom", "Béisbol", "Comercio"], fecha: "4 nov 2026",
      titular: "La pelota invernal mueve el comercio alrededor del estadio Quisqueya",
      cuerpo: "Santo Domingo.— Según El Día, la temporada de la Lidom genera un movimiento comercial de más de tres meses en los alrededores del estadio Quisqueya Juan Marichal, con venta de gorras, camisetas, chaquetas, bebidas y comida. Lo más demandado son las prendas del Licey y las Águilas Cibaeñas, aunque los vendedores notan más demanda de artículos del Escogido. Un vendedor con unos 47 años en la zona dice que el mal comienzo de las Águilas ha afectado sus ingresos.",
      tocaTitulo: "¿Y eso qué?",
      toca: "El rendimiento del equipo se siente en la venta de productos del fanático. Pa’ planning y medios, es un recordatorio de que la pelota es temporada de consumo y de alcance hasta enero.",
      fuentes: [{ nombre: "El Día", url: "https://eldia.com.do/torneo-lidom-dinamiza-comercio-en-entorno-del-estadio-quisqueya/" }]
    },
    {
      id: "turismo13", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Turismo", "Economía"], fecha: "3 nov 2026",
      titular: "Los ingresos por turismo crecerían 13 % en 2026, según el Banco Popular",
      cuerpo: "Santo Domingo.— El presidente ejecutivo del Banco Popular, Christopher Paniagua, estimó en Londres que el turismo generaría unos US$12,000 millones en 2026, 13 % más que el año anterior, según El Dinero. Lo dijo en el foro «República Dominicana: inversión, negocios y nuevas oportunidades», parte de la XII Semana Dominicana en Reino Unido. Paniagua indicó que el turismo representa cerca del 9.5 % del PIB y mencionó destinos como Punta Cana, Bávaro, Uvero Alto y Miches.",
      cifras: [
        { v: "US$12,000 millones", t: "ingresos estimados del turismo en 2026" },
        { v: "+13 %", t: "frente al año anterior" },
        { v: "9.5 %", t: "del PIB que representa el turismo" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si el turismo sigue creciendo, los clientes de hoteles, aerolíneas y comercios cerca de los destinos tendrán temporada fuerte. Pa’ planning y creatividad, hay espacio pa’ propuestas de fin de año.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387201/ingresos-por-turismo-crecerian-13-en-republica-dominicana-durante-2026/" }]
    },
    {
      id: "heat", dep: "rd", peso: "secundaria", para: ["content", "medios"],
      etiquetas: ["Música", "Premios Heat"], fecha: "4 nov 2026",
      titular: "Eddy Herrera se siente «niño mimado» de los Premios Heat",
      cuerpo: "Los Heat Latin Music Awards se celebran este año en un escenario de estilo Jalisco, y Eddy Herrera fue homenajeado en un cóctel de bienvenida el lunes por la noche, donde lo recibieron la prensa internacional y la dominicana, según Remolacha. El merenguero dice sentirse como un «niño mimado» de los Premios Heat.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Los premios dan conversación en redes durante la semana. Pa’ content y medios, es un tema musical del patio que puede servir a clientes de entretenimiento.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/eddy-herrera-premios-heat/" }]
    }
  ],

  pizarra: ["redditsearch", "levis", "redditgaming", "liveramp", "linkedininsights", "codigoia"],

  frases: [
    { dep: "medios", texto: "Reddit empieza a vender anuncios dentro de su búsqueda justo cuando le baja el tráfico que llega de los buscadores.", uso: "para conversaciones de inventario nuevo" },
    { dep: "creatividad", texto: "Levi’s necesitó cuatro horas de filmación por cada segundo de su spot en plastilina, y lo vende como prueba de que no usó IA.", uso: "para ideas de craft frente a la IA" },
    { dep: "data", texto: "Publicis cerró LiveRamp y ya hay marcas que dicen que se van: de quién es la plataforma de datos importa.", uso: "para conversaciones de datos con clientes" },
    { dep: "planning", texto: "Reddit dice que solo 5 % de la inversión social de las marcas de gaming llega a su plataforma, aunque el retorno reportado es de US$8.58 por dólar.", uso: "para conversaciones de mezcla de redes (con cautela: son datos de la plataforma)" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Reddit prueba anuncios en su búsqueda" },
      { id: "creatividad", texto: "Levi’s hace su Navidad en plastilina" },
      { id: "planning", texto: "Reddit y los gamers: datos de TransUnion" },
      { id: "data", texto: "Publicis cierra LiveRamp y hay marcas que se van" },
      { id: "content", texto: "LinkedIn estrena métricas pa’ creadores" },
      { id: "rd", texto: "Zoom a RD: Código de Ética de la IA" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "redditsearch", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "redditgaming", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Noviembre es mes de cerrar el plan del primer trimestre. Reddit dice que solo 5 % de la inversión social de las marcas de gaming llega a su plataforma: pídele el estudio y compáralo con tu data."
    },
    data: {
      tipo: "secreto", nota: "liveramp", titulo: "Destapa el expediente",
      texto: "Publicis cerró la compra de LiveRamp por [[US$2,200 millones]] después de un acuerdo de consentimiento con la [[FTC]] pa’ preservar su neutralidad."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "codigoia", titulo: "La pregunta del patio",
      p: "¿Cuánto tiempo tienen las entidades públicas pa’ adecuarse al Código de Ética de la IA?",
      opciones: ["60 días", "180 días", "365 días"], correcta: 1,
      explicacion: "El Decreto 787-26 da 180 días calendario pa’ que las entidades adecuen sus procesos, registren sus sistemas y designen responsables."
    }
  }
};
