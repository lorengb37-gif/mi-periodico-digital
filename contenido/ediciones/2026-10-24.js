/*
  El Pulso Publicitario · edición N.º 297 · 24 de octubre de 2026
*/
window.EDICION = {
  numero: 297,
  fechaISO: "2026-10-24",
  fecha: "Sábado 24 de octubre 2026",
  fechaCorta: "24 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Esta semana el poder se movió: cuentas que cambian de manos, plataformas que reescriben sus reglas y compradores que verifican lo que la IA les dice.",
    largo: "Coca-Cola le entregó Norteamérica a Omnicom, Meta tuvo que mover sus términos al 20 de noviembre y Google dejó claro que tus datos de Gmail pueden ayudar a escoger anuncios. Del lado del comprador, la IA recomienda, pero la gente igual revisa reseñas y precios. Y aquí en el patio, el Banco Central dice que la inflación bajó a 5.12 %. El consejo de hoy: escoge una de estas notas, llévala al cliente el lunes y ponle fecha a la decisión.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, llévalo al cliente el lunes y ponle fecha. Así de fácil.",
    porDep: {
      medios: "Cuando un cliente cambia de holding o de plataforma, lo primero es proteger la continuidad: documenta cómo se compra hoy antes de que cambie.",
      creatividad: "Una colaboración con alguien que ya tiene su historia contada vale más que inventar un personaje: busca al aliado que ya tenga público.",
      planning: "La IA abre la puerta del embudo, pero cierra la compra la reseña. Planifica la conversación completa, no solo el primer clic.",
      data: "Revisa qué cambió en los términos y políticas de tus plataformas antes de que cambie la fecha, y deja anotado qué datos del cliente tocan.",
      content: "Prueba la herramienta nueva con un activo real del cliente, y deja que el equipo decida qué sale al aire.",
      rd: "En RD los datos oficiales mandan: con inflación a la baja y economía arriba, el cliente va a querer hablar de planes de Q4. Llega con números."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Omnicom se queda con la cuenta de medios de Coca-Cola en Norteamérica · Walmart Connect ofrece estudios de lift directo a las marcas · F1 lanza una red de audio con Consumable" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Away nombra a John Summit «Chief Destruction Officer» tras quemar una Rimowa · Victoria’s Secret convierte su desfile en un evento participativo" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "La IA abre la búsqueda de regalos, pero la gente sigue revisando reseñas y precios · Meta cierra el tercer trimestre con US$64,600M en ingresos" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Meta mueve sus términos de IA al 20 de noviembre tras quejas de editores · Google permite que datos de Gmail y Photos ayuden a escoger anuncios" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Gemini suma herramientas de marca para negocios · Meta Muse supera 10 millones de descargas y la gente la usa pa’ comprar" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "omnicom", dep: "medios", peso: "principal",
      etiquetas: ["Cuentas", "Omnicom", "Coca-Cola"],
      titular: "Coca-Cola le entrega su medios de Norteamérica a Omnicom, y WPP se queda con lo global",
      corto: "Omnicom se lleva los medios de Coca-Cola en Norteamérica",
      cuerpo: "Omnicom ganó la cuenta de medios de Coca-Cola en Estados Unidos y Canadá, según dos fuentes citadas por Digiday, un negocio que se estima entre US$700 y US$800 millones. WPP mantiene el trabajo global fuera de Japón y Corea del Sur, que siguen con Dentsu. La revisión estuvo a cargo de Mediasense y el trabajo arranca el 1 de diciembre. Llega semanas después de que PepsiCo cerrara su relación con Omnicom y se la diera a Publicis.",
      cifras: [
        { v: "US$700–800M", t: "valor estimado de la cuenta de EE. UU. y Canadá" },
        { v: "1 dic", t: "fecha en que arranca el trabajo" },
        { v: "US$75,600M", t: "en billings de Omnicom, el mayor grupo de medios del mundo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Cuando una cuenta de esta talla cambia de casa, las agencias locales de un holding sienten el movimiento en procesos, herramientas y equipos. Y Coca-Cola puso el dedo en la llaga: según su CMO, el 70 % de su inversión de medios ya va a anuncios en redes y contenido de creadores.",
      hacer: "Esta semana, revisa cuánto de tu plan de medios de cada cliente depende de redes y creadores, y ten listo un resumen de una página con ese reparto, por si el cliente pregunta qué hace la competencia.",
      fuentes: [
        { nombre: "Digiday", url: "https://digiday.com/media-buying/omnicom-lands-coca-colas-north-american-media-business/" },
        { nombre: "Adweek", url: "https://www.adweek.com/agencies/omnicom-nabs-coca-colas-north-america-media-account-while-wpp-retains-globally/" }
      ]
    },
    {
      id: "walmart", dep: "medios", peso: "secundaria",
      etiquetas: ["Retail media", "Walmart Connect", "Medición"],
      titular: "Walmart Connect toca la puerta de las marcas directo, sin pasar por la agencia",
      corto: "Walmart ofrece estudios de lift directo a las marcas",
      cuerpo: "Antes de la temporada navideña, el equipo de ventas de Walmart Connect empezó a ofrecerles a las marcas estudios de lift en su propio sitio, saltándose a las agencias. Tres ejecutivos de agencia le contaron a Digiday que varios clientes ya fueron contactados. La duda de fondo es si el estudio responde la gran pregunta del retail media: si la campaña generó ventas nuevas o el retailer se apuntó una compra que iba a pasar igual.",
      cifras: [{ v: "Q4", t: "momento en que los CFO y CMO piden más pruebas de retorno" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si el retailer mide su propia tarea, la agencia tiene que tener su propio método pa’ comprobar la incrementalidad.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/walmart-connect-pitches-brands-directly-as-it-pushes-lift-studies-ahead-of-holiday-ad-deals/" }]
    },
    {
      id: "f1audio", dep: "medios", peso: "secundaria",
      etiquetas: ["Audio", "Deportes", "Formula 1"],
      titular: "F1 se mete al audio: lanza una red de anuncios con Consumable",
      corto: "F1 lanza red de audio con Consumable",
      cuerpo: "Formula 1 y Consumable lanzaron el F1 Audio Network, un producto que empaqueta a los fanáticos de la F1 como audiencia de audio y lo vende a marcas por la app móvil de Consumable. Según el comunicado, la plataforma llega a más de 220 millones de usuarios mensuales verificados por Comscore en EE. UU. y más de 830 millones en el mundo. No dijeron en qué apps salen los anuncios ni cuánto cuestan.",
      cifras: [
        { v: "220M", t: "usuarios mensuales en EE. UU. verificados por Comscore" },
        { v: "30,000M", t: "impresiones de audio al mes, según Consumable" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/formula-1-starts-selling-audio-ads-through-consumables-220m-user-network/" }]
    },

    {
      id: "away", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Away", "Influencers"],
      titular: "Away convierte una maleta quemada en campaña: John Summit es su «Chief Destruction Officer»",
      corto: "Away convierte una maleta quemada en campaña",
      cuerpo: "Away nombró al DJ y productor John Summit su «Chief Destruction Officer», tras un video viral en Instagram donde quemó su maleta Rimowa. La historia: después de que se le rompiera la sexta Rimowa en una gira, la prendió fuego en un estacionamiento, le puso el nombre «Samantha» y lo publicó con la canción «Sorry» de Justin Bieber. Ahora llega una alianza exclusiva con la marca rival.",
      cifras: [
        { v: "6", t: "maletas Rimowa rotas en gira antes de la quema" },
        { v: "Exclusiva", t: "alianza de Summit con Away" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Away no inventó un embajador: le firmó a quien ya había hecho el contenido que ellos querían. El mejor casting a veces ya existe y está en tu feed.",
      hacer: "Esta semana, revisa con tu equipo social los momentos virales de las últimas semanas que tengan que ver con la categoría de tus clientes, y apunta quién los protagonizó pa’ proponerlo como posible aliado.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/after-torching-a-rimowa-john-summit-becomes-aways-chief-destruction-officer/" }]
    },
    {
      id: "vs", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Victoria’s Secret", "Eventos"],
      titular: "Victoria’s Secret convierte su desfile en una noche de fans",
      corto: "Victoria’s Secret hace su desfile más participativo",
      cuerpo: "El desfile de este año se hizo en Los Ángeles el 18 de octubre y se transmitió en YouTube y las redes de la marca, seguido de su primer TikTok Live después del show. Según Adweek, la marca usó ticket drops y una búsqueda nacional de una nueva Angel, en una serie llamada «Angels Among Us». Es el segundo show bajo la CMO Elizabeth Preis.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/amid-turnaround-victorias-secret-turns-its-fashion-show-into-a-fan-movement/" }]
    },

    {
      id: "aishop", dep: "planning", peso: "principal",
      etiquetas: ["Consumidor", "IA", "Temporada"],
      titular: "La IA abre la búsqueda de regalos, pero la gente sigue revisando reseñas y precios",
      corto: "La IA abre la compra, la reseña la cierra",
      cuerpo: "Según una encuesta y datos de PartnerCentric citados por Digiday, el 16 % de los compradores empieza a buscar productos en ChatGPT, pero solo el 9 % lo usa pa’ comprar. Cuando un asistente recomienda algo, solo el 5 % compra de inmediato. Tras una sugerencia de IA, el 33 % va a leer reseñas, el 22.3 % compara precios y el 18.8 % busca en Amazon u otro retailer. Solo el 14.8 % visita la web de la marca.",
      cifras: [
        { v: "16 % / 9 %", t: "empieza a buscar en ChatGPT / lo usa pa’ comprar" },
        { v: "33 %", t: "va a las reseñas tras una recomendación de IA" },
        { v: "14.8 %", t: "visita la web de la marca" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "La IA ya gana el paso de investigar, pero la decisión se toma en las reseñas, los precios y la política de envíos y devoluciones. El 33 % dice que esas políticas cambian lo que compra.",
      hacer: "Antes de cerrar el plan de Q4, pídele a cada cliente que revise sus reseñas, sus precios y su política de devoluciones como si fueran un anuncio más, y súmalo al brief de temporada.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/ai-boosts-discovery-but-reviews-still-seal-the-deal-new-research-shows/" }]
    },
    {
      id: "metaq3", dep: "planning", peso: "secundaria",
      etiquetas: ["Plataformas", "Meta", "Resultados"],
      titular: "Meta cierra el tercer trimestre con US$64,600M y anuncios 14 % más caros",
      corto: "Meta factura US$64,600M y sube el precio de los anuncios",
      cuerpo: "Meta reportó ingresos del tercer trimestre de US$64,600 millones, 26 % más que hace un año. Su audiencia diaria de toda la familia de apps subió 40 millones, hasta 3,640 millones. Los precios de los anuncios subieron 14 %, mientras que los gastos crecieron 68 % por la inversión en IA.",
      cifras: [
        { v: "+26 %", t: "ingresos interanuales del trimestre" },
        { v: "3,640M", t: "personas activas al día en la familia de apps" },
        { v: "+14 %", t: "en el precio de los anuncios" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-adds-users-and-revenue-as-ai-costs-climb/833671/" }]
    },

    {
      id: "metadelay", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "Meta", "Términos"],
      titular: "Meta mueve sus nuevos términos al 20 de noviembre, pero no dijo que vaya a cambiarlos",
      corto: "Meta aplaza al 20 de noviembre sus términos de IA",
      cuerpo: "Meta aplazó del 30 de octubre al 20 de noviembre de 2026 la entrada en vigor de sus Términos Comerciales y de Anuncios, según un vocero citado por Reuters el viernes 23 de octubre. Editores y anunciantes se quejaron ante las autoridades de competencia de la UE y el Reino Unido porque el contrato le daría a Meta un derecho amplio de usar su contenido pa’ sus servicios de IA. Meta rechaza esa lectura y no dijo que modificará el texto. El presidente de la News Media Association lo resumió como «a pause not a solution».",
      cifras: [
        { v: "20 nov", t: "nueva fecha de entrada en vigor, antes 30 de octubre" },
        { v: "3 semanas", t: "de extensión que dio Meta" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Los reguladores de la UE y el Reino Unido están mirando los términos de las plataformas de cerca.",
        "El texto sigue igual: la pausa da tiempo, no cambia las obligaciones."
      ],
      hacer: "Pídele al área legal o al responsable de cada cuenta que lea la cláusula de contenido y rastreo de sitios de los nuevos términos antes del 20 de noviembre, y avísale al cliente qué contenido propio queda cubierto.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/meta-delays-its-ai-terms-to-november-20-the-trust-problem-does-not-move/" }]
    },
    {
      id: "gmailads", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Google", "Anuncios"],
      titular: "Google cambia su promesa: los datos de Gmail y Photos pueden ayudar a escoger anuncios",
      corto: "Google cambia la promesa sobre datos de Gmail",
      cuerpo: "La política de privacidad de Google, vigente desde el 16 de octubre de 2026, dice que puede personalizar anuncios con datos de Gmail, Drive y Google Photos de quienes permitan que Search o Gemini Apps lean esos servicios. Desde el 1 de julio de 2021 la política prometía lo contrario con el mismo texto. Según PPC Land, los anunciantes no ven los correos ni las fotos, pero los anuncios sí pueden salir de resúmenes o inferencias de ese contenido.",
      cifras: [{ v: "16 oct 2026", t: "fecha de vigencia de la nueva política" }],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-lets-connected-gmail-and-photos-data-shape-ads-5-years-after-pledge/" }]
    },

    {
      id: "gemini", dep: "content", peso: "principal",
      etiquetas: ["IA", "Gemini", "Herramientas"],
      titular: "Gemini suma herramientas de marca pa’ negocios: sube tu logo, tus fuentes y tus colores",
      corto: "Gemini suma herramientas de marca pa’ negocios",
      cuerpo: "Google actualizó Gemini con herramientas pa’ negocios: una página de inicio renovada, conexión con apps de terceros como Adobe, Canva, Dropbox y Shopify, y la opción de subir imágenes de marca, tipografías, paletas de color y enlaces del sitio pa’ que genere imágenes con ese contexto. Google dice que con Nano Banana 2.1 puede dar resultados visuales completos pa’ lanzamientos o campañas. También convierte hojas de cálculo y recibos en gráficos financieros.",
      cifras: [
        { v: "4", t: "apps de terceros mencionadas: Adobe, Canva, Dropbox y Shopify" },
        { v: "Nano Banana 2.1", t: "modelo de imágenes que usa Gemini" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si le das la identidad visual de una marca una sola vez y Gemini la recuerda, el primer borrador de una pieza sale en minutos. Eso sí: conectar datos del negocio a la IA exige confiarle información sensible.",
      hacer: "Prueba esta semana la carga de marca con un cliente que lo permita (logo, tipografías, paleta) y compara 5 borradores contra lo que el equipo de diseño haría. Anota qué sale bien y qué hay que corregir.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/google-adds-brand-management-tools-to-gemini/833790/" }]
    },
    {
      id: "muse", dep: "content", peso: "secundaria",
      etiquetas: ["IA", "Meta", "Compras"],
      titular: "Meta Muse pasa de 10 millones de descargas y la gente la usa pa’ comprar",
      corto: "Muse supera 10 millones de descargas",
      cuerpo: "En la llamada de resultados, Mark Zuckerberg dijo que Muse, el agente de IA de Meta, superó los 10 millones de descargas y que casi todos los días está de primera en la App Store. Cerca del 25 % de quienes la configuraron la usa en un día cualquiera. Más del 25 % de los usuarios le pide ayuda pa’ buscar ofertas y comprar, y la compra promedio supera los US$200.",
      cifras: [
        { v: "10M+", t: "descargas de Muse" },
        { v: "25 %", t: "de quienes la configuraron la usa cada día" },
        { v: "US$200+", t: "compra promedio dentro de Muse" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-says-shopping-is-muses-primary-use-case/833808/" }]
    },

    {
      id: "bcrd", dep: "rd", peso: "principal", para: ["planning", "medios", "data"],
      etiquetas: ["Economía", "Banco Central", "Consumo"], fecha: "23 oct 2026 · Banco Central",
      titular: "El Banco Central dice que la inflación bajó a 5.12 % y la economía crece 4.6 % hasta septiembre",
      corto: "Banco Central: inflación a 5.12 % y economía arriba 4.6 %",
      cuerpo: "Santo Domingo.— El gobernador del Banco Central, Héctor Valdez Albizu, informó en el 79 aniversario de la institución que la inflación interanual se moderó a 5.12 % en septiembre, luego de un máximo de 5.67 % en junio. La economía creció 5.6 % interanual en septiembre (según el IMAE) y 4.6 % en enero-septiembre. La proyección apunta a un crecimiento cerca de 4.5 % al cierre de 2026. Sobresalen construcción (8.2 %), servicios financieros (7.8 %) y hoteles, bares y restaurantes (5.6 %).",
      cifras: [
        { v: "5.12 %", t: "inflación interanual en septiembre, tras 5.67 % en junio" },
        { v: "4.6 %", t: "crecimiento acumulado de enero a septiembre" },
        { v: "≈4.5 %", t: "crecimiento proyectado al cierre de 2026" },
        { v: "7.4 %", t: "crecimiento interanual del crédito privado en moneda nacional" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Con la inflación bajando y los sectores de servicios, hoteles y restaurantes creciendo, los clientes de esas categorías van a querer apretar el acelerador en Q4. Hay que llegar con datos, no con corazonadas.",
      hacer: "Arma esta semana una lámina de una página con estas cifras del Banco Central y úsala en las conversaciones de presupuesto de Q4 con clientes de turismo, banca y restaurantes.",
      fuentes: [
        { nombre: "elDinero", url: "https://eldinero.com.do/386064/inflacion-se-modera-a-5-12-y-economia-dominicana-crece-4-6-a-septiembre/" },
        { nombre: "elDinero", url: "https://eldinero.com.do/386039/valdez-albizu-anuncio-que-la-economia-dominicana-crecio-5-6-interanual-en-septiembre-2026/" }
      ]
    },
    {
      id: "rosalia", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Juan Luis Guerra", "Billboard"], fecha: "23 oct 2026",
      titular: "Juan Luis Guerra le entrega a Rosalía el Salón de la Fama de Billboard",
      cuerpo: "Rosalía recibió el Premio Billboard Salón de la Fama y fue Juan Luis Guerra quien se lo entregó. Según Remolacha, la artista le dijo que era «un maestro entre maestros».",
      tocaTitulo: "¿Y eso qué?",
      toca: "Un momento de música dominicana con alcance global, de los que la gente comparte y comenta en redes.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/juan-luis-guerra-rosalia/" }]
    },
    {
      id: "rainieri", dep: "rd", peso: "secundaria", para: ["planning", "content", "creatividad"],
      etiquetas: ["Cultura", "Turismo", "Punta Cana"], fecha: "23 oct 2026 · Punta Cana",
      titular: "Abre el Centro Cultural Rainieri en Punta Cana, un espacio pa’ el turismo cultural",
      cuerpo: "Don Frank Rainieri, fundador de Grupo Puntacana, y su esposa, Haydée Kuret de Rainieri, inauguraron el Centro Cultural Rainieri, un espacio dedicado a preservar la identidad dominicana y promover el turismo cultural.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/10/23/inauguracion-del-centro-cultural-rainieri-en-punta-cana/3698426" }]
    },
    {
      id: "coe", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Clima", "COE", "Comunicación"], fecha: "23 oct 2026",
      titular: "El COE sube a 9 las provincias en alerta amarilla, el Distrito Nacional incluido",
      cuerpo: "El Centro de Operaciones de Emergencias (COE) amplió a 9 las provincias en alerta amarilla, incluido el Distrito Nacional, y mantiene 16 en alerta verde, según los pronósticos del Indomet.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ medios y redes: con lluvias en el pronóstico, revisa las activaciones al aire libre y el tono de lo que programas esta semana.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/coe-amplia-a-9-las-provincias-en-alerta-amarilla/" }]
    },
    {
      id: "combustibles", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Consumo", "Combustibles"], fecha: "24 oct 2026",
      titular: "Los combustibles no cambian de precio del 24 al 30 de octubre",
      cuerpo: "El Ministerio de Industria, Comercio y Mipymes repitió pa’ la semana del 24 al 30 de octubre los mismos precios de la semana anterior en los seis combustibles.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/precio-de-la-gasolina-y-el-gasoil-del-24-al-30-de-octubre/" }]
    }
  ],

  pizarra: ["omnicom", "away", "aishop", "metadelay", "gemini", "bcrd"],

  frases: [
    { dep: "medios", texto: "Coca-Cola ya destina el 70 % de su inversión de medios a redes y contenido de creadores, y acaba de poner su cuenta de Norteamérica en manos de Omnicom.", uso: "para conversaciones de mezcla de medios" },
    { dep: "creatividad", texto: "Away no inventó un embajador: le firmó al DJ que ya había quemado una Rimowa en Instagram.", uso: "para conversaciones de casting y alianzas" },
    { dep: "planning", texto: "La IA ya gana la investigación, pero solo el 5 % compra al instante lo que recomienda: la reseña cierra la venta.", uso: "para conversaciones de embudo y temporada" },
    { dep: "data", texto: "Meta movió sus términos al 20 de noviembre, pero el texto sigue igual: una pausa no es una solución.", uso: "para conversaciones de privacidad y contratos" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Omnicom se lleva los medios de Coca-Cola" },
      { id: "creatividad", texto: "Away y la maleta quemada" },
      { id: "planning", texto: "La IA abre, la reseña cierra" },
      { id: "data", texto: "Meta aplaza sus términos al 20 de noviembre" },
      { id: "content", texto: "Gemini suma herramientas de marca" },
      { id: "rd", texto: "Zoom a RD: inflación a 5.12 %" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "omnicom", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "aishop", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Tras una recomendación de IA, el 33 % revisa reseñas antes de comprar. Antes de cerrar el plan navideño, revisa reseñas, precios y política de devoluciones de cada cliente."
    },
    data: {
      tipo: "secreto", nota: "gmailads", titulo: "Destapa el expediente",
      texto: "La política de privacidad de Google, vigente desde el [[16 de octubre de 2026]], permite personalizar anuncios con datos de [[Gmail, Drive y Google Photos]] si la persona autoriza a Search o Gemini a leerlos."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "gemini", titulo: "Arma tu pregunta pa’ Gemini",
      intro: "Con las herramientas de marca de Gemini, ayúdame con lo siguiente:",
      opciones: [
        "Genera 5 borradores de imagen pa’ el lanzamiento de un producto usando mi logo, mis fuentes y mi paleta",
        "Resume en un gráfico simple los números de esta hoja de cálculo",
        "Propón tres ideas de publicaciones pa’ esta semana con el estilo de mi marca"
      ],
      cierre: "Señala qué partes de tu respuesta necesitan revisión humana antes de publicarse."
    },
    rd: {
      tipo: "pregunta", nota: "bcrd", titulo: "La pregunta del patio",
      p: "¿A cuánto se moderó la inflación interanual en septiembre, según el Banco Central?",
      opciones: ["4.61 %", "5.12 %", "5.67 %"], correcta: 1,
      explicacion: "Fue 5.12 % en septiembre. El 5.67 % fue el máximo de junio y el 4.61 % es la inflación subyacente."
    }
  }
};
