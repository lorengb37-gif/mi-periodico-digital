/*
  El Pulso Publicitario · edición N.º 319 · 15 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 319,
  fechaISO: "2026-11-15",
  fecha: "Domingo 15 de noviembre 2026",
  fechaCorta: "15 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes de pautar, pregunta de quién es: el video, la canción, la foto o el dato. Los permisos claros le ahorran dolores de cabeza al cliente.",
    largo: "Esta semana el tema fue de quién es cada cosa. Google va a dejar que el creador de YouTube le pase a la marca un código pa’ enlazar su video en DV360, pero el derecho a usarlo sigue siendo responsabilidad del anunciante. Italia multó a Meta con 805 millones de euros por leer la galería del celular sin un permiso claro, y Amazon le pone una cookie propia de 30 días a los sitios de sus anunciantes, encendida por defecto. En el patio, un tribunal le ordenó a Wilfrido Vargas pagar RD$14 millones por no reconocer a un coautor de uno de sus merengues. El hilo de hoy: el permiso no es papeleo, es parte de la estrategia. Escoge un «Lo que toca hacer», ponle responsable y fecha, y arranca la semana con eso hecho.",
    corto: "Antes de pautar con contenido ajeno o con datos del usuario, confirma por escrito quién dio el permiso. Un chin de orden te ahorra un lío.",
    porDep: {
      medios: "Si vas a impulsar el video de un creador, deja por escrito quién puede quitar el enlace y hasta cuándo puedes usar la pieza.",
      creatividad: "Lo mejor que puede hacer una marca a veces es amplificar lo que la gente ya hace con ella. Busca ese ritual antes de inventar uno.",
      planning: "Que el presupuesto se vaya al celular no quiere decir que ahí esté to’ el tiempo de la gente. Cruza inversión con tiempo antes del plan 2027.",
      data: "Revisa qué permisos piden las apps y etiquetas de tus clientes, y si están encendidos por defecto. Italia acaba de poner el precio.",
      content: "Deja que Insights te diga el porqué de los números, pero confírmalo con tu propio análisis antes del reporte.",
      rd: "Antes de usar un merengue o una bachata clásica en un spot, averigua quiénes son todos los autores. El tribunal ya dijo que el crédito importa."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "DV360 dejará enlazar videos de creadores de YouTube con un código · Lyft prueba darle toda su pantalla de inicio a una sola marca" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Guinness va despacio con los creadores y le apuesta a amplificar lo que la gente ya hace · Sonsie, la marca de Pamela Anderson, estrena su primer anuncio navideño en stop-motion" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "EMARKETER: el celular se lleva más del 75 % de la inversión en el Reino Unido con menos de la mitad del tiempo · Savanta: casi el 10 % huyó de los anuncios electorales" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Italia multa a Meta con €805 millones por la galería de fotos en Android · Amazon Ad Tag estrena una cookie propia de 30 días" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube Studio cambia Analytics por Insights, estrena la pestaña Research y lleva Ask Studio al celular" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Wilfrido Vargas condenado por derechos de autor, Viettel paga su licencia al Indotel, Karen Yapoort vuelve a la TV, el crédito al turismo sube 28.5 % y hoy cae la quincena. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "dv360codigos", dep: "medios", peso: "principal",
      etiquetas: ["DV360", "YouTube", "Creadores"],
      titular: "DV360 dejará que el creador de YouTube le pase a la marca un código pa’ enlazar su video",
      corto: "DV360 enlazará videos de creadores con un código",
      cuerpo: "Google anunció el 13 de noviembre que Display & Video 360 «pronto» va a aceptar códigos compartidos pa’ enlazar videos de creadores de YouTube con la cuenta del anunciante. El creador genera un enlace único y se lo manda a la marca, y el video queda conectado sin buscar el canal a mano ni esperar una aprobación. Con eso, la marca puede impulsar el video como anuncio y usar a quienes lo vieron pa’ remarketing. El aviso no trae fecha ni mercados. Las reglas de hoy se quedan: hace falta acceso de administrador, asegurar los derechos de uso del video le toca al anunciante y un enlace que inició el creador solo lo puede quitar el creador. YouTube ya había presentado el código el 23 de septiembre en Made on YouTube.",
      cifras: [
        { v: "3", t: "rutas pa’ enlazar el video de un creador a DV360; la del código todavía no tiene fecha" },
        { v: "13 nov", t: "día del aviso en el Centro de Ayuda de DV360" },
        { v: "23 sep", t: "YouTube presentó el código en Made on YouTube" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Impulsar el video de un creador con pauta programática va a ser más rápido, sin correos de ida y vuelta pa’ aprobar el enlace. Pero el control lo tiene el creador: si él quita el enlace, la campaña se cae, y los derechos los pone la marca.",
      hacer: "Esta semana, revisa los contratos de los creadores de un cliente que pauta en YouTube y agrega una cláusula que diga cuánto tiempo se puede impulsar el video y quién puede quitar el enlace.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/googles-dv360-to-let-youtube-creators-link-videos-to-advertisers-by-code/" }]
    },
    {
      id: "lyft", dep: "medios", peso: "secundaria",
      etiquetas: ["Lyft", "Retail media", "Formatos"],
      titular: "Lyft prueba darle a una sola marca toda la pantalla de inicio de su app",
      corto: "Lyft prueba un masthead en su pantalla de inicio",
      cuerpo: "Lyft empezó a probar en fase alfa un formato llamado «home masthead», que le da a una marca toda la pantalla de inicio que la gente ve antes de pedir el viaje. Pluto TV es uno de los primeros patrocinadores, con su campaña «Escape to Pluto TV», y Google Cloud también está entre las primeras marcas. El formato se suma a lo que Lyft ya vendía en esa pantalla: vehículos con diseño patrocinado en el mapa y una pantalla de bienvenida con animación encima del mapa.",
      cifras: [
        { v: "Alfa", t: "fase de prueba del «home masthead»" },
        { v: "Pluto TV · Google Cloud", t: "entre las primeras marcas en ocuparlo" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Las apps de transporte se están volviendo medio: tienen a la gente mirando la pantalla con intención de moverse. Pa’ Medios es otro inventario de momento exacto, como el exterior pero en el bolsillo.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/commerce/lyft-is-testing-a-prominent-new-ad-placement/" }]
    },

    {
      id: "guinness", dep: "creatividad", peso: "principal",
      etiquetas: ["Guinness", "Creadores", "Cultura de marca"],
      titular: "Guinness no corre detrás de los creadores: amplifica lo que la gente ya hace con su pinta",
      corto: "Guinness amplifica lo que la gente ya hace",
      cuerpo: "Paddy Carberry, gerente global de mercadeo y jefe de deportes de Guinness, contó en un pódcast en vivo con la agencia Sid Lee que la marca no quiere firmar creadores en masa. Su miedo: que al meterse en cada tendencia termine viéndose como el papá que baila en la discoteca. Lo que sí hace es amplificar los rituales que la gente ya inventó, como «partir la G» o el #SingingGuinness de TikTok, donde la gente le pone cara a la espuma y sopla pa’ que «cante». De ahí salió «Singing Pints», que nació en 2023, volvió este verano y que Carberry llama una de sus piezas más exitosas de los últimos 10 años. Además, en el Reino Unido quien bebe en un anuncio de alcohol tiene que tener y aparentar más de 25 años.",
      cifras: [
        { v: "10 años", t: "«Singing Pints», una de sus piezas más exitosas en ese tiempo, según Carberry" },
        { v: "2023", t: "año en que nació «Singing Pints», que volvió este verano" },
        { v: "25+", t: "edad que debe tener y aparentar quien bebe en un anuncio de alcohol en el Reino Unido" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de creatividad?",
      toca: "La mejor idea a veces ya existe: la inventó el consumidor jugando con tu producto. El trabajo creativo es verla, darle forma y llevarla a la pantalla grande sin quitarle lo auténtico.",
      hacer: "Esta semana, busca en TikTok e Instagram qué hace la gente con el producto de un cliente sin que nadie se lo pida, y presenta una idea que lo amplifique.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/future-of-marketing-briefing-inside-guinness-go-slow-approach-to-creators/" }]
    },
    {
      id: "sonsie", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Navidad", "Stop-motion", "Belleza"],
      titular: "Sonsie, la marca de Pamela Anderson, estrena su primera Navidad en stop-motion",
      corto: "Sonsie estrena su primera Navidad en stop-motion",
      cuerpo: "Sonsie, marca de cuidado de la piel vegana y libre de crueldad de la que Pamela Anderson es dueña mayoritaria desde 2024, lanzó su primera campaña navideña: un viaje de 83 segundos en stop-motion por un jardín mágico, con Anderson miniaturizada en un mundo de papel maché. La pieza la trabajaron 23 creadores durante ocho meses. Sus hijos Brandon Thomas Lee y Dylan Jagger Lee son cofundadores y llevan la estrategia y el mercadeo de la marca.",
      cifras: [
        { v: "83 s", t: "dura el corto en stop-motion" },
        { v: "23", t: "creadores trabajaron en la pieza" },
        { v: "8 meses", t: "de producción" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "En una Navidad llena de piezas hechas con IA, el trabajo hecho a mano se vuelve un mensaje en sí mismo. Ocho meses de producción se notan, y la marca lo cuenta como parte de la historia.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/pamela-anderson-on-how-skincare-brand-sonsies-first-holiday-ad-reflects-her-world/" }]
    },

    {
      id: "emarketer", dep: "planning", peso: "principal",
      etiquetas: ["Inversión", "Móvil", "Efectividad"],
      titular: "EMARKETER: el celular se lleva más del 75 % de la inversión y menos de la mitad del tiempo",
      corto: "El celular: 75 % de la plata, menos de la mitad del tiempo",
      cuerpo: "Bill Fisher, analista principal de EMARKETER, dijo en el MadTech Podcast de ExchangeWire, publicado el 13 de noviembre, que en el Reino Unido el móvil se lleva más de tres cuartas partes de la inversión publicitaria aunque tiene menos de la mitad del tiempo que la gente pasa con los medios, una brecha que según él empujan las redes sociales y Meta. Su punto central: la industria confunde medición con efectividad y mide lo fácil, como vistas y clics, sin saber si vende. Para él, el modelado de mezcla de medios (MMM) es la mejor herramienta disponible, y avisa que la IA generativa puede llevar la creatividad a un «mar de lo mismo». En junio, EMARKETER proyectó que la inversión en anuncios con IA en EE. UU. pasará de US$32,030 millones en 2026 a US$68,250 millones en 2030.",
      cifras: [
        { v: "75 %+", t: "de la inversión publicitaria del Reino Unido va al móvil" },
        { v: "<50 %", t: "del tiempo con medios es en el móvil" },
        { v: "US$68,250M", t: "inversión proyectada en anuncios con IA en EE. UU. pa’ 2030" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Si la plata y el tiempo no van al mismo sitio, hay medios baratos donde la gente sí está y que nadie está comprando. Es el argumento perfecto pa’ revisar la mezcla antes del plan del año que viene.",
      hacer: "Esta semana, pon lado a lado cómo reparte un cliente su inversión por medio y cuánto tiempo pasa su audiencia en cada uno, y lleva la diferencia a la reunión del plan 2027.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/mobile-takes-over-75-of-uk-ad-spend-on-under-half-of-media-time-emarketer/" }]
    },
    {
      id: "savanta", dep: "planning", peso: "secundaria",
      etiquetas: ["CTV", "Saturación", "Elecciones"],
      titular: "Casi el 10 % de la gente se fue a planes sin anuncios pa’ escapar de la propaganda electoral",
      corto: "Casi el 10 % huyó de los anuncios electorales",
      cuerpo: "En una encuesta de Savanta a casi 1,800 adultos de EE. UU., cerca del 10 % evitó los anuncios durante las elecciones de medio término pasándose a planes sin anuncios, cancelando suscripciones o dejando de ver ciertos canales. Muchos otros silenciaron los anuncios o cambiaron de canal. Según la encuesta, la Gen Z fue la que más interactuó con los anuncios políticos en streaming. Shaun Austin, jefe global de medios de Savanta, resumió que la gente siempre va a buscar cómo evitar la publicidad cuando es mucha y persistente.",
      cifras: [
        { v: "~10 %", t: "evitó los anuncios electorales con planes sin anuncios, cancelando o cambiando de canal" },
        { v: "~1,800", t: "adultos de EE. UU. encuestados" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "La saturación tiene precio: cuando un medio se llena de anuncios, la audiencia se va. Vale como alerta pa’ la temporada navideña, cuando todo el mundo pauta en las mismas fechas.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/convergent-tv/election-advertising-drove-10-of-viewers-to-seek-ad-free-options/" }]
    },

    {
      id: "italiameta", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Meta", "Consentimiento"],
      titular: "Italia multa a Meta con €805 millones porque Facebook leía la galería del celular sin permiso claro",
      corto: "Italia multa a Meta con €805 millones",
      cuerpo: "El Garante, la autoridad de protección de datos de Italia, multó a Meta con 805 millones de euros el 14 de noviembre. Según el regulador, la app de Facebook para Android accedía a fotos, videos y sus metadatos en el teléfono sin un consentimiento específico y sin informar bien. Todo giraba en torno a la función «Obtén sugerencias de tu galería mientras navegas en Facebook», disponible desde 2023, que venía encendida por defecto detrás de un permiso poco claro. Unos 20 millones de usuarios de Android en Italia fueron afectados. Meta tiene 60 días pa’ pedir un sí aparte y dejar la función apagada pa’ quien no lo dé. El Garante también rechazó que el caso le tocara a Irlanda.",
      cifras: [
        { v: "€805M", t: "multa del Garante italiano a Meta" },
        { v: "20 millones", t: "de usuarios de Android afectados en Italia" },
        { v: "60 días", t: "pa’ pedir un consentimiento aparte y apagar la función por defecto" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de data?",
      toca: "El regulador no castigó un hackeo, castigó un permiso vago y una función encendida por defecto. Cualquier app o formulario de un cliente que pida acceso «por si acaso» está en la misma línea de riesgo.",
      hacer: "Esta semana, haz con un cliente que tenga app la lista de permisos que pide (fotos, ubicación, contactos) y marca cuáles vienen encendidos por defecto y no tienen una explicación clara.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/italy-fines-meta-eur805m-over-facebooks-access-to-android-photo-galleries/" }]
    },
    {
      id: "amazontag", dep: "data", peso: "secundaria",
      etiquetas: ["Amazon Ads", "Cookies", "Atribución"],
      titular: "Amazon Ad Tag pone su propia cookie de 30 días en los sitios de los anunciantes",
      corto: "Amazon Ad Tag estrena una cookie de 30 días",
      cuerpo: "Amazon Ads activó en su Amazon Ad Tag una cookie de origen llamada aatSession, que se coloca en los sitios de los anunciantes en Norteamérica. Guarda un identificador de sesión que conecta las visitas, registros y compras de una persona, y vence 30 días después de su última página vista. Según la nota de Amazon, sirve pa’ medir y atribuir mejor ahora que salen las cookies de terceros, y solo funciona cuando las señales de consentimiento lo permiten (TCF, GPP y la Amazon Consent Signal). Viene encendida por defecto: quien no la quiera tiene que agregar una línea de código en cada página.",
      cifras: [
        { v: "30 días", t: "dura la cookie después de la última página vista" },
        { v: "Norteamérica", t: "único mercado donde se activa por ahora" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Una etiqueta que ya estaba en el sitio del cliente ahora guarda una cookie nueva sin que nadie la pidiera. Eso le toca a la política de cookies y al banner de consentimiento.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-ad-tag-adds-a-30-day-first-party-cookie-to-advertiser-websites/" }]
    },

    {
      id: "ytinsights", dep: "content", peso: "principal",
      etiquetas: ["YouTube Studio", "IA", "Analítica"],
      titular: "YouTube Studio cambia Analytics por Insights: ahora te explica en palabras por qué se movieron tus números",
      corto: "YouTube Studio estrena Insights y Ask Studio en el celular",
      cuerpo: "Desde el 13 de noviembre, YouTube Studio en computadora tiene Insights, una capa que explica en lenguaje sencillo qué videos trajeron gente nueva, dónde subió el tiempo de visualización y cómo le va a lo último que subiste comparado con tu contenido de siempre. La pestaña Trends pasa a llamarse Research y enseña videos de otros canales a los que les fue mejor de lo normal. Ask Studio, el asistente de IA del Studio, llegó a la app para Android e iPhone y ahora puede leer hasta 10 imágenes a la vez. YouTube dice que los reportes detallados, la analítica avanzada y los datos en tiempo real siguen ahí, pero no ha dicho exactamente qué canales califican.",
      cifras: [
        { v: "10", t: "imágenes a la vez que puede leer Ask Studio" },
        { v: "13 nov", t: "día del lanzamiento de Insights y Research" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de content?",
      toca: "El reporte mensual se acorta: YouTube ya te da el porqué en palabras. El valor del equipo pasa a estar en decidir qué hacer con eso y en confirmar que la explicación de la IA cuadra con los datos.",
      hacer: "Esta semana, abre Insights y Research en el canal de un cliente, apunta tres hallazgos y compáralos con tu último reporte antes de cambiar el calendario de contenido.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/youtube-studios-numbers-learn-to-talk-as-analytics-becomes-insights/" }]
    },

    {
      id: "wilfrido", dep: "rd", peso: "principal", para: ["creatividad", "content", "data"],
      etiquetas: ["Derechos de autor", "Música", "Merengue"], fecha: "14 nov 2026",
      titular: "Un tribunal condena a Wilfrido Vargas a pagar RD$14 millones por no reconocer a un coautor de su merengue",
      corto: "Wilfrido Vargas pagará RD$14 millones por derechos de autor",
      cuerpo: "La Segunda Sala de la Cámara Civil y Comercial del Juzgado de Primera Instancia del Distrito Nacional condenó a Wilfrido Vargas y a su empresa a pagar RD$14 millones al músico Juan Valdez Ybet por violar sus derechos de autor sobre «El baile del perrito». La sentencia, del 28 de octubre de 2026, reconoce a Valdez como coautor de parte de la letra y la música, no solo como arreglista. El tribunal concluyó que la canción se explotó por más de tres décadas sin reconocerlo, con pruebas como testimonios, grabaciones y un libro del propio Vargas. Son RD$12 millones por daños morales y RD$2 millones por daños patrimoniales, lejos de los RD$100 millones que se reclamaban, y Vargas debe publicar la sentencia en un periódico de circulación nacional.",
      cifras: [
        { v: "RD$14M", t: "indemnización ordenada por el tribunal" },
        { v: "RD$100M", t: "lo que reclamaba originalmente el demandante" },
        { v: "30+ años", t: "de la canción explotada sin reconocer al coautor" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Los clásicos del merengue y la bachata son oro pa’ una campaña dominicana, pero el tribunal acaba de recordar que una canción puede tener más dueños de los que aparecen en el disco. Si la marca paga los derechos a uno solo, el riesgo sigue ahí.",
      hacer: "Esta semana, revisa los jingles y las canciones licenciadas que usan tus clientes en spots y redes, y confirma por escrito que el permiso cubre a todos los autores.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/14/wilfrido-vargas-debera-pagar-indemnizacion-por-14-millones-de-pesos/3720759" }]
    },
    {
      id: "viettel", dep: "rd", peso: "secundaria", para: ["data", "medios", "planning"],
      etiquetas: ["Telecom", "Indotel", "5G"], fecha: "14 nov 2026",
      titular: "Viettel paga RD$972.5 millones al Indotel y se acerca a ser la cuarta telefónica del país",
      corto: "Viettel paga su licencia al Indotel",
      cuerpo: "Viettel Dominicana, de capital vietnamita, pagó RD$972,519,255 al Indotel el viernes 13 de noviembre, como primer desembolso por su licencia pa’ ofrecer telefonía e internet. El 19 de agosto el Indotel le adjudicó 240 MHz de espectro por 20 años: 40 MHz en 700 MHz, 100 MHz en 2.3 GHz y 100 MHz en 3.6 GHz, frecuencias que permiten móvil e internet de alta velocidad, incluida 5G. Llegaría a competir con Claro, Altice y Viva. Según Guido Gómez Mazara, presidente del Consejo Directivo del Indotel, la idea es más competencia, mejor servicio y tarifas más competitivas.",
      cifras: [
        { v: "RD$972.5M", t: "primer pago de Viettel al Indotel" },
        { v: "240 MHz", t: "de espectro adjudicado por 20 años" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Un cuarto operador con 5G puede bajar el precio de los datos y subir el consumo de video en el celular. Pa’ Medios y Planning, el escenario móvil de 2027 puede cambiar, y una telefónica nueva siempre llega con presupuesto de lanzamiento.",
      fuentes: [{ nombre: "N Digital", url: "https://n.com.do/2026/11/14/viettel-dominicana-pago-indotel-licencia/" }]
    },
    {
      id: "yapoort", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["TV", "Estreno", "Telesistema"], fecha: "14 nov 2026",
      titular: "Karen Yapoort vuelve a la TV con «Mujeres de las Grandes Ligas», los domingos por Telesistema",
      corto: "Karen Yapoort vuelve a la TV el 22 de noviembre",
      cuerpo: "La comunicadora Karen Yapoort regresa a la televisión dominicana con «Mujeres de las Grandes Ligas», un programa de 12 capítulos que se estrena el domingo 22 de noviembre de 9:00 a 10:00 p. m. por Telesistema 11. Fuera del país se verá por Vix. Lo realiza Caribbean Media World, con producción de la propia Yapoort, y cuenta historias de mujeres que superaron obstáculos pa’ llegar a sus metas.",
      cifras: [
        { v: "12", t: "capítulos" },
        { v: "22 nov", t: "estreno, domingo a las 9:00 p. m. por Telesistema 11" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Contenido nuevo en horario estelar de domingo, con béisbol y mujeres de protagonistas y salida internacional por Vix: un espacio que les sirve a marcas que les hablan a la familia y a la diáspora.",
      fuentes: [{ nombre: "Revista Mercado", url: "https://revistamercado.do/actualidad/karen-yapoort-mujeres-de-las-grandes-ligas-cuando-hora-donde-ver/" }]
    },
    {
      id: "creditoturismo", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Turismo", "Banca", "Crédito"], fecha: "15 nov 2026",
      titular: "El crédito al turismo crece 28.5 % en nueve meses y Banco Popular lo encabeza",
      corto: "El crédito al turismo sube 28.5 %",
      cuerpo: "Según un informe de la Superintendencia de Bancos, la cartera de crédito al turismo (alojamiento y servicios de comida) creció 28.5 % entre enero y septiembre, hasta RD$150,394 millones, después de caer 14.3 % en 2025. Banco Popular, Banreservas y BHD financian el 89.1 % de esos préstamos. El Popular es el mayor financiador, con RD$67,093 millones al 30 de septiembre, un 110.6 % más que al cierre de 2025, mientras que la cartera de Banreservas bajó 3.2 % y la del BHD 19.1 %.",
      cifras: [
        { v: "28.5 %", t: "crecimiento del crédito al turismo entre enero y septiembre" },
        { v: "RD$150,394M", t: "cartera total al 30 de septiembre" },
        { v: "89.1 %", t: "lo financian Popular, Banreservas y BHD" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Hoteles y restaurantes están cogiendo préstamos pa’ crecer, y eso suele venir con aperturas, remodelaciones y lanzamientos que necesitan comunicación.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/388573/creditos-al-turismo-crecieron-28-5-en-enero-septiembre-de-este-ano/" }]
    },
    {
      id: "quincena", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Consumo", "Quincena", "Presupuesto familiar"], fecha: "14 nov 2026",
      titular: "Hoy cae la quincena, y ya tiene dueño: súper, tarjetas y transporte",
      corto: "La quincena se va en súper, tarjetas y transporte",
      cuerpo: "Un reportaje de El Día con empleados del sector privado del Gran Santo Domingo (con nombres cambiados a pedido de ellos) cuenta que el dinero de los días 15 y 30 ya tiene destino antes de llegar a la cuenta. Lo primero es reponer la comida en el supermercado, pagar tarjetas o mandarle dinero a la familia. Una madre dijo que entre el 35 % y el 40 % de su sueldo se va en alimentos; otro entrevistado calcula hasta RD$12,000 al mes en comida, más RD$3,200 de internet, y una tercera dice que lo que más le pesa es el Uber diario hasta el Metro. Cuando faltan tres a cinco días pa’ la próxima quincena, el efectivo escasea.",
      cifras: [
        { v: "35–40 %", t: "del sueldo en comida, según una de las entrevistadas" },
        { v: "15 y 30", t: "los días en que cae la quincena" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "La decisión de compra en RD tiene calendario: el día de cobro y los dos o tres días siguientes. Pautar la oferta la semana antes es gastar cuando el bolsillo está vacío.",
      fuentes: [{ nombre: "El Día", url: "https://eldia.com.do/comida-transporte-o-tarjetas-en-que-se-les-va-el-dinero-a-los-dominicanos/" }]
    }
  ],

  pizarra: ["dv360codigos", "guinness", "emarketer", "italiameta", "ytinsights", "wilfrido"],

  frases: [
    { dep: "medios", texto: "Con el código de DV360 impulsar el video de un creador va a ser más rápido, pero si el creador quita el enlace, la campaña se cae.", uso: "para conversaciones de creadores y pauta" },
    { dep: "creatividad", texto: "Guinness no persigue tendencias: espera a que la gente juegue con su pinta y después lo lleva a la TV.", uso: "para conversaciones de ideas y cultura de marca" },
    { dep: "planning", texto: "En el Reino Unido el celular se lleva más del 75 % de la plata con menos de la mitad del tiempo de la gente.", uso: "para conversaciones de mezcla de medios" },
    { dep: "data", texto: "Italia le cobró a Meta 805 millones de euros por un permiso vago y una función encendida por defecto.", uso: "para conversaciones de privacidad y consentimiento" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Los códigos de creadores en DV360" },
      { id: "creatividad", texto: "Guinness y la pinta que canta" },
      { id: "planning", texto: "El celular: mucha plata, poco tiempo" },
      { id: "data", texto: "La multa de €805 millones a Meta" },
      { id: "content", texto: "Insights y Ask Studio en YouTube" },
      { id: "rd", texto: "Zoom a RD: Wilfrido y los derechos de autor" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "dv360codigos", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "quincena", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Hoy es 15 y cae la quincena: lo primero que sale es el súper, las tarjetas y el transporte. Programa tus ofertas pa’ el día de cobro y los dos o tres siguientes, no pa’ la semana antes."
    },
    data: {
      tipo: "secreto", nota: "italiameta", titulo: "Destapa el expediente",
      texto: "Italia multó a Meta con [[805 millones de euros]] porque Facebook para Android leía la galería de unos [[20 millones]] de usuarios sin un consentimiento específico."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "ytinsights", titulo: "Arma tu pregunta pa’ Ask Studio",
      intro: "Con Insights y Ask Studio de YouTube Studio, ayúdame con lo siguiente:",
      opciones: [
        "Explícame qué videos me trajeron más gente nueva este mes y por qué",
        "Dime en qué minuto subió el tiempo de visualización de mi último video",
        "Compara lo último que subí con mi contenido de siempre",
        "Enséñame en Research qué videos parecidos a los míos rindieron más de lo normal"
      ],
      cierre: "Señala qué partes de tu respuesta necesito confirmar con los reportes detallados antes de cambiar el calendario."
    },
    rd: {
      tipo: "pregunta", nota: "wilfrido", titulo: "La pregunta del patio",
      p: "¿Cuánto le ordenó pagar el tribunal a Wilfrido Vargas por los derechos de autor del merengue?",
      opciones: ["RD$14 millones", "RD$100 millones", "RD$2 millones"], correcta: 0,
      explicacion: "Son RD$12 millones por daños morales y RD$2 millones por daños patrimoniales. El demandante había reclamado RD$100 millones."
    }
  }
};
