/*
  El Pulso Publicitario · edición N.º 323 · 19 de noviembre de 2026
  ------------------------------------------------
  Estructura igual a la plantilla del 11 de septiembre (ediciones/2026-09-11.js).
*/
window.EDICION = {
  numero: 323,
  fechaISO: "2026-11-19",
  fecha: "Jueves 19 de noviembre 2026",
  fechaCorta: "19 nov 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "La máquina puja, mide y hasta crea Lenses, pero solo rinde si le das buenos datos y la cuentas con reglas claras.",
    largo: "Microsoft rehízo su modelo de pujas y pide que la medición de conversiones esté al día, SparkToro dice que solo el 6.9 % de los chats de ChatGPT tiene intención de compra y un tribunal de Colombia le confirmó a Google que las cookies puestas en celulares colombianos cuentan como recolección de datos en Colombia. La lección es la misma: la automatización y la IA ayudan, pero el que pone los datos, el permiso y el criterio sigue siendo uno. Y en el patio, los negocios por fin tienen tarifa clara pa’ poner música, después de 13 años de conversaciones. Escoge una de estas y ponle dueño antes del viernes.",
    corto: "Datos limpios, permisos claros y criterio propio antes de soltarle el timón a la máquina. Una tarea con dueño antes del viernes.",
    porDep: {
      medios: "Antes de pasar campañas a pujas automáticas en Microsoft, confirma que cada cuenta tenga la etiqueta UET y por lo menos cinco conversiones.",
      creatividad: "Busca el «Kevin McCallister» de tu cliente: un personaje o recuerdo que la gente ya quiere y que se puede volver producto.",
      planning: "No le vendas al cliente ChatGPT como si fuera Google: los números de intención de compra todavía son otros.",
      data: "Revisa si alguna campaña con datos de Colombia toca menores de 18. Allá el permiso tiene que darlo el representante legal.",
      content: "Prueba Easy Lens CLI con un Lens sencillo pa’ una marca y mide cuánto tiempo te ahorra contra el proceso de siempre.",
      rd: "Si tu cliente pone música en tiendas, hoteles o activaciones, pídele que revise el convenio de la ACIS y que deje la licencia al día antes de diciembre."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Microsoft rehace su modelo de pujas y desaconseja el CPC máximo · El retail media de Target crece 22.8 % y llega a US$296 millones" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Macaulay Culkin vuelve a ser Kevin McCallister pa’ McDonald’s · Maker’s Mark estrena identidad global con la cera roja al frente" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "SparkToro: solo el 6.9 % de los chats de ChatGPT tiene intención de compra · DoubleVerify: el 17 % investiga productos en chats de IA y el 39 % en buscadores" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Colombia le gana a Google: los datos de menores necesitan permiso del representante legal · Una prueba pagada por Google reidentifica al 0.094 % en datos de búsqueda" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Snapchat deja crear Lenses con Claude y Codex · Meta lleva su Creator Dashboard nuevo a la web" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Tarifa preferencial pa’ poner música en los negocios · Mitur se alía con los Miami Heat · Sirena estrena kits sensoriales · Los pagos digitales encabezan el fintech de la banca · RD Javi lleva GTA VI a las calles de Miami · Nace Veridato" }
  },

  notas: [
    {
      id: "microsoftpujas", dep: "medios", peso: "principal",
      etiquetas: ["Search", "Microsoft Advertising", "Pujas"],
      titular: "Microsoft rehace su modelo de pujas automáticas y dice que da 10 % más valor por clic",
      corto: "Microsoft rehace sus pujas: +10 % de valor",
      cuerpo: "Microsoft Advertising empezó a desplegar el 18 de noviembre un modelo nuevo de predicción detrás de sus pujas automáticas, que calcula si un clic va a convertir y cuánto vale esa conversión. Lo llama «la mayor mejora de los modelos de puja en una década». Según datos internos que no publicó completos, los que usan Maximize Conversion Value o Target ROAS sacaron 10 % más valor de conversión por clic con un ROAS parecido, y las campañas que pasaron de eCPC a Maximize Conversions con objetivo de CPA lograron 18 % más conversiones. Ahora recomienda que las cuentas con por lo menos cinco conversiones arranquen con estrategias de conversión, que el CPC máximo no se use, que los objetivos se cambien de 15 % en 15 % y que los resultados se juzguen después de unas 30 conversiones en 30 días. No dijo qué mercados reciben el cambio primero ni si se puede desactivar.",
      cifras: [
        { v: "+10 %", t: "valor de conversión por clic con el modelo nuevo, según Microsoft" },
        { v: "+18 %", t: "conversiones al pasar de eCPC a Maximize Conversions con CPA" },
        { v: "5", t: "conversiones mínimas pa’ arrancar con estrategia de conversión" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "Microsoft está empujando a to’ el mundo hacia pujas automáticas y quitando los controles manuales. Si la medición de conversiones está floja, el modelo nuevo va a optimizar con datos malos.",
      hacer: "Esta semana, revisar en cada cuenta de Microsoft Ads de los clientes que la etiqueta UET esté activa, cuántas conversiones lleva y si todavía tiene CPC máximo puesto. Con eso, armar la lista de campañas que se pueden pasar a pujas por conversión.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/microsoft-rebuilds-its-bid-model-citing-10-more-value-per-click/" }]
    },
    {
      id: "targetroundel", dep: "medios", peso: "secundaria",
      etiquetas: ["Retail media", "Target", "Roundel"],
      titular: "El retail media de Target crece 22.8 % en el tercer trimestre y llega a US$296 millones",
      corto: "Target: US$296M en publicidad",
      cuerpo: "Target reportó el 18 de noviembre que sus ingresos por publicidad, que vienen de su red Roundel, llegaron a US$296 millones en el trimestre que cerró el 31 de octubre, contra US$241 millones un año antes. En nueve meses suman US$821 millones, 32.2 % más. El ritmo bajó un chin: en el primer semestre había crecido 38.2 %. Target aclara que parte del valor de Roundel se contabiliza como rebaja de costos y no como ingreso, así que la cifra real es mayor y no la detalla.",
      cifras: [
        { v: "US$296M", t: "ingresos por publicidad de Target en el tercer trimestre" },
        { v: "+22.8 %", t: "crecimiento interanual del trimestre" },
        { v: "US$821M", t: "acumulado de nueve meses, +32.2 %" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "El retail media sigue creciendo más rápido que las ventas de las tiendas. Los supermercados y cadenas de aquí que están armando su propia red tienen otra referencia de cuánto puede dejar.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/targets-ad-revenue-climbs-23-to-296m-in-third-quarter/" }]
    },

    {
      id: "homealone", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "McDonald’s", "Navidad"],
      titular: "Macaulay Culkin vuelve a ser Kevin McCallister, ahora solo dentro de un McDonald’s",
      corto: "Kevin McCallister, solo en McDonald’s",
      cuerpo: "McDonald’s lanzó el 17 de noviembre su campaña global de Navidad con Macaulay Culkin, que retoma su papel de «Mi pobre angelito» justo en el aniversario 36 de la película. En el spot, de Wieden+Kennedy Toronto con dirección de Ramy Youssef y Amir Farhang, un Kevin ya adulto se queda solo en un McDonald’s cerrado, juega en la cocina, el mostrador y el drive-thru, y se arma su propia versión del menú. La campaña acompaña el «Home Alone Meal»: cualquier plato con bebida, papas McShaker sabor pizza, salsa de queso pa’ mojar, un McFlurry Everything Sundae y uno de cuatro diseños de medias de colección. Repite la fórmula de las medias del Grinch del año pasado, que se agotaron más rápido de lo esperado. En Los Ángeles habrá un pop-up con retos el 4 y 5 de diciembre.",
      cifras: [
        { v: "36", t: "años de la película que inspira la campaña" },
        { v: "4", t: "diseños de medias de colección con el combo" },
        { v: "4 y 5 dic", t: "fechas del pop-up con retos en Los Ángeles" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "McDonald’s no le pidió a la película que vendiera hamburguesas: metió al personaje en su restaurante y convirtió el recuerdo en un producto que se puede coleccionar. La nostalgia funciona cuando la gente se lleva algo a la casa.",
      hacer: "En la próxima sesión creativa, escoger un cliente de consumo masivo y listar tres recuerdos o personajes que su público ya quiere. Bocetar una idea navideña donde uno de ellos se convierta en un objeto de colección o en una edición limitada.",
      fuentes: [
        { nombre: "Adweek", url: "https://www.adweek.com/creativity/macaulay-culkin-is-home-alone-again-this-time-in-mcdonalds/" },
        { nombre: "Nation’s Restaurant News", url: "https://www.nrn.com/quick-service/mcdonald-s-is-giving-out-socks-again-this-time-with-a-home-alone-meal" }
      ]
    },
    {
      id: "makersmark", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Rebranding", "Identidad", "Bebidas"],
      titular: "Maker’s Mark estrena identidad global y pone la cera roja otra vez en el centro",
      corto: "Maker’s Mark: la cera roja manda",
      cuerpo: "Maker’s Mark presentó el 17 de noviembre su nueva identidad de marca global, hecha por Turner Duckworth London, que ya había firmado el refresh de 2021. La cera roja, que se pone a mano en cada botella desde 1958, vuelve a ser el elemento principal. Trae letras hechas a partir de la escritura de la cofundadora Margie Samuels y marcas de cera hechas con materiales de Star Hill Farm, como espigas de trigo y anillos de roble. Arrancó con la web nueva y se va a mover por publicidad, tiendas, redes y eventos hasta 2027; ya hay exterior en Australia y el Reino Unido.",
      cifras: [
        { v: "1958", t: "año desde el que las botellas se sumergen a mano en cera roja" },
        { v: "2027", t: "año hasta el que sigue el despliegue de la identidad" }
      ],
      fuentes: [{ nombre: "DesignRush", url: "https://news.designrush.com/makers-mark-turner-duckworth-unveil-new-master-brand-identity" }]
    },

    {
      id: "sparktoro", dep: "planning", peso: "principal",
      etiquetas: ["IA", "ChatGPT", "Consumidor"],
      titular: "SparkToro: solo el 6.9 % de los chats de ChatGPT tiene intención de compra",
      corto: "ChatGPT: 6.9 % con intención de compra",
      cuerpo: "Rand Fishkin, de SparkToro, publicó el 17 de noviembre un análisis de 118,163 prompts en 41,961 conversaciones de 12,321 usuarios de ChatGPT en EE. UU., de un panel de Verso, entre enero y octubre de 2026. Con los datos ajustados al censo, el 6.9 % de las conversaciones tiene intención de compra: 4.9 % es investigar opciones y 2.1 % es comprar algo concreto. El 12.1 % de las respuestas de ChatGPT nombra por lo menos una marca. Los usos que más pesan son imágenes y diseño (16.1 %), información y entretenimiento (14 %) y vida diaria (12.2 %). Fishkin concluye que ChatGPT «no es un buscador» y compara su demanda comercial con la de Bing, no con la de Google. Ojo: el panel deja fuera el uso por API, es mayormente de celular y tiene más gente joven, mujeres y de menores ingresos.",
      cifras: [
        { v: "6.9 %", t: "de las conversaciones con intención de compra" },
        { v: "12.1 %", t: "de las respuestas de ChatGPT nombra una marca" },
        { v: "41,961", t: "conversaciones analizadas" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Con los anuncios de ChatGPT abriéndose en más países, el cliente va a preguntar cuánto ponerle. Este dato dice que la gente usa ChatGPT pa’ crear y resolver, no tanto pa’ comprar, así que la expectativa de ventas debe ser moderada.",
      hacer: "Antes del viernes, agregar una lámina al plan 2027 de cada cliente que pregunte por IA: qué parte del presupuesto va a búsqueda tradicional, cuál a visibilidad en respuestas de IA y cuál a pruebas pequeñas en anuncios de ChatGPT, con este dato como referencia.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/only-6-9-of-americans-chatgpt-chats-show-intent-to-buy-sparktoro-finds/" }]
    },
    {
      id: "dvcompra", dep: "planning", peso: "secundaria",
      etiquetas: ["Consumidor", "Medición", "Navidad"],
      titular: "DoubleVerify: el 39 % investiga productos en buscadores y solo el 17 % en chats de IA",
      corto: "IA, 17 %; buscadores, 39 %",
      cuerpo: "DoubleVerify publicó el 18 de noviembre su reporte sobre el camino de compra, con unos 22,000 consumidores en 21 países y 2,020 tomadores de decisión de mercadeo en 25 países, encuestados en febrero. Pa’ investigar un producto, la gente usa reseñas en línea (40 %), buscadores (39 %) y tiendas físicas (30 %); los chats de IA van con 17 % y los influencers con 11 %. Entre los mercadólogos, el 55 % mide con los reportes de las mismas plataformas y el 48 % con modelos de mezcla de medios. DoubleVerify vende herramientas de medición, así que su crítica a los reportes de plataforma no es neutral.",
      cifras: [
        { v: "40 %", t: "investiga en reseñas en línea" },
        { v: "17 %", t: "investiga en chats de IA" },
        { v: "55 %", t: "de los mercadólogos mide con reportes de la plataforma" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/ai-chat-trails-search-engines-17-to-39-in-product-research-dv-finds/" }]
    },

    {
      id: "colombiagoogle", dep: "data", peso: "principal",
      etiquetas: ["Privacidad", "Menores", "LATAM"],
      titular: "Colombia le gana a Google: pa’ usar datos de menores de 18 hace falta el permiso del representante legal",
      corto: "Colombia: Google necesita permiso pa’ menores",
      cuerpo: "El Tribunal Administrativo de Cundinamarca, en Bogotá, rechazó el 5 de noviembre todas las pretensiones de Google contra las órdenes que le dio en 2020 la Superintendencia de Industria y Comercio (SIC). Siguen vigentes cuatro: informar bien a los usuarios, publicar una política de tratamiento de datos completa, crear un mecanismo pa’ obtener y probar la autorización del representante legal de cada usuario menor de 18 y registrar sus bases de datos. El tribunal dijo que las cookies e identificadores puestos en dispositivos en Colombia cuentan como recolección de datos en Colombia, aunque el análisis se haga en servidores de afuera. También rechazó que los mayores de 14 puedan dar su consentimiento solos. Es una sentencia de primera instancia y no se sabe si Google apeló.",
      cifras: [
        { v: "1,847,592", t: "cuentas de menores de 18 activas en Colombia, según un reporte de Google de 2020" },
        { v: "4", t: "órdenes de la SIC que siguen vigentes" },
        { v: "18", t: "edad hasta la que hace falta permiso del representante legal" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Que la empresa no tenga oficina en el país no la saca de la ley local: basta con recoger datos de gente que vive ahí.",
        "La edad que el usuario declara solo no prueba que sus padres dieron permiso. El que trata los datos tiene que demostrarlo."
      ],
      hacer: "Esta semana, listar las campañas regionales que corren en Colombia y marcar las que pueden llegarle a menores de 18 (juegos, bebidas, educación, moda juvenil). Pedirle al equipo legal del cliente que confirme cómo se obtiene el permiso en esos formularios y audiencias.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-loses-bid-to-overturn-colombias-under-18-data-consent-orders/" }]
    },
    {
      id: "reidentificacion", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Unión Europea", "Google"],
      titular: "Una prueba pagada por Google logra reidentificar al 0.094 % de las personas en datos de búsqueda que va a compartir en Europa",
      corto: "Datos de búsqueda: 0.094 % reidentificado",
      cuerpo: "Por la Ley de Mercados Digitales, Google tiene que compartir datos anonimizados de búsqueda con buscadores rivales, incluidos chatbots con búsqueda, a partir de enero de 2027. Woodway Assurance, con la Universidad de Ottawa, publicó el 18 de noviembre una prueba que Google encargó y pagó: con información pública de 98,501 personas, lograron reidentificar al 0.094 %, unas 93, por debajo de su umbral de riesgo de 0.47 %. Cada coincidencia tomó unas tres horas y costó cerca de €105, y Woodway mismo dice que ese costo no frenaría a un atacante y que la Comisión Europea debe actualizar sus medidas.",
      cifras: [
        { v: "0.094 %", t: "de las personas buscadas fueron reidentificadas" },
        { v: "≈€105", t: "costo de cada reidentificación confirmada" }
      ],
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/google-commissioned-test-re-identifies-0-094-of-targets-in-eu-search-data/" }]
    },

    {
      id: "easylens", dep: "content", peso: "principal",
      etiquetas: ["Snapchat", "IA", "Realidad aumentada"],
      titular: "Snapchat deja crear Lenses hablándole a Claude o a Codex, y te los manda al celular en minutos",
      corto: "Snapchat: Lenses hechos con Claude y Codex",
      cuerpo: "Snapchat lanzó el 18 de noviembre Easy Lens CLI, una herramienta de línea de comandos que conecta chatbots de IA de terceros con su sistema de creación de Lenses. Está disponible como plugin pa’ Claude y Codex, y funciona en Mac, Windows y Linux. El creador describe el Lens que quiere y la IA genera los elementos, lo arma, lo prueba, corrige errores y manda versiones nuevas al celular en minutos. Sirve pa’ juegos web con tabla de posiciones, Lenses de cámara y efectos de belleza. Todos pasan por la misma revisión de contenido de siempre, y solo los creadores inscritos en Lens+ pueden cobrar por ellos; Snap dice que el mes pasado les pagó US$1.8 millones.",
      cifras: [
        { v: "US$1.8M", t: "pagados a creadores de Lens+ el mes pasado" },
        { v: "3", t: "sistemas operativos: Mac, Windows y Linux" }
      ],
      tocaTitulo: "¿Y eso en qué le toca al equipo de content?",
      toca: "Hacer un Lens de marca ya no necesita un especialista en Lens Studio pa’ cada prueba. El equipo de content puede bocetar y probar ideas de realidad aumentada en el mismo día.",
      hacer: "Esta semana, escoger un cliente con público joven en Snapchat y pedirle a una persona del equipo que arme con Easy Lens CLI un Lens navideño sencillo. Medir cuánto tardó y presentarlo como prueba en la próxima reunión.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/snapchat-enables-lens-creation-via-third-party-ai-tools/875139/" }]
    },
    {
      id: "creatordashboard", dep: "content", peso: "secundaria",
      etiquetas: ["Meta", "Creadores", "Herramientas"],
      titular: "Meta lleva su Creator Dashboard nuevo a la web, con subida de videos en lote",
      corto: "Creator Dashboard de Meta, ya en la web",
      cuerpo: "Meta puso el 18 de noviembre su Creator Dashboard actualizado en la web, y dice que va a ser la pantalla principal pa’ manejar la presencia de un creador en sus apps. Trae un compositor rediseñado pa’ posts y Reels con vista previa, subida de videos en lote, biblioteca de contenido, más detalle de desempeño, el registro de videos originales pa’ la protección de contenido, invitaciones a seguir pa’ quienes vieron tus videos, Messenger y una sección de monetización. Meta le ha cambiado el nombre varias veces y Business Suite sigue siendo otra herramienta aparte.",
      cifras: [{ v: "2", t: "apps que maneja: Facebook e Instagram" }],
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-brings-its-updated-creator-dashboard-to-the-web/875143/" }]
    },

    {
      id: "musicanegocios", dep: "rd", peso: "principal", para: ["creatividad", "medios", "planning"],
      etiquetas: ["Derechos de autor", "Música", "Comercio"], fecha: "18 nov 2026",
      titular: "Después de 13 años de conversaciones, los negocios tienen tarifa preferencial pa’ poner música",
      corto: "Tarifa preferencial pa’ la música en negocios",
      cuerpo: "La Asociación de Comerciantes e Industriales de Santiago (ACIS) firmó un convenio con cinco sociedades de gestión colectiva (Egecam, Sgacedom, Sodaie, Sodinpro y Sogespa) pa’ que comercios, hoteles, restaurantes, centros de entretenimiento y centros de salud usen música y contenido audiovisual con condiciones tarifarias preferenciales. El acuerdo pone fin a 13 años de conversaciones, se firmó en Santiago con la vicepresidenta Raquel Peña como testigo y tiene alcance nacional. Marcos Santana, presidente de la ACIS, dijo que los comerciantes van a operar «con mayor previsibilidad». El artículo no publica las tarifas.",
      cifras: [
        { v: "13 años", t: "de conversaciones que cierra el acuerdo" },
        { v: "5", t: "sociedades de gestión colectiva que lo firmaron" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "La música en tiendas, hoteles y activaciones es parte de la experiencia de marca, y con reglas claras se acaba la excusa pa’ no pagarla. Las agencias que montan activaciones o ambientan puntos de venta deben tener la licencia en orden.",
      hacer: "Esta semana, preguntarles a los clientes de retail, hoteles y restaurantes si tienen la licencia de música al día y, si no, pedirle a la ACIS o a las sociedades las condiciones del convenio antes de las activaciones de diciembre.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/11/18/uso-de-musica-en-establecimientos-comerciales-con-condiciones-tarifarias-preferenciales/3724866" }]
    },
    {
      id: "miamiheat", dep: "rd", peso: "secundaria", para: ["creatividad", "medios", "planning"],
      etiquetas: ["Turismo", "Mitur", "Deportes"], fecha: "17 nov 2026",
      titular: "Mitur se pone la camiseta de los Miami Heat pa’ venderle RD a los fanáticos de Florida",
      cuerpo: "El ministro de Turismo, David Collado, firmó una alianza de promoción por temporada entre República Dominicana y los Miami Heat, ganadores de tres campeonatos de la NBA. La idea es acercar playas, naturaleza, gastronomía y cultura a los aficionados del equipo en Florida, un mercado que Mitur considera estratégico. «El deporte conecta a las personas», dijo Collado. El ministerio proyecta cerrar 2026 con 12.5 millones de visitantes. No se detallaron las activaciones ni el monto.",
      cifras: [{ v: "12.5 millones", t: "de visitantes que Mitur proyecta pa’ 2026" }],
      tocaTitulo: "¿Y eso qué?",
      toca: "El país sigue usando el deporte como medio pa’ llegarle al turista. Las marcas de hoteles y aerolíneas pueden pegarse a esa conversación en Florida.",
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/388737/republica-dominicana-firma-alianza-con-miami-heat-para-promover-el-turismo-en-florida/" }]
    },
    {
      id: "sirenasensorial", dep: "rd", peso: "secundaria", para: ["creatividad", "planning"],
      etiquetas: ["Inclusión", "Retail", "Experiencia"], fecha: "18 nov 2026",
      titular: "Sirena presta kits sensoriales pa’ que las personas neurodivergentes hagan la compra más tranquilas",
      cuerpo: "Grupo Ramos presentó «Infinitas formas: una nueva mirada a la neurodivergencia», con kits sensoriales gratis en 10 tiendas Sirena del país. Cada mochila trae audífonos que reducen el ruido, gafas pa’ bajar la intensidad de las luces, herramientas fidget y tarjetas visuales pa’ pedir ayuda o una pausa sin hablar. Se piden en Servicio al Cliente y se devuelven al terminar la compra. Es parte de su programa Prisma, en alianza con la Fundación Abraza y las herramientas de KultureCity, y Grupo Ramos dice que es la primera empresa en traer estos kits al país.",
      cifras: [
        { v: "10", t: "tiendas Sirena con kits sensoriales" },
        { v: "4", t: "herramientas en cada mochila" }
      ],
      tocaTitulo: "¿Y eso qué?",
      toca: "Es una mejora de experiencia en tienda que se puede ver, tocar y contar sin exagerar. Pa’ marcas de retail, la inclusión que funciona en el piso de venta pesa más que un post.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/consumo/2026/11/18/grupo-ramos-implementa-kits-sensoriales-en-tiendas-sirena/3724509" }]
    },
    {
      id: "fintechbanca", dep: "rd", peso: "secundaria", para: ["data", "planning"],
      etiquetas: ["Banca", "Fintech", "Pagos digitales"], fecha: "18 nov 2026",
      titular: "Los pagos digitales ya son el 51 % de los servicios fintech que contrata la banca dominicana",
      cuerpo: "Una encuesta de la Superintendencia de Bancos, con corte a marzo de 2026, dice que los pagos digitales son el 51 % de los servicios fintech que usan las entidades financieras, contra 38 % en 2024 y 27 % en 2022. Todos los bancos múltiples tienen vínculos con fintech. Lo que más subió desde 2024 fue la validación digital de identidad (de 24 % a 40 %) y la apertura de cuentas digital (de 22 % a 33 %), mientras las billeteras móviles bajaron de 33 % a 28 %.",
      cifras: [
        { v: "51 %", t: "de los servicios fintech contratados son pagos digitales" },
        { v: "40 %", t: "usa validación digital de identidad, antes 24 %" }
      ],
      fuentes: [{ nombre: "El Dinero", url: "https://eldinero.com.do/389046/pagos-digitales-mas-del-50-de-servicios-fintech-contratados-por-la-banca-dominicana/" }]
    },
    {
      id: "rdjavi", dep: "rd", peso: "secundaria", para: ["content", "creatividad"],
      etiquetas: ["Creadores", "Gaming", "Streaming"], fecha: "18 nov 2026",
      titular: "RD Javi se va pa’ Miami a buscar en la calle los escenarios de GTA VI",
      cuerpo: "El streamer dominicano RD Javi, el primero del país firmado por Red Bull, está en Miami con un carro personalizado inspirado en GTA VI, que sale hoy jueves 19 de noviembre pa’ PlayStation 5 y Xbox Series. Toda la semana va a combinar sesiones de juego con recorridos por la ciudad pa’ comparar los lugares reales con los del videojuego, que se ambienta en una versión ficticia del sur de Florida, y lo transmite en vivo en su canal.",
      tocaTitulo: "¿Y eso qué?",
      toca: "El lanzamiento de GTA VI es el evento gamer del año y ya tiene un creador dominicano contándolo desde la calle. Es un ejemplo de cómo un creador local se monta en una conversación global con contenido propio.",
      fuentes: [
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/18/rd-javi-lleva-la-cultura-gamer-a-las-calles-de-miami-con-gta-6/3724421" },
        { nombre: "Diario Libre", url: "https://www.diariolibre.com/revista/cultura/2026/11/18/lanzamiento-de-gta-vi-el-videojuego-de-rockstar-games/3724780" }
      ]
    },
    {
      id: "veridato", dep: "rd", peso: "secundaria", para: ["data", "content"],
      etiquetas: ["Desinformación", "Alfabetización mediática"], fecha: "18 nov 2026",
      titular: "Nace Veridato, una plataforma dominicana pa’ enseñar a detectar noticias falsas y estafas digitales",
      cuerpo: "El periodista Freddy Ortiz Pujols presentó en la Biblioteca Nacional Veridato, una plataforma educativa y de verificación que busca enseñar a identificar contenido engañoso, comprobar fuentes y prevenir fraudes digitales, con uso responsable de la IA. Ofrece guías gratis, ejercicios prácticos e infografías en veridato.org y en redes como @veridato. «Una buena intención no convierte una información en verdad», dijo Ortiz Pujols.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/actualidad/educacion/2026/11/18/veridato-lanza-plataforma-para-combatir-desinformacion-y-fraudes-digitales/3724915" }]
    }
  ],

  pizarra: ["microsoftpujas", "homealone", "sparktoro", "colombiagoogle", "easylens", "musicanegocios"],

  frases: [
    { dep: "planning", texto: "Solo el 6.9 % de los chats de ChatGPT tiene intención de compra: la gente lo usa pa’ crear y resolver, no tanto pa’ comprar.", uso: "para conversaciones sobre anuncios en IA" },
    { dep: "data", texto: "En Colombia, una cookie puesta en un celular colombiano ya cuenta como recolección de datos en Colombia, aunque el servidor esté afuera.", uso: "para conversaciones de privacidad regional" },
    { dep: "medios", texto: "Microsoft dice que su modelo nuevo da 10 % más valor por clic, pero sin conversiones bien medidas la máquina optimiza a ciegas.", uso: "para conversaciones de search y automatización" },
    { dep: "creatividad", texto: "McDonald’s no le pidió a Kevin McCallister que vendiera hamburguesas: lo metió en el restaurante y convirtió el recuerdo en medias de colección.", uso: "para conversaciones de ideas navideñas" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Las pujas nuevas de Microsoft" },
      { id: "creatividad", texto: "Kevin McCallister en McDonald’s" },
      { id: "planning", texto: "El 6.9 % de SparkToro" },
      { id: "data", texto: "Colombia contra Google" },
      { id: "content", texto: "Lenses con Claude y Codex" },
      { id: "rd", texto: "Zoom a RD: la tarifa de la música" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "microsoftpujas", titulo: "Despega el dato del día" },
    planning: {
      tipo: "hoja", nota: "dvcompra", titulo: "Arranca la hoja", mes: "Noviembre",
      revela: "Llega la semana de Acción de Gracias y el Viernes Negro, el pico de inversión del año pasado en los datos de DoubleVerify. La gente investiga más en reseñas (40 %) y buscadores (39 %) que en chats de IA (17 %): asegura que tu cliente aparezca ahí primero."
    },
    data: {
      tipo: "secreto", nota: "colombiagoogle", titulo: "Destapa el expediente",
      texto: "El tribunal dejó en pie que Google debe probar la autorización del representante legal de [[cada usuario menor de 18]] en Colombia, donde un reporte de la empresa contaba [[1,847,592 cuentas de menores]] activas."
    },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    content: {
      tipo: "prompt", nota: "easylens", titulo: "Arma tu pedido pa’ Easy Lens CLI",
      intro: "Usando Easy Lens CLI de Snapchat, ayúdame a crear un Lens con lo siguiente:",
      opciones: [
        "Un juego web navideño sencillo con tabla de posiciones pa’ una marca de bebidas",
        "Un Lens de cámara que ponga un gorro y luces de Navidad con los colores de la marca",
        "Un efecto de belleza suave pa’ fotos de fiesta, sin cambiar los rasgos de la cara"
      ],
      cierre: "Antes de generar el Lens, dime qué elementos vas a crear, qué necesitas de mí (logo, colores, textos) y qué partes debo revisar antes de publicarlo."
    },
    rd: {
      tipo: "pregunta", nota: "musicanegocios", titulo: "La pregunta del patio",
      p: "¿Cuántos años de conversaciones cerró el convenio de la música entre la ACIS y las sociedades de gestión?",
      opciones: ["5 años", "13 años", "20 años"], correcta: 1,
      explicacion: "Fueron 13 años. El convenio lo firmaron la ACIS y cinco sociedades de gestión colectiva en Santiago, con la vicepresidenta Raquel Peña como testigo, y tiene alcance nacional."
    }
  }
};
