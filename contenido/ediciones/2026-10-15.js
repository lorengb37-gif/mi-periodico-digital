/*
  El Pulso Publicitario · edición N.º 288 · 15 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 288,
  fechaISO: "2026-10-15",
  fecha: "Jueves 15 de octubre 2026",
  fechaCorta: "15 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Cuando una plataforma te da un control nuevo, úsalo con una meta clara. Y cuando alguien te da un dato, pregunta quién lo midió.",
    largo: "Jueves de controles y de letra chiquita. Google te deja limitar cuánto gasta tu campaña en Display, DoubleVerify dice que se compra menos en redes pero también tiene un negocio que cuidar, los estados de EE. UU. le ponen condiciones a quien compre Character.ai y, aquí en el patio, las remesas siguen arriba de mil millones de dólares al mes. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del viernes.",
    porDep: {
      medios: "Un control nuevo no es una estrategia. Antes de tocar el plan, decide qué canal sube, cuál baja y cómo vas a comprobar el resultado.",
      creatividad: "Sprite puso a una estrella a contar chistes que no pegan. Cuando el famoso es el gancho, dale algo que hacer y no solo que salga.",
      planning: "Un estudio de una empresa que vende medición se lee con lupa. Úsalo pa’ abrir la conversación, no pa’ cerrar el forecast.",
      data: "Antes de que un proveedor compre o herede datos de chats, pregunta qué consentimiento hay detrás y si el usuario puede borrar lo suyo.",
      content: "Si la plataforma empieza a marcar lo que hace la IA, tu equipo tiene que saber de antemano qué piezas lleva y cómo las va a presentar.",
      rd: "Con las remesas en US$1,057 millones en un solo mes, hay un consumidor con ingreso que viene de afuera. Pregúntate si tu mensaje le habla a esa familia."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Google Ads te deja topar el gasto en Display y socios de búsqueda · LG abre su pantalla de inicio a la compra con agentes de IA vía Magnite" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Sprite estrena «Never Stop Refreshing the Game» con Nikola Jokić · Polymarket contrata a Kathryn Bigelow pa’ su primera campaña política en EE. UU." },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "DoubleVerify: bajan las compras en redes de 30 % a 25 % · Google publica sus tendencias de disfraces pa’ Halloween" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "39 estados y DC le ponen nueve condiciones a cualquier comprador de Character.ai y de sus chats" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube Music marca con una etiqueta «AI» las canciones hechas con IA · TikTok firma con Made By Us pa’ sus microdramas" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "googledisplay", dep: "medios", peso: "principal",
      etiquetas: ["Google Ads", "Display", "Presupuesto"],
      titular: "Google Ads te deja ponerle tope al gasto en Display y en los socios de búsqueda",
      corto: "Google Ads: tope al gasto en Display",
      cuerpo: "Google anunció dos controles opcionales pa’ Search partners y la Red de Display. El primero ordena los canales en prioridad alta o baja y Google gasta primero en los de prioridad alta. El segundo pone un tope diario a los canales de prioridad baja, como porcentaje del presupuesto diario promedio: con 5 % de un presupuesto de $1,000, Google busca mantener Display en $50 al día o menos, y con 0 % no gasta ahí. Sirve en Search, Shopping y Performance Max; Demand Gen solo trae la prioridad. Se despliega poco a poco desde el 15 de octubre, y el soporte de API y Editor viene después. Ojo: Google lo llama un tope «de mejor esfuerzo», no un límite duro. Y desde febrero de 2027, las campañas de Search que usan Display pasan al sistema nuevo; Google sugiere Display en prioridad baja con 50 % pa’ quien quiera dejar todo como está.",
      cifras: [
        { v: "15 oct", t: "arranca el despliegue gradual de los controles" },
        { v: "5 % = $50", t: "ejemplo de Google: tope de Display con un presupuesto diario de $1,000" },
        { v: "Feb 2027", t: "las campañas de Search con Display migran al sistema nuevo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Display y los socios de búsqueda dejan de ser una caja negra que se come presupuesto: ahora puedes decidir cuánto. Pero el tope es de mejor esfuerzo y solo pesa cuando la campaña se queda corta de presupuesto, así que mide antes de cantar victoria.",
      hacer: "Esta semana, sacar el reporte de gasto por red de las cuentas de búsqueda más grandes, ver cuánto se va a Display y socios, y decidir con el cliente si pasan a prioridad baja antes de febrero.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-ads-lets-advertisers-cap-display-spend-on-a-best-effort-basis/" }]
    },
    {
      id: "lgmagnite", dep: "medios", peso: "secundaria",
      etiquetas: ["CTV", "LG", "Magnite", "Agentes de IA"],
      titular: "LG abre la pantalla de inicio de sus televisores a la compra con agentes de IA",
      corto: "LG abre su pantalla de inicio a agentes de IA",
      cuerpo: "LG Ad Solutions y Magnite extendieron su alianza por tres años. El inventario de la pantalla de inicio de LG podrá comprarse con agentes de IA a través del Seller Agent de Magnite, y SpringServe sigue como servidor exclusivo de anuncios de video CTV. La primera campaña la corrió la agencia H/L pa’ la Asociación de Dealers Toyota del Norte de California. El comunicado no da cifras de resultados, precios ni mercados. Según datos de LG, sin auditar, cerca de 97 % de los usuarios de sus televisores arranca en la pantalla de inicio.",
      cifras: [
        { v: "3 años", t: "extensión de la alianza entre LG Ad Solutions y Magnite" },
        { v: "~97 %", t: "de los usuarios de LG empieza en la pantalla de inicio (dato de LG, sin auditar)" }
      ],
      toca: "La compra con agentes ya llegó a la TV conectada. Todavía no hay resultados ni precios publicados, así que es pa’ seguirlo, no pa’ moverle el plan al cliente.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/lg-opens-home-screen-ads-to-magnites-ai-agent-in-three-year-deal/" }]
    },

    {
      id: "sprite", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Sprite", "NBA"],
      titular: "Sprite pone a Nikola Jokić a hacer stand-up y llevar su juego de la NBA a todo el mundo",
      corto: "Sprite pone a Jokić a contar chistes",
      cuerpo: "Sprite lanzó «Never Stop Refreshing the Game», con Nikola Jokić, tres veces MVP y campeón de la NBA, junto a Anthony Edwards. El anuncio de lanzamiento muestra a Jokić haciendo stand-up en un club oscuro, tomando Sprite y contando chistes que casi nadie celebra. La campaña junta el escenario grande de la NBA con las comunidades locales en todo el mundo, y la temporada 2026 arranca el 20 de octubre. El artículo no nombra la agencia ni da cifras de inversión o alcance.",
      cifras: [
        { v: "20 oct", t: "arranca la temporada 2026 de la NBA" },
        { v: "2", t: "estrellas de la campaña: Nikola Jokić y Anthony Edwards" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La gracia es que el famoso hace algo que no es lo suyo y que le sale medio mal, y eso lo vuelve simpático. Sirve de referente pa’ marcas que usan figuras del deporte y quieren salir del anuncio de siempre.",
      hacer: "Esta semana, en la reunión creativa, escoger un cliente con un embajador deportivo y esbozar una escena donde esa figura haga algo fuera de su cancha, en una sola frase.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/sprite-enlists-nikola-jokic-to-take-its-nba-play-worldwide/" }]
    },
    {
      id: "polymarket", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Polymarket", "Dirección"],
      titular: "Polymarket contrata a Kathryn Bigelow pa’ su primera campaña política en EE. UU.",
      corto: "Polymarket contrata a Kathryn Bigelow",
      cuerpo: "Polymarket, plataforma de mercados de predicción, lanzó el 14 de octubre su primera campaña política en EE. UU., a tres semanas de las elecciones de medio término. La ganadora del Óscar Kathryn Bigelow dirigió dos anuncios y el trío argentino Pantera dirigió el tercero; la producción es de Smuggler y el artículo no nombra agencia. Son tres escenas de ficción ligadas a preocupaciones de los votantes, como el alza de los precios del supermercado y la gasolina.",
      toca: "Un director de cine grande pa’ piezas cortas de ficción: es un referente de producción pa’ marcas que quieren que un anuncio se sienta como una película corta.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/polymarket-taps-kathryn-bigelow-to-court-a-wider-audience-in-midterm-ad-blitz/" }]
    },

    {
      id: "doubleverify", dep: "planning", peso: "principal",
      etiquetas: ["Social", "DoubleVerify", "Consumidor"],
      titular: "DoubleVerify: bajan las compras en redes sociales, de 30 % a 25 %, y también la influencia de los influencers",
      corto: "DoubleVerify: bajan las compras en redes",
      cuerpo: "La segunda edición del estudio de «walled gardens» de DoubleVerify, enviada a los mercadólogos el 14 de octubre, dice que 25 % de los consumidores compró en una red social en los últimos 12 meses, contra 30 % el año pasado. Los que dicen que los influencers afectan sus compras bajaron de 54 % a 48 %. Los mercadólogos citan el alcance de audiencia como su mayor reto en redes (40 %, antes 46 %). El formato que más empuja a actuar es el video corto (38 %). La encuesta, hecha en febrero de 2026 por Sapio Research, cubrió 22,000 consumidores en 21 países y 2,020 mercadólogos en 25. PPC Land advierte que las cifras de uso de plataformas no se pueden comparar con las de 2025 y que DoubleVerify está en proceso de ser adquirida por Nielsen, algo que el informe no menciona.",
      cifras: [
        { v: "25 %", t: "compró en una red social en 12 meses (30 % el año pasado)" },
        { v: "48 %", t: "dice que los influencers afectan sus compras (54 % el año pasado)" },
        { v: "38 %", t: "dice que el video corto es el formato que más lo mueve a actuar" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Sirve pa’ abrir la conversación sobre cuánto del embudo depende de comprar dentro de la red, pero es un estudio de una empresa que vende verificación y que está en medio de una adquisición. Contrástalo con datos locales antes de mover un forecast.",
      hacer: "Esta semana, tomar un cliente que vende por redes en RD y comparar sus ventas de redes del último trimestre con el trimestre anterior, antes de citar el dato de DoubleVerify en una propuesta.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/social-purchases-drop-to-25-from-30-doubleverify-surveys-show/" }]
    },
    {
      id: "frightgeist", dep: "planning", peso: "secundaria",
      etiquetas: ["Temporada", "Halloween", "Google"],
      titular: "Google publica lo que más busca la gente pa’ disfrazarse este Halloween",
      corto: "Google publica sus tendencias de Halloween",
      cuerpo: "Google publicó su Frightgeist 2026, el ranking de lo más buscado pa’ Halloween por región de EE. UU. Entre los disfraces inspirados en películas lideran Buddy the Unicorn, de la película de terror «Buddy», Nikki, de «Obsession», y Agamemnon, de la adaptación de «The Odyssey» de Christopher Nolan. También trae listas de disfraces infantiles, de mascotas y de parejas, las películas de terror más buscadas y un mapa de tendencias por estado. La nota no da volúmenes de búsqueda ni porcentajes.",
      toca: "Los datos son de EE. UU., no de RD, pero muestran cómo se arma una temporada con datos de búsqueda. Si tu cliente vende disfraces o fiestas, revisa qué se busca aquí antes de copiar la lista de afuera.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/google-shares-2026-halloween-trends/833051/" }]
    },

    {
      id: "characterai", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Character.ai", "Fiscales"],
      titular: "39 estados y DC le ponen nueve condiciones a cualquier comprador de Character.ai y de los chats de sus usuarios",
      corto: "Estados de EE. UU. le ponen condiciones a Character.ai",
      cuerpo: "Fiscales generales de 39 estados y el Distrito de Columbia presentaron el 14 de octubre, ante el tribunal de quiebras de Delaware, un aviso de 28 páginas con nueve condiciones pa’ quien compre Character.ai o los datos de sus usuarios. La empresa, Character Technologies, se acogió al Capítulo 11 el 12 de octubre. Entre las condiciones: verificar la edad sin depender solo de la fecha de nacimiento que da el usuario, pedir consentimiento antes de procesar datos sensibles como los de salud, respetar las exclusiones de publicidad a nivel de cuenta, limitar el uso de los chats pa’ entrenamiento o publicidad más allá de lo que el usuario aceptó, y dejar que todos los consumidores borren sus datos antes de la venta. Las ofertas vencen el 20 de noviembre, con subasta el 23 y audiencia de venta el 24. PPC Land señala que el aviso da más de 20 millones de usuarios mensuales, pero el director de la empresa habla de unos 12 millones en su declaración.",
      cifras: [
        { v: "39 + DC", t: "estados y el Distrito de Columbia que firman el aviso" },
        { v: "9", t: "condiciones pa’ cualquier comprador del negocio o de sus datos" },
        { v: "20 nov", t: "fecha límite pa’ las ofertas; subasta el 23 y audiencia el 24" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Los datos de conversaciones con un chatbot ya se miran como datos sensibles: quien los compre hereda las promesas que se le hicieron al usuario.",
        "Las exclusiones de publicidad por dispositivo no le bastan a los fiscales cuando el usuario tiene cuenta."
      ],
      hacer: "Esta semana, hacer una lista de las herramientas con chatbots que usa tu agencia con datos de clientes y confirmar por escrito, con cada proveedor, qué pasa con esos chats si la empresa se vende o quiebra.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/character-ai-faces-40-attorneys-general-over-who-can-buy-its-users-chats/" }]
    },

    {
      id: "youtubeia", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "IA", "Música"],
      titular: "YouTube Music le pone una etiqueta «AI» a las canciones hechas con inteligencia artificial",
      corto: "YouTube Music etiqueta las canciones hechas con IA",
      cuerpo: "YouTube añadió etiquetas pa’ la música generada con IA en la app YouTube Music y dice que las llevará también a la app principal. Las canciones que su sistema detecta como creadas «principalmente con IA generativa», por ejemplo cuando un modelo genera la composición y las voces, muestran una etiqueta «AI» que, al tocarla, abre una explicación sencilla. La detección usa herramientas internas de YouTube, que dice estar afinando con socios de la industria musical. El artículo recuerda que en Australia un remix hecho con IA de «Like a Prayer» llegó a lo más alto de las listas locales, y que ARIA respondió exigiendo que la música que entra en sus listas sea «sustancialmente hecha por humanos». La nota no explica qué tienen que hacer los creadores.",
      cifras: [
        { v: "«AI»", t: "etiqueta que se muestra en las canciones detectadas como hechas con IA" },
        { v: "2 apps", t: "YouTube Music ya la tiene y la app principal viene después" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si usas música hecha con IA en reels, cortos o anuncios de un cliente, esa etiqueta puede terminar visible pa’ la audiencia. Mejor saber de antemano qué piezas la llevan y cómo las vas a explicar.",
      hacer: "Esta semana, revisar de dónde viene la música de los videos de tus clientes en YouTube y apuntar cuáles usan canciones generadas con IA, pa’ decidir con el cliente si las dejan o las cambian.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-labels-ai-generated-music/833053/" }]
    },
    {
      id: "microdramas", dep: "content", peso: "secundaria",
      etiquetas: ["TikTok", "Microdramas", "Creadores"],
      titular: "TikTok firma con Made By Us Studios y sigue apostando a los microdramas",
      corto: "TikTok firma con Made By Us pa’ sus microdramas",
      cuerpo: "TikTok anunció una alianza con Made By Us Studios, que producirá una nueva tanda de microdramas pa’ la plataforma con creadores como Teyana Taylor, King Bach y Josh Peck. TikTok tendrá derechos exclusivos de parte del contenido y lo sumará a su biblioteca vertical en TikTok y en la app PineDrama. Las primeras series son un thriller de venganza romántica con Hannah Stocking y una serie de terror con Adam Rose. TikTok dice que «Screen Time», lanzada en abril, suma cerca de 580 millones de vistas globales.",
      cifras: [{ v: "~580M", t: "vistas globales de «Screen Time», según TikTok" }],
      toca: "El formato de series cortas verticales ya tiene inversión de estudio detrás. Si tu cliente cuenta historias, vale la pena mirar cómo se arma un episodio de un minuto antes de proponer uno.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-inks-microdrama-partnership-with-made-by-us-studios/833055/" }]
    },

    {
      id: "remesas", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Economía", "Consumo", "Banco Central"], fecha: "15 oct 2026",
      titular: "Las remesas pasan de US$1,057 millones en septiembre y suman US$9,489.8 millones en lo que va de año",
      corto: "Remesas: US$1,057 millones en septiembre",
      cuerpo: "Santo Domingo.— Según el Banco Central, las remesas de septiembre llegaron a US$1,057.1 millones, 6.6 % más que en septiembre de 2025, y ya son siete meses seguidos por encima de los US$1,000 millones. De enero a septiembre suman US$9,489.8 millones, US$577.1 millones (6.5 %) más que el año pasado. El 2025 cerró en un récord de US$11,866.3 millones y la proyección de 2026 supera los US$12,200 millones, aun con el impuesto de 1 % a los envíos en efectivo desde EE. UU. Estados Unidos aporta entre 80 % y 81.7 % del total. El artículo cita datos del BID que dicen que unos 400,000 hogares (12 %) reciben remesas, y trae cifras de crecimiento que no cuadran del todo con las del Banco Central, así que usamos solo las del Banco.",
      cifras: [
        { v: "US$1,057.1 M", t: "remesas de septiembre, +6.6 % anual" },
        { v: "US$9,489.8 M", t: "acumulado de enero a septiembre, +6.5 %" },
        { v: ">US$12,200 M", t: "proyección de 2026 que cita el artículo" },
        { v: "~400,000", t: "hogares que reciben remesas (12 %), según el BID citado" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "En Navidad y fin de año, muchas familias dominicanas cuentan con un dinero que viene de afuera. Eso pesa en consumo, en banca y en cualquier marca que quiera hablarle a quien recibe y a quien envía.",
      hacer: "Esta semana, revisar con los clientes de banca, retail y electrodomésticos si su plan de Q4 tiene un mensaje pa’ el hogar que recibe remesas, y ajustar el forecast con el dato del Banco Central.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/384940/el-flujo-de-remesas-desafia-la-incertidumbre-global/" }]
    },
    {
      id: "radio100", dep: "rd", peso: "secundaria", para: ["medios", "content", "creatividad"],
      etiquetas: ["Radio", "ADORA", "100 años"], fecha: "12–13 oct 2026",
      titular: "La radio dominicana celebra sus 100 años con un encuentro de ADORA",
      corto: "La radio dominicana cumple 100 años",
      cuerpo: "Santo Domingo.— La Asociación Dominicana de Radiodifusoras (ADORA) celebró el 12 y 13 de octubre, en el Hotel El Embajador, el centenario de la radio dominicana con paneles, charlas, un museo inmersivo, una feria de tecnología y transmisiones en vivo, bajo el lema «Conocimiento, Innovación y Proyección». Hablaron Rosa Olga Medrano, presidenta de ADORA, y Guido Gómez Mazara, presidente del Indotel. Uno de los paneles se tituló «La Radio del Futuro». El reportaje repasa la historia: la emisora oficial HIX se inauguró el 8 de abril de 1928 y Radio Guarachita, fundada en 1965, le dio espacio a la bachata.",
      toca: "El centenario pone la radio en conversación justo antes de la temporada alta. Pa’ medios es buen momento pa’ revisar cuánto de la pauta de Q4 va a radio, y pa’ creatividad, una oportunidad de contar historias con archivo y voces conocidas.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/radio/20261014/voces-recuerdos-radio-dominicana-celebra-100-anos_926093.html" }]
    },
    {
      id: "altice", dep: "rd", peso: "secundaria", para: ["creatividad", "medios", "content"],
      etiquetas: ["Campaña", "Altice", "Béisbol"], fecha: "14 oct 2026",
      titular: "Altice arranca la temporada de béisbol con promociones, concursos y un personaje renovado",
      corto: "Altice arranca su campaña de béisbol",
      cuerpo: "Santo Domingo.— Altice lanzó en su tienda de la Winston Churchill su campaña de la temporada de béisbol, con música, baile y firma de autógrafos de César Valdez, Ronny Mauricio y Adonis Medina, de los Tigres del Licey. Habrá concursos en redes pa’ ganar entradas, boletos 2×1 los martes y la posibilidad de ganar un asiento fijo pa’ los juegos del Round Robin pa’ quien combine el pospago móvil con la fibra óptica en un plan Todo Altice. Giselle Caputo, directora de comunicaciones, habló en el evento. También anunciaron un personaje renovado, «La Pelota te llama», un nuevo marco de pantalla en el Estadio Quisqueya y una campaña publicitaria de béisbol pa’ los próximos tres meses.",
      toca: "Una telecom en pleno Round Robin te enseña cómo se arma un plan alrededor de una temporada: concurso en redes, descuento semanal y un personaje de marca. Sirve de referente pa’ cualquier marca con presencia en el estadio.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/10/14/altice-se-une-a-la-temporada-de-beisbol/3689539" }]
    },
    {
      id: "aeropuertos", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "IDAC", "Aeropuertos"], fecha: "15 oct 2026",
      titular: "RD movió 16 millones de pasajeros por sus aeropuertos de enero a septiembre",
      corto: "RD movió 16 millones de pasajeros en 9 meses",
      cuerpo: "Santo Domingo.— Según el IDAC, de enero a septiembre de 2026 los aeropuertos dominicanos movieron 16,046,290 pasajeros en 171,517 operaciones. Punta Cana lidera con 9,067,973, seguido de Las Américas con 4,155,318 y el Cibao con 1,809,293. JetBlue fue la aerolínea con más pasajeros (2,951,218), seguida de American, Arajet y Delta. Marzo fue el mes más movido, con 2,073,648 pasajeros, y septiembre el más flojo, con 1,283,640.",
      cifras: [
        { v: "16,046,290", t: "pasajeros de enero a septiembre de 2026" },
        { v: "1,283,640", t: "pasajeros en septiembre, el mes más flojo" }
      ],
      toca: "Septiembre fue el mes más bajo, y de ahí en adelante arranca la temporada alta. Pa’ planning y medios, es el dato pa’ ubicar cuándo empuja el turismo en la pauta de Q4.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/384910/republica-dominicana-movio-a-16-millones-de-pasajeros-por-aeropuertos-en-9-meses/" }]
    },
    {
      id: "golf", dep: "rd", peso: "secundaria", para: ["planning", "content"],
      etiquetas: ["Turismo", "Mitur", "Golf"], fecha: "15 oct 2026",
      titular: "Uno de cada tres turistas deportivos en RD escoge el golf",
      corto: "Uno de cada tres turistas deportivos elige el golf",
      cuerpo: "La Romana.— Jean Carlos Navarro, coordinador de turismo deportivo del Mitur, dijo que uno de cada tres turistas que visitan RD por deporte escoge el golf, según encuestas de 2026 a turistas no residentes. Los golfistas calificaron su experiencia con 4.7 sobre 5, 74 % recomendaría el país y 87.2 % volvería. De enero a septiembre llegaron 9,241,246 visitantes, 7.5 % más que el año pasado. Del 15 al 18 de octubre se juega en Playa Nueva Romana el Dominican Republic Tour Championship, final de la temporada del PGA Tour Américas, por primera vez en el país.",
      cifras: [
        { v: "1 de cada 3", t: "turistas deportivos escoge el golf" },
        { v: "87.2 %", t: "de los golfistas encuestados dice que volvería" },
        { v: "15–18 oct", t: "Dominican Republic Tour Championship en Playa Nueva Romana" }
      ],
      toca: "El golf trae un turista que repite y recomienda. Pa’ planning es un público claro, y pa’ content, el torneo de este fin de semana es material pa’ clientes de turismo y de banca.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/384898/uno-de-cada-tres-turistas-deportivos-en-rd-elige-el-golf/" }]
    }
  ],

  pizarra: ["googledisplay", "sprite", "doubleverify", "characterai", "youtubeia", "remesas"],

  frases: [
    { dep: "medios", texto: "Google te deja decidir cuánto gasta tu campaña en Display, pero el tope es de mejor esfuerzo: poner el control es fácil, comprobar que se cumple es el trabajo.", uso: "para conversaciones de presupuesto y Google Ads" },
    { dep: "creatividad", texto: "Sprite no puso a Jokić a encestar: lo puso a contar chistes que no pegan, y de ahí sale la gracia.", uso: "para conversaciones de embajadores y figuras del deporte" },
    { dep: "planning", texto: "Según DoubleVerify, 25 % compró en redes el último año contra 30 % el anterior, pero lee la letra chiquita: es una empresa que vende verificación.", uso: "para conversaciones de social y consumo" },
    { dep: "data", texto: "Los fiscales de EE. UU. dicen que quien compre Character.ai hereda las promesas de privacidad que se le hicieron al usuario.", uso: "para conversaciones de datos y chatbots" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Tope al gasto en Display de Google Ads" },
      { id: "creatividad", texto: "Sprite y Jokić" },
      { id: "planning", texto: "DoubleVerify: bajan las compras en redes" },
      { id: "data", texto: "Condiciones a Character.ai" },
      { id: "content", texto: "YouTube Music etiqueta la IA" },
      { id: "rd", texto: "Zoom a RD: las remesas de septiembre" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "googledisplay", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "frightgeist", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Halloween está a dos semanas: Google ya publicó lo más buscado en EE. UU. Si tu cliente vende por temporada, revisa qué busca la gente en RD antes de copiar la lista de afuera."
    },
    data: {
      tipo: "secreto", nota: "characterai", titulo: "Destapa el expediente",
      texto: "Fiscales de [[39 estados y DC]] pusieron [[nueve condiciones]] a cualquier comprador de Character.ai o de los chats de sus usuarios."
    },
    rd: {
      tipo: "pregunta", nota: "remesas", titulo: "La pregunta del patio",
      p: "Según el Banco Central, ¿cuánto sumaron las remesas de enero a septiembre de 2026?",
      opciones: ["US$1,057.1 millones", "US$9,489.8 millones", "US$11,866.3 millones"],
      correcta: 1,
      explicacion: "Sumaron US$9,489.8 millones. Los US$1,057.1 millones son solo septiembre, y los US$11,866.3 millones son el récord de todo 2025."
    }
  }
};
