/*
  El Pulso Publicitario · edición N.º 261 · 18 de septiembre 2026
  Migrada del diseño anterior. Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  "numero": 261,
  "fechaISO": "2026-09-18",
  "fecha": "Viernes 18 de septiembre 2026",
  "fechaCorta": "18 sep 2026",
  "hora": "8:00 AM",
  "lugar": "Santo Domingo · GMT-4",
  "intro": "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos y una sola lectura, to’ los días a las 8:00 AM.",
  "videoPortada": null,
  "consejo": {
    "firma": "La Redacción · El Pulso",
    "tesis": "Publicis se queda con PepsiCo y deja a WPP el pitch de Coca-Cola, Google migra Broad Match a AI Max sin salida, ChatGPT Ads toca US$1,000M de run rate, Disney agota el Super Bowl y JCPenney vuelve fashion icons a maestras reales",
    "largo": "El tablero de cuentas globales volvió a moverse: PepsiCo le entregó a Publicis Groupe, sin proceso competitivo, su negocio de medios en más de 200 mercados —sacándoselo a Omnicom tras más de dos décadas— y ese mismo movimiento empujó a Publicis a retirarse del pitch por el negocio global de Coca-Cola, dejando a WPP en posición de retener una cuenta valuada en unos US$4,000 millones. La noticia llegó el mismo día en que analistas de Goldman Sachs le pusieron a la acción de WPP una recomendación de venta con hasta 51% de caída potencial, proyectando crecimiento orgánico negativo durante todo 2026. En ad tech, Google empezó a migrar de forma automática y sin opción de salida las campañas de Búsqueda con Broad Match a nivel de campaña y Assets Creados Automáticamente hacia AI Max, un proceso que corre del 1 al 30 de septiembre y que borra otra capa de control manual sobre cómo se gasta el presupuesto de search. En IA publicitaria, OpenAI confirmó que ChatGPT Ads alcanzó una tasa anualizada de US$1,000 millones en menos de 200 días desde su lanzamiento, y desde el 1 de septiembre los anunciantes pueden comprar directamente vía Ads Manager en India, Europa, Medio Oriente y el norte de África; en paralelo, LinkedIn reportó un aumento de 46% en actividad inauténtica detectada durante el primer semestre de 2026 frente al semestre anterior, endureciendo su cerco contra perfiles falsos y contenido generado por IA de bajo valor. En medios deportivos, Disney confirmó que ABC y ESPN agotaron todo el inventario publicitario del Super Bowl LXI desde agosto —antes que en años anteriores— con comerciales de 30 segundos cerrando entre US$8 y 9 millones tras ceder algo de terreno frente a su pedido inicial de US$10 millones; y Walmart amplió su plataforma de datos Scintilla con acceso a datos de marketplace y un agente de IA más profundo, reforzando el pipeline hacia su red de medios Walmart Connect. En creatividad, JCPenney convirtió a cinco maestras reales de San Marcos, Texas, en las protagonistas de \"The Other September Issue\", con spots de TV que debutaron durante el primer partido de la NFL en Prime Video, justo cuando el IAB cierra su primera Global Creator Week con el spend de creadores en EE.UU. proyectado a US$44,000 millones para 2026.",
    "corto": "proyectado a US$44,000 millones para 2026.",
    "porDep": {}
  },
  "departamentos": {
    "medios": {
      "nombre": "Medios",
      "oficio": "Señal · Alcance · Frecuencia · Inventario",
      "resumen": "Google migra Broad Match a AI Max sin opción de salida · Disney agota el inventario del Super Bowl LXI · Walmart amplía Scintilla con datos de marketplace"
    },
    "creatividad": {
      "nombre": "Creatividad",
      "oficio": "Idea · Craft · Copy · Arte · Producción",
      "resumen": "JCPenney convierte a 5 maestras reales en las estrellas de su campaña de otoño · El IAB cierra su primera Global Creator Week"
    },
    "planning": {
      "nombre": "Planning",
      "oficio": "Plataformas · Audiencias · Forecast · Temporadas",
      "resumen": "Publicis gana PepsiCo y deja el pitch de Coca-Cola · WPP retiene a Coca-Cola pero recibe un \"Sell\" de Goldman Sachs"
    },
    "data": {
      "nombre": "Data",
      "oficio": "Regulación · Privacidad · Medición · IA",
      "resumen": "ChatGPT Ads llega a US$1,000M de run rate y se expande a India y Europa · LinkedIn detecta 46% más actividad inauténtica"
    },
    "content": {
      "nombre": "Content",
      "oficio": "Plataformas sociales · Herramientas · IA",
      "resumen": "TikTok Shop: 94% de la reventa de lujo en EE.UU. ya se vende en vivo"
    },
    "rd": {
      "nombre": "Zoom a RD",
      "oficio": "Campañas · Premios · Medios · Agenda",
      "resumen": "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio."
    }
  },
  "notas": [
    {
      "id": "google-migra-broad",
      "dep": "medios",
      "peso": "principal",
      "etiquetas": [
        "Search",
        "Google",
        "Automatización"
      ],
      "titular": "Google migra Broad Match a AI Max sin opción de salida",
      "toca": "Es otra capa de control manual que Google retira del stack de search —las cuentas que no revisaron sus exclusiones antes de septiembre están operando ahora mismo con una configuración distinta a la que aprobaron.",
      "hacer": "Auditar esta semana todas las cuentas de Search con Broad Match a nivel de campaña o ACA: confirmar que las exclusiones de marca migraron correctamente a AI Max y ajustar el texto dinámico si Google activó \"text customization\" por default.",
      "cuerpo": "Entre el 1 y el 30 de septiembre, Google está migrando de forma automática dos configuraciones heredadas de Búsqueda —el Broad Match a nivel de campaña y los Assets Creados Automáticamente independientes— hacia AI Max, arrastrando las inclusiones y exclusiones de marca ya configuradas. Google había dejado de permitir la creación de campañas nuevas con esos formatos desde el 3 de agosto, y esta vez no hay opción de mantenerse en la configuración anterior una vez que arranca la ventana de migración.",
      "cifras": [
        {
          "v": "1-30 sep",
          "t": "ventana en la que corre la migración automática a AI Max"
        },
        {
          "v": "0",
          "t": "opciones de opt-out una vez iniciada la migración"
        },
        {
          "v": "Feb 2027",
          "t": "fecha en que migran las campañas de Dynamic Search Ads (DSA)"
        }
      ],
      "fuentes": [
        {
          "nombre": "Search Engine Land",
          "url": "https://searchengineland.com/google-sets-ai-max-migration-timeline-for-search-campaigns-485006"
        }
      ]
    },
    {
      "id": "disney-agota-inventario",
      "dep": "medios",
      "peso": "secundaria",
      "etiquetas": [
        "CTV",
        "Disney",
        "Super Bowl"
      ],
      "titular": "Disney agota el inventario del Super Bowl LXI desde agosto",
      "toca": "Que el inventario se agote en agosto, con precio a la baja frente al ask inicial, confirma que la demanda por el Super Bowl sigue firme, pero los grandes anunciantes ya tienen suficiente poder de negociación para frenar los pedidos más agresivos.",
      "cuerpo": "ABC y ESPN confirmaron que ya vendieron la totalidad de su inventario publicitario para el Super Bowl LXI, más rápido que en años anteriores. Disney había pedido hasta US$10 millones por comercial de 30 segundos, pero cedió terreno ante la resistencia de grandes anunciantes y cerró la mayoría de los espacios entre US$8 y 9 millones.",
      "fuentes": [
        {
          "nombre": "Awful Announcing",
          "url": "https://awfulannouncing.com/disney/super-bowl-ads-sold-out-free-streamer.html"
        }
      ]
    },
    {
      "id": "walmart-suma-datos",
      "dep": "medios",
      "peso": "secundaria",
      "etiquetas": [
        "Retail Media",
        "Walmart",
        "Scintilla"
      ],
      "titular": "Walmart suma datos de marketplace e IA a su plataforma Scintilla",
      "cuerpo": "Walmart anunció que su plataforma de insights Scintilla (antes Luminate) sumará acceso a datos de marketplace para sus vendedores de primera parte, dashboards personalizables, alertas configurables y una versión más profunda de su agente de IA, Marty. La actualización también acerca el módulo Insights Activation, que extrae datos de Scintilla para alimentar directamente las campañas de display de la red de medios Walmart Connect.",
      "fuentes": [
        {
          "nombre": "Digiday",
          "url": "https://digiday.com/media/walmart-adds-marketplace-data-deeper-ai-features-to-scintilla-insights-platform/"
        }
      ]
    },
    {
      "id": "jcpenney-vuelve-fashion",
      "dep": "creatividad",
      "peso": "principal",
      "etiquetas": [
        "Marca",
        "JCPenney",
        "Retail"
      ],
      "titular": "JCPenney vuelve fashion icons a cinco maestras reales de Texas",
      "toca": "Es la continuación de la plataforma \"Yes-JCPenney!\": usar gente real en vez de celebridades como prueba de que la marca escucha a su cliente promedio, y hacerlo en un canal editorial (Substack) en vez de solo redes pagas.",
      "hacer": "Evaluar con clientes de retail o consumo masivo si un formato editorial de nicho (Substack, newsletter propia) puede sostener una campaña de \"gente real\" con más profundidad que un post de Instagram, antes de replicarla solo como TV spot.",
      "cuerpo": "JCPenney lanzó \"The Other September Issue\", una publicación tongue-in-cheek en Substack que parodia el mítico September Issue de Vogue, protagonizada por cinco educadoras de San Marcos, Texas, styled por Wouri Vice y fotografiadas por Andrew Matusik, con textos de la crítica de moda Gabriella Karefa-Johnson. Las maestras no aparecen como receptoras de un makeover, sino como referentes de estilo por derecho propio, y también protagonizan los nuevos comerciales de TV de la marca, que debutaron el 17 de septiembre durante el primer partido de la NFL transmitido en Prime Video.",
      "cifras": [
        {
          "v": "5",
          "t": "maestras de San Marcos, Texas, protagonistas de la campaña"
        },
        {
          "v": "17 sep",
          "t": "debut del spot de TV, durante el primer juego de NFL en Prime Video"
        },
        {
          "v": "2",
          "t": "agencias detrás del lanzamiento: Michief (TV) y FleishmanHillard (Substack)"
        }
      ],
      "fuentes": [
        {
          "nombre": "BusinessWire",
          "url": "https://www.businesswire.com/news/home/20260916394982/en/JCPenney-Rewrites-Fashion-for-All-by-Introducing-The-Other-September-Issue"
        }
      ]
    },
    {
      "id": "iab-cierra-primera",
      "dep": "creatividad",
      "peso": "secundaria",
      "etiquetas": [
        "Creators",
        "IAB",
        "Upfront"
      ],
      "titular": "El IAB cierra su primera Global Creator Week",
      "cuerpo": "Del 14 al 18 de septiembre, el IAB unió por primera vez a sus capítulos de más de una decena de países en una semana dedicada a estandarizar el marketing de creadores: el 15 de septiembre lanzó CreatorFronts, un mercado dedicado a la economía creator, seguido del Podcast Upfront el 16 y del PlayFronts de gaming e inmersivo el 17. El IAB proyecta que el gasto publicitario en creadores en EE.UU. llegue a US$44,000 millones en 2026, creciendo 4 veces más rápido que la industria de medios en general.",
      "fuentes": [
        {
          "nombre": "IAB",
          "url": "https://www.iab.com/news/iab-global-creator-week-launches/"
        }
      ]
    },
    {
      "id": "publicis-gana-medio",
      "dep": "planning",
      "peso": "principal",
      "etiquetas": [
        "Cuentas",
        "PepsiCo",
        "Publicis"
      ],
      "titular": "Publicis gana el medio global de PepsiCo y abandona el pitch de Coca-Cola",
      "hacer": "Si algún cliente de consumo masivo está evaluando su relación de medios, preguntar directamente qué está ofreciendo Publicis en IA y datos que está inclinando estas decisiones sin proceso competitivo.",
      "cuerpo": "PepsiCo le entregó a Publicis Groupe, sin pitch competitivo, su negocio de medios en más de 200 mercados globales, sacándoselo a Omnicom/OMD tras más de dos décadas de relación. El nuevo modelo integra estrategia, planning, activación, identidad conectada y tecnología bajo un mismo esquema de IA y datos. La consecuencia inmediata: Publicis se retiró del pitch por el negocio global de medios, data science y tecnología de Coca-Cola, donde competía cabeza a cabeza con WPP.",
      "fuentes": [
        {
          "nombre": "Adweek",
          "url": "https://www.adweek.com/agencies/publicis-lands-pepsicos-global-media-business-withdraws-from-coke-pitch/"
        }
      ]
    },
    {
      "id": "wpp-retiene-coca",
      "dep": "planning",
      "peso": "secundaria",
      "etiquetas": [
        "Señales",
        "WPP",
        "Coca-Cola"
      ],
      "titular": "WPP retiene a Coca-Cola, pero Goldman Sachs le pone un \"Sell\"",
      "toca": "Retener una cuenta grande no alcanza para tranquilizar al mercado —vale la pena monitorear si la presión financiera sobre WPP se traduce en menos inversión en el servicio a cuentas del roster.",
      "cuerpo": "Con Publicis fuera de la carrera, WPP quedó posicionada para retener el negocio global de medios de Coca-Cola, valuado en unos US$4,000 millones. Pero el respiro llega en un momento delicado: el mismo período, Goldman Sachs le puso a la acción de WPP una recomendación de venta con hasta 51.6% de caída potencial a 12 meses, proyectando crecimiento orgánico negativo durante todo 2026.",
      "fuentes": [
        {
          "nombre": "Mediaweek",
          "url": "https://www.mediaweek.com.au/wpp-set-to-retain-coca-cola-global-media-business"
        }
      ]
    },
    {
      "id": "chatgpt-ads-toca",
      "dep": "data",
      "peso": "principal",
      "etiquetas": [
        "IA",
        "OpenAI",
        "ChatGPT Ads"
      ],
      "titular": "ChatGPT Ads toca US$1,000 millones de run rate en menos de 200 días",
      "hacer": "Evaluar con clientes de consumo o retail si conviene correr un piloto de bajo presupuesto en ChatGPT Ads Manager este trimestre, antes de que el costo por acción suba con más competencia en la subasta.",
      "cuerpo": "OpenAI confirmó que ChatGPT Ads alcanzó una tasa de ingresos anualizada de US$1,000 millones en menos de 200 días desde su lanzamiento, con decenas de miles de anunciantes activos. Desde el 1 de septiembre, la plataforma abrió su Ads Manager de autoservicio a India, Europa, Medio Oriente y el norte de África, extendiendo la disponibilidad a más de 40 países e incorporando por primera vez a pequeñas y medianas empresas, no solo a marcas grandes con campañas gestionadas por agencia.",
      "fuentes": [
        {
          "nombre": "CNBC",
          "url": "https://www.cnbc.com/2026/08/31/open-ai-chatgpt-ads-revenue.html"
        }
      ]
    },
    {
      "id": "linkedin-detecta-mas",
      "dep": "data",
      "peso": "secundaria",
      "etiquetas": [
        "Plataformas",
        "LinkedIn",
        "Integridad"
      ],
      "titular": "LinkedIn detecta 46% más actividad inauténtica",
      "cuerpo": "LinkedIn reportó un aumento de 46% en instancias detectadas de actividad inauténtica durante el primer semestre de 2026, comparado con los seis meses anteriores, al intensificar su cerco contra pods de engagement, publicación automatizada, perfiles falsos y comentarios o contenido de bajo valor generado por IA. La plataforma enmarca el esfuerzo como necesario para mantener la confianza de marcas y usuarios en un feed cada vez más saturado de contenido sintético.",
      "fuentes": [
        {
          "nombre": "Social Media Today",
          "url": "https://www.socialmediatoday.com/news/linkedin-increases-push-against-inauthentic-activity/829385/"
        }
      ]
    },
    {
      "id": "tiktok-shop-reventa",
      "dep": "content",
      "peso": "principal",
      "etiquetas": [
        "Social Commerce",
        "TikTok Shop",
        "Lujo"
      ],
      "titular": "En TikTok Shop, 94% de la reventa de lujo ya se vende en vivo",
      "toca": "El live shopping deja de ser un experimento y se vuelve el canal dominante para categorías de alto valor donde la confianza es la barrera —un modelo que cualquier marca con producto premium o certificable puede estudiar.",
      "hacer": "Con clientes de moda, joyería o productos certificables, evaluar un piloto de livestream shopping con autenticación de terceros antes de fin de año, usando la reventa de lujo como caso de referencia.",
      "cuerpo": "TikTok Shop reveló en su primer Luxury Resale Summit en Nueva York que, en lo que va del año, 94% de los ingresos por reventa de artículos de lujo en EE. UU. viene de transmisiones en vivo, mientras el volumen bruto de mercancía (GMV) de esa categoría creció 400% interanual. El formato funciona porque el video en vivo permite a los compradores inspeccionar en tiempo real productos de segunda mano de alto valor —bolsos y relojes, sobre todo— antes de comprar, y los vendedores deben ser invitados y trabajar con uno de cinco socios de autenticación (Entrupy, Legitmark, CheckCheck, Legit App y Real Authentication).",
      "cifras": [
        {
          "v": "94%",
          "t": "de los ingresos de reventa de lujo viene de livestreams"
        },
        {
          "v": "+400%",
          "t": "crecimiento interanual del GMV de reventa de lujo"
        },
        {
          "v": "5",
          "t": "socios de autenticación requeridos para vender productos de lujo"
        }
      ],
      "fuentes": [
        {
          "nombre": "Digiday",
          "url": "https://digiday.com/media/nearly-all-luxury-resale-transactions-on-tiktok-shop-us-now-come-from-livestreams/"
        }
      ]
    }
  ],
  "pizarra": [
    "google-migra-broad",
    "jcpenney-vuelve-fashion",
    "publicis-gana-medio",
    "chatgpt-ads-toca",
    "tiktok-shop-reventa"
  ],
  "frases": [
    {
      "dep": "planning",
      "texto": "Publicis ganó PepsiCo sin pitch y de paso se bajó del de Coca-Cola: hoy hay agencias que ni compiten para ganar.",
      "uso": "para conversaciones de cuentas y new business"
    },
    {
      "dep": "medios",
      "texto": "Google migró Broad Match a AI Max sin botón de regreso: otra capa de control manual que se va del stack de search.",
      "uso": "para conversaciones de ad tech y programmatic"
    },
    {
      "dep": "data",
      "texto": "ChatGPT Ads llegó a US$1,000 millones de run rate en menos de 200 días: la publicidad conversacional ya no es un experimento.",
      "uso": "para conversaciones de IA y presupuesto"
    },
    {
      "dep": "creatividad",
      "texto": "JCPenney convirtió a cinco maestras de Texas en fashion icons: la gente real ya es la nueva celebridad de marca.",
      "uso": "para conversaciones de marca y creadores"
    }
  ],
  "encuesta": {
    "pregunta": "Dímelo, ¿qué nota te llevas hoy?",
    "nota": "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    "opciones": [
      {
        "id": "medios",
        "texto": "Google migra Broad Match a AI Max sin opción de salida"
      },
      {
        "id": "creatividad",
        "texto": "JCPenney vuelve fashion icons a cinco maestras reales de Texas"
      },
      {
        "id": "planning",
        "texto": "Publicis gana el medio global de PepsiCo y abandona el pitch de Coca-Cola"
      },
      {
        "id": "data",
        "texto": "ChatGPT Ads toca US$1,000 millones de run rate en menos de 200 días"
      },
      {
        "id": "content",
        "texto": "En TikTok Shop, 94% de la reventa de lujo ya se vende en vivo"
      }
    ]
  },
  "interactivos": {
    "medios": {
      "tipo": "etiqueta",
      "nota": "google-migra-broad",
      "titulo": "Despega la oferta del día"
    },
    "creatividad": {
      "tipo": "raspadito",
      "titulo": "Raspa la idea del día"
    }
  }
};
