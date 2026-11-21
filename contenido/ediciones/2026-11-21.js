/*
  El Pulso Publicitario · edición N.º 325 · 21 de noviembre de 2026
  ------------------------------------------------
  Estructura igual a la plantilla del 11 de septiembre (ediciones/2026-09-11.js).
*/
window.EDICION = {
  numero: 325,
  fechaISO: "2026-11-21",
  fecha: "Sábado 21 de noviembre 2026",
  fechaCorta: "21 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "La IA ya arma el carrito, reparte cupones y escoge creadores: tu trabajo es que la marca de tu cliente esté ahí cuando decida.",
    largo: "Esta semana Google metió carritos de supermercado dentro de AI Mode y Gemini, los buscadores con IA empezaron a enseñar cupones en la respuesta, Snapchat puso una IA a emparejar marcas con creadores y Brasil le dijo a la IA generativa que se presume que los muchachos la usan. Y en el patio, Fernando Villalona recreó con IA su actuación de 1971. La IA está decidiendo cada vez más cosas por la gente; el consejo de hoy es revisar, cuenta por cuenta, en cuál de esas decisiones tu cliente no aparece, y ponerle dueño a esa tarea antes del viernes negro.",
    corto: "Revisa en qué respuestas de IA no aparece tu cliente y ponle dueño a esa tarea antes del 27.",
    porDep: {
      medios: "Si tu cliente vende en un súper o tienda grande, pregunta cómo se ve su producto cuando la IA arma el carrito, no solo cuando alguien lo busca.",
      creatividad: "En temporada de ofertas, la idea que se queda es la que le cambia el sentido a la oferta. Busca el giro antes de bajar el precio.",
      planning: "Si la IA reparte cupones, el descuento deja de ser secreto: planifica la promo pensando que la va a encontrar cualquiera.",
      data: "Si una plataforma de tu cliente la pueden usar menores, el perfilado pa’ anuncios es un riesgo. Documenta cómo lo evitas.",
      content: "Antes de escoger un creador con IA, escribe bien a quién buscas. La herramienta es tan buena como la descripción que le das.",
      rd: "La semana del merengue y del viernes negro es la misma: cuadra un calendario que junte cultura y oferta sin que una tape a la otra."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Google arma carritos de Target y Albertsons dentro de AI Mode y Gemini · Amazon pide video 1080p y 50 Mbps pa’ su beta de compra en vivo · Ampersand le pasa las agencias independientes a Comcast y Spectrum Reach" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "BARK cambia las ofertas del viernes negro por perros en adopción con nombre de electrodoméstico · Meta vende sus lentes inteligentes como el regalo pa’ vivir el momento" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Alibaba y Temu recortan mercadeo mientras los buscadores con IA reparten cupones · Meta estrena Achados, su app de compras, en Brasil" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Brasil nombra ocho tipos de plataforma que se presume usan los menores, IA generativa incluida · AWS mete filtros de fraude dentro de la subasta" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Snapchat abre en beta su red de creadores con IA que empareja marcas y creadores · Threads prueba preguntas votadas en sus chats en vivo" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Fernando Villalona recrea con IA su actuación de 1971 · Merengue de tres días en el Faro a Colón · Arajet se va pa’ Venezuela · Port Samaná abre el 24 · Carrefour con 500 vinos · Los colmados le piden cambios a la facturación electrónica" }
  },

  notas: [
    {
      id: "googlecarrito", dep: "medios", peso: "principal",
      etiquetas: ["IA", "Google", "Retail media"],
      hilo: "La IA que decide",
      titular: "Google mete el carrito del súper dentro de AI Mode y Gemini, y el retail media se queda mirando",
      corto: "Google arma el carrito del súper con IA",
      cuerpo: "Desde el 20 de noviembre, Google activó en Estados Unidos las Connected Apps de cuatro supermercados (Albertsons, Safeway, Shaw’s y Target) dentro de AI Mode en Search y de la app de Gemini. Tú le dices qué necesitas y la IA te arma el pedido con productos de esa tienda. Google no dijo si va a haber anuncios en ese flujo ni cómo escoge los productos, y su política de Connected Apps no deja que los socios metan publicidad de terceros en la integración.",
      cifras: [
        { v: "4", t: "supermercados conectados: Albertsons, Safeway, Shaw’s y Target" },
        { v: "50+", t: "Connected Apps que Google ya tiene en Search y Gemini" },
        { v: "US$296M", t: "ingreso publicitario de Target en su tercer trimestre" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Las redes de retail media venden visibilidad donde el comprador mira y escoge. Si la IA escoge por él y arma el carrito, ese espacio patrocinado puede quedarse sin ojos. Es una pregunta nueva pa’ cualquier plan con presupuesto en retail media.",
      hacer: "Esta semana, con cada cliente que pauta en retail media, prueba en AI Mode o Gemini una lista típica de su categoría y anota si su producto entra en la respuesta. Lleva ese pantallazo a la próxima reunión.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-puts-target-and-albertsons-grocery-carts-inside-search-and-gemini/" }]
    },
    {
      id: "amazonlive", dep: "medios", peso: "secundaria",
      etiquetas: ["Amazon Ads", "Compra en vivo"],
      titular: "Amazon pide 50 Mbps y video 1080p pa’ entrar a su beta de compra en vivo",
      corto: "Amazon Live pide 1080p y 50 Mbps",
      cuerpo: "Amazon Ads actualizó el 20 de noviembre las páginas de Amazon Live, su formato beta de transmisiones en vivo con compra dentro de las Brand Stores. Pide al menos 50 Mbps de subida y bajada, video de 1920 x 1080 a 30 cuadros por segundo y de dos a tres ángulos de cámara. Se pueden destacar hasta 5 productos y mostrar hasta 10, con uno a tres minutos por producto. La transmisión se promueve con Sponsored Brands, Display o DVA+. Por ahora es solo pa’ anunciantes escogidos en EE. UU.",
      cifras: [
        { v: "50 Mbps", t: "velocidad mínima de subida y bajada" },
        { v: "1080p", t: "resolución recomendada, a 30 cuadros por segundo" },
        { v: "10", t: "productos máximos por transmisión, 5 destacados" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "La compra en vivo deja de ser cosa de influencer con un celular: Amazon la trata como formato publicitario con requisitos de producción y pauta pa’ empujarla.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazons-live-shopping-beta-asks-brands-for-50-mbps-and-1080p-video/" }]
    },
    {
      id: "ampersand", dep: "medios", peso: "secundaria",
      etiquetas: ["TV", "Ampersand", "Agencias"],
      titular: "Ampersand le pasa las agencias independientes a Comcast y Spectrum Reach desde enero",
      cuerpo: "Ampersand, la plataforma de TV que nació en 2019 como empresa conjunta de Comcast, Charter y Cox, avisó a sus clientes que desde el 1 de enero de 2027 su negocio con agencias independientes pasa a Comcast Advertising y a Spectrum Reach, de Charter. Se queda con los holdings de agencias y con la publicidad política. La empresa negó que vaya a cerrar y dijo que sigue operando en 2027.",
      cifras: [
        { v: "1 ene 2027", t: "fecha del traspaso de las agencias independientes" },
        { v: "US$12,060M", t: "gasto político antes de las elecciones de medio término de 2026, según AdImpact" }
      ],
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/tv-2/ampersand-is-offloading-its-indie-agency-business-to-comcast-and-spectrum-following-mass-layoffs/" }]
    },

    {
      id: "barkperros", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "BARK", "Viernes negro"],
      titular: "BARK le pone a perros en adopción los nombres de lo más buscado del viernes negro: Air Fryer, Robot Vacuum y Headphones",
      corto: "BARK cambia ofertas por perros en adopción",
      cuerpo: "BARK, la marca de cajas y juguetes pa’ perros, juntó a más de 50 perros de PupStarz Rescue, en Nueva York, y les puso nombres de las búsquedas más populares del viernes negro: Air Fryer, un Sheltie mezclado de dos años; Robot Vacuum, de seis años, que te sigue por to’a la casa, y otros como Mini Fridge o Espresso Machine. El 27 de noviembre la portada de BARK.co cambia la tienda por la vitrina de los perros. La marca paga hasta US$575 de la cuota de adopción de los primeros 60. La pauta va en Google, Meta, afiliados y exterior.",
      cifras: [
        { v: "50+", t: "perros en adopción con nombre de producto del viernes negro" },
        { v: "US$575", t: "de cuota de adopción cubierta por perro, pa’ los primeros 60" },
        { v: "US$24.5M", t: "lo que BARK recortó en mercadeo en su año fiscal 2026" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "En la semana en que to’ el mundo grita descuento, BARK se roba la conversación usando el mismo lenguaje de las ofertas pa’ algo que no se compra. Y lo hace con menos presupuesto: la idea carga el peso.",
      hacer: "Taller de 45 minutos esta semana: toma las cinco palabras que más busca la gente de tu cliente en el viernes negro y piensa cómo darle a una de ellas un giro con causa o con humor.",
      fuentes: [{ nombre: "DesignRush", url: "https://news.designrush.com/bark-black-friday-rescue-dogs-marketing-budget-pupstarz" }]
    },
    {
      id: "metalentes", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Meta", "Navidad"],
      titular: "Meta vende sus lentes inteligentes como el truco pa’ ver la obra de Navidad del muchacho sin el celular en la cara",
      corto: "Meta: lentes pa’ vivir la obra de Navidad",
      cuerpo: "Meta estrenó «Stay in the Moment», su campaña navideña hecha por Mother LA. Le habla a los padres que graban la obra de Navidad de la escuela detrás de la pantalla del celular y les propone grabar con sus lentes inteligentes sin dejar de mirar. Muestra Meta Glasses, Ray-Ban Meta y Ray-Ban Meta Audio, y corre en redes y exterior.",
      cifras: [
        { v: "7M+", t: "lentes inteligentes que Meta vendió en 2025, entre Ray-Ban y Oakley" }
      ],
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/metas-holiday-ad-pitches-its-smart-glasses-as-the-secret-to-present-parenting/" }]
    },

    {
      id: "alibabatemu", dep: "planning", peso: "principal",
      etiquetas: ["Comercio", "Alibaba", "Temu", "IA"],
      hilo: "La IA que decide",
      titular: "Alibaba y Temu le meten tijera al mercadeo, y los buscadores con IA empiezan a repartir cupones",
      corto: "Alibaba y Temu recortan; la IA reparte cupones",
      cuerpo: "En el trimestre cerrado el 30 de septiembre, Alibaba bajó 38 % sus gastos de ventas y mercadeo, a RMB41,300 millones, y PDD, la dueña de Temu, los bajó 16.6 %, a RMB25,300 millones. Al mismo tiempo, Google, ChatGPT y otros buscadores con IA ya están enseñando códigos de cupón directo en la respuesta, justo antes del viernes negro del 27 de noviembre.",
      cifras: [
        { v: "−38 %", t: "gasto de ventas y mercadeo de Alibaba en el trimestre" },
        { v: "−16.6 %", t: "gasto de ventas y mercadeo de PDD, la dueña de Temu" },
        { v: "+53 %", t: "lo que crecieron los ingresos de nube e IA de Alibaba" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Dos de los anunciantes más agresivos del mundo están gastando menos en mercadeo y más en IA. Y si los cupones aparecen en la respuesta del chatbot, la promo deja de ser exclusiva del canal donde la pusiste.",
      hacer: "Antes del jueves, revisa los códigos de descuento de los clientes de comercio electrónico para el viernes negro: pregúntale a ChatGPT y a Google por cupones de cada marca y anota cuáles salen y si están vigentes.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/alibaba-and-temu-cut-marketing-as-ai-engines-start-handing-out-coupons/" }]
    },
    {
      id: "achados", dep: "planning", peso: "secundaria",
      etiquetas: ["Meta", "Brasil", "Comercio"],
      titular: "Meta estrena Achados en Brasil: Marketplace, grupos e Instagram en un solo feed de compras",
      corto: "Meta lanza su app de compras en Brasil",
      cuerpo: "Meta lanzó en Brasil Achados, una app de compras solo pa’ Android que junta en un mismo feed lo que se vende en Marketplace, en grupos de Facebook y en Instagram. Trae un comparador de precios contra productos parecidos en las apps de Meta y deja ver el perfil, las reseñas y el historial de ventas del vendedor.",
      cifras: [
        { v: "6", t: "apps nuevas que Meta ha lanzado en 2026, la mayoría de IA" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Meta escoge a América Latina pa’ probar comercio entre personas. Si funciona en Brasil, la región es la próxima parada.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-launches-shopping-platform-in-brazil/875290/" }]
    },

    {
      id: "brasilanpd", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "Brasil", "Menores", "IA"],
      titular: "Brasil le dice a la IA generativa, a las redes y a los videojuegos: se presume que los muchachos los usan",
      corto: "Brasil: la IA se presume usada por menores",
      cuerpo: "La ANPD, la autoridad de datos de Brasil, publicó en inglés sus guías del ECA Digital (Ley 15,211, vigente desde el 17 de marzo de 2026). Nombra ocho tipos de plataforma que se presume usan niños y adolescentes, entre ellas redes sociales, tiendas de apps, videojuegos y sistemas de IA generativa. Las redes no pueden perfilar a menores pa’ publicidad dirigida y las cuentas de hasta 16 años deben estar ligadas a un tutor. La ley aplica aunque la empresa esté fuera de Brasil.",
      cifras: [
        { v: "8", t: "tipos de plataforma que se presume usan los menores" },
        { v: "R$50M", t: "multa máxima por infracción" },
        { v: "96 %", t: "de los internautas de 9 a 17 años en Brasil se conectó por celular en 2025" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Verificar la edad no te saca del alcance de la ley: la plataforma sigue teniendo que prevenir y documentar riesgos.",
        "Los patrones oscuros en la interfaz quedan prohibidos, y eso toca también formularios y flujos de compra."
      ],
      hacer: "Esta semana, haz una lista de las campañas de tus clientes que corren en Brasil o en plataformas que usan menores y confirma que ninguna segmenta por intereses a menores de 18.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/brazils-anpd-names-8-platform-types-presumed-to-face-child-safety-law/" }]
    },
    {
      id: "awsfraude", dep: "data", peso: "secundaria",
      etiquetas: ["Fraude", "AWS", "Programática"],
      titular: "AWS mete filtros de fraude y datos de dispositivo dentro de la subasta",
      corto: "AWS filtra fraude antes de la puja",
      cuerpo: "Desde el 19 de noviembre, AWS ofrece en su Marketplace módulos que se enganchan a RTB Fabric pa’ filtrar o enriquecer las solicitudes de puja antes de que lleguen al comprador. Arrancan con Pixalate (bloqueo de tráfico inválido y datos de programas de CTV), WURFL (señales de dispositivo) y Picnic (calidad de inventario con más de 100 señales). Pixalate dice que filtrar antes de pujar ahorra hasta 15 % de cómputo desperdiciado. Si un módulo falla, la puja sigue sin su resultado.",
      cifras: [
        { v: "3", t: "proveedores de arranque: Pixalate, WURFL y Picnic" },
        { v: "15 %", t: "de cómputo desperdiciado que Pixalate dice ahorrar" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/aws-puts-fraud-filters-and-device-data-inside-the-ad-auction/" }]
    },

    {
      id: "snapcreadores", dep: "content", peso: "principal",
      etiquetas: ["IA", "Snapchat", "Creadores"],
      titular: "Snapchat abre su red de creadores con IA: describes al creador que buscas y te sugiere los que pegan",
      corto: "Snapchat empareja marcas y creadores con IA",
      cuerpo: "Snapchat abrió en beta la nueva Snap Creator Network, que usa IA pa’ emparejar marcas con creadores: el anunciante describe el creador que quiere y la red le sugiere los que mejor encajan. También estrena «Visited By» en Snap Map, que marca los lugares donde grabaron los creadores que sigues, y amplía su programa de agencias con dos niveles, Standard y Strategic, en EE. UU., Reino Unido y Medio Oriente y Norte de África.",
      cifras: [
        { v: "450M", t: "personas que usan Snap Map cada mes" },
        { v: "2", t: "niveles del programa de agencias: Standard y Strategic" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "La búsqueda de creadores ya no empieza con una hoja de Excel sino con una descripción. Quien sepa escribir bien el perfil del creador ideal va a sacar mejores sugerencias.",
      hacer: "Antes del miércoles, escribe para un cliente el perfil del creador ideal en tres líneas (audiencia, tono y formato) y úsalo de base pa’ la próxima búsqueda de creadores, en Snapchat o donde sea.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/snapchat-adds-more-creator-partnership-opportunities/875141/" }]
    },
    {
      id: "threadsqa", dep: "content", peso: "secundaria",
      etiquetas: ["Threads", "En vivo"],
      titular: "Threads prueba preguntas votadas en sus chats en vivo, al estilo de un AMA",
      corto: "Threads prueba preguntas votadas en vivo",
      cuerpo: "Threads está probando una opción de preguntas y respuestas en algunos chats en vivo: el anfitrión recoge preguntas y el chat vota cuál se contesta. Las respuestas las ve todo el mundo. El formato se parece a los AMA de Reddit y podría servirles a las marcas pa’ armar chats curados con su audiencia.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/threads-tests-new-qa-option-in-live-chats/875287/" }]
    },

    {
      id: "villalonaia", dep: "rd", peso: "principal", para: ["creatividad", "content"],
      etiquetas: ["IA", "Música", "Merengue"], fecha: "20 nov 2026",
      titular: "¡Wepa! Fernando Villalona recrea con IA su actuación de 1971 en el Festival de la Voz",
      corto: "Villalona revive con IA su actuación de 1971",
      cuerpo: "Fernando Villalona usó inteligencia artificial pa’ recrear su actuación en el Festival de la Voz del 18 de julio de 1971, cuando tenía 16 años y cantó «Lágrimas para un recuerdo». De esa noche solo se conservaban seis segundos de grabación. El video lo produjeron Juan Mejía y Edwinfilms, con remasterización musical de Marco Félix; lo presentó en su Instagram @elmayimbe y está en YouTube en 4K. Villalona lo llamó «un sueño cumplido».",
      cifras: [
        { v: "1971", t: "año de la actuación original en el Festival de la Voz" },
        { v: "6 segundos", t: "lo único que se conservaba de la grabación" },
        { v: "4K", t: "resolución del video en YouTube" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Es IA usada con permiso, con el artista al frente y pa’ rescatar un recuerdo que se había perdido. Ese es el uso que la gente aplaude, y le abre la puerta a marcas con historia que tienen archivos incompletos.",
      hacer: "Esta semana, pregúntale a un cliente con historia qué momento de su marca no tiene ni foto ni video, y lleva una propuesta de recreación con IA con permisos claros y créditos a la vista.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/20/festival-de-la-voz-fernando-villalona-recrea-su-actuacion-historica/3726956" }]
    },
    {
      id: "merengue", dep: "rd", peso: "secundaria", para: ["content", "planning", "medios"],
      etiquetas: ["Música", "Merengue", "Agenda"], fecha: "26 – 28 nov 2026",
      titular: "El merengue se celebra en grande: tres días en el Faro a Colón y gala en el Teatro Nacional",
      corto: "Tres días de merengue en el Faro a Colón",
      cuerpo: "Pa’l Día Nacional del Merengue, el 26 de noviembre, Alberto Cruz Management monta «Merengueros, el Festival» del 26 al 28 de noviembre en el Faro a Colón, desde las 6:00 p. m., con Wilfrido Vargas, Fernando Villalona, Toño Rosario, Los Hermanos Rosario, Bonny Cepeda y Kinito Méndez, entre muchos otros. Ese mismo 26, el Ministerio de Cultura hace una gala de homenaje en la Sala Carlos Piantini del Teatro Nacional, con actividades también en Santiago.",
      fuentes: [
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/20/dia-nacional-del-merengue-en-santo-domingo-con-festival-merengue/3727054" },
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/20/dia-nacional-del-merengue-musica-y-homenajes-en-el-teatro-nacional/3726770" }
      ]
    },
    {
      id: "arajetvenezuela", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Aviación", "Turismo", "Arajet"], fecha: "20 nov 2026",
      titular: "Arajet se va pa’ Caracas y Valencia desde abril de 2027",
      corto: "Arajet volará a Caracas y Valencia",
      cuerpo: "Arajet anunció siete vuelos semanales desde Las Américas a Venezuela: Caracas desde el 1 de abril de 2027, con cuatro frecuencias, y Valencia desde el 2 de abril, con tres. Ya vende boletos con tarifas de lanzamiento y piensa sumar conexiones directas entre Venezuela y Punta Cana. La aerolínea dice que ha llevado más de cuatro millones de pasajeros desde 2022.",
      cifras: [
        { v: "7", t: "vuelos semanales entre Santo Domingo y Venezuela" },
        { v: "4M+", t: "pasajeros que Arajet dice haber transportado" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/turismo/2026/11/20/arajet-comenzara-a-volar-a-caracas-y-valencia-en-2027/3726880" }]
    },
    {
      id: "portsamana", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Turismo", "Cruceros", "Samaná"], fecha: "24 nov 2026",
      titular: "Port Samaná abre el martes con más de US$68 millones y la mira en un millón de cruceristas",
      corto: "Port Samaná abre el 24 de noviembre",
      cuerpo: "La terminal de cruceros Port Samaná, en Arroyo Barril, se inaugura el martes 24 de noviembre con una inversión privada inicial de más de US$68 millones. La opera PDAB Port Investments, ligada al Grupo ITM, con un contrato de 33 años. El primer barco es el MSC Opera, con unos 2,000 pasajeros, y Apordom proyecta 230,000 visitantes en 2027 y un millón al año en 2030.",
      cifras: [
        { v: "US$68M+", t: "inversión privada inicial" },
        { v: "230,000", t: "cruceristas proyectados en 2027" },
        { v: "1 millón", t: "visitantes al año que Apordom proyecta pa’ 2030" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/turismo/2026/11/20/port-samana-abrira-con-inversion-de-mas-de-us68-millones/3727217" }]
    },
    {
      id: "carrefourvinos", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Consumo", "Navidad", "Carrefour"], fecha: "19 nov 2026",
      titular: "Carrefour arranca su Feria de Vinos con más de 500 etiquetas, frente a más de 350 el año pasado",
      corto: "Carrefour: 500 vinos en su feria",
      cuerpo: "Carrefour República Dominicana inauguró su Feria de Vinos 2026 en Plaza Duarte con más de 500 referencias internacionales, frente a más de 350 el año pasado. Trae degustaciones guiadas, 10 % adicional sobre el precio de promoción en la apertura (menos espumosos) y devoluciones de hasta 20 % con tarjetas Banreservas participantes.",
      cifras: [
        { v: "500+", t: "referencias de vino, frente a 350+ en 2025" },
        { v: "20 %", t: "de devolución máxima con tarjetas Banreservas participantes" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/11/19/carrefour-celebra-feria-de-vinos-2026/3726035" }]
    },
    {
      id: "facturacion", dep: "rd", peso: "secundaria", para: ["data", "planning"],
      etiquetas: ["Comercio", "DGII", "Colmados"], fecha: "19 nov 2026",
      titular: "Los colmados no quieren la facturación electrónica como está y piden un pago fijo por categoría",
      corto: "Colmados piden cambios a la e-factura",
      cuerpo: "Antonio Cruz Rojas, presidente de Conacerd, dijo que micro y pequeños comercios no quieren entrar a la facturación electrónica de la Ley 32-23 como está. Propone que la ley siga pa’ las medianas y grandes y que la DGII use su clasificación de colmados de la A a la E pa’ cobrarles un monto fijo y simple. La DGII ya había extendido el plazo pa’ los micro y pequeños contribuyentes.",
      cifras: [
        { v: "28", t: "funciones que hace el dueño de un colmado, según Conacerd" },
        { v: "A–E", t: "categorías en que la DGII ya clasifica a los colmados" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/11/19/pequenos-comercios-plantean-cambios-a-la-facturacion-electronica/3725687" }]
    }
  ],

  pizarra: ["googlecarrito", "barkperros", "alibabatemu", "brasilanpd", "snapcreadores", "villalonaia"],

  frases: [
    { dep: "medios", texto: "Si la IA arma el carrito del súper, el anuncio en la góndola digital tiene que ganarse un puesto en la respuesta.", uso: "para conversaciones de retail media e IA" },
    { dep: "creatividad", texto: "BARK le puso Air Fryer a un perro y convirtió la búsqueda más repetida del viernes negro en una adopción.", uso: "para conversaciones de ideas en temporada de ofertas" },
    { dep: "planning", texto: "Cuando la IA reparte los cupones, el descuento deja de ser secreto y la promo se planifica pa’ que la encuentre cualquiera.", uso: "para conversaciones de promociones y comercio electrónico" },
    { dep: "data", texto: "En Brasil, verificar la edad no te saca del alcance de la ley: si los muchachos pueden usarla, la plataforma tiene que cuidarlos.", uso: "para conversaciones de regulación y menores" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "El carrito del súper dentro de AI Mode" },
      { id: "creatividad", texto: "Los perros de BARK con nombre de oferta" },
      { id: "planning", texto: "Alibaba y Temu recortan; la IA reparte cupones" },
      { id: "data", texto: "Brasil y los menores en la IA" },
      { id: "content", texto: "La red de creadores con IA de Snapchat" },
      { id: "rd", texto: "Zoom a RD: Villalona revive 1971 con IA" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "googlecarrito", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "alibabatemu", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "El viernes negro cae el 27 de noviembre y los buscadores con IA ya enseñan cupones en la respuesta: revisa esta semana qué códigos de tus clientes aparecen y si siguen vigentes."
    },
    data: {
      tipo: "secreto", nota: "brasilanpd", titulo: "Destapa el expediente",
      texto: "La ANPD de Brasil nombra [[ocho tipos de plataforma]] que se presume usan los menores, IA generativa incluida, y la multa puede llegar a [[R$50 millones por infracción]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "snapcreadores", titulo: "Describe a tu creador ideal",
      intro: "La red de creadores de Snapchat te sugiere creadores a partir de una descripción. Ayúdame a escribir la mejor descripción pa’ mi cliente:",
      opciones: [
        "Describe en tres líneas el creador ideal: audiencia, tono y formato",
        "Dime qué señales de un creador indican que su audiencia es la de mi cliente",
        "Escríbeme cinco preguntas pa’ filtrar a los creadores que me sugiera la herramienta"
      ],
      cierre: "Señala qué parte de la descripción tengo que confirmar con datos reales del cliente antes de usarla."
    },
    rd: {
      tipo: "pregunta", nota: "villalonaia", titulo: "La pregunta del patio",
      p: "¿Cuántos segundos se conservaban de la actuación de Villalona en el Festival de la Voz de 1971?",
      opciones: ["Seis segundos", "Treinta segundos", "Un minuto"], correcta: 0,
      explicacion: "Solo quedaban seis segundos. Con IA, Juan Mejía y Edwinfilms recrearon la actuación completa, y está en YouTube en 4K."
    }
  }
};
