/* El Pulso Publicitario · utilidades compartidas
   Lee window.EDICION (contenido/edicion.js) y expone window.Pulso. */
(function () {
  "use strict";

  var E = window.EDICION;
  var ORDEN = ["medios", "creatividad", "planning", "data", "content", "rd"];
  var COLOR = {
    medios: "#5E6B3E", creatividad: "#8C4E32", planning: "#4A5A80",
    data: "#D9C9A8", content: "#6E5A80", rd: "#A24B47"
  };
  var TINTA_SOBRE = {
    medios: "#FBF8F3", creatividad: "#FBF8F3", planning: "#FBF8F3",
    data: "#1F1C19", content: "#FBF8F3", rd: "#FBF8F3"
  };

  var quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches || /[?&]quieto\b/.test(location.search);
  if (quieto) document.documentElement.classList.add("quieto");

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function dominio(url) { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return ""; } }
  function dep(id) { return E.departamentos[id]; }
  function notasDe(d) { return E.notas.filter(function (n) { return n.dep === d; }); }
  function nota(id) { for (var i = 0; i < E.notas.length; i++) if (E.notas[i].id === id) return E.notas[i]; return null; }
  function principales() {
    var ids = E.pizarra || [];
    var lista = ids.map(nota).filter(Boolean);
    return lista.length ? lista : E.notas.filter(function (n) { return n.peso === "principal"; });
  }
  function ico(id) { return '<svg class="ico" aria-hidden="true"><use href="#i-' + id + '"/></svg>'; }

  function fuentesAgrupadas() {
    var m = {}, lista = [];
    E.notas.forEach(function (n) {
      n.fuentes.forEach(function (f) {
        if (!m[f.nombre]) { m[f.nombre] = { nombre: f.nombre, dominio: dominio(f.url), items: [] }; lista.push(m[f.nombre]); }
        m[f.nombre].items.push({ n: n, url: f.url });
      });
    });
    return lista;
  }

  /* notas relacionadas: mismo hilo, mismo departamento (máx. 3) y la siguiente, sin repetir */
  function relacionadas(n) {
    var hilo = n.hilo ? E.notas.filter(function (o) { return o.hilo === n.hilo && o.id !== n.id; }) : [];
    var mismas = notasDe(n.dep).filter(function (o) { return o.id !== n.id && hilo.indexOf(o) < 0; }).slice(0, 3);
    var vistas = [n].concat(hilo, mismas);
    var i = E.notas.indexOf(n), sig = null;
    for (var k = 1; k < E.notas.length; k++) {
      var c = E.notas[(i + k) % E.notas.length];
      if (vistas.indexOf(c) < 0) { sig = c; break; }
    }
    return { hilo: hilo, mismas: mismas, sig: sig };
  }

  /* ——— aviso ——— */
  var aviso, tAviso;
  function avisar(t) {
    if (!aviso) {
      aviso = document.createElement("div");
      aviso.className = "p-aviso"; aviso.setAttribute("role", "status"); aviso.setAttribute("aria-live", "polite");
      document.body.appendChild(aviso);
    }
    aviso.textContent = t;
    aviso.classList.add("ver");
    clearTimeout(tAviso);
    tAviso = setTimeout(function () { aviso.classList.remove("ver"); }, 1800);
  }

  /* ——— copiar ——— */
  function copiar(texto, boton) {
    function listo() {
      avisar("Copiado pa’l grupo");
      if (boton) {
        var s = boton.querySelector("[data-txt]") || boton.querySelector("span"), antes = s ? s.textContent : "";
        if (s) s.textContent = "Copiado";
        boton.disabled = true;
        setTimeout(function () { if (s) s.textContent = antes; boton.disabled = false; }, 1500);
      }
    }
    function viejo() {
      var t = document.createElement("textarea");
      t.value = texto; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      var ok = false; try { ok = document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(t);
      if (ok) listo(); else avisar("No se pudo copiar. Selecciona el texto a mano.");
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(texto).then(listo, viejo);
    else viejo();
  }
  function textoHacer(n, extra) {
    return "Lo que toca hacer (" + dep(n.dep).nombre + " · El Pulso N.º " + E.numero + "): " + n.hacer +
      (extra || "") + " — " + n.titular + ". Fuente: " + n.fuentes[0].nombre + " " + n.fuentes[0].url;
  }

  /* ——— vista rápida: un solo interruptor ——— */
  var rapida = {
    get: function () { try { return localStorage.getItem("pulso-rapida") === "1"; } catch (e) { return false; } },
    set: function (on, silencio) {
      document.body.classList.toggle("rapida", on);
      try { localStorage.setItem("pulso-rapida", on ? "1" : "0"); } catch (e) {}
      Array.prototype.forEach.call(document.querySelectorAll("[data-rapida]"), function (b) {
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      document.dispatchEvent(new CustomEvent("pulso:rapida", { detail: on }));
      if (!silencio) avisar(on ? "Vista rápida: titular y lo que toca hacer" : "Edición completa");
    }
  };
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-rapida]");
    if (b) rapida.set(!document.body.classList.contains("rapida"));
    var c = e.target.closest("[data-copiar]");
    if (c) copiar(c.getAttribute("data-copiar"), c);
  });

  /* ——— encuesta (solo en este navegador) ——— */
  var voto = {
    get: function () {
      try { var v = JSON.parse(localStorage.getItem("pulso-voto") || "null"); return v && v.edicion === E.fechaISO ? v.id : null; } catch (e) { return null; }
    },
    set: function (id) { try { localStorage.setItem("pulso-voto", JSON.stringify({ edicion: E.fechaISO, id: id })); } catch (e) {} }
  };

  /* ——— fuentes tipográficas: pedirlas explícito (fonts.ready puede adelantarse) ——— */
  function tipografiasListas(caras) {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    var t = new Promise(function (r) { setTimeout(r, 2500); });
    var p = Promise.all((caras || ['800 100px "Archivo"', '400 20px "Source Serif 4"']).map(function (c) { return document.fonts.load(c); }))
      .then(function () { return document.fonts.ready; }, function () {});
    return Promise.race([p, t]);
  }

  /* ——— preloader: cada versión trae su propio contenido ——— */
  function preloader(el, pasos, alTerminar) {
    if (!el) { alTerminar && alTerminar(); return; }
    var hecho = false;
    function fin() {
      if (hecho) return; hecho = true;
      el.classList.add("fuera");
      document.documentElement.classList.remove("cargando");
      setTimeout(function () { el.remove(); }, 900);
      alTerminar && alTerminar();
    }
    if (quieto || /[?&]sinprecarga\b/.test(location.search)) { fin(); return; }
    var t0 = performance.now(), dur = 1400;
    (function tic(t) {
      var p = Math.min(1, (t - t0) / dur);
      pasos(p);
      if (p < 1) requestAnimationFrame(tic); else setTimeout(fin, 250);
    })(t0);
    el.addEventListener("click", fin);
  }

  /* ——— íconos ——— */
  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>' +
    '<symbol id="i-flecha" viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></symbol>' +
    '<symbol id="i-abajo" viewBox="0 0 24 24"><path d="M12 4v15M6 13l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></symbol>' +
    '<symbol id="i-atras" viewBox="0 0 24 24"><path d="M20 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></symbol>' +
    '<symbol id="i-fuera" viewBox="0 0 24 24"><path d="M9 5h10v10M19 5 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></symbol>' +
    '<symbol id="i-copiar" viewBox="0 0 24 24"><path d="M8 8h11v11H8zM5 16V5h11" fill="none" stroke="currentColor" stroke-width="2"/></symbol>' +
    '<symbol id="i-listo" viewBox="0 0 24 24"><path d="M4 13l5 5L20 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square"/></symbol>' +
    '<symbol id="i-calendario" viewBox="0 0 24 24"><path d="M4 6h16v14H4zM4 10h16M8 3v5M16 3v5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 14h3v3H8z" fill="currentColor"/></symbol>' +
    '<symbol id="i-cerrar" viewBox="0 0 24 24"><path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></symbol>' +
    '<symbol id="i-pausa" viewBox="0 0 24 24"><path d="M8 5v14M16 5v14" fill="none" stroke="currentColor" stroke-width="2.4"/></symbol>' +
    '<symbol id="i-play" viewBox="0 0 24 24"><path d="M7 5l12 7-12 7z" fill="currentColor"/></symbol>' +
    '<symbol id="i-dado" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="9" cy="9" r="1.6" fill="currentColor"/><circle cx="15" cy="15" r="1.6" fill="currentColor"/><circle cx="15" cy="9" r="1.6" fill="currentColor"/><circle cx="9" cy="15" r="1.6" fill="currentColor"/></symbol>' +
    "</defs></svg>";
  function sprite() { if (!document.getElementById("i-flecha")) document.body.insertAdjacentHTML("afterbegin", SPRITE); }

  /* ——— texto en canvas (para texturas 3D) ——— */
  function envolver(ctx, texto, ancho) {
    var pal = String(texto).split(/\s+/), lineas = [], l = "";
    pal.forEach(function (p) {
      var prueba = l ? l + " " + p : p;
      if (ctx.measureText(prueba).width > ancho && l) { lineas.push(l); l = p; } else l = prueba;
    });
    if (l) lineas.push(l);
    return lineas;
  }

  /* ¿hay WebGL? */
  function hayWebGL() {
    try { var c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl") || c.getContext("experimental-webgl"))); }
    catch (e) { return false; }
  }

  window.Pulso = {
    E: E, ORDEN: ORDEN, COLOR: COLOR, TINTA_SOBRE: TINTA_SOBRE, quieto: quieto,
    esc: esc, dominio: dominio, dep: dep, notasDe: notasDe, nota: nota, principales: principales, ico: ico,
    fuentesAgrupadas: fuentesAgrupadas, relacionadas: relacionadas,
    avisar: avisar, copiar: copiar, textoHacer: textoHacer, rapida: rapida, voto: voto,
    tipografiasListas: tipografiasListas, preloader: preloader, sprite: sprite,
    envolver: envolver, hayWebGL: hayWebGL
  };
})();
