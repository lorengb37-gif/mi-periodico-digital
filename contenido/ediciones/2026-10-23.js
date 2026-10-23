/*
  El Pulso Publicitario · edición N.º 296 · 23 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 296,
  fechaISO: "2026-10-23",
  fecha: "Viernes 23 de octubre 2026",
  fechaCorta: "23 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes del 30 de octubre, revisa qué funciones de IA tiene encendidas cada cliente en Meta, porque desde esa fecha el riesgo es del anunciante.",
    largo: "Viernes de letra chiquita. Meta cambia sus términos comerciales el 30 de octubre y, según Adweek, el anunciante queda como responsable de lo que la IA le cambie a sus anuncios; además, ya viene una cláusula pa’ rastrear los sitios de las marcas. Target arma su Navidad con precio y un asistente de IA, TikTok ya habla de Black Friday y, aquí en el patio, el calor mueve las ventas de aire acondicionado mientras los comerciantes se quejan de lo que cobran las tarjetas. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del lunes.",
    corto: "Revisa hoy qué funciones de IA y de rastreo tienen encendidas tus clientes en Meta. El 30 de octubre cambian los términos.",
    porDep: {
      medios: "Haz una lista por cliente de las funciones automáticas de Meta y de ChatGPT que están encendidas, y deja por escrito cuáles se quedan.",
      creatividad: "Una alianza que se siente como una travesura, como la de Absolut con Charli XCX, se construye con detalles pequeños que la gente quiere compartir.",
      planning: "Si la competencia ya habla de precio y regalos, revisa el calendario de Navidad del cliente con datos locales, no solo de EE. UU.",
      data: "Cuando una plataforma pide acceso a los dominios de tus clientes, el cliente tiene que saberlo antes de la fecha, no después.",
      content: "Si el cliente va a vender en TikTok o en Meta esta Navidad, define ya cuántos creadores necesita y qué pueden decir.",
      rd: "El calor y el crédito caro cambian cuánto y cómo compra la gente. Revisa el mensaje de precio y cuotas de tus clientes de consumo."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Meta cambia sus términos el 30 de octubre y la IA queda del lado del anunciante · Semrush: los resúmenes de IA de Google ya salen en 88 % de las búsquedas comerciales que midió" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Absolut firma dos años con Charli XCX · Grindr quiere que Halloween sea suyo con su Pleasure Ball" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Target arma una Navidad de precio, exclusivos y un asistente de IA · Reddit estrena planificador de campañas con predicción" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Editores le dan a Meta hasta el 26 de octubre pa’ responder sobre su cláusula de rastreo · Una coalición de medios pide leyes contra los bots que se disfrazan" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "TikTok empuja el Black Friday con creadores y Lives · Mosseri dice que está muy preocupado por la IA que copia a los creadores" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "metaterminos", dep: "medios", peso: "principal",
      etiquetas: ["Meta", "Advantage+", "IA"],
      titular: "Meta cambia sus términos el 30 de octubre: la IA le puede retocar los anuncios y el que responde es el anunciante",
      corto: "Meta pone el riesgo de su IA del lado del anunciante",
      cuerpo: "Según PPC Land, que cita a Adweek, los Términos Comerciales revisados de Meta entran en vigor el 30 de octubre de 2026 y añaden una sección de «funciones de IA»: el anunciante sería el único responsable de los cambios que la IA de Meta haga a sus anuncios, incluso con funciones que Meta active por su cuenta. Además, el 28 de octubre se enciende «product browsing» en anuncios existentes de Facebook e Instagram, salvo que el anunciante lo apague antes. Meta dice que el promedio fue 3 % más de conversiones en un experimento de agosto con unos 117,700 anunciantes, pero no define «conversión». Meta asegura que solo consolida políticas que ya existían. PPC Land no pudo abrir los términos y anota que la frase de Adweek no aparece en la versión del 6 de marzo de 2024.",
      cifras: [
        { v: "30 oct", t: "fecha en que entran en vigor los términos revisados" },
        { v: "28 oct", t: "fecha en que se enciende product browsing si no lo apagas antes" },
        { v: "117,700", t: "anunciantes en el experimento de agosto que cita Meta (+3 % de conversiones, sin definir)" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si una función de IA cambia el texto o la imagen de un anuncio y sale mal, la agencia y el cliente pueden quedar con el problema. Hay que saber qué está encendido en cada cuenta.",
      hacer: "Esta semana, entrar a Ads Manager de cada cliente grande, anotar qué funciones de Advantage+ están encendidas y apagar, con la aprobación del cliente, las que no quieran antes del 28 de octubre.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/metas-ai-rewrites-the-ads-from-october-30-advertisers-carry-the-risk/" }]
    },
    {
      id: "aioverviews", dep: "medios", peso: "secundaria",
      etiquetas: ["Google", "Search", "IA"],
      titular: "Semrush: los resúmenes de IA de Google ya aparecen en el 88 % de las búsquedas comerciales que midió",
      corto: "AI Overviews ya sale en 88 % de las búsquedas comerciales",
      cuerpo: "Según PPC Land, un estudio de Semrush con 400 palabras clave comerciales de EE. UU. (banca, software y comercio electrónico) encontró que los AI Overviews pasaron de 45.75 % a 88 % de las palabras clave entre septiembre de 2025 y agosto de 2026, y a 97.08 % si se pesa por volumen de búsqueda. El estudio mide solo si aparecen, sin clics, y en escritorio de EE. UU. Otro estudio que recoge PPC Land, de Marie Haynes con 100 sitios, halló que las sesiones desde ChatGPT eran 0.62 % del tráfico orgánico de Google. Las muestras son chicas.",
      cifras: [
        { v: "88 %", t: "de las 400 palabras clave medidas muestran un resumen de IA (97.08 % pesadas por volumen)" },
        { v: "0.62 %", t: "sesiones desde ChatGPT vs. tráfico orgánico de Google, en 100 sitios" }
      ],
      toca: "Es un estudio de EE. UU. y de escritorio, pero muestra hacia dónde va el search. Antes de mover presupuesto, mide en las cuentas de tus clientes cuánto del tráfico de pago y orgánico cambia.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-ai-overviews-reach-88-of-commercial-searches-as-ai-clicks-stay-thin/" }]
    },

    {
      id: "absolut", dep: "creatividad", peso: "principal",
      etiquetas: ["Absolut", "Charli XCX", "Alianzas"],
      titular: "Absolut se pone «caótica» con Charli XCX: dos años de alianza que arrancó con una camiseta en el escenario",
      corto: "Absolut firma dos años con Charli XCX",
      cuerpo: "Según Adweek, Absolut, de Pernod Ricard, firmó una alianza de dos años con Charli XCX que incluye ediciones limitadas, artículos de colección, vasos a la medida y eventos para fans. La pista empezó el fin de semana en los shows de Charli en Los Ángeles, donde se vio «ABSOLUT XCX» en pantalla y algunos bailarines llevaban camisetas con «I ♥ Absolut». El 20 de octubre se reveló la alianza con fotos en blanco y negro de la artista tras bastidores. Charli dijo que la marca «quería hacer algo un poco caótico». Adweek no nombra agencia ni da cifras del acuerdo.",
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La alianza se anunció a pedazos, primero en el escenario y después en redes, y eso le dio a los fans algo que descubrir. Es un buen ejemplo de cómo empezar una colaboración con una pista y no con un comunicado.",
      hacer: "Esta semana, en la sesión creativa, escoger un cliente con alianza o patrocinio y esbozar tres pistas pequeñas (una prenda, una pantalla, una foto) que lo anuncien antes del comunicado.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/charli-xcx-joins-absolut-for-chaotic-two-year-partnership/" }]
    },
    {
      id: "grindr", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Grindr", "Halloween", "Evento de marca"],
      titular: "Grindr quiere quedarse con Halloween: su Pleasure Ball ya llena 700 personas",
      corto: "Grindr quiere hacer suyo el Halloween",
      cuerpo: "Según Adweek, Grindr celebra el jueves 22 de octubre en Nueva York el tercer Pleasure Ball, una fiesta y concurso de disfraces con el que la marca quiere asociarse a Halloween. Su CMO, Tristan Pineiro, dice que para su comunidad Halloween es «como una Navidad» y que la fiesta es una versión alternativa de una gala famosa. El evento pasó de unos 400 invitados en 2024 a un cupo de 700 en 2026. El artículo estaba parcialmente cerrado y no nombra agencia.",
      toca: "Una marca escogió una fecha del calendario y la convirtió en su evento propio, tres años seguidos. Sirve de pista pa’ clientes que buscan una fecha que nadie más esté usando.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/halloween-is-gay-christmas-and-grindr-wants-to-own-it/" }]
    },

    {
      id: "target", dep: "planning", peso: "principal",
      etiquetas: ["Navidad", "Target", "Retail"],
      titular: "Target arma su Navidad con precio, exclusivos y un asistente de IA: más de 8,000 regalos nuevos",
      corto: "Target apuesta la Navidad al precio y a un asistente de IA",
      cuerpo: "Según Digiday, Target presentó su temporada navideña con más de 8,000 regalos nuevos, más de la mitad exclusivos, y la mayoría a $20 o menos, muchos por debajo de $5. Habrá una oferta nueva cada día del 1 de noviembre al 24 de diciembre y ofertas tempranas de Black Friday del 5 al 7 de noviembre. El mensaje es «lujo por menos». También prueba en beta «Ask Target», un asistente de IA en la web y la app que ayuda a buscar ideas de regalo y armar listas de deseos. Target dice que la adopción inicial luce prometedora, sin dar cifras.",
      cifras: [
        { v: "8,000+", t: "regalos nuevos, más de la mitad exclusivos de Target" },
        { v: "1 nov – 24 dic", t: "una oferta nueva cada día" },
        { v: "5–7 nov", t: "ofertas tempranas de Black Friday" }
      ],
      hacer: "Esta semana, revisar el calendario de Navidad de un cliente de retail y decidir si arranca con mensaje de precio y regalos accesibles en noviembre, validando con datos locales porque lo de Target es de EE. UU.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/targets-holiday-push-stresses-affordability-exclusives-and-an-ai-assistant/" }]
    },
    {
      id: "redditplanner", dep: "planning", peso: "secundaria",
      etiquetas: ["Reddit", "Forecast", "Ads Manager"],
      titular: "Reddit estrena planificador de campañas que predice alcance y costo antes de lanzar",
      corto: "Reddit predice alcance y costo antes de lanzar",
      cuerpo: "Según Social Media Today, Reddit añadió a su Ads Manager un planificador que predice alcance, impresiones y costos de cada campaña antes de lanzarla, una puntuación de optimización de 0 a 100 % con recomendaciones y una optimización automática de presupuesto entre grupos de anuncios. Reddit dice que los anunciantes con 80 % o más tuvieron un CPA combinado 19.6 % más bajo que los demás. El planificador y la puntuación se despliegan a todos los anunciantes durante octubre. Son datos de la propia plataforma.",
      cifras: [{ v: "19.6 %", t: "menos CPA combinado con puntuación de 80 % o más, según Reddit" }],
      toca: "Sirve pa’ armar un forecast rápido, pero son números de la plataforma. Compáralos con el histórico del cliente antes de ponerlos en un plan.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-adds-ai-powered-ad-guidance-tools/833532/" }]
    },

    {
      id: "metacrawl", dep: "data", peso: "principal",
      etiquetas: ["Meta", "Privacidad", "Términos"],
      titular: "Los editores le dan a Meta hasta el 26 de octubre pa’ explicar su cláusula de rastreo de sitios",
      corto: "Editores exigen a Meta aclarar su cláusula de rastreo",
      cuerpo: "Según PPC Land, los Términos Comerciales revisados de Meta, que entran en vigor el 30 de octubre, dicen que Meta y quienes actúen por ella podrían rastrear y guardar en caché dominios asociados a los productos o servicios de un negocio, y crear credenciales de prueba para entrar. La News/Media Alliance mandó una carta el 22 de octubre pidiendo que Meta retire la cláusula y responda antes del 26 de octubre. Meta quitó la palabra «entrenar» y ahora habla de «desarrollar, mejorar, investigar y mantener» productos de publicidad y negocios; dice que la cláusula es sobre anuncios y no sobre sitios de noticias. Lo de «anticompetitivo» es la caracterización de la alianza: ningún tribunal ni regulador se ha pronunciado.",
      cifras: [
        { v: "26 oct", t: "fecha límite que pide la alianza pa’ que Meta responda" },
        { v: "30 oct", t: "fecha en que entran en vigor los términos revisados" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Los términos de una plataforma pueden cambiar qué puede hacer con los sitios web de tus clientes, no solo con sus anuncios.",
        "Es un debate de editores de EE. UU., pero la cláusula aplica a cualquier anunciante que acepte los términos."
      ],
      hacer: "Esta semana, avisarle a cada cliente que usa Meta que los términos cambian el 30 de octubre y pedirle a su equipo legal o de TI que lea la sección de rastreo antes de esa fecha.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/news-media-alliance-gives-meta-until-oct-26-to-answer-on-crawling-terms/" }]
    },
    {
      id: "stealthbots", dep: "data", peso: "secundaria",
      etiquetas: ["Bots", "Scraping", "Regulación"],
      titular: "Editores de EE. UU. y el Reino Unido piden leyes pa’ que los bots de IA digan quiénes son",
      corto: "Piden leyes pa’ que los bots de IA se identifiquen",
      cuerpo: "Según el Media Briefing de Digiday, el scraping fue 70.9 % del tráfico malicioso de bots en el reporte de septiembre de DataDome, con un alza de 185.2 % en 12 meses. Un análisis de Centinel encontró que 84 % de las solicitudes que decían ser GPTBot eran falsas. En EE. UU., más de 300 ejecutivos de medios fueron al Congreso en septiembre a pedir la Stealth Bot Prohibition Act. En el Reino Unido, una coalición que incluye a The Times, el Financial Times y Condé Nast pidió al gobierno apoyar una ley parecida. Las cifras vienen mayormente de empresas que venden protección contra bots.",
      cifras: [{ v: "70.9 %", t: "del tráfico malicioso de bots es scraping, según DataDome" }],
      toca: "Si el tráfico de un cliente trae muchos bots, las métricas se inflan. Conviene mirar cuánto del tráfico es verificado antes de sacar conclusiones.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media/media-briefing-the-transatlantic-push-to-rein-in-stealth-bots-is-gathering-pace/" }]
    },

    {
      id: "tiktokbfcm", dep: "content", peso: "principal",
      etiquetas: ["TikTok", "Black Friday", "Creadores"],
      titular: "TikTok ya está empujando el Black Friday: creadores en volumen y Lives pa’ vender",
      corto: "TikTok empuja el Black Friday con creadores y Lives",
      cuerpo: "Según Social Media Today, TikTok publicó su serie «Road to Black Friday» con casos de Princess Polly, Dossier y SharkNinja en TikTok Shop. Sus consejos: sumar creadores y TikTok Live, probar programas con muchos creadores (Dossier dice tener más de 80,000 videos en el mercado) y empezar ya a preparar el Black Friday y el Cyber Monday. TikTok dice que el contenido de #holidayshopping subió 263 % mes a mes en septiembre de 2026 y que los vendedores con transmisiones en vivo lograron 84 % más ventas año a año. Son cifras de TikTok y de EE. UU.",
      cifras: [
        { v: "+263 %", t: "contenido de #holidayshopping, septiembre vs. agosto, según TikTok" },
        { v: "+84 %", t: "ventas anuales de vendedores que hacen Lives, según TikTok" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "TikTok está diciendo que la Navidad se gana con muchos creadores y con Lives. Aunque TikTok Shop no opere igual en RD, la fórmula de varios creadores chicos y un Live sirve pa’ cualquier tienda en línea.",
      hacer: "Esta semana, escoger un cliente con tienda en línea y armar un plan de Black Friday con cinco creadores chicos y un Live de preguntas y respuestas, con fechas y entregables.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-shares-black-friday-cyber-monday-promotion-tips/833546/" }]
    },
    {
      id: "mosseriia", dep: "content", peso: "secundaria",
      etiquetas: ["Instagram", "IA", "Creadores"],
      titular: "Mosseri: Instagram no frena el contenido por ser de IA, pero está «muy preocupado» por las copias",
      corto: "Mosseri: preocupado por la IA que copia creadores",
      cuerpo: "Según Social Media Today, tras la queja de un artista cuyo trabajo fue replicado con IA, Adam Mosseri dijo que prohibir el contenido de IA no es práctico, que Instagram no reduce el alcance de un contenido por ser de IA y que va a añadir más etiquetas de IA y animar a los creadores a etiquetar el suyo. En Threads escribió que está «muy preocupado» por esta tendencia. Aclaró que los reclamos de derechos de autor no bastan. El análisis de que Meta promueve sus propias herramientas de IA es del autor del artículo, no de Mosseri.",
      toca: "Si el contenido de un cliente es fácil de copiar, otro puede imitarlo con IA. Conviene dejar claro el origen de lo propio, con etiquetas y firma de marca.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-chief-says-stronger-ai-slop-prevention-is-needed/833416/" }]
    },

    {
      id: "aire", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Consumo", "Calor", "Aduanas"], fecha: "23 oct 2026",
      titular: "El calor mueve el negocio: el valor de los aires acondicionados importados casi se triplicó en diez años",
      corto: "El calor dispara las importaciones de aires acondicionados",
      cuerpo: "Santo Domingo.— Según Diario Libre, con datos de la Dirección General de Aduanas, el valor importado de aires acondicionados y sus partes pasó de US$55.6 millones en 2017 a US$150.9 millones el año pasado, y llegó a un pico de US$15.8 millones en junio de 2026. Entran entre 650,000 y 700,000 unidades al año. La encuesta Enhogar mostró que los hogares con aire acondicionado subieron de 19.1 % en 2022 a 28.7 % en 2024. China suplió el 88.7 % del valor importado de enero a septiembre de 2026. Los importadores dicen que las ventas bajan poco entre diciembre y marzo.",
      cifras: [
        { v: "US$150.9 M", t: "valor importado el año pasado, desde US$55.6 M en 2017" },
        { v: "28.7 %", t: "de los hogares con aire acondicionado en 2024 (19.1 % en 2022)" },
        { v: "88.7 %", t: "del valor importado en enero–septiembre 2026 vino de China" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "El calor ya es una temporada de compra, no solo una queja. Pa’ marcas de climatización, electrodomésticos, energía y financiamiento, hay una demanda que dura casi todo el año.",
      hacer: "Esta semana, hablar con un cliente de electrodomésticos, energía o crédito y proponerle una campaña de ahorro y cuotas para el calor, con el dato de los hogares con aire acondicionado como gancho.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/10/23/las-importaciones-de-aire-acondicionado-crecen-por-el-calor/3697193" }]
    },
    {
      id: "comerciantes", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Comercio", "Tarjetas", "Crédito"], fecha: "21–22 oct 2026",
      titular: "Los comerciantes piden bajar las tasas de interés y las comisiones por tarjetas",
      corto: "Comerciantes piden bajar tasas y comisiones de tarjetas",
      cuerpo: "Santo Domingo.— En el aniversario 52 de la Federación Dominicana de Comerciantes, su presidente, Iván García, dijo que las tasas de los préstamos comerciales, de 14 % a 19 %, le restan competitividad a los negocios, y pidió presión al sector bancario para bajarlas. También señaló que las comisiones por pagos con tarjeta pueden llegar a 4 % o 6 % en algunos comercios, y pidió una revisión. Según elDinero, en mayo de 2026 había unas 239,000 terminales de pago instaladas.",
      cifras: [
        { v: "14 %–19 %", t: "tasas de préstamos comerciales, según la FDC" },
        { v: "4 %–6 %", t: "comisiones por pagos con tarjeta en algunos comercios, según la FDC" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si al comerciante le cuesta más cobrar con tarjeta, puede empujar el pago en efectivo o la transferencia. Pa’ los clientes de retail conviene revisar qué métodos de pago promueven en Navidad.",
      fuentes: [
        { nombre: "elDinero", url: "https://eldinero.com.do/385966/por-que-los-comerciantes-piden-reducir-las-tasas-de-interes-y-las-comisiones-por-tarjetas/" },
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/10/21/comerciantes-piden-bajar-intereses-bancarios/3696145" }
      ]
    },
    {
      id: "alofoke", dep: "rd", peso: "secundaria", para: ["medios", "content", "creatividad"],
      etiquetas: ["TV", "Reality", "Entretenimiento"], fecha: "22 oct 2026",
      titular: "«La Casa de Alofoke 3» ya tiene fecha: se estrena el 23 de noviembre",
      corto: "La Casa de Alofoke 3 se estrena el 23 de noviembre",
      cuerpo: "Santo Domingo.— Según Remolacha, la tercera temporada del reality creado por el empresario y productor Santiago Matías (Alofoke) arranca el 23 de noviembre de 2026 a las 9:00 p. m. El cantante de bachata Chicho Severino fue anunciado como el primer artista en presentarse con un concierto exclusivo en el estreno. El texto no dice dónde se transmite, ni nombra a los participantes ni a los patrocinadores.",
      toca: "Un estreno con fecha fija a fin de noviembre le da a Medios y a Content un evento pa’ planificar. Los detalles de plataforma y patrocinio todavía hay que confirmarlos con el productor.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/chicho-severino-confirmado-para-la-premier-de-la-casa-de-alofoke-3/" }]
    },
    {
      id: "uber", dep: "rd", peso: "secundaria", para: ["data", "planning", "content"],
      etiquetas: ["Consumo", "Apps", "Precios"], fecha: "21 oct 2026",
      titular: "En Uber RD, la opción más cara sale primero: una consulta mostró RD$496.49 contra RD$136.26",
      corto: "En Uber RD la opción más cara sale primero",
      cuerpo: "Santo Domingo.— Diario Libre hizo una consulta el miércoles 21 de octubre y la app mostró primero Uber Select, a RD$496.49 con 7 minutos de espera, mientras UberX costaba RD$136.26 con 3 minutos. La diferencia fue RD$360.23. Según el centro de ayuda de Uber, el precio depende de distancia, duración, demanda y disponibilidad de conductores, y las categorías se ven deslizando la pantalla hacia arriba. Fue una sola consulta, así que no representa los precios generales de la app.",
      toca: "Cómo se ordenan las opciones en una app cambia lo que la gente escoge. Es un recordatorio pa’ quien diseña la web o la app de un cliente: lo que sale primero pesa.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/10/21/tarifas-uber-republica-dominicana-opciones-y-precios-disponibles/3696011" }]
    },
    {
      id: "simv", dep: "rd", peso: "secundaria", para: ["creatividad", "data", "content"],
      etiquetas: ["Regulación", "Publicidad responsable", "Fraude"], fecha: "22 oct 2026",
      titular: "La Superintendencia de Valores lanza un compromiso por una publicidad responsable y una obra de teatro contra fraudes",
      corto: "SIMV lanza compromiso por una publicidad responsable",
      cuerpo: "Santo Domingo.— Según elDinero, la Superintendencia del Mercado de Valores (SIMV) presentó «Operación Inversión», una obra de teatro interactiva con humor sobre estafas de inversión, dentro de la Semana Mundial del Inversionista 2026. Fue en el seminario «Protección al Inversionista: lanzamiento de la iniciativa compromiso por una publicidad responsable», en el JW Marriott, con el superintendente Ernesto Bournigal Read. Entre las señales de alerta están las ofertas de hasta 300 % de retorno en poco tiempo, vendidas como «sin riesgo», y los testimonios falsos hechos con IA. El artículo no da la fecha exacta del seminario.",
      toca: "Si tu cliente es financiero, el mensaje no puede prometer retornos sin explicar el riesgo, ni usar testimonios que no sean reales. Conviene revisar los guiones antes de que lo revisen otros.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385927/superintendencia-de-valores-lanza-iniciativa-para-detectar-fraudes-financieros-en-rd/" }]
    }
  ],

  pizarra: ["metaterminos", "absolut", "target", "metacrawl", "tiktokbfcm", "aire"],

  frases: [
    { dep: "medios", texto: "Desde el 30 de octubre, según Adweek, lo que la IA de Meta le cambie a un anuncio es responsabilidad del anunciante: revisa qué tienes encendido.", uso: "para conversaciones de IA y control de marca" },
    { dep: "creatividad", texto: "Absolut anunció a Charli XCX con una camiseta en el escenario antes que con un comunicado: la pista le ganó al anuncio.", uso: "para conversaciones de alianzas y lanzamientos" },
    { dep: "data", texto: "Los editores le dieron a Meta hasta el 26 de octubre pa’ explicar una cláusula que le permitiría rastrear los dominios de un negocio.", uso: "para conversaciones de privacidad y términos de plataformas" },
    { dep: "planning", texto: "Target arrancó la Navidad con más de 8,000 regalos nuevos y una oferta nueva cada día desde el 1 de noviembre: el precio es el mensaje.", uso: "para conversaciones de calendario de temporada" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Meta y su IA del lado del anunciante" },
      { id: "creatividad", texto: "Absolut y Charli XCX" },
      { id: "planning", texto: "La Navidad de Target" },
      { id: "data", texto: "Meta y su cláusula de rastreo" },
      { id: "content", texto: "TikTok y el Black Friday" },
      { id: "rd", texto: "Zoom a RD: el calor y los aires" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "metaterminos", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "target", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Target arranca una oferta nueva cada día del 1 de noviembre al 24 de diciembre, con ofertas tempranas de Black Friday del 5 al 7 de noviembre. Valida la fecha de arranque con datos locales."
    },
    data: {
      tipo: "secreto", nota: "metacrawl", titulo: "Destapa el expediente",
      texto: "La News/Media Alliance pidió a Meta responder antes del [[26 de octubre]] sobre su cláusula de rastreo, y los términos revisados entran en vigor el [[30 de octubre]]."
    },
    rd: {
      tipo: "pregunta", nota: "aire", titulo: "La pregunta del patio",
      p: "De enero a septiembre de 2026, ¿qué país suplió el 88.7 % del valor importado de aires acondicionados?",
      opciones: ["Estados Unidos", "China", "México"],
      correcta: 1,
      explicacion: "Fue China, según Diario Libre con datos de Aduanas. Estados Unidos suplió 4.4 %."
    }
  }
};
