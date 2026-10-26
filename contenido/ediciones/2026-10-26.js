/*
  El Pulso Publicitario · edición N.º 299 · 26 de octubre de 2026
*/
window.EDICION = {
  numero: 299,
  fechaISO: "2026-10-26",
  fecha: "Lunes 26 de octubre 2026",
  fechaCorta: "26 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Esta semana el dinero se mueve: dónde compras, dónde se ve la gente y cómo vas a probarle los resultados a tu cliente.",
    largo: "Pinterest abre su inventario a la compra programática, Google le mete Gemini al Marketplace de DV360 y YouTube llegó a 15.8 % del tiempo de TV en EE. UU. Del lado de los datos, Netflix lanza su propio Pixel y Google Ads separa su política de seguridad infantil. Y aquí en el patio, el Banco Central anuncia pagos instantáneos pa’ 2027. El consejo de hoy: escoge una de estas notas, llévala al cliente esta semana y ponle fecha a la decisión.",
    corto: "Escoge un «Lo que toca hacer» de esta edición, llévalo al cliente esta semana y ponle fecha. Así de fácil.",
    porDep: {
      medios: "Cada vez que aparece un canal nuevo de compra, pregunta por quién pasa el dinero y cuánto llega a la pantalla.",
      creatividad: "Cuando una marca ya tiene un aliado querido, la idea más fuerte es la que deja que ese aliado haga lo suyo.",
      planning: "Mira dónde está la atención hoy y no dónde estaba en el plan del año pasado. Los números se mueven rápido.",
      data: "Cuando una plataforma te ofrece medición propia, pregunta qué dato recoge y quién lo autoriza antes de ponerla en la página del cliente.",
      content: "Una función nueva sirve cuando alguien del equipo la prueba esta semana, no cuando se anota pa’ después.",
      rd: "En el patio, cuando el pago se vuelve instantáneo, la oferta tiene que ser igual de rápida. Pregúntale al cliente cuántos pasos le toma cobrar."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Pinterest abre su inventario a la compra programática · Google le mete Gemini al Marketplace de DV360 · Los CPM de CTV suben por la pauta política" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Walmart junta a los Muppets y a Walton Goggins en su villancico · Kalshi convierte un chiste en producto real" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "YouTube llega a 15.8 % del tiempo de TV en EE. UU. · Meta pide menos cambios en la temporada alta" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Netflix lanza su Pixel y se conecta con The Trade Desk · Google Ads separa su política de seguridad infantil" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Edits de Meta llega al iPhone Duo y prueba versión de escritorio · X da consejos pa’ las campañas de fin de año" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "pinterestprog", dep: "medios", peso: "principal",
      etiquetas: ["Programática", "Pinterest", "Magnite"],
      titular: "Pinterest abre su inventario a la compra programática",
      corto: "Pinterest abre su inventario a la programática",
      cuerpo: "Pinterest vende ahora su inventario de display y video por las plataformas programáticas donde los anunciantes ya planifican y compran, después de probarlo con agencias y marcas desde principios de año. Anunció disponibilidad general de Programmatic Deals en Norteamérica, Sudamérica y Asia Pacífico, con private marketplaces, preferred deals y programmatic guaranteed en Amazon Ads, Google Display & Video 360 y Yahoo DSP. Según Adweek, Magnite es la tubería principal. La empresa necesita demanda nueva: proyectó un crecimiento de ingresos de 13 % a 15 % pal tercer trimestre, por debajo del 18 % del segundo.",
      cifras: [
        { v: "13–15 %", t: "crecimiento de ingresos que Pinterest proyecta pal tercer trimestre, frente a 18 % en el segundo" },
        { v: "3 DSP", t: "Amazon Ads, DV360 y Yahoo DSP, donde ya se compra" },
        { v: "US$1,180M", t: "ingresos de Pinterest en el segundo trimestre" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Si ya compras en DV360 o Amazon DSP, Pinterest entra sin abrir otra cuenta ni otro contrato. Eso lo vuelve fácil de probar en el plan de fin de año.",
      hacer: "Esta semana pídele a tu rep de DV360 o de Amazon DSP los detalles del acceso a Pinterest, y arma una prueba chiquita con un cliente de retail o de temporada pa’ comparar el costo contra el resto del plan social.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/programmatic/pinterest-opens-its-inventory-to-programmatic-buyers-with-magnite-as-its-main-pipe/" }]
    },
    {
      id: "dv360gemini", dep: "medios", peso: "secundaria",
      etiquetas: ["Programática", "Google", "DV360"],
      titular: "Google le mete Gemini al Marketplace de DV360 con paquetes listos pa’ deportes y eventos grandes",
      corto: "DV360 estrena paquetes curados por Gemini",
      cuerpo: "Google publicó el 22 de octubre la primera edición de «Google Marketing Platform Drops», una serie mensual de novedades. En ella dice que el Marketplace de Display & Video 360 ahora ofrece paquetes de medios personalizados, con activación en un clic, pa’ deportes en vivo y eventos grandes, curados por modelos de Gemini. Según la documentación de ayuda citada por PPC Land, cada línea puede llevar hasta 50 paquetes. La misma edición dice que el inventario de CTV de LinkedIn ya se puede comprar en DV360. Google no ha dicho cómo escoge Gemini lo que va en cada paquete.",
      cifras: [
        { v: "50", t: "paquetes como máximo por línea de pedido" },
        { v: "1 clic", t: "para activar un paquete curado" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/dv360-marketplace-gains-gemini-curated-bundles-50-packages-per-line-item/" }]
    },
    {
      id: "ctvmidterm", dep: "medios", peso: "secundaria",
      etiquetas: ["CTV", "Política", "CPM"],
      titular: "La pauta política le sube el precio a la CTV pa’ los anunciantes regionales",
      corto: "La pauta política sube los CPM de CTV",
      cuerpo: "Con las elecciones de medio término del 3 de noviembre, AdImpact espera cerca de US$12,000 millones en gasto político, de los cuales US$8,200 millones van a TV abierta, cable y CTV. Según Digiday, citado por PPC Land, los CPM de CTV premium pasaron de US$34–35 a US$43 y un ejecutivo reportó YouTube cerca de 20 % más caro. Las estaciones locales pueden sacar el anuncio de una marca si un buyer político paga más. Es el mercado de EE. UU., no el dominicano.",
      cifras: [
        { v: "US$43", t: "CPM de CTV premium, desde US$34–35" },
        { v: "US$8,200M", t: "del gasto político va a TV abierta, cable y CTV, según AdImpact" }
      ],
      fuentes: [
        { nombre: "PPC Land", url: "https://ppc.land/midterm-ads-lift-ctv-prices-to-43-as-youtube-takes-15-8-of-us-tv-time/" },
        { nombre: "Digiday", url: "https://digiday.com/media-buying/midterm-political-spending-throws-spanner-into-regional-advertiser-holiday-plans/" }
      ]
    },

    {
      id: "walmart", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Walmart", "Navidad"],
      titular: "Walmart pone a los Muppets a cantar su villancico de Navidad",
      corto: "Walmart reinventa «A Muppet Christmas Carol»",
      cuerpo: "Walmart se juntó con Disney y The Muppets Studio pa’ «A Who Knew Carol», una reinvención de la película «The Muppet Christmas Carol» de 1992. Debutó el 26 de octubre como el capítulo nuevo de su plataforma «Who Knew?», con Walton Goggins, vocero de la marca, como Scrooge. En esta versión lo visitan tres fantasmas nuevos: el de las Navidades de Presentes, el de las Ofertas Futuras y el de la Navidad Rápida. Cada uno representa una parte de la oferta navideña de Walmart, de los productos a la entrega exprés.",
      cifras: [
        { v: "1992", t: "año de la película que reinventa la campaña" },
        { v: "3", t: "fantasmas nuevos, uno por cada parte de la oferta navideña" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Walmart no inventó una historia: tomó una que todo el mundo se sabe y la usó pa’ explicar sus beneficios. Los tres fantasmas son tres mensajes distintos dentro de un solo relato.",
      hacer: "En la próxima sesión creativa de Navidad, escoge un cuento o película que el público dominicano se sepa de memoria y esboza cómo se reparten en él los tres mensajes principales de tu cliente.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/walmart-brings-the-muppets-and-walton-goggins-together-for-its-own-holiday-carol/" }]
    },
    {
      id: "kalshi", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Campaña", "Kalshi", "Producto real"],
      titular: "Kalshi convierte un chiste en producto: el «King Blocker» que silencia a LeBron",
      corto: "Kalshi lanza un aparato pa’ silenciar a LeBron",
      cuerpo: "Kalshi presentó una campaña con el jugador de la NBA Dillon Brooks, que muestra el «King Blocker», un aparato que silencia cualquier mención de su rival LeBron James. En el anuncio, Brooks lo usa pa’ bloquear el nombre y los apodos de James en distintos dispositivos. Kalshi también lo ofrece como producto real, que puede silenciar a James en los televisores de los fans, y hace un sorteo. Su jefe de crecimiento dijo que la idea es «ridícula» y divertida a propósito.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/kalshi-gives-nba-star-dillon-brooks-a-device-to-block-lebron-james/" }]
    },
    {
      id: "gauge", dep: "planning", peso: "principal",
      etiquetas: ["Audiencia", "YouTube", "Nielsen"],
      titular: "YouTube llega a 15.8 % del tiempo de TV en EE. UU., su récord en el Gauge de Nielsen",
      corto: "YouTube llega a 15.8 % del tiempo de TV en EE. UU.",
      cuerpo: "Según el Gauge de agosto de Nielsen, publicado el 22 de octubre, YouTube se llevó 15.8 % del tiempo de televisión en EE. UU., su mayor participación registrada. El streaming total cerró en 49.6 %, el cable en 18.9 % y la TV abierta en 17.5 %. Fue un mes donde el uso total de TV cayó 4.4 % frente a julio, al terminar el Mundial y volver los niños a clases. Nielsen avisó que septiembre y octubre se publicarán juntos, con un método ajustado, así que no serán comparables con agosto.",
      cifras: [
        { v: "15.8 %", t: "del tiempo de TV en EE. UU., el máximo de YouTube en el Gauge" },
        { v: "49.6 %", t: "es la participación del streaming" },
        { v: "−4.4 %", t: "cayó el uso total de TV frente a julio" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Es un dato de EE. UU., no de RD. Aun así, es la prueba más clara de que el video en YouTube compite de tú a tú con la TV en los planes de los clientes grandes.",
      hacer: "Esta semana revisa cuánto de la inversión de video de cada cliente va a YouTube frente a TV y pide el dato dominicano de tu rep de Google antes de decidir el reparto de cierre de año.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/youtube-gains-record-15-8-of-us-tv-time-in-nielsens-august-gauge/" }]
    },
    {
      id: "metapeak", dep: "planning", peso: "secundaria",
      etiquetas: ["Temporada", "Meta", "Fin de año"],
      titular: "Meta a los anunciantes de temporada: menos grupos de anuncios y menos cambios",
      corto: "Meta pide menos cambios en la temporada alta",
      cuerpo: "El 21 de octubre, Meta publicó una guía pa’ la temporada alta titulada «You Don’t Beat The Auction. You Brief It». Dice que los grupos de anuncios con menos de unas 50 conversiones por semana costaron cerca de 28 % más por compra, según su propio análisis. Pide escoger una campaña, dejarla sin tocar y medirla con un experimento. PPC Land aclara que casi toda la evidencia sale de pruebas de Meta, y que la cifra de que 42 % de los compradores pensaba gastar menos mientras gastó 4.2 % más no trae estudio ni nota.",
      cifras: [
        { v: "≈50", t: "conversiones por semana: por debajo de eso, la compra costó cerca de 28 % más, según Meta" },
        { v: "28 %", t: "más caro por compra, en el análisis de Meta" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/meta-says-ad-sets-under-50-weekly-conversions-cost-28-more-per-purchase/" }]
    },
    {
      id: "childsafety", dep: "data", peso: "secundaria",
      etiquetas: ["Regulación", "Google Ads", "Políticas"],
      titular: "Google Ads separa su política de seguridad infantil y la parte en dos niveles de sanción desde el 11 de enero",
      corto: "Google Ads estrena política de Child Safety",
      cuerpo: "Según un aviso del 22 de octubre en el Centro de Ayuda de políticas de Google Ads, la política sobre abuso y explotación sexual infantil pasa a llamarse «Child Safety», sale de la política de contenido inapropiado y se divide en dos categorías con sanciones distintas. Se aplica desde el 11 de enero de 2027. Lo más grave sigue llevando a la suspensión inmediata y permanente de la cuenta, y la segunda categoría, de contenido no sexual que podría usarse mal, da al menos 7 días de aviso.",
      cifras: [
        { v: "11 ene 2027", t: "fecha en que empieza a aplicarse" },
        { v: "7 días", t: "de aviso como mínimo en la segunda categoría" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-ads-splits-child-safety-rules-into-two-penalty-tiers-from-january-11/" }]
    },
    {
      id: "netflixpixel", dep: "data", peso: "principal",
      etiquetas: ["Medición", "Netflix", "The Trade Desk"],
      titular: "Netflix lanza su Pixel de medición y se conecta con The Trade Desk",
      corto: "Netflix lanza su Pixel de medición",
      cuerpo: "Netflix publicó el Netflix Pixel en un blog pocas horas antes de presentar sus resultados del tercer trimestre, y anunció una integración del lado de compra con The Trade Desk. Según AdExchanger, su co-CEO Greg Peters dijo que los ingresos publicitarios crecieron más de 80 % este año, pero queda por debajo de la meta de duplicarlos otra vez, y Netflix ajustó el pronóstico pal resto del año. Los ingresos totales crecieron 12 % a US$12,900 millones.",
      cifras: [
        { v: "+80 %", t: "crecimiento de ingresos publicitarios este año, según Netflix" },
        { v: "US$12,900M", t: "ingresos del trimestre, +12 % interanual" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Netflix busca probarle resultados al anunciante con una medición propia, no solo con alcance.",
        "La integración con The Trade Desk le abre la compra a quien ya trabaja con esa plataforma."
      ],
      hacer: "Pídele a tu rep de Netflix o de The Trade Desk la documentación del Netflix Pixel y anota qué datos recoge y qué tendría que aprobar el cliente antes de ponerlo en una página.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/tv/netflix-touts-new-measurement-capabilities-as-it-struggles-with-modest-engagement-growth/" }]
    },

    {
      id: "edits", dep: "content", peso: "principal",
      etiquetas: ["Herramientas", "Meta", "Edits"],
      titular: "Edits, la app de video de Meta, llega al iPhone Duo y prueba su versión de escritorio",
      corto: "Edits llega al iPhone Duo y prueba versión de escritorio",
      cuerpo: "Meta lanzó una versión de Edits hecha pa’ la pantalla plegable del iPhone Duo, que permite editar y previsualizar la línea de tiempo lado a lado. Además, la creadora Taylor Golub compartió una captura de la versión de escritorio, que hoy prueban algunos usuarios y que Meta anunció en junio. En un comentario, el jefe de Instagram, Adam Mosseri, dijo que espera que esa versión sea «una base pa’ muchas funciones interesantes».",
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Un editor de escritorio de la propia Meta significa que el trabajo de reels se podría hacer más rápido en la oficina, no solo desde el celular.",
      hacer: "Esta semana, que alguien del equipo pruebe Edits en un reel de un cliente y compare cuánto tarda contra la herramienta de edición que ya usan.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/edits-comes-to-iphone-duo-and-desktop/833909/" }]
    },
    {
      id: "xholiday", dep: "content", peso: "secundaria",
      etiquetas: ["X", "Fin de año", "IA"],
      titular: "X da consejos pa’ las campañas de fin de año: corto, claro y en palabras sencillas",
      corto: "X da consejos pa’ las campañas de fin de año",
      cuerpo: "X compartió guías pa’ los mercadólogos que planifican campañas de temporada, tras un webinar la semana pasada. Recomienda anuncios cortos, lenguaje natural, un llamado a la acción claro y mandar a la gente a un solo lugar. También aconseja explicar el producto en palabras sencillas: «Si un modelo puede resumirte en una línea, estás en la recomendación», dijo X. Social Media Today advierte que eso simplifica mucho cómo funcionan las recomendaciones de la IA.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/x-provides-holiday-campaign-tips/833908/" }]
    },

    {
      id: "proyecciones", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Economía", "PIB", "Inflación"], fecha: "26 oct 2026",
      titular: "El FMI, la Cepal y el Banco Mundial mejoran el pronóstico de crecimiento de RD, pero la inflación sube",
      cuerpo: "Santo Domingo.— Según Diario Libre, la Cepal, el FMI y el Banco Mundial proyectan por separado que el PIB dominicano crecerá entre 4.4 % y 4.7 % este año. El FMI pasó de 3.7 % en abril a 4.6 %, y la Cepal de 4.0 % en agosto a 4.4 %. En el mismo año marcado por un choque energético, el FMI subió su proyección de inflación de 4.5 % a 4.9 %, aún por debajo de la meta de las autoridades, que es de 4.0 % ± 1.0 %.",
      cifras: [
        { v: "4.6 %", t: "crecimiento que proyecta el FMI, desde 3.7 % en abril" },
        { v: "4.9 %", t: "inflación proyectada por el FMI, desde 4.5 %" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Con economía creciendo y precios subiendo, los clientes van a mirar con más cuidado cuánto rinde cada peso de pauta en el cierre del año.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/finanzas/2026/10/26/organismos-mejoran-las-proyecciones-economicas-del-pais/3700237" }]
    },
    {
      id: "tarjetas", dep: "rd", peso: "secundaria", para: ["planning", "data"],
      etiquetas: ["Consumo", "Banca", "Banco Central"], fecha: "25 oct 2026",
      titular: "Crecen las tarjetas de crédito en RD, pero solo las de límite alto",
      cuerpo: "Santo Domingo.— Según estadísticas del Banco Central citadas por Diario Libre, en septiembre de 2026 había 4,091,786 tarjetas de crédito vigentes y activas, 1.9 % más que un año antes, o 75,979 tarjetas nuevas. El crecimiento vino de las de límite sobre RD$50,000, sobre todo las de más de RD$150,000, que sumaron 743,125 (18.2 % del total) y crecieron 9.8 %. Las de menor límite bajaron.",
      cifras: [
        { v: "4,091,786", t: "tarjetas de crédito vigentes y activas en septiembre" },
        { v: "+9.8 %", t: "crecimiento de las de límite mayor de RD$150,000" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El crédito crece por arriba. Pa’ los clientes de banca y comercio, hablarle a quien tiene tarjeta de límite alto no es lo mismo que hablarle a todo el mercado.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/10/25/cae-la-cantidad-de-tarjetas-de-credito-de-menor-limite/3698709" }]
    },
    {
      id: "pagosinstantaneos", dep: "rd", peso: "principal", para: ["planning", "data", "content"],
      etiquetas: ["Pagos", "Banco Central", "Consumo"], fecha: "24 oct 2026",
      titular: "El Banco Central anuncia pagos instantáneos las 24 horas pa’ 2027",
      corto: "Banco Central anuncia pagos instantáneos pa’ 2027",
      cuerpo: "Santo Domingo.— En el aniversario 79 del Banco Central, su gobernador, Héctor Valdez Albizu, dijo que en 2027 arrancará una plataforma de pagos instantáneos que operará 24/7, los 365 días, con acreditación de fondos «en segundos» y las entidades financieras reguladas. Según Diario Libre, dijo que «revolucionará» las transferencias y promoverá la digitalización de los pagos y la inclusión financiera. En el primer semestre de 2026 se hicieron 23.6 millones de transacciones LBTR.",
      cifras: [
        { v: "2027", t: "año en que arranca la plataforma" },
        { v: "24/7", t: "operación, los 365 días del año" },
        { v: "23.6 millones", t: "de transacciones LBTR en el primer semestre de 2026" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Cuando pagar sea cuestión de segundos, el cliente que vende por redes o en línea va a poder cobrar más rápido y con menos pasos. Eso cambia cómo se diseña una oferta y su llamado a comprar.",
      hacer: "Esta semana, pregúntale a tus clientes que venden por redes o en línea cómo cobran hoy y cuántos pasos tiene el pago. Anota ese punto de partida pa’ comparar cuando llegue la plataforma.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/finanzas/2026/10/24/pagos-instantaneos-revolucionaran-las-transferencias-en-rd-en-2027/3698692" }]
    },
    {
      id: "bisbal", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Música", "Conciertos"], fecha: "25 oct 2026",
      titular: "David Bisbal vuelve a RD tras 16 años con un teatro lleno y un homenaje al pop romántico",
      cuerpo: "Santo Domingo.— Diario Libre cuenta que David Bisbal regresó con su gira «Tour Eternos 2026», un homenaje a artistas en español de los años 70 y 80, y que el Teatro Nacional Eduardo Brito estuvo a total capacidad. Abrió con «Vivir así es morir de amor», de Camilo Sesto, y la gente cantó de pie varias canciones de principio a fin.",
      cifras: [{ v: "16 años", t: "sin presentarse en RD" }],
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/10/25/david-bisbal-regresa-a-republica-dominicana-con-tour-eternos/3700143" }]
    },
    {
      id: "melissa", dep: "rd", peso: "secundaria", para: ["medios"],
      etiquetas: ["Radio", "Talentos"], fecha: "20 oct 2026",
      titular: "Melissa Santos se integra a «El Mañanero» como nuevo rostro femenino",
      cuerpo: "Santo Domingo.— Según Remolacha, el programa radial matutino «El Mañanero», que dirige el comunicador y diputado Bolívar Valera «El Boli», anunció oficialmente la incorporación de la conductora Melissa Santos, conocida por su trayectoria en el grupo de medios Telemicro.",
      tocaTitulo: "¿Y eso qué?",
      toca: "Cuando un talento cambia de medio, parte de su audiencia se mueve con él. Pa’ los de medios, es un chin de información pa’ revisar las pautas de la mañana.",
      fuentes: [{ nombre: "Remolacha", url: "https://remolacha.net/2026/10/melissa-santos-3/" }]
    }
  ],

  pizarra: ["pinterestprog", "walmart", "gauge", "netflixpixel", "edits", "pagosinstantaneos"],

  frases: [
    { dep: "medios", texto: "Pinterest ya se compra por DV360, Amazon DSP y Yahoo DSP: probarlo no requiere abrir una cuenta nueva.", uso: "para conversaciones de plan social y programática" },
    { dep: "creatividad", texto: "Walmart no inventó una historia: tomó la de los Muppets y repartió tres mensajes en tres fantasmas.", uso: "para conversaciones de campañas de Navidad" },
    { dep: "planning", texto: "YouTube llegó a 15.8 % del tiempo de TV en EE. UU., aunque la gente vio menos TV en total.", uso: "para conversaciones de reparto entre TV y video" },
    { dep: "data", texto: "Netflix lanzó su propio Pixel y se conectó con The Trade Desk: quiere probar con medición propia que su publicidad funciona.", uso: "para conversaciones de medición en streaming" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Pinterest abre su inventario a la programática" },
      { id: "creatividad", texto: "Los Muppets y Walmart" },
      { id: "planning", texto: "YouTube con 15.8 % del tiempo de TV" },
      { id: "data", texto: "El Pixel de Netflix y The Trade Desk" },
      { id: "content", texto: "Edits llega al iPhone Duo" },
      { id: "rd", texto: "Zoom a RD: pagos instantáneos en 2027" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "pinterestprog", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "gauge", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Nielsen dice que YouTube llegó a 15.8 % del tiempo de TV en EE. UU. en agosto. Revisa cuánto del video de tu cliente va a YouTube antes de cerrar el plan de fin de año."
    },
    data: {
      tipo: "secreto", nota: "netflixpixel", titulo: "Destapa el expediente",
      texto: "Netflix lanzó su [[Pixel]] de medición y una integración con [[The Trade Desk]], mientras sus ingresos publicitarios crecieron más de [[80 %]] este año."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "pagosinstantaneos", titulo: "La pregunta del patio",
      p: "¿Cuándo arranca la plataforma de pagos instantáneos del Banco Central?",
      opciones: ["En 2027", "El próximo mes", "En 2030"], correcta: 0,
      explicacion: "El gobernador Héctor Valdez Albizu dijo que arranca en 2027, con operación 24/7 y fondos acreditados en segundos."
    }
  }
};
