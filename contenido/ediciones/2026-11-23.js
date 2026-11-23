/*
  El Pulso Publicitario · edición N.º 327 · 23 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 327,
  fechaISO: "2026-11-23",
  fecha: "Lunes 23 de noviembre 2026",
  fechaCorta: "23 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "En la semana del Black Friday, lo que no puedes ver no lo puedes cobrar: pide el dato antes de mover el presupuesto.",
    largo: "Arranca la semana más cargada del año y las noticias van por el mismo camino: ChatGPT escribe sus propias búsquedas pa’ servir anuncios y al anunciante solo le da totales, una red de cajitas de TV infectadas fingía ser apps de streaming, y YouTube va a contar más gente frente a la TV con un estimado. Mientras, las marcas le meten entre 10 % y 30 % más a la pauta digital del Black Friday. El consejo es sencillo: antes de subirle a cualquier canal esta semana, pregunta qué dato te van a dar pa’ comprobar lo que compraste.",
    corto: "Antes de subirle a un canal esta semana, pregunta qué dato te dan pa’ comprobar lo que compraste.",
    porDep: {
      medios: "Si un canal no te da el detalle de dónde salió tu anuncio, trátalo como prueba con tope, no como línea fija del plan.",
      creatividad: "Jell-O y Philadelphia salieron a buscar ideas en lo que la gente ya cocina en redes: mira qué hace tu público con el producto antes del brief.",
      planning: "El Black Friday ya no es un viernes: reparte el presupuesto en la temporada completa y deja reserva pa’l 27 y el 30.",
      data: "Pide a tus proveedores de verificación su lectura sobre BADBOX 3.0 y cuánto inventario CTV marcaron como inválido.",
      content: "En X el video se lleva el 36 % de las impresiones: si tu cliente está ahí, que suba video vertical con subtítulos y portada escogida.",
      rd: "La semana del Black Friday en RD se mueve con la devolución de los bancos: el cliente que no esté en esas ferias se queda fuera de la conversación."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "ChatGPT escribe sus propias búsquedas pa’ servir anuncios y el anunciante solo ve totales · YouTube suma a los que ven en grupo en la TV" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Jell-O estrena «Oh Hello, Jell-O», su mayor inversión en más de una década · Phillyboy reparte queso crema pa’ la Navidad de Philadelphia" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Las marcas le suben entre 10 % y 30 % a lo digital en Black Friday y Cyber Monday · El modelo híbrido le gana al in-house total" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "BADBOX 3.0: 40,000 millones de pujas falsas al día en CTV · Colorado congela la aplicación de su ley de IA mientras corre el pleito con xAI" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "X estrena subtítulos, portadas y formato vertical pa’l video · TikTok lanza un verificador de contenido hecho con su IA" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Los bancos arrancan la semana del Black Friday con devoluciones · Multiplaza llega a Mao · Panorama transmite el Duelo del Caribe · Ventas navideñas flojas en la calle" }
  },

  notas: [
    {
      id: "chatgptconsultas", dep: "medios", peso: "principal",
      etiquetas: ["IA", "ChatGPT Ads", "Transparencia"],
      titular: "ChatGPT escribe sus propias búsquedas pa’ servir anuncios, y el anunciante no las ve",
      corto: "ChatGPT inventa la búsqueda que activa tu anuncio",
      cuerpo: "Tres ejecutivos de OpenAI le contaron a Adweek cómo funciona el sistema de anuncios de ChatGPT: un agente de IA que llaman «orquestador» lee la conversación, y hasta chats anteriores del usuario, para deducir qué quiere comprar. Con eso escribe sus propias consultas de búsqueda, ordena los anuncios que encuentra y manda los mejores a una subasta que pesa la puja contra lo útil que sería el anuncio. Los anunciantes solo reciben reportes agregados, sin el detalle de qué conversación activó cada anuncio, y por eso muchos lo siguen tratando como dinero de prueba. Según los compradores, el CTR de ChatGPT va por debajo del de Google.",
      cifras: [
        { v: "US$1,000M", t: "de ingresos publicitarios anualizados de OpenAI, cifra que según sus ejecutivos ya se quedó corta" },
        { v: "Febrero", t: "mes en que arrancaron los anuncios en ChatGPT" },
        { v: "Solo totales", t: "lo que ve el anunciante: nada de reporte por conversación" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "En search tú escoges la palabra clave; aquí la escoge la máquina leyendo la conversación. Si no sabes qué búsqueda activó tu anuncio, no puedes optimizar ni explicarle al cliente por qué salió donde salió.",
      hacer: "Esta semana, ponle tope fijo y KPI propio a cualquier prueba en ChatGPT Ads, y en el reporte al cliente sepárala del search de Google.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/media/chatgpts-agent-writes-its-own-queries-to-serve-ads-advertisers-dont-get-to-see-them/" }]
    },
    {
      id: "youtubecoview", dep: "medios", peso: "secundaria",
      etiquetas: ["CTV", "YouTube", "Medición"],
      titular: "YouTube va a contar a to’ el que esté frente a la TV, no solo a uno por sesión",
      corto: "YouTube suma a los que ven en grupo en la TV",
      cuerpo: "YouTube empezó a sumar «co-views» a sus cifras de CTV: en vez de contar un solo espectador por sesión en el televisor, añade espectadores estimados según demografía, género del video y hora del día, alineándose con cómo estiman audiencia las cadenas de TV y streaming. Es un estimado, porque YouTube no puede saber cuánta gente hay de verdad en la sala. Los conteos históricos no cambian; solo se aplica a las vistas nuevas en TV. Hoy se ven más de 1,000 millones de horas de YouTube al día en televisores.",
      cifras: [
        { v: "1,000M+", t: "horas de YouTube que se ven cada día en televisores" },
        { v: "Estimado", t: "los co-views salen de un modelo, no de un conteo real" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Los números de YouTube en TV van a subir sin que cambie la pauta. Si comparas contra el año pasado, tienes que aclarar que la vara de medir cambió.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-adds-co-view-counts-to-ctv-metrics/875425/" }]
    },

    {
      id: "jello", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Jell-O", "Identidad sonora"],
      titular: "Jell-O se reinventa con «Oh Hello, Jell-O», su mayor inversión en más de una década",
      corto: "Jell-O estrena su plataforma más grande en una década",
      cuerpo: "Jell-O, de Kraft Heinz, lanzó este lunes «Oh Hello, Jell-O», una plataforma creativa pa’ que la gente la vea como ingrediente y no solo como el postre de la infancia. La idea sale de lo que cocineros caseros ya hacen en redes: echarle Jell-O al bizcocho de caja, a las galletas, al yogur y al tiramisú. Son dos spots de 15 segundos en cocinas monocromáticas con una transición al estilo de las redes, dirigidos por Drew Kirsch, con una canción original que usa la frase como gancho. Es la primera campaña de Johannes Leonardo pa’ la marca, incluye su primera compra de CTV y esta semana se toma la Sphere de Las Vegas.",
      cifras: [
        { v: "Casi 130 años", t: "tiene la marca que ahora quiere salir del plato de gelatina" },
        { v: "2 × 15 s", t: "spots con transición estilo redes" },
        { v: "1.ª", t: "compra de CTV de la marca" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Dos lecciones en una: el insight salió de mirar qué hace la gente con el producto en redes, y en vez de alquilar una canción, la marca se hizo un sonido propio que puede usar en to’ lo demás.",
      hacer: "Esta semana, revisa en TikTok e Instagram qué hace la gente con el producto de un cliente y lleva tres usos inesperados al próximo brief.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/how-jell-o-new-creative-platform-looks-to-shift-consumer-perceptions/875220/" }]
    },
    {
      id: "phillyboy", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Navidad", "Philadelphia", "Personaje de marca"],
      titular: "Phillyboy, el vaquero de Philadelphia, sale a repartir queso crema como si fuera Santa",
      corto: "Phillyboy reparte queso crema en Navidad",
      cuerpo: "Philadelphia extiende a la Navidad su plataforma «Really Philly Good» con dos spots de 15 segundos en los que su vaquero Phillyboy llega montado en una vaca a las casas pa’ dejar un bloque de queso crema pa’l cheesecake. La marca le sube 15 % a su inversión navideña, con más de 100 piezas nuevas, una integración con Ina Garten, un lente de realidad aumentada en Snapchat, una experiencia en Pinterest y creadores en TikTok e Instagram. La razón: un tercio de los bloques se vende en noviembre y diciembre.",
      cifras: [
        { v: "+15 %", t: "de inversión navideña frente al año pasado" },
        { v: "1/3", t: "de los bloques de queso crema se vende en noviembre y diciembre" },
        { v: "100+", t: "piezas nuevas de contenido" }
      ],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/philadelphia-whips-up-bigger-holiday-marketing-spend-amid-brand-revamp/875325/" }]
    },

    {
      id: "blackfriday", dep: "planning", peso: "principal",
      etiquetas: ["Black Friday", "Temporada", "Inversión"],
      titular: "Las marcas le meten entre 10 % y 30 % más a lo digital en Black Friday, pero la temporada empezó mucho antes",
      corto: "Black Friday: hasta 30 % más pauta digital",
      cuerpo: "Cinco compradores de medios le dijeron a Digiday que las marcas gastarán entre 10 % y 30 % más en digital durante el Black Friday (27 de noviembre) y el Cyber Monday (30 de noviembre) que en 2025, con retail media (sobre todo Amazon), search, CTV y YouTube llevándose la mayor parte. Pero los descuentos arrancaron temprano: los productos rebajados entre el 1 y el 20 de octubre subieron 56 %, según Wayvia, y el 32 % de los compradores ya había empezado sus compras navideñas, según Fluent. Varias marcas repartieron el dinero en más semanas.",
      cifras: [
        { v: "+10–30 %", t: "más inversión digital en Black Friday y Cyber Monday vs. 2025" },
        { v: "+56 %", t: "productos con descuento entre el 1 y el 20 de octubre (Wayvia)" },
        { v: "32 %", t: "de los compradores ya había empezado antes del Black Friday (Fluent)" },
        { v: "182.7M", t: "estadounidenses comprarán en los cinco días, menos que los 186.9M de 2025 (NRF)" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "El pico sigue siendo el pico, pero ya no es el único momento. El que lo apostó to’ al viernes llega tarde a un comprador que ya empezó en octubre.",
      hacer: "Hoy mismo, deja una reserva de presupuesto pa’l 27 y el 30, y mueve lo de consideración a la semana siguiente si ya se gastó.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/brands-boost-black-friday-ctv-retail-and-search-spending/" }]
    },
    {
      id: "hibrido", dep: "planning", peso: "secundaria",
      etiquetas: ["Agencias", "In-house", "Anunciantes"],
      titular: "El modelo híbrido le gana al in-house total entre los grandes anunciantes",
      corto: "Gana el modelo híbrido",
      cuerpo: "La primera encuesta global de anunciantes de COMvergence, con 28 líderes de 21 anunciantes que manejan más de US$22,000 millones en medios, encontró que casi el 80 % trabaja en modelo híbrido, mezclando equipos internos con agencia, y menos del 18 % lleva los medios completamente in-house. Una cuarta parte compra o controla medios en casa, y cerca de un tercio del resto lo está pensando pa’ los próximos 12 meses. El motivo ya no es ahorrar, sino hacer mejor cosas específicas.",
      cifras: [
        { v: "~80 %", t: "de los anunciantes encuestados trabaja en modelo híbrido" },
        { v: "<18 %", t: "lleva los medios completamente in-house" },
        { v: "US$22,000M+", t: "en medios controlan los 21 anunciantes encuestados" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El cliente se queda con lo más cercano a la marca y le devuelve a la agencia lo especializado. Hay que tener claro qué parte del trabajo es la que nadie más le puede hacer.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/hybrid-won-the-in-housing-debate-at-least-among-the-largest-advertisers/" }]
    },

    {
      id: "badbox", dep: "data", peso: "principal",
      etiquetas: ["Fraude", "CTV", "Verificación"],
      titular: "BADBOX 3.0: cajitas de TV infectadas fingían ser apps de streaming y generaban 40,000 millones de pujas al día",
      corto: "Fraude en CTV: 40,000 millones de pujas falsas al día",
      cuerpo: "HUMAN Security reveló el 18 de noviembre que desmontó BADBOX 3.0, la mayor operación de fraude publicitario divulgada por volumen de solicitudes de puja: una red de cajitas Android TV baratas, infectadas con malware, que reproducía anuncios de video en ventanas ocultas mientras la gente veía TV. Las solicitudes se hacían pasar por apps legítimas de CTV y llegó a ser más del 4 % del tráfico CTV que observa HUMAN. Es más de tres veces más grande que VASTFLUX, el récord anterior. Ojo: 40,000 millones son solicitudes de puja, no impresiones pagadas, y HUMAN no dio una cifra de pérdidas.",
      cifras: [
        { v: "40,000M", t: "solicitudes de puja fraudulentas al día en su punto más alto" },
        { v: "+4 %", t: "del tráfico CTV observado por HUMAN" },
        { v: "3×", t: "más grande que VASTFLUX, el récord anterior" },
        { v: "11", t: "redes de proxies residenciales identificadas" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a Data?",
      toca: "En CTV casi to’ se compra por programática y se mide con lo que dice la app. Si la app puede ser falsa, la verificación deja de ser un extra y se vuelve parte del costo.",
      hacer: "Esta semana, pide a tu proveedor de verificación el porcentaje de tráfico inválido en CTV de cada cliente y si ya filtra las señales de BADBOX 3.0.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/the-rundown-badbox-3-0-the-ctv-ad-fraud-scheme-generating-40-billion-bid-requests-a-day/" }]
    },
    {
      id: "coloradoia", dep: "data", peso: "secundaria",
      etiquetas: ["Regulación", "IA", "Colorado"],
      titular: "Colorado ya tiene las reglas de su ley de IA, pero un tribunal le tiene la aplicación en pausa",
      corto: "Colorado: ley de IA con reglas, pero en pausa",
      cuerpo: "El Departamento de Justicia de Colorado adoptó el 19 de noviembre las reglas de la SB 26-189, la ley que sustituyó a la SB 24-205 con una versión más estrecha sobre decisiones automatizadas, cuyas obligaciones arrancan el 1 de enero de 2027. Pero una orden del tribunal federal de Colorado, en la demanda de xAI con el gobierno de EE. UU. como parte, impide al fiscal general investigar o sancionar violaciones hasta 14 días después de que se decida la medida cautelar de xAI, y la pausa cubre a todas las empresas, no solo a xAI.",
      cifras: [
        { v: "19 nov", t: "fecha en que se adoptaron las reglas" },
        { v: "1 ene 2027", t: "cuando arrancan las obligaciones de la SB 26-189" },
        { v: "14 días", t: "después del fallo sobre la cautelar de xAI, antes de poder aplicar la ley" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/court-blocks-colorado-ai-law-enforcement-until-14-days-after-xai-ruling/" }]
    },

    {
      id: "xvideo", dep: "content", peso: "principal",
      etiquetas: ["X", "Video", "Funciones nuevas"],
      titular: "X le pone subtítulos con estilo, portada a elección y formato vertical en un toque al video",
      corto: "X estrena herramientas pa’l video",
      cuerpo: "X agregó el viernes herramientas nuevas de video: más estilos y colores de subtítulos, la opción de escoger el fotograma de portada, más textos superpuestos y tres formas de convertir un video horizontal en vertical con un toque (Fill, Fade o Stack), desde el botón Editar al subirlo. Según X, los posts con video tienen 5 veces más alcance e interacción, y el 36 % de todas las impresiones ya va a video.",
      cifras: [
        { v: "5×", t: "más alcance e interacción en posts con video, según X" },
        { v: "36 %", t: "de las impresiones de X ya va a video" },
        { v: "3", t: "formatos pa’ pasar de horizontal a vertical: Fill, Fade y Stack" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Si un cliente todavía usa X solo pa’ texto y enlaces, se está perdiendo el formato al que la plataforma le está dando el empuje. Y ya no hay excusa pa’ subir el horizontal de YouTube sin adaptarlo.",
      hacer: "Esta semana, sube en X un video vertical por cliente activo, con subtítulos y portada escogida, y compara su alcance con el último post de texto.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/x-adds-new-video-thumbnail-and-caption-options/875428/" }]
    },
    {
      id: "tiktokia", dep: "content", peso: "secundaria",
      etiquetas: ["TikTok", "IA", "Creadores"],
      titular: "TikTok lanza un verificador pa’ saber si un video se hizo con su IA, y protege la cara de los creadores",
      corto: "TikTok verifica contenido hecho con su IA",
      cuerpo: "En su tercera Cumbre de Seguridad e Innovación, TikTok presentó una herramienta en su Centro de Transparencia que deja subir una imagen o video pa’ ver si se generó o editó con las funciones de IA de TikTok, aunque no tengas cuenta; revisa la marca de agua digital. También lanzó la detección de semejanza: los creadores verifican su identidad con un tercero y el sistema busca su imagen en lo que se sube. Y Family Pairing ahora deja a los padres ver una muestra del contenido de los creadores que siguen sus hijos.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-adds-new-ai-transparency-and-parental-controls/875424/" }]
    },

    {
      id: "blackfridayrd", dep: "rd", peso: "principal", para: ["planning", "medios", "content"],
      etiquetas: ["Black Friday", "Banca", "Consumo"], fecha: "22 nov 2026",
      titular: "Arranca la semana del Black Friday en RD, y los bancos no dan descuento: devuelven en la tarjeta",
      corto: "Black Friday RD: los bancos devuelven hasta 20 %",
      cuerpo: "La semana fuerte del Black Friday arranca hoy, lunes 23, y lo que más ofrecen los bancos es devolución en la tarjeta de crédito, con monto mínimo y tope por cliente. La más grande es la «Plus Friday» de BHD: del 23 al 29 de noviembre, en una feria con 16 comercios, devuelve 20 % sobre lo acumulado, además de descuentos de hasta 60 % en tienda; Popular, Cibao, Scotiabank y otros ofrecen entre 10 % y 25 %. Revista Mercado encontró datos que no cuadran entre fichas y bases en algunos bancos, y recuerda que la tasa promedio de las tarjetas estaba en 58.35 % al año en septiembre.",
      cifras: [
        { v: "20 %", t: "devuelve BHD en su «Plus Friday», del 23 al 29 de noviembre" },
        { v: "16", t: "comercios en la feria de BHD" },
        { v: "RD$11,727.7M", t: "gastados con tarjeta el fin de semana del Black Friday de 2023 (Banco Central)" },
        { v: "58.35 %", t: "tasa anual promedio de las tarjetas de crédito a septiembre" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "En RD el Black Friday lo mueven los bancos tanto como las tiendas. La marca que no está en una feria bancaria esta semana compite sin el gancho que la gente está buscando.",
      hacer: "Hoy, cruza la lista de comercios de las ferias bancarias con tus clientes de retail y, si están dentro, ajusta piezas y pauta pa’ decir cuánto devuelve cada tarjeta.",
      fuentes: [{ nombre: "Revista Mercado", url: "https://revistamercado.do/money-invest/daily-news/black-friday-2026-rd-bancos-devolucion-tarjeta-tope/" }]
    },
    {
      id: "multiplazamao", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Retail", "Grupo Ramos", "Interior"], fecha: "21 nov 2026",
      titular: "Grupo Ramos abre Multiplaza en Mao con más de RD$1,300 millones de inversión",
      corto: "Multiplaza llega a Mao",
      cuerpo: "Grupo Ramos abrió Multiplaza Mao, en Valverde, una zona donde viven unas 44,000 personas. La nueva Sirena combina la compra en tienda con pedidos por Sirena.do, entrega a domicilio y recogida en tienda. Tiene 6,600 metros cuadrados de construcción, 2,700 de sala de ventas, 12 cajas, 101 colaboradores y abre de 7:00 a. m. a medianoche to’s los días.",
      cifras: [
        { v: "RD$1,300M+", t: "de inversión" },
        { v: "44,000", t: "personas viven en la zona" },
        { v: "101", t: "colaboradores" }
      ],
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/389496/grupo-ramos-inaugura-multiplaza-en-mao-con-una-inversion-de-mas-de-rd1300-millones/" }]
    },
    {
      id: "dueloc", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Béisbol", "TV", "Panorama"], fecha: "22 nov 2026",
      titular: "Panorama va a transmitir el Duelo del Caribe entre RD y Puerto Rico",
      corto: "Panorama transmite el Duelo del Caribe",
      cuerpo: "Lidom y Fenapepro firmaron con Grupo de Medios Panorama pa’ transmitir el Duelo del Caribe, en el que una selección de peloteros dominicanos se mide con jugadores de la liga Roberto Clemente de Puerto Rico. El juego es el 5 de diciembre en el estadio Hiram Bithorn, en San Juan. Según Erick Almonte, presidente de Fenapepro, el equipo dominicano está formado en un 90 %.",
      cifras: [
        { v: "5 dic", t: "fecha del juego en el Hiram Bithorn, San Juan" },
        { v: "90 %", t: "del equipo dominicano ya está formado" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es un evento de pelota nuevo en plena temporada invernal y con rivalidad caribeña: inventario pa’ marcas que quieren estar en deporte en diciembre.",
      fuentes: [{ nombre: "N Digital", url: "https://n.com.do/2026/11/22/grupo-de-medios-panorama-transmitira-el-duelo-del-caribe-de-republica-dominicana-y-puerto-rico/" }]
    },
    {
      id: "adornosflojos", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Navidad", "Consumo", "Calle"], fecha: "23 nov 2026",
      titular: "Llegó la Navidad a la Churchill, pero los compradores de adornos todavía no",
      corto: "Ventas de adornos navideños flojas",
      cuerpo: "Los vendedores de adornos navideños de la Winston Churchill y la antigua Autopista de San Isidro le dijeron a Diario Libre que las ventas están muy por debajo de las del año pasado, aunque mantuvieron y hasta bajaron precios. Ahora la gente compra una o dos unidades, cuando antes encargaba diez o más. Un vendedor con 30 años en el negocio dijo que nunca había visto ventas tan bajas. Los burritos arrancan en RD$2,000 y los árboles grandes van de RD$8,500 a RD$10,000.",
      cifras: [
        { v: "30 años", t: "lleva un vendedor en el negocio y dice que nunca vio ventas tan bajas" },
        { v: "RD$8,500–10,000", t: "precio de los árboles navideños grandes" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/actualidad/ciudad/2026/11/23/la-navidad-se-acerca-entre-colores-pero-escasean-los-compradores/3728442" }]
    }
  ],

  pizarra: ["chatgptconsultas", "jello", "blackfriday", "badbox", "xvideo", "blackfridayrd"],

  frases: [
    { dep: "medios", texto: "En ChatGPT la palabra clave no la escoges tú: la escribe un agente leyendo la conversación, y tú solo ves el total.", uso: "para conversaciones de IA y transparencia en la compra" },
    { dep: "data", texto: "BADBOX 3.0 llegó a 40,000 millones de pujas falsas al día en CTV: la verificación ya no es un extra, es parte del costo.", uso: "para conversaciones de fraude y calidad de inventario" },
    { dep: "planning", texto: "El Black Friday ya no es un viernes: los descuentos arrancaron en octubre y el 32 % de los compradores ya había empezado.", uso: "para conversaciones de temporada y presupuesto" },
    { dep: "creatividad", texto: "Jell-O no alquiló una canción: se hizo una con su nombre como gancho y ahora es un activo de marca.", uso: "para conversaciones de identidad sonora" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Las búsquedas ocultas de ChatGPT Ads" },
      { id: "creatividad", texto: "«Oh Hello, Jell-O»" },
      { id: "planning", texto: "Hasta 30 % más pauta en Black Friday" },
      { id: "data", texto: "El fraude BADBOX 3.0 en CTV" },
      { id: "content", texto: "Las herramientas de video de X" },
      { id: "rd", texto: "Zoom a RD: la devolución de los bancos" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "chatgptconsultas", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "blackfriday", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Black Friday es el 27 y Cyber Monday el 30: las marcas le meten entre 10 % y 30 % más a lo digital. Guarda reserva pa’ esos dos días, que el comprador ya empezó desde octubre."
    },
    data: {
      tipo: "secreto", nota: "badbox", titulo: "Destapa el expediente",
      texto: "BADBOX 3.0 generaba hasta [[40,000 millones]] de solicitudes de puja falsas al día y llegó a ser más del [[4 %]] del tráfico CTV que observa HUMAN."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "blackfridayrd", titulo: "La pregunta del patio",
      p: "¿Cuánto devuelve BHD en su «Plus Friday» del 23 al 29 de noviembre?",
      opciones: ["10 %", "20 %", "60 %"], correcta: 1,
      explicacion: "BHD devuelve 20 % sobre lo acumulado en una feria con 16 comercios; el 60 % es el descuento máximo en tienda, no la devolución."
    }
  }
};
