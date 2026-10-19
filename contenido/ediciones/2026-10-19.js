/*
  El Pulso Publicitario · edición N.º 292 · 19 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 292,
  fechaISO: "2026-10-19",
  fecha: "Lunes 19 de octubre 2026",
  fechaCorta: "19 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Esta semana las plataformas cambiaron las reglas del juego, y gana el que las lee antes de que arranque la campaña.",
    largo: "Lunes de letra pequeña. Google te deja decidir qué canales se llevan el presupuesto primero, Meta ajusta sus términos con fecha de entrada el 30 de octubre, YouTube empieza a etiquetar la música hecha con IA y un reporte sobre un vendedor de anuncios con spyware pone a pensar a to’ el que compra programática. Aquí en el patio, Mitur dice que uno de cada tres turistas deportivos juega golf. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del jueves.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del jueves.",
    porDep: {
      medios: "Antes de darle control nuevo a una plataforma, lee la letra pequeña. «Mejor esfuerzo» no es lo mismo que garantía.",
      creatividad: "Cuando la idea es una sola imagen que se entiende sin explicación, la mitad del trabajo está hecho. Una bolsa gigante lo demuestra.",
      planning: "Una guía de temporada de una plataforma sirve de pista. Cruza sus fechas con tus propios datos antes de ponerlas en el plan.",
      data: "Fíjate en los términos que cambian y en quién compra tus impresiones. Anota qué contenido de tus clientes puede quedar expuesto.",
      content: "Si usas música con IA en un video, entérate de cómo la va a etiquetar la plataforma antes de publicar.",
      rd: "Cuando una cifra sale de una encuesta sin metodología, úsala de punto de partida y no de conclusión."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Google te deja priorizar canales y limitar el gasto de los de baja prioridad · Google estrena el Universal Cart pa’ compras en EE. UU." },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Chipotle estrena con GUT una bolsa gigante pa’ sus Family Meals · Asics pone a Sigourney Weaver a narrar la vida en el sofá" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Google publica su primera guía «When to Buy» pa’ las compras de fin de año" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Meta ajusta sus términos tras críticas por el rastreo de páginas de negocios · Google saca a un vendedor de anuncios tras un reporte de spyware" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube etiqueta la música hecha con IA · LinkedIn prueba anuncios y pagos pa’ creadores" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "googlecanales", dep: "medios", peso: "principal",
      etiquetas: ["Google Ads", "Canales", "Presupuesto"],
      titular: "Google te deja escoger qué canal se come el presupuesto primero, pero con letra pequeña",
      corto: "Google deja priorizar canales y topar el gasto",
      cuerpo: "El 14 de octubre, Google publicó controles de priorización de canales y de reparto de presupuesto. El anunciante marca cada canal como prioridad alta o baja, y Google dice que financia primero los de prioridad alta dentro de las metas de CPA o ROAS. Pa’ los de prioridad baja se puede poner un tope opcional, en porcentaje del presupuesto diario promedio. Ginny Marvin, enlace de producto de Google Ads, aclaró el 16 de octubre que en Performance Max se puede poner la asignación de Search Partners en 0 %. Ahora bien, la página de ayuda de Google llama a las asignaciones «mejor esfuerzo» y dice que no son una garantía. Y las campañas de Search con Display Network pierden su configuración actual de asignación desde febrero de 2027.",
      cifras: [
        { v: "0 %", t: "asignación posible pa’ Search Partners en Performance Max, según Marvin" },
        { v: "«Mejor esfuerzo»", t: "como lo llama la ayuda de Google: no es una garantía" },
        { v: "Feb 2027", t: "desde cuando las campañas de Search con Display pierden su configuración actual" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Es más control sobre dónde se gasta, pero las explicaciones de Google no coinciden del todo: la ayuda dice una cosa y la respuesta de Marvin no repite las salvedades. El API ya lo soporta según Marvin, y la ayuda dice que Editor y API llegan pronto.",
      hacer: "Esta semana, escoger una campaña de Performance Max con gasto en Search Partners, probar el tope en una prueba controlada y comparar CPA o ROAS contra la campaña sin tope antes de tocar las demás cuentas.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-ads-lets-pmax-advertisers-set-search-partner-spend-to-0-marvin-says/" }]
    },
    {
      id: "universalcart", dep: "medios", peso: "secundaria",
      etiquetas: ["Google", "Shopping", "Navidad"],
      titular: "Google abre su Universal Cart a todo EE. UU. pa’ las compras de fin de año",
      corto: "Google abre el Universal Cart en EE. UU.",
      cuerpo: "Google lanzó el Universal Cart pa’ todos los usuarios de EE. UU., una función que anunció en su evento I/O de mayo. Guarda en un solo carrito los productos que la gente agrega desde distintas apps de Google, avisa de bajadas de precio y de productos otra vez en inventario, sugiere la mejor opción de pago y alerta de códigos promocionales. Se paga con Google Pay o se pasa el producto al carrito del comercio. Entre los comercios con pago integrado figuran Nike, Sephora, Target, Ulta Beauty, Walmart y Wayfair, además de «muchos» comercios de Shopify. Por ahora es solo pa’ EE. UU.",
      toca: "Si tu cliente vende en EE. UU. o a dominicanos en el exterior, el carrito de Google se mete entre el anuncio y la compra. Lo que se mida ahí lo define Google, así que conviene preguntar cómo se reportan esas ventas.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/google-introduces-shopping-updates-ahead-of-the-holidays/833309/" }]
    },

    {
      id: "chipotle", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Chipotle", "GUT"],
      titular: "Chipotle convierte su bolsa de comida en un objeto de lujo, y gigante",
      corto: "Chipotle estrena con GUT una bolsa gigante",
      cuerpo: "Chipotle lanzó el 13 de octubre una bolsa de comida de edición limitada, de 170 litros y 36 por 24 por 12 pulgadas, pa’ promover sus Family Meals. Es el primer gran trabajo de la marca con la agencia GUT. Los anuncios le dan un look de alta moda y ponen la bolsa junto a objetos inesperados, como una trompeta, un árbol de Navidad y una silla de Chipotle. Ricky Casal, de GUT, la describió como un objeto de lujo cuya escala cuenta la historia. Hay un sorteo digital de varias semanas pa’ miembros de Rewards en EE. UU.: cada semana entran los que compren un Family Meal por la app o la web. Según MediaPost, las entradas llegan hasta el 10 de noviembre. Los Family Meals cuestan menos de US$10 por persona, según la compañía.",
      cifras: [
        { v: "170 litros", t: "capacidad de la bolsa, la más grande en la historia de Chipotle" },
        { v: "10 nov", t: "cierre de las entradas al sorteo, según MediaPost" },
        { v: "< US$10", t: "por persona en los Family Meals, según la compañía" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La idea cabe en una sola imagen: un objeto cotidiano a una escala absurda. Ese tipo de idea se entiende sin explicación, y por eso sirve de referente pa’ promociones de producto.",
      hacer: "Esta semana, en la sesión creativa, tomar un cliente con un producto de consumo diario y esbozar tres versiones de un objeto cotidiano «a lo grande», con su mecánica de sorteo y cómo se vería en una pieza de redes.",
      fuentes: [
        { nombre: "Adweek", url: "https://www.adweek.com/creativity/chipotle-drops-a-big-a-bag-to-make-group-dining-a-bigger-deal/" },
        { nombre: "MediaPost", url: "https://www.mediapost.com/publications/article/418713/chipotle-goes-supersize-with-limited-edition-big.html" }
      ]
    },
    {
      id: "asics", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Asics", "Golin"],
      titular: "Asics pone a Sigourney Weaver a narrar la vida en el sofá como si fuera un documental de naturaleza",
      corto: "Asics pone a Sigourney Weaver a narrar el sedentarismo",
      cuerpo: "Asics lanzó «Human Nature», un corto satírico de documental de naturaleza narrado por Sigourney Weaver, pa’ el Día Mundial de la Salud Mental, el 10 de octubre. Lo creó Golin Ketchum London, lo produjo Knucklehead y lo dirigió Rob Leggatt. Sigue a tres «especímenes» de oficina y de casa, y cierra con que el movimiento diario es la cura. Se apoya en el Movement Conservation Report de Asics, que cita una encuesta de 34,000 personas en 31 países y concluye que el 53 % de los adultos no cumple las pautas de actividad física. Las fuentes no coinciden en la duración: Adweek y The Drum hablan de unos 10 minutos y otra página lista 2.",
      cifras: [
        { v: "34,000", t: "personas en la encuesta de Asics, en 31 países" },
        { v: "53 %", t: "de los adultos no cumple las pautas de actividad física, según Asics" }
      ],
      toca: "Un formato de documental de naturaleza aplicado a la vida de oficina da humor y deja un mensaje claro. Los datos son del propio estudio de la marca, así que son una pista y no una prueba independiente.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/asics-enlists-sigourney-weaver-to-document-habits-of-the-couch-bound-human/" }]
    },

    {
      id: "whentobuy", dep: "planning", peso: "principal",
      etiquetas: ["Google", "Temporada", "Navidad"],
      titular: "Google publica su primera guía «When to Buy»: cuándo hay mejores ofertas en cada categoría",
      corto: "Google publica su guía «When to Buy»",
      cuerpo: "Google publicó su primera guía sobre cuándo comprar, un documento de 6 páginas que resume cuándo suelen estar las mejores ofertas en las categorías grandes de producto y qué tendencias de compra importan al planificar promociones. Se basa en tendencias de compra de 2025, no de 2026. Social Media Today anota, como lectura propia y no como afirmación de Google, que la guía podría mostrar cuándo se aprieta la competencia por el inventario.",
      cifras: [
        { v: "6 páginas", t: "de largo de la guía «When to Buy»" },
        { v: "2025", t: "año de las tendencias en las que se basa, no 2026" }
      ],
      hacer: "Esta semana, bajar la guía, cruzar sus fechas de ofertas con las ventas de 2025 de cada cliente de retail y mover, si hace falta, el calendario de Q4 antes de cerrar el presupuesto.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/google-introduces-shopping-updates-ahead-of-the-holidays/833309/" }]
    },

    {
      id: "metaterminos", dep: "data", peso: "principal",
      etiquetas: ["Meta", "Términos", "Scraping"],
      titular: "Meta corrige sus nuevos términos después de que los acusaron de abrirse la puerta a rastrear páginas de negocios",
      corto: "Meta ajusta sus términos tras las críticas",
      cuerpo: "Meta cambió el texto de sus nuevos términos de servicio, que entran en vigor el 30 de octubre. El borrador decía que los negocios que siguieran en sus plataformas después de esa fecha autorizaban a Meta a usar herramientas automáticas pa’ acceder a páginas web ligadas a sus productos o servicios y recoger su contenido. Tras las críticas, Meta aclaró que esas reglas de rastreo aplican solo a sus productos de anuncios y de negocios, y actualizó el texto. Un portavoz, Daniel Roberts, dijo que la actualización «no cambia cómo Meta usa sus rastreadores» y que los dueños de sitios pueden usar robots.txt. Social Media Today anota que las cláusulas todavía permiten recoger datos de sitios de negocios pa’ la segmentación de anuncios, y que el texto final no está confirmado.",
      cifras: [
        { v: "30 oct", t: "fecha en que entran en vigor los nuevos términos" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Los términos de las plataformas se están volviendo parte de la conversación de datos y de IA con los clientes.",
        "Las garantías vienen de un portavoz de Meta y el artículo no las verifica, así que lo que vale es el texto final."
      ],
      hacer: "Antes del 30 de octubre, revisar el texto final de los términos de Meta, confirmar que el robots.txt de cada cliente refleje lo que quiere permitir y avisarle a los clientes con páginas ligadas a Facebook o Instagram.",
      fuentes: [{ nombre: "Social Media Today", url: "https://socialmediatoday.com/news/meta-updates-terms-of-service-amid-concerns-around-data-scraping/833305" }]
    },
    {
      id: "adfection", dep: "data", peso: "secundaria",
      etiquetas: ["Seguridad", "Programática", "Google"],
      titular: "Google saca a un vendedor de anuncios de sus listas tras un reporte de spyware",
      corto: "Google saca a un vendedor de anuncios tras reporte de spyware",
      cuerpo: "El Citizen Lab, de la Universidad de Toronto, publicó el 15 de octubre «Exposing AdFection», un reporte según el cual al menos 45 dispositivos de Al Jazeera fueron blanco del spyware Candiru en 2024 y 2025 mediante anuncios sin clic. Google terminó el acceso de Discover-Tech a sus plataformas de intercambio de anuncios y lo sacó de sus listas de proveedores a principios de octubre, y el 18 de octubre PPC Land confirmó que ya no estaba en la lista descargable. IAB Europe también lo retiró de su Global Vendor List el 8 de octubre. El reporte aclara que una impresión no confirma por sí sola que hubo ataque o infección, y que varias conclusiones son evaluaciones, no hechos documentados. Discover-Tech no respondió a las solicitudes de comentario.",
      cifras: [
        { v: "45", t: "dispositivos de Al Jazeera atacados, según el Citizen Lab" },
        { v: "3,770 M", t: "impresiones en las que pujó MyDSP de marzo a junio de 2026, según el reporte" },
        { v: "~6 años", t: "que Discover-Tech estuvo en las listas de Google y de IAB Europe, desde 2020" }
      ],
      toca: "Los anuncios pasaron las verificaciones porque cargaban código distinto según quién los veía. Eso le pega a la seguridad de marca y a la compra programática, aunque el reporte no dice que los sitios que los mostraron hicieran algo mal.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-drops-ad-vendor-it-listed-since-2020-after-45-device-spyware-attack/" }]
    },

    {
      id: "ytmusica", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "IA", "Música"],
      titular: "YouTube empieza a etiquetar como «IA» la música hecha con inteligencia artificial",
      corto: "YouTube etiqueta la música hecha con IA",
      cuerpo: "El 14 de octubre, YouTube empezó a poner una etiqueta «AI» en las canciones que su sistema cree que se hicieron con IA generativa, primero en YouTube Music y luego en la app principal. Al tocarla sale una explicación básica. Aplica a canciones hechas «principalmente» con IA generativa, por ejemplo cuando un modelo crea la composición y las voces. YouTube usa sus propias herramientas de detección y trabaja con socios de la música pa’ mejorarlas. El artículo no trae cifras de etiquetas ni de detección, y no dice cómo se trata una canción mezclada de IA y trabajo humano.",
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si un video del cliente usa una pista hecha con IA, ya puede salir etiquetada. Como la detección es de YouTube y no hay datos de acierto, conviene saber de dónde viene cada audio antes de publicar.",
      hacer: "Esta semana, hacer una lista de los audios y las pistas que usa cada cliente en YouTube, marcar cuáles vienen de herramientas de IA y decidir si se avisa en la descripción del video.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-labels-ai-generated-music/833053/" }]
    },
    {
      id: "linkedincreadores", dep: "content", peso: "secundaria",
      etiquetas: ["LinkedIn", "Creadores", "Anuncios"],
      titular: "LinkedIn prueba anuncios pre-roll en videos de creadores y les promete una parte del ingreso",
      corto: "LinkedIn prueba anuncios y pagos pa’ creadores",
      cuerpo: "LinkedIn anunció el 15 de octubre varias novedades pa’ creadores. En prueba temprana, las marcas pueden poner anuncios pre-roll junto a videos de creadores y editores sin una alianza previa, y los creadores que se apunten reciben una parte del ingreso. El Creator Marketplace suma filtros pa’ buscar por audiencia, experiencia y formato. También vuelven los comentarios fijados, y los suscriptores Premium pueden ofrecer sesiones de consejo gratis o pagas, por ahora solo en EE. UU. El artículo no dice qué parte del ingreso se lleva el creador, ni precios, ni fecha de lanzamiento.",
      toca: "Pa’ el equipo de B2B es una puerta nueva pa’ trabajar con creadores, aunque todo está en prueba y sin cifras. Se sigue, no se promete.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/linkedin-adds-new-creator-monetization-options/833179/" }]
    },

    {
      id: "golf", dep: "rd", peso: "principal", para: ["planning", "medios", "content"],
      etiquetas: ["Turismo", "Mitur", "Golf"], fecha: "15 oct 2026 · La Romana",
      titular: "Mitur: uno de cada tres turistas deportivos en RD escoge el golf",
      corto: "Mitur: 1 de cada 3 turistas deportivos juega golf",
      cuerpo: "La Romana.— Jean Carlos Navarro, encargado de Turismo Deportivo del Ministerio de Turismo, dijo en una rueda de prensa que, según encuestas de Mitur a turistas no residentes durante 2026, uno de cada tres turistas deportivos que visitan el país escoge el golf. Los encuestados dieron 4.7 sobre 5 de satisfacción, el 74 % recomendaría el país como destino de golf y el 87.2 % dice que volvería. De enero a septiembre llegaron 9,241,246 visitantes, un 7.5 % más que en el mismo período de 2025, el 39 % desde EE. UU. y el 11 % desde Canadá. La rueda de prensa fue por el Dominican Republic Tour Championship, del 15 al 18 de octubre en PGA Ocean’s 4, Playa Nueva Romana, la primera vez que se juega en el país. El artículo no da la metodología ni el tamaño de la muestra, y define «turista deportivo» solo de forma general.",
      cifras: [
        { v: "1 de cada 3", t: "turistas deportivos escoge el golf, según encuestas de Mitur" },
        { v: "87.2 %", t: "de los turistas de golf encuestados dice que volvería" },
        { v: "9,241,246", t: "visitantes de enero a septiembre de 2026, +7.5 % frente a 2025" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Hay un nicho de turismo con buena satisfacción y fecha de torneo internacional. Pero la cifra de golf no trae metodología, y el 39 % de EE. UU. es de todos los visitantes, no de los golfistas. Úsalo de punto de partida.",
      hacer: "Esta semana, proponerle a un cliente de turismo, hotel o aerolínea un plan de contenido sobre golf y turismo deportivo pa’ el próximo trimestre, y pedirle a Mitur los datos completos de la encuesta antes de citarlos.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/384898/uno-de-cada-tres-turistas-deportivos-en-rd-elige-el-golf/" }]
    },
    {
      id: "credito", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Banca", "Consumo", "Crédito"], fecha: "16 oct 2026",
      titular: "Las líneas de crédito personal ligadas a tarjetas bajan 4.5 % a julio de 2026",
      corto: "Las líneas de crédito por tarjetas bajan 4.5 %",
      cuerpo: "Santo Domingo.— Según la Superintendencia de Bancos, el balance de los préstamos personales a través de líneas de crédito ligadas a tarjetas fue de RD$83,584 millones a julio de 2026, un 4.5 % menos que un año antes. El crecimiento interanual había llegado a 7.7 % en octubre de 2025 y luego se frenó. La Superintendencia dice que podría deberse a bancos que apretaron sus criterios de riesgo, pero lo plantea como posibilidad, no como causa confirmada. Aparte, hay 3.57 millones de créditos de tarjeta por RD$125,429 millones, un promedio de 1.7 por deudor, y el 89 % activo. Son categorías distintas y no se suman.",
      cifras: [
        { v: "RD$83,584 M", t: "balance de las líneas de crédito personal ligadas a tarjetas, a julio de 2026" },
        { v: "−4.5 %", t: "frente a julio de 2025" }
      ],
      toca: "Pa’ las cuentas de banca y consumo, es una pista de que el crédito se está enfriando. Sin una causa confirmada, no se debe prometer nada al cliente con este dato solo.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385254/lineas-de-credito-personal-a-traves-de-tarjetas-bajan-4-5-a-julio-de-2026/" }]
    },
    {
      id: "manosdom", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Moda", "Artesanía", "Fashion Week"], fecha: "17 oct 2026",
      titular: "Manos Dominicanas lleva la artesanía al Fashion Week con «Barahona: entre sal y armonía»",
      corto: "Manos Dominicanas lleva la artesanía al Fashion Week",
      cuerpo: "Santo Domingo.— Manos Dominicanas, programa de Supérate, presentó en el RD Fashion Week la colección «Barahona: entre sal y armonía», que combina su línea con Textil Cayena y trae piezas inspiradas en el larimar. Fueron 18 looks, cinco de hombre y 13 de mujer, con 17 artesanos. Eliana Mañón dijo que el programa vincula a más de 1,500 artesanos, y que el principal obstáculo es el acceso a compradores y canales de venta. Las cifras de ventas de dos artesanas son autodeclaradas y no representan al conjunto.",
      cifras: [
        { v: "18", t: "looks: 5 de hombre y 13 de mujer" },
        { v: "17", t: "artesanos participaron" }
      ],
      toca: "Es una historia visual de identidad dominicana con producto real, y el obstáculo que nombran, llegar a compradores, es justo donde una marca o una agencia puede ayudar con contenido.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385285/manos-dominicanas-lleva-la-artesania-al-fashion-week-2026/" }]
    },
    {
      id: "bachata", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Música", "Bachata", "Conciertos"], fecha: "19 oct 2026",
      titular: "Cuatro leyendas de la bachata se juntan por primera vez en Jarabacoa",
      corto: "Cuatro leyendas de la bachata se juntan en Jarabacoa",
      cuerpo: "Santo Domingo.— José Manuel Calderón, Luis Segura «El Añoñaíto», Edilio Paredes y Ramón Torres «El Poeta» actuarán juntos por primera vez en una tarima, el domingo 8 de noviembre, en el Súper Ultra Mega Bachatazo de Jarabacoa, en La Confluencia. El artículo no dice precios de boletas, dónde comprarlas ni patrocinadores.",
      toca: "Es un concierto con fecha y lugar que se puede mirar pa’ contenido y pauta de eventos, pero no hay datos de patrocinio ni de audiencia, así que por ahora es solo una pista de agenda.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/cuatro-leyendas-de-la-bachata-se-juntan-por-primera-vez-en-jarabacoa/" }]
    },
    {
      id: "uasd", dep: "rd", peso: "secundaria", para: ["creatividad"],
      etiquetas: ["Campaña", "UASD", "Ambiente"], fecha: "15 oct 2026",
      titular: "La UASD lanza «La Madre Tierra nos habla» por su aniversario 488",
      corto: "La UASD lanza «La Madre Tierra nos habla»",
      cuerpo: "Santo Domingo.— La Universidad Autónoma de Santo Domingo lanzó «La Madre Tierra nos habla», una campaña de conciencia ambiental sobre la protección de los recursos naturales y el cambio climático, dentro de las actividades por sus 488 años, fundada el 28 de octubre de 1538. La pieza central es un afiche que combina la identidad visual de la UASD con agua, arena, nubes, árboles, aves y montañas. El artículo no especifica otros canales.",
      toca: "Es un ejemplo local de cómo una institución mete elementos de la naturaleza en su identidad visual pa’ un mensaje de bien público.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/la-madre-tierra-nos-habla/" }]
    }
  ],

  pizarra: ["googlecanales", "chipotle", "whentobuy", "metaterminos", "ytmusica", "golf"],

  frases: [
    { dep: "medios", texto: "Google ya te deja decidir qué canal se come el presupuesto primero, pero su propia ayuda dice que es «mejor esfuerzo», no garantía.", uso: "para conversaciones de control de presupuesto" },
    { dep: "creatividad", texto: "Chipotle no cambió el burrito: cambió el tamaño de la bolsa, y con eso armó una campaña.", uso: "para conversaciones de ideas de una sola imagen" },
    { dep: "planning", texto: "Google publicó su guía de cuándo comprar, pero se basa en 2025: úsala de pista y cruza con tus datos.", uso: "para conversaciones de calendario de temporada" },
    { dep: "data", texto: "Meta corrigió sus términos antes del 30 de octubre, pero lo que vale es el texto final, no lo que diga el portavoz.", uso: "para conversaciones de términos y datos de clientes" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Google prioriza canales y topa el gasto" },
      { id: "creatividad", texto: "La bolsa gigante de Chipotle" },
      { id: "planning", texto: "La guía «When to Buy» de Google" },
      { id: "data", texto: "Meta ajusta sus términos" },
      { id: "content", texto: "YouTube etiqueta la música con IA" },
      { id: "rd", texto: "Zoom a RD: 1 de cada 3 turistas deportivos juega golf" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "googlecanales", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "whentobuy", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Google publicó su primera guía «When to Buy», de 6 páginas, pa’ saber cuándo hay mejores ofertas por categoría. Se basa en tendencias de 2025: cruza sus fechas con tus datos."
    },
    data: {
      tipo: "secreto", nota: "adfection", titulo: "Destapa el expediente",
      texto: "El Citizen Lab reporta que al menos [[45 dispositivos]] de Al Jazeera fueron atacados con spyware, y Discover-Tech estuvo en las listas de Google y de IAB Europe por casi [[seis años]]."
    },
    rd: {
      tipo: "pregunta", nota: "golf", titulo: "La pregunta del patio",
      p: "Según encuestas de Mitur, ¿cuántos turistas deportivos en RD escogen el golf?",
      opciones: ["Uno de cada tres", "Uno de cada diez", "Uno de cada dos"],
      correcta: 0,
      explicacion: "Es uno de cada tres. La cifra no trae metodología ni tamaño de muestra, así que se usa de punto de partida."
    }
  }
};
