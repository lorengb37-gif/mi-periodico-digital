/*
  El Pulso Publicitario · edición N.º 302 · 29 de octubre de 2026
*/
window.EDICION = {
  numero: 302,
  fechaISO: "2026-10-29",
  fecha: "Jueves 29 de octubre 2026",
  fechaCorta: "29 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes de gastar en el cuarto trimestre, revisa dónde está el precio, dónde está la gente y qué puedes medir por tu cuenta.",
    largo: "Hoy hay varias señales que apuntan a lo mismo: en EE. UU. la política le sube el precio a la TV y al streaming, Stagwell compra a Freestar y mete la venta de publishers dentro de un holding, Google presume que su IA ya mueve la publicidad y TikTok arma una guía de restaurantes dentro de la app. Aquí en el patio, Banreservas abre Expomóvil con campaña de cine y el Centro Cultural Rainieri abre sus puertas en Punta Cana. El consejo: escoge un «Lo que toca hacer» de esta edición, ponle responsable y llévaselo al cliente antes del viernes.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, llévalo al cliente esta semana y ponle fecha.",
    porDep: {
      medios: "Cuando el inventario se encarece, el plan flexible gana. Ten listas dos opciones de reparto del presupuesto antes de que el cliente pregunte.",
      creatividad: "Walmart usó una película que todo el mundo conoce para ordenar su oferta. Busca el referente que tu cliente ya tiene en la cabeza.",
      planning: "Si Google dice que la IA mueve el dinero, revisa cuánto de tu plan depende de la búsqueda tradicional y cuánto de las nuevas superficies.",
      data: "Una multa grande avisa, pero el cambio lo hace el cliente que pregunta. Pídele a cada socio de datos que te diga por escrito cómo usa el consentimiento.",
      content: "Las guías de lugares dentro de la app premian al que tiene fotos y videos buenos de su local. Revisa que tus clientes locales tengan eso al día.",
      rd: "Una feria con campaña propia como Expomóvil muestra cómo se arma una temporada. Estudia la idea y llévale una versión a tu cliente."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Stagwell compra a Freestar y mete la venta de publishers en un holding · La política encarece la TV y el streaming antes de las elecciones de EE. UU." },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Walmart reinventa «The Muppet Christmas Carol» pa’ su campaña navideña · Walmart y Sam’s Club celebran su unión con Goggins y Sudeikis" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Google pasa los US$127,000 millones en ingresos del trimestre · Pew: 58 % ve las redes como fuente importante de noticias" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "La multa a Meta en Nuevo México y lo que le dice al ad tech · Australia estudia un opt-out de algoritmos" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "TikTok estrena «Must Eat», su guía de restaurantes · Reddit lanza el feed «For You»" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Expomóvil Banreservas «La Movida» · Inversionistas en el mercado de valores · 60.4 % de las importaciones · Centro Cultural Rainieri · Latin Grammy" }
  },

  notas: [
    {
      id: "freestar", dep: "medios", peso: "principal",
      etiquetas: ["Agencias", "Stagwell", "Programática"],
      titular: "Stagwell compra a Freestar y mete la venta de publicidad de publishers dentro de un holding",
      corto: "Stagwell compra a Freestar, la venta de publishers",
      cuerpo: "Stagwell, el holding independiente, compró a Freestar, la empresa que maneja la venta programática de publishers como Fortune y Boston Globe Media. Freestar queda dentro de la unidad Owned Media de Stagwell. Digiday no dice cuánto costó el acuerdo. Freestar trabajó en Stagwell Curate, un mercado lanzado en julio que empaqueta inventario de publishers antes de la puja y al que acceden los agentes de IA de Stagwell. El segmento Media and Commerce, donde vive Owned Media, creció 1 % orgánico en el segundo trimestre. La compra levanta dudas sobre cómo Stagwell va a separar sus intereses de compra y venta, y qué tan transparentes serán las comisiones.",
      cifras: [
        { v: "1 %", t: "crecimiento orgánico de Media and Commerce en el 2T" },
        { v: "Julio", t: "mes en que Stagwell lanzó Curate, su mercado de inventario" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Cuando un holding compra a quien vende el inventario, el cliente se pregunta de qué lado está su agencia. La transparencia de comisiones y de dónde va el dinero se vuelve parte de la conversación.",
      hacer: "Preparar una hoja de una página para tus clientes con cómo cobra tu agencia, qué relación tiene con los vendedores de inventario y cómo se separan los intereses, antes de que te lo pregunten.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/stagwell-buys-freestar-putting-publisher-ad-sales-inside-a-holdco/" }]
    },
    {
      id: "politica", dep: "medios", peso: "secundaria",
      etiquetas: ["TV", "CTV", "Costos"],
      titular: "La política encarece la TV y el streaming y aprieta a los anunciantes regionales",
      corto: "La política encarece la TV y el streaming en EE. UU.",
      cuerpo: "Antes de las elecciones de medio término del 3 de noviembre, se espera que se gasten unos US$12,000 millones en publicidad política, y cerca de US$8,200 millones van a TV o CTV, según AdImpact. En Texas, los CPM de TV lineal suben entre 10 % y 15 %, y algunos programas entre 30 % y 50 %. Collective Measures vio que el CPM premium de CTV pasó de US$34–35 a US$43. Los anunciantes locales pueden ser desplazados por campañas políticas que pagan más, y algunos se mudan a streamings que no aceptan anuncios políticos, lo que también les sube el precio.",
      cifras: [
        { v: "US$12,000 millones", t: "gasto político esperado, según AdImpact" },
        { v: "10–15 %", t: "alza típica de CPM en TV lineal en Texas" },
        { v: "US$34–35 a US$43", t: "CPM premium de CTV, según Collective Measures" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es un mercado de EE. UU., pero muestra qué pasa cuando mucha plata llega al mismo inventario a la vez: sube el precio y se pierde control. Sirve de aviso pa’ clientes con compra en EE. UU. y pa’ planificar las temporadas fuertes aquí.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/midterm-political-spending-throws-spanner-into-regional-advertiser-holiday-plans/" }]
    },

    {
      id: "carol", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Walmart", "Navidad"],
      titular: "Walmart reinventa «The Muppet Christmas Carol» con Walton Goggins como Scrooge",
      corto: "Walmart reinventa «The Muppet Christmas Carol»",
      cuerpo: "Walmart estrenó el 26 de octubre su campaña navideña «A Who Knew Carol», que reimagina la película «The Muppet Christmas Carol», de 1992, dentro de su plataforma «Who Knew?». Hecha con Disney y The Muppets Studio, tiene a Walton Goggins, vocero de la marca, como Ebenezer Scrooge. A Scrooge lo visitan tres fantasmas nuevos: el de las Navidades Presentes, el de las Ofertas por Venir y el de la Navidad Rápida. Cada uno representa una parte de la oferta de Walmart, desde los productos hasta la entrega exprés. Adweek no nombra la agencia.",
      cifras: [
        { v: "26 oct", t: "fecha de estreno de la campaña" },
        { v: "3 fantasmas", t: "uno por cada parte de la oferta: productos, ofertas y entrega rápida" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Walmart tomó una historia que todo el mundo conoce y le asignó un personaje a cada beneficio de la tienda. Es una manera de ordenar una oferta larga sin que parezca un catálogo.",
      hacer: "Escoger un cliente con una oferta de fin de año y bocetar un guion de 30 segundos donde cada beneficio (precio, entrega, servicio) sea un personaje de una historia que la gente ya conozca.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/walmart-brings-the-muppets-and-walton-goggins-together-for-its-own-holiday-carol/" }]
    },
    {
      id: "samsclub", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Walmart", "Sam’s Club"],
      titular: "Walmart y Sam’s Club celebran su unión con Walton Goggins y Jason Sudeikis",
      corto: "Walmart y Sam’s Club celebran su unión",
      cuerpo: "En su selección «Ads of the Week», Adweek incluye la campaña donde Walton Goggins y Jason Sudeikis celebran que Walmart y Sam’s Club se unen. La selección la presenta junto a otras ocho piezas de la semana, entre ellas Away, J.Crew, Kalshi, Dollar Tree y Sheba. Adweek no da más detalles de la pieza en el resumen.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/ads-of-the-week-10-campaigns-that-caught-our-eye-from-away-to-walmart/" }]
    },

    {
      id: "googleq3", dep: "planning", peso: "principal",
      etiquetas: ["Plataformas", "Google", "Resultados"],
      titular: "Google pasa los US$127,000 millones en ingresos y mete la IA en el centro de su negocio de anuncios",
      corto: "Google ingresa US$127,600 millones en el trimestre",
      cuerpo: "Alphabet reportó ingresos de US$127,600 millones en el tercer trimestre, 25 % más que el año pasado, según AdExchanger casi todo de publicidad. La publicidad en Google Search llegó a US$63,400 millones, frente a US$56,600 millones de hace un año, y YouTube Ads a US$11,200 millones, casi 10 % más. Philipp Schindler dijo que las consultas en AI Mode generan una tasa de clics similar a la de los anuncios de búsqueda. Los modelos Gemini generaron más de 1,500 millones de piezas creativas en el trimestre. AdExchanger señala que la llamada habló más de IA y nube que del retorno para el anunciante.",
      cifras: [
        { v: "US$127,600 millones", t: "ingresos totales del 3T, +25 %" },
        { v: "US$63,400 millones", t: "ingresos publicitarios de Google Search" },
        { v: "US$11,200 millones", t: "ingresos de YouTube Ads, casi +10 %" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "La búsqueda sigue creciendo y Google quiere llevar los anuncios a las respuestas de IA. Pa’ planificar, eso significa que el recorrido del consumidor puede cambiar de formato antes de que cambie el presupuesto.",
      hacer: "Revisar con un cliente fuerte en búsqueda cuánto de su tráfico llega por consultas largas o conversacionales, y proponer un pequeño ensayo de medición en esas superficies antes de cerrar el plan 2027.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/platforms/google-earned-more-than-100-billion-in-ad-revenue-last-quarter-but-is-it-even-an-ad-business/" }]
    },
    {
      id: "pew", dep: "planning", peso: "secundaria",
      etiquetas: ["Consumidor", "Pew", "Noticias"],
      titular: "Pew: 58 % de los estadounidenses ve las redes como fuente importante de noticias",
      corto: "Pew: 58 % ve las redes como fuente de noticias",
      cuerpo: "Un informe de Pew Research Center del 23 de octubre, con una encuesta a más de 3,500 adultos de EE. UU. en junio de 2026, encontró que 58 % considera las redes sociales una fuente importante de noticias, frente a 43 % en 2022. Un 13 % dice que son su fuente más importante, frente a 5 % en 2022. Social Media Today calcula que son unos 35 millones de adultos. Es un dato de EE. UU., no de RD.",
      cifras: [
        { v: "58 %", t: "ve las redes como fuente importante de noticias (43 % en 2022)" },
        { v: "13 %", t: "las ve como su fuente más importante (5 % en 2022)" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/more-than-half-of-us-adults-use-social-media-to-get-their-news/872828/" }]
    },

    {
      id: "metafine2", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Meta", "Ad tech"],
      titular: "La multa de US$25,000 millones a Meta: gran número, pero ¿gran cambio para el ad tech?",
      corto: "La multa a Meta: ¿cambia algo pa’ el ad tech?",
      cuerpo: "Un juez de distrito de Nuevo México ordenó a Meta pagar US$25,000 millones por engañar a usuarios de Facebook sobre cómo manejaba sus datos. AdExchanger la llama la multa más grande contra Meta y contra cualquier empresa de tecnología. El fiscal general demandó en 2021, tras el caso Cambridge Analytica, y en septiembre un jurado encontró más de 43 millones de violaciones. El juez, Francis Mathew, calificó el engaño de intencional. Meta dice que va a apelar. Lara Compton, de SheerID, dice que la multa puede ser excepcional, pero que el aviso al ad tech no lo es. SheerID encontró que 56 % de los consumidores quiere personalización solo con lo que dio con su consentimiento. Un ejecutivo de Drako duda que cambie el comportamiento, porque los grandes pueden absorber la multa.",
      cifras: [
        { v: "US$25,000 millones", t: "multa ordenada a Meta" },
        { v: "43 millones", t: "violaciones que halló el jurado en septiembre" },
        { v: "56 %", t: "de los consumidores quiere personalización solo con datos consentidos, según SheerID" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "El caso gira en torno a lo que la empresa prometió sobre los datos y lo que hizo en realidad.",
        "AdExchanger recomienda a los anunciantes mirar el historial de privacidad de un socio antes de decidir dónde invertir."
      ],
      hacer: "Hacerle a cada socio de datos de tus clientes tres preguntas por escrito: qué datos recoge, para qué los usa y cómo prueba el consentimiento. Guardar las respuestas en una carpeta compartida.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/privacy/metas-25-billion-privacy-fine-in-new-mexico-is-a-big-number-but-is-it-a-big-deal-for-ad-tech/" }]
    },
    {
      id: "australia", dep: "data", peso: "secundaria",
      etiquetas: ["Regulación", "Algoritmos", "Australia"],
      titular: "Australia estudia obligar a las redes a ofrecer un opt-out de algoritmos, y hay pulseo",
      corto: "Australia estudia un opt-out de algoritmos",
      cuerpo: "El gobierno de Australia empezó en septiembre a evaluar leyes que obligarían a las redes a dejar que los usuarios apaguen las recomendaciones algorítmicas. Los feeds sin algoritmo serían el predeterminado, y quien opte por salir solo vería cuentas que sigue. La ministra de Comunicaciones, Annika Wells, lo describe como parte de su «Digital Duty of Care». Adam Mosseri, jefe de Instagram, dice que quitar los algoritmos de engagement haría a Instagram más pequeño y reduciría el alcance de los creadores. El proyecto está en consulta pública, según Social Media Today.",
      cifras: [{ v: "Septiembre 2026", t: "mes en que empezaron las investigaciones preliminares" }],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/australias-proposed-algorithmic-opt-out-gets-pushback/872830/" }]
    },

    {
      id: "mustEat", dep: "content", peso: "principal",
      etiquetas: ["TikTok", "Local", "Restaurantes"],
      titular: "TikTok estrena «Must Eat», una guía de restaurantes dentro de la app",
      corto: "TikTok estrena su guía de restaurantes «Must Eat»",
      cuerpo: "TikTok anunció el 28 de octubre «Must Eat», una guía de restaurantes dentro de la app, por ahora en varias regiones de EE. UU. Se basa en recomendaciones y engagement de la comunidad, deja filtrar por ciudad, tipo de cocina, precio y ubicación, y cada local tiene su página con fotos, rango de precios y videos relacionados. En algunos restaurantes se puede reservar con OpenTable, y los usuarios pueden guardarlos en sus colecciones. Amplía el feed Local que TikTok lanzó en febrero. Según TikTok, 27 millones de estadounidenses visitaron por primera vez un negocio independiente tras verlo en TikTok el año pasado, y eso generó US$4,700 millones en gasto local.",
      cifras: [
        { v: "27 millones", t: "de estadounidenses visitaron un negocio por primera vez tras verlo en TikTok, según la plataforma" },
        { v: "US$4,700 millones", t: "gasto local estimado por TikTok" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "La función es de EE. UU., pero muestra pa’ dónde va la plataforma: el contenido local pesa más que nunca. Un restaurante con videos buenos de su comida y su ambiente tiene más chance de que lo descubran.",
      hacer: "Escoger un cliente de comida o de tiendas locales y grabar tres videos cortos esta semana (plato estrella, ambiente y precio) con ubicación y datos claros, pa’ ver cuál lo mueve mejor en TikTok.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-adds-in-app-restaurant-guide/873122/" }]
    },
    {
      id: "reddit", dep: "content", peso: "secundaria",
      etiquetas: ["Reddit", "Feed", "Algoritmo"],
      titular: "Reddit lanza «For You», un feed con recomendaciones del algoritmo",
      corto: "Reddit lanza su feed «For You»",
      cuerpo: "Reddit está lanzando un feed «For You» que recomienda publicaciones y subreddits para unirse. El feed «Following» sigue mostrando las comunidades que el usuario ya sigue. «For You» no es el predeterminado: la app abre en el último feed que se vio. Reddit dice que se despliega en todo el mundo en las próximas semanas y que seguirá probando controles como ocultar publicaciones y marcar contenido que el usuario quiere ver menos. Social Media Today no reporta cifras de uso.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-introduces-for-you-feed/873132/" }]
    },

    {
      id: "expomovil", dep: "rd", peso: "principal", para: ["creatividad", "medios", "planning", "content"],
      etiquetas: ["Campaña", "Banca", "Automóviles"], fecha: "28 oct 2026",
      titular: "Banreservas abre Expomóvil 2026 con la campaña «La Movida», inspirada en el cine",
      corto: "Banreservas abre Expomóvil con «La Movida»",
      cuerpo: "Santo Domingo.— Banreservas inauguró el 28 de octubre Expomóvil 2026, su feria automotriz anual, que va del 29 de octubre al 1 de noviembre. La edición se llama «La Movida», está inspirada en el cine y presenta a los clientes como protagonistas. El banco ofrece tasas desde 6.85 %, financiamiento de hasta 90 % del valor del vehículo, plazos de hasta siete años y pagos que pueden iniciar en febrero de 2027. Como novedad, devuelve hasta 15 % a quienes paguen la separación del vehículo con tarjetas de crédito participantes, con montos mínimos y límites. Lo dijo el presidente ejecutivo, Leonardo Aguilera.",
      cifras: [
        { v: "6.85 %", t: "tasa de interés desde" },
        { v: "90 %", t: "del valor del vehículo que se puede financiar" },
        { v: "29 oct–1 nov", t: "fechas de la feria" },
        { v: "15 %", t: "devolución máxima por separar con tarjeta participante" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Un banco armó una temporada completa con una idea creativa (el cine), una oferta clara y cuatro días con fecha. Es un molde que se puede copiar pa’ otras categorías. Pa’ medios y content, hay cuatro días de conversación sobre autos y financiamiento.",
      hacer: "Si tienes clientes de autos, seguros o bancos, revisar esta semana qué ofrecen durante Expomóvil y proponerles una pieza o una promo que se arrime a la conversación hasta el 1 de noviembre.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386541/banreservas-inaugura-expomovil-2026-con-tasas-de-interes-desde-6-85/" }]
    },
    {
      id: "inversionistas", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Consumo", "Inversión", "Generaciones"], fecha: "29 oct 2026",
      titular: "Los millennials tienen 33 % de las cuentas del mercado de valores dominicano",
      cuerpo: "Santo Domingo.— Con datos de Cevaldom a septiembre de 2026, el mercado de valores dominicano suma 195,065 cuentas, 12.6 % más que el año pasado, y 158,361 inversionistas activos. Los millennials tienen 48,179 cuentas (33 %), la generación X 44,159 (30 %) y los baby boomers 36,218 (24 %). La generación Z tiene 11,694 cuentas (8 %). El 94 % de los inversionistas es dominicano y más de la mitad de los participantes son mujeres. El Dinero aclara que cuentas no equivalen a personas, porque un inversionista puede tener varias.",
      cifras: [
        { v: "195,065", t: "cuentas, +12.6 % frente al año pasado" },
        { v: "158,361", t: "inversionistas activos" },
        { v: "33 %", t: "de las cuentas, en manos de millennials" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Hay una audiencia que está abriendo cuentas y buscando dónde poner su dinero, sobre todo millennials y generación X. Cuidado: los porcentajes salen de una base menor que el total, así que úsalos como orientación.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386485/los-millennials-son-el-33-de-los-inversionistas-en-el-mercado-de-valores-dominicano/" }]
    },
    {
      id: "importaciones", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Economía", "Comercio", "ONE"], fecha: "28 oct 2026",
      titular: "EE. UU. y China suman 60.4 % de las importaciones dominicanas",
      cuerpo: "Santo Domingo.— Según la Oficina Nacional de Estadística (ONE), de enero a septiembre de 2026 Estados Unidos y China sumaron 60.4 % del valor de las importaciones dominicanas. EE. UU. aportó US$10,283.9 millones (42.1 %) y China US$4,492.2 millones (18.4 %). Les siguen España con 4.2 %, México con 3.7 % y Brasil con 2.6 %. Los diez primeros orígenes suman 79.8 % del valor importado.",
      cifras: [
        { v: "60.4 %", t: "de las importaciones viene de EE. UU. y China" },
        { v: "42.1 %", t: "viene de EE. UU." },
        { v: "18.4 %", t: "viene de China" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning, el dato dice de dónde llega lo que se vende en el país, algo que pesa en precios y en la disponibilidad de producto de los clientes de retail y consumo.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386511/un-60-4-de-importaciones-dominicanas-provienen-de-china-y-estados-unidos/" }]
    },
    {
      id: "rainieri", dep: "rd", peso: "secundaria", para: ["content", "creatividad", "planning"],
      etiquetas: ["Cultura", "Turismo", "Punta Cana"], fecha: "28 oct 2026",
      titular: "Abre el Centro Cultural Rainieri en Punta Cana, con 27 experiencias sobre la cultura dominicana",
      cuerpo: "Punta Cana.— El Centro Cultural Rainieri abrió al público el miércoles 28 de octubre, frente al Aeropuerto Internacional de Punta Cana. Su exhibición «Un nido para el mundo» tiene 27 experiencias en ocho áreas, y «El mar como territorio» reúne más de 70 obras de más de 40 artistas. Abre de martes a domingo, de 10:00 a. m. a 7:00 p. m., y la entrada cuesta 500 pesos para adultos y 100 pesos para menores de 18 años, según Diario Libre.",
      cifras: [
        { v: "27", t: "experiencias en ocho áreas" },
        { v: "RD$500", t: "entrada de adultos (RD$100 para menores de 18)" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Un espacio nuevo de cultura en la zona turística da material pa’ contenido y pa’ propuestas de marcas de turismo, que ahora pueden hablar de algo más que playa.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/10/28/centro-cultural-rainieri-un-recorrido-por-sus-espacios/3703749" }]
    },
    {
      id: "latingrammy", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Música", "TV", "Agenda"], fecha: "12 nov 2026",
      titular: "Latin Grammy 2026: la alfombra roja arranca a las 7:00 p. m. (ET) por Univision y ViX",
      cuerpo: "Los Latin Grammy 2026 se celebran el 12 de noviembre en el MGM Grand Garden Arena de Las Vegas. La previa, «Noche de estrellas», sale desde las 7:00 p. m. del Este de EE. UU. por Univision, UNIMÁS, Galavisión y ViX, con Raúl de Molina, Chiqui Delgado, Alejandra Espinoza, Emmanuel Palomares e Isadora. Según Diario Libre, la representación dominicana destaca en merengue, bachata, tropical y composición, además de una nominación en rap e hip hop.",
      cifras: [{ v: "12 nov", t: "fecha de los Latin Grammy 2026" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es una noche grande de música latina con presencia dominicana. Pa’ content es una fecha pa’ conversar en redes, y pa’ medios, una noche de audiencia.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/10/28/latin-grammy-2026-quienes-conduciran-gala-previa-noche-de-estrellas/3703225" }]
    }
  ],

  pizarra: ["freestar", "carol", "googleq3", "metafine2", "mustEat", "expomovil"],

  frases: [
    { dep: "medios", texto: "Stagwell compró a Freestar: ahora un holding compra y vende inventario, y el cliente quiere saber de qué lado está su agencia.", uso: "para conversaciones de transparencia con el cliente" },
    { dep: "creatividad", texto: "Walmart le dio un fantasma a cada beneficio de su tienda: productos, ofertas y entrega rápida.", uso: "para proponer ideas de temporada con una historia conocida" },
    { dep: "data", texto: "La multa a Meta fue de US$25,000 millones, pero el aviso pa’ todos es el mismo: lo que prometes sobre los datos tienes que cumplirlo.", uso: "para hablar de consentimiento con socios de datos" },
    { dep: "planning", texto: "Google ingresó US$63,400 millones en búsqueda en un trimestre y ya habla de anuncios dentro de las respuestas de IA.", uso: "para planes que dependen de búsqueda" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Stagwell compra a Freestar" },
      { id: "creatividad", texto: "Walmart y su villancico con los Muppets" },
      { id: "planning", texto: "Google y sus US$127,600 millones" },
      { id: "data", texto: "La multa a Meta y el ad tech" },
      { id: "content", texto: "«Must Eat», la guía de TikTok" },
      { id: "rd", texto: "Zoom a RD: Expomóvil «La Movida»" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "politica", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "googleq3", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Google ingresó US$63,400 millones en búsqueda y US$11,200 millones en YouTube en un trimestre. Antes de cerrar el plan 2027, revisa cuánto de tu cliente depende de la búsqueda."
    },
    data: {
      tipo: "secreto", nota: "metafine2", titulo: "Destapa el expediente",
      texto: "Un juez de Nuevo México ordenó a Meta pagar [[US$25,000 millones]] tras un jurado hallar [[43 millones]] de violaciones a la ley de protección al consumidor. Meta dice que va a apelar."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "importaciones", titulo: "La pregunta del patio",
      p: "¿Qué parte de las importaciones dominicanas de enero a septiembre vino de EE. UU. y China juntos?",
      opciones: ["Cerca de 30 %", "60.4 %", "Casi 90 %"], correcta: 1,
      explicacion: "Según la ONE, EE. UU. y China sumaron 60.4 % del valor de las importaciones de enero a septiembre de 2026."
    }
  }
};
