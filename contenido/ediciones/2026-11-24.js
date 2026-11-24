/*
  El Pulso Publicitario · edición N.º 328 · 24 de noviembre de 2026
  ------------------------------------------------
  Estructura según la plantilla del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 328,
  fechaISO: "2026-11-24",
  fecha: "Martes 24 de noviembre 2026",
  fechaCorta: "24 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "En el Black Friday el cliente prueba tiendas nuevas y llega por caminos nuevos: asegúrate de saber por dónde entró antes de pagar por él.",
    largo: "Las noticias de hoy dicen lo mismo de varias formas: Amazon compra anuncios en ChatGPT pa’ llevar gente a sus resultados de búsqueda, donde la marca puede terminar pagando otra vez; Criteo encontró que el 75 % de los compradores del Black Friday le compra a tiendas que normalmente no usa; y Semrush ya le pone número a las visitas que empiezan en una respuesta de IA, aunque sea un estimado. El comprador está más suelto que nunca y la ruta es más larga. El consejo: esta semana, antes de subir presupuesto, separa por dónde está llegando la gente y qué parte de ese camino ya pagaste.",
    corto: "Antes de subir presupuesto, separa por dónde llega la gente y qué parte de ese camino ya pagaste.",
    porDep: {
      medios: "Si el cliente vende en un marketplace, cuida no pagar dos veces por el mismo comprador: uno en el chatbot y otro en el anuncio del marketplace.",
      creatividad: "Geico juntó a sus personajes de siempre en una película navideña: antes de inventar algo nuevo, mira qué activos ya tiene tu cliente.",
      planning: "El 75 % prueba tiendas nuevas en Black Friday: la oferta tiene que decir el descuento y el envío en la primera línea.",
      data: "Toda métrica de tráfico influido por IA es un estimado de modelo: dilo en el reporte y compárala con lo que ves en tu analítica.",
      content: "La Navidad de TikTok viene hecha a mano, acogedora y rosada: escoge una de esas tres y monta una serie corta esta semana.",
      rd: "El bono navideño mete RD$1,500 a 2.75 millones de personas desde el 29 de noviembre, y entre 65 % y 70 % se gasta en colmados."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Amazon compra anuncios de Black Friday en ChatGPT y bloquea sus rastreadores · Pinterest entra a la red de Microsoft Advertising" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Geico estrena su primera película navideña, hecha a mano, en el desfile de Macy’s · Google Pixel receta menos pantalla con «Phonehead Therapy»" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "El 75 % le compra a tiendas que no usa en Black Friday (Criteo) · CTV y TV suben en los planes navideños de las marcas" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Semrush le pone número a las visitas que empiezan en una respuesta de IA · El consentimiento de cookies en la UE baja a 65.2 %" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "TikTok destapa las tendencias navideñas: hecha a mano, acogedora y rosada · Las marcas piden «cero IA» en los contratos con creadores" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Bono navideño pa’ 2.75 millones desde el 29 · RD pasa los 10 millones de visitantes · Villa Navidad abre el jueves · Kola Real · Flete refrigerado +33 % · Qik cumple cuatro años" }
  },

  notas: [
    {
      id: "amazonchatgpt", dep: "medios", peso: "principal",
      etiquetas: ["IA", "ChatGPT Ads", "Retail media"],
      titular: "Amazon le compra anuncios a ChatGPT pa’l Black Friday mientras le cierra la puerta a sus rastreadores",
      corto: "Amazon se anuncia en ChatGPT pa’l Black Friday",
      cuerpo: "Digiday vio que Amazon volvió a anunciarse en ChatGPT en Estados Unidos con una tanda de anuncios del Black Friday, en el formato normal: separados de la conversación, con ícono, titular, descripción y botón «Learn more». Lo curioso es que Amazon bloquea los rastreadores de OpenAI, así que el ChatGPT de compras arma las ofertas con sitios de terceros que siguen precios, y en vez de mandar a la ficha del producto manda a los resultados de búsqueda de Amazon. Ahí entra el anuncio pagado: según Arielle Feger, de eMarketer, la marca corre el riesgo de pagar dos veces por el mismo cliente. No está claro si Amazon compró directo a OpenAI o por su propio DSP, que desde septiembre vende inventario de ChatGPT. Ni Amazon ni OpenAI quisieron comentar.",
      cifras: [
        { v: "US$40,570M", t: "facturaría Amazon en anuncios de búsqueda en EE. UU. este año (eMarketer)" },
        { v: "~1/4", t: "de toda la inversión en search de EE. UU. se la lleva Amazon" },
        { v: "Septiembre", t: "mes en que Amazon DSP empezó a vender inventario de ChatGPT" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "El chatbot recomienda, pero manda a una página llena de anuncios pagados. Si tu cliente vende en un marketplace, puede ganar la recomendación gratis y después tener que pujar otra vez pa’ que lo vean.",
      hacer: "Esta semana, separa en la analítica de cada cliente de e-commerce el tráfico que llega de chatgpt.com y revisa si después pasa por anuncios pagados del marketplace antes de comprar.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/amazon-is-buying-chatgpt-ads-while-blocking-openai-crawlers/" }]
    },
    {
      id: "pinterestmicrosoft", dep: "medios", peso: "secundaria",
      etiquetas: ["Pinterest", "Microsoft Advertising", "Inventario"],
      titular: "Pinterest se mete en la red de Microsoft Advertising con una puja contextual hecha a la medida",
      corto: "Pinterest entra a Microsoft Ads",
      cuerpo: "Pinterest anunció una integración con Microsoft Advertising: las campañas elegibles de Microsoft van a poder entrar a la subasta abierta de Pinterest en el feed de inicio, la búsqueda y los Pins relacionados, con un modelo de puja contextual que usa las búsquedas, las señales de contexto y los datos de intención propios de Pinterest. De arranque solo funciona en Norteamérica, Australia y Nueva Zelanda. El mes pasado Pinterest ya había abierto su inventario a Yahoo DSP, Amazon DVA+ y Google DV360 con Magnite.",
      cifras: [
        { v: "3", t: "espacios: feed de inicio, búsqueda y Pins relacionados" },
        { v: "3", t: "mercados de arranque: Norteamérica, Australia y Nueva Zelanda" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Pinterest está saliendo a buscar compradores en las plataformas de otros. Su inventario se va a poder comprar desde más lados, y conviene saber desde cuál te sale más barato.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/pinterest-announces-partnership-with-microsoft-ads/875553/" }]
    },

    {
      id: "geico", dep: "creatividad", peso: "principal",
      etiquetas: ["Navidad", "Geico", "Animación"],
      titular: "Geico estrena su primera película navideña, hecha a mano, y la pone en el desfile de Macy’s",
      corto: "Geico estrena su primera película navideña",
      cuerpo: "Geico hizo su primera película de Navidad, «Holiday Savings Special», con The Martin Agency, Passion Pictures Animation y Screen Novelties. En la historia, el Gecko ve que el espíritu navideño se está apagando en el pueblo y, junto a otros personajes de siempre de la marca (el camello Caleb, el cerdo Maxwell y el Cavernícola), sale a salvar la Navidad después de un mensaje confuso de Santa que llega por radioaficionado. Es un especial artesanal que va a salir durante el desfile de Acción de Gracias de Macy’s, donde Geico también estrena su primera carroza. Adweek lo lee como una señal de las ganas de la marca de hacer entretenimiento.",
      cifras: [
        { v: "1.ª", t: "película navideña de Geico" },
        { v: "1.ª", t: "carroza de la marca en el desfile de Macy’s" },
        { v: "3", t: "socios creativos: The Martin Agency, Passion Pictures Animation y Screen Novelties" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "Geico no inventó un personaje nuevo pa’ Navidad: juntó a los que la gente ya conoce y les dio una historia. Los activos de marca que llevan años en el aire valen más cuando se encuentran en una pieza larga.",
      hacer: "Esta semana, haz con tu equipo una lista de los personajes, jingles o frases que ya tiene cada cliente y esboza una pieza navideña donde salgan juntos.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/geicos-first-holiday-film-reveals-its-entertainment-ambitions/" }]
    },
    {
      id: "pixel", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Navidad", "Google Pixel", "Talento"],
      titular: "Google Pixel pone a Alex Cooper de terapeuta pa’ recetar menos pantalla en Navidad",
      corto: "Pixel receta menos pantalla",
      cuerpo: "La campaña navideña de Google Pixel, «Phonehead Therapy», pone a la presentadora de podcast Alex Cooper, fundadora de la marca de medios Unwell, a hacer de «Dra. Cooper», imitando a su mamá, Laurie Cooper, que sí es terapeuta. En la pieza principal, los actores Sam Lerner y Victoria Justice son una pareja que busca ayuda porque él no suelta el teléfono, y la doctora le receta el Pixel 11 Pro como remedio pa’l «Phonehead Syndrome». La gracia: un teléfono que se vende como la cura pa’ pasar menos tiempo pegado al teléfono.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/brand-marketing/dr-alex-cooper-prescribes-less-screen-time-in-google-pixels-holiday-ad/" }]
    },

    {
      id: "criteo", dep: "planning", peso: "principal",
      etiquetas: ["Black Friday", "Consumidor", "Encuesta"],
      titular: "Tres de cada cuatro compradores del Black Friday le compran a tiendas que normalmente no usan",
      corto: "Black Friday: el 75 % prueba tiendas nuevas",
      cuerpo: "La encuesta de compradores de Criteo, hecha en septiembre a 10,500 consumidores de diez países (entre ellos EE. UU., Brasil, Canadá y Reino Unido), encontró que el 75 % de los que compran en Black Friday le compra, por lo menos a veces, a tiendas en línea que normalmente no usa; en Reino Unido llega a 80 %. Las razones pa’ probar una tienda nueva son las buenas ofertas (52 %) y el envío gratis (41 %). Además, el 42 % usaría un asistente de IA pa’ escoger un regalo y el 76 % de los que compran regalos va a buscar descuentos. Ojo: lo de la IA mide intención, no lo que la gente ya hizo, y Criteo no publicó margen de error.",
      cifras: [
        { v: "75 %", t: "de los compradores del Black Friday le compra a tiendas que no suele usar" },
        { v: "52 %", t: "prueba una tienda nueva por una buena oferta" },
        { v: "41 %", t: "la prueba por el envío gratis" },
        { v: "42 %", t: "usaría un asistente de IA pa’ escoger un regalo" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "En esta semana la lealtad se afloja: el cliente que no es líder tiene su mejor chance de robar compradores, y el líder tiene que cuidar a los suyos. La oferta y el envío deciden más que la marca.",
      hacer: "Esta semana, revisa que cada anuncio de Black Friday de tus clientes diga en la primera línea el descuento y si el envío es gratis; si falta uno de los dos, pídelo de una vez.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/80-of-uk-black-friday-shoppers-buy-from-unfamiliar-stores-criteo-finds/" }]
    },
    {
      id: "dplusnavidad", dep: "planning", peso: "secundaria",
      etiquetas: ["Navidad", "CTV", "Tácticas"],
      titular: "La CTV y la TV dan un brinco en los planes navideños de las marcas; las guías de regalos se caen",
      corto: "CTV y TV suben en la Navidad",
      cuerpo: "Una encuesta de Digiday+ Research a 90 profesionales de marcas y retailers encontró que el 45 % va a usar anuncios en CTV o streaming esta Navidad, frente al 23 % de 2025, y el 33 % va a usar TV, frente al 13 %. Las experiencias de marca, que eran la táctica más usada el año pasado, bajan del 50 % al 41 %. Las guías de regalos caen 19 puntos y los videos de influencers abriendo productos, 14. Laura Brodie, de Ritual, advierte que meterse en streaming solo pa’ la temporada es arriesgado pa’ una marca pequeña.",
      cifras: [
        { v: "45 %", t: "usará CTV o streaming esta Navidad (23 % en 2025)" },
        { v: "33 %", t: "usará TV (13 % en 2025)" },
        { v: "–19 pts", t: "caída en el uso de guías de regalos" }
      ],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/marketing/d-research-brands-holiday-marketing-tactics-shift-in-2026/" }]
    },

    {
      id: "semrushia", dep: "data", peso: "principal",
      etiquetas: ["Medición", "IA", "Search"],
      titular: "Semrush le pone número a las visitas que empiezan en una respuesta de IA, pero es un estimado",
      corto: "Semrush mide el tráfico que empieza en la IA",
      cuerpo: "Semrush, que ahora es de Adobe, lanzó una capa de «Topics» que junta datos de palabras clave de Google con datos de prompts de IA, y una métrica de «tráfico influido por IA»: un estimado de las visitas que gana una marca después de que la mencionan en una respuesta de ChatGPT, Gemini, AI Mode o AI Overviews, contando visitas directas, búsquedas de marca y clics desde la IA. Sale de un modelo que relaciona menciones con visitas en las 24 horas siguientes. La misma Semrush dice que es una señal de dirección, no prueba de que la IA causó la visita, y no ha publicado datos de precisión. En su panel de 400 palabras clave comerciales, AI Overviews ya sale en el 88 %.",
      cifras: [
        { v: "88 %", t: "de las 400 palabras clave comerciales del panel de Semrush ya muestran AI Overviews (45.75 % en septiembre de 2025)" },
        { v: "29,000M+", t: "palabras clave en la base de Semrush" },
        { v: "317M+", t: "prompts de IA en la base" },
        { v: "24 horas", t: "ventana entre la mención en la IA y la visita" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a Data?",
      toca: "El cliente va a preguntar cuánto le trae la IA, y ya hay herramientas que dan un número. Pero si lo pones en un reporte sin aclarar que sale de un modelo, te lo van a cobrar como si fuera un conteo.",
      hacer: "Esta semana, si usas una métrica de tráfico influido por IA, ponle al lado en el reporte la nota de que es un estimado y compárala con los referidos de chatgpt.com y gemini.google.com en tu analítica.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/semrush-puts-a-number-on-the-visits-that-begin-with-an-ai-answer/" }]
    },
    {
      id: "consentimiento", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Cookies", "Europa"],
      titular: "En Europa, cada vez menos gente dice que sí a las cookies, aunque tampoco dice más que no",
      corto: "Consentimiento en la UE baja a 65.2 %",
      cuerpo: "Un estudio de TAGGRS, que vende alojamiento pa’ Google Tag Manager del lado del servidor, analizó 17,400 millones de eventos de GA4 de visitantes de los 27 países de la Unión Europea entre enero y septiembre. El consentimiento completo bajó de 71.3 % en enero a 65.2 % en septiembre, pero los rechazos activos también bajaron, de 13.9 % a 12.6 %. Lo que creció fueron los estados a medias o sin registrar: el «denegado por defecto» pasó de 6.9 % a 9.7 %. Por país, va de 50.7 % en Rumanía a 96.3 % en Lituania. Son datos de clientes de un proveedor, pesados por tráfico.",
      cifras: [
        { v: "65.2 %", t: "consentimiento completo en septiembre (71.3 % en enero)" },
        { v: "9.7 %", t: "eventos «denegados por defecto» en septiembre (6.9 % en enero)" },
        { v: "17,400M", t: "eventos de GA4 analizados" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/fewer-yeses-no-more-noes-eu-cookie-consent-falls-to-65-2/" }]
    },

    {
      id: "tiktoknavidad", dep: "content", peso: "principal",
      etiquetas: ["TikTok", "Tendencias", "Navidad"],
      titular: "TikTok destapa la Navidad de 2026: hecha a mano, acogedora y rosada",
      corto: "TikTok: Navidad hecha a mano, cozy y rosada",
      cuerpo: "TikTok publicó las tendencias navideñas que ve en la app. La «Whimsy Christmas» va de decoración colorida hecha en casa: los posts con #diychristmas suben más de 80 %. La «Cozy Christmas», de noches de película y mantas, sube más de 170 % con #cozychristmas, y la «Pinksmas» o Navidad rosada sube más de 210 % con #pinkchristmas. Entre octubre y noviembre, #christmasnails creció más de 350 % y #christmassweater más de 230 %, y las búsquedas de «matching pajamas» subieron más de 150 %. También van pa’ arriba #christmasmovies, #nobakedessert y los hashtags de ideas pa’ regalos pequeños y calendarios de adviento de belleza.",
      cifras: [
        { v: "+350 %", t: "posts con #christmasnails entre octubre y noviembre" },
        { v: "+210 %", t: "posts con #pinkchristmas" },
        { v: "+170 %", t: "posts con #cozychristmas" },
        { v: "+150 %", t: "búsquedas de «matching pajamas»" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Ya no es la Navidad elegante y perfecta: la gente quiere color, manualidad y comodidad. Una marca que enseña a hacer algo en casa con su producto entra a la conversación sin pagar.",
      hacer: "Esta semana, escoge una de las tres tendencias (hecha a mano, acogedora o rosada) pa’ cada cliente y monta una serie de tres videos cortos que salgan antes del 1 de diciembre.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/tiktok-highlights-2026-holiday-trends/875560/" }]
    },
    {
      id: "noiacreadores", dep: "content", peso: "secundaria",
      etiquetas: ["Creadores", "Contratos", "IA"],
      titular: "Las marcas empiezan a pedir «cero IA» en los contratos con creadores, y a los creadores les gusta",
      corto: "Contratos con creadores: cláusula de no IA",
      cuerpo: "Kurt Stadelman, vicepresidente de talento de la firma de creadores Pearpop, le contó a Digiday que cada vez más contratos prohíben que el creador use IA en el contenido de la campaña, y que los creadores lo reciben bien porque ven a la IA generativa como competencia en el feed. Eso sí, han tenido que aclarar que se puede usar IA detrás de cámara, pa’ el guion o pa’ analizar resultados. Sobre derechos de uso pagado, recomienda empezar en tres meses, no pasar de seis en el contrato inicial y nunca aceptar uso a perpetuidad.",
      cifras: [
        { v: "3–6 meses", t: "de uso pagado recomendados en el contrato inicial" }
      ],
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/future-of-tv/why-brands-are-writing-no-ai-clauses-into-creator-deals/" }]
    },

    {
      id: "bononavideno", dep: "rd", peso: "principal", para: ["planning", "medios"],
      etiquetas: ["Navidad", "Consumo", "Colmados"], fecha: "23 nov 2026",
      titular: "El bono navideño le pone RD$1,500 en la mano a 2.75 millones de personas desde el 29, y la mayoría se gasta en el colmado",
      corto: "Bono navideño: 2.75 millones desde el 29",
      cuerpo: "Desde el domingo 29 de noviembre, el bono navideño de RD$1,500 llega a 2,753,781 personas: 1,433,781 familias de Supérate lo reciben por transferencia y el Gabinete de Política Social reparte 1,320,000 tarjetas respaldadas por Banreservas, pa’ hogares con ingresos de menos de RD$38,156 al mes. Las tarjetas se reparten según la población de cada municipio. Según el presidente Abinader, entre el 65 % y el 70 % de ese dinero se gasta en los colmados afiliados a la red de abastecimiento social, aunque también se puede usar en supermercados. Además, los dominicanos en el exterior vuelven a poder traer regalos y artículos personales por hasta US$5,500.",
      cifras: [
        { v: "2,753,781", t: "personas recibirán el bono" },
        { v: "RD$1,500", t: "por transferencia o tarjeta" },
        { v: "65–70 %", t: "del dinero de las tarjetas se gasta en colmados afiliados" },
        { v: "US$5,500", t: "en regalos pueden traer los dominicanos del exterior" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Son más de RD$4,000 millones que entran al consumo de barrio en una semana, y la mayor parte pasa por el mostrador del colmado. Pa’ las marcas de consumo masivo, ese es el punto de venta que hay que ganar.",
      hacer: "Esta semana, si tienes cliente de consumo masivo, asegura su presencia en colmados pa’l 29 de noviembre: material en el punto de venta, radio local y una oferta que quepa en RD$1,500.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/389653/el-bono-navideno-2026-impactara-a-mas-de-2-7-millones-de-personas-con-bono-de-rd1500/" }]
    },
    {
      id: "turismo10m", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Mitur", "Récord"], fecha: "23 nov 2026",
      titular: "¡Wepa! RD pasa los 10 millones de visitantes en octubre, antes que nunca",
      corto: "RD pasa los 10 millones de visitantes",
      cuerpo: "Entre enero y octubre llegaron 10,043,476 visitantes, 8.2 % más que en 2025: 7,760,625 por avión y 2,282,851 en crucero, según el ministro de Turismo, David Collado. Es la primera vez que el país llega a esa cifra en octubre; en 2023 y 2024 se alcanzó en diciembre y en 2025 en noviembre. Solo en octubre llegaron 812,640 visitantes, 17.6 % más, con los cruceristas subiendo 89.3 %. Estados Unidos aportó el 35 % de los turistas de octubre, y Canadá y Colombia el 11 % cada uno. Collado proyecta 12.5 millones al cierre del año.",
      cifras: [
        { v: "10,043,476", t: "visitantes de enero a octubre (+8.2 %)" },
        { v: "+89.3 %", t: "cruceristas en octubre frente a 2025" },
        { v: "12.5M", t: "visitantes proyectados pa’l cierre de 2026" }
      ],
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/389627/republica-dominicana-supera-los-10-millones-de-visitantes-en-un-nuevo-record-turistico/" }]
    },
    {
      id: "villanavidad", dep: "rd", peso: "secundaria", para: ["medios", "creatividad", "content"],
      etiquetas: ["Navidad", "Cultura", "Eventos"], fecha: "23 nov 2026",
      titular: "Villa Navidad abre el jueves en el Centro Olímpico y la Navidad sale en carrozas pa’ los barrios",
      corto: "Villa Navidad abre el jueves",
      cuerpo: "Villa Navidad arranca este jueves en el Centro Olímpico Juan Pablo Duarte, en Santo Domingo, y en el Monumento a los Héroes de la Restauración, en Santiago, con conciertos gratuitos, ferias artesanales, caravanas musicales y fiestas populares. La feria artesanal reúne a más de 80 artesanos de distintas provincias y cuatro carrozas van a recorrer sectores con presentaciones artísticas. El Ministerio de Cultura también anunció una nueva Noche Larga de Museos pa’l primer fin de semana de diciembre, con más de 35 museos con entrada gratis.",
      cifras: [
        { v: "80+", t: "artesanos en la feria" },
        { v: "4", t: "carrozas que recorrerán los barrios" },
        { v: "35+", t: "museos en la Noche Larga de Museos" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Son los puntos donde se va a juntar la gente en diciembre, en la capital y en Santiago. Pa’ activaciones y contenido en vivo, es calendario que hay que tener a mano.",
      fuentes: [{ nombre: "N Digital", url: "https://n.com.do/2026/11/23/villa-navidad-abrira-este-jueves-en-el-centro-olimpico-juan-pablo-duarte/" }]
    },
    {
      id: "kolareal", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Bebidas", "Industria", "Competencia"], fecha: "23 nov 2026",
      titular: "Los de Kola Real dicen que tienen más del 45 % del mercado de refrescos del país",
      corto: "Kola Real: US$450 millones invertidos en RD",
      cuerpo: "Industrias San Miguel, la empresa peruana que fabrica Kola Real, Frutop y Cool Heaven, dijo en un encuentro con la prensa que lleva más de US$450 millones invertidos en RD en 21 años y que tiene más del 45 % del mercado de bebidas sin alcohol. Tiene su planta en Santiago Rodríguez y 13 centros de distribución en el país, y entre 3,400 y 3,700 empleos directos, según la crónica. Revista Mercado aclara que todas las cifras salen de la propia empresa.",
      cifras: [
        { v: "45 %+", t: "del mercado de bebidas sin alcohol, según la empresa" },
        { v: "US$450M+", t: "invertidos en 21 años" },
        { v: "13", t: "centros de distribución" }
      ],
      fuentes: [{ nombre: "Revista Mercado", url: "https://revistamercado.do/empresas/industrias-san-miguel-kola-real-inversion-450-millones-rd/" }]
    },
    {
      id: "fleterefrigerado", dep: "rd", peso: "secundaria", para: ["planning"],
      etiquetas: ["Precios", "Importación", "Navidad"], fecha: "23 nov 2026",
      titular: "Traer un contenedor refrigerado cuesta 33 % más que en agosto, justo antes de la cena de Navidad",
      corto: "Flete refrigerado sube 33 %",
      cuerpo: "Según Iván García, presidente de la Federación Dominicana de Comerciantes, el flete de un contenedor refrigerado de 40 pies, el que se usa pa’ traer alimentos perecederos, subió de US$6,000 en agosto a US$8,000 ahora, un alza de 33.3 %. El presidente de la AIRD, Julio Virgilio Brache, también advirtió que los fletes y los retrasos de contenedores siguen subiendo los costos de las fábricas. Todavía no se sabe cuánto de eso llegará al precio de la cena navideña.",
      cifras: [
        { v: "US$8,000", t: "flete actual de un contenedor refrigerado de 40 pies" },
        { v: "+33.3 %", t: "frente a los US$6,000 de agosto" }
      ],
      fuentes: [{ nombre: "Revista Mercado", url: "https://revistamercado.do/market-brief/finanzas/contenedor-refrigerado-flete-sube-33-navidad-precios-rd/" }]
    },
    {
      id: "qik", dep: "rd", peso: "secundaria", para: ["planning", "creatividad"],
      etiquetas: ["Banca digital", "Lealtad", "Qik"], fecha: "23 nov 2026",
      titular: "Qik cumple cuatro años con más de un millón de registrados y estrena programa de lealtad",
      corto: "Qik cumple cuatro años",
      cuerpo: "Qik, el neobanco de Grupo Popular, llegó a su cuarto aniversario con más de un millón de dominicanos registrados y presentó tres novedades: certificados compartidos pa’ que dos personas ahorren juntas, una tarjeta de crédito renovada con tres planes de beneficios (Tech, Go y Doer) con cashback de hasta 5 % en algunas categorías, y Qik Up, un programa de lealtad que da puntos y niveles por cobrar la nómina, pagar servicios, ahorrar y usar las tarjetas.",
      cifras: [
        { v: "1M+", t: "dominicanos registrados en Qik" },
        { v: "Hasta 5 %", t: "de cashback según el plan de la tarjeta" },
        { v: "3", t: "planes: Tech, Go y Doer" }
      ],
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/389583/qik-celebra-cuatro-anos-y-amplia-su-propuesta-para-sus-clientes/" }]
    }
  ],

  pizarra: ["amazonchatgpt", "geico", "criteo", "semrushia", "tiktoknavidad", "bononavideno"],

  frases: [
    { dep: "medios", texto: "Ganar la recomendación en ChatGPT no te salva: si te manda a los resultados de Amazon, te toca pujar otra vez.", uso: "para conversaciones de IA y retail media" },
    { dep: "planning", texto: "En Black Friday el 75 % le compra a tiendas que no usa: la oferta y el envío pesan más que la costumbre.", uso: "para conversaciones de temporada y oferta" },
    { dep: "data", texto: "El tráfico influido por IA es un estimado de modelo, no un conteo: dilo antes de que lo pongan en una meta.", uso: "para conversaciones de medición y reportes" },
    { dep: "content", texto: "La Navidad de TikTok viene hecha a mano: #diychristmas sube más de 80 % y #pinkchristmas más de 210 %.", uso: "para conversaciones de tendencias y calendario" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Amazon anunciándose en ChatGPT" },
      { id: "creatividad", texto: "La película navideña de Geico" },
      { id: "planning", texto: "El 75 % que prueba tiendas nuevas" },
      { id: "data", texto: "El tráfico influido por IA de Semrush" },
      { id: "content", texto: "La Navidad rosada y hecha a mano de TikTok" },
      { id: "rd", texto: "Zoom a RD: el bono navideño en el colmado" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "amazonchatgpt", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "criteo", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Black Friday es el viernes 27: el 75 % de los compradores prueba tiendas que no usa. Pon el descuento y el envío gratis en la primera línea, que son las razones que más pesan (52 % y 41 %)."
    },
    data: {
      tipo: "secreto", nota: "semrushia", titulo: "Destapa el expediente",
      texto: "En el panel de 400 palabras clave comerciales de Semrush, AI Overviews ya aparece en el [[88 %]], frente al [[45.75 %]] de septiembre de 2025."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    rd: {
      tipo: "pregunta", nota: "bononavideno", titulo: "La pregunta del patio",
      p: "¿Qué parte del dinero de las tarjetas del bono navideño se gasta en los colmados afiliados, según el Gobierno?",
      opciones: ["Entre 25 % y 30 %", "Entre 45 % y 50 %", "Entre 65 % y 70 %"], correcta: 2,
      explicacion: "Entre el 65 % y el 70 % se consume directo en los colmados de la red de abastecimiento social, aunque las tarjetas también sirven en supermercados."
    }
  }
};
