/*
  El Pulso Publicitario · edición N.º 293 · 20 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 293,
  fechaISO: "2026-10-20",
  fecha: "Martes 20 de octubre 2026",
  fechaCorta: "20 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Lo que antes medías con un identificador hoy depende de lo que el navegador te deje pasar, y conviene tener plan B.",
    largo: "Martes de cambios en la tubería. Meta vende ventanas de exposición de 3 a 24 horas, Safari 27 bloquea a las firmas que convierten correos en identificadores y Chartbeat anota que la búsqueda cayó a 12 % del tráfico de editores en Norteamérica. Aquí en el patio, Puerto Plata y Pedernales recibieron 45,627 cruceristas en cuatro días. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del viernes.",
    porDep: {
      medios: "Antes de pagar un premium por exclusividad, define qué número tiene que mover esa ventana y cómo lo vas a medir.",
      creatividad: "Un stunt con personalidad enciende la conversación, pero amárralo a una idea de marca antes de gastar.",
      planning: "Si una cifra viene de un reporte con muestra pequeña, úsala de pista y cruza con los datos propios del cliente.",
      data: "Pregunta cómo identifica el cliente a sus usuarios hoy. Si depende del correo, ya toca probar una alternativa.",
      content: "Cuando la plataforma te invita a un programa de pago, lee primero qué te exige y qué no ha confirmado.",
      rd: "Un estimado no es un resultado. Úsalo de punto de partida y pide la fuente antes de ponerlo en una propuesta."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Meta lanza Ads Super Burst, ventanas de exposición de 3 a 24 horas con exclusividad de categoría" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Away nombra a John Summit su «Chief Destruction Officer» tras quemar su Rimowa · Victoria’s Secret convierte su desfile en un movimiento de fans" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "La búsqueda cae a 12 % del tráfico de editores en Norteamérica, según Chartbeat · Amazon deja las devoluciones navideñas hasta el 31 de enero" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Safari 27 bloquea las peticiones que convierten correos en identificadores · El EDPB le dice a los desarrolladores de IA que eviten sitios que bloquean el scraping" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube prueba bonos pa’ Shorts y comisiones extra de compras · Mosseri dice que prohibir la IA no es práctico" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "supernova", dep: "medios", peso: "principal",
      etiquetas: ["Meta", "Ads Super Burst", "Awareness"],
      titular: "Meta te vende ventanas de exposición de 3 a 24 horas, con exclusividad de categoría y a precio premium",
      corto: "Meta vende ventanas de exposición de 3 a 24 horas",
      cuerpo: "El 15 de octubre, Meta anunció en su cumbre de construcción de marca tres novedades. La primera, Ads Super Burst, deja concentrar la exposición de una campaña en una ventana de 3 a 24 horas, con exclusividad de categoría pa’ que un competidor no reserve la misma ventana, y cuesta más que las opciones estándar. Meta la propone pa’ lanzamientos, noches de premios o el arranque de una temporada deportiva. Además prueba First Impression Ads, el primer anuncio del Feed con una sola marca por día, solo en EE. UU., y Aggregated View Time, que mide la exposición acumulada de un video en un período. También amplió Reels Trending Ads, con 15 temas estándar, entre ellos Hogar y Jardín y contenido en español. El artículo no da precios ni dice en qué mercados está cada función.",
      cifras: [
        { v: "3 a 24 horas", t: "ventana que se puede reservar con Ads Super Burst" },
        { v: "1 marca/día", t: "en la prueba de First Impression Ads, solo en EE. UU." },
        { v: "15 temas", t: "estándar en Reels Trending Ads, con una categoría nueva en español" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Es compra de un momento, no de un alcance. Los de medios tienen que decidir si una ventana de horas con exclusividad vale el premio, y Meta no ha dicho cuánto es ni dónde estará disponible.",
      hacer: "Esta semana, preguntarle al rep de Meta si Ads Super Burst y los temas en español de Reels Trending Ads llegan a RD y con qué precio, y marcar qué cliente tiene un lanzamiento en Q4 que justifique la ventana.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-offers-enhanced-ad-campaign-exposure/833171/" }]
    },

    {
      id: "away", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Away", "Creadores"],
      titular: "Away contrata a John Summit como su «Chief Destruction Officer» después de que quemó una Rimowa",
      corto: "Away convierte el stunt de John Summit en campaña",
      cuerpo: "Away, la marca de maletas rival de Rimowa, nombró al DJ y productor John Summit su «Chief Destruction Officer» en una alianza exclusiva, según Adweek. La idea nace de un video de este año en que Summit, tras romperse en gira su sexta Rimowa, la quemó en un parqueo, la llamó «Samantha» y lo posteó con el texto «end of an era». Las maletas de aluminio de Away pasarán por lo que Adweek llama una «prueba de fuego». El texto abierto no dice la agencia, la duración ni los términos del acuerdo.",
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La marca no inventó una escena: tomó una que ya era viral y la volvió su prueba de producto. Pa’ creatividad es un buen ejemplo de escuchar lo que el público ya hizo antes de armar el concepto.",
      hacer: "Esta semana, en la sesión creativa, revisar con un cliente qué momento viral de su categoría se podría convertir en una prueba de producto, y esbozar un guion de 15 segundos.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/after-torching-a-rimowa-john-summit-becomes-aways-chief-destruction-officer/" }]
    },
    {
      id: "vsshow", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Victoria’s Secret", "Evento"],
      titular: "Victoria’s Secret convierte su desfile en un movimiento de fans",
      corto: "Victoria’s Secret hace de su desfile un movimiento de fans",
      cuerpo: "El desfile de Victoria’s Secret fue el domingo 18 de octubre en Los Angeles, con transmisión global por YouTube y sus redes y, por primera vez, un TikTok Live después del show. Según Adweek, la marca suma «Angels Among Us», una serie sobre la búsqueda de un nuevo Angel, y venta de boletas por entregas pa’ hacerlo más comunitario. Elizabeth Preis, su directora de marketing, dice que querían una noche más participativa. El artículo no trae cifras de audiencia ni nombra agencia.",
      toca: "El evento deja de ser solo una transmisión y pasa a ser algo que los fans arman con la marca. Como no hay resultados, sirve de referente y no de prueba.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/amid-turnaround-victorias-secret-turns-its-fashion-show-into-a-fan-movement/" }]
    },

    {
      id: "chartbeat", dep: "planning", peso: "principal",
      etiquetas: ["Tráfico", "Búsqueda", "Chartbeat"],
      titular: "La búsqueda cayó de 21 % a 12 % del tráfico de editores en Norteamérica, dice Chartbeat",
      corto: "La búsqueda cae a 12 % del tráfico de editores",
      cuerpo: "El reporte del tercer trimestre de 2026 de Chartbeat, fechado el 15 de octubre, encontró que la búsqueda bajó de 21 % a 12 % de las páginas vistas en Norteamérica frente al año pasado. Según PPC Land, cayó en nueve de las diez regiones que Chartbeat sigue, mientras que Chartbeat dice que el tráfico total a los editores «se mantiene estable» y no desglosa por buscador. PPC Land advierte que la muestra es pequeña, que el reporte no da margen de error y que hay inconsistencias entre cifras de distintas publicaciones.",
      cifras: [
        { v: "21 % → 12 %", t: "peso de la búsqueda en las páginas vistas de Norteamérica, año contra año" },
        { v: "9 de 10", t: "regiones donde cayó la búsqueda, según Chartbeat" }
      ],
      hacer: "Esta semana, revisar de dónde vienen las visitas de los sitios de los clientes y no asumir la caída: comparar su propia fuente de tráfico de búsqueda con la de un año atrás antes de mover presupuesto.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/safari-27-blocks-identity-firms-as-search-falls-to-12-of-publisher-traffic/" }]
    },
    {
      id: "amazondevol", dep: "planning", peso: "secundaria",
      etiquetas: ["Amazon", "Temporada", "Devoluciones"],
      titular: "Amazon deja las devoluciones navideñas abiertas hasta el 31 de enero, y será regla todos los años",
      corto: "Amazon extiende las devoluciones hasta el 31 de enero",
      cuerpo: "Amazon publicó el 16 de octubre que lo comprado en Amazon.com entre el 1 de noviembre y el 31 de diciembre de 2026 se puede devolver hasta el 31 de enero de 2027. Los productos Apple tienen plazo hasta el 15 de enero. Amazon dice que la política aplicará cada año y que los vendedores no tienen que hacer nada. Las fechas son las mismas del año pasado. PPC Land anota que las ventas del cuarto trimestre quedan abiertas a reversión hasta fin de enero, lo que puede afectar el retorno publicitario que se reporta a principios de año.",
      cifras: [
        { v: "31 ene 2027", t: "fecha límite pa’ devolver lo comprado del 1 de noviembre al 31 de diciembre" },
        { v: "15 ene 2027", t: "fecha límite pa’ productos Apple" }
      ],
      toca: "Si un cliente vende en EE. UU. o a dominicanos en el exterior, el ROAS de diciembre se puede ver mejor en enero de lo que termina siendo. Conviene dejarlo claro en el forecast antes de que llegue el reporte.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-makes-its-january-31-holiday-return-deadline-an-annual-rule/" }]
    },

    {
      id: "safari27", dep: "data", peso: "principal",
      etiquetas: ["Safari", "Identidad", "Privacidad"],
      titular: "Safari 27 le corta el paso a las firmas que convierten correos en identificadores",
      corto: "Safari 27 bloquea las firmas de identidad por correo",
      cuerpo: "Safari y WebKit 27 bloquean las peticiones a terceros que convierten correos de formularios de login y boletines en identificadores persistentes, según el post de WebKit «Blocking Identity Resolution Infrastructure» que cubre PPC Land. El bloqueo ocurre en el navegador, a nivel de dominio, y WebKit dice que no da excepciones. El post no nombra empresas; PPC Land lista a LiveRamp, ID5, UID2 de The Trade Desk, OpenX, Permutive y Audigent como afectadas. ID5 y OpenX dicen que un arreglo conjunto subió 58 % su alcance en Safari, pero esa cifra la dieron las propias empresas. WebKit no aclara si el correo en hash se trata distinto, ni si el bloqueo entra en la 27.0 o en una versión posterior.",
      cifras: [
        { v: "58 %", t: "mejora de alcance en Safari que dicen ID5 y OpenX con su arreglo (cifra de ellas)" },
        { v: "9", t: "dominios que The Trade Desk listó como afectados en su reporte, ocho de identidad" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Apple ya trata el correo como un identificador de largo plazo y corta la cadena en el navegador, no en la política.",
        "Casi todo lo que se sabe de quién está afectado viene de la cobertura, no de Apple, así que conviene probar antes de asumir."
      ],
      hacer: "Esta semana, hacer una prueba de campañas y de audiencias basadas en correo con tráfico de Safari 27 en un cliente que use esas firmas, y comparar el alcance contra el de otros navegadores.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/safari-27-blocks-identity-firms-as-search-falls-to-12-of-publisher-traffic/" }]
    },
    {
      id: "edpb", dep: "data", peso: "secundaria",
      etiquetas: ["EDPB", "IA", "Scraping"],
      titular: "El EDPB le dice a los desarrolladores de IA que eviten los sitios que bloquean el scraping",
      corto: "El EDPB: no hagan scraping donde lo bloquean",
      cuerpo: "El Comité Europeo de Protección de Datos publicó «Guidelines at a Glance», un resumen de cuatro páginas de sus Guidelines 03/2026 sobre scraping web para IA generativa, adoptadas el 7 de julio. Entre sus seis pasos de minimización de datos está evitar sitios que bloquean el scraping con robots.txt, ai.txt, CAPTCHA o autenticación. También trata quién es responsable cuando se contrata a un scraper o se compra un dataset ya raspado. La consulta pública va hasta el 30 de octubre. Es un resumen, y el texto completo manda.",
      cifras: [
        { v: "6", t: "pasos de minimización de datos en el resumen" },
        { v: "30 oct", t: "cierre de la consulta pública" }
      ],
      toca: "Si un cliente quiere entrenar o afinar un modelo con datos de la web, la señal del sitio importa. Aplica al GDPR europeo y no es ley dominicana, pero marca hacia dónde va la conversación.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/edpb-tells-ai-developers-to-avoid-sites-that-block-scraping-with-robots-txt/" }]
    },

    {
      id: "ytshorts", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "Shorts", "Creadores"],
      titular: "YouTube prueba bonos pa’ los que publican Shorts seguido y comisiones extra por mostrar productos",
      corto: "YouTube prueba bonos pa’ Shorts y comisiones extra",
      cuerpo: "YouTube prueba un programa de bono pa’ creadores invitados en EE. UU., Reino Unido, Alemania, Brasil, Japón y Corea del Sur. Los que se apunten deben subir un mínimo de Shorts públicos en el período de su invitación y pueden ganar pagos extra según «vistas válidas y con interacción». Un ejemplo que circuló en X hablaba de 16 al mes, pero YouTube no lo ha confirmado. Aparte, ofrece bonos de comisión de afiliados por videos con ciertos productos, y los creadores deben marcar la casilla de promoción paga y mantener el video público 30 días. Rene Ritchie dijo que podrían invitar a más creadores en los próximos meses.",
      cifras: [
        { v: "6 países", t: "en la prueba: EE. UU., Reino Unido, Alemania, Brasil, Japón y Corea del Sur" },
        { v: "30 días", t: "mínimo que el video debe estar público pa’ ganar el bono de afiliado" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Los creadores con los que trabajan tus clientes van a recibir invitaciones que cambian cuánto y cómo publican. Por ahora RD no figura en la prueba, pero lo que se pide a los creadores define cómo les puedes pedir contenido.",
      hacer: "Esta semana, preguntarle a tus creadores aliados si les llegó la invitación, y si les llegó, qué mínimo de publicaciones les exige, antes de cerrar el calendario de Q4.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-tests-new-shorts-incentives/833420/" }]
    },
    {
      id: "mosseri", dep: "content", peso: "secundaria",
      etiquetas: ["Instagram", "IA", "Etiquetas"],
      titular: "Mosseri: prohibir la IA no es práctico, pero hay que frenar que se use pa’ copiar creadores",
      corto: "Mosseri: etiquetar más y frenar las copias con IA",
      cuerpo: "Adam Mosseri, jefe de Instagram, dijo en su Q&A semanal que la plataforma no reduce el alcance de un contenido solo por ser IA, y que quiere sumar más etiquetas de IA y animar a los creadores a marcarlo por su cuenta. En Threads escribió que le preocupa «mucho» la tendencia de copiar creadores con IA, y que las herramientas de derechos de autor actuales no bastan. Es una respuesta a la queja de un artista. No hay sistema de etiquetas, fecha ni mecanismo anunciado.",
      toca: "Si tus clientes usan IA en piezas, conviene marcarlo desde ya, porque la plataforma va a pedirlo. Todavía no hay regla ni fecha.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-chief-says-stronger-ai-slop-prevention-is-needed/833416/" }]
    },

    {
      id: "cruceros", dep: "rd", peso: "principal", para: ["medios", "planning", "content"],
      etiquetas: ["Turismo", "Cruceros", "Consumo"], fecha: "19 oct 2026",
      titular: "Puerto Plata y Pedernales reciben 45,627 cruceristas en cuatro días",
      corto: "Puerto Plata y Pedernales: 45,627 cruceristas en 4 días",
      cuerpo: "Santo Domingo.— Entre el 12 y el 15 de octubre, 11 cruceros llegaron con 45,627 pasajeros a tres terminales, según datos de la Autoridad Portuaria Dominicana que reportó elDinero. Puerto Plata sumó 41,335 pasajeros (90.6 %), entre Amber Cove (6 buques, 27,707) y Taíno Bay (4 buques, 13,628), y Pedernales recibió 4,292 en Cabo Rojo. La Autoridad Portuaria estima que las visitas podrían dejar US$4,562,700, pero es un cálculo con un gasto promedio de US$100 por pasajero, no un resultado medido.",
      cifras: [
        { v: "45,627", t: "cruceristas en 11 buques, del 12 al 15 de octubre" },
        { v: "90.6 %", t: "llegó a Puerto Plata (41,335 pasajeros)" },
        { v: "US$4.56 M", t: "estimado de gasto, con US$100 por pasajero (supuesto, no medido)" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Hay temporada de cruceros y tráfico concentrado en el norte. Pa’ marcas locales de comida, artesanía y excursiones es una audiencia que llega en bloque y por pocas horas. El gasto es un estimado, así que se usa de pista.",
      hacer: "Esta semana, proponerle a un cliente de turismo o de comercio en Puerto Plata una activación pa’ los días de llegada de buques, y pedir a la Autoridad Portuaria el calendario de escalas antes de planificar.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385380/puerto-plata-y-pedernales-reciben-45627-cruceristas-en-cuatro-dias/" }]
    },
    {
      id: "colmado", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Comercio", "IA", "Colmados"], fecha: "19 oct 2026",
      titular: "APAP y la PUCMM van a llevar la inteligencia artificial a los colmados y minimarkets",
      corto: "APAP y PUCMM: «El Colmado Inteligente»",
      cuerpo: "Santo Domingo.— La Asociación Popular de Ahorros y Préstamos (APAP) y la PUCMM desarrollarán «El Colmado Inteligente», un proyecto pa’ formar a dueños y administradores de colmados y minimarkets en inteligencia artificial, gestión y educación financiera, y pa’ crear herramientas de control de inventarios, planificación de compras y análisis de ventas, según Diario Libre. El texto usa futuro y no da número de participantes, presupuesto, fechas ni lugares.",
      toca: "El colmado es un punto de venta clave en el patio. Si empieza a medir inventario y ventas con herramientas digitales, saldrán datos que hoy no existen. Por ahora es un anuncio, sin cifras.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/10/19/apap-y-pucmm-lanzan-colmado-inteligente-para-comercios/3693415" }]
    },
    {
      id: "combustibles", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Consumo", "Combustibles", "Economía"], fecha: "19 oct 2026",
      titular: "El Gobierno explica los subsidios a los combustibles: el gasoil regular tiene RD$120 por galón",
      corto: "Combustibles: gasoil regular tiene RD$120 de subsidio por galón",
      cuerpo: "Santo Domingo.— El ministro de Industria y Comercio, Eduardo Sanz Lovatón, explicó en LA Agenda Semanal el plan de contención de precios de combustibles. Según el ministro, el subsidio por galón es de RD$200 pa’ el gasoil de transporte federado, RD$120 pa’ el gasoil regular (que se mantiene por debajo de RD$390.00), RD$26 pa’ la gasolina premium y RD$52 pa’ el GLP. Abinader afirmó que los subsidios podrían superar los RD$40,000 millones este año, según un titular relacionado de Diario Libre. Los montos cambian cada semana según el mercado de derivados.",
      cifras: [
        { v: "RD$120", t: "de subsidio por galón de gasoil regular, según el ministro" },
        { v: "RD$40,000 M", t: "que podrían superar los subsidios este año, según Abinader" }
      ],
      toca: "El precio del combustible entra en el costo de transporte y en el bolsillo del consumidor, y los montos cambian semana a semana. Pa’ planning es un factor a vigilar en el forecast de Q4 de categorías de consumo.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/10/19/gobierno-explica-subsidios-a-combustibles/3694148" }]
    },
    {
      id: "nostalgia", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Cultura", "Artesanía", "Nostalgia"], fecha: "13 oct 2026",
      titular: "Así la nostalgia por lo dominicano se convirtió en negocio",
      corto: "La nostalgia por lo dominicano se vuelve negocio",
      cuerpo: "Santo Domingo.— elDinero cuenta el caso de Lotys Acevedo, artesana de Lotideas Espacio Artesanal, que hace piezas pintadas a mano con elementos de la cultura dominicana: grecas, coladores de tela con hombres criollos y tazas de esmalte. Vende sobre todo en tiendas de regalos y ha ido a ferias en Berlín, Milán, Dominica y Colombia. Dice que los dominicanos en el exterior se conectan con sus productos por sus raíces. Es un reportaje de una sola emprendedora y no trae cifras de ventas, así que no sirve pa’ generalizar.",
      toca: "Los objetos del día a día (la greca, el colador) son símbolos que la gente reconoce al instante. Pa’ creatividad es una pista visual de identidad, no un dato de mercado.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/384719/asi-la-nostalgia-por-lo-dominicano-se-convirtio-en-negocio/" }]
    }
  ],

  pizarra: ["supernova", "away", "chartbeat", "safari27", "ytshorts", "cruceros"],

  frases: [
    { dep: "medios", texto: "Meta ya vende ventanas de exposición de 3 a 24 horas con exclusividad de categoría: el premio se paga por el momento, no por el alcance.", uso: "para conversaciones de lanzamientos y awareness" },
    { dep: "creatividad", texto: "Away no inventó la escena: le sacó provecho a una Rimowa quemada que ya era viral.", uso: "para conversaciones de ideas que nacen de la cultura" },
    { dep: "data", texto: "Safari 27 ya no deja que el correo sea un identificador pa’ terceros: toca probar qué pasa con las audiencias.", uso: "para conversaciones de identidad y medición" },
    { dep: "planning", texto: "Chartbeat dice que la búsqueda pasó de 21 % a 12 % del tráfico de editores en Norteamérica, pero con una muestra pequeña: úsalo de pista.", uso: "para conversaciones de fuentes de tráfico" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Meta vende ventanas de 3 a 24 horas" },
      { id: "creatividad", texto: "John Summit, Chief Destruction Officer de Away" },
      { id: "planning", texto: "La búsqueda cae a 12 % del tráfico de editores" },
      { id: "data", texto: "Safari 27 bloquea las firmas de identidad por correo" },
      { id: "content", texto: "YouTube prueba bonos pa’ Shorts" },
      { id: "rd", texto: "Zoom a RD: 45,627 cruceristas en cuatro días" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "supernova", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "amazondevol", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Amazon deja devolver lo comprado entre el 1 de noviembre y el 31 de diciembre hasta el 31 de enero de 2027, y será regla cada año. Cuenta con eso en el forecast de diciembre."
    },
    data: {
      tipo: "secreto", nota: "edpb", titulo: "Destapa el expediente",
      texto: "El EDPB resumió en [[cuatro páginas]] sus guías de scraping pa’ IA, con [[seis pasos]] de minimización de datos, y su consulta pública cierra el 30 de octubre."
    },
    rd: {
      tipo: "pregunta", nota: "cruceros", titulo: "La pregunta del patio",
      p: "¿Cuántos cruceristas llegaron a Puerto Plata y Pedernales entre el 12 y el 15 de octubre?",
      opciones: ["45,627", "4,562", "11,000"],
      correcta: 0,
      explicacion: "Fueron 45,627 en 11 buques, según la Autoridad Portuaria Dominicana. El gasto de US$4.56 M es un estimado con US$100 por pasajero."
    }
  }
};
