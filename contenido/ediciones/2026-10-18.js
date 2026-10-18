/*
  El Pulso Publicitario · edición N.º 291 · 18 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 291,
  fechaISO: "2026-10-18",
  fecha: "Domingo 18 de octubre 2026",
  fechaCorta: "18 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Esta semana las plataformas vendieron atención por horas, y quien sabe qué medir antes de comprar no paga de más.",
    largo: "Domingo de atención en venta. Meta ofrece ventanas de 3 a 24 horas con alcance «como de TV», Snap presume su mapa como vitrina pa’ negocios, TikTok apuesta por los microdramas y Cloudflare empieza a calificar la conducta de los bots. Aquí en el patio, Mastercard dice que solo el 6 % de los comercios acepta pagos digitales. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del miércoles.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del miércoles.",
    porDep: {
      medios: "Antes de comprar una ventana de alcance, pregunta cómo se va a medir. Un formato nuevo sin medición clara es una apuesta.",
      creatividad: "Una idea que invita a la gente a participar rinde más que un anuncio que solo se mira. Pringles lo entendió con una urna.",
      planning: "Un estudio de una plataforma sobre su propia plataforma sirve de pista, no de prueba. Contrástalo con otra fuente.",
      data: "Las reglas de los bots y los acuerdos de datos se están moviendo. Anota qué datos de tus clientes quedan expuestos y a quién.",
      content: "Los formatos de serie corta están pegando. Si tu cliente cuenta historias, pruébalo en pequeño antes de montar algo grande.",
      rd: "Si solo el 6 % de los comercios acepta pagos digitales, hay una conversación pendiente con los clientes que venden en tienda."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Meta vende ventanas de 3 a 24 horas con alcance «como de TV» y prueba el primer lugar del Feed · Amazon Ads explica la puja fija contra la dinámica sin mostrar resultados" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Pringles ofrece una urna de lata pa’ un fanático · Polymarket llama a Kathryn Bigelow pa’ su primera campaña política" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Snap dice que su mapa mueve visitas a negocios, con una encuesta de más de 17,000 personas · Snapchat publica su guía navideña" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Cloudflare empieza a calificar la conducta de los bots verificados · Texas y Temu firman un acuerdo por US$3 millones y datos en servidores de EE. UU." },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "TikTok firma con Made By Us Studios pa’ más microdramas · Facebook te deja ajustar tu feed escribiendo lo que quieres ver" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "superburst", dep: "medios", peso: "principal",
      etiquetas: ["Meta", "Alcance", "Formatos"],
      titular: "Meta te vende una ventana de 3 a 24 horas con alcance «como de TV» y prueba el primer lugar del Feed",
      corto: "Meta vende ventanas de alcance de 3 a 24 horas",
      cuerpo: "En su cumbre de construcción de marca del 15 de octubre, Meta presentó tres novedades. «Ads Super Burst» deja reservar una ventana de 3 a 24 horas pa’ llegar a la audiencia con «alcance como de TV» y con exclusividad de categoría, así que nadie más de tu categoría puede comprar esa ventana. Meta lo pinta como una opción de gama alta, pa’ lanzamientos o noches de premios. «First Impression Ads» prueba poner un anuncio en la primera posición del Feed en EE. UU., con una marca por día. Y «Aggregated View Time» prueba reportar la exposición acumulada de un anuncio de video en un período. Además, Meta amplía los Reels Trending Ads: ya son 15 temas estándar, con Hogar y Jardín y una categoría en español.",
      cifras: [
        { v: "3–24 h", t: "duración de la ventana de Ads Super Burst, con exclusividad de categoría" },
        { v: "1 marca/día", t: "en la prueba de First Impression Ads en EE. UU." },
        { v: "15", t: "temas estándar en Reels Trending Ads, con una categoría en español" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Es comprar atención por horas, como en TV, pero dentro de Meta. El artículo no da precios, ni fechas, ni resultados de las pruebas, así que por ahora es un formato pa’ conocer, no pa’ presupuestar.",
      hacer: "Esta semana, pedirle al rep de Meta precios, disponibilidad en nuestra región y cómo se mide Aggregated View Time, y pensar qué cliente tiene un lanzamiento grande en Q4 pa’ evaluar Super Burst.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-offers-enhanced-ad-campaign-exposure/833171/" }]
    },
    {
      id: "adlab", dep: "medios", peso: "secundaria",
      etiquetas: ["Amazon Ads", "Pujas", "Sponsored Products"],
      titular: "Amazon Ads explica puja fija contra dinámica, pero no enseña ni un resultado",
      corto: "Amazon Ads compara puja fija y dinámica",
      cuerpo: "El 15 de octubre, Amazon Ads publicó un episodio de 3 minutos y 43 segundos de su serie Ad Lab que compara la puja fija con la dinámica (sube y baja) en campañas de Sponsored Products. Usa dos campañas hipotéticas idénticas y no muestra datos de ningún experimento. Con la fija, la puja se queda en lo que pones; con la dinámica, Amazon la sube o la baja según la probabilidad de conversión. La conclusión: ninguna es mejor siempre, depende de cuánta automatización o control quieras. Recomienda comparar CPC, tasa de conversión, ACOS y ROAS durante unas semanas, no en un solo día.",
      cifras: [
        { v: "4", t: "métricas pa’ comparar: CPC, conversión, ACOS y ROAS" },
        { v: "3:43", t: "duración del episodio, sin datos de experimentos" }
      ],
      toca: "Si manejas Sponsored Products, la guía confirma lo básico: prueba en paralelo y juzga por semanas. Pero es un video explicativo, no un estudio, así que los resultados los pone tu cuenta.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-ad-lab-names-four-bidding-metrics-but-publishes-no-test-results/" }]
    },

    {
      id: "pringles", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Pringles", "BBDO"],
      titular: "Pringles ofrece a un fanático un descanso final en una urna con forma de lata",
      corto: "Pringles ofrece una urna de lata a un fanático",
      cuerpo: "Pringles lanzó «Once You Drop», su entrega de Halloween dentro de la campaña «Once You Pop, the Pop Don’t Stop», creada por BBDO New York y Weber Shandwick pa’ Mars Snacking North America. Protagoniza «Dan the Funeral Man», creador de TikTok y director funerario de verdad. En el anuncio revisa un ataúd y afirma que el inventor de la lata fue enterrado en su propio invento. Los fanáticos firman en línea un compromiso llamado «Last Will and Taste-Ament» pa’ optar por una urna de aleación metálica con forma de lata. Va por redes y video en línea. El artículo no da fecha de publicación, y sobre el premio dice dos cosas distintas: «200 años de Pringles» y «snacks pa’ toda la vida (o mejor dicho, dos)».",
      cifras: [
        { v: "13–22 oct", t: "ventana de participación en onceyoudrop.com" },
        { v: "1", t: "ganador, que se anunciará cerca de Halloween" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La idea funciona porque convierte el humor oscuro en una acción sencilla: firmar un compromiso. Además se apoya en un creador con un oficio real, no solo en un nombre conocido.",
      hacer: "Esta semana, en la sesión creativa, tomar un cliente y esbozar una mecánica de participación de una sola acción (firmar, votar, escoger) ligada a un creador con un oficio real y a una fecha de temporada.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/pringles-offers-one-die-hard-fan-a-final-resting-place-in-a-branded-urn/" }]
    },
    {
      id: "polymarket", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Polymarket", "Dirección"],
      titular: "Polymarket llama a Kathryn Bigelow pa’ dirigir su primera campaña política en EE. UU.",
      corto: "Polymarket contrata a Kathryn Bigelow",
      cuerpo: "Polymarket debutó el 14 de octubre su primera campaña política en EE. UU., tres semanas antes de las elecciones. La produjo Smuggler. Kathryn Bigelow, directora ganadora del Óscar, dirigió dos de los anuncios, y el tercero lo dirigió el trío argentino Pantera. Dramatizan tres escenas ficticias ligadas al costo de la vida: una trabajadora de campaña que se vuelve denunciante y una despedida de soltera que se agria por los precios. El artículo, que sigue de paga después de la introducción, no da presupuesto, canales ni resultados.",
      toca: "Sirve de referente de craft: tres escenas de ficción con director de cine pa’ hablar de algo cotidiano, el costo de la vida. No es un dato de resultados, es un ejemplo de producción.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/polymarket-taps-kathryn-bigelow-to-court-a-wider-audience-in-midterm-ad-blitz/" }]
    },

    {
      id: "snapmap", dep: "planning", peso: "principal",
      etiquetas: ["Snap", "Descubrimiento", "Encuesta"],
      titular: "Snap dice que su mapa sirve pa’ descubrir negocios, pero solo 29 % lo usa así",
      corto: "Snap vende su mapa como vitrina pa’ negocios",
      cuerpo: "Snap publicó un estudio sobre Snap Map con una encuesta a más de 17,000 usuarios de mapas digitales de 13 a 44 años en EE. UU., Canadá, Reino Unido, Francia, Alemania y Arabia Saudita. Según Snap, el 76 % usa el mapa pa’ ver dónde están sus amistades, el 27 % pa’ coordinar encuentros y el 29 % pa’ descubrir negocios. También dice que los consumidores tienen 2.9 veces más probabilidad de decir que descubrieron sus negocios favoritos en Snapchat que en otras redes. Snap Map llega a 450 millones de usuarios activos al mes. Social Media Today anota que con esas cifras la mayoría no lo usa pa’ descubrir negocios, que Google Business Profile podría rendir más y que Snap no da datos de visitas ni de retorno de Promoted Places.",
      cifras: [
        { v: "17,000+", t: "personas en la encuesta de Snap, de 13 a 44 años en 6 países" },
        { v: "29 %", t: "usa Snap Map pa’ descubrir negocios; 76 % pa’ ver a sus amistades" },
        { v: "2.9×", t: "más probable decir que descubrió su negocio favorito en Snapchat" },
        { v: "450 M", t: "usuarios activos al mes de Snap Map, según Snap" }
      ],
      hacer: "Esta semana, antes de meter Promoted Places en un plan, revisar con los clientes con tienda física si su ficha en Google Business Profile está al día, y pedirle al rep de Snap datos de visitas pa’ comparar.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/snap-reports-on-snap-map-data-for-brands/833065/" }]
    },
    {
      id: "snapholiday", dep: "planning", peso: "secundaria",
      etiquetas: ["Navidad", "Snapchat", "Temporada"],
      titular: "Snapchat publica su guía navideña «Wrapped in the Chat»",
      corto: "Snapchat publica su guía navideña",
      cuerpo: "Snapchat publicó «Wrapped in the Chat», una guía de 8 páginas sobre compras navideñas. Argumenta que comprar en Navidad ya no es una acción aislada del consumidor, sino que lo moldea la validación entre amistades. Incluye estadísticas, cuándo la gente busca recomendaciones de regalos, cómo usar sus formatos de anuncio y una lista de planificación. Social Media Today no reproduce las cifras, que van en imágenes, ni dice de dónde salen.",
      toca: "Es material de la propia plataforma, así que úsalo como pista y no como dato independiente. Pide la guía completa antes de citar cifras a un cliente.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/snapchat-publishes-2026-holiday-marketing-guide/832800/" }]
    },

    {
      id: "cloudflare", dep: "data", peso: "principal",
      etiquetas: ["Bots", "Cloudflare", "IA"],
      titular: "Cloudflare empieza a calificar la conducta de los bots verificados, incluidos los de IA",
      corto: "Cloudflare calificará la conducta de los bots",
      cuerpo: "En una publicación del 16 de octubre, Cloudflare describió que seguirá vigilando a los bots verificados después de aprobarlos. Revisará si obedecen robots.txt y si bajan el ritmo cuando un sitio responde con errores HTTP 429. Los resultados irán a «bandas de confianza» que Cloudflare planea publicar en Radar y que los clientes podrán usar luego como umbrales. Cuentan las conductas repetidas, no una falta aislada. En 2025 Cloudflare sacó el bot de Perplexity de su lista de verificados. La publicación no da fecha pa’ Radar, número de bandas, período de observación ni qué pasa con un bot mal calificado. PPC Land cita dos datos de apoyo: HasData halló que 39.5 % de los sitios que bloquean a GPTBot igual le sirvieron páginas, y Microsoft Clarity midió 4.56 % de violaciones de robots.txt.",
      cifras: [
        { v: "16 oct", t: "fecha de la publicación de Cloudflare sobre bandas de confianza" },
        { v: "39.5 %", t: "de los sitios que bloquean GPTBot le sirvieron páginas, según HasData" },
        { v: "4.56 %", t: "tasa de violación de robots.txt medida por Microsoft Clarity" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "El control de los bots de IA se está mudando de «pedir permiso» en robots.txt a que alguien los califique por lo que hacen.",
        "Todavía no hay fechas ni umbrales, así que lo que cuenta es lo que Cloudflare publique, no lo que insinúe."
      ],
      hacer: "Esta semana, preguntarle a cada cliente que usa Cloudflare qué regla tiene hoy pa’ los bots de IA en su sitio, y anotar cuál sería su decisión cuando salgan las bandas de confianza.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/deepseek-sets-a-0-75-web-search-price-as-cloudflare-grades-bots-on-conduct/" }]
    },
    {
      id: "temu", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Texas", "Temu"],
      titular: "Texas y Temu firman un acuerdo: US$3 millones y datos de texanos en servidores de EE. UU.",
      corto: "Texas y Temu firman acuerdo por US$3 millones",
      cuerpo: "Texas y los operadores de Temu firmaron el 15 de octubre un acuerdo final, que se publicó el 16. Temu, que niega haber hecho algo malo, debe pagar US$3 millones en 30 días, guardar los datos de texanos en servidores de EE. UU. y restringir el acceso desde China a datos identificables, con excepciones. Las auditorías anuales llevan una penalidad de US$8 millones por cada incumplimiento. Según PPC Land, la protección cubre solo a consumidores de Texas, Temu escoge y paga a sus auditores sin que el estado los apruebe y la fecha de la firma está en blanco, así que los plazos no están confirmados.",
      cifras: [
        { v: "US$3 M", t: "pago de Temu en 30 días" },
        { v: "US$8 M", t: "penalidad por cada falla en las auditorías anuales" }
      ],
      toca: "Muestra qué piden hoy los reguladores: dónde se guardan los datos y quién tiene acceso. Pa’ clientes con apps o tiendas en línea, vale revisar esas dos preguntas en su operación.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/deepseek-sets-a-0-75-web-search-price-as-cloudflare-grades-bots-on-conduct/" }]
    },

    {
      id: "microdrama", dep: "content", peso: "principal",
      etiquetas: ["TikTok", "Microdramas", "Creadores"],
      titular: "TikTok se alía con Made By Us Studios pa’ más microdramas, con creadores como protagonistas",
      corto: "TikTok firma pa’ más microdramas con creadores",
      cuerpo: "TikTok anunció el 14 de octubre una alianza con Made By Us Studios, que producirá una nueva tanda de microdramas con derechos exclusivos pa’ TikTok y su app PineDrama. La primera serie es un thriller romántico de venganza con la creadora Hannah Stocking, y la segunda, de terror, con el creador Adam Rose. TikTok cita su alianza previa con HOORAE, de Issa Rae, y dice que «Screen Time», estrenada en abril, suma casi 580 millones de vistas en el mundo. Esa cifra es de TikTok y el artículo no la verifica. No se informan montos, fechas de estreno, ni cuántas series incluye la tanda.",
      cifras: [
        { v: "~580 M", t: "vistas globales de «Screen Time» desde abril, según TikTok" },
        { v: "2", t: "series anunciadas: un thriller de venganza y una de terror" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "El formato de serie corta con creadores como protagonistas está ganando espacio en TikTok. No hay fechas ni disponibilidad fuera de EE. UU., así que esta semana es para probar el formato, no para prometerlo.",
      hacer: "Esta semana, escoger un cliente con historia que contar y escribir una mini serie de tres episodios de 30 a 60 segundos pa’ probar el formato con un creador local.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-inks-microdrama-partnership-with-made-by-us-studios/833055/" }]
    },
    {
      id: "fbalgo", dep: "content", peso: "secundaria",
      etiquetas: ["Facebook", "Algoritmo", "IA"],
      titular: "Facebook te deja ajustar tu feed escribiendo lo que quieres ver",
      corto: "Facebook deja ajustar el feed con texto",
      cuerpo: "Facebook amplió su control «Tu algoritmo» con una opción en lenguaje natural. Los usuarios pueden agregar o quitar temas que el sistema asocia con sus intereses y escribir sus preferencias en un chatbot, en el feed principal y en Reels, con cambios inmediatos. Facebook dice que usa modelos de lenguaje pa’ interpretar lo que la gente escribe. Social Media Today (13 de octubre) anota que casi nadie cambia sus ajustes, y no hay cifras de uso, ni fecha de despliegue o disponibilidad.",
      toca: "Si la gente empieza a decirle a Facebook qué no quiere ver, el contenido tiene que ganarse el lugar. Sin datos de uso, no hay que cambiar el calendario, pero conviene vigilarlo.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/facebook-adds-plain-language-algorithm-controls/832910/" }]
    },

    {
      id: "mastercard", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Banca", "Pagos", "Consumo"], fecha: "15 oct 2026",
      titular: "Mastercard: solo el 6 % de los comercios dominicanos acepta pagos digitales, y lanza la tarjeta World Legend",
      corto: "Mastercard: solo 6 % de comercios acepta pagos digitales",
      cuerpo: "Santo Domingo.— Tomás Alonso Martínez, ejecutivo principal de Mastercard en RD, dijo a elDinero durante el lanzamiento de la tarjeta World Legend que ampliar la aceptación de pagos digitales requiere un esfuerzo conjunto de bancos, emisores, comercios y Gobierno. Según él, «solo el 6 % de los comercios y vendedores acepta medios de pago digitales». World Legend es una tarjeta premium, parte de The Mastercard Collection, por encima de Mastercard Black, que da acceso a restaurantes y eventos exclusivos. Mastercard dice que RD es el primer mercado del Caribe y Centroamérica en presentarla. Una encuesta de la compañía indica que 60 % del segmento premium valora más las experiencias que los bienes materiales. La alianza con Casa de Campo ofrece beneficios en hotel, restaurantes, golf, spa y eventos. No se explica la metodología de ninguna de las dos cifras.",
      cifras: [
        { v: "6 %", t: "de los comercios que acepta pagos digitales, según Mastercard RD" },
        { v: "60 %", t: "del segmento premium valora más las experiencias, según encuesta de Mastercard" },
        { v: "1.º", t: "mercado del Caribe y Centroamérica en estrenar World Legend, según Mastercard" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Dos pistas pa’ las cuentas de banca y comercio: hay un hueco grande en pagos digitales y el segmento premium compra experiencias. Las dos cifras son de Mastercard y sin metodología, así que se usan como punto de partida.",
      hacer: "Esta semana, llevarles a los clientes de banca y comercio una conversación sobre pagos digitales en tienda y, pa’ el segmento premium, una idea de campaña basada en experiencias, aclarando que las cifras son de Mastercard.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385038/mastercard-plantea-ampliar-la-aceptacion-de-pagos-digitales-en-rd/" }]
    },
    {
      id: "houston", dep: "rd", peso: "secundaria", para: ["medios", "planning"],
      etiquetas: ["Turismo", "Mitur", "Roadshow"], fecha: "16 oct 2026",
      titular: "Collado lleva el roadshow número 124 a Houston: 200 asistentes y 35,000 agentes en DO Travel Rewards",
      corto: "Collado promueve RD ante agentes en Houston",
      cuerpo: "Houston.— El ministro de Turismo, David Collado, encabezó la edición 124 de los roadshows internacionales pa’ promover el país, con más de 200 asistentes entre agentes de viajes, touroperadores y representantes de aerolíneas. Según el artículo, Houston ocupa el quinto lugar entre los mercados prioritarios de la estrategia de promoción y la plataforma DO Travel Rewards tiene más de 35,000 agentes registrados. La nota no trae cifras de turistas desde Houston, acuerdos, rutas nuevas ni cuántos agentes están activos.",
      cifras: [
        { v: "124", t: "roadshows internacionales de Mitur" },
        { v: "35,000+", t: "agentes de viajes registrados en DO Travel Rewards" }
      ],
      toca: "Pa’ medios y planning de clientes de turismo, es la señal de que Mitur sigue promoviendo mercados de EE. UU. más allá de Miami y Nueva York. No hay datos de resultados, así que se sigue.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385119/collado-promueve-a-republica-dominicana-como-destino-turistico-ante-agentes-de-viajes-en-houston/" }]
    },
    {
      id: "nostalgia", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Artesanía", "Identidad", "Tendencia"], fecha: "13 oct 2026",
      titular: "La nostalgia por lo dominicano se vuelve negocio: una greca pintada a mano y otras piezas del patio",
      corto: "La nostalgia dominicana se vuelve artesanía",
      cuerpo: "Santo Domingo.— elDinero perfila a Lotys Acevedo, de Lotideas Espacio Artesanal, que convierte objetos cotidianos dominicanos, como la greca, un colador de tela con imágenes de hombres criollos y una taza de esmalte, en artesanía pintada a mano pa’ turistas y dominicanos en el exterior. La greca es su producto más vendido, con pedido mínimo de 50 unidades por tienda. Su equipo es de cinco a seis mujeres y ha participado en ferias en Berlín, Milán, Dominica y Colombia. El reportaje se apoya solo en su testimonio: no trae ventas, precios ni datos de mercado.",
      cifras: [
        { v: "50", t: "unidades de pedido mínimo por tienda de la greca" },
        { v: "5–6", t: "mujeres en el equipo" }
      ],
      toca: "Es una historia visual de identidad con objetos que todo el mundo reconoce. Sirve de referente pa’ contenido de marcas locales, sin olvidar que es un solo caso y sin cifras de mercado.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/384719/asi-la-nostalgia-por-lo-dominicano-se-convirtio-en-negocio/" }]
    }
  ],

  pizarra: ["superburst", "pringles", "snapmap", "cloudflare", "microdrama", "mastercard"],

  frases: [
    { dep: "medios", texto: "Meta ya te vende una ventana de 3 a 24 horas con alcance como de TV, pero todavía sin precios ni resultados publicados.", uso: "para conversaciones de formatos nuevos y presupuesto" },
    { dep: "creatividad", texto: "Pringles no pide que veas el anuncio: te pide que firmes pa’ que te entierren en una lata.", uso: "para conversaciones de mecánicas de participación" },
    { dep: "planning", texto: "Snap dice que su mapa sirve pa’ descubrir negocios, pero solo el 29 % lo usa así: el dato es de la plataforma, no de un tercero.", uso: "para conversaciones de estudios de plataformas" },
    { dep: "data", texto: "Cloudflare dejó de preguntar si los bots piden permiso y empezó a calificar lo que hacen.", uso: "para conversaciones de bots de IA y contenido" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Ventanas de alcance en Meta" },
      { id: "creatividad", texto: "La urna de Pringles" },
      { id: "planning", texto: "El mapa de Snap y los negocios" },
      { id: "data", texto: "Cloudflare califica a los bots" },
      { id: "content", texto: "Microdramas en TikTok" },
      { id: "rd", texto: "Zoom a RD: solo 6 % de comercios acepta pagos digitales" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "superburst", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "snapholiday", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Snapchat publicó su guía navideña «Wrapped in the Chat»: dice que comprar en Navidad lo moldea la validación entre amistades. Pídela completa antes de citar cifras."
    },
    data: {
      tipo: "secreto", nota: "temu", titulo: "Destapa el expediente",
      texto: "Texas y Temu firmaron un acuerdo: Temu debe pagar [[US$3 millones]] en 30 días y guardar los datos de texanos en [[servidores de EE. UU.]]."
    },
    rd: {
      tipo: "pregunta", nota: "mastercard", titulo: "La pregunta del patio",
      p: "Según Mastercard RD, ¿qué porcentaje de los comercios acepta pagos digitales?",
      opciones: ["6 %", "16 %", "60 %"],
      correcta: 0,
      explicacion: "Es el 6 %. El 60 % es otro dato: el porcentaje del segmento premium que, según una encuesta de Mastercard, valora más las experiencias que los bienes."
    }
  }
};
