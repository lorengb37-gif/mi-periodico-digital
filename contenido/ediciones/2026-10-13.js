/*
  El Pulso Publicitario · edición N.º 286 · 13 de octubre de 2026
  Los campos se explican en la edición del 11 de septiembre de 2026.
*/
window.EDICION = {
  numero: 286,
  fechaISO: "2026-10-13",
  fecha: "Martes 13 de octubre 2026",
  fechaCorta: "13 oct 2026",
  hora: "8:00 AM",
  lugar: "Santo Domingo · GMT-4",
  intro: "Publicidad, mercadeo y ad tech pa’ la gente de agencia. Cinco departamentos, un zoom a RD y una sola lectura, to’ los días a las 8:00 AM.",
  videoPortada: null,

  consejo: {
    firma: "La Redacción · El Pulso",
    tesis: "Hoy el cliente pregunta quién lo atiende, con qué datos y bajo qué reglas: ten las tres respuestas listas antes de que te las pida.",
    largo: "Martes con reglas nuevas por todos lados. Publicis le vende directo a los CEO preocupados por la IA, Apple le mueve el piso al ad tech con iOS 27, Turquía exige verificar la edad en redes y, aquí en el patio, el nuevo reglamento financiero tiene en la mira la publicidad de los bancos. Escoge un «Lo que toca hacer» de esta edición, ponle responsable y fecha antes del viernes.",
    corto: "Escoge un «Lo que toca hacer» de hoy, ponle responsable y fecha antes del viernes.",
    porDep: {
      medios: "Si el cliente grande ya no pasa por concurso, la relación y el dato pesan más que la presentación. Revisa qué le entregas que nadie más le entrega.",
      creatividad: "Cuando la idea sale de un dato real, como el de Asics, el chiste tiene con qué sostenerse. Busca el número antes que la broma.",
      planning: "La gente compra con la aprobación de su círculo. Antes de planificar la temporada, pregúntate quién le dice «cómpralo» a tu consumidor.",
      data: "Las reglas de edad y de datos cambian de país en país. Mapea qué cuentas tuyas tocan menores y qué permiso hay detrás de cada dato.",
      content: "Los controles pa’ padres llegan a todas las regiones. Si tu cliente le habla a adolescentes, revisa qué hace y qué no hace su perfil.",
      rd: "En el patio, el reglamento financiero ya está vigente. Antes de lanzar la próxima promo de un banco, léete lo que cambió pa’ la publicidad."
    }
  },

  departamentos: {
    medios:      { nombre: "Medios",      oficio: "Señal · Alcance · Frecuencia · Inventario", resumen: "Publicis le vende directo a los CEO y se retira del concurso de Coca-Cola · Apple y su iOS 27 le mueven el piso al ad tech en Advertising Week · Google mueve sus Local Services Ads a Performance Max" },
    creatividad: { nombre: "Creatividad", oficio: "Idea · Craft · Copy · Arte · Producción", resumen: "Asics pone a Sigourney Weaver a narrar la vida del humano sedentario · Aura quiere ser la red social de la gente que quieres" },
    planning:    { nombre: "Planning",    oficio: "Plataformas · Audiencias · Forecast · Temporadas", resumen: "Snapchat publica su guía navideña 2026: se compra con la aprobación de los panas" },
    data:        { nombre: "Data",        oficio: "Regulación · Privacidad · Medición · IA", resumen: "Turquía prohíbe las redes a menores de 15 y exige un token de edad del Estado · Italia multa a IQVIA con €7 millones por datos de pacientes" },
    content:     { nombre: "Content",     oficio: "Plataformas sociales · Herramientas · IA", resumen: "Threads deja que los padres vean a quién bloquean sus hijos · Meta lanza los modelos Muse Wonder" },
    rd:          { nombre: "Zoom a RD",   oficio: "Campañas · Premios · Medios · Agenda", resumen: "Lo que se está moviendo en el mercado publicitario dominicano: campañas, premios, medios y agenda. Na’ de afuera, puro patio." }
  },

  notas: [
    {
      id: "publicis", dep: "medios", peso: "principal",
      etiquetas: ["Cuentas", "Publicis", "PepsiCo"],
      titular: "Publicis le vende directo a los CEO asustados con la IA y se baja del concurso de Coca-Cola",
      corto: "Publicis le vende directo a los CEO y deja el concurso de Coca-Cola",
      cuerpo: "En la llamada de resultados del tercer trimestre, Arthur Sadoun, CEO de Publicis Groupe, dijo que cada vez ven «CEOs involucrados» en lo que hacen y que la empresa se salta al CMO pa’ hablarle directo al jefe, preocupado por la IA y los cambios del consumidor. PepsiCo le dio su cuenta global de medios el mes pasado sin concurso, y Publicis se retiró del concurso de medios de Coca-Cola. Sadoun atribuyó a Sapient, su brazo de tecnología, «las dos cuentas más grandes del año» sin pitch, aunque no dijo cuáles. Los ingresos netos subieron 5 % a €3,529 millones.",
      cifras: [
        { v: "€3,529M", t: "ingresos netos del trimestre, 5 % más que hace un año" },
        { v: "+2 %", t: "al crecimiento orgánico rumbo a 2027 por clientes nuevos: unos €300 millones" },
        { v: "62 %", t: "de los ingresos del trimestre vino de medios" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de medios?",
      toca: "El cliente grande está comprando con el CEO en la mesa y no solo con el CMO. Eso cambia cómo se vende un plan de medios: menos canales y más negocio. Ojo: es lo que dice Publicis sobre sí misma en una llamada con inversionistas.",
      hacer: "Esta semana, reescribir la primera página de tu propuesta pa’ un cliente grande en términos que le importen a su CEO (ventas, riesgo, IA) y no solo alcance y frecuencia.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/publicis-is-selling-directly-to-ai-anxious-ceos-as-it-steps-away-from-traditional-pitches/" }]
    },
    {
      id: "ios27", dep: "medios", peso: "secundaria",
      etiquetas: ["Ad Tech", "Apple", "Zeta"],
      titular: "Apple le mueve el piso al ad tech con iOS 27 mientras Zeta sale de compras en Advertising Week",
      corto: "iOS 27 le mueve el piso al ad tech",
      cuerpo: "El Ad Tech Briefing de Digiday cuenta que los cambios de segmentación de iOS 27 sacudieron parte del ecosistema de anuncios y que, en Advertising Week, ejecutivos hablaron del riesgo y de las respuestas posibles, casi siempre sin dar su nombre. Una de las grandes conversaciones fue qué empresas podrían estar en la supuesta «lista negra secreta» de Apple. Mientras, Zeta Global anunció la compra de Senso, una empresa de ingeniería de IA, y la de Digital Audience, de identidad y activación. La nota no dice qué empresas están en la lista ni detalla las restricciones.",
      cifras: [
        { v: "2", t: "compras de Zeta Global en Advertising Week: Senso y Digital Audience" },
        { v: "Q1 2027", t: "fecha prevista pa’ la disponibilidad general de AthenaOS, el software nuevo de Zeta" }
      ],
      toca: "Si tus campañas dependen de segmentación en iPhone, conviene saber qué proveedor de la cadena queda expuesto. Todavía no hay detalles públicos de las restricciones.",
      fuentes: [{ nombre: "Digiday", url: "https://digiday.com/media-buying/ad-tech-briefing-zeta-goes-big-as-apple-casts-a-shadow-over-advertising-week/" }]
    },
    {
      id: "lsa", dep: "medios", peso: "secundaria",
      etiquetas: ["Google", "Local Services Ads", "PMax"],
      titular: "Google mete los Local Services Ads dentro de Performance Max",
      corto: "Google mueve los Local Services Ads a PMax",
      cuerpo: "Google está pasando los Local Services Ads a Google Ads como un tipo de campaña de Performance Max con pago por lead, limitado a Search y Maps. La primera fase arrancó en agosto con anunciantes seleccionados de EE. UU.; las cuentas fuera de EE. UU. y las categorías que faltan pasan en 2027. Se elimina la puja manual de costo máximo por lead, los presupuestos semanales se vuelven diarios y los reportes históricos no se transfieren. Desde el 1 de octubre, Google también cobra las llamadas sin contestar en horario de atención si quien llama se queda más de 20 segundos en la línea.",
      cifras: [
        { v: "2027", t: "año en que pasan las cuentas fuera de EE. UU. y las categorías restantes" },
        { v: "20 seg", t: "de llamada sin contestar a partir de los cuales Google cobra" }
      ],
      toca: "Hoy afecta solo a EE. UU., pero marca el rumbo: más automatización y menos control manual de la puja. El aviso no explica cómo se disputa un cobro por llamada perdida.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/lsarespond-tops-2-000-users-as-google-moves-local-services-ads-into-pmax/" }]
    },

    {
      id: "asics", dep: "creatividad", peso: "principal",
      etiquetas: ["Campaña", "Asics", "Golin"],
      titular: "Asics pone a Sigourney Weaver a narrar la vida del humano sedentario como si fuera un documental de la naturaleza",
      corto: "Asics convierte al humano sedentario en documental de la naturaleza",
      cuerpo: "Asics lanzó «Human Nature», un documental satírico de 10 minutos narrado por Sigourney Weaver y estrenado antes del Día Mundial de la Salud Mental, el 10 de octubre. Sigue a tres «criaturas» en su hábitat: una atrapada en Zoom en su cubículo, otra en el sofá rodeada de tres pantallas y otro víctima del algoritmo y el doomscrolling. Cierra con la cura: moverse a diario. La campaña es de Golin Ketchum London, producida por Knucklehead y dirigida por Rob Leggatt, y se apoya en un estudio de Asics con 34,000 personas en 31 países hecho en julio de 2026.",
      cifras: [
        { v: "53 %", t: "de los adultos no cumple las guías de actividad física, según el estudio de Asics" },
        { v: "23 %", t: "cae en la categoría «en peligro»: menos de 30 minutos de ejercicio a la semana" },
        { v: "15 min", t: "de movimiento diario que propone la marca" }
      ],
      tocaTitulo: "¿Y eso en qué le toca a tu agencia?",
      toca: "La idea funciona porque trata un dato real con humor y un formato que todo el mundo reconoce. El chiste carga el mensaje y el estudio lo respalda.",
      hacer: "Esta semana, en la reunión creativa, tomar un dato propio de un cliente y probarlo en un formato conocido (documental, noticiero, anuncio viejo) con dos guiones de un párrafo cada uno.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/asics-enlists-sigourney-weaver-to-document-habits-of-the-couch-bound-human/" }]
    },
    {
      id: "aura", dep: "creatividad", peso: "secundaria",
      etiquetas: ["Marca", "Aura", "Campaña"],
      titular: "Aura lanza su campaña más grande pa’ ser la red social de la gente que quieres",
      corto: "Aura quiere ser una red social íntima",
      cuerpo: "Aura, la marca líder de marcos digitales de fotos, con más de 10 millones de usuarios, lanzó su campaña más grande hasta ahora pa’ convertir un regalo popular en una forma diaria de mantenerse cerca. Sus fundadores, exejecutivos de Twitter, nacieron de la idea de una red social más pequeña e íntima. El resumen público de Adweek no detalla la agencia, los canales ni las cifras de la campaña: el resto está tras suscripción.",
      toca: "Cambiar la categoría de «regalo» a «hábito diario» es un buen ejercicio de posicionamiento. Falta ver la ejecución, que el artículo abierto no cuenta.",
      fuentes: [{ nombre: "Adweek", url: "https://www.adweek.com/creativity/aura-wants-to-be-the-social-network-for-people-you-love-not-just-a-gift-for-grandma/" }]
    },

    {
      id: "snaphol", dep: "planning", peso: "principal",
      etiquetas: ["Temporada", "Snapchat", "Navidad"],
      titular: "Snapchat dice que la Navidad se compra con la aprobación de los panas y publica su guía 2026",
      corto: "Snapchat: la Navidad se compra con la aprobación del círculo",
      cuerpo: "Snapchat publicó «Wrapped in the Chat», una guía de 8 páginas sobre compras de fin de año. Su tesis es que comprar regalos ya no es una acción aislada: la persona encuentra algo, lo comparte con su círculo cercano, recibe aprobación de amigos o familia y entonces compra. La guía muestra cuándo la gente busca más recomendaciones de regalos, explica cómo usar sus formatos de anuncios y trae una lista de pasos pa’ planificar una campaña. Las estadísticas vienen en imágenes, así que las cifras exactas hay que sacarlas de la guía original.",
      cifras: [
        { v: "8", t: "páginas tiene la guía «Wrapped in the Chat»" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de planning?",
      toca: "Si la decisión se toma en el chat de los panas, el plan de Q4 debe incluir el momento de la recomendación y no solo el de la compra. La guía es de la propia plataforma, así que conviene contrastarla con datos del mercado local.",
      hacer: "Esta semana, tomar un cliente de retail o regalos y marcar en su calendario de Q4 los momentos de recomendación (antes de Black Friday y de Navidad), y pedirle al rep de Snapchat los datos de RD.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/snapchat-publishes-2026-holiday-marketing-guide/832800/" }]
    },

    {
      id: "turquia", dep: "data", peso: "principal",
      etiquetas: ["Regulación", "Turquía", "Menores"],
      titular: "Turquía prohíbe las redes a menores de 15 y exige un token de edad del Estado desde el 1 de noviembre",
      corto: "Turquía exige token de edad del Estado pa’ las redes",
      cuerpo: "Turquía publicó el 10 de octubre en su Gaceta Oficial un reglamento que prohíbe que las redes sociales sirvan a menores de 15 años y exige que los usuarios verifiquen su edad con un token que da el Estado a través del portal e-Government. Entra en vigor el 1 de noviembre de 2026 y aplica a proveedores locales y extranjeros, sin mínimo de usuarios. Los de 15 a 17 años reciben un servicio restringido que no puede incluir publicidad personalizada ni perfilado. Las cuentas nuevas se verifican desde el 1 de noviembre; las existentes, antes del 31 de marzo de 2027. El texto no fija montos de multa.",
      cifras: [
        { v: "1 nov 2026", t: "fecha en que entra en vigor" },
        { v: "Menores de 15", t: "no pueden usar redes sociales" },
        { v: "31 mar 2027", t: "plazo pa’ verificar las cuentas existentes" }
      ],
      listaTitulo: "Lo que eso dice del mercado",
      lista: [
        "Los países están pasando de pedirle a las plataformas que «protejan» a menores a decirles cómo verificar la edad, y eso termina limitando la publicidad personalizada.",
        "Si el token lo da el Estado, la plataforma depende de la regla de cada país: lo que vale en un mercado no vale en otro."
      ],
      hacer: "Esta semana, listar las cuentas que le hablan a menores de 18 años y confirmar con cada plataforma cómo manejan la segmentación de adolescentes, antes de que el tema llegue a la región.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/turkey-orders-state-age-tokens-for-social-media-from-november-1/" }]
    },
    {
      id: "iqvia", dep: "data", peso: "secundaria",
      etiquetas: ["Privacidad", "Italia", "Multa"],
      titular: "Italia multa a IQVIA con €7 millones por datos de pacientes que llamaba anónimos",
      corto: "Italia multa a IQVIA con €7 millones",
      cuerpo: "Según el resumen de PPC Land, el Garante de Italia multó a IQVIA Solutions Italy con €7 millones por datos de cerca de un millón de pacientes que la empresa había llamado anónimos. IQVIA tiene 120 días pa’ cumplir y podría cerrar el caso pagando €3.5 millones.",
      cifras: [
        { v: "€7M", t: "multa del Garante italiano a IQVIA" },
        { v: "120 días", t: "plazo pa’ cumplir; podría saldar con €3.5 millones" }
      ],
      toca: "Llamar «anónimo» a un dato no basta si se puede reidentificar. La nota es un resumen dentro de otra edición de PPC Land, así que conviene confirmar los detalles con el Garante.",
      fuentes: [{ nombre: "PPC Land", url: "https://ppc.land/turkey-orders-state-age-tokens-for-social-media-from-november-1/" }]
    },

    {
      id: "threadspadres", dep: "content", peso: "principal",
      etiquetas: ["Threads", "Meta", "Adolescentes"],
      titular: "Threads deja que los padres vean a quién bloquean sus hijos adolescentes",
      corto: "Threads: los padres ven a quién bloquean sus hijos",
      cuerpo: "Meta amplió a todas las regiones las herramientas de supervisión parental de Threads, que empezaron en Asia Pacífico en septiembre de 2026. La novedad es que los padres pueden ver las cuentas que su hijo adolescente ha bloqueado. Ya podían ver el tiempo de uso, poner límites, controlar quién etiqueta a su hijo y revisar la privacidad y el contenido sensible. Threads tiene unos 500 millones de usuarios mensuales, según el estimado del artículo.",
      cifras: [
        { v: "500 M", t: "usuarios mensuales de Threads, según el estimado de Social Media Today" },
        { v: "Todas", t: "las regiones donde ya están las herramientas parentales" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca a los de content?",
      toca: "Si un cliente le habla a adolescentes, sus padres tienen más visibilidad de lo que ven sus hijos. Eso pide contenido que aguante la mirada de la familia, sin groserías ni dobles sentidos.",
      hacer: "Esta semana, revisar las últimas 10 publicaciones de un cliente con público joven y marcar cuáles no le pondrías delante a un padre, pa’ ajustar el tono del calendario.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/threads-allows-parents-to-see-who-their-teens-have-blocked/832781/" }]
    },
    {
      id: "muse", dep: "content", peso: "secundaria",
      etiquetas: ["Meta", "IA", "Muse Wonder"],
      titular: "Meta lanza Muse Wonder, sus modelos de IA más capaces pa’ tareas de agente",
      corto: "Meta lanza los modelos de IA Muse Wonder",
      cuerpo: "Meta presentó Muse Wonder y Muse Wonder Full, que describe como sus modelos más capaces pa’ tareas de agente personales y profesionales. Juntan «Active Memory y Active Focus» pa’ trabajar en tareas largas, algunas de días, y Meta dice que mejoran en las pruebas de referencia. El artículo no da precios, regiones ni fechas de lanzamiento, y advierte del riesgo de que un agente cierre una venta en Marketplace y comparta datos personales sin que el usuario lo note.",
      toca: "Todavía no hay una función concreta pa’ los equipos de content. Es una señal de hacia dónde van los agentes de Meta, con la advertencia de que antes de usarlos hay que revisar qué datos manejan.",
      fuentes: [{ nombre: "Social Media Today", url: "https://www.socialmediatoday.com/news/meta-launches-advanced-muse-wonder-ai-models/832795/" }]
    },

    {
      id: "reglamento", dep: "rd", peso: "principal", para: ["creatividad", "data", "planning"],
      etiquetas: ["Banca", "Regulación", "Publicidad"], fecha: "12 oct 2026",
      titular: "Entra en vigor el nuevo reglamento de protección al usuario financiero: más claridad y menos publicidad engañosa",
      corto: "Reglamento financiero: más claridad y publicidad más estricta",
      cuerpo: "Santo Domingo.— La Junta Monetaria publicó el reglamento actualizado de protección al usuario de productos y servicios financieros, vigente desde el lunes 12 de octubre. Aprieta las reglas de la publicidad financiera pa’ evitar mensajes engañosos, ambiguos o incompletos. Los usuarios pueden pedir en cualquier momento que los saquen de las bases de datos usadas pa’ promociones, y las entidades deben dar al menos 24 horas pa’ revisar la información antes de firmar. El plazo pa’ llevar una queja a la Superintendencia de Bancos sube de 60 a 90 días. Las entidades pueden pedir hasta un año pa’ adaptarse a ciertos aspectos, y la Superintendencia tiene seis meses pa’ emitir las instrucciones.",
      cifras: [
        { v: "24 horas", t: "mínimo pa’ revisar la información antes de firmar un producto" },
        { v: "60 → 90 días", t: "plazo pa’ llevar una queja a la Superintendencia" },
        { v: "6 meses", t: "tiene la Superintendencia pa’ emitir las instrucciones" },
        { v: "1 año", t: "máximo de adaptación que pueden pedir las entidades" }
      ],
      tocaTitulo: "¿Y eso en qué nos toca?",
      toca: "Si tu cliente es un banco, una financiera o una fintech, el texto de sus anuncios, sus promociones y sus listas de contacto quedan bajo una regla más estricta. El texto de la nota no dice cómo se medirá un mensaje «ambiguo»; eso lo definirán las instrucciones de la Superintendencia.",
      hacer: "Esta semana, pedirle al área legal de cada cliente financiero el texto del reglamento y revisar con ellos las piezas y promociones de Q4 que mencionen tasas, cuotas o beneficios, y cómo se maneja la baja de las listas de contacto.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/finanzas/2026/10/12/entra-en-vigor-el-reglamento-de-proteccion-al-usuario-financiero/3686808" }]
    },
    {
      id: "arajet", dep: "rd", peso: "secundaria", para: ["planning", "medios"],
      etiquetas: ["Turismo", "Aerolíneas", "Datos"], fecha: "10 oct 2026",
      titular: "Arajet pasa a American Airlines y es la segunda aerolínea con más pasajeros en septiembre",
      corto: "Arajet ya es la segunda aerolínea con más pasajeros",
      cuerpo: "Santo Domingo.— Según la Junta de Aviación Civil, Arajet transportó 158,407 pasajeros en septiembre y quedó segunda, detrás de JetBlue (243,955) y por encima de Copa (122,220) y American Airlines (115,406). Creció 62 % frente a septiembre del año anterior y, contando pasajeros en conexión, sus registros internos suman 180,841. Los mercados con más pasajeros fueron Estados Unidos (43,021), Colombia (35,413) y Argentina (21,164). Su CEO, Víctor Pacheco, atribuyó el crecimiento a tarifas competitivas y a más conexiones por las Américas.",
      cifras: [
        { v: "158,407", t: "pasajeros de Arajet en septiembre, segunda aerolínea del país" },
        { v: "+62 %", t: "frente a septiembre del año anterior" },
        { v: "Colombia", t: "segundo mercado, con 35,413 pasajeros" }
      ],
      toca: "Con Colombia y Argentina entre los mercados más fuertes, el turismo no es solo EE. UU. Pa’ planning y medios es una pista pa’ mirar a esos mercados al planificar campañas de destino.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/10/10/arajet-transporta-158407-pasajeros-en-septiembre/3685247" }]
    },
    {
      id: "radio100", dep: "rd", peso: "secundaria", para: ["medios", "content"],
      etiquetas: ["Radio", "ADORA", "Medios"], fecha: "12–13 oct 2026",
      titular: "La radio dominicana cumple 100 años entre retos y transformaciones",
      corto: "La radio dominicana cumple 100 años",
      cuerpo: "La Asociación Dominicana de Radiodifusoras (ADORA) celebró el centenario de la radio en el Hotel El Embajador, con su presidenta, Rosa Olga Medrano, destacando su lugar en el día a día de la gente y el reto de mantener la confianza de las audiencias en un ecosistema moldeado por la tecnología. Medrano dijo en agosto que casi el 70 % de las emisoras tiene una programación más dinámica e interactiva, y que adaptarse a plataformas digitales y a la IA es el mayor reto. El Día cuenta que hay más de 400 frecuencias autorizadas (268 FM y 147 AM).",
      cifras: [
        { v: "100 años", t: "de radio dominicana (1926–2026)" },
        { v: "~70 %", t: "de las emisoras con programación más interactiva, según Medrano" },
        { v: "268 FM · 147 AM", t: "frecuencias autorizadas" }
      ],
      toca: "Pa’ medios, la radio sigue siendo un canal de confianza y ahora con cabinas visuales y streaming. Pa’ content, esas cabinas son material de video listo pa’ redes. El 70 % es un estimado de la presidenta de ADORA y no una medición.",
      fuentes: [
        { nombre: "Remolacha", url: "https://remolacha.net/2026/10/la-radio-dominicana-cumple-100-anos-entre-retos-y-transformaciones/" },
        { nombre: "El Día", url: "https://eldia.com.do/la-radio-cumple-100-anos-y-se-ha-tranformado-en-70-mas-interactiva/" }
      ]
    },
    {
      id: "bhd", dep: "rd", peso: "secundaria", para: ["creatividad", "content"],
      etiquetas: ["Bien público", "Banca", "Premios"], fecha: "11 oct 2026",
      titular: "El BHD anuncia las 11 seleccionadas del Premio Mujeres que Cambian el Mundo 2026",
      corto: "BHD anuncia sus 11 Mujeres que Cambian el Mundo",
      cuerpo: "Santo Domingo.— El Banco BHD dio a conocer las 11 seleccionadas de la 11.ª edición de su premio anual a mujeres referentes de liderazgo y transformación en sus comunidades. Son líderes comunitarias y activistas de Santo Domingo, Santiago, Villa Tapia, Monte Plata, Azua, Villa Altagracia, Puerto Plata, Padre Las Casas e Independencia, y habrá un homenaje especial. La ceremonia será el miércoles 28 de octubre en el Teatro Nacional Eduardo Brito.",
      cifras: [
        { v: "11", t: "seleccionadas en la 11.ª edición del premio" },
        { v: "28 oct", t: "ceremonia en el Teatro Nacional Eduardo Brito" }
      ],
      toca: "Un premio que lleva once años es un activo de marca con historias listas pa’ contar. Pa’ creatividad y content, es un ejemplo de cómo una marca sostiene una causa en el tiempo.",
      fuentes: [{ nombre: "Diario Libre", url: "https://www.diariolibre.com/economia/negocios/2026/10/11/el-bhd-revela-la-seleccion-del-premio-mujeres-que-cambian-el-mundo/3685686" }]
    }
  ],

  pizarra: ["publicis", "asics", "snaphol", "turquia", "threadspadres", "reglamento"],

  frases: [
    { dep: "medios", texto: "Publicis dice que cada vez le venden más al CEO y menos al CMO: el plan de medios ahora se defiende con lenguaje de negocio.", uso: "para conversaciones de cuentas y propuestas" },
    { dep: "creatividad", texto: "Asics convirtió un estudio de 34,000 personas en un documental con Sigourney Weaver: el dato da el permiso y el humor hace el resto.", uso: "para conversaciones de ideas basadas en datos" },
    { dep: "planning", texto: "Según Snapchat, la Navidad ya no se compra sola: se compra con la aprobación del chat de los panas.", uso: "para conversaciones de temporada y recomendación" },
    { dep: "data", texto: "Turquía va a pedirle a cada usuario un token de edad del Estado: la verificación de edad ya es tema de política pública y no solo de cada plataforma.", uso: "para conversaciones de privacidad y menores" }
  ],

  encuesta: {
    pregunta: "Dímelo, ¿qué nota te llevas hoy?",
    nota: "Escoge la que te llevas a la reunión de hoy. Tu elección se queda en tu navegador, na’ más pa’ ti.",
    opciones: [
      { id: "medios", texto: "Publicis le vende directo a los CEO" },
      { id: "creatividad", texto: "Asics y su documental de la naturaleza" },
      { id: "planning", texto: "Snapchat y la Navidad del chat de los panas" },
      { id: "data", texto: "Turquía y el token de edad" },
      { id: "content", texto: "Threads y la supervisión de los padres" },
      { id: "rd", texto: "Zoom a RD: el reglamento financiero" }
    ]
  },

  interactivos: {
    medios: { tipo: "etiqueta", nota: "publicis", titulo: "Despega el dato del día" },
    creatividad: { tipo: "raspadito", titulo: "Raspa la idea del día" },
    planning: {
      tipo: "hoja", nota: "snaphol", titulo: "Arranca la hoja", mes: "Octubre",
      revela: "Antes de cerrar el plan de Q4, marca el momento de la recomendación: Snapchat dice que se compra después de compartir con el círculo cercano y recibir su aprobación."
    },
    data: {
      tipo: "secreto", nota: "turquia", titulo: "Destapa el expediente",
      texto: "Turquía prohíbe las redes a [[menores de 15 años]] y exige un token de edad del Estado desde el [[1 de noviembre de 2026]]."
    },
    rd: {
      tipo: "pregunta", nota: "reglamento", titulo: "La pregunta del patio",
      p: "Según el nuevo reglamento financiero, ¿cuánto tiempo mínimo deben dar las entidades pa’ revisar la información antes de firmar un producto?",
      opciones: ["12 horas", "24 horas", "72 horas"],
      correcta: 1,
      explicacion: "El reglamento, vigente desde el 12 de octubre de 2026, exige un plazo mínimo de 24 horas pa’ revisar la información antes de firmar."
    }
  }
};
