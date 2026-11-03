/*
  El Pulso Publicitario · edición N.º 307 · 3 de noviembre de 2026
*/
window.EDICION = {
  numero: 307,
  fechaISO: "2026-11-03",
  fecha: "Martes 3 de noviembre 2026",
  fechaCorta: "3 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Cuando el cliente compra, crea y pregunta con IA, gana la agencia que sabe qué parte la hace una máquina y cuál la revisa una persona.",
    largo: "Más de 400 millones de clientes ya compran con Alexa, el asistente de Meta arma guiones y responde comentarios, y Svedka le entrega su próximo anuncio al público después de la polémica de su primer spot con IA. Meta frena unos términos comerciales por la mirada de los reguladores, y WPP Media crece por primera vez en dos años. Aquí en el patio, más de 73 mil personas ya se forman en IA con RD Inteligente y los negocios tienen hasta el 15 de noviembre pa’ la facturación electrónica. El consejo: esta semana define qué hace la IA en tu agencia y qué revisa una persona.",
    corto: "Esta semana define qué hace la IA en tu agencia y qué revisa siempre una persona.",
    porDep: {
      medios: "Si el cliente vende en Amazon, averigua qué lugar tendrán los anuncios en las respuestas de los asistentes de compra antes de que te lo pregunte.",
      creatividad: "Cuando una marca invita al público a crear, da reglas claras y un premio claro. Una buena convocatoria vale más que un comercial caro.",
      planning: "Cuando una cuenta se reparte entre agencias, explica con una página cómo tu estrategia conecta medios y creatividad.",
      data: "Antes de que una plataforma cambie sus términos, mira qué datos del cliente quedan expuestos. Lo que no leíste igual te aplica.",
      content: "Úsalo pa’ ahorrar tiempo en guiones y respuestas, pero ninguna respuesta sale en nombre de la marca sin que una persona la lea.",
      rd: "Cada vez más dominicanos aprenden IA. Cuéntale al cliente cómo la usas y dónde pones los límites."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Más de 400 millones de clientes ya compraron con Alexa for Shopping · El retail media casi no llega a la tienda física" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Svedka le entrega su anuncio del Super Bowl al público, con US$500,000 en premio · Meta muestra el rendimiento de cada pieza del anuncio" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "WPP Media crece por primera vez en dos años y retiene la media global de Coca-Cola" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Meta podría retrasar indefinidamente sus nuevos términos comerciales · TikTok estrena un centro de seguridad de marca" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "El asistente de IA de Meta pa’ creadores avisa de tendencias y arma guiones" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "RD Inteligente pasa de 73 mil inscritos en IA · Facturación electrónica: plazo hasta el 15 de noviembre · ProCompetencia presenta sus herramientas en la OCDE" }
  },

  notas: [
    {
      id: "alexa", dep: "medios", peso: "principal",
      etiquetas: ["Amazon", "Alexa", "IA de compras"],
      titular: "Más de 400 millones de clientes ya usaron Alexa pa’ comprar y gastan 50 % más",
      corto: "400 millones de clientes ya usaron Alexa pa’ comprar",
      cuerpo: "En la llamada de resultados del tercer trimestre, Amazon dijo que más de 400 millones de clientes han usado Alexa for Shopping en los últimos 12 meses, frente a 350 millones a finales de julio, según Digiday. El CEO Andy Jassy aseguró que quienes la usan gastan 50 % más que quienes no. Las ventas netas del trimestre fueron US$201,900 millones, 12 % más, y los servicios publicitarios crecieron 24 %, aunque el Prime Day pasó a junio y movió ventas al segundo trimestre.",
      cifras: [
        { v: "400 millones+", t: "clientes que usaron Alexa for Shopping en los últimos 12 meses, frente a 350 millones en julio" },
        { v: "+50 %", t: "gasto de quienes usan Alexa for Shopping frente a quienes no, según Jassy" },
        { v: "US$201,900 millones", t: "ventas netas de Amazon en el tercer trimestre, 12 % más" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Comprar con un asistente de IA ya es un hábito de masas en Amazon. Pa’ medios, la pregunta es qué lugar tendrán los anuncios y las marcas dentro de esas conversaciones.",
      hacer: "Esta semana, pedirle al rep de Amazon Ads qué formatos o señales hay pa’ aparecer en las respuestas de Alexa for Shopping y revisar si las fichas de producto de los clientes están completas.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/amazon-says-more-than-400m-customers-have-used-alexa-for-shopping-in-the-last-12-months/" }]
    },
    {
      id: "retailmedia", dep: "medios", peso: "secundaria",
      etiquetas: ["Retail media", "Dentsu", "Tienda física"],
      titular: "Dentsu: más de 80 % de las ventas sigue en tiendas y menos de 5 % del retail media se invierte allí",
      corto: "El retail media apenas llega a la tienda física",
      cuerpo: "Aisha Khan, presidenta de comercio de Dentsu en Norteamérica, dijo en el Media Buying Summit de Digiday que más de 80 % de las ventas todavía ocurre en tiendas, pero menos de 5 % de la inversión en retail media va a medios dentro de la tienda, según Digiday. Khan cree que ahí hay mucho espacio pa’ crecer y que el retail media debe verse más allá del embudo bajo, porque la medición de circuito cerrado sirve también pa’ marca.",
      cifras: [{ v: "80 %+", t: "de las ventas sigue ocurriendo en tienda, según Dentsu" }, { v: "<5 %", t: "del retail media se gasta en medios dentro de la tienda" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si el cliente vende en supermercados o farmacias, las pantallas y góndolas pueden ser el siguiente espacio. Pa’ medios, es una pregunta que hacerle a cada cadena.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/agency-execs-call-for-retail-media-to-be-holistically-considered-beyond-lower-funnel/" }]
    },
    {
      id: "svedka", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Svedka", "Super Bowl"],
      titular: "Después del lío con la IA, Svedka le entrega su próximo anuncio del Super Bowl al público",
      corto: "Svedka deja que el público haga su anuncio del Super Bowl",
      cuerpo: "Svedka reta al público a crear un comercial de 15 segundos con su Vodka Water, según Marketing Dive. El concurso corre hasta el 1 de diciembre y el ganador se lleva US$500,000. Llega después de la polémica por su primer anuncio del Super Bowl, hecho con inteligencia artificial. La marca ofrece un kit digital y acepta piezas hechas con IA, de bajo presupuesto o de aspecto cinematográfico. Para lanzarlo, usó un video en YouTube con el presentador Andy Cohen, que también ayudará a evaluar las propuestas. Según Nielsen, citado por la marca, Svedka fue el mayor motor de crecimiento en volumen de los licores en EE. UU. el último año.",
      cifras: [
        { v: "US$500,000", t: "premio pa’ el ganador del concurso" },
        { v: "15 s", t: "duración del comercial que pide la marca" },
        { v: "1 dic", t: "fecha límite pa’ participar" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "En vez de esconder la crítica, la marca la convirtió en el gancho: «ustedes dijeron que lo harían mejor, háganlo». Es una manera de volver una polémica en participación.",
      hacer: "Escoger un cliente y bocetar esta semana una idea de convocatoria al público con reglas simples, un premio claro y un kit de materiales, sin depender de una sola herramienta de IA.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/after-ai-backlash-svedka-challenges-consumers-to-create-super-bowl-ad/873445/" }]
    },    {
      id: "metabreakdown", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Meta", "Anuncios", "Medición creativa"],
      titular: "Meta ahora muestra cuánto rinde cada imagen, video y texto de un anuncio",
      corto: "Meta muestra el rendimiento de cada pieza del anuncio",
      cuerpo: "Ads Manager de Meta estrena un «Breakdown» que muestra el rendimiento de cada parte de un anuncio, según Social Media Today. Al escoger «Media» se ve cómo rindió cada imagen o video por separado, y también cada variación de texto. Tiene límites: los anuncios con formato de colección o carrusel no aparecen, y no da datos de algunas conversiones personalizadas como «Donar» o «Suscribirse».",
      tocaTitulo: "¿Y eso qué?",
      toca: "Por fin se puede saber qué pieza del anuncio funcionó y cuál no. Pa’ creatividad, es material pa’ la próxima conversación con el cliente sobre qué repetir.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-adds-individual-performance-data-for-ad-creative/872981/" }]
    },
    {
      id: "wpp", dep: "planning", peso: "principal",
      etiquetas: ["Agencias", "WPP", "Cuentas"],
      titular: "WPP Media crece por primera vez en dos años y retiene la media global de Coca-Cola",
      corto: "WPP Media crece por primera vez en dos años",
      cuerpo: "WPP reportó su tercer trimestre y, según Marketing Dive, su segmento de medios creció 0.3 %, la primera subida en dos años, después de bajar 8.3 % y 2.8 % en los dos trimestres anteriores. Los ingresos del grupo, sin costos de pase, bajaron 2.1 %, hasta unos US$4,390 millones. La creatividad empeoró: cayó 5.1 %, frente a 3.5 % en el segundo trimestre. WPP retuvo la media global de Coca-Cola, mientras la media de Norteamérica pasó de Publicis a Omnicom, y DoorDash nombró a WPP su socio global de medios en más de 40 mercados. La CEO Cindy Rose dijo que no participó en la licitación de Coca-Cola Norteamérica.",
      cifras: [
        { v: "+0.3 %", t: "crecimiento del segmento de medios de WPP, el primero en dos años" },
        { v: "-5.1 %", t: "caída de los ingresos de creatividad de WPP en el tercer trimestre" },
        { v: "40+", t: "mercados donde DoorDash trabajará con WPP en medios" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Las cuentas grandes se reparten por región y por especialidad, y la media crece mientras la creatividad cae. Eso mueve a quién escucha el cliente cuando pide ideas.",
      hacer: "Esta semana, revisar qué clientes tienen medios y creatividad en agencias distintas, y preparar una página de dos minutos que muestre cómo tu estrategia conecta las dos cosas.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/wpp-media-posts-first-growth-in-2-years-as-turnaround-stays-on-track/873447/" }]
    },    {
      id: "metaterms", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Meta", "Términos"],
      titular: "Meta pospone sus nuevos términos comerciales por dudas de los reguladores",
      corto: "Meta pospone sus términos comerciales",
      cuerpo: "Social Media Today actualiza un tema que ya veníamos siguiendo: la actualización de los términos comerciales de Meta se volvió un problema: una redacción podía permitirle recoger datos del sitio web de cualquier negocio con presencia en Facebook o Instagram. Meta dice que es solo pa’ afinar la publicidad. Ya había movido la fecha del 20 de octubre al 20 de noviembre y ahora admite que podría retrasarla indefinidamente. La Autoridad de Competencia y Mercados del Reino Unido abrió una investigación sobre esos términos.",
      cifras: [
        { v: "20 nov", t: "fecha actual de entrada en vigor, que podría posponerse" },
        { v: "20 oct", t: "fecha original de los nuevos términos" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Los términos que aceptan las marcas pueden cambiar qué datos recoge la plataforma, y casi nadie los lee completos.",
        "Los reguladores ya miran cómo se juntan los datos de los negocios pa’ alimentar sistemas de IA."
      ],
      hacer: "Esta semana, pedir a legal o al cliente quién acepta los términos de Meta en cada cuenta de anuncios, y dejar anotado qué datos del sitio web quedan expuestos si cambian.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-delays-commercial-terms-update-indefinitely/873528/" }]
    },    {
      id: "tiktoksafety", dep: "data", peso: "secundaria",
      etiquetas: ["Seguridad de marca", "TikTok"],
      titular: "TikTok estrena un centro de seguridad de marca y herramientas contra falsificaciones",
      corto: "TikTok estrena su centro de seguridad de marca",
      cuerpo: "TikTok presentó en su foro de medios responsables de Asia-Pacífico, en Singapur, un sitio nuevo de seguridad de marca, según Social Media Today. Incluye una herramienta de percepción de marca en el centro de negocios, formas de reportar infracciones de derechos de autor y marca registrada, y protección contra falsificaciones para vendedores. Entre abril y junio de 2026, la plataforma dice que eliminó más de 30 millones de videos en 10 mercados de la región, y que globalmente las herramientas automáticas hicieron 97.4 % de las eliminaciones.",
      cifras: [{ v: "30 millones+", t: "videos eliminados entre abril y junio en 10 mercados de Asia-Pacífico" }, { v: "97.4 %", t: "de las eliminaciones globales las hizo la moderación automática" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Hay más herramientas pa’ que la marca reporte copias y falsificaciones en TikTok, algo útil pa’ clientes que venden en la app.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-adds-new-brand-safety-resources/873529/" }]
    },    {
      id: "creatorassistant", dep: "content", peso: "principal",
      etiquetas: ["Meta", "IA", "Creadores"],
      titular: "El asistente de IA de Meta pa’ creadores ahora avisa de tendencias, arma guiones y contesta comentarios",
      corto: "El asistente de IA de Meta avisa de tendencias",
      cuerpo: "Meta actualizó su asistente de IA pa’ creadores, según Social Media Today. Ahora envía alertas de tendencias de cada nicho, y puedes darle una idea y recibir un storyboard y una lista de tomas, o subir un borrador antes de publicar pa’ recibir comentarios. También destaca las preguntas más relevantes del público y genera respuestas con la voz del creador. Además, ya está disponible en la web, dentro del Creator Dashboard.",
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Es una herramienta pa’ ahorrar tiempo en guiones y respuestas, pero las respuestas automáticas en nombre de la marca se deben revisar a mano.",
      hacer: "Esta semana, probar el asistente con un cliente: pedirle un storyboard pa’ un Reel y comparar con lo que ya tenían planeado, sin publicar nada sin revisión humana.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-updates-creator-assistant-chatbot/873524/" }]
    },
    {
      id: "rdinteligente", dep: "rd", peso: "principal", para: ["data", "content", "planning"],
      etiquetas: ["IA", "Formación", "Gobierno"], fecha: "1 nov 2026",
      titular: "RD Inteligente pasa de 73 mil inscritos en su formación gratuita en inteligencia artificial",
      cuerpo: "Santo Domingo.— El programa RD Inteligente registra más de 73 mil personas en formación en IA, tras sumar 1,685 nuevas inscripciones en la última semana, según Diario Libre. Entre los inscritos hay 18,811 jóvenes de 18 a 29 años, además de profesionales de la salud, trabajadores de distintas áreas y mipymes. El programa es gratuito y busca preparar el talento nacional pa’ las nuevas exigencias del empleo.",
      cifras: [{ v: "73 mil+", t: "personas inscritas en RD Inteligente" }, { v: "1,685", t: "nuevas inscripciones en la última semana" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Cada vez más gente en el país está aprendiendo a usar IA. Pa’ data y content, es una razón pa’ definir bien cómo la usa la agencia y qué le explica al cliente.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/11/01/programa-rd-inteligente-registra-mas-de-73-mil-en-formacion-en-ia/3707442" }]
    },    {
      id: "facturacion", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Impuestos", "DGII", "Negocios"], fecha: "2 nov 2026",
      titular: "Facturación electrónica: los negocios obligados tienen hasta el 15 de noviembre pa’ incorporarse",
      cuerpo: "Santo Domingo.— Diario Libre explica que los negocios obligados a emitir facturas electrónicas tienen hasta el 15 de noviembre pa’ incorporarse al sistema. El plazo se extendió seis meses respecto al original, que vencía el 15 de mayo. Quienes compren productos o servicios podrán seguir pidiendo su comprobante, que traerá una numeración distinta.",
      cifras: [{ v: "15 nov", t: "fecha límite pa’ los negocios obligados" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Muchos clientes pequeños y medianos van a estar ocupados con este trámite hasta mediados de mes. Pa’ planning y data, conviene preguntar antes de proponer cambios en sus sistemas de venta.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/11/02/facturacion-electronica-en-republica-dominicana-y-su-impacto/3708020" }]
    },    {
      id: "procompetencia", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Licitaciones", "ProCompetencia", "OCDE"], fecha: "27 oct 2026",
      titular: "ProCompetencia presenta en la OCDE sus herramientas pa’ vigilar las licitaciones públicas",
      cuerpo: "Santo Domingo.— La presidenta de ProCompetencia, María Elena Vásquez Taveras, presentó el 27 de octubre en París dos herramientas dominicanas, según El Dinero. «Analiza tu Pliego» revisa los pliegos de condiciones antes de publicarse pa’ detectar requisitos que limiten la participación de proveedores, y ganó el primer lugar en un concurso del Banco Mundial y la Red Internacional de Competencia. «Semáforo Colusorio» ayuda a identificar señales de alerta entre oferentes, como ofertas con similitudes inusuales.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Si tu agencia participa en compras del Estado, las reglas de los pliegos están bajo más revisión. Pa’ planning y data, conviene conocer las herramientas antes del próximo proceso.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386773/procompetencia-presenta-herramientas-digitales-para-prevenir-practicas-anticompetitivas/" }]
    }
  ],

  pizarra: ["alexa", "svedka", "wpp", "metaterms", "creatorassistant", "rdinteligente"],

  frases: [
    { dep: "medios", texto: "Más de 400 millones de clientes ya usaron Alexa pa’ comprar, y gastan 50 % más que quienes no la usan.", uso: "para conversaciones sobre compras con IA" },
    { dep: "creatividad", texto: "Svedka tuvo críticas por su anuncio hecho con IA y ahora le entrega el próximo al público, con US$500,000 en premio.", uso: "para ideas de participación del público" },
    { dep: "data", texto: "Meta podría retrasar sus nuevos términos comerciales indefinidamente mientras los reguladores le piden explicaciones.", uso: "para conversaciones de privacidad con clientes" },
    { dep: "medios", texto: "Más de 80 % de las ventas sigue en tienda, pero menos de 5 % del retail media se gasta allí.", uso: "para planes de retail media" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "400 millones de clientes ya compran con Alexa" },
      { id: "creatividad", texto: "Svedka le entrega su anuncio al público" },
      { id: "planning", texto: "WPP Media crece por primera vez en dos años" },
      { id: "data", texto: "Meta podría retrasar sus términos comerciales" },
      { id: "content", texto: "El asistente de IA de Meta pa’ creadores" },
      { id: "rd", texto: "Zoom a RD: RD Inteligente pasa de 73 mil inscritos" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "alexa", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "wpp", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Noviembre es mes de cierre de planes. Con la media de Norteamérica de Coca-Cola en Omnicom y la global en WPP, prepara una página que explique cómo tu estrategia conecta medios y creatividad."
    },
    data: {
      tipo: "secreto", nota: "metaterms", titulo: "Destapa el expediente",
      texto: "Meta movió sus nuevos términos comerciales del [[20 de octubre]] al [[20 de noviembre]] y podría retrasarlos indefinidamente por la investigación de la autoridad de competencia del [[Reino Unido]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "creatorassistant", titulo: "Arma tu pregunta pal asistente de Meta",
      intro: "Con el asistente de IA de Meta pa’ creadores, ayúdame con lo siguiente pa’ un cliente:",
      opciones: [
        "Dame un storyboard y una lista de tomas pa’ un Reel de 30 segundos",
        "Dime qué tendencias de mi nicho puedo aprovechar esta semana",
        "Revisa este borrador y dime qué funciona y qué se puede mejorar"
      ],
      cierre: "Marca qué partes necesitan revisión humana antes de publicar."
    },
    rd: {
      tipo: "pregunta", nota: "rdinteligente", titulo: "La pregunta del patio",
      p: "¿Cuántas nuevas inscripciones sumó RD Inteligente en la última semana?",
      opciones: ["1,685", "18,811", "73,000"], correcta: 0,
      explicacion: "Según Diario Libre, sumó 1,685 nuevas inscripciones en la última semana; las 18,811 son jóvenes de 18 a 29 años y los 73 mil+ el total de inscritos."
    }
  }
};
