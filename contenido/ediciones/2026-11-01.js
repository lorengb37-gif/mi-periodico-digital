/*
  El Pulso Publicitario · edición N.º 305 · 1 de noviembre de 2026
*/
window.EDICION = {
  numero: 305,
  fechaISO: "2026-11-01",
  fecha: "Domingo 1 de noviembre 2026",
  fechaCorta: "1 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Arranca noviembre con la Navidad encima: la agencia que llega con una propuesta concreta antes del jueves se queda con la conversación del cliente.",
    largo: "Disney se sube a TikTok Shop con un evento de una semana, Ulta pone a Selena Gomez y a Tate McRae a repartir magia navideña, la FTC les pide cuentas a nueve empresas por cómo usan los datos para poner precios y Threads prueba una lista de amigos. Aquí en el patio, el 55.2 % de los trabajadores formales gana menos de RD$30,000 al mes y la Heat Latin Music Awards está en plena semana de premiación. El consejo: escoge un «Lo que toca hacer», ponle responsable y llévaselo al cliente antes del jueves.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, ponle responsable y llévaselo al cliente antes del jueves.",
    porDep: {
      medios: "Antes de gastar en un evento de plataforma, pregunta qué se mide al cierre y quién lo reporta. Un evento chévere sin número no se renueva.",
      creatividad: "Cuando tu campaña tiene dos famosos, que cada uno tenga su producto en pantalla. Así la celebridad vende algo y no solo acompaña.",
      planning: "Si el sueldo no alcanza, el consumidor compara más. Antes de cerrar el plan navideño, pregunta por qué precio y por qué cuotas va a decidir.",
      data: "Si usas datos del cliente para decidir un precio o una oferta, ten por escrito cómo y por qué. Eso es lo que van a preguntar.",
      content: "Lo que prueban en tres países hoy llega a RD mañana. Ten lista la idea de contenido antes que la función.",
      rd: "Cuando el salario rinde menos, la gente premia la oferta clara. Dile el precio de frente."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Disney estrena Super Brand Day en TikTok Shop del 4 al 10 de noviembre · Adweek mide lo que DoorDash e Instacart juntos le hacen al retail media" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Ulta Beauty lanza «The Magic Starts with You» con Selena Gomez y Tate McRae · Las marcas se mudan al maratón de Nueva York" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Los CMO en tres números: IA, presupuesto y poca confianza en las herramientas" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "La FTC les pide información a nueve empresas sobre cómo usan datos personales para fijar precios" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Threads prueba «Threads Friends», una lista de hasta 50 contactos · TikTok va camino a «superapp»" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "El 55.2 % de los trabajadores formales gana menos de RD$30,000 · Solo 32,132 empleos formales nuevos de enero a agosto · La libra de pollo entre RD$70 y RD$85 · Arrancan los Heat Latin Music Awards" }
  },

  notas: [
    {
      id: "disneytiktok", dep: "medios", peso: "principal",
      etiquetas: ["TikTok Shop", "Disney", "Social commerce"],
      titular: "Disney se sube a TikTok Shop con su primer Super Brand Day navideño",
      corto: "Disney estrena Super Brand Day en TikTok Shop",
      cuerpo: "Disney hará su primer evento Super Brand Day en TikTok Shop del 4 al 10 de noviembre, según Marketing Dive. Reúne productos de Disney Store y de más de 20 marcas, entre ellas Old Navy, Crocs, Touchland y ColourPop, con artículos exclusivos de TikTok Shop por tiempo limitado. Forma parte de la campaña «Make the Holidays Magic», con medios pagados y creadores. Marketing Dive cita un pronóstico de Emarketer: las ventas de TikTok Shop en EE. UU. subirán 48 % en 2026, hasta US$23,400 millones.",
      cifras: [
        { v: "4–10 nov", t: "fechas del Super Brand Day de Disney" },
        { v: "20+", t: "marcas participantes, además de Disney Store" },
        { v: "+48 %", t: "alza pronosticada por Emarketer de las ventas de TikTok Shop en EE. UU. en 2026" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Un anunciante grande mete la temporada navideña dentro de la plataforma, con creadores y medios pagados juntos. Es una función de EE. UU., pero muestra cómo se arma un evento de compra con presupuesto de medios.",
      hacer: "Esta semana, ver el Super Brand Day de Disney (4 al 10 de noviembre) y anotar qué formatos usa. Con eso, armar una propuesta de una página para un cliente de retail: qué evento, con qué creadores y con qué meta de ventas.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/disney-plans-tiktok-shop-holiday-experience-with-over-20-brands/873072/" }]
    },
    {
      id: "uberads", dep: "medios", peso: "secundaria",
      etiquetas: ["Retail media", "DoorDash", "Instacart", "Uber"],
      titular: "Adweek: DoorDash e Instacart juntos le ponen la presión a Uber en publicidad",
      corto: "DoorDash e Instacart le ponen presión a Uber en anuncios",
      cuerpo: "Adweek explica que la compra de Instacart por unos US$17,000 millones, que las empresas anunciaron el jueves, unificaría las dos redes de medios bajo un mismo dueño si los reguladores la aprueban. Según el medio, el negocio resultante sería muy atractivo para marcas de consumo masivo y retailers, y solo lo superarían Amazon y Walmart. El título del artículo lo compara con el negocio publicitario de Uber, de US$2,000 millones. Parte del texto es de pago, así que no se ven más detalles.",
      cifras: [{ v: "US$2,000 millones", t: "negocio publicitario de Uber, según el título de Adweek" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "El retail media de entrega a domicilio se está ordenando en pocos jugadores grandes. Pa’ medios, la pregunta es con quién negociar y qué formatos va a vender cada uno.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/commerce/doordash-buying-instacart-challenges-ubers-2-billion-ad-business/" }]
    },

    {
      id: "ulta", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Ulta Beauty", "Navidad"],
      titular: "Ulta Beauty pone a Selena Gomez y a Tate McRae a repartir magia navideña",
      corto: "Ulta lanza su Navidad con Selena Gomez y Tate McRae",
      cuerpo: "Ulta Beauty lanzó el 31 de octubre «The Magic Starts with You», su campaña navideña con Selena Gomez y Tate McRae, según Adweek. Es la segunda temporada de la historia de la Señora Claus, interpretada por Sandra Gray, y la creó Tamara Group con dirección de Nema Vand. Un anuncio muestra el brow gel de Rare Beauty, la marca de Gomez que Ulta vende desde febrero; el otro, la fragancia Tate 01 de McRae, exclusiva de Ulta en EE. UU. Corre en TV, streaming, digital, redes y tiendas, y se apoya en el «Pink Bag Energy» de Instagram. Ulta también estrenó su primer calendario de adviento «25 Days of Beauty».",
      cifras: [
        { v: "2", t: "artistas protagonistas, ambas dueñas de marcas que Ulta vende" },
        { v: "25 días", t: "del primer calendario de adviento de Ulta" },
        { v: "31 oct", t: "fecha de lanzamiento de la campaña" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Las dos famosas no están de adorno: cada una tiene un producto que la tienda vende. Así el anuncio de Navidad también es un anuncio de producto.",
      hacer: "Escoger un cliente de belleza o retail y bocetar esta semana una idea navideña donde cada embajador, o creador local, aparezca con un producto concreto del catálogo y no solo como cara de la campaña.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/selena-gomez-and-tate-mcrae-bring-the-magic-to-ulta-beautys-holiday-campaign/" }]
    },
    {
      id: "maraton", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Activaciones", "Deporte", "Maratón"],
      titular: "Celsius, Maybelline y hasta un colchón: las marcas se mudan al maratón de Nueva York",
      corto: "Las marcas se mudan al maratón de Nueva York",
      cuerpo: "Con el maratón de Nueva York en su 50.º aniversario, Digiday (vía Modern Retail) cuenta que cada vez más marcas se suman con activaciones, más allá de las deportivas. Maybelline es la primera patrocinadora de belleza del maratón. Celsius abrió «Club Celsius» en Brooklyn, a lo largo de la ruta, del 30 de octubre al 2 de noviembre. Saatva, de colchones, hace por primera vez una actividad en el maratón.",
      cifras: [
        { v: "50.º", t: "aniversario del maratón moderno de cinco condados" },
        { v: "30 oct – 2 nov", t: "fechas de Club Celsius en Brooklyn" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Los eventos deportivos con comunidad, como los run clubs, dejan que marcas que no son deportivas aparezcan con algo que hacer. Aquí en el patio pasa igual con carreras y torneos.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/from-celsius-to-maybelline-more-brands-are-lining-up-for-the-nyc-marathons-50th-anniversary/" }]
    },

    {
      id: "cmo3", dep: "planning", peso: "principal",
      etiquetas: ["CMO", "IA", "Presupuesto"],
      titular: "El CMO de hoy en tres números: IA, presupuesto plano y poca fe en la tecnología",
      corto: "El CMO de hoy en tres números",
      cuerpo: "Marketing Dive reunió datos sobre cómo cambia el trabajo del CMO. Según los datos que reúne, 26 % de los CMO contratados este año tiene habilidades de IA, frente a 9 % de los que llevan cuatro años o más en el cargo. Solo 11 % de los CMO dice que su empresa tiene una capacidad «excelente» para adoptar tecnologías de marketing, según el informe «CMO Outlook 2026» de Lippincott y Bloomberg Media. Además, 75 % de los líderes de marketing piensa invertir más en asistentes de IA, aunque solo 23 % de los consumidores confía en sus recomendaciones, según Kantar. Los presupuestos de marketing se mantienen alrededor de 8 % de los ingresos de la empresa.",
      cifras: [
        { v: "26 % vs. 9 %", t: "CMO nuevos con habilidades de IA frente a los que llevan 4+ años" },
        { v: "75 %", t: "de los líderes planea invertir más en asistentes de IA" },
        { v: "23 %", t: "de los consumidores confía en las recomendaciones de la IA, según Kantar" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Tu cliente está bajo presión de usar IA con un presupuesto que no crece, y su cliente final todavía desconfía. Esa tensión es el insumo de un buen plan.",
      hacer: "Esta semana, ponerle a cada plan del primer trimestre una línea: «dónde usamos IA, qué medimos y cómo se lo explicamos al consumidor». Llevar la plantilla a la próxima reunión de planning.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/the-changing-cmo-role-in-3-numbers/873219/" }]
    },

    {
      id: "ftcprecios", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "FTC", "Precios personalizados"],
      titular: "La FTC les pide cuentas a nueve empresas sobre cómo usan tus datos para poner precios",
      corto: "La FTC investiga el uso de datos para fijar precios",
      cuerpo: "Según el IAPP, la Comisión Federal de Comercio de EE. UU. ordenó a nueve empresas dar información detallada sobre cómo usan datos personales e IA para fijar precios a consumidores y pagos a trabajadores. Las órdenes, bajo la Sección 6(b) de la ley de la FTC, fueron a Delta, United, JetBlue, Lyft, Uber, DoorDash, Instacart, Target y Walmart. El presidente de la FTC, Andrew Ferguson, dijo que quieren revisar las metodologías «opacas». El IAPP agrega que el 22 de octubre un congresista, Frank Pallone, amplió su investigación con cartas a empresas de viajes, boletos y entrega de comida.",
      cifras: [
        { v: "9", t: "empresas que recibieron las órdenes de la FTC" },
        { v: "Sección 6(b)", t: "autoridad que usa la FTC para pedir la información" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "La pregunta ya no es solo qué datos recoges, sino qué decisiones tomas con ellos, como el precio que ve cada persona.",
        "Dos de las nueve empresas, DoorDash e Instacart, están en medio de una compra, y las dos venden anuncios."
      ],
      hacer: "Preguntarle esta semana a cada cliente que use ofertas o precios personalizados quién decide la regla, con qué datos y dónde está escrito. Dejar la respuesta en un documento de una página.",
      fuentes: [{ nombre: "IAPP", url: "https://iapp.org/news/a/ftc-expands-personalized-pricing-scrutiny-as-states-congress-regulators-turn-up-pressure" }]
    },

    {
      id: "threadsfriends", dep: "content", peso: "principal",
      etiquetas: ["Threads", "Función nueva", "Grupos"],
      titular: "Threads prueba «Threads Friends»: una lista de hasta 50 personas pa’ publicar en privado",
      corto: "Threads prueba una lista de amigos de hasta 50",
      cuerpo: "Threads está probando «Threads Friends», una lista de hasta 50 conexiones, según Social Media Today. Es parecida a «Mejores amigos» de Instagram: el usuario puede publicar solo para esa lista, y los que están en ella ven quién más le da «me gusta» o responde. La prueba es en Irlanda, Italia y Japón, pero cualquier persona del mundo puede ser agregada. El medio lo ve como parte de la tendencia de alejarse de lo público hacia grupos más pequeños.",
      cifras: [
        { v: "50", t: "contactos máximo en la lista" },
        { v: "3 países", t: "Irlanda, Italia y Japón, donde se prueba" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Para una marca, un grupo chiquito no es para vender, sino para conversar. Si llega a RD, tocará decidir qué sí vale la pena publicar solo para los más cercanos.",
      hacer: "Esta semana, revisar cómo usan «Mejores amigos» los clientes en Instagram y definir una idea para su comunidad más cercana (adelantos, descuentos o avisos) que se pueda copiar a Threads si llega.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/threads-tests-smaller-group-sharing-option/873271/" }]
    },
    {
      id: "tiktoksuper", dep: "content", peso: "secundaria",
      etiquetas: ["TikTok", "Superapp", "Pagos"],
      titular: "TikTok va camino a superapp: guías de restaurantes y, quizás, pagos",
      corto: "TikTok va camino a superapp",
      cuerpo: "TechCrunch analiza cómo TikTok se parece cada vez más a una «superapp», con su guía «Must Eat», que reúne más de 40 millones de publicaciones y comentarios. El medio recuerda que Bloomberg reportó en agosto que TikTok desarrolla enviar dinero por mensaje directo, y que Reuters informó en marzo que pidió permiso al banco central de Brasil para ofrecer préstamos y pagos. TechCrunch aclara que no se sabe si el modelo funcionaría fuera de China.",
      cifras: [{ v: "40 millones+", t: "publicaciones y comentarios que alimentan «Must Eat»" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si la gente busca, compra y quizás paga dentro de TikTok, el contenido tiene que servir pa’ decidir, no solo pa’ entretener.",
      fuentes: [{ nombre: "TechCrunch", url: "https://techcrunch.com/2026/10/31/tiktoks-road-to-becoming-a-super-app/" }]
    },

    {
      id: "salarios", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Consumo", "Salarios", "TSS"], fecha: "1 nov 2026",
      titular: "El 55.2 % de los trabajadores formales gana menos de RD$30,000 al mes",
      corto: "El 55.2 % de los trabajadores formales gana menos de RD$30,000",
      cuerpo: "Santo Domingo.— Según datos de la Tesorería de la Seguridad Social al 31 de agosto, que reporta El Dinero, solo 22.2 % de los 2,569,858 cotizantes gana más de RD$50,000 al mes, y 22.6 % está entre RD$30,000 y RD$50,000. El 47.5 % gana entre RD$15,000 y RD$30,000, y 7.7 % cotiza con menos de RD$15,000. El salario promedio cotizable es de RD$40,139: RD$38,522 en el sector privado y RD$43,876 en el Estado.",
      cifras: [
        { v: "55.2 %", t: "de los cotizantes gana menos de RD$30,000" },
        { v: "22.2 %", t: "gana más de RD$50,000" },
        { v: "RD$40,139", t: "salario promedio cotizable" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "En plena Navidad, la mayoría del público formal compra con ingresos ajustados. El mensaje de precio, cuotas y beneficio claro pesa más que nunca.",
      hacer: "Revisar esta semana los mensajes de Navidad de cada cliente y poner de frente el precio, las cuotas o el ahorro, con un ejemplo que se entienda con un salario de RD$25,000.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386884/el-55-2-de-los-trabajadores-formales-de-rd-gana-menos-de-rd30000-mensuales/" }]
    },
    {
      id: "empleos", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Empleo", "TSS"], fecha: "31 oct 2026",
      titular: "Entre enero y agosto solo se crearon 32,132 empleos formales nuevos",
      cuerpo: "Santo Domingo.— Los cotizantes a la seguridad social pasaron de 2,537,726 en diciembre de 2025 a 2,569,858 al cierre de agosto, según la TSS que cita El Dinero. En el sector público subieron de 768,535 a 773,209. El medio lo ve como una ralentización de la oferta de empleos.",
      cifras: [
        { v: "32,132", t: "empleos formales nuevos de enero a agosto" },
        { v: "2,569,858", t: "cotizantes al cierre de agosto" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si el empleo formal crece poco, el público que compra a crédito o en cuotas crece poco también. Dato útil pa’ clientes de banca y retail.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386877/entre-enero-y-agosto-solo-se-crearon-32132-nuevos-empleos-formales/" }]
    },
    {
      id: "pollo", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Consumo", "Precios"], fecha: "31 oct 2026",
      titular: "La libra de pollo anda entre RD$70 y RD$85 en el Gran Santo Domingo",
      cuerpo: "Santo Domingo.— Diario Libre recorrió mercados y carnicerías del Gran Santo Domingo y encontró la libra de pollo entre RD$70 y RD$85. Un vendedor cerca del Mercado Modelo dijo que los precios bajaron hace unos dos meses por la saturación del producto, y otro explicó que a veces sube hasta RD$100 y baja hasta RD$75. Algunos consumidores dicen que igual está caro: «Todo está alto».",
      cifras: [{ v: "RD$70–85", t: "precio de la libra de pollo en el Gran Santo Domingo" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "El precio de la comida define el humor del consumidor. Cuando lo básico pesa, los mensajes de ahorro y rendimiento conectan mejor.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/agro/2026/10/31/la-libra-de-pollo-esta-entre-rd70-y-rd85-en-el-gran-santo-domingo/3705967" }]
    },
    {
      id: "heat", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Premios Heat"], fecha: "31 oct 2026",
      titular: "Arrancan los Heat Latin Music Awards, con la dominicana Caroline Aquino de anfitriona",
      cuerpo: "Santo Domingo.— Según Diario Libre, la semana de premiación de los Heat Latin Music Awards arrancó en Jalisco con artistas y periodistas de más de 30 países. La ceremonia, el 5 de noviembre en Puerto Vallarta, la conducen Alejandra Espinoza, Karime Pindter, Marko y la dominicana Caroline Aquino, y se ve en vivo por LosHeat.tv. Karol G encabeza las nominaciones con 30; Bad Bunny tiene nueve.",
      cifras: [
        { v: "30", t: "nominaciones de Karol G, la más nominada" },
        { v: "5 nov", t: "día de la ceremonia" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es conversación musical con público dominicano. Pa’ content es una semana de memes y reacciones con un horario claro.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/10/31/los-heat-latin-music-awards-inician-actividades-en-jalisco/3706970" }]
    }
  ],

  pizarra: ["disneytiktok", "ulta", "cmo3", "ftcprecios", "threadsfriends", "salarios"],

  frases: [
    { dep: "medios", texto: "Disney ya no solo pauta en TikTok: abre una semana entera de compras con más de 20 marcas dentro de TikTok Shop.", uso: "para conversaciones de social commerce" },
    { dep: "creatividad", texto: "Ulta no puso dos famosas de adorno: cada una trae un producto que la tienda vende.", uso: "para ideas de campañas con embajadores" },
    { dep: "data", texto: "La FTC ya no pregunta solo qué datos tienes: quiere saber qué precio le pones a cada persona con ellos.", uso: "para conversaciones de privacidad con el cliente" },
    { dep: "planning", texto: "El 75 % de los líderes de marketing quiere invertir más en asistentes de IA, pero solo el 23 % de los consumidores confía en sus recomendaciones.", uso: "para planes que usan IA" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Disney y su Super Brand Day en TikTok Shop" },
      { id: "creatividad", texto: "Ulta, Selena Gomez y Tate McRae" },
      { id: "planning", texto: "El CMO de hoy en tres números" },
      { id: "data", texto: "La FTC y los precios personalizados" },
      { id: "content", texto: "Threads Friends" },
      { id: "rd", texto: "Zoom a RD: salarios formales" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "disneytiktok", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "cmo3", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Noviembre ya es Navidad. Antes de cerrar el plan, escribe en cada línea dónde usas IA y qué vas a medir: solo el 23 % de los consumidores confía en sus recomendaciones, según Kantar."
    },
    data: {
      tipo: "secreto", nota: "ftcprecios", titulo: "Destapa el expediente",
      texto: "La FTC les ordenó a [[nueve empresas]] dar información sobre cómo usan datos personales e IA para fijar precios, bajo la [[Sección 6(b)]] de su ley."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "salarios", titulo: "La pregunta del patio",
      p: "¿Qué porcentaje de los trabajadores formales dominicanos gana menos de RD$30,000 al mes?",
      opciones: ["22.2 %", "55.2 %", "7.7 %"], correcta: 1,
      explicacion: "Según la TSS que cita El Dinero, al 31 de agosto el 55.2 % de los cotizantes ganaba menos de RD$30,000; solo el 22.2 % pasaba de RD$50,000."
    }
  }
};
