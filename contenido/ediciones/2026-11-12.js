/*
  El Pulso Publicitario · edición N.º 316 · 12 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 316,
  fechaISO: "2026-11-12",
  fecha: "Jueves 12 de noviembre 2026",
  fechaCorta: "12 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Lo que la IA y los algoritmos dicen de tu marca ya es parte de la marca: revísalo como revisas una pieza antes de salir al aire.",
    largo: "Hoy X explica por qué marca un post como hecho con IA, Meta cuenta cómo la gente le pide menos contenido de IA a su feed, LinkedIn vende su segmentación B2B en la TV conectada del Reino Unido y Maybelline le cambia el sentido a un tagline de 1991. Aquí en el patio, Víctor Bautista le pide a las empresas auditar lo que ChatGPT, Gemini, Claude y Perplexity dicen de ellas, y la Superintendencia de Bancos pone reglas nuevas de publicidad responsable y datos. El hilo es el mismo: lo que se dice de tu marca, lo diga una persona o una máquina, hay que mirarlo con lupa. Escoge un «Lo que toca hacer», ponle responsable y fecha antes del viernes.",
    corto: "Pregúntale a la IA qué dice de tu cliente, guarda la respuesta y llévala a la reunión de esta semana.",
    porDep: {
      medios: "Antes de pagar una prima por segmentación, pide el caso con números y la inversión mínima por escrito.",
      creatividad: "Un tagline viejo no se bota: se le cambia el sentido. Revisa qué frase de tu cliente se puede leer distinto hoy.",
      planning: "Los créditos de temporada sirven pa’ probar, no pa’ quedarse. Define antes qué número tiene que mover la plataforma pa’ seguir en el plan.",
      data: "Si el cliente usa IA en sus piezas, ten listo el cómo y el porqué antes de que una plataforma le ponga una etiqueta.",
      content: "Busca como busca tu audiencia: con los filtros nuevos de Threads, monitorear conversaciones de la marca ya es más fácil.",
      rd: "En RD, la reputación también se construye en las respuestas de la IA. Contenido propio, con datos y fecha, es la mejor defensa."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "LinkedIn lleva su segmentación B2B a la TV conectada del Reino Unido · La NFL mantiene vetados los anuncios de mercados de predicción en el Super Bowl" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Maybelline le cambia el sentido a su «Maybe» con Miley Cyrus · Apple estrena «The Dreamer», cuatro minutos sin diálogo" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Reddit regala créditos pa’ campañas nuevas antes del 20 de noviembre mientras su crecimiento se frena · Edelman: el liderazgo de opinión pesa más en B2B" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "X va a explicar por qué etiqueta un post como hecho con IA · Meta cuenta cómo funciona el control «Your Algorithm» de Facebook" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Threads estrena filtros de búsqueda avanzada · LinkedIn prueba mostrar cuántas veces alguien visitó tu perfil" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Reputación en la IA, oro en los Travvy, reglas nuevas pa’ la banca, la Feria de Emprendedores, Wingo a Bogotá, Alejandro Sanz y Camila Cabello en La Romana. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "linkedinctv", dep: "medios", peso: "principal",
      etiquetas: ["CTV", "LinkedIn", "B2B"],
      titular: "LinkedIn lleva su segmentación por cargo a la TV conectada del Reino Unido",
      corto: "LinkedIn lleva su segmentación B2B a la CTV",
      cuerpo: "LinkedIn expandió sus anuncios de TV conectada (CTV) al Reino Unido, después de arrancar en EE. UU. en abril de 2024 y abrirse en EE. UU. y Canadá en 2025. Los anunciantes pueden llegarle a quien toma decisiones por cargo, industria y nivel mientras ve streaming con anuncios. Por ahora trabaja con LG y Titan OS, y está disponible pa’ todos los anunciantes de ese mercado. LinkedIn asegura que a quien vio el anuncio en CTV cuesta 30 % menos convertirlo en prospecto, y Cisco reportó 52 % de alcance incremental. Ojo: la agencia Accuracast encontró precios bastante más altos que otros proveedores de CTV y mínimos de inversión elevados.",
      cifras: [
        { v: "−30 %", t: "costo de convertir en prospecto a quien vio el anuncio en CTV, según LinkedIn" },
        { v: "+52 %", t: "alcance incremental de Cisco más allá de su pauta en el feed" },
        { v: "+141 %", t: "más formularios de prospectos completados en el caso de Cisco" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "La CTV deja de ser solo pa’ awareness: con datos de cargo e industria, se vuelve una pieza del embudo B2B. Pero los números vienen de la misma plataforma y la prima de precio es real, así que hay que pedir pruebas antes de meterle presupuesto.",
      hacer: "Esta semana, pa’ los clientes B2B que venden en EE. UU. o Canadá, pedirle a LinkedIn la inversión mínima y un caso con alcance incremental medido, y compararlo con lo que cuesta llegarle a la misma audiencia por otra CTV.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/linkedin-brings-its-b2b-ad-targeting-to-u-k-connected-tvs/" }]
    },
    {
      id: "nflveto", dep: "medios", peso: "secundaria",
      etiquetas: ["Deportes", "NFL", "Super Bowl"],
      titular: "La NFL no afloja: los mercados de predicción siguen fuera de los anuncios del Super Bowl",
      corto: "La NFL mantiene el veto en el Super Bowl",
      cuerpo: "La NFL mantiene pa’l próximo Super Bowl el veto a los anuncios de mercados de predicción como Kalshi y Polymarket que puso la temporada pasada. Además aclaró que sus socios de apuestas DraftKings, FanDuel y Fanatics no pueden promover durante los juegos sus propias ofertas de mercados de predicción, y tampoco permite acuerdos de estas plataformas con jugadores o equipos. Les quedan creadores, celebridades, medios y activaciones en el área de Los Ángeles, donde se juega el partido.",
      cifras: [
        { v: "3", t: "socios de apuestas de la NFL que no pueden promover sus mercados de predicción en los juegos" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Cuando una categoría no puede comprar el espacio más caro del año, la plata se mueve pa’ creadores, medios digitales y activaciones. Ahí se abre inventario y competencia nueva.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/daily-news-roundup/the-super-bowls-prediction-market-ad-ban-stands-retailers-arent-open-to-ai/" }]
    },

    {
      id: "maybelline", dep: "creatividad", peso: "principal",
      etiquetas: ["Tagline", "Maybelline", "Plataforma de marca"],
      titular: "Maybelline le cambia el sentido a su «Maybe»: de pregunta a declaración",
      corto: "Maybelline le cambia el sentido a su «Maybe»",
      cuerpo: "Maybelline, de L’Oréal, rehízo su famoso «Maybe she’s born with it», que usa desde 1991. Ya no suena a una pregunta sobre cómo se ve una mujer: el nuevo «Maybe.» es una declaración de las posibilidades de todas las mujeres, y la marca dice que el cambio es permanente. Lo lidera Miley Cyrus en la plataforma global «The Beauty of Infinite Possibility». Maybelline se apoya en un dato de McKinsey: más de la mitad de las personas encuestadas ve la belleza como forma de ganar confianza, frente a 26 % que la ve como forma de lucir más atractiva o más joven.",
      cifras: [
        { v: "1991", t: "año desde el que Maybelline usa su tagline «Maybe»" },
        { v: "26 %", t: "ve la belleza como forma de lucir más atractiva o joven; más de la mitad, como confianza" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "No hizo falta botar un activo de 35 años: bastó con cambiarle el sentido pa’ que hable con el consumidor de hoy. Es una lección pa’ cualquier marca con una frase vieja que todavía se recuerda.",
      hacer: "Esta semana, escoger un cliente con un tagline o frase histórica, revisar qué dice hoy y presentar dos versiones que cambien el sentido sin perder lo que la gente ya recuerda.",
      fuentes: [
        { nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/maybelline-updates-maybe-tagline-as-beauty-perceptions-evolve/874376/" },
        { nombre: "Adweek", url: "https://www.adweek.com/creativity/maybelline-rewrites-its-35-year-old-tagline-for-gen-z/" }
      ]
    },
    {
      id: "appledreamer", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Navidad", "Apple", "Cortometraje"],
      titular: "Apple estrena «The Dreamer»: cuatro minutos de Navidad sin una sola palabra",
      corto: "Apple estrena «The Dreamer», sin diálogo",
      cuerpo: "Apple lanzó hoy, 12 de noviembre, su película navideña 2026: «The Dreamer», un corto de cuatro minutos hecho con TBWA\\Media Arts Lab y dirigido por Melina Matsoukas, con fotografía de Bradford Young. Cuenta la relación de un muchacho con el arte, desde que es un bebé hasta que es joven, y como otros cortos de la marca, se cuenta sin diálogo, solo con imágenes. Una MacBook Neo es el punto de giro de la historia.",
      cifras: [
        { v: "4 min", t: "duración del corto, sin diálogo" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "En plena temporada navideña, Apple apuesta otra vez a la historia larga y a la imagen sobre el producto. Adweek también nota que muchos anuncios de esta Navidad presumen el trabajo hecho a mano, como respuesta a la ansiedad por la IA.",
      fuentes: [
        { nombre: "Adweek", url: "https://www.adweek.com/creativity/apples-heartfelt-holiday-ad-gifts-the-power-of-belief/" },
        { nombre: "Adweek", url: "https://www.adweek.com/creativity/human-crafted-holiday-ads-are-an-unspoken-nod-to-ai-anxiety/" }
      ]
    },

    {
      id: "redditcreditos", dep: "planning", peso: "principal",
      etiquetas: ["Reddit", "Q4", "Incentivos"],
      titular: "Reddit regala créditos pa’ campañas nuevas antes del 20 de noviembre, mientras su crecimiento se frena",
      corto: "Reddit regala créditos hasta el 20 de noviembre",
      cuerpo: "Reddit les ofrece créditos a anunciantes nuevos cuyas campañas salgan antes del 20 de noviembre: en EE. UU., US$1,500 en créditos al invertir US$1,500, y en el Reino Unido, £500 por invertir £1,000, según Digiday. Llega en un año en que su crecimiento publicitario se ha frenado tres trimestres seguidos: US$625 millones en el primer trimestre (+74 %), US$762 millones en el segundo (+64 %) y US$847 millones en el tercero (+54 %). En octubre, las visitas que le llegan desde buscadores bajaron en más de un millón por semana, en parte por las funciones de IA de Google.",
      cifras: [
        { v: "20 nov", t: "fecha límite pa’ salir con campañas nuevas y recibir los créditos" },
        { v: "US$1,500", t: "en créditos al invertir US$1,500 en EE. UU." },
        { v: "+54 %", t: "crecimiento de ingresos publicitarios en el tercer trimestre, contra +74 % en el primero" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Los créditos abaratan la prueba, pero no dicen si la plataforma funciona todo el año. Un consultor citado por Digiday dice que Reddit aún queda de último frente a las otras redes en medición, segmentación y autoservicio.",
      hacer: "Antes del 20 de noviembre, decidir con un cliente que venda en EE. UU. si vale probar Reddit con los créditos, y dejar escrito qué métrica tiene que mover pa’ quedarse en el plan de 2027.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/reddit-dangles-seasonal-ad-credits-but-advertisers-still-want-better-proof-it-works-all-year-round/" }]
    },
    {
      id: "edelman", dep: "planning", peso: "secundaria",
      etiquetas: ["B2B", "Edelman", "LinkedIn"],
      titular: "Edelman: el 82 % de los compradores B2B dice que el liderazgo de opinión vale más que antes",
      corto: "Edelman: el liderazgo de opinión pesa más en B2B",
      cuerpo: "El informe 2026 de Edelman sobre el impacto del liderazgo de opinión en B2B, con más de 1,100 profesionales de nivel gerencial, encontró que 82 % de los compradores cree que este contenido se está volviendo más valioso, y 89 % dice que el contenido de calidad hace sentir a una empresa como un socio a largo plazo. Aunque la IA pesa más en la búsqueda de proveedores, la mayoría de los compradores todavía verifica sus recomendaciones con el contenido de la marca.",
      cifras: [
        { v: "82 %", t: "de los compradores B2B dice que el liderazgo de opinión vale más" },
        { v: "89 %", t: "dice que el buen contenido hace ver a la empresa como un socio a largo plazo" },
        { v: "1,100+", t: "profesionales de nivel gerencial en el estudio" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/thought-leadership-remains-highly-valuable-for-b2b-buyers/874464/" }]
    },

    {
      id: "xetiquetas", dep: "data", peso: "principal",
      etiquetas: ["IA", "X", "Transparencia"],
      titular: "X va a decir por qué marcó tu post como hecho con IA",
      corto: "X explicará por qué etiqueta un post como IA",
      cuerpo: "X prepara etiquetas nuevas de transparencia que no solo dicen si un post se hizo con IA, sino cómo se usó y por qué el sistema lo marcó. Las presentó Michael O’Herlihy, jefe de seguridad de marca de X, en el Brand & AI Safety Summit de Nueva York el martes. La idea es que los creadores entiendan la razón y puedan refutar la etiqueta, y que ese intercambio ayude a entrenar el sistema. O’Herlihy dijo que X depende cada vez más del etiquetado automático porque es mucho más rápido. El riesgo: los falsos positivos.",
      cifras: [
        { v: "Automático", t: "X aumentó el etiquetado automático de violaciones con IA porque es más rápido" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a Data?",
      toca: "Si una pieza del cliente sale marcada como IA, la gente la comparte menos y la marca tiene que dar explicaciones. Saber qué se hizo con IA y dónde se usó pasa a ser parte del control de calidad.",
      hacer: "Esta semana, armar un registro sencillo por cliente: qué piezas en X usan IA, pa’ qué y quién lo aprobó, pa’ poder responder rápido si una sale etiquetada.",
      fuentes: [
        { nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/x-experiments-with-expanded-ai-transparency-labels/874461/" },
        { nombre: "Adweek", url: "https://www.adweek.com/media/x-previews-labels-that-tell-users-why-its-ai-system-flagged-their-posts/" }
      ]
    },
    {
      id: "metaalgoritmo", dep: "data", peso: "secundaria",
      etiquetas: ["Algoritmo", "Meta", "Facebook"],
      titular: "Meta explica su «Your Algorithm»: cuando pides menos IA en tu feed, te la bajan, pero no te la quitan",
      corto: "Meta explica cómo funciona «Your Algorithm»",
      cuerpo: "Meta publicó en su blog de ingeniería cómo funciona «Your Algorithm» en Facebook, el control con el que cada persona añade o quita temas de la lista de intereses que el sistema armó con su actividad, ahora también pidiéndolo con un chatbot. Modelos de lenguaje (LLM) arman esos perfiles de temas. Los pedidos de calidad, como ver menos contenido hecho con IA, se manejan con señales de degradación que lo bajan sin eliminarlo, y cuando alguien pide menos de un creador, ese contenido se filtra directamente. Los temas nuevos reciben peso extra por un tiempo limitado.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-publishes-explainer-on-your-algorithm-controls/874460/" }]
    },

    {
      id: "threads", dep: "content", peso: "principal",
      etiquetas: ["Threads", "Búsqueda", "Monitoreo"],
      titular: "Threads por fin deja buscar bien: filtros por fecha, tipo de post, tema y perfil",
      corto: "Threads estrena filtros de búsqueda",
      cuerpo: "Threads anunció herramientas nuevas de búsqueda con filtros avanzados: fecha de publicación, tipo de post, comunidad o tema, y perfil. También agrega la opción de coincidencia exacta pa’ buscar frases de varias palabras. Hasta ahora, buscar un post en Threads devolvía resultados casi al azar, según Social Media Today.",
      cifras: [
        { v: "4", t: "filtros nuevos: fecha, tipo de post, comunidad o tema, y perfil" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Con búsqueda por fecha y frase exacta, Threads se vuelve útil pa’ escuchar qué se dice de la marca y de la competencia, sin depender de Google.",
      hacer: "Esta semana, buscar en Threads el nombre de cada cliente y su campaña de Navidad con coincidencia exacta y filtro de fecha, y llevar al reporte semanal lo que se está comentando.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/threads-adds-advanced-search-filters/874339/" }]
    },
    {
      id: "linkedinvisitas", dep: "content", peso: "secundaria",
      etiquetas: ["LinkedIn", "Perfil", "Prueba"],
      titular: "LinkedIn prueba enseñarte cuántas veces alguien volvió a tu perfil",
      corto: "LinkedIn prueba contar las visitas repetidas",
      cuerpo: "LinkedIn confirmó a Wired que prueba una función pa’ suscriptores Premium que muestra si alguien visitó su perfil varias veces en un período. Algunos mercadólogos lo ven como una lista de contactos con interés, pero también puede resultar incómodo; quien quiera puede limitar su perfil solo a sus contactos. LinkedIn no dio más detalles.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/linkedin-tests-frequent-viewer-feature/874463/" }]
    },

    {
      id: "iareputacion", dep: "rd", peso: "principal", para: ["data", "content", "planning"],
      etiquetas: ["IA", "Reputación", "Cámara Santo Domingo"], fecha: "11 nov 2026 · Santo Domingo",
      titular: "Víctor Bautista a las empresas: averigüen qué dice la IA de ustedes",
      corto: "Audita qué dice la IA de tu marca",
      cuerpo: "Santo Domingo.— En un Conversatorio de la Cámara Santo Domingo, el consultor Víctor Bautista, CEO y socio director de Mediáticos, advirtió que ChatGPT, Gemini, Claude y Perplexity ya son intermediarios en cómo la gente investiga y compara empresas, y que esa respuesta «puede convertirse en un factor de reputación». Recomendó revisar patrones en varias plataformas, registrar las fuentes que usan y convertir los sitios corporativos en fuentes de conocimiento, con datos propios, autores y fechas de actualización. Presentó la Auditoría de Reputación Generativa (ARG) de Mediáticos, en fase inicial, y aclaró que ninguna técnica de GEO garantiza salir citado.",
      cifras: [
        { v: "4", t: "plataformas de IA citadas: ChatGPT, Gemini, Claude y Perplexity" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Antes de que el cliente lo descubra en una reunión, la agencia debe saber qué responde la IA cuando alguien pregunta por la marca. Es reputación, contenido y data al mismo tiempo.",
      hacer: "Esta semana, hacerle las mismas cinco preguntas sobre un cliente a ChatGPT, Gemini, Claude y Perplexity, guardar respuestas y fuentes, y llevarle al cliente qué está bien, qué está viejo y qué falta.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/388038/victor-bautista-insta-a-empresas-a-auditar-lo-que-la-inteligencia-artificial-dice-sobre-ellas/" }]
    },
    {
      id: "travvy", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Turismo", "Premios", "Travvy"], fecha: "11 nov 2026 · Fort Lauderdale",
      titular: "¡Wepa! RD se lleva el oro como Mejor Destino del Caribe por tercer año seguido",
      corto: "RD, oro en los Travvy por tercera vez",
      cuerpo: "República Dominicana ganó por tercer año consecutivo (2024, 2025 y 2026) el oro como Mejor Destino del Caribe en la 12.ª edición de los Travvy Awards, que votan los asesores de viajes, celebrados en Fort Lauderdale en el marco de CruiseWorld. También se llevó dos platas: Mejor Destino Gastronómico del Caribe y Mejor Oficina de Turismo del Caribe. El país se promueve bajo la campaña «Feel DR: The Land That Has It All».",
      cifras: [
        { v: "3", t: "años seguidos con el oro como Mejor Destino del Caribe" },
        { v: "2", t: "platas: gastronomía y oficina de turismo" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El premio lo dan los asesores de viajes, el canal que recomienda el destino. Pa’ marcas de turismo y gastronomía es un argumento fresco pa’ las piezas de temporada alta.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/388041/republica-dominicana-conquista-oro-como-mejor-destino-del-caribe-en-los-travvy-awards-2026/" }]
    },
    {
      id: "prousuario", dep: "rd", peso: "secundaria", para: ["data", "creatividad", "content"],
      etiquetas: ["Banca", "Regulación", "Publicidad responsable"], fecha: "11 nov 2026",
      titular: "Reglamento nuevo pa’ la banca: hoja resumen, publicidad responsable y aviso de a quién van tus datos",
      corto: "La banca estrena reglas de publicidad y datos",
      cuerpo: "Natalia Sánchez, directora de ProUsuario de la Superintendencia de Bancos, explicó el nuevo Reglamento de Protección al Usuario de los Productos y Servicios Financieros. Las entidades deberán dar información homogénea en sucursales y canales digitales, entregar una hoja resumen con cargos, comisiones y penalidades, y aplicar criterios de publicidad responsable. Habrá un período de reflexión de 24 horas y derecho a retractarse en los 10 días después de contratar. Los clientes deberán saber antes a quién se ceden sus datos, pa’ qué y cómo retirar su consentimiento. El plazo pa’ reclamar ante ProUsuario sube de 60 a 90 días, y la entidad prepara informes mensuales a los bancos sobre las quejas en redes.",
      cifras: [
        { v: "90 días", t: "pa’ reclamar ante ProUsuario, antes 60" },
        { v: "6,600", t: "reclamaciones el año pasado, frente a unas 1,500 al año en 2019 y 2020" },
        { v: "600,000", t: "usuarios activos en la app de ProUsuario" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si manejas cuentas de banca, las piezas de productos financieros tienen que pasar por el filtro de publicidad responsable, y las quejas en redes ahora llegan en informes al regulador.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/388131/nuevo-reglamento-fortalece-derechos-de-usuarios-bancarios-y-amplia-plazos-para-reclamar/" }]
    },
    {
      id: "feriaemprendedores", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Emprendimiento", "Pymes", "Agenda"], fecha: "12 nov 2026 · Downtown Center",
      titular: "La Feria de Emprendedores llega a su décima edición, con premios de hasta RD$3 millones",
      corto: "X Feria de Emprendedores, hoy en Downtown",
      cuerpo: "Santo Domingo.— Este jueves 12 de noviembre, el Downtown Center recibe la X Feria de Emprendedores de la República Dominicana, anunciada por David Collado, José Luis (Pepín) Corripio y Ligia Bonetti, bajo el lema «Tu proyecto puede ser la próxima gran historia». Ofrece premios de hasta RD$3 millones, asesorías legales, publicitarias y financieras sin honorarios, orientación en marketing y redes, y stands gratis pa’ emprendedores seleccionados. Ahí se entrega el Premio Pepín Corripio al Emprendedor Dominicano.",
      cifras: [
        { v: "RD$3 millones", t: "en premios, como máximo" },
        { v: "10", t: "ediciones de la feria" }
      ],
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/david-collado-pepin-corripio-y-ligia-bonetti-anuncian-la-decima-edicion-de-la-feria-emprendedores/" }]
    },
    {
      id: "wingo", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Aerolíneas", "Puerto Plata"], fecha: "10 nov 2026 · Puerto Plata",
      titular: "Wingo ya vuela directo entre Puerto Plata y Bogotá",
      corto: "Wingo vuela Puerto Plata–Bogotá",
      cuerpo: "Wingo inauguró en el Aeropuerto Gregorio Luperón su ruta directa entre Puerto Plata y Bogotá, la única entre Colombia y el norte de República Dominicana, según la aerolínea. Tendrá dos frecuencias por semana, lunes y viernes, y 8,928 asientos en su primera temporada, que va hasta el 25 de enero de 2027. Es una opción pa’ la gente de Puerto Plata, Santiago y el Cibao en las vacaciones de fin de año.",
      cifras: [
        { v: "8,928", t: "asientos en la primera temporada" },
        { v: "2", t: "vuelos por semana: lunes y viernes" }
      ],
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/388009/wingo-inaugura-su-ruta-directa-entre-puerto-plata-y-bogota/" }]
    },
    {
      id: "sanz", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Música", "Conciertos", "Agenda"], fecha: "14 nov 2026 · Centro Olímpico",
      titular: "Alejandro Sanz canta el sábado en el Centro Olímpico con su gira «¿Y ahora qué?»",
      corto: "Alejandro Sanz canta el sábado en la capital",
      cuerpo: "El cantautor español Alejandro Sanz se presenta este sábado 14 de noviembre, a las 9:00 de la noche, en el Estadio de Béisbol del Centro Olímpico Juan Pablo Duarte. El concierto es parte de su gira internacional «¿Y ahora qué?», con temas nuevos y los éxitos de más de tres décadas de carrera.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Un concierto grande en la capital es conversación garantizada el fin de semana: buen momento pa’ contenido en tiempo real y pa’ pauta en radio y digital alrededor del evento.",
      fuentes: [
        { nombre: "7 Días", url: "https://7dias.com.do/2026/11/11/alejandro-sanz-regresa-a-santo-domingo-este-sabado-con-su-gira-y-ahora-que/" },
        { nombre: "Remolacha", url: "https://remolacha.net/2026/11/alejandro-sanz-rd-sabado/" }
      ]
    },
    {
      id: "cabello", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Redes", "Turismo", "Música"], fecha: "10 nov 2026 · La Romana",
      titular: "Camila Cabello se da su vueltecita por La Romana, con Juan Luis Guerra de fondo",
      corto: "Camila Cabello presume La Romana en Instagram",
      cuerpo: "La cantante Camila Cabello publicó en Instagram una galería de su visita a La Romana, geolocalizada en República Dominicana, musicalizada con «Frío, Frío» de Juan Luis Guerra y con el mensaje «que lo que». Cuando Diario Libre la revisó, ya iba por 490 mil «me gusta», unos 3,400 comentarios y más de 4 mil reposteos.",
      cifras: [
        { v: "490 mil", t: "«me gusta» en la galería al momento de la revisión" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Una figura internacional usando una canción y una frase bien dominicanas es promoción de país sin pagar pauta. Pa’ marcas de turismo y bebidas, ese tipo de momento se aprovecha rápido o se pierde.",
      fuentes: [
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/farandula/2026/11/10/camila-cabello-disfruta-del-encanto-dominicano/3716954" },
        { nombre: "Remolacha", url: "https://remolacha.net/2026/11/camila-cabello-chillin-en-la-romana/" }
      ]
    }
  ],

  pizarra: ["linkedinctv", "maybelline", "redditcreditos", "xetiquetas", "threads", "iareputacion"],

  frases: [
    { dep: "creatividad", texto: "Maybelline no botó su tagline de 1991: le cambió el sentido, de pregunta a declaración.", uso: "para conversaciones de activos de marca" },
    { dep: "medios", texto: "LinkedIn quiere que la TV conectada también sirva pa’ vender B2B, pero la prima de precio hay que justificarla con números.", uso: "para conversaciones de CTV y B2B" },
    { dep: "data", texto: "X va a decir por qué marcó un post como IA: saber qué se hizo con IA ya es parte del control de calidad.", uso: "para conversaciones de IA y seguridad de marca" },
    { dep: "rd", texto: "Cuando alguien le pregunta a la IA por tu empresa, esa respuesta ya es reputación.", uso: "para conversaciones de reputación y GEO" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "LinkedIn en la TV conectada" },
      { id: "creatividad", texto: "El nuevo «Maybe» de Maybelline" },
      { id: "planning", texto: "Los créditos de Reddit" },
      { id: "data", texto: "Las etiquetas de IA de X" },
      { id: "content", texto: "Los filtros de Threads" },
      { id: "rd", texto: "Zoom a RD: qué dice la IA de tu marca" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "linkedinctv", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "redditcreditos", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Hasta el 20 de noviembre: Reddit da créditos a anunciantes nuevos que salgan antes de esa fecha. En EE. UU., US$1,500 en créditos al invertir US$1,500."
    },
    data: {
      tipo: "secreto", nota: "metaalgoritmo", titulo: "Destapa el expediente",
      texto: "En Facebook, cuando pides [[menos contenido hecho con IA]], Meta no lo borra: lo baja con [[señales de degradación]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "travvy", titulo: "La pregunta del patio",
      p: "¿Cuántos años seguidos ha ganado RD el oro como Mejor Destino del Caribe en los Travvy Awards?",
      opciones: ["Uno", "Dos", "Tres"], correcta: 2,
      explicacion: "Fueron 2024, 2025 y 2026. Este año también se llevó dos platas: gastronomía y oficina de turismo."
    }
  }
};
