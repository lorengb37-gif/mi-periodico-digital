/* El Pulso Publicitario · momentos interactivos (experimento)
   Breves: un gesto, unos segundos, algo del oficio. Lee window.EDICION.interactivos
   y pone el momento al final de la pared de su departamento.
   Para quitarlo: borrar las líneas de interactivos.js e interactivos.css en la página. */
(function () {
  "use strict";

  var E = window.EDICION, P = window.Pulso;
  if (!E || !P || !E.interactivos) return;
  var esc = P.esc, ico = P.ico, nota = P.nota, notasDe = P.notasDe;
  var quieto = P.quieto;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function abrirNota(n) { return n ? '<a class="juego__nota" href="#/nota/' + esc(n.id) + '">Ver la nota ' + ico("flecha") + "</a>" : ""; }

  function caja(d, cfg, cuerpo, pie) {
    return '<aside class="juego d-' + d + '" data-largo aria-labelledby="juego-t-' + d + '">' +
      '<header class="juego__cab"><h3 id="juego-t-' + d + '">' + esc(cfg.titulo) + "</h3></header>" +
      '<div class="juego__cuerpo">' + cuerpo + "</div>" + (pie ? '<footer class="juego__pie">' + pie + "</footer>" : "") + "</aside>";
  }

  /* ——— raspadito de colmado: descubre la idea pa’ tu cliente ——— */
  function raspadito(d, cfg) {
    var n = notasDe(d).filter(function (x) { return x.peso === "principal"; })[0] || notasDe(d)[0];
    if (!n || !(n.hacer || n.toca)) return null;
    var html = caja(d, cfg,
      '<div class="rasp">' +
      '<div class="rasp__premio"><p class="rasp__l">La idea pa’ tu cliente</p><p class="rasp__t">' + esc(n.hacer || n.toca) + "</p>" + abrirNota(n) + "</div>" +
      '<canvas class="rasp__capa" aria-hidden="true"></canvas>' +
      "</div>",
      '<button type="button" class="juego__btn" data-rasp-todo>Mostrar sin raspar</button>' +
      '<span class="juego__ayuda">Raspa con el dedo o el cursor</span>');
    return { html: html, init: function (raiz) {
      var cv = $(".rasp__capa", raiz), caja_ = $(".rasp", raiz), x = cv.getContext("2d"), listo = false;
      var color = getComputedStyle(raiz).getPropertyValue("--d-pincel").trim() || "#8C4E32";
      function pintar() {
        var r = caja_.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
        cv.width = r.width * dpr; cv.height = r.height * dpr; x.setTransform(dpr, 0, 0, dpr, 0, 0);
        x.globalCompositeOperation = "source-over";
        x.fillStyle = color; x.fillRect(0, 0, r.width, r.height);
        for (var i = 0; i < 900; i++) { x.fillStyle = "rgba(255,255,255," + Math.random() * 0.08 + ")"; x.fillRect(Math.random() * r.width, Math.random() * r.height, 2, 2); }
        x.strokeStyle = "rgba(251,248,243,.6)"; x.lineWidth = 2; x.strokeRect(10, 10, r.width - 20, r.height - 20);
        x.fillStyle = "#FBF8F3"; x.textAlign = "center"; x.textBaseline = "middle";
        x.font = "800 " + Math.min(44, r.width / 9) + 'px "Archivo", sans-serif';
        x.fillText("RASPA AQUÍ", r.width / 2, r.height / 2 - 12);
        x.font = "400 " + Math.min(30, r.width / 14) + 'px "Yellowtail", cursive';
        x.fillText("y descubre la idea", r.width / 2, r.height / 2 + 26);
      }
      function revelar() { listo = true; cv.style.opacity = "0"; setTimeout(function () { cv.hidden = true; }, 500); }
      function raspar(e) {
        if (listo) return;
        var r = cv.getBoundingClientRect();
        x.globalCompositeOperation = "destination-out";
        x.beginPath(); x.arc(e.clientX - r.left, e.clientY - r.top, 26, 0, Math.PI * 2); x.fill();
      }
      function cuanto() {
        var data = x.getImageData(0, 0, cv.width, cv.height).data, vacio = 0, tot = 0;
        for (var i = 3; i < data.length; i += 64) { tot++; if (data[i] < 40) vacio++; }
        return vacio / tot;
      }
      var abajo = false;
      cv.addEventListener("pointerdown", function (e) { abajo = true; cv.setPointerCapture(e.pointerId); raspar(e); });
      cv.addEventListener("pointermove", function (e) { if (abajo) raspar(e); });
      cv.addEventListener("pointerup", function () { abajo = false; if (!listo && cuanto() > 0.45) revelar(); });
      raiz.addEventListener("click", function (e) { if (e.target.closest("[data-rasp-todo]")) revelar(); });
      if (quieto) { cv.hidden = true; listo = true; } else pintar();
      window.addEventListener("resize", function () { if (!listo) pintar(); });
    } };
  }

  /* ——— la pregunta lista pa’ la IA: se escoge, se copia y se pega ——— */
  function prompt(d, cfg) {
    var n = nota(cfg.nota), ops = cfg.opciones || [];
    if (!ops.length) return null;
    var html = caja(d, cfg,
      '<div class="prm"><p class="prm__l">Escoge lo que quieres preguntar</p>' +
      '<div class="prm__ops">' + ops.map(function (t, k) {
        return '<button type="button" class="prm__op" data-prm="' + k + '" aria-pressed="' + (k === 0 ? "true" : "false") + '">' + esc(t) + "</button>";
      }).join("") + "</div>" +
      '<label class="prm__l" for="prm-texto-' + d + '">Tu pregunta, lista pa’ Claude, ChatGPT o Gemini</label>' +
      '<textarea class="prm__texto" id="prm-texto-' + d + '" rows="6" readonly></textarea></div>',
      '<button type="button" class="juego__btn" data-prm-copiar>' + ico("copiar") + '<span data-txt>Copiar la pregunta</span></button>' + abrirNota(n));
    return { html: html, init: function (raiz) {
      var area = $(".prm__texto", raiz);
      function act() {
        var sel = $$(".prm__op", raiz).filter(function (b) { return b.getAttribute("aria-pressed") === "true"; }).map(function (b) { return ops[+b.getAttribute("data-prm")]; });
        area.value = sel.length ? cfg.intro + "\n" + sel.map(function (t, k) { return (k + 1) + ". " + t + "."; }).join("\n") + "\n" + cfg.cierre : "Escoge al menos una pregunta.";
      }
      raiz.addEventListener("click", function (e) {
        var b = e.target.closest("[data-prm]");
        if (b) { b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true"); act(); return; }
        var c = e.target.closest("[data-prm-copiar]"); if (c) P.copiar(area.value, c);
      });
      act();
    } };
  }

  /* ——— una sola pregunta: se toca una respuesta y listo ——— */
  function pregunta(d, cfg) {
    if (!cfg.p || !cfg.opciones || !cfg.opciones.length) return null;
    var html = caja(d, cfg,
      '<div class="quiz" aria-live="polite"><p class="quiz__p">' + esc(cfg.p) + "</p>" +
      '<div class="quiz__ops">' + cfg.opciones.map(function (o, k) {
        return '<button type="button" class="quiz__op" data-quiz="' + k + '">' + esc(o) + "</button>";
      }).join("") + '</div><div class="quiz__resp"></div></div>');
    return { html: html, init: function (raiz) {
      raiz.addEventListener("click", function (e) {
        var b = e.target.closest("[data-quiz]"); if (!b || b.disabled) return;
        var k = +b.getAttribute("data-quiz"), ok = k === cfg.correcta;
        $$(".quiz__op", raiz).forEach(function (x, j) {
          x.disabled = true;
          if (j === cfg.correcta) x.classList.add("bien");
          else if (j === k) x.classList.add("mal");
        });
        $(".quiz__resp", raiz).innerHTML = '<p class="quiz__ex"><b>' + (ok ? "¡Eso es!" : "Casi.") + "</b> " + esc(cfg.explicacion) + " " + abrirNota(nota(cfg.nota)) + "</p>";
      });
    } };
  }

  /* arrastrar con el dedo o el cursor; al pasar el umbral se suelta solo */
  function arrastre(el, eje, umbral, mover, soltar) {
    var x0 = 0, y0 = 0, activo = false, d = 0;
    el.addEventListener("pointerdown", function (e) { if (e.pointerType === "mouse") e.preventDefault(); activo = true; x0 = e.clientX; y0 = e.clientY; el.setPointerCapture(e.pointerId); el.classList.add("arrastrando"); });
    el.addEventListener("pointermove", function (e) {
      if (!activo) return;
      d = eje === "x" ? e.clientX - x0 : e.clientY - y0;
      mover(d);
    });
    function fin() {
      if (!activo) return; activo = false; el.classList.remove("arrastrando");
      if (Math.abs(d) > umbral()) soltar(); else mover(0);
      d = 0;
    }
    el.addEventListener("pointerup", fin);
    el.addEventListener("pointercancel", fin);
  }

  /* ——— Medios: despegar la etiqueta de oferta del espacio ——— */
  function etiqueta(d, cfg) {
    var n = nota(cfg.nota);
    var c = n && n.cifras && n.cifras[0];
    if (!c) return null;
    var html = caja(d, cfg,
      '<div class="etq">' +
      '<div class="etq__fondo"><p class="etq__l">El dato del día</p><p class="etq__v">' + esc(c.v) + '</p><p class="etq__t">' + esc(c.t) + "</p>" + abrirNota(n) + "</div>" +
      '<button type="button" class="etq__sticker" aria-label="Despegar la etiqueta y ver el dato del día">' +
      '<span class="etq__oferta">Espacio disponible</span><span class="etq__grande">Despégame</span><span class="etq__chico">jálala pa’l lado</span></button>' +
      "</div>");
    return { html: html, init: function (raiz) {
      var st = $(".etq__sticker", raiz), fuera = false;
      function mover(dx) { if (!fuera) st.style.transform = "translateX(" + dx + "px) rotate(" + (dx / 18) + "deg)"; }
      function soltar() {
        if (fuera) return; fuera = true;
        st.classList.add("fuera");
        st.style.transform = "translate(" + (st.offsetWidth * 1.4) + "px, 60px) rotate(32deg)";
        setTimeout(function () { st.hidden = true; }, quieto ? 0 : 600);
      }
      arrastre(st, "x", function () { return st.offsetWidth * 0.3; }, mover, soltar);
      st.addEventListener("click", function () { soltar(); });
    } };
  }

  /* ——— Planning: arrancar la hoja del calendario de escritorio ——— */
  function hoja(d, cfg) {
    var n = nota(cfg.nota);
    if (!cfg.revela) return null;
    var html = caja(d, cfg,
      '<div class="hoj">' +
      '<div class="hoj__debajo"><p class="hoj__l">Pa’ tu planificación</p><p class="hoj__t">' + esc(cfg.revela) + "</p>" + abrirNota(n) + "</div>" +
      '<button type="button" class="hoj__pagina" aria-label="Arrancar la hoja del calendario">' +
      '<span class="hoj__anillas" aria-hidden="true"></span><span class="hoj__mes">' + esc(cfg.mes || "") + '</span>' +
      '<span class="hoj__chico">Jala pa’ abajo y arráncala</span></button>' +
      "</div>");
    return { html: html, init: function (raiz) {
      var pg = $(".hoj__pagina", raiz), fuera = false;
      function mover(dy) { if (!fuera) { var y = Math.max(0, dy); pg.style.transform = "translateY(" + y * 0.5 + "px) rotate(" + (y / 24) + "deg)"; } }
      function soltar() {
        if (fuera) return; fuera = true;
        pg.classList.add("fuera");
        pg.style.transform = "translate(40px, 140%) rotate(18deg)";
        setTimeout(function () { pg.hidden = true; }, quieto ? 0 : 650);
      }
      arrastre(pg, "y", function () { return pg.offsetHeight * 0.18; }, mover, soltar);
      pg.addEventListener("click", function () { soltar(); });
    } };
  }

  /* ——— Data: quitar las tachaduras del expediente ——— */
  function secreto(d, cfg) {
    var n = nota(cfg.nota);
    if (!cfg.texto || cfg.texto.indexOf("[[") < 0) return null;
    var k = 0;
    var cuerpo = esc(cfg.texto).replace(/\[\[(.+?)\]\]/g, function (_, t) {
      return '<span class="sec__dato"><span class="sec__txt">' + t + '</span><button type="button" class="sec__barra" data-sec="' + (k++) + '" aria-label="Destapar el dato"></button></span>';
    });
    var html = caja(d, cfg,
      '<div class="sec"><p class="sec__sello" aria-hidden="true">Confidencial</p><p class="sec__texto">' + cuerpo + "</p></div>",
      '<span class="juego__ayuda">Pasa el dedo o el cursor por las tachaduras</span>' + abrirNota(n));
    return { html: html, init: function (raiz) {
      var barras = $$(".sec__barra", raiz), sello = $(".sec__sello", raiz);
      function quitar(b) {
        if (b.classList.contains("fuera")) return;
        b.classList.add("fuera"); b.setAttribute("tabindex", "-1"); b.setAttribute("aria-hidden", "true");
        if (barras.every(function (x) { return x.classList.contains("fuera"); })) { sello.textContent = "Desclasificado"; sello.classList.add("listo"); }
      }
      barras.forEach(function (b) {
        b.addEventListener("click", function () { quitar(b); });
        b.addEventListener("pointerenter", function () { quitar(b); });
      });
      // pasar el dedo por encima, en pantallas táctiles
      raiz.addEventListener("pointermove", function (e) {
        if (e.pointerType === "mouse") return;
        var el = document.elementFromPoint(e.clientX, e.clientY);
        if (el && el.classList && el.classList.contains("sec__barra")) quitar(el);
      });
    } };
  }

  var TIPOS = { raspadito: raspadito, prompt: prompt, pregunta: pregunta, etiqueta: etiqueta, hoja: hoja, secreto: secreto };

  function montar() {
    Object.keys(E.interactivos).forEach(function (d) {
      var cfg = E.interactivos[d], fn = cfg && TIPOS[cfg.tipo], pared = document.getElementById(d);
      if (!fn || !pared) return;
      var r = fn(d, cfg); if (!r) return;
      var cont = $(".pared__in", pared); if (!cont) return;
      cont.insertAdjacentHTML("beforeend", r.html);
      r.init(cont.lastElementChild);
    });
    window.dispatchEvent(new Event("resize")); // la página vuelve a medir las paredes
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(montar, 0); });
  else setTimeout(montar, 0);
})();
