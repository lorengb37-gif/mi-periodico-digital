/*
  El Pulso Publicitario · edición N.º 312 · 8 de noviembre de 2026
*/
window.EDICION = {
  numero: 312,
  fechaISO: "2026-11-08",
  fecha: "Domingo 8 de noviembre 2026",
  fechaCorta: "8 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Lo hecho a mano, lo claro y lo que el cliente puede medir le está ganando a lo que solo hace ruido.",
    largo: "DoorDash va por Instacart en un trato de unos US$17,000 millones y el retail media se reacomoda. Levi’s filmó un anuncio de plastilina sin IA, Target y Walmart se pelean la Navidad, y California le pone freno a los feeds adictivos pa’ menores de 16. Aquí en el patio, la gente compra más jeepetas y el ITLA investiga un posible robo de datos. El consejo: antes de lanzar lo próximo, pregúntate qué parte de tu idea el cliente puede ver, medir y proteger.",
    corto: "Antes de lanzar lo próximo, pregúntate qué parte de la idea el cliente puede ver, medir y proteger.",
    porDep: {
      medios: "Cuando dos redes de retail media se juntan, cambian las reglas de compra. Pide ya cómo se va a medir antes de mover presupuesto.",
      creatividad: "Lo hecho a mano se nota, y hoy se valora. Si tu idea lleva oficio, dilo con orgullo.",
      planning: "En Navidad el cliente que no se diferencia compite solo por precio. Define qué lo hace distinto antes de bloquear pauta.",
      data: "Si tu cliente tiene público menor de 16 en plataformas, revisa ya qué funciones usa su contenido y su pauta.",
      content: "El video largo en Instagram todavía no tiene un pago estable. Pruébalo, pero no le armes el plan a un solo formato.",
      rd: "Cuando los datos de una institución se ven en riesgo, la confianza se mueve. Revisa cómo guarda tu cliente los datos de su gente."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "DoorDash va por Instacart y el retail media se reacomoda · Reddit prueba anuncios en los resultados de búsqueda" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Levi’s apuesta por la plastilina, hecha a mano y sin IA, pa’ su campaña de Navidad" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Target y Walmart se juegan la Navidad con campañas muy distintas" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Google, Meta y TikTok demandan pa’ frenar la ley californiana contra los feeds adictivos pa’ menores" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Instagram le paga a creadores pa’ que suban video largo · TikTok Shop estrena app aparte" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Se compran más jeepetas · el ITLA investiga un posible robo de datos · cuidado con el impulso en el Viernes Negro · el subsidio eléctrico se dispara" }
  },

  notas: [
    {
      id: "instacart", dep: "medios", peso: "principal",
      etiquetas: ["Retail media", "DoorDash", "Instacart"],
      titular: "DoorDash va por Instacart y el retail media se reacomoda",
      corto: "DoorDash va por Instacart en un trato de US$17,000 millones",
      cuerpo: "DoorDash anunció que comprará a Instacart en un trato de unos US$17,000 millones, según Digiday. El cierre no se espera antes de finales de 2027 y podría llegar hasta la primera mitad de 2028, y necesita la aprobación de la FTC. Cada una tiene su propio negocio de anuncios, DoorDash Ads e Instacart Ads. Los analistas ven el trato como un posible primer paso de consolidación en el retail media, un mercado que en EE. UU. rozaría los US$70,000 millones este año.",
      cifras: [
        { v: "US$17,000 millones", t: "valor aproximado del trato" },
        { v: "89 %", t: "del dinero nuevo de retail media en EE. UU. lo captarían Walmart y Amazon este año, según eMarketer" },
        { v: "2027–2028", t: "fecha de cierre posible, si la FTC lo aprueba" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Hoy el retail media es un mundo de pocos gigantes y muchas redes chicas. Si dos plataformas se juntan, cambian el alcance, el precio y la forma de medir, pero el cierre está lejos. No hay que mover plan todavía, pero sí hay que preguntar.",
      hacer: "Esta semana, pedirle a un cliente de e-commerce o delivery que anote cuánto de su pauta de retail media va a DoorDash o Instacart, y pedir a los reps cómo medirían la incrementalidad si se juntan.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/here-are-the-questions-on-advertisers-minds-after-the-doordash-instacart-deal/" }]
    },
    {
      id: "redditsearch", dep: "medios", peso: "secundaria",
      etiquetas: ["Reddit", "Search", "Anuncios"],
      titular: "Reddit prueba anuncios dentro de los resultados de búsqueda",
      corto: "Reddit prueba anuncios en su búsqueda",
      cuerpo: "Reddit está probando anuncios en los resultados de búsqueda dentro de su app, según Marketing Dive. Se segmentan por la palabra buscada, llevan una marca de anuncio pequeña y empiezan con un grupo selecto de anunciantes. Una encuesta de Reddit de julio dice que el 72 % de los usuarios llega a la plataforma buscando información. Su CEO, Steve Huffman, reconoció que las visitas desde buscadores bajaron en más de 1 millón por semana en octubre.",
      cifras: [
        { v: "72 %", t: "de los usuarios llega a Reddit buscando información, según un estudio de la plataforma" },
        { v: "−1 millón", t: "de visitas por semana desde buscadores, en promedio, en octubre" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es un formato de búsqueda con intención clara, pero con tráfico en baja. Pa’ medios, conviene mirarlo con ojo antes de comprometer presupuesto.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/sociable-reddit-tests-ads-in-search-results/873874/" }]
    },

    {
      id: "levis", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Levi’s", "Stop motion"],
      titular: "Levi’s hace su Navidad en plastilina: cuatro horas de filmación por cada segundo, y sin IA",
      corto: "Levi’s hace su Navidad en plastilina, sin IA",
      cuerpo: "Levi’s lanzó «Let’s Get Fuzzy», un spot de 60 segundos en stop motion con plastilina, sobre un yeti llamado Gus que se enamora de un suéter rojo, según Marketing Dive. Cada segundo de animación requirió cuatro horas de filmación y la marca dice que no usó IA. El spot hace un guiño a «Clayman», su primer comercial global, de 1995. El medio cita un estudio de Gartner de 2026 según el cual la mitad de los consumidores prefiere marcas que no usan IA generativa en publicidad.",
      cifras: [
        { v: "4 horas", t: "de filmación por cada segundo de animación" },
        { v: "60 segundos", t: "dura el spot «Let’s Get Fuzzy»" },
        { v: "50 %", t: "de los consumidores prefiere marcas sin IA generativa en sus anuncios, según Gartner 2026" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Levi’s no solo hizo un anuncio lindo: contó que está hecho a mano. Pa’ creatividad, el oficio visible es un argumento más, sobre todo cuando medio mundo usa IA pa’ todo.",
      hacer: "En la próxima reunión creativa, escoger un cliente y proponer una pieza con un componente hecho a mano (papel, plastilina, ilustración) y decidir cómo contar el proceso en redes.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/levis-claymation-holiday-campaign-celebrates-handmade-craft-amid-ai-bloat/873496/" }]
    },

    {
      id: "targetwalmart", dep: "planning", peso: "principal",
      etiquetas: ["Navidad", "Target", "Walmart"],
      titular: "Target y Walmart se juegan la Navidad: uno con los Muppets, otro con una «Academia de Regalos»",
      corto: "Target y Walmart se juegan la Navidad",
      cuerpo: "Según Marketing Dive, Walmart lanzó una campaña inspirada en «The Muppet Christmas Carol», con Walton Goggins como Scrooge y Miss Piggy hablando de moda con creadores. Target, que reconoce que no puede ganarle en precio a Walmart, apuesta por personalización y curaduría con su «Holiday Academy of Giftology». Kantar dice que el 16 % de los compradores planea gastar menos esta temporada. En el segundo trimestre, las ventas comparables de Target subieron 3.8 % y las de Walmart en EE. UU., 2.6 %.",
      cifras: [
        { v: "16 %", t: "de los compradores planea gastar menos esta Navidad, según Kantar" },
        { v: "+3.8 %", t: "ventas comparables de Target en el segundo trimestre" },
        { v: "+2.6 %", t: "ventas comparables de Walmart en EE. UU. en el segundo trimestre" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Cuando una marca no puede ganar por precio, gana por otra cosa: curaduría, personalidad o servicio. Pa’ planning, es la pregunta que hay que hacerle a cada cliente antes de cerrar la Navidad.",
      hacer: "Esta semana, hacer con un cliente un ejercicio de una hoja: «si no podemos ganar por precio, ¿por qué nos escogen?», y ajustar la pauta de diciembre a esa respuesta.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/target-vs-walmart-holiday-marketings-stakes-feel-higher-this-year/873343/" }]
    },

    {
      id: "ab1709", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "California", "Menores"],
      titular: "Google, Meta y TikTok demandan pa’ frenar la ley de California contra los feeds adictivos pa’ menores",
      corto: "Google, Meta y TikTok demandan por la ley AB 1709",
      cuerpo: "Google, Meta y TikTok presentaron demandas separadas pa’ bloquear la ley AB 1709 de California, que firmó el gobernador Gavin Newsom el 10 de septiembre, según Social Media Today. La ley obliga a las plataformas a quitar de las cuentas de menores de 16 años los «feeds adictivos, el scroll infinito y la reproducción automática», o a prohibir a esos usuarios. Entra en vigor el año que viene. Las empresas dicen que viola la Primera Enmienda.",
      cifras: [
        { v: "Menores de 16", t: "usuarios a quienes aplicaría la ley" },
        { v: "3", t: "empresas que demandaron: Google, Meta y TikTok" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "La regulación sobre menores ya no se discute solo en leyes: se está peleando en tribunales.",
        "Si la ley se mantiene, las plataformas tendrían que cambiar cómo se muestra el contenido a menores, y eso afectaría el alcance de los anuncios."
      ],
      hacer: "Esta semana, revisar qué clientes tienen público menor de 16 años en sus campañas en Meta, TikTok o YouTube y anotar cómo cambiaría su alcance si esas funciones se quitan.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-tiktok-and-google-push-back-on-california-law/873955/" }]
    },

    {
      id: "iglongform", dep: "content", peso: "principal",
      etiquetas: ["Instagram", "Creadores", "Video largo"],
      titular: "Instagram le paga a creadores pa’ que suban video largo, hasta 90 minutos",
      corto: "Instagram le paga a creadores por video largo",
      cuerpo: "Instagram anunció pruebas de «Features», una opción que permite subir videos de hasta 90 minutos, según Social Media Today. Business Insider reportó que Meta le ofreció pagos únicos a creadores grandes, entre US$50,000 y hasta US$500,000, algo que Meta no confirmó en detalle. Adam Mosseri dijo en Threads que «la economía importa mucho» y que buscan formas de que los creadores de video largo ganen dinero. VidIQ estima que los creadores con más de 1 millón de suscriptores ganan unos US$50,000 al mes en YouTube y entre US$5,000 y US$15,000 en Instagram.",
      cifras: [
        { v: "90 minutos", t: "duración máxima del video en «Features»" },
        { v: "US$500,000", t: "pago máximo reportado a un creador, según Business Insider" },
        { v: "US$5,000–15,000", t: "ganancia mensual estimada en Instagram de creadores con más de 1 millón de seguidores, según VidIQ" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Instagram quiere que la gente se quede más tiempo, pero todavía no hay un pago estable pa’ el video largo. Pa’ content, es un formato que vale la pena probar con un cliente, sin dejar el resto del plan por eso.",
      hacer: "Esta semana, escoger un contenido de un cliente que ya funcione en YouTube y evaluar si cabe como video largo en Instagram, con una pregunta clara: ¿cuánto tiempo de visualización genera?",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-offers-to-pay-creators-for-long-form-content/873402/" }]
    },
    {
      id: "tiktokshop", dep: "content", peso: "secundaria",
      etiquetas: ["TikTok", "Social commerce", "Shopping"],
      titular: "TikTok Shop estrena app propia, por ahora en cuatro países de Asia",
      corto: "TikTok Shop estrena app aparte",
      cuerpo: "TikTok lanzó TikTok Shop como app independiente, enfocada en listados de productos, con algunos videos y transmisiones en vivo pa’ dar contexto, según Social Media Today. Por ahora se puede descargar en Singapur, Tailandia, Malasia y Filipinas, según Matt Navarra. El medio cita que TikTok generó US$26,200 millones en ventas globales en la primera mitad de 2025.",
      cifras: [
        { v: "4", t: "países con la app por ahora: Singapur, Tailandia, Malasia y Filipinas" },
        { v: "US$26,200 millones", t: "de ventas globales de TikTok en la primera mitad de 2025, según Marketing Maze" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Todavía no llega a América, pero muestra hacia dónde va el social commerce. Pa’ content, vale la pena mirar cómo se vende ahí.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-launches-standalone-shopping-app/873952/" }]
    },

    {
      id: "jeepetas", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Consumo", "Autos", "Aduanas"], fecha: "7 nov 2026",
      titular: "La importación de vehículos crece 8.71 % y las jeepetas se llevan el gran pedazo",
      corto: "Importación de vehículos crece 8.71 % y mandan las jeepetas",
      cuerpo: "Santo Domingo.— Entre enero y septiembre de 2026 entraron 108,944 vehículos al país, un 8.71 % más que el año pasado, y el valor llegó a US$1,606.80 millones, un alza de 10.64 %, según datos de la Dirección General de Aduanas publicados por elDinero. Las jeepetas fueron las que más empujaron: 55,113 unidades, un 21.95 % más. En cambio, los automóviles bajaron 12.98 %. Los vehículos nuevos subieron 16.83 % en valor y los usados, 2.42 %.",
      cifras: [
        { v: "108,944", t: "vehículos importados de enero a septiembre" },
        { v: "+21.95 %", t: "más jeepetas importadas que en 2025" },
        { v: "−12.98 %", t: "menos automóviles" },
        { v: "+16.83 %", t: "en valor de vehículos nuevos" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El dominicano está comprando más jeepetas y menos carros, y más vehículos nuevos que usados. Pa’ planning, medios y creatividad, es una señal de por dónde va la categoría de autos y de qué consumidor está comprando.",
      hacer: "Esta semana, llevar al cliente de autos, seguros o financiamiento el dato de las jeepetas y proponer que su mensaje de fin de año hable del tipo de vehículo que más se vende.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387621/importacion-de-vehiculos-crece-8-71-en-unidades-y-10-64-en-valor-entre-enero-y-septiembre-de-2026/" }]
    },
    {
      id: "itla", dep: "rd", peso: "secundaria", para: ["data", "content"],
      etiquetas: ["Ciberseguridad", "ITLA"], fecha: "7 nov 2026",
      titular: "El ITLA investiga un posible hackeo y robo de datos de estudiantes",
      cuerpo: "Santo Domingo.— El Instituto Tecnológico de Las Américas (ITLA) informó que investiga un posible incidente de ciberseguridad, según Remolacha y Listín Diario. La institución hace una evaluación técnica junto al Centro Nacional de Ciberseguridad (CNCS). Por ahora no se detalla qué datos estarían involucrados ni cuántas personas.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ data, es un recordatorio de que un incidente de datos pega la confianza de toda una institución. Y pa’ content, comunicar con claridad y a tiempo es parte del trabajo.",
      fuentes: [
        { nombre: "Remolacha", url: "https://remolacha.net/2026/11/itla-investiga-posible-hackeo-y-robo-de-datos-de-estudiantes/" },
        { nombre: "Listín Diario", url: "https://listindiario.com/la-republica/20261107/itla-investiga-supuesto-hackeo-robo-datos-estudiantes_929270.html" }
      ]
    },
    {
      id: "viernesnegro", dep: "rd", peso: "secundaria", para: ["planning", "content", "creatividad"],
      etiquetas: ["Viernes Negro", "Consumo", "Navidad"], fecha: "5 nov 2026",
      titular: "Viernes Negro y Navidad: elDinero le pide a la gente no dejarse llevar del impulso",
      cuerpo: "Santo Domingo.— elDinero advierte que las ofertas de Viernes Negro y Navidad pueden empujar a comprar por impulso. Entre las señales de alerta menciona gastar más de lo planificado y acumular deudas en tarjetas. Los consejos incluyen fijar un presupuesto, hacer una lista, comparar precios y esperar de 24 a 48 horas antes de comprar. El artículo no trae cifras de encuestas.",
      tocaTitulo: "¿Y eso qué?",
      toca: "El consumidor está recibiendo el mensaje de comprar con cabeza. Pa’ planning, content y creatividad, hay espacio pa’ mensajes de ofertas claras y compras planificadas, no solo de urgencia.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387389/ofertas-por-viernes-negro-y-navidad-evite-dejarse-llevar-del-impulso-al-comprar/" }]
    },
    {
      id: "subsidio", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Economía", "Energía"], fecha: "7 nov 2026",
      titular: "El subsidio eléctrico llegó a RD$98,132.8 millones en diez meses y va camino a un récord",
      cuerpo: "Santo Domingo.— El Gobierno destinó RD$98,132.8 millones al subsidio eléctrico entre enero y octubre, un 6.1 % más de lo presupuestado originalmente, según elDinero con datos de Digepres. Ya se gastó el 94.3 % del presupuesto reformulado, y a este ritmo podría llegar a unos RD$118,000 millones en diciembre. En 2025 fue RD$105,849 millones.",
      cifras: [
        { v: "RD$98,132.8 millones", t: "gastados en el subsidio eléctrico de enero a octubre" },
        { v: "~RD$118,000 millones", t: "proyección a diciembre, según elDinero" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning con clientes de energía, banca o consumo masivo, es otra señal de la presión sobre las cuentas del país.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387776/subsidio-electrico-absorbio-rd98132-8-millones-en-enero-octubre-de-este-ano/" }]
    }
  ],

  pizarra: ["instacart", "levis", "targetwalmart", "ab1709", "iglongform", "jeepetas"],

  frases: [
    { dep: "medios", texto: "DoorDash va por Instacart en US$17,000 millones: el retail media se está juntando, y quien compra medios tiene que preguntar cómo se va a medir.", uso: "para conversaciones de retail media" },
    { dep: "creatividad", texto: "Levi’s filmó cuatro horas por cada segundo de su anuncio y lo dice: el oficio también es parte de la idea.", uso: "para conversaciones de craft e IA" },
    { dep: "data", texto: "Google, Meta y TikTok demandan pa’ frenar la ley de California: la regulación de menores se pelea ahora en los tribunales.", uso: "para conversaciones de regulación" },
    { dep: "planning", texto: "Target sabe que no le gana a Walmart en precio, así que apuesta por curaduría: toda marca necesita saber por qué la escogen.", uso: "para conversaciones de posicionamiento" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "DoorDash va por Instacart" },
      { id: "creatividad", texto: "Levi’s hace su Navidad en plastilina" },
      { id: "planning", texto: "Target vs. Walmart en Navidad" },
      { id: "data", texto: "La ley de California llega a los tribunales" },
      { id: "content", texto: "Instagram paga por video largo" },
      { id: "rd", texto: "Zoom a RD: las jeepetas mandan" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "instacart", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "targetwalmart", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Kantar dice que el 16 % de los compradores planea gastar menos esta Navidad. Si tu cliente no puede ganar por precio, define con él por qué lo escogen."
    },
    data: {
      tipo: "secreto", nota: "ab1709", titulo: "Destapa el expediente",
      texto: "La ley AB 1709 de California, firmada el [[10 de septiembre]], aplica a menores de [[16 años]] y obliga a quitar feeds adictivos o a prohibir a esos usuarios."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "jeepetas", titulo: "La pregunta del patio",
      p: "¿Qué tipo de vehículo empujó más la importación entre enero y septiembre?",
      opciones: ["Los automóviles", "Las jeepetas", "Los autobuses"], correcta: 1,
      explicacion: "Según datos de Aduanas publicados por elDinero, entraron 55,113 jeepetas, un 21.95 % más que el año pasado, mientras los automóviles bajaron 12.98 %."
    }
  }
};
