/*
  El Pulso Publicitario · edición N.º 287 · 14 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 287,
  fechaISO: "2026-10-14",
  fecha: "Miércoles 14 de octubre 2026",
  fechaCorta: "14 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes de confiar en un dato nuevo, pregunta de dónde sale y qué parte es real. Hoy eso vale en medios, en data y en el patio.",
    largo: "Miércoles de datos por todos lados. Las agencias ya planifican con consumidores sintéticos, Noruega multó a Xandr por datos que nadie verificó, Pinterest dice que su gente quiere soltar el celular y, aquí en el patio, la inflación de septiembre quedó en 5.12 %. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del viernes.",
    porDep: {
      medios: "Si un plan se apoya en audiencias sintéticas, deja claro qué parte es simulación y qué parte se probó con gente de verdad.",
      creatividad: "Pringles y Chipotle convirtieron un objeto en la idea: una urna y una bolsa gigante. Antes del guion, busca el objeto que cuenta tu historia.",
      planning: "Cuando el consumidor dice que quiere soltar el celular, la pregunta del plan cambia: ¿dónde lo encuentras fuera de la pantalla?",
      data: "Que otro te pase los datos no te quita la responsabilidad. Pregunta qué permiso hay detrás de cada dato que entra a tu cuenta.",
      content: "Si la búsqueda de YouTube ya conversa, tu contenido tiene que responder preguntas completas y no solo llevar buenas etiquetas.",
      rd: "Con la inflación en 5.12 %, el consumidor mira cada peso. Antes de lanzar una promo, ponla al lado de lo que cuesta hoy el plato del día."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Las agencias planifican con consumidores sintéticos · Meta dice que su modelo GEM subió 18.9 % las conversiones" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Pringles regala una urna con forma de lata pa’ Halloween · Chipotle lanza una bolsa gigante con Gut" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Pinterest le pide a las marcas que lleven a la gente de vuelta a su vida · WARC proyecta $1.34 billones en publicidad global" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Noruega multa a Xandr con NOK 92 millones por datos de Grindr · La UE discute bajar a cuatro meses la espera pa’ volver a pedir cookies" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube abre Ask YouTube a todos los usuarios de EE. UU. · X junta sus suscripciones en cinco planes" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "sinteticos", dep: "medios", peso: "principal",
      etiquetas: ["Planificación", "IA", "Audiencias sintéticas"],
      titular: "Las agencias ya planifican medios con consumidores sintéticos y el uso está despegando",
      corto: "Las agencias ya planifican con consumidores sintéticos",
      cuerpo: "Planners de medios, estrategas creativos y CMOs usan cada vez más datos de «consumidores sintéticos»: perfiles, grupos y focus groups virtuales creados con IA. Goodway Group cerró un acuerdo con la empresa de datos Arima pa’ meter en su planificación una población sintética de consumidores de EE. UU., Reino Unido y Alemania. Su CEO, Paul Frampton-Calero, dice que así pueden probar niveles de inversión sin dejar un mercado quieto como grupo de control. En Kenvue, la marca Aveeno Body contó que la herramienta Freckle, de Vurvey, bajó la redacción del brief de unos 30 días a tres. Ojo con la advertencia: Julie Clark, de TransUnion, dice que un persona armado con datos malos no vale nada, y Stef Hoffman, de Code & Theory, que los hallazgos sintéticos «informan el juicio» pero no lo reemplazan.",
      cifras: [
        { v: "30 → 3 días", t: "tiempo de redacción del brief en Aveeno Body con la herramienta de Vurvey" },
        { v: "3 países", t: "EE. UU., Reino Unido y Alemania: la población sintética de Goodway con Arima" },
        { v: "$8.5M", t: "ronda de inversión de Vurvey Labs, con Havas entre sus respaldos" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si tu agencia empieza a probar audiencias sintéticas, el cliente va a preguntar cuánto de ese plan es simulación y cuánto está probado. Los datos de apoyo vienen de las propias empresas, así que no los tomes como medición independiente.",
      hacer: "Esta semana, escoger un plan en marcha y escribir en una página qué supuestos de audiencia podrías validar con una prueba real pequeña antes de usar datos sintéticos en una propuesta.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/media-buying-briefing-synthetic-audience-adoption-by-agencies-and-clients-takes-off/" }]
    },
    {
      id: "gem", dep: "medios", peso: "secundaria",
      etiquetas: ["Meta", "IA", "Conversiones"],
      titular: "Meta dice que su modelo GEM subió 18.9 % las conversiones, pero no da la base",
      corto: "Meta: GEM subió 18.9 % las conversiones",
      cuerpo: "Meta publicó el 13 de octubre un post técnico sobre GEM, su modelo generativo de anuncios, y asegura una mejora de 18.9 % en conversiones y de 12 % en la tasa de clics en sus superficies publicitarias. PPC Land aclara que son cifras de la propia Meta, sin auditar, y que el post no dice cuál es la base, el período ni si salen de pruebas A/B. Tampoco hay ajustes nuevos en Ads Manager: el efecto llega por Advantage+ y la entrega automática.",
      cifras: [
        { v: "+18.9 %", t: "mejora de conversiones que reporta Meta con GEM" },
        { v: "+12 %", t: "mejora en la tasa de clics, también según Meta" }
      ],
      toca: "Es un buen argumento pa’ no pelear con la automatización de Meta, pero un 12 % de clics no prueba ventas incrementales en la cuenta de tu cliente. Mide con tus propias pruebas.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/meta-says-its-gem-ads-model-lifted-conversions-18-9-across-its-apps/" }]
    },

    {
      id: "pringles", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Pringles", "BBDO"],
      titular: "Pringles le ofrece a un fanático su última morada en una urna con forma de lata",
      corto: "Pringles regala una urna con forma de lata pa’ Halloween",
      cuerpo: "Pringles lanzó «Once You Drop», su campaña de Halloween dentro de «Once You Pop, the Pop Don’t Stop», con BBDO New York y Weber Shandwick. Un fanático se gana una urna de metal con forma de lata de Pringles y snacks de por vida. Pa’ entrar hay que firmar online el «Last Will and Taste-Ament» y prometer que, cuando llegue el momento, descansará en la urna. La cara es Dan the Funeral Man, un director de funeraria con presencia en TikTok. La campaña corre en redes y video online, con entradas hasta el 22 de octubre y ganador cerca de Halloween.",
      cifras: [
        { v: "13–22 oct", t: "periodo de entradas pa’ ganar la urna" },
        { v: "1", t: "fanático se lleva la urna y Pringles de por vida" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La idea parte de un objeto real que la gente puede imaginar y compartir, y de un creador que conoce el tema. Una broma con humor negro funciona porque el premio es físico y fácil de contar.",
      hacer: "Esta semana, en la reunión creativa, escoger un producto de un cliente y esbozar un premio físico que cuente su historia en una frase, con un creador que conozca ese mundo.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/pringles-offers-one-die-hard-fan-a-final-resting-place-in-a-branded-urn/" }]
    },
    {
      id: "chipotle", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Chipotle", "Gut"],
      titular: "Chipotle suelta una bolsa gigante pa’ que comer en grupo sea un evento",
      corto: "Chipotle lanza una bolsa gigante con Gut",
      cuerpo: "Chipotle sacó una bolsa de edición limitada de unos tres pies de ancho, con 170 litros de capacidad, pa’ promover sus Family Meals ($10 por persona). Miembros de Rewards en EE. UU. pueden ganarla en un sorteo digital, y quien compre un Family Meal por la app o la web entra automático. Es el primer trabajo grande de la agencia Gut con la marca y trata la bolsa como objeto de lujo, con props de tamaño exagerado.",
      cifras: [
        { v: "170 litros", t: "capacidad de la bolsa" },
        { v: "$10", t: "por persona cuesta el Family Meal" }
      ],
      toca: "Mismo truco que Pringles: un objeto exagerado que carga todo el mensaje. Sirve de referente pa’ marcas de comida que quieran vender consumo en grupo.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/chipotle-drops-a-big-a-bag-to-make-group-dining-a-bigger-deal/" }]
    },

    {
      id: "pinterest", dep: "planning", peso: "principal",
      etiquetas: ["Plataformas", "Pinterest", "Gen Z"],
      titular: "Pinterest le pide a las marcas que lleven a la gente de vuelta a su vida y no al scroll",
      corto: "Pinterest: lleva a la gente de vuelta a su vida, no al scroll",
      cuerpo: "Pinterest publicó una guía pa’ marcas sobre fomentar la actividad fuera de la pantalla. Según sus datos, 40 % de la Gen Z dice que desearía que las redes sociales nunca se hubieran inventado y 63 % quiere desconectarse de forma más intencional. Las búsquedas «things to do instead of scrolling» subieron 365 % y «dumb phone», 150 % frente al año anterior. Su argumento es que el scroll pasivo hace fácil ignorar un anuncio, y que el uso con propósito hace más probable que la marca se compre, se confíe y se recuerde. Son datos de la propia plataforma y de búsquedas en Pinterest.",
      cifras: [
        { v: "63 %", t: "de la Gen Z quiere desconectarse de forma más intencional, según Pinterest" },
        { v: "+365 %", t: "en búsquedas de «things to do instead of scrolling», año contra año" },
        { v: "+150 %", t: "en búsquedas de «dumb phone»" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Si tu audiencia joven quiere menos scroll, el plan no puede medirse solo por tiempo en pantalla. Ojo: es Pinterest hablando de Pinterest, así que contrasta con datos locales.",
      hacer: "Esta semana, tomar un cliente con público joven y proponer una activación fuera de línea pa’ Q4, con una meta que no sea alcance de pantalla.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/pinterest-asks-brands-to-send-people-back-into-their-life/832922/" }]
    },
    {
      id: "warc", dep: "planning", peso: "secundaria",
      etiquetas: ["Inversión", "WARC", "Pronóstico"],
      titular: "WARC proyecta que la publicidad global crece 11.9 % este año hasta $1.34 billones",
      corto: "WARC: la publicidad global llega a $1.34 billones",
      cuerpo: "Según las proyecciones de WARC que recoge Digiday, el gasto publicitario global crece 11.9 % en 2026 hasta $1.34 billones, y el ritmo baja a 8.4 % el año próximo. La publicidad en redes sociales llega a $394.6 mil millones, con un alza de 21.3 %. Alphabet, Amazon y Meta se llevan 59.7 % del gasto global, y subirían a 61.5 % en 2028.",
      cifras: [
        { v: "+11.9 %", t: "crecimiento del gasto publicitario global en 2026" },
        { v: "59.7 %", t: "del gasto global va a Alphabet, Amazon y Meta" },
        { v: "+8.4 %", t: "crecimiento previsto pa’ el año próximo" }
      ],
      toca: "Pa’ el forecast del cliente, el dato marca el ritmo: el crecimiento sigue, pero desacelera, y casi todo se concentra en tres plataformas.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/media-buying-briefing-synthetic-audience-adoption-by-agencies-and-clients-takes-off/" }]
    },

    {
      id: "xandr", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Noruega", "Xandr"],
      titular: "Noruega multa a Xandr con NOK 92 millones por pasar datos de usuarios de Grindr",
      corto: "Noruega multa a Xandr con NOK 92 millones",
      cuerpo: "La autoridad de protección de datos de Noruega, Datatilsynet, multó a Xandr, el exchange publicitario de Microsoft, con NOK 92 millones (unos €8.5 millones), la multa más alta que ha puesto. La decisión es del 2 de octubre y se hizo pública el 12. Xandr recibió y pasó datos de usuarios de Grindr sin base legal válida. Ser usuario de Grindr revela la orientación sexual, un dato que exige consentimiento explícito. La autoridad entendió que Xandr era corresponsable con Grindr y no comprobó que existiera consentimiento. Xandr tiene tres semanas pa’ apelar. La nota no incluye comentario de Microsoft ni de Xandr.",
      cifras: [
        { v: "NOK 92M", t: "multa de Datatilsynet a Xandr, unos €8.5 millones" },
        { v: "Jul 2018 – abr 2020", t: "periodo de la conducta" },
        { v: "3 semanas", t: "plazo de Xandr pa’ apelar" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Recibir datos de otro no te libra de responsabilidad: si eres corresponsable, tienes que comprobar que hay consentimiento.",
        "Los datos que revelan información sensible, como la orientación sexual, exigen consentimiento explícito."
      ],
      hacer: "Esta semana, pedirle a cada proveedor de audiencias de tus cuentas que te diga por escrito cómo comprobó el consentimiento de los datos que te entrega, y guardar esa respuesta en la carpeta del cliente.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/norway-fines-xandr-nok-92m-over-grindr-data-after-nearly-seven-years/" }]
    },
    {
      id: "cookiesue", dep: "data", peso: "secundaria",
      etiquetas: ["Cookies", "UE", "ePrivacy"],
      titular: "La UE discute bajar a cuatro meses la espera pa’ volver a pedir consentimiento de cookies",
      corto: "UE: cuatro meses pa’ volver a pedir cookies",
      cuerpo: "Un borrador del Consejo de la UE, fechado el 2 de octubre, baja de seis a cuatro meses la espera mínima pa’ que un sitio vuelva a pedir consentimiento tras una negativa. También propone seis excepciones al consentimiento, entre ellas la medición de publicidad contextual, con datos seudonimizados y sin usarlos pa’ perfilar. Es un borrador de negociación, no una ley: falta que el Parlamento Europeo fije su posición.",
      cifras: [
        { v: "6 → 4 meses", t: "espera pa’ volver a pedir consentimiento tras una negativa" },
        { v: "6", t: "excepciones al consentimiento en el borrador" }
      ],
      toca: "Si tus clientes venden a Europa, es una señal de hacia dónde puede ir la regla, pero nada cambia todavía. Vale seguirlo sin tocar el plan.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/eu-council-draft-cuts-cookie-consent-re-ask-wait-to-four-months/" }]
    },

    {
      id: "askyoutube", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "IA", "Búsqueda"],
      titular: "YouTube abre Ask YouTube, su búsqueda con IA, a todos los usuarios de EE. UU.",
      corto: "YouTube abre su búsqueda con IA a todo EE. UU.",
      cuerpo: "YouTube hizo disponible Ask YouTube, su opción de búsqueda con IA, a todos los usuarios de EE. UU. en computadora, celular y TV conectada. Permite hacer preguntas complejas con lenguaje natural, afinar los resultados con preguntas de seguimiento y verlos en un formato interactivo. El artículo cita un estudio de Pew según el cual cerca de la mitad de los adultos de EE. UU. ya usa chatbots de IA. Por ahora es solo pa’ EE. UU.; la nota no da fecha pa’ otros países.",
      cifras: [
        { v: "3", t: "tipos de pantalla: computadora, celular y TV conectada" },
        { v: "~50 %", t: "de los adultos de EE. UU. usa chatbots de IA, según Pew citado en la nota" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Cuando la búsqueda responde preguntas completas, el video tiene que contestar algo concreto desde los primeros segundos. Todavía no llega a RD, pero conviene irse preparando.",
      hacer: "Esta semana, escoger los 5 videos de un cliente que más tráfico reciben de búsqueda y revisar si el título y los primeros 10 segundos responden una pregunta clara.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-rolls-out-ai-search-chatbot-to-all-us-users/832923/" }]
    },
    {
      id: "xplanes", dep: "content", peso: "secundaria",
      etiquetas: ["X", "Suscripciones", "IA"],
      titular: "X junta sus suscripciones y las de su IA en cinco planes, desde gratis hasta $200 al mes",
      corto: "X junta sus suscripciones en cinco planes",
      cuerpo: "X lanzó paquetes de suscripción unificados con cinco niveles, desde uno gratis hasta el plan Ultra de $200 al mes. Todos incluyen las funciones de X Premium y distintos niveles de acceso a sus servicios de IA, como Grok. La llegada es gradual, región por región, empezando por EE. UU. La nota no da el precio de los otros tres niveles.",
      cifras: [
        { v: "5", t: "niveles de suscripción" },
        { v: "$200/mes", t: "precio del plan Ultra" }
      ],
      toca: "Todavía no hay una función concreta pa’ content. Es una señal de que X apuesta por vender IA junto con la cuenta; cuando llegue a RD, revisa qué cambia pa’ las cuentas de tus clientes.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/x-launches-unified-subscription-packages/832924/" }]
    },

    {
      id: "inflacion", dep: "rd", peso: "principal", para: ["planning", "medios", "data"],
      etiquetas: ["Economía", "Consumo", "Banco Central"], fecha: "13 oct 2026",
      titular: "La inflación de septiembre quedó en 5.12 %: sube la comida y la educación, y bajan las comunicaciones",
      corto: "Inflación de septiembre: 5.12 %",
      cuerpo: "Santo Domingo.— Según el Banco Central, la inflación interanual cerró septiembre en 5.12 %, una décima menos que en agosto, y la mensual fue de 0.33 %. La subyacente bajó a 4.61 % y sigue dentro del rango meta de 4 % ± 1. Transporte, alimentos y educación explican 85.05 % del alza del mes. La educación subió 1.85 % por las matrículas privadas, los alimentos 0.43 % y el transporte 0.64 %. Las comunicaciones bajaron 1.06 %, porque los planes pospago traen más datos al mismo precio o menos.",
      cifras: [
        { v: "5.12 %", t: "inflación interanual de septiembre" },
        { v: "4.61 %", t: "inflación subyacente interanual" },
        { v: "+1.85 %", t: "educación en el mes, la que más subió" },
        { v: "−1.06 %", t: "comunicaciones: más datos al mismo precio" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "El consumidor está mirando cada peso en comida, transporte y colegios, mientras las telecom compiten con más datos. Eso pesa en cómo se plantea una promo y en cuánto aguanta un mensaje de precio.",
      hacer: "Esta semana, revisar con cada cliente de consumo masivo o telecom si su mensaje de Q4 habla de valor concreto (más datos, mejor precio por porción) y ajustar el forecast con la inflación de 5.12 %.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/10/13/la-inflacion-interanual-cae-en-septiembre-y-se-ubica-en-512-/3687660" }]
    },
    {
      id: "bachatazo", dep: "rd", peso: "secundaria", para: ["content", "medios", "planning"],
      etiquetas: ["Música", "Conciertos", "Jarabacoa"], fecha: "14 oct 2026",
      titular: "Jarabacoa será epicentro de la bachata el 8 de noviembre con el Súper Ultra Mega Bachatazo",
      corto: "Jarabacoa se llena de bachata el 8 de noviembre",
      cuerpo: "Jarabacoa.— El Súper Ultra Mega Bachatazo 2026 será el domingo 8 de noviembre, desde el mediodía, en el Balneario La Confluencia. Hay 14 artistas confirmados, entre ellos Luis Miguel del Amargue, Luis Segura, Marino Castellano y Edilio Paredes. Los boletos se venden por Uepa Tickets y lo produce Luis Medrano. Los organizadores esperan un impacto en turismo, hoteles y comercio, pero no dan cifras de asistencia ni de precios.",
      cifras: [
        { v: "8 nov", t: "fecha del evento, desde el mediodía" },
        { v: "14", t: "artistas confirmados" }
      ],
      toca: "Un evento grande de bachata en una zona turística es plataforma pa’ marcas de bebidas, banca y turismo, y material de contenido pa’ las redes. Sin cifras de asistencia, no prometas alcance.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/conciertos/20261014/jarabacoa-sera-epicentro-bachata-8-noviembre_926107.html" }]
    },
    {
      id: "nelfa", dep: "rd", peso: "secundaria", para: ["medios"],
      etiquetas: ["TV", "Color Visión", "Talentos"], fecha: "13 oct 2026",
      titular: "Nelfa Núñez se une a «Es Temprano Todavía» con Jochy Santos por Color Visión",
      corto: "Nelfa Núñez llega a «Es Temprano Todavía»",
      cuerpo: "La comunicadora Nelfa Núñez se integró a «Es Temprano Todavía», que conduce Jochy Santos por Color Visión los martes a las 9:00 p. m. Jochy Santos y Albert Mena la presentaron al aire. Núñez salió hace poco de «De Extremo a Extremo» y también fue nombrada panelista del programa de radio «La Fábrica Radio».",
      toca: "Los movimientos de talentos entre programas cambian dónde conviene estar. Pa’ medios, es una razón pa’ revisar los espacios del martes en la noche.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/tv/20261013/nelfa-nunez-une-temprano-todavia_926102.html" }]
    },
    {
      id: "pelota", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["TV", "Deportes", "YouTube"], fecha: "11–13 oct 2026",
      titular: "Laura Bonnelly regresa con la novena temporada de «Más que pelota» por CDN Deportes",
      corto: "«Más que pelota» arranca su novena temporada",
      cuerpo: "El programa deportivo que presenta Laura Bonnelly estrenó su novena temporada el domingo 11 de octubre, a la 1:00 p. m. por CDN Deportes. Esta temporada incluye también contenido exclusivo pa’ YouTube. Bonnelly acumula 15 años de trayectoria como comunicadora deportiva. El texto no menciona patrocinadores.",
      cifras: [
        { v: "9.ª", t: "temporada del programa" },
        { v: "Domingos 1:00 p. m.", t: "horario por CDN Deportes" }
      ],
      toca: "Un programa de deportes con extensión a YouTube le sirve a medios pa’ TV más digital y a content pa’ ver qué formato corto funciona.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/tv/20261013/laura-bonnelly-regresa-novena-temporada-mas-pelota_926017.html" }]
    }
  ],

  pizarra: ["sinteticos", "pringles", "pinterest", "xandr", "askyoutube", "inflacion"],

  frases: [
    { dep: "medios", texto: "Las agencias ya planifican con consumidores sintéticos, pero el juicio sigue siendo humano: la simulación informa, no decide.", uso: "para conversaciones de IA y planificación" },
    { dep: "creatividad", texto: "Pringles no regaló un premio: regaló una urna con forma de lata. Un objeto bien escogido cuenta toda la campaña.", uso: "para conversaciones de ideas con objetos" },
    { dep: "planning", texto: "Según Pinterest, 63 % de la Gen Z quiere desconectarse de forma más intencional: planificar solo pa’ la pantalla se queda corto.", uso: "para conversaciones de audiencias jóvenes" },
    { dep: "data", texto: "Noruega multó a Xandr porque no comprobó el consentimiento de datos que recibió: el que recibe datos también responde.", uso: "para conversaciones de privacidad y proveedores" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Consumidores sintéticos en la planificación" },
      { id: "creatividad", texto: "La urna de Pringles" },
      { id: "planning", texto: "Pinterest y el regreso a la vida real" },
      { id: "data", texto: "La multa de Noruega a Xandr" },
      { id: "content", texto: "Ask YouTube llega a todo EE. UU." },
      { id: "rd", texto: "Zoom a RD: la inflación de septiembre" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "sinteticos", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "pinterest", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Antes de cerrar el plan de Q4, pregúntate qué hace tu marca fuera de la pantalla: Pinterest dice que 63 % de la Gen Z quiere desconectarse de forma más intencional."
    },
    data: {
      tipo: "secreto", nota: "xandr", titulo: "Destapa el expediente",
      texto: "Datatilsynet multó a Xandr con [[NOK 92 millones]] por pasar datos de usuarios de Grindr sin comprobar el [[consentimiento explícito]]."
    },
    content: {
      tipo: "prompt", nota: "askyoutube", titulo: "Arma tu pregunta pa’ Ask YouTube",
      intro: "Con la búsqueda conversacional de YouTube en mente, ayúdame con lo siguiente:",
      opciones: [
        "Dame 5 preguntas completas que mi público le haría a un buscador sobre mi producto",
        "Reescribe el título de este video como respuesta a una pregunta clara",
        "Propón un guion de 10 segundos que conteste esa pregunta al inicio del video"
      ],
      cierre: "Dime qué partes de tu respuesta debo verificar con datos reales antes de publicar."
    },
    rd: {
      tipo: "pregunta", nota: "inflacion", titulo: "La pregunta del patio",
      p: "Según el Banco Central, ¿cuánto quedó la inflación interanual de septiembre?",
      opciones: ["4.61 %", "5.12 %", "5.33 %"],
      correcta: 1,
      explicacion: "Quedó en 5.12 %, una décima menos que en agosto. El 4.61 % es la inflación subyacente."
    }
  }
};
