/*
  El Pulso Publicitario · edición N.º 332 · 28 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 332,
  fechaISO: "2026-11-28",
  fecha: "Sábado 28 de noviembre 2026",
  fechaCorta: "28 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Pasó el Viernes Negro: ahora gana el que sabe medir qué funcionó y a quién le tiene que responder cuando la IA decide.",
    largo: "Se acabó el Viernes Negro y llega la hora de los números. Amazon ya cuenta las ventas que salen de los anuncios en Netflix; la ICO británica avisa que si un agente de IA maneja la campaña, el responsable sigue siendo el anunciante; y en el patio la gente llamó «viernes gris» a un día con tiendas llenas y bolsillos flojos. En Creatividad, Macy’s cuenta su propia historia en su desfile 100 y Velveeta encontró una idea escondida en un bloque de queso. El consejo: antes de celebrar o de llorar los resultados de la semana, ponte de acuerdo con el cliente en qué se va a medir y quién responde por cada decisión.",
    corto: "Antes del lunes, escoge con cada cliente las tres métricas que van a decir si la temporada funcionó, y quién las firma.",
    porDep: {
      medios: "Si tu cliente compra Netflix por Amazon, pide ya las ventas atribuidas a esos anuncios. Lo que no se mide en diciembre no se defiende en enero.",
      creatividad: "Velveeta vio un queso en un pylon de fútbol. Mira la categoría de tu cliente con ojos de niño: la idea a veces está a la vista.",
      planning: "El 59 % de las marcas busca clientes nuevos en temporada. Planifica también cómo hacer que vuelvan en enero, cuando la pauta se enfría.",
      data: "Si un agente de IA toca la campaña, apunta qué puede hacer y quién lo aprobó. El regulador no acepta un «lo decidió la máquina».",
      content: "General Mills mide qué tanto se habla de su marca antes de pagarle. Arma tu propio puntaje con shares, guardados y comentarios.",
      rd: "En RD el comprador fue a la tienda a comparar, no siempre a comprar. Pa’ diciembre, el financiamiento y la devolución pesan tanto como el descuento."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon mete cinco métricas pa’ contar las ventas de los anuncios en Netflix · AppLovin le ronda a Criteo y Meta mira la CTV · Los compradores de TV discuten qué es «performance»" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Macy’s se cuenta a sí misma en su desfile 100 con «What If» de BBH · Velveeta convierte los pylons de la NFL en bloques de queso" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "59 % de las marcas apunta a clientes nuevos esta temporada · La mitad de lo que se buscó en Google el Viernes Negro, en 14 países, fue del Viernes Negro" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Nueva York prohíbe los juguetes con chatbot y Australia les pide a los agentes de compra que pregunten primero · La ICO: si el agente de IA maneja la campaña, el responsable sigue siendo el anunciante" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "General Mills mide con un «talkability score» qué contenido merece pauta · Clix, el gamer de 26 millones de seguidores, arma su propio holding" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Un Viernes Negro con tiendas llenas que muchos llamaron «gris» · Romeo y Prince Royce agotan dos noches y abren la tercera · Los nacimientos caen 14.6 % · Jochy Santos recibe su estrella · Los cajeros siguen moviendo efectivo · Francia se suma al LAC4" }
  },

  notas: [
    {
      id: "netflixamazon", dep: "medios", peso: "principal",
      etiquetas: ["CTV", "Amazon DSP", "Netflix", "Medición"],
      titular: "Amazon ya cuenta las ventas que salen de los anuncios en Netflix: cinco métricas nuevas en sus reportes",
      corto: "Amazon cuenta las ventas de los anuncios en Netflix",
      cuerpo: "Una nota de versión de Amazon del 16 de noviembre dice que los reportes de Amazon DSP en la Ads API v1 ahora incluyen cinco métricas de conversiones atribuidas a vistas de anuncios en Netflix: compras, ventas, ventas convertidas a otra moneda, visitas a la página del producto y conversiones fuera de Amazon (por ejemplo, en la web del anunciante). PPC Land lo reportó el 25 de noviembre y aclara que Amazon no publicó definiciones, ventana de atribución, países ni fecha de inicio, y que su biblioteca de métricas todavía no las lista. Netflix bajó su expectativa de ingresos por publicidad en 2026 a unos US$2,700 millones, desde cerca de US$3,000 millones.",
      cifras: [
        { v: "5", t: "métricas nuevas pa’ contar compras, ventas y visitas que vienen de los anuncios en Netflix" },
        { v: "US$2,700M", t: "lo que Netflix espera ahora de ingresos por publicidad en 2026 (antes, unos US$3,000M)" },
        { v: "250M+", t: "espectadores activos al mes que reporta Netflix" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "La CTV premium siempre tuvo el mismo problema: se ve bonita en el plan pero cuesta probar que vendió. Que Amazon empiece a amarrar Netflix con compras reales cambia la conversación con los clientes de e-commerce y retail. Eso sí, sin ventana de atribución publicada, el número hay que leerlo con cuidado.",
      hacer: "Si algún cliente compra Netflix vía Amazon, pídele esta semana al rep de Amazon Ads la ventana de atribución y los países de estas métricas, y no las metas en el reporte de cierre hasta tener la respuesta por escrito.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-adds-five-metrics-to-count-sales-from-netflix-ads/" }]
    },
    {
      id: "applovin", dep: "medios", peso: "secundaria",
      etiquetas: ["Ad Tech", "AppLovin", "Criteo", "Meta", "CTV"],
      titular: "AppLovin le ronda a Criteo y Meta mira la TV conectada: la ad tech independiente siente el apretón",
      corto: "AppLovin ronda a Criteo; Meta mira la CTV",
      cuerpo: "Digiday recoge dos movidas: Reuters reportó conversaciones, sin confirmar, para que AppLovin compre a Criteo, y Next in Media reportó que Meta explora alianzas con fabricantes de televisores y servicios FAST para llevar su plataforma de anuncios a la CTV. AppLovin facturó US$2,190 millones en el tercer trimestre, 55 % más que hace un año; Criteo bajó 12 %, a US$416 millones. Según Digiday, si las dos cosas se dan, los anunciantes dependerían menos de los DSP y SSP independientes.",
      cifras: [
        { v: "+55 %", t: "ingresos de AppLovin en el tercer trimestre (US$2,190 millones)" },
        { v: "−12 %", t: "ingresos de Criteo en el mismo trimestre (US$416 millones)" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si Meta llega a la TV con su propia herramienta de compra, el cliente podría comprar CTV desde el mismo lugar donde ya compra social. Pa’ la agencia, eso pide tener clara la medición independiente antes de que todo quede en una sola caja.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/ad-tech-briefing-meta-eyes-ctv-as-applovin-circles-criteo-signs-of-the-squeeze-on-independent-ad-tech/" }]
    },
    {
      id: "tvperformance", dep: "medios", peso: "secundaria",
      etiquetas: ["TV", "Medición", "Full funnel"],
      titular: "Omnicom y Carat sobre la TV: sin audiencias grandes no hay resultados, y el que ve TV no corre a comprar",
      corto: "Sin audiencia grande, la TV no da resultados",
      cuerpo: "En un panel de Go Addressable en Nueva York, reportado por AdExchanger, Maureen Bosetti, jefa de inversión de Omnicom Media Group, dijo que «si no tenemos audiencias escalables, no podemos generar resultados». Jennifer Gardner, de Carat US, advirtió que la industria simplifica de más al televidente: la TV se ve recostado, y la compra se arma con el tiempo. Bosetti contó que en comida rápida la métrica de performance preferida suele ser el alcance incremental, porque el alcance mueve el tráfico a los locales.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/tv/what-does-performance-actually-mean-for-tv-buyers-weigh-in/" }]
    },

    {
      id: "macys", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Macy’s", "BBH", "Desfile"],
      titular: "Macy’s se cuenta a sí misma en su desfile 100: «What If», un anuncio de 90 segundos de BBH pa’ su gente",
      corto: "Macy’s se cuenta a sí misma en su desfile 100",
      cuerpo: "Macy’s pasa hoy, sábado, un anuncio de 90 segundos hecho por BBH USA durante la transmisión de su desfile 100 de Acción de Gracias, que se movió del jueves por la tormenta en Nueva York. El spot, «What If», recorre la historia de la marca, desde las primeras vitrinas navideñas hasta el taller donde nacieron los primeros globos, y celebra a los empleados que hacen el desfile. Según Adweek, 35.7 millones de personas vieron el desfile en 2025, el programa de entretenimiento más visto de EE. UU. Este año vuelan 100 inflables y debutan Levi’s, DoorDash y Geico como socios.",
      cifras: [
        { v: "90 s", t: "dura «What If», el anuncio de BBH USA pa’ Macy’s" },
        { v: "35.7M", t: "personas vieron el desfile en 2025" },
        { v: "3", t: "marcas nuevas en el desfile: Levi’s, DoorDash y Geico" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Macy’s le presta su desfile a los personajes de otras marcas desde hace un siglo, y en el aniversario decidió que la estrella es su gente. Es un recordatorio de que el aniversario de un cliente no es pa’ hablar del logo, sino de quiénes lo hicieron posible.",
      hacer: "Revisa qué cliente cumple un aniversario redondo en 2027 y lleva la semana que viene una idea de una página que ponga a sus empleados como protagonistas.",
      fuentes: [
        { nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/for-macys-its-100th-thanksgiving-day-parade-is-about-so-much-more-than-balloons/" },
        { nombre: "N Digital (EFE)", url: "https://n.com.do/2026/11/25/macys-aplaza-hasta-el-sabado-su-tradicional-desfile-de-accion-de-gracias-por-tormenta-en-nueva-york/" }
      ]
    },
    {
      id: "velveeta", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Activación", "Kraft Heinz", "NFL", "Deportes"],
      titular: "Velveeta ve un queso en el pylon de la NFL, y cada touchdown que lo toca regala queso",
      corto: "Velveeta convierte los pylons de la NFL en queso",
      cuerpo: "Kraft Heinz, a mitad del primer año de un acuerdo de cinco años con la NFL, lanzó «Velveeta Pylon Plays» pa’l fin de semana de Acción de Gracias: cuando un jugador anota un touchdown y toca uno de los pylons de la zona de anotación, los fanáticos en EE. UU. pueden ganar queso Velveeta a través de Uber Eats. Los pylons no llevan la marca. «Estaba escondido a plena vista», dijo Ryan Djabbarah, jefe de deportes y entretenimiento de la compañía, sobre el parecido entre el bloque de queso y el pylon.",
      fuentes: [{ nombre: "Marketing Brew", url: "https://www.marketingbrew.com/stories/nfl-sponsorship-kraft-heinz-velveeta-cheese-pylons" }]
    },

    {
      id: "clientesnuevos", dep: "planning", peso: "principal",
      etiquetas: ["Temporada", "Adquisición", "Digiday Research"],
      titular: "El 59 % de las marcas le habla a clientes nuevos en Navidad, y el reto es que vuelvan",
      corto: "59 % de las marcas va por clientes nuevos",
      cuerpo: "Según una encuesta de Digiday+ Research a profesionales de marcas y retailers, 59 % dice que los clientes nuevos son la audiencia principal de su publicidad navideña de 2026 (60 % el año pasado) y 41 % apunta a los clientes que ya tiene. Ari Bloom, de A-Frame Brands, estima que en temporada los clientes nuevos suben entre 20 % y 30 % como parte del total. Laura Brodie, de Ritual, recomienda regalos con la compra, lanzamientos de temporada y alianzas con marcas de tamaño parecido pa’ compartir audiencias, porque «el costo de adquisición es alto en las fiestas».",
      cifras: [
        { v: "59 %", t: "de las marcas tiene a los clientes nuevos como audiencia principal en Navidad" },
        { v: "41 %", t: "apunta primero a sus clientes de siempre" },
        { v: "20–30 %", t: "suben los clientes nuevos como parte del total en temporada, según A-Frame Brands" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Diciembre trae gente nueva, pero sale cara. Si el plan no dice qué pasa con esos compradores en enero, la marca pagó pa’ un solo encuentro. El plan de temporada tiene que traer su segunda parte.",
      hacer: "Esta semana, agrégale al plan de diciembre de cada cliente de retail una acción de enero pa’ los compradores nuevos: un correo, una oferta de regreso o una alianza con otra marca.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/digiday-research-a-frame-brands-ritual-and-other-brands-prioritize-new-customer-acquisition-this-holiday-season/" }]
    },
    {
      id: "trends14", dep: "planning", peso: "secundaria",
      etiquetas: ["Búsqueda", "Google Trends", "Viernes Negro"],
      titular: "Lego, Uggs y un kimono: la mitad de lo que se buscó en Google el Viernes Negro, en 14 países, fue del Viernes Negro",
      corto: "Lego, Uggs y un kimono en Google",
      cuerpo: "PPC Land revisó las listas de «Trending now» de Google Trends en 14 países durante las 24 horas del Viernes Negro: 101 de 202 tendencias mencionaban el Viernes Negro. En EE. UU. subieron «black friday», «uggs», «lego» y «walmart black friday 2026», y más de 50 búsquedas relacionadas preguntaban a qué hora abrían tiendas como Walmart, Target, Kohl’s y Costco. En Brasil mandaron Magalu y Amazon; en México, Best Buy y Target, sin una sola búsqueda del Viernes Negro; y en Japón, el furisode, un kimono formal.",
      cifras: [
        { v: "101 de 202", t: "tendencias en 14 países mencionaban el Viernes Negro" },
        { v: "50+", t: "búsquedas en EE. UU. preguntaban el horario de las tiendas" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/lego-uggs-and-a-kimono-what-14-countries-asked-google-on-black-friday/" }]
    },

    {
      id: "agentesregulan", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "IA", "Agentes de compra", "Menores"],
      titular: "Nueva York prohíbe los juguetes con chatbot pa’ menores de 12, y Australia les pide a los agentes de compra que pregunten primero",
      corto: "Nueva York prohíbe juguetes con chatbot",
      cuerpo: "La gobernadora Kathy Hochul firmó el 24 de noviembre la ley que prohíbe fabricar, distribuir o vender en Nueva York juguetes pa’ niños de 12 años o menos con un compañero de IA integrado. Entra en vigor a los 90 días (PPC Land calcula el 22 de febrero de 2027), dura cinco años y permite multas de hasta US$15,000 por día por violación. El mismo día del Viernes Negro, la ACCC de Australia aconsejó fijar límites de gasto y puntos de aprobación antes de que un agente de IA compre, y recordó que las empresas siguen respondiendo bajo la ley del consumidor. Kenia también pidió aprobación humana antes de que un agente pague.",
      cifras: [
        { v: "US$15,000", t: "multa máxima por día y por violación en Nueva York" },
        { v: "12 años", t: "edad tope de los niños protegidos por la prohibición" },
        { v: "5 años", t: "duración de la ley, salvo que la renueven" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Los reguladores no esperan leyes nuevas: aplican las de consumidor y privacidad que ya existen a los agentes de IA.",
        "La idea que se repite en Australia y Kenia es la misma: antes de pagar, el agente tiene que pedirle permiso a una persona."
      ],
      hacer: "Si algún cliente vende juguetes, tecnología o artículos pa’ niños, pídele esta semana que revise si algún producto o campaña usa chatbots, y documenta en qué punto una persona aprueba cualquier compra que haga un agente.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/regulators-tell-ai-shopping-agents-to-ask-first-as-new-york-bans-chatbot-toys/" }]
    },
    {
      id: "ico", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "ICO", "Agentes de IA", "Reino Unido"],
      titular: "La ICO británica: si un agente de IA maneja la campaña, el responsable sigue siendo el anunciante",
      corto: "La ICO: el anunciante responde por su agente",
      cuerpo: "La oficina de protección de datos del Reino Unido publicó «AdTech 3.0», un informe de 51 páginas sobre publicidad en tiempos de chatbots y agentes de IA. Dice que una empresa «no puede transferir su responsabilidad» poniendo a un agente a manejar la campaña, que mirar un dashboard no prueba supervisión, que adivinar datos sensibles como la salud o la religión pa’ segmentar exige consentimiento explícito aunque la suposición falle, y que se puede comprar un espacio al lado de la respuesta de un chatbot, pero no pagar pa’ cambiar la respuesta.",
      cifras: [{ v: "51", t: "páginas del informe, con 17 ejemplos prácticos" }],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/advertisers-stay-responsible-when-ai-agents-run-campaigns-uks-ico-says/" }]
    },

    {
      id: "talkability", dep: "content", peso: "principal",
      etiquetas: ["Creadores", "Medición", "General Mills"],
      titular: "General Mills mide con un «talkability score» qué contenido merece pauta, y las herramientas pa’ decidirlo se multiplican",
      corto: "General Mills mide qué contenido merece pauta",
      cuerpo: "Digiday cuenta que General Mills armó un «talkability score» pa’ medir si sus marcas ganan más atención con los creadores que la que compran en anuncios. Pesa la interacción activa (shares, likes, comentarios y guardados) y cuánto dura el interés. Con ese sistema vio la tendencia del jingle de Reese’s Puffs en TikTok, lo regrabó con GloRilla y lo llevó a streaming y YouTube; la compañía reporta 2.5 % más de ventas, sin dar cifras. La agencia Billion Dollar Boy lanzó su Creator Investment Planner, que calcula CPM combinados de creadores y plataformas y estima share of voice e impresiones.",
      cifras: [
        { v: "+2.5 %", t: "ventas interanuales que General Mills le atribuye a la campaña de Reese’s Puffs" },
        { v: "4 señales", t: "que pesa la interacción activa: shares, likes, comentarios y guardados" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Pasar un post orgánico a pauta ya no puede ser corazonada. Las marcas grandes están poniendo reglas pa’ decidir qué se amplifica, y el equipo de content que llegue con su propio puntaje se sienta en la mesa del presupuesto.",
      hacer: "Esta semana, escoge un cliente y arma un puntaje sencillo con shares, guardados y comentarios de sus últimos 30 posts. Propón pautar los tres que salgan más arriba.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/brands-race-to-systematize-how-to-know-what-makes-creator-content-worth-paying-for/" }]
    },
    {
      id: "clix", dep: "content", peso: "secundaria",
      etiquetas: ["Creadores", "Gaming", "Economía de creadores"],
      titular: "Clix, el gamer de 26 millones de seguidores, arma su propio holding con nueve empresas",
      corto: "Clix arma su holding de creador",
      cuerpo: "Cody «Clix» Conrod, profesional de Fortnite con unos 26 millones de seguidores (8.73 millones en Twitch y 6.7 millones en TikTok, entre otras), lanzó en octubre Full Box Inc., un holding que junta sus nueve empresas en tres pilares: operaciones (Clix Gaming, Clix Creative y Dr3amin Clothing), inversiones (como Reach Clipping y XSET) e impacto. Su agente, Darren Glover, es el CEO, y la estrategia es menos alianzas con marcas, pero de más calidad.",
      cifras: [{ v: "26M", t: "seguidores de Clix en sus redes" }],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media/the-gaming-creator-with-more-than-26-million-followers-just-launched-his-own-holding-company/" }]
    },

    {
      id: "viernesgris", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Consumo", "Viernes Negro", "Retail"], fecha: "27 nov 2026 · Santo Domingo",
      titular: "Tiendas llenas y bolsillos flojos: pa’ muchos, el Viernes Negro fue un «viernes gris»",
      corto: "Tiendas llenas, pero un «viernes gris»",
      cuerpo: "Santo Domingo.— En las tiendas de electrodomésticos cerca de la avenida Ovando, El Día encontró mucha gente comparando precios con poco presupuesto. Algunos llamaron al día un «viernes gris» porque las rebajas de hasta 20 % dependían de pagar con tarjetas de bancos específicos. Otros sí encontraron rebajas de hasta RD$6,000 y descuentos de hasta 50 %, y aprovecharon el financiamiento y la devolución de los bancos. Lo más comprado: neveras, estufas, televisores, licuadoras, microondas, colchones y aires acondicionados.",
      cifras: [
        { v: "20 %", t: "rebaja tope en electrodomésticos pagando con tarjetas de bancos específicos" },
        { v: "RD$6,000", t: "rebaja máxima que reportaron algunos compradores" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "El dominicano fue a la tienda, pero a sacar cuentas. Cuando el bolsillo está apretao, la conversación no es el porcentaje: es la cuota, la devolución y la confianza en que el precio es real.",
      hacer: "Antes del lunes, revisa las piezas de diciembre de tus clientes de retail y electrodomésticos: si solo hablan del porcentaje, súmales la cuota mensual o el beneficio del banco en el titular.",
      fuentes: [{ nombre: "El Día", url: "https://eldia.com.do/consumidores-califican-el-viernes-negro-como-un-viernes-gris-por-el-alto-costo-de-la-vida/" }]
    },
    {
      id: "romeoroyce", dep: "rd", peso: "secundaria", para: ["medios", "content", "creatividad"],
      etiquetas: ["Música", "Conciertos", "Bachata"], fecha: "27 nov 2026 · Santiago",
      titular: "¡Wepa! Romeo y Prince Royce agotan dos noches en el Cibao en menos de 24 horas y abren la tercera pa’l 14 de febrero",
      corto: "Romeo y Royce agotan y abren una tercera noche",
      cuerpo: "Romeo Santos y Prince Royce agotaron en menos de 24 horas sus conciertos del 12 y el 13 de febrero en el Estadio Cibao, y anunciaron una tercera y última función pa’l domingo 14, Día de San Valentín. Las boletas salen hoy sábado a las 10:00 a. m. por Uepa Tickets. Según Revista Mercado, el viernes la fila virtual llegó a estimar una espera de 1 hora y 32 minutos, y los organizadores dicen que la gira «Mejor tarde que nunca» ya reunió a más de 1.5 millones de personas.",
      cifras: [
        { v: "3", t: "noches seguidas en el Estadio Cibao: 12, 13 y 14 de febrero de 2027" },
        { v: "1.5M+", t: "personas en la gira, según los organizadores" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Un San Valentín con bachata en Santiago es un momento de marca hecho: regalos, viajes al Cibao, hoteles y restaurantes. Y la conversación en redes ya arrancó.",
      fuentes: [{ nombre: "Revista Mercado", url: "https://revistamercado.do/lifestyle/romeo-santos-prince-royce-tercer-concierto-14-febrero-boletas/" }]
    },
    {
      id: "nacimientos", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Demografía", "ONE"], fecha: "27 nov 2026",
      titular: "RD registra 21,096 nacimientos menos en 2025: una caída de 14.6 %",
      cuerpo: "Según el Anuario de Estadísticas Vitales 2025 de la ONE, el país pasó de 144,855 nacimientos registrados en 2024 a 123,759 en 2025. La baja viene de antes: en 2021 se contaron 174,144, o sea, unos 50,385 menos en cuatro años (cerca de 28.9 %). La ONE aclara que la cifra de 2025 puede subir cuando entren los nacimientos registrados fuera de plazo.",
      cifras: [
        { v: "−14.6 %", t: "nacimientos registrados en 2025 frente a 2024" },
        { v: "123,759", t: "nacimientos registrados en 2025" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ las marcas de bebés, pañales, fórmulas, colegios y seguros, el universo se está achicando. El forecast de 2027 no puede asumir el mismo mercado de hace cuatro años.",
      fuentes: [{ nombre: "Revista Mercado", url: "https://revistamercado.do/money-invest/daily-news/rd-registro-21096-nacimientos-menos-en-2025-una-caida-de-14-6-lo-que-dicen-los-datos-de-la-one/" }]
    },
    {
      id: "jochy", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["TV", "Radio", "Talento"], fecha: "27 nov 2026 · Av. Winston Churchill",
      titular: "Jochy Santos ya tiene su estrella en el Bulevar de las Estrellas, por sus 50 años en radio y TV",
      corto: "Jochy Santos recibe su estrella",
      cuerpo: "Santo Domingo.— La Fundación Bulevar de las Estrellas le entregó una estrella de bronce a Jochy Santos por cinco décadas de trayectoria en la radio, la televisión y el entretenimiento. La develación fue el viernes 27 en el paseo central de la Winston Churchill. Detrás de él están proyectos como «El mismo golpe con Jochy», «Divertido con Jochy» y «Es temprano todavía», que también han lanzado talentos nuevos.",
      fuentes: [{ nombre: "El Día", url: "https://eldia.com.do/legado-de-jochy-santos-queda-estampado-en-el-bulevar-de-las-estrellas/" }]
    },
    {
      id: "cajeros", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Banca", "Banco Central", "Pagos"], fecha: "27 nov 2026",
      titular: "Los cajeros siguen mandando en el efectivo: RD$579,912.8 millones en 103 millones de transacciones hasta septiembre",
      corto: "Los cajeros mueven RD$579,912.8 millones",
      cuerpo: "Con datos del Banco Central, El Dinero reporta que hasta septiembre de 2026 los cajeros automáticos movieron RD$579,912.8 millones en 103,373,191 transacciones. El país tiene 4,043 cajeros, y 44.6 % está en el Gran Santo Domingo. Casi to’ pasa por tarjetas de débito: RD$568,112.7 millones.",
      cifras: [
        { v: "4,043", t: "cajeros automáticos en el país" },
        { v: "44.6 %", t: "están en el Gran Santo Domingo" }
      ],
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/390194/cajeros-automaticos-movilizan-rd579912-8-millones-en-republica-dominicana-a-septiembre-de-2026/" }]
    },
    {
      id: "lac4", dep: "rd", peso: "secundaria", para: ["data"],
      etiquetas: ["Ciberseguridad", "LAC4"], fecha: "27 nov 2026",
      titular: "Francia se suma al LAC4, el centro de ciberseguridad pa’ la región que tiene su sede en Santo Domingo",
      cuerpo: "Francia firmó una carta de intención pa’ entrar como miembro colaborativo al Centro de Competencia en Ciberseguridad para América Latina y el Caribe (LAC4), con sede en Santo Domingo. Creado en 2022, el LAC4 lo financia la Unión Europea, lo implementa la Autoridad de Sistemas de Información de Estonia y ofrece formación técnica, ejercicios con un laboratorio de informática forense y apoyo pa’ estrategias y leyes.",
      fuentes: [{ nombre: "N Digital", url: "https://n.com.do/2026/11/27/francia-se-incorpora-al-centro-regional-de-ciberseguridad-lac4-con-sede-en-santo-domingo/" }]
    }
  ],

  pizarra: ["netflixamazon", "macys", "clientesnuevos", "agentesregulan", "talkability", "viernesgris"],

  frases: [
    { dep: "medios", texto: "Amazon ya cuenta las ventas que salen de Netflix, pero sin ventana de atribución publicada: el número hay que leerlo con lupa.", uso: "para conversaciones de CTV y medición" },
    { dep: "data", texto: "La ICO lo dijo claro: si un agente de IA maneja la campaña, el responsable sigue siendo el anunciante.", uso: "para conversaciones de IA y cumplimiento" },
    { dep: "planning", texto: "El 59 % de las marcas va por clientes nuevos en Navidad. La pregunta es qué hacemos con ellos en enero.", uso: "para conversaciones de plan de temporada" },
    { dep: "creatividad", texto: "En su desfile 100, Macy’s no puso a brillar su logo: puso a brillar a su gente.", uso: "para conversaciones de aniversarios y marca" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Las ventas de Netflix en Amazon" },
      { id: "creatividad", texto: "«What If» de Macy’s" },
      { id: "planning", texto: "El 59 % que va por clientes nuevos" },
      { id: "data", texto: "Juguetes con chatbot y agentes de compra" },
      { id: "content", texto: "El «talkability score» de General Mills" },
      { id: "rd", texto: "Zoom a RD: el «viernes gris»" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "netflixamazon", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "clientesnuevos", titulo: "Arranca la hoja", mes: "Enero",
      revela: "Diciembre trae clientes nuevos: 59 % de las marcas los tiene como audiencia principal. Deja listo desde ya el plan de enero pa’ que vuelvan."
    },
    data: {
      tipo: "secreto", nota: "agentesregulan", titulo: "Destapa el expediente",
      texto: "Nueva York prohibió los juguetes con chatbot pa’ niños de [[12 años o menos]], con multas de hasta [[US$15,000 por día]] por violación."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "romeoroyce", titulo: "La pregunta del patio",
      p: "¿Qué día es la tercera y última noche de Romeo Santos y Prince Royce en el Estadio Cibao?",
      opciones: ["12 de febrero", "13 de febrero", "14 de febrero"], correcta: 2,
      explicacion: "Agotaron el 12 y el 13 en menos de 24 horas y abrieron el 14, Día de San Valentín. Las boletas salen este sábado a las 10:00 a. m. por Uepa Tickets."
    }
  }
};
