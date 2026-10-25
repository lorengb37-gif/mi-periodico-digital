/*
  El Pulso Publicitario · edición N.º 298 · 25 de octubre de 2026
*/
window.EDICION = {
  numero: 298,
  fechaISO: "2026-10-25",
  fecha: "Domingo 25 de octubre 2026",
  fechaCorta: "25 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes de gastar en Q4, mira quién se queda con el margen, quién guarda la data y cuándo decide el consumidor.",
    largo: "Las agencias chicas dicen que pagan doble comisión en The Trade Desk y Amazon, Meta recibió una multa de US$25,000 millones en Nuevo México y Apple le cerró la puerta en Safari a varias empresas de identidad. Del lado del consumidor, Deloitte dice que el 28 % ya gastó su presupuesto navideño pa’ finales de octubre. Y aquí en el patio, ‘Dame hombro’ de Bulin 47 se volvió baile mundial. El consejo de hoy: escoge una de estas notas, llévala al cliente esta semana y ponle fecha a la decisión.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, llévalo al cliente esta semana y ponle fecha. Así de fácil.",
    porDep: {
      medios: "Mira cuánto de cada peso del cliente llega a la pantalla y cuánto se queda en comisiones. Si no lo sabes, pregúntalo antes de renovar.",
      creatividad: "Un aliado con comunidad propia hace la mitad del trabajo. Antes de buscar el rostro más grande, busca al que ya conversa con tu público.",
      planning: "La temporada ya arrancó en el bolsillo del consumidor. Mueve el calendario del cliente antes de que el calendario lo mueva a él.",
      data: "Cuando una plataforma bloquea a un proveedor, revisa de qué señales depende tu medición y ten un plan B anotado.",
      content: "Mira lo que la gente ya hace con IA en su contenido y busca el formato que tu cliente pueda hacer a su manera, no el que se vea igualito a to’ el mundo.",
      rd: "En el patio, lo que pega nace en la calle. Cuando algo se vuelve viral, el cliente quiere entrar tarde; tú llega con una idea que sume y no con un copia y pega."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Agencias independientes reclaman comisiones dobles en The Trade Desk y Amazon DSP · Spotify vende más por compra automatizada y menos por venta directa" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Absolut firma dos años con Charli XCX · Apple Music estrena identidad hecha de sonido" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Deloitte: 28 % de los compradores gastará su presupuesto navideño en octubre · Los AI Overviews de Google llegan al 88 % de las búsquedas comerciales" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Un juez de Nuevo México le ordena a Meta pagar US$25,000 millones · Apple explica el bloqueo de Safari a empresas de identidad" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube muestra cómo los creadores usan la IA pa’ ponerse a ellos mismos en el video · TikTok comparte su guía pa’ el Black Friday" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "indies", dep: "medios", peso: "principal",
      etiquetas: ["Ad Tech", "The Trade Desk", "Amazon DSP"],
      titular: "Las agencias independientes dicen que pagan doble en The Trade Desk y Amazon DSP",
      corto: "Agencias chicas reclaman comisiones dobles en DSP",
      cuerpo: "Según Digiday, que habló con 10 compradores de medios, varias agencias independientes pagan dos capas de comisión al comprar en The Trade Desk y Amazon DSP. Una agencia de Nueva York superó el umbral de US$100,000 mensuales de TTD, pero sigue pagando 17 % a TTD y 12 % a su revendedor. Otra, de la Costa Oeste, paga 10 % al revendedor además del 15 % de Amazon. Amazon dice que no hay gasto mínimo; TTD dice que los asientos directos llevan niveles de compromiso acordados con cada cliente.",
      cifras: [
        { v: "17 % + 12 %", t: "comisión a TTD más comisión al revendedor, en el caso de la agencia de Nueva York" },
        { v: "US$100,000", t: "gasto mensual que una agencia ya superó en TTD sin lograr asiento directo" },
        { v: "10 % + 15 %", t: "revendedor más Amazon, en el caso de la agencia de la Costa Oeste" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Cada capa de comisión es plata que no llega a la pauta del cliente. Aunque el caso sea de EE. UU., aquí también se compra programática por revendedores y conviene saber cuántas capas hay.",
      hacer: "Esta semana pídele a tu proveedor de programática el desglose de comisiones de un cliente y anota cuánto de cada peso llega a la pantalla. Con ese número en mano, abre la conversación de renovación.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/indie-agencies-want-the-trade-desk-and-amazon-dsp-to-acknowledge-their-buying-power-with-negotiating-leverage/" }]
    },
    {
      id: "spotify", dep: "medios", peso: "secundaria",
      etiquetas: ["Audio", "Spotify", "Compra automatizada"],
      titular: "Spotify vende más por compra automatizada y menos por venta directa",
      corto: "Spotify crece 9 % en publicidad por compra automatizada",
      cuerpo: "En el tercer trimestre, los ingresos publicitarios de Spotify llegaron a €482 millones, 9 % más a moneda constante. Los canales automatizados sumaron €91 millones frente al año anterior, mientras que el canal de venta directa cayó €53 millones. Según PPC Land, el CFO dijo que la compra por subasta ya está «up to 40 %» del total, aunque un gráfico de la empresa muestra cerca de un tercio en doce meses.",
      cifras: [
        { v: "€482M", t: "ingresos publicitarios del trimestre, +9 % a moneda constante" },
        { v: "−€53M", t: "caída del canal de venta directa" },
        { v: "+€91M", t: "aporte de los canales automatizados" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/spotifys-direct-ad-sales-fall-eur53m-as-automated-buying-lifts-growth-to-9/" }]
    },

    {
      id: "absolut", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Absolut", "Música"],
      titular: "Absolut firma dos años con Charli XCX y la empieza a presentar entre dos shows",
      corto: "Absolut firma dos años con Charli XCX",
      cuerpo: "Absolut, de Pernod Ricard, anunció el 20 de octubre una alianza de dos años con Charli XCX, que incluye ediciones limitadas, objetos de colección, copas personalizadas y eventos para fans. Antes del anuncio, durante un fin de semana de shows en Los Ángeles, «ABSOLUT XCX» apareció en pantalla y algunos bailarines usaron camisetas con «I ♥️ Absolut». Después llegaron fotos en blanco y negro de la artista tras bambalinas con la misma camiseta. Ella dijo que la marca quería hacer algo «un poco caótico».",
      cifras: [
        { v: "2 años", t: "duración de la alianza" },
        { v: "20 oct", t: "fecha del anuncio" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La alianza no empezó con un comunicado, empezó con pistas dentro del show y dejó que el público las encontrara primero. Una pista bien puesta vale más que un anuncio largo.",
      hacer: "En la próxima lluvia de ideas, esboza un anuncio de talento en tres pasos para un cliente: una pista en un evento, una foto que la complete y la confirmación oficial. Decide qué pieza regalas primero a la comunidad.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/charli-xcx-joins-absolut-for-chaotic-two-year-partnership/" }]
    },
    {
      id: "applemusic", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Rebranding", "Apple Music", "TBWA"],
      titular: "Apple Music estrena identidad «hecha de sonido»",
      corto: "Apple Music estrena identidad hecha de sonido",
      cuerpo: "Apple Music presentó una nueva identidad de marca bajo el concepto «made by sound», creada con TBWA\\Media Arts Lab, el productor Fred Again y la empresa de diseño sonoro Nest Acoustics. El equipo puso música a través de un transductor sobre una capa de aceite mineral y filmó las ondas pa’ construir lo visual. Incluye una firma audiovisual corta y un logo con una versión personalizada de SF Pro en minúsculas. Llega tras críticas en redes por el ícono blanco y negro de la app.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/apple-music-rebrands-with-a-look-made-by-sound/" }]
    },

    {
      id: "deloitte", dep: "planning", peso: "principal",
      etiquetas: ["Consumidor", "Navidad", "Deloitte"],
      titular: "Deloitte: el 28 % de los compradores ya habrá gastado su presupuesto navideño al terminar octubre",
      corto: "28 % gastará su presupuesto navideño en octubre",
      cuerpo: "Según la encuesta anual de Deloitte, hecha a 4,000 consumidores de EE. UU. entre el 26 de agosto y el 10 de septiembre, el 28 % espera haber agotado su presupuesto navideño al terminar octubre, el nivel más alto en seis años. El 22 % piensa empezar sus compras antes que el año pasado y el 42 % participará en eventos de ofertas de octubre. Los llamados «buscadores de valor» son el 38 % y planean gastar 12 % más; el 65 % de ellos ya compra en octubre. Deloitte lo resume como «a marathon».",
      cifras: [
        { v: "28 %", t: "agotará su presupuesto navideño pa’ finales de octubre, el mayor nivel en seis años" },
        { v: "42 %", t: "participará en ofertas de octubre" },
        { v: "38 %", t: "son «buscadores de valor» y gastarán 12 % más" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Es una encuesta de EE. UU., así que no se puede tomar como cifra dominicana. Pero marca la dirección: la temporada se alarga y el consumidor compara valor antes de gastar.",
      hacer: "Esta semana, pregúntale a cada cliente con temporada de Q4 si su calendario arranca en octubre o en noviembre, y adelanta la fecha de las ofertas y de la creatividad de valor si hace falta.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/nearly-30-of-holiday-budgets-expected-to-be-spent-by-the-end-of-october/" }]
    },
    {
      id: "aioverviews", dep: "planning", peso: "secundaria",
      etiquetas: ["Búsqueda", "Google", "IA"],
      titular: "Los AI Overviews de Google ya salen en el 88 % de las búsquedas comerciales",
      corto: "AI Overviews llegan al 88 % de búsquedas comerciales",
      cuerpo: "Un estudio de Semrush siguió 400 palabras clave comerciales de EE. UU. en banca, software y comercio electrónico entre septiembre de 2025 y agosto de 2026. La presencia de AI Overviews subió de 45.75 % a 88 %, y a 97.08 % al ponderar por volumen. En las búsquedas con la palabra «reviews», pasó de 30.14 % a 89.04 %. PPC Land advierte que el estudio mide solo cuándo aparecen en escritorio de EE. UU., sin datos de clics ni tráfico.",
      cifras: [
        { v: "88 %", t: "de las palabras clave comerciales siguen con AI Overviews, desde 45.75 %" },
        { v: "89.04 %", t: "en búsquedas con «reviews», desde 30.14 %" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-ai-overviews-reach-88-of-commercial-searches-as-ai-clicks-stay-thin/" }]
    },

    {
      id: "newmexico", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "Meta", "Privacidad"],
      titular: "Un juez de Nuevo México le ordena a Meta pagar US$25,000 millones por violaciones de privacidad",
      corto: "Meta debe pagar US$25,000M en Nuevo México",
      cuerpo: "Un juez de Nuevo México ordenó a Meta pagar US$25,000 millones, tras un veredicto de un jurado que la halló responsable de violaciones de privacidad y de exponer a sabiendas a usuarios del estado a contenido dañino. El juez dijo que la ley estatal habría permitido una sanción de US$219,000 millones. El caso viene del escándalo de Cambridge Analytica en 2018. Meta, que en agosto cerró otro caso por US$18,000 millones, dijo que apelará.",
      cifras: [
        { v: "US$25,000M", t: "monto ordenado por el juez" },
        { v: "US$219,000M", t: "sanción máxima que habría permitido la ley estatal, según el juez" },
        { v: "2018", t: "año del escándalo de Cambridge Analytica que originó el caso" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Las demandas de estados de EE. UU. ya pesan tanto como las multas federales.",
        "Meta apelará, así que el monto final puede cambiar."
      ],
      hacer: "Anota qué datos de cada cliente comparte con Meta (píxel, API de conversiones, listas) y pídele al cliente que confirme quién lo autorizó. Si el cliente opera en EE. UU., avísale a su legal.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-hit-with-25b-fine-over-privacy-breaches/833798/" }]
    },
    {
      id: "safari", dep: "data", peso: "secundaria",
      etiquetas: ["Medición", "Apple", "Identidad"],
      titular: "Apple explica por qué Safari bloquea a empresas de identidad como LiveRamp y UID 2.0",
      corto: "Apple explica el bloqueo de Safari a empresas de identidad",
      cuerpo: "El 19 de octubre Apple publicó en el blog de WebKit su explicación del bloqueo, que alcanza a LiveRamp, ID5, UID 2.0 de The Trade Desk, Permutive y Audigent en iPhone, iPad, Mac y Vision Pro. Apple dice que el correo electrónico reemplazó a las cookies como base del rastreo entre sitios. La personalización con datos propios de un medio no es el objetivo; sí lo son las empresas que cruzan datos entre sitios. Según Digiday, las pruebas mostraron que la mayoría de los dominios de ad tech revisados seguían cargando.",
      cifras: [{ v: "5", t: "empresas de identidad citadas en el bloqueo" }],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/apples-growing-ads-business-puts-its-safari-blocklist-under-scrutiny/" }]
    },

    {
      id: "ytai", dep: "content", peso: "principal",
      etiquetas: ["IA", "YouTube", "Creadores"],
      titular: "YouTube dice que 72 % de quienes suben video usa IA, y muchos se ponen a ellos mismos en la escena",
      corto: "72 % de los creadores usa IA según YouTube",
      cuerpo: "YouTube publicó un informe de su serie Culture & Trends, con investigación de NRG, a casi 700 personas de 14 a 44 años que subieron un video en los últimos 12 meses. El 72 % dice que usa IA en videos o imágenes y el 61 % de los encuestados en EE. UU. dijo estar interesado en usarla pa’ ponerse a sí mismo en el contenido. Entre las tendencias: cambios de vestuario digitales, escenas de cine inmersivas y duplicados de uno mismo. YouTube llama «AI auteurs» a los creadores que arman mundos enteros.",
      cifras: [
        { v: "72 %", t: "de quienes suben contenido usa IA en videos o imágenes" },
        { v: "61 %", t: "en EE. UU. le interesa usar IA pa’ ponerse en el video" },
        { v: "≈700", t: "personas de 14 a 44 años en la encuesta" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Es una encuesta chica, pero muestra pa’ dónde va el formato: el protagonista es la persona misma. Eso sí, poner a personas reales en videos con IA puede confundir, y la marca tiene que decir cuándo es IA.",
      hacer: "Esta semana, propón un formato de «tú en la escena» a un cliente que tenga creadores aliados, con permiso por escrito de la persona y la etiqueta «hecho con IA» bien visible.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-shares-data-on-how-creators-are-using-ai/833657/" }]
    },
    {
      id: "tiktokbf", dep: "content", peso: "secundaria",
      etiquetas: ["TikTok", "Black Friday", "Comercio social"],
      titular: "TikTok comparte su guía pa’ el Black Friday: #holidayshopping subió 263 %",
      corto: "TikTok presenta su guía de Black Friday",
      cuerpo: "TikTok lanzó una serie de videos llamada «Road to Black Friday» con casos de Princess Polly, Dossier y SharkNinja en TikTok Shop. Según la plataforma, el contenido con #holidayshopping subió 263 % de agosto a septiembre de 2026, las ventas de vendedores que hacen lives crecieron 84 % interanual, y TikTok Shop superó los US$500 millones en el fin de semana de Black Friday y Cyber Monday de 2025. Los datos son de TikTok y se refieren al mercado de EE. UU.",
      cifras: [
        { v: "+263 %", t: "contenido de #holidayshopping mes a mes en septiembre" },
        { v: "+84 %", t: "ventas interanuales de vendedores con lives" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-shares-black-friday-cyber-monday-promotion-tips/833546/" }]
    },

    {
      id: "damehombro", dep: "rd", peso: "principal", para: ["content", "creatividad", "medios"],
      etiquetas: ["Música", "Viral", "Bulin 47"], fecha: "24 oct 2026",
      titular: "«Dame hombro» de Bulin 47 se volvió baile mundial, y hasta la primera dama lo bailó",
      corto: "«Dame hombro» de Bulin 47 pega en el mundo",
      cuerpo: "Santo Domingo.— Diario Libre cuenta que «Dame hombro» nació como un reto improvisado en Madrid, cuando el creador colombiano Kevin Wai invitó a Bulin 47 a improvisar con un dembow. El clip se regó por las redes y después salió la versión de estudio, con el productor Breyco En Producidera. Messi, Cristiano Ronaldo, Haaland y Guardiola aparecen en versiones del baile, algunas hechas con IA. Aquí en el patio, la primera dama Raquel Arbaje lo bailó en un evento por el quinto aniversario de ChequéateRD. Diario Libre no da cifras de vistas.",
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Un tema dominicano que da la vuelta al mundo no se queda en la farándula: lo bailan hasta en actividades de salud. Las marcas que lleguen rápido pueden sumarse, pero con respeto al artista y sin colgarse de forma torpe.",
      hacer: "Esta semana, si tu cliente quiere sumarse al baile, revisa con su legal los derechos de la canción y propón una pieza propia (reto, mensaje o aporte) en vez de repetir lo que ya hace todo el mundo.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/10/24/dame-hombro-bulin-47-conquista-el-mundo-con-su-dembow/3699142" }]
    },
    {
      id: "angurria", dep: "rd", peso: "secundaria", para: ["creatividad", "content", "planning"],
      etiquetas: ["Arte", "Mural", "MAC Cosmetics"], fecha: "23 oct 2026 · Bronx",
      titular: "Angurria pinta en el Bronx el mural más alto de EE. UU. con una mujer dominicana de rolos",
      corto: "Angurria pinta el mural más alto de EE. UU.",
      cuerpo: "Nueva York.— El artista dominicano Angurria (Néstor Omar García) pinta «Un MAR de Gente / From Every Shore» en la fachada de una torre de 29 pisos en el sur del Bronx. Mide más de 260 pies de altura y supera el récord de 245 pies de la artista alemana MadC. La obra se inspira en su madre, que peinaba con rolos a las mujeres del barrio en Los Alcarrizos. Fue comisionada por Art Bridge, financiada por MAC Cosmetics y producida por Monumenta.do, de Grupo EPREIL.",
      cifras: [
        { v: "260 pies", t: "de altura del mural, sobre el récord anterior de 245" },
        { v: "29 pisos", t: "tiene la torre donde se pinta" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/10/23/angurria-pinta-en-el-bronx-el-mural-mas-alto-de-estados-unidos/3698644" }]
    },
    {
      id: "pagos", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Banca", "Pagos", "Consumo"], fecha: "24 oct 2026",
      titular: "Moody’s: los pagos electrónicos ganan terreno en Latinoamérica, pero elevan el riesgo de endeudamiento",
      cuerpo: "Un informe de Moody’s Ratings, citado por elDinero, dice que los sistemas de pago de la región están pasando de las transferencias entre personas a plataformas con crédito instantáneo y servicios comerciales. La facilidad de pedir préstamos desde esas plataformas borra la línea entre pagar y endeudarse. Moody’s advierte de riesgo de sobreendeudamiento y mora, además de fraude y suplantación de identidad. Brasil lidera con Pix, que ya permite pagar en cuotas.",
      tocaTitulo: "¿Y eso qué?",
      toca: "El informe es regional, no habla de RD en particular. Pero es una señal para los clientes de banca y comercio: la competencia pasa a ser el crédito en el punto de pago.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/386019/pagos-electronicos-ganan-terreno-en-latinoamerica-pero-elevan-el-riesgo-de-endeudamiento/" }]
    },
    {
      id: "ciclones", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Economía", "BID", "Clima"], fecha: "24 oct 2026",
      titular: "El BID dice que los ciclones pueden pegarle a la economía dominicana por 15 meses",
      cuerpo: "Santo Domingo.— Según una entrevista de elDinero con Tomás Bermúdez, del BID, los ciclones tropicales podrían causar pérdidas cercanas al 1.5 % del PIB dominicano y sus efectos económicos podrían durar hasta 15 meses. El país cuenta con una Facilidad de Crédito Contingente de hasta US$400 millones. El BID aclara que son cifras de impacto potencial, no una pérdida anual fija.",
      cifras: [
        { v: "1.5 %", t: "del PIB: pérdida potencial por ciclones" },
        { v: "15 meses", t: "duración posible de los efectos" },
        { v: "US$400M", t: "crédito contingente disponible" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning: el clima es un riesgo de calendario. Los clientes con ventas por temporada necesitan un plan B de comunicación.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/386004/los-ciclones-pueden-afectar-la-economia-dominicana-durante-15-meses/" }]
    }
  ],

  pizarra: ["indies", "absolut", "deloitte", "newmexico", "ytai", "damehombro"],

  frases: [
    { dep: "medios", texto: "Una agencia pasó el umbral de US$100,000 al mes en The Trade Desk y sigue pagando 17 % a TTD y 12 % a su revendedor.", uso: "para conversaciones de comisiones y transparencia" },
    { dep: "creatividad", texto: "Absolut presentó a Charli XCX con pistas dentro del show antes del comunicado: dejó que el público lo descubriera primero.", uso: "para conversaciones de anuncio de talento" },
    { dep: "planning", texto: "El 28 % de los compradores espera haber agotado su presupuesto navideño al terminar octubre, el nivel más alto en seis años.", uso: "para conversaciones de calendario de temporada" },
    { dep: "data", texto: "Un juez de Nuevo México le ordenó a Meta pagar US$25,000 millones, y la empresa dice que apelará.", uso: "para conversaciones de privacidad y riesgo" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Comisiones dobles en los DSP" },
      { id: "creatividad", texto: "Absolut y Charli XCX" },
      { id: "planning", texto: "El 28 % ya gastó su Navidad" },
      { id: "data", texto: "Meta y los US$25,000M de Nuevo México" },
      { id: "content", texto: "72 % de los creadores usa IA" },
      { id: "rd", texto: "Zoom a RD: «Dame hombro»" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "indies", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "deloitte", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Según Deloitte, el 28 % de los compradores espera agotar su presupuesto navideño al terminar octubre. Revisa si el calendario de Q4 de tu cliente arranca ahora o en noviembre."
    },
    data: {
      tipo: "secreto", nota: "newmexico", titulo: "Destapa el expediente",
      texto: "Un juez de Nuevo México ordenó a Meta pagar [[US$25,000 millones]] por violaciones de privacidad, aunque la ley estatal habría permitido [[US$219,000 millones]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "damehombro", titulo: "La pregunta del patio",
      p: "¿Dónde nació el reto de «Dame hombro»?",
      opciones: ["En Madrid, con el creador Kevin Wai", "En Santo Domingo, en un estudio", "En Miami, en un concierto"], correcta: 0,
      explicacion: "Diario Libre cuenta que nació como una improvisación en Madrid, cuando Kevin Wai invitó a Bulin 47 a improvisar sobre un dembow."
    }
  }
};
