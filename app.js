/* El Pulso Publicitario · Hoy Hay
   Todo se pinta desde window.EDICION (contenido/edicion.js). */
(function () {
  "use strict";

  var E = window.EDICION;
  var ORDEN = ["medios", "creatividad", "planning", "data", "content", "rd"];
  var PPS = 250 / 60; // palabras por segundo (250 por minuto, lectura media)
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  // ?quieto = sin movimiento (igual que reduced-motion); útil para capturas e impresión
  if (/[?&]quieto\b/.test(location.search)) {
    reduce = { matches: true };
    document.documentElement.classList.add("quieto");
  }
  var escritorio = window.matchMedia("(min-width: 1024px)"); // igual que el corte de escritorio del CSS

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function palabras(t) { return t ? String(t).trim().split(/\s+/).length : 0; }
  function ico(id) { return '<svg class="ico" aria-hidden="true"><use href="#i-' + id + '"/></svg>'; }
  function dominio(url) { try { return new URL(url).hostname.replace(/^www\./, ""); } catch (e) { return ""; } }
  function dep(id) { return E.departamentos[id]; }
  function notasDe(d) { return E.notas.filter(function (n) { return n.dep === d; }); }
  function nota(id) { for (var i = 0; i < E.notas.length; i++) if (E.notas[i].id === id) return E.notas[i]; return null; }

  function abrev(d) { return { medios: "MED", creatividad: "CRE", planning: "PLA", data: "DAT", content: "CON", rd: "RD" }[d] || d.slice(0, 3).toUpperCase(); }

  /* ——— piezas ——— */

  function fuentesHTML(n) {
    return n.fuentes.map(function (f) {
      return '<a class="fuente" href="' + esc(f.url) + '" target="_blank" rel="noopener">' +
        'Fuente: <span>' + esc(f.nombre) + '</span> <small>' + esc(dominio(f.url)) + '</small>' + ico("fuera") + '</a>';
    }).join("");
  }

  function textoCopia(n) {
    var d = dep(n.dep).nombre;
    return "Lo que toca hacer (" + d + " · El Pulso N.º " + E.numero + "): " + n.hacer +
      " — " + n.titular + ". Fuente: " + n.fuentes[0].nombre + " " + n.fuentes[0].url;
  }

  function tablero(n, completo) {
    var pri = n.peso === "principal";
    var largo = completo ? "" : " data-largo";
    var h = "";
    var tag = completo ? "h1" : "h3";
    var tit = completo
      ? esc(n.titular)
      : '<a href="#/nota/' + esc(n.id) + '">' + esc(n.titular) + "</a>";

    var cuerpo = '<p class="tablero__cuerpo"' + largo + ">" + esc(n.cuerpo) + "</p>";
    var precios = "";
    if (n.cifras && n.cifras.length && (pri || completo)) {
      precios = '<ul class="precios"' + largo + ">" + n.cifras.map(function (c) {
        return '<li class="precio"><b>' + esc(c.v) + "</b><span>" + esc(c.t) + "</span></li>";
      }).join("") + "</ul>";
    }
    var lista = "";
    if (n.lista && n.lista.length) {
      lista = '<div class="toca"' + largo + '><span class="toca__t">' + esc(n.listaTitulo || "Lo que eso dice del mercado") + "</span><ul>" +
        n.lista.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("") + "</ul></div>";
    }
    var toca = "";
    if (n.toca) {
      // en 60 s el «toca» solo se queda si la nota no trae «hacer»
      var attr = n.hacer ? largo : "";
      toca = '<div class="toca"' + attr + '><span class="toca__t">' + esc(n.tocaTitulo || "¿Y eso en qué nos toca?") + "</span><p>" + esc(n.toca) + "</p></div>";
    }
    var video = "";
    if (completo && n.video && n.video.src) {
      video = '<figure class="nota__video"><video controls preload="none" playsinline src="' + esc(n.video.src) + '"' +
        (n.video.poster ? ' poster="' + esc(n.video.poster) + '"' : "") + "></video>" +
        (n.video.pie ? "<figcaption>" + esc(n.video.pie) + "</figcaption>" : "") + "</figure>";
    }
    var hacer = "";
    if (n.hacer) {
      hacer = '<div class="hacer"><p class="hacer__t">Lo que toca hacer</p><p>' + esc(n.hacer) + "</p>" +
        '<button class="boton boton--chico" type="button" data-copiar="' + esc(textoCopia(n)) + '">' + ico("copiar") + "<span>Cópialo pa’l grupo</span></button></div>";
    }

    h += '<article class="tablero d-' + n.dep + (pri ? " tablero--pri" : " tablero--sec") + '" id="' + (completo ? "nota-tablero" : "n-" + esc(n.id)) + '">';

    h += "<" + tag + ">" + tit + "</" + tag + ">";
    if (n.fecha) h += '<p class="tablero__fecha">' + esc(n.fecha) + "</p>";
    // Zoom a RD: a qué departamentos le sirve la nota
    var para = (n.para || []).filter(function (p) { return p !== n.dep && dep(p); });
    if (para.length) h += '<p class="para"><span>Le sirve a</span>' + para.map(function (p) {
      return '<a class="para__dep c-' + p + '" href="#' + p + '">' + esc(dep(p).nombre) + "</a>";
    }).join("") + "</p>";
    if (completo) {
      h += video + '<p class="nota__seccion">Qué pasó</p>' + cuerpo + precios + lista + toca + hacer;
    } else if (pri) {
      h += '<div class="cuerpo-dos"><div>' + cuerpo + lista + toca + "</div><div>" + precios + "</div></div>" + hacer;
    } else {
      h += cuerpo + toca + hacer;
    }
    if (completo) {
      h += '<div class="origen"><p class="origen__l">¿De dónde viene?</p>' + n.fuentes.map(function (f) {
        return '<div class="origen__fuente"><div><b>' + esc(f.nombre) + "</b><small>" + esc(dominio(f.url)) + "</small></div>" +
          '<a class="boton boton--chico" href="' + esc(f.url) + '" target="_blank" rel="noopener">Sigue leyendo en ' + esc(f.nombre) + " " + ico("fuera") + "</a></div>";
      }).join("") + '<p class="etiquetas">' + esc((n.etiquetas || []).join(" · ")) + "</p></div>";
    } else {
      h += '<div class="pie-nota">' + fuentesHTML(n) +
        '<span class="etiquetas">' + esc((n.etiquetas || []).join(" · ")) + "</span>" +
        '<span class="pie-nota__der">' +
        '<a class="abrir" href="#/nota/' + esc(n.id) + '">Abrir nota ' + ico("flecha") + "</a></span></div>";
    }
    h += "</article>";
    return h;
  }

  /* ——— portada ——— */

  function cabeceraHTML() {
    var lineas = escritorio.matches ? ["El Pulso Publicitario"] : ["El Pulso", "Publicitario"];
    return lineas.map(function (l) { return '<span data-ajuste data-max="1.25">' + esc(l) + "</span>"; }).join("");
  }

  /* la escena: los seis letreros de departamento colgados en 3D */
  function escena() {
    var letreros = ORDEN.filter(function (d) { return notasDe(d).length; }).map(function (d) {
      return '<li><a class="letrero-html c-' + d + '" href="#' + d + '"><b>' + esc(dep(d).nombre) + "</b><span>" +
        notasDe(d).length + (notasDe(d).length === 1 ? " nota" : " notas") + "</span></a></li>";
    }).join("");
    var nFuentes = agruparFuentes().length;
    return '<section class="escena" id="portada" aria-labelledby="cabecera">' +
      '<canvas class="escena__lienzo" id="lienzo" aria-hidden="true"></canvas>' +
      '<div class="escena__marco">' +
      '<h1 class="pizarra__cabecera rot" id="cabecera">' + cabeceraHTML() + "</h1>" +
      '<p class="pizarra__fecha"><span>Edición <b>N.º ' + E.numero + '</b></span><span class="solo-ancho">' + esc(E.fecha) + '</span><span class="solo-movil">' + esc(E.fechaCorta) + "</span><span>" + esc(E.hora) + '</span><span class="solo-ancho">' +
      E.notas.length + " notas · " + nFuentes + " fuentes</span></p>" +
      '<ul class="letreros-html" aria-label="Departamentos de hoy">' + letreros + "</ul>" +
      '<button class="escena__pausa" type="button" id="escenaPausa" aria-pressed="false">' + ico("pausa") + '<span class="sr">Pausar la animación</span></button>' +
      "</div></section>";
  }

  function pizarra() {
    var ids = E.pizarra || E.notas.filter(function (n) { return n.peso === "principal"; }).map(function (n) { return n.id; });
    var filas = ids.map(function (id, i) {
      var n = nota(id); if (!n) return "";
      return '<li style="--i:' + i + '"><a class="renglon c-' + n.dep + '" href="#n-' + esc(n.id) + '">' +
        '<span class="renglon__dep" data-abr="' + esc(abrev(n.dep)) + '"><span>' + esc(dep(n.dep).nombre) + "</span></span>" +
        '<span class="renglon__tit">' + esc(n.corto || n.titular) + "</span>" +
        '<span class="renglon__ir">' + ico("flecha") + "</span></a></li>";
    }).join("");

    return '<section class="pizarra" id="hoy" aria-labelledby="hoy-t">' +
      '<div class="pizarra__marco" style="--n:' + ids.length + '">' +
      '<div class="pizarra__cuerpo"><div>' +
      '<h2 class="hoyhay" id="hoy-t">Hoy hay:</h2>' +
      '<ol class="lista-hoy">' + filas + "</ol>" +
      "</div>" +
      '<div class="pizarra__lado">' +
      '<p class="pizarra__intro">' + esc(E.intro) + "</p>" +
      '<div class="acciones">' +
      '<button class="boton" type="button" data-rapida aria-pressed="false">' + ico("flecha") + '<span class="txt-rapida-off">Vista rápida</span><span class="txt-rapida-on">Edición completa</span></button>' +
      '<a class="boton boton--hueco" href="#consejo">Empezar a leer ' + ico("abajo") + "</a>" +
      "</div>" +
      "</div></div></div></section>";
  }

  function consejo() {
    var C = E.consejo;
    return '<section class="pared consejo" id="consejo" aria-labelledby="consejo-t">' +
      '<div class="pared__in"><div>' +
      '<h2 class="consejo__l" id="consejo-t">Consejo del día</h2>' +
      '<p class="consejo__firma">' + esc(C.firma) + " · " + esc(E.fechaCorta) + " · " + esc(E.hora) + "</p></div>" +
      "<div>" +
      '<p class="consejo__tesis' + (C.tesis.length > 150 ? " consejo__tesis--larga" : "") + '">' + esc(C.tesis) + "</p>" +
      '<p class="consejo__largo" data-largo>' + esc(C.largo) + "</p>" +
      '<p class="consejo__largo" data-corto>' + esc(C.corto) + "</p>" +
      "</div></div></section>";
  }

  function pared(d) {
    var D = dep(d), ns = notasDe(d);
    if (!ns.length) return "";
    var pri = ns.filter(function (n) { return n.peso === "principal"; });
    var sec = ns.filter(function (n) { return n.peso !== "principal"; });
    var orden = pri.concat(sec);
    var grid = d === "rd" ? "rd" : (sec.length ? "" : "solo");
    var tip = E.consejo.porDep && E.consejo.porDep[d];
    var tipL = d === "rd" ? "Pa’ la gente de aquí" : "Consejo pa’ " + D.nombre;

    return '<section class="pared p-' + d + '" id="' + d + '" data-pared="' + d + '" aria-labelledby="t-' + d + '">' +
      '<div class="pared__in">' +
      '<div class="pared__cab">' +
      "<div>" +
      '<h2 class="pared__nombre rot" id="t-' + d + '"><span data-ajuste data-max="1.6">' + esc(D.nombre) + "</span></h2>" +
      (d === "rd" ? '<p class="rd__coord">18.47° N · 69.89° O · solo del patio</p>' : "") + "</div>" +
      '<div class="pared__datos">' +
      '<p class="pared__oficio">' + esc(D.oficio) + "</p>" +
      '<p class="pared__resumen" data-largo>' + esc(D.resumen) + "</p>" +
      '<p class="marbete"><span>' + ns.length + (ns.length === 1 ? " nota hoy" : " notas hoy") + "</span></p>" +
      "</div></div>" +
      (tip ? '<div class="consejo-dep"><span class="consejo-dep__l">' + esc(tipL) + '</span><p class="consejo-dep__t">' + esc(tip) + "</p></div>" : "") +
      '<div class="tablero-grid ' + grid + '">' + orden.map(function (n) { return tablero(n, false); }).join("") + "</div>" +
      "</div></section>";
  }

  function frases() {
    if (!E.frases || !E.frases.length) return "";
    return '<section class="pared consejo" id="frases" aria-labelledby="frases-t"><div class="pared__in" style="display:block">' +
      '<div class="frases-cab"><h2 class="rot" id="frases-t">Pa’ soltarlo en la reunión</h2>' +
      "<p>" + E.frases.length + " frases listas pa’ la reunión. Tócala pa’ copiarla.</p></div>" +
      '<div class="frases">' + E.frases.map(function (f) {
        return '<blockquote class="frase c-' + f.dep + '"><p>“' + esc(f.texto) + '”</p><footer><cite>' + esc(dep(f.dep).nombre) + " · " + esc(f.uso) + "</cite>" +
          '<button class="boton boton--chico" type="button" data-copiar="' + esc(f.texto) + '">' + ico("copiar") + "<span>Cópiala</span></button></footer></blockquote>";
      }).join("") + "</div></div></section>";
  }

  function cierre() {
    var Q = E.encuesta;
    var votos = Q.opciones.map(function (o) {
      return '<li><button class="voto c-' + o.id + '" type="button" data-voto="' + esc(o.id) + '" aria-pressed="false">' +
        '<span class="voto__caja">' + '<svg aria-hidden="true"><use href="#i-listo"/></svg></span>' +
        "<span>" + esc(o.texto) + "</span>" +
        '<span class="voto__dep">' + esc(dep(o.id) ? dep(o.id).nombre : "") + "</span></button></li>";
    }).join("");
    return '<section class="pared consejo" id="encuesta" aria-label="Encuesta y consejo a la suerte"><div class="pared__in" style="display:block"><div class="cierre-grid">' +
      '<div class="encuesta"><h2 class="rot">' + esc(Q.pregunta) + "</h2><p>" + esc(Q.nota) + "</p>" +
      '<ul class="votos">' + votos + '</ul><p class="encuesta__res" id="votoRes" aria-live="polite"></p></div>' +
      '<div class="suerte" aria-live="polite"><p class="suerte__l">Tu consejo, a la suerte</p>' +
      '<span class="suerte__dep" id="suerteDep"></span>' +
      '<p class="suerte__t" id="suerteT"></p>' +
      '<div class="acciones"><button class="boton boton--chico" type="button" id="suerteOtro">' + ico("dado") + "<span>Dame otro</span></button>" +
      '<button class="boton boton--chico boton--hueco" type="button" id="suerteCopiar">' + ico("copiar") + "<span>Cópialo pa’l grupo</span></button></div>" +
      "</div></div></div></section>";
  }

  function agruparFuentes() {
    var m = {}, lista = [];
    E.notas.forEach(function (n) {
      n.fuentes.forEach(function (f) {
        if (!m[f.nombre]) { m[f.nombre] = { nombre: f.nombre, dominio: dominio(f.url), items: [] }; lista.push(m[f.nombre]); }
        m[f.nombre].items.push({ n: n, url: f.url });
      });
    });
    return lista;
  }

  /* créditos: las fuentes suben como al final de un programa, pintadas en la pizarra */
  function pie() {
    var fs = agruparFuentes();
    return '<footer class="pie" id="fuentes"><div class="pared__in">' +
      '<div class="pie__cab"><h2 class="rot">De dónde salió lo de hoy</h2>' +
      '<p class="pie__sub">Cada nota de hoy y el medio donde salió primero. ' + fs.length + " fuentes, con su enlace.</p></div>" +
      '<div class="rollo" id="rollo">' +
      '<div class="rollo__ventana" tabindex="0" aria-label="Créditos: las fuentes de la edición"><div class="rollo__pista">' +
      fs.map(function (f) {
        return '<div class="cred"><p class="cred__n">' + esc(f.nombre) + '</p><p class="cred__d">' + esc(f.dominio) + "</p>" +
          f.items.map(function (it) {
            return '<a class="c-' + it.n.dep + '" href="' + esc(it.url) + '" target="_blank" rel="noopener"><i></i><span>' + esc(it.n.corto || it.n.titular) + "</span>" + ico("fuera") + "</a>";
          }).join("") + "</div>";
      }).join("") + "</div></div>" +
      '<button class="rollo__pausa" type="button" id="rolloPausa" aria-pressed="false">' + ico("pausa") + "<span>Detener los créditos</span></button>" +
      "</div>" +
      '<div class="colofon"><span><b>El Pulso Publicitario</b> · Edición N.º ' + E.numero + " · " + esc(E.fecha) + "</span>" +
      "<span>Publicación automática diaria · " + esc(E.hora) + " · " + esc(E.lugar) + "</span>" +
      "<span>© " + new Date().getFullYear() + " El Pulso Publicitario</span></div>" +
      "</div></footer>";
  }

  function nav() {
    $("#fachadaNum").textContent = "N.º " + E.numero;
    $("#paredesNav").innerHTML = ORDEN.filter(function (d) { return notasDe(d).length; }).map(function (d) {
      return '<a class="pared-tab c-' + d + '" href="#' + d + '" data-tab="' + d + '"><span class="pared-tab__pinta"></span>' +
        esc(dep(d).nombre) + '<span class="pared-tab__n">' + notasDe(d).length + "</span></a>";
    }).join("");
    $("#zocalo").innerHTML = ORDEN.filter(function (d) { return notasDe(d).length; }).map(function (d) {
      return '<span class="c-' + d + '" data-zocalo="' + d + '"><i></i></span>';
    }).join("");
  }

  /* ——— nota individual ——— */

  function notaHTML(n) {
    var D = dep(n.dep);
    var hilo = n.hilo ? E.notas.filter(function (o) { return o.hilo === n.hilo && o.id !== n.id; }) : [];
    var mismas = notasDe(n.dep).filter(function (o) { return o.id !== n.id && hilo.indexOf(o) < 0; });
    var i = E.notas.indexOf(n);
    var sig = E.notas[(i + 1) % E.notas.length];

    mismas = mismas.slice(0, 3);
    function fila(o) {
      return '<li><a class="c-' + o.dep + '" href="#/nota/' + esc(o.id) + '"><span class="renglon__dep">' + esc(dep(o.dep).nombre) + "</span>" +
        '<span class="relacion__t">' + esc(o.titular) + "</span>" + ico("flecha") + "</a></li>";
    }
    function grupo(titulo, lista) {
      if (!lista.length) return "";
      return '<h3 class="relacion__por">' + esc(titulo) + '</h3><ul class="relacion__lista">' + lista.map(fila).join("") + "</ul>";
    }
    var vistas = [n].concat(hilo, mismas);
    for (var k = 1; vistas.indexOf(sig) >= 0 && k < E.notas.length; k++) sig = E.notas[(i + 1 + k) % E.notas.length];
    var rel = grupo("Mismo hilo: " + n.hilo, hilo) + grupo("Más de " + D.nombre, mismas) +
      (vistas.indexOf(sig) < 0 ? grupo("Siguiente en la edición", [sig]) : "");

    return '<div class="nota__pared p-' + n.dep + '">' +
      '<div class="nota__barra"><a class="boton boton--chico volver" href="#n-' + esc(n.id) + '">' + ico("atras") + "<span>Volver a la edición</span></a></div>" +
      '<p class="nota__dep rot" aria-hidden="true"><span data-ajuste data-max="1.4">' + esc(D.nombre) + "</span></p>" +
      '<p class="nota__meta">Edición N.º ' + E.numero + " · " + esc(E.fechaCorta) + "</p></div>" +
      '<div class="nota__tablero">' + tablero(n, true) + "</div>" +
      '<nav class="relacion" aria-labelledby="rel-t"><h2 class="rot" id="rel-t">Pa’ seguir</h2>' + rel + "</nav>";
  }

  /* ——— rotulado ajustado al tablero ——— */

  function medir(el) {
    var txt = el.getAttribute("data-texto") || el.textContent;
    el.setAttribute("data-texto", txt);
    if (!el.firstElementChild) el.innerHTML = '<span style="display:inline-block">' + esc(txt) + "</span>";
    var inner = el.firstElementChild;
    el.classList.add("sin-anim");
    el.style.fontSize = "";
    var base = parseFloat(getComputedStyle(el).fontSize);
    var max = parseFloat(el.getAttribute("data-max") || "1.3");
    var ancho = el.clientWidth - base * 0.06;
    function w(x) { el.style.setProperty("--wdth", x); return inner.getBoundingClientRect().width; }
    var lo = 62, hi = 125, wd = 62;
    if (w(hi) <= ancho) wd = hi;
    else if (w(lo) > ancho) wd = lo;
    else {
      for (var k = 0; k < 9; k++) { var mid = (lo + hi) / 2; if (w(mid) <= ancho) lo = mid; else hi = mid; }
      wd = lo;
    }
    var size = base;
    var ww = w(wd);
    if (ww > ancho) size = base * ancho / ww;
    else if (wd === 125 && ww < ancho) size = Math.min(base * max, base * ancho / ww);
    return { wd: Math.round(wd * 10) / 10, size: size };
  }

  function ajustar(el, animar) {
    var r = medir(el);
    if (animar && !reduce.matches) {
      el.style.setProperty("--wdth", 125);
      el.style.fontSize = r.size + "px";
      void el.offsetWidth;
      el.classList.remove("sin-anim");
      setTimeout(function () { el.style.setProperty("--wdth", r.wd); }, 30);
    } else {
      el.style.setProperty("--wdth", r.wd);
      el.style.fontSize = r.size + "px";
      void el.offsetWidth;
      el.classList.remove("sin-anim");
    }
  }

  var vistos = new WeakSet();
  var obsAjuste = "IntersectionObserver" in window ? new IntersectionObserver(function (ents) {
    ents.forEach(function (e) {
      if (e.isIntersecting && !vistos.has(e.target)) {
        vistos.add(e.target);
        ajustar(e.target, true);
        obsAjuste.unobserve(e.target);
      }
    });
  }, { threshold: 0.35 }) : null;

  function prepararAjustes(root) {
    $$("[data-ajuste]", root).forEach(function (el) {
      if (obsAjuste && !reduce.matches) {
        // se queda ancho, recortado, hasta que entra: ahí el pintor lo ajusta
        var r = medir(el);
        el.style.fontSize = r.size + "px";
        el.style.setProperty("--wdth", 125);
        void el.offsetWidth;
        el.classList.remove("sin-anim");
        obsAjuste.observe(el);
      } else {
        ajustar(el, false);
      }
    });
  }
  function reajustarTodo() {
    $$("[data-ajuste]").forEach(function (el) {
      if (!obsAjuste || vistos.has(el) || reduce.matches) ajustar(el, false);
    });
  }

  /* ——— vista rápida: el interruptor lo maneja Pulso.rapida; aquí solo se re-mide ——— */
  document.addEventListener("pulso:rapida", function () { medirParedes(); });

  /* ——— letreros 3D (three.js) ——— */

  function letreros3D() {
    var lienzo = $("#lienzo"), seccion = $("#portada");
    if (!lienzo || !window.THREE || !window.Pulso || !Pulso.hayWebGL()) return;
    var T = window.THREE;
    document.documentElement.classList.add("con-3d");
    var renderer = new T.WebGLRenderer({ canvas: lienzo, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputEncoding = T.sRGBEncoding;
    var scene = new T.Scene();
    var cam = new T.PerspectiveCamera(32, 1, 0.1, 100);
    cam.position.set(0, 0, 16);
    scene.add(new T.HemisphereLight(0xffffff, 0x2a2a2a, 0.85));
    var luz = new T.DirectionalLight(0xffffff, 0.75); luz.position.set(-4, 6, 8); scene.add(luz);

    var deps = ORDEN.filter(function (d) { return notasDe(d).length; });
    var COLORES = { medios: "#5E6B3E", creatividad: "#8C4E32", planning: "#4A5A80", data: "#3A3531", content: "#6E5A80", rd: "#A24B47" }; // tono hondo: banda, filete y letra

    // cada letrero es un tablero blanco con la banda de su departamento, como las tarjetas de las frases
    function textura(d) {
      var c = document.createElement("canvas"); c.width = 1024; c.height = 512;
      var x = c.getContext("2d");
      x.fillStyle = "#FBF8F3"; x.fillRect(0, 0, 1024, 512);
      for (var i = 0; i < 2200; i++) {
        x.fillStyle = "rgba(60,45,30," + (Math.random() * 0.05) + ")";
        x.fillRect(Math.random() * 1024, Math.random() * 512, 2, 2);
      }
      x.fillStyle = COLORES[d]; x.fillRect(0, 0, 1024, 46);
      x.strokeStyle = COLORES[d]; x.lineWidth = 5; x.strokeRect(24, 24, 976, 464);
      var nombre = dep(d).nombre.toUpperCase();
      x.font = '800 220px "Archivo", sans-serif'; x.textBaseline = "alphabetic";
      var w = x.measureText(nombre).width, max = 860, s = Math.min(1, max / w);
      x.save(); x.translate(512, 340); x.scale(s, 1);
      x.fillStyle = "#E9E4DB"; x.textAlign = "center"; x.fillText(nombre, 11, 11);
      x.fillStyle = COLORES[d]; x.fillText(nombre, 0, 0);
      x.restore();
      x.font = '700 38px "Archivo", sans-serif'; x.fillStyle = "#1F1C19"; x.textAlign = "center";
      var n = notasDe(d).length;
      x.fillText((n + (n === 1 ? " NOTA HOY" : " NOTAS HOY")), 512, 438);
      var tx = new T.CanvasTexture(c); tx.encoding = T.sRGBEncoding; tx.anisotropy = 4;
      return tx;
    }

    var W = 4.2, H = 2.1, D = 0.12;
    var geo = new T.BoxGeometry(W, H, D);
    var hilo = new T.LineBasicMaterial({ color: 0x5a534b, transparent: true, opacity: 0.7 });
    var piezas = deps.map(function (d) {
      var cara = new T.MeshStandardMaterial({ map: textura(d), roughness: 0.55, metalness: 0.05 });
      var canto = new T.MeshStandardMaterial({ color: new T.Color(COLORES[d]).multiplyScalar(0.7), roughness: 0.7 });
      var mesh = new T.Mesh(geo, [canto, canto, canto, canto, cara, canto]);
      var pivote = new T.Group(); // el punto de donde cuelga
      mesh.position.y = -H / 2 - 0.9;
      pivote.add(mesh);
      var g = new T.BufferGeometry().setFromPoints([new T.Vector3(-W * 0.38, 0, 0), new T.Vector3(-W * 0.38, -0.9, 0), new T.Vector3(W * 0.38, 0, 0), new T.Vector3(W * 0.38, -0.9, 0)]);
      pivote.add(new T.LineSegments(g, hilo));
      scene.add(pivote);
      mesh.userData.dep = d;
      return { d: d, pivote: pivote, mesh: mesh, ax: 0, vx: 0, az: 0, vz: 0, fase: Math.random() * 6 };
    });

    // los letreros cuelgan en el espacio libre entre la fecha y la pista, nunca sobre la cabecera
    function colocar() {
      var w = lienzo.clientWidth, h = lienzo.clientHeight;
      renderer.setSize(w, h, false);
      cam.aspect = w / h; cam.updateProjectionMatrix();
      var rc = lienzo.getBoundingClientRect();
      var fecha = $(".escena .pizarra__fecha"), pista = $(".escena__pausa");
      var yArriba = fecha ? fecha.getBoundingClientRect().bottom - rc.top + 24 : h * 0.3;
      var yAbajo = pista ? pista.getBoundingClientRect().top - rc.top - 12 : h - 40;
      var visH = 2 * Math.tan(T.MathUtils.degToRad(cam.fov / 2)) * cam.position.z, visW = visH * cam.aspect;
      var u = visH / h; // unidades del mundo por píxel
      var ancho = w >= 900;
      var cols = ancho ? 3 : 2, filas = Math.ceil(piezas.length / cols);
      var celdaW = W + 0.6, celdaH = H + 0.9 + 0.5; // letrero + hilo + aire
      var dispW = (w - 32) * u, dispH = Math.max(80, yAbajo - yArriba) * u;
      var escala = Math.min(dispW / (cols * celdaW), dispH / (filas * celdaH), 1.15);
      var top = (0.5 - yArriba / h) * visH; // y del mundo donde empieza el bloque
      var bloqueW = cols * celdaW * escala, bloqueH = filas * celdaH * escala;
      var top0 = top - Math.max(0, (dispH - bloqueH) / 2);
      piezas.forEach(function (p, i) {
        var c = i % cols, f = Math.floor(i / cols);
        p.pivote.scale.setScalar(escala);
        p.pivote.position.set(-bloqueW / 2 + (c + 0.5) * celdaW * escala, top0 - f * celdaH * escala, 0);
      });
      void visW;
    }

    // cursor: empuja los letreros que toca
    var ray = new T.Raycaster(), ptr = new T.Vector2(-9, -9), prev = null, sobre = null;
    function alMover(e) {
      var r = lienzo.getBoundingClientRect();
      ptr.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      ptr.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      var v = prev ? { x: ptr.x - prev.x, y: ptr.y - prev.y } : { x: 0, y: 0 };
      prev = { x: ptr.x, y: ptr.y };
      ray.setFromCamera(ptr, cam);
      var hit = ray.intersectObjects(piezas.map(function (p) { return p.mesh; }))[0];
      sobre = hit ? hit.object : null;
      seccion.style.cursor = sobre ? "pointer" : "";
      if (hit) {
        var p = piezas.filter(function (q) { return q.mesh === hit.object; })[0];
        p.vz += -v.x * 1.6;
        p.vx += v.y * 1.1 + 0.004;
      }
    }
    seccion.addEventListener("pointermove", alMover);
    seccion.addEventListener("click", function (e) {
      if (e.target.closest("a,button")) return;
      if (sobre) { var t = document.getElementById(sobre.userData.dep); if (t) t.scrollIntoView({ behavior: reduce.matches ? "auto" : "smooth" }); }
    });

    var pausado = false, visible = true, scrollP = 0, t0 = performance.now();
    var btn = $("#escenaPausa");
    if (btn) btn.addEventListener("click", function () {
      pausado = !pausado;
      btn.setAttribute("aria-pressed", pausado ? "true" : "false");
      btn.innerHTML = ico(pausado ? "play" : "pausa") + '<span class="sr">' + (pausado ? "Reanudar" : "Pausar") + " la animación</span>";
      if (!pausado) loop();
    });
    if ("IntersectionObserver" in window) new IntersectionObserver(function (es) {
      visible = es[0].isIntersecting; if (visible) loop();
    }).observe(seccion);
    window.addEventListener("scroll", function () {
      var r = seccion.getBoundingClientRect();
      scrollP = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height)));
    }, { passive: true });
    window.addEventListener("resize", colocar);

    var corriendo = false;
    function paso(t) {
      var s = (t - t0) / 1000;
      piezas.forEach(function (p, i) {
        // péndulo amortiguado + brisa
        var brisa = reduce.matches ? 0 : Math.sin(s * 0.9 + p.fase) * 0.0009;
        p.vz += -p.az * 0.045 + brisa; p.vz *= 0.94; p.az += p.vz;
        p.vx += -p.ax * 0.05; p.vx *= 0.93; p.ax += p.vx;
        p.az = Math.max(-0.7, Math.min(0.7, p.az)); p.ax = Math.max(-0.5, Math.min(0.5, p.ax));
        p.pivote.rotation.z = p.az; p.pivote.rotation.x = p.ax;
        // al bajar, los letreros suben y se abren hacia los lados
        p.pivote.position.z = -scrollP * 6 * (1 + (i % 3) * 0.3);
        p.mesh.rotation.y = scrollP * (i % 2 ? 0.6 : -0.6);
      });
      renderer.render(scene, cam);
    }
    function loop() {
      if (corriendo) return; corriendo = true;
      requestAnimationFrame(function f(t) {
        paso(t);
        if (!pausado && visible && !reduce.matches) requestAnimationFrame(f); else corriendo = false;
      });
    }
    colocar();
    // entrada: los letreros caen desde arriba y se mecen
    if (!reduce.matches) piezas.forEach(function (p, i) { p.vz = (i % 2 ? 1 : -1) * (0.03 + i * 0.006); p.vx = 0.02; });
    loop();
    if (reduce.matches) paso(performance.now());
  }

  /* ——— copiar ——— */

  function copiar(texto, boton) {
    function listo() {
      avisar("Copiado pa’l grupo");
      if (boton) {
        var s = boton.querySelector("span"), antes = s ? s.textContent : "";
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

  var tAviso;
  function avisar(t) {
    var a = $("#aviso");
    a.textContent = t;
    a.classList.add("ver");
    clearTimeout(tAviso);
    tAviso = setTimeout(function () { a.classList.remove("ver"); }, 1800);
  }

  /* ——— encuesta ——— */

  function votar(id, silencio) {
    $$(".voto").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-voto") === id ? "true" : "false"); });
    var o = E.encuesta.opciones.filter(function (x) { return x.id === id; })[0];
    $("#votoRes").textContent = o ? "Te llevas: " + o.texto + ". Guardao en tu navegador." : "";
    try { localStorage.setItem("pulso-voto", JSON.stringify({ edicion: E.fechaISO, id: id })); } catch (e) {}
    if (!silencio && o) avisar("Anotao");
  }

  /* ——— consejo a la suerte ——— */

  var suerteUlt = null;
  function suerte() {
    var claves = Object.keys(E.consejo.porDep || {});
    if (!claves.length) return;
    var k;
    do { k = claves[Math.floor(Math.random() * claves.length)]; } while (claves.length > 1 && k === suerteUlt);
    suerteUlt = k;
    var t = $("#suerteT"), d = $("#suerteDep");
    t.classList.add("cambia");
    setTimeout(function () {
      d.textContent = k === "rd" ? "Pa’ la gente de aquí" : "Para " + dep(k).nombre;
      d.className = "suerte__dep c-" + k;
      t.textContent = E.consejo.porDep[k];
      t.classList.remove("cambia");
    }, reduce.matches ? 0 : 200);
  }

  /* ——— zócalo y pared actual ——— */

  var paredes = [];
  function medirParedes() {
    paredes = $$("[data-pared]").map(function (s) {
      var r = s.getBoundingClientRect();
      return { id: s.getAttribute("data-pared"), top: r.top + window.scrollY, h: r.height };
    });
    paredes.forEach(function (p) {
      var z = $('[data-zocalo="' + p.id + '"]');
      if (z) z.style.flex = p.h + " 1 0";
    });
    alScroll();
  }
  var pedido = false;
  function alScroll() {
    pedido = false;
    if ($("#edicion").hidden) return;
    var mid = window.scrollY + window.innerHeight * 0.4, actual = null;
    paredes.forEach(function (p) {
      var prog = Math.max(0, Math.min(1, (window.scrollY + window.innerHeight * 0.6 - p.top) / p.h));
      var z = $('[data-zocalo="' + p.id + '"] i');
      if (z) z.style.width = (prog * 100) + "%";
      if (mid >= p.top && mid < p.top + p.h) actual = p.id;
    });
    marcarTab(actual);
  }
  function marcarTab(id) {
    $$("[data-tab]").forEach(function (t) {
      var on = t.getAttribute("data-tab") === id;
      if (on && t.getAttribute("aria-current") !== "true") {
        t.setAttribute("aria-current", "true");
        var nav = $("#paredesNav");
        var l = t.offsetLeft - 12;
        if (l < nav.scrollLeft || t.offsetLeft + t.offsetWidth > nav.scrollLeft + nav.clientWidth) nav.scrollTo({ left: l, behavior: reduce.matches ? "auto" : "smooth" });
      } else if (!on) t.removeAttribute("aria-current");
    });
  }

  /* ——— rutas ——— */

  var scrollEdicion = 0;
  function ruta() {
    var h = decodeURIComponent(location.hash || "");
    var m = h.match(/^#\/nota\/([\w-]+)/);
    var main = $("#edicion"), art = $("#nota");
    function cambiar(fn) {
      if (document.startViewTransition && !reduce.matches) document.startViewTransition(fn);
      else fn();
    }
    if (m && nota(m[1])) {
      var n = nota(m[1]);
      if (!main.hidden) scrollEdicion = window.scrollY;
      cambiar(function () {
        art.innerHTML = notaHTML(n);
        main.hidden = true; art.hidden = false;
        window.scrollTo(0, 0);
        document.title = n.titular + " · El Pulso Publicitario";
        marcarTab(n.dep);
        $$("#zocalo i").forEach(function (i) { i.style.width = "0%"; });
        prepararAjustes(art);
        art.focus({ preventScroll: true });
      });
      return;
    }
    var volviendo = main.hidden;
    var destino = h && h.length > 1 && h.charAt(1) !== "/" ? document.getElementById(h.slice(1)) : null;
    if (volviendo) {
      cambiar(function () {
        art.hidden = true; art.innerHTML = ""; main.hidden = false;
        document.title = "El Pulso Publicitario · Edición N.º " + E.numero;
        medirParedes();
        if (destino) destino.scrollIntoView(); else window.scrollTo(0, scrollEdicion);
      });
    } else if (destino) {
      destino.scrollIntoView({ behavior: reduce.matches ? "auto" : "smooth" });
    } else if (h === "#/" ) {
      window.scrollTo({ top: 0, behavior: reduce.matches ? "auto" : "smooth" });
    }
  }

  /* ——— arranque ——— */

  function pintar() {
    nav();
    $("#edicion").innerHTML = escena() + pizarra() + consejo() + ORDEN.map(pared).join("") + frases() + cierre() + pie();
    document.title = "El Pulso Publicitario · Edición N.º " + E.numero;
  }

  function eventos() {
    document.addEventListener("click", function (e) {
      // copiar y vista rápida los atiende Pulso (comun/pulso.js)
      var v = e.target.closest("[data-voto]");
      if (v) { votar(v.getAttribute("data-voto")); return; }
      if (e.target.closest("#suerteOtro")) { suerte(); return; }
      if (e.target.closest("#suerteCopiar")) { copiar($("#suerteT").textContent + " — El Pulso N.º " + E.numero, e.target.closest("button")); return; }
    });
    window.addEventListener("hashchange", ruta);
    window.addEventListener("scroll", function () { if (!pedido) { pedido = true; requestAnimationFrame(alScroll); } }, { passive: true });
    var tR;
    window.addEventListener("resize", function () {
      clearTimeout(tR);
      tR = setTimeout(function () { reajustarTodo(); medirParedes(); }, 150);
    });
    escritorio.addEventListener("change", function () {
      var h1 = $("#cabecera");
      if (h1) { h1.innerHTML = cabeceraHTML(); $$("[data-ajuste]", h1).forEach(function (el) { ajustar(el, false); }); }
    });
  }

  function arrancar() {
    pintar();
    eventos();
    Pulso.rapida.set(Pulso.rapida.get(), true);
    try {
      var v = JSON.parse(localStorage.getItem("pulso-voto") || "null");
      if (v && v.edicion === E.fechaISO) votar(v.id, true);
    } catch (e) {}
    suerte();
    if (!reduce.matches) document.body.classList.add("pinta-entrada");

    // créditos: se detienen con el botón, al pasar el cursor o al enfocar un enlace
    var rollo = $("#rollo"), rp = $("#rolloPausa");
    if (rollo && rp) rp.addEventListener("click", function () {
      var on = !rollo.classList.contains("detenido");
      rollo.classList.toggle("detenido", on);
      rp.setAttribute("aria-pressed", on ? "true" : "false");
      rp.innerHTML = ico(on ? "play" : "pausa") + "<span>" + (on ? "Seguir los créditos" : "Detener los créditos") + "</span>";
    });

    // fonts.ready puede resolverse antes de pedir Archivo: se pide explícito
    var listo = document.fonts && document.fonts.load
      ? Promise.all([document.fonts.load('800 100px "Archivo"'), document.fonts.load('400 40px "Yellowtail"')]).then(function () { return document.fonts.ready; }, function () {})
      : Promise.resolve();
    if (document.fonts && document.fonts.addEventListener) {
      document.fonts.addEventListener("loadingdone", function () { reajustarTodo(); medirParedes(); });
    }
    // la ruta y el rotulado no esperan por las fuentes; se reajustan cuando llegan
    prepararAjustes($("#edicion"));
    ruta();
    medirParedes();
    listo.then(function () { reajustarTodo(); medirParedes(); });

    // preloader: el número de la edición se pinta contando
    var pre = $("#precarga"), num = $("#precargaNum");
    Pulso.preloader(pre, function (p) {
      if (num) num.textContent = String(Math.round(p * E.numero)).padStart(3, "0");
    }, function () {
      Pulso.tipografiasListas(['800 100px "Archivo"']).then(function () { try { letreros3D(); } catch (e) { document.documentElement.classList.remove("con-3d"); } });
    });
    setTimeout(function () { reajustarTodo(); medirParedes(); }, 1500);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arrancar);
  else arrancar();
})();
