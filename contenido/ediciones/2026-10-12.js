/*
  El Pulso Publicitario · edición N.º 285 · 12 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 285,
  fechaISO: "2026-10-12",
  fecha: "Lunes 12 de octubre 2026",
  fechaCorta: "12 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Arranca la semana con una pregunta pa’ cada cliente: ¿quién te atiende, a quién le hablas y con qué datos?",
    largo: "Lunes de movimiento. PepsiCo se cambió de Omnicom a Publicis sin concurso, las agencias empiezan a planificar con audiencias sintéticas y Noruega le dio a Xandr la multa más alta de su historia por compartir datos sensibles. Aquí en el patio, el sur del país apenas tiene el 8.4 % de las terminales de pago y el 71 % de los turistas que lo visitan paga en efectivo. Escoge hoy un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del viernes.",
    porDep: {
      medios: "Cuando un cliente grande cambia de agencia sin concurso, es que la confianza y el dato pesaron más que el papel. Revisa qué estás entregando que nadie más entrega.",
      creatividad: "Un famoso solo funciona si la idea se sostiene sin él. Prueba el guion pensando en que el famoso no sale en la foto.",
      planning: "Una audiencia sintética sirve pa’ ordenar ideas, no pa’ cerrarlas. Verifícala siempre con una prueba chiquita en el mundo real.",
      data: "Si tus datos pasan por subastas en tiempo real, mapea quién los recibe y con qué permiso. Culpar al socio no te protege.",
      content: "Las plataformas premian lo original y lo que de verdad genera conversación. Piensa en un aporte propio antes de copiar el formato del momento.",
      rd: "Donde hay menos terminales de pago hay más efectivo. Antes de armar la promo, pregúntate cómo va a pagar la gente de esa zona."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "PepsiCo pasa su cuenta global de medios de Omnicom a Publicis sin concurso · El agente Muse de Meta pone primero a los comercios conocidos" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Sprite lleva a Nikola Jokić a un club de comedia y vuelve global su apuesta por la NBA · Twix repite con su Zombie Claus y su «Hallowmas»" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Las agencias adoptan audiencias sintéticas pa’ planificar · Omnicom: el 65 % de los consumidores evita los anuncios" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Noruega multa a Xandr con NOK 92 millones por datos de usuarios de Grindr · noyb califica 248 enmiendas del PPE que debilitan la privacidad" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Threads estrena «Gems» pa’ reconocer las mejores publicaciones · X lleva su hub Gametime a las Grandes Ligas" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "pepsico", dep: "medios", peso: "principal",
      etiquetas: ["Cuentas", "PepsiCo", "Publicis"],
      titular: "PepsiCo le quita su cuenta global de medios a Omnicom y se la da a Publicis, sin concurso",
      corto: "PepsiCo pasa su cuenta de medios de Omnicom a Publicis",
      cuerpo: "PepsiCo movió su cuenta global de medios de Omnicom, que la manejaba desde hacía tres décadas, a Publicis, y lo hizo sin un proceso formal de revisión. COMvergence estima que la empresa invierte unos US$1,900 millones al año en medios, US$780 millones de ellos en Norteamérica. Su CEO, Ramon Laguarta, le dijo a los inversionistas que Publicis es «una capacidad importante» y que invertirán «con muchos más datos, mucha más granularidad». Coca-Cola, que ganó su cuenta norteamericana con Publicis el año pasado, prepara ahora una revisión y estaría hablando con Omnicom y Dentsu.",
      cifras: [
        { v: "US$1,900M", t: "inversión anual estimada de PepsiCo en medios, según COMvergence" },
        { v: "US$780M", t: "de ese total se invierte en Norteamérica" },
        { v: "30 años", t: "que Omnicom manejó la cuenta global" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Cuando un anunciante grande cambia de agencia sin concurso y habla de «datos y granularidad», nos dice qué está pidiendo el cliente: más precisión y más control. Ojo: las cifras de inversión son estimados de un tercero y no cifras de la empresa.",
      hacer: "Esta semana, preparar con el equipo de cuentas una página que muestre qué datos y qué nivel de detalle le entregas hoy a cada cliente grande, y detectar dónde te pueden pedir más antes de que lo pidan.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/an-important-capability-for-us-pepsico-ceo-on-publicis-switch/" }]
    },
    {
      id: "muse", dep: "medios", peso: "secundaria",
      etiquetas: ["Meta", "Muse", "IA", "Comercio"],
      titular: "El agente de compras de Meta pone primero a los comercios conocidos, según un análisis de Profound",
      corto: "Meta Muse pone primero a los comercios conocidos",
      cuerpo: "Muse, el asistente de compras de Meta lanzado en EE. UU. el 8 de septiembre, ya está en iOS, Android, la web y WhatsApp en EE. UU. y Canadá, y desde el 29 de septiembre llega también a pequeños negocios con acceso a cuentas de anuncios de Meta. La empresa de analítica Profound extrajo las instrucciones del agente y encontró que ordena de primero a los comercios «bien conocidos» entre sus cinco primeras opciones, busca como máximo en tres tiendas y devuelve hasta diez productos. El catálogo de Meta aportó cerca del 95 % de los candidatos, pero ganó solo un tercio de los espacios. Meta no ha comentado y Profound describe su muestra como pequeña y exploratoria.",
      cifras: [
        { v: "~95%", t: "de los candidatos vienen del catálogo de Meta, pero ganó cerca de un tercio de los espacios" },
        { v: "3 tiendas", t: "máximo que el agente consulta en la web abierta" },
        { v: ">5 millones", t: "instalaciones en 22 días, según estimados de terceros" }
      ],
      toca: "Si los asistentes de compras reparten el espacio según qué tan conocido es el comercio, la marca pequeña la tiene más difícil. Es un análisis con muestra chica, así que sirve como alerta y no como regla.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/metas-muse-agent-puts-well-known-merchants-first-as-it-gains-ad-accounts/" }]
    },

    {
      id: "sprite", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Sprite", "NBA"],
      titular: "Sprite pone a Nikola Jokić a contar chistes en un club de comedia y vuelve global su apuesta por la NBA",
      corto: "Sprite pone a Jokić a contar chistes en un club de comedia",
      cuerpo: "Sprite presentó «Never Stop Refreshing the Game», una campaña que suma a Nikola Jokić, tres veces MVP de la NBA, a Anthony Edwards. El anuncio que presenta la alianza se pasa en un club oscuro de comedia: Jokić toma un Sprite, agarra el micrófono y suelta chistes que reciben una respuesta muy fría. Abre con «¿Alguien quiere escuchar unos buenos chistes?». La campaña llega antes del arranque de la temporada, el 20 de octubre, y busca conectar el escenario grande de la NBA con las comunidades locales.",
      cifras: [
        { v: "20 oct", t: "arranque de la temporada 2026 de la NBA" },
        { v: "3", t: "premios MVP de Jokić" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "En vez de poner al atleta a lucirse haciendo lo que hace mejor, la idea lo saca de su terreno y lo pone a fallar con humor. Eso lo vuelve cercano. La fuente no nombra la agencia ni detalla los canales, así que lo que vale es la idea.",
      hacer: "Esta semana, en la reunión creativa, tomar un cliente con embajador o talento y proponer una escena donde esa figura salga de su zona de confort, y llevar al menos dos guiones cortos a la mesa.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/sprite-enlists-nikola-jokic-to-take-its-nba-play-worldwide/" }]
    },
    {
      id: "twix", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Twix", "Halloween"],
      titular: "Twix repite con Zombie Claus y su «Hallowmas», mitad Halloween y mitad Navidad",
      corto: "Twix repite con Zombie Claus y su «Hallowmas»",
      cuerpo: "Twix trae de vuelta a Zombie Claus por segundo año, dentro de su plataforma «Two Is More Than One», con un spot de 40 segundos y otro de 15, hecho por adam&eve\\TBWA, con producción de Rouge Films. La campaña arrancó con una aparición en el programa Subway Takes, sigue en redes y en medios ganados, y cierra el día de Halloween con Zombie Claus repartiendo barras Twix en Williamsburg, Nueva York. Incluye un concurso de US$20,000 pa’ premiar los mejores disfraces y mezclas de Halloween y Navidad.",
      cifras: [
        { v: "US$20,000", t: "en premios del concurso para los consumidores" }
      ],
      toca: "Mezclar dos temporadas en una sola idea alarga la vida de la campaña. Y volver con el mismo personaje en un segundo año hace que la gente lo reconozca de una vez.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/twix-doubles-down-on-hallowmas-bringing-back-zombie-claus-for-more-fright-and-cheer/" }]
    },

    {
      id: "sintetica", dep: "planning", peso: "principal",
      etiquetas: ["Audiencias", "IA", "Agencias"],
      titular: "Las agencias ya planifican con audiencias sintéticas: Goodway se alía con Arima y Kenvue recorta de 30 días a tres su brief",
      corto: "Las agencias adoptan audiencias sintéticas pa’ planificar",
      cuerpo: "Según el Media Buying Briefing de Digiday del 12 de octubre, Goodway Group firmó con la empresa de datos Arima pa’ meter en su planificación una población sintética de consumidores de EE. UU., Reino Unido y Alemania. Con eso, su gente corre pruebas de incrementalidad en un entorno simulado y luego las verifica con activaciones pequeñas. Vurvey Labs ofrece personas sintéticas a Magnum, Vans y Kenvue, y en Aveeno Body de Kenvue redactar el brief estratégico pasó de unos 30 días a tres. Julie Clark, de TransUnion, advirtió sobre los perfiles construidos con datos que no son propios, y Stef Hoffman, de Code & Theory, dijo que la herramienta «informa el criterio, pero no lo reemplaza».",
      cifras: [
        { v: "30 → 3 días", t: "tiempo de redactar el brief estratégico en Aveeno Body, de Kenvue" },
        { v: "3 países", t: "EE. UU., Reino Unido y Alemania, en la población sintética de Goodway con Arima" },
        { v: "US$8.5M", t: "ronda de inversión de Vurvey Labs, con Havas entre los inversionistas" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a planning?",
      toca: "Las audiencias sintéticas aceleran el primer borrador del plan, pero no sustituyen hablar con gente de verdad. Los datos propios del cliente son lo que le da valor al ejercicio.",
      hacer: "Esta semana, escoger un cliente con datos propios y armar una prueba de una página: qué pregunta le haríamos a una audiencia simulada y cómo la verificaríamos con una prueba chiquita en el mercado.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/media-buying-briefing-synthetic-audience-adoption-by-agencies-and-clients-takes-off/" }]
    },
    {
      id: "evitan", dep: "planning", peso: "secundaria",
      etiquetas: ["Consumidor", "Omnicom", "Anuncios"],
      titular: "Omnicom: el 65 % de los consumidores evita los anuncios, pero no por odio a las marcas",
      corto: "Omnicom: el 65 % evita los anuncios",
      cuerpo: "Omnicom Media Intelligence publicó «From Tuned Out to Leaned In», un estudio con una encuesta a 1,136 adultos de EE. UU. hecha en agosto y una investigación de comportamiento con 1,200 consumidores. Encontró que el 65 % evita los anuncios en algún grado, que el 25 % lo hace de forma muy activa, y que el 41 % paga suscripciones pa’ no verlos. La razón de fondo no es rechazo a las marcas, sino anuncios que se sienten interruptivos, repetidos o irrelevantes. Omnicom recomienda planificar juntos la frecuencia, el contexto y la creatividad.",
      cifras: [
        { v: "65%", t: "de los consumidores de EE. UU. evita los anuncios en algún grado" },
        { v: "41%", t: "paga suscripciones pa’ evitar los anuncios" }
      ],
      toca: "Es un estudio de EE. UU. hecho por una agencia, así que hay que leerlo con cuidado en RD. Aun así, el mensaje sirve: el problema no es anunciarse, es hacerlo mal, repetido y fuera de lugar.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/omnicom-media-digs-into-the-reasons-people-avoid-ads-and-offers-solutions-for-clients/" }]
    },

    {
      id: "xandr", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Noruega", "Xandr"],
      titular: "Noruega le pone a Xandr, de Microsoft, la multa más alta de su historia por compartir datos sensibles de usuarios de Grindr",
      corto: "Noruega multa a Xandr con NOK 92 millones",
      cuerpo: "Datatilsynet, la autoridad de protección de datos de Noruega, multó con NOK 92 millones (unos €8.6 millones) a Xandr, la empresa de ad tech antes llamada AppNexus y hoy propiedad de Microsoft. Según la autoridad, entre julio de 2018 y abril de 2020 Xandr procesó y compartió, por subasta en tiempo real, datos personales de usuarios de Grindr en Noruega, incluidos datos que revelan orientación sexual, sin base legal. Datatilsynet rechazó que se pudiera echar la culpa a Grindr y dijo que no acepta que los actores se culpen unos a otros. Es la multa más alta que ha puesto la autoridad y supera en NOK 27 millones la de Grindr en 2021. Xandr tiene tres semanas pa’ apelar.",
      cifras: [
        { v: "NOK 92 millones", t: "multa a Xandr, unos €8.6 millones según Datatilsynet" },
        { v: "NOK 65 millones", t: "multa a Grindr en 2021 por infracciones equivalentes" },
        { v: "3 semanas", t: "plazo de Xandr para apelar" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Las subastas en tiempo real arrastran responsabilidad: quien recibe y usa el dato también responde, no solo quien lo recoge.",
        "El consentimiento explícito pesa mucho cuando el dato es sensible, y quien lo recibe tiene que poder comprobarlo."
      ],
      hacer: "Esta semana, pedir a los proveedores de ad tech de las cuentas con datos sensibles (salud, finanzas, preferencias personales) que muestren cómo verifican el consentimiento antes de recibir o compartir un dato.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/norway-fines-microsofts-xandr-nok-92m-over-grindr-users-sensitive-data/" }]
    },
    {
      id: "omnibus", dep: "data", peso: "secundaria",
      etiquetas: ["Regulación", "Unión Europea", "GDPR"],
      titular: "noyb califica al PPE por 248 enmiendas que debilitan la privacidad en el «Digital Omnibus» europeo",
      corto: "noyb: 248 enmiendas del PPE debilitan la privacidad",
      cuerpo: "El grupo de privacidad noyb, presidido por Max Schrems, publicó un ranking de las enmiendas que eurodiputados presentaron a la parte de GDPR y ePrivacy del Digital Omnibus. El Partido Popular Europeo (PPE) acumula 248 enmiendas calificadas de negativas, cerca de la mitad de las 476 negativas que, según el cálculo de PPC Land, sumaron todos los grupos. La propuesta de la Comisión incluiría una definición relativa de datos personales y una nueva base legal pa’ desarrollar IA con interés legítimo. El Parlamento sigue en comisión y aún no hay votación. Ojo: las calificaciones son de noyb y no ponderan la importancia de cada enmienda.",
      cifras: [
        { v: "248", t: "enmiendas del PPE que noyb califica de negativas" },
        { v: "476", t: "enmiendas negativas en total, según el cálculo de PPC Land" }
      ],
      toca: "Lo que se decida en Europa puede cambiar cómo se define un dato personal y cómo se usa pa’ IA, y eso toca a los clientes con operaciones europeas. Todavía es un proyecto, no una ley.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/epp-tabled-248-omnibus-amendments-weakening-privacy-noyb-finds/" }]
    },

    {
      id: "gems", dep: "content", peso: "principal",
      etiquetas: ["Threads", "Meta", "Creadores"],
      titular: "Threads estrena «Gems» pa’ reconocer las publicaciones con las mejores conversaciones",
      corto: "Threads estrena «Gems» pa’ las mejores publicaciones",
      cuerpo: "Threads empezó a reconocer dentro de la app las publicaciones y respuestas que generan conversaciones de valor, con un programa llamado Gems. La selección es automática y mira tres cosas: perspectiva (una mirada fresca), discusión (un intercambio genuino) y originalidad (contenido propio, no copiado de otra app). Quien recibe una Gem recibe una notificación, puede compartirla o rechazarla, y la publicación muestra un ícono especial. Por ahora solo cuentan las publicaciones públicas y las respuestas directas, y solo están habilitados los usuarios de EE. UU. La función se vio en pruebas en agosto.",
      cifras: [
        { v: "3 criterios", t: "perspectiva, discusión y originalidad" },
        { v: "Solo EE. UU.", t: "disponibilidad inicial" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de content?",
      toca: "Threads le da señal de premio a lo original y a lo que abre conversación. Cuando llegue a RD, los equipos que ya publiquen con opinión propia van a tener ventaja. Hoy solo aplica en EE. UU., así que es pa’ ir preparándose.",
      hacer: "Esta semana, revisar las últimas 10 publicaciones de Threads de un cliente y marcar cuáles aportaron una mirada propia o abrieron conversación, pa’ definir qué formato repetir.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/threads-recognizes-top-posts-with-in-app-gems-program/832577/" }]
    },
    {
      id: "xmlb", dep: "content", peso: "secundaria",
      etiquetas: ["X", "Deportes", "MLB"],
      titular: "X lleva su hub Gametime a las Grandes Ligas, con el béisbol de octubre en pleno",
      corto: "X estrena Gametime pa’ las Grandes Ligas",
      cuerpo: "X extendió su espacio Gametime al béisbol de las Grandes Ligas, después del modelo que ya usa con la NFL. Reúne en un solo lugar marcadores y estadísticas en tiempo real, contenido oficial de los equipos, noticias, creadores y conversación en vivo. X dice que busca darles a los fanáticos más formas de seguir a sus equipos y a las marcas acceso a audiencias muy activas en los grandes momentos.",
      toca: "Con la Serie de Campeonato en marcha y tantos dominicanos en las Grandes Ligas, es un espacio pa’ que las marcas deportivas escuchen la conversación. No hay cifras de lanzamiento todavía.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/x-launches-mlb-gametime-experience/832574/" }]
    },

    {
      id: "pos", dep: "rd", peso: "principal", para: ["planning", "medios", "data"],
      etiquetas: ["Pagos", "Consumo", "Banco Central"], fecha: "12 oct 2026",
      titular: "El sur tiene solo el 8.4 % de las terminales de pago del país y el 71 % de los turistas que lo visitan paga en efectivo",
      corto: "El sur solo tiene el 8.4 % de las terminales de pago",
      cuerpo: "Santo Domingo.— Según datos del Banco Central hasta agosto de 2026, las 11 provincias del sur tienen 17,671 terminales de pago (POS), el 8.4 % de las 209,729 del país. Eso es 831 por cada 100,000 habitantes, la relación más baja de todas las regiones. La zona metropolitana tiene 2,684.5 por cada 100,000, el este 2,537 y el norte 1,617. La viceministra de Turismo, Jacqueline Mora, citó información de Visa y dijo que el 71 % de los turistas que visitan el sur paga en efectivo, en parte por la falta de terminales y cajeros. También señaló que cinco provincias del sur tienen la mayor incidencia de pobreza.",
      cifras: [
        { v: "8.4%", t: "de las 209,729 terminales POS del país está en el sur" },
        { v: "831", t: "terminales por cada 100,000 habitantes en el sur, la relación más baja" },
        { v: "2,684.5", t: "por cada 100,000 en la zona metropolitana, la más alta" },
        { v: "71%", t: "de los turistas del sur paga en efectivo, según Visa citada por Turismo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Donde hay menos terminales se paga en efectivo, y eso cambia cómo funciona una promoción con tarjeta, un cupón digital o un pago en línea. Pa’ el sur, el mensaje tiene que pensar en cómo paga la gente.",
      hacer: "Esta semana, revisar con los clientes de banca, retail y turismo qué promociones de Q4 dependen de pagar con tarjeta y proponer una versión para zonas donde se paga más en efectivo.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/10/12/el-sur-tiene-la-mas-baja-relacion-entre-pos-por-100000-habitantes/3685888" }]
    },
    {
      id: "visa", dep: "rd", peso: "secundaria", para: ["planning", "data", "content"],
      etiquetas: ["Turismo", "Mitur", "Datos"], fecha: "7 oct 2026",
      titular: "Mitur y Visa amplían su alianza pa’ promover el turismo con datos",
      corto: "Mitur y Visa amplían su alianza de datos",
      cuerpo: "El Ministerio de Turismo y Visa presentaron los avances de su alianza estratégica pa’ fortalecer la promoción internacional del país con tecnología y análisis del comportamiento de los viajeros. Incluye herramientas de inteligencia de datos pa’ conocer las preferencias y el gasto de los visitantes, segmentación de mercadeo por perfiles e intereses, información sobre categorías de consumo durante la estadía y una plataforma de marca compartida con descuentos y beneficios pa’ los visitantes. El ministro David Collado la calificó de «extraordinariamente positiva». La nota no incluye cifras.",
      toca: "El turismo dominicano empieza a decidir con datos de gasto y de perfil de viajero. Eso le abre puertas a los clientes del sector que quieran alinear su segmentación con lo que se vea en esa información.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/384002/mitur-y-visa-amplian-alianza-para-impulsar-promocion-turistica-basada-en-datos/" }]
    },
    {
      id: "canasta", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Consumo", "Bolsillo"], fecha: "11–12 oct 2026",
      titular: "La canasta básica sube entre RD$1,400 y RD$2,400 en un año",
      corto: "La canasta básica sube hasta RD$2,400 en un año",
      cuerpo: "Remolacha, con base en una nota de Noticias SIN, informó que el costo de la canasta básica familiar aumentó entre RD$1,400 y RD$2,400 frente a agosto de 2025, según el nivel de ingresos del hogar. Entre los productos mencionados están el arroz, el pollo y el aceite. La nota cita «cifras oficiales» sin identificar la institución.",
      toca: "Si el bolsillo aprieta, el hogar compara precios y busca promociones. Pa’ planning es una señal pa’ ajustar el mensaje de valor, y pa’ creatividad, una oportunidad de hablarle al ahorro sin sonar a regaño. Conviene confirmar la cifra con la institución oficial antes de llevarla a un cliente.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/canasta-basica-aumenta-hasta-rd2400-en-un-ano/" }]
    },
    {
      id: "adoexpo", dep: "rd", peso: "secundaria", para: ["medios", "planning"],
      etiquetas: ["Premios", "Exportación", "Medios"], fecha: "8 oct 2026",
      titular: "Adoexpo celebra 40 años de premios y el periódico Hoy gana en comunicación",
      corto: "Adoexpo premia a 11 empresas, entre ellas el periódico Hoy",
      cuerpo: "La Asociación Dominicana de Exportadores celebró la 40.ª edición de los Premios a la Excelencia Exportadora en el Teatro Nacional, con Grupo SID como Gran Exportador Dominicano. Premiaron a 11 empresas, y en servicios modernos el periódico Hoy se llevó el premio de comunicación. Karel Castillo, presidente de Adoexpo, informó que 3,629 empresas exportan 2,752 líneas de productos a 165 mercados. Las exportaciones de servicios de tecnología y comunicación sumaron US$75 millones, 43 % más que el año anterior.",
      cifras: [
        { v: "3,629", t: "empresas exportadoras, con 2,752 líneas de productos" },
        { v: "+43%", t: "exportaciones de servicios de tecnología y comunicación: US$75 millones" }
      ],
      toca: "Un servicio de comunicación y tecnología que crece 43 % es una señal de que el sector creativo también exporta. Pa’ los de medios y planning, es una pista de nuevos clientes con vocación internacional.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/10/08/adoexpo-celebra-la-40-edicion-de-sus-premios/3682495" }]
    }
  ],

  pizarra: ["pepsico", "sprite", "sintetica", "xandr", "gems", "pos"],

  frases: [
    { dep: "medios", texto: "PepsiCo cambió de Omnicom a Publicis sin concurso y su CEO habló de «más datos, más granularidad»: el cliente grande quiere precisión.", uso: "para conversaciones de cuentas y relación con el cliente" },
    { dep: "creatividad", texto: "Sprite puso a un tres veces MVP a contar chistes que nadie se ríe: sacar al famoso de su zona de confort lo vuelve cercano.", uso: "para conversaciones de embajadores y humor" },
    { dep: "planning", texto: "Una audiencia sintética informa el criterio, pero no lo reemplaza: se verifica con una prueba chiquita en el mundo real.", uso: "para conversaciones de planificación con IA" },
    { dep: "data", texto: "Noruega dejó claro que en una subasta en tiempo real nadie puede echarle la culpa al vecino: quien recibe el dato también responde.", uso: "para conversaciones de privacidad y ad tech" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "PepsiCo se pasa de Omnicom a Publicis" },
      { id: "creatividad", texto: "Sprite y Jokić en el club de comedia" },
      { id: "planning", texto: "Las agencias planifican con audiencias sintéticas" },
      { id: "data", texto: "Noruega multa a Xandr con NOK 92 millones" },
      { id: "content", texto: "Threads estrena «Gems»" },
      { id: "rd", texto: "Zoom a RD: el sur y las terminales de pago" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "pepsico", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "evitan", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Antes de cerrar el plan de Q4, revisa frecuencia y contexto: Omnicom encontró que el 65 % de los consumidores evita los anuncios, y que el motivo es que se sienten interruptivos, repetidos o irrelevantes."
    },
    data: {
      tipo: "secreto", nota: "xandr", titulo: "Destapa el expediente",
      texto: "Noruega multó a Xandr con [[NOK 92 millones]] por compartir datos de usuarios de Grindr sin base legal, y la empresa tiene [[tres semanas]] pa’ apelar."
    },
    rd: {
      tipo: "pregunta", nota: "pos", titulo: "La pregunta del patio",
      p: "¿Qué porcentaje de las terminales de pago del país está en el sur?",
      opciones: ["8.4 %", "28.4 %", "48.4 %"],
      correcta: 0,
      explicacion: "El sur tiene 17,671 de las 209,729 terminales POS del país, el 8.4 %, según datos del Banco Central hasta agosto de 2026."
    }
  }
};
