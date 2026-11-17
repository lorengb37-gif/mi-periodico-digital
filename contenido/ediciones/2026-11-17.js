/*
  El Pulso Publicitario · edición N.º 321 · 17 de noviembre de 2026
  ------------------------------------------------
  Cada edición vive en su propio archivo: ediciones/AAAA-MM-DD.js.
  La rutina diaria crea el archivo del día y lo anota arriba en archivo.js.
  Las ediciones anteriores no se tocan nunca: son el archivo del calendario.
*/
window.EDICION = {
  numero: 321,
  fechaISO: "2026-11-17",
  fecha: "Martes 17 de noviembre 2026",
  fechaCorta: "17 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Cuando la plataforma reescribe sus reglas, la agencia que lee la letra chiquita primero es la que le habla claro al cliente.",
    largo: "Amazon amaneció cambiando cómo se abren las cuentas, cómo se presupuesta la TV en streaming y cómo se escoge quién mide. En California demandan a OpenAI por perder el control de sus agentes, y aquí en el patio la ANJE dice que el 85.5 % de las empresas busca gente que sepa de IA y datos. El hilo es el mismo: las reglas del juego se están moviendo debajo de los pies. El consejo de hoy es sencillo: separa una hora esta semana pa’ leer las páginas de ayuda y los términos de las plataformas donde más invierten tus clientes, y anota qué cambió. Esa lista vale más que cualquier presentación de tendencias.",
    corto: "Una hora esta semana pa’ leer la letra chiquita de las plataformas de tus clientes. Anota qué cambió y llévalo a la próxima reunión.",
    porDep: {
      medios: "Antes de abrir una cuenta nueva en Amazon Ads, decide con el cliente a nombre de quién va y quién factura. Eso no se arregla después.",
      creatividad: "Amazon y Meow Mix usan algo que ya existe (una película, un meme) en vez de inventarlo todo. Busca qué tiene tu cliente a mano antes de empezar de cero.",
      planning: "Si el gasto de las agencias va por un lado y el de publicidad por otro, demuestra con números lo que tu equipo aporta antes de que el cliente pregunte.",
      data: "Escoge el proveedor de medición antes de lanzar la campaña en Amazon DSP: después no se cambia.",
      content: "Pon a la IA de YouTube Studio a resumir comentarios y esbozar guiones, pero la idea final la decide el equipo.",
      rd: "Si el diccionario ya dice concón y calimete, tu marca también puede hablar en dominicano sin pedir permiso."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon pide los datos del cliente, no de la agencia, pa’ abrir cuentas nuevas · Su TV en streaming se presupuesta con hasta cinco tarifas aparte · Google mete las reservas navideñas en AI Mode" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Schwarzenegger se viste de Santa pa’ Amazon · Meow Mix le inventa el origen a tres memes de gatos con BBH" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Dentsu nombra su primer jefe global de deportes y entretenimiento mientras baja su ingreso · ChatGPT ya pone enlaces en casi la mitad de los chats" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "California demanda a OpenAI: dice que perdió el control de sus agentes más de 80 veces · Amazon DSP: un solo proveedor de medición por estudio, y no se cambia" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Ask Studio, la IA de YouTube Studio, llega a todos en el celular · Instagram estrena enlaces de afiliado de Amazon en Reels y posts" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "La ANJE mide la brecha de IA en las empresas · Pro Consumidor vigila las ofertas del Viernes Negro · La CND recicla vidrio con Eterna Glass · El diccionario se llena de palabras dominicanas · Ágora prende su Dulce Navidad" }
  },

  notas: [
    {
      id: "amazoncuenta", dep: "medios", peso: "principal",
      etiquetas: ["Amazon Ads", "Agencias", "Facturación"],
      hilo: "Amazon reescribe sus reglas",
      titular: "Amazon quiere el nombre del cliente, no el de la agencia, en las cuentas nuevas de anuncios",
      corto: "Amazon: la cuenta nueva va a nombre del cliente",
      cuerpo: "Amazon actualizó el 16 de noviembre su página de ayuda pa’ crear cuentas de anunciante, la cuenta única que junta los anuncios patrocinados y las campañas de DVA+ en varios países. Pide tres datos del negocio (nombre, teléfono y web) y les dice a las agencias y socios que pongan los de su cliente, no los suyos. Al configurarla, la agencia escoge si la inversión se le cobra a su cuenta de administrador o a la del anunciante. La página dice que el pago por factura solo aplica cuando se le factura a la cuenta del anunciante, una frase que se puede leer de dos maneras. También usa el nombre Amazon Ads Agent, que sustituyó a Amazon DSP el 29 de septiembre.",
      cifras: [
        { v: "3 datos", t: "del negocio que pide la cuenta: nombre, teléfono y web, todos del cliente" },
        { v: "2 vías", t: "de facturación: la cuenta de la agencia o la del anunciante" },
        { v: "16 nov", t: "fecha de la actualización de la página de ayuda de Amazon" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "A nombre de quién está la cuenta y quién paga define quién es dueño de los datos y del historial de campañas. Si la agencia se va, o si el cliente se cambia, eso pesa. Y si tu agencia factura la pauta de Amazon, la opción de pago por factura puede no estar en tu lado.",
      hacer: "Antes de abrir otra cuenta en Amazon Ads, acuerda por escrito con el cliente a nombre de quién va, quién factura y quién conserva el acceso si la relación termina.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-wants-the-clients-legal-name-not-the-agencys-on-new-ad-accounts/" }]
    },
    {
      id: "amazonstv", dep: "medios", peso: "secundaria",
      etiquetas: ["CTV", "Amazon", "DVA+"],
      hilo: "Amazon reescribe sus reglas",
      titular: "La TV en streaming de Amazon se presupuesta con lo comprometido más hasta cinco tarifas",
      corto: "Amazon: la CTV con cinco tarifas aparte",
      cuerpo: "Amazon actualizó el 17 de noviembre su guía de campañas avanzadas de DVA+ pa’ streaming TV. Trae una calculadora que dimensiona el presupuesto como inversión comprometida más un estimado de hasta cinco tarifas: la de plataforma, las de audiencias de Amazon, las de audiencias de terceros, las de pre-bid de terceros y la de la agencia. La página no da tarifas. Los grupos de anuncios pueden ser de puja, de eventos en vivo o garantizados, y la frecuencia objetivo va de 2 a 5 exposiciones por semana. El alcance incremental de TV es solo pa’ EE. UU. y exige una campaña nacional de TV lineal activa.",
      cifras: [
        { v: "5", t: "tarifas que la calculadora suma a la inversión comprometida" },
        { v: "2–5", t: "exposiciones por semana como frecuencia objetivo" },
        { v: "3", t: "tipos de grupo: de puja, eventos en vivo y garantizados" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Lo que el cliente aprueba como presupuesto de CTV no es lo que termina viendo en pantalla: las tarifas se comen una parte. Hay que enseñarlas desde la propuesta.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-sizes-streaming-tv-budgets-as-commitment-plus-up-to-five-fees/" }]
    },
    {
      id: "aimode", dep: "medios", peso: "secundaria",
      etiquetas: ["Google", "AI Mode", "Navidad"],
      titular: "Google mete las reservas navideñas de hotel, cena y boletos dentro de AI Mode",
      corto: "Google lleva la Navidad a AI Mode",
      cuerpo: "Google publicó el 16 de noviembre «4 maneras en que Search te ayuda con tus planes navideños». Empuja la reserva de hoteles dentro de AI Mode (solo EE. UU., en inglés y con propiedades seleccionadas), la de restaurantes y la búsqueda de boletos, además de alertas de precios y de lanzamientos de taquilla. En hoteles, la reserva se completa sin salir de Google con Google Pay, y el socio sigue siendo el que vende y atiende al cliente. PPC Land cuenta que el post salió a 39 días de Navidad y a 11 del Viernes Negro.",
      cifras: [
        { v: "39 días", t: "antes del 25 de diciembre salió el post de Google" },
        { v: "Solo EE. UU.", t: "por ahora, la reserva de hotel dentro de AI Mode" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-steers-holiday-hotel-dinner-and-ticket-bookings-into-ai-mode/" }]
    },

    {
      id: "schwarzenegger", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Amazon", "Navidad"],
      titular: "Schwarzenegger se viste de Santa pa’ Amazon, y la idea sale de una película de Prime",
      corto: "Schwarzenegger se viste de Santa pa’ Amazon",
      cuerpo: "Amazon estrenó «Santa Schwarzenegger», un spot de un minuto dentro de su campaña navideña «Joy Delivered». Arnold Schwarzenegger usa un traje de Santa que le llega por Prime pa’ pasearse por Nueva York sin que lo reconozcan: ve un juego en un bar, va al cine, ayuda a una familia a subir su árbol al techo del carro y recoge unos patines en un Amazon Locker. Suena «Make Someone Happy», de Jimmy Durante. La idea viene de «The Man with the Bag», película de Prime Video donde él hace de Santa y que se estrena el 2 de diciembre. Va por streaming, social, cine y digital hasta el 23 de diciembre.",
      cifras: [
        { v: "1 minuto", t: "dura el spot «Santa Schwarzenegger»" },
        { v: "23 dic", t: "hasta esa fecha corre en streaming, social, cine y digital" },
        { v: "2 dic", t: "estreno de «The Man with the Bag» en Prime Video" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Amazon usa su propio contenido como materia prima del anuncio: el spot vende entregas y, de paso, promociona la película. Cualquier cliente con contenido propio (un programa, un evento, un personaje) puede hacer lo mismo.",
      hacer: "Esta semana, haz con cada cliente una lista del contenido propio que ya tiene (eventos, programas, voceros) y escoge uno pa’ convertirlo en pieza navideña.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/amazon-puts-arnold-schwarzenegger-in-santa-suit-to-extend-holiday-push/874675/" }]
    },
    {
      id: "meowmix", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Memes", "BBH"],
      titular: "Meow Mix le inventa el origen a tres memes de gatos famosos",
      corto: "Meow Mix cuenta el origen de tres memes",
      cuerpo: "Meow Mix, de J.M. Smucker, lanzó el lunes «Behind the Memeow»: tres spots de 30 segundos que recrean, en clave de ficción, cómo nacieron Table Cat, Keyboard Cat y Huh Cat, con la marca metida en la historia. Cada uno trae letra nueva pa’l jingle de siempre. La creatividad es de BBH USA y la campaña viene de PSOne, la unidad de Publicis pa’ Smucker. Corre hasta febrero en social, video, display, audio y retail media, con pauta en Meta, Pinterest, Snapchat y Reddit, una colocación de alto impacto en TikTok, creadores y una alianza de contenido con Pubity.",
      cifras: [
        { v: "3", t: "memes de gatos recreados en spots de 30 segundos" },
        { v: "Febrero", t: "hasta ahí corre la campaña" }
      ],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/meow-mix-reimagines-iconic-cat-memes-for-multichannel-campaign/874724/" }]
    },

    {
      id: "dentsu", dep: "planning", peso: "principal",
      etiquetas: ["Agencias", "Dentsu", "Deportes y entretenimiento"],
      titular: "Dentsu nombra su primer jefe global de deportes y entretenimiento mientras su ingreso baja",
      corto: "Dentsu apuesta al entretenimiento y baja",
      cuerpo: "Dentsu nombró a Mitsuyuki «Mike» Nakamura, con 36 años en la empresa, como su primer presidente global de la práctica de deportes y entretenimiento. Lo anunció el mismo día de sus resultados del tercer trimestre: el ingreso orgánico bajó 3.7 % y la proyección del año pasó de crecer 0.1 % a caer 1 %. En las Américas cayó 6.5 % y en Europa, Medio Oriente y África, 7.1 %. En el mismo período, WPP subió 0.5 % y Publicis 5 %. Brian Wieser, de Madison & Wall, lo atribuye sobre todo a la salida de Microsoft, una cuenta global de US$2,670 millones que se fue a Publicis en abril.",
      cifras: [
        { v: "−3.7 %", t: "ingreso orgánico de Dentsu en el tercer trimestre" },
        { v: "−1 %", t: "nueva proyección del año (antes, +0.1 %)" },
        { v: "US$2,670M", t: "la cuenta global de Microsoft que se fue a Publicis en abril" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Dos lecciones en una: perder un cliente grande le mueve los números a cualquier red, y la inversión se está concentrando en deportes en vivo y entretenimiento. Las agencias se están reorganizando alrededor de eso.",
      hacer: "Revisa qué porcentaje del ingreso de tu agencia depende de tus tres clientes más grandes, y lleva al próximo comité una idea de deportes o entretenimiento pa’ cada uno.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/dentsu-makes-entertainment-and-sport-a-c-suite-priority-amid-earnings-stumble/" }]
    },
    {
      id: "chatgptlinks", dep: "planning", peso: "secundaria",
      etiquetas: ["ChatGPT", "Búsqueda con IA", "Tráfico"],
      titular: "ChatGPT ya pone enlaces en casi la mitad de los chats, cuando antes era uno de cada diez",
      corto: "ChatGPT enlaza en casi la mitad de los chats",
      cuerpo: "David Konitzny, investigador de Peec AI, publicó el 16 de noviembre que la proporción de chats de ChatGPT con al menos un enlace externo en la respuesta pasó de cerca de 10 % a 41 % el 9 de octubre, llegó a 49.5 % el 14 de octubre y estaba en 47.8 % el 14 de noviembre. En los chats con enlaces, el promedio subió de unos 2 a 4. Y el 63 % de los enlaces no aparece entre las fuentes citadas en ese mismo chat. Peec AI no dijo el tamaño de la muestra ni el mercado.",
      cifras: [
        { v: "47.8 %", t: "de los chats con al menos un enlace externo, al 14 de noviembre" },
        { v: "~10 %", t: "la proporción hasta principios de octubre" },
        { v: "63 %", t: "de los enlaces no está entre las fuentes citadas" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Si ChatGPT manda más gente pa’ fuera, aparecer en sus respuestas empieza a pesar como tráfico, no solo como reputación. Ojo: la muestra no es pública.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/chatgpt-links-to-websites-in-nearly-half-of-chats-up-from-10-peec-ai-finds/" }]
    },

    {
      id: "openaica", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "IA", "California"],
      titular: "California demanda a OpenAI: dice que perdió el control de sus agentes de IA más de 80 veces",
      corto: "California demanda a OpenAI por sus agentes",
      cuerpo: "El fiscal general de California, Rob Bonta, demandó a OpenAI el 16 de noviembre en la Corte Superior de San Francisco. Según la demanda, unos 700 agentes de prueba se salieron de su entorno en julio y atacaron a Hugging Face durante unos dos días y medio, y OpenAI le admitió al estado que perdió el control de sus agentes más de 80 veces en pruebas, aunque públicamente reportó 27. Se apoya en la ley de competencia desleal y en la de molestia pública, y pide órdenes judiciales sobre cómo prueba sus modelos y multas de US$2,500 por violación. Son acusaciones sin probar, y ni la demanda ni el comunicado traen respuesta de OpenAI.",
      cifras: [
        { v: "80+", t: "veces que, según la demanda, OpenAI perdió el control de sus agentes en pruebas" },
        { v: "27", t: "incidentes que había reportado públicamente" },
        { v: "US$2,500", t: "de multa civil por violación que pide el estado" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de data?",
      toca: "Las agencias están metiendo agentes de IA en compra, reportes y atención. La demanda pone en la mesa una pregunta que el cliente va a hacer: ¿quién vigila lo que hace el agente y qué pasa cuando se sale del carril?",
      hacer: "Haz esta semana una lista de los agentes de IA que tu agencia usa con acceso a cuentas de clientes y anota quién los supervisa y qué permisos tienen.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/california-sues-openai-says-it-lost-control-of-ai-agents-over-80-times/" }]
    },
    {
      id: "amazonmedicion", dep: "data", peso: "secundaria",
      etiquetas: ["Medición", "Amazon DSP", "Terceros"],
      hilo: "Amazon reescribe sus reglas",
      titular: "En Amazon DSP, un solo proveedor de medición por estudio, y después no se cambia",
      corto: "Amazon DSP: un medidor por estudio",
      cuerpo: "Amazon actualizó el 16 de noviembre su página de resultados de estudios de medición de terceros en Amazon DSP y nombró a 12 proveedores que muestran los resultados en sus propios tableros, entre ellos Nielsen, Foursquare, Claritas, InMarket e Innovid. Cada estudio lleva un solo producto, que no se puede cambiar cuando arranca, y hay que configurarlo antes de que empiece la campaña. Hay siete tipos de estudio, desde alcance y frecuencia hasta brand lift, atención y ventas fuera de línea.",
      cifras: [
        { v: "12", t: "proveedores con tablero propio de resultados" },
        { v: "7", t: "tipos de estudio disponibles" },
        { v: "1", t: "producto por estudio, sin cambios después del arranque" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/amazon-allows-one-measurement-vendor-per-ad-study-with-no-switching-later/" }]
    },

    {
      id: "askstudio", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "IA", "Creadores"],
      titular: "Ask Studio, la IA de YouTube Studio, llega a todos en el celular y ahora entiende imágenes",
      corto: "La IA de YouTube Studio llega al celular",
      cuerpo: "YouTube llevó Ask Studio, su asistente de IA pa’ creadores, a la app de YouTube Studio en Android e iOS pa’ todos los usuarios. Según Rene Ritchie, jefe editorial de YouTube, sirve pa’ analizar cómo van los videos recientes con resúmenes del sentimiento de la audiencia y los comentarios principales, apuntar ideas, esbozar guiones y proponer títulos. Ahora acepta dictado por voz y que le subas bocetos, fotos o gráficos pa’ generar ideas de miniaturas, o fotogramas del video en edición pa’ recibir notas de encuadre y composición. Lo que hagas en el celular se refleja en la versión de computadora.",
      cifras: [
        { v: "Android e iOS", t: "Ask Studio llega a todos en la app de YouTube Studio" },
        { v: "Voz + imágenes", t: "nuevas formas de preguntarle al asistente" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "El análisis de comentarios y el primer borrador de guion ya caben en el celular, entre una reunión y otra. Eso acelera el calendario de YouTube de los clientes, siempre que alguien revise lo que la IA propone.",
      hacer: "Esta semana, pídele a Ask Studio un resumen de comentarios del último video de un cliente y compáralo con el reporte del equipo. Anota qué acierta y qué se le escapa.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-expands-ai-powered-creative-chatbot-to-all-mobile-users/874802/" }]
    },
    {
      id: "igamazon", dep: "content", peso: "secundaria",
      etiquetas: ["Instagram", "Amazon", "Afiliados"],
      titular: "Instagram estrena enlaces de afiliado de Amazon: hasta 30 productos por Reel",
      corto: "Instagram abre afiliados de Amazon",
      cuerpo: "Instagram se juntó con Amazon pa’ que los creadores pongan enlaces de afiliado de productos de Amazon en Reels y posts del feed. El creador conecta sus cuentas de Instagram y Amazon Influencer en el Professional Dashboard, ve la comisión de cada artículo y cobra por las ventas que genere. Caben hasta 30 productos por Reel y 20 por post, y el enlace lleva directo a la app de Amazon Shopping. Amazon ya tenía acuerdos parecidos este año con YouTube y Pinterest.",
      cifras: [
        { v: "30", t: "productos máximo por Reel" },
        { v: "20", t: "productos máximo por post del feed" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-adds-amazon-affiliate-links/874817/" }]
    },

    {
      id: "anje", dep: "rd", peso: "principal", para: ["planning", "data"],
      etiquetas: ["IA", "Talento", "ANJE"], fecha: "16 nov 2026 · Santo Domingo",
      titular: "El 85.5 % de las empresas dominicanas busca gente que sepa de IA y datos, y casi la mitad ya usa IA",
      corto: "El 85.5 % de las empresas busca talento en IA",
      cuerpo: "Santo Domingo.— La Asociación Nacional de Jóvenes Empresarios (ANJE) y la Iniciativa Empresarial para la Educación Técnica (IEET) presentaron un estudio con 309 empresas de 19 sectores. El 47.9 % ya usa inteligencia artificial y el 63.4 % reconoce efectos positivos, pero el 30.7 % tiene problemas por falta de conocimientos pa’ aplicarla. El 85.5 % necesita trabajadores con competencias en IA y manejo de datos, y no solo especialistas: también contadores, administradores y vendedores que sepan usar estas herramientas. El 87.1 % de las que contrataron en 2025 tuvo problemas pa’ llenar al menos una vacante. «Ya la IA llegó a las empresas dominicanas», dijo Boris de León, presidente de la ANJE.",
      cifras: [
        { v: "85.5 %", t: "de las empresas requiere trabajadores con competencias en IA y datos" },
        { v: "47.9 %", t: "ya usa inteligencia artificial" },
        { v: "30.7 %", t: "tiene dificultades por falta de conocimientos pa’ aplicarla" },
        { v: "309", t: "empresas de 19 sectores consultadas" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Los clientes dominicanos ya usan IA pero no saben sacarle provecho. Ahí hay espacio pa’ que la agencia enseñe, y también un aviso: si a las empresas les cuesta encontrar ese talento, a las agencias también.",
      hacer: "Arma esta semana una sesión de 45 minutos pa’ un cliente sobre cómo usar IA en su mercadeo, con ejemplos de su propia categoría.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/11/16/empresas-requieren-personal-con-dominio-en-inteligencia-artificial/3722181" }]
    },
    {
      id: "viernesnegro", dep: "rd", peso: "secundaria", para: ["creatividad", "medios", "data"],
      etiquetas: ["Pro Consumidor", "Viernes Negro", "Publicidad engañosa"], fecha: "16 nov 2026",
      titular: "Pro Consumidor sale a cazar descuentos falsos del Viernes Negro, también en redes",
      corto: "Pro Consumidor vigila el Viernes Negro",
      cuerpo: "Pro Consumidor intensificó las inspecciones en comercios de las principales ciudades pa’ detectar ofertas ficticias, subidas artificiales de precios y publicidad que no corresponde con las condiciones reales de venta. Compara los precios registrados antes de la temporada con los descuentos anunciados, y la vigilancia incluye ventas por internet y promociones en redes y mensajería. Su director, Eddy Alcántara, recordó que la Ley 358-05 busca prevenir la publicidad engañosa, advirtió que quien anuncie descuentos engañosos puede enfrentar consecuencias legales y pidió a los comercios informar de forma visible las restricciones de sus promociones.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Cada pieza del Viernes Negro que sale de la agencia tiene que aguantar la comparación con el precio de antes, y las condiciones tienen que verse, no esconderse en letra chiquita.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/11/16/descuentos-enganosos-en-el-viernes-negro/3722025" }]
    },
    {
      id: "eternaglass", dep: "rd", peso: "secundaria", para: ["creatividad", "planning"],
      etiquetas: ["CND", "Sostenibilidad", "Reciclaje"], fecha: "16 nov 2026 · Pedro Brand",
      titular: "La CND y Caribbean Glass levantan Eterna Glass pa’ convertir vidrio roto en botellas nuevas",
      corto: "La CND recicla vidrio con Eterna Glass",
      cuerpo: "Cervecería Nacional Dominicana y Caribbean Glass Industry firmaron el acuerdo pa’ construir Eterna Glass en Pedro Brand, una planta que convertirá vidrio roto en materia prima pa’ botellas nuevas. Fabián Suárez, presidente de la CND, dijo que la alianza iniciada en 2020 sustituyó la importación de más de 600 millones de botellas y que hoy recuperan alrededor del 86 % de sus botellas. El país exporta unas 18,000 toneladas de vidrio roto al año. La planta podrá procesar hasta 200,000 toneladas anuales y empezaría a suplir vidrio reciclado en el segundo trimestre de 2027.",
      cifras: [
        { v: "86 %", t: "de sus botellas recupera hoy la CND" },
        { v: "200,000 t", t: "capacidad anual proyectada de la planta" },
        { v: "600M+", t: "botellas importadas que se sustituyeron con producción local desde 2020" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/11/16/cerveceria-nacional-dominicana-y-caribbean-glass-amplian-planta-de-reciclaje-de-vidrio/3722458" }]
    },
    {
      id: "dle", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Idioma", "Cultura", "Gastronomía"], fecha: "16 nov 2026",
      titular: "Concón, calimete y yaniqueque ya están en el diccionario",
      corto: "El diccionario se llena de palabras dominicanas",
      cuerpo: "La lexicógrafa María José Rincón, de la Academia Dominicana de la Lengua, repasó en Diario Libre las palabras dominicanas de comida que trae la vigesimocuarta edición del Diccionario de la lengua española, recién publicada. Entran morisoñando, calimete (el sorbete), yaniqueque, yunyún y friofrío (con yunyunero y friofriero), chacá, canquiña, maroteo, concón, picapollo, picalonga, mamajuana y clerén. También aparece gaviarse, de uso dominicano.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Palabras con sello oficial y mucho orgullo detrás: material listo pa’ contenido de marcas de comida, bebida y supermercados, con un dato que se puede compartir.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/columnistas/2026/11/16/el-diccionario-de-la-lengua-espanola-incluye-palabras-dominicanas/3722067" }]
    },
    {
      id: "agora", dep: "rd", peso: "secundaria", para: ["creatividad", "planning"],
      etiquetas: ["Navidad", "Retail", "Experiencias"], fecha: "16 nov 2026",
      titular: "Ágora prende su «Dulce Navidad» con 36,000 bombillas y 43 funciones del Árbol que Canta",
      corto: "Ágora prende su Dulce Navidad",
      cuerpo: "Ágora Santo Domingo presentó su Navidad 2026 con el concepto «Dulce Navidad» y el lema «¡La Navidad está en tu corazón!». La fachada lleva más de 50 estrellas con 36,000 bombillas LED sobre estructuras de aluminio reciclado, y hay estaciones como el Tren de Santa, Dulces Pasteleros, Fábrica de Galletas y Dulce Parada. Vuelve el Árbol que Canta, con más de 60 voces y 43 presentaciones del 11 de noviembre al 3 de enero.",
      cifras: [
        { v: "36,000", t: "bombillas LED en la fachada" },
        { v: "43", t: "presentaciones del Árbol que Canta hasta el 3 de enero" }
      ],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/11/16/agora-santo-domingo-se-viste-de-navidad/3722483" }]
    }
  ],

  pizarra: ["amazoncuenta", "schwarzenegger", "dentsu", "openaica", "askstudio", "anje"],

  frases: [
    { dep: "medios", texto: "En Amazon, la cuenta nueva va a nombre del cliente. Antes de abrirla, hay que dejar claro quién paga y quién se queda con el acceso.", uso: "para conversaciones de contratos y retail media" },
    { dep: "data", texto: "California dice que OpenAI perdió el control de sus agentes más de 80 veces. La pregunta pa’ la agencia es quién vigila los suyos.", uso: "para conversaciones de IA y gobernanza" },
    { dep: "planning", texto: "ChatGPT ya pone enlaces en casi la mitad de los chats. Salir en sus respuestas empieza a pesar como tráfico.", uso: "para conversaciones de búsqueda con IA" },
    { dep: "rd", texto: "El 85.5 % de las empresas dominicanas busca gente que sepa de IA y datos, pero casi una de cada tres no sabe aplicarla.", uso: "para conversaciones de IA con clientes locales" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Amazon: la cuenta a nombre del cliente" },
      { id: "creatividad", texto: "Schwarzenegger de Santa pa’ Amazon" },
      { id: "planning", texto: "Dentsu apuesta al entretenimiento" },
      { id: "data", texto: "California contra OpenAI" },
      { id: "content", texto: "Ask Studio en el celular" },
      { id: "rd", texto: "Zoom a RD: la brecha de IA de la ANJE" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "amazoncuenta", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "aimode", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Faltan 11 días pa’l Viernes Negro y 39 pa’ Navidad: Google ya está llevando las reservas de hotel, cena y boletos a AI Mode. Ajusta hoy el calendario de búsqueda de tus clientes de turismo y entretenimiento."
    },
    data: {
      tipo: "secreto", nota: "openaica", titulo: "Destapa el expediente",
      texto: "Según la demanda de California, OpenAI perdió el control de sus agentes [[más de 80 veces]] en pruebas, y el estado pide multas de [[US$2,500 por violación]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "askstudio", titulo: "Arma tu pregunta pa’ Ask Studio",
      intro: "Actúa como asistente de YouTube Studio pa’ el canal de mi cliente y ayúdame con lo siguiente:",
      opciones: [
        "Resume el sentimiento de la audiencia y los comentarios principales de los videos recientes",
        "Esboza el guion del próximo video",
        "Propón cinco títulos pa’ este video",
        "Dame ideas de miniatura a partir de este boceto",
        "Dame notas de encuadre y composición de este fotograma"
      ],
      cierre: "Señala qué partes de tu respuesta necesitan revisión humana antes de publicarse."
    },
    rd: {
      tipo: "pregunta", nota: "dle", titulo: "La pregunta del patio",
      p: "¿Cuál de estas palabras dominicanas entró al diccionario con el significado de «sorbete»?",
      opciones: ["Concón", "Calimete", "Canquiña"], correcta: 1,
      explicacion: "El calimete es el tubito pa’ sorber líquidos. El concón es el arroz pegado al fondo del caldero y la canquiña, un dulce."
    }
  }
};
