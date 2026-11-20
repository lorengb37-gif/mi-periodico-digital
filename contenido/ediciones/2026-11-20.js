/*
  El Pulso Publicitario · edición N.º 324 · 20 de noviembre de 2026
  ------------------------------------------------
  Estructura igual a la plantilla del 11 de septiembre (ediciones/2026-09-11.js).
*/
window.EDICION = {
  numero: 324,
  fechaISO: "2026-11-20",
  fecha: "Viernes 20 de noviembre 2026",
  fechaCorta: "20 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "En diciembre gana la marca que suena a gente de verdad y cuida a quién le muestra qué, cuántas veces y con qué permiso.",
    largo: "Coca-Cola dejó la IA generativa fuera de su campaña navideña y volvió a las familias de carne y hueso, mientras un modelo demanda a una marca por convertir sus fotos de 2021 en anuncios hechos con IA. Amazon ya cuenta como una sola la frecuencia en Netflix y Prime Video, Apple deja que las apps manden la señal de «no vendas mis datos» y LinkedIn confirma que en B2B pesa más el testimonio que la ficha técnica. Aquí en el patio, el doble sueldo arranca el 3 de diciembre. La lección del viernes: lo humano, lo medido y lo autorizado rinden más. Escoge una tarea de esta edición y ponle dueño antes del lunes.",
    corto: "Gente real en la pieza, frecuencia bajo control y permisos al día. Una tarea con dueño antes del lunes.",
    porDep: {
      medios: "Si compras Netflix y Prime Video por Amazon, arma un solo tope de frecuencia pa’ los dos y vigila los acuerdos garantizados, que siguen entregando aunque llegues al tope.",
      creatividad: "Antes de meter IA en una pieza con una cara conocida, pide el permiso por escrito. Y pregúntate si la gente quiere ver una familia real en vez de una generada.",
      planning: "En B2B, el brief tiene que pedir pruebas de terceros: testimonios, clientes que respalden y datos del sector, no solo atributos del producto.",
      data: "Haz el inventario de las etiquetas de anuncios que corren dentro de apps y confirma que sepan leer la señal GPC.",
      content: "Busca qué canción vieja está volviendo en TikTok en tu categoría. A veces el próximo hit tiene 30 años.",
      rd: "El doble sueldo cae el 3 de diciembre: cuadra la pauta de tus clientes de consumo pa’ esa semana, con mensajes que ayuden a estirar el dinero."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon DVA+ cuenta Netflix y Prime Video bajo un solo tope de frecuencia · La publicidad de Walmart crece 25 %, su ritmo más lento en dos años" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Coca-Cola deja la IA generativa fuera de su Navidad con «Enjoy Joy» · Un modelo demanda a RomperJack por anuncios hechos con IA a partir de sus fotos" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "LinkedIn y WARC: en B2B ganan los testimonios y el respaldo de otros · Reddit publica su guía pa’ el Super Bowl 2027" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Apple deja que las apps de iOS 27 manden la señal GPC a los sitios y a sus anuncios · España: el jefe de marketing no puede ser delegado de protección de datos" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "TikTok: el 94 % de las canciones del Billboard Global 200 se volvió viral ahí primero · Instagram deja editar Stories · Ask YouTube llega a TVs y consolas" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "El doble sueldo arranca el 3 de diciembre y la canasta pasa de RD$50,000 · Héctor Acosta pega en Colombia con «La Nena del Jean» · RD sube a «muy alto» en gobierno electrónico · Premio Nacional de Periodismo Digital 2026 · Merca Jumbo abre su tienda 13" }
  },

  notas: [
    {
      id: "dvafrecuencia", dep: "medios", peso: "principal",
      etiquetas: ["CTV", "Amazon Ads", "Frecuencia"],
      titular: "Amazon ya cuenta Netflix y Prime Video bajo un mismo tope de frecuencia en DVA+",
      corto: "Amazon: un solo tope pa’ Netflix y Prime Video",
      cuerpo: "Amazon actualizó el 19 de noviembre su página de ayuda sobre frecuencia en DVA+, su herramienta pa’ comprar display, video y TV en streaming. Un solo contador sigue las impresiones de cada persona en todos los publishers de una campaña o grupo de frecuencia: un anuncio en Netflix cuenta pa’l mismo tope que uno en Prime Video o Fire TV, y se activa solo, sin cambiar la segmentación. Ojo con las excepciones: los acuerdos programáticos garantizados, Netflix PG incluido, suman al tope pero no se detienen, así que el peso del control cae sobre las demás líneas de la campaña. Los anuncios en tabletas Fire y Kindle, y las líneas de share of voice de Twitch, quedan fuera de los topes. Los topes se pueden poner por día, por hora o cada 10 minutos.",
      cifras: [
        { v: "1 contador", t: "pa’ Netflix, Prime Video y Fire TV dentro de la misma campaña o grupo" },
        { v: "10 minutos", t: "el intervalo más corto pa’ fijar un tope, además de por hora o por día" },
        { v: "2", t: "grupos de frecuencia como máximo por cuenta de anunciante" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si un cliente compra Netflix y Prime Video por Amazon, por fin puede controlar cuántas veces la misma persona ve el anuncio en las dos pantallas. Pero los acuerdos garantizados siguen entregando después del tope, y eso puede dejar sin impresiones a las líneas más baratas.",
      hacer: "Esta semana, revisar las campañas de CTV en Amazon que mezclen Netflix PG con subastas privadas, ver cuánto del tope se está comiendo el garantizado y ajustar el tope o el reparto de presupuesto antes de la semana del Viernes Negro.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazons-dva-frequency-caps-count-netflix-and-prime-video-as-one/" }]
    },
    {
      id: "walmartads", dep: "medios", peso: "secundaria",
      etiquetas: ["Retail media", "Walmart Connect"],
      titular: "La publicidad de Walmart crece 25 %, su ritmo más lento en dos años",
      corto: "Walmart Ads frena: +25 %",
      cuerpo: "En su tercer trimestre fiscal, que cerró el 31 de octubre de 2026, la publicidad global de Walmart creció 25 %, por debajo del 38 % del trimestre anterior y del 53 % de hace un año. Walmart Connect en EE. UU., sin contar VIZIO ni Vibe.co, subió 36 % (venía de 43 %). La publicidad internacional cayó 15 %, sobre todo porque el Big Billion Days de Flipkart se movió al cuarto trimestre. Walmart no publica sus ingresos de publicidad en dólares.",
      cifras: [
        { v: "+25 %", t: "publicidad global de Walmart en el trimestre" },
        { v: "+36 %", t: "Walmart Connect en EE. UU., sin VIZIO ni Vibe.co" },
        { v: "−15 %", t: "publicidad internacional, por el cambio de fecha de una venta de Flipkart" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El retail media sigue creciendo, pero ya no a la carrera de antes. Cuando el cliente pregunte si vale la pena, la respuesta tiene que salir de sus ventas y no del titular.",
      fuentes: [
        { nombre: "PPC Land", url: "https://ppc.land/mailchimp-sells-for-3-68bn-as-walmarts-ad-growth-slows-to-25/" },
        { nombre: "Adweek", url: "https://www.adweek.com/commerce/walmart-sees-weakest-global-ad-sales-growth-in-2-years/" }
      ]
    },

    {
      id: "cocacola", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Coca-Cola", "Navidad"],
      titular: "Coca-Cola deja la IA generativa fuera de su Navidad y vuelve a la gente de verdad",
      corto: "Coca-Cola deja la IA fuera de su Navidad",
      cuerpo: "Coca-Cola lanzó el jueves «Enjoy Joy», su campaña navideña en EE. UU., con familias y amigos jugando fútbol, friendo pavo y compartiendo la mesa. Después de dos años de anuncios hechos con IA generativa, que superaron sus métricas internas pero dividieron a la gente, esta vez la marca volvió a lo tradicional. La hizo WPP Open X, liderada por Ogilvy, con dirección de Paul Dektor y producción de Mayan Productions. Hay versiones de 30, 15 y 6 segundos pa’ TV, digital, streaming y redes, versiones pa’l mercado hispano, contenido con creadores en Meta, TikTok, Pinterest y YouTube y una serie social, «Grandma’s Holiday Table», dedicada a las abuelas y tías que mantienen las tradiciones. La caravana navideña hará más de 270 paradas.",
      cifras: [
        { v: "2 años", t: "seguidos de anuncios navideños con IA generativa antes de este cambio" },
        { v: "30 · 15 · 6", t: "segundos: los formatos de los spots" },
        { v: "270+", t: "paradas de la caravana navideña en EE. UU." }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Una de las marcas que más empujó la IA en publicidad navideña vuelve a filmar gente real. La IA sirve pa’ producir, pero en Navidad la gente quiere reconocerse en la pieza.",
      hacer: "Esta semana, revisar las piezas navideñas en producción y marcar cuáles usan caras o escenas generadas con IA. Pa’ cada una, decidir con el cliente si una toma real con su gente, como la serie de las abuelas, cuenta mejor la historia.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/coca-cola-pivots-from-divisive-ai-generated-ads-for-holiday-campaign/875215/" }]
    },
    {
      id: "romperjack", dep: "creatividad", peso: "secundaria",
      etiquetas: ["IA", "Derechos de imagen", "Instagram"],
      titular: "Un modelo demanda a RomperJack: dice que convirtieron sus fotos de 2021 en anuncios hechos con IA",
      corto: "Demanda por anuncios con IA de un modelo",
      cuerpo: "El modelo y actor Jeffrey S. Stanfield demandó el 18 de noviembre a Cooper Street, LLC, dueña de la marca de ropa RomperJack, ante la corte federal del Distrito Central de California. Según la demanda, en 2021 posó en una sesión de fotos cerca del muelle de Santa Monica sin firmar ninguna autorización, y después de que Cooper Street compró la marca en enero de 2025 la empresa usó IA pa’ crear imágenes y un video nuevos de él pa’ anuncios en Instagram. Reclama por respaldo falso bajo la Lanham Act, derecho de imagen y competencia desleal, y pide prohibir cualquier imagen sintética suya sin permiso escrito. RomperJack dice que usó materiales heredados del dueño anterior. Son acusaciones que todavía no ha evaluado un tribunal.",
      cifras: [
        { v: "5", t: "reclamos en la demanda, entre ellos el derecho de imagen" },
        { v: "US$2,500", t: "tarifa diaria de modelaje que cita el demandante" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Tener la foto no da permiso pa’ crear una persona nueva con IA. Cualquier banco de imágenes viejo de un cliente puede traer el mismo lío.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/model-sues-romperjack-after-2021-photos-became-ai-generated-instagram-ads/" }]
    },

    {
      id: "linkedinb2b", dep: "planning", peso: "principal",
      etiquetas: ["B2B", "LinkedIn", "WARC"],
      titular: "LinkedIn y WARC: en B2B vende más el que da confianza que el que tiene mejor producto",
      corto: "En B2B gana la confianza, no la ficha",
      cuerpo: "El B2B Institute de LinkedIn, junto a WARC y Lions Advisory, analizó 700 casos B2B pa’ entender qué hace que una marca sea «comprable». Las campañas con tres o más señales de compra, como testimonios, respaldo de otros clientes y liderazgo en la industria, les ganaron a las demás en indicadores comerciales y de marca. Esas campañas tuvieron 1.7 veces más probabilidad de llegar a «Strategic Assets», el escalón más alto del WARC B2B Effectiveness Ladder. El 83 % de ellas partía de un insight del cliente, y eran cuatro veces más propensas a incluir testimonios. Según Mimi Turner, de LinkedIn, cuando lo básico del producto se cumple, la prioridad es que la decisión «se pueda defender» aunque salga mal.",
      cifras: [
        { v: "700", t: "casos B2B analizados" },
        { v: "1.7x", t: "más probabilidad de llegar al escalón más alto de efectividad de WARC" },
        { v: "83 %", t: "de las campañas más «comprables» partía de un insight del cliente" },
        { v: "4x", t: "más propensas a usar testimonios de clientes" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "En B2B, el que compra quiere cubrirse las espaldas frente a su jefe. Si el brief solo habla de atributos del producto, le falta lo que más pesa en la decisión.",
      hacer: "Esta semana, coger el brief de un cliente B2B (banca empresarial, seguros, tecnología) y revisar cuántas de las tres señales trae: testimonios, respaldo de otros clientes y liderazgo en la industria. Si faltan, proponer cómo sumarlas en la próxima pieza.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/linkedin-study-explores-b2b-buying-decisions/875281/" }]
    },
    {
      id: "redditsuperbowl", dep: "planning", peso: "secundaria",
      etiquetas: ["Temporadas", "Reddit", "Super Bowl"],
      titular: "Reddit les dice a las marcas que planifiquen ya el Super Bowl 2027",
      corto: "Reddit: planifica ya el Super Bowl",
      cuerpo: "Reddit publicó una guía de 12 páginas sobre cómo se comportan los fanáticos del Super Bowl y la NFL en sus comunidades. Recomienda escoger un enfoque de contenido claro, decidir qué emociones, rituales y lenguaje se van a usar pa’ conectar con cada comunidad y empezar a planificar mucho antes del juego de 2027.",
      cifras: [{ v: "12", t: "páginas de la guía de Reddit" }],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-publishes-guide-to-super-bowl-engagement-trends/875284/" }]
    },

    {
      id: "applegpc", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Apple", "GPC"],
      titular: "Apple deja que las apps de iOS 27 les digan a los sitios y a sus anuncios «no vendas mis datos»",
      corto: "Apple abre la señal «no vendas mis datos»",
      cuerpo: "Apple publicó el 18 de noviembre, en el blog de WebKit, una función pa’ las apps que muestran páginas web: ahora pueden activar Global Privacy Control (GPC), que manda el encabezado Sec-GPC: 1. Viene apagada y cada app tiene que crear su propio ajuste pa’l usuario. Cuando está encendida, la señal llega a la página principal, a los marcos internos y a los recursos de terceros, etiquetas de anuncios incluidas. Aplica desde la versión 27 de iOS, iPadOS, visionOS y macOS. En California, la GPC cuenta como una petición válida de no vender ni compartir datos pa’ publicidad. El 17 de noviembre, el regulador de privacidad de California le cobró US$1.55 millones a Hertz por no hacerle caso a esa señal.",
      cifras: [
        { v: "Sec-GPC: 1", t: "el encabezado que mandan las apps que activen la función" },
        { v: "27", t: "la versión de iOS, iPadOS, visionOS y macOS desde la que aplica" },
        { v: "US$1.55M", t: "la multa a Hertz por ignorar la señal en California" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "La señal de exclusión ya no vive solo en el navegador: ahora puede salir de cualquier app que muestre web.",
        "Las etiquetas de anuncios que corren dentro de apps van a recibir la señal y tienen que saber qué hacer con ella."
      ],
      hacer: "Esta semana, pedirle al equipo de ad ops o al proveedor de la plataforma de consentimiento que confirme si las etiquetas de los clientes con tráfico en EE. UU. leen el encabezado Sec-GPC y qué hacen cuando llega en 1.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/apple-lets-ios-27-apps-tell-websites-not-to-sell-or-share-user-data/" }]
    },
    {
      id: "aepddpo", dep: "data", peso: "secundaria",
      etiquetas: ["Regulación", "España", "Protección de datos"],
      titular: "España: el jefe de marketing no puede ser, por regla general, el delegado de protección de datos",
      corto: "España: marketing no puede ser DPO",
      cuerpo: "La Agencia Española de Protección de Datos (AEPD) publicó el 19 de noviembre una guía de 59 páginas sobre el delegado de protección de datos. Ahí considera incompatibles con ese cargo, como regla general, los puestos de dirección general, operaciones, finanzas, recursos humanos, tecnología y marketing, porque quien decide pa’ qué se usan los datos no puede supervisarse a sí mismo. La guía aclara que no crea obligaciones nuevas ni impone un solo modelo. También advierte que pagarle al delegado con bonos atados a las ganancias puede afectar su objetividad.",
      cifras: [{ v: "59", t: "páginas de la guía de la AEPD" }],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/spains-aepd-says-marketing-chiefs-cant-double-as-data-protection-officers/" }]
    },

    {
      id: "tiktokmusica", dep: "content", peso: "principal",
      etiquetas: ["TikTok", "Música", "Tendencias"],
      titular: "TikTok: el 94 % de las canciones del Billboard Global 200 se hizo viral ahí antes de subir",
      corto: "TikTok: 94 % de los hits se pegó ahí primero",
      cuerpo: "TikTok publicó su Music Impact Report 2026, hecho por Luminate con más de 4,000 usuarios de EE. UU. El 94 % de las canciones que entraron al Billboard Global 200 en 2025 tuvo un momento viral en TikTok antes de subir, frente al 84 % del informe anterior. Las canciones que pegan en TikTok duran cuatro veces más en la lista, el 45 % de los usuarios de EE. UU. descubre música nueva en la app y los oyentes de música en TikTok tienen 78 % más probabilidad de pagar una suscripción de streaming de música.",
      cifras: [
        { v: "94 %", t: "de las canciones del Billboard Global 200 de 2025 se hizo viral en TikTok primero" },
        { v: "4x", t: "más tiempo en la lista pa’ las canciones que pegan en TikTok" },
        { v: "45 %", t: "de los usuarios de EE. UU. descubre música nueva en la app" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "El audio que escoges en TikTok puede estar subiendo en ese momento, y la marca que lo agarra temprano se pega con él. Mira a Héctor Acosta en el Zoom a RD: un merengue de hace 30 años volvió por las redes.",
      hacer: "Esta semana, sacar del TikTok Creative Center los cinco audios que más suben en República Dominicana, escoger uno que le pegue a un cliente y montar una pieza con él antes del lunes.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-releases-2026-music-impact-report/875144/" }]
    },
    {
      id: "igstories", dep: "content", peso: "secundaria",
      etiquetas: ["Instagram", "Stories"],
      titular: "Instagram por fin deja editar una Story después de publicarla, pero solo por 15 minutos",
      corto: "Instagram deja editar Stories",
      cuerpo: "Instagram lanzó varias novedades pa’ Stories: ya se puede editar una Story publicada durante 15 minutos, es más fácil escoger y subir varias fotos, hay un selector de stickers nuevo y más degradados de color pa’l fondo. En iOS, además, se puede buscar dentro de los elementos guardados.",
      cifras: [{ v: "15 minutos", t: "pa’ editar una Story después de publicarla" }],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-adds-stories-editing/875261/" }]
    },
    {
      id: "askyoutube", dep: "content", peso: "secundaria",
      etiquetas: ["YouTube", "IA", "Búsqueda"],
      titular: "Ask YouTube, la búsqueda con IA, ya está en TVs y consolas",
      corto: "Ask YouTube llega a la TV",
      cuerpo: "YouTube confirmó en su actualización de TV del tercer trimestre que Ask YouTube, su búsqueda conversacional con IA, ya funciona en televisores y consolas de videojuegos. Responde preguntas abiertas con una guía escrita y clips de videos. No dijo en qué países ni idiomas está en TV; en julio, en computadoras, era solo pa’ usuarios de EE. UU. con sesión iniciada y en inglés. Según YouTube, más de 140 millones de personas lo usaron en junio de 2026.",
      cifras: [{ v: "140M+", t: "personas usaron Ask YouTube en junio de 2026" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "La gente le habla a YouTube con preguntas completas. Los videos que contestan una pregunta clara tienen más chance de salir en la respuesta.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/youtube-puts-ask-youtube-ai-search-on-tvs-and-gaming-consoles/" }]
    },

    {
      id: "doblesueldo", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Consumo", "Navidad", "Banco Central"], fecha: "20 nov 2026",
      titular: "El doble sueldo cae el 3 de diciembre y la canasta familiar ya pasa de RD$50,000",
      corto: "Doble sueldo el 3 de diciembre",
      cuerpo: "Santo Domingo.— El Gobierno anunció que empieza a pagar el doble sueldo el 3 de diciembre. El economista Nicolás Jiménez, exdirector de la Escuela de Economía de la UASD, le recomendó a la gente hacer un presupuesto, pagar primero las deudas y guardar una parte pa’ enero, dejando espacio pa’ algún gusto navideño. Al mismo tiempo, según datos del Banco Central citados por El Nacional, la canasta familiar promedio llegó a RD$50,255.05 en octubre de 2026, 39.27 % más que en agosto de 2020. En los hogares de menos ingresos subió 41.7 %, hasta RD$29,972.34.",
      cifras: [
        { v: "3 dic", t: "arranca el pago del doble sueldo" },
        { v: "RD$50,255", t: "costo promedio de la canasta familiar en octubre de 2026" },
        { v: "+39.27 %", t: "de la canasta frente a agosto de 2020" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "El doble sueldo es el pico de dinero en la calle del año, pero llega a hogares que ven la canasta cada vez más cara. El mensaje que ayude a estirar el dinero va a pegar más que el que solo empuja a gastar.",
      hacer: "Esta semana, cuadrar con los clientes de consumo, banca y retail la pauta pa’ la semana del 3 de diciembre, y preparar por lo menos una pieza que ayude a estirar el doble sueldo: cuotas, ahorro pa’ enero o combos que rindan.",
      fuentes: [
        { nombre: "N Digital", url: "https://n.com.do/2026/11/20/que-hacer-para-que-el-doble-sueldo-alcance-hasta-enero-estas-son-las-recomendaciones-de-los-expertos/" },
        { nombre: "El Nacional", url: "https://elnacional.com.do/economia/canasta-familiar-aumenta-rd-14-171-administracion-abinader_586723.html" }
      ]
    },
    {
      id: "hectoracosta", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Tendencia", "Redes"], fecha: "19 nov 2026",
      titular: "¡Wepa! Héctor Acosta pega en Colombia con «La Nena del Jean», 30 años después",
      corto: "«La Nena del Jean» vuelve a pegar",
      cuerpo: "«La Nena del Jean», un merengue que Héctor Acosta «El Torito» grabó hace tres décadas, se volvió tendencia en Colombia y anda viral en las redes. El cantante aprovechó y sacó una versión remasterizada este 2026. Además, prepara una bachata nueva pa’ enero y tiene un concierto pa’ abril de 2027 en el Golden Center de Argentina, que se anuncia como agotado.",
      cifras: [{ v: "30 años", t: "desde que se grabó el merengue que volvió a pegar" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "La música dominicana vieja tiene vida nueva en redes, y no solo aquí. Pa’ una marca, la nostalgia bien escogida conecta con dos generaciones a la vez.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/musica/20261119/hector-acosta-tendencia-colombia-nena-jean-30-anos_930780.html" }]
    },
    {
      id: "egobierno", dep: "rd", peso: "secundaria", para: ["data", "planning"],
      etiquetas: ["Gobierno digital", "ONU"], fecha: "19 nov 2026",
      titular: "RD sube a la categoría «muy alto» en gobierno electrónico de la ONU",
      corto: "RD, «muy alto» en gobierno digital",
      cuerpo: "Según el E-Government Survey 2026 de la ONU, la República Dominicana llegó al puesto 79 del mundo y entró al grupo con nivel «muy alto» de desarrollo de gobierno electrónico. Subió seis puestos frente a 2024 y 13 desde 2022, cuando estaba en el 92. Su índice fue de 0.7612, por encima del promedio de las Américas (0.6893). En América solo tres países del Caribe dieron ese salto: RD, Trinidad y Tobago, y Saint Kitts y Nevis.",
      cifras: [
        { v: "79", t: "puesto de RD en el ranking mundial" },
        { v: "0.7612", t: "índice de gobierno electrónico de RD, contra 0.6893 de las Américas" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/politica/gobierno/2026/11/19/rd-alcanza-la-categoria-muy-alto-en-gobierno-electronico-segun-onu/3726114" }]
    },
    {
      id: "periodismodigital", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Premios", "Medios digitales"], fecha: "19 nov 2026",
      titular: "El Premio Nacional de Periodismo Digital 2026 reparte estatuillas: Diario Libre, Panorama y elDinero entre los ganadores",
      corto: "Premio Nacional de Periodismo Digital 2026",
      cuerpo: "El Observatorio de Medios Digitales Dominicanos entregó la novena edición del Premio Nacional de Periodismo Digital. El Gran Premio fue pa’l periodista Robinson Castro. Diario Libre ganó Mejor versión digital de un medio impreso; Panorama, Mejor periódico nativo digital; elDinero, Mejor nuevo medio digital y Mejor periódico digital de economía; el Almuerzo de Negocios, Mejor podcast, y «Las exclusivas con José Peguero», Mejor canal de YouTube. El Banco Popular es el principal aliado del premio.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Es la lista de los medios digitales que el propio gremio considera los mejores este año. Te sirve como punto de partida pa’ armar la pauta digital local, por región y por tema.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/389326/observatorio-de-medios-digitales-celebra-premio-nacional-de-periodismo-digital-2026/" }]
    },
    {
      id: "mercajumbo", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Retail", "Supermercados"], fecha: "20 nov 2026",
      titular: "Merca Jumbo abre su tienda 13 en Los Frailes, Santo Domingo Este",
      corto: "Merca Jumbo abre su tienda 13",
      cuerpo: "Merca Jumbo abrió su sucursal número 13 en Los Frailes, Santo Domingo Este, como parte de su plan de expansión nacional. La apertura genera 100 empleos nuevos, según la vicepresidenta de la marca, Zamira Guerrero Numa.",
      cifras: [
        { v: "13", t: "sucursales de Merca Jumbo con la nueva" },
        { v: "100", t: "empleos nuevos" }
      ],
      fuentes: [{ nombre: "El Día", url: "https://eldia.com.do/merca-jumbo-abre-una-nueva-tienda-en-las-americas/" }]
    }
  ],

  pizarra: ["dvafrecuencia", "cocacola", "linkedinb2b", "applegpc", "tiktokmusica", "doblesueldo"],

  frases: [
    { dep: "creatividad", texto: "Coca-Cola hizo dos Navidades con IA generativa y este año volvió a filmar familias de verdad.", uso: "para conversaciones de IA en la producción" },
    { dep: "medios", texto: "Netflix y Prime Video ya cuentan como una sola pantalla pa’l tope de frecuencia en Amazon.", uso: "para conversaciones de CTV y frecuencia" },
    { dep: "planning", texto: "En B2B, el que compra quiere poder defender la decisión aunque salga mal.", uso: "para briefs B2B" },
    { dep: "content", texto: "El 94 % de las canciones del Billboard Global 200 de 2025 se hizo viral en TikTok antes de subir.", uso: "para escoger audios y tendencias" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Un solo tope pa’ Netflix y Prime Video" },
      { id: "creatividad", texto: "Coca-Cola deja la IA fuera de su Navidad" },
      { id: "planning", texto: "En B2B gana la confianza" },
      { id: "data", texto: "Apple y la señal «no vendas mis datos»" },
      { id: "content", texto: "TikTok y el 94 % de los hits" },
      { id: "rd", texto: "Zoom a RD: el doble sueldo del 3 de diciembre" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "dvafrecuencia", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "redditsuperbowl", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Reddit dice que el Super Bowl 2027 se planifica desde ya: escoge un enfoque, las emociones y el lenguaje de cada comunidad antes de que llegue la euforia del juego."
    },
    data: {
      tipo: "secreto", nota: "applegpc", titulo: "Destapa el expediente",
      texto: "Las apps de iOS 27 pueden mandar la señal [[Sec-GPC: 1]] a las páginas y a sus anuncios, y en California ignorarla le costó a Hertz [[US$1.55 millones]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "askyoutube", titulo: "Piensa como Ask YouTube",
      intro: "Ask YouTube contesta preguntas completas con una guía y clips de videos. Ayúdame a preparar el canal de mi cliente pa’ eso:",
      opciones: [
        "Escribe 10 preguntas completas que la gente le haría a YouTube sobre la categoría de mi cliente",
        "Dime qué video corto del canal contestaría cada pregunta y qué le falta",
        "Reescribe el título y la descripción de un video pa’ que respondan una pregunta clara"
      ],
      cierre: "Señala qué datos de las respuestas tengo que confirmar con el cliente antes de publicar."
    },
    rd: {
      tipo: "pregunta", nota: "doblesueldo", titulo: "La pregunta del patio",
      p: "¿Qué día empieza el Gobierno a pagar el doble sueldo?",
      opciones: ["El 1 de diciembre", "El 3 de diciembre", "El 15 de diciembre"], correcta: 1,
      explicacion: "Arranca el 3 de diciembre. El economista Nicolás Jiménez recomendó hacer un presupuesto, pagar primero las deudas y guardar una parte pa’ enero."
    }
  }
};
