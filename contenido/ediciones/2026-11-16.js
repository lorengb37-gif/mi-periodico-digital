/*
  El Pulso Publicitario · edición N.º 320 · 16 de noviembre de 2026
  ------------------------------------------------
  Cada edición vive en su propio archivo: ediciones/AAAA-MM-DD.js.
  La rutina diaria crea el archivo del día y lo anota arriba en archivo.js.
  Las ediciones anteriores no se tocan nunca: son el archivo del calendario.
*/
window.EDICION = {
  numero: 320,
  fechaISO: "2026-11-16",
  fecha: "Lunes 16 de noviembre 2026",
  fechaCorta: "16 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Cuando cambia cómo se cuenta, el cliente se asusta. Explícale el número nuevo antes de que lo vea solo en el reporte.",
    largo: "Hoy casi to’ es de contar: Amazon va a reportar 63 % menos impresiones de display desde enero, Google estrena un código pa’ saber qué clic fue de AI Max y LinkedIn le baja el volumen a los comentarios hechos con IA. Los resultados no tienen por qué moverse, pero los reportes sí, y el cliente que está acostumbrado a un número grande se va a preocupar. Aquí en el patio pasa igual: desde el 15 de diciembre la funda del súper se cobra y nadie ha dicho cuánto. El consejo es adelantarse: avisa del cambio, explica qué se mide ahora y fija una línea base nueva antes de que llegue la sorpresa.",
    corto: "Escoge un cambio de medición de hoy y explícaselo al cliente esta semana, antes de que lo vea solo en el reporte.",
    porDep: {
      medios: "Prepara al cliente pa’ un CPM más alto y menos impresiones en Amazon desde enero. Que la conversación sea de resultados, no de volumen.",
      creatividad: "Apple entró al Salón de la Fama Creativo por sostener la idea durante décadas. Revisa qué activo de tu cliente lleva años funcionando y cuídalo.",
      planning: "La compra en vivo ya tiene calendario: Black Friday y diciembre. Si tu cliente vende por redes, ponle fechas a sus transmisiones de una vez.",
      data: "Pregúntale a cada proveedor de IA qué pasa con los datos de tus clientes si la empresa quiebra o la venden. Que quede por escrito.",
      content: "LinkedIn premia el comentario que aporta. Menos «¡Excelente post!» y más una idea propia de quien firma.",
      rd: "La funda que se cobra desde el 15 de diciembre es una conversación que le toca a cada marca de retail. Quien la explique primero, y bien, se lleva la simpatía."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon contará 63 % menos impresiones de display desde enero · Los anuncios de Amazon entran a Audible gratis mientras dura la beta · YouTube cambia «Skip» por «Next» en algunos anuncios" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Apple es la primera marca en el Salón de la Fama Creativo de The One Club, y Home Depot, ESPN, Disney, Budweiser y Chick-fil-A entran al Brand Hall of Fame · PAK’nSAVE le pelea al delivery con «Makeaways»" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "La compra en vivo se acerca a US$20,000 millones en EE. UU. y las marcas la ponen en el centro de la Navidad · LinkedIn: las voces con más de 10,000 seguidores mandan en las citas de los chatbots" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Los chats de los usuarios de Character.ai salen a la venta por US$10 millones · Google Ads estrena un parámetro pa’ saber qué clic «exacto» fue de AI Max" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "LinkedIn esconde los comentarios hechos con IA · TikTok estrena el nivel Premier pa’ sus socios de creadores" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "La funda del súper se cobra desde el 15 de diciembre sin reglas claras, el Indotel frena equipos de alto riesgo, vuelve Ritmo de la Costa, la regalía tiene fecha, Kapo llenó el Óvalo y Wilfrido Vargas vuela con American. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "amazonimpresiones", dep: "medios", peso: "principal",
      etiquetas: ["Amazon Ads", "Medición", "Display"],
      hilo: "Contar distinto",
      titular: "Amazon va a contar 63 % menos impresiones de display desde enero, y los compradores ya están calmando a sus clientes",
      corto: "Amazon contará 63 % menos impresiones",
      cuerpo: "Según un aviso a anunciantes que vio Digiday, Amazon estima que las marcas verán 63 % menos impresiones en sus anuncios de display dentro de sus propiedades (portada, páginas de producto y resultados de búsqueda). La razón: desde el 1 de enero deja de contar la impresión cuando el anuncio empieza a descargarse y la cuenta cuando de verdad se ve en la pantalla. Google anunció un cambio parecido en septiembre, que entra el 17 de febrero. Seis compradores le dijeron a Digiday que ya están ajustando sus reportes, y temen que con menos impresiones suban los CPM. Amazon no ha dicho si cambiará cómo cobra.",
      cifras: [
        { v: "−63 %", t: "impresiones de display que Amazon estima que verán las marcas en sus propiedades" },
        { v: "1 ene", t: "día en que Amazon empieza a contar la impresión cuando se ve en pantalla" },
        { v: "17 feb", t: "fecha del cambio parecido en Google" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Los resultados no tendrían por qué moverse, pero el reporte sí: menos impresiones y CPM más altos. Los modelos de mezcla de medios y los procesos automáticos que usan impresiones hay que recalibrarlos, y los espacios de abajo en la página van a valer menos.",
      hacer: "Esta semana, manda a cada cliente que pauta en Amazon una nota corta: qué cambia el 1 de enero, que el número de impresiones va a bajar y que enero y febrero sirven pa’ fijar la línea base nueva con ROAS y CPA.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/media-buying-briefing-buyers-grapple-with-incoming-amazon-reporting-changes/" }]
    },
    {
      id: "audible", dep: "medios", peso: "secundaria",
      etiquetas: ["Amazon Ads", "Audible", "Retail media"],
      titular: "Los anuncios de Amazon entran a Audible, y mientras dure la beta no se cobran",
      corto: "Amazon pone anuncios en Audible",
      cuerpo: "Amazon empezó a mostrar anuncios Sponsored Products de audiolibros dentro de Audible en EE. UU., en beta abierta según su aviso del 9 de noviembre. No hay que inscribirse: los anuncios de audiolibros que ya están activos entran solos, con las mismas pujas y segmentación de la tienda. Los clics en Audible no se cobran mientras dura la beta, que no tiene fecha de cierre. Los resultados se reportan en la ubicación «Other on Amazon» y las ventas atribuidas ahora incluyen compras hechas en Audible, lo que puede mover cifras anteriores.",
      cifras: [
        { v: "US$0", t: "costo de los clics en Audible durante la beta" },
        { v: "9 nov", t: "fecha del aviso de Amazon Ads" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es inventario nuevo de retail media en audio, gratis por ahora. Si algún cliente vende contenido en Amazon, conviene mirar el reporte antes de que la beta cierre y empiece a cobrar.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-puts-sponsored-products-ads-inside-audible-free-during-beta/" }]
    },
    {
      id: "youtubenext", dep: "medios", peso: "secundaria",
      etiquetas: ["YouTube", "Video", "Formatos"],
      titular: "YouTube cambia el botón «Skip» por «Next» en algunos anuncios, y nadie explica qué pasa al tocarlo",
      corto: "YouTube prueba «Next» en vez de «Skip»",
      cuerpo: "En algunos anuncios de YouTube, el botón pa’ saltar ahora dice «Next» en vez de «Skip». Lo mostró a inicios de noviembre Anthony Higman, fundador de la agencia ADSQUIRE. Ni YouTube ni Google lo han anunciado, y no se sabe si al tocarlo se acaba el anuncio o solo pasa al siguiente de la misma tanda. En la imagen también se leía «Fewer interruptions after this break».",
      tocaTitulo: "¿Y eso qué?",
      toca: "Los anuncios saltables se compran y se miden según si la gente se queda o se va. Si «Next» significa otra cosa, las cifras de vistas pueden moverse.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/youtube-drops-the-word-skip-from-some-ad-buttons-in-favour-of-next/" }]
    },

    {
      id: "halloffame", dep: "creatividad", peso: "principal",
      etiquetas: ["Premios", "Apple", "The One Club"],
      titular: "Apple es la primera marca en el Salón de la Fama Creativo, y Home Depot, ESPN, Disney, Budweiser y Chick-fil-A entran al de marcas",
      corto: "Apple entra al Salón de la Fama Creativo",
      cuerpo: "The One Club for Creativity nombró a Apple la primera marca en su Creative Hall of Fame, un reconocimiento que antes solo recibían personas. En la misma gala, en The Gathering Festival de Banff (Canadá), entraron al Brand Hall of Fame The Home Depot, ESPN, Disney, Budweiser y Chick-fil-A. Las escoge un comité de mercadólogos de un listado de 100 nominados, con 10 criterios que miden éxito sostenido por años. Con ellas, la lista llega a 15 marcas, junto a Coca-Cola, la NFL, Levi’s, McDonald’s, MTV, Gatorade, American Express, Fender y Dove.",
      cifras: [
        { v: "1.ª", t: "marca en el Creative Hall of Fame de The One Club: Apple" },
        { v: "15", t: "marcas en el Brand Hall of Fame tras la clase 2026" },
        { v: "10", t: "criterios de éxito sostenido pa’ evaluar a los nominados" },
        { v: "31 dic", t: "cierre de nominaciones pa’ la clase 2027" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "El premio no es por un anuncio sino por décadas de consistencia. Es un argumento pa’ cuando el cliente quiere cambiar la idea de marca cada año.",
      hacer: "En la próxima reunión con un cliente grande, lleva una lámina con los activos que llevan más de cinco años funcionando (frase, color, jingle, personaje) y propón uno pa’ cuidar en la campaña de 2027.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/home-depot-espn-among-2026-brand-hall-of-fame-inductees/" }]
    },
    {
      id: "paknsave", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Retail", "McCann"],
      titular: "PAK’nSAVE le pelea al delivery con «Makeaways»: «tenemos comida en casa», hecho campaña",
      corto: "PAK’nSAVE le pelea al delivery",
      cuerpo: "La cadena de supermercados neozelandesa PAK’nSAVE, de Foodstuffs, con McCann New Zealand, fue la favorita de tres jurados en el Creative Circle de noviembre de Campaign Brief NZ por «Makeaways». La idea le cae al pedido de comida rápida y lo convierte en una opción más barata del súper. Los jurados destacaron lo simple de la ejecución, la ubicación de las piezas y que remezcla una frase que todo el mundo conoce: «tenemos comida en casa». McCann NZ quedó primera en la tabla de agencias, con 19 puntos.",
      cifras: [{ v: "19", t: "puntos de McCann NZ, primera en la tabla de agencias" }],
      fuentes: [{ nombre: "Campaign Brief NZ", url: "https://campaignbrief.co.nz/2026/11/15/campaign-brief-creative-circle-whats-hot-in-november-2026/" }]
    },

    {
      id: "compraenvivo", dep: "planning", peso: "principal",
      etiquetas: ["Live shopping", "TikTok Shop", "Navidad"],
      titular: "La compra en vivo se acerca a US$20,000 millones en EE. UU., y las marcas la ponen en el centro de la Navidad",
      corto: "La compra en vivo se mete en la Navidad",
      cuerpo: "Según datos de eMarketer citados por Glossy y Digiday, las ventas por transmisión en vivo en EE. UU. van a llegar a casi US$20,000 millones este año, y el gasto anual por comprador sube 23 %, a US$339.27. Tarte, Crocs, Beachwaver y Gap planean usarla esta Navidad, sobre todo en TikTok, y Tarte y Crocs lanzarán productos exclusivos pa’ esas transmisiones. TikTok duplicó sus ventas en vivo en el primer semestre, y el uso de #holidayshopping subió 263 % en octubre. En el Reino Unido, el primer informe de compra en vivo de TikTok reporta ventas 55 % arriba y que más del 30 % de quienes ven luego compran en tienda física.",
      cifras: [
        { v: "~US$20,000M", t: "ventas por transmisión en vivo en EE. UU. este año, según eMarketer" },
        { v: "US$339.27", t: "gasto anual promedio por comprador, 23 % más" },
        { v: "+263 %", t: "uso de #holidayshopping en TikTok en octubre" },
        { v: "+55 %", t: "ventas en vivo de TikTok en el Reino Unido, año contra año" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "La transmisión en vivo dejó de ser un experimento y ya tiene temporada: de Black Friday a mediados de diciembre. Y no solo vende en línea, también mueve gente a la tienda.",
      hacer: "Esta semana, arma con un cliente de retail un calendario de tres transmisiones en vivo entre Black Friday y el 20 de diciembre, cada una con un producto o precio que solo se consiga ahí.",
      fuentes: [
        { nombre: "Digiday", url: "https://digiday.com/media/how-brands-are-banking-on-live-shopping-this-holiday-season/" },
        { nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-uk-publishes-live-shopping-report/874711/" }
      ]
    },
    {
      id: "linkedincitas", dep: "planning", peso: "secundaria",
      etiquetas: ["LinkedIn", "IA", "Búsqueda"],
      titular: "LinkedIn: si quieres salir en las respuestas de los chatbots, pon a hablar a tu gente, no solo a la página de la marca",
      corto: "LinkedIn: las voces mandan en las citas de IA",
      cuerpo: "Robert Yanik, líder de mercadeo de búsqueda con IA de LinkedIn Ads, dijo que ChatGPT, Gemini y Copilot premian la credibilidad. Según un estudio de Meltwater que citó, las cuentas con más de 10,000 seguidores y las páginas de empresa suman el 65 % de las citas de LinkedIn en respuestas de chatbots, y los artículos de directivos se citan más por artículo. Su receta: escoger tres o cuatro temas, poner a empleados creíbles a publicar sobre ellos y sumar uno o dos creadores cuya audiencia coincida con los compradores.",
      cifras: [
        { v: "65 %", t: "de las citas de LinkedIn en chatbots vienen de cuentas con 10,000+ seguidores y páginas de empresa" },
        { v: "35 %", t: "vienen de usuarios con menos de 10,000 seguidores" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es la propia LinkedIn vendiendo su plataforma, así que hay que tomarlo con calma. Pero da una pista: pa’ salir en la IA, cuenta más quién firma que cuánto se publica.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/linkedin-says-influential-voices-are-critical-for-ai-chatbot-citations/874712/" }]
    },

    {
      id: "characterai", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "IA", "Quiebra"],
      titular: "Los chats de los usuarios de Character.ai salen a la venta por US$10 millones, y el comprador nació el día antes",
      corto: "Los chats de Character.ai salen a la venta",
      cuerpo: "Character Technologies, la empresa en quiebra detrás de Character.ai, escogió a Smirks and Pangs Acquisition LLC como oferta principal por todo lo que Disney no compró en su licencia de US$20 millones: US$10 millones en efectivo. El paquete incluye el sitio y las apps, los modelos de IA, la marca, la información de las cuentas y el contenido de los chats de los usuarios, y los datos de publicidad y analítica. Según el aviso del 14 de noviembre ante la corte de quiebras de Delaware, las objeciones vencen el 18 de noviembre y la subasta es el 1 de diciembre. La compradora se registró en Delaware el 13 de noviembre y no se sabe quién es su dueño.",
      cifras: [
        { v: "US$10M", t: "oferta en efectivo de Smirks and Pangs por los activos fuera de la licencia de Disney" },
        { v: "18 nov", t: "fecha límite pa’ objeciones" },
        { v: "1 dic", t: "día de la subasta" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Las conversaciones con un chatbot son un activo que se puede vender cuando la empresa quiebra.",
        "Los fiscales estatales ya habían intentado proteger esa parte del negocio, porque guarda consentimientos, exclusiones de publicidad y verificaciones de edad."
      ],
      hacer: "Esta semana, revisa los contratos de las herramientas de IA que usa la agencia con datos de clientes y confirma qué dicen sobre los datos si la empresa se vende o quiebra. Si no dicen nada, pídelo por escrito.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/character-ai-users-chats-face-a-10m-sale-to-smirks-and-pangs/" }]
    },
    {
      id: "aimaxparametro", dep: "data", peso: "secundaria",
      etiquetas: ["Google Ads", "AI Max", "Medición"],
      hilo: "Contar distinto",
      titular: "Google Ads estrena un parámetro pa’ saber qué clic «exacto» en realidad fue de AI Max",
      corto: "Google ya dice qué clic fue de AI Max",
      cuerpo: "Google Ads agregó el parámetro ValueTrack {search_term_matchtype}, que anota en la URL de cada clic el tipo de concordancia de la búsqueda: «e» exacta, «p» de frase, «b» amplia o «a» pa’ las expansiones de AI Max y las coincidencias sin palabra clave. Lo reportó PPC News Feed el 11 de noviembre. El parámetro viejo, {matchtype}, marca las expansiones de AI Max con el tipo de la palabra clave, así que un clic marcado «exacto» podía venir de AI Max.",
      cifras: [{ v: "4", t: "valores del parámetro nuevo: e, p, b y a (AI Max)" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Con los dos parámetros en la plantilla de seguimiento, la analítica y el CRM pueden separar clic por clic lo que vino de tu palabra clave y lo que trajo la IA de Google.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/googles-new-parameter-shows-when-an-exact-click-was-really-ai-max/" }]
    },

    {
      id: "linkedincomentarios", dep: "content", peso: "principal",
      etiquetas: ["LinkedIn", "IA", "Algoritmo"],
      titular: "LinkedIn esconde los comentarios hechos con IA: «¡Excelente aporte!» ya no te va a dar alcance",
      corto: "LinkedIn esconde los comentarios hechos con IA",
      cuerpo: "Hari Srinivasan, director de producto de LinkedIn, explicó que la plataforma actualizó sus clasificadores pa’ medir la relevancia de los comentarios y marcar como menos valiosos los que parecen hechos con IA. Con el orden «más relevantes», que viene por defecto, se van a ver menos. También ajustó las notificaciones pa’ que el creador solo reciba avisos de comentarios de calidad. En pruebas, las vistas de esos comentarios bajaron más de 20 %, y el cambio llegará pronto a todos. En agosto, LinkedIn abrió la opción de reportar contenido de IA de baja calidad y más de un millón de personas la usaron en tres semanas.",
      cifras: [
        { v: "−20 %+", t: "en vistas de comentarios de IA de baja calidad durante las pruebas" },
        { v: "1 millón+", t: "de personas usaron el reporte de contenido de IA en sus primeras tres semanas" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Comentar con frases armadas por IA en perfiles ajenos ya no da visibilidad, y puede restar. Al revés, el comentario con una idea propia gana espacio.",
      hacer: "Esta semana, revisa cómo comentan los voceros de tus clientes en LinkedIn y arma una guía corta: tres ejemplos de comentarios con dato o experiencia propia y la regla de no pegar textos de IA sin editar.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/linkedin-cracks-down-on-ai-generated-comments/874707/" }]
    },
    {
      id: "tiktokpremier", dep: "content", peso: "secundaria",
      etiquetas: ["TikTok", "Creadores", "Socios"],
      titular: "TikTok estrena el nivel Premier pa’ las agencias y herramientas de creadores, y la puerta es TikTok One",
      corto: "TikTok estrena el nivel Premier pa’ socios",
      cuerpo: "Desde el 10 de noviembre, el Marketing Partners Program de TikTok tiene dos niveles pa’ los socios de mercadeo con creadores: Badged Creative Partner y el nuevo Premier Creative Partner, que TikTok llama su mayor reconocimiento. La especialidad ahora se divide en cuatro tipos: agencias de mercadeo con creadores, agencias de talento, plataformas SaaS y socios de contenido UGC. Pa’ calificar hay que pasar por TikTok One, y TikTok no publicó los umbrales entre un nivel y otro.",
      cifras: [
        { v: "2", t: "niveles: Badged y Premier Creative Partner" },
        { v: "4", t: "tipos de socio en la especialidad de mercadeo con creadores" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/tiktok-ties-its-new-premier-creator-partner-badge-to-tiktok-one/" }]
    },

    {
      id: "fundas", dep: "rd", peso: "principal", para: ["planning", "creatividad", "medios"],
      etiquetas: ["Retail", "Ley 98-25", "Consumo"], fecha: "16 nov 2026",
      titular: "Desde el 15 de diciembre la funda del súper se cobra, y el comercio todavía no sabe ni cuánto ni cómo",
      corto: "La funda del súper se cobra desde el 15 de diciembre",
      cuerpo: "Santo Domingo.— Por la Ley 98-25 de residuos sólidos, desde el martes 15 de diciembre, en plena compra navideña, los clientes de supermercados y otros comercios tendrán que pagar las fundas. Pero las reglas siguen pendientes del Ministerio de Medio Ambiente: qué fundas se cobran, a qué precio, si pagan ITBIS y cómo se facturan. En la mesa de trabajo se han barajado 50 centavos, un peso y dos pesos por funda, sin decisión. La Federación Dominicana de Comerciantes pidió una prórroga más allá de marzo de 2027 y empezar por etapas, primero con las grandes superficies. Supermercados Bravo pidió reglas iguales pa’ todos, pa’ que el cliente no crea que es un invento de una cadena.",
      cifras: [
        { v: "15 dic", t: "día en que las fundas dejan de ser gratis" },
        { v: "RD$0.50–2", t: "precios por funda que se han barajado, sin decisión" },
        { v: "62,000", t: "colmados que tendrán que aplicar la medida" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Cada súper, farmacia y tienda va a tener que explicarle al cliente por qué ahora paga la funda, justo en diciembre. El que lo comunique bien gana; el que no, se lleva la queja.",
      hacer: "Esta semana, lleva a tus clientes de retail y consumo masivo una propuesta de comunicación pa’ la funda: cartel en caja, mensaje en redes y, si aplica, una funda reutilizable con la marca como regalo de Navidad.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/11/16/comercio-reclama-reglas-claras-para-cambio-de-fundas-plasticas/3721517" }]
    },
    {
      id: "indotel", dep: "rd", peso: "secundaria", para: ["data", "planning"],
      etiquetas: ["Telecom", "Indotel", "Seguridad"], fecha: "16 nov 2026",
      titular: "El Indotel frena equipos de proveedores de alto riesgo en el corazón de las redes",
      corto: "El Indotel frena equipos de alto riesgo",
      cuerpo: "La Resolución 100-2026 del Indotel, aprobada el 29 de octubre y publicada el 13 de noviembre, prohíbe de forma provisional comprar, instalar o activar componentes nuevos de proveedores de alto riesgo en el núcleo de las redes (autenticación, control, enrutamiento e interconexión), salvo autorización del Consejo Directivo. Se basa en una evaluación clasificada de la Dirección Nacional de Inteligencia, pone cinco criterios pa’ calificar a los proveedores y no nombra a ninguna empresa. No obliga a retirar equipos ya instalados. Las operadoras deberán avisar con 90 días cualquier cambio sustancial, y hay 60 días pa’ enviar observaciones. Llega cuando Viettel se prepara pa’ entrar al mercado.",
      cifras: [
        { v: "100-2026", t: "número de la resolución del Indotel" },
        { v: "90 días", t: "de aviso previo pa’ cambios en infraestructura crítica" },
        { v: "60 días", t: "pa’ que los interesados envíen observaciones" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/actualidad/nacional/2026/11/16/republica-dominicana-impone-restricciones-a-telecomunicaciones/3721595" }]
    },
    {
      id: "ritmocosta", dep: "rd", peso: "secundaria", para: ["medios", "planning", "creatividad"],
      etiquetas: ["Mitur", "Música", "Turismo interno"], fecha: "15 nov 2026",
      titular: "Vuelve Ritmo de la Costa: conciertos gratis de merengue y bachata del 28 de noviembre al 26 de diciembre",
      corto: "Vuelve Ritmo de la Costa con conciertos gratis",
      cuerpo: "El Ministerio de Turismo anunció la tercera edición de Ritmo de la Costa, con conciertos y actividades culturales gratis los viernes, sábados y domingos en malecones y parques de Santo Domingo Este, Haina, La Romana, San Pedro de Macorís, Samaná y Cabrera. Arranca el 28 y 29 de noviembre en el Boulevard de la Salud, en Haina, y el malecón de Caleta, en La Romana, y en diciembre sigue del 4 al 26. Busca promover el merengue y la bachata y mover el turismo interno.",
      cifras: [
        { v: "3.ª", t: "edición de Ritmo de la Costa" },
        { v: "6", t: "localidades con conciertos" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/15/ritmo-de-la-costa-regresa-con-conciertos-gratuitos/3721146" }]
    },
    {
      id: "regalia", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Consumo", "Navidad", "Regalía"], fecha: "15 nov 2026",
      titular: "La regalía tiene que estar en el bolsillo a más tardar el 20 de diciembre",
      corto: "La regalía, a más tardar el 20 de diciembre",
      cuerpo: "Revista Mercado recordó que, por el artículo 220 del Código de Trabajo, el empleador tiene hasta el 20 de diciembre pa’ pagar la regalía pascual. Es la doceava parte del salario ordinario del año, no paga impuesto sobre la renta y lo obligatorio no puede pasar de cinco salarios mínimos. Quien no trabajó el año completo cobra la parte proporcional.",
      cifras: [
        { v: "20 dic", t: "fecha límite pa’ pagar la regalía pascual" },
        { v: "1/12", t: "del salario ordinario del año" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Entre el 15 de diciembre de la funda y el 20 de la regalía cae el pico de dinero en la calle. Pa’ las marcas de consumo, esa semana es la que hay que tener cubierta.",
      fuentes: [{ nombre: "Revista Mercado", url: "https://revistamercado.do/market-brief/finanzas/regalia-pascual-2026-rd-cuando-se-paga-como-calcular/" }]
    },
    {
      id: "kapo", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Conciertos", "Afrobeat"], fecha: "14 nov 2026",
      titular: "Kapo llenó de afrobeat el Óvalo de la Feria Ganadera en su primer concierto en RD",
      corto: "Kapo pone a bailar el Óvalo",
      cuerpo: "Santo Domingo.— El colombiano Kapo dio el sábado 14 de noviembre su primer concierto en el país, en el Óvalo de la Feria Ganadera, con producción de Pav Events. Abrió con «Imagínate», su tema con Danny Ocean que llegó al número 1 de Latin Pop Airplay de Billboard, y repasó éxitos como «Ohnana» y «Uwaie». Contó que una vez se coló en unos premios en Punta Cana cuando nadie lo conocía.",
      tocaTitulo: "¿Y eso qué?",
      toca: "El afrobeat tiene público propio en el patio. Pa’ content es un sonido pa’ tener en el radar de los videos cortos de temporada.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/conciertos/20261115/kapo-conquisto-amantes-afrobeat-primer-concierto-ovalo_930144.html" }]
    },
    {
      id: "wilfridoaa", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Música", "Alianzas", "Latin Grammy"], fecha: "15 nov 2026",
      titular: "Wilfrido Vargas vuela con American: su foto está en el salón VIP del JFK",
      corto: "Wilfrido Vargas en el salón VIP del JFK",
      cuerpo: "La Academia Latina de la Grabación y American Airlines tienen una iniciativa que exhibe fotos oficiales de ganadores del Latin Grammy en los salones VIP de la aerolínea en el mundo. La de Wilfrido Vargas estuvo en el salón de American en el aeropuerto JFK de Nueva York del 6 al 16 de noviembre.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Una alianza sencilla entre una aerolínea y la música: el artista gana vitrina y la marca se pega a la cultura de sus viajeros. Es una idea fácil de adaptar con talento dominicano.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/15/wilfrido-vargas-merengue-en-iniciativa-de-american-airlines/3721290" }]
    }
  ],

  pizarra: ["amazonimpresiones", "halloffame", "compraenvivo", "characterai", "linkedincomentarios", "fundas"],

  frases: [
    { dep: "medios", texto: "Amazon va a contar 63 % menos impresiones desde enero: el resultado no cambia, pero el reporte sí, y hay que explicarlo antes.", uso: "para conversaciones de medición y reportes" },
    { dep: "data", texto: "Los chats de Character.ai están en una subasta de quiebra por US$10 millones: lo que le cuentas a un chatbot también se vende.", uso: "para conversaciones de privacidad y proveedores de IA" },
    { dep: "content", texto: "LinkedIn ya esconde los comentarios hechos con IA: el «¡Excelente post!» automático dejó de dar alcance.", uso: "para conversaciones de marca personal y voceros" },
    { dep: "rd", texto: "Desde el 15 de diciembre la funda se cobra en el súper, y todavía nadie sabe cuánto: la marca que lo explique primero se lleva la simpatía.", uso: "para conversaciones con clientes de retail" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Amazon cuenta 63 % menos impresiones" },
      { id: "creatividad", texto: "Apple en el Salón de la Fama Creativo" },
      { id: "planning", texto: "La compra en vivo en Navidad" },
      { id: "data", texto: "Los chats de Character.ai a la venta" },
      { id: "content", texto: "LinkedIn esconde los comentarios de IA" },
      { id: "rd", texto: "Zoom a RD: la funda se cobra" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "amazonimpresiones", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "compraenvivo", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "De Black Friday a mediados de diciembre es la temporada de la compra en vivo. En octubre, #holidayshopping subió 263 % en TikTok: pon fecha a tus transmisiones ya."
    },
    data: {
      tipo: "secreto", nota: "characterai", titulo: "Destapa el expediente",
      texto: "Smirks and Pangs ofreció [[US$10 millones]] por los activos de Character.ai, chats de los usuarios incluidos, y las objeciones vencen el [[18 de noviembre]]."
    },
    rd: {
      tipo: "pregunta", nota: "fundas", titulo: "La pregunta del patio",
      p: "¿Desde qué día las fundas del súper dejan de ser gratis en RD?",
      opciones: ["1 de diciembre", "15 de diciembre", "1 de enero"], correcta: 1,
      explicacion: "Por la Ley 98-25 se cobran desde el martes 15 de diciembre, aunque Medio Ambiente todavía no ha fijado precios ni reglas."
    }
  }
};
