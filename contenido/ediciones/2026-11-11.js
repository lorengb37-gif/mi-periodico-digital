/*
  El Pulso Publicitario · edición N.º 315 · 11 de noviembre de 2026
  ------------------------------------------------
  Cada edición vive en su propio archivo: ediciones/AAAA-MM-DD.js.
  La rutina diaria crea el archivo del día y lo anota arriba en archivo.js.
  Las ediciones anteriores no se tocan nunca: son el archivo del calendario.
*/
window.EDICION = {
  numero: 315,
  fechaISO: "2026-11-11",
  fecha: "Miércoles 11 de noviembre 2026",
  fechaCorta: "11 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Hoy las marcas tienen dos puertas pa’ la misma conversación: la que se gana y la que se paga. Trabaja primero la que se gana.",
    largo: "OpenAI abrió perfiles y agentes gratis pa’ las marcas en ChatGPT, el mismo formato que ya prueba como anuncio. Reddit va a resumir con IA lo que la gente dice de los productos, sin pauta. X deja recortar videos y le da crédito al creador. Y mientras la IA llena to’, Netflix filma en 35mm y Nacional arma su Navidad con chefs y una canción original. El patrón es claro: lo que la marca dice de sí misma pesa menos que lo que otros dicen de ella. Esta semana, revisa qué está diciendo la gente (y las máquinas) de tu cliente antes de comprar un solo espacio.",
    corto: "Antes de pagar por estar en la conversación, revisa qué se dice de tu cliente cuando nadie paga.",
    porDep: {
      medios: "Antes de comprar un formato de IA conversacional, mira si existe la versión gratis del mismo formato y móntala primero.",
      creatividad: "Lo hecho a mano se volvió argumento de venta. Si la pieza tiene oficio, cuéntalo en el detrás de cámara.",
      planning: "Las membresías cambian el calendario: el comprador fiel ya tiene descuentos guardaos antes de que salga tu oferta.",
      data: "Cada vez que el dato se va del navegador al servidor, la confianza pasa a ser tu responsabilidad. Documenta a quién le pasas qué.",
      content: "Haz videos largos con momentos que se puedan recortar solos: el clip de otro también es alcance pa’ ti.",
      rd: "En diciembre el patio se pone sentimental: tradición, familia y comida. La marca que conecta con eso sin forzarlo es la que se queda."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "OpenAI abre perfiles y agentes gratis pa’ marcas en ChatGPT · Viant compra Waymark por US$20 millones pa’ hacer más anuncios de CTV · Priceline mete su agente Penny en los AI Sponsored Snaps" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Netflix filma su campaña internacional en 35mm con Mother · Ogilvy y CAA lanzan Echo pa’ hacer anuncios con réplicas digitales de celebridades" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "TikTok Shop lanza su membresía Plus pa’ 1 millón de compradores en EE. UU. · Mars se prepara pa’ cuando la IA haga la compra del súper" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "La «edge cookie» del Trusted Server pone a prueba la confianza en el ad tech del lado del servidor · Reddit se apoya en Qloo pa’ predecir gustos" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "X deja recortar clips de videos largos y le da crédito al creador · Reddit prueba Reddit Reviews, reseñas armadas con IA" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Nacional une la Navidad con España · Villalona, Elvis Crespo y Lomiiel rehacen «Félix Cumbé» · Angurria pinta 29 pisos en el Bronx · Canasta pasa de RD$50,000 · 79 % de los bancos múltiples usa IA · Mitur vende Higüey" }
  },

  notas: [
    {
      id: "openaihub", dep: "medios", peso: "principal",
      etiquetas: ["IA", "ChatGPT", "OpenAI"],
      hilo: "Ganado o pagado",
      titular: "OpenAI le abre a las marcas una puerta gratis en ChatGPT, al lado de la que te vende",
      corto: "OpenAI abre perfiles y agentes gratis pa’ marcas en ChatGPT",
      cuerpo: "Las empresas ya pueden reclamar su perfil en ChatGPT con el nuevo Business Hub, verificarse y cargar datos de productos y de la compañía. En EE. UU., por ahora, los negocios de e-commerce y servicios en línea pueden publicar un «business agent»: un chat aparte, identificado, que habla por la marca cuando el usuario quiere saber más de un producto. Según Benji Shomair, vicepresidente de monetización de OpenAI, ese agente es la versión orgánica del «sponsored agent» que la empresa prueba como anuncio pagado desde septiembre. El agente lo arma OpenAI con las instrucciones y el feed de la marca: no se puede traer uno propio. Y la marca no ve las conversaciones, solo los temas.",
      cifras: [
        { v: "2 puertas", t: "la misma conversación: el business agent (gratis) y el sponsored agent (pagado)" },
        { v: "Solo EE. UU.", t: "dónde se puede publicar el business agent por ahora, sin fecha pa’ otros mercados" },
        { v: "Temas, no chats", t: "lo que ve la marca: menciones, vistas, clics y temas, no las conversaciones individuales" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si existe una versión gratis del mismo formato que te van a vender, el cliente va a preguntar por qué pagar. Y como la data se queda en OpenAI, medir el retorno del pagado va a costar más.",
      hacer: "Esta semana, pon en la agenda con cada cliente de e-commerce reclamar su perfil en el Business Hub y anotar la línea base de menciones y clics antes de proponer cualquier pauta en ChatGPT.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/openais-new-business-agents-give-brands-a-free-way-into-the-conversation-its-also-selling-as-an-ad/" }]
    },
    {
      id: "viant", dep: "medios", peso: "secundaria",
      etiquetas: ["CTV", "Ad Tech", "Adquisición"],
      titular: "Viant compra Waymark por US$20 millones pa’ hacer más anuncios de CTV, más rápido",
      corto: "Viant compra Waymark por US$20 millones",
      cuerpo: "El DSP Viant cerró la compra de Waymark, una plataforma de producción de video con IA, por US$20 millones en efectivo, con la idea de que los anunciantes hagan más piezas de CTV en menos tiempo. Lo anunció junto a sus resultados del tercer trimestre: algo más de US$110 millones en ingresos, 29 % más que el año pasado, con el gasto en CTV subiendo casi 40 % y representando más de la mitad de lo que se compra por su plataforma.",
      cifras: [
        { v: "US$20 millones", t: "en efectivo por Waymark" },
        { v: "+29 %", t: "ingresos del tercer trimestre frente al año anterior" },
        { v: "~40 %", t: "crecimiento del gasto en CTV en Viant" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El cuello de botella del CTV ya no es el inventario, es tener suficientes piezas. Los DSP se están comprando la fábrica de anuncios.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/tv/viant-buys-waymark-for-20-million-because-ctv-needs-more-ads-more/" }]
    },
    {
      id: "penny", dep: "medios", peso: "secundaria",
      etiquetas: ["Snapchat", "IA", "Viajes"],
      titular: "Priceline mete su agente Penny en los anuncios de Snapchat",
      corto: "Priceline lleva a Penny a Snapchat",
      cuerpo: "Priceline es la primera marca de viajes en usar los AI Sponsored Snaps, el formato con el que Snapchat deja que los anunciantes traigan su propio chatbot al inbox. Quien abra el mensaje puede pedirle a Penny ideas de destino, itinerario y hotel, y eso se guarda cuando salta a Priceline a reservar. La marca dice que Penny convierte cerca del doble que los usuarios que no lo usan. Snapchat dice que sus Sponsored Snaps dan 22 % más conversiones y 20 % menos costo por acción que el resto de su inventario.",
      cifras: [
        { v: "~2x", t: "conversión de usuarios de Penny frente a los que no lo usan (dato de Priceline)" },
        { v: "+22 %", t: "conversiones de los Sponsored Snaps frente a otro inventario de Snapchat" },
        { v: "−20 %", t: "costo por acción de los Sponsored Snaps (dato de Snapchat)" }
      ],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/pricelines-ai-agent-penny-lands-in-snapchat-ads-amid-holiday-rush/874247/" }]
    },

    {
      id: "netflix35", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Netflix", "Craft"],
      titular: "Netflix le dice no a la prisa: su campaña nueva está filmada en 35mm",
      corto: "Netflix filma su campaña en 35mm",
      cuerpo: "«Find the Thing You Never Knew You Needed» es la nueva campaña internacional de Netflix, hecha por su Brand Creative Studio y la agencia Mother. Son tres spots filmados en película de 35mm, cada uno en un formato distinto, con sets construidos a la medida y dirección de Vania Heymann y Gal Muggia (Iconoclast): un ajolote que se escapa de la pecera pa’ volver a prender la tele, un vampiro que desafía el amanecer y un astronauta que despierta a un compañero pa’ enseñarle una escena de «KPop Demon Hunters». El programa de cada spot se cambia según el mercado. La serie social «Typecast», en 16mm, trae a cuatro creativos hablando de lo que ven en Netflix.",
      cifras: [
        { v: "3 spots", t: "en 35mm, cada uno con una relación de aspecto distinta" },
        { v: "4 episodios", t: "de la serie social «Typecast», filmada en 16mm" },
        { v: "US$2,700 millones", t: "nueva proyección de ingresos publicitarios de Netflix pa’l año (antes US$3,000 millones)" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Mientras to’ el mundo produce con IA, lo hecho a mano se volvió diferenciador, igual que el stop-motion de Levi’s. Y el truco del programa intercambiable es oro: una sola producción, muchos mercados.",
      hacer: "En la próxima pieza de marca, propón al cliente una idea con un elemento intercambiable (producto, plato o personaje) pa’ que una sola filmación sirva pa’ varias versiones, y cotiza una opción en formato analógico.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/netflix-embraces-35mm-film-in-international-campaign/874237/" }]
    },
    {
      id: "echo", dep: "creatividad", peso: "secundaria",
      etiquetas: ["IA", "Ogilvy", "Talento"],
      titular: "Ogilvy y CAA lanzan Echo: anuncios con réplicas digitales de celebridades",
      corto: "Ogilvy y CAA clonan talento pa’ anuncios",
      cuerpo: "Ogilvy (WPP) firmó con la agencia de talento CAA pa’ hacer anuncios con IA usando réplicas digitales autorizadas de actores, atletas y creadores de su lista. La solución se llama Echo y usa «The Vault», el estudio de escaneo de CAA con 204 cámaras que capturan voz, gestos y forma de caminar. Terry Crews ya aceptó participar. La negociación con el talento sigue igual que siempre, y esperan bajar entre 65 % y 75 % el costo por pieza. Los primeros pilotos saldrían a final de año.",
      cifras: [
        { v: "204", t: "cámaras del estudio de escaneo de CAA" },
        { v: "65–75 %", t: "baja esperada en el costo por pieza" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Ojo con los contratos de talento: los derechos de imagen digital van a entrar en cada negociación, también aquí.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/ogilvy-and-caa-launch-partnership-to-clone-celebrity-talent-for-ai-ads/" }]
    },

    {
      id: "tiktokplus", dep: "planning", peso: "principal",
      etiquetas: ["TikTok Shop", "Comercio social", "Temporada"],
      titular: "TikTok Shop saca su membresía Plus y se la ofrece a su millón de compradores más fieles",
      corto: "TikTok Shop lanza su membresía Plus",
      cuerpo: "TikTok Shop lanzó en EE. UU. el piloto de TikTok Shop Plus, una membresía de US$9.99 al mes tras 30 días gratis, ofrecida a más de un millón de sus clientes más fieles. Incluye envío gratis en productos marcados, 10 % extra de descuento en artículos escogidos, tres cupones al mes y reembolsos instantáneos como crédito. Los miembros tendrán ofertas exclusivas pa’l Viernes Negro y el Cyber Monday. Es la primera Navidad con Best Buy, Ulta Beauty y Sephora vendiendo en TikTok Shop, y casi un tercio de los usuarios de TikTok en EE. UU. espera comprar un regalo este Viernes Negro.",
      cifras: [
        { v: "US$9.99", t: "al mes, después de 30 días gratis" },
        { v: "1 millón+", t: "de compradores invitados al piloto" },
        { v: "US$500 millones+", t: "en ventas de TikTok Shop en el fin de semana de Viernes Negro y Cyber Monday 2025" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "TikTok Shop se mueve como Amazon Prime: premia al comprador que repite. Pa’ las marcas, el comprador fiel llega a la temporada con cupones guardaos y expectativa de descuento.",
      hacer: "Antes del viernes, separa en el plan de Viernes Negro de cada cliente con comercio social una oferta pa’ compradores recurrentes y otra pa’ nuevos, con su propia meta.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/tiktok-shop-launches-a-paid-premium-tier-for-1m-of-its-top-u-s-shoppers/" }]
    },
    {
      id: "mars", dep: "planning", peso: "secundaria",
      etiquetas: ["Consumidor", "Comercio agéntico", "Mars"],
      titular: "Mars se pregunta qué pasa con la compra de impulso cuando la IA hace el súper",
      corto: "Mars se prepara pa’ la compra con IA",
      cuerpo: "Neil Reynolds, director global de clientes de Mars, le contó a Digiday que la empresa trabaja en dos rutas a partir de su estudio sobre el futuro de la compra, hecho con Kantar y Synthesis: que sus marcas aparezcan y conviertan cuando un agente de IA hace la compra semanal, y convertir las tiendas en lugares de descubrimiento y entretenimiento. Arman equipos «One Demand» que sientan juntos al gerente de marca, insights, cuentas clave, categoría y la agencia.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Si la compra rutinaria se la lleva un agente, la tienda tiene que dar algo que el agente no da. Buen tema pa’ la próxima conversación con un cliente de consumo masivo.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/mars-wants-to-future-proof-impulse-buys-as-ai-poised-to-take-over-more-grocery-runs/" }]
    },

    {
      id: "edgecookie", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Identidad", "IAB Tech Lab"],
      titular: "Ad tech se muda al servidor, y la «edge cookie» pone la confianza en la mesa",
      corto: "La edge cookie pone a prueba la confianza",
      cuerpo: "Tras el bloqueo de Apple a la resolución de identidad en Safari, la industria se está moviendo a soluciones del lado del servidor, con el Trusted Server del IAB Tech Lab como ejemplo más grande. Promete páginas más rápidas y más control pa’l publisher, pero saca las llamadas de anuncios de la vista del usuario. Su «edge cookie» se crea, en parte, cifrando la IP del usuario con una clave del dominio: si alguien borra sus cookies y vuelve desde la misma IP, se genera una nueva que puede enlazarse con la anterior. Según Rowena Lam, del IAB Tech Lab, esa cookie no llega sola a ningún proveedor: el publisher decide si la comparte.",
      cifras: [
        { v: "Del lado del servidor", t: "dónde corren ahora las llamadas de anuncios, fuera de la vista del navegador" },
        { v: "IP + clave", t: "con lo que se crea en parte la edge cookie" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Mientras el navegador bloquea, el ad tech busca rutas por el servidor, y la regulación todavía no lo alcanza.",
        "La responsabilidad de privacidad pasa del navegador al publisher y a cada proveedor que recibe el dato."
      ],
      hacer: "Esta semana, pregúntale a cada socio de medición y DSP si usa identificadores del lado del servidor (como la edge cookie) y deja por escrito qué datos de tus clientes reciben y quién se los pasa.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/can-web-users-trust-ad-techs-server-side-shift/" }]
    },
    {
      id: "qloo", dep: "data", peso: "secundaria",
      etiquetas: ["Segmentación", "Reddit", "Qloo"],
      titular: "Reddit se apoya en Qloo pa’ adivinar qué más te gusta",
      corto: "Reddit suma a Qloo pa’ predecir gustos",
      cuerpo: "Reddit firmó con Qloo, una empresa de inferencia predictiva, y tendrá acceso a más de 10 años de su data pa’ servir anuncios más relevantes. Qloo cruza gustos entre categorías (restaurantes, música, moda) usando reseñas de TasteDive, metadatos de Wikidata y data licenciada. Los usuarios de Reddit pueden optar por anuncios personalizados; en un subreddit, la plataforma busca sobre todo anuncios acordes al contexto.",
      cifras: [{ v: "10+ años", t: "de data de Qloo a la que Reddit tendrá acceso" }],
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/marketers/reddit-taps-qloo-to-strengthen-its-predictive-targeting/" }]
    },

    {
      id: "xclip", dep: "content", peso: "principal",
      etiquetas: ["X", "Video", "Creadores"],
      titular: "X deja recortar clips de videos largos, y el creador también cobra",
      corto: "X estrena los clips con crédito al creador",
      cuerpo: "En videos de 2 minutos o más, X ya deja escoger «clip video» entre las opciones de repost. Se recorta un pedazo de 5 a 60 segundos (hasta 30 % del original), se le añade comentario y el clip sale con el usuario del creador y la marca de tiempo del original. Las impresiones cuentan tanto pa’l creador como pa’ quien recorta, dentro del programa Original Creator Rewards. El creador no puede apagar los clips: la única salida es borrar el video. Ya está en iOS y Android; la web viene después, y los en vivo no se pueden recortar todavía.",
      cifras: [
        { v: "5–60 s", t: "largo del clip, hasta 30 % del video original" },
        { v: "2 min+", t: "duración mínima del video pa’ poder recortarlo" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Un video largo bien armado ahora puede regarse en pedacitos por cuentas de otros, siempre con el crédito a tu marca. Pero también recortan lo que no quieres, y no lo puedes apagar.",
      hacer: "En el próximo video largo de un cliente en X, marca en el guion tres momentos de menos de 60 segundos que se entiendan solos, y define con el cliente qué hacer si alguien recorta algo fuera de contexto.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/x-adds-video-clipping/874341/" }]
    },
    {
      id: "redditreviews", dep: "content", peso: "secundaria",
      etiquetas: ["Reddit", "IA", "Reseñas"],
      titular: "Reddit prueba reseñas armadas con IA a partir de lo que dice la gente",
      corto: "Reddit prueba Reddit Reviews con IA",
      cuerpo: "Reddit está probando Reddit Reviews, que usa IA pa’ juntar en una sola página los comentarios y votos sobre un producto que andan regados por las comunidades. Puede incluir fotos, precios y enlaces de compra cuando vienen de catálogos de marcas y tiendas, filtros por tema y productos con los que se compara. Arranca con un grupo de productos y categorías muy comentados, y Reddit dice que no habrá colocaciones pagadas.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Lo que la comunidad dice de tu cliente se va a ver resumido en una página. No se paga pa’ salir bien: se gana en los comentarios.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-tests-ai-compiled-product-reviews/874336/" }]
    },

    {
      id: "nacional", dep: "rd", peso: "principal", para: ["creatividad", "planning", "content"],
      etiquetas: ["Navidad", "Retail", "Campaña"], fecha: "10 nov 2026 · Santo Domingo",
      titular: "Supermercados Nacional sale con su Navidad: «La Navidad nos une con España»",
      corto: "Nacional une la Navidad con España",
      cuerpo: "Santo Domingo.— Supermercados Nacional lanzó en la Casa de los Vitrales su campaña navideña 2026, «La Navidad nos une con España», dentro de su plataforma «La Navidad nos une». Junta tradiciones de ambos países (los Reyes Magos, las doce uvas, el Belén) con recetas de los chefs Francis Peña y Alberto Martín Cárdenas, como una paella con chicharrón dominicano. El audiovisual trae una canción original de Alex Mansilla, cantada por el sevillano Luis Larr. Con compras de RD$2,500 o más que incluyan un vino de las bodegas participantes, cinco ganadores y sus acompañantes se van ocho días a España.",
      cifras: [
        { v: "RD$2,500", t: "compra mínima pa’ participar, con un vino de las bodegas participantes" },
        { v: "5 ganadores", t: "con acompañante, ocho días por Madrid, Segovia y Toledo" },
        { v: "30 dic", t: "cierre de la promoción" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "La Navidad del retail ya arrancó, y con una fórmula completa: plataforma que se repite cada año, comida, música propia y promoción con socio. Es el punto de comparación pa’ cualquier cliente de consumo.",
      hacer: "Esta semana, revisa con tus clientes de consumo si su Navidad tiene los cuatro pedazos de Nacional (plataforma, contenido de recetas, música y promoción con socio) y propón el que falte.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/11/10/nacional-presenta-su-propuesta-navidena/3717051" }]
    },
    {
      id: "felixcumbe", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música", "Navidad", "Tendencia"], fecha: "10 nov 2026",
      titular: "Villalona, Elvis Crespo y Lomiiel le dan una vuelta nueva a «Félix Cumbé»",
      corto: "Tres generaciones rehacen «Félix Cumbé»",
      cuerpo: "«Félix Cumbé», uno de los merengues que no faltan en la Navidad dominicana, tiene versión nueva con Fernando Villalona, Elvis Crespo y Lomiiel. Sony Music RD la presentó con un audiovisual en Instagram como «una unión que nadie tenía en el radar».",
      tocaTitulo: "¿Y eso qué?",
      toca: "Tres generaciones en un mismo tema es el tipo de cruce que pega en redes en diciembre. Pa’ content, es audio de temporada en el que vale la pena estar atento.",
      fuentes: [{ nombre: "El Nacional", url: "https://elnacional.com.do/fama-y-vida/farandula/cancion-diciembre-apodera-fiestas-nueva-version_585872.html" }]
    },
    {
      id: "angurria", dep: "rd", peso: "secundaria", para: ["creatividad", "medios"],
      etiquetas: ["Arte", "Mural", "Comunidad"], fecha: "11 nov 2026",
      titular: "Angurria pinta 29 pisos en el Bronx: el mural más alto de EE. UU. lleva firma dominicana",
      corto: "Angurria pinta el mural más alto de EE. UU.",
      cuerpo: "El artista dominicano Néstor Omar García, Angurria, pintó «Un mar de gente (From Every Shore)», un mural de más de 260 pies en una torre de 29 pisos de viviendas públicas en el Bronx. Quedó segundo en el mundo por apenas tres pies. Salió escogido entre más de 300 aspirantes, trabajó con el dominicano Johann Báez «Dovente» y lo terminaron en 22 días, después de seis semanas de talleres con los residentes. La mujer con rolos del mural está inspirada en su mamá, que tiene un salón de belleza.",
      cifras: [
        { v: "29 pisos", t: "y más de 260 pies de mural" },
        { v: "22 días", t: "de pintura, tras seis semanas con la comunidad" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Seis semanas escuchando a la comunidad antes de pintar: eso es método creativo, y le sirve a cualquier marca que quiera hablar de un barrio sin caer en estereotipos.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/11/angurria-nunca-nadie-habia-pintado-29-pisos/3716881" }]
    },
    {
      id: "canasta", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Consumo", "Banco Central", "Precios"], fecha: "11 nov 2026",
      titular: "La canasta básica pasa de RD$50,000 por primera vez",
      corto: "La canasta básica pasa de RD$50,000",
      cuerpo: "Según el Banco Central, la canasta básica nacional llegó en octubre a RD$50,255.05, RD$2,458.24 más que en octubre de 2025, un alza de 5.14 %. El 61.4 % de ese aumento se dio entre marzo y octubre, por el efecto de la guerra en Medio Oriente sobre los combustibles. La del primer quintil, la de los hogares más pobres, se acercó a los RD$30,000.",
      cifras: [
        { v: "RD$50,255", t: "costo de la canasta nacional en octubre" },
        { v: "+5.14 %", t: "frente a octubre de 2025" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Llega la Navidad con el bolsillo más apretao. Mensajes de valor y ofertas claras van a pesar más que nunca en el plan de diciembre.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/11/11/costo-de-la-canasta-basica-promedio-en-rd-paso-en-octubre-de-rd50000/3717153" }]
    },
    {
      id: "bancosia", dep: "rd", peso: "secundaria", para: ["data", "planning"],
      etiquetas: ["Banca", "IA", "Digital"], fecha: "10 nov 2026",
      titular: "El 79 % de los bancos múltiples dominicanos ya usa agentes de IA",
      corto: "79 % de los bancos múltiples usa IA",
      cuerpo: "El Ranking de Digitalización del Sector Bancario Dominicano 2026, de la Superintendencia de Bancos, dice que la IA está en el 44 % de las entidades financieras, 33 puntos más que en 2021, y que el 79 % de los bancos múltiples usa agentes de IA, sobre todo en operaciones internas, ciberseguridad y fraude. El 81 % de las transacciones se hizo por canales digitales y de autoservicio, y cerca de 5.2 millones de personas usan apps bancarias.",
      cifras: [
        { v: "79 %", t: "de los bancos múltiples usa agentes de IA" },
        { v: "5.2 millones", t: "de personas usan apps bancarias activamente" },
        { v: "81 %", t: "de las transacciones, por canales digitales y de autoservicio" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si tu cliente es un banco, el canal principal ya es la app. Y con tanta IA en fraude y ciberseguridad, cualquier campaña que pida datos va a pasar por más filtros.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387978/el-79-de-los-bancos-multiples-dominicanos-utilizan-inteligencia-artificial/" }]
    },
    {
      id: "higuey", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Turismo interno", "Mitur"], fecha: "10 nov 2026",
      titular: "Mitur quiere que a Higüey se vaya por algo más que la Basílica",
      corto: "Mitur vende a Higüey como destino de aventura",
      cuerpo: "La Dirección de Turismo Interno del Mitur hizo una ronda de negocios en Higüey con unos 50 proveedores y 30 agentes de viajes, con más de 200 citas, pa’ vender el municipio como destino de aventura, naturaleza y gastronomía, más allá de su perfil religioso. La idea es armar circuitos tipo day pass desde Santo Domingo. Es la tercera ronda en destinos emergentes, después de Constanza y Jarabacoa.",
      cifras: [
        { v: "50 + 30", t: "proveedores y agentes de viajes" },
        { v: "200+", t: "citas de negocio" }
      ],
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387916/mitur-busca-posicionar-a-higuey-como-destino-de-aventura-naturaleza-y-gastronomia/" }]
    }
  ],

  pizarra: ["openaihub", "netflix35", "tiktokplus", "edgecookie", "xclip", "nacional"],

  frases: [
    { dep: "medios", texto: "OpenAI tiene dos puertas pa’ la misma conversación en ChatGPT, y solo una cuesta dinero.", uso: "pa’ conversaciones de IA conversacional y presupuesto" },
    { dep: "creatividad", texto: "Mientras to’ el mundo produce con IA, Netflix filmó su campaña en 35mm: lo hecho a mano se volvió diferenciador.", uso: "pa’ defender producción con oficio" },
    { dep: "planning", texto: "TikTok Shop ya tiene su propio Prime: US$9.99 al mes y un millón de compradores fieles invitados.", uso: "pa’ planes de Viernes Negro y comercio social" },
    { dep: "data", texto: "Cuando el ad tech se muda al servidor, el usuario deja de ver quién recibe sus datos. La confianza pasa a ser responsabilidad tuya.", uso: "pa’ conversaciones de privacidad e identidad" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Perfiles y agentes gratis en ChatGPT" },
      { id: "creatividad", texto: "Netflix en 35mm" },
      { id: "planning", texto: "TikTok Shop Plus" },
      { id: "data", texto: "La edge cookie y el servidor" },
      { id: "content", texto: "Los clips de X" },
      { id: "rd", texto: "Zoom a RD: la Navidad de Nacional" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "openaihub", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "tiktokplus", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "El Viernes Negro de TikTok Shop arranca ya, y los miembros de TikTok Shop Plus llegan con cupones exclusivos. Separa tu oferta pa’ compradores fieles y pa’ nuevos esta misma semana."
    },
    data: {
      tipo: "secreto", nota: "edgecookie", titulo: "Destapa el expediente",
      texto: "La edge cookie del Trusted Server se crea en parte cifrando [[la IP del usuario]] con una clave del dominio, y aunque borres tus cookies, si vuelves desde la misma IP se puede [[enlazar con la anterior]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "redditreviews", titulo: "Prepárate pa’ Reddit Reviews",
      intro: "Reddit está probando Reddit Reviews, que resume con IA lo que dicen las comunidades de un producto. Ayúdame a preparar a la marca de mi cliente:",
      opciones: [
        "Dime qué comunidades de Reddit suelen hablar de esta categoría de producto",
        "Hazme una lista de preguntas que la gente suele hacer antes de comprar este tipo de producto",
        "Sugiéreme cómo responder en las comunidades sin que parezca publicidad"
      ],
      cierre: "Marca qué parte de tu respuesta es suposición y qué tengo que confirmar leyendo las comunidades de verdad."
    },
    rd: {
      tipo: "pregunta", nota: "nacional", titulo: "La pregunta del patio",
      p: "¿Con qué país une Supermercados Nacional su Navidad 2026?",
      opciones: ["Italia", "España", "México"], correcta: 1,
      explicacion: "La campaña es «La Navidad nos une con España»: Reyes Magos, doce uvas, una paella con chicharrón dominicano y un viaje de ocho días por España pa’ cinco ganadores."
    }
  }
};
