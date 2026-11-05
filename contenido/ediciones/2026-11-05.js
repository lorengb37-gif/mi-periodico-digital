/*
  El Pulso Publicitario · edición N.º 309 · 5 de noviembre de 2026
*/
window.EDICION = {
  numero: 309,
  fechaISO: "2026-11-05",
  fecha: "Jueves 5 de noviembre 2026",
  fechaCorta: "5 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Más volumen no es más resultado: antes de mover presupuesto, pídele a cada plataforma el dato que prueba que el número se traduce en ventas.",
    largo: "Google tiene más búsquedas, pero su AI Mode todavía monetiza menos; Reddit crece en ingresos mientras pierde usuarios en EE. UU.; Amazon dice que Alexa for Shopping ya pasó los 400 millones de clientes, y Meta le paga a creadores pa’ que suban videos largos a Instagram. Aquí en el patio, la gente se prepara pa’ el Viernes Negro y la Navidad. El consejo: esta semana escoge un canal del plan, pídele al rep el dato de resultado (no solo de alcance) y llévalo a la reunión con el cliente.",
    corto: "Esta semana pídele a un rep de plataforma el dato de resultados, no solo de alcance, y llévalo al cliente.",
    porDep: {
      medios: "Cuando suben las búsquedas pero baja lo que rinde cada una, revisa el costo por resultado antes de ampliar presupuesto.",
      creatividad: "Abrirle la puerta al público puede salir bien o mal. Define reglas claras antes de lanzar un concurso.",
      planning: "Los ingresos de una plataforma no son lo mismo que sus usuarios. Mira las dos cifras antes de planificar alcance.",
      data: "Revisa que los sitios de tus clientes respeten la señal de privacidad GPC antes de que alguien te lo pregunte.",
      content: "Un pago a creadores no garantiza que el formato pegue. Prueba el video largo con poco presupuesto antes de apostar.",
      rd: "En Navidad el cliente quiere vender, pero el consumidor ya se está cuidando del gasto. Habla de valor, no solo de descuento."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Google: más búsquedas, pero AI Mode monetiza menos · Alexa for Shopping pasa los 400 millones de clientes" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Svedka le pide al público su anuncio del Super Bowl, con US$500,000 de premio" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Reddit sube ingresos 53 %, pero pierde usuarios en EE. UU. · Disney estrena su Super Brand Day en TikTok Shop" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Un estudio halla que 76 % de los sitios con rastreo no respeta del todo la señal GPC" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Instagram le paga a creadores por videos de hasta 90 minutos" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Viernes Negro y Navidad: llaman a comprar con presupuesto · Raphy D’Oleo estrena «Panorama Navideño» en radio · La RAE suma motoconcho al diccionario · RD en la WTM de Londres" }
  },

  notas: [
    {
      id: "googleai", dep: "medios", peso: "principal",
      etiquetas: ["Google", "AI Mode", "Búsqueda"],
      titular: "Google tiene más búsquedas que nunca, pero su AI Mode todavía monetiza menos",
      corto: "Google: más búsquedas, AI Mode monetiza menos",
      cuerpo: "Según el Ad Tech Briefing de Digiday, Alphabet reportó el 28 de octubre ingresos de casi US$127,600 millones, 25 % más que hace un año, y las búsquedas crecieron al ritmo anual más rápido en cinco años. Los ejecutivos reconocieron que AI Mode monetiza a una tasa menor, y Google planea ampliar los anuncios en AI Mode a otros países y lanzar anuncios de varios turnos en EE. UU. Las consultas en AI Mode son, en promedio, tres veces más largas que las tradicionales.",
      cifras: [
        { v: "+25 %", t: "ingresos de Alphabet vs. hace un año, casi US$127,600 millones" },
        { v: "3 veces", t: "más largas que una búsqueda tradicional son las consultas en AI Mode, según Pichai" },
        { v: "US$63,350 millones", t: "ingresos de búsqueda y otros, +12 %" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Hay más búsquedas, pero cada una rinde menos mientras los formatos de anuncios en AI Mode maduran. Pa’ medios, toca vigilar el costo por resultado y no ampliar presupuesto solo porque sube el volumen.",
      hacer: "Esta semana, pedirle al rep de Google el detalle de cuánto de tu inversión de search llega a AI Mode y qué métricas de resultado entrega, antes de cerrar el plan del primer trimestre.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/ad-tech-briefing-googles-ai-reckoning/" }]
    },
    {
      id: "alexa", dep: "medios", peso: "secundaria",
      etiquetas: ["Amazon", "Retail media", "IA"],
      titular: "Alexa for Shopping pasa los 400 millones de clientes y Amazon la quiere como su agente de compras",
      corto: "Alexa for Shopping pasa los 400 millones",
      cuerpo: "Amazon dijo que más de 400 millones de clientes usaron Alexa for Shopping en los últimos 12 meses, frente a 350 millones a fines de julio, según Digiday. Andy Jassy afirmó que quienes la usan gastan 50 % más. Los ingresos por publicidad de Amazon crecieron 11 % en el tercer trimestre, frente a 24 % un año antes. Amazon bloquea a agentes de compras de terceros, como ChatGPT, de su sitio.",
      cifras: [
        { v: "400 millones", t: "de clientes usaron Alexa for Shopping en 12 meses" },
        { v: "+11 %", t: "crecimiento de publicidad en Amazon en el tercer trimestre, vs. 24 % un año antes" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El asistente se vuelve un lugar donde se decide la compra. El artículo no dice si habrá anuncios dentro de él, pero es un punto a vigilar pa’ clientes que venden en Amazon.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/amazon-says-more-than-400m-customers-have-used-alexa-for-shopping-in-the-last-12-months/" }]
    },

    {
      id: "svedka", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Svedka", "Super Bowl"],
      titular: "Tras el lío por su anuncio con IA, Svedka le pide al público que haga el del Super Bowl",
      corto: "Svedka le pide al público su anuncio del Super Bowl",
      cuerpo: "Svedka, la vodka de Sazerac, invita al público a crear un comercial de 15 segundos pa’ su cóctel listo pa’ tomar Vodka Water, según Marketing Dive. Las propuestas se reciben en un micrositio hasta el 1 de diciembre y el ganador se lleva US$500,000. La marca da un kit digital y dice que los anuncios pueden ser hechos con IA, de bajo presupuesto o muy ambiciosos. Andy Cohen ayudará a evaluar. A comienzos de año, su anuncio con IA del Super Bowl LX generó polémica.",
      cifras: [
        { v: "US$500,000", t: "premio pa’ el ganador del concurso" },
        { v: "15 s", t: "duración del comercial que pide la marca" },
        { v: "1 dic", t: "fecha límite pa’ enviar propuestas" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La marca convierte la crítica en concurso y le entrega parte del control al público. Pa’ creatividad, es un caso de cómo responder a la polémica con participación.",
      hacer: "En la próxima sesión creativa, escoger un cliente y bocetar un concurso donde el público haga la pieza, con reglas claras de derechos, aprobación y uso de IA.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/after-ai-backlash-svedka-challenges-consumers-to-create-super-bowl-ad/873445/" }]
    },

    {
      id: "redditq3", dep: "planning", peso: "principal",
      etiquetas: ["Reddit", "Resultados", "Audiencia"],
      titular: "Reddit sube ingresos 53 %, pero pierde usuarios en EE. UU. y se mueve a solo con sesión iniciada",
      corto: "Reddit crece en ingresos y pierde usuarios en EE. UU.",
      cuerpo: "Reddit reportó ingresos de US$895 millones en el tercer trimestre, 53 % más que hace un año, según Marketing Dive. Los ingresos por publicidad subieron 54 %, aunque el crecimiento se frenó frente a 74 % en el primer trimestre. Los usuarios diarios en EE. UU. bajaron de 53.2 a 50.7 millones, mientras los internacionales subieron de 77.1 a 79.6 millones. Su CEO, Steve Huffman, dijo que el tráfico que llega desde buscadores «ya no es un motor», por los cambios en las funciones de IA de Google. Reddit va hacia una experiencia solo con sesión iniciada.",
      cifras: [
        { v: "US$895 millones", t: "ingresos del tercer trimestre, +53 %" },
        { v: "50.7 millones", t: "usuarios diarios en EE. UU., frente a 53.2 millones en el trimestre anterior" },
        { v: "79.6 millones", t: "usuarios diarios internacionales, frente a 77.1 millones" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "La plataforma factura más, pero su audiencia en EE. UU. se achicó. Pa’ planning, el forecast de alcance en Reddit tiene que usar los usuarios actuales y no los del año pasado.",
      hacer: "Antes de cerrar el plan del primer trimestre, pedirle al rep de Reddit el alcance actualizado por país y comparar el costo por mil con el del trimestre anterior.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/what-reddits-q3-earnings-mean-for-marketers-amid-major-traffic-shift/873386/" }]
    },
    {
      id: "disneyshop", dep: "planning", peso: "secundaria",
      etiquetas: ["TikTok Shop", "Disney", "Temporada"],
      titular: "Disney estrena su Super Brand Day en TikTok Shop con más de 20 marcas",
      corto: "Disney estrena su Super Brand Day en TikTok Shop",
      cuerpo: "El primer Super Brand Day de Disney en TikTok Shop va del 4 al 10 de noviembre, dentro de la campaña «Make the Holidays Magic», con más de 20 marcas, según Marketing Dive. Emarketer proyecta que las ventas de TikTok Shop en EE. UU. suban 48 % en 2026, hasta US$23,400 millones.",
      cifras: [
        { v: "4–10 nov", t: "fechas del Super Brand Day de Disney" },
        { v: "US$23,400 millones", t: "ventas proyectadas de TikTok Shop en EE. UU. en 2026, +48 % (Emarketer)" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Las marcas grandes ya usan TikTok Shop como vitrina de temporada. Pa’ planning, es una referencia de cómo se arma un evento de compras en la plataforma.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/disney-plans-tiktok-shop-holiday-experience-with-over-20-brands/873072/" }]
    },

    {
      id: "gpc", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "GPC", "Consentimiento"],
      titular: "Estudio: 76 % de los sitios con rastreo publicitario no respeta del todo la señal GPC",
      corto: "76 % de los sitios no respeta del todo la señal GPC",
      cuerpo: "Un estudio de DataTrue, citado en el Ad Tech Briefing de Digiday, probó 242 sitios web: 43 % (104) falló controles básicos de privacidad. De los 173 sitios con rastreo publicitario, 80 % no ofrecía una forma clara de rechazarlo y 76 % no respetó por completo las señales de Global Privacy Control (GPC).",
      cifras: [
        { v: "242", t: "sitios web evaluados" },
        { v: "43 %", t: "falló controles básicos de privacidad" },
        { v: "76 %", t: "de los sitios con rastreo no respetó del todo la señal GPC" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Segmentar con datos de rastreo trae riesgo de cumplimiento y de calidad de datos cuando el consentimiento no se respeta.",
        "El estudio es de un proveedor del sector y se limita a 242 sitios, así que conviene mirarlo como una pista y no como una cifra del mercado completo."
      ],
      hacer: "Esta semana, escoger un sitio de un cliente, activar la señal GPC en un navegador y comprobar si los rastreadores publicitarios realmente se apagan.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/ad-tech-briefing-googles-ai-reckoning/" }]
    },

    {
      id: "igfeatures", dep: "content", peso: "principal",
      etiquetas: ["Instagram", "Creadores", "Video largo"],
      titular: "Instagram le paga a creadores por subir videos de hasta 90 minutos",
      corto: "Instagram paga a creadores por videos largos",
      cuerpo: "Según Business Insider, citado por Social Media Today, Instagram ofreció pagos a algunos creadores por subir videos largos a Features, su nuevo producto en prueba limitada en EE. UU., que admite videos de hasta 90 minutos. Se habla de ofertas desde US$50,000 y algunas de hasta US$500,000. Meta no confirmó las cifras, pero dijo que financia contenido de Features directamente con algunos creadores. Adam Mosseri dijo que «la economía importa mucho» y que exploran formas de que los creadores de video largo ganen dinero.",
      cifras: [
        { v: "90 min", t: "duración máxima de los videos en Features" },
        { v: "US$500,000", t: "ofertas más altas reportadas, sin confirmar por Meta" },
        { v: "US$1 a US$10", t: "por mil vistas de video largo en YouTube, según VidIQ" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Instagram quiere competirle a YouTube en video largo, pero hoy no paga por vistas. Pa’ content, es un formato a mirar con calma, porque IGTV tuvo un intento parecido que no pegó.",
      hacer: "Esta semana, escoger un video largo que ya tengas en YouTube de un cliente y hacer una prueba en Instagram apenas Features esté disponible, midiendo cuánto se ve completo.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-offers-to-pay-creators-for-long-form-content/873402/" }]
    },

    {
      id: "viernesnegro", dep: "rd", peso: "principal", para: ["planning", "creatividad", "content"],
      etiquetas: ["Consumo", "Viernes Negro", "Navidad"], fecha: "5 nov 2026",
      titular: "Viernes Negro y Navidad: llaman a comprar con presupuesto y no por impulso",
      corto: "Viernes Negro: llaman a comprar sin impulso",
      cuerpo: "Santo Domingo.— elDinero publicó una guía de finanzas personales pa’ no dejarse llevar por el impulso en el Viernes Negro y la Navidad. Señala como factores de riesgo los descuentos por tiempo limitado, las «ofertas exclusivas», la idea de que los productos se agotan y la facilidad de comprar desde el celular. Recomienda hacer presupuesto, preparar una lista, comparar precios, esperar de 24 a 48 horas antes de decidir y limitar el uso de tarjetas. Dice que un descuento «no representa un ahorro» si el artículo no estaba planeado.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Mientras las marcas empujan ofertas, la prensa económica le habla al consumidor de cuidarse del gasto. Pa’ planning y creatividad, el mensaje de «compra con cabeza» puede ser un buen ángulo de temporada.",
      hacer: "Esta semana, revisar con un cliente de retail o banca si su campaña de Viernes Negro se apoya en la urgencia, y proponer una versión que hable de valor, planificación y regalos con sentido.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387389/ofertas-por-viernes-negro-y-navidad-evite-dejarse-llevar-del-impulso-al-comprar/" }]
    },
    {
      id: "panorama", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Radio", "Navidad", "Panorama"], fecha: "4 nov 2026",
      titular: "Raphy D’Oleo regresa a la radio con «Panorama Navideño»",
      cuerpo: "Santo Domingo.— Raphy D’Oleo estrena el viernes 6 de noviembre, a las 8:00 p. m., «Panorama Navideño» en Grupo de Medios Panorama. Sale por Panorama 96.9 FM en Santo Domingo y el Este, 89.1 FM en Santiago y el Cibao, y 97.5 FM en el Sur. El formato promete más música en menos tiempo y menos intervenciones habladas.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ medios, es espacio nuevo de radio navideña con cobertura en tres regiones. Pa’ content, una oportunidad de enlazar clientes con la temporada.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/04/panorama-navideno-de-raphy-doleo-en-la-radio/3710875" }]
    },
    {
      id: "rae", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Cultura", "Lenguaje", "RAE"], fecha: "4 nov 2026",
      titular: "Motoconcho y medalaganario entran al diccionario de la RAE",
      cuerpo: "Santo Domingo.— La 24.ª edición del Diccionario de la lengua española, la primera en doce años, incorpora dominicanismos como motoconcho, motoconchista y medalaganario/a, según Diario Libre. También entran voces como camionetero/a y basuraleza. La edición suma 99,990 artículos y unas 209,000 acepciones.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ creatividad y content, es un gancho de orgullo local pa’ copy y redes: el habla del patio ahora tiene sello oficial.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/04/rae-incorpora-nuevos-dominicanismos-al-diccionario/3711136" }]
    },
    {
      id: "wtm", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Mitur", "WTM"], fecha: "4 nov 2026",
      titular: "RD promueve su oferta turística en la feria WTM de Londres",
      cuerpo: "Santo Domingo.— República Dominicana participa del 3 al 5 de noviembre en la World Travel Market de Londres, con la Cámara Británica de Comercio, el Ministerio de Turismo y la Embajada en Reino Unido, según elDinero. La feria coincide con la XII Semana Dominicana en Reino Unido. Ryan Polanco, presidente de la Britchamdr, dijo que la presencia es «fundamental» pa’ el posicionamiento en el mercado británico y europeo.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning y medios con clientes de turismo, Europa y el Reino Unido siguen en la agenda del sector.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387316/republica-dominicana-promueve-su-oferta-turistica-en-la-feria-wtm-londres-2026/" }]
    }
  ],

  pizarra: ["googleai", "svedka", "redditq3", "gpc", "igfeatures", "viernesnegro"],

  frases: [
    { dep: "medios", texto: "Google tiene más búsquedas que en cinco años, pero admite que AI Mode todavía monetiza menos.", uso: "para conversaciones de search e IA" },
    { dep: "creatividad", texto: "Svedka respondió a la polémica de su anuncio con IA entregándole al público el del Super Bowl.", uso: "para ideas de participación del público" },
    { dep: "data", texto: "Un estudio halló que 76 % de los sitios con rastreo publicitario no respeta del todo la señal GPC.", uso: "para conversaciones de privacidad con clientes" },
    { dep: "planning", texto: "Reddit subió ingresos 53 %, pero sus usuarios diarios en EE. UU. bajaron de 53.2 a 50.7 millones.", uso: "para conversaciones de forecast y audiencias" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Google: más búsquedas, AI Mode monetiza menos" },
      { id: "creatividad", texto: "Svedka y el anuncio hecho por el público" },
      { id: "planning", texto: "Reddit: más ingresos, menos usuarios en EE. UU." },
      { id: "data", texto: "76 % de sitios no respeta la señal GPC" },
      { id: "content", texto: "Instagram paga por videos de 90 minutos" },
      { id: "rd", texto: "Zoom a RD: Viernes Negro con presupuesto" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "googleai", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "disneyshop", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Disney hace su primer Super Brand Day en TikTok Shop del 4 al 10 de noviembre. Emarketer proyecta US$23,400 millones en ventas de TikTok Shop en EE. UU. este año: mira cómo arman la temporada."
    },
    data: {
      tipo: "secreto", nota: "gpc", titulo: "Destapa el expediente",
      texto: "De 242 sitios evaluados, [[76 %]] de los que rastrean con publicidad no respetó del todo la señal GPC, y [[43 %]] falló controles básicos de privacidad."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "rae", titulo: "La pregunta del patio",
      p: "¿Cuál de estas palabras dominicanas entró a la 24.ª edición del diccionario de la RAE?",
      opciones: ["Motoconcho", "Guagua", "Colmado"], correcta: 0,
      explicacion: "Según Diario Libre, entran motoconcho, motoconchista y medalaganario/a, entre otras voces."
    }
  }
};
