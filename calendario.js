/* El Pulso Publicitario · calendario de ediciones
   Un botón en la esquina abre el calendario: los días con edición se pueden abrir,
   y abajo quedan las últimas ediciones. Se construye con window.ARCHIVO. */
(function () {
  "use strict";

  var A = window.ARCHIVO || [], E = window.EDICION, P = window.Pulso;
  if (!A.length || !E || !P) return;
  var esc = P.esc, ico = P.ico;
  var MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  var MES3 = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  var DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  var CAB = ["L", "M", "M", "J", "V", "S", "D"];

  var porFecha = {};
  A.forEach(function (e) { porFecha[e.fecha] = e; });
  var actual = window.EDICION_ELEGIDA || A[0];
  var esUltima = actual === A[0];

  function partes(f) { var p = f.split("-"); return { a: +p[0], m: +p[1] - 1, d: +p[2] }; }
  function iso(a, m, d) { return a + "-" + String(m + 1).padStart(2, "0") + "-" + String(d).padStart(2, "0"); }
  function larga(f) { var p = partes(f), dt = new Date(p.a, p.m, p.d); return DIAS[dt.getDay()] + " " + p.d + " de " + MESES[p.m]; }
  function enlace(f) { return location.pathname + "?edicion=" + f; }

  // la página guarda la edición escogida para que también funcione donde la dirección no lleva ?edicion=
  function ir(f) {
    try { if (f === A[0].fecha) sessionStorage.removeItem("pulso-edicion"); else sessionStorage.setItem("pulso-edicion", f); } catch (e) {}
    location.href = f === A[0].fecha ? location.pathname : enlace(f);
  }

  var hoy = partes(actual.fecha);
  var vista = { a: hoy.a, m: hoy.m };
  var masVieja = partes(A[A.length - 1].fecha), masNueva = partes(A[0].fecha);

  function mesHTML() {
    var primero = new Date(vista.a, vista.m, 1);
    var hueco = (primero.getDay() + 6) % 7; // la semana empieza el lunes
    var dias = new Date(vista.a, vista.m + 1, 0).getDate();
    var celdas = "";
    for (var i = 0; i < hueco; i++) celdas += '<span class="cal__d cal__d--vacio" aria-hidden="true"></span>';
    for (var d = 1; d <= dias; d++) {
      var f = iso(vista.a, vista.m, d), ed = porFecha[f];
      if (ed) {
        var es = f === actual.fecha;
        celdas += '<a class="cal__d cal__d--ed' + (es ? " cal__d--actual" : "") + '" href="' + esc(enlace(f)) + '" data-ir="' + f + '"' +
          (es ? ' aria-current="date"' : "") + ' aria-label="Edición N.º ' + ed.numero + ", " + esc(larga(f)) + '">' + d + "</a>";
      } else {
        celdas += '<span class="cal__d" aria-hidden="true">' + d + "</span>";
      }
    }
    var antes = vista.a > masVieja.a || (vista.a === masVieja.a && vista.m > masVieja.m);
    var despues = vista.a < masNueva.a || (vista.a === masNueva.a && vista.m < masNueva.m);
    var cuantas = A.filter(function (e) { var p = partes(e.fecha); return p.a === vista.a && p.m === vista.m; }).length;
    return '<div class="cal__mes">' +
      '<button type="button" class="cal__nav" data-mes="-1"' + (antes ? "" : " disabled") + ' aria-label="Mes anterior">' + ico("atras") + "</button>" +
      '<p class="cal__titulo" aria-live="polite">' + MESES[vista.m] + " " + vista.a + "<span>" + cuantas + (cuantas === 1 ? " edición" : " ediciones") + "</span></p>" +
      '<button type="button" class="cal__nav" data-mes="1"' + (despues ? "" : " disabled") + ' aria-label="Mes siguiente">' + ico("flecha") + "</button></div>" +
      '<div class="cal__semana" aria-hidden="true">' + CAB.map(function (c) { return "<span>" + c + "</span>"; }).join("") + "</div>" +
      '<div class="cal__dias">' + celdas + "</div>";
  }

  function listaHTML() {
    return '<p class="cal__sub">Últimas ediciones</p><ol class="cal__lista">' + A.slice(0, 7).map(function (e) {
      var p = partes(e.fecha), es = e === actual;
      return '<li><a href="' + esc(enlace(e.fecha)) + '" data-ir="' + e.fecha + '"' + (es ? ' aria-current="true"' : "") + ">" +
        '<span class="cal__n">N.º ' + e.numero + "</span>" +
        '<span class="cal__f">' + p.d + " " + MES3[p.m] + "</span>" +
        '<span class="cal__t">' + esc(e.portada || "") + "</span></a></li>";
    }).join("") + "</ol>";
  }

  // botón de la esquina
  var p = partes(actual.fecha);
  var raiz = document.createElement("div");
  raiz.className = "cal";
  raiz.innerHTML =
    '<button type="button" class="cal__boton" id="calBoton" aria-expanded="false" aria-controls="calPanel">' +
    '<svg class="ico" aria-hidden="true"><use href="#i-calendario"/></svg>' +
    '<span class="cal__boton-f"><b>' + p.d + "</b> " + MES3[p.m] + "</span>" +
    '<span class="sr">Ediciones anteriores</span></button>' +
    '<div class="cal__panel" id="calPanel" role="dialog" aria-label="Ediciones de El Pulso" hidden>' +
    '<div class="cal__cab"><p>Ediciones</p><button type="button" class="cal__cerrar" id="calCerrar" aria-label="Cerrar el calendario">' + ico("cerrar") + "</button></div>" +
    '<div class="cal__cuerpo" id="calCuerpo"></div></div>';
  document.body.appendChild(raiz);

  var boton = raiz.querySelector("#calBoton"), panel = raiz.querySelector("#calPanel"), cuerpo = raiz.querySelector("#calCuerpo");
  function pintar() { cuerpo.innerHTML = mesHTML() + listaHTML(); }
  function abrir() {
    vista = { a: hoy.a, m: hoy.m };
    pintar();
    panel.hidden = false; boton.setAttribute("aria-expanded", "true");
    var foco = panel.querySelector(".cal__d--actual") || panel.querySelector(".cal__cerrar");
    if (foco) foco.focus();
  }
  function cerrar(volverFoco) {
    if (panel.hidden) return;
    panel.hidden = true; boton.setAttribute("aria-expanded", "false");
    if (volverFoco) boton.focus();
  }
  boton.addEventListener("click", function () { if (panel.hidden) abrir(); else cerrar(true); });
  raiz.querySelector("#calCerrar").addEventListener("click", function () { cerrar(true); });
  panel.addEventListener("click", function (e) {
    var n = e.target.closest("[data-mes]");
    if (n && !n.disabled) { vista.m += +n.getAttribute("data-mes"); if (vista.m < 0) { vista.m = 11; vista.a--; } if (vista.m > 11) { vista.m = 0; vista.a++; } pintar(); return; }
    var a = e.target.closest("[data-ir]");
    if (a) { e.preventDefault(); ir(a.getAttribute("data-ir")); }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrar(true); });
  // composedPath: el botón del mes se repinta al hacer clic, así que se mira el camino original del clic
  document.addEventListener("click", function (e) {
    var camino = e.composedPath ? e.composedPath() : [e.target];
    if (camino.indexOf(raiz) < 0) cerrar(false);
  });

  // aviso cuando se lee una edición anterior
  if (!esUltima) {
    var aviso = document.createElement("div");
    aviso.className = "cal-aviso";
    aviso.setAttribute("role", "note");
    aviso.innerHTML = "<p>Estás leyendo la edición <b>N.º " + actual.numero + "</b> del " + esc(larga(actual.fecha)) + ".</p>" +
      '<a href="' + esc(location.pathname) + '" data-ir="' + A[0].fecha + '">Ir a la edición de hoy ' + ico("flecha") + "</a>";
    document.body.appendChild(aviso);
    document.documentElement.classList.add("edicion-anterior");
    aviso.addEventListener("click", function (e) { var a = e.target.closest("[data-ir]"); if (a) { e.preventDefault(); ir(a.getAttribute("data-ir")); } });
  }
})();
