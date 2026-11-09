/*
  El Pulso Publicitario · edición N.º 313 · 9 de noviembre de 2026
  Las ediciones anteriores no se tocan nunca: son el archivo del calendario.
*/
window.EDICION = {
  numero: 313,
  fechaISO: "2026-11-09",
  fecha: "Lunes 9 de noviembre 2026",
  fechaCorta: "9 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Las plataformas están automatizando la compra, la creatividad y las ofertas; tu ventaja es revisar lo que la máquina hace antes de que lo vea el cliente.",
    largo: "Esta semana Amazon puso anuncios en un agente que compra por texto, Meta mostró descuentos que el anunciante nunca aprobó y Publicis cerró su compra de LiveRamp mientras algunas marcas buscan la salida. Aquí en el patio, RD quedó segunda en cobertura 5G de la región. El hilo común es que la automatización avanza rápido y el que revisa es el que se queda con la cuenta. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha, y arranca la semana con una lista de trabajo, no con una lista de lectura.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes. Así de fácil.",
    porDep: {
      medios: "Antes de aceptar un formato nuevo gratis, pregunta cómo se mide la impresión. Lo gratis de hoy se cobra mañana.",
      creatividad: "Un formato de moda sirve si la historia es buena. Empieza por el entretenimiento y deja el producto pa’ la segunda escena.",
      planning: "Cuando una plataforma crece solo afuera, revisa de dónde viene tu audiencia antes de prometerle alcance al cliente.",
      data: "Revisa qué opciones automáticas tienen prendidas tus clientes. Lo que no apruebas tú, lo aprueba el algoritmo.",
      content: "Los feeds personalizados cambian cómo te encuentran. Piensa en temas claros, no en trucos de algoritmo.",
      rd: "Con buena cobertura 5G, el video en el celular es la apuesta segura en el patio. Piensa tus piezas primero pa’ la pantalla vertical."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "El agente de compras de Amazon vende por texto y mete anuncios en la conversación · Publicis cierra LiveRamp y algunas marcas buscan la salida" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Urban Decay estrena una microserie vertical con L’Oréal y ReelShort · Wendy’s lanza su propio videojuego" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Snapchat llega a 495 millones, pero sin crecer en Norteamérica ni Europa · Reddit publica su guía de planificación 2027" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "La IA de Meta mostró descuentos no aprobados en anuncios · El bloqueo de Safari a la resolución de identidad sacude a LiveRamp" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube estrena feeds personalizados con IA y recomendaciones de productos · Meta le pone voz a sus agentes Muse" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "RD, segunda en cobertura 5G de la región · el turismo apunta a US$12,000 millones · fin de semana largo y una creadora que vuelve a Instagram con cuenta nueva" }
  },

  notas: [
    {
      id: "amazontexto", dep: "medios", peso: "principal",
      etiquetas: ["IA", "Amazon Ads", "Agentes"],
      titular: "El agente de compras de Amazon ya vende por texto, y con anuncios en la conversación",
      corto: "El agente de Amazon vende por texto, con anuncios",
      cuerpo: "Amazon abrió, para un grupo pequeño de clientes en EE. UU. con invitación, su agente de compras por mensaje de texto. Los Sponsored Products aparecen en el hilo cuando el agente responde con opciones de producto, y por ahora son gratis para los anunciantes. Las compras que el agente cierra solo no llevan anuncios. Amazon dice que más de 400 millones de clientes usaron Alexa para compras en los últimos 12 meses y que el uso de sus funciones con agentes se multiplicó más de ocho veces desde enero.",
      cifras: [
        { v: "400 M+", t: "clientes que usaron Alexa para compras en los últimos 12 meses, según Amazon" },
        { v: "8 veces", t: "creció el uso de funciones con agentes desde enero" },
        { v: "Gratis", t: "los Sponsored Products en estos hilos, por ahora" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "El anuncio se mueve del buscador a la conversación, y ahí la pregunta es cómo se define una impresión. Un consultor consultado por Digiday lo dijo claro: sin medición clara, no se sabe si esto rinde.",
      hacer: "Esta semana, pídele al rep de Amazon Ads cómo van a medir las impresiones en los hilos de texto y cuándo deja de ser gratis, antes de meterlo en un plan.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/amazons-shopping-agent-now-takes-orders-by-text-with-sponsored-product-ads-in-the-replies/" }]
    },
    {
      id: "liveramp", dep: "medios", peso: "secundaria",
      etiquetas: ["Ad Tech", "Publicis", "LiveRamp"],
      titular: "Publicis cierra su compra de LiveRamp por US$2,200 millones y ya hay marcas buscando la salida",
      corto: "Publicis cierra LiveRamp y hay marcas que se van",
      cuerpo: "Publicis Groupe completó la compra de la plataforma de colaboración de datos LiveRamp por US$2,200 millones. El mes pasado, las empresas acordaron con la FTC una orden de consentimiento para proteger la neutralidad de LiveRamp. Liquid Death confirmó que planea alejarse de la plataforma, y Marketing Dive reporta que WPP y Omnicom llevan meses diciendo que reducirán su uso.",
      cifras: [{ v: "US$2,200 M", t: "precio de la compra de LiveRamp por Publicis" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si algún cliente activa audiencias con LiveRamp, el dueño ahora es un competidor de las agencias. Conviene saber qué datos pasan por ahí.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/as-publicis-closes-liveramp-deal-some-brands-say-theyre-jumping-ship/873561/" }]
    },

    {
      id: "microdrama", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Urban Decay", "Microdrama"],
      titular: "Urban Decay hace una serie vertical de fantasmas pa’ vender un spray, y 3.8 millones la vieron en cinco días",
      corto: "Urban Decay vende con una microserie en ReelShort",
      cuerpo: "Urban Decay, de L’Oréal, estrenó el 24 de octubre «Ghost Hunter Hotline», una serie vertical de seis episodios de pocos minutos en ReelShort. Sigue a Zoe, que persigue a quienes la dejaron en visto, y promueve el Ghosting Spray. Según datos de la marca, sumó 3.8 millones de vistas en cinco días y llegó al segundo lugar de lo más visto en la app. L’Oréal la hizo con ReelShort, sin agencia externa, en unas cuatro semanas.",
      cifras: [
        { v: "3.8 M", t: "vistas en los cinco días después del estreno, según la marca" },
        { v: "6", t: "episodios de pocos minutos cada uno" },
        { v: "4 semanas", t: "de producción aproximadamente" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La directiva de L’Oréal USA lo resume en poner la audiencia y el entretenimiento primero, y moverse rápido. El producto entra a la historia, no al revés.",
      hacer: "Escoge un cliente y escribe en una página el argumento de una serie de seis episodios cortos donde el producto sea parte del enredo, no el protagonista.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/loreals-evolving-microdrama-strategy-puts-entertainment-over-product/873646/" }]
    },
    {
      id: "wendys", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Wendy’s", "Gaming"],
      titular: "Wendy’s lanza su propio videojuego y le tira una indirecta a McDonald’s",
      corto: "Wendy’s lanza su propio videojuego",
      cuerpo: "Wendy’s estrenó «WendyQuest: Legend of the Four Corner Stones», un juego de aventuras en estilo 8 bits, gratis en iOS, Android y Steam, hecho con el estudio 81monkeys y con creatividad de VML. Dura hasta 10 horas y los jugadores ganan premios que se canjean con un código en la app de Wendy’s. La marca dice que lo hizo a mano durante varios años, sin atajos de IA.",
      cifras: [{ v: "10 horas", t: "de juego como máximo" }],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/wendys-takes-a-shot-at-mcdonalds-with-rewards-based-video-game/873785/" }]
    },

    {
      id: "snapq3", dep: "planning", peso: "principal",
      etiquetas: ["Plataformas", "Snapchat", "Audiencia"],
      titular: "Snapchat llega a 495 millones de usuarios diarios, pero en Norteamérica y Europa no crece",
      corto: "Snapchat suma poco: 495 M y sin crecer en NA ni Europa",
      cuerpo: "En el tercer trimestre, Snapchat reportó 495 millones de usuarios activos diarios, 2 millones más que en el trimestre anterior, y todo el crecimiento vino del resto del mundo. Los ingresos fueron de US$1,720 millones, un 14 % más que hace un año, pero los ingresos publicitarios subieron solo 4 % y los de suscripciones, 84 %. Ya pasa de 30 millones de suscriptores en Snapchat+, Lens+ y Memories Storage.",
      cifras: [
        { v: "495 M", t: "usuarios activos diarios en el tercer trimestre" },
        { v: "+4 %", t: "ingresos publicitarios frente al año pasado" },
        { v: "30 M+", t: "suscriptores de pago" }
      ],
      hacer: "Si algún plan de Q4 o de 2027 cuenta con crecimiento de alcance en Snapchat para EE. UU. o Europa, ajusta el forecast esta semana y avísale al cliente.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/snapchat-posts-modest-user-increase-in-q3/873823/" }]
    },
    {
      id: "reddit", dep: "planning", peso: "secundaria",
      etiquetas: ["Temporadas", "Reddit", "2027"],
      titular: "Reddit publica su guía de planificación 2027 con fechas, uso y temporadas",
      corto: "Reddit publica su guía de planificación 2027",
      cuerpo: "Reddit lanzó una guía de 35 páginas para planificar 2027. Trae fechas clave de EE. UU., tendencias de uso y estacionalidad, un calendario de temporadas, el desglose trimestral de la actividad de usuarios y su papel como plataforma de descubrimiento de productos.",
      cifras: [{ v: "35 páginas", t: "tiene la guía de planificación 2027" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es material gratis pa’ armar el calendario del próximo año, y a mediados de noviembre es la época de empezar los planes.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-publishes-2027-marketing-playbook/873789/" }]
    },

    {
      id: "metaofertas", dep: "data", peso: "principal",
      etiquetas: ["IA", "Meta", "Control de anuncios"],
      titular: "La IA de Meta mostró descuentos en anuncios aunque el anunciante los había apagado",
      corto: "La IA de Meta mostró descuentos no aprobados",
      cuerpo: "Las herramientas de IA de Meta mostraron ofertas en anuncios aunque el anunciante tenía las promociones desactivadas. Según PPC Land, Meta tomaba los descuentos del sitio web de la tienda y los ponía en anuncios de Facebook e Instagram. El asesor Bram Van der Hallen lo descubrió y explicó que se evita cambiando los ajustes de Commerce Manager para que Meta no use ofertas detectadas en otras campañas.",
      cifras: [{ v: "Commerce Manager", t: "donde se apaga el uso de ofertas detectadas" }],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Las funciones automáticas vienen prendidas y el anunciante carga con la responsabilidad de lo que dice el anuncio.",
        "Un descuento que no existe puede convertirse en un problema con el cliente y con el consumidor."
      ],
      hacer: "Esta semana, entra a Commerce Manager de cada cliente con tienda y confirma que Meta no esté usando ofertas detectadas en otras campañas, sobre todo antes del Viernes Negro.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/metas-ai-ads-included-unapproved-discounts/874067/" }]
    },
    {
      id: "safari", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Apple", "Identidad"],
      titular: "Safari bloquea la resolución de identidad y WPP presume su plan con InfoSum",
      corto: "Safari bloquea la resolución de identidad",
      cuerpo: "El 19 de octubre, Apple explicó que Safari bloquea infraestructura de resolución de identidad, la que cruza personas entre sitios con correos de inicio de sesión. Entre las firmas citadas están LiveRamp, ID5 y UID 2.0 de The Trade Desk. En la llamada de resultados de WPP, su CEO Cindy Rose dijo que el impacto fue mínimo porque no dependen solo de ese cruce, y que InfoSum trabaja con unos 400 socios de datos fuera del navegador.",
      cifras: [{ v: "400", t: "socios de datos de InfoSum, según WPP" }],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/apples-safari-block-hands-wpp-a-fresh-case-for-infosum/" }]
    },

    {
      id: "ytfeeds", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "Creadores", "Feeds con IA"],
      titular: "YouTube pone los feeds personalizados con IA en la barra principal y prueba recomendarle productos a los creadores",
      corto: "YouTube estrena feeds con IA y productos pa’ creadores",
      cuerpo: "YouTube movió a la barra superior sus feeds personalizados, que se crean describiendo en lenguaje normal lo que la persona quiere ver; por ahora están disponibles en EE. UU. También está probando que los creadores afiliados vean en YouTube Studio una vitrina de productos recomendados según su contenido, su audiencia y su nicho, con la comisión estimada de cada uno. Además, Hype con Jewels se amplía desde el 6 de noviembre a más países para creadores de 500 a 500,000 suscriptores.",
      cifras: [
        { v: "6 nov", t: "fecha en que Hype con Jewels se amplió a más países" },
        { v: "500–500,000", t: "suscriptores de los creadores elegibles para Hype" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si la gente arma su propio feed por temas, los canales con un tema claro y constante tienen más chance de aparecer que los que publican de to’ un poco.",
      hacer: "Revisa los títulos y las descripciones de los canales de tus clientes y asegúrate de que digan en una frase de qué tema tratan.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-expands-custom-feeds-and-offers-new-partnership-options/874068/" }]
    },
    {
      id: "muse", dep: "content", peso: "secundaria",
      etiquetas: ["IA", "Meta", "Muse"],
      titular: "Meta le pone voz y gestos a sus agentes Muse",
      corto: "Meta le pone voz a sus agentes Muse",
      cuerpo: "Meta añadió voz a sus agentes de IA Muse: se puede escoger una voz, mandar consultas en audio y ver un avatar con expresiones y gestos. Meta sugiere usarlo para planear proyectos, practicar presentaciones o ensayar entrevistas, y permite dar una voz personalizada. El autor de Social Media Today es escéptico porque los bots con voz anteriores de Meta no pegaron.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Sirve pa’ ensayar el pitch en voz alta antes de la reunión; no es para publicar nada sin revisarlo.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-makes-muse-agents-speak/873959/" }]
    },

    {
      id: "g5", dep: "rd", peso: "principal", para: ["medios", "planning", "data"],
      etiquetas: ["Telecom", "5G", "CEPAL"], fecha: "8 nov 2026",
      titular: "RD ocupa el segundo lugar de la región en cobertura 5G, con 69.8 % de la población",
      corto: "RD, segunda en cobertura 5G de la región",
      cuerpo: "Según el Índice Latinoamericano de Inteligencia Artificial (ILIA) 2026 de la CEPAL, que cita elDinero, República Dominicana tiene cobertura 5G para el 69.8 % de su población, el segundo lugar de América Latina y el Caribe. Uruguay lidera con 93.7 %. Brasil tiene 68.4 % y Chile 65 %. El promedio regional es 28 %. El indicador mide quién está al alcance de la red, no cuántos la usan.",
      cifras: [
        { v: "69.8 %", t: "de la población dominicana con cobertura 5G" },
        { v: "28 %", t: "promedio de la región" },
        { v: "93.7 %", t: "Uruguay, el primer lugar" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Con la red cubriendo a casi siete de cada diez dominicanos, el video y las experiencias en el celular se pueden planear sin pensar que la conexión es la limitante. Eso sí: cobertura no es uso.",
      hacer: "Revisa los planes de Q1 y pregunta si hay piezas de video y formatos en celular que se estén recortando por miedo a la conexión, y valídalo con datos de tus propios reportes.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387634/republica-dominicana-se-ubica-segundo-puesto-en-cobertura-de-redes-5g-en-alc/" }]
    },
    {
      id: "turismo13", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Economía"], fecha: "3 nov 2026 · Londres",
      titular: "El turismo dejaría unos US$12,000 millones en 2026, un 13 % más, según el Banco Popular",
      cuerpo: "Christopher Paniagua, presidente del Banco Popular Dominicano, dijo en Londres que el turismo generaría unos US$12,000 millones en 2026, un 13 % más que el año anterior, y que pesa alrededor de 9.5 % del PIB. Mencionó a Punta Cana, Bávaro, Uvero Alto y Miches como motores de expansión, y a Cabo Rojo como nuevo polo.",
      cifras: [{ v: "US$12,000 M", t: "ingresos turísticos estimados en 2026" }, { v: "9.5 %", t: "del PIB aproximadamente" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es un dato de peso pa’ los clientes de turismo, banca y consumo ligado al visitante; sirve como argumento en la presentación del plan de 2027.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387201/ingresos-por-turismo-crecerian-13-en-republica-dominicana-durante-2026/" }]
    },
    {
      id: "findesemana", dep: "rd", peso: "secundaria", para: ["content", "planning"],
      etiquetas: ["Temporadas", "Turismo interno"], fecha: "6 nov 2026",
      titular: "Fin de semana largo por el Día de la Constitución: seis destinos pa’ escaparse",
      cuerpo: "elDinero recomendó seis destinos pa’l feriado, que el Ministerio de Trabajo movió al lunes 9 de noviembre: Santiago, Puerto Plata, Punta Cana, Barahona, Samaná y La Romana. Entre las opciones, los 27 Charcos de Damajagua, Scape Park, Salto El Limón, Isla Saona y Altos de Chavón.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Los feriados largos son temporadas de consumo y de contenido de viaje que las marcas pueden aprovechar con tiempo.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387707/seis-destinos-para-escaparse-durante-el-fin-de-semana-largo-por-el-dia-de-la-constitucion/" }]
    },
    {
      id: "cheddy", dep: "rd", peso: "secundaria", para: ["content"],
      etiquetas: ["Redes", "Creadores"], fecha: "8 nov 2026",
      titular: "Cheddy García vuelve a Instagram con una cuenta nueva",
      cuerpo: "La comediante y actriz Cheddy García regresó a Instagram con un perfil nuevo, tras perder su cuenta anterior, que tenía más de tres millones de seguidores, en medio de una polémica pública con el empresario Santiago Matías, conocido como Alofoke. Remolacha reporta el regreso y enlaza el reporte completo de N Digital.",
      cifras: [{ v: "3 M+", t: "seguidores tenía su cuenta anterior" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es un recordatorio de que una audiencia vive en una cuenta que no es de uno. Los creadores y las marcas deberían tener otro canal propio, como lista de correo o WhatsApp.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/cheddy-garcia-regresa-a-instagram-con-nueva-cuenta/" }]
    }
  ],

  pizarra: ["amazontexto", "microdrama", "snapq3", "metaofertas", "ytfeeds", "g5"],

  frases: [
    { dep: "medios", texto: "Amazon ya mete anuncios dentro de la conversación de compras por texto, y por ahora son gratis. La pregunta que queda es cómo se mide una impresión ahí.", uso: "para conversaciones de medición y nuevos formatos" },
    { dep: "creatividad", texto: "Urban Decay vendió un spray con una serie de fantasmas de pocos minutos: primero el entretenimiento y después el producto.", uso: "para conversaciones de formatos nuevos" },
    { dep: "data", texto: "La IA de Meta mostró descuentos que el anunciante había apagado: lo automático hay que revisarlo antes del Viernes Negro.", uso: "para conversaciones de control y gobernanza de IA" },
    { dep: "planning", texto: "Snapchat suma usuarios, pero no en Norteamérica ni Europa: el alcance de un plan depende de dónde crece la plataforma.", uso: "para conversaciones de forecast y audiencias" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Amazon vende por texto, con anuncios" },
      { id: "creatividad", texto: "La microserie de Urban Decay" },
      { id: "planning", texto: "Snapchat: 495 M sin crecer en NA" },
      { id: "data", texto: "Descuentos no aprobados en la IA de Meta" },
      { id: "content", texto: "Feeds con IA en YouTube" },
      { id: "rd", texto: "Zoom a RD: segundo en 5G" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "amazontexto", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "reddit", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Reddit publicó su guía de planificación 2027, de 35 páginas, con fechas clave, estacionalidad y un calendario de temporadas. Noviembre es buen momento pa’ empezar a armar el año."
    },
    data: {
      tipo: "secreto", nota: "metaofertas", titulo: "Destapa el expediente",
      texto: "Las herramientas de IA de Meta mostraron [[descuentos]] en anuncios de Facebook e Instagram aunque el anunciante tenía las promociones apagadas, y se evita en [[Commerce Manager]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "muse", titulo: "Ensaya tu pitch con un agente de IA",
      intro: "Con un asistente de IA con voz, como Muse, ayúdame con lo siguiente:",
      opciones: [
        "Ensayar en voz alta el pitch de mi próxima reunión con el cliente",
        "Hacerme preguntas difíciles como si fuera el cliente",
        "Decirme en qué parte de mi presentación me enredo"
      ],
      cierre: "Al final, dame tres ajustes concretos y señala qué debo revisar yo antes de presentar."
    },
    rd: {
      tipo: "pregunta", nota: "g5", titulo: "La pregunta del patio",
      p: "¿Qué lugar ocupa RD en cobertura 5G en América Latina y el Caribe, según el ILIA 2026 de la CEPAL?",
      opciones: ["Primero", "Segundo", "Quinto"], correcta: 1,
      explicacion: "RD cubre al 69.8 % de su población con 5G, detrás de Uruguay (93.7 %). El promedio regional es 28 %."
    }
  }
};
