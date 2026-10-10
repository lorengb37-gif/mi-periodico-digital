/*
  El Pulso Publicitario · edición N.º 283 · 10 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 283,
  fechaISO: "2026-10-10",
  fecha: "Sábado 10 de octubre 2026",
  fechaCorta: "10 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "La temporada se gana temprano: el que mide bien y se mueve ahora le lleva ventaja al que espera el reporte de diciembre.",
    largo: "Esta semana la agenda vino cargada. Omnicom ya compra escenas dentro de las series como si fueran espacios de TV. Europa discute aflojar las cookies de medición. Circana dice que el consumidor no deja de gastar, pero escoge con lupa. Y aquí en el patio, RAZA arranca su campaña con Vladimir Guerrero mientras el turismo rompe récord en septiembre. El hilo es uno solo: la temporada alta ya empezó y el cliente que llega tarde paga más caro. Escoge hoy un «Lo que toca hacer» de esta edición y ponle fecha antes del viernes.",
    corto: "La temporada ya empezó: escoge un «Lo que toca hacer» de hoy y ponle fecha antes del viernes.",
    porDep: {
      medios: "Antes de comprar un formato nuevo, pide el estudio que lo respalda y pregunta quién lo hizo. Un 5.5x de la casa no es lo mismo que un 5.5x independiente.",
      creatividad: "A veces la idea está en lo que el producto deja atrás, no en el producto. Busca la huella antes que la foto bonita.",
      planning: "Si el consumidor gasta igual pero escoge más, gana la marca que aparece temprano y en social. Mueve el arranque del plan, no solo el presupuesto.",
      data: "Tener banner de cookies no es estar cubierto. Revisa qué píxeles se disparan antes de que la gente diga que sí.",
      content: "Antes de comprar una herramienta de escucha, prueba lo que ya tienes a mano. Un buen prompt te da el primer mapa de la conversación.",
      rd: "Cuando una marca nueva entra con figuras grandes, fíjate en la mezcla: deporte, música e influencers juntos. Esa es la conversación que tu cliente tiene que leer."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Omnicom compra escenas dentro de series de streaming con la IA de Rembrand · X lanza X Lift pa’ armar campañas desde un enlace" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Ford Brasil enseña lo que el lodo le hace a la Bronco Sport · Oura arma una ciudad en miniatura habitada por manos" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Circana: el consumidor gasta con lupa esta Navidad · ICSC proyecta más de US$1.7 billones en ventas de temporada" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "El Consejo de la UE discute quitar el consentimiento pa’ medir audiencia y capar frecuencia · Las demandas por rastreo web van camino a US$1,400 millones" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Los Grok Bots de X ya analizan conversación y menciones de marca · Threads estrena Gems pa’ premiar los mejores posts" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "omnicom", dep: "medios", peso: "principal",
      etiquetas: ["Streaming", "Omnicom", "In-content"],
      titular: "Omnicom ya compra escenas dentro de las series como si fueran espacios de TV",
      corto: "Omnicom compra escenas dentro de las series",
      cuerpo: "Omnicom Media se alió con Rembrand para planificar y comprar placements dentro del contenido de streaming premium. La IA VISTA de Rembrand escanea los programas y encuentra escenas donde se puede integrar una marca, incluso después de grabado el episodio; por ejemplo, un producto de consumo dentro de un reality de cocina. Omnicom cruza su producto de audiencias RealID con la data de los streamers pa’ escoger los shows, y su Content Collective arma la integración. La agencia negocia con varias plataformas que no quiso nombrar, y dice que es la primera vez que esta tecnología, que era del lado del vendedor, entra en el flujo de compra.",
      cifras: [
        { v: "5.5x", t: "más recuerdo del mensaje al combinarlo con video tradicional, según un estudio de la propia Omnicom" },
        { v: "4x", t: "más intención de compra y percepción de marca premium, mismo estudio" },
        { v: "VISTA", t: "la IA de Rembrand que encuentra las escenas pa’ meter la marca" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "El product placement deja de ser un trato a mano y se vuelve un ítem más del plan, al lado del spot. Ojo con las cifras: vienen de un estudio de Omnicom y la misma agencia admite que las tarifas todavía varían por cadena.",
      hacer: "Esta semana, escoger un cliente con presencia en streaming y pedirle a su rep una propuesta de integración in-content con precio y medición aparte del spot, pa’ comparar contra el CPM de video que ya paga.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/omnicom-media-and-rembrand-partner-to-evolve-in-content-ad-placements/" }]
    },
    {
      id: "xlift", dep: "medios", peso: "secundaria",
      etiquetas: ["X", "Self-serve", "IA"],
      titular: "X lanza X Lift: pegas el enlace del negocio y la IA te arma la campaña",
      corto: "X Lift arma campañas desde un enlace",
      cuerpo: "En Advertising Week New York, X presentó X Lift, un sistema que convierte la URL de un negocio en opciones de anuncios con imagen y copy en pocos clics. También puede montar la campaña completa con segmentación; el anunciante solo pone el presupuesto. X dice que lo entrenó con sus propios anuncios y que lo apunta sobre to’ a anunciantes nuevos. No se publicaron precios ni mercados.",
      cifras: [
        { v: "+50%", t: "anunciantes self-serve activos en el tercer trimestre de 2026 frente al de 2025, según X" }
      ],
      toca: "Es la misma jugada de Meta y Google: la plataforma hace la creatividad y la segmentación. Pa’ clientes chiquitos puede ser una puerta de entrada, pero el control queda del lado de X.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/x-launches-ai-powered-ad-creation-option/832276/" }]
    },

    {
      id: "ford", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Ford", "Exterior"],
      titular: "Ford Brasil deja que el lodo haga la publicidad de la Bronco Sport",
      corto: "Ford deja que el lodo venda la Bronco",
      cuerpo: "Wieden+Kennedy São Paulo creó «Redesigned by the Trail» pa’ Ford en Brasil. En vez de enseñar la aventura, la campaña enseña lo que la aventura deja en el carro. La primera pieza es una secuencia de vallas en la ruta al aeropuerto internacional de São Paulo/Guarulhos, donde la Bronco Sport sale cada vez más enlodada valla tras valla. La línea de apoyo es «No todo diseño sale de la fábrica», y en 2027 la idea llega a la Ranger en las grandes ferias agrícolas del país.",
      cifras: [
        { v: "W+K SP", t: "la agencia detrás de la campaña" },
        { v: "2", t: "modelos: Bronco Sport y Ranger" },
        { v: "2027", t: "año en que la idea llega a las ferias agrícolas con la Ranger" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Es un recordatorio de que la valla también cuenta historias si se piensa en secuencia y en ruta. La idea sale de la huella que deja el producto, no del producto limpiecito en estudio.",
      hacer: "Esta semana, en la reunión creativa, escoger un cliente con exterior en una ruta fija (autopista, aeropuerto, malecón) y bocetar una secuencia de tres vallas que cuente algo en orden.",
      fuentes: [{ nombre: "The Drum", url: "https://www.thedrum.com/news/ford-skips-the-car-wash-and-lets-mud-do-the-advertising" }]
    },
    {
      id: "oura", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Oura", "Craft"],
      titular: "Oura monta una ciudad en miniatura donde to’ el mundo es una mano",
      corto: "Oura y su ciudad de manos",
      cuerpo: "«Wear Your Best Life», de la agencia Nice & Frank con dirección de Sam Walker, es un spot de unos 30 segundos en una ciudad habitada solo por manos con anillos Oura: taxi, metro, gimnasio, piscina y hasta una novela con elenco de manos. La coreógrafa Lilach Chen dirigió a 14 bailarines de manos de 14 países. El reto era claro: el anillo es chiquito, así que construyeron el mundo alrededor de la mano.",
      cifras: [
        { v: "35", t: "maquetistas en Praga" },
        { v: "3 semanas", t: "construyendo la ciudad a escala 1:10" },
        { v: "14", t: "bailarines de manos de 14 países" }
      ],
      toca: "Cuando el producto es pequeño, la limitación se convierte en la idea. Es craft hecho a mano en tiempos de IA, y se nota.",
      fuentes: [{ nombre: "The Drum", url: "https://www.thedrum.com/news/ad-of-the-day-oura-lets-its-fingers-do-the-living-in-handmade-miniature-city" }]
    },

    {
      id: "circana", dep: "planning", peso: "principal",
      etiquetas: ["Navidad", "Consumidor", "Circana"],
      titular: "El consumidor no deja de gastar esta Navidad, pero escoge con lupa",
      corto: "Navidad: se gasta, pero con lupa",
      cuerpo: "El estudio de intención de compra navideña de Circana, con 3,534 consumidores de EE. UU., estima un gasto promedio de US$779, frente a US$796 el año pasado. El 29 % piensa gastar más, y más de la mitad de ellos lo atribuye a los precios. El 74 % va a cazar ofertas, comprar marcas propias o recortar gastos. Más de la mitad empieza antes de Thanksgiving y las redes pesan: el 57 % es propenso a comprar algo después de verlo en social. «El consumidor no está abandonando el gasto navideño; está siendo más intencional sobre dónde y cómo gasta», dijo Kiara Barrett, de Circana.",
      cifras: [
        { v: "US$779", t: "gasto navideño promedio esperado, frente a US$796 en 2025" },
        { v: "57%", t: "compraría algo después de verlo en redes; 82 % en la Gen Z" },
        { v: "74%", t: "va a cazar ofertas, comprar marcas propias o recortar" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a planning?",
      toca: "Si el bolsillo está apretado pero el gasto no desaparece, la pelea es por estar en la lista temprano y por dar razones de valor. El calendario de la campaña pesa tanto como el presupuesto.",
      hacer: "Esta semana, revisar el plan navideño de un cliente de retail y adelantar a octubre una fase de consideración en social, con un mensaje de valor (precio, regalo útil o experiencia) en vez de puro descuento.",
      fuentes: [{ nombre: "Circana vía GlobeNewswire", url: "https://www.globenewswire.com/news-release/2026/10/08/3377668/0/en/circana-s-2026-holiday-study-finds-consumers-spending-selectively-not-stepping-away.html" }]
    },
    {
      id: "icsc", dep: "planning", peso: "secundaria",
      etiquetas: ["Navidad", "Retail", "IA"],
      titular: "ICSC: la Navidad pasa de US$1.7 billones y la IA ya entra en la compra",
      corto: "ICSC: Navidad de US$1.7 billones",
      cuerpo: "El estudio de intenciones navideñas de ICSC proyecta que las ventas minoristas de la temporada crezcan entre 4.3 % y 4.9 %, por encima de US$1.7 billones. El 88 % de los adultos de EE. UU. piensa comprar regalos, pero el 49 % está preocupado por poder pagarlos. El 93 % irá a una tienda física, ya sea a comprar o a recoger un pedido en línea. Y el 61 % piensa usar herramientas de IA pa’ comprar, frente a 47 % en 2025, sobre to’ pa’ comparar precios.",
      cifras: [
        { v: "61%", t: "usará herramientas de IA pa’ comprar, frente a 47 % en 2025" },
        { v: "93%", t: "visitará una tienda física" },
        { v: "49%", t: "está preocupado por poder pagar los regalos" }
      ],
      toca: "La tienda física sigue siendo el cierre y la IA se vuelve el comparador de precios. Si tu marca no aparece bien en esas respuestas, pierde antes de llegar al anaquel.",
      fuentes: [{ nombre: "ICSC vía Business Wire", url: "https://www.financialcontent.com/article/bizwire-2026-10-6-icscs-2026-holiday-intentions-survey-finds-consumers-prioritize-holiday-traditions-over-financial-pressures" }]
    },

    {
      id: "omnibus", dep: "data", peso: "principal",
      etiquetas: ["Cookies", "Unión Europea", "Consentimiento"],
      titular: "Europa discute medir audiencia y capar frecuencia sin pedir permiso",
      corto: "Europa discute aflojar las cookies de medición",
      cuerpo: "El borrador del Consejo de la UE sobre el Digital Omnibus, con fecha del 2 de octubre, cambiaría las reglas de cookies. Seis usos quedarían sin necesidad de consentimiento, entre ellos la medición de audiencia propia, la medición de medios y la medición de publicidad contextual, que incluye las cookies que limitan la frecuencia. Además, tras un «no», el sitio tendría que esperar al menos cuatro meses en vez de seis antes de volver a preguntar. Los embajadores de la UE deciden el 11 de octubre si adoptan la posición; después falta negociar con el Parlamento, que todavía no fija la suya, así que el texto puede cambiar.",
      cifras: [
        { v: "4 meses", t: "de espera antes de volver a pedir consentimiento, en vez de 6" },
        { v: "6", t: "usos que quedarían exentos de consentimiento" },
        { v: "11 oct", t: "fecha en que los embajadores de la UE deciden si adoptan el mandato" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si pasa, medir audiencia y capar frecuencia sería más fácil para marcas con operación en Europa. Pero es una posición de negociación, no una ley, y puede cambiar en el camino.",
      hacer: "Esta semana, hacer una lista de los clientes con tráfico o campañas en Europa y anotar qué cookies usan solo pa’ medir o capar frecuencia, pa’ saber qué cambia si la norma avanza.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/eu-council-draft-cuts-cookie-re-prompt-wait-from-6-months-to-4/" }]
    },
    {
      id: "privado", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Demandas", "Rastreo"],
      titular: "Las demandas por compartir datos sin permiso van camino a US$1,400 millones",
      corto: "Demandas por rastreo: US$1,400 millones",
      cuerpo: "Según un reporte de Privado AI citado por PYMNTS, las empresas de EE. UU. van camino a pagar más de US$1,400 millones este año en acuerdos por sitios y apps que compartieron datos personales sin permiso, 36 % más que el año pasado. El análisis cubre 116 acuerdos públicos; la Ley Federal de Escuchas aparece en el 53 % y la ley de privacidad de California (CIPA), en el 43 %. «Los reclamos de privacidad están subiendo rápido», dijo Vaibhav Antil, CEO de Privado, y añadió que la mayoría de las empresas demandadas sí tenía una plataforma de consentimiento.",
      cifras: [
        { v: "US$1,400M", t: "en acuerdos proyectados para 2026" },
        { v: "+36%", t: "frente al año pasado" },
        { v: "116", t: "acuerdos públicos analizados" }
      ],
      toca: "Tener el banner de cookies puesto no basta: lo que cuenta es qué datos salen del sitio y cuándo.",
      fuentes: [{ nombre: "PYMNTS", url: "https://pymnts.com/legal/2026/us-companies-on-pace-to-pay-1-4-billion-in-privacy-settlements" }]
    },

    {
      id: "grok", dep: "content", peso: "principal",
      etiquetas: ["X", "Grok", "Escucha social"],
      titular: "Los Grok Bots de X ya leen la conversación y te dicen qué se dice de tu marca",
      corto: "Grok Bots de X: escucha social con IA",
      cuerpo: "X amplió la búsqueda de sus Grok Bots: ahora pueden analizar posts de la plataforma pa’ dar insights de tendencias, monitorear menciones de marca y detectar oportunidades, to’ con preguntas conversacionales. Los ejemplos de X: darle seguimiento al feedback de un producto, seguir una noticia de última hora o recibir un resumen semanal de tu industria. Hay un detalle sin aclarar: X dice que está disponible para todos, pero los Grok Bots de entrada cuestan unos US$20 al mes, así que conviene confirmar el acceso.",
      cifras: [
        { v: "~US$20", t: "al mes, el Grok Bot básico" },
        { v: "3", t: "usos que propone X: feedback, noticias y resumen semanal" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de content?",
      toca: "Es una herramienta de escucha social con IA metida en la misma plataforma. Puede darte un primer mapa rápido de la conversación, aunque Social Media Today advierte que la precisión depende de lo que le pidas.",
      hacer: "Esta semana, probar un Grok Bot con una marca de un cliente que tenga conversación en X y comparar su resumen con el reporte de la herramienta de escucha que ya usan.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/xs-grok-bots-get-analytic-search-capabilities/832565/" }]
    },
    {
      id: "gems", dep: "content", peso: "secundaria",
      etiquetas: ["Threads", "Creators", "Algoritmo"],
      titular: "Threads estrena Gems pa’ premiar los posts que de verdad arman conversación",
      corto: "Threads premia posts con Gems",
      cuerpo: "Threads lanzó Gems, un reconocimiento que su algoritmo da a posts y respuestas que generan conversación de valor. Mira tres cosas: una perspectiva fresca, discusión de ida y vuelta y originalidad (nada reciclado ni cruzado desde otra app). Los posts premiados llevan un ícono especial y el creador recibe aviso. Por ahora solo aplica a posts públicos de usuarios en EE. UU.",
      cifras: [
        { v: "3", t: "criterios: perspectiva, discusión y originalidad" },
        { v: "EE. UU.", t: "único mercado elegible por ahora" }
      ],
      toca: "Es una pista de lo que Meta quiere premiar en Threads: conversación original, no contenido recalentado de otras redes.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/threads-recognizes-top-posts-with-in-app-gems-program/832577/" }]
    },

    {
      id: "raza", dep: "rd", peso: "principal", para: ["creatividad", "medios", "content"],
      etiquetas: ["Campaña", "Apuestas deportivas", "Patrocinios"],
      titular: "RAZA entra al juego con «Dominicana Gana» y Vladimir Guerrero de cabeza",
      corto: "RAZA lanza «Dominicana Gana» con Vladimir Guerrero",
      cuerpo: "RAZA, una empresa de apuestas deportivas y entretenimiento con capital 100 % dominicano, se presentó el 7 de octubre en el Crowne Plaza de Santo Domingo y anunció su primera gran campaña, «Dominicana Gana», que sale al público el lunes 12 de octubre, Día de la Raza. La encabezan Vladimir Guerrero, miembro del Salón de la Fama, y el artista urbano Dalvin La Melodía, junto a la periodista Natacha Pérez, los analistas Juanfrank Kranwinkel y Milo Deportes, y las figuras digitales Pamela Infante y Orquis. La estrategia creativa es de la agencia The Brand, y la empresa proyecta invertir más de US$10 millones en patrocinios de béisbol, baloncesto y voleibol.",
      cifras: [
        { v: "US$10M+", t: "proyectados en patrocinios deportivos" },
        { v: "12 oct", t: "salida de la campaña al público" },
        { v: "100%", t: "capital dominicano" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Llega un anunciante nuevo y con presupuesto a la categoría de apuestas, y su mezcla de deporte, música e influencers marca cómo se va a pelear esa conversación en el patio.",
      hacer: "Esta semana, seguir la salida de la campaña desde el 12 de octubre y anotar en qué medios y con qué figuras aparece, pa’ tener el mapa listo si un cliente de la categoría o de deportes pregunta.",
      fuentes: [{ nombre: "Acento", url: "https://acento.com.do/sociales/raza-presenta-su-propuesta-de-apuestas-deportivas-con-dominicana-gana-9767235.html" }]
    },
    {
      id: "turismo", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Mitur", "Datos"],
      titular: "Septiembre rompe récord: RD recibe 684,831 visitantes, 16.4 % más que en 2025",
      corto: "Récord de turistas en septiembre",
      cuerpo: "El Ministerio de Turismo informó que en septiembre llegaron 684,831 visitantes, 16.4 % más que en septiembre de 2025: 533,735 por avión y 151,096 cruceristas, estos últimos con un alza de 54.7 %. De enero a septiembre el país suma 9,241,246 visitantes, 7.5 % más que el año pasado. Estados Unidos aportó el 39 % de los visitantes de septiembre, seguido de Canadá (11 %) y Colombia (9 %). «Seguimos haciendo historia», dijo el ministro David Collado, que proyecta superar los 12.4 millones de visitantes al cierre del año.",
      cifras: [
        { v: "684,831", t: "visitantes en septiembre, 16.4 % más que en 2025" },
        { v: "9.2M", t: "visitantes de enero a septiembre de 2026" },
        { v: "+54.7%", t: "cruceristas en septiembre frente a 2025" }
      ],
      toca: "Pa’ marcas de turismo, retail y consumo, el visitante es audiencia: el crucerista que baja por horas y el turista que se queda una semana piden mensajes y medios distintos.",
      fuentes: [{ nombre: "Ministerio de Turismo", url: "https://noticias.mitur.gob.do/ministro-noticias/rd-recibe-mas-92-millones-de-visitantes-hasta-septiembre/" }]
    }
  ],

  pizarra: ["omnicom", "ford", "circana", "omnibus", "grok", "raza"],

  frases: [
    { dep: "medios", texto: "Omnicom ya compra escenas dentro de las series: el product placement se volvió un renglón del plan de medios.", uso: "para conversaciones de streaming y nuevos formatos" },
    { dep: "creatividad", texto: "Ford Brasil no lavó la Bronco: dejó que el lodo hiciera la publicidad, valla tras valla.", uso: "para conversaciones de exterior e ideas simples" },
    { dep: "planning", texto: "Esta Navidad la gente gasta casi lo mismo, pero escoge con lupa: el 57 % compra después de ver algo en redes.", uso: "para conversaciones de temporada y forecast" },
    { dep: "data", texto: "Las demandas por compartir datos sin permiso van por US$1,400 millones este año, y casi todos los demandados tenían banner de cookies.", uso: "para conversaciones de privacidad y cumplimiento" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Omnicom compra escenas en streaming" },
      { id: "creatividad", texto: "La Bronco enlodada de Ford" },
      { id: "planning", texto: "Navidad con lupa, según Circana" },
      { id: "data", texto: "Europa y las cookies de medición" },
      { id: "content", texto: "Los Grok Bots de X" },
      { id: "rd", texto: "Zoom a RD: «Dominicana Gana»" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "omnicom", titulo: "Despega la oferta del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "circana", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Más de la mitad de los compradores arranca antes de Thanksgiving y el 57 % compra después de verlo en redes (82 % en la Gen Z). La Navidad se juega desde ya, y en social."
    },
    data: {
      tipo: "secreto", nota: "privado", titulo: "Destapa el expediente",
      texto: "Las empresas de EE. UU. van camino a pagar más de [[US$1,400 millones]] en acuerdos por compartir datos sin permiso, [[36 % más]] que el año pasado."
    },
    content: {
      tipo: "prompt", nota: "grok", titulo: "Arma tu pregunta pa’l Grok Bot",
      intro: "Con el Grok Bot de X, ayúdame con lo siguiente:",
      opciones: [
        "Dame el pulso de lo que se dice de [marca] en X esta semana: lo bueno, lo malo y lo que se repite",
        "Sigue esta noticia de última hora y dime qué ángulos y voces están saliendo",
        "Mándame cada lunes un resumen de lo que se movió en mi industria"
      ],
      cierre: "Respóndeme en viñetas cortas y enlaza los posts que lo sostienen."
    },
    rd: {
      tipo: "pregunta", nota: "raza", titulo: "La pregunta del patio",
      p: "¿Quién encabeza «Dominicana Gana», la primera campaña de RAZA?",
      opciones: ["David Ortiz", "Vladimir Guerrero", "Juan Soto"],
      correcta: 1,
      explicacion: "Vladimir Guerrero, miembro del Salón de la Fama, encabeza la campaña junto al artista urbano Dalvin La Melodía. Sale al público el 12 de octubre."
    }
  }
};
