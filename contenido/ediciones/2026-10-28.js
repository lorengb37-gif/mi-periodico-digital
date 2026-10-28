/*
  El Pulso Publicitario · edición N.º 301 · 28 de octubre de 2026
*/
window.EDICION = {
  numero: 301,
  fechaISO: "2026-10-28",
  fecha: "Miércoles 28 de octubre 2026",
  fechaCorta: "28 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Las cuentas grandes se mueven rápido y la gente gasta distinto: el que se entera primero llega con la propuesta antes que el resto.",
    largo: "Hoy se juntaron varias señales: Omnicom se lleva la cuenta de Coca-Cola en Norteamérica, Deloitte dice que la mitad de los compradores quiere regalar experiencias, Apple sigue apretando a los identificadores y YouTube le mete fuerza a los microdramas. Aquí en el patio, el mercado de seguros crece en vida y salud, y se vienen los Premios Heat y el Bachatazo. El consejo: antes del viernes, escoge un «Lo que toca hacer» de esta edición, ponle responsable y llévaselo al cliente con fecha.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, llévalo al cliente esta semana y ponle fecha. Así de fácil.",
    porDep: {
      medios: "Cuando una cuenta cambia de manos, los clientes de la competencia se ponen a mirar. Ten listo el argumento de por qué tu plan es el que les conviene.",
      creatividad: "Un famoso con humor sirve si hace más fácil lo que el cliente quiere decir. Antes de pensar en el nombre, define el mensaje.",
      planning: "Si la gente quiere regalar experiencias, el plan de fin de año no puede ser solo de productos. Revisa qué ofrece tu cliente que se pueda regalar sin envolver.",
      data: "Si tu medición depende de un identificador que Apple puede cortar, ten un plan B con datos propios antes de diciembre.",
      content: "Los episodios cortos y en serie se están pagando solos en YouTube. Mira qué historia de tu cliente cabe en capítulos de un minuto.",
      rd: "Cuando un sector crece, como vida y salud en seguros, las marcas buscan cómo explicarlo fácil. Llega con la propuesta antes que la competencia."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Omnicom se lleva la media de Coca-Cola en EE. UU. y Canadá · LinkedIn lleva sus audiencias B2B a CTV en DV360" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Sephora pone a Seth Rogen a buscar regalos en su campaña navideña · LA28 estrena «Stars Align»" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Deloitte: la mitad planea regalar experiencias esta Navidad · Meta crece 26 % en ingresos" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Safari golpea a los proveedores de identidad y la industria mira el lado del servidor · Meta, con multa de US$25,000 millones en Nuevo México" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Los microdramas pasan de 6,500 millones de vistas en YouTube · Meta muestra el rendimiento de cada pieza del anuncio" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Seguros: tres compañías tienen 55 % del mercado · Premios Heat · Bachatazo en Jarabacoa · Factura electrónica · Pitbull en Billboard Latin Music Week" }
  },

  notas: [
    {
      id: "omnicom", dep: "medios", peso: "principal",
      etiquetas: ["Agencias", "Omnicom", "Coca-Cola"],
      titular: "Omnicom se lleva la media de Coca-Cola en EE. UU. y Canadá, y WPP se queda con la global",
      corto: "Omnicom gana la media de Coca-Cola en Norteamérica",
      cuerpo: "Omnicom ganó la cuenta de media de Coca-Cola en Estados Unidos y Canadá, según dos fuentes de Digiday. WPP mantiene la cuenta global, menos Japón y Corea del Sur, que siguen con Dentsu. La cuenta se estima entre US$700 y US$800 millones, y el trabajo arranca el 1 de diciembre. Llega siete semanas después de que PepsiCo sacara su cuenta de Omnicom pa’ pasarla a Publicis. Digiday recuerda que el CMO de Coca-Cola dijo el año pasado que el 70 % de su inversión ya va a anuncios en redes y contenido de creadores, frente a 75 % en TV seis años antes.",
      cifras: [
        { v: "US$700–800 millones", t: "valor estimado de la cuenta de EE. UU. y Canadá" },
        { v: "1 dic", t: "fecha en que arranca el trabajo de Omnicom" },
        { v: "70 %", t: "de la inversión de Coca-Cola va a redes y creadores, según su CMO" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Cuando una cuenta grande cambia de agencia, las demás marcas de la categoría miran sus propios planes. Y el dato de Coca-Cola confirma que la plata de TV se sigue mudando a redes y creadores.",
      hacer: "Revisar con tus clientes de consumo masivo cuánto de su plan sigue en TV y cuánto en redes y creadores, y llevarles una propuesta de ajuste antes de cerrar el plan 2027.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/omnicom-lands-coca-colas-north-american-media-business/" }]
    },
    {
      id: "linkedinctv", dep: "medios", peso: "secundaria",
      etiquetas: ["CTV", "LinkedIn", "B2B"],
      titular: "Las audiencias B2B de LinkedIn ya se pueden comprar en CTV vía DV360",
      corto: "LinkedIn lleva sus audiencias B2B a CTV en DV360",
      cuerpo: "LinkedIn anunció el 22 de octubre que sus audiencias B2B ya están disponibles pa’ comprar publicidad en CTV a través de Google DV360. Los anunciantes pueden segmentar por cargo, industria, tamaño de empresa y datos de la compañía. VistaPrint probó roles de administración, mercadeo, operaciones, medios y comunicaciones pa’ llegar a dueños de pequeños negocios. LinkedIn dice que sus anuncios en CTV logran un impacto en recordación 2.6 veces mayor pa’ audiencias B2B que otros proveedores; es una cifra de la propia plataforma.",
      cifras: [
        { v: "22 oct", t: "fecha en que las audiencias quedaron disponibles en DV360" },
        { v: "2.6x", t: "mayor recordación B2B en CTV, según LinkedIn" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si un cliente B2B ya compra CTV en DV360, ahora puede apuntar por cargo o industria sin cambiar de plataforma. La cifra de 2.6x es de LinkedIn, así que conviene probarla con tu propio caso.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/tv/linkedins-b2b-audiences-are-now-available-on-ctv-via-google-dv360/" }]
    },

    {
      id: "sephora", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Sephora", "Navidad"],
      titular: "Sephora pone a Seth Rogen a buscar regalos en su campaña navideña",
      corto: "Sephora pone a Seth Rogen a buscar regalos",
      cuerpo: "Sephora lanzó en EE. UU. y Canadá su campaña de fin de año «We All Sephora», con el actor y comediante Seth Rogen. En el anuncio, él recorre las tiendas buscando regalos con ayuda de las asesoras de belleza de la marca. La agencia Gut New York hizo la pieza principal, dirigida por Jason Woliner. Según Adweek, la idea es que regalar belleza sea menos intimidante y más divertido.",
      cifras: [
        { v: "Gut New York", t: "agencia del anuncio principal" },
        { v: "EE. UU. y Canadá", t: "mercados del lanzamiento" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Sephora usa el humor pa’ quitarle la presión a comprar un regalo. Es una manera de mostrar el servicio de la tienda sin ponerse técnico.",
      hacer: "Escoger un cliente con temporada de regalos y escribir un guion de 30 segundos donde alguien famoso o cercano se equivoca de regalo y el servicio de la marca lo salva.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/seth-rogen-checks-off-his-gift-list-in-sephoras-holiday-campaign/" }]
    },
    {
      id: "la28", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Olimpiadas", "LA28", "Slogan"],
      titular: "LA28 estrena «Stars Align» como lema de su marketing olímpico",
      corto: "LA28 estrena «Stars Align»",
      cuerpo: "LA28, el comité organizador de los Juegos Olímpicos y Paralímpicos de 2028 en Los Ángeles, reveló su lema, «Stars Align». Lo presentó con una película de 60 segundos con la canción «Can’t Stop», de los Red Hot Chili Peppers. Su director de mercadeo, Alex Merchán, explicó que las estrellas simbolizan esperanza, inspiración y optimismo.",
      cifras: [{ v: "60 segundos", t: "duración de la película del lanzamiento" }],
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/convergent-tv/la28-reveals-star-powered-slogan-set-to-shine-across-olympics-marketing/" }]
    },

    {
      id: "deloitte", dep: "planning", peso: "principal",
      etiquetas: ["Consumidor", "Navidad", "Deloitte"],
      titular: "Deloitte: la mitad de los compradores planea regalar experiencias esta Navidad",
      corto: "Deloitte: 50 % regalará experiencias",
      cuerpo: "Deloitte encuestó a 4,000 consumidores de EE. UU. en agosto y septiembre. El 50 % dijo que piensa comprar regalos de experiencias, como comidas o tarjetas de restaurante, entradas a eventos y suscripciones. Eran 47 % el año pasado y 39 % hace dos años. El aumento viene sobre todo de hogares de ingreso medio. Es un dato de EE. UU., no de RD.",
      cifras: [
        { v: "50 %", t: "planea regalar experiencias esta Navidad" },
        { v: "47 %", t: "lo planeaba el año pasado" },
        { v: "39 %", t: "lo planeaba hace dos años" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "El regalo ya no es solo un producto en una caja. Pa’ restaurantes, hoteles, entretenimiento y servicios, la temporada de diciembre puede venderse como una experiencia. Antes de usar el dato en RD, busca uno local.",
      hacer: "Escoger un cliente de servicios o entretenimiento y armar una propuesta de regalo de experiencia pa’ diciembre, con precio, fecha límite de compra y un dato local pa’ respaldarla.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/commerce/half-of-shoppers-plan-to-buy-gifts-like-meals-or-event-tickets-deloitte-finds/" }]
    },
    {
      id: "metaq3", dep: "planning", peso: "secundaria",
      etiquetas: ["Plataformas", "Meta", "Resultados"],
      titular: "Meta crece 26 % en ingresos, con IA que mueve las conversiones",
      corto: "Meta crece 26 % en ingresos",
      cuerpo: "Los ingresos de la familia de apps de Meta subieron 26 % frente al año pasado, hasta US$64,200 millones, de los cuales US$63,100 millones vinieron de anuncios. Las impresiones de anuncios subieron 10 %. La directora financiera, Susan Li, dijo que el modelo GEM aumentó 9.6 % las conversiones dentro de las apps y 1.7 % las de campañas fuera de ellas. Meta dice que más de 10 millones de personas en EE. UU. y Canadá ya configuraron su asistente Muse.",
      cifras: [
        { v: "+26 %", t: "ingresos de la familia de apps frente al año pasado" },
        { v: "US$64,200 millones", t: "ingresos totales; US$63,100 millones de anuncios" },
        { v: "+9.6 %", t: "conversiones dentro de las apps con el modelo GEM" }
      ],
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/platforms/meta-grows-revenue-26-despite-massive-muse-operating-costs/" }]
    },

    {
      id: "safari", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Apple", "Identidad"],
      titular: "Safari pega a los proveedores de identidad y la industria mira el lado del servidor",
      corto: "Safari golpea la identidad y todos miran el servidor",
      cuerpo: "Digiday vio en pruebas durante la semana del 19 de octubre que las restricciones de Safari afectaron a Audigent, ID5, LiveRamp, Permutive y The Trade Desk. Por ahora el impacto es limitado: Permutive dice que solo unos pocos clientes fueron afectados y pasaron a una solución temporal. ID5 trabaja en mover sus funciones al servidor, lo que según su CEO resiste mejor el bloqueo. IAB Tech Lab propone un «Trusted Server Framework», que ha recibido críticas por su complejidad. Queda sin resolver si esas rutas cumplen con lo que Apple exige en privacidad.",
      cifras: [
        { v: "5", t: "proveedores afectados en las pruebas: Audigent, ID5, LiveRamp, Permutive y The Trade Desk" },
        { v: "Semana del 19 oct", t: "cuando Digiday vio los efectos en pruebas" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "El camino del servidor da más control, pero a los medios pequeños les va a costar más armarlo.",
        "Nadie sabe todavía si Apple va a aceptar esos métodos, así que conviene no apostar todo a uno solo."
      ],
      hacer: "Pedirle a cada proveedor de identidad que use un cliente cuál es su plan si Safari lo bloquea, y tener lista una medición alterna con datos propios.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/apples-safari-crackdown-pushes-ad-tech-toward-server-side-solutions-but-doubts-remain/" }]
    },
    {
      id: "metafine", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Meta", "Multa"],
      titular: "Un juez de Nuevo México le pone a Meta una multa de US$25,000 millones",
      corto: "Meta recibe multa de US$25,000 millones",
      cuerpo: "Un juez de Nuevo México ordenó a Meta pagar US$25,000 millones después de que un jurado la encontrara culpable de violar la privacidad y exponer a usuarios del estado a contenido dañino. El juez dijo que la ley estatal permitía una multa mayor, de US$219,000 millones, pero fijó la de US$25,000 millones. El caso viene del escándalo de Cambridge Analytica de 2018. Meta dice que va a apelar.",
      cifras: [
        { v: "US$25,000 millones", t: "multa ordenada contra Meta" },
        { v: "US$219,000 millones", t: "lo que la ley estatal permitía, según el juez" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-hit-with-25b-fine-over-privacy-breaches/833798/" }]
    },

    {
      id: "microdramas", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "Microdramas", "Creadores"],
      titular: "Los microdramas pasan de 6,500 millones de vistas en YouTube",
      corto: "Los microdramas pasan de 6,500 millones de vistas",
      cuerpo: "YouTube dijo que los microdramas, historias en episodios muy cortos, superaron los 6,500 millones de vistas en la primera mitad de 2026, más de 50 % sobre el año pasado. Piensa renovar en las próximas semanas la experiencia móvil de los episodios solo para miembros, pa’ que alguien se una a un canal sin salir del video. Según YouTube, 40 % de las vistas llegaron más de 30 días después de subir el video. Sus consejos: un gancho emocional en los primeros 15 segundos, formato vertical y publicar con frecuencia.",
      cifras: [
        { v: "6,500 millones", t: "de vistas de microdramas en el primer semestre de 2026" },
        { v: "+50 %", t: "frente al año anterior" },
        { v: "40 %", t: "de las vistas llegaron más de 30 días después de la publicación" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Los episodios cortos en serie siguen ganando audiencia, y un video viejo sigue sumando vistas por semanas. Es una forma de que la historia de una marca rinda más allá del día de estreno.",
      hacer: "Escoger un cliente y escribir una mini serie de cinco episodios de un minuto, con gancho en los primeros 15 segundos, pa’ probarla en Shorts este mes.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-adds-microdrama-subscriptions/872982/" }]
    },
    {
      id: "metabreakdown", dep: "content", peso: "secundaria",
      etiquetas: ["Meta", "Anuncios", "Creativos"],
      titular: "Meta ahora muestra cómo rinde cada imagen, video y texto de tu anuncio",
      corto: "Meta muestra el rendimiento de cada pieza",
      cuerpo: "Ads Manager de Meta ahora tiene una función «Breakdown» que muestra cómo rinde cada imagen, video y variación de texto dentro de un anuncio. Los anuncios en formato colección o carrusel no aparecen en el desglose, ni tampoco elementos de conversión personalizados como «Donate» y «Subscribe».",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-adds-individual-performance-data-for-ad-creative/872981/" }]
    },

    {
      id: "seguros", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Seguros", "Consumo", "Mercado"], fecha: "27 oct 2026",
      titular: "Tres aseguradoras tienen más de la mitad del mercado de seguros, y vida y salud crecen más rápido",
      corto: "Tres aseguradoras tienen 55 % del mercado",
      cuerpo: "Santo Domingo.— Según datos de la Superintendencia de Seguros a junio de 2026, las primas netas del mercado llegaron a RD$80,534 millones, 6.46 % más que el año pasado. Seguros Universal, Seguros Reservas y Humano Seguros juntas concentran 55.1 %. Siguen Mapfre BHD con 10.3 % y La Colonial con 8.7 %. Los seguros de vida crecieron 26.9 % y pasaron de 15.4 % a 18 % del total. En seguros generales, salud subió 17.5 % y vehículos de motor, 5.5 %.",
      cifras: [
        { v: "RD$80,534 millones", t: "primas netas acumuladas a junio de 2026" },
        { v: "55.1 %", t: "del mercado, en manos de Universal, Reservas y Humano" },
        { v: "+26.9 %", t: "crecimiento de los seguros de vida" },
        { v: "+17.5 %", t: "crecimiento de los seguros de salud" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Con pocas compañías dominando, las más chicas pelean por diferenciarse. Y vida y salud crecen más que los demás ramos, así que ahí está la conversación con el consumidor.",
      hacer: "Llevarles esta semana a los clientes de seguros una propuesta enfocada en vida o salud, que explique en lenguaje fácil qué cubre y por qué conviene tenerlo antes de fin de año.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386298/tres-aseguradoras-concentran-mas-de-la-mitad-del-mercado-de-seguros-en-rd/" }]
    },
    {
      id: "heat", dep: "rd", peso: "secundaria", para: ["content", "medios", "creatividad"],
      etiquetas: ["Premios", "Música", "Agenda"], fecha: "5 nov 2026",
      titular: "Caroline Aquino conducirá los Premios Heat 2026",
      cuerpo: "La comunicadora dominicana Caroline Aquino volverá a ser la conductora principal de los Premios Heat, que se celebrarán el 5 de noviembre en Jalisco, México, según Remolacha, que cita a Listín Diario.",
      cifras: [{ v: "5 nov", t: "fecha de los Premios Heat 2026" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ content es una fecha pa’ montar conversación en redes y pa’ medios es una noche de audiencia de música latina con una cara dominicana al frente.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/caroline-aquino-conducira-premios-heat-2026/" }]
    },
    {
      id: "bachatazo", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Agenda", "Bachata"], fecha: "8 nov 2026",
      titular: "Ramón Orlando se une al Súper Ultra Mega Bachatazo 2026 en Jarabacoa",
      cuerpo: "Ramón Orlando Valoy será invitado especial del Súper Ultra Mega Bachatazo 2026, el domingo 8 de noviembre en La Confluencia, Jarabacoa. Se presentará con piano y canto, y celebra 50 años de carrera musical, según Remolacha.",
      cifras: [{ v: "50 años", t: "de carrera musical de Ramón Orlando" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Un festival de bachata con un artista que cumple 50 años de carrera es material pa’ contenido y activaciones de marcas que quieran estar cerca de la música dominicana.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/ramon-orlando-se-une-al-super-ultra-mega-bachatazo-2026/" }]
    },
    {
      id: "ecf", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Impuestos", "DGII", "Negocios"], fecha: "27 oct 2026",
      titular: "Factura electrónica: el 15 de noviembre es la fecha límite",
      cuerpo: "Remolacha recuerda que el 15 de noviembre es la fecha límite pa’ que los contribuyentes dominicanos implementen la factura electrónica. El medio advierte que las empresas que no se adapten a tiempo podrían enfrentar el cierre de sus negocios y que los comprobantes con dudas sobre su realidad económica serían remitidos a la Fiscalía.",
      cifras: [{ v: "15 nov", t: "fecha límite pa’ implementar la factura electrónica" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Los clientes pequeños están corriendo con este tema y pueden retrasar pagos o cambiar prioridades. Y tu propia agencia también tiene que tener su facturación al día.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/facturacion-electronica-urgente/" }]
    },
    {
      id: "pitbull", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Urbano", "Tendencia"], fecha: "27 oct 2026",
      titular: "Pitbull habla de su relación musical con El Cata y Omega en Billboard Latin Music Week",
      cuerpo: "El artista Pitbull habló de su relación musical con El Cata y Omega El Fuerte durante el panel «Superstar Q&A: The Story Behind the Charts» de la Billboard Latin Music Week 2026, en Miami, según Remolacha, que enlaza una nota de Listín Diario.",
      tocaTitulo: "¿Y eso qué?",
      toca: "La música urbana dominicana sigue con presencia en escenarios grandes de la música latina. Pa’ content, es una conversación a la que se puede arrimar con respeto y sin groserías.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/pitbull-habla-sobre-el-cata-omega-y-las-regalias-video/" }]
    }
  ],

  pizarra: ["omnicom", "sephora", "deloitte", "safari", "microdramas", "seguros"],

  frases: [
    { dep: "medios", texto: "Omnicom ganó la media de Coca-Cola en Norteamérica, y Coca-Cola ya manda 70 % de su inversión a redes y creadores.", uso: "para conversaciones de mezcla de medios" },
    { dep: "creatividad", texto: "Sephora puso a Seth Rogen a buscar regalos pa’ que regalar belleza dé menos miedo.", uso: "para proponer humor en campañas de temporada" },
    { dep: "data", texto: "Safari ya golpeó a cinco proveedores de identidad en las pruebas: el plan B de medición no puede esperar a diciembre.", uso: "para conversaciones de medición y privacidad" },
    { dep: "planning", texto: "La mitad de los compradores de EE. UU. planea regalar experiencias esta Navidad, frente a 39 % hace dos años.", uso: "para planes de temporada" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Omnicom y la media de Coca-Cola" },
      { id: "creatividad", texto: "Sephora y Seth Rogen" },
      { id: "planning", texto: "Regalos de experiencias, según Deloitte" },
      { id: "data", texto: "Safari y los proveedores de identidad" },
      { id: "content", texto: "Los microdramas de YouTube" },
      { id: "rd", texto: "Zoom a RD: el mercado de seguros" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "omnicom", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "deloitte", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Deloitte encontró que 50 % de los compradores de EE. UU. planea regalar experiencias esta Navidad, frente a 39 % hace dos años. Busca el dato local antes de aplicarlo en RD."
    },
    data: {
      tipo: "secreto", nota: "metafine", titulo: "Destapa el expediente",
      texto: "Un juez de Nuevo México ordenó a Meta pagar [[US$25,000 millones]] por violaciones de privacidad, aunque la ley estatal permitía hasta [[US$219,000 millones]]. Meta dice que va a apelar."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "seguros", titulo: "La pregunta del patio",
      p: "¿Qué parte del mercado de seguros tienen juntas Universal, Reservas y Humano?",
      opciones: ["Cerca de 25 %", "55.1 %", "Casi 90 %"], correcta: 1,
      explicacion: "Según la Superintendencia de Seguros, las tres juntas concentran 55.1 % de las primas netas a junio de 2026."
    }
  }
};
