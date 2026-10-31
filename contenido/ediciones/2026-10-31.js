/*
  El Pulso Publicitario · edición N.º 304 · 31 de octubre de 2026
*/
window.EDICION = {
  numero: 304,
  fechaISO: "2026-10-31",
  fecha: "Sábado 31 de octubre 2026",
  fechaCorta: "31 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Las plataformas se juntan y los reguladores aprietan: antes de cerrar el año, revisa con quién comparte datos cada uno de tus clientes.",
    largo: "Hoy el mercado se mueve en dos direcciones. DoorDash compra Instacart y el retail media se concentra un chin más, mientras un juez de Nuevo México le pone a Meta una multa de US$25,000 millones por engañar a sus usuarios con los datos. Pinterest llega a 661 millones de usuarios, Walmart se disfraza de cuento navideño con los Muppets y Threads prueba botones de «me gusta» a la medida. Aquí en el patio, el Banco Central mantiene la tasa en 5.50 % y el Día de la Constitución se muda al lunes 9 de noviembre. El consejo: escoge un «Lo que toca hacer» de esta edición, ponle responsable y llévaselo al cliente antes del miércoles.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, ponle responsable y llévaselo al cliente antes del miércoles.",
    porDep: {
      medios: "Cuando dos plataformas de retail media se juntan, cambian las reglas de negociación. Pregunta cómo se van a vender sus anuncios antes de renovar.",
      creatividad: "Walmart tomó un clásico que todo el mundo conoce y lo puso a hablar de sus ofertas. Un referente querido le ahorra explicaciones a tu idea.",
      planning: "Pinterest crece, pero fuera de EE. UU. y Europa. Mira de dónde viene el crecimiento antes de usarlo como argumento en un plan.",
      data: "Una multa grande nace de una promesa que no se cumplió. Revisa que lo que le dices al consumidor sobre sus datos sea lo que de verdad pasa.",
      content: "Los «me gusta» a la medida son un lienzo chiquito, pero propio. Pregúntate qué pondría tu cliente ahí y cuándo.",
      rd: "Con un feriado movido al lunes y la gente planeando el puente, el calendario del cliente cambió. Ajusta la pauta de esa semana ya."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "DoorDash compra Instacart por US$17,000 millones y el retail media se concentra · Stagwell compra Freestar" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Walmart junta a los Muppets y a Walton Goggins en «A Who Knew Carol»" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Pinterest llega a 661 millones de usuarios y factura US$1,170 millones en el 3T" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Un juez de Nuevo México le impone a Meta una multa de US$25,000 millones por engañar sobre los datos" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Threads prueba «me gusta» personalizados · TikTok estrena una guía de restaurantes en EE. UU." },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "El Día de la Constitución pasa al lunes 9 de noviembre · El Banco Central mantiene la tasa en 5.50 % · Precios de vuelos desde RD · Combustibles congelados una semana más" }
  },

  notas: [
    {
      id: "doordashinsta", dep: "medios", peso: "principal",
      etiquetas: ["Retail media", "DoorDash", "Instacart"],
      titular: "DoorDash compra Instacart por US$17,000 millones y el retail media se concentra",
      corto: "DoorDash compra Instacart y el retail media se junta",
      cuerpo: "DoorDash anunció el 29 de octubre su intención de comprar Instacart a una valoración de US$17,000 millones, según AdExchanger. Las dos empresas venden publicidad dentro de sus apps: Instacart facturó más de US$300 millones en anuncios en el tercer trimestre, y DoorDash superó los US$1,000 millones en publicidad en 2024, según una cifra que reveló hace un año. El autor las ve complementarias: DoorDash vive de pedidos frecuentes y de impulso, e Instacart de la compra grande de la semana. También cree que el trato enfrentará un clima regulatorio más permisivo y que la consolidación seguirá.",
      cifras: [
        { v: "US$17,000 millones", t: "valoración de la compra de Instacart por DoorDash" },
        { v: "US$300 millones+", t: "ingresos publicitarios de Instacart en el 3T" },
        { v: "US$1,000 millones+", t: "publicidad de DoorDash en 2024, según su propia cifra" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Cuando dos vendedores de anuncios se juntan, el anunciante negocia con uno solo. Aunque el trato es de EE. UU., define cómo se va a vender el retail media de entrega a domicilio.",
      hacer: "Hacer una lista de los clientes que hoy pautan en Instacart o DoorDash y pedirle a cada rep, por escrito, cómo se combinarán los formatos, los precios y la medición si se aprueba la compra.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/marketers/doordash-acquires-instacart-as-consolidation-comes-for-mobility-media/" }]
    },
    {
      id: "freestar", dep: "medios", peso: "secundaria",
      etiquetas: ["Stagwell", "Freestar", "Principal media"],
      titular: "Stagwell compra Freestar y AdExchanger se pregunta por qué",
      corto: "Stagwell compra Freestar",
      cuerpo: "Esta semana Stagwell, una agencia independiente, compró Freestar, una empresa que ayuda a editores del open web a armar su pila de anuncios y que tiene unas 1,000 conexiones con sitios. AdExchanger no informa el precio. El medio sugiere que esas conexiones podrían apoyar el negocio de principal media de Stagwell, y compara el trato con la compra de 24/7 Real Media por GroupM en 2007.",
      cifras: [{ v: "~1,000", t: "conexiones de Freestar con sitios de editores" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Una agencia que compra inventario propio también vende el espacio donde pauta. Pa’ medios, la pregunta es quién gana cuando el que recomienda es dueño de lo que recomienda.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/the-big-story/smart-acquisition-or-frankenstack-stagwell-freestar-and-doordash-instacart/" }]
    },

    {
      id: "walmartcarol", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Walmart", "Navidad"],
      titular: "Walmart junta a los Muppets y a Walton Goggins en «A Who Knew Carol»",
      corto: "Walmart arma su cuento navideño con los Muppets",
      cuerpo: "Walmart lanzó el 26 de octubre «A Who Knew Carol», una versión de «The Muppet Christmas Carol» (1992) hecha con Disney y The Muppets Studio, y nueva entrega de su plataforma «Who Knew?». Walton Goggins, vocero de la marca, hace de Scrooge junto a los Muppets. A Scrooge lo visitan tres fantasmas nuevos: el de las Navidades Presentes (Christmas Presents), el de las Ofertas Por Venir (Deals to Come) y el de la Navidad Rápida (Christmas Fast), cada uno ligado a una parte de la oferta navideña de Walmart, desde los productos hasta la entrega exprés. Adweek no muestra aquí la agencia ni los canales, porque parte del artículo es de pago.",
      cifras: [
        { v: "1992", t: "año de la película «The Muppet Christmas Carol» que Walmart reinterpreta" },
        { v: "3", t: "fantasmas nuevos, cada uno ligado a la oferta navideña de Walmart" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Walmart no inventó una historia: agarró una que todo el mundo se sabe y le puso sus mensajes dentro. Con la Navidad encima, un cuento conocido ahorra el trabajo de explicar de qué trata el anuncio.",
      hacer: "Escoger un cliente de retail y listar tres cuentos, películas o canciones navideñas que la gente de aquí se sepa de memoria, para bocetar una idea de 30 segundos donde cada beneficio de la oferta sea un personaje.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/walmart-brings-the-muppets-and-walton-goggins-together-for-its-own-holiday-carol/" }]
    },

    {
      id: "pinterestq3", dep: "planning", peso: "principal",
      etiquetas: ["Plataformas", "Pinterest", "Resultados"],
      titular: "Pinterest llega a 661 millones de usuarios y factura US$1,170 millones en el 3T",
      corto: "Pinterest llega a 661 millones de usuarios",
      cuerpo: "Según Social Media Today, Pinterest sumó 21 millones de usuarios activos mensuales frente al segundo trimestre y llegó a 661 millones, con unos 17 millones del crecimiento en mercados fuera de EE. UU. y Europa. La generación Z es 57 % de la audiencia. Los ingresos del trimestre fueron de US$1,170 millones, 12 % más que hace un año; en EE. UU. y Canadá subieron 14 %, y el crecimiento internacional lo frenaron cambios regulatorios europeos sobre las ventas transfronterizas. La plataforma lanzó una solución de compra programática en todas las regiones y anuncios de búsqueda visual, y se preocupa por la ola de contenido hecho con IA.",
      cifras: [
        { v: "661 millones", t: "usuarios activos mensuales, +21 millones frente al 2T" },
        { v: "US$1,170 millones", t: "ingresos del 3T, +12 %" },
        { v: "57 %", t: "de la audiencia es generación Z" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Pinterest crece, pero el mayor ingreso sigue en EE. UU. y Canadá y buena parte de los usuarios nuevos vienen de otros mercados. Antes de ponerlo como argumento, revisa cuántos de tus usuarios están en el país del cliente.",
      hacer: "Esta semana, pedirle a Pinterest el tamaño de audiencia en RD para los clientes de regalos, decoración y viajes, y compararlo con Instagram antes de cerrar el plan de diciembre.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/pinterest-reports-solid-user-growth-in-q3/873274/" }]
    },

    {
      id: "metanm", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Meta", "Multa"],
      titular: "Un juez de Nuevo México le impone a Meta una multa de US$25,000 millones por engañar sobre los datos",
      corto: "Meta recibe una multa de US$25,000 millones",
      cuerpo: "Según AdExchanger, un juez de distrito de Nuevo México ordenó a Meta pagar US$25,000 millones por engañar a usuarios de Facebook sobre cómo manejaba sus datos, hacia el 21 de octubre. El estado demandó en 2021, tras el caso Cambridge Analytica, y un jurado halló en septiembre más de 43 millones de violaciones a la ley estatal de protección al consumidor. El juez multiplicó las violaciones por el máximo legal de US$5,000 y redujo el total. Meta dijo que apelará. Los expertos que cita AdExchanger no coinciden: una dice que la advertencia al ad tech sigue en pie, otro que las multas grandes no cambian los incentivos porque los gigantes las absorben.",
      cifras: [
        { v: "US$25,000 millones", t: "multa: la mayor contra Meta y contra cualquier empresa de tecnología, según AdExchanger" },
        { v: "43 millones+", t: "violaciones halladas por el jurado en septiembre" },
        { v: "US$5,000", t: "máximo legal por violación que el juez aplicó antes de reducir el total" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "El problema no fue recoger datos, sino prometer una cosa y hacer otra con ellos.",
        "Meta apelará, así que la multa final puede cambiar; lo que no cambia es la presión sobre lo que las empresas dicen de sus datos."
      ],
      hacer: "Pedirle a cada cliente su aviso de privacidad y compararlo, línea por línea, con lo que de verdad hacen sus píxeles y sus listas de audiencias; anotar lo que no coincida y llevárselo al responsable legal esta semana.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/privacy/metas-25-billion-privacy-fine-in-new-mexico-is-a-big-number-but-is-it-a-big-deal-for-ad-tech/" }]
    },

    {
      id: "threadslikes", dep: "content", peso: "principal",
      etiquetas: ["Threads", "Función nueva", "Marcas"],
      titular: "Threads prueba «me gusta» personalizados: un emoji, un sticker o un GIF en tu perfil",
      corto: "Threads prueba «me gusta» personalizados",
      cuerpo: "Threads está probando un «me gusta» personalizado: el usuario escoge un emoji, un sticker o un GIF y los demás lo ven cada vez que le dan «me gusta» a sus publicaciones. Está atado al perfil, no a cada post. Por ahora la prueba es solo con usuarios seleccionados en Corea del Sur, Brasil e Indonesia, según Connor Hayes, jefe de Threads, y no hay fecha de lanzamiento amplio. Social Media Today sugiere que los usuarios lo cambien por temporada y que las marcas lo amarren a un producto o proyecto.",
      cifras: [
        { v: "3 países", t: "Corea del Sur, Brasil e Indonesia, donde se prueba" },
        { v: "3 formatos", t: "emoji, sticker o GIF" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Es una función chiquita, pero deja a la marca poner algo suyo en cada interacción. Aún no llega a RD, así que toca tener la idea lista antes de que llegue.",
      hacer: "Esta semana, proponerle a dos clientes un «me gusta» de marca (emoji, sticker o GIF) para cuando la función llegue, y definir en qué temporadas lo cambiarían.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/threads-launches-custom-like-buttons/873267/" }]
    },
    {
      id: "tiktokguia", dep: "content", peso: "secundaria",
      etiquetas: ["TikTok", "Local", "Restaurantes"],
      titular: "TikTok estrena una guía de restaurantes dentro de la app en EE. UU.",
      corto: "TikTok estrena guía de restaurantes en EE. UU.",
      cuerpo: "TikTok lanzó en EE. UU. «Must Eat», una guía de restaurantes recomendados por la comunidad, que se explora por ciudad y se filtra por tipo de cocina, precio, puntuación y ubicación. Cada local tiene su página con videos de TikTok y algunos se pueden reservar por OpenTable. TikTok dice que 27 millones de estadounidenses visitaron un restaurante, café o tienda independiente por primera vez el año pasado tras verlo en la app, y estima en US$4,700 millones ese gasto local.",
      cifras: [
        { v: "27 millones", t: "de estadounidenses visitaron un negocio independiente tras verlo en TikTok, según la plataforma" },
        { v: "US$4,700 millones", t: "gasto local estimado por TikTok" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es una función de EE. UU., pero muestra pa’ dónde va TikTok: de red de videos a buscador de dónde comer. Pa’ content, el video del restaurante o del colmado ya es la vitrina.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-adds-in-app-restaurant-guide/873122/" }]
    },

    {
      id: "constitucion", dep: "rd", peso: "principal", para: ["medios", "planning", "content"],
      etiquetas: ["Calendario", "Feriados", "Temporada"], fecha: "30 oct 2026",
      titular: "El Día de la Constitución se muda al lunes 9 de noviembre",
      corto: "El Día de la Constitución pasa al lunes 9 de noviembre",
      cuerpo: "Santo Domingo.— Según Remolacha, que cita el calendario oficial de feriados del Ministerio de Trabajo, el descanso por el Día de la Constitución pasa del viernes 6 al lunes 9 de noviembre de 2026. El viernes 6 será laborable. Remolacha no habla de puente largo, pero con el lunes libre el descanso corre del sábado 7 al lunes 9.",
      cifras: [
        { v: "Lun 9 nov", t: "día de descanso por la Constitución" },
        { v: "Vie 6 nov", t: "queda como día laborable" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Un fin de semana de tres días cambia cuándo la gente compra, viaja y consume medios. Si tu plan tenía fuerza el viernes 6, hay que moverla.",
      hacer: "Revisar hoy los planes de la semana del 2 al 9 de noviembre: mover pauta y publicaciones del viernes 6 al jueves 5 y preparar una pieza de «aprovecha el puente» para clientes de viajes, restaurantes y retail.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/dia-de-la-constitucion-se-traslada-al-9-de-noviembre/" }]
    },
    {
      id: "tpm", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Economía", "Banco Central", "Inflación"], fecha: "30 oct 2026",
      titular: "El Banco Central mantiene la tasa de política monetaria en 5.50 %",
      cuerpo: "Santo Domingo.— El Banco Central mantuvo la tasa en 5.50 % anual. La inflación interanual bajó de 5.67 % en junio a 5.12 % en septiembre, y el banco proyecta que volverá al rango meta de 4.0 % ± 1.0 % en el cuarto trimestre. La economía creció 5.6 % interanual en septiembre y 4.6 % en los primeros nueve meses; para 2026 se proyecta un crecimiento cerca de 4.5 %. Entre los motivos, el Banco Central cita el petróleo alto (WTI cerca de US$97 en octubre) por los conflictos internacionales.",
      cifras: [
        { v: "5.50 %", t: "tasa de política monetaria" },
        { v: "5.12 %", t: "inflación interanual de septiembre" },
        { v: "4.5 %", t: "crecimiento proyectado para 2026" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning es una señal de estabilidad con ojo en los precios: el consumidor sigue gastando, pero la inflación todavía está por encima de la meta.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386805/banco-central-mantiene-su-tasa-de-politica-monetaria-en-5-50-anual-8/" }]
    },
    {
      id: "vuelos", dep: "rd", peso: "secundaria", para: ["planning", "creatividad", "content"],
      etiquetas: ["Turismo", "Viajes", "Consumo"], fecha: "30 oct 2026",
      titular: "¿Vas a viajar? Así están los precios de los vuelos desde RD",
      cuerpo: "Santo Domingo.— El Dinero hizo un sondeo el 27 de octubre de tarifas de ida y vuelta desde Santo Domingo: San Juan desde unos RD$16,340 (US$269), Bogotá RD$17,670, Miami RD$18,580, Madrid RD$41,670 y París RD$46,050. Son tarifas de referencia que pueden cambiar según la temporada, la demanda y la anticipación de la compra.",
      cifras: [
        { v: "RD$16,340", t: "San Juan, la tarifa más baja del sondeo (desde)" },
        { v: "RD$18,580", t: "Miami (desde)" },
        { v: "RD$46,050", t: "París, la más alta del sondeo (desde)" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Los clientes de aerolíneas, tarjetas, agencias de viaje y bancos pueden hablarle a quien está comparando precios ahora, con el puente y las fiestas en el calendario.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386817/vas-a-viajar-asi-estan-los-precios-de-los-vuelos-desde-republica-dominicana/" }]
    },
    {
      id: "combustibles", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Consumo", "Combustibles", "Precios"], fecha: "30 oct 2026",
      titular: "El Gobierno congela los combustibles del 31 de octubre al 6 de noviembre",
      cuerpo: "Santo Domingo.— El Ministerio de Industria, Comercio y Mipymes mantuvo los precios por galón: gasolina premium RD$358.10, regular RD$317.50, gasoil regular RD$270.80, gasoil óptimo RD$318.10 y GLP RD$135.20. El Gobierno destina RD$1,516.5 millones en subsidios esta semana y RD$43,324 millones en lo que va de 2026, según El Dinero.",
      cifras: [
        { v: "RD$317.50", t: "galón de gasolina regular, congelado" },
        { v: "RD$1,516.5 millones", t: "subsidio de la semana" },
        { v: "RD$43,324 millones", t: "subsidios anticrisis en 2026" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Con el combustible estable una semana más, el costo de moverse no cambia y se puede planear con tranquilidad. Es un dato útil para clientes de transporte, entrega y logística.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386822/gobierno-congela-precios-de-los-combustibles-del-31-de-octubre-al-6-de-noviembre/" }]
    }
  ],

  pizarra: ["doordashinsta", "walmartcarol", "pinterestq3", "metanm", "threadslikes", "constitucion"],

  frases: [
    { dep: "medios", texto: "DoorDash compra Instacart por US$17,000 millones: el retail media de entrega a domicilio va a tener menos vendedores.", uso: "para conversaciones de retail media" },
    { dep: "creatividad", texto: "Walmart no inventó una historia pa’ Navidad: agarró la de los Muppets y le puso tres fantasmas con sus ofertas.", uso: "para ideas de campañas navideñas" },
    { dep: "data", texto: "A Meta no la multaron por tener datos, sino por prometer que los usuarios los controlaban: US$25,000 millones por eso.", uso: "para conversaciones de privacidad con el cliente" },
    { dep: "planning", texto: "Pinterest ya tiene 661 millones de usuarios, pero 17 millones del último crecimiento vinieron de fuera de EE. UU. y Europa.", uso: "para evaluar plataformas en el plan de diciembre" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "DoorDash compra Instacart" },
      { id: "creatividad", texto: "Walmart y los Muppets" },
      { id: "planning", texto: "Pinterest llega a 661 millones" },
      { id: "data", texto: "La multa de US$25,000 millones a Meta" },
      { id: "content", texto: "Los «me gusta» a la medida de Threads" },
      { id: "rd", texto: "Zoom a RD: el feriado pasa al lunes 9" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "doordashinsta", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "pinterestq3", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Pinterest llegó a 661 millones de usuarios y ya hay Navidad en el calendario. Pídele el tamaño de audiencia en RD antes de cerrar el plan de diciembre."
    },
    data: {
      tipo: "secreto", nota: "metanm", titulo: "Destapa el expediente",
      texto: "Un juez de Nuevo México le ordenó a Meta pagar [[US$25,000 millones]] por engañar a usuarios de Facebook sobre sus datos, tras hallar un jurado más de [[43 millones de violaciones]] de la ley estatal de protección al consumidor."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "constitucion", titulo: "La pregunta del patio",
      p: "¿A qué día se pasó el descanso por el Día de la Constitución en 2026?",
      opciones: ["Viernes 6 de noviembre", "Lunes 9 de noviembre", "Jueves 5 de noviembre"], correcta: 1,
      explicacion: "Según el calendario oficial del Ministerio de Trabajo que cita Remolacha, el descanso pasa al lunes 9 y el viernes 6 queda laborable."
    }
  }
};
