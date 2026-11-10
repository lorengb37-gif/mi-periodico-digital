/*
  El Pulso Publicitario · edición N.º 314 · 10 de noviembre de 2026
*/
window.EDICION = {
  numero: 314,
  fechaISO: "2026-11-10",
  fecha: "Martes 10 de noviembre 2026",
  fechaCorta: "10 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes de soltar presupuesto a una plataforma nueva, pide ver cómo cobra y cómo mide. La confianza también se negocia.",
    largo: "Hoy la palabra es confianza. La FTC acusa a Amazon de inflar precios en sus subastas de anuncios, justo cuando Amazon pide que le confíes tus campañas a un agente de IA. Meta amplía cómo detecta la edad de los adolescentes. Del lado creativo, Old Navy y Gap salen con la Navidad, y Google ya publicó qué está buscando la gente pa’ regalar. En el patio, los Premios Heat dejaron a Yailin y a La Perversa en el mapa, y los cruceros están llegando. Escoge un «Lo que toca hacer», ponle responsable y fecha, y llévalo a la reunión.",
    corto: "Pide ver cómo cobra y cómo mide cada plataforma antes de soltar presupuesto. Así de simple.",
    porDep: {
      medios: "Antes de subir la inversión en una subasta automatizada, pide por escrito cómo se fija el precio y cómo se auditan los cobros.",
      creatividad: "La Navidad ya está en pantalla. Mira qué prometen Old Navy y Gap, y busca qué puede decir tu cliente que ellos no dicen.",
      planning: "Cruza lo que busca la gente con el calendario de tu cliente. Pa’ regalar, el que llega con tiempo gana.",
      data: "Si tu cliente le habla a menores, revisa de una vez cómo segmenta y qué datos de edad usa.",
      content: "Prueba la herramienta nueva con una pieza chiquita y mide. No cambies todo el calendario por una función de una semana.",
      rd: "En RD lo que pega es lo cercano: una canción de hace 25 años, un fandom, un crucero en Pedernales. Busca lo cercano antes que lo importado."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "La FTC acusa a Amazon de recargos ocultos en las subastas de Sponsored Products · The Trade Desk dice que ahora mira más las compras de empresas" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Old Navy y Gap estrenan Navidad con celebridades y coros · TikTok sube a 50 las referencias y a 30 segundos el video de su IA Symphony" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Google publica su Holiday 100 con las búsquedas que más crecieron" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Meta amplía su estimación de edad con IA pa’ ubicar adolescentes en cuentas con protección" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Instagram estrena Effect Builder pa’ crear efectos de Stories con IA, describiéndolos" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Premios Heat: Yailin y La Perversa · Cruceros en Pedernales · Eddy Herrera y los 25 años de «Pégame tu vicio» · Economía crece 4.6 % · Miss Universe · Viernes Negro" }
  },

  notas: [
    {
      id: "amazonsubasta", dep: "medios", peso: "principal",
      etiquetas: ["Amazon Ads", "FTC", "Subastas"],
      titular: "La FTC dice que Amazon cobró de más en sus subastas, justo cuando te pide confiar en su agente de IA",
      corto: "La FTC acusa a Amazon de cobrar de más en sus subastas",
      cuerpo: "Según Digiday, la FTC y 22 fiscales estatales acusan a Amazon de engañar a los anunciantes sobre cómo funcionan las subastas de Sponsored Products. Alegan que Amazon agregó mecanismos de precio mínimo no revelados que subieron lo que se cobraba sin que hubiera más competencia. Amazon lo niega y dice que esos precios reflejan el valor de sus espacios. El caso sigue en curso. Mientras, Amazon lanzó en octubre Ads Agent y Full-Funnel Campaigns, donde el anunciante pone objetivos y presupuesto y Amazon decide el resto. Las cifras de esas pruebas son de la propia empresa.",
      cifras: [
        { v: "250 %", t: "recargo máximo que alega la FTC en grandes eventos de compra (hasta 50 % en días normales)" },
        { v: "US$87 millones", t: "adicionales que alega la FTC en la temporada navideña de 2022" },
        { v: "+67 %", t: "retorno a largo plazo que Amazon dice lograr con sus campañas automáticas (cifra de la empresa)" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Cada vez que una plataforma automatiza la compra, tú pierdes visibilidad de cómo se fija el precio. El caso de Amazon es la excusa perfecta pa’ pedir transparencia a cualquiera, antes de que el cliente pregunte.",
      hacer: "Esta semana, pídele por escrito al rep de Amazon Ads (y a otra plataforma con compra automatizada) cómo se determina el precio y qué reportes de cobro puedes auditar, antes de subir la inversión del Viernes Negro.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/ad-tech-briefing-amazons-auction-trial-puts-agentic-advertisings-trust-problem-in-focus/" }]
    },
    {
      id: "tradedesk", dep: "medios", peso: "secundaria",
      etiquetas: ["Ad Tech", "The Trade Desk", "M&A"],
      titular: "The Trade Desk dice que ahora mira más las compras de empresas",
      corto: "The Trade Desk mira más las compras",
      cuerpo: "En la llamada de resultados del 9 de noviembre, el CEO Jeff Green dijo que están buscando adquisiciones más que antes, sin dar nombres. La empresa viene de su primera caída de ingresos desde que salió a bolsa, con una guía pa’l cuarto trimestre de aproximadamente 11 % por debajo del año anterior y un recorte de 15 % de la plantilla, según Digiday. Cerró el tercer trimestre con US$1,230 millones en efectivo y sin deuda.",
      cifras: [
        { v: "−11 %", t: "guía aproximada del cuarto trimestre frente al año anterior" },
        { v: "US$1,230 millones", t: "en efectivo al cierre del tercer trimestre, sin deuda" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si tus clientes compran por The Trade Desk, un cambio de dueño de datos o de identidad puede mover el plan. Mejor saberlo antes.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/we-are-looking-more-now-the-trade-desk-is-eyeing-the-ma-aisle/" }]
    },

    {
      id: "oldnavy", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Old Navy", "Gap", "Navidad"],
      titular: "Old Navy sube a un avión con Paris Hilton y Gap pone tres coros a cantar: así arranca la Navidad",
      corto: "Old Navy y Gap estrenan su Navidad",
      cuerpo: "Según Marketing Dive, Old Navy lanzó «Jingle Jet», con Alan Cumming y Meg Stalter de tripulación y pasajeros como Paris Hilton y Charli D’Amelio. Lo hizo con su equipo interno y BBH USA, bajo el lema «More Merry For Your Money» y prendas desde US$7.99. Gap salió el 3 de noviembre con «Give Your Gift»: tres coros cantando «I’ll Be There», de los Jackson 5. Detrás hay un giro de marketing hacia precio y valor, tras una caída de 4 % en ventas comparables de Old Navy en el segundo trimestre.",
      cifras: [
        { v: "US$7.99", t: "precio de entrada de las prendas del anuncio de Old Navy" },
        { v: "−4 %", t: "ventas comparables de Old Navy en el segundo trimestre" },
        { v: "3 coros", t: "cantan «I’ll Be There» en el anuncio de Gap" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Dos marcas con la misma temporada y dos jugadas opuestas: una apuesta por celebridades y precio, la otra por música y comunidad. Es un buen espejo pa’ definir qué va a decir tu cliente en diciembre.",
      hacer: "Pon los dos anuncios en la próxima reunión creativa y pregunta qué promesa puede hacer tu cliente en Navidad que no sea solo descuento. Sal con una frase de posicionamiento por cliente.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/old-navy-flies-with-celebs-gap-keeps-it-acapella-for-holiday-campaigns/873777/" }]
    },
    {
      id: "symphony", dep: "creatividad", peso: "secundaria",
      etiquetas: ["IA", "TikTok", "Symphony"],
      titular: "TikTok le sube la cancha a su IA de video: hasta 50 referencias y 30 segundos",
      corto: "TikTok sube las referencias y la duración de Symphony",
      cuerpo: "TikTok actualizó Symphony, su herramienta de anuncios con IA, con los modelos Dreamina Seedance. Ahora acepta hasta 50 referencias (imágenes, video y audio), frente a 9 antes, y genera hasta 30 segundos por indicación, frente a 15. Desde el 9 de noviembre, los anunciantes fuera de Norteamérica pueden comprar tokens de BytePlus pa’ usar esos modelos, según Social Media Today.",
      cifras: [
        { v: "50", t: "referencias multimodales, frente a 9 antes" },
        { v: "30 s", t: "duración máxima por indicación, frente a 15 s" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-updates-its-ai-video-ad-tools/874209/" }]
    },

    {
      id: "holiday100", dep: "planning", peso: "principal",
      etiquetas: ["Temporada", "Google", "Navidad"],
      titular: "Google publica su Holiday 100: estas son las búsquedas navideñas que más crecieron",
      corto: "Google publica su Holiday 100 de regalos",
      cuerpo: "Google lanzó el 9 de noviembre su Holiday 100, la lista anual de productos con mayor crecimiento de búsquedas. Entre los que más subieron: el cepillo facial de drenaje linfático (400 %), las sandalias de tacón gatito (295 %), los trenes de juguete clásicos (240 %) y los patines ajustables (180 %). El perfume es el tipo de set de regalo más buscado. Cada categoría trae datos de búsqueda y un resumen en AI Mode, según Social Media Today.",
      cifras: [
        { v: "+400 %", t: "búsquedas del cepillo facial de drenaje linfático" },
        { v: "+295 %", t: "sandalias de tacón gatito" },
        { v: "+240 %", t: "trenes de juguete clásicos" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "La lista es de búsquedas globales de Google, no dominicanas. Úsala como pista de qué se viene, y valídala con datos locales antes de llevarla a un cliente.",
      hacer: "Revisa el Holiday 100 por categoría de tus clientes de retail y, esta semana, contrasta tres tendencias con Google Trends filtrado por República Dominicana antes de recomendar cualquiera.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/google-releases-its-2026-holiday-100-gift-guide/874207/" }]
    },

    {
      id: "metaedad", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Meta", "Adolescentes"],
      titular: "Meta amplía su IA pa’ adivinar la edad de los adolescentes, aunque en Australia el 81.5 % se cuela",
      corto: "Meta amplía su detección de edad con IA",
      cuerpo: "Meta anunció el 9 de noviembre que amplía su tecnología de estimación de edad con IA pa’ ubicar a adolescentes en Cuentas para Adolescentes, aunque hayan puesto una fecha de adulto. Llega primero a Facebook y a Threads después, más adelante este año. Según Social Media Today, esto se suma al compromiso con un grupo de 52 fiscales de EE. UU. y al acuerdo de US$18,000 millones de agosto. En Australia, Meta eliminó más de 750,000 perfiles de menores, pero un reporte de agosto de la eSafety Commission halló que el 81.5 % de los menores seguía accediendo a apps restringidas.",
      cifras: [
        { v: "52", t: "fiscales de EE. UU. con los que Meta tiene un compromiso sobre edad" },
        { v: "750,000+", t: "perfiles de menores eliminados por Meta en Australia" },
        { v: "81.5 %", t: "de menores australianos que siguió accediendo a apps restringidas (eSafety, agosto)" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "La edad deja de ser un dato que el usuario declara y pasa a ser uno que la plataforma estima, y eso cambia a quién le llegan los anuncios.",
        "Las plataformas empujan a las tiendas de apps a verificar la edad al descargar, lo que puede mover la responsabilidad entre actores."
      ],
      hacer: "Esta semana, revisa qué clientes tienen audiencias de 13 a 17 o muy jóvenes, y confirma con el rep de Meta cómo cambia la segmentación y los reportes con la estimación de edad.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-expands-age-detection-measures-for-teens/874198/" }]
    },

    {
      id: "effectbuilder", dep: "content", peso: "principal",
      etiquetas: ["IA", "Instagram", "Edits"],
      titular: "Instagram te deja crear efectos de Stories con IA, nada más describiéndolos",
      corto: "Instagram estrena Effect Builder pa’ crear efectos",
      cuerpo: "Instagram lanzó Effect Builder, una herramienta web dentro de Edits pa’ crear y compartir efectos de Stories con IA, sin código. Describes el efecto en una conversación, subes una foto como referencia de estilo (color, luz y textura) y lo pruebas en tus propias fotos. Meta revisa cada efecto por seguridad, normalmente en menos de 24 horas, y los publicados aparecen en el explorador de efectos con un enlace al perfil del creador. Edits llegó a macOS el 5 de noviembre, según Social Media Today.",
      cifras: [
        { v: "< 24 h", t: "tiempo normal de revisión de cada efecto antes de publicarse" },
        { v: "0", t: "líneas de código necesarias pa’ crearlo" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Un efecto propio de marca es una forma de que la gente use tu cliente en sus Stories. Aquí el reto es que sea algo que quieran usar, no un anuncio disfrazado.",
      hacer: "Esta semana, escoge un cliente y escribe una descripción de un efecto que combine con su paleta y su temporada. Pruébalo en Effect Builder y mide cuántos lo usan.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-launches-visual-effects-creator-for-edits/874205/" }]
    },

    {
      id: "heat", dep: "rd", peso: "principal", para: ["content", "creatividad", "medios"],
      etiquetas: ["Música", "Premios Heat"], fecha: "5 nov 2026 · Puerto Vallarta",
      titular: "Premios Heat 2026: Yailin La Más Viral es la mejor urbana dominicana y La Perversa se lleva el fandom",
      corto: "Yailin y La Perversa brillan en los Premios Heat",
      cuerpo: "Santo Domingo.— Según Diario Libre, los Premios Heat entregaron 37 reconocimientos en su primera edición en México, en Puerto Vallarta, con votación del público. Yailin La Más Viral ganó Mejor Artista Urbano Dominicano y La Perversa se llevó Fandom del Año con su comunidad VibraPerversa. Carlos Rivera fue el más premiado, con tres galardones.",
      cifras: [
        { v: "37", t: "reconocimientos entregados (30 de categorías y 7 especiales)" },
        { v: "VibraPerversa", t: "comunidad con la que La Perversa ganó Fandom del Año" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Con votación del público, un premio de fandom premia comunidades, no solo música. Pa’ marcas que buscan embajadores, un fandom con nombre propio ya viene organizado.",
      hacer: "Si tu cliente trabaja con música o jóvenes, revisa las cuentas y comunidades de las ganadoras dominicanas y arma una lista de tres posibles colaboraciones pa’ proponer antes de fin de mes.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/06/lista-completa-de-los-ganadores-de-los-premios-heat-2026/3712977" }]
    },
    {
      id: "cruceros", dep: "rd", peso: "secundaria", para: ["planning", "medios", "content"],
      etiquetas: ["Turismo", "Cruceros"], fecha: "9 nov 2026",
      titular: "Cinco cruceros llegaron el lunes y se esperan unos 105 en noviembre",
      cuerpo: "Santo Domingo.— Según Diario Libre, el lunes 9 de noviembre llegaron cinco cruceros al país, con unos 15,503 pasajeros y 6,421 tripulantes. Dos de ellos atracaron en Cabo Rojo, Pedernales, con cerca de 8,000 personas entre pasajeros y tripulación. Para noviembre se esperan unos 105 barcos. El ministro David Collado dice que las visitas tienen efecto directo en las comunidades.",
      cifras: [
        { v: "15,503", t: "pasajeros que llegaron en cruceros el 9 de noviembre" },
        { v: "105", t: "barcos esperados en puertos dominicanos en noviembre" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El pasajero de crucero compra excursiones, comida y artesanía en horas. Pa’ comercios y marcas en puertos, la ventana de venta es corta y se planifica por calendario de barcos.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/turismo/2026/11/09/turismo-en-republica-dominicana-cruceros-en-cabo-rojo/3715486" }]
    },
    {
      id: "anuncio", dep: "rd", peso: "secundaria", para: ["data", "medios"],
      etiquetas: ["Opinión", "Anuncios financieros"], fecha: "5 nov 2026",
      titular: "Un columnista pide que las plataformas verifiquen quién anuncia inversiones",
      cuerpo: "En una columna de opinión en elDinero, Aliro Alvarez señala que en RD no ve evidencia de que las plataformas tengan que verificar quién publica anuncios financieros, y lo considera el mayor vacío. Propone un canal entre la SIMV, la Superintendencia de Bancos y la DNIDF pa’ congelar cuentas rápido, y un acuerdo con las plataformas pa’ quitar anuncios de entidades ya señaladas como fraudulentas. Menciona que el nuevo Código Penal (Ley 74-25) fija penas por esquemas piramidales.",
      cifras: [
        { v: "Ley 74-25", t: "nuevo Código Penal, con penas por esquemas piramidales" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es una opinión, no una norma. Pero si llega una regla pa’ anuncios financieros, las agencias con clientes del sector van a tener que mostrar quién está detrás de cada pauta.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/387404/el-precio-de-un-anuncio/" }]
    },
    {
      id: "eddy", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Nostalgia"], fecha: "9 nov 2026",
      titular: "«Pégame tu vicio» cumple 25 años y vuelve a pegar entre los más jóvenes",
      cuerpo: "Eddy Herrera dijo a Diario Libre que «Pégame tu vicio», lanzada hace 25 años, está llegando a nuevas generaciones y suma millones de reproducciones. Su paso «El tren de la ajena» se volvió tendencia internacional. Tiene dos nominaciones a los Heat, incluida Canción Viral, y piensa que el reguetón le ha restado espacio al merengue en la radio.",
      cifras: [{ v: "25 años", t: "de «Pégame tu vicio»" }],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/09/eddy-herrera-el-exito-de-pegame-tu-vicio-25-anos-despues/3714830" }]
    },
    {
      id: "one", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Economía", "ONE"], fecha: "10 nov 2026",
      titular: "La economía crece 4.6 % en nueve meses, con construcción, turismo y remesas en alza",
      cuerpo: "Santo Domingo.— Según Remolacha, que cita el Boletín de Estadísticas Macroeconómicas y Sectoriales de la ONE, la actividad económica creció 4.6 % en los primeros nueve meses de 2026. Construcción, turismo y remesas registraron incrementos. El texto no detalla porcentajes por sector.",
      cifras: [{ v: "4.6 %", t: "crecimiento de la actividad económica en enero-septiembre" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Remesas y turismo mueven el gasto de fin de año. Pa’ planning es un dato de contexto antes de hablar de presupuesto navideño con el cliente.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/construccion-turismo-y-remesas-registran-crecimiento/" }]
    },
    {
      id: "miss", dep: "rd", peso: "secundaria", para: ["content", "medios"],
      etiquetas: ["Agenda", "Miss Universe"], fecha: "9 nov 2026",
      titular: "Melissa Núñez viaja a Puerto Rico pa’ Miss Universe, con final el 24 de noviembre",
      cuerpo: "Melissa Núñez, Miss Universe República Dominicana 2026, salió el 9 de noviembre hacia Puerto Rico tras recibir el visto bueno médico. Está entre las 20 candidatas con más votos del público. El desfile en traje típico es el 21 de noviembre, la preliminar el 22 y la gala final el 24 en San Juan, según Diario Libre.",
      cifras: [{ v: "24 nov", t: "gala final en el Coliseo José Miguel Agrelot" }],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/09/melissa-nunez-viaja-a-puerto-rico-para-competir-en-miss-universe-2026/3715414" }]
    },
    {
      id: "viernes", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Consumo", "Viernes Negro"], fecha: "5 nov 2026",
      titular: "elDinero avisa: no te dejes llevar del impulso con las ofertas del Viernes Negro",
      cuerpo: "En su sección de Finanzas Personales, elDinero recomienda hacer un presupuesto, una lista de prioridades, comparar precios, esperar 24 horas antes de comprar y limitar el uso de la tarjeta de crédito. Advierte que los descuentos por tiempo limitado y el miedo a que se agote presionan la compra, y que comprar desde el celular la hace más rápida.",
      tocaTitulo: "¿Y eso qué?",
      toca: "El consumidor también se está cuidando. Pa’ creatividad y planning, un mensaje claro de valor y de planificación puede sonar mejor que otra ráfaga de «últimas horas».",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/387389/ofertas-por-viernes-negro-y-navidad-evite-dejarse-llevar-del-impulso-al-comprar/" }]
    }
  ],

  pizarra: ["amazonsubasta", "oldnavy", "holiday100", "metaedad", "effectbuilder", "heat"],

  frases: [
    { dep: "medios", texto: "La FTC dice que Amazon cobró de más en sus subastas, y a la vez te pide confiar en su agente de IA: pide ver cómo se fija el precio.", uso: "para conversaciones de compra automatizada" },
    { dep: "creatividad", texto: "Old Navy apuesta por celebridades y precio, Gap por tres coros: la misma Navidad con dos promesas distintas.", uso: "para definir el mensaje navideño de un cliente" },
    { dep: "data", texto: "La edad ya no es solo lo que el usuario escribe: Meta ahora la estima con IA, y en Australia el 81.5 % de los menores igual se coló.", uso: "para conversaciones de segmentación y menores" },
    { dep: "planning", texto: "Google ya publicó lo que la gente busca pa’ regalar: el que llega con tiempo a la Navidad es el que planifica ahora.", uso: "para planear la temporada" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "La FTC y las subastas de Amazon" },
      { id: "creatividad", texto: "La Navidad de Old Navy y Gap" },
      { id: "planning", texto: "El Holiday 100 de Google" },
      { id: "data", texto: "Meta estima la edad con IA" },
      { id: "content", texto: "Effect Builder de Instagram" },
      { id: "rd", texto: "Zoom a RD: Premios Heat" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "amazonsubasta", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "holiday100", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Google ya publicó su Holiday 100: el cepillo facial de drenaje linfático subió 400 % en búsquedas, las sandalias de tacón gatito 295 % y los trenes clásicos 240 %. Valida con Google Trends de RD antes de recomendar."
    },
    data: {
      tipo: "secreto", nota: "metaedad", titulo: "Destapa el expediente",
      texto: "Meta amplía su estimación de edad con IA, primero en Facebook, mientras un reporte de la eSafety Commission halló que el [[81.5 %]] de los menores en Australia seguía accediendo a apps restringidas, tras haber eliminado Meta más de [[750,000]] perfiles."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "effectbuilder", titulo: "Arma tu descripción pa’ Effect Builder",
      intro: "Voy a crear un efecto de Stories en Instagram Effect Builder pa’ una marca. Ayúdame a escribir la descripción:",
      opciones: [
        "Dame tres ideas de efecto que combinen con la paleta de mi marca",
        "Redáctame la descripción del efecto en una frase clara, sin código",
        "Sugiéreme cómo describir el estilo pa’ usar una foto de referencia (color, luz y textura)"
      ],
      cierre: "Dime también qué debo revisar antes de publicarlo pa’ que no parezca un anuncio disfrazado."
    },
    rd: {
      tipo: "pregunta", nota: "heat", titulo: "La pregunta del patio",
      p: "¿Quién ganó Mejor Artista Urbano Dominicano en los Premios Heat 2026?",
      opciones: ["La Perversa", "Yailin La Más Viral", "Carlos Rivera"], correcta: 1,
      explicacion: "Yailin La Más Viral se llevó ese premio. La Perversa ganó Fandom del Año y Carlos Rivera fue el más premiado, con tres galardones."
    }
  }
};
