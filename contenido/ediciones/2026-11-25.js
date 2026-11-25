/*
  El Pulso Publicitario · edición N.º 329 · 25 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 329,
  fechaISO: "2026-11-25",
  fecha: "Miércoles 25 de noviembre 2026",
  fechaCorta: "25 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Los agentes de IA ya buscan, comparan y compran por la gente: la marca que decide qué les deja hacer se queda con la venta.",
    largo: "Hoy el tema se repite por to’s lados: Walmart le abre la puerta a Muse, el agente de Meta, pero solo por la entrada que Walmart controla; Meta lleva Muse al Reino Unido con los términos revisados por el regulador; y Mosseri dice que Muse sirve pa’ sacar ideas y leer tendencias. Al mismo tiempo, el 37 % de los compradores navideños descubre regalos en redes y las marcas que se lucen hacen las cosas a mano, como Chewy con su stop motion. El consejo: antes del Black Friday, revisa por qué puertas entra el comprador de tu cliente, quién lo trae y qué datos se lleva.",
    corto: "Antes del viernes, haz la lista de por dónde llega el comprador de tu cliente, incluidos los agentes de IA, y quién controla cada puerta.",
    porDep: {
      medios: "Si tu cliente vende en un marketplace, pregunta qué agentes de IA pueden comprar ahí y si esas compras se ven en los reportes.",
      creatividad: "Chewy hizo su Navidad en stop motion y sin IA: si la competencia va con lo generado, lo hecho a mano destaca más.",
      planning: "Si el 37 % descubre regalos en redes, el plan navideño tiene que tener video y reseñas de clientes, no solo descuentos.",
      data: "Australia va a obligar a las redes a ofrecer un feed sin algoritmo: prepara al cliente pa’ un alcance que no depende solo de la recomendación.",
      content: "Con miniaturas propias en Shorts, cada video corto es una portada: dale a la miniatura el mismo cuidado que al primer segundo.",
      rd: "Las remesas crecieron 14.8 % en octubre: pa’ la diáspora y sus familias, diciembre trae dinero fresco y gente viajando."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Walmart deja que Muse, el agente de Meta, compre en su tienda con sus reglas · ChatGPT empieza a aceptar anuncios de hospitales en EE. UU. · Best Buy Ads va pa’ un 10 % de crecimiento" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Chewy se va al stop motion hecho a mano pa’ su primera Navidad en TV nacional · Carl’s Jr. escoge a David&Goliath como agencia de récord" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Meta e Ipsos: el 37 % de los compradores navideños descubre regalos en redes · Los hogares de EE. UU. con usuarios de GLP-1 pasan de 9 % a 21 %" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Australia avanza la ley que obliga a dar un feed sin algoritmo, con multas de hasta 5 % de la facturación global · Muse llega al Reino Unido con términos revisados por la CMA" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube abre las miniaturas propias de Shorts a to’s los creadores · Mosseri explica cómo usar Muse pa’ sacar ideas y leer tendencias" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Remesas de octubre suben 14.8 % · 3.3 millones de pasajeros aéreos en Navidad · El 81 % de las transacciones bancarias ya es digital o de autoservicio · Melissa Núñez, primera finalista en Miss Universo · Arranca «La Casa de Alofoke 3»" }
  },

  notas: [
    {
      id: "walmartmuse", dep: "medios", peso: "principal",
      etiquetas: ["Agentes de IA", "Walmart", "Meta Muse"],
      hilo: "Muse",
      titular: "Walmart deja que Muse, el agente de Meta, le compre en la tienda, pero con las reglas de Walmart",
      corto: "Walmart le abre la tienda a Muse, con sus reglas",
      cuerpo: "Walmart prepara un conector pa’ que Muse, el agente de IA de Meta, entre a su comercio electrónico por una puerta que Walmart construyó y controla. Según Digiday, que vio el manual técnico, Muse puede buscar productos, contestar preguntas, armar el carrito y, si el cliente lo autoriza, completar la orden; también puede consultar a Sparky, el asistente de Walmart. La integración usa el Model Context Protocol (MCP) y no le da al agente todo el historial de compras. Walmart además estrena «Agent Profiles»: cada agente tiene su perfil dentro de la cuenta del cliente, que decide si aprueba cada compra o le pone un tope de gasto. Amazon, en cambio, bloqueó a Muse en septiembre.",
      cifras: [
        { v: "US$50 · 100 · 200", t: "topes de gasto que el cliente le puede poner al agente pa’ que compre sin pedir permiso" },
        { v: "MCP", t: "protocolo de la conexión entre Muse y los sistemas de Walmart" },
        { v: "Septiembre", t: "mes en que Amazon bloqueó a Muse en su tienda" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Walmart trata el acceso de los agentes como trató los espacios de anuncios en su retail media: como inventario que reparte con sus condiciones. Si un agente compra por el cliente, cambia quién ve el anuncio y dónde se mide la venta.",
      hacer: "Esta semana, pregúntale a tu contacto de retail media de cada cliente qué agentes de IA pueden comprar en su tienda y si esas ventas salen separadas en los reportes.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/walmart-is-letting-metas-muse-shop-its-shelves-but-on-its-own-terms/" }]
    },
    {
      id: "chatgptsalud", dep: "medios", peso: "secundaria",
      etiquetas: ["ChatGPT Ads", "Salud", "WebMD"],
      titular: "ChatGPT empieza a aceptar anuncios de hospitales en EE. UU., pero lejos de las conversaciones sensibles",
      corto: "ChatGPT abre anuncios de hospitales",
      cuerpo: "WebMD Ignite, la división de WebMD pa’ hospitales y proveedores de salud, anunció el martes su oferta de anuncios en ChatGPT. Las políticas de ChatGPT Ads ahora dan más espacio a la salud en EE. UU. (en otros países sigue «generalmente prohibida») y OpenAI puede aceptar caso por caso hospitales, urgencias, seguros de salud, suplementos y dispositivos médicos de consumo. Por ahora solo ha aprobado sistemas de salud y proveedores, no aseguradoras. Los anuncios no salen en conversaciones sensibles o personales, aunque la condición solo se insinúe. WebMD Ignite prueba unas 100 variaciones creativas con un centro de cardiología.",
      cifras: [
        { v: "30 %+", t: "de los estadounidenses ha usado chatbots pa’ consejos de salud, según WebMD Ignite" },
        { v: "~100", t: "variaciones creativas en prueba con un centro de cardiología" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Se abre una categoría regulada en ChatGPT, solo en EE. UU. y con formato chiquito: imagen, marca y un mensaje corto. El anunciante ve vistas y clics, pero no junto a qué conversación salió.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/marketers/healthcare-ads-are-coming-to-chatgpt/" }]
    },
    {
      id: "bestbuyads", dep: "medios", peso: "secundaria",
      etiquetas: ["Retail media", "Best Buy"],
      titular: "El nuevo CEO de Best Buy pone la publicidad entre sus prioridades: Best Buy Ads va pa’ un 10 % de crecimiento",
      corto: "Best Buy Ads crecería 10 % este año",
      cuerpo: "Jason Bonfig presentó sus primeros resultados como CEO de Best Buy. La empresa proyecta que Best Buy Ads crezca 10 % este año, después de facturar US$900 millones en 2025. Los ingresos del tercer trimestre fueron US$10,200 millones, 5.8 % más que hace un año, y las ventas comparables subieron 6.1 %, lo mejor en cinco años. El margen bruto doméstico llegó a 24.1 %, impulsado en parte por Best Buy Ads.",
      cifras: [
        { v: "10 %", t: "crecimiento proyectado de Best Buy Ads este año" },
        { v: "US$900M", t: "lo que facturó Best Buy Ads en 2025" },
        { v: "~10,000", t: "productos de Best Buy en TikTok Shop" }
      ],
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/commerce/advertising-is-a-top-priority-for-best-buys-new-ceo/" }]
    },

    {
      id: "chewy", dep: "creatividad", peso: "principal",
      etiquetas: ["Navidad", "Chewy", "Stop motion"],
      titular: "Chewy se va al stop motion hecho a mano pa’ su primera Navidad en TV nacional, y sin IA",
      corto: "Chewy hace su Navidad en stop motion",
      cuerpo: "Chewy, la tienda de productos pa’ mascotas, usa por primera vez el stop motion en un spot de TV nacional. La campaña sale de «Chewy Claus», la iniciativa en la que los dueños le escriben a la marca en nombre de sus mascotas, y muestra cómo una caja de Chewy lleva a un perro y un gato a un mundo de juguetes, golosinas y nieve. Hay un spot de 30 segundos, «A Holiday Dream», y uno de 15, «A Holiday of Treats». Según Melissa Bell, directora de marca, no se usó IA: los muñecos se hicieron a mano, inspirados en animales reales. Chewy también va a ayudar a pagar adopciones en refugios durante diciembre.",
      cifras: [
        { v: "~80 %", t: "de los dueños de mascotas piensa regalarle algo a su animal esta Navidad (datos de Chewy)" },
        { v: "21 %", t: "de Gen Z y millennials piensa gastar US$100 o más" },
        { v: "0", t: "IA en la producción: muñecos hechos a mano" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Levi’s, Prada y ahora Chewy usan técnicas manuales pa’ diferenciarse de los anuncios hechos con IA. Lo artesanal se volvió una señal de cuidado que el público nota.",
      hacer: "Antes del viernes, escoge una pieza navideña de un cliente y haz un boceto de cómo se vería en stop motion o con algo hecho a mano, con costo y tiempo estimados.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/chewy-jumps-on-stop-motion-animation-trend-lighting-up-holiday-ads/875412/" }]
    },
    {
      id: "carlsjr", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Cuentas", "Carl’s Jr.", "David&Goliath"],
      titular: "Carl’s Jr. escoge a David&Goliath como su primera agencia de récord",
      corto: "Carl’s Jr. se va con David&Goliath",
      cuerpo: "Carl’s Jr. nombró a David&Goliath, del grupo Innocean Worldwide, como agencia de récord. Antes no tenía una fija y trabajaba con agencias por proyecto. La agencia se encarga de estrategia de marca, creatividad, marketing experiencial, producción y storytelling, con el encargo de apoyarse en la historia de la marca y conectar con consumidores más jóvenes. El primer trabajo llega en el primer trimestre de 2027 y acompaña la estrategia «Burger Revolution», de hamburguesas cocinadas al momento.",
      cifras: [
        { v: "T1 2027", t: "cuando sale el primer trabajo de la agencia" }
      ],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/carls-jr-taps-davidgoliath-as-marketing-focus-turns-to-boldness/875471/" }]
    },

    {
      id: "metanavidad", dep: "planning", peso: "principal",
      etiquetas: ["Navidad", "Meta", "Ipsos"],
      titular: "Meta e Ipsos: el 37 % de los compradores navideños descubre regalos en las redes, casi igual que en los buscadores",
      corto: "37 % descubre regalos en redes",
      cuerpo: "Meta compartió datos de un estudio de Ipsos con 14,473 compradores en 18 países de Norteamérica, Latinoamérica, Europa y Asia-Pacífico. En todos esos mercados, el 37 % de los compradores de temporada usa las redes pa’ descubrir e inspirarse con regalos, cerca de los buscadores (41 %) y por encima de los anuncios de TV (27 %). El video es el contenido que más influye. Los que compran por redes gastan más: el 49 % piensa gastar más que el año pasado (36 % del total), compran en más categorías (5.4 contra 4.3) y se regalan algo a sí mismos con más frecuencia (83 % contra 67 %).",
      cifras: [
        { v: "37 %", t: "usa las redes pa’ descubrir regalos (41 % los buscadores, 27 % la TV)" },
        { v: "49 % vs. 36 %", t: "compradores por redes que piensan gastar más, contra el total" },
        { v: "14,473", t: "compradores encuestados en 18 países" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "El estudio incluye Latinoamérica y pone a las redes casi al nivel del buscador pa’ descubrir regalos. El comprador que llega por redes, además, gasta más y compra en más categorías.",
      hacer: "Esta semana, revisa el plan navideño de un cliente de retail: si las redes no tienen video ni reseñas de clientes, propón moverles presupuesto antes del 1 de diciembre.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-says-festive-shoppers-use-social-media-for-gift-discovery/875523/" }]
    },
    {
      id: "glp1", dep: "planning", peso: "secundaria",
      etiquetas: ["Consumo", "Salud", "GLP-1"],
      titular: "Los hogares de EE. UU. con alguien en GLP-1 pasan de 9 % a 21 %, y la mesa de Acción de Gracias cambia",
      corto: "El GLP-1 cambia la mesa de Acción de Gracias",
      cuerpo: "Según un análisis de PwC con datos de encuestas de Numerator, los hogares de EE. UU. con un usuario actual de medicamentos GLP-1, como Ozempic, Wegovy o Mounjaro, subieron de 9 % en enero de 2025 a 21 % en mayo de 2026. Una encuesta de Gartner encontró que el 10 % de los consumidores tomó uno en los últimos 12 meses. Pa’ esta temporada se espera más proteína y menos dulces y acompañantes; Omaha Steaks, por ejemplo, está pasando de platos con muchos ingredientes a proteínas de un solo ingrediente.",
      cifras: [
        { v: "9 % → 21 %", t: "hogares de EE. UU. con un usuario de GLP-1, de enero 2025 a mayo 2026" },
        { v: "10 %", t: "de los consumidores tomó un GLP-1 en los últimos 12 meses (Gartner)" }
      ],
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/commerce/soaring-glp-1-use-is-changing-the-thanksgiving-table/" }]
    },

    {
      id: "australiafeed", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "Australia", "Algoritmos"],
      titular: "Australia avanza la ley que obliga a las redes a dar un feed sin algoritmo, con multas de hasta 5 % de la facturación global",
      corto: "Australia empuja el feed sin algoritmo",
      cuerpo: "El Gobierno de Australia pasó otra etapa en el Senado con su proyecto pa’ obligar a las redes sociales a dejar que to’s los usuarios se salgan de los algoritmos de engagement y vean un feed cronológico, solo con las cuentas que siguen. Según ABC News, citado por Social Media Today, el Gobierno laborista hizo un trato con los Verdes: la multa máxima por incumplir sube a 5 % de la facturación global de la plataforma, en vez de los 109.2 millones de dólares que proponía al principio. El acuerdo también le da al Gobierno poder pa’ crear más adelante un defensor digital pa’ reclamos pequeños.",
      cifras: [
        { v: "5 %", t: "de la facturación global: la multa máxima tras el trato con los Verdes" },
        { v: "109.2 millones", t: "de dólares: el tope que proponía antes el Gobierno" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Si el usuario puede apagar la recomendación, el alcance orgánico depende más de que te sigan de verdad.",
        "Australia puede servir de caso de prueba pa’ leyes parecidas en otros mercados."
      ],
      hacer: "Esta semana, saca de cada cuenta social de un cliente qué parte del alcance viene de seguidores y qué parte de recomendaciones, pa’ saber cuánto se expone si el feed se vuelve cronológico.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/australian-government-moves-ahead-with-algorithm-opt-out-legislation/875698/" }]
    },
    {
      id: "musereino", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Meta Muse", "Reino Unido"],
      hilo: "Muse",
      titular: "Muse llega al Reino Unido con los términos revisados por el regulador de competencia",
      corto: "Muse llega al Reino Unido con aval de la CMA",
      cuerpo: "Meta lanzó sus agentes de IA Muse en el Reino Unido. La Autoridad de Competencia y Mercados (CMA) dijo que trabajó con Meta en los términos y condiciones de Muse pa’ que cumplan con las leyes de consumo, y que va a monitorear su uso. Meta arrancó con aliados como Marks & Spencer, Currys, Ocado Retail, Argos, Sainsbury’s, ASOS y JD Sports. El lanzamiento llega con dudas de seguridad: Reuters reportó que Muse accedía a mensajes de otras apps, como Signal, usando permisos de notificaciones en Android y herramientas de accesibilidad en macOS.",
      cifras: [
        { v: "6", t: "mercados con Muse: EE. UU., Canadá, Japón, Singapur, Australia y Reino Unido" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-expands-muse-to-the-uk/875697/" }]
    },

    {
      id: "shortsminiaturas", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "Shorts", "Miniaturas"],
      titular: "YouTube abre las miniaturas propias de Shorts a to’s los creadores",
      corto: "Shorts ya deja poner tu propia miniatura",
      cuerpo: "To’s los creadores de YouTube ya pueden subir una miniatura personalizada pa’ sus Shorts en YouTube Studio, al publicar o después, desde el celular o la computadora. Si no quieren una imagen propia, pueden escoger un cuadro sugerido del video. Rene Ritchie, jefe editorial de YouTube, dijo que también se puede usar Ask Studio, el asistente con IA, pa’ sacar ideas de miniaturas. La función empezó en junio pa’ los del Programa de Socios y se fue abriendo poco a poco; en 2024 YouTube decía que las miniaturas de Shorts no importaban tanto.",
      cifras: [
        { v: "Todos", t: "los creadores ya tienen la función" },
        { v: "Junio", t: "mes en que arrancó con el Programa de Socios" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Los Shorts también salen en el canal, en la búsqueda y en sugeridos, donde la miniatura decide el toque. Ahora la portada es tuya y no un cuadro cualquiera del video.",
      hacer: "Esta semana, diseña una plantilla de miniatura pa’ los Shorts de un cliente y cámbiala en sus cinco Shorts más vistos de noviembre; compara las vistas en dos semanas.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-enables-custom-shorts-thumbnails/875687/" }]
    },
    {
      id: "mosserimuse", dep: "content", peso: "secundaria",
      etiquetas: ["Instagram", "Meta Muse", "IA"],
      hilo: "Muse",
      titular: "Mosseri le explica a los social media managers pa’ qué sirve Muse: ideas, análisis y tendencias",
      corto: "Mosseri: Muse sirve pa’ ideas y tendencias",
      cuerpo: "En una entrevista con la creadora Marina Mogilko («Silicon Valley Girl»), Adam Mosseri, jefe de Instagram, dijo que Muse sirve pa’ generar ideas: decirle tu meta, pedirle 10, 20, 30 o 50 ideas, decirle cuáles te gustan y seguir iterando. También dijo que ayuda a evaluar qué funcionó y qué no en las publicaciones, a categorizar contenido y a ver qué tendencias se mueven en tu industria, no solo en Instagram. Sobre analizar seguidores, dijo que Muse da cierta evaluación de la audiencia, pero que todavía la están mejorando.",
      cifras: [
        { v: "10 a 50", t: "ideas que Mosseri sugiere pedirle a Muse pa’ empezar" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-chief-shares-muse-tips-for-social-media-managers/875426/" }]
    },

    {
      id: "remesas", dep: "rd", peso: "principal", para: ["planning", "medios"],
      etiquetas: ["Remesas", "Banco Central", "Consumo"], fecha: "24 nov 2026",
      titular: "Las remesas de octubre suben 14.8 % y el año ya pasa de US$10,500 millones",
      corto: "Remesas de octubre suben 14.8 %",
      cuerpo: "Santo Domingo.— Según el Banco Central, entre enero y octubre de 2026 entraron US$10,598.4 millones en remesas, US$720 millones más que en el mismo período de 2025, un alza de 7.3 %. Solo en octubre llegaron US$1,108.6 millones, 14.8 % más que en octubre del año pasado y US$51.5 millones más que en septiembre. Estados Unidos mandó el 81.4 % de los flujos formales de octubre (US$835.7 millones), seguido de España con 6.1 % (US$59.9 millones).",
      cifras: [
        { v: "US$10,598.4M", t: "en remesas de enero a octubre, 7.3 % más que en 2025" },
        { v: "+14.8 %", t: "en octubre frente a octubre de 2025" },
        { v: "81.4 %", t: "de los flujos formales de octubre vino de EE. UU." }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Las remesas aceleran justo antes de Navidad: más dinero en manos de las familias pa’ diciembre y una diáspora en EE. UU. que también decide qué se compra aquí.",
      hacer: "Esta semana, proponle a un cliente de consumo o de servicios financieros una pieza navideña pa’ la diáspora en EE. UU. que invite a mandar o regalar desde allá.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/economia/20261124/remesas-alcanzaron-us-10-598-4-millones-periodo-enero-octubre-2026_931330.html" }]
    },
    {
      id: "pasajerosnavidad", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Aeropuertos", "Navidad"], fecha: "24 nov 2026",
      titular: "La JAC espera 3.3 millones de pasajeros aéreos pa’ Navidad y Año Nuevo",
      corto: "3.3 millones de pasajeros pa’ Navidad",
      cuerpo: "Santo Domingo.— Julio de Jesús Peña Guzmán, presidente de la Junta de Aviación Civil, dijo que el país espera unos 3.3 millones de pasajeros por vía aérea en la temporada alta, con el pico en diciembre y principios de enero. Los aeropuertos con más movimiento son Punta Cana, Las Américas, Santiago y Puerto Plata, y los mercados principales son Estados Unidos, Canadá y Europa. Las autoridades piden mantener funcionando las autogates y tener personal suficiente de Migración en las horas pico.",
      cifras: [
        { v: "3.3 millones", t: "de pasajeros aéreos esperados en la temporada navideña" },
        { v: "4", t: "aeropuertos principales: Punta Cana, Las Américas, Santiago y Puerto Plata" }
      ],
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/la-republica/ciudad/20261124/rd-espera-3-3-millones-pasajeros-aerea-festividades-navidenas-ano-nuevo_931356.html" }]
    },
    {
      id: "bancadigital", dep: "rd", peso: "secundaria", para: ["data", "planning"],
      etiquetas: ["Banca", "Digitalización", "Superintendencia de Bancos"], fecha: "24 nov 2026",
      titular: "El 81 % de las transacciones bancarias en RD ya se hace por canales digitales o de autoservicio",
      corto: "81 % de la banca ya es digital o autoservicio",
      cuerpo: "Santo Domingo.— En la sexta edición del Ranking de Digitalización bancaria, el superintendente de Bancos, Enmanuel Cedeño Brea, informó que al 31 de marzo de 2026 el 81 % de las transacciones del sistema financiero se hizo por canales digitales y físicos de autoservicio. Hay 5.2 millones de usuarios activos en aplicaciones móviles y más de dos millones en banca en línea, y el 100 % de los bancos múltiples tiene app. Cerca del 79 % de los bancos múltiples ya usa inteligencia artificial.",
      cifras: [
        { v: "81 %", t: "de las transacciones, por canales digitales y de autoservicio" },
        { v: "5.2 millones", t: "de usuarios activos en apps bancarias" },
        { v: "79 %", t: "de los bancos múltiples usa IA" }
      ],
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/389784/el-81-de-las-transacciones-financieras-en-rd-se-realiza-por-canales-digitales-y-de-autoservicio/" }]
    },
    {
      id: "abafraude", dep: "rd", peso: "secundaria", para: ["data", "content"],
      etiquetas: ["Fraude", "ABA", "Viernes Negro"], fecha: "24 nov 2026",
      titular: "La ABA avisa: mensajes falsos y robo de la línea del celular son los fraudes de la temporada de compras",
      corto: "ABA: ojo con el SIM swapping",
      cuerpo: "Santo Domingo.— La Asociación de Bancos Múltiples advirtió que el robo de contraseñas con mensajes y llamadas engañosas sigue siendo la principal vía de fraude, y que gana terreno el SIM swapping, en el que roban la línea del celular pa’ recibir los códigos de verificación. Andrés Bourdierd, del Comité de Seguridad Bancaria, pidió «tomarse cinco segundos» pa’ observar y verificar antes de hacer clic o pagar en el Viernes Negro, y recordó que los bancos nunca piden información sensible por teléfono ni por correo. El taller fue pa’ periodistas y creadores de contenido.",
      cifras: [
        { v: "5 segundos", t: "pa’ observar y verificar antes de hacer clic, pide la ABA" }
      ],
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/389773/mensajes-falsos-y-robo-de-linea-telefonica-los-fraudes-mas-usados-en-temporada-de-compras-advierte-la-aba/" }]
    },
    {
      id: "melissanunez", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Miss Universo", "Tendencia", "Redes"], fecha: "24 nov 2026 · San Juan",
      titular: "¡Wepa! Melissa Núñez se queda como primera finalista en Miss Universo 2026",
      corto: "Melissa Núñez, primera finalista en Miss Universo",
      cuerpo: "La dominicana Melissa Núñez quedó primera finalista de Miss Universo 2026, en una final en la que esperó el anuncio tomada de la mano con Jennifer Barreto, de Puerto Rico, que se llevó la corona en San Juan. Barreto, de 27 años, es la primera madre en ganar el certamen. Núñez ya había dado de qué hablar con su traje típico en el concurso.",
      cifras: [
        { v: "1.ª finalista", t: "el lugar de Melissa Núñez en Miss Universo 2026" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/25/miss-puerto-rico-jennifer-barreto-es-la-nueva-miss-universo-2026/3730831" }]
    },
    {
      id: "alofoke3", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Streaming", "YouTube", "Reality"], fecha: "23 nov 2026",
      titular: "Arranca «La Casa de Alofoke 3», con 20 participantes y 41 días por delante",
      corto: "Arranca «La Casa de Alofoke 3»",
      cuerpo: "La tercera temporada de «La Casa de Alofoke» arrancó la noche del lunes 23 de noviembre con una gala de alfombra roja transmitida por YouTube en el canal de Alofoke Radio Show. El reality dura 41 días y tiene 20 participantes, según Listín Diario. Carlos Durán va a coordinar las pruebas y dinámicas junto con Santiago Matías.",
      cifras: [
        { v: "41 días", t: "de duración del reality" },
        { v: "20", t: "participantes" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ medios y content es un evento de streaming local que corre to’a la temporada navideña, en YouTube.",
      fuentes: [{ nombre: "Listín Diario", url: "https://listindiario.com/entretenimiento/redes-sociales/20261124/casa-alofoke-3-arranca-glamour-polemicas-20-participantes_931338.html" }]
    }
  ],

  pizarra: ["walmartmuse", "chewy", "metanavidad", "australiafeed", "shortsminiaturas", "remesas"],

  frases: [
    { dep: "medios", texto: "Walmart dejó entrar al agente de Meta, pero por su puerta y con sus reglas: el acceso de los agentes ya es inventario.", uso: "para conversaciones de retail media y agentes de IA" },
    { dep: "planning", texto: "El 37 % de los compradores navideños descubre regalos en redes, casi lo mismo que en buscadores y más que en TV.", uso: "para defender video y reseñas en el plan navideño" },
    { dep: "creatividad", texto: "Chewy hizo su Navidad a mano, en stop motion y sin IA: lo artesanal se nota.", uso: "para proponer producción manual en piezas de temporada" },
    { dep: "data", texto: "Australia quiere que cualquier usuario pueda apagar el algoritmo, con multas de hasta 5 % de la facturación global.", uso: "para conversaciones de alcance orgánico y regulación" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Walmart le abre la tienda a Muse" },
      { id: "creatividad", texto: "La Navidad de Chewy en stop motion" },
      { id: "planning", texto: "El 37 % descubre regalos en redes" },
      { id: "data", texto: "Australia y el feed sin algoritmo" },
      { id: "content", texto: "Miniaturas propias en Shorts" },
      { id: "rd", texto: "Zoom a RD: remesas suben 14.8 %" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "walmartmuse", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "metanavidad", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Último empujón antes de diciembre: el 37 % de los compradores navideños descubre regalos en redes, y el 49 % de los que compran por redes piensa gastar más que el año pasado. Mete video y reseñas de clientes."
    },
    data: {
      tipo: "secreto", nota: "australiafeed", titulo: "Destapa el expediente",
      texto: "Con el trato con los Verdes, la multa máxima por no dar un feed sin algoritmo en Australia sube a [[5 % de la facturación global]], en vez de los [[109.2 millones de dólares]] que proponía el Gobierno."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "mosserimuse", titulo: "Arma tu pedido pa’ Muse",
      intro: "Soy social media manager de una marca y mi meta para diciembre es crecer en Instagram. Ayúdame con lo siguiente:",
      opciones: [
        "Dame 20 ideas de contenido para esa meta, y luego te digo cuáles me gustan para seguir iterando",
        "Evalúa qué funcionó y qué no en mis publicaciones recientes",
        "Organiza mis publicaciones por categorías de contenido",
        "Dime qué tendencias se están moviendo en mi industria en redes, no solo en Instagram"
      ],
      cierre: "Señala qué partes de tu respuesta necesitan revisión humana antes de publicarlas."
    },
    rd: {
      tipo: "pregunta", nota: "remesas", titulo: "La pregunta del patio",
      p: "¿Cuánto crecieron las remesas de octubre de 2026 frente a octubre de 2025, según el Banco Central?",
      opciones: ["7.3 %", "14.8 %", "81.4 %"], correcta: 1,
      explicacion: "Llegaron US$1,108.6 millones en octubre, 14.8 % más. El 7.3 % es el alza de enero a octubre, y el 81.4 % es la parte que vino de EE. UU."
    }
  }
};
