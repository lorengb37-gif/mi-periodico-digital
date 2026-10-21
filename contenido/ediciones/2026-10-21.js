/*
  El Pulso Publicitario · edición N.º 294 · 21 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 294,
  fechaISO: "2026-10-21",
  fecha: "Miércoles 21 de octubre 2026",
  fechaCorta: "21 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes de vender o comprar una promesa de plataforma, mira qué parte ya está lista y cuál todavía está en el papel.",
    largo: "Miércoles de promesas y calendarios. Netflix bajó su meta de publicidad de unos US$3,000M a US$2,700M porque algunas funciones se atrasaron, Comscore estrena una medida de cuánta publicidad ve la gente en cada pantalla, y TikTok ya está armando su camino a Black Friday. Aquí en el patio, Mitur dice que el 14 % de los turistas pasa por la Ciudad Colonial. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del viernes.",
    porDep: {
      medios: "Si una plataforma te vende algo que todavía no está completo, pide por escrito qué funciona hoy y qué viene después.",
      creatividad: "Una alianza larga con un artista se sostiene con ideas nuevas cada vez. Piensa en la tercera pieza, no solo en el anuncio.",
      planning: "Una medida nueva es una pista, no un veredicto. Cruza el dato con lo que ya sabes de la audiencia del cliente.",
      data: "Que una campaña sea legal en tu mercado no la hace aceptable pa’ el cliente. Documenta con qué base segmentas.",
      content: "Antes de prometerle un número a un cliente, revisa quién lo dio. Los datos de la plataforma sobre sí misma se leen con cuidado.",
      rd: "Un porcentaje sin método es un punto de partida. Pide la fuente antes de ponerlo en una propuesta."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Netflix baja su meta de publicidad a US$2,700M por atrasos en funciones · Amazon usa el fútbol de los jueves como puerta a su DSP · Reddit estrena herramientas de IA en Ads Manager" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Absolut firma con Charli XCX por dos años · Grindr quiere ser dueño de Halloween con su Pleasure Ball" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Comscore estrena una medida de cuánta publicidad ve la gente en cada pantalla · Pinterest manda su guía de temporada navideña" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Berlín dice que cuatro partidos violaron el GDPR al segmentar en Facebook · Fou cuestiona la cifra de US$63,000M en tráfico inválido" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "TikTok publica sus consejos pa’ Black Friday y Cyber Monday · YouTube suma a AliExpress a su programa de afiliados" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "netflixads", dep: "medios", peso: "principal",
      etiquetas: ["Netflix", "CTV", "Pronóstico"],
      titular: "Netflix baja su meta de publicidad de unos US$3,000M a US$2,700M por atrasos en sus funciones",
      corto: "Netflix baja su meta de publicidad a US$2,700M",
      cuerpo: "En su carta a accionistas del tercer trimestre, publicada el 20 de octubre, Netflix dijo que espera unos US$2,700M en ingresos publicitarios de 2026, frente a los cerca de US$3,000M que había repetido desde enero. La razón que da es un lanzamiento «un poco más lento de lo esperado» de algunas funciones de publicidad, y su CEO, Greg Peters, dice que la demanda «sigue fuerte». Aun así, la publicidad crecería más de 80 % este año sobre una base de poco más de US$1,500M en 2025. Netflix sumó a MercadoLibre (LATAM) y Adform (EMEA) como socios y planea 15 países nuevos con planes con anuncios en 2027, entre ellos Colombia y Perú desde marzo. No dijo cuáles integraciones se atrasaron.",
      cifras: [
        { v: "US$2,700M", t: "nueva meta de ingresos publicitarios de 2026 (antes, cerca de US$3,000M)" },
        { v: "+80 %", t: "crecimiento que Netflix aún espera en publicidad este año" },
        { v: "15 países", t: "nuevos con plan con anuncios en 2027, incluidos Colombia y Perú desde marzo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Netflix sigue sumando países, pero el inventario con las funciones nuevas llega más tarde de lo prometido. Si un plan de CTV cuenta con medición o compra programática en Netflix, conviene tener un plan B.",
      hacer: "Esta semana, revisar qué clientes tienen Netflix en su plan de Q4 o de 2027 y pedirle al rep qué funciones están activas hoy y cuáles siguen pendientes.",
      fuentes: [
        { nombre: "PPC Land", url: "https://ppc.land/netflix-ad-revenue-forecast-drops-to-2-7b-as-partner-integrations-slip/" }
      ]
    },
    {
      id: "tnf", dep: "medios", peso: "secundaria",
      etiquetas: ["Amazon", "Deportes", "DSP"],
      titular: "Amazon usa el fútbol de los jueves como puerta de entrada a su DSP",
      corto: "Amazon usa el fútbol de los jueves como puerta a su DSP",
      cuerpo: "Digiday cuenta que Amazon vende Thursday Night Football en dos direcciones: a marcas que no son de su tienda, como American Express, como una forma de probar la plataforma y luego mover más inversión al DSP; y a marcas que ya venden en Amazon, como Colgate-Palmolive, como un extra con datos de ventas ligados a la exposición al anuncio. Según Amazon, los anunciantes del TNF suben 6 % esta temporada. Esos números vienen de Amazon y de estudios que cita el artículo, y Colgate no dijo cuánto invierte en Prime.",
      cifras: [
        { v: "+6 %", t: "anunciantes del TNF esta temporada, según el artículo" },
        { v: "80+", t: "marcas nuevas en TNF desde 2022, dijo Amazon en Advertising Week" }
      ],
      toca: "Un deporte en vivo sirve de anzuelo pa’ llevar al anunciante a todo el ecosistema de Amazon. Un buyer de la agencia que compra solo el partido está dejando por fuera la mitad de la oferta.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/how-amazon-turned-its-thursday-night-football-into-a-two-pronged-pitch-to-capture-ad-dollars/" }]
    },
    {
      id: "redditia", dep: "medios", peso: "secundaria",
      etiquetas: ["Reddit", "IA", "Ads Manager"],
      titular: "Reddit mete IA en Ads Manager: planificador de campañas y puntuación de optimización",
      corto: "Reddit estrena IA en Ads Manager",
      cuerpo: "Reddit anunció un planificador de campañas que predice alcance, impresiones y costos antes del lanzamiento, y una puntuación de optimización de 0 a 100 % con recomendaciones. Las dos herramientas se están desplegando a todos los anunciantes durante octubre. También hay una optimización automática de presupuesto entre grupos de anuncios. Reddit dice que los anunciantes con una puntuación de 80 % o más tuvieron un CPA combinado 19.6 % más bajo, pero es un dato de la propia Reddit y no dice que la puntuación sea la causa.",
      cifras: [
        { v: "19.6 %", t: "menos CPA en cuentas con puntuación de 80 % o más, según Reddit (correlación)" }
      ],
      toca: "Los pronósticos del planificador son estimados y la puntuación sirve de guía. Úsalos como segunda opinión, no como sustituto de tu propio plan.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-adds-ai-powered-ad-guidance-tools/833532/" }]
    },

    {
      id: "absolut", dep: "creatividad", peso: "principal",
      etiquetas: ["Absolut", "Charli XCX", "Alianza"],
      titular: "Absolut firma con Charli XCX por dos años y empieza con una pista que dejó en pantalla",
      corto: "Absolut firma dos años con Charli XCX",
      cuerpo: "Absolut, la vodka de Pernod Ricard, anunció el 20 de octubre una alianza de dos años con Charli XCX, con ediciones limitadas, coleccionables, vasos a la medida y eventos con fans. Antes, durante un fin de semana de shows en Los Angeles, aparecieron en pantalla las palabras «ABSOLUT XCX» y algunos bailarines usaron camisetas con «I ♥ Absolut». El anuncio llegó con fotos en blanco y negro de la artista en el backstage. Charli dijo que la marca quería hacer algo «un poco caótico». Según Adweek, no hay detalles de fechas, productos, agencia ni monto.",
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La pista se plantó antes del anuncio, en el show mismo, y así la alianza se sintió como un descubrimiento de los fans. Una alianza de dos años le exige a la marca una idea que dure más que el primer post.",
      hacer: "Esta semana, en la sesión creativa, esbozar con un cliente un teaser que se pueda plantar en un evento real antes de anunciar una alianza, y definir qué tres entregas harían que el segundo año se sienta nuevo.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/charli-xcx-joins-absolut-for-chaotic-two-year-partnership/" }]
    },
    {
      id: "grindr", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Grindr", "Halloween", "Evento"],
      titular: "Grindr quiere ser dueño de Halloween con su Pleasure Ball",
      corto: "Grindr quiere hacer de Halloween su fecha",
      cuerpo: "Según Adweek, Grindr arma su presencia de Halloween alrededor del Pleasure Ball, una fiesta con concurso de disfraces. La tercera edición es el jueves 22 de octubre en Nueva York y pasó de unos 400 invitados en 2024 a una capacidad de 700. Su CMO, Tristan Pineiro, dice que quiere que sea el «rival gay del Met Gala» y que Halloween es «kind of gay Christmas» para su comunidad. El texto abierto del artículo no nombra agencia ni da presupuesto, patrocinadores o resultados.",
      toca: "La marca escogió una fecha que su comunidad ya celebra y la convirtió en un evento propio, que crece cada año. Sirve de referente de cómo apropiarse de un momento del calendario, aunque aún no hay resultados.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/halloween-is-gay-christmas-and-grindr-wants-to-own-it/" }]
    },

    {
      id: "comscore", dep: "planning", peso: "principal",
      etiquetas: ["Comscore", "TV", "Medición"],
      titular: "Comscore estrena una medida de cuánta publicidad ve la gente: YouTube se lleva 44 % del tiempo de anuncios en streaming",
      corto: "Comscore: YouTube, 44 % del tiempo de anuncios en streaming",
      cuerpo: "Digiday reporta que Comscore lanzó «The Score Report», que mide la «cuota de tiempo de publicidad»: qué parte de los minutos de anuncios que ve la gente corresponde a cada canal o plataforma, sumando tiempo de visualización y carga publicitaria. Con datos de agosto de 2026, YouTube (sin YouTube TV) concentró 44 % del tiempo de anuncios en streaming, cerca de 10 % de toda la TV, y Tubi tuvo 12 %, cerca de 3 % de toda la TV. El streaming entero llegó a 21 % en febrero, y los deportes mueven mucho el ranking de cada servicio. Un columnista de Digiday advierte que la medida podría empujar a subir la carga de anuncios.",
      cifras: [
        { v: "44 %", t: "del tiempo de anuncios en streaming fue de YouTube (sin YouTube TV), agosto 2026" },
        { v: "12 %", t: "fue de Tubi, cerca de 3 % de toda la TV" },
        { v: "21 %", t: "del tiempo de anuncios correspondió al streaming en febrero" }
      ],
      hacer: "Esta semana, ponerle al forecast de TV de Q4 del cliente una nota que compare su mezcla de plataformas con esta medida, y preguntar si el reporte llega con desglose por mercado.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/future-of-tv/future-of-tv-briefing-youtube-tubi-top-streamers-share-of-ad-exposure-time/" }]
    },
    {
      id: "pinterestholiday", dep: "planning", peso: "secundaria",
      etiquetas: ["Pinterest", "Temporada", "Navidad"],
      titular: "Pinterest manda su guía de temporada navideña: la gente planifica antes de noviembre",
      corto: "Pinterest manda su guía de temporada navideña",
      cuerpo: "Pinterest publicó una lista de pasos, en PDF, para que las marcas preparen sus Pines de temporada. La plataforma dice que los usuarios empiezan a planificar, guardar ideas y comparar productos mucho antes de fines de noviembre. Pinterest tiene 640 millones de usuarios activos al mes, según Social Media Today. El artículo es breve y no detalla los pasos de la guía.",
      cifras: [{ v: "640 M", t: "usuarios activos al mes de Pinterest, según Social Media Today" }],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Es la segunda vez desde agosto que Pinterest le avisa a las marcas que arranquen temprano. Si un cliente depende de la Navidad, el calendario de producción y de pauta tiene que cerrarse ya.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/pinterest-shares-festive-holiday-brand-guide/833418/" }]
    },

    {
      id: "berlin", dep: "data", peso: "principal",
      etiquetas: ["GDPR", "Berlín", "Facebook"],
      titular: "Berlín dice que cuatro partidos violaron el GDPR al segmentar votantes en Facebook",
      corto: "Berlín: cuatro partidos violaron el GDPR al segmentar en Facebook",
      cuerpo: "La autoridad de protección de datos de Berlín encontró que la CDU, el SPD, los Verdes y Die Linke trataron datos personales sin base legal al usar Facebook para segmentar anuncios por intereses políticos en la campaña al Bundestag de 2021. Los avisos de cierre son del 24 de septiembre de 2026 y noyb, que presentó las quejas en 2023, los publicó el 21 de octubre. Según noyb, la autoridad emitió reprimendas, sin multas. Solo se publicó la primera página de cada carta, con partes tachadas, así que no se conoce el razonamiento completo.",
      cifras: [
        { v: "4 partidos", t: "CDU, SPD, Verdes y Die Linke" },
        { v: "Sin multas", t: "reprimendas, según el resumen de noyb" },
        { v: "24 sep 2026", t: "fecha de los avisos de cierre; noyb los publicó el 21 de octubre" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Segmentar por intereses que revelan opiniones políticas es un terreno delicado, aunque lo ofrezca la plataforma.",
        "Es una decisión europea. En RD no es ley, pero marca hacia dónde mira la conversación sobre datos sensibles."
      ],
      hacer: "Esta semana, revisar las segmentaciones activas de los clientes que hagan campañas de causa, política o gobierno y documentar con qué base se arma cada audiencia.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/berlin-finds-cdu-spd-greens-and-left-broke-gdpr-with-facebook-targeting/" }]
    },
    {
      id: "fou", dep: "data", peso: "secundaria",
      etiquetas: ["Fraude", "Tráfico inválido", "Verificación"],
      titular: "Fou dice que la cifra de US$63,000M en tráfico inválido se queda corta en anuncios por CPM",
      corto: "Fou cuestiona la cifra de US$63,000M en tráfico inválido",
      cuerpo: "Augustine Fou, investigador de fraude publicitario, escribió el 16 de octubre que medir tráfico inválido por clics subestima el fraude en impresiones de anuncios por CPM, porque los bots solo necesitan que el anuncio cargue. Dice que multiplicar la tasa de clics inválidos por el gasto de cada país no sirve para calcular pérdidas. PPC Land aclara que la cifra de US$63,000M coincide con un reporte de Lunio, que vende detección, y que Fou vende un producto competidor. Su evidencia es una campaña de 31 días sin año indicado.",
      cifras: [{ v: "US$63,000M", t: "estimado de pérdidas por tráfico inválido que Fou cuestiona" }],
      toca: "Los dos lados de la discusión venden verificación. Antes de repetir un número de fraude en una reunión con el cliente, pregunta quién lo midió y cómo.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/fou-says-63bn-invalid-traffic-estimate-undercounts-fraud-on-cpm-ads/" }]
    },

    {
      id: "tiktokbf", dep: "content", peso: "principal",
      etiquetas: ["TikTok", "Black Friday", "Creadores"],
      titular: "TikTok publica sus consejos pa’ Black Friday: creadores en volumen y Lives",
      corto: "TikTok da sus consejos pa’ Black Friday y Cyber Monday",
      cuerpo: "TikTok lanzó «Road to Black Friday», una serie en video con casos de Princess Polly, Dossier y SharkNinja. Princess Polly trabaja con cientos de creadores al mes y participó en unos 6,000 videos de TikTok Shop en un solo mes, y Dossier envía muestras a entre 1,000 y 5,000 creadores mensuales. SharkNinja usa TikTok Live pa’ responder dudas de los compradores. Según TikTok, el contenido de #holidayshopping subió 263 % mes a mes en septiembre y los vendedores que hacen livestreams crecieron 84 % en ventas interanual. Todas las cifras son de TikTok. La disponibilidad de TikTok Shop depende del país.",
      cifras: [
        { v: "+263 %", t: "contenido de #holidayshopping en septiembre vs. el mes anterior, según TikTok" },
        { v: "+84 %", t: "ventas interanual de vendedores que hacen livestreams, según TikTok" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "El mensaje de TikTok es que el volumen de creadores y los Lives mueven ventas en temporada. Aunque TikTok Shop no esté en todos los mercados, el patrón (muchos creadores, muchas muestras, mucho en vivo) se puede adaptar al calendario de Black Friday de un cliente.",
      hacer: "Esta semana, armar con un cliente de retail un calendario de contenido de Black Friday con una lista de creadores pa’ muestras y un Live de preguntas y respuestas.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-shares-black-friday-cyber-monday-promotion-tips/833546/" }]
    },
    {
      id: "ytali", dep: "content", peso: "secundaria",
      etiquetas: ["YouTube", "Afiliados", "AliExpress"],
      titular: "YouTube suma a AliExpress a su programa de afiliados de compras",
      corto: "YouTube suma a AliExpress a sus afiliados",
      cuerpo: "AliExpress ya es socio del programa de afiliados de compras de YouTube: los creadores pueden etiquetar sus productos en videos y ganar comisión por las ventas. Llegará primero a EE. UU., Brasil, Reino Unido y Alemania, y luego a más mercados según avance YouTube. En septiembre YouTube dijo que planea ofrecer afiliados en 35 mercados a fines de 2026. El artículo no da fechas de lanzamiento ni porcentajes de comisión, y RD no figura en la lista.",
      toca: "El programa de afiliados de YouTube se sigue ampliando. Si trabajas con creadores en mercados donde ya existe, el producto de tu cliente compite con un catálogo muy grande por la misma comisión.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-inks-affiliate-deal-with-aliexpress/833542/" }]
    },

    {
      id: "colonial", dep: "rd", peso: "principal", para: ["planning", "medios", "content"],
      etiquetas: ["Turismo", "Ciudad Colonial", "Mitur"], fecha: "19-20 oct 2026",
      titular: "Collado: el 14 % de los turistas que llegan cada mes visita la Ciudad Colonial",
      corto: "Mitur: 14 % de los turistas visita la Ciudad Colonial",
      cuerpo: "Santo Domingo.— Al entregar las calles Colón y Hostos (norte y sur), rehabilitadas por RD$61.5 millones, el ministro de Turismo, David Collado, dijo que el 14 % de los turistas que llegan cada mes visita la Ciudad Colonial. Según él, arrancaron con 7 %, luego 8 % y ahora el 14 % es el promedio. Mitur invirtió unos RD$500 millones, con US$90 millones del BID en el programa, y lo que falta concluirá en diciembre. El texto no explica cómo se midió el porcentaje ni en qué período, así que se usa de pista y no de dato duro.",
      cifras: [
        { v: "14 %", t: "de los turistas visita la Ciudad Colonial cada mes, según el ministro (sin método)" },
        { v: "RD$61.5 M", t: "invertidos en las calles Colón y Hostos entregadas el lunes" },
        { v: "Diciembre", t: "cuando concluirá la etapa final de intervenciones pendientes" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "La Ciudad Colonial pasa a ser un punto de paso del turista y con calles nuevas, mejores aceras y menos obras. Pa’ marcas de comida, tiendas, hoteles y experiencias es una zona con audiencia de paso en la temporada alta.",
      hacer: "Esta semana, proponerle a un cliente de turismo o de comercio en la zona una pieza o activación pa’ temporada alta, y pedir a Mitur el método detrás del 14 % antes de ponerlo en una propuesta.",
      fuentes: [
        { nombre: "Mitur", url: "https://noticias.mitur.gob.do/noticias/el-14-de-turistas-que-llega-a-republica-dominicana-cada-mes-visita-la-ciudad-colonial/" },
        { nombre: "elDinero", url: "https://eldinero.com.do/385484/turismo-entrega-calles-rehabilitadas-en-la-ciudad-colonial-por-rd61-5-millones/" }
      ]
    },
    {
      id: "marileidy", dep: "rd", peso: "secundaria", para: ["creatividad", "content", "medios"],
      etiquetas: ["Cine", "Marileidy Paulino", "Cultura"], fecha: "20 oct 2026",
      titular: "La película de Marileidy Paulino ya tuvo su gala de estreno y cuenta cómo se hizo",
      corto: "Llega la película sobre Marileidy Paulino",
      cuerpo: "Santo Domingo.— «Marileidy», película dirigida por Tito Rodríguez sobre la atleta Marileidy Paulino, tuvo su gala premier, según Diario Libre. Kelvin Liria, productor general y ejecutivo, y Jessica Hasbún la produjeron; el equipo conoció a la atleta en 2019. La protagonista, Yisneidi, es una atleta recomendada por la propia Paulino y recibió unos tres meses de preparación actoral. Parte se filmó en Colombia, y Liria destacó el incentivo fiscal de la Ley de Cine como clave. El texto no da fecha de estreno comercial, distribuidora, presupuesto ni taquilla.",
      toca: "Una película sobre una atleta dominicana va a mover conversación en redes, y las marcas que quieran subirse deben hacerlo con respeto. Aún sin fecha de estreno comercial, conviene tener una idea lista.",
      fuentes: [
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cine/2026/10/20/no-tenia-nada-a-su-favor-asi-se-gesto-la-pelicula-sobre-marileidy/3691365" }
      ]
    },
    {
      id: "banreservas85", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Banca", "Música", "Aniversario"], fecha: "20 oct 2026",
      titular: "Banreservas celebra sus 85 años con una gala de música dominicana",
      corto: "Banreservas celebra 85 años con música dominicana",
      cuerpo: "Santo Domingo.— El Banco de Reservas celebró su 85.º aniversario con una gala en el Gran Domo del Club Banreservas, con un homenaje a la música dominicana. Participaron Maridalia Hernández, Frank Ceara, Adalgisa Pantaleón, Roger Zayas, Quico Rizek y Mariela Mercado, y la Orquesta Filarmónica de Santo Domingo, bajo la dirección de Amaury Sánchez. El repertorio incluyó obras de Juan Luis Guerra, Rafael Solano, Luis Alberti y Ñico Lora. Su presidente ejecutivo, Leonardo Aguilera, destacó la dedicación del banco a la identidad musical del país. El texto no da cifras ni dice si fue un evento público.",
      toca: "Un banco usó la música dominicana como lenguaje de su aniversario. Es un ejemplo de cómo una marca grande ancla una fecha en algo que la gente reconoce como suyo.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/10/20/banreservas-celebra-sus-85-anos-con-una-gala-musical/3695433" }]
    },
    {
      id: "accor", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Hoteles", "Inversión"], fecha: "20 oct 2026",
      titular: "Accor vuelve a RD con dos proyectos: un Swissôtel en Santo Domingo y un Novotel en Punta Cana",
      corto: "Accor regresa a RD con Swissôtel y Novotel",
      cuerpo: "Santo Domingo.— ProDominicana destacó el regreso del grupo hotelero francés Accor, con el Swissôtel Santo Domingo (uso mixto, con Noval Properties, unas 75 habitaciones y cerca de 180 residencias) y el Novotel Punta Cana Aeropuerto (105 habitaciones, inversión de US$22 millones y apertura prevista en 2027). Zanony Severino, director de Inversión de ProDominicana, dijo que es resultado de gestiones desde enero de 2023. El titular habla de más de 5,000 habitaciones, pero el texto no desglosa esa cifra.",
      cifras: [
        { v: "US$22 M", t: "inversión del Novotel Punta Cana Aeropuerto, abre en 2027" },
        { v: "105", t: "habitaciones del Novotel" }
      ],
      toca: "Hotel nuevo, anunciantes nuevos. Pa’ planning y medios es una señal de más oferta en Santo Domingo y Punta Cana hacia 2027, con presupuestos de lanzamiento por venir.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385544/prodominicana-impulsa-el-regreso-de-grupo-accor-al-pais-con-una-apuesta-de-mas-de-5000-habitaciones/" }]
    },
    {
      id: "ikealromana", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Retail", "Ikea", "Promociones"], fecha: "20 oct 2026",
      titular: "Ikea reabre su tienda de La Romana, más grande y con promoción en cocinas",
      corto: "Ikea reabre en La Romana",
      cuerpo: "La Romana.— Ikea celebró la reapertura de su tienda de La Romana tras una transformación integral, con un área comercial de 417 m² que integra Showroom y Markethall, incluidos 178 m² de complementos y más de 400 referencias de Cash & Carry. Hasta el 31 de octubre hay devolución de 10 % en cocinas modulares, y quien se afilie a Ikea Family durante la actividad recibe un cheque regalo de RD$500 por compras mínimas de RD$1,500. El texto no da inversión, tiempo de cierre ni ventas.",
      cifras: [{ v: "417 m²", t: "área comercial de la tienda reabierta" }],
      toca: "El retail de hogar sigue moviéndose fuera de Santo Domingo, con promociones que apuntan a octubre y a la temporada que viene.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/10/20/ikea-celebra-reapertura-de-ikea-la-romana/3693951" }]
    }
  ],

  pizarra: ["netflixads", "absolut", "comscore", "berlin", "tiktokbf", "colonial"],

  frases: [
    { dep: "medios", texto: "Netflix bajó su meta de publicidad a US$2,700M, pero dice que la demanda sigue fuerte: el problema es que las funciones se atrasaron.", uso: "para conversaciones de CTV y planes de Q4" },
    { dep: "creatividad", texto: "Absolut puso «ABSOLUT XCX» en pantalla antes de anunciar nada: la alianza se descubrió antes de contarse.", uso: "para conversaciones de alianzas con artistas" },
    { dep: "data", texto: "Berlín dijo que segmentar por intereses políticos en Facebook no tenía base legal en el caso de cuatro partidos.", uso: "para conversaciones de datos sensibles" },
    { dep: "planning", texto: "Comscore estrena una medida de cuánta publicidad ve la gente, y YouTube se lleva 44 % del tiempo de anuncios en streaming.", uso: "para conversaciones de mezcla de pantallas" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Netflix baja su meta de publicidad" },
      { id: "creatividad", texto: "Absolut y Charli XCX, dos años" },
      { id: "planning", texto: "Comscore mide el tiempo de anuncios" },
      { id: "data", texto: "Berlín y los cuatro partidos" },
      { id: "content", texto: "TikTok y su camino a Black Friday" },
      { id: "rd", texto: "Zoom a RD: la Ciudad Colonial" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "netflixads", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "pinterestholiday", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Pinterest dice que la gente planifica la temporada mucho antes de fines de noviembre: cierra el calendario de producción y pauta navideña ya."
    },
    data: {
      tipo: "secreto", nota: "berlin", titulo: "Destapa el expediente",
      texto: "La autoridad de Berlín encontró que [[cuatro partidos]] trataron datos sin base legal al segmentar en Facebook, y según noyb emitió [[reprimendas]], sin multas."
    },
    rd: {
      tipo: "pregunta", nota: "colonial", titulo: "La pregunta del patio",
      p: "Según el ministro de Turismo, ¿qué porcentaje de los turistas que llegan cada mes visita la Ciudad Colonial?",
      opciones: ["7 %", "14 %", "40 %"],
      correcta: 1,
      explicacion: "Collado dijo que el 14 % es el promedio actual, tras arrancar con 7 % y pasar por 8 %. El texto no explica cómo se midió."
    }
  }
};
