/*
  El Pulso Publicitario · edición N.º 318 · 14 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 318,
  fechaISO: "2026-11-14",
  fecha: "Sábado 14 de noviembre 2026",
  fechaCorta: "14 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "La IA te da el qué en un segundo; el porqué todavía hay que salir a buscarlo. No vendas un insight que nadie verificó.",
    largo: "Esta semana GWI encontró que el 80 % de los líderes de mercadeo se topa a menudo con hallazgos de IA errados, y apenas el 36 % los verifica casi siempre. Al mismo tiempo, Twitch le pone carrito de Amazon a sus anuncios, Fetch le paga a la gente por ver una comedia romántica de marcas y un estudio en JAMA Pediatrics enseña que el 83 % de la publicidad de comida que ven los muchachos llega por redes. En el patio, Pollos Victorina, Sprite y Bávaro Adventure Park se juntaron en una promo que sale de la pantalla y termina en un cenote. El hilo de hoy: el dato rápido abre la puerta, pero el que gana es el que lo confirma antes de presentarlo. Escoge un «Lo que toca hacer», ponle responsable y fecha, y arranca el lunes con eso hecho.",
    corto: "Antes de llevar un insight de IA al cliente, confírmalo con una fuente propia. Un chin de rigor te ahorra un mal rato.",
    porDep: {
      medios: "Si el cliente vende en Amazon, pídele al rep una prueba con anuncio comprable: el carrito a un toque se mide solo.",
      creatividad: "Cuando la pieza es entretenimiento de verdad, la gente se queda. Piensa en episodios, no solo en spots.",
      planning: "Separa en la presentación lo que dijo la IA de lo que confirmaste tú. El cliente lo va a agradecer.",
      data: "Si tu cliente vende comida o bebida, revisa hoy a qué edades llega su pauta en TikTok y YouTube.",
      content: "Los lanzamientos grandes se viven en directo: arma el calendario alrededor del evento, no después.",
      rd: "En RD la promo que más se recuerda es la que te saca de la casa. Junta marcas que se complementen y regala experiencias."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Twitch estrena anuncios comprables con Amazon y anuncios saltables de pago por atención · En LUMA, la CTV admite que todavía no se gana la confianza del anunciante" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Fetch le paga a la gente por ver «The Receipt», una comedia romántica con marcas · Disney estrena «The Invisible Horse», un caballo que nunca se ve" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "GWI: el 80 % de los líderes ve hallazgos de IA errados, pero casi nadie los verifica · Unilever ya trabaja con 500,000 creadores" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Estudio en JAMA Pediatrics: el 83 % del mercadeo de comida que ven los menores llega por redes · Yahoo es el primer licenciatario del colectivo ILC pa’ contenido en IA" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "YouTube monta un directo de 24 horas y un efecto de Shorts pa’l lanzamiento de GTA VI · Twitch dejará subir videos cortos hechos fuera de la plataforma" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Pollos Victorina, Sprite y Bávaro Adventure Park en una sola promo, combustibles congelados hasta enero, la biometría en la banca, vuelos cancelados por la FAA, cine dominicano en Madrid, un compositor dominicano con Cardi B y Daddy Yankee, y Asodircom con Barna. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "twitch", dep: "medios", peso: "principal",
      etiquetas: ["Twitch", "Amazon Ads", "Shoppable"],
      titular: "Twitch le pone carrito de Amazon a sus anuncios, y estrena unos saltables que solo cobran si te quedas",
      corto: "Twitch estrena anuncios comprables y saltables",
      cuerpo: "Alrededor de TwitchCon, Amazon presentó dos formatos nuevos pa’ Twitch. Los anuncios comprables salen como una capa sobre el video: el usuario añade el producto a su carrito de Amazon, mira estilos y compra sin salir del stream. Se compran junto al inventario de Prime Video vía Amazon Ads Agent y solo aplican a productos que ya están en Amazon, así que no hace falta landing ni pieza aparte; llegan a Europa, Medio Oriente, África del Norte y Asia-Pacífico durante el primer semestre del año que viene. Los anuncios saltables son de autoservicio y el anunciante paga solo si el usuario se queda viendo. En la prueba en EE. UU., Razer logró un retorno 2.44 veces mayor, cerca del doble de sus campañas anteriores en Twitch, y un tercio de la gente alcanzada era cliente nuevo de la marca.",
      cifras: [
        { v: "2.44x", t: "retorno sobre la inversión de Razer con los anuncios saltables en EE. UU." },
        { v: "92 %", t: "de los anuncios en Twitch los ven los usuarios, según Lumen pa’ Amazon" },
        { v: "~70 %", t: "de la audiencia global de Twitch es Gen Z y millennial" },
        { v: "4+ horas", t: "al día pasan en promedio los usuarios en Twitch" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Twitch deja de ser solo alcance pa’ gamers y se vuelve un canal que cierra la venta: del anuncio al carrito en un toque, con medición directa en Amazon. Y el saltable de pago por atención le baja la barrera de entrada a marcas con presupuesto más chiquito.",
      hacer: "Esta semana, identifica qué cliente vende en Amazon y apunta a Gen Z, y pídele al rep de Amazon Ads una cotización de prueba con anuncios comprables en Twitch.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/twitch-debuts-shoppable-skippable-ads-as-twitchcon-feels-growing-pains/874614/" }]
    },
    {
      id: "ctvconfianza", dep: "medios", peso: "secundaria",
      etiquetas: ["CTV", "Medición", "Incrementalidad"],
      titular: "La CTV ofrece cobrar solo por resultados, y aun así el anunciante no se fía",
      corto: "La CTV todavía no se gana la confianza",
      cuerpo: "En el Digital Media Summit de LUMA, Serge Matta, de LG Ad Solutions, contó que le ofreció a un anunciante de comida rápida cobrarle solo por visitas incrementales a sus tiendas, medidas por su propio proveedor independiente, y el director de mercadeo le respondió que cómo sabía que podía confiar en él. En el mismo panel, Vinny Rinaldi, hoy en The Trade Desk y antes en Hershey’s, recordó que octubre era el «Super Bowl» de la marca, pero que al comprar directo a los publishers la mayoría de las impresiones corría la primera semana, cuando él quería el 95 % del gasto en la última semana antes de Halloween.",
      cifras: [
        { v: "95 %", t: "del gasto que Hershey’s quería concentrar en la última semana de octubre" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El problema de la CTV no es que falten métricas, es que la pauta no siempre corre cuando el negocio la necesita. El ritmo de entrega es tan importante como el precio.",
      fuentes: [{ nombre: "AdExchanger", url: "https://www.adexchanger.com/tv/ctv-has-trust-issues/" }]
    },

    {
      id: "fetch", dep: "creatividad", peso: "principal",
      etiquetas: ["Microdrama", "Fetch", "Entretenimiento de marca"],
      titular: "Fetch le paga a la gente por ver una comedia romántica armada con recibos de compra",
      corto: "Fetch paga por ver su comedia romántica de marcas",
      cuerpo: "Fetch, la app que da puntos por subir recibos de compra, lanzó «The Receipt», que presenta como la primera comedia romántica con recompensa. Son seis episodios: Chloe intercambia por error su tote bag con Max y, pa’ encontrarlo, sigue los recibos que había dentro. Cada episodio trae una sola marca metida en la historia, entre ellas Dove, Breyers, Olipop, Kize, Nehemiah, y Betty Crocker con Blue Buffalo de General Mills. El tráiler sale el 20 de noviembre y los episodios salen cada tres días hasta el 18 de diciembre en Instagram, YouTube y TikTok; dentro de la app, verlos da puntos canjeables por tarjetas de regalo. En sus primeras pruebas, el formato de video con recompensa de Fetch logró 96 % de visualización completa.",
      cifras: [
        { v: "96 %", t: "de visualización completa en las primeras pruebas del video con recompensa de Fetch" },
        { v: "6", t: "episodios, uno por marca" },
        { v: "18 dic", t: "último episodio; salen cada tres días" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "El microdrama de marca ya no es experimento: aquí cada marca es parte del guion y el público hasta cobra por mirar. Pa’ creatividad es la prueba de que una historia con capítulos retiene más que un spot suelto.",
      hacer: "Esta semana, esboza con un cliente de consumo masivo tres episodios cortos donde su producto mueva la historia, y llévalo como propuesta pa’ enero.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/fetch-trades-views-for-rewards-with-brand-backed-holiday-microseries/874424/" }]
    },
    {
      id: "disney", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Navidad", "Disney", "adam&eve\\TBWA"],
      titular: "Disney estrena su corto navideño, y la estrella es un caballo que nunca se ve",
      corto: "Disney estrena «The Invisible Horse»",
      cuerpo: "«The Invisible Horse» encabeza la campaña global «Make the Holidays Magic» de Disney. En tres minutos, un niño que cree que ya está grande pa’ la Navidad encuentra un caballo invisible: solo se ven las huellas en la nieve y las cosas que se mueven a su alrededor, con efectos físicos y sin animarlo nunca. Lo dirigió Dougal Wilson, el de «Monty the Penguin» de John Lewis, y es el tercer corto navideño seguido de Disney con adam&eve\\TBWA. Se estrenó el 9 de noviembre en Disney+ y en el canal de YouTube de Disney, con una versión nueva de «Oo-De-Lally», de «Robin Hood» (1973).",
      cifras: [
        { v: "3 min", t: "dura el corto" },
        { v: "3.º", t: "corto navideño seguido de Disney con adam&eve\\TBWA" }
      ],
      fuentes: [{ nombre: "Ads With Benefits", url: "https://adswithbenefits.in/disneys-invisible-horse-leaves-hoofprints-to-make-the-holidays-magic/" }]
    },

    {
      id: "gwi", dep: "planning", peso: "principal",
      etiquetas: ["IA", "Insights", "Audiencias"],
      titular: "GWI: casi todo el mundo usa IA pa’ sacar insights, pero muy pocos los verifican",
      corto: "Muchos usan IA pa’ insights; pocos verifican",
      cuerpo: "El estudio «Artificial Confidence: The AI Trust Gap», de GWI, encuestó a 1,883 profesionales sénior de insights, agencias y mercadeo en el Reino Unido, EE. UU. y Singapur. Casi el 90 % usa IA a diario y el 80 % dice que se topa con frecuencia con hallazgos errados o engañosos, pero solo el 36 % los verifica «la mayoría de las veces». El 63 % admite haber usado sin querer insights que luego resultaron desactualizados, y casi el 70 % ha visto a la IA fallar al describir a su público objetivo. Aun así, el 81 % se siente confiado usándola pa’ perfiles y segmentación, y el 71 % cree que la IA te dice el «qué», pero no el «porqué».",
      cifras: [
        { v: "80 %", t: "se topa con frecuencia con hallazgos de IA errados o engañosos" },
        { v: "36 %", t: "verifica los insights de IA la mayoría de las veces" },
        { v: "63 %", t: "usó sin querer insights que resultaron desactualizados" },
        { v: "71 %", t: "cree que la IA dice el qué, pero no el porqué" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Si el perfil de audiencia sale de una IA y nadie lo contrasta, el plan completo se monta sobre arena. El valor del planner está en confirmar el porqué con data propia o con gente real.",
      hacer: "Esta semana, toma el último perfil de audiencia hecho con IA y contrástalo con un dato propio del cliente o cinco conversaciones reales antes de presentarlo.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/ai-derived-audience-insights-hurt-results-what-the-numbers-say/874565/" }]
    },
    {
      id: "unilever", dep: "planning", peso: "secundaria",
      etiquetas: ["Unilever", "Creadores", "Social-first"],
      titular: "Unilever ya trabaja con 500,000 creadores y le da la cuenta de resultados a su jefe de mercadeo",
      corto: "Unilever llega a 500,000 creadores",
      cuerpo: "Unilever reportó que hoy trabaja con 500,000 creadores de contenido, frente a los 300,000 que había reportado antes y los 20,000 que tenía antes de que llegara su CEO Fernando Fernández, como parte de su plan de mover la mitad de su inversión digital a mercadeo social-first y con creadores. La empresa subió su pronóstico y espera al menos 3 % de crecimiento de volumen subyacente en 2026, y desde el 1 de enero Leandro Barreto pasa a ser chief growth and marketing officer. En 2027 arranca un modelo organizado en seis unidades globales, bajo el principio de «estrategia global, ejecución local».",
      cifras: [
        { v: "500,000", t: "creadores con los que trabaja Unilever" },
        { v: "50 %", t: "de la inversión digital que busca mover a social-first y creadores" },
        { v: "3 %+", t: "crecimiento de volumen subyacente esperado pa’ 2026" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Cuando un anunciante de ese tamaño pone la mitad del digital en creadores, el resto de la categoría lo va a seguir. Toca tener listo cómo planificar y medir creadores a escala, no de cinco en cinco.",
      fuentes: [{ nombre: "Marketing Dive", url: "https://www.marketingdive.com/news/how-unilevers-social-first-marketing-is-evolving-amid-reorganization/874457/" }]
    },

    {
      id: "comidaninos", dep: "data", peso: "principal",
      etiquetas: ["Menores", "Alimentos", "Regulación"],
      titular: "El 83 % de la publicidad de comida que ven los muchachos les llega por redes sociales",
      corto: "El 83 % del mercadeo de comida a menores va por redes",
      cuerpo: "Un estudio publicado en JAMA Pediatrics grabó la pantalla de más de 1,000 niños y adolescentes de 8 a 17 años mientras usaban sus dispositivos como siempre durante 30 minutos. Casi el 83 % del mercadeo de comida que vieron llegó por redes sociales, y TikTok y YouTube sumaron más de la mitad; los juegos aportaron el 14 % y la navegación web el 3.5 %. La comida rápida fue lo más visto (28.8 %), seguida de dulces (20.4 %) y bebidas (20.1 %), y cerca del 92 % de los alimentos no de restaurante promocionados se consideran poco saludables según el perfil de nutrientes de la Organización Panamericana de la Salud. La investigadora principal, Lisa Powell, advirtió que regular el mercadeo digital será más difícil que regular la TV.",
      cifras: [
        { v: "83 %", t: "del mercadeo de comida que vieron los menores llegó por redes sociales" },
        { v: "50 %+", t: "vino de TikTok y YouTube" },
        { v: "~92 %", t: "de los alimentos no de restaurante promocionados eran poco saludables según la OPS" },
        { v: "1,000+", t: "niños y adolescentes de 8 a 17 años en el estudio" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a data?",
      toca: "Las reglas de publicidad infantil se escribieron pensando en la TV, pero la exposición ya está en el feed. Si la regulación se mueve hacia digital, las marcas de alimentos van a necesitar demostrar a qué edades llega su pauta.",
      hacer: "Esta semana, saca de TikTok y YouTube Ads el desglose por edad de las campañas de clientes de comida y bebida, y documenta cómo se excluye a menores de 18.",
      fuentes: [{ nombre: "Food Dive", url: "https://www.fooddive.com/news/kids-junk-food-advertising-study-ultraprocessed-foods/874510/" }]
    },
    {
      id: "yahooilc", dep: "data", peso: "secundaria",
      etiquetas: ["IA", "Licencias", "Publishers"],
      titular: "Yahoo es el primero en pagar el colectivo que le cobra a la IA por usar contenido de los medios",
      corto: "Yahoo estrena el colectivo de licencias pa’ IA",
      cuerpo: "RSL, que ahora se llama The Internet Licensing Collective (ILC), firmó a Yahoo como su primer licenciatario: Yahoo paga una licencia general pa’ usar el contenido de los publishers del colectivo en Scout, su buscador con IA, y cada medio cobra según cómo se use su contenido. El modelo separa el dinero por empresa de IA, así que un medio solo cobra de los productos que de verdad usan lo suyo. Un informe de Mather Economics estima que las licencias colectivas podrían pagarle a los publishers entre 15 % y 35 % de los ingresos de las empresas de IA.",
      cifras: [
        { v: "15 %–35 %", t: "de los ingresos de las empresas de IA que podrían ir a los publishers, según Mather Economics" }
      ],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media/yahoo-becomes-first-licensee-of-spotify-like-collective-ai-content-licensing-model/" }]
    },

    {
      id: "gtayt", dep: "content", peso: "principal",
      etiquetas: ["YouTube", "Gaming", "Shorts"],
      titular: "YouTube monta un directo de 24 horas pa’l lanzamiento de GTA VI, con efecto de Shorts y regalos digitales",
      corto: "YouTube arma 24 horas en vivo pa’ GTA VI",
      cuerpo: "Pa’l día del lanzamiento de Grand Theft Auto VI, YouTube va a transmitir un directo global continuo de 24 horas con creadores de gaming, al que se entra tocando un logo de YouTube con tema de GTA VI en la portada. También lanza regalos digitales de edición limitada pa’ los directos, como las «Wanted Stars», y el efecto de Shorts «GTA: Visit Vice City», con el que los creadores se pueden poner dentro del mundo del juego. La banda sonora del juego estará en la portada de YouTube Music durante la semana del lanzamiento, y YouTube publicó un informe de Culture & Trends sobre el contenido de GTA. Según YouTube, los videos relacionados con la saga suman más de 900,000 millones de vistas.",
      cifras: [
        { v: "24 horas", t: "de directo global continuo el día del lanzamiento" },
        { v: "900,000 millones", t: "de vistas suman los videos de la saga GTA en YouTube" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Un lanzamiento así mueve conversación por días, y YouTube le está dando herramientas a cualquier creador pa’ montarse: efecto de Shorts, regalos y un directo que va a concentrar la atención.",
      hacer: "Esta semana, si tienes una marca que habla con gamers, prepara dos Shorts con el efecto «Visit Vice City» y deja listo el calendario de la semana del lanzamiento.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/youtube-announces-grand-theft-auto-vi-activations/874583/" }]
    },
    {
      id: "twitchclips", dep: "content", peso: "secundaria",
      etiquetas: ["Twitch", "Video corto", "Creadores"],
      titular: "Twitch dejará subir videos cortos hechos fuera de la plataforma",
      corto: "Twitch abre la puerta al video corto",
      cuerpo: "En el keynote de TwitchCon 2026, en San Diego, Twitch anunció que desde principios del año que viene los creadores podrán subir videos cortos hechos fuera de la plataforma. La idea, según sus ejecutivos, no es volverse otro TikTok, sino ayudar a que la gente descubra creadores y entre a sus directos, donde está el dinero, y de paso crear más inventario de anuncios. Su jefe de producto, Mike Minton, admitió que Twitch «perdió una oportunidad» con los clips, que hoy se hacen virales en TikTok, X, YouTube Shorts e Instagram.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media/were-not-trying-to-be-twitchtok-twitch-adds-new-short-form-video-feature/" }]
    },

    {
      id: "victorina", dep: "rd", peso: "principal", para: ["creatividad", "medios"],
      etiquetas: ["Promoción", "Alianza de marcas", "Experiencias"], fecha: "13 nov 2026",
      titular: "Pollos Victorina, Sprite y Bávaro Adventure Park se juntan: compras un combo y te vas pa’l cenote",
      corto: "Pollos Victorina, Sprite y Bávaro se juntan",
      cuerpo: "Pa’ celebrar su aniversario, Pollos Victorina armó con Bávaro Adventure Park y Sprite la promoción «Aniversario Pollos Victorina». Con el combo Adventure Sprite (Sándwich de Pechurinas Deluxe, papas, dos bollitos de yuca y Sprite de 21 onzas), los clientes participaban por cuatro premios repartidos entre Santo Domingo, Santiago y la Región Este, cada uno con una experiencia en el parque pa’ dos adultos y un niño. Además, cada combo traía un cupón 2x1 pa’ entrar a Bávaro Adventure Park: 300 cupones por tienda, válidos hasta el 31 de marzo de 2027. La campaña se movió en vallas, redes, medios digitales y radio.",
      cifras: [
        { v: "3 marcas", t: "comida, bebida y entretenimiento en una sola promoción" },
        { v: "300", t: "cupones 2x1 por tienda participante" },
        { v: "31 mar 2027", t: "vence el canje de los cupones" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Es una alianza donde cada marca pone lo suyo: Victorina el tráfico, Sprite la bebida y el parque la experiencia. Y el cupón con vencimiento en marzo estira la campaña meses después de que se apaga la pauta.",
      hacer: "Esta semana, busca pa’ un cliente de comida o retail un socio de experiencias con el que pueda armar un combo con cupón pa’ el primer trimestre de 2027.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/11/13/bavaro-adventure-park-pollos-victorina-y-sprite-unidos-en-celebracion/3720298" }]
    },
    {
      id: "combustibles", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Combustibles", "Precios", "Temporada"], fecha: "13 nov 2026",
      titular: "Los combustibles se quedan congelados hasta el 7 de enero",
      corto: "Combustibles congelados hasta el 7 de enero",
      cuerpo: "El Ministerio de Industria, Comercio y Mipymes informó que los precios de los combustibles principales no cambian en la semana del 14 al 20 de noviembre, como parte del congelamiento que el Gobierno mantendrá hasta el 7 de enero de 2027, siempre que el subsidio semanal no pase de RD$1,500 millones. Esta semana el subsidio fue de RD$796.4 millones y en el año ya supera los RD$45,253 millones. La gasolina premium se queda en RD$362.10 el galón, la regular en RD$317.50 y el gasoil regular en RD$270.80.",
      cifras: [
        { v: "7 ene 2027", t: "hasta cuando se mantiene el congelamiento" },
        { v: "RD$317.50", t: "el galón de gasolina regular" },
        { v: "RD$45,253M+", t: "en subsidio a combustibles en lo que va de año" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Precio fijo en la bomba durante toda la Navidad le da a Planning una variable menos: las promos de viaje por carretera y de delivery se pueden planificar sin miedo a un brinco a mitad de campaña.",
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/388466/gobierno-congela-precios-de-los-principales-combustibles/" }]
    },
    {
      id: "biometria", dep: "rd", peso: "secundaria", para: ["data"],
      etiquetas: ["Banca", "Biometría", "Fraude"], fecha: "12 nov 2026",
      titular: "La biometría manda en la banca dominicana: el 79 % de las apps personales ya la usa",
      corto: "El 79 % de las apps bancarias usa biometría",
      cuerpo: "Según el Ranking de Digitalización del Sector Bancario Dominicano 2026, de la Superintendencia de Bancos, cerca del 70 % de las entidades de intermediación financiera ya usa la biometría entre sus herramientas contra el fraude. El 79 % de las apps de banca personal y el 65 % de las de negocios la usan pa’ autenticar al usuario. Detrás vienen el reconocimiento visual, con cerca del 42 %, y la inteligencia artificial, con 30 %. La SB advierte que su efectividad depende de la calidad de los sistemas y de cómo se protejan los datos biométricos.",
      cifras: [
        { v: "79 %", t: "de las apps de banca personal usa biometría" },
        { v: "~70 %", t: "de las entidades financieras la usa contra el fraude" },
        { v: "30 %", t: "usa IA con fines de seguridad" }
      ],
      fuentes: [{ nombre: "elDinero", url: "https://eldinero.com.do/388356/biometria-lidera-herramientas-de-seguridad-y-prevencion-de-fraudes-en-sector-financiero-dominicano/" }]
    },
    {
      id: "vuelos", dep: "rd", peso: "secundaria", para: ["planning", "content"],
      etiquetas: ["Aviación", "Turismo", "Crisis"], fecha: "13 nov 2026",
      titular: "Las restricciones de la FAA dejan vuelos cancelados en Las Américas y Punta Cana",
      corto: "La FAA deja vuelos cancelados en RD",
      cuerpo: "La noche del viernes aumentaron las cancelaciones entre República Dominicana y Estados Unidos por las restricciones temporales que la FAA impuso a las operaciones aéreas. Según Aerodom, en el Aeropuerto Internacional de Las Américas se cancelaron siete vuelos, la mayoría de JetBlue, más uno de Delta, y en Punta Cana se cancelaron salidas y llegadas de Air Canada Rouge y de Arajet. En el Cibao no hubo cancelaciones, pero sí retrasos.",
      cifras: [
        { v: "10+", t: "vuelos cancelados en Santo Domingo y Punta Cana" },
        { v: "7", t: "cancelaciones en Las Américas" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pa’ las cuentas de aerolíneas, hoteles y turismo, es el momento de revisar la pauta y el tono: nadie quiere ver un anuncio de vacaciones mientras está varado en el aeropuerto.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/usa/actualidad/2026/11/13/aumentan-los-vuelos-cancelados-entre-rd-y-ee-uu/3720345" }]
    },
    {
      id: "cinerd", dep: "rd", peso: "secundaria", para: ["creatividad", "medios"],
      etiquetas: ["Cine", "Coproducción", "España"], fecha: "13 nov 2026",
      titular: "El cine dominicano se sienta a hablar de inversión en Madrid",
      cuerpo: "Durante la Semana Dominicana en España 2026, el foro «¿Cómo invertir en la República Dominicana?», en el Ilustre Colegio de la Abogacía de Madrid, tuvo un panel dedicado al cine. Lo moderó la cineasta y abogada Angélica Noboa, con Desiree Reyes Peña, de Ebribari Audiovisual y Adocine, e Igor Ibeas, de AF Films España. El eje fue el convenio de coproducción cinematográfica entre los dos países, vigente desde el 29 de septiembre de 2021, junto con la ley dominicana de fomento al cine.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cine/2026/11/13/el-cine-dominicano-conquista-espacios-de-inversion-en-espana/3719909" }]
    },
    {
      id: "tivigunz", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Música urbana", "Talento"], fecha: "13 nov 2026",
      titular: "Un freestyler dominicano firma como compositor de «Cosita», de Cardi B y Daddy Yankee",
      cuerpo: "El dominicano Stivi Randy Álvarez, conocido como Tivi Gunz, figura entre los compositores de «Cosita», la colaboración de Cardi B y Daddy Yankee incluida en «La Postal», el álbum del exponente puertorriqueño. Es otro crédito internacional pa’ un artista que trabaja tanto de intérprete como escribiendo pa’ otros.",
      tocaTitulo: "¿Y eso qué?",
      toca: "El talento detrás de los éxitos también es un activo pa’ las marcas: un compositor del patio con créditos afuera puede ser una voz pa’ contenido o un jingle con sabor local.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/musica/2026/11/13/el-freestyler-dominicano-que-ayudo-a-componer-tema-de-cardi-b-y-dy/3720019" }]
    },
    {
      id: "asodircom", dep: "rd", peso: "secundaria", para: ["planning", "content"],
      etiquetas: ["Gremios", "Comunicación", "Formación"], fecha: "13 nov 2026",
      titular: "Asodircom y Barna Management School firman alianza pa’ formar a los directores de comunicación",
      cuerpo: "La Asociación de Directores de Comunicación de la República Dominicana (Asodircom), presidida por Gloria Zacarías, y Barna Management School, con su rector Paulo Alves, firmaron un acuerdo pa’ conectar la academia con la comunicación estratégica. Los miembros de Asodircom tendrán acceso a sesiones anuales de cortesía con el método del caso y participarán en paneles académicos. Tras la firma, hubo una sesión sobre toma de decisiones en escenarios de incertidumbre.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/sociales/2026/11/13/barna-management-school-y-asodircom-firman-acuerdo/3720281" }]
    }
  ],

  pizarra: ["twitch", "fetch", "gwi", "comidaninos", "gtayt", "victorina"],

  frases: [
    { dep: "planning", texto: "El 80 % se topa con hallazgos de IA errados, pero solo el 36 % los verifica casi siempre: el insight rápido no es el insight correcto.", uso: "para conversaciones de IA e investigación de audiencias" },
    { dep: "medios", texto: "En Twitch, Razer sacó 2.44 veces más retorno con anuncios que solo se pagan si la gente se queda viendo.", uso: "para conversaciones de video y performance" },
    { dep: "data", texto: "El 83 % de la publicidad de comida que ven los menores ya no llega por la TV, llega por las redes.", uso: "para conversaciones de regulación y marcas de alimentos" },
    { dep: "creatividad", texto: "Fetch le paga a la gente por ver su comedia romántica de marcas: cuando el contenido entretiene, la marca se gana el tiempo del público.", uso: "para conversaciones de entretenimiento de marca" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Anuncios comprables en Twitch" },
      { id: "creatividad", texto: "La comedia romántica de Fetch" },
      { id: "planning", texto: "La brecha de confianza en la IA" },
      { id: "data", texto: "Publicidad de comida a menores" },
      { id: "content", texto: "YouTube y el lanzamiento de GTA VI" },
      { id: "rd", texto: "Zoom a RD: la promo de Pollos Victorina" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "twitch", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "combustibles", titulo: "Arranca la hoja", mes: "Diciembre",
      revela: "Los combustibles se quedan congelados hasta el 7 de enero de 2027: la promo navideña de viajes y delivery se puede planificar sin miedo a un cambio de precio a mitad de campaña."
    },
    data: {
      tipo: "secreto", nota: "comidaninos", titulo: "Destapa el expediente",
      texto: "Casi el [[83 %]] del mercadeo de comida que vieron los menores del estudio llegó por redes sociales, y [[TikTok y YouTube]] sumaron más de la mitad."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "victorina", titulo: "La pregunta del patio",
      p: "¿Qué recibían los clientes con cada combo Adventure Sprite de Pollos Victorina?",
      opciones: ["Un cupón 2x1 pa’ Bávaro Adventure Park", "Una entrada gratis sin comprar otra", "Un año de Sprite gratis"], correcta: 0,
      explicacion: "Cada combo traía un cupón 2x1 pa’ Bávaro Adventure Park: 300 por tienda participante, válidos hasta el 31 de marzo de 2027."
    }
  }
};
