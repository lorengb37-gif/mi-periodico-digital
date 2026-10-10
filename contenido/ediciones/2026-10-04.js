/*
  El Pulso Publicitario · edición N.º 277 · 4 de octubre 2026
  Migrada del diseño anterior. Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  "numero": 277,
  "fechaISO": "2026-10-04",
  "fecha": "Domingo 4 de octubre 2026",
  "fechaCorta": "4 oct 2026",
  "hora": "8:00 AM",
  "lugar": "Santo Domingo · GMT-4",
  "intro": "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos y una sola lectura, to’ los días a las 8:00 AM.",
  "videoPortada": null,
  "consejo": {
    "firma": "La Redacción · El Pulso",
    "tesis": "Apple frena a The Trade Desk en Safari, Cadbury lanza su mayor campaña en EE.UU. y Jon Cook deja VML: la semana arranca con el ecosistema de medios en movimiento",
    "largo": "Domingo de víspera: mañana arranca Advertising Week NY y llega con una noticia que obliga a revisar el plan de medios. Según AdTech Radar y PPC Land, iOS 27 bloquea en Safari el dominio de entrega de anuncios de The Trade Desk y también a proveedores de identidad como UID2, ID5, LiveRamp, Audigent y Permutive. Antes de prometer alcance en iPhone, conviene medir cuánto de cada campaña programática corre en Safari. En creatividad, Cadbury estrenó \"There's Magic in More\", su mayor campaña en EE.UU., con un clutch de cristal en la Semana de la Moda de Nueva York, y The Drum lanzó su primera campaña en EE.UU. con Jellyfish. En agencias, WPP anunció que Jon Cook dejará VML en marzo de 2027 y que Eric Campbell lo sucederá. En data, las agencias reportan huecos de medición en los anuncios de ChatGPT, y en social Snapchat lanzó con creators su primera campaña B2B. Por ser domingo, varias piezas van marcadas con ⚡ Semana o 📚 Referencia.",
    "corto": "Por ser domingo, varias piezas van marcadas con ⚡ Semana o 📚 Referencia.",
    "porDep": {}
  },
  "departamentos": {
    "medios": {
      "nombre": "Medios",
      "oficio": "Señal · Alcance · Frecuencia · Inventario",
      "resumen": "iOS 27 bloquea a The Trade Desk en Safari · Advertising Week NY arranca mañana"
    },
    "creatividad": {
      "nombre": "Creatividad",
      "oficio": "Idea · Craft · Copy · Arte · Producción",
      "resumen": "Cadbury lanza su mayor campaña en EE.UU. · The Drum estrena campaña con Jellyfish"
    },
    "planning": {
      "nombre": "Planning",
      "oficio": "Plataformas · Audiencias · Forecast · Temporadas",
      "resumen": "Jon Cook deja VML en marzo de 2027 · Hershey sube su inversión de marca"
    },
    "data": {
      "nombre": "Data",
      "oficio": "Regulación · Privacidad · Medición · IA",
      "resumen": "Los anuncios de ChatGPT siguen con huecos de medición"
    },
    "content": {
      "nombre": "Content",
      "oficio": "Plataformas sociales · Herramientas · IA",
      "resumen": "Snapchat lanza su primera campaña B2B con creators · YouTube amplía Watch With"
    },
    "rd": {
      "nombre": "Zoom a RD",
      "oficio": "Campañas · Premios · Medios · Agenda",
      "resumen": "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio."
    }
  },
  "notas": [
    {
      "id": "ios-bloquea-the",
      "dep": "medios",
      "peso": "principal",
      "etiquetas": [
        "Programmatic",
        "Safari",
        "iOS 27"
      ],
      "titular": "iOS 27 bloquea a The Trade Desk en Safari",
      "toca": "Si una parte de la audiencia programática vive en Safari con iOS 27, el alcance planificado en The Trade Desk puede no entregarse. Y cuanto más usuarios actualicen, mayor es el hueco.",
      "hacer": "Esta semana, sacar de los reportes de 2 clientes el porcentaje de impresiones programáticas que corre en Safari para iPhone, y pedir al trader una proyección de entrega con y sin esa audiencia antes de cerrar el plan de Q4.",
      "cuerpo": "Según AdTech Radar, The Trade Desk no puede servir anuncios en Safari en los iPhone y iPad con iOS 27, porque Apple añadió adsrvr.org, el dominio central de entrega de anuncios del DSP, a una lista de dominios que Safari bloquea siempre. Bloquear un dominio de entrega es más grave que bloquear uno de identidad: el anuncio ni siquiera se muestra. PPC Land rastreó la regla hasta un cambio de WebKit del 13 de febrero de 2026, de 11 líneas de código.",
      "cifras": [
        {
          "v": "adsrvr.org",
          "t": "dominio de entrega de The Trade Desk bloqueado en Safari"
        },
        {
          "v": "11",
          "t": "líneas de código en WebKit (13 de febrero)"
        },
        {
          "v": "iOS 27",
          "t": "solo afecta a dispositivos ya actualizados"
        }
      ],
      "fuentes": [
        {
          "nombre": "AdTech Radar",
          "url": "https://adtechradar.com/2026/09/29/the-trade-desk-safari-apple-ios-27/"
        }
      ]
    },
    {
      "id": "id5-pide-que",
      "dep": "medios",
      "peso": "secundaria",
      "etiquetas": [
        "Identidad",
        "ID5",
        "Apple"
      ],
      "titular": "ID5 pide que los reguladores miren el bloqueo de Apple",
      "toca": "Los proveedores de identidad que usan nuestros clientes pueden perder señal en Safari. Conviene saber cuáles tocan nuestros planes.",
      "cuerpo": "Según PPC Land, el CEO de ID5, Mathieu Roche, calificó el cambio de iOS 27 como un ataque al modelo de negocio de la web, que favorece a las apps donde Apple cobra comisión, y sugirió que más reguladores examinen sus prácticas. AdExchanger reporta que la lista de Apple pasó de unas pocas empresas a una biblioteca de cientos de empresas de CDP, ad tech y martech.",
      "fuentes": [
        {
          "nombre": "PPC Land",
          "url": "https://ppc.land/id5-faces-apples-ios-27-safari-block-as-ceo-says-regulators-should-look/"
        }
      ]
    },
    {
      "id": "advertising-week-arranca",
      "dep": "medios",
      "peso": "secundaria",
      "etiquetas": [
        "Eventos",
        "Advertising Week NY"
      ],
      "titular": "Advertising Week NY arranca mañana, del 5 al 8 de octubre",
      "cuerpo": "El evento se celebra en The Penn District de Nueva York, con más de 1,300 speakers y más de 500 sesiones, y CTV, IA, creators y data entre sus ejes. ADWEEK House: Advertising HQ corre las mismas fechas. Digiday publicó una guía de qué está dentro y fuera del programa de este año.",
      "fuentes": [
        {
          "nombre": "Digiday",
          "url": "https://digiday.com/marketing/digidays-guide-to-whats-in-and-out-for-advertising-week-ny-2026/"
        }
      ]
    },
    {
      "id": "cadbury-estrena-there",
      "dep": "creatividad",
      "peso": "principal",
      "etiquetas": [
        "Campañas",
        "Cadbury",
        "Hershey"
      ],
      "titular": "Cadbury estrena \"There's Magic in More\", su mayor campaña en EE.UU., con un clutch de cristal",
      "toca": "Un objeto físico con cultura de moda, una serie social y un spot de 30 segundos conviven en la misma idea. Es un caso de cómo un producto cotidiano gana relevancia con una pieza que la gente quiere compartir.",
      "hacer": "Workshop de 60 minutos esta semana: tomar un producto de un cliente de consumo masivo y proponer un objeto de edición limitada y una mini serie social que acompañen la campaña principal.",
      "cuerpo": "Según Marketing Dive, Cadbury lanza una plataforma de marca de varios años, la más grande que ha hecho en EE.UU. Debutó en la Semana de la Moda de Nueva York con NYLON y la marca LUAR, con cinco clutches aislantes cubiertos de cristal para llevar y compartir barras XL. Incluye un spot hero de 30 segundos dirigido por Tom Dream y una serie social episódica sobre un pasante del \"Department of More\". Corre en TV lineal, video digital, social pagado, display y streaming, con MiltonOne (Publicis) y Saatchi & Saatchi Nueva York.",
      "cifras": [
        {
          "v": "5",
          "t": "clutches de edición limitada con LUAR y NYLON"
        },
        {
          "v": "30\"",
          "t": "spot hero dirigido por Tom Dream"
        },
        {
          "v": "+30%",
          "t": "inversión de marca proyectada por Hershey (interanual)"
        }
      ],
      "fuentes": [
        {
          "nombre": "Marketing Dive",
          "url": "https://www.marketingdive.com/news/cadbury-pairs-crystal-clutch-with-comedy-series-for-major-us-campaign/830112/"
        }
      ]
    },
    {
      "id": "the-drum-lanza",
      "dep": "creatividad",
      "peso": "secundaria",
      "etiquetas": [
        "Campañas",
        "The Drum",
        "Jellyfish"
      ],
      "titular": "The Drum lanza su primera campaña en EE.UU.: \"Marketing's changing. Don't miss a beat\"",
      "cuerpo": "Con Jellyfish, The Drum juega con anuncios icónicos que ya forman parte de la cultura: una pieza dice \"Taste the Metaverse\" sobre imágenes de arcoíris, y otra, \"America Runs on Big Data\", en la estética de una cadena de café y donas. Según The Drum, llega tras un año de crecimiento histórico en EE.UU.",
      "fuentes": [
        {
          "nombre": "The Drum",
          "url": "https://www.thedrum.com/news/building-its-massive-momentum-the-drum-launches-first-major-us-ad-campaign"
        }
      ]
    },
    {
      "id": "jon-cook-deja",
      "dep": "planning",
      "peso": "principal",
      "etiquetas": [
        "Liderazgo",
        "WPP",
        "VML"
      ],
      "titular": "Jon Cook deja VML y WPP Creative; Eric Campbell será el nuevo CEO global de VML",
      "toca": "Un cambio de mando en una red creativa de este tamaño suele traer ajustes de equipos y prioridades. Y los clientes de la red querrán saber quién lidera su cuenta.",
      "hacer": "Esta semana, listar los clientes y los competidores que trabajan con redes de WPP, y anotar los contactos del equipo que cambian. Es el mapa para detectar oportunidades de new business.",
      "cuerpo": "Según Adweek, Jon Cook, CEO global de VML y de WPP Creative, dejará WPP tras tres décadas para su \"próximo capítulo\". Seguirá en el cargo hasta marzo de 2027 para facilitar la transición. Eric Campbell, hoy CEO de VML y WPP Creative en Norteamérica, lo sucederá como CEO global de VML y mantendrá su responsabilidad en Norteamérica.",
      "fuentes": [
        {
          "nombre": "Adweek",
          "url": "https://www.adweek.com/agencies/jon-cook-steps-down-as-vml-and-wpp-creative-boss-eric-campbell-to-succeed/"
        }
      ]
    },
    {
      "id": "hershey-proyecta-inversion",
      "dep": "planning",
      "peso": "secundaria",
      "etiquetas": [
        "Señales",
        "Hershey",
        "Inversión"
      ],
      "titular": "Hershey proyecta +30% de inversión de marca para 2026 y 2027",
      "toca": "Una categoría que sube su inversión de marca es una oportunidad: sus competidores tendrán que decidir si responden con más presión o con diferenciación.",
      "cuerpo": "Según Marketing Dive y Portada, el lanzamiento de Cadbury llega cuando The Hershey Company proyecta un aumento de 30% interanual en su inversión de marca, para impulsar el crecimiento de 2026 y 2027.",
      "fuentes": [
        {
          "nombre": "Portada",
          "url": "https://www.portada-online.com/feature/cadbury-increasing-brand-investment-cole-haan-jeep-petsmart-and-five-more-brand-moves/"
        }
      ]
    },
    {
      "id": "los-anuncios-chatgpt",
      "dep": "data",
      "peso": "principal",
      "etiquetas": [
        "Medición",
        "ChatGPT Ads",
        "IA"
      ],
      "titular": "Los anuncios de ChatGPT siguen con huecos de medición que mantienen los presupuestos en nivel de prueba",
      "hacer": "Si un cliente ya prueba ChatGPT Ads, el lunes comparar los clics y conversiones del panel de OpenAI con los de nuestro propio tracking, y documentar la diferencia antes de pedir más presupuesto.",
      "cuerpo": "Digiday reporta que los vacíos de medición de OpenAI mantienen los presupuestos de ChatGPT Ads en nivel de prueba. Las agencias describen formularios que llegan sin que la plataforma registre conversiones, y conversiones que aparecen entre 24 y 36 horas tarde, frente a unas pocas horas en Google. OpenAI lanzó herramientas de medición, incluida su propia Conversions API, y LiveRamp fue el primer socio de CAPI, con su Conversions API Hub anunciado el 10 de junio.",
      "fuentes": [
        {
          "nombre": "Digiday",
          "url": "https://digiday.com/marketing/openais-measurement-gaps-are-keeping-chatgpt-ads-budgets-at-test-level/"
        }
      ]
    },
    {
      "id": "snapchat-lanza-spend",
      "dep": "content",
      "peso": "principal",
      "etiquetas": [
        "Creators",
        "Snapchat",
        "B2B"
      ],
      "titular": "Snapchat lanza \"Spend Smarter\", su primera campaña B2B con creators",
      "toca": "Una plataforma usa a creators de marketing para venderle a los marketers. Es un recordatorio de que los casos de cliente funcionan mejor contados por voces con audiencia propia.",
      "hacer": "Esta semana, revisar los datos de 2 clientes que ya pautan en Snapchat y pedir una prueba de incrementalidad antes de dar por buena la cifra de la plataforma. Luego, transformar un caso propio en una pieza de creator.",
      "cuerpo": "Según Roastbrief y LBB, Snapchat convierte casos de éxito de anunciantes como Supercell, Clarins, LOOKFANTASTIC, KFC y ASICS en contenido de creators de marketing, en EE.UU. y Reino Unido, distribuido en Instagram, TikTok, Substack y paid media. La plataforma plantea tres ejes: el alcance que los anunciantes pierden, cómo hacer trabajar mejor la atención y el rendimiento de una inversión más inteligente. Cita un análisis de Measured con 19.3% más iROAS incremental en Snapchat que el promedio (dato presentado por Snapchat).",
      "cifras": [
        {
          "v": "19.3%",
          "t": "más iROAS que el promedio (Measured, vía Snapchat)"
        },
        {
          "v": "5",
          "t": "anunciantes citados: Supercell, Clarins, LOOKFANTASTIC, KFC, ASICS"
        },
        {
          "v": "US+UK",
          "t": "mercados del lanzamiento"
        }
      ],
      "fuentes": [
        {
          "nombre": "Roastbrief",
          "url": "https://roastbrief.us/snapchat-challenges-outdated-media-habits-with-new-spend-smarter-creator-campaign/"
        }
      ]
    },
    {
      "id": "youtube-amplia-watch",
      "dep": "content",
      "peso": "secundaria",
      "etiquetas": [
        "Video",
        "YouTube",
        "Watch With"
      ],
      "titular": "YouTube amplía Watch With con un botón para reaccionar en vivo",
      "cuerpo": "Según el resumen Creator Weekly, la expansión de Watch With añade un botón \"React live\" en el panel de compartir de transmisiones elegibles, para que un creator transmita su reacción desde el teléfono. Es una pista de que ver en compañía de un creator gana espacio como formato.",
      "fuentes": [
        {
          "nombre": "Creator Weekly",
          "url": "https://www.peggyktc.com/2026/09/creator-weekly-youtube-watch-with.html"
        }
      ]
    }
  ],
  "pizarra": [
    "ios-bloquea-the",
    "cadbury-estrena-there",
    "jon-cook-deja",
    "los-anuncios-chatgpt",
    "snapchat-lanza-spend"
  ],
  "frases": [
    {
      "dep": "medios",
      "texto": "Apple bloqueó en Safari el dominio de anuncios de The Trade Desk con iOS 27.",
      "uso": "para conversaciones sobre programmatic y privacidad"
    },
    {
      "dep": "creatividad",
      "texto": "Cadbury estrenó un clutch de cristal para barras XL en la Semana de la Moda.",
      "uso": "para conversaciones sobre campañas con producto físico"
    },
    {
      "dep": "planning",
      "texto": "Jon Cook se va de VML en marzo de 2027 y Eric Campbell toma su lugar.",
      "uso": "para conversaciones sobre agencias y liderazgo"
    },
    {
      "dep": "data",
      "texto": "Las agencias dicen que los anuncios de ChatGPT reportan conversiones con horas de retraso.",
      "uso": "para conversaciones sobre medición en IA"
    }
  ],
  "encuesta": {
    "pregunta": "Dímelo, ¿qué nota te llevas hoy?",
    "nota": "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    "opciones": [
      {
        "id": "medios",
        "texto": "iOS 27 bloquea a The Trade Desk en Safari"
      },
      {
        "id": "creatividad",
        "texto": "Cadbury estrena \"There's Magic in More\", su mayor campaña en EE.UU., con un clutch de cristal"
      },
      {
        "id": "planning",
        "texto": "Jon Cook deja VML y WPP Creative; Eric Campbell será el nuevo CEO global de VML"
      },
      {
        "id": "data",
        "texto": "Los anuncios de ChatGPT siguen con huecos de medición que mantienen los presupuestos en nivel de prueba"
      },
      {
        "id": "content",
        "texto": "Snapchat lanza \"Spend Smarter\", su primera campaña B2B con creators"
      }
    ]
  },
  "interactivos": {
    "medios": {
      "tipo": "etiqueta",
      "nota": "ios-bloquea-the",
      "titulo": "Despega la oferta del día"
    },
    "creatividad": {
      "tipo": "raspadito",
      "titulo": "Raspa la idea del día"
    }
  }
};
