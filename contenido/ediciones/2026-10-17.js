/*
  El Pulso Publicitario · edición N.º 290 · 17 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 290,
  fechaISO: "2026-10-17",
  fecha: "Sábado 17 de octubre 2026",
  fechaCorta: "17 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Las plataformas están cambiando las reglas con fecha de entrega: lee la letra chiquita y decide tú antes de que decidan por ti.",
    largo: "Sábado de letra chiquita. Google te deja ponerle tope al gasto de Display y de socios de búsqueda (aunque sea «a mejor esfuerzo»), Meta se reserva el derecho de rastrear las webs de tus clientes pa’ entrenar su IA desde el 30 de octubre, YouTube etiqueta la música hecha con IA y, aquí en el patio, el golf internacional aterriza en Playa Nueva Romana. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del lunes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del lunes.",
    porDep: {
      medios: "Un tope de gasto que es «a mejor esfuerzo» no es un tope. Ponlo, pero vigila el reporte diario.",
      creatividad: "Cuando la broma es que nadie se ríe, el ídolo tiene que tener el timing. Escoge bien quién carga el chiste.",
      planning: "Un pronóstico de Navidad sirve pa’ ubicarte, no pa’ copiarlo. Contrástalo con lo que vende tu cliente en RD.",
      data: "Si tu cliente acepta los términos de una plataforma sin leerlos, también acepta lo que viene en ellos. Léelos tú primero.",
      content: "Si la gente quiere saber qué es hecho con IA, tu marca gana cuando lo dice primero y con claridad.",
      rd: "El turismo deportivo llega con plan de varios días. Pregúntale a tu cliente qué le ofrece a ese visitante cuando no está jugando."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Google Ads deja poner un tope a Display y a socios de búsqueda · El Universal Cart de Google llega a compradores en EE. UU." },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Sprite pone a Jokić a contar chistes que no hacen reír · Twix y Rivian entran a la ronda de anuncios de Halloween" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Adobe proyecta US$275.1 mil millones en compras navideñas en línea · Google comparte los disfraces de Halloween que más se buscan" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Meta se da derecho de rastrear webs de anunciantes pa’ entrenar IA desde el 30 de octubre · Google recuperará conversiones sin atribuir con datos de sesión" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube Music etiqueta la música hecha con IA · LinkedIn prueba anuncios previos en videos de creadores" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "displaycap", dep: "medios", peso: "principal",
      etiquetas: ["Google Ads", "Display", "Presupuesto"],
      titular: "Google Ads te deja ponerle tope al gasto de Display y de los socios de búsqueda",
      corto: "Google Ads deja poner tope a Display y socios",
      cuerpo: "Google anunció el 14 de octubre dos controles nuevos en Google Ads. La «priorización de canales» deja marcar la Red de Display y los socios de búsqueda como prioridad baja, y Google financia primero los de prioridad alta. La «asignación de presupuesto» fija un tope diario pa’ esos canales como porcentaje del presupuesto diario promedio. Con un 5 % sobre un presupuesto de US$1,000, la meta es no pasar de US$50 al día; con 0 %, el canal no gasta. Aplica a Search, Shopping y Performance Max, y la priorización también a Demand Gen. El despliegue empezó el 15 de octubre, pero el tope es «a mejor esfuerzo»: Google dice que «aspira» a mantenerse dentro del límite. Desde febrero de 2027, las campañas de Search que usan Display pasarán al sistema nuevo.",
      cifras: [
        { v: "5 % = US$50", t: "ejemplo de Google: tope diario sobre un presupuesto de US$1,000" },
        { v: "0 %", t: "detiene por completo el gasto en ese canal" },
        { v: "Feb 2027", t: "las campañas de Search con Display migran al sistema nuevo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Es una palanca que muchos pedían pa’ no regalar presupuesto a canales flojos. Pero el tope es de mejor esfuerzo, no una pared, y solo cambia algo cuando la campaña se queda corta de presupuesto. No se puede poner desde cuentas de administrador.",
      hacer: "Esta semana, revisar en qué campañas de Search y Performance Max de los clientes se está yendo gasto a Display y a socios de búsqueda, y probar en una cuenta un tope bajo (por ejemplo 5 %) para comparar el resultado.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-ads-lets-advertisers-cap-display-spend-on-a-best-effort-basis/" }]
    },
    {
      id: "universalcart", dep: "medios", peso: "secundaria",
      etiquetas: ["Google", "Compras", "Gemini"],
      titular: "El Universal Cart de Google llega a los compradores de EE. UU. sin YouTube ni Gmail",
      corto: "Google lanza el Universal Cart en EE. UU.",
      cuerpo: "Google empezó el 15 de octubre a desplegar el Universal Cart en Search (incluido AI Mode) y en la app de Gemini, en EE. UU. El carrito junta productos de varias tiendas, vigila precio e inventario y avisa de bajadas de precio. El pago va por Google Pay o pasa el carrito al comercio con el Universal Commerce Protocol. Entre los comercios nombrados están Nike, Sephora, Target, Ulta Beauty, Walmart y Wayfair. Google lo presentó en mayo y prometió un lanzamiento de verano; llegó cinco meses después y sin YouTube ni Gmail. El anuncio no habla de comisiones, de cómo se ordenan los productos ni de cuántos comercios participan.",
      cifras: [
        { v: "60 mil millones", t: "de listados en el Shopping Graph que alimenta el carrito" },
        { v: "15 oct", t: "inicio del despliegue en EE. UU." }
      ],
      toca: "Si tu cliente vende en línea en EE. UU., el carrito cambia dónde se decide la compra. Por ahora no hay datos de comisiones ni de ranking, así que se sigue de cerca, no se actúa todavía.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/googles-universal-cart-reaches-us-shoppers-as-meta-flips-browsing-on/" }]
    },

    {
      id: "jokic", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Sprite", "NBA"],
      titular: "Sprite pone a Nikola Jokić en un club de comedia donde nadie se ríe",
      corto: "Sprite pone a Jokić a contar chistes",
      cuerpo: "Sprite lanzó «Never Stop Refreshing the Game» con Nikola Jokić, tres veces MVP de la NBA, justo antes de que arranque la temporada el 20 de octubre. Jokić se suma a Anthony Edwards en la campaña. El anuncio lo muestra en un club de comedia oscuro: sube a la tarima, toma un sorbo de Sprite y cuenta chistes que el público apenas celebra, un juego con su apodo. Adweek lo presenta como un empujón mundial que junta la vitrina de la NBA con las comunidades locales. El artículo no nombra la agencia.",
      cifras: [
        { v: "20 oct", t: "arranque de la temporada 2026 de la NBA" },
        { v: "3", t: "premios MVP de Nikola Jokić" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "El chiste funciona porque el ídolo se burla de sí mismo y porque la situación se entiende sin explicación. Es un buen referente pa’ marcas que usan figuras deportivas y quieren humor sin forzar.",
      hacer: "Esta semana, en la sesión creativa, tomar un cliente con embajador deportivo y esbozar un guion donde el atleta quede fuera de su zona de confort, en una escena que se entienda sin texto.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/sprite-enlists-nikola-jokic-to-take-its-nba-play-worldwide/" }]
    },
    {
      id: "halloween", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Halloween", "Twix", "Rivian"],
      titular: "Twix regresa con su Zombie Claus y Rivian trae de vuelta a Bill Murray en la ronda de anuncios de Halloween",
      corto: "Twix y Rivian entran a la ronda de Halloween",
      cuerpo: "La lista de Adweek de anuncios de Halloween 2026 incluye a Twix, que regresa con el personaje Zombie Claus para celebrar «Hallowmas», y a Rivian, que trae de vuelta a Bill Murray en un anuncio inspirado en Ghostbusters. También aparecen Pringles, Reese’s y e.l.f. El artículo no nombra las agencias ni da más detalles de cada pieza.",
      toca: "Los personajes que regresan año tras año arrancan con la audiencia ya ganada. Sirve de referente pa’ pensar cuál personaje o gancho de tu cliente se puede repetir en temporada.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/the-2026-halloween-ads-worth-screaming-about/" }]
    },

    {
      id: "adobeholiday", dep: "planning", peso: "principal",
      etiquetas: ["Navidad", "Adobe", "E-commerce"],
      titular: "Adobe proyecta US$275.1 mil millones en compras navideñas en línea en EE. UU., y Black Friday sube 9.2 %",
      corto: "Adobe proyecta US$275.1 mil millones navideños",
      cuerpo: "Adobe corrigió el 16 de octubre una frase de su pronóstico navideño del 28 de septiembre sobre el evento de octubre de Amazon; las cifras no cambiaron. El pronóstico dice que las compras en línea en EE. UU. del 1 de noviembre al 31 de diciembre llegarán a US$275.1 mil millones, un 6.7 % más que el año pasado. La Cyber Week sumaría US$47.5 mil millones (+7.4 %), el Black Friday US$12.9 mil millones (+9.2 %) y el Cyber Monday (30 de noviembre) US$15.1 mil millones (+6.2 %). El celular pesaría 57.4 % del gasto. PPC Land anota que las cifras de descuentos del texto no cuadran del todo con las del gráfico, y que en el evento del 6 y 7 de octubre el crecimiento real (cerca de 8.5 %) quedó debajo del 9.2 % pronosticado.",
      cifras: [
        { v: "US$275.1 mil M", t: "compras navideñas en línea proyectadas en EE. UU., +6.7 %" },
        { v: "+9.2 %", t: "crecimiento proyectado del Black Friday (US$12.9 mil millones)" },
        { v: "57.4 %", t: "del gasto navideño sería desde el celular" },
        { v: "~8.5 %", t: "crecimiento real del evento del 6 y 7 de octubre, contra 9.2 % pronosticado" }
      ],
      hacer: "Esta semana, tomar a dos clientes con tienda en línea y comparar sus ventas del Black Friday pasado con este crecimiento proyectado, usando como guía la caída del pronóstico a lo real en octubre, y ajustar el forecast con un rango en vez de un solo número.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/adobes-275-1bn-holiday-forecast-gets-a-correction-not-new-numbers/" }]
    },
    {
      id: "frightgeist", dep: "planning", peso: "secundaria",
      etiquetas: ["Halloween", "Google", "Búsqueda"],
      titular: "Google comparte los disfraces de Halloween que más se buscan este año",
      corto: "Google comparte sus tendencias de Halloween",
      cuerpo: "Google publicó su Frightgeist 2026, con los disfraces más buscados por región de EE. UU. Entre los de películas están Buddy the Unicorn, de la película de terror «Buddy», Nikki, de «Obsession», y Agamemnon, de la versión de «La Odisea» de Christopher Nolan. También trae listas de disfraces para niños, mascotas y parejas, y un mapa de tendencias por estado. Social Media Today anota que no hay cifras de volumen y que el interés de búsqueda no es lo mismo que ventas.",
      toca: "Es un termómetro de cultura pop, no de ventas, y es de EE. UU. Sirve pa’ ideas de contenido de temporada, no pa’ proyectar compras en RD.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/google-shares-2026-halloween-trends/833051/" }]
    },

    {
      id: "metacrawl", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Meta", "Términos"],
      titular: "Meta se da derecho de rastrear las webs de los anunciantes pa’ entrenar su IA, desde el 30 de octubre",
      corto: "Meta podrá rastrear webs de anunciantes pa’ su IA",
      cuerpo: "Los Términos Comerciales revisados de Meta añaden una cláusula que le permite usar software automático y credenciales de prueba pa’ acceder, indexar, guardar, copiar y volver a rastrear los sitios web ligados a los productos de un negocio, y usar ese contenido pa’ entrenar sus productos. Entran en vigor el 30 de octubre de 2026 y reemplazan la versión del 6 de marzo de 2024. La aceptación es pasiva: seguir usando los productos comerciales de Meta cuenta como un sí. No hay opción de salida parcial y los términos no mencionan robots.txt. El portavoz de Meta, Andy Stone, dice que la cláusula es más estrecha de lo que dicen los críticos y que busca sacar información de productos pa’ recomendaciones de anuncios, no raspar sitios de noticias. El abogado Matt Topic dice que no está claro si un tribunal la haría cumplir, y aconseja asumir que sí.",
      cifras: [
        { v: "30 oct", t: "fecha en que entran en vigor los términos revisados" },
        { v: "6 mar 2024", t: "fecha de la versión de términos que reemplazan" },
        { v: "Sin salida parcial", t: "seguir usando los productos comerciales cuenta como aceptación" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Las plataformas están pidiendo permisos de IA dentro de los términos de uso de anuncios, donde casi nadie los lee.",
        "Meta y sus críticos leen la cláusula distinto: lo que importa es lo que diga el texto, no lo que prometa un portavoz."
      ],
      hacer: "Esta semana, leer la cláusula nueva con el cliente y su equipo legal, anotar qué contenido propietario hay en las webs ligadas a sus cuentas de Meta, y decidir antes del 30 de octubre si necesitan una conversación con su rep.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/meta-grants-itself-the-right-to-crawl-advertisers-websites-for-ai/" }]
    },
    {
      id: "floodlight", dep: "data", peso: "secundaria",
      etiquetas: ["Medición", "Google", "Floodlight"],
      titular: "Floodlight usará datos de sesión de Google pa’ recuperar conversiones sin atribuir en noviembre",
      corto: "Floodlight recuperará conversiones sin atribuir",
      cuerpo: "Google anunció en su lista de cambios del cuarto trimestre que, en noviembre de 2026, Floodlight usará señales de datos de sesión iniciada en Google pa’ recuperar conversiones web entre dispositivos y entornos que antes no se atribuían, en Display & Video 360, Search Ads 360 y Campaign Manager 360. Google dice que no se requiere ninguna acción. La página no da cifras, ni explica si las conversiones recuperadas serán observadas o modeladas, ni si se reescribirá el historial. PPC Land advierte que, por eso, una subida después del cambio podría ser de medición y no de rendimiento.",
      toca: "Si ves más conversiones en noviembre, antes de celebrar marca la fecha del cambio en el reporte. Compararlo con octubre sin esa nota puede engañar al cliente.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/floodlight-gains-google-signed-in-data-to-recover-unattributed-conversions/" }]
    },

    {
      id: "ytai", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "IA", "Música"],
      titular: "YouTube Music le pone etiqueta de «IA» a las canciones hechas con inteligencia artificial",
      corto: "YouTube Music etiqueta la música hecha con IA",
      cuerpo: "YouTube empezó el 14 de octubre a mostrar una etiqueta de «IA» en las canciones que sus sistemas creen hechas principalmente con IA generativa, por ejemplo cuando un modelo creó la composición y las voces. Aparece primero en la app de YouTube Music y, según YouTube, se extenderá a la app principal, sin fecha. Al tocar la etiqueta sale una explicación básica. YouTube usa herramientas internas de detección y trabaja con socios de la música pa’ afinarlas, pero no da cifras de precisión. Social Media Today lo conecta con el caso de un remix hecho con IA que llegó al primer lugar de las listas locales de Australia.",
      cifras: [
        { v: "14 oct", t: "día en que empezó a verse la etiqueta en YouTube Music" },
        { v: "Sin fecha", t: "para la app principal de YouTube" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si tu equipo usa música generada con IA en videos o Reels, la gente puede empezar a notarlo y preguntar. La etiqueta depende de lo que el sistema crea, así que puede fallar en los dos sentidos.",
      hacer: "Esta semana, revisar qué audios usan los clientes en sus videos de YouTube, anotar cuáles se hicieron con IA y definir cómo lo van a decir si alguien pregunta.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-labels-ai-generated-music/833053/" }]
    },
    {
      id: "linkedin", dep: "content", peso: "secundaria",
      etiquetas: ["LinkedIn", "Creadores", "Monetización"],
      titular: "LinkedIn prueba anuncios previos en videos de creadores y filtros pa’ buscarlos",
      corto: "LinkedIn prueba anuncios en videos de creadores",
      cuerpo: "LinkedIn anunció varias novedades pa’ creadores. En pruebas tempranas, las marcas podrán poner anuncios previos al video junto a contenido de creadores y editores sin una alianza previa, y los creadores que se apunten ganarían una parte de los ingresos. El Creator Marketplace suma filtros por enfoque de audiencia, experiencia y formatos preferidos. Los autores podrán fijar un comentario en sus publicaciones, y los suscriptores Premium verificados podrán ofrecer asesorías de pago o gratis, por ahora solo con anfitriones de EE. UU. El artículo no da porcentajes de ingresos, precios ni números de usuarios.",
      toca: "Sirve pa’ clientes B2B que ya trabajan con creadores en LinkedIn. Todo está en prueba y sin detalles de pago, así que se sigue la noticia.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/linkedin-adds-new-creator-monetization-options/833179/" }]
    },

    {
      id: "pga", dep: "rd", peso: "principal", para: ["medios", "planning", "content"],
      etiquetas: ["Turismo", "Deporte", "Golf"], fecha: "16 oct 2026 · Playa Nueva Romana",
      titular: "El PGA Tour Americas cierra su temporada en Playa Nueva Romana, y por primera vez es en RD",
      corto: "El PGA Tour Americas cierra su temporada en RD",
      cuerpo: "Santo Domingo.— El Dominican Republic Tour Championship, presentado por Scotiabank, es la final de la temporada 2026 del PGA Tour Americas. Se juega hasta el 18 de octubre en PGA Ocean’s 4, en Playa Nueva Romana, con respaldo del Ministerio de Turismo, y es la primera vez que se hace en el país. Reúne a 59 de los 60 mejores jugadores del circuito, que compiten por diez membresías para el Korn Ferry Tour 2027. Camilo García, del circuito, dijo que pesaron las alianzas comerciales, el respaldo de patrocinadores internacionales y la infraestructura turística, como la conectividad aérea, el alojamiento y un hotel a unos tres minutos del campo. Gonzalo Pan de Soraluce, de Piñero, afirma que el golf atrae turistas de mayor gasto que se quedan más tiempo.",
      cifras: [
        { v: "10", t: "membresías para el Korn Ferry Tour 2027 en juego" },
        { v: "59 de 60", t: "de los mejores jugadores del circuito compiten" },
        { v: "15 en 9", t: "torneos de la temporada, en nueve países" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "El turismo deportivo llega con plan de varios días y con patrocinadores internacionales de por medio. La afirmación de que el golf trae mayor gasto es de un ejecutivo de Piñero, no un dato independiente.",
      hacer: "Esta semana, llevarles a los clientes de turismo, hoteles y banca una idea de contenido ligada al golf en RD pa’ la temporada alta, y preguntar a Mitur o a Piñero qué activaciones quedan abiertas pa’ marcas.",
      fuentes: [
        { nombre: "elDinero", url: "https://eldinero.com.do/385248/alianzas-comerciales-e-infraestructura-impulsan-la-llegada-del-pga-tour-americas-a-rd/" },
        { nombre: "elDinero", url: "https://eldinero.com.do/385150/golf-atrae-turistas-de-mayor-gasto-y-estadias-mas-largas-a-republica-dominicana/" }
      ]
    },
    {
      id: "tarjetas", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Banca", "Consumo", "Tarjetas"], fecha: "16 oct 2026",
      titular: "Las líneas de crédito personal por tarjetas bajan 4.5 % a julio y suman RD$83,584 millones",
      corto: "Líneas de crédito por tarjetas bajan 4.5 %",
      cuerpo: "Según la Superintendencia de Bancos, el saldo de préstamos personales por líneas de crédito asociadas a tarjetas fue de RD$83,584 millones a julio de 2026, una baja interanual de 4.5 %. El máximo reciente de crecimiento fue 7.7 % en octubre de 2025. Hay 3.57 millones de créditos asociados a tarjetas por RD$125,429 millones, con 89 % activos, y el Banco de Reservas tiene la mayor cantidad con 1.3 millones.",
      cifras: [
        { v: "RD$83,584 M", t: "saldo de líneas de crédito por tarjetas a julio de 2026" },
        { v: "−4.5 %", t: "variación interanual" }
      ],
      toca: "Pa’ planning, es una señal de que el crédito pa’ consumo se está enfriando justo antes de la temporada alta. Conviene tenerla presente al proyectar ventas a plazos de los clientes.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385254/lineas-de-credito-personal-a-traves-de-tarjetas-bajan-4-5-a-julio-de-2026/" }]
    },
    {
      id: "manos", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Moda", "Artesanía"], fecha: "17 oct 2026",
      titular: "Manos Dominicanas lleva la artesanía al Fashion Week 2026 con inspiración en el larimar",
      corto: "Manos Dominicanas lleva artesanía al Fashion Week",
      cuerpo: "Manos Dominicanas presentó la colección «Barahona: entre sal y armonía» en el Fashion Week 2026, junto a Textil Cayena. Trae 18 atuendos (5 masculinos y 13 femeninos) con tejidos naturales, crochet, bordados, carteras y joyería hecha a mano, y participaron 17 artesanos. Eliana Mañón, de Comercio Social de Manos Dominicanas, dijo que más de 1,500 artesanos están vinculados a los programas de Supérate y que el reto principal es comercializar.",
      cifras: [
        { v: "18", t: "atuendos en la colección" },
        { v: "17", t: "artesanos participantes" },
        { v: "1,500+", t: "artesanos vinculados a los programas de Supérate" }
      ],
      toca: "Hay una historia visual y un reto de ventas claro. Sirve pa’ marcas que quieran contar algo con lo hecho en RD y con artesanos reales.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385285/manos-dominicanas-lleva-la-artesania-al-fashion-week-2026/" }]
    },
    {
      id: "lizard", dep: "rd", peso: "secundaria", para: ["creatividad", "medios"],
      etiquetas: ["Cine", "Producción"], fecha: "16 oct 2026",
      titular: "«Lizard Music», de Dwayne Johnson y Benny Safdie, rueda parte de su producción en RD",
      corto: "«Lizard Music» rueda parte de su producción en RD",
      cuerpo: "Según Remolacha, la película «Lizard Music», protagonizada y producida por Dwayne Johnson y dirigida y escrita por Benny Safdie, añadió a República Dominicana a su calendario de rodaje. La nota es un adelanto y no da fechas de filmación, locaciones ni fecha de estreno.",
      toca: "Un rodaje internacional en el país mueve servicios locales de producción. Para creatividad y medios es un tema pa’ seguir, sin detalles todavía.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/lizard-music-la-nueva-pelicula-de-dwayne-johnson-y-benny-safdie-rueda-parte-de-su-produccion-en-republica-dominicana/" }]
    },
    {
      id: "indotel", dep: "rd", peso: "secundaria", para: ["data", "medios"],
      etiquetas: ["Telecom", "Indotel"], fecha: "15 oct 2026",
      titular: "Indotel recibirá unos RD$44 millones de Suecia pa’ planificar el espectro de frecuencias",
      corto: "Indotel recibe RD$44 millones pa’ planificar frecuencias",
      cuerpo: "El Indotel y Swedfund, la institución financiera de desarrollo del Gobierno de Suecia, firmaron una subvención de unos RD$44 millones pa’ asistencia técnica. Servirá pa’ elaborar el plan maestro del espectro radioeléctrico 2027–2031 y preparar propuestas de regulación de servicios satelitales. El presidente del consejo, Guido Gómez Mazara, dijo que el plan fijará prioridades pa’ cinco años.",
      cifras: [{ v: "2027–2031", t: "período del plan maestro del espectro" }],
      toca: "Lo que se decida del espectro va a marcar telecom y conectividad en los próximos años. Pa’ data y medios, es un tema pa’ vigilar, no pa’ actuar.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385096/indotel-recibira-rd44-millones-para-planificar-frecuencias-de-telecomunicaciones-en-el-pais/" }]
    }
  ],

  pizarra: ["displaycap", "jokic", "adobeholiday", "metacrawl", "ytai", "pga"],

  frases: [
    { dep: "medios", texto: "Google te deja ponerle tope al gasto de Display, pero el tope es «a mejor esfuerzo»: ponlo y vigílalo.", uso: "para conversaciones de Google Ads y presupuesto" },
    { dep: "creatividad", texto: "Sprite puso a un tres veces MVP a contar chistes que no hacen reír, y el chiste funciona.", uso: "para conversaciones de embajadores deportivos" },
    { dep: "planning", texto: "Adobe proyecta US$275.1 mil millones en compras navideñas, pero en octubre lo real quedó debajo del pronóstico: usa rangos.", uso: "para conversaciones de forecast navideño" },
    { dep: "data", texto: "Meta se da derecho de rastrear las webs de los anunciantes pa’ entrenar su IA desde el 30 de octubre, y seguir usando sus productos cuenta como aceptarlo.", uso: "para conversaciones de privacidad e IA" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Tope de gasto en Display de Google Ads" },
      { id: "creatividad", texto: "Sprite y Jokić en el club de comedia" },
      { id: "planning", texto: "Adobe y la Navidad en línea" },
      { id: "data", texto: "Meta rastreará webs de anunciantes" },
      { id: "content", texto: "YouTube etiqueta la música hecha con IA" },
      { id: "rd", texto: "Zoom a RD: el PGA Tour Americas en Playa Nueva Romana" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "displaycap", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "adobeholiday", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Adobe proyecta US$275.1 mil millones en compras navideñas en línea en EE. UU., con un Black Friday de +9.2 %. En octubre lo real quedó debajo de lo pronosticado: planifica con rangos."
    },
    data: {
      tipo: "secreto", nota: "metacrawl", titulo: "Destapa el expediente",
      texto: "Los Términos Comerciales de Meta entran en vigor el [[30 de octubre de 2026]] y le permiten rastrear las webs ligadas a los productos de un negocio pa’ entrenar su IA; seguir usando sus productos cuenta como [[aceptación pasiva]]."
    },
    rd: {
      tipo: "pregunta", nota: "pga", titulo: "La pregunta del patio",
      p: "¿Cuántas membresías para el Korn Ferry Tour 2027 se juegan en el Dominican Republic Tour Championship?",
      opciones: ["5", "10", "60"],
      correcta: 1,
      explicacion: "Son diez. El 60 es otro dato: 59 de los 60 mejores jugadores del circuito compiten en Playa Nueva Romana."
    }
  }
};
