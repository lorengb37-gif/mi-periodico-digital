/*
  El Pulso Publicitario · edición N.º 310 · 6 de noviembre de 2026
*/
window.EDICION = {
  numero: 310,
  fechaISO: "2026-11-06",
  fecha: "Viernes 6 de noviembre 2026",
  fechaCorta: "6 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "La publicidad se mueve hacia donde la gente busca, pero antes de mover presupuesto pide la prueba de que ese lugar vende.",
    largo: "ChatGPT ya vende anuncios a bancos, software y viajes, pero llega a menos de la mitad de sus usuarios elegibles; Snapchat casi no crece donde más cobra; Meta le pone voz a sus agentes de IA, y California va a tribunales por una ley contra feeds adictivos. Aquí en el patio, el crédito bancario sigue creciendo, pero a la mitad del ritmo de antes, y Asocivu ya anuncia su autoferia de Navidad. El consejo: esta semana escoge un lugar nuevo donde te quieren vender anuncios y pídele al rep el dato de resultados, no solo el de alcance.",
    corto: "Antes de mover presupuesto a un lugar nuevo, pídele al rep el dato de resultados, no solo el de alcance.",
    porDep: {
      medios: "Un espacio nuevo en prueba es una oportunidad, pero el cliente primero necesita saber qué número tiene que mover para que se quede en el plan.",
      creatividad: "La IA acorta el tiempo y el costo de producir. Úsala pa’ probar conceptos rápido, y deja que una persona decida qué sale al aire.",
      planning: "Mira usuarios y también dónde están: si el crecimiento viene de mercados que pagan menos por usuario, el forecast cambia.",
      data: "Si tu cliente llega a menores en EE. UU., revisa qué funciones de diseño usan sus campañas antes de que cambien las reglas.",
      content: "Una herramienta de IA que habla sirve pa’ ensayar, no pa’ decidir. Úsala de sparring y quédate con el criterio.",
      rd: "Con el crédito creciendo más despacio, el cliente que vende a plazos va a necesitar mensajes de valor y de facilidad, no solo de oferta."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "ChatGPT amplía sus anunciantes, pero llega a menos de la mitad de los usuarios elegibles" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Fresh Step hace tres anuncios con IA en 30 días y a una décima parte del costo · Old Navy sube a las celebridades al «Jingle Jet»" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Snapchat llega a 495 millones de usuarios diarios, pero sin crecer en Norteamérica ni Europa" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Meta, TikTok y Google demandan para frenar la ley de California contra funciones adictivas" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Meta le pone voz a sus agentes Muse · TikTok lanza una app aparte de TikTok Shop en Asia" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "El crédito bancario se frena · Asocivu anuncia su autoferia «Navidad Montao’»" }
  },

  notas: [
    {
      id: "chatgptads", dep: "medios", peso: "principal",
      etiquetas: ["ChatGPT Ads", "IA", "Anunciantes"],
      titular: "ChatGPT ya no es solo de retail: los anuncios se abren a bancos, software y viajes",
      corto: "ChatGPT Ads se abre más allá del retail",
      cuerpo: "Un análisis de Digiday con datos de Similarweb, Graphite, Sensor Tower y Adthena muestra que ChatGPT maneja alrededor de una quinta parte de las consultas de Google, pero su negocio de anuncios es bastante menor. En el Reino Unido, el 45.7 % de los usuarios elegibles ve anuncios, y en EE. UU. el 43.4 %. El gasto de compras en EE. UU. bajó de 38 % a 20 % entre abril y septiembre, mientras servicios financieros subió de 2 % a 13 %.",
      cifras: [
        { v: "43.4 %", t: "de usuarios elegibles en EE. UU. ve anuncios en ChatGPT" },
        { v: "38 % → 20 %", t: "peso de compras en el gasto en EE. UU., de abril a septiembre" },
        { v: "6,333", t: "marcas anunciando en agosto, frente a 1,082 en junio, según Adthena" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Los anunciantes se están diversificando y todavía queda espacio por llenar: menos de la mitad de los usuarios elegibles ve anuncios, incluso en los mercados más avanzados. Pa’ medios, es un canal a seguir de cerca aunque aún no llegue a todos los mercados.",
      hacer: "Esta semana, ponerle a cada cliente de banca, software o viajes una ficha de una página sobre ChatGPT Ads (quién anuncia ya, en qué mercados y qué resultado habría que pedir) pa’ la próxima revisión del plan.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/in-graphic-detail-chatgpt-s-ad-growth-is-outrunning-the-proof-that-it-works/" }]
    },

    {
      id: "freshstep", dep: "creatividad", peso: "principal",
      etiquetas: ["IA", "Fresh Step", "Producción"],
      titular: "Fresh Step hace tres anuncios con gatos de IA en 30 días y a una décima parte del costo",
      corto: "Fresh Step: tres anuncios con IA en 30 días",
      cuerpo: "La marca de arena para gatos de Clorox trabajó con la agencia RECE, especializada en IA, y pasó del brief a tres spots de 15 segundos en 30 días, a una décima parte del costo de una producción tradicional, según Marketing Dive. Los anuncios, con gatos parlantes de distintas razas, salen ahora en TV lineal y estarán en redes el 9 de noviembre. La marca usó la IA para probar conceptos rápido y ver qué conectaba antes de producir.",
      cifras: [
        { v: "30 días", t: "del brief a tres spots terminados" },
        { v: "1/10", t: "del costo de una producción tradicional" },
        { v: "9 nov", t: "fecha en que la campaña estará activa en redes" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La IA cambia el tiempo y el costo de producir, y el cliente lo va a pedir. El valor de la agencia se mueve hacia el brief, el concepto y el criterio de qué sí sale.",
      hacer: "En la próxima sesión creativa, escoger un brief chiquito y ensayar con IA tres conceptos animados para mostrarle al cliente, y dejar claro qué revisa una persona antes de salir.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/how-fresh-step-used-ai-to-go-from-brief-to-ads-at-one-tenth-the-cost/873688/" }]
    },

    {
      id: "oldnavy", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Old Navy", "Navidad"],
      titular: "Old Navy sube a una celebridad al «Jingle Jet» y le apuesta al valor",
      corto: "Old Navy estrena su «Jingle Jet»",
      cuerpo: "Old Navy lanzó su campaña navideña con un spot en el que Alan Cumming y Meg Stalter son la azafata y la piloto del «Jingle Jet», con pasajeros como Paris Hilton y Charli D’Amelio, según Marketing Dive. Fue creada con el equipo interno y BBH USA, destaca prendas desde US$7.99 y cierra con el lema «More Merry For Your Money». Es la primera campaña bajo el nuevo CEO, Michael Francis, y llega después de que la marca reenfocara su mercadeo en precio y valor tras una caída de ventas. Gap, su marca hermana, apuesta por la música.",
      cifras: [
        { v: "US$7.99", t: "precio desde el que se muestran prendas en el spot" },
        { v: "2 nov", t: "fecha en que Michael Francis asumió como CEO de Old Navy" }
      ],
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/old-navy-flies-with-celebs-gap-keeps-it-acapella-for-holiday-campaigns/873777/" }]
    },

    {
      id: "snapq3", dep: "planning", peso: "principal",
      etiquetas: ["Snapchat", "Resultados", "Audiencia"],
      titular: "Snapchat llega a 495 millones de usuarios diarios, pero no crece donde más cobra",
      corto: "Snapchat casi no crece donde más cobra",
      cuerpo: "Snap reportó sus resultados del tercer trimestre: 495 millones de usuarios diarios, apenas 2 millones más que en el segundo, según Social Media Today. No hubo crecimiento en Norteamérica ni en Europa, donde la empresa genera la mayor parte de sus ingresos; todo el aumento vino del resto del mundo. El ingreso por usuario fue de US$11.07 en Norteamérica, frente a US$1.13 en el resto del mundo.",
      cifras: [
        { v: "495 millones", t: "usuarios diarios, frente a 493 millones en el trimestre anterior" },
        { v: "US$11.07", t: "ingreso por usuario en Norteamérica" },
        { v: "US$1.13", t: "ingreso por usuario en el resto del mundo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "El número de usuarios cuenta una parte de la historia: si crece donde cada usuario deja menos, el potencial publicitario no sube igual. Pa’ planning, toca mirar usuarios y valor por usuario antes de dar un alcance.",
      hacer: "Antes del plan del primer trimestre, revisar con cada cliente cuánto de su audiencia en Snapchat está en mercados con mayor valor y comparar el costo por mil con el del trimestre anterior.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/snapchat-posts-modest-user-increase-in-q3/873823/" }]
    },

    {
      id: "ca1709", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "California", "Menores"],
      titular: "Meta, TikTok y Google demandan para frenar la ley de California contra funciones adictivas",
      corto: "Meta, TikTok y Google demandan a California",
      cuerpo: "Meta y TikTok se sumaron a Google en demandas para bloquear la AB 1709 de California, firmada el 10 de septiembre. La ley obliga a las plataformas a restringir para menores de 16 años funciones como feeds adictivos, scroll infinito y reproducción automática, y está prevista para entrar en vigor el 1 de enero. Las empresas dicen que viola la Primera Enmienda, según Social Media Today citando a Reuters.",
      cifras: [
        { v: "Menores de 16", t: "usuarios a los que aplica la restricción" },
        { v: "1 ene", t: "fecha prevista de entrada en vigor" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Las plataformas pelean en tribunales la regulación de funciones de diseño, no solo la de contenido.",
        "Si la ley entra en vigor, los menores de 16 verían menos feeds personalizados, y eso cambia cómo se mide su alcance."
      ],
      hacer: "Esta semana, revisar qué campañas de clientes con público menor de 16 años en EE. UU. dependen de feeds personalizados o de reproducción automática, y avisarles que la ley está en disputa y prevista para el 1 de enero.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-tiktok-and-google-push-back-on-california-law/873955/" }]
    },

    {
      id: "muse", dep: "content", peso: "principal",
      etiquetas: ["Meta", "Muse", "IA"],
      titular: "Meta le pone voz a Muse: ahora su agente de IA habla y gesticula",
      corto: "Meta le pone voz a su agente Muse",
      cuerpo: "Meta les dio capacidad de voz a sus agentes de IA Muse, según Social Media Today. Los usuarios pueden escoger una voz, hacer consultas hablando y ver a un avatar con gestos que acompañan el tono de la conversación. Meta propone usarlo para ensayar una entrevista, una presentación o un pitch en voz alta, y permite darle voces personalizadas, como un acento o un personaje.",
      cifras: [
        { v: "3 modos", t: "solo voz, avatar junto a la conversación o pantalla completa" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Meta apuesta por que la IA se use hablando, no solo escribiendo. Pa’ content, sirve como sparring para ensayar guiones y presentaciones; el artículo recuerda que intentos parecidos de Meta con voces de famosos no pegaron.",
      hacer: "Esta semana, tomar una presentación o un pitch de un cliente y ensayarlo en voz alta con un asistente de IA, pidiéndole las tres preguntas más difíciles que haría el cliente.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-makes-muse-agents-speak/873959/" }]
    },
    {
      id: "tiktokshop", dep: "content", peso: "secundaria",
      etiquetas: ["TikTok", "TikTok Shop", "Comercio social"],
      titular: "TikTok lanza una app aparte de TikTok Shop, por ahora solo en Asia",
      corto: "TikTok lanza app aparte de TikTok Shop",
      cuerpo: "TikTok lanzó una app dedicada a TikTok Shop, enfocada en listados de productos, con algunos livestreams y videos cortos de apoyo. Por ahora solo está disponible en algunos mercados de Asia, según Social Media Today. El medio señala que los usuarios en EE. UU. suelen preferir comprar en apps aparte, como Amazon, mientras ven videos en TikTok o YouTube.",
      cifras: [
        { v: "US$26,200 millones", t: "GMV de TikTok a nivel global en el primer semestre de 2025, según Marketing Maze" }
      ],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-launches-standalone-shopping-app/873952/" }]
    },

    {
      id: "credito", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Consumo", "Banca"], fecha: "5 nov 2026",
      titular: "El crédito en RD sigue creciendo, pero a la mitad del ritmo de antes",
      cuerpo: "Santo Domingo.— Moody’s Local indica que la banca múltiple dominicana aumentó su cartera 3.7 % a junio frente al cierre de 2025, lo que anualizado da 7.4 %, menos de la mitad del promedio de 12 % de 2023 a 2025, según elDinero. Con cierre a septiembre, la Superintendencia de Bancos reporta una cartera de RD$2,531,039.3 millones, 5.9 % más que en diciembre de 2025. La mora, de 1.1 % a junio, es la más baja de la región.",
      cifras: [
        { v: "7.4 %", t: "crecimiento anualizado proyectado del crédito en 2026" },
        { v: "12 %", t: "promedio de 2023 a 2025" },
        { v: "1.1 %", t: "mora a junio, la más baja de la región" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Con crédito más lento, el consumo financiado puede frenarse un chin. Pa’ planning con clientes de banca, retail o vehículos, conviene ajustar el forecast.",
      hacer: "Esta semana, revisar con un cliente de banca, retail o vehículos si su forecast de fin de año asume el ritmo de crédito de 2023 a 2025 y ajustarlo a un crecimiento cercano a 7 %.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/387392/moodys-local-dice-el-credito-en-republica-dominicana-crece-pero-se-ralentiza/" }]
    },
    {
      id: "autoferia", dep: "rd", peso: "secundaria", para: ["medios", "planning"],
      etiquetas: ["Agenda", "Vehículos", "Navidad"], fecha: "5 nov 2026",
      titular: "Asocivu anuncia su autoferia «Navidad Montao’» con más de 3,000 vehículos",
      cuerpo: "La Asociación de Importadores de Vehículos Usados (Asocivu) celebrará del 10 al 14 de diciembre su autoferia número 48 cerca de la Ciudad Ganadera de Santo Domingo, con más de 3,000 vehículos usados. Cuatro bancos ofrecerán financiamientos de hasta 85 % del valor y plazos de hasta 72 meses, según Remolacha.",
      cifras: [
        { v: "10–14 dic", t: "fechas de la autoferia" },
        { v: "85 %", t: "máximo del valor del vehículo que se financia" },
        { v: "72 meses", t: "plazo máximo de financiamiento" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ medios y planning con clientes de vehículos o banca, es una fecha pa’ planificar pauta antes de diciembre.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/11/asocivu-anuncia-su-autoferia-2026/" }]
    }
  ],

  pizarra: ["chatgptads", "freshstep", "snapq3", "ca1709", "muse", "credito"],

  frases: [
    { dep: "medios", texto: "ChatGPT ya tiene anunciantes de bancos, software y viajes, pero menos de la mitad de sus usuarios elegibles ve anuncios.", uso: "para conversaciones de IA y nuevos canales" },
    { dep: "creatividad", texto: "Fresh Step pasó del brief a tres spots en 30 días y a una décima parte del costo: la IA cambió el reloj de la producción.", uso: "para conversaciones de IA y producción" },
    { dep: "data", texto: "Meta, TikTok y Google demandaron para frenar una ley de California que restringe feeds adictivos y reproducción automática a menores de 16.", uso: "para conversaciones de regulación y menores" },
    { dep: "planning", texto: "Snapchat tiene 495 millones de usuarios diarios, pero en Norteamérica genera US$11.07 por usuario y en el resto del mundo US$1.13.", uso: "para conversaciones de forecast y audiencias" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "ChatGPT Ads se abre a más anunciantes" },
      { id: "creatividad", texto: "Fresh Step y sus anuncios con IA en 30 días" },
      { id: "planning", texto: "Snapchat: usuarios sin crecer donde más cobra" },
      { id: "data", texto: "California y la ley contra feeds adictivos" },
      { id: "content", texto: "Meta le pone voz a Muse" },
      { id: "rd", texto: "Zoom a RD: el crédito se frena" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "chatgptads", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "autoferia", titulo: "Arranca la hoja", mes: "Diciembre",
      revela: "Del 10 al 14 de diciembre, Asocivu celebra su autoferia número 48, con más de 3,000 vehículos y financiamiento de hasta 85 % del valor. Si tienes clientes de vehículos o banca, planifica la pauta desde noviembre."
    },
    data: {
      tipo: "secreto", nota: "ca1709", titulo: "Destapa el expediente",
      texto: "La AB 1709 de California restringe feeds adictivos y reproducción automática para menores de [[16 años]] y está prevista para entrar en vigor el [[1 de enero]]."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "muse", titulo: "Arma tu ensayo en voz alta",
      intro: "Quiero ensayar en voz alta con un asistente de IA, como Muse de Meta. Ayúdame con lo siguiente:",
      opciones: [
        "Hazme las tres preguntas más difíciles que haría el cliente sobre mi presentación",
        "Escucha mi pitch y dime dónde me enredo",
        "Pídeme que resuma mi idea en 30 segundos"
      ],
      cierre: "Dime también qué parte de tu feedback debo revisar con una persona antes de usarla."
    },
    rd: {
      tipo: "pregunta", nota: "credito", titulo: "La pregunta del patio",
      p: "¿Qué crecimiento anualizado proyecta Moody’s Local para el crédito de la banca múltiple dominicana en 2026?",
      opciones: ["3.7 %", "7.4 %", "12 %"], correcta: 1,
      explicacion: "Según elDinero, la cartera creció 3.7 % a junio, lo que anualizado da 7.4 %, menos de la mitad del promedio de 12 % de 2023 a 2025."
    }
  }
};
