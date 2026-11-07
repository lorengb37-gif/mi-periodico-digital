/*
  El Pulso Publicitario · edición N.º 311 · 7 de noviembre de 2026
*/
window.EDICION = {
  numero: 311,
  fechaISO: "2026-11-07",
  fecha: "Sábado 7 de noviembre 2026",
  fechaCorta: "7 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Antes de soltar presupuesto o datos en un canal nuevo, pregunta quién más ve lo que tú pones ahí.",
    largo: "Amazon ya mete anuncios en las compras por texto de Alexa, Liquid Death se despide de LiveRamp porque no quiere que un holding vea cómo compran sus rivales, y Wendy’s sacó un videojuego completo pa’ vender hamburguesas. Aquí en el patio, el Gobierno estudia mover los combustibles de a poco y el fin de semana largo por la Constitución mueve el turismo interno. El consejo: esta semana haz una lista de dónde viven los datos de tus clientes y quién más tiene acceso a ellos.",
    corto: "Esta semana, anota dónde viven los datos de cada cliente y quién más tiene acceso a ellos.",
    porDep: {
      medios: "Un anuncio dentro de una conversación de compra es inventario nuevo. Pide cómo se mide antes de ponerle plata.",
      creatividad: "Wendy’s apostó por algo hecho a mano y largo. Si la idea es buena, el formato también puede serlo.",
      planning: "Cuando una plataforma te entrega su calendario del año, úsalo pa’ bloquear fechas con el cliente desde ya.",
      data: "Revisa los contratos de datos de tus clientes y pregunta qué pasa si el proveedor cambia de dueño.",
      content: "Los formatos cortos y las herramientas de edición nuevas sirven si las pruebas con un cliente real esta semana.",
      rd: "Con el combustible en movimiento, el cliente que depende del transporte necesita un mensaje de precio estable y claro."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon pone anuncios de Sponsored Products dentro de las compras por texto de Alexa for Shopping" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Wendy’s lanza su propio videojuego, «WendyQuest», con premios canjeables en la app" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Reddit publica su guía de planificación 2027 · McDonald’s USA despide a su directora de mercadeo" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Liquid Death deja LiveRamp por miedo a que su dato termine ayudando a la competencia" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Edits, el editor de Meta, llega a Mac · L’Oréal prueba microdramas con Urban Decay" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "El Gobierno estudia una regla pa’ mover los combustibles · fin de semana largo por la Constitución · Claro y su avería · béisbol y estrenos" }
  },

  notas: [
    {
      id: "alexatexto", dep: "medios", peso: "principal",
      etiquetas: ["Amazon Ads", "IA", "Sponsored Products"],
      titular: "Amazon ya vende anuncios dentro de las compras por texto de Alexa",
      corto: "Amazon mete anuncios en las compras por texto de Alexa",
      cuerpo: "Alexa for Shopping, el agente de compras de Amazon, ya recibe pedidos por mensaje de texto, y Sponsored Products aparece como opción en la etapa de descubrimiento de la conversación, según Digiday. Por ahora solo llega a un grupo limitado de clientes de EE. UU. con invitación, y Amazon planea ampliarlo a millones en las próximas semanas. Las compras que el agente hace por su cuenta se quedan sin anuncios, y por ahora Amazon no cobra por estas colocaciones.",
      cifras: [
        { v: "400 millones", t: "de clientes usaron Alexa for Shopping en los últimos 12 meses, según Amazon" },
        { v: "8 veces", t: "es lo que creció el uso de sus funciones de agente desde enero" },
        { v: "Sin costo", t: "por ahora, Amazon no cobra por estas colocaciones" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "El anuncio sale de la pantalla y entra en una conversación de compra. Pa’ medios, es inventario nuevo que aún está gratis y sin reglas claras de medición, y es el momento de preguntar antes de que lo cobren.",
      hacer: "Esta semana, pedirle al rep de Amazon Ads si un cliente de e-commerce puede entrar a la prueba de Sponsored Products por texto y qué métricas van a reportar.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/amazons-shopping-agent-now-takes-orders-by-text-with-sponsored-product-ads-in-the-replies/" }]
    },

    {
      id: "wendyquest", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Wendy’s", "Videojuegos"],
      titular: "Wendy’s lanza su propio videojuego pa’ regalar papitas y Frosty",
      corto: "Wendy’s lanza su videojuego «WendyQuest»",
      cuerpo: "Wendy’s lanzó «WendyQuest: Legend of the Four Corner Stones», un juego de rol gratis de estilo 8 bits para iOS, Android y Steam, según Marketing Dive. Dura hasta 10 horas, tiene cinco regiones temáticas de comida y jefes como el Mech Chicken, un guiño a McDonald’s. Los jugadores ganan códigos para canjear en la app de Wendy’s, como papas medianas, un Frosty pequeño o nuggets. Lo desarrolló el estudio independiente 81monkeys, con la agencia VML en la parte creativa, y la marca dice que lo hizo a mano, sin atajos de IA.",
      cifras: [
        { v: "10 horas", t: "de juego como máximo" },
        { v: "5", t: "regiones temáticas de comida" },
        { v: "US$131,000 millones", t: "gasto proyectado en publicidad dentro de juegos en 2026, según Mordor Intelligence" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Wendy’s no puso un anuncio en un juego: hizo un juego que la gente quiera jugar y lo conectó con la app. Pa’ creatividad, la lección es que el formato también puede ser la idea.",
      hacer: "En la próxima sesión de ideas, escoger un cliente y esbozar un mini juego o experiencia con premio canjeable, y calcular qué parte se puede hacer sin gran presupuesto.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/wendys-takes-a-shot-at-mcdonalds-with-rewards-based-video-game/873785/" }]
    },

    {
      id: "reddit2027", dep: "planning", peso: "principal",
      etiquetas: ["Reddit", "Calendario", "2027"],
      titular: "Reddit publica su guía de planificación 2027 con calendario de temporadas y fechas clave",
      corto: "Reddit publica su guía de planificación 2027",
      cuerpo: "Reddit publicó una guía de planificación 2027 de 35 páginas, según Social Media Today. Incluye fechas clave, tendencias de uso, el papel de la plataforma como lugar para descubrir productos, datos de compras, tendencias de temporada, un calendario de mercadeo con las fechas principales de EE. UU. y el desglose trimestral de la interacción de los usuarios. El medio advierte que quedan menos de dos meses de 2026 y que muchos mercadólogos aún no piensan en 2027.",
      cifras: [
        { v: "35 páginas", t: "tiene la guía de planificación 2027 de Reddit" },
        { v: "< 2 meses", t: "quedan de 2026 pa’ cerrar el plan del próximo año" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Es material gratis pa’ arrancar el plan del año que viene. Eso sí, las fechas están pensadas pa’ EE. UU., así que hay que cruzarlas con el calendario dominicano de cada cliente.",
      hacer: "Esta semana, bajar la guía de Reddit y marcar tres fechas de temporada que coincidan con el calendario dominicano de un cliente pa’ llevarlas a la reunión de plan 2027.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/reddit-publishes-2027-marketing-playbook/873789/" }]
    },
    {
      id: "mcdonalds", dep: "planning", peso: "secundaria",
      etiquetas: ["Cuentas", "McDonald’s", "Liderazgo"],
      titular: "La directora de mercadeo de McDonald’s USA se va en diciembre",
      corto: "McDonald’s USA despide a su directora de mercadeo",
      cuerpo: "Alyssa Buetikofer, directora de mercadeo y experiencia del cliente de McDonald’s USA, deja la empresa el mes que viene, según una nota interna que obtuvo Marketing Dive. Se queda hasta el 18 de diciembre pa’ la transición. Mientras buscan reemplazo, Morgan Flatley será directora creativa interina y Charlie Newberger asumirá el mercadeo en EE. UU. de forma interina. Las ventas comparables de McDonald’s en EE. UU. cayeron 0.2 % en el tercer trimestre.",
      cifras: [
        { v: "−0.2 %", t: "ventas comparables en EE. UU. en el tercer trimestre" },
        { v: "18 dic", t: "último día de la ejecutiva en el cargo" }
      ],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/mcdonalds-us-cmo-steps-down-as-sales-decline/873927/" }]
    },

    {
      id: "liquidramp", dep: "data", peso: "principal",
      etiquetas: ["Identidad", "LiveRamp", "Publicis"],
      titular: "Liquid Death se despide de LiveRamp: no quiere que su dato ayude a la competencia",
      corto: "Liquid Death deja LiveRamp tras la compra de Publicis",
      cuerpo: "Benoit Vatere, director de medios de Liquid Death, dejó de usar el grafo de identidad de LiveRamp en agosto, después de unos 18 meses, y el contrato vence a final de 2026, según Digiday. La razón: Publicis cerró la compra de LiveRamp, y Vatere no quiere que se vean patrones de compra de marcas que compiten con la suya ni que su dato entrene herramientas de IA del holding. Busca un proveedor sin dueño de holding y con contrato que borre sus datos si cambia el control de la empresa.",
      cifras: [
        { v: "18 meses", t: "usó Liquid Death el grafo de identidad de LiveRamp" },
        { v: "~5 %", t: "de los ingresos de LiveRamp, unos US$800 millones al año, viene de competidores y negocios fuera de Publicis" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Según Forrester, a los clientes les preocupa menos una filtración que ayudar a la competencia sin querer.",
        "Cuando el proveedor de datos cambia de dueño, los términos del contrato pueden cambiar con él."
      ],
      hacer: "Esta semana, revisar los contratos de identidad y datos de los clientes y preguntar qué pasa con sus datos si el proveedor cambia de dueño.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/why-liquid-deaths-media-chief-is-determined-to-break-away-from-liveramp/" }]
    },

    {
      id: "editsmac", dep: "content", peso: "principal",
      etiquetas: ["Meta", "Edits", "Herramientas"],
      titular: "Edits, el editor de video de Meta, llega a Mac con edición en 4K y sin marca de agua",
      corto: "Edits, el editor de Meta, llega a Mac",
      cuerpo: "Meta lanzó la versión de escritorio de Edits para Mac, según Social Media Today. Trae línea de tiempo multipista, herramientas de color, importación de LUTs y tipografías propias, exportación en 4K sin marca de agua, subtítulos automáticos ilimitados en varios idiomas y acceso a las bibliotecas de audio de Instagram. También permite activar MCP en los ajustes pa’ flujos de edición con agentes de IA. Meta reporta más de 50 millones de usuarios de Edits.",
      cifras: [
        { v: "50 millones", t: "de usuarios de Edits, según las notas de lanzamiento de Meta" },
        { v: "4K", t: "exportación sin marca de agua" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Un editor gratis con exportación en 4K y subtítulos automáticos le sirve a cualquier equipo de redes con poco presupuesto de producción, y sin marca de agua se puede usar pa’ piezas de cliente.",
      hacer: "Esta semana, editar un Reel de un cliente en Edits pa’ Mac y comparar el tiempo y el resultado con la herramienta que usa el equipo hoy.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/edits-launches-for-macos/873949/" }]
    },
    {
      id: "microdrama", dep: "content", peso: "secundaria",
      etiquetas: ["Microdramas", "L’Oréal", "ReelShort"],
      titular: "L’Oréal prueba los microdramas: Urban Decay saca una serie de seis episodios en ReelShort",
      corto: "L’Oréal prueba microdramas con Urban Decay",
      cuerpo: "Urban Decay, de L’Oréal, estrenó el 24 de octubre «Ghost Hunter Hotline», una serie vertical de seis episodios en ReelShort que promueve su Ghosting Spray, según Marketing Dive. La serie sumó 3.8 millones de vistas en cinco días y quedó segunda en la lista de más vistos de la app. L’Oréal la hizo con ReelShort, sin agencia externa, en unas cuatro semanas.",
      cifras: [
        { v: "3.8 millones", t: "de vistas en los primeros cinco días" },
        { v: "4 semanas", t: "de producción, sin agencia externa" }
      ],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/loreals-evolving-microdrama-strategy-puts-entertainment-over-product/873646/" }]
    },

    {
      id: "combustibles", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Consumo", "Combustibles", "Economía"], fecha: "5 nov 2026",
      titular: "El Gobierno estudia una «regla automática» pa’ mover los combustibles entre 1 % y 2 % por semana",
      corto: "Gobierno estudia regla pa’ mover combustibles por semana",
      cuerpo: "Santo Domingo.— El Gobierno estudia una regla automática que movería los precios de los combustibles entre 1 % y 2 % por semana, pa’ darle previsibilidad al mercado, según elDinero. La idea es aplicarla más adelante, cuando baje la volatilidad, y seguir trasladando las alzas internacionales de forma parcial y gradual. El país consume entre 140,000 y 145,000 barriles diarios y refina localmente unos 30,000. El déficit se espera cerca de 4 % del PIB en 2026, frente al 3.2 % presupuestado.",
      cifras: [
        { v: "1 % a 2 %", t: "movimiento semanal que estudia el Gobierno" },
        { v: "145,000", t: "barriles diarios de consumo, como máximo" },
        { v: "~4 %", t: "del PIB, el déficit esperado en 2026 frente a 3.2 % presupuestado" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El precio del combustible toca el bolsillo y el humor del consumidor, y eso llega a transporte, alimentos y retail. Pa’ planning y medios, es una variable que hay que mirar antes de cerrar el plan de diciembre.",
      hacer: "Esta semana, preguntarle a un cliente de transporte, alimentos o retail cuánto de su costo depende del combustible y preparar un mensaje de valor por si suben los precios en diciembre.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387435/el-gobierno-aplicara-regla-automatica-a-los-precios-de-los-combustibles/" }]
    },
    {
      id: "feriado", dep: "rd", peso: "secundaria", para: ["planning", "content", "medios"],
      etiquetas: ["Turismo interno", "Feriado"], fecha: "6 nov 2026",
      titular: "Seis destinos pa’ escaparse en el fin de semana largo por el Día de la Constitución",
      cuerpo: "Santo Domingo.— elDinero armó una lista de seis destinos pa’ el fin de semana largo de los 182 años de la Constitución, con el feriado movido al lunes 9 de noviembre: Santiago, Puerto Plata, Punta Cana, Barahona, Samaná y La Romana. Por ejemplo, las 27 Charcos de Damajagua se estiman entre US$40 y US$60 y los parques acuáticos de Punta Cana entre US$69 y US$189.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning y content con clientes de turismo, restaurantes o transporte, es un fin de semana de movimiento interno y de contenido de planes.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387707/seis-destinos-para-escaparse-durante-el-fin-de-semana-largo-por-el-dia-de-la-constitucion/" }]
    },
    {
      id: "claro", dep: "rd", peso: "secundaria", para: ["data", "content"],
      etiquetas: ["Telecom", "Servicio"], fecha: "6 nov 2026",
      titular: "Avería de Claro deja a miles sin internet fijo y móvil",
      cuerpo: "Santo Domingo.— Claro reportó una avería parcial que afectó el internet fijo y móvil, con interrupciones a nivel nacional, según Remolacha. La empresa dijo en su Instagram que su equipo técnico trabajaba pa’ restablecer el servicio y pidió disculpas. La nota no da la causa, ni cuántos clientes se afectaron ni la hora de restablecimiento.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ data y content, una caída de red puede mover las métricas del día: menos tráfico y menos interacción. Conviene anotarla antes de explicarle una baja al cliente.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/maco-en-claro-averia-deja-a-miles-sin-internet-en-rd/" }]
    },
    {
      id: "agenda", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Agenda", "Béisbol", "Cine"], fecha: "6 nov 2026",
      titular: "El béisbol lidera la agenda del fin de semana en Santo Domingo, junto a conciertos y una comedia dominicana",
      cuerpo: "Santo Domingo.— La pelota invernal lidera la cartelera: el sábado juega Licey con Gigantes del Cibao y el domingo con Escogido, ambos a las 5:00 p. m. en el Quisqueya, y el lunes cierra con Águilas Cibaeñas. También hay conciertos de Héctor Acosta «El Torito» en el Hard Rock Café y «Los Años Plateados del Merengue» en Lungomare, y se estrena la comedia dominicana «La esquina ta’ en candela», con Raymond Pozo, Miguel Céspedes y Fausto Mata, según elDinero.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ medios y content, es una agenda de tráfico y conversación: pelota, música y cine local en el mismo fin de semana largo.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387713/actividades-para-hacer-este-fin-de-semana-en-santo-domingo-el-beisbol-lidera-las-ofertas/" }]
    },
    {
      id: "fondos", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Finanzas", "Inversión"], fecha: "6 nov 2026",
      titular: "El mercado de valores dominicano ya tiene 74 fondos de inversión que manejan RD$493,023 millones",
      cuerpo: "Santo Domingo.— A septiembre de 2026 operaban 74 fondos de inversión administrados por 12 sociedades, que manejan RD$493,023 millones, cerca del 5.8 % del PIB según estimaciones, y suman 86,064 cuentas activas, según datos de Adosafi publicados por elDinero. De los fondos, 49 son cerrados y 25 abiertos, y hay tres cerrados aprobados pendientes de arrancar.",
      cifras: [
        { v: "74", t: "fondos de inversión en operación" },
        { v: "86,064", t: "cuentas activas" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning con clientes financieros, es un público de ahorro e inversión que crece y compite por atención en fin de año.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387730/mercado-de-valores-dominicano-cuenta-con-74-fondos-de-inversion-y-administra-rd493023-millones/" }]
    }
  ],

  pizarra: ["alexatexto", "wendyquest", "reddit2027", "liquidramp", "editsmac", "combustibles"],

  frases: [
    { dep: "medios", texto: "Amazon ya vende anuncios dentro de la conversación de compra: el anuncio ahora vive en el chat.", uso: "para conversaciones de IA y nuevos canales" },
    { dep: "creatividad", texto: "Wendy’s no hizo un anuncio de videojuego: hizo un videojuego que da papitas.", uso: "para conversaciones de formatos y activaciones" },
    { dep: "data", texto: "Liquid Death dejó LiveRamp porque no quiere que su dato ayude a la competencia: privacidad y neutralidad ya no son lo mismo.", uso: "para conversaciones de datos y proveedores" },
    { dep: "planning", texto: "Reddit ya entregó su guía de planificación 2027: ahí está el calendario pa’ el año que viene.", uso: "para conversaciones de plan anual" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Anuncios en las compras por texto de Alexa" },
      { id: "creatividad", texto: "WendyQuest, el videojuego de Wendy’s" },
      { id: "planning", texto: "La guía de planificación 2027 de Reddit" },
      { id: "data", texto: "Liquid Death se va de LiveRamp" },
      { id: "content", texto: "Edits llega a Mac" },
      { id: "rd", texto: "Zoom a RD: la regla pa’ los combustibles" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "alexatexto", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "reddit2027", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Reddit ya publicó su guía de planificación 2027, con 35 páginas y un calendario de temporadas. Baja la guía y cruza tres fechas con el calendario dominicano de un cliente."
    },
    data: {
      tipo: "secreto", nota: "liquidramp", titulo: "Destapa el expediente",
      texto: "Liquid Death usó el grafo de identidad de LiveRamp durante unos [[18 meses]] y dejó de usarlo después de que [[Publicis]] cerró la compra de la empresa."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "editsmac", titulo: "Arma tu guion pa’ Edits",
      intro: "Voy a editar un video vertical pa’ un cliente en una herramienta como Edits de Meta. Ayúdame con lo siguiente:",
      opciones: [
        "Propón una estructura de cortes pa’ un video de 30 segundos",
        "Escribe los subtítulos del video en español dominicano",
        "Sugiéreme tres ganchos pa’ los primeros dos segundos"
      ],
      cierre: "Dime también qué parte de tus sugerencias debo revisar con una persona antes de publicar."
    },
    rd: {
      tipo: "pregunta", nota: "combustibles", titulo: "La pregunta del patio",
      p: "¿Cuánto por semana movería la regla automática que estudia el Gobierno pa’ los combustibles?",
      opciones: ["Entre 1 % y 2 %", "Un 5 %", "Un 10 %"], correcta: 0,
      explicacion: "Según elDinero, el Gobierno estudia mover los precios entre 1 % y 2 % por semana, y la aplicaría más adelante, cuando baje la volatilidad."
    }
  }
};
