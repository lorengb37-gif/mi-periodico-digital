/*
  El Pulso Publicitario · edición N.º 254 · 11 de septiembre de 2026
  ------------------------------------------------
  Cada edición vive en su propio archivo: ediciones/AAAA-MM-DD.js.
  La rutina diaria crea el archivo del día y lo anota arriba en archivo.js.
  Las ediciones anteriores no se tocan nunca: son el archivo del calendario.

  Campos por nota:
    id        identificador corto, sin espacios (se usa en la URL #/nota/<id>)
    dep       medios | creatividad | planning | data | content | rd
    peso      "principal" (letrero grande) o "secundaria"
    etiquetas lista corta de temas
    fecha     opcional, para notas de RD con fecha propia
    titular   titular completo
    corto     titular de pizarra (opcional; si falta se usa el titular)
    cuerpo    "Qué pasó", versión completa
    toca      "¿Y eso en qué nos toca?" (por qué es importante)
    tocaTitulo  opcional, el título exacto de ese bloque
    hacer     "Lo que toca hacer" (opcional en secundarias)
    lista     opcional, viñetas tipo "Lo que eso dice del mercado"
    listaTitulo opcional
    cifras    opcional, [{v:"1978", t:"año en que nació la pluma"}]
    fuentes   [{nombre:"Digiday", url:"https://..."}]
    hilo      opcional, nombre de un hilo que comparten varias notas
    para      solo Zoom a RD: a qué departamentos le sirve, ej. ["medios", "creatividad"]
    video     opcional, {src:"archivo.mp4", poster:"img.jpg", pie:"..."}
*/
window.EDICION = {
  numero: 254,
  fechaISO: "2026-09-11",
  fecha: "Viernes 11 de septiembre 2026",
  fechaCorta: "11 sep 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  /* Opcional: video de portada. Déjalo en null si no hay. */
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "El que lidera en publicidad es el que se entera primero de qué le cambia al cliente, y esa misma semana lo convierte en una decisión.",
    largo: "Esta semana llegó de to’: inventario nuevo en ChatGPT, leyes de auditoría de IA, una pluma de 1978 de vuelta en TV y, aquí en el patio, Mitur estrenando «Siente RD». Cada nota trae su «Lo que toca hacer», y el consejo de hoy es cogerlo como lista de trabajo: escoge una, ponle responsable y fecha antes del viernes. La agencia que se mantiene arriba es la que convierte el café de la mañana en una conversación con el cliente.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes. Así de fácil.",
    porDep: {
      medios: "Antes de meter un canal nuevo en el plan, ten claro qué número tiene que mover pa’ quedarse, y en cuánto tiempo.",
      creatividad: "Antes de inventar algo desde cero, revisa lo que el cliente ya tiene guardao. Un símbolo con historia te ahorra años de marca.",
      planning: "Si una plataforma cambia cómo mide, ajusta el forecast ese mismo día y avísale al cliente antes de que se entere por el reporte.",
      data: "Apunta dónde y cómo usas IA en cada cuenta. Cuando el cliente pregunte, y va a preguntar, ya tú tienes la respuesta.",
      content: "Deja que la IA haga el primer análisis y guarda al equipo pa’ decidir. Eso sí: revisa lo que recomienda antes de aplicarlo.",
      rd: "En RD gana la idea que suena a aquí. Casa Corona se llevó el Grand Effie siendo bien local: antes de copiar afuera, pregúntate qué tiene tu idea del patio."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon Ads y OpenAI abren ChatGPT Ads en Amazon DSP · Adform es el socio europeo del rollout · Microsoft Ads retira el Max CPC desde octubre" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Everest revive su pluma icónica en “Your Home Deserves The Best” · Cheez-It arma su Couch Committee con BBDO para el fútbol universitario" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Reddit crece a su ritmo más rápido del año y ajusta cómo mide audiencia · Pinterest le pide a las marcas arrancar ya la temporada navideña" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "California firma nuevas leyes de auditoría independiente de IA · Meta cierra por $18,000M las demandas por diseño adictivo en menores" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Snapchat abre su Ads MCP Server a Claude, ChatGPT y Gemini" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "amazon", dep: "medios", peso: "principal",
      etiquetas: ["IA", "Amazon Ads", "ChatGPT Ads"],
      hilo: "ChatGPT Ads",
      titular: "Amazon le abre la puerta de ChatGPT Ads a su DSP",
      corto: "Amazon le abre ChatGPT Ads a su DSP",
      cuerpo: "Amazon Ads y OpenAI anunciaron un piloto que permite extender campañas ya activas en Amazon DSP hacia el nuevo inventario publicitario de ChatGPT, operado como servicio gestionado en el que Amazon ayuda a configurar y optimizar cada campaña. Delta Vacations es el primer anunciante en probarlo, en un lanzamiento limitado por ahora a Estados Unidos.",
      cifras: [
        { v: "Delta Vacations", t: "primer anunciante de EE. UU. en probar ChatGPT Ads vía Amazon DSP" },
        { v: "Gestionado", t: "Amazon Ads ayuda a configurar y optimizar cada campaña" },
        { v: "Solo EE. UU.", t: "mercado inicial del piloto, antes de expandirse a otras regiones" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Es la primera vez que un DSP de retail media abre una puerta directa hacia el inventario de un chatbot de IA generativa —el media buying ya no se limita a los canales tradicionales, y hay que entender cómo entra este nuevo inventario en la mezcla de medios de cada cliente.",
      hacer: "Sumar el piloto de ChatGPT Ads vía Amazon DSP a la próxima revisión trimestral con clientes de e-commerce y retail, y preguntarle al rep de Amazon Ads cuándo se abre a más anunciantes.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/amazon-brings-its-dsp-to-openais-chatgpt-ads-extending-its-supply-chasing-streak/" }]
    },
    {
      id: "adform", dep: "medios", peso: "secundaria",
      etiquetas: ["Ad Tech", "Adform"],
      hilo: "ChatGPT Ads",
      titular: "OpenAI escoge a Adform pa’ llevar ChatGPT Ads a Europa",
      corto: "Adform lleva ChatGPT Ads a Europa",
      cuerpo: "El mismo día del anuncio de Amazon, Adform confirmó que OpenAI la seleccionó como partner tecnológico para el rollout de ChatGPT Ads en Europa, abriendo una vía gestionada para sus clientes en la región. Volkswagen y Vodafone ya figuran entre las marcas que están probando la superficie.",
      cifras: [
        { v: "Europa", t: "región del rollout" },
        { v: "VW · Vodafone", t: "marcas que ya prueban la superficie" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Que el rollout europeo llegue vía un partner independiente y no directo desde OpenAI define cómo se va a distribuir este inventario fuera de EE. UU. —vale la pena mapear si Adform es parte de la stack de algún cliente.",
      fuentes: [{ nombre: "Storyboard18", url: "https://www.storyboard18.com/advertising/amazon-ads-partners-with-openai-for-chatgpt-campaigns-ws-lo-110385.htm" }]
    },
    {
      id: "msads", dep: "medios", peso: "secundaria",
      etiquetas: ["Search", "Microsoft Ads", "Bidding"],
      hilo: "IA que decide",
      titular: "Microsoft Ads le dice adiós al Max CPC",
      cuerpo: "Desde el 1 de octubre, Microsoft Advertising dejará de ofrecer el límite de Max CPC al crear campañas nuevas con Target CPA, Target ROAS, Maximize Conversions, Maximize Conversion Value o Maximize Clicks. Las campañas existentes que ya lo tengan configurado lo conservan. En su boletín de producto de esta semana, Microsoft reportó un +8% de conversiones entre los anunciantes con adopción completa de AI Max.",
      cifras: [
        { v: "1 oct", t: "fecha desde la que no se ofrece Max CPC en campañas nuevas" },
        { v: "+8%", t: "conversiones reportadas con adopción completa de AI Max" }
      ],
      fuentes: [{ nombre: "Search Engine Journal", url: "https://www.searchenginejournal.com/microsoft-ads-is-removing-max-cpc-from-new-campaigns/586527/" }]
    },

    {
      id: "everest", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Everest", "Brand Relaunch"],
      titular: "Everest saca del baúl su pluma de 1978 y la pone a brillar",
      corto: "Everest saca del baúl su pluma de 1978",
      cuerpo: "Everest, una de las marcas de mejoras del hogar más reconocidas del Reino Unido, relanzó su plataforma de marca bajo el nombre “Your Home Deserves The Best”, con el regreso de su pluma —símbolo publicitario británico desde 1978— reinterpretada para una nueva generación de propietarios. La campaña, desarrollada con la agencia creativa The Gate en creatividad y la estrategia de medios de Medialab, es la mayor inversión de marca de Everest en años recientes.",
      cifras: [
        { v: "1978", t: "año en que nació la pluma que ahora vuelve a protagonizar la marca" },
        { v: "SVOD+TV", t: "pauta en Netflix, Disney+, Prime Video y Sky vía TV direccionable" },
        { v: "Audio", t: "presencia en Classic FM y Spotify dentro del mix de medios" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Recuperar un activo de marca de 47 años en lugar de crear uno nuevo desde cero es una apuesta de largo plazo poco común hoy —vale la pena revisar con cada cliente qué símbolos heredados podrían reactivarse en vez de reemplazarse.",
      hacer: "Hacer un inventario rápido de assets de marca “dormidos” de cada cliente (logos, jingles, personajes, taglines) y evaluar en la próxima sesión de planning si alguno merece un relanzamiento como el de Everest.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/adweek-wire/everest-brings-back-iconic-feather-as-part-of-major-brand-relaunch/" }]
    },
    {
      id: "cheezit", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Cheez-It", "BBDO"],
      titular: "Cheez-It monta su «Couch Committee» pa’l fútbol universitario",
      corto: "Cheez-It estrena su Couch Committee con BBDO",
      cuerpo: "Cheez-It, junto a BBDO New York, lanzó a nivel nacional en EE. UU. “Couch Committee”, una campaña que lleva los hot takes de fanáticos del fútbol universitario desde las gradas hasta el sofá, activa desde el 6 de septiembre en TV, CTV, online video y redes durante toda la temporada.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/cheez-it-brings-game-day-hot-takes-from-the-stands-to-the-couch/" }]
    },

    {
      id: "reddit", dep: "planning", peso: "principal",
      etiquetas: ["Plataformas", "Reddit", "Audiencia"],
      titular: "Reddit crece como nunca este año, pero ojo: va a recalcular su audiencia",
      corto: "Reddit crece y recalcula su audiencia",
      cuerpo: "Reddit reportó un crecimiento de usuarios del 8% mensual en agosto —su ritmo más acelerado en lo que va de 2026— y un alza interanual del 18%. La plataforma adelantó, sin embargo, que viene un cambio en su Ads Manager que producirá un ajuste (reset) de aproximadamente 20% en cómo se reporta el tamaño de audiencia disponible para segmentación.",
      cifras: [
        { v: "+8%", t: "de usuarios mes a mes en agosto, el mejor dato del año" },
        { v: "+18%", t: "interanual en el mismo período" },
        { v: "−20%", t: "aproximado en el tamaño de audiencia reportado en Ads Manager" }
      ],
      hacer: "Antes de fijar targets de alcance en Reddit para Q4, confirmar con el rep de la plataforma cuándo entra en vigor el ajuste del 20% para no sobreestimar el universo disponible en la planificación.",
      fuentes: [{ nombre: "24/7 Wall St", url: "https://247wallst.com/investing/2026/09/10/reddit-rises-6-as-user-growth-hits-fastest-pace-of-the-year-pinterest-ticks-up-snap-barely-budges/" }]
    },
    {
      id: "pinterest", dep: "planning", peso: "secundaria",
      etiquetas: ["Señales", "Pinterest", "Holiday"],
      titular: "Pinterest a las marcas: ¡arranquen la Navidad ya!",
      corto: "Pinterest: arranquen ya la Navidad",
      cuerpo: "Pinterest recomienda activar las campañas de temporada navideña entre septiembre y noviembre, ya que sus usuarios empiezan a planear regalos, menús y tradiciones desde septiembre. En pruebas de la plataforma, los anunciantes que sostuvieron el funnel completo durante meses —en lugar de un sprint de último momento— obtuvieron un iROAS promedio de 3.71, con más de la mitad de esas ventas incrementales provenientes de compradores nuevos.",
      cifras: [
        { v: "3.71", t: "de iROAS promedio; más de 50% de las ventas incrementales vinieron de compradores nuevos" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "El dato de Pinterest confirma algo que casi todo planner sabe pero pocos ejecutan: el funnel largo le gana al sprint de diciembre. Es el momento de bloquear presupuesto y creatividad de temporada antes de que se sature el inventario.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/pinterest-tells-brands-to-launch-holiday-campaigns-early/826898/" }]
    },

    {
      id: "california", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "California", "IA"],
      hilo: "IA que decide",
      titular: "Newsom firma y en California la IA ahora pasa auditoría",
      corto: "En California, la IA ahora pasa auditoría",
      cuerpo: "El gobernador de California, Gavin Newsom, firmó esta semana el Senate Bill 813 y el Assembly Bill 1405, que crean el primer marco del país para que organizaciones independientes auditen y evalúen sistemas de inteligencia artificial en cumplimiento con la ley estatal. La medida llega tras el cierre de la sesión legislativa 2026 de California, que aprobó ocho leyes de privacidad y dieciséis de IA.",
      cifras: [
        { v: "1.º", t: "del país: marco de auditoría independiente para sistemas de IA" },
        { v: "SB 813 / AB 1405", t: "los dos proyectos firmados esta semana por Newsom" },
        { v: "24", t: "leyes de privacidad e IA cerradas en la sesión legislativa 2026" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "California vuelve a moverse antes que la regulación federal, marcando un estándar de facto para cualquier marca o agencia que opere en EE. UU.",
        "Un marco de verificación externa abre la puerta a que clientes exijan certificaciones de IA a sus proveedores, como ya pasa con seguridad de marca."
      ],
      hacer: "Pedirle a cualquier proveedor o partner que use IA generativa en creatividad, medición o compra de medios que confirme si va a someterse a auditoría bajo este nuevo marco, y anticipar la conversación con clientes que operan en California.",
      fuentes: [{ nombre: "Oficina del Gobernador", url: "https://www.gov.ca.gov/2026/09/09/governor-newsom-signs-first-in-the-nation-ai-safeguards-to-protect-californians-calls-on-the-federal-government-to-do-its-part/" }]
    },
    {
      id: "meta", dep: "data", peso: "secundaria",
      etiquetas: ["Privacy", "Meta", "Settlement"],
      titular: "Meta suelta hasta US$18,000 millones por enganchar a los menores",
      corto: "Meta paga hasta $18,000M",
      cuerpo: "Meta acordó pagar hasta $18,000 millones para cerrar demandas de decenas de estados de EE. UU. que la acusaban de diseñar Facebook e Instagram de forma deliberadamente adictiva para usuarios menores de edad. Como parte del acuerdo, se compromete a un límite por defecto de dos horas diarias para adolescentes en ambas apps, con posibilidad de reducirlo a una hora y ampliar el bloqueo nocturno si sus competidores adoptan medidas similares.",
      cifras: [{ v: "$18,000M", t: "monto máximo del acuerdo" }],
      fuentes: [{ nombre: "CNN Business", url: "https://www.cnn.com/2026/08/26/tech/meta-states-settle-trial-children" }]
    },

    {
      id: "snap", dep: "content", peso: "principal",
      etiquetas: ["IA", "Snapchat", "Ads MCP"],
      hilo: "IA que decide",
      titular: "Snapchat le abre su Ads MCP a Claude, ChatGPT y Gemini",
      cuerpo: "Snap lanzó un servidor MCP (Model Context Protocol) oficial que conecta la Snap Ads API con Claude, ChatGPT y Gemini, permitiendo a los anunciantes pedirle a esas herramientas, en lenguaje natural, que resuman el desempeño de campañas activas, identifiquen las cuentas con mayores variaciones semana a semana y sugieran patrones de los últimos 90 días para planificar. Por ahora, todas las conexiones son de solo lectura.",
      cifras: [
        { v: "3", t: "asistentes de IA ya conectados: Claude, ChatGPT y Gemini" },
        { v: "90 días", t: "de histórico que el MCP puede analizar para sugerir patrones" },
        { v: "Solo lectura", t: "por ahora; el acceso de escritura llega en una próxima versión" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Snapchat se suma a la ola de plataformas que abren sus datos de ads a agentes de IA vía MCP —el rol del analista de paid social empieza a moverse de sacar reportes a auditar lo que el agente decide.",
      hacer: "Probar esta semana el Ads MCP Server de Snap con el equipo de paid social en una cuenta de prueba, y documentar qué preguntas responde bien y cuáles todavía requieren revisión humana.",
      fuentes: [{ nombre: "Snapchat for Business", url: "https://forbusiness.snapchat.com/blog/snapchat-ads-mcp" }]
    },

    {
      id: "sienterd", dep: "rd", peso: "principal", para: ["creatividad", "planning", "medios"],
      etiquetas: ["Turismo", "Mitur", "Campaña país"], fecha: "13 sep 2026 · Miami",
      titular: "Turismo cambia el disco: llega «Siente RD» y se despiden «Saborea el paraíso» y «Dominicana te sonríe»",
      corto: "Mitur estrena «Siente RD» en Miami",
      cuerpo: "Miami.— El Ministerio de Turismo presentó en el Four Seasons de Brickell «Siente República Dominicana», la nueva campaña pa’l mercado de Estados Unidos. La propuesta vende el país desde las emociones, más allá de la playa y el hotel, y cierra con el concepto «la tierra que lo tiene todo». La actriz Gaby Espino y Dayanara Torres respaldaron el lanzamiento. Llega en un momento delicado: la llegada de turistas desde EE. UU. cayó 5 % en agosto frente a 2025, aunque septiembre arrancó en repunte.",
      cifras: [
        { v: "627,094", t: "residentes de Florida viajaron a RD en 2025" },
        { v: "−5 %", t: "llegadas desde EE. UU. en agosto vs. 2025" },
        { v: "12 millones", t: "de visitantes: la meta al cierre de 2026" },
        { v: "5 ejes", t: "gastronomía, experiencias, libertad, patrimonio y bienestar" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Cuando el país cambia de concepto, cambia la conversación de todas las marcas que viven del turismo. Hoteles, aerolíneas, bancos y bebidas van a querer subirse a «Siente RD».",
      hacer: "Revisar qué clientes del sector turismo pueden alinear sus piezas de Q4 con el nuevo concepto y llevarles una propuesta antes que la competencia.",
      fuentes: [
        { nombre: "Hoy", url: "https://hoy.com.do/economia/republica-dominicana-lanza-nueva-campana-turistica-eeuu-momentos-cayo-llegada-ese-mercado-agosto-septiembre-sube_1102306.html" },
        { nombre: "Almomento", url: "https://almomento.net/miami-republica-dominicana-lanza-nueva-campana-turistica/" }
      ]
    },
    {
      id: "effie", dep: "rd", peso: "secundaria", para: ["creatividad", "planning"],
      etiquetas: ["Premios", "ADECC", "Effie"], fecha: "31 jul 2026 · Hotel Embajador",
      titular: "Casa Corona se lleva el Grand Effie 2026 y The Table sale como la agencia más efectiva",
      corto: "Casa Corona se lleva el Grand Effie 2026",
      cuerpo: "Santo Domingo.— La ADECC celebró la séptima edición de los Effie Awards República Dominicana. El Grand Effie fue pa’ «Casa Corona: Un Oasis en la Ciudad», de PAV Minds pa’ Cervecería Nacional Dominicana, que además ganó oro en Direct to Consumer y Engaged Community. Según el Effie Index, The Table by De Ferrari Borrell fue la agencia más efectiva, la CND el anunciante más efectivo y Corona la marca más efectiva.",
      cifras: [
        { v: "31", t: "estatuillas entregadas" },
        { v: "6 · 14 · 11", t: "de oro, de plata y de bronce" },
        { v: "22", t: "categorías" },
        { v: "150+", t: "jurados" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/08/03/adecc-los-effie-awards-republica-dominicana-2026/3618871" }]
    },
    {
      id: "banreservas", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Effie", "Banca"], fecha: "ago 2026",
      titular: "Banreservas carga con siete Effies y el Popular con tres",
      cuerpo: "Banreservas se llevó siete reconocimientos en los Effie 2026, con dos oros: «El Poder de un Chisme», de Credimás con Switch Havas, en Influencer Marketing, y «Vale la Pena», de Expohogar con Outstanding, en Finanzas & Banca. Dentsu Dominicana también salió premiada con un bronce en Éxito Sostenido por Expo Fomenta Pymes BR. El Banco Popular, por su lado, sumó tres Effies.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/375319/banreservas-obtiene-siete-galardones-en-los-effie-awards-republica-dominicana-2026/" }]
    },
    {
      id: "tv", dep: "rd", peso: "secundaria", para: ["medios"],
      etiquetas: ["Medios", "TV abierta"], fecha: "5 oct 2026",
      titular: "Tres proyectos nuevos le meten mano a la TV dominicana",
      cuerpo: "Arrancó la nueva temporada de «Divertido con Jochy» por Color Visión, con seis talentos nuevos acompañando a Jochy Santos; vuelve «La Familia Espejo» con su segunda temporada, y estrena «Bemberé».",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ los de medios es inventario fresco en TV abierta justo antes del cierre de año.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/tres-nuevos-proyectos-sacuden-la-television-dominicana/" }]
    },
    {
      id: "prevencion", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Bien público", "Campaña"], fecha: "5 oct 2026",
      titular: "El Ministerio de la Mujer sale con «Hablemos de Prevención»",
      cuerpo: "Santo Domingo.— El Ministerio de la Mujer puso en marcha «Hablemos de Prevención», una campaña nacional contra la violencia hacia las mujeres que pone a varias instituciones a hablar con una misma narrativa. Se mueve en tres acciones, reconocer, hablar y actuar, con un tema por semana: primero, señales de alerta que parecen pequeñas; después, no normalizar los celos, el control ni la vigilancia del teléfono.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/hablemos-de-prevencion/" }]
    },
    {
      id: "amcham", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Negocios", "Agenda"], fecha: "28 sep – 1 oct 2026",
      titular: "Amchamdr se llevó a 45 ejecutivos dominicanos a Washington y Nueva York",
      cuerpo: "La Cámara Americana de Comercio armó la Semana Dominicana 2026 pa’ que el sector privado converse directo con empresas y tomadores de decisiones de EE. UU. Entre los patrocinadores del Círculo Élite figuran Altice, Claro, Cervecería Nacional Dominicana, Grupo Rica y Banco Santa Cruz.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/09/21/amchamdr-anuncia-la-semana-dominicana-2026/3665822" }]
    },
    {
      id: "cabarete", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Turismo", "Mitur"], fecha: "28 jul 2026",
      titular: "Cabarete ya tiene campaña propia: «Cabarete Surf y Wind City»",
      cuerpo: "Mitur presentó en Miami Beach la campaña pa’ posicionar a Cabarete como destino global de surf, kitesurf y windsurf. Va por soportes digitales, medios especializados y comunicación dirigida en América, Europa y el Caribe.",
      fuentes: [{ nombre: "Mitur", url: "https://noticias.mitur.gob.do/noticias/rd-promueve-sus-atractivos-para-el-turismo-deportivo-con-dos-nuevas-campanas/" }]
    },
    {
      id: "latam", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Premios", "Digital"], fecha: "jun 2026",
      titular: "Wepa: Mitur arrasa en los Premios Latam Digital",
      cuerpo: "En la 13.ª edición de los Premios Latam Digital by Interlat, el Ministerio de Turismo ganó en Innovación en Empresas Turísticas con «Subway To Paradise», y con «Dominicana Te Sonríe» se llevó Marketing Digital para el Turismo, Narrativa Digital Innovadora y Creatividad Digital Impactante.",
      fuentes: [{ nombre: "Proinversión TV", url: "https://proinversiontv.com/2026/06/25/republica-dominicana-y-sus-hoteles-ganan-reconocimientos-en-los-primeros-meses-del-2026/" }]
    }
  ],

  /* La pizarra de portada: qué notas entran en la lectura de 60 s, en orden.
     Titular corto + «Lo que toca hacer» de estas notas debe sumar 60 s o menos
     (se calcula a 250 palabras por minuto). Si se pasa, la portada muestra el tiempo real. */
  pizarra: ["amazon", "everest", "reddit", "california", "snap", "sienterd"],

  frases: [
    { dep: "medios", texto: "Amazon acaba de convertir su DSP en la puerta de entrada a los anuncios de ChatGPT: el chatbot ya no solo responde, también vende.", uso: "para conversaciones de IA y nuevos canales" },
    { dep: "creatividad", texto: "Everest no inventó una mascota nueva: desenterró una pluma de 1978 y la convirtió en su apuesta más grande del año.", uso: "para conversaciones de brand heritage" },
    { dep: "data", texto: "California acaba de decirle a la industria: si tu IA toma decisiones, alguien externo tiene que poder auditarla.", uso: "para conversaciones de regulación e IA" },
    { dep: "planning", texto: "Reddit crece más rápido que nunca este año, pero también avisa que va a recalibrar cómo mide su audiencia: crecer y medir bien no siempre van de la mano.", uso: "para conversaciones de forecast y audiencias" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "ChatGPT Ads en el DSP de Amazon" },
      { id: "creatividad", texto: "La pluma de Everest vuelve" },
      { id: "data", texto: "Auditoría de IA en California" },
      { id: "content", texto: "El Ads MCP de Snapchat" },
      { id: "rd", texto: "Zoom a RD: «Siente RD»" }
    ]
  },

  /* Momentos interactivos (opcional; si falta uno, esa pared no lo muestra).
     Breves: un gesto, unos segundos, algo del oficio. Todo sale de las notas de esta edición.
       raspadito   no necesita datos: descubre el «Lo que toca hacer» de la nota principal
       prompt      nota, titulo, intro, opciones: [texto, ...], cierre
       pregunta    nota, titulo, p, opciones: [...], correcta: índice, explicacion   (una sola pregunta)
       etiqueta    nota, titulo · se despega y descubre la primera cifra de esa nota
       hoja        nota, titulo, mes, revela · se arranca la hoja del calendario
       secreto     nota, titulo, texto con los datos entre [[ ]] · se quitan las tachaduras */
  interactivos: {
    medios: { tipo: "etiqueta", nota: "amazon", titulo: "Despega la oferta del día" },
    planning: {
      tipo: "hoja", nota: "pinterest", titulo: "Arranca la hoja", mes: "Septiembre",
      revela: "Pinterest dice que la Navidad arranca ya: activa la temporada entre septiembre y noviembre. Con el funnel completo, sus anunciantes promediaron un iROAS de 3.71."
    },
    data: {
      tipo: "secreto", nota: "meta", titulo: "Destapa el expediente",
      texto: "Meta acordó pagar hasta [[US$18,000 millones]] para cerrar las demandas de decenas de estados, y se compromete a un límite por defecto de [[dos horas diarias]] para adolescentes en Facebook e Instagram."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "snap", titulo: "Arma tu pregunta pa’l Ads MCP",
      intro: "Con el Ads MCP de Snapchat (acceso de solo lectura), ayúdame con lo siguiente:",
      opciones: [
        "Resume el desempeño de mis campañas activas",
        "Dime qué cuentas tuvieron las mayores variaciones semana a semana",
        "Sugiéreme patrones de los últimos 90 días para planificar"
      ],
      cierre: "Señala qué partes de tu respuesta necesitan revisión humana antes de aplicarlas."
    },
    rd: {
      tipo: "pregunta", nota: "effie", titulo: "La pregunta del patio",
      p: "¿Qué campaña se llevó el Grand Effie 2026?",
      opciones: ["«El Poder de un Chisme»", "«Vale la Pena»", "«Casa Corona: Un Oasis en la Ciudad»"], correcta: 2,
      explicacion: "Fue de PAV Minds pa’ Cervecería Nacional Dominicana, que también ganó oro en Direct to Consumer y Engaged Community."
    }
  }
};
