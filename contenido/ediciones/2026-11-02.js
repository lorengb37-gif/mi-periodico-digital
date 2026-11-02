/*
  El Pulso Publicitario · edición N.º 306 · 2 de noviembre de 2026
*/
window.EDICION = {
  numero: 306,
  fechaISO: "2026-11-02",
  fecha: "Lunes 2 de noviembre 2026",
  fechaCorta: "2 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Lunes de cierre de plan: el que le pide cuentas a cada peso antes de que lo haga el cliente llega a diciembre con la razón.",
    largo: "Los compradores le están poniendo lupa a la búsqueda de Google, Amazon creció menos en publicidad, Apple le cierra la puerta a la identidad por correo y Instagram le paga a creadores pa’ que suban videos largos. Aquí en el patio, Expomóvil Banreservas cerró con RD$9,985 millones en financiamientos y ya salieron los feriados de 2027. El consejo: antes de cerrar el plan de Navidad, escoge un «Lo que toca hacer», ponle responsable y llévaselo al cliente esta semana.",
    corto: "Antes de cerrar el plan de Navidad, escoge un «Lo que toca hacer», ponle responsable y llévaselo al cliente esta semana.",
    porDep: {
      medios: "Si un canal se lleva buena parte del presupuesto, ten listo qué pasa después del clic. Es la pregunta que el cliente te va a hacer primero.",
      creatividad: "Cuando todo el mundo grita ofertas, una persona real con un precio real se escucha distinto. Cuéntalo con un caso concreto.",
      planning: "Una plataforma que crece afuera y no en tu mercado no mueve tu forecast. Mira de dónde viene el crecimiento antes de ajustar.",
      data: "Si tu medición depende de identificar a la misma persona en varios sitios, ten un plan B pa’ cuando el navegador lo bloquee.",
      content: "Cuando una plataforma paga por un formato, prueba rápido, pero no armes la estrategia entera sobre un bono que puede acabarse.",
      rd: "En diciembre el consumidor dominicano financia y compara. Pon la cuota y el plazo de frente."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Los compradores le piden cuentas a Google Search · Amazon Ads crece 12 % en el tercer trimestre y desacelera" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "JCPenney le planta cara al cansancio de ofertas con gente real · e.l.f. estrena su primera campaña navideña con claymation" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Pinterest llega a 661 millones de usuarios mensuales y la Generación Z ya es el 57 % de su audiencia" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Apple bloquea en Safari la infraestructura de identidad por correo y WPP dice que no le pega" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Instagram paga a creadores por videos de hasta 90 minutos · X lanza un bono pa’ videos verticales" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Expomóvil Banreservas cierra con RD$9,985 millones financiados · Más de 56 mil cruceristas en una semana · Salen los feriados de 2027 · El Banco Central mantiene la tasa en 5.50 %" }
  },

  notas: [
    {
      id: "googlesearch", dep: "medios", peso: "principal",
      etiquetas: ["Google Search", "Q4", "Presupuesto"],
      titular: "La búsqueda de Google ya no tiene pase libre: los compradores le piden cuentas",
      corto: "Los compradores le piden cuentas a Google Search",
      cuerpo: "Digiday habló con 18 compradores de medios y encontró que los clientes están revisando Google Search como si fuera un canal nuevo. Las respuestas con IA en la página de resultados cambian cuántos clics llegan al anunciante y cuánto vale cada uno, y en el cuarto trimestre los anunciantes de temporada suben los costos por clic. Los ingresos de búsqueda de Google crecieron 12 % en el tercer trimestre, el ritmo más lento del año. Los entrevistados dicen que entre 10 % y 20 % del presupuesto en Google se está poniendo en duda, y algunos hablan de mover hasta 30 % a otros canales, como Meta o Local Services Ads. Los costos por clic de palabras de marca subieron 5 % en el trimestre, según Tinuiti.",
      cifras: [
        { v: "10–20 %", t: "del presupuesto de Google que los clientes cuestionan, según varios compradores" },
        { v: "+12 %", t: "crecimiento de los ingresos de búsqueda de Google en el tercer trimestre, el más lento del año" },
        { v: "+5 %", t: "alza de los costos por clic de marca en el tercer trimestre, según Tinuiti" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Es la búsqueda, la línea que casi nadie tenía que defender, y ahora el cliente quiere ver qué pasa después del clic. Con Black Friday y Cyber Monday encima, esa conversación llega esta semana.",
      hacer: "Antes del viernes, sacar de cada cuenta fuerte en Google Search cuántos clics terminaron en leads o ventas, y preparar una página con qué porción del presupuesto se puede probar en otro canal sin perder resultados.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/google-search-loses-its-free-pass-with-buyers/" }]
    },
    {
      id: "amazonads", dep: "medios", peso: "secundaria",
      etiquetas: ["Amazon Ads", "Retail media", "Resultados"],
      titular: "Amazon Ads llega a US$19,600 millones, pero crece menos que antes",
      corto: "Amazon Ads crece 12 % y desacelera",
      cuerpo: "Los ingresos publicitarios de Amazon subieron 12 % frente al año pasado, hasta US$19,600 millones, en el tercer trimestre, según Marketing Dive. Hace un año el crecimiento había sido de 22 % y en el segundo trimestre de 2026, de 26 %. Amazon lo atribuye a la fecha del Prime Day, que pasó de julio a junio, y a que el tercer trimestre no tuvo partidos de la NBA en Prime Video. La empresa dijo que, por ahora, los agentes de IA de compra no le preocupan.",
      cifras: [
        { v: "US$19,600 millones", t: "ingresos publicitarios de Amazon en el tercer trimestre" },
        { v: "+12 %", t: "frente al año pasado, cuando había crecido 22 %" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Amazon explica la baja por el calendario, no por la demanda. Pa’ medios, la lección es mirar las fechas de eventos al comparar trimestres.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/amazons-ad-revenue-growth-decelerates-due-to-prime-day-tweaks/873302/" }]
    },

    {
      id: "jcpenney", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "JCPenney", "Navidad"],
      titular: "JCPenney le planta cara al cansancio de ofertas con gente de verdad",
      corto: "JCPenney lanza su Navidad con gente de verdad",
      cuerpo: "JCPenney lanzó este lunes su campaña navideña en TV, video en línea, audio y redes pagadas, según Marketing Dive. Gira alrededor de compradores reales que consiguen buenos precios. El anuncio de 15 segundos «Party Fits» se graba en Crown Point, Indiana, y lo protagoniza Raemonie, una barbera local que muestra tres looks de fiesta que compró por US$168 en total. La creó la agencia Mischief sobre la plataforma «Yes, JCPenney». Además habrá una hoja semanal con las mejores ofertas y el regreso de «Really Big Deals». Según datos de Akeneo que cita la marca, solo 32 % de los compradores confía en que los minoristas ofrecen un precio justo.",
      cifras: [
        { v: "US$168", t: "lo que costaron los tres looks del anuncio «Party Fits»" },
        { v: "32 %", t: "de los compradores confía en el precio de los minoristas, según Akeneo" },
        { v: "15 s", t: "duración del anuncio «Party Fits»" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Mientras otros hacen campañas de fantasía, JCPenney apuesta por una persona real y un precio claro. Con el consumidor cansado de tanta oferta, eso se entiende rápido.",
      hacer: "Escoger un cliente de retail y bocetar esta semana una pieza navideña con una clienta o cliente real y un precio exacto en pantalla, en vez de un mensaje de «grandes descuentos».",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/why-jcpenney-is-taking-on-deal-fatigue-for-its-holiday-campaign/873354/" }]
    },
    {
      id: "elf", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "e.l.f.", "Stop-motion"],
      titular: "e.l.f. estrena su primera campaña navideña en claymation, con la voz de Alan Cumming",
      corto: "e.l.f. estrena su Navidad en claymation",
      cuerpo: "e.l.f. Cosmetics lanzó su primera campaña navideña, «Made to Stand Out», narrada por el actor Alan Cumming, según Adweek. Está hecha con animación stop-motion y claymation y apunta a la Generación Z. Cuenta la historia de tres amigos universitarios, Echo, Cleo y Kit, que se reúnen para las fiestas y, con los productos de la marca, abrazan lo que los hace distintos. El mensaje: «tu diferencia es tu regalo».",
      cifras: [{ v: "1.ª", t: "campaña navideña de e.l.f. Cosmetics" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Una marca joven escoge una técnica manual y nostálgica pa’ destacar entre tanto anuncio. Es una referencia útil pa’ clientes que quieren sentirse distintos en diciembre.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/elf-cosmetics-recruits-alan-cumming-to-narrate-its-nostalgic-holiday-ad-debut/" }]
    },

    {
      id: "pinterest", dep: "planning", peso: "principal",
      etiquetas: ["Plataformas", "Pinterest", "Audiencia"],
      titular: "Pinterest llega a 661 millones de usuarios y la Generación Z ya es el 57 % de su audiencia",
      corto: "Pinterest llega a 661 millones de usuarios",
      cuerpo: "Pinterest reportó el 29 de octubre su tercer trimestre de 2026, según Social Media Today. Sumó 21 millones de usuarios activos mensuales frente al segundo trimestre y llegó a 661 millones; 17 millones de ese aumento vinieron de fuera de EE. UU. y Europa. La Generación Z representa 57 % de la audiencia. Los ingresos fueron US$1,170 millones, 12 % más que hace un año, y 14 % en EE. UU. y Canadá. Pinterest también lanzó su compra programática en todas las regiones.",
      cifras: [
        { v: "661 millones", t: "usuarios activos mensuales de Pinterest" },
        { v: "57 %", t: "de la audiencia es Generación Z" },
        { v: "US$1,170 millones", t: "ingresos del trimestre, 12 % más que hace un año" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Casi todo el crecimiento viene de fuera de los mercados que más facturan. Antes de contar con esos usuarios en un plan, hay que ver cuántos están en el país del cliente.",
      hacer: "Esta semana, pedirle al rep de Pinterest el tamaño de audiencia en República Dominicana y su peso de Generación Z, antes de poner la plataforma en el plan de enero.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/pinterest-reports-solid-user-growth-in-q3/873274/" }]
    },

    {
      id: "safari", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Apple", "Identidad"],
      titular: "Apple bloquea en Safari la identidad por correo y WPP dice que a ella no le pega",
      corto: "Apple bloquea la identidad por correo en Safari",
      cuerpo: "Digiday cuenta que Apple explicó, en un artículo del 19 de octubre titulado «Blocking Identity Resolution Infrastructure», por qué Safari bloquea a las empresas que reconocen a la misma persona en varios sitios por su correo electrónico, como LiveRamp, ID5 o UID 2.0. Apple dice que la empresa en el medio ve el mismo correo llegar desde todos esos sitios, y que nadie que se suscribe a un boletín espera eso. En la llamada de resultados de WPP, su CEO Cindy Rose dijo que el bloqueo casi no los afecta porque su solución de datos no depende solo de unir identidades. WPP compró InfoSum hace unos dos años.",
      cifras: [
        { v: "19 oct", t: "fecha del artículo de Apple sobre el bloqueo" },
        { v: "≈2 años", t: "desde que WPP compró InfoSum" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "El correo como llave pa’ reconocer a la misma persona entre sitios ya no es seguro en Safari.",
        "Las agencias empiezan a vender colaboración de datos y no solo identidad."
      ],
      hacer: "Revisar esta semana qué campañas o mediciones de los clientes usan identificadores por correo y cuánto de ese tráfico viene por Safari. Dejar anotado el plan B en una página.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/apples-safari-block-hands-wpp-a-fresh-case-for-infosum/" }]
    },

    {
      id: "igfeatures", dep: "content", peso: "principal",
      etiquetas: ["Instagram", "Creadores", "Video largo"],
      titular: "Instagram le paga a creadores pa’ que suban videos de hasta 90 minutos",
      corto: "Instagram paga a creadores por video largo",
      cuerpo: "Instagram probó la semana pasada «Features», que deja a los creadores subir videos de hasta 90 minutos, según Social Media Today. Business Insider reportó que Meta ofreció a algunos creadores US$50,000 por publicar allí, y a otros hasta US$500,000. Meta no confirmó las cifras, pero dijo que está financiando contenido de Features directamente con algunos creadores. Adam Mosseri, jefe de Instagram, reconoció en Threads que «la economía importa mucho». Social Media Today recuerda que Meta ya intentó algo parecido con IGTV y no funcionó.",
      cifras: [
        { v: "90 min", t: "duración máxima de un video en Features" },
        { v: "US$50,000", t: "oferta a algunos creadores, según Business Insider" },
        { v: "US$500,000", t: "tope de las ofertas reportadas" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "El video largo vuelve a ser apuesta de Instagram, pero sin un modelo de pago estable para todos. Hay que probar sin entregarse del todo.",
      hacer: "Esta semana, escoger un video de más de 10 minutos de un cliente (entrevista, tutorial o evento) y evaluar si se puede probar en Features cuando se abra al país, sin sacrificar lo que ya sirve en YouTube.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/instagram-offers-to-pay-creators-for-long-form-content/873402/" }]
    },
    {
      id: "xvideo", dep: "content", peso: "secundaria",
      etiquetas: ["X", "Creadores", "Video corto"],
      titular: "X lanza «Video Kickstart»: un bono pa’ creadores que suban video vertical",
      corto: "X lanza un bono pa’ videos verticales",
      cuerpo: "X lanzó «Video Kickstart», un programa piloto solo por invitación que paga un bono a quienes publiquen sus propios videos verticales de menos de tres minutos, según Social Media Today. Hay que subir 15 videos en 15 días distintos dentro de un período de aproximadamente un mes. Los videos pueden haberse publicado antes en otras plataformas, siempre que sean del creador. Los que se inscriban pasan más rápido al programa de ingresos por anuncios de X.",
      cifras: [{ v: "15 en 15", t: "videos en 15 días distintos pa’ ganar el bono" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "Dos plataformas pagando por video el mismo fin de semana muestran que la pelea por los creadores sigue. Pa’ content, es una razón más pa’ tener un buen archivo de video vertical.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/x-launches-new-bonus-program-for-video-creators/873404/" }]
    },

    {
      id: "expomovil", dep: "rd", peso: "principal", para: ["planning", "medios", "creatividad"],
      etiquetas: ["Banca", "Banreservas", "Consumo"], fecha: "1 nov 2026",
      titular: "Expomóvil Banreservas cierra con RD$9,985 millones en financiamientos",
      corto: "Expomóvil Banreservas financia RD$9,985 millones",
      cuerpo: "Santo Domingo.— Banreservas concluyó el domingo Expomóvil 2026, según El Dinero. Su presidente ejecutivo, Leonardo Aguilera, informó que en los cuatro días de feria aprobaron financiamientos por más de RD$9,985 millones, y que recibieron solicitudes por más de RD$30,000 millones, un 20 % más que el año pasado. Se financiaron más de 4,200 vehículos, un 12 % más. De esas unidades, 70 % fueron vehículos tradicionales de uso personal, 14 % comerciales, 10 % usados o seminuevos y 6 % híbridos y eléctricos.",
      cifras: [
        { v: "RD$9,985 millones", t: "financiamientos aprobados en cuatro días" },
        { v: "+20 %", t: "solicitudes de crédito frente al año pasado (más de RD$30,000 millones)" },
        { v: "4,200+", t: "vehículos financiados, 12 % más que el año pasado" },
        { v: "6 %", t: "de las unidades fueron híbridas o eléctricas" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "La gente sigue comprando a crédito cuando la oferta es clara y está en un solo lugar. Una feria con financiamiento a la mano funciona como campaña, evento y punto de venta a la vez.",
      hacer: "Revisar con clientes de banca, autos o electrodomésticos si tienen una oferta con cuota y plazo claros pa’ diciembre, y proponer un evento corto, físico o digital, donde el crédito se pueda aprobar en el momento.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386906/expomovil-banreservas-2026-cierra-con-financiamientos-superiores-a-rd9985-millones/" }]
    },
    {
      id: "cruceros", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Cruceros", "Apordom"], fecha: "1 nov 2026",
      titular: "Más de 56 mil cruceristas llegaron al país en una semana",
      cuerpo: "Santo Domingo.— En la última semana de octubre llegaron 56,330 pasajeros en 15 cruceros que atracaron en cuatro terminales, según la Autoridad Portuaria Dominicana que cita Diario Libre. Cabo Rojo recibió tres barcos, Taíno Bay cinco, Amber Cove seis y La Romana el Mein Schiff 2, con 2,634 pasajeros, el viernes 30. Apordom dice que el sector va camino a superar los tres millones de cruceristas en 2026.",
      cifras: [
        { v: "56,330", t: "cruceristas en la última semana de octubre" },
        { v: "3 millones+", t: "meta de cruceristas en 2026, según Apordom" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Temporada alta de cruceros es público de paso con ganas de gastar. Pa’ planning y medios, los comercios de Puerto Plata, La Romana y Pedernales tienen una ventana clara.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/turismo/2026/11/01/llegan-mas-de-56-mil-cruceristas-rd-en-15-embarcaciones/3707370" }]
    },
    {
      id: "feriados", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Agenda", "Feriados", "2027"], fecha: "1 nov 2026",
      titular: "Ya salieron los feriados de 2027: Reyes y Duarte pasan al lunes",
      cuerpo: "Santo Domingo.— El Ministerio de Trabajo anunció los feriados de 2027, según El Dinero. Por la Ley 139-97, el Día de los Reyes (miércoles 6 de enero) se pasa al lunes 4, y el Día de Duarte (martes 26 de enero) se pasa al lunes 25. Altagracia, jueves 21 de enero; Viernes Santo, 26 de marzo; Corpus Christi, 27 de mayo; Restauración, lunes 16 de agosto, y Mercedes, viernes 24 de septiembre, quedan donde caen. Independencia, Día del Trabajo, Constitución y Navidad caen en sábado.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ planning y medios es la base del calendario del año que viene: enero arranca con dos lunes largos y varios feriados caen en sábado.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386891/ministerio-de-trabajo-da-a-conocer-los-dias-feriados-que-tendra-rd-en-2027/" }]
    },
    {
      id: "tpm", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Economía", "Banco Central"], fecha: "30 oct 2026",
      titular: "El Banco Central mantiene la tasa de política monetaria en 5.50 %",
      cuerpo: "Santo Domingo.— El Banco Central decidió en su reunión de octubre de 2026 mantener la tasa de política monetaria en 5.50 % anual, según El Dinero. La tasa de la facilidad permanente de expansión de liquidez (repos a un día) sigue en 6.00 % anual.",
      cifras: [
        { v: "5.50 %", t: "tasa de política monetaria" },
        { v: "6.00 %", t: "tasa de repos a un día" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Sin cambio en la tasa, el crédito no se abarata ni se encarece pa’ diciembre. Pa’ planning, es un dato estable al armar ofertas con cuotas.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/386805/banco-central-mantiene-su-tasa-de-politica-monetaria-en-5-50-anual-8/" }]
    }
  ],

  pizarra: ["googlesearch", "jcpenney", "pinterest", "safari", "igfeatures", "expomovil"],

  frases: [
    { dep: "medios", texto: "La búsqueda de Google era la línea que nadie tenía que defender. Hoy los clientes quieren saber qué pasa después del clic.", uso: "para conversaciones de presupuesto de Q4" },
    { dep: "creatividad", texto: "Cuando todo el mundo grita ofertas, JCPenney pone una barbera de Indiana y un precio exacto.", uso: "para ideas de campañas navideñas" },
    { dep: "data", texto: "Apple dice que nadie que se suscribe a un boletín espera que su correo termine con un tercero. Safari ya actúa en consecuencia.", uso: "para conversaciones de identidad y medición" },
    { dep: "planning", texto: "Pinterest ya pasa los 661 millones de usuarios, pero casi todo el crecimiento viene de fuera de EE. UU. y Europa.", uso: "para planes que incluyen plataformas globales" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Google Search bajo la lupa de los compradores" },
      { id: "creatividad", texto: "JCPenney y su Navidad con gente de verdad" },
      { id: "planning", texto: "Pinterest llega a 661 millones" },
      { id: "data", texto: "Apple bloquea la identidad por correo" },
      { id: "content", texto: "Instagram paga por video largo" },
      { id: "rd", texto: "Zoom a RD: Expomóvil Banreservas" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "googlesearch", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "pinterest", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Noviembre ya es Navidad. Antes de meter Pinterest en el plan, pide el tamaño de su audiencia en tu país: de sus 661 millones de usuarios, 17 millones del último aumento vinieron de fuera de EE. UU. y Europa."
    },
    data: {
      tipo: "secreto", nota: "safari", titulo: "Destapa el expediente",
      texto: "Apple publicó el [[19 de octubre]] su aviso «Blocking Identity Resolution Infrastructure», y WPP compró [[InfoSum]] hace unos dos años pa’ no depender solo de unir identidades."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "expomovil", titulo: "La pregunta del patio",
      p: "¿Cuánto financió Banreservas en Expomóvil 2026?",
      opciones: ["Más de RD$900 millones", "Más de RD$9,985 millones", "Más de RD$30,000 millones"], correcta: 1,
      explicacion: "Según El Dinero, los financiamientos aprobados pasaron de RD$9,985 millones; los RD$30,000 millones fueron las solicitudes de crédito, un 20 % más que el año pasado."
    }
  }
};
