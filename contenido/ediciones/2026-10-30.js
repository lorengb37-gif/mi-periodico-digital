/*
  El Pulso Publicitario · edición N.º 303 · 30 de octubre de 2026
*/
window.EDICION = {
  numero: 303,
  fechaISO: "2026-10-30",
  fecha: "Viernes 30 de octubre 2026",
  fechaCorta: "30 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "La plata de publicidad se va donde la IA decide y donde hay datos propios; antes de cerrar el año, revisa de cuál de los dos lados está tu cliente.",
    largo: "Hoy las señales apuntan al mismo lado: Amazon espera que su publicidad crezca en los «altos teens» con agentes de IA, Meta dice que sus modelos nuevos suben conversiones sin que el anunciante toque nada, Reddit quiere que sus usuarios inicien sesión, y WPP presume que el bloqueo de Safari no le pega a su plataforma de datos. Aquí en el patio, el marbete sube 33 %, las importaciones de bebidas alcohólicas casi se duplicaron en nueve años y el país tiene nota «A» de los organismos internacionales. El consejo: escoge un «Lo que toca hacer» de esta edición, ponle responsable y llévaselo al cliente antes del lunes.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, llévalo al cliente antes del lunes y ponle fecha.",
    porDep: {
      medios: "Cuando los agentes de IA arman las campañas, el valor de la agencia está en saber qué preguntar. Pide a cada plataforma cómo mide el resultado que reporta.",
      creatividad: "Sephora le habla al que no sabe de belleza y 7-Eleven le puso una historia a un menú. Habla con el que menos sabe de tu cliente, no con el que más.",
      planning: "Reddit crece 54 % en publicidad, pero con un universo menor al de Meta. Mide cada plataforma con su vara y no las mezcles en el mismo forecast.",
      data: "Apple se está cerrando y los datos propios valen más. Revisa de dónde sale la identidad que usan tus clientes en Safari antes de que lo haga el cliente.",
      content: "El formato serie en vertical está pegando en YouTube. Piensa en temporadas de 5 a 7 episodios cortos, no en piezas sueltas.",
      rd: "Un aumento de impuesto como el marbete cambia el bolsillo y la conversación. Úsalo como gancho de tono útil, nunca como queja."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon Ads casi llega a US$20,000 millones en el 3T y apuesta a agentes de IA · Meta mejora su sistema de ranking de anuncios con modelos de lenguaje" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Sephora pone a Seth Rogen a escoger regalos pa’ quien no sabe de belleza · 7-Eleven estrena un K-drama en Instagram pa’ vender su menú coreano" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Reddit sube 54 % en publicidad en el 3T · YouTube: la TV conectada ya pesa más de un tercio de sus anuncios" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "El bloqueo de Safari le da a WPP un argumento pa’ InfoSum · Reddit probará acceso solo con sesión iniciada" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube apuesta a los microdramas: 6,500 millones de vistas · YouTube prueba bajar el mínimo de pago a creadores de US$100 a US$20" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "El marbete sube 33 % · Importaciones de bebidas alcohólicas casi se duplican desde 2018 · Nota «A» pa’ la economía · Vuelo directo Roma–Santo Domingo · Port Samaná" }
  },

  notas: [
    {
      id: "amazonq3", dep: "medios", peso: "principal",
      etiquetas: ["Amazon Ads", "IA", "Resultados"],
      titular: "Amazon Ads casi llega a US$20,000 millones en el trimestre y apuesta a agentes de IA pa’ seguir creciendo",
      corto: "Amazon Ads casi llega a US$20,000 millones",
      cuerpo: "Amazon presentó sus resultados del tercer trimestre el 29 de octubre: sus ingresos publicitarios rondaron los US$20,000 millones, 12 % más que el año pasado. Para el cuarto trimestre dijo esperar un crecimiento interanual de publicidad «en los altos teens». Digiday destaca Amazon Ads Agent, que unifica la compra de anuncios patrocinados, display, video y audio en una sola plataforma y permite planificar y optimizar con lenguaje natural, y las Full-Funnel Campaigns, que en pruebas beta lograron hasta 67 % más de retorno de largo plazo y 29 % menos de costo por cliente nuevo que las campañas armadas a mano. Los expertos consultados dudan de la transparencia y de poder verificar los resultados, y la FTC y 22 fiscales estatales demandaron a Amazon en agosto por supuestas prácticas engañosas en sus subastas, algo que la empresa niega.",
      cifras: [
        { v: "~US$20,000 millones", t: "ingresos publicitarios de Amazon en el 3T, +12 %" },
        { v: "+67 %", t: "retorno de largo plazo en pruebas beta de Full-Funnel Campaigns, según Amazon" },
        { v: "−29 %", t: "costo por cliente nuevo de marca frente a campañas manuales, según Amazon" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Cuando la plataforma compra, optimiza y reporta con su propio agente, el que pregunta es el que se queda con el cliente. Los números de las pruebas los da Amazon, y verificarlos es parte de tu trabajo.",
      hacer: "Pedirle al rep de Amazon Ads una demostración de Ads Agent y de Full-Funnel Campaigns esta semana y preparar tres preguntas de medición pa’ llevarle a los clientes que ya compran ahí.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/amazons-ads-nears-20-billion-in-q3-as-it-bets-on-agentic-ai-to-fuel-further-growth/" }]
    },
    {
      id: "metaranking", dep: "medios", peso: "secundaria",
      etiquetas: ["Meta", "IA", "Ranking"],
      titular: "Meta mejora su sistema de ranking de anuncios con modelos de lenguaje",
      corto: "Meta renueva su ranking de anuncios con LLMs",
      cuerpo: "Meta anunció tres mejoras en su sistema de ranking: un sistema nuevo que evalúa cada anuncio elegible en cada impresión, una versión más grande de GEM que lee el doble de historial por usuario, y GenRecs, un modelo generativo basado en LLM que ayuda con los anuncios o productos nuevos. Meta dice que las mejoras de ranking dieron 8.3 % más clics y 15.7 % más conversiones en Facebook en el segundo trimestre, y que GEM mejoró conversiones cerca de 19 % desde el año pasado. Según Matt Steiner, de Meta, el anunciante no tiene que cambiar su configuración para beneficiarse.",
      cifras: [
        { v: "+15.7 %", t: "conversiones en Facebook en el 2T por mejoras de ranking, según Meta" },
        { v: "+8.3 %", t: "clics en anuncios en el mismo período" },
        { v: "~19 %", t: "mejora de conversiones de GEM desde el año pasado" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "La segmentación fina pierde peso frente a modelos que escogen a quién mostrarle el anuncio. Pa’ medios, la creatividad y la señal de conversión valen más que el truco de segmentar.",
      fuentes: [
        { nombre: "AdExchanger", url: "https://www.adexchanger.com/ai/meta-has-a-new-ad-ranking-system-built-on-llms-plus-upgrades-to-andromeda-and-gem/" },
        { nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-says-its-expanded-processing-capacity-is-driving-ad-results/873133/" }
      ]
    },

    {
      id: "sephora", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Sephora", "Navidad"],
      titular: "Sephora pone a Seth Rogen a escoger regalos pa’ quien no sabe de belleza",
      corto: "Sephora le habla al que no sabe de belleza",
      cuerpo: "Sephora lanzó el 29 de octubre «We All Sephora», su campaña navideña con Seth Rogen como un comprador que necesita ayuda pa’ escoger regalos. La hizo Gut New York, la dirigió Jason Woliner y corre en TV conectada y lineal, streaming y redes en EE. UU. y Canadá, con versiones de 30 y 60 segundos. En lugar de hablarle a su cliente de siempre, Sephora le apunta a quien regala belleza sin saber del tema: quiere «quitar lo difícil» de la compra y destacar a los asesores en tienda y una lista de productos curada por Rogen. Antes del estreno cambió el nombre de su tienda de The Grove, en Los Ángeles, a «Sethphora».",
      cifras: [
        { v: "29 oct", t: "fecha de lanzamiento de la campaña" },
        { v: "30 y 60 s", t: "duración de las versiones del spot" },
        { v: "6 %", t: "crecimiento orgánico del segmento Selective Retailing de LVMH en los primeros nueve meses de 2026" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Sephora dejó de hablarle al que ya sabe y le habla al que tiene miedo de equivocarse. En temporada de regalos, ese comprador novato suele ser el más grande y el menos atendido.",
      hacer: "Escoger un cliente con productos de regalo y bocetar un guion de 30 segundos protagonizado por alguien que no sabe nada de la categoría, con una persona de la tienda o un experto que lo salve.",
      fuentes: [
        { nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/sephora-casts-seth-rogen-for-holiday-ads-targeted-at-gift-givers/872877/" },
        { nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/seth-rogen-checks-off-his-gift-list-in-sephoras-holiday-campaign/" }
      ]
    },
    {
      id: "seven", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "7-Eleven", "Social"],
      titular: "7-Eleven estrena un K-drama en Instagram pa’ vender su menú coreano",
      corto: "7-Eleven estrena un K-drama pa’ vender su menú",
      cuerpo: "7-Eleven lanzó «A Convenient Love», una miniserie de siete episodios en Instagram que arranca el 2 de noviembre y promueve su menú «Flavors of Korea». Sigue a dos jóvenes estudiantes cuyas vidas se cruzan en visitas nocturnas a comprar snacks. Según Adweek, cada episodio destaca un plato distinto, como los dumplings de pollo picante Bibigo o las alitas deshuesadas con gochujang, vinculado a descuentos por tiempo limitado. Adweek no menciona la agencia.",
      cifras: [{ v: "7", t: "episodios de la miniserie, desde el 2 de noviembre" }],
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/7-eleven-bets-on-korean-food-and-drama-with-a-spicy-new-social-miniseries/" }]
    },

    {
      id: "redditq3", dep: "planning", peso: "principal",
      etiquetas: ["Plataformas", "Reddit", "Resultados"],
      titular: "Reddit sube 54 % en publicidad y se acerca a los US$850 millones en un trimestre",
      corto: "Reddit sube 54 % en publicidad",
      cuerpo: "Reddit reportó el 29 de octubre ingresos publicitarios de US$847 millones en el tercer trimestre, 54 % más que el año pasado, con ingresos totales 53 % arriba y un ARPU de US$6.87, 36 % más. Los ingresos de rendimiento en la parte baja del embudo (shopping y apps) subieron más de 95 %, el volumen de clics subió 50 % y las conversiones se triplicaron. Los anunciantes medianos crecieron 50 %. Pa’ el cuarto trimestre, Reddit anunció nuevas integraciones de medición con Innovid, Skai y HubSpot y el modelo Max en beta pública. También dijo que la búsqueda de Google le bajó en un millón los referidos semanales en octubre.",
      cifras: [
        { v: "US$847 millones", t: "ingresos publicitarios del 3T, +54 %" },
        { v: "US$6.87", t: "ARPU, +36 %" },
        { v: "+95 %", t: "ingresos de rendimiento en la parte baja del embudo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Reddit crece rápido, pero viene de una base menor y depende de Google pa’ buena parte de su tráfico. Es una plataforma pa’ probar con presupuesto pequeño, no pa’ mover el plan completo.",
      hacer: "Pa’ el plan del primer trimestre, reservar un presupuesto de prueba pa’ Reddit en un cliente con audiencia de nicho o de consideración larga, con una meta de conversión clara y una fecha de revisión.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/platforms/reddit-is-going-login-only-blame-google/" }]
    },
    {
      id: "youtubectv", dep: "planning", peso: "secundaria",
      etiquetas: ["YouTube", "TV conectada", "Suscripciones"],
      titular: "YouTube: la TV conectada ya pesa más de un tercio de sus anuncios",
      corto: "YouTube: la TV conectada pesa un tercio",
      cuerpo: "YouTube generó US$11,200 millones en anuncios en el tercer trimestre, 9 % más que el año pasado frente a 13 % en el segundo. Según Philipp Schindler, de Google, la experiencia de YouTube en TV conectada representa más de un tercio de los ingresos publicitarios de la plataforma. YouTube Music y Premium suman 150 millones de suscriptores, frente a los 100 millones de comienzos de 2024. Social Media Today cita un informe de Nielsen de agosto de 2026 que pone a YouTube como la plataforma de streaming líder en EE. UU.",
      cifras: [
        { v: "US$11,200 millones", t: "ingresos de YouTube Ads en el 3T, +9 %" },
        { v: "150 millones", t: "suscriptores de YouTube Music y Premium" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El dato es de EE. UU., pero muestra que la gente ve YouTube cada vez más en la sala, en la pantalla grande. Pa’ planear, eso lo acerca más a la TV que a la red social.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-subscriptions-are-rising-as-more-users-turn-to-connected-tv/873272/" }]
    },

    {
      id: "infosum", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Apple", "WPP"],
      titular: "El bloqueo de Safari le da a WPP un argumento pa’ InfoSum",
      corto: "El bloqueo de Safari le da un argumento a WPP",
      cuerpo: "Apple bloquea a las empresas que recogen correos electrónicos en las páginas de los editores con código que corre dentro del navegador. WPP, que compró InfoSum en abril de 2025 y la integra en WPP Open, dice que el bloqueo no la afecta, porque InfoSum opera fuera del navegador: cada parte mantiene sus datos en entornos aislados y solo comparte los resultados. Cindy Rose, de WPP, aseguró que el bloqueo no le afecta «at all». Robert Webster, consultor y exejecutivo de WPP, lo matiza: las señales de Safari también se degradaron pa’ WPP, e InfoSum sigue usando identidad de consumidor, justo lo que critica Apple. La política de Apple salió el 19 de octubre en un post de WebKit y el bloqueo comienza con iOS 27, según AdExchanger. LiveRamp está en la lista de Apple y WPP dejó de usarlo en junio.",
      cifras: [
        { v: "~400", t: "socios de datos cuyas señales combina InfoSum" },
        { v: "iOS 27", t: "versión con la que comienza el bloqueo de Apple, según AdExchanger" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "El bloqueo golpea a quien depende de identificadores en el navegador y favorece a quien trabaja con datos propios en entornos cerrados.",
        "Ni los entornos cerrados están libres de la crítica de Apple si siguen conectando datos de personas entre empresas."
      ],
      hacer: "Hacer una lista de qué proveedores de identidad usa cada cliente en Safari y preguntarle a cada uno, por escrito, si está en la lista de bloqueo de Apple y cuál es su plan pa’ iOS 27.",
      fuentes: [
        { nombre: "Digiday", url: "https://digiday.com/media-buying/apples-safari-block-hands-wpp-a-fresh-case-for-infosum/" },
        { nombre: "AdExchanger", url: "https://www.adexchanger.com/platforms/apple-publishes-its-plan-to-wipe-out-web-tracking/" }
      ]
    },
    {
      id: "redditlogin", dep: "data", peso: "secundaria",
      etiquetas: ["Datos propios", "Reddit", "Login"],
      titular: "Reddit probará acceso solo con sesión iniciada en mercados fuera de EE. UU.",
      corto: "Reddit probará acceso solo con sesión iniciada",
      cuerpo: "Steve Huffman, CEO de Reddit, dijo el 29 de octubre que la plataforma empezará a probar un modo de solo acceso con sesión iniciada en el cuarto trimestre, en mercados seleccionados fuera de EE. UU. Los usuarios con sesión iniciada generan más de 80 % de la monetización. Huffman dijo que exigir inicio de sesión mejora la segmentación y los datos propios, protege el contenido de los rastreadores de IA y facilita cumplir regulaciones como la verificación de edad. AdExchanger no detalla cómo cambiaría la medición.",
      cifras: [{ v: "80 %+", t: "de la monetización viene de usuarios con sesión iniciada" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Una plataforma que identifica a más usuarios ofrece mejor segmentación, pero el público que no inicia sesión desaparece de las métricas. Hay que preguntar cómo cambia el reporte.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/platforms/reddit-is-going-login-only-blame-google/" }]
    },

    {
      id: "microdrama", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "Microdramas", "Formato"],
      titular: "YouTube apuesta a los microdramas: 6,500 millones de vistas en seis meses",
      corto: "YouTube apuesta a los microdramas",
      cuerpo: "YouTube anunció que va a darle más espacio a los microdramas, series cortas en video vertical. El formato superó los 6,500 millones de vistas en la app en el primer semestre de 2026, más de 50 % arriba que el año pasado. YouTube dijo que trabaja en más formas de monetización y en renovar la experiencia de los episodios solo pa’ miembros en el celular «en las próximas semanas». Las herramientas de traducción automática ofrecen audio en varios idiomas y subtítulos con IA. Según YouTube, 40 % de las vistas y 30 % de los clics llegaron más de 30 días después de publicado el video. Sus consejos: gancho emocional en los primeros 15 segundos, composición vertical y publicar con frecuencia.",
      cifras: [
        { v: "6,500 millones", t: "de vistas de microdramas en el primer semestre de 2026" },
        { v: "+50 %", t: "frente al año pasado" },
        { v: "15 s", t: "ventana que YouTube recomienda pa’ el gancho emocional" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Un formato en serie premia a quien vuelve cada semana con la misma historia. Pa’ un cliente, una miniserie con personajes puede costar menos y dura más que piezas sueltas.",
      hacer: "Esta semana, bocetar una miniserie de cinco episodios de menos de un minuto pa’ un cliente, con un gancho en los primeros 15 segundos de cada uno, y probar el primero en Shorts.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-adds-microdrama-subscriptions/872982/" }]
    },
    {
      id: "ytpago", dep: "content", peso: "secundaria",
      etiquetas: ["YouTube", "Creadores", "Pagos"],
      titular: "YouTube prueba bajar el mínimo de pago a creadores de US$100 a US$20",
      corto: "YouTube prueba un mínimo de pago de US$20",
      cuerpo: "YouTube está probando, con los pagos de octubre, bajar el umbral mínimo de pago de US$100 a US$20 (o su equivalente en moneda local) pa’ un grupo de creadores escogido al azar en EE. UU., India e Indonesia. Es un experimento temporal, y los fondos que no alcancen el mínimo pasan al mes siguiente. Quienes prefieran un umbral más alto lo pueden cambiar en AdSense pa’ YouTube. Social Media Today no dice cuántos creadores participan.",
      cifras: [{ v: "US$100 → US$20", t: "umbral mínimo de pago en la prueba" }],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-tests-reduced-payment-threshold-for-creators/872965/" }]
    },

    {
      id: "marbete", dep: "rd", peso: "principal", para: ["planning", "content", "medios"],
      etiquetas: ["Consumo", "Impuestos", "Vehículos"], fecha: "29 oct 2026",
      titular: "El marbete sube 33 % tras diez años sin ajustes",
      corto: "El marbete sube 33 % en RD",
      cuerpo: "Santo Domingo.— La DGII aplicó el 29 de octubre el primer aumento del marbete en diez años, el primero desde octubre de 2016. Los vehículos desde el modelo 2022 pasan de RD$3,000 a RD$4,000. El aumento es de 33.3 %, mientras la DGII calcula una inflación acumulada de 58.1 % entre septiembre de 2016 y septiembre de 2026. El Gobierno prevé recaudar RD$4,700 millones en la temporada 2026-2027, unos RD$1,175 millones más que sin el aumento. La renovación va hasta el 31 de enero de 2027 y hay 2,136,468 vehículos habilitados. Diario Libre recoge también el rechazo de conductores: «La situación no está para eso».",
      cifras: [
        { v: "33.3 %", t: "aumento del marbete" },
        { v: "RD$4,700 millones", t: "recaudación proyectada 2026-2027" },
        { v: "2,136,468", t: "vehículos habilitados" },
        { v: "31 ene 2027", t: "fecha límite de renovación" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Un gasto que toca a más de dos millones de vehículos entra en la conversación de los próximos tres meses. Pa’ planning, es un dato de presupuesto del hogar. Pa’ content, una oportunidad de servicio si el tono es útil.",
      hacer: "Si tienes clientes de seguros, bancos, talleres o autos, proponerles esta semana una pieza útil de «cómo y cuándo renovar el marbete» o una promo de pago, con el tono de servicio y sin burlarse del aumento.",
      fuentes: [
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/10/29/aumento-marbete-2026-en-impuesto-de-circulacion-vehicular/3704747" },
        { nombre: "El Dinero", url: "https://eldinero.com.do/386669/dgii-inicia-renovacion-del-marbete-y-dispone-aumento-de-rd500-y-rd1000/" }
      ]
    },
    {
      id: "alcohol", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Consumo", "Importaciones", "Bebidas"], fecha: "30 oct 2026",
      titular: "Las importaciones de bebidas alcohólicas casi se duplican en nueve años",
      cuerpo: "Santo Domingo.— De enero a septiembre de 2026, el país importó 64.9 millones de litros de bebidas alcohólicas, 92.6 % más que los 33.7 millones de 2018, según datos de Aduanas que cita Diario Libre. Frente a 2025 el alza es de 7.2 %, y el valor fue de US$217.2 millones. La cerveza importada subió 14.4 %, a 29.2 millones de litros; el alcohol etílico, 28.8 %; y el vino bajó 8.2 %. El año pico fue 2022, con 75.2 millones de litros.",
      cifras: [
        { v: "64.9 millones", t: "de litros importados de enero a septiembre de 2026" },
        { v: "+92.6 %", t: "frente al mismo período de 2018" },
        { v: "+14.4 %", t: "cerveza importada frente a 2025" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning, la categoría se mueve y la cerveza importada crece mientras el vino baja. Con Navidad cerca, pa’ medios es un aviso de que las marcas de bebidas van a pelear por el mismo espacio.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/10/30/importaciones-de-bebidas-alcoholicas-se-duplican-en-nueve-anos/3705194" }]
    },
    {
      id: "notaa", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Economía", "Banco Central", "Crecimiento"], fecha: "29 oct 2026",
      titular: "Economía dominicana con nota «A» de los organismos internacionales: crece 4.6 % de enero a septiembre",
      cuerpo: "Santo Domingo.— El Dinero recoge que el FMI subió su proyección de crecimiento pa’ 2026 a 4.6 %, el Banco Mundial la puso en 4.7 % y la CEPAL la subió de 4.0 % a 4.4 %. Según datos del Banco Central citados por El Dinero, la economía creció 4.6 % de enero a septiembre de 2026, y el IMAE de septiembre subió 5.6 % interanual. El FMI proyecta una inflación de 4.9 % al cierre del año. El artículo trae pequeñas inconsistencias en algunas cifras de 2025, así que usa las proyecciones como orientación.",
      cifras: [
        { v: "4.6 %", t: "crecimiento de enero a septiembre de 2026, según el Banco Central" },
        { v: "5.6 %", t: "IMAE de septiembre, interanual" },
        { v: "4.9 %", t: "inflación proyectada por el FMI al cierre de 2026" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Una economía que crece da base pa’ planes de fin de año más atrevidos, pero con la inflación vigilada. Antes de prometer alzas al cliente, revisa su categoría.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386565/economia-dominicana-con-nota-a-en-las-evaluaciones-internacionales/" }]
    },
    {
      id: "roma", dep: "rd", peso: "secundaria", para: ["medios", "creatividad", "planning"],
      etiquetas: ["Turismo", "Aerolíneas", "Italia"], fecha: "29 oct 2026",
      titular: "Roma y Santo Domingo tendrán un vuelo directo desde el 30 de noviembre",
      cuerpo: "Santo Domingo.— Según Diario Libre, una nueva ruta aérea directa entre Roma y Santo Domingo comenzará el 30 de noviembre. El embajador de Italia, Sergio Maffettone, dijo que unos 100,000 turistas italianos llegan al país cada año. El artículo no nombra la aerolínea ni las frecuencias.",
      cifras: [
        { v: "30 nov", t: "inicio del vuelo directo Roma–Santo Domingo" },
        { v: "100,000", t: "turistas italianos al año, según el embajador" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Una ruta nueva abre una temporada de turistas italianos y de dominicanos en Italia. Pa’ hoteles, aerolíneas y destinos, es un mercado pa’ trabajar desde noviembre.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/turismo/2026/10/29/nueva-ruta-aerea-entre-rd-e-italia-comenzara-a-operar-en-noviembre/3704674" }]
    },
    {
      id: "samana", dep: "rd", peso: "secundaria", para: ["planning", "content", "medios"],
      etiquetas: ["Turismo", "Cruceros", "Samaná"], fecha: "29 oct 2026",
      titular: "Port Samaná prevé recibir un millón de visitantes al año en 2030",
      cuerpo: "Samaná.— La nueva terminal de cruceros Port Samaná, desarrollada por una alianza entre el Estado y el Grupo ITM, comenzará operaciones el 24 de noviembre. Prevé unos 230 mil visitantes en 2027, 540 mil en 2028 (35 % más que la previsión inicial) y un millón al año en 2030, según El Dinero. El artículo no informa el monto de la inversión.",
      cifras: [
        { v: "24 nov", t: "inicio de operaciones" },
        { v: "230 mil", t: "visitantes previstos en 2027" },
        { v: "1 millón", t: "visitantes al año previstos en 2030" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Un puerto nuevo pone a Samaná en la conversación de los cruceristas. Pa’ content y medios, hay clientes de tours, comida y artesanía que pueden prepararse antes de la primera llegada.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386672/port-samana-preve-recibir-un-millon-de-visitantes-al-ano-en-2030/" }]
    }
  ],

  pizarra: ["amazonq3", "sephora", "redditq3", "infosum", "microdrama", "marbete"],

  frases: [
    { dep: "medios", texto: "Amazon dice que su agente de IA logra hasta 67 % más de retorno, pero el que pone la cifra es Amazon: el trabajo de la agencia es verificarla.", uso: "para hablar de agentes de IA con el cliente" },
    { dep: "creatividad", texto: "Sephora dejó de hablarle al que sabe de belleza y le habla al que tiene miedo de equivocarse con el regalo.", uso: "para ideas de campañas de regalos" },
    { dep: "data", texto: "Apple bloquea la identidad en el navegador y WPP dice que InfoSum queda fuera, pero Apple también critica conectar datos de personas entre empresas.", uso: "para conversaciones sobre identidad y Safari" },
    { dep: "planning", texto: "Reddit creció 54 % en publicidad en un trimestre, pero la búsqueda de Google le quitó un millón de referidos semanales en octubre.", uso: "para evaluar plataformas emergentes" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Amazon Ads y sus agentes de IA" },
      { id: "creatividad", texto: "Sephora y Seth Rogen" },
      { id: "planning", texto: "Reddit sube 54 % en publicidad" },
      { id: "data", texto: "El bloqueo de Safari y WPP" },
      { id: "content", texto: "Los microdramas de YouTube" },
      { id: "rd", texto: "Zoom a RD: el marbete sube 33 %" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "amazonq3", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "redditq3", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Reddit ingresó US$847 millones en publicidad en el trimestre, 54 % más. Pa’ el plan del primer trimestre, reserva un presupuesto de prueba con meta de conversión clara."
    },
    data: {
      tipo: "secreto", nota: "infosum", titulo: "Destapa el expediente",
      texto: "WPP dice que el bloqueo de Safari no le afecta porque InfoSum opera fuera del navegador y combina señales de unos [[400 socios de datos]]. Según AdExchanger, el bloqueo de Apple comienza con [[iOS 27]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "marbete", titulo: "La pregunta del patio",
      p: "¿Cuánto pagan ahora por el marbete los vehículos desde el modelo 2022?",
      opciones: ["RD$3,000", "RD$4,000", "RD$5,000"], correcta: 1,
      explicacion: "Según la DGII, pasan de RD$3,000 a RD$4,000, un aumento de 33.3 % tras diez años sin ajustes."
    }
  }
};
