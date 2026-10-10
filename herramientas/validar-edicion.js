/* El Pulso Publicitario · validador de ediciones
   Lo corre la rutina antes de subir la edición, y GitHub Actions en cada push (node herramientas/validar-edicion.js).
   Revisa a fondo la edición más nueva y que todas las demás existan y carguen.
   Si encuentra un error, la rutina no sube la edición y el sitio se queda con la anterior. */
(function (raiz) {
  "use strict";

  var DEPS = ["medios", "creatividad", "planning", "data", "content", "rd"];
  var DEPS_PARA = ["medios", "creatividad", "planning", "data", "content"];
  var ISO = /^\d{4}-\d{2}-\d{2}$/;

  function texto(v) { return typeof v === "string" && v.trim().length > 0; }

  // el número de la edición es el día del año: 1 de enero = 1, 31 de diciembre = 365 (366 en bisiesto)
  function diaDelAno(iso) {
    var p = iso.split("-").map(Number);
    return Math.round((Date.UTC(p[0], p[1] - 1, p[2]) - Date.UTC(p[0], 0, 1)) / 864e5) + 1;
  }

  function validarArchivo(A, err) {
    if (!Array.isArray(A) || !A.length) { err("archivo.js: window.ARCHIVO está vacío o no es una lista"); return; }
    var vistas = {};
    A.forEach(function (e, i) {
      var donde = "archivo.js, línea " + (i + 1);
      if (!e || !ISO.test(e.fecha || "")) err(donde + ": fecha inválida (" + (e && e.fecha) + "), debe ser AAAA-MM-DD");
      if (!Number.isInteger(e && e.numero)) err(donde + ": numero debe ser un entero");
      if (!texto(e && e.archivo)) err(donde + ": falta archivo");
      if (!texto(e && e.portada)) err(donde + ": falta portada (titular corto)");
      if (e && vistas[e.fecha]) err(donde + ": la fecha " + e.fecha + " está repetida");
      if (e) vistas[e.fecha] = true;
      if (i > 0 && e && A[i - 1] && e.fecha >= A[i - 1].fecha) err(donde + ": las ediciones deben ir de la más nueva a la más vieja");
      if (e && ISO.test(e.fecha || "") && Number.isInteger(e.numero) && e.numero !== diaDelAno(e.fecha)) err(donde + ": el " + e.fecha + " es el día " + diaDelAno(e.fecha) + " del año, así que numero debe ser " + diaDelAno(e.fecha) + " (no " + e.numero + ")");
    });
  }

  function validarEdicion(E, entrada, err, aviso) {
    var w = "edición " + entrada.fecha;
    if (!E || typeof E !== "object") { err(w + ": el archivo no define window.EDICION"); return; }
    if (E.numero !== entrada.numero) err(w + ": numero (" + E.numero + ") no coincide con archivo.js (" + entrada.numero + ")");
    if (E.fechaISO !== entrada.fecha) err(w + ": fechaISO (" + E.fechaISO + ") no coincide con archivo.js");
    ["fecha", "fechaCorta", "hora", "intro"].forEach(function (k) { if (!texto(E[k])) err(w + ": falta " + k); });

    // departamentos
    var D = E.departamentos || {};
    DEPS.forEach(function (d) {
      if (!D[d] || !texto(D[d].nombre)) err(w + ": falta departamentos." + d + ".nombre");
    });

    // notas
    var notas = Array.isArray(E.notas) ? E.notas : [];
    if (!notas.length) err(w + ": no hay notas");
    var ids = {};
    notas.forEach(function (n, i) {
      var donde = w + ", nota " + (n && n.id ? "«" + n.id + "»" : "#" + (i + 1));
      if (!n || !/^[\w-]+$/.test(n.id || "")) { err(donde + ": id inválido (solo letras, números, - y _)"); return; }
      if (ids[n.id]) err(donde + ": id repetido");
      ids[n.id] = n;
      if (DEPS.indexOf(n.dep) < 0) err(donde + ": dep «" + n.dep + "» no es un departamento");
      if (["principal", "secundaria"].indexOf(n.peso) < 0) err(donde + ": peso debe ser principal o secundaria");
      if (!texto(n.titular)) err(donde + ": falta titular");
      if (!texto(n.cuerpo)) err(donde + ": falta cuerpo");
      if (!Array.isArray(n.fuentes) || !n.fuentes.length) err(donde + ": falta al menos una fuente");
      (n.fuentes || []).forEach(function (f) {
        if (!f || !texto(f.nombre)) err(donde + ": una fuente no tiene nombre");
        if (!f || !/^https:\/\/[^\s"]+$/.test(f.url || "")) err(donde + ": la fuente «" + (f && f.nombre) + "» no tiene un enlace https válido");
      });
      (n.cifras || []).forEach(function (c) { if (!c || !texto(String(c.v || "")) || !texto(c.t)) err(donde + ": una cifra no tiene v y t"); });
      if (n.dep === "rd") {
        if (!Array.isArray(n.para) || !n.para.length) aviso(donde + ": nota de Zoom a RD sin «para» (a qué departamentos le sirve)");
        (n.para || []).forEach(function (p) { if (DEPS_PARA.indexOf(p) < 0) err(donde + ": para incluye «" + p + "», que no es un departamento"); });
      }
    });
    DEPS.forEach(function (d) {
      var ns = notas.filter(function (n) { return n && n.dep === d; });
      if (!ns.length) aviso(w + ": " + d + " no tiene notas hoy");
      else if (!ns.some(function (n) { return n.peso === "principal"; })) aviso(w + ": " + d + " no tiene nota principal");
    });

    // pizarra, frases, encuesta
    (E.pizarra || []).forEach(function (id) { if (!ids[id]) err(w + ": la pizarra menciona «" + id + "», que no es una nota"); });
    if (!(E.pizarra || []).length) aviso(w + ": la pizarra está vacía");
    (E.frases || []).forEach(function (f, i) {
      if (!f || DEPS.indexOf(f.dep) < 0 || !texto(f.texto)) err(w + ": la frase #" + (i + 1) + " necesita dep válido y texto");
    });
    if (E.encuesta) (E.encuesta.opciones || []).forEach(function (o, i) {
      if (!o || DEPS.indexOf(o.id) < 0 || !texto(o.texto)) err(w + ": la opción #" + (i + 1) + " de la encuesta necesita id de departamento y texto");
    });
    if (!E.consejo || !texto(E.consejo.tesis)) err(w + ": falta consejo.tesis");

    // interactivos
    var I = E.interactivos || {};
    Object.keys(I).forEach(function (d) {
      var c = I[d], donde = w + ", interactivo de " + d;
      if (DEPS.indexOf(d) < 0) { err(donde + ": «" + d + "» no es un departamento"); return; }
      if (!c || !texto(c.titulo)) err(donde + ": falta titulo");
      var nota = c && c.nota ? ids[c.nota] : null;
      if (c && c.nota && !nota) err(donde + ": la nota «" + c.nota + "» no existe");
      switch (c && c.tipo) {
        case "raspadito":
          if (!notas.some(function (n) { return n.dep === d && (n.hacer || n.toca); })) err(donde + ": el raspadito necesita una nota de " + d + " con «hacer» o «toca»");
          break;
        case "etiqueta":
          if (!nota || !nota.cifras || !nota.cifras.length) err(donde + ": la etiqueta necesita una nota con al menos una cifra");
          break;
        case "hoja":
          if (!texto(c.mes) || !texto(c.revela)) err(donde + ": la hoja necesita mes y revela");
          break;
        case "secreto":
          if (!texto(c.texto) || !/\[\[.+?\]\]/.test(c.texto)) err(donde + ": el secreto necesita un texto con datos entre [[ ]]");
          break;
        case "prompt":
          if (!texto(c.intro) || !texto(c.cierre) || !Array.isArray(c.opciones) || !c.opciones.length) err(donde + ": el prompt necesita intro, cierre y opciones");
          break;
        case "pregunta":
          if (!texto(c.p) || !Array.isArray(c.opciones) || c.opciones.length < 2) err(donde + ": la pregunta necesita p y al menos 2 opciones");
          else if (!Number.isInteger(c.correcta) || c.correcta < 0 || c.correcta >= c.opciones.length) err(donde + ": «correcta» debe ser la posición de una opción (0, 1, 2…)");
          if (!texto(c.explicacion)) err(donde + ": la pregunta necesita explicacion");
          break;
        default:
          err(donde + ": tipo «" + (c && c.tipo) + "» no existe (usa raspadito, etiqueta, hoja, secreto, prompt o pregunta)");
      }
    });
  }

  /* A: window.ARCHIVO; cargar(ruta) devuelve window.EDICION de esa ruta o lanza un error */
  function validar(A, cargar) {
    var errores = [], avisos = [];
    function err(m) { errores.push(m); }
    function aviso(m) { avisos.push(m); }
    validarArchivo(A, err);
    (Array.isArray(A) ? A : []).forEach(function (entrada, i) {
      if (!entrada || !texto(entrada.archivo)) return;
      var E = null;
      try { E = cargar(entrada.archivo); }
      catch (e) { err("edición " + entrada.fecha + ": no se pudo cargar " + entrada.archivo + " (" + e.message + ")"); return; }
      if (i === 0) validarEdicion(E, entrada, err, aviso);            // la de hoy, a fondo
      else if (!E || E.fechaISO !== entrada.fecha) err("edición " + entrada.fecha + ": el archivo no corresponde a esa fecha");
    });
    return { errores: errores, avisos: avisos };
  }

  var api = { validar: validar, validarEdicion: validarEdicion, diaDelAno: diaDelAno };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else raiz.ValidarPulso = api;

  // uso desde la terminal o GitHub Actions
  if (typeof require !== "undefined" && typeof module !== "undefined" && require.main === module) {
    var fs = require("fs"), path = require("path"), vm = require("vm");
    // el sitio vive en la raíz del repositorio (o en sitio/ en la carpeta de diseño)
    var carpeta = path.join(__dirname, "..");
    var base = fs.existsSync(path.join(carpeta, "contenido", "archivo.js")) ? path.join(carpeta, "contenido") : path.join(carpeta, "sitio", "contenido");
    var ejecutar = function (archivo) {
      var ctx = { window: {} };
      vm.createContext(ctx);
      vm.runInContext(fs.readFileSync(archivo, "utf8"), ctx, { filename: archivo, timeout: 2000 });
      return ctx.window;
    };
    var A;
    try { A = ejecutar(path.join(base, "archivo.js")).ARCHIVO; }
    catch (e) { console.log("::error::archivo.js tiene un error de sintaxis: " + e.message); process.exit(1); }
    var r = validar(A, function (ruta) {
      var p = path.join(base, ruta);
      if (!fs.existsSync(p)) throw new Error("el archivo no existe");
      return ejecutar(p).EDICION;
    });
    r.avisos.forEach(function (m) { console.log("::warning::" + m); });
    r.errores.forEach(function (m) { console.log("::error::" + m); });
    console.log("Ediciones en el archivo: " + (A || []).length + " · errores: " + r.errores.length + " · avisos: " + r.avisos.length);
    process.exit(r.errores.length ? 1 : 0);
  }
})(typeof window !== "undefined" ? window : this);
