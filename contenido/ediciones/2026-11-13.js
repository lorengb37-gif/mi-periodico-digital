/*
  El Pulso Publicitario · edición N.º 317 · 13 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 317,
  fechaISO: "2026-11-13",
  fecha: "Viernes 13 de noviembre 2026",
  fechaCorta: "13 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Lo que no se ve no se puede cobrar: antes de vender un resultado, asegúrate de que lo puedes enseñar con datos.",
    largo: "Hoy Google empieza a enseñar en dólares cuánto te devolvió por los bots, el IAB admite que todavía no se puede medir cuánto vende la IA y la dueña de British Airways junta cinco aerolíneas en una sola red de anuncios. En Creatividad, Oreo vuelve a la Navidad con una travesura de Santa, y en el patio Presidente lanza Presidente Cero con «Cero gente fuera del coro» y tres dominicanos se llevan su primer Latin Grammy. El hilo es claro: el que puede enseñar lo que movió se queda con el presupuesto. Escoge un «Lo que toca hacer», ponle responsable y fecha, y arranca el lunes con eso hecho.",
    corto: "Abre la tarjeta de tráfico inválido de Google Ads y lleva ese número al reporte del cliente.",
    porDep: {
      medios: "Mete el ahorro por bots en el reporte de cierre: es plata que el cliente no sabía que se le cuidó.",
      creatividad: "Antes de inventar una tradición, busca una que ya exista y métele una travesura de la marca.",
      planning: "En temporada de bolsillo apretado, vende experiencia y regalo personal, no solo descuento.",
      data: "Separa en el reporte lo que se mide de lo que se supone. Con la IA, eso todavía no es lo mismo.",
      content: "Un episodio largo bien cortado son cinco Shorts. Aprovecha lo que ya está grabado antes de grabar más.",
      rd: "En RD la moderación ya es conversación de marca grande: Presidente Cero abre la puerta pa’ hablar de ocasiones, no solo de producto."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Google Ads enseña cuánto te devuelve por tráfico inválido · IAG, dueña de British Airways, lanza IAG Media con cinco aerolíneas" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Oreo estrena Navidad después de cinco años con «Santa’s Favorite Cookie» · Welch’s hace un microdrama con nostalgia de los 2000" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "El 76 % de marcas y retailers espera vender más esta Navidad · Mattel abre su tienda en TikTok Shop pensando en los padres" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "El IAB publica su marco de atribución pa’ la IA y admite que faltan datos · En Alemania, las apps podrán volver a pedir permiso de rastreo" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube Studio convierte episodios de pódcast en Shorts con sugerencias de IA · Edits estrena curvas de velocidad y audio automático" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Presidente Cero, tres dominicanos con su primer Latin Grammy, 50,000 antenas Starlink, Merco 2026, la industria en expansión, 809 Mercado y un árbol de crochet de 25 pies. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "googleivt", dep: "medios", peso: "principal",
      etiquetas: ["Google Ads", "Tráfico inválido", "Bots"],
      titular: "Google te va a enseñar en dólares cuánto te devolvió por los bots",
      corto: "Google Ads te enseña cuánto te devuelve por bots",
      cuerpo: "Google Ads anunció la Invalid Traffic Overview Card, una tarjeta nueva en su interfaz que, por primera vez, desglosa cuánto dinero se ahorró una campaña gracias al bloqueo de tráfico inválido (IVT) y cuánto le está acreditando Google por bots detectados después de la facturación. El crédito es igual a lo invertido: si US$100 se marcaron como tráfico inválido después del cierre del ciclo, se acreditan esos US$100 en la próxima factura, sin restricciones sobre el inventario en que se usen. Google dice que su análisis incluye la actividad de agentes de IA, y que entre 2023 y 2024 redujo en 40 % los anuncios servidos a tráfico inválido.",
      cifras: [
        { v: "−40 %", t: "anuncios servidos a tráfico inválido entre 2023 y 2024, según Google" },
        { v: "53 %", t: "de la actividad en línea de este año es tráfico automatizado, según Thales" },
        { v: "+86 %", t: "creció el IVT interanual a finales de 2024, según DoubleVerify" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Hasta ahora el crédito por bots llegaba como un ajuste que casi nadie miraba. Con la tarjeta, el planner puede poner en el reporte cuánto del presupuesto se salvó y cuánto volvió, y discutir con datos la calidad del tráfico en cada campaña.",
      hacer: "Esta semana, abre la tarjeta de tráfico inválido en las tres cuentas de Google Ads más grandes de la agencia y suma el ahorro y los créditos del trimestre al reporte de cierre del cliente.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/platforms/google-will-now-tell-you-exactly-how-much-its-crediting-you-for-invalid-traffic/" }]
    },
    {
      id: "iagmedia", dep: "medios", peso: "secundaria",
      etiquetas: ["Travel media", "Retail media", "Aerolíneas"],
      titular: "La dueña de British Airways junta cinco aerolíneas en una sola red de anuncios",
      corto: "IAG Media junta cinco aerolíneas pa’ vender anuncios",
      cuerpo: "International Airlines Group (IAG), dueña de British Airways, Aer Lingus, Iberia, Level y Vueling, lanzó IAG Media, que por primera vez reúne la publicidad de todas sus aerolíneas en un solo punto de contacto para los anunciantes. Hasta ahora cada aerolínea tenía su propia estrategia. IAG transportó unos 122 millones de pasajeros en 2025, planea tener Starlink en el 50 % de su flota de largo alcance a finales de 2026, lo que abre espacios nuevos, y quiere personalizar los anuncios según el destino y el perfil del viajero.",
      cifras: [
        { v: "5", t: "aerolíneas bajo IAG Media: British Airways, Aer Lingus, Iberia, Level y Vueling" },
        { v: "122 millones", t: "de pasajeros transportados por IAG en 2025" },
        { v: "50 %", t: "de la flota de largo alcance con Starlink a finales de 2026" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Las aerolíneas se suman a la ola del retail media: tienen datos de destino y viajero, y un pasajero sentado por horas. Si tu cliente vende viajes, el avión ya es un medio que se compra.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/commerce/british-airways-parent-iag-bets-big-on-advertising/" }]
    },

    {
      id: "oreo", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Navidad", "Humor"],
      titular: "Oreo estrena Navidad después de cinco años, y Santa se cobra la galleta que le robaron",
      corto: "Oreo: Santa se venga del papá que le robó la galleta",
      cuerpo: "Oreo lanzó «Santa’s Favorite Cookie», su primera creatividad navideña nueva en cinco años. En el spot, de 15 y 30 segundos, un papá le da una mordida a las Oreo que la familia le dejó a Santa; en la mañana de Navidad, su media y sus regalos, palos de golf y televisor incluidos, amanecen mordidos como castigo. Cierra con Santa remojando los pies y mojando una Oreo en leche, con el remate «Get your own Oreo». La desarrolló No Notes, el estudio de contenido de Colin Jost, con Dentsu en redes, y corre en Amazon, streaming y CTV, Meta, TikTok, Pinterest, Snapchat y YouTube.",
      cifras: [
        { v: "5 años", t: "sin creatividad navideña nueva; la anterior fue «Ding Dong», de 2021" },
        { v: "15 y 30 s", t: "las dos versiones del spot" },
        { v: "+2.1 %", t: "ingresos netos orgánicos de Mondelēz en el tercer trimestre" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Oreo no inventó una tradición: se metió en una que ya existe, la de dejarle galletas a Santa, y le puso una travesura. Es la fórmula más barata pa’ que una marca se quede en la memoria de diciembre.",
      hacer: "En el brainstorm navideño de esta semana, lista tres rituales de la Navidad dominicana (la cena del 24, el angelito, el aguinaldo) y busca en cuál cabe el producto del cliente con una travesura, como hizo Oreo.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/oreo-refreshes-holiday-creative-with-spin-on-santas-milk-and-cookies/874493/" }]
    },
    {
      id: "welchs", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Microdrama", "Nostalgia", "Navidad"],
      titular: "Welch’s hace un microdrama navideño con caras de la Disney de los 2000",
      corto: "Welch’s apuesta al microdrama con nostalgia Y2K",
      cuerpo: "Welch’s estrena «Before the Toast», un microdrama de cinco episodios pa’ sus jugos espumosos, que va del 17 de noviembre al 8 de diciembre en su TikTok y su Instagram. Sale Christy Carlson Romano, la voz de Kim en «Kim Possible», junto a Sabrina Bryan, de The Cheetah Girls, y Heather Morris, de «Glee». La historia gira alrededor del corre-corre de las fiestas con niños pequeños. Es parte de la campaña «That’s Worth a Toast», que suma creadores, anuncios junto a películas navideñas en Disney+ y Hulu y un regalo de botellas con Instacart.",
      cifras: [
        { v: "5", t: "episodios del microdrama" },
        { v: "17 nov – 8 dic", t: "ventana de publicación en TikTok e Instagram" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "La nostalgia apunta a los Gen Z que ya son papás y que crecieron con Disney Channel. Microdrama + caras conocidas de su niñez es una mezcla que se puede adaptar con talento local.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/welchs-holiday-microdrama-embraces-y2k-nostalgia-as-gen-z-become-parents/874453/" }]
    },

    {
      id: "holiday", dep: "planning", peso: "principal",
      etiquetas: ["Temporada", "Navidad", "Estudio"],
      titular: "Las marcas llegan optimistas a la Navidad, aunque la inflación les quita el sueño",
      corto: "El 76 % de las marcas espera vender más esta Navidad",
      cuerpo: "Un estudio de Digiday+ Research con 90 profesionales de marcas y retailers encontró que el 76 % espera que sus ingresos de la temporada navideña 2026 suban entre 1 % y más de 31 % frente a 2025, y nadie espera una caída mayor de 11 %. Aun así, los ejecutivos entrevistados hablan de costos altos y de una economía floja. Laura Brodie, de Ritual, espera que la gente gaste más en experiencias y en regalos que se sientan personales, con una vuelta a la nostalgia y al tiempo en familia.",
      cifras: [
        { v: "76 %", t: "de las marcas y retailers espera más ingresos navideños que en 2025" },
        { v: "0 %", t: "espera que sus ingresos caigan más de 11 %" },
        { v: "90", t: "profesionales de marcas y retailers encuestados" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Optimismo con bolsillo apretado significa que la gente va a gastar, pero escogiendo. El regalo que se siente personal o que es una experiencia tiene la ventaja, y el descuento grande se le hace pesado a la marca pequeña.",
      hacer: "Antes del viernes, revisa con cada cliente de retail si su mensaje de diciembre vende experiencia o regalo personal, y no solo descuento; si no, propón un ajuste de copy pa’ la segunda quincena.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/d-research-marketers-express-revenue-optimism-for-2026-holiday-season-despite-economic-pressures/" }]
    },
    {
      id: "mattel", dep: "planning", peso: "secundaria",
      etiquetas: ["Social commerce", "TikTok Shop", "Juguetes"],
      titular: "Mattel abre su tienda en TikTok Shop, pero les habla a los papás",
      corto: "Mattel llega a TikTok Shop pensando en los padres",
      cuerpo: "Mattel abrió esta semana su tienda en TikTok Shop con unos 20 productos de Barbie, Hot Wheels, Fisher-Price y Monster High, y pronto pasará de 40. Como TikTok exige 13 años o más, la estrategia apunta a adultos: padres y coleccionistas. Escogieron productos que ya salían en videos de la plataforma y van a hacer videos que respondan preguntas como «¿qué juguetes son mejores pa’ un recién nacido?», más livestreams y creadores del mundo de los juguetes. Barbie tiene 2.5 millones de seguidores en TikTok y Hot Wheels, 1.2 millones.",
      cifras: [
        { v: "~20", t: "productos al abrir la tienda; pronto más de 40" },
        { v: "2.5 millones", t: "de seguidores de Barbie en TikTok" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El juguete se vende por el adulto que pregunta, no por el niño que pide. Planear la audiencia por quién paga, y no por quién usa, cambia todo el contenido de la temporada.",
      fuentes: [{ nombre: "Digiday / Modern Retail", url: "https://digiday.com/marketing/mattel-brings-barbie-hot-wheels-to-tiktok-shop/" }]
    },

    {
      id: "iabia", dep: "data", peso: "principal",
      etiquetas: ["Medición", "IA", "Atribución"],
      titular: "El IAB quiso medir cuánto vende la IA y se topó con una pared: las plataformas no enseñan los datos",
      corto: "El IAB no puede medir la IA: faltan los datos",
      cuerpo: "El IAB publicó su «AI-Era Attribution Blueprint», un marco pa’ entender y acreditar el papel de la IA en las conversiones. Lo trabajó durante cuatro meses un grupo con Walmart, WPP Media, Criteo, Microsoft, People Inc., Tinuiti y Prudential Financial, entre otros. El resultado reconoce el límite: las recomendaciones, las decisiones y hasta las compras pueden pasar dentro de las plataformas de IA, pero esos datos todavía no llegan ni a los anunciantes ni a los medidores. Caroline Giegerich, VP de IA del IAB, dijo que el documento terminó siendo «más un llamado a la acción» pa’ la industria.",
      cifras: [
        { v: "4 meses", t: "de trabajo del grupo del IAB" },
        { v: "10+", t: "empresas en el grupo, de Walmart a WPP Media y Microsoft" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Lo que pasa dentro de ChatGPT, Gemini y compañía todavía es una caja negra pa’ la atribución.",
        "Los medios que venden «GEO» a las marcas tienen el mismo problema: no pueden probar el resultado con datos de la plataforma."
      ],
      hacer: "Esta semana, agrega una línea en los reportes de los clientes que ya prueban búsqueda con IA que diga qué se mide y qué no, pa’ que nadie le adjudique ventas a la IA sin datos que lo respalden.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media/media-briefing-the-iab-finds-ai-measurement-standards-elusive-for-publishers-amid-platform-data-gaps/" }]
    },
    {
      id: "attalemania", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Apple", "ATT"],
      titular: "En Alemania, las apps podrán volver a pedirle permiso de rastreo a quien ya dijo que no",
      corto: "Apple deja repreguntar el ATT en Alemania",
      cuerpo: "Un análisis de PPC Land del texto completo de los compromisos de Apple con la autoridad de competencia alemana (Bundeskartellamt) muestra que las apps podrán enseñar una vez el nuevo aviso de App Tracking Transparency, más neutral, a los usuarios alemanes, sin excluir a quienes rechazaron el viejo. Y podrán volver a preguntar un año después de cada respuesta, sea sí o no, salvo que el usuario haya apagado la opción en Ajustes. Apple queda obligada por siete años a no hacer esas herramientas más difíciles ni más caras.",
      cifras: [
        { v: "1 vez", t: "se puede mostrar el nuevo aviso a todos, incluso a quien dijo que no" },
        { v: "1 año", t: "después de cada respuesta se puede volver a preguntar" },
        { v: "7 años", t: "de compromisos de Apple con el regulador alemán" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/apples-german-att-deal-lets-apps-re-ask-users-who-already-said-no/" }]
    },

    {
      id: "ytclips", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "Shorts", "IA", "Podcast"],
      titular: "YouTube Studio ya convierte tu pódcast horizontal en Shorts, con subtítulos y sugerencias de IA",
      corto: "YouTube Studio vuelve tu pódcast un Short",
      cuerpo: "YouTube amplió a Shorts la herramienta de clips de YouTube Studio: ahora un creador puede sacar un pedazo de un episodio de pódcast en 16:9 y publicarlo como video vertical, con subtítulos automáticos que se pueden editar. Los segmentos se escogen desde la transcripción o la línea de tiempo. Encima trae dos funciones de IA: una lista de momentos sugeridos que se entienden solos y un índice automático del episodio. Esas funciones de IA están en 10 países, entre ellos México, España, Brasil y Estados Unidos, y en siete idiomas, incluido el español.",
      cifras: [
        { v: "16:9 → vertical", t: "el episodio se recorta dejando lo más importante en cuadro" },
        { v: "10 países", t: "con sugerencias de IA, según la página de ayuda de YouTube" },
        { v: "7 idiomas", t: "con sugerencias de IA, entre ellos el español" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si el cliente tiene pódcast o videos largos, cada episodio puede alimentar también el feed de Shorts sin salir de YouTube ni pagar otra app de recorte. Ojo: las sugerencias de IA dependen del país de la cuenta.",
      hacer: "Esta semana, coge el último episodio largo de un cliente, saca tres Shorts con la herramienta de clips de YouTube Studio y compara su alcance con los clips que se editan a mano.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/youtube-studio-now-turns-16-9-podcast-segments-into-vertical-shorts/" }]
    },
    {
      id: "edits", dep: "content", peso: "secundaria",
      etiquetas: ["Meta", "Edits", "Video"],
      titular: "Edits estrena curvas de velocidad y balance de audio automático",
      corto: "Edits trae curvas de velocidad y audio automático",
      cuerpo: "Meta actualizó Edits, su editor de video, con curvas de velocidad pa’ acelerar o frenar partes de un clip, ajuste automático de audio pa’ balancear los niveles entre los elementos del video y control de cuánto dura la animación de un texto. Además, en la pestaña Inspiración ahora puedes escoger de qué temas quieres ver más o menos.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/edits-app-gets-speed-curves-and-auto-audio-balancing/874586/" }]
    },

    {
      id: "presidentecero", dep: "rd", peso: "principal", para: ["creatividad", "planning", "content"],
      etiquetas: ["Lanzamiento", "Bebidas", "Moderación"], fecha: "12 nov 2026",
      titular: "La CND lanza Presidente Cero: «Cero gente fuera del coro»",
      corto: "Llega Presidente Cero, sin alcohol",
      cuerpo: "La Cervecería Nacional Dominicana presentó Presidente Cero, la primera cerveza sin alcohol de la familia Presidente, producida en el país. Va pa’ los adultos que en ciertos momentos escogen moderar su consumo sin dejar el sabor y el aroma de la marca, bajo el concepto «Cero gente fuera del coro». La CND dice que la moderación y el consumo responsable son pilares de su estrategia de sostenibilidad, y cita el estudio de Ipsos e IWSR con AB InBev sobre tendencias de bebidas pa’ adultos.",
      cifras: [
        { v: "~93 %", t: "del volumen mundial de bebidas sin alcohol es cerveza, según el estudio citado" },
        { v: "77 %", t: "de los consumidores confía más en un producto nuevo si viene de una marca que ya conoce" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "La marca más grande de cerveza del país mete la moderación en la conversación del coro, justo antes de diciembre. Eso abre ocasiones nuevas: el que maneja, el que entrena, el que trabaja al otro día, y les pone la vara alta a las demás marcas de bebidas.",
      hacer: "Esta semana, mapea con tus clientes de bebidas y de consumo las ocasiones de diciembre donde la gente escoge no beber y propón una idea pa’ estar ahí.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/11/12/cerveceria-nacional-dominicana-lanza-presidente-cero/3719064" }]
    },
    {
      id: "latingrammy", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Premios", "Tendencia"], fecha: "12 nov 2026 · Las Vegas",
      titular: "¡Wepa! Techy Fatule, León Yamil y J Noa se llevan su primer Latin Grammy",
      corto: "Tres dominicanos ganan su primer Latin Grammy",
      cuerpo: "En la 27.ª edición de los Latin Grammy, en Las Vegas, tres dominicanos ganaron por primera vez durante la ceremonia Premiere. Techy Fatule se llevó Mejor Álbum de Merengue y/o Bachata con «Chula», un proyecto independiente de 12 canciones inéditas que mezcla merengue, pambiche, típico, bachata, palo y mambo, e incluye «Él sabe» con Fefita La Grande. León Yamil ganó Mejor Canción Tropical como coautor de «Nombre y apellido», y J Noa, Mejor Canción de Rap/Hip Hop por «Antisistema», junto a Trooko.",
      cifras: [
        { v: "3", t: "dominicanos con su primer Latin Grammy" },
        { v: "12", t: "canciones inéditas en «Chula», de Techy Fatule" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Talento dominicano con premio fresco y raíces bien nuestras, justo cuando las marcas arman la música de su Navidad.",
      fuentes: [
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/12/los-dominicanos-triunfan-en-el-latin-grammy/3719404" },
        { nombre: "Remolacha", url: "https://remolacha.net/2026/11/techy-fatule-gana-su-primer-latin-grammy/" }
      ]
    },
    {
      id: "starlink", dep: "rd", peso: "secundaria", para: ["medios", "data"],
      etiquetas: ["Conectividad", "Telecom"], fecha: "12 nov 2026",
      titular: "Ya hay más de 50,000 antenas Starlink en RD",
      corto: "RD pasa de 50,000 antenas Starlink",
      cuerpo: "En una reunión en el Palacio Nacional con ejecutivos de SpaceX y el ITLA, el rector del ITLA, Jimmy Rosario, dijo que ya hay más de 50,000 antenas Starlink en toda la República Dominicana. Se habló de pilotos con antenas Starlink en localidades sin conectividad, sobre todo en el sistema educativo, y del uso de herramientas de IA en la formación.",
      cifras: [{ v: "50,000+", t: "antenas Starlink en el país" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Más gente conectada fuera de las redes tradicionales es audiencia digital nueva en zonas donde antes solo llegaban la radio y la TV.",
      fuentes: [
        { nombre: "elDinero", url: "https://eldinero.com.do/388397/spacex-destaca-presencia-de-50000-clientes-con-antenas-starlink-en-republica-dominicana/" },
        { nombre: "Remolacha", url: "https://remolacha.net/2026/11/starlink-reporta-50000-antenas-en-rd/" }
      ]
    },
    {
      id: "merco", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Reputación", "Merco"], fecha: "12 nov 2026",
      titular: "Merco 2026: la reputación vale más que los números, y Grupo Ramos manda en retail",
      corto: "Merco: Grupo Ramos lidera el retail",
      cuerpo: "Luis Álvarez, director regional de Merco, dijo que entre el 70 % y el 80 % del valor de las empresas está en los intangibles, y subrayó cómo responde una empresa en crisis y lo que se dice de ella en digital. En la cuarta edición del ranking en el país, 302 directivos mencionaron 222 compañías. Grupo Ramos encabeza el sector retail, es quinto entre las empresas con mejor reputación del país, tras subir seis puestos en cuatro años, y séptimo en responsabilidad.",
      cifras: [
        { v: "70–80 %", t: "del valor de una empresa está en los intangibles, según Merco" },
        { v: "302", t: "directivos consultados, que mencionaron 222 empresas" }
      ],
      fuentes: [
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/11/12/merco-explica-como-una-empresa-mantiene-su-reputacion-en-crisis-/3717941" },
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/11/12/grupo-ramos-recibe-reconocimiento-en-merco-2026/3719085" }
      ]
    },
    {
      id: "imam", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Economía", "Industria"], fecha: "12 nov 2026",
      titular: "La industria acelera antes de la Navidad: el IMAM sube a 62.2 puntos",
      corto: "El IMAM sube a 62.2 en octubre",
      cuerpo: "Según la AIRD, el índice mensual de actividad manufacturera (IMAM) llegó a 62.2 puntos en octubre, 2.8 más que en septiembre, y lleva todo el año por encima de 50, la raya que marca expansión. Por partes: ventas 63.7, producción 70.3 y empleo 55.7.",
      cifras: [
        { v: "62.2", t: "puntos del IMAM en octubre, 2.8 más que en septiembre" },
        { v: "70.3", t: "puntos en producción" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/11/12/el-imam-sube-a-622-puntos-en-octubre/3719005" }]
    },
    {
      id: "mercado809", dep: "rd", peso: "secundaria", para: ["planning", "content"],
      etiquetas: ["Marcas locales", "Agenda"], fecha: "14 y 15 nov 2026 · Jardín Botánico",
      titular: "809 Mercado junta más de 80 marcas dominicanas este fin de semana",
      corto: "809 Mercado vuelve al Jardín Botánico",
      cuerpo: "La 14.ª edición de 809 Mercado va el sábado 14 y el domingo 15 de noviembre en el Jardín Botánico Nacional, con más de 80 artesanos y marcas dominicanas de cuidado personal, repostería, gastronomía, jardinería, joyería y moda. Habrá talleres, maridajes, música en vivo, un espacio pa’ niños y la «Colección 809», que guía el recorrido con un código QR.",
      cifras: [{ v: "80+", t: "marcas y artesanos dominicanos" }],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/13/descubre-809-mercado-republica-dominicana-y-su-talento-local/3719021" }]
    },
    {
      id: "arbolcrochet", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Navidad", "Activación"], fecha: "11 nov 2026 · Galería 360",
      titular: "Galería 360 levanta un árbol de Navidad de 25 pies tejido a crochet",
      corto: "Un árbol de crochet de 25 pies en Galería 360",
      cuerpo: "Desde el 11 de noviembre, Galería 360 exhibe «Más que un árbol», presentado como el primer árbol de Navidad tejido a crochet del país. Lo impulsó Agujetas Solidarias en Acción junto al centro comercial: mide 25 pies de alto y lleva 1,710 cuadros hechos a mano por voluntarios de distintas generaciones.",
      cifras: [
        { v: "25 pies", t: "de alto" },
        { v: "1,710", t: "cuadros tejidos a mano" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Una pieza navideña hecha por la comunidad cuenta su propia historia, y esa historia es contenido que se comparte solo.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/11/12/arbol-navideno-tejido-a-crochet-en-galeria-360/3717954" }]
    }
  ],

  pizarra: ["googleivt", "oreo", "holiday", "iabia", "ytclips", "presidentecero"],

  frases: [
    { dep: "medios", texto: "Google ya te dice en dólares cuánto te devolvió por los bots: si no está en el reporte, el cliente no sabe que se le cuidó el presupuesto.", uso: "para conversaciones de calidad de inventario" },
    { dep: "creatividad", texto: "Oreo no inventó una tradición: se metió en la de dejarle galletas a Santa y le puso una travesura.", uso: "para el brainstorm navideño" },
    { dep: "data", texto: "Hasta el IAB lo admite: lo que pasa dentro de los chatbots todavía no se puede medir bien.", uso: "para conversaciones de atribución e IA" },
    { dep: "planning", texto: "El 76 % de las marcas espera vender más esta Navidad, pero la gente va a gastar escogiendo.", uso: "para conversaciones de temporada" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Google enseña el crédito por bots" },
      { id: "creatividad", texto: "La venganza de Santa en Oreo" },
      { id: "planning", texto: "Navidad optimista, bolsillo apretado" },
      { id: "data", texto: "El IAB y la caja negra de la IA" },
      { id: "content", texto: "Del pódcast al Short en YouTube Studio" },
      { id: "rd", texto: "Zoom a RD: Presidente Cero" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "googleivt", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "holiday", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "El 76 % de marcas y retailers espera vender más esta Navidad. Pa’ diciembre, vende experiencia y regalo personal, no solo descuento."
    },
    data: {
      tipo: "secreto", nota: "attalemania", titulo: "Destapa el expediente",
      texto: "En Alemania, las apps podrán mostrar el nuevo aviso de rastreo [[una vez a todos]], incluso a quien dijo que no, y volver a preguntar [[un año después]] de cada respuesta."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "ytclips", titulo: "Arma tu pedido pa’ los clips",
      intro: "Tengo la transcripción de un episodio largo de pódcast que voy a cortar en Shorts con la herramienta de clips de YouTube Studio. Ayúdame con lo siguiente:",
      opciones: [
        "Encuentra tres momentos que se entiendan solos, sin el resto del episodio",
        "Proponme un título corto pa’ cada Short",
        "Dime qué frase va en el subtítulo de apertura pa’ enganchar en los primeros segundos"
      ],
      cierre: "Dame las marcas de tiempo de cada momento y señala qué necesita revisión humana antes de publicar."
    },
    rd: {
      tipo: "pregunta", nota: "latingrammy", titulo: "La pregunta del patio",
      p: "¿Con qué álbum ganó Techy Fatule su primer Latin Grammy?",
      opciones: ["«Chula»", "«Antisistema»", "«Nombre y apellido»"], correcta: 0,
      explicacion: "«Chula» ganó Mejor Álbum de Merengue y/o Bachata. «Antisistema» fue el premio de J Noa y «Nombre y apellido», el de León Yamil como coautor."
    }
  }
};
