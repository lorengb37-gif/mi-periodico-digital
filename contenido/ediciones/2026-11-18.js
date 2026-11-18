/*
  El Pulso Publicitario · edición N.º 322 · 18 de noviembre de 2026
  ------------------------------------------------
  Estructura igual a la plantilla del 11 de septiembre (ediciones/2026-09-11.js).
*/
window.EDICION = {
  numero: 322,
  fechaISO: "2026-11-18",
  fecha: "Miércoles 18 de noviembre 2026",
  fechaCorta: "18 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Hoy el que mide con datos de compra y respeta el «no» del usuario es el que se queda con el presupuesto.",
    largo: "The Trade Desk quiere medir con compras reales y no con el último clic, California le cobró US$1.55 millones a Hertz por no hacerle caso a la señal de «no me rastrees» y Madison & Wall dice que la plata de creadores crece el doble que la publicidad. To’ apunta pa’l mismo lado: el cliente quiere pruebas de que su inversión vende, y quiere que se haga sin brincarse la privacidad de nadie. Aquí en el patio, Vladimir Guerrero Jr. se pone la franela del Licey y la pelota invernal se calienta justo en la temporada de más inversión. Escoge una de estas y conviértela en una tarea con dueño antes del viernes.",
    corto: "Mide con ventas, respeta el opt-out y pon a los creadores a producir. Una tarea con dueño antes del viernes.",
    porDep: {
      medios: "Antes de aceptar la medición que te ofrece la misma plataforma que te vende, pide la metodología por escrito.",
      creatividad: "Si el cliente tiene quejas encima, conviértelas en campaña: Burger King lo hizo con sus propios locales.",
      planning: "Separa en el plan del año lo que es pagarle al creador por publicar y lo que es pagarle por producir anuncios. Son dos líneas distintas.",
      data: "Abre el sitio del cliente con Global Privacy Control activado y mira qué etiquetas siguen cargando. Esa prueba toma diez minutos.",
      content: "Si tus videos originales se los copian, inscríbete en la protección de contenido de Instagram de una vez.",
      rd: "La pelota invernal está que arde: si tu cliente pauta en Lidom, este es el momento de pedir la tarifa y amarrar el espacio."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "The Trade Desk escoge a Attain pa’ su Open Measurement · Un anuncio de Meta ya carga hasta 5 posts · Nielsen: los anuncios navideños llegan cada vez más temprano" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Burger King le pide a la gente que diga cuál local hay que remodelar · Bumble pone a Alix Earle y Pete Davidson en una cita incómoda" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Madison & Wall: la inversión en creadores llega a US$116,000 millones y crece el doble que la publicidad · Triton: las noticias se llevan el 32 % del podcast en LATAM" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "California multa a Hertz por ignorar la señal GPC · Un experimento dice que AI Mode baja 18.8 puntos los clics a los sitios" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Instagram estrena protección de contenido pa’ creadores · El modo Task de Gemini se vuelve gratis en seis países" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Vladimir Guerrero Jr. pasa al Licey · Indotel: impuestos de 30 % y 32 % de la fuerza laboral sin destrezas digitales · Una dominicana preside Ibermedia · Coca-Cola prende su Navidad · Hoy es Día Nacional de la Familia" }
  },

  notas: [
    {
      id: "ttdattain", dep: "medios", peso: "principal",
      etiquetas: ["Medición", "The Trade Desk", "Programática"],
      titular: "The Trade Desk escoge a Attain pa’ medir con compras reales y no con el último clic",
      corto: "The Trade Desk va a medir con compras reales",
      cuerpo: "The Trade Desk nombró a Attain como su primer socio de datos pa’ Open Measurement, el marco de medición que piensa lanzar antes de que cierre este trimestre. Attain dice que conecta directo con más de 15 millones de consumidores a través de apps propias de finanzas personales y recompensas de compras, y cubre CPG, retail, comida rápida, viajes y e-commerce. La idea, según el anuncio del 17 de noviembre, es juzgar los medios de los publishers por las compras que generan y no por el último clic. Kristi Argyilan, de The Trade Desk, lo resumió así: «construido con transacciones reales». No se ha publicado la metodología, el precio ni si alguien externo va a auditar los resultados.",
      cifras: [
        { v: "15 millones", t: "de consumidores conectados a Attain mediante sus apps" },
        { v: "Q4 2026", t: "el trimestre en que se lanza Open Measurement" },
        { v: "5", t: "categorías cubiertas: CPG, retail, comida rápida, viajes y e-commerce" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si el DSP con el que compras empieza a calificar los medios con su propia regla, esa regla va a decidir dónde se mueve el presupuesto. Hay que entenderla antes de que el cliente la vea en un reporte.",
      hacer: "Pedirle esta semana al rep de The Trade Desk la ficha técnica de Open Measurement (metodología, mercados y si habrá auditoría externa) y anotar qué campañas de clientes de consumo masivo podrían entrar en la prueba.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/trade-desk-picks-attain-with-15-million-consumers-to-anchor-ad-measurement/" }]
    },
    {
      id: "meta5posts", dep: "medios", peso: "secundaria",
      etiquetas: ["Meta", "Paid social"],
      titular: "Un solo anuncio de Meta ya puede cargar hasta cinco posts orgánicos, y Meta escoge cuál ve cada quien",
      corto: "Meta: un anuncio, hasta 5 posts",
      cuerpo: "En la opción «Usar publicaciones existentes» de Ads Manager ya se pueden meter hasta cinco posts en un mismo anuncio, cuando antes era uno. Según el aviso de la herramienta, Meta le enseña a cada persona el post con el que más probablemente va a interactuar. El cambio lo reportó el 17 de noviembre Bram Van der Hallen en LinkedIn; no hay comunicado de Meta ni se sabe si el reporte va a mostrar los resultados de cada post.",
      cifras: [{ v: "5", t: "posts existentes por anuncio, antes 1" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Menos anuncios que montar, pero también menos control: la plataforma decide qué post se pauta. Revisa si puedes ver el resultado de cada uno antes de usarlo en cuentas grandes.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/one-meta-ad-can-now-carry-up-to-5-existing-posts/" }]
    },
    {
      id: "nielsenholiday", dep: "medios", peso: "secundaria",
      etiquetas: ["TV", "Navidad", "Nielsen"],
      titular: "Nielsen: los anuncios navideños llegan cada vez más temprano, y el retail manda",
      cuerpo: "Un análisis de Nielsen encontró que en septiembre corrieron seis veces más anuncios navideños que en el mismo período de 2021, y 11 % más que en septiembre de 2025. En octubre, el 63.7 % de los anuncios navideños vino del retail, una categoría que se ha llevado en promedio el 45 % de la inversión de TV lineal en los últimos cinco años. Más de un tercio de esos anuncios mencionó ofertas de Black Friday o Cyber Monday.",
      cifras: [
        { v: "6x", t: "anuncios navideños en septiembre vs. 2021" },
        { v: "63.7 %", t: "de los anuncios navideños de octubre fueron de retail" }
      ],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/holiday-tv-ads-from-retailers-arrive-earlier-more-frequently-in-2026/874883/" }]
    },

    {
      id: "burgerking", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Burger King", "Feedback"],
      titular: "Burger King le pregunta a la gente cuál de sus locales hay que arreglar, y lo hace campaña",
      corto: "Burger King: dime qué local arreglo",
      cuerpo: "Burger King lanzó «Rebuild My BK», una campaña que le pide al público que señale qué restaurantes necesitan remodelación. Trae un micrositio pa’ recoger opiniones y un spot de 60 segundos donde su presidente, Tom Curtis, recorre el país, habla con clientes y hasta se mete en la construcción. Según la cadena, ya remodeló más del 60 % de sus locales. Antes había regalado el teléfono de Curtis, que recibió 120,000 llamadas. La campaña corre hasta el 5 de enero y los miembros de Royal Perks ganan 100 Crowns por participar.",
      cifras: [
        { v: "60 seg", t: "duración del spot con el presidente de la marca" },
        { v: "120,000", t: "llamadas que recibió el teléfono de Tom Curtis" },
        { v: "+60 %", t: "de los locales ya remodelados" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Burger King cogió su punto débil, locales viejos, y lo volvió la idea. Cuando la queja ya está en la calle, decirla tú primero y enseñar el arreglo gana más confianza que esconderla.",
      hacer: "En la próxima sesión creativa, escoger un cliente con una queja conocida (servicio, tiempos, locales) y bocetar una idea donde la marca pida opinión en público y enseñe qué va a cambiar.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/burger-kings-push-for-consumer-feedback-takes-aim-at-its-own-restaurants/874704/" }]
    },
    {
      id: "bumble", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Bumble", "Creadores"],
      titular: "Bumble pone a Alix Earle en una cita incómoda con Pete Davidson, y la campaña la creó ella misma",
      corto: "Bumble estrena campaña con Alix Earle",
      cuerpo: "Bumble lanzó el 16 de noviembre una campaña cocreada con la creadora Alix Earle y OBB Bolded, el estudio de contenido de marca de OBB Media. En el video, Earle sale con Pete Davidson, que hace de un hombre que no quiere lo mismo que ella; después se desahoga con sus amigas en «The Situationship Room» y ellas la mandan pa’ Bumble. Cierra con «I’m on Bumble. Are You?» y se mueve en las redes de Earle y de Bumble. Llega cinco semanas después del acuerdo pa’ vender la empresa por unos US$1,300 millones, con los usuarios pagos bajando 14 % en el tercer trimestre.",
      cifras: [
        { v: "−14 %", t: "usuarios pagos de Bumble en el tercer trimestre, interanual" },
        { v: "72 horas", t: "nuevo plazo pa’ responder un match, antes 24" }
      ],
      fuentes: [{ nombre: "DesignRush", url: "https://news.designrush.com/bumble-alix-earle-obb-bolded-pete-davidson-campaign" }]
    },

    {
      id: "creadores116", dep: "planning", peso: "principal",
      etiquetas: ["Creadores", "Inversión", "Forecast"],
      titular: "La inversión en creadores llega a US$116,000 millones y crece el doble que la publicidad",
      corto: "Creadores: US$116,000M y creciendo al doble",
      cuerpo: "Madison & Wall estima que las marcas van a gastar US$116,000 millones en creadores en 2026, y que esa inversión va a crecer 12 % al año hasta 2030, contra 6 % de la publicidad en general. El 44 % (US$52,000 millones) es pauta pa’ amplificar contenido de creadores, el 28 % son posts patrocinados y embajadores, y el 12 % es pagarle al creador pa’ que produzca anuncios que corren en CTV, display y social pagado: ese es el segmento que más rápido crece, a 16 % al año. Según Luke Stillman, de Madison & Wall, las marcas lo hacen «porque es más barato».",
      cifras: [
        { v: "US$116,000M", t: "inversión global en creadores en 2026" },
        { v: "12 % vs. 6 %", t: "crecimiento anual de creadores vs. publicidad total hasta 2030" },
        { v: "+16 %", t: "al año: creadores produciendo anuncios, el segmento más rápido" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "El creador ya no es solo un canal: también es un proveedor de piezas. Eso cambia cómo se reparte el presupuesto entre producción, pauta y talento.",
      hacer: "Separar en el plan 2027 de cada cliente tres líneas: pagar al creador por publicar, pagar por producir piezas y pautar ese contenido. Presentarlo así en la próxima revisión de presupuesto.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/brands-booking-creators-to-make-their-ads-are-pushing-up-116b-global-influencer-market/" }]
    },
    {
      id: "tritonlatam", dep: "planning", peso: "secundaria",
      etiquetas: ["Audio", "Podcast", "LATAM"],
      titular: "Triton: en América Latina el podcast es de noticias, que se llevan el 32 % de las descargas",
      corto: "En LATAM el podcast es de noticias",
      cuerpo: "El 2026 LATAM Audio Insights Report de Triton Digital, con datos de enero a agosto, dice que las noticias se llevan el 32 % de las descargas de podcast y el 42 % de los episodios nuevos. Les siguen ficción (16 %), comedia (15 %) y deportes (10 %). Prisa Radio es la red que más vende, con 2.47 millones de descargas semanales promedio. El 53 % de los podcasts está en español y el 49 % del streaming de audio se escucha en el celular.",
      cifras: [
        { v: "32 %", t: "de las descargas de podcast son de noticias" },
        { v: "53 %", t: "de los podcasts medidos están en español" },
        { v: "49 %", t: "del streaming de audio se escucha en el celular" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/news-takes-32-of-latin-american-podcast-listening-triton-finds/" }]
    },

    {
      id: "hertzgpc", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "California", "GPC"],
      titular: "California le cobra US$1.55 millones a Hertz por no hacerle caso a la señal de «no me rastrees»",
      corto: "California multa a Hertz por ignorar el GPC",
      cuerpo: "La agencia de privacidad de California (CalPrivacy) anunció el 17 de noviembre una multa de US$1,550,000 a Hertz, que cubre también Dollar y Thrifty. Durante parte del período entre julio de 2023 y agosto de 2026, sus sitios no respetaron señales de exclusión como Global Privacy Control (GPC). En Dollar.com y Thrifty.com, el panel de cookies volvía a permitir las de publicidad si el usuario no tocaba «Guardar cambios». La orden nombra etiquetas de 13 empresas, entre ellas Meta, Google, TikTok y The Trade Desk, aunque no las acusa. Hertz no admitió responsabilidad y tendrá que revisar sus etiquetas cada trimestre hasta noviembre de 2029.",
      cifras: [
        { v: "US$1.55M", t: "multa a Hertz, Dollar y Thrifty" },
        { v: "13", t: "empresas de ad tech con etiquetas en sus sitios" },
        { v: "2029", t: "año hasta el que debe auditar sus etiquetas cada trimestre" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Las autoridades ya no solo miran el banner de cookies: prueban si las etiquetas se apagan cuando el navegador dice que no.",
        "La multa le cae al anunciante, aunque las etiquetas sean de las plataformas. La responsabilidad está en el sitio del cliente."
      ],
      hacer: "Esta semana, abrir el sitio de cada cliente con Global Privacy Control activado y anotar qué etiquetas de publicidad siguen cargando. Mandarle el resultado al equipo web con prioridad para los que venden en EE. UU.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/california-fines-hertz-1-55m-over-unprocessed-browser-opt-out-signals/" }]
    },
    {
      id: "aimodeclics", dep: "data", peso: "secundaria",
      etiquetas: ["Búsqueda", "Google", "IA"],
      titular: "Un experimento dice que AI Mode baja 18.8 puntos los clics a los sitios",
      corto: "AI Mode baja 18.8 puntos los clics",
      cuerpo: "Investigadores de la Universidad de Pensilvania y Northeastern pusieron a 1,100 usuarios de EE. UU. a buscar durante una semana con AI Mode, con la búsqueda normal o sin IA. Los de AI Mode hicieron 18.8 puntos porcentuales menos de clics a sitios externos y fueron 11.2 puntos más propensos a buscar en Bing, DuckDuckGo o Yahoo. Es un preprint sin revisión de pares, con una muestra más joven que la población, y se hizo en marzo.",
      cifras: [
        { v: "−18.8 pts", t: "clics a sitios externos con AI Mode" },
        { v: "1,100", t: "usuarios en la muestra" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/googles-ai-mode-cuts-clicks-to-websites-by-18-8-points-field-test-finds/" }]
    },

    {
      id: "igproteccion", dep: "content", peso: "principal",
      etiquetas: ["Instagram", "Creadores", "Derechos"],
      titular: "Instagram estrena protección de contenido: te avisa cuando alguien resube tu video",
      corto: "Instagram te avisa si te copian el video",
      cuerpo: "Meta llevó a Instagram la protección de contenido que ya tenía Facebook. Los creadores elegibles que se inscriban tendrán un sistema que busca coincidencias visuales de sus videos originales en Instagram y Facebook, les avisa cuando encuentra una copia y les deja decidir qué hacer. Queda la duda de cómo va a manejar las copias hechas con IA, que le cambian el fondo o los personajes al video original; Adam Mosseri ya dijo que le preocupa y que es un problema complicado.",
      cifras: [
        { v: "2", t: "apps vigiladas: Instagram y Facebook" },
        { v: "Por inscripción", t: "solo pa’ creadores elegibles que se apunten" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si tu marca o tus creadores hacen videos originales, ahora hay una forma de enterarse rápido cuando los copian. Pero las versiones hechas con IA todavía pueden pasar sin que nadie las detecte.",
      hacer: "Revisar esta semana si las cuentas de los clientes y de sus creadores fijos son elegibles, inscribirlas en la protección de contenido y definir quién recibe las alertas y qué se hace con cada copia.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-expands-content-protection-to-instagram/874965/" }]
    },
    {
      id: "geminitask", dep: "content", peso: "secundaria",
      etiquetas: ["IA", "Gemini", "Agentes"],
      titular: "El modo Task de Gemini, que costaba US$19.99, se vuelve gratis en seis países",
      corto: "Gemini Task, gratis en seis países",
      cuerpo: "Google abrió gratis el modo Task de la app de Gemini en EE. UU., Japón, Corea del Sur, Canadá, Australia e India; antes era solo pa’ suscriptores de pago. Con él, Gemini puede reservar citas, comparar y comprar productos, manejar pedidos del súper y organizar fechas a partir de correos reenviados. En EE. UU. también llama a negocios diciendo que es una IA, y paga con tokens de Visa y Mastercard. RD no está en la lista por ahora.",
      cifras: [
        { v: "6", t: "países donde el modo Task ya es gratis" },
        { v: "US$19.99", t: "precio del plan que antes hacía falta" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/geminis-19-99-task-mode-goes-free-in-6-countries/" }]
    },

    {
      id: "vladlicey", dep: "rd", peso: "principal", para: ["medios", "content"],
      etiquetas: ["Lidom", "Deportes", "Licey"], fecha: "17 nov 2026",
      titular: "Bombazo en Lidom: Vladimir Guerrero Jr. se va pa’l Licey",
      corto: "Vladimir Guerrero Jr. se va pa’l Licey",
      cuerpo: "Los Tigres del Licey adquirieron al inicialista de Grandes Ligas Vladimir Guerrero Jr. en un cambio con los Toros del Este, a cambio de los relevistas Misael Tamárez y Cam Robinson. El jugador de los Azulejos de Toronto tiene cinco Juegos de Estrellas, dos Bates de Plata y un Guante de Oro, y en 2025 fue el Jugador Más Valioso de la Serie de Campeonato de la Liga Americana. Ya conoce la pelota invernal: en la temporada 2020-21 jugó 10 partidos con el Escogido.",
      cifras: [
        { v: "2", t: "relevistas que mandó el Licey a los Toros" },
        { v: "5", t: "Juegos de Estrellas de Guerrero Jr. (2021-2025)" },
        { v: "US$500M", t: "su contrato de 14 años con Toronto" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Una estrella de ese tamaño en el Licey le sube la conversación y la audiencia a los juegos, justo en la temporada de más inversión del año. Las marcas que ya pautan en pelota tienen un gancho nuevo.",
      hacer: "Llamar esta semana a los canales que transmiten al Licey pa’ preguntar por paquetes en los juegos donde salga Guerrero Jr., y proponerle a un cliente de consumo masivo contenido en redes con la noticia del cambio.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/deportes/beisbol/2026/11/17/licey-adquiere-a-vladimir-guerrero-jr-en-un-cambio-con-los-toros/3723773" }]
    },
    {
      id: "indotel", dep: "rd", peso: "secundaria", para: ["data", "planning"],
      etiquetas: ["Indotel", "Telecom", "Economía digital"], fecha: "17 nov 2026",
      titular: "Indotel: las telecom pagan cerca del 30 % en impuestos y el 32 % de los trabajadores no sabe na’ de tecnología",
      corto: "Indotel pide revisar impuestos a las telecom",
      cuerpo: "En el Foro Económico elDinero 2026, Guido Gómez Mazara, presidente del Indotel, dijo que la carga impositiva de las telecomunicaciones puede llegar a cerca del 30 %, contra un promedio de 15 % en América Latina, y que una propuesta pa’ modernizar la ley del sector, que es de 1998, está en el despacho del consultor jurídico del Poder Ejecutivo. En el mismo panel dijo que el 32 % de la fuerza laboral dominicana no tiene ningún conocimiento tecnológico y que el país está muy conectado, pero le falta una «conectividad significativa».",
      cifras: [
        { v: "≈30 %", t: "carga impositiva de las telecom en RD, según Indotel" },
        { v: "15 %", t: "promedio de América Latina que citó Gómez Mazara" },
        { v: "32 %", t: "de la fuerza laboral sin conocimientos tecnológicos" }
      ],
      fuentes: [
        { nombre: "El Dinero", url: "https://eldinero.com.do/389001/indotel-identifica-la-alta-carga-impositiva-como-principal-obstaculo-para-desarrollo-de-las-telecomunicaciones/" },
        { nombre: "El Dinero", url: "https://eldinero.com.do/389004/el-32-de-la-fuerza-laboral-dominicana-carece-de-conocimientos-digitales-advierte-guido-mazara/" }
      ]
    },
    {
      id: "ibermedia", dep: "rd", peso: "secundaria", para: ["creatividad"],
      etiquetas: ["Cine", "Audiovisual"], fecha: "18 nov 2026",
      titular: "Wepa: Marianna Vargas, de la DGCine, va a presidir Ibermedia",
      cuerpo: "La directora general de Cine de la República Dominicana, Marianna Vargas Gurilieva, fue elegida presidenta del Programa Ibermedia pa’l período 2026-2028. Ibermedia es uno de los principales mecanismos de cooperación cinematográfica y audiovisual de Iberoamérica y lo integran 21 países.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Más peso dominicano en la cooperación audiovisual de la región puede traer coproducciones y más trabajo pa’ las productoras locales que también hacen publicidad.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/marianna-vargas-directora-general-de-cine-de-la-republica-dominicana-asume-la-presidencia-de-ibermedia/" }]
    },
    {
      id: "cocacolaarbol", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Navidad", "Coca-Cola", "Experiencial"], fecha: "15 nov 2026",
      titular: "Coca-Cola prende su árbol en la Plaza España y vuelve el video mapping en el Alcázar",
      cuerpo: "El Sistema Coca-Cola encendió su árbol de Navidad el domingo 15 de noviembre en la Plaza España de la Zona Colonial, con Manny Cruz en tarima, pa’ arrancar su temporada en el país. Este año vuelve el video mapping en el Alcázar de Colón los fines de semana, y la agenda sigue con actividades en centros comerciales y espacios públicos de Santo Domingo y Santiago.",
      fuentes: [{ nombre: "El Día", url: "https://eldia.com.do/coca-cola-invita-a-las-familias-encendido-de-su-arbol/" }]
    },
    {
      id: "diafamilia", dep: "rd", peso: "secundaria", para: ["content"],
      etiquetas: ["Calendario", "Efemérides"], fecha: "18 nov 2026",
      titular: "Hoy es Día Nacional de la Familia: fecha pa’l calendario de redes",
      cuerpo: "Cada 18 de noviembre República Dominicana celebra el Día Nacional de la Familia, dedicado a reconocer el papel del núcleo familiar en la formación de valores, la educación y el desarrollo de las personas.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Es una fecha que cae justo antes de la temporada navideña y encaja con las marcas que hablan de reuniones y hogar. Si no estaba en el calendario, todavía se puede hacer un post sencillo hoy.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/hoy-es-dia-nacional-de-la-familia/" }]
    }
  ],

  pizarra: ["ttdattain", "burgerking", "creadores116", "hertzgpc", "igproteccion", "vladlicey"],

  frases: [
    { dep: "medios", texto: "The Trade Desk quiere medir con compras reales: la pregunta es quién audita la regla cuando el que mide es el mismo que vende.", uso: "para conversaciones de medición y programática" },
    { dep: "data", texto: "A Hertz no la multaron por el banner de cookies: la multaron porque las etiquetas seguían prendidas después de que el usuario dijo que no.", uso: "para conversaciones de privacidad y etiquetas" },
    { dep: "planning", texto: "La plata de creadores crece 12 % al año y la publicidad 6 %. El creador ya no es solo un canal, también es un productor.", uso: "para conversaciones de presupuesto 2027" },
    { dep: "creatividad", texto: "Burger King cogió su punto débil, los locales viejos, y lo convirtió en campaña pidiéndole opinión a la gente.", uso: "para conversaciones de reputación y marca" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "The Trade Desk mide con compras" },
      { id: "creatividad", texto: "Rebuild My BK de Burger King" },
      { id: "planning", texto: "US$116,000M en creadores" },
      { id: "data", texto: "La multa a Hertz por el GPC" },
      { id: "content", texto: "La protección de contenido de Instagram" },
      { id: "rd", texto: "Zoom a RD: Vladimir Guerrero Jr. al Licey" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "ttdattain", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "creadores116", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Noviembre es mes de cerrar el plan 2027. La inversión en creadores crece 12 % al año, el doble que la publicidad: separa en el presupuesto lo que es publicar, producir y pautar."
    },
    data: {
      tipo: "secreto", nota: "hertzgpc", titulo: "Destapa el expediente",
      texto: "California le cobró a Hertz [[US$1,550,000]] por no respetar Global Privacy Control, y tendrá que revisar sus etiquetas cada trimestre hasta [[noviembre de 2029]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "geminitask", titulo: "Arma tu pedido pa’l modo Task",
      intro: "Con el modo Task de Gemini, ayúdame con lo siguiente:",
      opciones: [
        "Compara precios de tres productos que necesito pa’ una sesión de fotos",
        "Organiza en mi calendario las fechas de los correos que te reenvié",
        "Reserva una cita y confírmame antes de pagar cualquier cosa"
      ],
      cierre: "Pregúntame antes de hacer cualquier compra y dime qué pasos no pudiste completar."
    },
    rd: {
      tipo: "pregunta", nota: "vladlicey", titulo: "La pregunta del patio",
      p: "¿De qué equipo llegó Vladimir Guerrero Jr. al Licey?",
      opciones: ["Leones del Escogido", "Toros del Este", "Águilas Cibaeñas"], correcta: 1,
      explicacion: "Llegó de los Toros del Este a cambio de los relevistas Misael Tamárez y Cam Robinson. Con el Escogido jugó 10 partidos en la temporada 2020-21."
    }
  }
};
