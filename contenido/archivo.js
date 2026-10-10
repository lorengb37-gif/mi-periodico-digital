/*
  El Pulso Publicitario · archivo de ediciones
  --------------------------------------------
  Lista de todas las ediciones publicadas, de la más nueva a la más vieja.
  El calendario de la página se construye con esta lista.

  Cada mañana la rutina:
    1. crea contenido/ediciones/AAAA-MM-DD.js con window.EDICION = { ... }
    2. agrega UNA línea nueva ARRIBA de esta lista (la primera es la que abre la página)
    3. no borra ni cambia las líneas de días anteriores

  Campos:
    fecha    "AAAA-MM-DD", el día de la edición (zona Santo Domingo)
    numero   número de la edición = día del año (1 de enero = 1, 31 de diciembre = 365, o 366 en año bisiesto)
    archivo  ruta del archivo de esa edición, relativa a contenido/
    portada  el titular corto de la nota principal (se ve en el calendario)
*/
window.ARCHIVO = [
  { fecha: "2026-10-09", numero: 282, archivo: "ediciones/2026-10-09.js", portada: "TikTok abre su Ad Network a anunciantes de EE.UU." },
  { fecha: "2026-10-08", numero: 281, archivo: "ediciones/2026-10-08.js", portada: "Meta lanza IA con memoria y checkout en Messenger" },
  { fecha: "2026-10-07", numero: 280, archivo: "ediciones/2026-10-07.js", portada: "OpenAI lanza anuncios visuales en ChatGPT (EE.UU.)" },
  { fecha: "2026-10-06", numero: 279, archivo: "ediciones/2026-10-06.js", portada: "TikTok lanza Buy Direct y agentes de IA" },
  { fecha: "2026-10-05", numero: 278, archivo: "ediciones/2026-10-05.js", portada: "Amazon deja que las marcas moldeen a Alexa" },
  { fecha: "2026-10-04", numero: 277, archivo: "ediciones/2026-10-04.js", portada: "iOS 27 bloquea a The Trade Desk en Safari" },
  { fecha: "2026-10-03", numero: 276, archivo: "ediciones/2026-10-03.js", portada: "Amazon funde DSP y consola en el Ads Agent" },
  { fecha: "2026-10-02", numero: 275, archivo: "ediciones/2026-10-02.js", portada: "IAB eleva a +12.3% el gasto publicitario de EE.UU. en 2026" },
  { fecha: "2026-10-01", numero: 274, archivo: "ediciones/2026-10-01.js", portada: "Meta y YouTube aceptan al fin los anuncios del doc \"Musk\"" },
  { fecha: "2026-09-30", numero: 273, archivo: "ediciones/2026-09-30.js", portada: "Amazon Ads abre ChatGPT a sus anunciantes (piloto)" },
  { fecha: "2026-09-29", numero: 272, archivo: "ediciones/2026-09-29.js", portada: "ChatGPT Ads pasa US$1B anualizado en menos de 200 días" },
  { fecha: "2026-09-28", numero: 271, archivo: "ediciones/2026-09-28.js", portada: "Coca-Cola abre revisión en Norteamérica tras la fuga de Publicis a PepsiCo" },
  { fecha: "2026-09-27", numero: 270, archivo: "ediciones/2026-09-27.js", portada: "Meta y YouTube revierten el veto a los ads del documental \"Musk\"" },
  { fecha: "2026-09-26", numero: 269, archivo: "ediciones/2026-09-26.js", portada: "Higgsfield ya factura US$1,000M anualizados, 70% viene de agencias" },
  { fecha: "2026-09-24", numero: 267, archivo: "ediciones/2026-09-24.js", portada: "Equativ, Quartile y Amazon Ads se suman a la publicidad de ChatGPT" },
  { fecha: "2026-09-23", numero: 266, archivo: "ediciones/2026-09-23.js", portada: "Google evita el breakup de su ad tech, pero queda 6 años bajo monitor" },
  { fecha: "2026-09-22", numero: 265, archivo: "ediciones/2026-09-22.js", portada: "OpenAI y Amazon Ads: comprá espacio en ChatGPT vía DSP" },
  { fecha: "2026-09-21", numero: 264, archivo: "ediciones/2026-09-21.js", portada: "Meta le arrebataría a Google el trono publicitario global en 2026" },
  { fecha: "2026-09-20", numero: 263, archivo: "ediciones/2026-09-20.js", portada: "Infillion compra Foursquare y cierra el loop de la data real" },
  { fecha: "2026-09-19", numero: 262, archivo: "ediciones/2026-09-19.js", portada: "Meta podría superar a Google en ad revenue de Search en 2026" },
  { fecha: "2026-09-18", numero: 261, archivo: "ediciones/2026-09-18.js", portada: "Publicis gana PepsiCo y abandona el pitch de Coca-Cola" },
  { fecha: "2026-09-17", numero: 260, archivo: "ediciones/2026-09-17.js", portada: "Google debe abrir AdX y DFP a Prebid, ordena jueza Brinkema" },
  { fecha: "2026-09-15", numero: 258, archivo: "ediciones/2026-09-15.js", portada: "Google lanza licencia de IA \"pago por valor\" a editores" },
  { fecha: "2026-09-14", numero: 257, archivo: "ediciones/2026-09-14.js", portada: "Meta pagará hasta US$18,000M por seguridad infantil" },
  { fecha: "2026-09-12", numero: 255, archivo: "ediciones/2026-09-12.js", portada: "ChatGPT Ads llega a US$1,000M de run rate en 200 días" },
  { fecha: "2026-09-11", numero: 254, archivo: "ediciones/2026-09-11.js", portada: "Amazon le abre ChatGPT Ads a su DSP" }
];
