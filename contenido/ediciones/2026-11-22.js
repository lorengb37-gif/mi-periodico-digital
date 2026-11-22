/*
  El Pulso Publicitario · edición N.º 326 · 22 de noviembre de 2026
  ------------------------------------------------
  Estructura igual a la plantilla del 11 de septiembre (ediciones/2026-09-11.js).
*/
window.EDICION = {
  numero: 326,
  fechaISO: "2026-11-22",
  fecha: "Domingo 22 de noviembre 2026",
  fechaCorta: "22 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Las plataformas están cambiando qué cuenta como vista, como anuncio y hasta como «gratis». Revisa las reglas antes de celebrar el número.",
    largo: "Esta semana Google empezó a poner anuncios hasta en la cuarta pregunta de seguimiento de AI Mode sin dejarte separar ese reporte, YouTube empezó a contar un «me gusta» como si fueran cinco segundos de vista en Shorts, y una abogada general de la Unión Europea dijo que regalar tus datos también es pagar. Al mismo tiempo, una agencia británica contó cómo perdió un cliente mientras le subía el ROAS. El hilo es el mismo: el número que te enseña la plataforma depende de reglas que cambian sin aviso. El consejo de hoy es sentarte con cada cliente grande, revisar qué cuenta como resultado en su plan y preguntarle qué necesita de verdad el negocio esta temporada.",
    corto: "Antes del viernes negro, revisa con cada cliente qué cuenta como resultado y si eso es lo que el negocio necesita.",
    porDep: {
      medios: "Si tu cliente pauta en Search o Shopping, ya está en AI Mode aunque no lo sepa. Revisa negativas y exclusiones de marca esta semana.",
      creatividad: "La Navidad de este año premia lo hecho a mano y con gente de verdad. Busca la historia antes de buscar el efecto.",
      planning: "El deporte y el streaming con anuncios son lo que crece en TV. Arma el plan del primer trimestre con esa foto, no con la del año pasado.",
      data: "Si el producto de tu cliente se paga con datos, la palabra «gratis» se puso delicada en Europa. Revisa cómo la usa.",
      content: "Los premios a creadores ya tienen categoría de campaña integrada: trata al creador como socio de la idea, no como vitrina.",
      rd: "Con el cobro de fundas el 15 de diciembre, la bolsa reutilizable de marca vuelve a ser medio. Piénsala como pieza, no como regalo."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Google mete anuncios hasta en la cuarta pregunta de AI Mode · Un «me gusta» en Shorts ya vale como cinco segundos de vista · Merchant Center: ofertas de más de 30 días pueden perder la etiqueta de oferta" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Tiffany cuenta su Navidad con un corto de Derek Cianfrance y Amanda Seyfried · Taco Bell convierte un torneo de golf en programa de Peacock" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "El tercer trimestre de la TV: el streaming y el deporte crecen, el cable se encoge · JudeLuxe perdió un cliente mientras le subía el ROAS" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Abogada general de la UE: el Facebook «gratis» se paga con datos · Colorado prohíbe verificar la edad en chatbots solo con cédula" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Los primeros Clio Creator Awards premian a IShowSpeed, MrBeast y Michelle Khare · LinkedIn lanza su tarjeta de presentación digital pa’ to’ el mundo" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "El 42 % se informa de política solo por redes · Las fundas plásticas se cobran desde el 15 de diciembre · Melissa Núñez y su traje «Tres raíces, una nación» · Romeo Santos y Prince Royce ganan en Los40 · ACIS y las sociedades de gestión cierran acuerdo de música" }
  },

  notas: [
    {
      id: "aimodeturnos", dep: "medios", peso: "principal",
      etiquetas: ["Google", "AI Mode", "Search"],
      hilo: "Las reglas del número",
      titular: "Google ya mete anuncios hasta en la cuarta pregunta de seguimiento de AI Mode, y no te deja verlo por separado",
      corto: "AI Mode: anuncios hasta en la 4.ª pregunta",
      cuerpo: "Barry Schwartz, de Search Engine Roundtable, probó AI Mode en Estados Unidos y le salieron carruseles de Shopping marcados como «Sponsored» en dos turnos seguidos de la misma conversación: cuatro anuncios de celulares plegables en la primera pregunta y cuatro de forros en la segunda. Dice que también vio anuncios en la tercera y la cuarta. Las campañas de Search, Shopping y Performance Max entran solas; no hay forma de salirse de AI Mode sin salirse de Search, y el reporte no separa por ubicación ni por turno. Las negativas y las exclusiones de marca sí aplican.",
      cifras: [
        { v: "4.ª", t: "pregunta de seguimiento donde ya aparecen anuncios" },
        { v: "8", t: "anuncios en dos turnos de una misma conversación" },
        { v: "0", t: "reportes separados por turno o por ubicación" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si tu cliente tiene Search, Shopping o PMax en EE. UU., su dinero ya se está gastando en AI Mode, y la plataforma no te dice cuánto. El texto de IA que rodea el anuncio tampoco lo puedes editar ni apagar.",
      hacer: "Esta semana, en las cuentas con Search o PMax que pautan en EE. UU., revisa la lista de negativas y las exclusiones de marca, y haz tres búsquedas de seguimiento en AI Mode con términos del cliente pa’ ver dónde y al lado de qué sale.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-ai-mode-ads-appear-as-deep-as-the-fourth-follow-up-question/" }]
    },
    {
      id: "shortslike", dep: "medios", peso: "secundaria",
      etiquetas: ["YouTube", "Shorts", "Medición"],
      hilo: "Las reglas del número",
      titular: "En los anuncios de Shorts, un «me gusta» ya vale lo mismo que cinco segundos de vista",
      corto: "Shorts: un «me gusta» cuenta como vista",
      cuerpo: "La ayuda de Google Ads ahora dice que tocar «me gusta», comentar o compartir en un anuncio de YouTube Shorts cuenta igual que cinco segundos de vista pa’ las conversiones por vista comprometida (EVC), y también como vista TrueView, que es la unidad que se cobra en las campañas de costo por vista. O sea, alguien que toca «me gusta» a los dos segundos ya cuenta como una vista de 10 segundos. Google no dijo desde cuándo aplica ni si va a recalcular los datos viejos.",
      cifras: [
        { v: "5 s", t: "de vista que ahora equivale un «me gusta» pa’ EVC" },
        { v: "10 s", t: "umbral de vista TrueView en Shorts que el toque también cumple" },
        { v: "6", t: "eventos que puede registrar una sola reproducción de un anuncio de Shorts" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si tus vistas o tus conversiones de Shorts subieron de repente, puede que no sea la pieza sino la regla. Cuidado con comparar este mes contra el anterior.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-lets-a-like-stand-in-for-5-seconds-of-viewing-in-shorts-conversions/" }]
    },
    {
      id: "merchantoferta", dep: "medios", peso: "secundaria",
      etiquetas: ["Google", "Shopping", "Viernes negro"],
      titular: "Merchant Center avisa: una oferta de más de 30 días puede quedarse sin la etiqueta de oferta",
      corto: "Ofertas de más de 30 días, sin etiqueta",
      cuerpo: "La página de ayuda de Google sobre las anotaciones de precio de oferta ahora dice que una oferta no debería durar más de 30 días pa’ contar como rebaja temporal. Aplica a listados gratis, anuncios de Shopping y anuncios de inventario local. Siguen las reglas de antes: el descuento tiene que ser mayor de 5 % y menor de 90 %, y el precio base tiene que tener historial. Google no dice qué pasa con las ofertas que se pasen de 30 días ni desde cuándo cuenta.",
      cifras: [
        { v: "30 días", t: "duración máxima sugerida pa’ una oferta temporal" },
        { v: "5 % – 90 %", t: "rango de descuento permitido" },
        { v: "13", t: "mercados con reglas de precio base" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/merchant-center-sales-running-past-30-days-may-miss-googles-sale-badge/" }]
    },

    {
      id: "tiffany", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Tiffany", "Navidad"],
      titular: "Tiffany cuenta su Navidad con un corto de dos minutos, Amanda Seyfried y el director de «Blue Valentine»",
      corto: "Tiffany: un corto con gente de verdad",
      cuerpo: "Tiffany & Co. estrenó «Love is a Gift», su campaña global de Navidad, con «You & Me», un cortometraje de dos minutos que dirigió Derek Cianfrance y que protagoniza Amanda Seyfried. La historia va del Nueva York de hoy a los años noventa: una niña ve a su mamá trabajar como coreógrafa, recibe un adorno de Tiffany y años después se lo pasa a su hija. La agencia, American Haiku, trabajó sin brief tradicional y se inspiró en los archivos de la marca y en películas como «Home Alone 2». Va en cine, redes pagadas y orgánicas, pantallas digitales en exterior y canales propios.",
      cifras: [
        { v: "2 min", t: "duración del corto «You & Me»" },
        { v: "1996", t: "año del «You & Me Song» de The Wannadies, que suena en la pieza" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Mientras la gente se cansa de los anuncios hechos con IA, las marcas grandes vuelven a la historia filmada, con actores y nostalgia de la propia marca. Tiffany no usó los símbolos típicos de los noventa: usó su archivo.",
      hacer: "Esta semana, pídele a un cliente con historia fotos y objetos de sus primeros años, y arma en una hora tres ideas navideñas que salgan de ese archivo y no de un banco de imágenes.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/campaign-trail-tiffany-tells-human-holiday-story-with-hollywood-talent/874914/" }]
    },
    {
      id: "tacobellgolf", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Activación", "Taco Bell", "Entretenimiento"],
      titular: "Taco Bell convierte un torneo de golf en programa de TV, y el premio es revivir un plato que ya no venden",
      corto: "Taco Bell monta su propio torneo de golf",
      cuerpo: "Taco Bell hizo el primer Live Más Open, un torneo de golf en Laguna Beach, California, con Kevin Hart de anfitrión. Fanáticos jugaron junto a famosos, atletas y creadores en un campo inspirado en la marca, con retos y meriendas en el camino. El equipo ganador se lleva la oportunidad de traer de vuelta a los restaurantes un plato descontinuado. Peacock lo transmite desde el 20 de noviembre y después pasa por Golf Channel.",
      cifras: [
        { v: "20 nov", t: "estreno en Peacock" }
      ],
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/how-taco-bell-turned-a-golf-tournament-into-its-latest-entertainment-play/" }]
    },

    {
      id: "tvtrimestre", dep: "planning", peso: "principal",
      etiquetas: ["TV", "Streaming", "Deportes"],
      titular: "El tercer trimestre de la TV: el streaming y el deporte cogen fuerza mientras el cable sigue encogiéndose",
      corto: "TV: crecen streaming y deporte",
      cuerpo: "AdExchanger juntó los resultados del tercer trimestre. Disney facturó US$25,900 millones (+16 %) y su publicidad deportiva creció 20 %. Fox subió 22 %, con la publicidad arriba 47 % y Tubi con 23 % más horas vistas. Peacock tuvo su segundo trimestre con ganancias y llegó a 48 millones de suscriptores pagos (+17 %). Paramount+ creció 21 %. Netflix subió 12 %, pero su publicidad no se duplicó como esperaba. Versant, en cambio, cayó 4 % y lo achacó a la baja de la TV paga.",
      cifras: [
        { v: "+20 %", t: "publicidad deportiva de Disney en su cuarto trimestre fiscal" },
        { v: "+47 %", t: "ingresos publicitarios de Fox" },
        { v: "48M", t: "suscriptores pagos de Peacock, 17 % más que hace un año" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "El dinero de TV se está moviendo hacia dos cosas: deporte en vivo y streaming con anuncios. Los planes que todavía reparten por canal de cable se están quedando atrás de donde está la audiencia.",
      hacer: "Antes del viernes, revisa el plan de TV del primer trimestre de 2027 de un cliente grande y marca qué parte va a deporte en vivo y qué parte a streaming con anuncios. Si es menos de lo que dicen estas cifras, llévalo a la conversación.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/ctv-roundup/q3-in-review-pay-tv-shrinks-streaming-and-sports-step-up/" }]
    },
    {
      id: "judeluxe", dep: "planning", peso: "secundaria",
      etiquetas: ["Agencias", "ROAS", "Clientes"],
      hilo: "Las reglas del número",
      titular: "Una agencia británica perdió un cliente a los dos meses, con el ROAS subiendo y el gasto bajando",
      corto: "Subió el ROAS y perdió el cliente",
      cuerpo: "Chris Avery, cofundador de JudeLuxe, contó en el pódcast PPC Live que hace unos años perdió a un minorista a los dos meses de cogerle la cuenta, aunque el ROAS había subido y el gasto había bajado. El cliente necesitaba salir del inventario de temporada y estaba corto de efectivo; la agencia tomó el objetivo de ROAS como el brief y nunca preguntó. Su ejemplo: un ROAS de 3 que vacía el inventario puede valer más que uno de 4.5. Hoy, dice, el 80 % de sus llamadas con clientes son de temas que no son Google Ads.",
      cifras: [
        { v: "2 meses", t: "lo que duró la cuenta" },
        { v: "80 %", t: "del tiempo de llamadas con clientes que JudeLuxe dedica hoy a temas fuera de Google Ads" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Un objetivo de plataforma no es un objetivo de negocio. Antes de optimizar, pregunta por inventario, efectivo y prioridades.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/judeluxe-lost-a-client-two-months-in-despite-higher-roas-avery-says/" }]
    },

    {
      id: "facebookgratis", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "Unión Europea", "Meta"],
      titular: "Abogada general de la UE: el Facebook «gratis» se paga con tus datos",
      corto: "UE: lo «gratis» se paga con datos",
      cuerpo: "En el caso C-643/25, la federación de consumidores alemana vzbv contra Meta, la abogada general Laila Medina dijo el 19 de noviembre que, en la ley europea de prácticas comerciales desleales, «costo» incluye entregar datos personales y aceptar su uso comercial. La excepción son los datos que se usan solo pa’ dar el servicio o cumplir la ley. El caso viene del lema alemán «Facebook es y seguirá siendo gratis». La opinión no obliga al tribunal y todavía no hay fecha de sentencia.",
      cifras: [
        { v: "C-643/25", t: "número del caso ante el Tribunal de Justicia de la UE" },
        { v: "19 nov", t: "fecha de la opinión de la abogada general" },
        { v: "6 %", t: "de la facturación mundial: multa máxima de la Ley de Equidad Digital propuesta" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Si el tribunal le hace caso, «gratis» se vuelve una palabra arriesgada pa’ apps, redes y sitios que viven de datos y anuncios.",
        "Los modelos de «paga o acepta» quedan todavía más bajo la lupa en Europa."
      ],
      hacer: "Esta semana, busca la palabra «gratis» en las apps, registros y anuncios de los clientes que venden en Europa y anota cuáles se financian con datos. Esa lista va pa’l equipo legal del cliente.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/eu-court-adviser-says-free-facebook-costs-users-their-data/" }]
    },
    {
      id: "coloradochatbots", dep: "data", peso: "secundaria",
      etiquetas: ["Regulación", "IA", "Menores"],
      titular: "Colorado: los chatbots no pueden verificar la edad solo con un documento de identidad",
      corto: "Colorado pone reglas a los chatbots",
      cuerpo: "El Departamento de Justicia de Colorado adoptó el 19 de noviembre un reglamento de 76 páginas pa’ dos leyes: una sobre decisiones automatizadas y otra sobre chatbots. Los chatbots no pueden estimar la edad solo con identificación oficial, tienen que decir que son IA y recordárselo a los menores por lo menos cada tres horas. Quien recibe una decisión automatizada en su contra debe recibir explicación en 30 días. Las leyes arrancan el 1 de enero de 2027, aunque una orden federal frena por ahora su aplicación.",
      cifras: [
        { v: "76", t: "páginas del reglamento" },
        { v: "3 horas", t: "frecuencia mínima del aviso de IA a menores" },
        { v: "30 días", t: "plazo pa’ explicar una decisión automatizada adversa" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/colorado-bans-id-only-age-checks-for-ai-chatbots-in-adopted-rules/" }]
    },

    {
      id: "cliocreadores", dep: "content", peso: "principal",
      etiquetas: ["Creadores", "Premios", "YouTube"],
      titular: "Los primeros Clio Creator Awards premian a IShowSpeed con Expedia, a MrBeast con Disney y a Michelle Khare con Adobe y Red Bull",
      corto: "Clio estrena premios pa’ creadores",
      cuerpo: "Los Clio estrenaron sus Creator Awards en el Dolby Theatre de Los Ángeles, presentados por YouTube y con Terry Crews de anfitrión. IShowSpeed y Expedia ganaron campaña integrada; Michelle Khare, con Adobe y Red Bull, ganó colaboración creador-marca por recrear una escena de «Mission: Impossible»; MrBeast y Disney ganaron relaciones públicas con una recaudación pa’ Stand Up to Cancer. También ganaron Kylie Kelce en pódcast, el documental de 35 minutos de fern en video y Dhar Mann con el premio de impacto.",
      cifras: [
        { v: "8", t: "creadores premiados en la primera edición" },
        { v: "1959", t: "año en que nacieron los premios Clio" },
        { v: "35 min", t: "duración del documental ganador en video" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Los premios ya miden al creador con las mismas categorías de una agencia: campaña integrada, relaciones públicas, ejecución creativa. La pieza de creador dejó de ser un post: es una campaña con su propio caso.",
      hacer: "Esta semana, escoge la mejor colaboración con creadores que hizo tu equipo este año y escríbela como caso de una página: reto, idea, ejecución y resultado. Te sirve pa’ premios y pa’ vender la próxima.",
      fuentes: [{ nombre: "Tubefilter", url: "https://www.tubefilter.com/2026/11/20/youtubers-won-clio-creator-awards-2026-ishowspeed-michelle-khare-mrbeast-dhar-mann/" }]
    },
    {
      id: "linkedintarjeta", dep: "content", peso: "secundaria",
      etiquetas: ["LinkedIn", "Funciones"],
      titular: "LinkedIn saca su tarjeta de presentación digital pa’ to’ el mundo, y un juego nuevo de números",
      corto: "LinkedIn lanza tarjeta digital",
      cuerpo: "Desde el 18 de noviembre, cualquier miembro de LinkedIn puede crear una tarjeta de presentación digital ligada a su perfil, con colores, fondos y stickers, y guardarla en la billetera del celular pa’ compartirla de un toque. Por ahora se crea solo en la app y solo en inglés. LinkedIn también estrenó Sumbreak, un rompecabezas de números, y anunció tablas de posiciones con favoritos y bonos por racha.",
      cifras: [
        { v: "37 %", t: "más conexiones que hacen hoy los profesionales de la generación Z que hace seis años, según LinkedIn" },
        { v: "27 %", t: "de los profesionales cuida su red con regularidad, según LinkedIn" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/linkedin-wants-the-business-card-to-outlive-the-job/" }]
    },

    {
      id: "politicaredes", dep: "rd", peso: "principal", para: ["medios", "planning", "content"],
      etiquetas: ["Audiencias", "Redes", "Estudio"], fecha: "17 nov 2026",
      titular: "El 42 % de los dominicanos se informa de política solo por redes y medios digitales, pero la TV sigue mandando",
      corto: "42 % se informa solo por redes",
      cuerpo: "El Barómetro Sociopolítico 2026 de Newpartners, con 1,201 entrevistas cara a cara en to’ el país, dice que el 42 % de los mayores de 18 se informa de política solo por redes y medios digitales, el 28 % solo por medios tradicionales y el 26 % por ambos. La TV sigue de primera con 47 %, seguida de Facebook (37 %), Instagram (35 %), YouTube (25 %) y TikTok (19 %). Ningún canal pasa de 30 % de mucha confianza. A partir de los 53 años, Instagram cae de 28 % a 10 %; Facebook pega más entre los 38 y 42 años (53 %), y la TV llega a 74 % en los mayores de 70.",
      cifras: [
        { v: "42 %", t: "se informa de política solo por redes y medios digitales" },
        { v: "47 %", t: "usa la TV, el canal principal" },
        { v: "1,201", t: "entrevistas presenciales del estudio" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Es un mapa de medios por edad hecho en el patio: la frontera digital está alrededor de los 52 años y Facebook pega en los 38 a 42. Sirve pa’ cualquier cliente, no solo pa’ los políticos.",
      hacer: "Esta semana, compara la mezcla de medios de un cliente que le hable a mayores de 50 con estas cifras, y si tiene mucho Instagram y poca TV, lleva la propuesta de ajuste a la próxima reunión.",
      fuentes: [{ nombre: "N Digital", url: "https://n.com.do/2026/11/17/segun-estudio-el-42-de-los-dominicanos-se-informa-de-politica-en-redes-y-medios-digitales/" }]
    },
    {
      id: "fundascobro", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Consumo", "Comercio", "Ley 98-25"], fecha: "22 nov 2026",
      titular: "Desde el 15 de diciembre la funda plástica se paga, y se habla de RD$0.50 a RD$2 por cada una",
      corto: "Las fundas se cobran desde el 15 de diciembre",
      cuerpo: "Por la Ley 98-25 de residuos sólidos, los comercios dejarán de regalar fundas plásticas el 15 de diciembre. No hay tarifa oficial, pero comercio, autoridades e industria discuten entre RD$0.50 y RD$2 por funda. Iván García, de la Federación Dominicana de Comerciantes, pidió aplazarlo al 15 de marzo y recordó que hay 62,000 colmados en el país. Adofar, que fabrica fundas recicladas, dice que está lista desde el primer día. Y Diario Libre fue al mercado de la avenida Mella, donde los comerciantes dicen que el macuto puede volver.",
      cifras: [
        { v: "15 dic", t: "fecha en que las fundas dejan de ser gratis" },
        { v: "RD$0.50 – RD$2", t: "rango discutido por funda" },
        { v: "62,000", t: "colmados en el país, según la FDC" }
      ],
      fuentes: [
        { nombre: "Listín Diario", url: "https://listindiario.com/economia/20261122/mes-iniciara-cobro-fundas-plasticas-distintos-comercios_930911.html" },
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/actualidad/nacional/2026/11/21/regresara-el-uso-del-macuto-pronto-las-fundas-plasticas-costaran/3727643" }
      ]
    },
    {
      id: "melissatraje", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Miss Universo", "Cultura", "Diseño"], fecha: "21 nov 2026",
      titular: "Melissa Núñez se lleva una ovación en Miss Universo con «Tres raíces, una nación»",
      corto: "Melissa Núñez y sus «Tres raíces»",
      cuerpo: "En el desfile de trajes típicos de Miss Universo 2026, en San Juan, Puerto Rico, Melissa Núñez lució «Tres raíces, una nación», un traje que rinde tributo a las tres culturas que forman el país. El tocado rojo, blanco y azul lo hizo el artista dominicano Jonathan Klembert. Llevaba turbante, el escudo nacional al centro, un faldón con símbolos patrios, flores de cayena y una Biblia en la parte de atrás.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/21/melissa-nunez-recibe-ovacion-en-miss-universo-con-su-traje-tipico/3727922" }]
    },
    {
      id: "los40bachata", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Bachata", "Premios"], fecha: "21 nov 2026",
      titular: "¡Wepa! Romeo Santos y Prince Royce se traen dos premios de Los40 en Barcelona, y Romeo el Golden Icon",
      corto: "Romeo y Royce ganan en Los40",
      cuerpo: "En Los40 Music Awards Santander 2026, en el Palau Sant Jordi de Barcelona, Romeo Santos y Prince Royce ganaron mejor álbum latino por «Better Late Than Never» y mejor canción latina por «Dardos». Además, Romeo recibió el Golden Icon por su trayectoria y por llevar la bachata al mundo.",
      cifras: [
        { v: "2", t: "premios conjuntos de Romeo Santos y Prince Royce" }
      ],
      fuentes: [{ nombre: "N Digital", url: "https://n.com.do/2026/11/21/romeo-santos-prince-royce-rosalia-ganadores-los40-music-awards-2026/" }]
    },
    {
      id: "musicasantiago", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Música", "Derechos de autor", "Santiago"], fecha: "21 nov 2026",
      titular: "Los negocios de la ACIS en Santiago tienen ocho meses pa’ sacar su licencia de música sin pagar lo atrasado",
      corto: "ACIS: licencia de música sin deuda vieja",
      cuerpo: "La Asociación de Comerciantes e Industriales de Santiago (ACIS) firmó un acuerdo con las sociedades de gestión colectiva: sus afiliados tienen ocho meses pa’ formalizar la licencia por usar música en sus locales y, si lo hacen, se les perdona la deuda de años anteriores. Habrá tarifa especial y un solo cobro unificado en vez de facturas de cada entidad. La tarifa depende del tipo de negocio: en hoteles cuentan habitaciones y sillas del restaurante.",
      cifras: [
        { v: "8 meses", t: "plazo pa’ formalizar la licencia sin deuda retroactiva" },
        { v: "1", t: "cobro unificado en vez de facturas separadas" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/21/condonan-deudas-por-uso-de-musica-a-empresas-de-santiago/3727795" }]
    }
  ],

  pizarra: ["aimodeturnos", "tiffany", "tvtrimestre", "facebookgratis", "cliocreadores", "politicaredes"],

  frases: [
    { dep: "medios", texto: "Si tu cliente tiene Search o PMax, ya está en AI Mode aunque nadie se lo haya preguntado.", uso: "para conversaciones de búsqueda e IA" },
    { dep: "planning", texto: "Un ROAS que sube no sirve de na’ si el cliente necesitaba vaciar el almacén.", uso: "para conversaciones de objetivos con clientes" },
    { dep: "data", texto: "En Europa ya se discute si «gratis» es mentira cuando pagas con tus datos.", uso: "para conversaciones de privacidad y mensajes de marca" },
    { dep: "rd", texto: "El 42 % de los dominicanos se informa de política solo por redes, pero la TV sigue siendo el canal número uno.", uso: "para conversaciones de mezcla de medios en el patio" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Anuncios en la 4.ª pregunta de AI Mode" },
      { id: "creatividad", texto: "La Navidad hecha a mano de Tiffany" },
      { id: "planning", texto: "El trimestre de la TV: streaming y deporte" },
      { id: "data", texto: "Lo «gratis» que se paga con datos" },
      { id: "content", texto: "Los primeros Clio pa’ creadores" },
      { id: "rd", texto: "Zoom a RD: el 42 % se informa por redes" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "aimodeturnos", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "tvtrimestre", titulo: "Arranca la hoja", mes: "Diciembre",
      revela: "Disney mete más deporte en Disney+ en diciembre y su publicidad deportiva ya creció 20 %: cierra este mes el plan de TV del primer trimestre con más peso en deporte en vivo y streaming con anuncios."
    },
    data: {
      tipo: "secreto", nota: "facebookgratis", titulo: "Destapa el expediente",
      texto: "En el caso [[C-643/25]], la abogada general Laila Medina dijo que entregar tus datos y aceptar su uso comercial también es un [[costo]] pa’ la ley de consumo europea."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "politicaredes", titulo: "La pregunta del patio",
      p: "Según el Barómetro de Newpartners, ¿cuál es el principal canal de información política en RD?",
      opciones: ["Facebook", "La televisión", "TikTok"], correcta: 1,
      explicacion: "La TV va de primera con 47 %, seguida de Facebook (37 %) e Instagram (35 %), aunque el 42 % se informa solo por redes y medios digitales."
    }
  }
};
