/*
  El Pulso Publicitario · edición N.º 289 · 16 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 289,
  fechaISO: "2026-10-16",
  fecha: "Viernes 16 de octubre 2026",
  fechaCorta: "16 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes de que una plataforma te cambie la configuración, revísala tú. Y antes de citar un estudio, mira quién lo hizo y quién lo vende.",
    largo: "Viernes de fechas límite y de letra chiquita. Meta prende la navegación de productos en tus anuncios el 28 de octubre si no la apagas, OpenX y la agencia de Marketing Signals publican cifras de lo que venden, TikTok ya habla de la Navidad con datos de septiembre y, aquí en el patio, Mastercard dice que solo 6 % de los comercios acepta pagos digitales. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del lunes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del lunes.",
    porDep: {
      medios: "Una función que se prende sola es una decisión que tomó otro. Revisa las cuentas antes de la fecha y decide tú si se queda.",
      creatividad: "Cuando la idea es una oferta rara, el truco está en que alguien de verdad pueda cumplirla. Pringles se la tomó en serio hasta con el producto.",
      planning: "Ve la Navidad con los datos de la plataforma, pero contrástalos con tu cliente. Un buen planner pregunta quién midió y para quién.",
      data: "Un anuncio con datos sensibles puede salirle caro a todo el que lo toque. Revisa quién comparte qué en tu cadena de compra.",
      content: "Si un formato nuevo te deja usar de guía el Reel de otro, aprovéchalo pa’ ir más rápido, pero la idea tiene que ser tuya.",
      rd: "Si el 6 % de los comercios acepta pagos digitales, hay mucho camino por andar. Pregúntale a tu cliente qué le falta pa’ cobrar así."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Meta prende la navegación de productos en anuncios existentes el 28 de octubre · OpenX dice que el targeting del lado de la oferta ya es 37 % de su gasto" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Pringles ofrece una urna de lata a un fan pa’ Halloween · Chipotle estrena con Gut una bolsa gigante de 3 pies" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "TikTok comparte datos de compras navideñas · En el Reino Unido, las búsquedas de Black Friday bajan 36 % desde 2019" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Noruega multa a Xandr con NOK 92 millones por datos de Grindr · El borrador del Consejo de la UE acorta a cuatro meses la espera pa’ volver a pedir cookies" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Instagram estrena «Usar como referencia» en Reels y Meta le pone enlaces de audio a Edits" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "metabrowsing", dep: "medios", peso: "principal",
      etiquetas: ["Meta", "Anuncios", "Opt-out"],
      titular: "Meta va a prender la navegación de productos en tus anuncios el 28 de octubre, a menos que la apagues antes",
      corto: "Meta prende la navegación de productos el 28 de octubre",
      cuerpo: "Desde el 28 de octubre, Meta añadirá la navegación de productos a los anuncios que ya corren en Facebook e Instagram, salvo que el anunciante se salga antes con el botón «Opt out» del aviso. Al tocar el anuncio, la persona podría ver una página dentro de la app con detalles del producto y sugerencias, en vez de ir directo a la web del anunciante. Meta dice que, en un experimento del 6 al 21 de agosto con unos 117,700 anunciantes, las conversiones subieron 3 % en promedio. PPC Land no pudo verificar la cifra, y anota que el aviso no define la métrica, la ventana de atribución ni los formatos afectados. Un comprador de medios citado pidió que la fecha se mueva a enero y que haya reportes que muestren cuándo la función contribuye al resultado. Se puede prender o apagar por anuncio en la configuración de Advantage+ Creative en cualquier momento, incluso después del 28.",
      cifras: [
        { v: "28 oct", t: "fecha en que se prende la función en anuncios existentes" },
        { v: "+3 %", t: "conversiones promedio, según Meta, en un experimento de agosto con ~117,700 anunciantes" },
        { v: "27 nov", t: "Black Friday, a un mes del cambio" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si la función entra sin que nadie la revise, un anuncio de video o de Reels puede empezar a mostrar productos y los resultados se pueden atribuir al lugar equivocado, justo antes de Navidad. El dato de +3 % es de Meta y de un experimento de agosto, no del tráfico de fin de año.",
      hacer: "Esta semana, entrar a las cuentas de Meta de los clientes con tienda en línea, leer el aviso y decidir con cada uno si se queda o se sale antes del 28 de octubre, y anotar la fecha pa’ comparar resultados antes y después.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/meta-will-turn-on-product-browsing-in-existing-ads-on-october-28/" }]
    },
    {
      id: "openx", dep: "medios", peso: "secundaria",
      etiquetas: ["Programática", "OpenX", "Supply-side"],
      titular: "OpenX: el targeting del lado de la oferta pasó de 11 % a 37 % de su gasto en dos años",
      corto: "OpenX: el targeting de oferta ya es 37 % del gasto",
      cuerpo: "OpenX publicó su informe de tendencias de inteligencia del lado de la oferta (supply-side targeting). Con datos propios, dice que ese tipo de targeting pasó de 11 % del gasto en el cuarto trimestre de 2023 a 19 % en 2024 y a 37 % en 2025. También dice que 17 % de los acuerdos de 2025 incluyó medición con resultados reales. PPC Land advierte que son cifras de la empresa, que no se explica cómo se clasifica una transacción como supply-side ni sobre qué total se calcula el porcentaje, y que OpenX vende productos de este tipo.",
      cifras: [
        { v: "11 % → 37 %", t: "del gasto de OpenX con targeting de oferta, del 4T 2023 al 4T 2025 (dato de la empresa)" },
        { v: "17 %", t: "de los acuerdos de 2025 incluyó medición con resultados reales" }
      ],
      toca: "Sirve pa’ saber hacia dónde se mueve la compra programática, pero es un dato de quien vende la herramienta. Pídele a tu proveedor la metodología antes de citarlo con un cliente.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/openx-data-puts-supply-side-targeting-at-37-of-spend-up-from-11-in-2023/" }]
    },

    {
      id: "pringles", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Pringles", "Halloween"],
      titular: "Pringles le ofrece a un fan una urna con forma de lata y 200 años de papitas pa’ Halloween",
      corto: "Pringles regala una urna con forma de lata",
      cuerpo: "Pringles lanzó «Once You Drop», su entrega de Halloween dentro de la plataforma «Once You Pop, the Pop Don’t Stop», creada por BBDO New York y Weber Shandwick. El creador Dan the Funeral Man, un director de funeraria de verdad, cuenta con humor que el inventor de la lata fue enterrado en su propia invención. Los fans firman en línea un «Last Will and Taste-Ament» y uno gana una urna de metal con forma de lata, hecha pa’ uso real, más un suministro de Pringles pa’ 200 años. Las entradas abren el 13 de octubre y cierran el 22 de octubre a las 11:59 p.m. (hora del este de EE. UU.); el ganador se anuncia cerca de Halloween. La pieza corre en redes y video en línea.",
      cifras: [
        { v: "13–22 oct", t: "ventana pa’ firmar el «Last Will and Taste-Ament» en onceyoudrop.com" },
        { v: "200 años", t: "de suministro de Pringles pa’ el ganador, más la urna" },
        { v: "2", t: "agencias detrás: BBDO New York y Weber Shandwick" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La marca juega con un tema que casi nadie toca, pero lo hace con un creador que sabe del asunto y con un premio que de verdad existe. Es un buen referente de cómo un humor atrevido se cuida con un socio creíble y reglas claras.",
      hacer: "Esta semana, en la sesión creativa, escoger un cliente y esbozar una promoción de temporada donde el premio sea un objeto físico con la forma de su producto, con un creador de oficio que lo presente.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/pringles-offers-one-die-hard-fan-a-final-resting-place-in-a-branded-urn/" }]
    },
    {
      id: "chipotlebolsa", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Chipotle", "Gut"],
      titular: "Chipotle trata una bolsa de comida pa’ llevar como artículo de lujo, con Gut",
      corto: "Chipotle convierte su bolsa en artículo de lujo",
      cuerpo: "Chipotle lanzó una bolsa edición limitada de unas tres pies de ancho (36 por 24 por 12 pulgadas, 170 litros) pa’ promover sus Family Meals, que cuestan $10 por persona y sirven a cuatro o seis. La creatividad es de Gut, su nuevo socio creativo, y toma pistas de las campañas de alta moda: la bolsa aparece junto a objetos gigantes, como una trompeta y un árbol de Navidad. Hay un sorteo de varias semanas pa’ miembros del programa de recompensas en EE. UU. que compren un Family Meal en la app o la web. La bolsa lleva en inglés un nombre con una palabra fuerte; aquí no la repetimos.",
      cifras: [{ v: "$10", t: "por persona en el Family Meal, pa’ cuatro o seis" }],
      toca: "Agrandar un objeto cotidiano y tratarlo como pieza de lujo es una idea que se entiende sin texto. Sirve de referente pa’ marcas de comida que quieren empujar el consumo en grupo en temporada alta.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/chipotle-drops-a-big-a-bag-to-make-group-dining-a-bigger-deal/" }]
    },

    {
      id: "tiktokholiday", dep: "planning", peso: "principal",
      etiquetas: ["TikTok", "Navidad", "Temporada"],
      titular: "TikTok ya ve la Navidad: las búsquedas de joyas de oro subieron 1,134 % en septiembre",
      corto: "TikTok ya ve la Navidad en sus datos",
      cuerpo: "TikTok compartió datos de compras de fin de año. El contenido con #holidayshopping subió 263 % de agosto a septiembre; las búsquedas de joyas de oro subieron 1,134 %, las de anillos de ópalo 825 % y las de pijamas navideñas 297 %. Los usuarios de la app tienen 2.5 veces más probabilidad de comprar un artículo de lujo de regalo en Black Friday y Cyber Monday. Las ventas de coleccionables subieron 230 % interanual en octubre, y las ventas de TikTok Shop pasaron de $500 millones entre Black Friday y Cyber Monday de 2025. Son datos de la propia plataforma, de usuarios de EE. UU., y la nota no lista recomendaciones para marcas.",
      cifras: [
        { v: "+263 %", t: "del contenido #holidayshopping de agosto a septiembre" },
        { v: "+1,134 %", t: "búsquedas de joyas de oro en septiembre, mes a mes" },
        { v: "2.5×", t: "más probable comprar lujo de regalo en Black Friday y Cyber Monday" },
        { v: "$500M+", t: "ventas de TikTok Shop entre Black Friday y Cyber Monday de 2025" }
      ],
      hacer: "Esta semana, tomar a dos clientes con tienda en línea, pedirle a su rep de TikTok los datos de búsqueda de RD pa’ sus categorías, y comparar con estos de EE. UU. antes de fijar el calendario de Navidad.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-shares-holiday-sales-data/833191/" }]
    },
    {
      id: "blackfriday", dep: "planning", peso: "secundaria",
      etiquetas: ["Black Friday", "Búsqueda", "Reino Unido"],
      titular: "En el Reino Unido, las búsquedas de «Black Friday» bajan 36 % desde 2019, y suben las de «cuándo termina»",
      corto: "Black Friday: bajan las búsquedas en el Reino Unido",
      cuerpo: "Marketing Signals, una agencia de marketing de búsqueda, dice que las búsquedas de «Black Friday» en el Reino Unido bajaron 36 % frente a 2019, las de términos de ofertas 40 % y las de minorista más venta 68 %, mientras que las de fechas de venta subieron 39 % y la de «cuándo termina Black Friday» 439 %. Sugiere planear el presupuesto en todo noviembre y no en un solo fin de semana. PPC Land señala que la agencia no nombra la fuente de los volúmenes ni lista los 19 términos, que los costos por clic son estimados de Semrush y que la agencia vende los servicios que recomienda.",
      cifras: [
        { v: "−36 %", t: "búsquedas de «Black Friday» en el Reino Unido frente a 2019 (dato de la agencia)" },
        { v: "+439 %", t: "búsquedas de «cuándo termina Black Friday», sobre una base no publicada" }
      ],
      toca: "Los datos son del Reino Unido y de una agencia que vende lo que recomienda, no de RD. Sirven pa’ cuestionar la idea de un solo fin de semana, pero hay que mirar las búsquedas locales de tu cliente.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/black-friday-searches-drop-36-in-uk-since-2019-marketing-signals-finds/" }]
    },

    {
      id: "xandr", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Xandr", "GDPR"],
      titular: "Noruega le cae con NOK 92 millones a Xandr por los datos de usuarios de Grindr",
      corto: "Noruega multa a Xandr por datos de Grindr",
      cuerpo: "La autoridad de protección de datos de Noruega (Datatilsynet) multó a Xandr, la plataforma de anuncios antes llamada AppNexus y comprada por Microsoft en 2022, con NOK 92 millones (unos €8.6 millones), la multa más alta que ha puesto. La decisión es del 2 de octubre y se hizo pública el 12. Según la autoridad, Xandr recibió y pasó datos de usuarios de Grindr entre julio de 2018 y abril de 2020, y ser usuario de esa app revela orientación sexual, un dato de categoría especial que exige consentimiento explícito. Xandr, como corresponsable con Grindr, no comprobó que ese consentimiento existiera. La queja la presentaron en enero de 2020 el Consejo de Consumidores de Noruega y noyb. La multa se calculó sobre la facturación de Xandr, no la de Microsoft, y se redujo por la demora de la propia autoridad. Xandr tiene tres semanas para apelar. Estos son datos de la cobertura de PPC Land sobre la decisión.",
      cifras: [
        { v: "NOK 92 M", t: "multa a Xandr, ~€8.6 millones, la más alta de Datatilsynet" },
        { v: "Jul 2018–abr 2020", t: "período en que Xandr recibió datos de usuarios de Grindr" },
        { v: "3 semanas", t: "plazo que tiene Xandr pa’ apelar" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Quien recibe datos en una subasta de anuncios puede ser responsable del consentimiento, no solo la app que los recoge.",
        "Los datos que revelan orientación sexual, salud o religión pesan como datos sensibles, aunque lleguen como un ID de publicidad y una dirección IP."
      ],
      hacer: "Esta semana, pedir a los socios de compra programática de tus clientes que confirmen por escrito cómo comprueban el consentimiento cuando reciben datos de apps, y marcar las apps de categorías sensibles pa’ excluirlas.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/norway-fines-xandr-nok-92m-over-grindr-data-after-nearly-seven-years/" }]
    },
    {
      id: "eucookies", dep: "data", peso: "secundaria",
      etiquetas: ["Cookies", "Unión Europea", "Consentimiento"],
      titular: "Borrador del Consejo de la UE: tras un «no» a las cookies, esperar cuatro meses y no seis pa’ volver a preguntar",
      corto: "UE: cuatro meses pa’ volver a pedir cookies",
      cuerpo: "El borrador del Consejo de la UE del paquete Digital Omnibus acorta de seis a cuatro meses el tiempo que un sitio debe esperar antes de volver a pedir consentimiento de cookies a quien lo rechazó. Elimina la señal de consentimiento a nivel de navegador que proponía la Comisión y agrega una exención nueva pa’ medir la visualización y el rendimiento de publicidad contextual, siempre que los datos sean seudonimizados y no alimenten perfiles ni programática. Todavía no es ley: es un mandato de negociación de 163 páginas, y el Parlamento Europeo no ha fijado posición.",
      cifras: [
        { v: "4 meses", t: "espera propuesta tras un rechazo (antes seis)" },
        { v: "163", t: "páginas del mandato; todavía no es ley" }
      ],
      toca: "Si tu cliente tiene público europeo, el texto puede cambiar cómo se mide la publicidad contextual. Por ahora es solo un borrador, así que se sigue, no se actúa.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/eu-council-draft-cuts-cookie-consent-re-ask-wait-to-four-months/" }]
    },

    {
      id: "igreferencia", dep: "content", peso: "principal",
      etiquetas: ["Instagram", "Reels", "Edits"],
      titular: "Instagram estrena «Usar como referencia» en Reels y Meta le pone enlaces de audio a Edits",
      corto: "Instagram estrena «Usar como referencia» en Reels",
      cuerpo: "Instagram probó una función nueva pa’ Reels de menos de 90 segundos: tocas los tres puntos y eliges «Usar como referencia». El Reel de otro creador se abre en una ventana pequeña sobre la cámara, que puedes mover, pausar y ver las veces que quieras, y una cuenta regresiva ayuda a cuadrar tu clip con el original. Por ahora solo está en iOS. En la app Edits, Meta añadió enlaces a canciones y sonidos específicos dentro de los Reels, información de temas que mueven a tu audiencia (pa’ cuentas de más de 10,000 seguidores) y «Kits» pa’ guardar un estilo visual. Además, Instagram quitará el 28 de octubre la opción de enlazar Reels en serie, que se había agregado en agosto de 2025.",
      cifras: [
        { v: "90 s", t: "duración máxima de los Reels compatibles con «Usar como referencia»" },
        { v: "28 oct", t: "fecha en que Instagram quita el enlace de Reels en serie" },
        { v: "10,000", t: "seguidores mínimos pa’ ver los temas que mueven a tu audiencia en Edits" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "La función acorta el camino pa’ hacer una versión propia de un formato que ya funciona. Si tu equipo tiene series de Reels enlazados, tiene hasta el 28 de octubre pa’ reorganizarlas.",
      hacer: "Esta semana, revisar qué series de Reels enlazados tienen los clientes y apuntar cómo se van a presentar después del 28 de octubre, y probar «Usar como referencia» con un Reel propio que ya haya rendido bien.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-adds-audio-links-and-reference-reels-to-edits/833192/" }]
    },

    {
      id: "mastercard", dep: "rd", peso: "principal", para: ["planning", "medios", "data"],
      etiquetas: ["Pagos", "Mastercard", "Banca"], fecha: "15 oct 2026",
      titular: "Mastercard: solo 6 % de los comercios dominicanos acepta pagos digitales, y estrena en RD la tarjeta World Legend",
      corto: "Solo 6 % de los comercios acepta pagos digitales",
      cuerpo: "Santo Domingo.— Tomás Alonso Martínez, ejecutivo principal de Mastercard en RD, dijo que apenas 6 % de los comercios y vendedores acepta medios de pago digitales, y que ampliar eso requiere la participación conjunta de bancos, empresas de tarjetas, comercios y el Gobierno. En paralelo, Mastercard presentó World Legend, una tarjeta premium sobre la Black que, según la empresa, RD es el primer mercado del Caribe y Centroamérica en estrenar. Una encuesta de la compañía indica que el 60 % de los consultados del segmento premium valora más las experiencias que los bienes. Hay una alianza con Casa de Campo pa’ titulares dominicanos y extranjeros.",
      cifras: [
        { v: "6 %", t: "de los comercios y vendedores dominicanos acepta pagos digitales" },
        { v: "60 %", t: "del segmento premium consultado valora más las experiencias (encuesta de Mastercard)" },
        { v: "1.º", t: "mercado del Caribe y Centroamérica en estrenar World Legend, según la empresa" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "El dato da la medida de cuánto falta pa’ vender y cobrar en línea en el patio, y es un argumento pa’ clientes de banca y comercio. La encuesta premium es de la propia Mastercard.",
      hacer: "Esta semana, preguntarle a los clientes de comercio y de banca qué parte de sus ventas se cobra por medios digitales, y llevar una idea de comunicación pa’ el comercio que todavía no los acepta.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/385038/mastercard-plantea-ampliar-la-aceptacion-de-pagos-digitales-en-rd/" }]
    },
    {
      id: "esquina", dep: "rd", peso: "secundaria", para: ["creatividad", "content", "medios"],
      etiquetas: ["Cine", "Comedia dominicana"], fecha: "15 oct 2026",
      titular: "«La Esquina ’ta en Candela» llegará a los cines dominicanos el 5 de noviembre",
      corto: "«La Esquina ’ta en Candela» llega al cine el 5 de noviembre",
      cuerpo: "La nueva comedia dominicana, dirigida por Frank Perozo con guion de Kendy Yanoreth Calcaño, tiene a Raymond Pozo, Miguel Céspedes y Fausto Mata en el reparto. La distribuye Caribbean Films y se estrena el 5 de noviembre de 2026, según Remolacha, que firma la nota como Cinedominicano.",
      toca: "Un estreno de comedia local en noviembre es un buen gancho pa’ clientes que quieren sumarse con contenido o activaciones en cine. Si hay marcas aliadas, todavía no se han anunciado.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/la-esquina-ta-en-candela-llegara-a-los-cines-dominicanos-el-5-de-noviembre/" }]
    },
    {
      id: "sanz", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Música", "Conciertos"], fecha: "16 oct 2026",
      titular: "Alejandro Sanz vuelve a RD el 14 de noviembre con su gira «¿Y ahora qué?»",
      corto: "Alejandro Sanz vuelve a RD el 14 de noviembre",
      cuerpo: "El cantante español se presentará el 14 de noviembre en el Estadio de Béisbol del Centro Olímpico Juan Pablo Duarte, con su gira «¿Y ahora qué?». La nota no da precios, venta de boletas, productora ni patrocinadores.",
      toca: "Un concierto grande a mitad de noviembre mueve conversación en redes y pauta de entretenimiento. Para content, es un tema que mirar la semana del evento.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/alejandro-sanz-vuelve-a-rd-el-14-de-noviembre/" }]
    },
    {
      id: "feriaempleo", dep: "rd", peso: "secundaria", para: ["planning", "content"],
      etiquetas: ["Turismo", "Empleo"], fecha: "16 oct 2026",
      titular: "Una feria de empleo en La Romana ofreció 5,000 vacantes en turismo",
      corto: "Feria en La Romana ofreció 5,000 vacantes en turismo",
      cuerpo: "La Romana.— Según Remolacha, que cita a El Nacional, una feria de empleo ofreció 5,000 vacantes en el sector turístico y atrajo a miles de personas que dejaron sus perfiles y conversaron con reclutadores. El ministro Eddy Olivares dijo que la inteligencia artificial «jamás desplazará» el trato humano de los trabajadores del país, y el presidente de Asonahores, Juan (Papo) Bancalari, pidió prepararse técnicamente. La nota no nombra empresas ni da la fecha exacta.",
      toca: "Un sector que busca 5,000 trabajadores está esperando una temporada alta fuerte. Pa’ planning es una señal más pa’ los clientes de turismo y hotelería.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/feria-de-empleo-en-la-romana-ofrecio-5000-vacantes-en-turismo/" }]
    }
  ],

  pizarra: ["metabrowsing", "pringles", "tiktokholiday", "xandr", "igreferencia", "mastercard"],

  frases: [
    { dep: "medios", texto: "Meta prende la navegación de productos el 28 de octubre: si no la revisas tú, la decide otro por ti en plena temporada.", uso: "para conversaciones de Meta y Black Friday" },
    { dep: "creatividad", texto: "Pringles no regaló un premio: regaló una urna de lata, con un director de funeraria como vocero, y todo el mundo lo entendió.", uso: "para conversaciones de promociones de temporada" },
    { dep: "planning", texto: "TikTok dice que las búsquedas de joyas de oro subieron 1,134 % en septiembre: antes de citarlo, pídele el dato de RD.", uso: "para conversaciones de Navidad" },
    { dep: "data", texto: "Noruega multó a Xandr con NOK 92 millones: en una subasta de anuncios, el que recibe los datos también responde por el consentimiento.", uso: "para conversaciones de privacidad y programática" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Meta prende la navegación de productos el 28 de octubre" },
      { id: "creatividad", texto: "La urna de Pringles" },
      { id: "planning", texto: "TikTok y la Navidad" },
      { id: "data", texto: "Noruega multa a Xandr" },
      { id: "content", texto: "Instagram: «Usar como referencia»" },
      { id: "rd", texto: "Zoom a RD: solo 6 % de los comercios acepta pagos digitales" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "metabrowsing", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "tiktokholiday", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "TikTok ya ve la Navidad: el contenido de compras navideñas subió 263 % de agosto a septiembre. Antes de armar el calendario, pídele a tu rep los datos de RD."
    },
    data: {
      tipo: "secreto", nota: "xandr", titulo: "Destapa el expediente",
      texto: "Noruega multó a Xandr con [[NOK 92 millones]] por recibir y pasar datos de usuarios de Grindr entre [[julio de 2018 y abril de 2020]] sin comprobar el consentimiento."
    },
    rd: {
      tipo: "pregunta", nota: "mastercard", titulo: "La pregunta del patio",
      p: "Según Mastercard, ¿qué porcentaje de los comercios dominicanos acepta pagos digitales?",
      opciones: ["6 %", "16 %", "60 %"],
      correcta: 0,
      explicacion: "Es solo 6 %. El 60 % es otro dato: el de las personas del segmento premium consultadas que valoran más las experiencias que los bienes."
    }
  }
};
