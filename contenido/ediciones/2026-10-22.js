/*
  El Pulso Publicitario · edición N.º 295 · 22 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 295,
  fechaISO: "2026-10-22",
  fecha: "Jueves 22 de octubre 2026",
  fechaCorta: "22 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Cuando la plataforma activa algo por defecto, el que no revisa la configuración deja que otro decida por su cliente.",
    largo: "Jueves de interruptores y de cuentas grandes. OpenAI va a reescribir los anuncios de ChatGPT por defecto, Meta cerró el trimestre con los anuncios con creadores en un ritmo de US$15,000M al año y un juez de Nuevo México le puso una multa de US$25,000M. Aquí en el patio, los pagos por internet suman RD$120,080M hasta agosto. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes.",
    corto: "Revisa hoy qué viene activado por defecto en las cuentas de tus clientes, antes de que lo haga la plataforma.",
    porDep: {
      medios: "Antes de que una función entre por defecto, pregunta si se puede apagar y qué se pierde. Apúntalo en el plan del cliente.",
      creatividad: "Una identidad de marca que se oye y se ve a la vez es más difícil de copiar. Piensa en el sonido desde el primer boceto.",
      planning: "Si el cliente depende de la temporada, el presupuesto se gasta antes de lo que dice el calendario. Muévete primero.",
      data: "Una multa grande por lo que una empresa dijo de su privacidad es un recordatorio: lo que prometes en la política tiene que ser lo que haces.",
      content: "Los creadores ya mueven una parte grande de la inversión. Ponles reglas claras de marca y de transparencia antes de la próxima campaña.",
      rd: "Con más gente pagando por internet, la tienda en línea del cliente tiene que funcionar bien desde el celular."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "OpenAI activa por defecto la reescritura de anuncios en ChatGPT · Meta permite asignar audiencia a cada creatividad" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Apple Music estrena identidad hecha con sonido · Liquid I.V. cambia el humor por precisión en su debut con McLaren" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Deloitte: 28 % del presupuesto navideño se gastaría antes de que acabe octubre" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Un juez de Nuevo México le impone a Meta US$25,000M · Apple explica el bloqueo de rastreadores en Safari" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Los anuncios con creadores de Meta pasan de US$15,000M al año · YouTube publica datos de cómo los creadores usan IA" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "chatgptrewrite", dep: "medios", peso: "principal",
      etiquetas: ["OpenAI", "ChatGPT Ads", "IA"],
      titular: "OpenAI va a reescribir por defecto los anuncios de ChatGPT, y los anunciantes tienen pocos días pa’ apagarlo",
      corto: "OpenAI reescribirá por defecto los anuncios de ChatGPT",
      cuerpo: "Según PPC Land, OpenAI envió un correo a sus anunciantes el 20 de octubre: las «mejoras creativas» se activarán por defecto en las campañas de autoservicio, nuevas y existentes. El sistema puede reescribir titulares y descripciones, cambiar el tamaño de las imágenes, cambiar la URL de destino y traducir el texto, y esas versiones pueden salir sin que nadie las apruebe una por una. El correo dice que arranca el viernes 30 de octubre, pero la página de ayuda de OpenAI dice el jueves 29, y las dos fuentes no coinciden. Se apaga en Ajustes de Ads Manager, con una opción a nivel de cuenta y otra por campaña, pero un solo interruptor cubre los cuatro tipos de mejora. No hay datos de resultados, ni dice cómo se marcan los anuncios reescritos.",
      cifras: [
        { v: "89 países", t: "donde se venden los anuncios de ChatGPT, según PPC Land" },
        { v: "100,000+", t: "anunciantes han corrido campañas desde el lanzamiento (cifra acumulada)" },
        { v: "29 o 30 oct", t: "fecha de arranque; el correo y la página de ayuda no coinciden" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si un cliente corre anuncios en ChatGPT, desde fines de mes una IA puede cambiarle el titular y el enlace sin que nadie de la agencia lo vea. Eso toca marca, legal y resultados.",
      hacer: "Esta semana, listar los clientes con campañas en ChatGPT Ads, decidir con cada uno si apaga las mejoras creativas antes del 29 de octubre y dejar la decisión por escrito.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/openai-to-rewrite-chatgpt-ads-by-default-as-advertisers-get-days-to-opt-out/" }]
    },
    {
      id: "metacreativo", dep: "medios", peso: "secundaria",
      etiquetas: ["Meta", "Marketing API", "Targeting"],
      titular: "Meta deja asignar una audiencia a cada creatividad desde la API",
      corto: "Meta permite targeting por creatividad",
      cuerpo: "Meta anunció el 19 de octubre en su blog de desarrolladores una opción en la Marketing API para que las plataformas de terceros asignen una audiencia a cada elemento creativo: se puede definir el rango de edad y el género al que mejor le sirve cada pieza. El ejemplo de Meta es un banco que dirige videos de plan de retiro a gente de 50 a 65 años y videos de cuentas de ahorro a todas las edades. Social Media Today apunta que Meta ya infiere algunos de esos datos y que no está claro el efecto en compras de regalos.",
      toca: "Ahora la pieza puede llevar su propia audiencia y no solo el conjunto de anuncios. Útil pa’ cuentas con mucho material creativo, pero conviene probarlo antes de la temporada de regalos.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-offers-creative-targeting-for-ads/833672/" }]
    },

    {
      id: "applemusic", dep: "creatividad", peso: "principal",
      etiquetas: ["Apple Music", "Rebranding", "Sonido"],
      titular: "Apple Music estrena identidad «hecha con sonido»: las olas de un baño de aceite son el diseño",
      corto: "Apple Music estrena identidad hecha con sonido",
      cuerpo: "Apple Music presentó su nueva identidad de marca bajo el concepto «made by sound», con un identificador audiovisual como pieza central. La creó TBWA\\Media Arts Lab, con el productor Fred Again y la empresa de diseño de sonido Nest Acoustics. Las imágenes salen de música pasada por un transductor en un baño poco profundo de aceite mineral, y luego se filmaron las ondas. El logotipo junta el símbolo de Apple con una versión a la medida de SF Pro en minúsculas. Empieza a verse en los contenidos originales y eventos de Apple Music, con exterior y un video del detrás de cámaras. Adweek anota que el ícono nuevo de la app recibió críticas en redes.",
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La identidad nace del propio producto, la música, y no de un símbolo dibujado aparte. Es un ejemplo de cómo un proceso físico, filmado de verdad, puede darle a una marca algo que otra no puede copiar fácil.",
      hacer: "Esta semana, en la sesión creativa, escoger un cliente y pensar qué proceso real de su producto se podría filmar o grabar pa’ sacar un patrón visual o un sonido de marca.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/apple-music-rebrands-with-a-look-made-by-sound/" }]
    },
    {
      id: "liquidiv", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Liquid I.V.", "McLaren", "Patrocinio"],
      titular: "Liquid I.V. cambia los inodoros que cantan por la precisión de la F1",
      corto: "Liquid I.V. debuta con McLaren y baja el humor",
      cuerpo: "Liquid I.V. lanzó «Thirst for More», su primer comercial con McLaren, de 30 segundos y con los pilotos Lando Norris y Oscar Piastri. Lo hizo la agencia UEG Worldwide y usa pantalla dividida pa’ unir la precisión de McLaren con la ciencia de la hidratación. La VP de mercadeo integrado, Brittany Shaw, dijo que esta campaña necesitaba ser menos cómica que el anuncio del Super Bowl de la marca. Adweek no dio el valor del acuerdo ni resultados.",
      toca: "Una marca que se hizo conocida por el humor cambia de tono cuando su categoría se llena. Sirve de ejemplo de cuándo bajarle al chiste y subirle a la prueba.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/liquid-iv-swaps-singing-toilets-for-f1-precision-in-its-mclaren-debut/" }]
    },

    {
      id: "holidaybudgets", dep: "planning", peso: "principal",
      etiquetas: ["Navidad", "Deloitte", "Temporada"],
      titular: "Deloitte: el 28 % del presupuesto navideño se gastaría antes de que acabe octubre",
      corto: "Deloitte: 28 % del presupuesto navideño se gasta en octubre",
      cuerpo: "Según Digiday, que cita la encuesta anual de compras navideñas de Deloitte (unos 4,000 consumidores de EE. UU., del 26 de agosto al 10 de septiembre), el 22 % planea empezar las compras antes que el año pasado y el 28 % del presupuesto estaría gastado a fines de octubre, el nivel más alto en seis años. El 42 % piensa participar en eventos de ofertas de octubre, y 1 de cada 4 compró regalos en las promociones de junio. Los «buscadores de valor» son el 38 % y planean gastar 12 % más que el resto. Es una encuesta de EE. UU. con respuestas declaradas, y el titular de Digiday dice «casi 30 %» pero el texto dice 28 %.",
      cifras: [
        { v: "28 %", t: "del presupuesto navideño gastado a fines de octubre, el nivel más alto en seis años (Deloitte, EE. UU.)" },
        { v: "22 %", t: "planea empezar sus compras más temprano que el año pasado" },
        { v: "42 %", t: "piensa participar en eventos de ofertas de octubre" }
      ],
      hacer: "Esta semana, revisar con un cliente de retail el calendario de Navidad y mover la pauta de arranque a octubre y noviembre, aclarando que la encuesta es de EE. UU. y que hay que validar con datos locales.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/nearly-30-of-holiday-budgets-expected-to-be-spent-by-the-end-of-october/" }]
    },

    {
      id: "newmexico", dep: "data", peso: "principal",
      etiquetas: ["Meta", "Privacidad", "Multa"],
      titular: "Un juez de Nuevo México le impone a Meta una multa de US$25,000M por engañar sobre privacidad y moderación",
      corto: "Juez de Nuevo México multa a Meta con US$25,000M",
      cuerpo: "Según PPC Land, el juez Francis J. Mathew, de Santa Fe, ordenó a Meta pagar US$25,000M tras un fallo de jurado de septiembre, que encontró que la empresa engañó al público sobre privacidad y moderación de contenido, incluido el caso Cambridge Analytica. La orden cuenta 43,899,720 violaciones a US$5,000 cada una, lo que daría un máximo legal de unos US$219,500M, y baja la cifra sin explicar el método. El estado pedía entre US$35,000M y US$40,000M, y Meta había propuesto unos US$3,400M. La orden fija un interés de 15 % anual hasta que se pague. Meta dijo que apelará. PPC Land anota que los documentos de resultados de Meta del mismo día no mencionan el fallo.",
      cifras: [
        { v: "US$25,000M", t: "multa ordenada por el juez de Nuevo México" },
        { v: "15 % anual", t: "interés fijado en la orden hasta el pago completo" },
        { v: "Apelará", t: "Meta anunció que apelará la decisión" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Lo que una empresa dice de su privacidad en público se puede convertir en una multa si no coincide con lo que hace.",
        "Es un caso de un estado de EE. UU. y está en apelación. En RD no aplica, pero sirve de pista a los clientes que usan Meta."
      ],
      hacer: "Esta semana, revisar los textos de privacidad y consentimiento de las campañas de captación de datos de cada cliente y confirmar que dicen lo mismo que lo que se hace en realidad.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/metas-ad-revenue-gains-26-on-the-day-a-new-mexico-judge-fines-it-25bn/" }]
    },
    {
      id: "safari", dep: "data", peso: "secundaria",
      etiquetas: ["Apple", "Safari", "Identidad"],
      titular: "Apple explica su bloqueo en Safari: el correo electrónico reemplazó a las cookies pa’ rastrear",
      corto: "Apple explica el bloqueo de rastreadores en Safari",
      cuerpo: "Según Digiday, la actualización de Safari de septiembre empezó a cortar a empresas que rastrean a las personas entre sitios, entre ellas LiveRamp, ID5, UID 2.0 de The Trade Desk, Permutive y Audigent. En un blog de WebKit del 19 de octubre, Apple dijo que el correo electrónico reemplazó a las cookies como base del rastreo entre sitios. El bloqueo cubre iPhone, iPad, Mac y Vision Pro. Apple no nombró empresas ni explicó cómo se entra o se sale de su lista. En los primeros días también se bloqueó el servidor de anuncios de The Trade Desk, que según una fuente ya se reactivó. Digiday encontró que la mayoría de las direcciones de ad tech que probó todavía cargaban.",
      toca: "Si el plan de un cliente depende de identificadores basados en el correo, hay que medir cuánto de su audiencia está en Safari y tener un plan B.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/apples-growing-ads-business-puts-its-safari-blocklist-under-scrutiny/" }]
    },

    {
      id: "metacreadores", dep: "content", peso: "principal",
      etiquetas: ["Meta", "Creadores", "Partnership ads"],
      titular: "Los anuncios de Meta con creadores crecen 97 % y pasan de US$15,000M al año",
      corto: "Anuncios con creadores de Meta pasan de US$15,000M al año",
      cuerpo: "En la llamada de resultados del tercer trimestre de Meta, los anuncios de alianza (los que salen con la identidad de un creador) crecieron más de 97 % interanual y pasaron de un ritmo anual de US$15,000M, según PPC Land. Ese ritmo es una proyección y no una línea de los estados financieros. Meta dice que el Creator Marketing Hub ya está disponible para todos los anunciantes, con más de 10 millones de creadores que se pueden descubrir, y que casi 10 millones de anunciantes usaron alguna herramienta de IA generativa de creatividad. PPC Land aclara que la transcripción de la llamada es de un tercero, con ayuda de IA, y que muchas cifras son mediciones propias de Meta.",
      cifras: [
        { v: "+97 %", t: "crecimiento interanual de los anuncios de alianza con creadores" },
        { v: "US$15,000M", t: "ritmo anual de ingresos, una proyección, no una línea reportada" },
        { v: "10 M+", t: "creadores que se pueden descubrir en el Creator Marketing Hub, según Meta" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Meta está poniendo mucho dinero en que la marca hable por boca de un creador. Si tu cliente ya trabaja con creadores, ese contenido puede salir como anuncio con el perfil del creador, no solo como un post orgánico.",
      hacer: "Esta semana, escoger los dos creadores que mejor le funcionaron a un cliente, confirmar en sus contratos si permiten usar sus posts como anuncios de alianza y probar uno en Meta con presupuesto chico.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/metas-ads-with-creators-gain-97-to-a-15bn-annual-run-rate/" }]
    },
    {
      id: "youtubeia", dep: "content", peso: "secundaria",
      etiquetas: ["YouTube", "IA", "Creadores"],
      titular: "YouTube publica datos de cómo los creadores usan IA: 72 % la usa en videos o imágenes",
      corto: "YouTube: 72 % de los creadores usa IA",
      cuerpo: "YouTube publicó, dentro de su serie Culture & Trends, un estudio hecho por NRG con unas 700 personas de 14 a 44 años que subieron un video en los últimos 12 meses. Según Social Media Today, el 72 % dice que usa IA en videos o imágenes y el 61 % está interesado en usarla pa’ meterse a sí mismo en un video. Los usos son sketches de comedia, «cambios de vestuario» digitales y mundos de cine. Es una encuesta encargada por la plataforma, de EE. UU., y el artículo avisa de riesgos de desinformación.",
      cifras: [{ v: "72 %", t: "de los creadores encuestados usa IA en videos o imágenes, según el estudio de YouTube" }],
      toca: "Mucho creador ya usa IA como parte del proceso. Antes de contratar a uno, pregunta qué partes del contenido las hace con IA y deja las reglas en el contrato.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-shares-data-on-how-creators-are-using-ai/833657/" }]
    },

    {
      id: "pagosinternet", dep: "rd", peso: "principal", para: ["planning", "medios", "data"],
      etiquetas: ["Comercio electrónico", "Banco Central", "Pagos"], fecha: "22 oct 2026",
      titular: "Los pagos por internet suman RD$120,080 millones hasta agosto, según el Banco Central",
      corto: "Pagos por internet suman RD$120,080M hasta agosto",
      cuerpo: "Santo Domingo.— Los pagos locales por internet hechos con tarjeta sumaron RD$120,080.2 millones (unos US$1,956.82 millones) en 94.9 millones de transacciones de enero a agosto de 2026, según cifras del Banco Central que recoge elDinero. Las tarjetas de crédito concentran RD$86,195.6 millones, cerca de 72 % del valor, y las de débito RD$33,866.4 millones. Ese monto compara con RD$147,122.9 millones y 121 millones de transacciones en todo 2025. El 89.4 % de los hogares tiene teléfono inteligente, pero solo el 56.2 % tiene internet fijo, según la encuesta EnHogar-MICS 2025. Ojo: 2026 son ocho meses y 2025 es el año completo.",
      cifras: [
        { v: "RD$120,080 M", t: "pagos por internet de enero a agosto de 2026" },
        { v: "94.9 M", t: "transacciones en esos ocho meses" },
        { v: "~72 %", t: "del valor se pagó con tarjeta de crédito" },
        { v: "89.4 %", t: "de los hogares tiene teléfono inteligente; 56.2 % tiene internet fijo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Cada vez más dominicanos pagan en línea y casi todo desde el celular. Pa’ el cliente con tienda en línea, un pago que falla en el móvil es una venta perdida.",
      hacer: "Esta semana, probar el proceso de compra en celular de un cliente con tienda en línea, de principio a fin y con tarjeta de crédito y de débito, y anotar dónde se traba antes de aumentar la pauta de Navidad.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385823/pagos-por-internet-suman-rd120080-millones-a-agosto/" }]
    },
    {
      id: "mannycruz", dep: "rd", peso: "secundaria", para: ["medios", "content", "creatividad"],
      etiquetas: ["Música", "Merengue", "Patrocinio"], fecha: "27 nov 2026 · Santiago",
      titular: "Manny Cruz celebra el Día del Merengue en Santiago con un concierto gratuito",
      corto: "Manny Cruz hará concierto gratis en Santiago",
      cuerpo: "Santiago.— El cantante Manny Cruz hará su concierto por el Día del Merengue el viernes 27 de noviembre, a las 7:00 p.m., en el anfiteatro de la PUCMM. Es la primera vez que el evento sale de Santo Domingo y es la cuarta edición. La entrada es gratis, pero con boleta: la gente del público la consigue en la tienda de Altice de Ágora Santiago Center. Entre los aliados figuran Altice, Induveca, Café Santo Domingo y Pollos Victorina, según Diario Libre. El texto no dice cuántas boletas hay ni las condiciones.",
      toca: "Un concierto gratis con marcas aliadas funciona como un evento de marca con la gente del Cibao. Pa’ las que no están entre los aliados, la fecha sirve de gancho pa’ contenido de merengue esa semana.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/10/21/manny-cruz-celebra-el-dia-del-merengue-en-santiago/3696038" }]
    },
    {
      id: "tinydesk", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Tiny Desk", "Cultura"], fecha: "21 oct 2026",
      titular: "De Vicente García a Cardi B: el talento dominicano llega a los Tiny Desk Concerts",
      corto: "Dominicanos en el Tiny Desk de NPR",
      cuerpo: "Diario Libre repasa el paso de artistas dominicanos y de ascendencia dominicana por los Tiny Desk Concerts de NPR: Joan Soriano en 2012, Vicente García en 2018, Yasser Tejeda con Palotré en 2021 y 2024, Yendry en 2021 y 2026, J Noa en 2023 y Tokischa en «El Tiny» en 2022. Según el texto, Cardi B debutó en el Tiny Desk en octubre de 2026, con banda en vivo. El artículo no cita fuentes primarias ni enlaces a las sesiones.",
      toca: "El formato acústico y de banda en vivo le abre la puerta al talento dominicano afuera. Para un equipo de contenido es una idea de formato: sesiones cortas y sin filtros con artistas locales.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/10/21/de-vicente-garcia-a-cardi-b-dominicanos-en-el-tiny-desk/3695920" }]
    },
    {
      id: "tpm", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Economía", "Banco Central", "Crédito"], fecha: "22 oct 2026",
      titular: "El Banco Central subió la tasa de política monetaria a 5.50 %: así impacta a quien tiene un préstamo",
      corto: "Sube la tasa de política monetaria a 5.50 %",
      cuerpo: "elDinero explica que el Banco Central subió el 30 de septiembre la tasa de política monetaria (TPM) de 5.25 % a 5.50 % anual, el primer aumento en un año, de forma preventiva, con la inflación interanual en 5.12 %, por encima de la meta de 4.0 % ± 1.0 %. La TPM es una referencia que influye en las tasas de los créditos y de los depósitos, pero no mueve cada producto igual. En un préstamo de tasa variable, la cuota puede subir; en uno de tasa fija no cambia, y un crédito nuevo probablemente costaría más. Quien guarde dinero en certificados podría ver mejores rendimientos.",
      cifras: [
        { v: "5.50 %", t: "nueva TPM, desde 5.25 %" },
        { v: "5.12 %", t: "inflación interanual, sobre la meta de 4.0 % ± 1.0 %" }
      ],
      toca: "Crédito más caro puede frenar compras a plazos de carros, electrodomésticos y vivienda. Si el cliente vende financiado, conviene revisar el mensaje de cuotas.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385828/tiene-un-prestamo-asi-impactan-los-cambios-en-la-tasa-de-politica-monetaria/" }]
    }
  ],

  pizarra: ["chatgptrewrite", "applemusic", "holidaybudgets", "newmexico", "metacreadores", "pagosinternet"],

  frases: [
    { dep: "medios", texto: "OpenAI va a reescribir por defecto los anuncios de ChatGPT: si no lo apagas antes del 29 o 30 de octubre, otro decide por tu cliente.", uso: "para conversaciones de IA y control de marca" },
    { dep: "creatividad", texto: "Apple Music hizo su identidad con las olas de música en un baño de aceite: la marca nació del producto mismo.", uso: "para conversaciones de identidad de marca" },
    { dep: "data", texto: "Un juez de Nuevo México multó a Meta con US$25,000M por engañar sobre su privacidad, y Meta va a apelar.", uso: "para conversaciones de privacidad y cumplimiento" },
    { dep: "planning", texto: "Según Deloitte, el 28 % del presupuesto navideño estaría gastado a fines de octubre: la temporada ya empezó.", uso: "para conversaciones de calendario de temporada" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "OpenAI reescribe los anuncios de ChatGPT" },
      { id: "creatividad", texto: "Apple Music y su identidad de sonido" },
      { id: "planning", texto: "Deloitte y el 28 % de octubre" },
      { id: "data", texto: "Meta y la multa de US$25,000M" },
      { id: "content", texto: "Meta y los anuncios con creadores" },
      { id: "rd", texto: "Zoom a RD: los pagos por internet" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "chatgptrewrite", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "holidaybudgets", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Según Deloitte, el 28 % del presupuesto navideño estaría gastado a fines de octubre: mueve el arranque de pauta de Navidad a este mes."
    },
    data: {
      tipo: "secreto", nota: "newmexico", titulo: "Destapa el expediente",
      texto: "Un juez de Nuevo México ordenó a Meta pagar [[US$25,000M]], con un interés de [[15 % anual]] hasta el pago, y Meta dijo que apelará."
    },
    rd: {
      tipo: "pregunta", nota: "pagosinternet", titulo: "La pregunta del patio",
      p: "Según el Banco Central, ¿cuánto sumaron los pagos por internet de enero a agosto de 2026?",
      opciones: ["RD$12,008 millones", "RD$120,080 millones", "RD$1,200,800 millones"],
      correcta: 1,
      explicacion: "Fueron RD$120,080.2 millones en 94.9 millones de transacciones, y cerca de 72 % se pagó con tarjeta de crédito."
    }
  }
};
