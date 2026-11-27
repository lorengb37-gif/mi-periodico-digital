/*
  El Pulso Publicitario · edición N.º 331 · 27 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 331,
  fechaISO: "2026-11-27",
  fecha: "Viernes 27 de noviembre 2026",
  fechaCorta: "27 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "En Viernes Negro el descuento ya no sorprende a nadie: lo que se queda en la cabeza es la experiencia y el que la cuenta bien.",
    largo: "Hoy es Viernes Negro y los datos dicen lo mismo por distintos caminos. La Harris Poll encontró que 79 % siente que las ofertas ya no son como antes; la Gen Z va al centro comercial más a compartir que a comprar; y en el patio las tiendas estiraron las rebajas to’ noviembre. Mientras tanto, Aflac pone a Ben Affleck a hablar «aflac», Oribe se luce con un mosaico hecho a mano y el Bocao Food Fest arma un barrio entero con experiencias de marca. El consejo: no compitas solo con el porcentaje. Dale al cliente una razón pa’ que lo recuerden después del lunes.",
    corto: "Antes del lunes, revisa una pieza de temporada de cada cliente y pregúntate: ¿qué ofrece además del descuento?",
    porDep: {
      medios: "La TV le ganó a lo digital en el gasto de las marcas de tecnología. Antes de recortar TV en el plan de 2027, mira bien ese dato.",
      creatividad: "Aflac encontró el chiste en el nombre de su propia mascota. Busca primero en lo que tu marca ya tiene antes de inventar algo nuevo.",
      planning: "La Gen Z va al centro comercial a compartir: si tu marca está en tienda física, piensa en el momento social, no solo en la venta.",
      data: "Los agentes de IA vienen a comprar esta semana. Separa en tus reportes el tráfico de agentes del de personas antes del Cyber Monday.",
      content: "Facebook le paga a universitarios con 1,000 seguidores. Los microcreadores jóvenes van a estar más activos: es el momento de buscarlos.",
      rd: "En RD el Viernes Negro dura un mes y viene con alianza bancaria. Si tu cliente vende al detalle, la conversación con el banco es parte del plan."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "La publicidad de tecnología en EE. UU. crece 13 % y la TV le gana a lo digital · Whatnot y Meta se le meten a TikTok Shop en las compras en vivo" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Ben Affleck dirige y protagoniza «High Stakes» pa’ Aflac · Oribe convierte su Navidad en un mosaico hecho a mano" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "La Gen Z vuelve al centro comercial, pero no siempre a comprar · 79 % siente que las ofertas ya no son como antes" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Experian lleva sus audiencias al clean room de Decentriq · El tráfico de agentes de IA va pa’ 150 veces más que el Cyber Week pasado" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Facebook le paga a universitarios con 1,000 seguidores pa’ que suban Reels" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Viernes Negro con descuentos de hasta 70 % con tarjeta · La fiesta de Telemicro en el Malecón va · Bocao Food Fest arma su barrio en la Plaza de la Cultura · Bayahíbe al 91.5 % de ocupación" }
  },

  notas: [
    {
      id: "techads", dep: "medios", peso: "principal",
      etiquetas: ["Inversión", "Tecnología", "TV"],
      titular: "Las marcas de tecnología le meten 13 % más a la publicidad en EE. UU., y la TV le gana a lo digital",
      corto: "La publicidad de tecnología crece y la TV gana",
      cuerpo: "Según un informe de Guideline, que usa datos de facturación de agencias y holdings, la inversión publicitaria de tecnología en EE. UU. creció 13 % interanual entre el primer y el tercer trimestre, hasta US$10,600 millones, y se proyecta un alza de 8 % en el cuarto trimestre. El software creció 36 % y ya es más de un tercio del total; las telecomunicaciones son 48.4 %. La TV sumó US$475 millones más (24 % arriba), empujada por los Juegos Olímpicos de Invierno y el Mundial. En digital, la programática subió 25 % y el video 24 %, mientras el search bajó 3 %. Guideline cree que las elecciones de medio término apretaron el inventario a principios del cuarto trimestre.",
      cifras: [
        { v: "+13 %", t: "inversión publicitaria de tecnología en EE. UU., del primer al tercer trimestre (US$10,600 millones)" },
        { v: "+24 %", t: "en TV: US$475 millones más de las marcas de tecnología" },
        { v: "−3 %", t: "en search, que Guideline le atribuye a los motores de IA" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Las marcas que más hablan de IA y de digital están poniendo su dinero en TV y en grandes eventos deportivos. Y el search, que era la apuesta segura, empieza a bajar. Eso cambia la conversación del plan 2027 con clientes de tecnología y telecom.",
      hacer: "Esta semana, saca la mezcla de medios 2026 de tus clientes de telecom y tecnología, compárala con estas cifras y lleva a la reunión de plan 2027 una propuesta de TV y deportes.",
      fuentes: [{ nombre: "Marketing Brew", url: "https://www.marketingbrew.com/stories/tech-ad-spend-growth-ai-industry-slowdown" }]
    },
    {
      id: "livecommerce", dep: "medios", peso: "secundaria",
      etiquetas: ["Comercio en vivo", "TikTok Shop", "Meta"],
      titular: "Whatnot y Meta se le meten a TikTok Shop en las compras en vivo del Viernes Negro",
      corto: "Whatnot y Meta van tras TikTok Shop",
      cuerpo: "TikTok Shop llega a este Viernes Negro con ventaja: en 2025 los vendedores y creadores hicieron más de 760,000 transmisiones en vivo en su campaña de Viernes Negro y Cyber Monday, y vendió más de US$500 millones en EE. UU. en esos cuatro días. Este año sus ventas en vivo en EE. UU. se duplicaron en el primer semestre, y su campaña de temporada va del 11 al 30 de noviembre con Best Buy, Ulta Beauty y Sephora. Ahora Whatnot y Meta (con Facebook Marketplace e Instagram) salen a pelearle ese público.",
      cifras: [
        { v: "760,000+", t: "transmisiones en vivo en TikTok Shop en Viernes Negro y Cyber Monday 2025" },
        { v: "US$500M+", t: "en ventas de TikTok Shop en EE. UU. en esos cuatro días" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "La compra en vivo ya es un canal con presupuesto propio, y ahora hay más de una plataforma compitiendo por él. Más competencia suele traer mejores condiciones pa’l anunciante.",
      fuentes: [{ nombre: "Tubefilter", url: "https://www.tubefilter.com/2026/11/23/whatnot-and-meta-are-taking-aim-at-tiktok-shops-black-friday-crown/" }]
    },

    {
      id: "aflac", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Aflac", "Celebridades"],
      titular: "El pato de Aflac por fin encuentra quien lo entienda: Ben Affleck",
      corto: "Ben Affleck habla «aflac» con el pato",
      cuerpo: "Aflac se unió a Artists Equity, la productora de Ben Affleck y Matt Damon, pa’ «High Stakes», un anuncio que parece escena de película. Affleck lo dirige y lo protagoniza. El chiste juega con el grito del pato, «¡Aflac!», que suena casi igual que el apellido del actor: un equipo en crisis no logra entenderse con la mascota hasta que entra Affleck y dice «I speak Aflac». De ahí en adelante, él traduce y hasta explica qué es el seguro suplementario.",
      cifras: [
        { v: "«High Stakes»", t: "nombre del anuncio, dirigido y protagonizado por Ben Affleck" },
        { v: "Artists Equity", t: "productora de Affleck y Matt Damon, socia de Aflac en la campaña" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La idea no salió de la celebridad, sino de la marca: el parecido entre el nombre de la mascota y el apellido del actor. Cuando el talento encaja con algo que la marca ya tiene, el anuncio se explica solo y hasta cabe el mensaje de producto.",
      hacer: "Workshop de 45 minutos esta semana: escoge un cliente con mascota, jingle o frase propia y busca qué talento local, por nombre o historia, conecta con ese activo.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/the-aflac-duck-finally-meets-its-match-in-ben-affleck/" }]
    },
    {
      id: "oribe", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Navidad", "Hecho a mano", "Oribe"],
      titular: "Oribe convierte su Navidad en un mosaico hecho a mano, y la gente responde como nunca",
      corto: "Oribe se luce con un mosaico hecho a mano",
      cuerpo: "La marca de cuidado del cabello Oribe lleva casi diez años trabajando con artistas pa’ sus campañas navideñas. Este año fue con la mosaiquista Mathilde Herrero, que diseñó un homenaje al mosaico del siglo XX pa’ la campaña y el empaque. La marca dice que la respuesta en redes y en prensa ha sido mayor que nunca, y lo atribuye a la lupa que tiene el público sobre el uso de IA generativa en los anuncios. Además, llevó la obra a un salón de Oklahoma pa’ una fiesta con sus clientes y la grabó pa’ redes.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Mostrar el proceso a mano es parte del mensaje. Oribe no solo hizo la pieza: contó cómo se hizo, y eso fue lo que le dio conversación.",
      fuentes: [{ nombre: "Marketing Brew", url: "https://www.marketingbrew.com/stories/oribe-handmade-holiday-campaigns-mosaic-strategy" }]
    },

    {
      id: "genzmall", dep: "planning", peso: "principal",
      etiquetas: ["Gen Z", "Viernes Negro", "Tienda física"],
      titular: "La Gen Z vuelve al centro comercial en Viernes Negro, pero muchos van a compartir y no a comprar",
      corto: "La Gen Z vuelve al centro comercial",
      cuerpo: "Según Circana, 43 % de los estadounidenses hará la mayor parte de sus compras navideñas entre hoy y el lunes. Deloitte dice que 94 % de la Gen Z piensa comprar esta semana, con un gasto promedio de US$752, el más alto de todas las edades. Y no todo es en línea: 48 % de la Gen Z fue a un centro comercial en las últimas dos semanas (Coresight) y gasta US$296 por visita (Stagwell). Pero 60 % dice que va «solo a socializar» (ICSC). Coresight encontró que crear contenido pa’ redes es una de las razones de la visita.",
      cifras: [
        { v: "94 %", t: "de la Gen Z piensa comprar esta semana, con US$752 de gasto promedio (Deloitte)" },
        { v: "US$296", t: "gasto promedio de la Gen Z por visita al centro comercial (Stagwell)" },
        { v: "60 %", t: "de los visitantes Gen Z va al centro comercial solo a socializar (ICSC)" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "La tienda física compite como experiencia, no como estante. Si la Gen Z va a encontrarse con sus amigos y a grabar contenido, el plan tiene que darle una razón pa’ pararse frente a la marca.",
      hacer: "Antes del lunes, revisa con un cliente de retail si su tienda o su punto de venta en centro comercial tiene un rincón que invite a fotografiarse, y propón uno pa’ diciembre.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/5-black-friday-truths-about-gen-z-shoppers-and-the-mall/" }]
    },
    {
      id: "harris", dep: "planning", peso: "secundaria",
      etiquetas: ["Viernes Negro", "Confianza", "Consumidor"],
      titular: "79 % siente que las ofertas ya no son como antes, y el Viernes Negro se estira hasta ser un mes",
      corto: "79 %: las ofertas ya no son como antes",
      cuerpo: "Una encuesta de The Harris Poll citada por Marketing Brew encontró que 79 % piensa que «las rebajas no son tan buenas como antes», 78 % siente que «las marcas son menos generosas» y casi tres de cada cuatro creen que el Viernes Negro y el Cyber Monday son «más bulla que ahorro». Más de la mitad dice que una temporada tan larga hace «más difícil saber cuándo comprar». Bark, por ejemplo, movió su inversión de ofertas a una campaña pa’ que adopten perros de refugio.",
      cifras: [
        { v: "79 %", t: "cree que las rebajas no son tan buenas como antes" },
        { v: "78 %", t: "siente que las marcas son menos generosas" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Si el consumidor ya no le cree al porcentaje, el plan de temporada tiene que dar otra razón: precio claro, producto escogido o una causa que se sienta real.",
      fuentes: [{ nombre: "Marketing Brew", url: "https://www.marketingbrew.com/stories/black-friday-deals-consumer-trust-brand-strategy" }]
    },

    {
      id: "decentriq", dep: "data", peso: "principal",
      etiquetas: ["Clean room", "Experian", "Datos propios"],
      titular: "Experian mete sus audiencias en el clean room de Decentriq, y el dato del anunciante no sale de la casa",
      corto: "Experian entra al clean room de Decentriq",
      cuerpo: "Decentriq, una plataforma independiente de colaboración de datos, anunció una alianza con Experian pa’ el Reino Unido. Las marcas y agencias podrán cruzar sus datos propios con la información demográfica, de comportamiento y de contexto de Experian dentro del clean room de Decentriq, que funciona con computación confidencial, sin que sus datos salgan de su control. La resolución de identidad de Experian promete mejores tasas de coincidencia y llega a más de 85 % de los hogares británicos.",
      cifras: [
        { v: "85 %+", t: "de los hogares del Reino Unido al alcance de la conectividad de Experian" },
        { v: "Reino Unido", t: "mercado de arranque de la alianza" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de data?",
      toca: "Cada vez más se usan audiencias externas sin entregar la base de clientes. Ese es el modelo que van a pedir los clientes grandes, también los de aquí, cuando suban sus datos a una plataforma.",
      hacer: "Esta semana, haz una lista de los clientes que tienen base de datos propia y anota con quién la cruzan hoy y si sus datos salen o no de su control.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/adweek-wire/experian-brings-audience-intelligence-and-enhanced-connectivity-to-the-decentriq-network/" }]
    },
    {
      id: "agentes", dep: "data", peso: "secundaria",
      etiquetas: ["Agentes de IA", "Tráfico", "Cyber Week"],
      titular: "El tráfico de agentes de IA va pa’ 150 veces más que en el Cyber Week pasado",
      corto: "Los agentes de IA salen de compras",
      cuerpo: "La firma de ciberseguridad Human Security proyecta que entre el 26 y el 30 de noviembre el tráfico de agentes de IA será 150 veces el del Cyber Week de 2025, y que la mayor parte vendrá de Muse, el asistente de Meta. El tráfico de agentes en tiendas se duplicaría desde los niveles previos a la temporada hasta su pico del fin de semana de Viernes Negro, igual que el salto de 145 % del año pasado. Se espera que bajen los bloqueos, aunque algunas tiendas siguen limitando a los agentes.",
      cifras: [
        { v: "150x", t: "el tráfico de agentes de IA frente al Cyber Week de 2025" },
        { v: "145 %", t: "el salto del tráfico de agentes en tiendas el año pasado" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si un agente visita la tienda en nombre del cliente, las métricas de visitas, rebote y conversión se ensucian. Hay que saber separar personas de máquinas en el reporte.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/commerce/ai-agent-traffic-to-surge-150x-this-cyber-week-driven-mostly-by-meta-muse/" }]
    },

    {
      id: "fbcollege", dep: "content", peso: "principal",
      etiquetas: ["Creadores", "Facebook", "Reels"],
      titular: "Facebook le paga a universitarios con 1,000 seguidores pa’ que suban Reels",
      corto: "Facebook le paga a universitarios por Reels",
      cuerpo: "Facebook amplió Creator Fast Track, su programa pa’ atraer creadores de otras plataformas, con una edición pa’ universitarios de EE. UU. que tengan desde 1,000 seguidores en Instagram, TikTok o YouTube. Les da acceso inmediato a la monetización de contenido y más alcance en Reels. Los que tienen más seguidores reciben tres meses de pago garantizado: de US$100 a US$450 al mes desde 20,000 seguidores, US$1,000 desde 100,000 y US$3,000 con más de un millón. Los pagos de Facebook a creadores llegaron a casi US$3,000 millones el año pasado, 60 % por Reels.",
      cifras: [
        { v: "1,000", t: "seguidores mínimos pa’ entrar a la edición universitaria" },
        { v: "US$3,000", t: "al mes pa’ los universitarios con más de un millón de seguidores" },
        { v: "60 %", t: "de los casi US$3,000 millones que Facebook pagó a creadores el año pasado fue por Reels" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Facebook está pagando pa’ que el creador joven publique ahí primero. Eso trae nuevos microcreadores con alcance empujado por la plataforma, y Facebook vuelve a ser un sitio pa’ buscar talento joven.",
      hacer: "Esta semana, revisa Reels de Facebook en tu categoría, apunta tres creadores jóvenes que estén subiendo contenido nuevo y compara su alcance con el que tienen en Instagram o TikTok.",
      fuentes: [{ nombre: "Tubefilter", url: "https://www.tubefilter.com/2026/11/23/facebook-paying-college-creators-to-post-reels/" }]
    },

    {
      id: "viernesnegro", dep: "rd", peso: "principal", para: ["planning", "medios"],
      etiquetas: ["Viernes Negro", "Consumo", "Banca"], fecha: "27 nov 2026",
      titular: "El Viernes Negro dominicano dura to’ noviembre, y con la tarjeta el descuento llega hasta 70 %",
      corto: "Viernes Negro: hasta 70 % con tarjeta",
      cuerpo: "Los comercios dominicanos estiraron las ofertas de Viernes Negro durante to’ noviembre, con rebajas de hasta 50 % que, con las alianzas bancarias, llegan hasta 70 % en algunos artículos, según Hoy. Los electrodomésticos son los favoritos. Los comerciantes esperan vender más que en 2025, en un contexto de crecimiento: las proyecciones apuntan a un PIB nominal 9.87 % arriba en noviembre, y el PIB real pasó de 2.1 % en 2025 a 4.7 % entre enero y octubre de 2026. Los compradores consultados valoran poder comparar precios con más tiempo.",
      cifras: [
        { v: "70 %", t: "descuento máximo en algunos artículos, sumando la alianza bancaria" },
        { v: "50 %", t: "rebaja máxima de los comercios sin el beneficio de la tarjeta" },
        { v: "4.7 %", t: "crecimiento del PIB real entre enero y octubre de 2026" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "En RD el Viernes Negro ya no es un día, es un mes, y el banco es parte de la oferta. Pa’ el cliente de retail, la pieza que dice cuánto ahorras con cuál tarjeta pesa tanto como el porcentaje de la tienda.",
      hacer: "Hoy mismo, revisa las piezas de Viernes Negro de tus clientes de retail y verifica que digan claro con qué banco aplica el descuento extra y hasta cuándo dura.",
      fuentes: [{ nombre: "Hoy", url: "https://hoy.com.do/economia/alianza-bancos-tiendas-dinamizan-viernes-negro_1110065.html" }]
    },
    {
      id: "telemicro", dep: "rd", peso: "secundaria", para: ["medios", "creatividad"],
      etiquetas: ["Medios", "Eventos", "Fin de año"], fecha: "26 nov 2026",
      titular: "Vuelve la fiesta de fin de año de Telemicro en el Malecón: Obras Públicas repara la zona antes del 20",
      corto: "La fiesta de Telemicro en el Malecón va",
      cuerpo: "La fiesta de fin de año del Grupo de Medios Telemicro se hará el 31 de diciembre en el Malecón de Santo Domingo, luego de que el ministro de Obras Públicas, Eduardo Estrella, se comprometiera a reparar antes del 20 de diciembre el área donde se instala la tarima. Horas antes, el periodista Domingo del Pilar había anunciado la suspensión del evento por el deterioro de la estructura, por razones de seguridad.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Es uno de los eventos de fin de año que reúne a miles en la avenida George Washington. Las marcas que estaban esperando la confirmación ya pueden moverse con patrocinios y activaciones.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/conciertos/20261126/fiesta-ano-telemicro-celebrara-acuerdo-obras-publicas_931658.html" }]
    },
    {
      id: "bocao", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Eventos", "Gastronomía", "Experiencias de marca"], fecha: "27 nov 2026",
      titular: "Bocao Food Fest arma un barrio entero en la Plaza de la Cultura: el Ensanche Bocao",
      corto: "Bocao Food Fest estrena su Ensanche",
      cuerpo: "El Bocao Food Fest se muda a la Plaza de la Cultura con un concepto inspirado en los viejos vecindarios de Santo Domingo: el Ensanche Bocao, con zonas como El Colmadito, Parquecito / La Fuente, Avenida Bocao y Paseo Cultural. Habrá restaurantes, bares, kioscos, talleres, museos y experiencias de marca; el Museo de Arte Moderno abre los tres días, y por primera vez se llega en metro, por la estación Casandra Damirón. En el cartel están Maché Maché, DJ Carlos Rodríguez, Riccie Oriach, El Blachy y Martox, entre otros.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Un festival con concepto de barrio y colmadito es material perfecto pa’ contenido con sabor local, y las experiencias de marca están en el recorrido.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/27/festival-gastronomico-bocao-food-fest-en-plaza-de-la-cultura/3732712" }]
    },
    {
      id: "bayahibe", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Cruceros", "Mitur"], fecha: "26 nov 2026",
      titular: "Bayahíbe y La Romana tienen la ocupación hotelera más alta del país: 91.5 % y 87.4 %",
      corto: "Bayahíbe, al 91.5 % de ocupación",
      cuerpo: "Bayahíbe y La Romana registraron las tasas de ocupación hotelera más altas del país en los primeros diez meses de 2026, con 91.5 % y 87.4 %, según cifras del Ministerio de Turismo compartidas por la Asociación de Hoteles La Romana-Bayahíbe. Además, desde el 16 de noviembre MSC Cruises opera salidas semanales desde La Romana to’ el año, y Central Romana firmó acuerdos a diez años con AIDA Cruises y Costa Cruceros.",
      cifras: [
        { v: "91.5 %", t: "ocupación hotelera de Bayahíbe hasta octubre de 2026" },
        { v: "87.4 %", t: "ocupación de La Romana en el mismo período" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/turismo/2026/11/26/destacan-niveles-de-ocupacion-hotelera-en-bayahibe-y-la-romana/3732744" }]
    },
    {
      id: "marcasblancas", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Industria", "Marcas blancas", "Consumo"], fecha: "26 nov 2026",
      titular: "Los industriales de Herrera avisan: las marcas blancas y los importados le aprietan el paso a la industria local",
      corto: "Las marcas blancas aprietan a la industria local",
      cuerpo: "Francis Mateo, primer vicepresidente de la Asociación Nacional de Empresas e Industrias Herrera (Aneih), advirtió que la creciente presencia de marcas blancas y productos importados presiona a los fabricantes locales en producción, inversión y empleo, y pidió condiciones de competencia equitativas. En el mismo encuentro, Vladimir Pimentel, de ProDominicana, informó que la manufactura local creció 1.4 % en 2025 y generaba 151,881 empleos formales a diciembre.",
      cifras: [
        { v: "151,881", t: "empleos formales de la manufactura local a diciembre de 2025" },
        { v: "1.4 %", t: "crecimiento de la manufactura local en 2025" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Cuando la marca blanca le compite en precio a la marca de toda la vida, la marca tiene que defenderse con algo más que el precio: origen, calidad y cariño del público.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/11/26/la-aneih-advierte-sobre-presion-de-marcas-blancas-a-industria-local/3732410" }]
    },
    {
      id: "merengue", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Merengue", "Navidad"], fecha: "26 nov 2026",
      titular: "Steffany Constanza y El Jeffrey le ponen merengue a la Navidad con «Que no pare la música»",
      corto: "Merengue navideño de Steffany y El Jeffrey",
      cuerpo: "Steffany Constanza y El Jeffrey unieron sus voces en «Que no pare la música», un merengue pa’ las fiestas que ya suena en las emisoras del país. Junta a dos generaciones del género: una intérprete joven y un artista con décadas de trayectoria. La letra y la música son de Luis Medrano, con arreglos de José Antonio Hernández y Moisés Sánchez.",
      tocaTitulo: "¿Y eso qué?",
      toca: "La temporada de merengue navideño ya arrancó en la radio. Pa’ las marcas que quieren sonar a Navidad dominicana, este es el momento de escoger la música de diciembre.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/26/merengue-navideno-de-steffany-constanza-y-el-jeffrey/3732609" }]
    },
    {
      id: "proconsumidor", dep: "rd", peso: "secundaria", para: ["data", "planning"],
      etiquetas: ["Regulación", "Pro Consumidor", "Comercio"], fecha: "26 nov 2026",
      titular: "Pro Consumidor sanciona a ocho comercios más, y ya van por lo menos 16 en noviembre",
      corto: "Pro Consumidor ya sancionó 16 comercios",
      cuerpo: "Pro Consumidor anunció sanciones contra otros ocho establecimientos de capital chino en el Distrito Nacional, Santo Domingo Este, Santo Domingo Norte, Santiago, Baní, Azua y San José de Ocoa, por incumplir la Ley 358-05 de protección al consumidor. Con estos, suman por lo menos 16 los negocios sancionados este mes; los primeros ocho, anunciados el 5 de noviembre, fueron por vender productos sin registro sanitario, entre otras faltas. La institución no precisó las infracciones de cada uno.",
      cifras: [{ v: "16", t: "comercios sancionados por Pro Consumidor en noviembre, como mínimo" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "En plena temporada de ofertas, Pro Consumidor está en la calle. Los clientes de retail tienen que tener en regla registros sanitarios, precios y condiciones de sus promociones.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/11/26/pro-consumidor-impone-sanciones-a-establecimientos-comerciales-chinos/3732593" }]
    }
  ],

  pizarra: ["techads", "aflac", "genzmall", "decentriq", "fbcollege", "viernesnegro"],

  frases: [
    { dep: "planning", texto: "El 60 % de la Gen Z va al centro comercial solo a compartir: la tienda compite como plan con amigos, no como estante.", uso: "pa’ conversaciones de retail y temporada" },
    { dep: "creatividad", texto: "Aflac no buscó una celebridad: buscó a alguien cuyo apellido suena igual que el grito de su pato.", uso: "pa’ conversaciones de talento y activos de marca" },
    { dep: "medios", texto: "Las marcas de tecnología le metieron 24 % más a la TV, mientras el search bajó 3 %.", uso: "pa’ la conversación del plan 2027" },
    { dep: "data", texto: "Esta semana los agentes de IA salen de compras: 150 veces más tráfico que el Cyber Week pasado.", uso: "pa’ conversaciones de medición y analítica web" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "La TV le gana a lo digital en tecnología" },
      { id: "creatividad", texto: "Ben Affleck y el pato de Aflac" },
      { id: "planning", texto: "La Gen Z en el centro comercial" },
      { id: "data", texto: "Experian en el clean room de Decentriq" },
      { id: "content", texto: "Facebook le paga a universitarios" },
      { id: "rd", texto: "Zoom a RD: Viernes Negro con tarjeta" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "techads", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "genzmall", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Del Viernes Negro al Cyber Monday, 43 % de los estadounidenses hace la mayor parte de sus compras navideñas. La Gen Z va a la tienda con amigos: dale un momento pa’ compartir, no solo una oferta."
    },
    data: {
      tipo: "secreto", nota: "agentes", titulo: "Destapa el expediente",
      texto: "Human Security proyecta que en este Cyber Week el tráfico de agentes de IA será [[150 veces]] el del año pasado, y que la mayor parte vendrá de [[Muse, el asistente de Meta]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "bayahibe", titulo: "La pregunta del patio",
      p: "¿Qué destino tuvo la ocupación hotelera más alta del país hasta octubre de 2026?",
      opciones: ["Punta Cana", "Bayahíbe", "Puerto Plata"], correcta: 1,
      explicacion: "Bayahíbe llegó a 91.5 % y La Romana a 87.4 %, según cifras del Ministerio de Turismo compartidas por la Asociación de Hoteles La Romana-Bayahíbe."
    }
  }
};
