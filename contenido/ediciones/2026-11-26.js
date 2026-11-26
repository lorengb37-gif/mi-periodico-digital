/*
  El Pulso Publicitario · edición N.º 330 · 26 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 330,
  fechaISO: "2026-11-26",
  fecha: "Jueves 26 de noviembre 2026",
  fechaCorta: "26 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Contar personas, no impresiones: el que sabe a cuánta gente le llegó de verdad le explica mejor al cliente en qué se fue el dinero.",
    largo: "Hoy ChatGPT empieza a reportar alcance y frecuencia, Amazon deja ajustar la puja según dónde y cuándo sale el video, y Vermont prohíbe armarle el feed a un menor con sus datos. Del otro lado, la gente investiga con IA el doble que el año pasado y Hershey se fue al cine con una película de verdad, no con un anuncio de 90 minutos. En el patio, la bachata cierra gira en Santiago, la economía crece 5.4 % y las yipetas se comen el mercado. El consejo: antes del viernes, revisa en cada plan si estás midiendo gente o solo impresiones, y corrige donde haga falta.",
    corto: "Antes del viernes, revisa en cada plan si mides personas o solo impresiones, y pide alcance y frecuencia donde ya existen.",
    porDep: {
      medios: "Si ChatGPT ya da alcance y frecuencia, pídele al cliente que lo compare con el resto del plan antes de subir la inversión.",
      creatividad: "Hershey dejó que la película tuviera conflicto. Si una idea de marca no tiene tensión, no es historia: es anuncio.",
      planning: "La IA arma la lista de opciones semanas antes de la compra: el plan de temporada tiene que arrancar mucho antes del descuento.",
      data: "Vermont pone fecha: 1 de enero de 2027. Si un cliente tiene audiencia menor de edad en EE. UU., revisa ya cómo se le arma el feed.",
      content: "Edits ya tiene versión pa’ iPad y un revisor de derechos de autor: úsalo antes de publicar, no después del reclamo.",
      rd: "Romeo y Royce cierran gira en Santiago el 12 de febrero: el que tenga una marca con bachata en el ADN, que se mueva desde ya."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "ChatGPT Ads estrena nueve métricas de alcance y frecuencia · Amazon deja ajustar la puja según dónde y cuándo sale el video · Dick’s convierte el deporte juvenil en negocio de anuncios" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Hershey llega al cine con una película sobre su fundador, no con un anuncio largo · La tormenta mueve al sábado el desfile 100 de Macy’s y las carrozas de las marcas" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Los compradores que investigan con IA pasan de 6 % a 13 % · 16 de 79 grandes tiendas de EE. UU. ya invitan a los agentes de IA y Amazon bloquea 20 de 24" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Vermont prohíbe los feeds hechos con datos de menores desde el 1 de enero de 2027 · SHEIN pagará US$100 millones a la FTC por entregas, servicio y reseñas" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Edits llega al iPad con revisor de derechos de autor y un asistente de IA que acepta fotos y videos · X gana en Londres contra dos usuarios que inflaban interacciones pa’ cobrar" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Romeo Santos y Prince Royce cierran su gira en Santiago · La economía crece 5.4 % en octubre · Las yipetas suben 23.68 % y los carros caen · ACD Media apuesta a la TV abierta · Indotel cuenta lo que cobra por el 5G · Lo que más leyó RD en 2026" }
  },

  notas: [
    {
      id: "chatgptalcance", dep: "medios", peso: "principal",
      etiquetas: ["ChatGPT Ads", "Medición", "Alcance"],
      hilo: "ChatGPT Ads",
      titular: "ChatGPT Ads empieza a contar personas: llegan el alcance, la frecuencia y siete métricas más",
      corto: "ChatGPT Ads ya reporta alcance y frecuencia",
      cuerpo: "OpenAI le mandó el 25 de noviembre un correo a sus anunciantes con nueve métricas nuevas en el Ads Manager y en la API de ChatGPT Ads: Reach, Frequency, Click Reach, Click Frequency, Total Reach, Total Frequency, Unique CTR, Unique CPC y costo por cada 1,000 personas alcanzadas. Reach estima cuántas personas únicas vieron el anuncio al menos una vez, y Frequency divide las impresiones entre ese alcance. Las otras siete vienen sin definición, y OpenAI no ha explicado cómo calcula a las personas únicas. En el mismo paquete, los Business Agents patrocinados salen a mercados fuera de EE. UU. (sin decir cuáles), los anuncios de una imagen traen «Learn more» de fábrica y los anuncios rechazados explican mejor qué política rompieron.",
      cifras: [
        { v: "9", t: "métricas nuevas en ChatGPT Ads, todas basadas en personas y no en impresiones" },
        { v: "25 nov", t: "fecha del correo «ChatGPT Ads Product Update» a los anunciantes" },
        { v: "89", t: "países donde ya corren los anuncios de ChatGPT, según PPC Land" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Hasta ahora ChatGPT se compraba a ciegas en frecuencia: con alcance, el canal por fin se puede poner al lado de la TV, la CTV y lo social en el mismo idioma. Pero si no se sabe cómo se cuenta a la gente, el número hay que cogerlo con pinzas.",
      hacer: "Esta semana, saca alcance y frecuencia de cualquier campaña en ChatGPT Ads, ponlos en la misma tabla que el resto del plan y pregúntale a tu contacto de OpenAI cómo calcula a las personas únicas.",
      fuentes: [
        { nombre: "PPC Land", url: "https://ppc.land/chatgpt-ad-reports-add-9-metrics-built-on-how-many-people-see-the-ads/" },
        { nombre: "Search Engine Roundtable", url: "https://www.seroundtable.com/chatgpt-ads-updates-42623.html" }
      ]
    },
    {
      id: "amazonvideopuja", dep: "medios", peso: "secundaria",
      etiquetas: ["Amazon Ads", "Video", "Pujas"],
      titular: "Amazon deja subir o bajar la puja según dónde sale el video y si va antes, en medio o después",
      corto: "Amazon: puja según el lugar del video",
      cuerpo: "Amazon le agregó dos dimensiones de video a la API de ajustes de puja de su DSP: videoPlacement (dentro del stream, al lado de otro contenido, intersticial o solo) y rollPosition (pre-roll, mid-roll o post-roll). Así, el anunciante o su socio tecnológico puede pagar más por un pre-roll dentro del stream y menos por un video que sale suelto. Aplica solo a grupos de anuncios de video online, no a streaming TV, y por ahora solo por la API.",
      cifras: [
        { v: "4", t: "tipos de ubicación de video que ahora se pueden pujar por separado" },
        { v: "3", t: "posiciones nombradas: pre-roll, mid-roll y post-roll" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "No todo video vale lo mismo: con esto se le puede poner precio distinto al pre-roll que se ve completo y al video que sale de relleno.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-lets-advertisers-change-bids-by-where-and-when-a-video-ad-plays/" }]
    },
    {
      id: "dicks", dep: "medios", peso: "secundaria",
      etiquetas: ["Retail media", "Deportes", "Dick’s"],
      titular: "Dick’s Sporting Goods convierte el deporte juvenil en negocio de anuncios, y Chobani ya compró",
      corto: "Dick’s vende anuncios en el deporte juvenil",
      cuerpo: "Dick’s Sporting Goods reportó una ganancia neta de US$161 millones en el tercer trimestre, más del doble de los US$75 millones de hace un año, y sus ejecutivos le atribuyen buena parte a Dick’s Media Network y a GameChanger, su app pa’ transmitir y seguir deportes juveniles. La red, de cuatro años, vende anuncios en tienda, en su sitio, fuera del sitio, en redes y en streaming. Ya no son solo marcas deportivas: Chobani compró espacio en GameChanger durante el Mundial 2026 pa’ llegarle a padres y entrenadores.",
      cifras: [
        { v: "US$161M", t: "ganancia neta de Dick’s en el tercer trimestre" },
        { v: "US$75M", t: "la del mismo trimestre del año pasado" }
      ],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/dicks-sporting-goods-is-turning-youth-sports-into-a-premium-ad-business/" }]
    },

    {
      id: "hershey", dep: "creatividad", peso: "principal",
      etiquetas: ["Branded content", "Cine", "Hershey"],
      titular: "Hershey llega al cine con la vida de su fundador, y con conflicto: «no es un comercial de 90 minutos»",
      corto: "Hershey llega al cine, y no como anuncio",
      cuerpo: "«Hershey», la película sobre Milton S. Hershey, el fundador de la chocolatera, se estrenó el miércoles 25 en cines de EE. UU. Los cineastas trabajaron con la empresa y tuvieron acceso a sus archivos e historiadores, y colaboraron en temas de propiedad intelectual, marca y creatividad. Suzanne Jones, vicepresidenta de The Hershey Experience, dijo que querían contar una historia real, y que sin conflicto no hay historia. Según el CEO Kirk Tanner, la película y la celebración de los 250 años de EE. UU. aportarían casi un punto porcentual a las ventas de 2026, con exhibidores en tienda conectados al estreno. La produjo Dandelion Media.",
      cifras: [
        { v: "~1 punto", t: "porcentual de ventas en 2026 que Hershey espera de la película y los 250 años de EE. UU." },
        { v: "25 nov", t: "estreno en cines" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Es branded content del grande: la marca abrió su archivo, aceptó que la historia tuviera tensión y conectó la película con el punto de venta. No vive del spot, vive de la historia del fundador.",
      hacer: "Esta semana, escoge un cliente con fundador o historia de origen fuerte y arma en una página tres capítulos con conflicto real (un tropiezo, una decisión difícil, un riesgo) que podrían volverse una serie corta.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/how-hershey-strategized-its-brand-film-to-be-more-than-a-90-minute-ad/875365/" }]
    },
    {
      id: "macys", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Activaciones", "Macy’s", "Clima"],
      titular: "La tormenta le cambia el día al desfile 100 de Macy’s, y las carrozas de las marcas esperan al sábado",
      corto: "Macy’s mueve al sábado su desfile 100",
      cuerpo: "Macy’s aplazó pa’l sábado a las 8:30 a. m. su desfile de Acción de Gracias, que este año cumple 100 años, por una tormenta costera con lluvias y vientos fuertes en Nueva York. Según la prensa, la única vez que se había aplazado fue durante la Segunda Guerra Mundial, de 1942 a 1944. Entre las carrozas nuevas están las de DoorDash, Levi’s (un balloonicle), HBO, Planters con Mr. Peanut, Purina Dog Chow y Geico.",
      cifras: [
        { v: "100", t: "años del desfile de Macy’s" },
        { v: "Sábado 8:30 a. m.", t: "nueva hora del desfile, hora de Nueva York" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Cuando la activación depende de un evento en vivo, el plan B tiene que estar escrito: piezas, pauta y mensajes listos pa’ otro día.",
      fuentes: [
        { nombre: "N Digital (EFE)", url: "https://n.com.do/2026/11/25/macys-aplaza-hasta-el-sabado-su-tradicional-desfile-de-accion-de-gracias-por-tormenta-en-nueva-york/" },
        { nombre: "ABC7 New York", url: "https://abc7ny.com/post/first-look-new-macys-thanksgiving-day-parade-floats/20048290/" }
      ]
    },

    {
      id: "iainvestiga", dep: "planning", peso: "principal",
      etiquetas: ["Consumidor", "IA", "Black Friday"],
      titular: "Los compradores que investigan con IA se duplican: de 6 % a 13 %, y la lista se arma semanas antes",
      corto: "Investigan con IA: de 6 % a 13 %",
      cuerpo: "Según una encuesta de Brainlabs a 2,800 compradores de EE. UU. y Reino Unido en 2025 y 2026, el porcentaje que usa IA pa’ investigar productos pasó de 6 % a 13 %. Los buscadores siguen al frente, mientras Amazon y YouTube bajaron como fuente. Un estudio de Jellyfish sobre preguntas de Black Friday en Reino Unido encontró que blogs, noticias y sitios comparadores pesan más que la web de la marca en lo que la IA dice de un producto. Y PMG vio que, en las respuestas de IA que recomendaban a un cliente, la web de la marca aportó solo 24 de 203 enlaces.",
      cifras: [
        { v: "6 % → 13 %", t: "compradores que usan IA pa’ investigar productos (Brainlabs)" },
        { v: "2,800", t: "compradores encuestados en EE. UU. y Reino Unido" },
        { v: "24 de 203", t: "enlaces citados por la IA que venían de la web de la marca (PMG)" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "La decisión empieza antes del descuento: la IA arma la lista corta con lo que dicen terceros. Si el plan de temporada arranca en la semana del Black Friday, ya llegó tarde.",
      hacer: "Antes del viernes, pregúntale a ChatGPT y a Gemini por la categoría de un cliente, apunta qué marcas y qué fuentes salen, y lleva esa lista a la próxima reunión de planificación de 2027.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/in-graphic-detail-how-shoppers-are-adopting-ai-for-product-research-ahead-of-black-friday/" }]
    },
    {
      id: "agentestiendas", dep: "planning", peso: "secundaria",
      etiquetas: ["Agentes de IA", "Retail", "Amazon"],
      titular: "16 de 79 grandes tiendas de EE. UU. ya invitan a los agentes de IA; Amazon bloquea 20 de 24",
      corto: "Amazon bloquea 20 de 24 agentes de IA",
      cuerpo: "Thrad, una empresa que vende anuncios dentro de conversaciones con chatbots, revisó los archivos robots.txt de 79 grandes minoristas de EE. UU. de 2024 a 2026. En 2026, 16 (20 %) invitan por nombre al menos a un agente de IA, cuando en 2024 era uno solo; Amazon bloquea 20 de los 24 agentes estudiados, más que nadie, y Ulta Beauty invita a 11. Walmart, Costco, Target y Home Depot están abiertos por defecto. El estudio mide permisos escritos, no compras, y Thrad tiene interés en el tema.",
      cifras: [
        { v: "16 de 79", t: "minoristas que invitan al menos a un agente de IA en 2026" },
        { v: "20 de 24", t: "agentes de IA que Amazon bloquea por nombre" },
        { v: "1 → 63", t: "invitaciones a agentes, de 2024 a 2026" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-blocks-20-of-24-ai-agents-by-name-the-most-of-79-top-us-retailers/" }]
    },

    {
      id: "vermont", dep: "data", peso: "principal",
      etiquetas: ["Menores", "Privacidad", "Vermont"],
      titular: "Vermont prohíbe armarle el feed a un menor con sus datos desde el 1 de enero de 2027",
      corto: "Vermont: feeds sin datos de menores en 2027",
      cuerpo: "Las reglas finales del Age-Appropriate Design Code de Vermont (Ley 63 de 2025) prohíben ordenar el contenido de un menor con sus datos personales o de comportamiento, salvo que el menor lo pida, escoja ajustes de privacidad o haga una búsqueda. También prohíben prácticas de diseño que lleven al uso compulsivo; la reproducción automática, el scroll infinito, las alertas y las rachas se juzgan caso a caso. Los datos de verificación de edad se borran de inmediato y no se recogen datos del menor que no hagan falta pa’l servicio. Entra en vigor el 1 de enero de 2027 y lo hace cumplir el fiscal general, sin demandas privadas.",
      cifras: [
        { v: "1 ene 2027", t: "entrada en vigor de la ley y de sus dos reglas" },
        { v: "2 %", t: "umbral de audiencia menor de edad en la prueba de la ley pa’ saber a quién aplica" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Los estados de EE. UU. van por el algoritmo, no solo por los datos: el feed personalizado de menores se vuelve la excepción.",
        "Menos señales de comportamiento en audiencias jóvenes significa segmentación más contextual pa’ las marcas que les hablan."
      ],
      hacer: "Esta semana, identifica qué clientes tienen audiencia menor de edad en EE. UU. y revisa con su equipo digital si sus apps o sitios usan datos de comportamiento pa’ recomendar contenido.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/vermont-bans-feeds-built-on-kids-data-from-january-1-2027/" }]
    },
    {
      id: "shein", dep: "data", peso: "secundaria",
      etiquetas: ["FTC", "Reseñas", "SHEIN"],
      titular: "SHEIN pagará US$100 millones a la FTC por entregas tardías, servicio flojo y reseñas escondidas",
      corto: "SHEIN paga US$100 millones a la FTC",
      cuerpo: "La FTC anunció el 24 de noviembre un acuerdo en el que SHEIN pagará US$100 millones en reembolsos a consumidores. La acusa de no avisar retrasos en entregas, de tener cinco agentes telefónicos en septiembre de 2025 cuando recibió más de 1.2 millones de consultas en EE. UU., de acelerar las reseñas positivas y frenar o borrar las críticas, y de no sostener sus afirmaciones sobre auditorías a proveedores y algodón cultivado en EE. UU. SHEIN no admite ni niega; la orden necesita la firma de un juez y trae monitoreo por 15 años.",
      cifras: [
        { v: "US$100M", t: "en reembolsos a consumidores" },
        { v: "15 años", t: "de monitoreo de la FTC" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/fast-fashion-slow-parcels-shein-to-pay-the-ftc-100m/" }]
    },

    {
      id: "editsipad", dep: "content", peso: "principal",
      etiquetas: ["Meta", "Edits", "IA"],
      titular: "Edits llega al iPad con revisor de derechos de autor y un asistente de IA que mira tus fotos y videos",
      corto: "Edits llega al iPad con revisor de copyright",
      cuerpo: "Meta lanzó la versión de Edits pa’ iPad, con una pantalla de edición más grande, semanas después de estrenar la de macOS. También sumó recortar al importar, filtros nuevos y 1,600 stickers, y prueba importar archivos LUT pa’ mantener el color. El asistente de IA de Edits ahora acepta imágenes y videos en el chat y sugiere cómo armar un video con ellos. En iOS llega un revisor de derechos de autor que analiza el proyecto antes de subirlo; según el investigador de apps Radu Oncescu, trae cinco revisiones por día.",
      cifras: [
        { v: "1,600", t: "stickers nuevos en Edits" },
        { v: "5", t: "revisiones de derechos de autor por día, según Radu Oncescu" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Un reclamo de música o imagen puede tumbarle el alcance a una pieza de temporada. Revisar antes de publicar ahorra el susto, y el asistente con fotos acelera el primer corte.",
      hacer: "Esta semana, pasa por el revisor de derechos de autor de Edits las tres piezas navideñas que tengas listas y prueba el asistente con las fotos de un cliente pa’ sacar un primer corte.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-launches-ipad-version-of-edits/875566/" }]
    },
    {
      id: "xcreadores", dep: "content", peso: "secundaria",
      etiquetas: ["X", "Creadores", "Fraude"],
      titular: "X le gana en Londres a dos usuarios que, según la red, inflaban interacciones pa’ cobrar £207,384",
      corto: "X gana demanda por fraude de creadores",
      cuerpo: "El Tribunal Superior de Inglaterra y Gales dictó el 20 de noviembre una sentencia en rebeldía a favor de X contra dos usuarios que no respondieron la demanda. X dice que seis cuentas conectadas funcionaban como una red: publicaban el mismo contenido en segundos, se daban like y repost entre ellas, y cobraron al menos £207,384 del programa de pagos a creadores entre 2023 y 2026. Los daños se deciden en otra audiencia, sin fecha. Ese programa ya fue reemplazado por Original Content Rewards.",
      cifras: [{ v: "£207,384", t: "en pagos a creadores que X dice que le sacaron" }],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/x-wins-uk-judgment-against-two-users-it-says-took-207-384-in-creator-pay/" }]
    },

    {
      id: "romeoroyce", dep: "rd", peso: "principal", para: ["content", "creatividad", "medios", "planning"],
      etiquetas: ["Bachata", "Conciertos", "Santiago"], fecha: "25 nov 2026",
      titular: "¡Wepa! Romeo Santos y Prince Royce cierran en Santiago su gira «Mejor tarde que nunca»",
      corto: "Romeo y Royce cierran gira en Santiago",
      cuerpo: "Santo Domingo.— Romeo Santos y Prince Royce escogieron a República Dominicana pa’ cerrar «Mejor tarde que nunca», su gira mundial juntos. El concierto será el 12 de febrero de 2027 en el Estadio Cibao, en Santiago, con producción de Rimas Nation, después de recorrer EE. UU., Europa y Latinoamérica. Según los organizadores, más de un millón y medio de personas ya han visto la gira. En el repertorio estarán los temas que grabaron juntos, como «Dardo», «La amaré» y «Ay! San Miguel».",
      cifras: [
        { v: "12 feb 2027", t: "fecha del cierre en el Estadio Cibao" },
        { v: "1.5 millones+", t: "personas que han visto la gira, según los organizadores" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Es el evento de bachata del arranque de 2027, en Santiago y justo antes de San Valentín. Pa’ las marcas, hay conversación en redes desde ya hasta febrero, y tráfico en la ciudad ese fin de semana.",
      hacer: "Esta semana, lista los clientes con presencia en el Cibao o con ángulo de San Valentín y llévales una idea de contenido o activación alrededor del concierto, antes de que la competencia amarre los espacios.",
      fuentes: [
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/25/romeo-santos-y-prince-royce-cerraran-en-rd-gira-mundial/3731203" },
        { nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/conciertos/20261125/romeo-santos-prince-royce-cerraran-gira-mundial-mejor-tarde-nunca-santiago_931473.html" }
      ]
    },
    {
      id: "imae", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Economía", "Banco Central"], fecha: "25 nov 2026",
      titular: "La economía crece 5.4 % en octubre, con la construcción al frente y los hoteles subiendo 7.8 %",
      corto: "La economía crece 5.4 % en octubre",
      cuerpo: "Según el IMAE del Banco Central, la economía dominicana creció 5.4 % interanual en octubre, impulsada por la construcción (15.6 %), la manufactura local (6.8 %) y los servicios. De enero a octubre el promedio va en 4.7 %, un chin por encima del 4.5 % proyectado pa’l cierre de 2026. Hoteles, bares y restaurantes crecieron 7.8 %, con 627,015 turistas en octubre, 5.7 % más que el año pasado.",
      cifras: [
        { v: "5.4 %", t: "crecimiento interanual en octubre" },
        { v: "4.7 %", t: "promedio de enero a octubre" },
        { v: "+7.8 %", t: "hoteles, bares y restaurantes en octubre" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning, es el dato que sostiene un presupuesto de 2027 con crecimiento, sobre todo en construcción, turismo y servicios financieros.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/finanzas/2026/11/25/economia-de-rd-crece-54--en-octubre-impulsada-por-la-construccion/3731591" }]
    },
    {
      id: "yipetas", dep: "rd", peso: "secundaria", para: ["planning", "creatividad", "medios"],
      etiquetas: ["Consumo", "Vehículos", "Aduanas"], fecha: "26 nov 2026",
      titular: "La yipeta se come el mercado: sus importaciones suben 23.68 % y las de carros caen 12.39 %",
      corto: "Las yipetas suben 23.68 %, los carros caen",
      cuerpo: "Según la Dirección General de Aduanas, de enero a octubre entraron al país 63,032 yipetas, 23.68 % más que el año pasado, mientras las importaciones de automóviles cayeron 12.39 % y las de minivans y furgonetas 3.83 %. Las yipetas ya son el 60.90 % del valor importado, con US$1,112.46 millones. Seis de cada diez vehículos importados fueron usados, y EE. UU. sigue como principal origen, seguido de Japón y China.",
      cifras: [
        { v: "63,032", t: "yipetas importadas de enero a octubre" },
        { v: "60.90 %", t: "del valor importado de vehículos" },
        { v: "6 de 10", t: "vehículos importados fueron usados" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El carro familiar de ahora es la yipeta. Pa’ dealers, seguros, bancos y gomas, el retrato del cliente cambió, y la pieza tiene que enseñarlo.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/11/26/importaciones-de-carros-en-rd-caen-1239--yipetas-suben-2368-/3731707" }]
    },
    {
      id: "acdmedia", dep: "rd", peso: "secundaria", para: ["medios"],
      etiquetas: ["TV abierta", "ACD Media"], fecha: "26 nov 2026",
      titular: "Dany Alcántara le apuesta a la TV abierta: Ahora TV y Catorce TV estrenan series de TV Azteca el 1 de diciembre",
      corto: "ACD Media estrena series de TV Azteca",
      cuerpo: "El presidente de ACD Media, Dany Alcántara, dijo a Diario Libre que la TV dominicana tiene futuro y explicó su inversión en Ahora TV (canal 3) y Catorce TV (canal 14). Desde el 1 de diciembre, Catorce TV estrena «Lotería del crimen», la segunda temporada de «Dra. Lucía: Un don extraordinario» y «Desaparecida», y Ahora TV suma «Las Bravas». El grupo transmite de 6 a 7 horas de contenido internacional por su afiliación con TV Azteca, tiene cerca de 60 talentos y más de 200 empleados. Alcántara estima que cerca del 30 % de la población ve TV abierta sin pagar servicio.",
      cifras: [
        { v: "~30 %", t: "de la población ve TV abierta sin suscripción, según Alcántara" },
        { v: "1 dic", t: "estreno de la nueva programación" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Inventario nuevo en TV abierta, con cobertura nacional y programación pa’ la noche, justo al arrancar diciembre.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/26/dany-alcantara-defiende-la-television-dominicana-y-su-futuro/3731625" }]
    },
    {
      id: "viettel", dep: "rd", peso: "secundaria", para: ["data", "medios"],
      etiquetas: ["Telecom", "5G", "Indotel"], fecha: "25 nov 2026",
      titular: "Indotel espera cobrar RD$5,560 millones por las frecuencias de Viettel y Claro, que traen el 4G y el 5G",
      corto: "Indotel: RD$5,560 millones por el 5G",
      cuerpo: "El Indotel proyecta recaudar RD$5,560.42 millones entre 2026 y 2032 por las concesiones de frecuencias a Viettel y Claro Dominicana. La adjudicación vale US$119.5 millones: Viettel se comprometió con US$107 millones y Claro con US$12.5 millones, y ambas pagaron su primera cuota el 13 de noviembre. Los contratos reparten 260 megahercios de espectro; Viettel, de Vietnam, tiene una concesión de 20 años pa’ redes 4G y 5G.",
      cifras: [
        { v: "US$119.5M", t: "valor de la adjudicación de frecuencias" },
        { v: "260 MHz", t: "de espectro repartido entre Viettel y Claro" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/telecomunicaciones/2026/11/25/indotel-espera-recaudar-rd5560-millones-de-claro-y-viettel/3731360" }]
    },
    {
      id: "libros", dep: "rd", peso: "secundaria", para: ["planning", "content"],
      etiquetas: ["Cultura", "Consumo", "Libros"], fecha: "25 nov 2026",
      titular: "Fantasía, romance y suspenso: Cuesta Libros cuenta lo que más leyó RD en 2026",
      corto: "Lo que más leyó RD en 2026",
      cuerpo: "Cuesta Libros compartió los libros que más se vendieron en el país este año. La ficción manda, sobre todo fantasía, romance y suspenso, con muchas sagas. Entre los juveniles salen «Boulevard: antes de ella» y «Culpa vuestra»; en infantil, «Diario de Greg 20: Aguafiestas» y «El Principito»; y en ensayo y crecimiento personal, títulos como «Los muchachos de la democracia» y «El arte de gastar dinero». La librería propone el libro como regalo pa’ estas fiestas.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Es una pista de qué historias enganchan al público joven y adulto en RD, y una idea de contenido navideño pa’ marcas que regalan o recomiendan.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/25/que-estan-leyendo-los-dominicanos-los-10-libros-mas-vendidos-de-2026/3731324" }]
    }
  ],

  pizarra: ["chatgptalcance", "hershey", "iainvestiga", "vermont", "editsipad", "romeoroyce"],

  frases: [
    { dep: "medios", texto: "ChatGPT Ads ya no cuenta solo impresiones: ahora dice a cuánta gente le llegó y cuántas veces, aunque todavía no explica cómo la cuenta.", uso: "para conversaciones de medición y nuevos canales" },
    { dep: "creatividad", texto: "Hershey no hizo un comercial de 90 minutos: abrió su archivo y aceptó que la historia tuviera conflicto.", uso: "para defender branded content con tensión real" },
    { dep: "planning", texto: "Los compradores que investigan con IA pasaron de 6 % a 13 %, y la lista corta se arma con lo que dicen otros, no con la web de la marca.", uso: "para conversaciones de temporada y búsqueda con IA" },
    { dep: "data", texto: "Desde el 1 de enero de 2027, en Vermont no se le puede armar el feed a un menor con sus datos de comportamiento.", uso: "para conversaciones de privacidad y audiencias jóvenes" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "ChatGPT Ads ya reporta alcance" },
      { id: "creatividad", texto: "La película de Hershey" },
      { id: "planning", texto: "Investigan con IA: de 6 % a 13 %" },
      { id: "data", texto: "Vermont y los feeds de menores" },
      { id: "content", texto: "Edits llega al iPad" },
      { id: "rd", texto: "Zoom a RD: Romeo y Royce en Santiago" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "chatgptalcance", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "iainvestiga", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Pa’ la próxima temporada, arranca en octubre: los compradores que investigan con IA ya son 13 %, y la IA arma la lista corta semanas antes con lo que dicen blogs, noticias y comparadores."
    },
    data: {
      tipo: "secreto", nota: "vermont", titulo: "Destapa el expediente",
      texto: "Desde el [[1 de enero de 2027]], Vermont prohíbe ordenar el contenido de un menor con sus [[datos personales o de comportamiento]], salvo que el menor lo pida o haga una búsqueda."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "editsipad", titulo: "Arma tu pedido pa’l asistente de video",
      intro: "Te voy a pasar fotos y videos de una marca para una pieza navideña. Ayúdame con lo siguiente:",
      opciones: [
        "Sugiéreme cómo armar un video corto con este material",
        "Propón el orden de las tomas y dónde cortar cada una",
        "Dime qué filtro o estilo de color le queda a la marca",
        "Señálame qué elementos podrían tener problemas de derechos de autor"
      ],
      cierre: "Señala qué partes de tu respuesta necesitan revisión humana antes de publicar."
    },
    rd: {
      tipo: "pregunta", nota: "romeoroyce", titulo: "La pregunta del patio",
      p: "¿Dónde cierran Romeo Santos y Prince Royce su gira «Mejor tarde que nunca»?",
      opciones: ["Estadio Olímpico, Santo Domingo", "Estadio Cibao, Santiago", "Estadio Quisqueya, Santo Domingo"], correcta: 1,
      explicacion: "Será el 12 de febrero de 2027 en el Estadio Cibao, en Santiago, con producción de Rimas Nation."
    }
  }
};
