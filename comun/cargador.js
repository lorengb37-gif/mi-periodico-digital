/* El Pulso Publicitario · cargador de ediciones
   Decide qué edición se lee y carga su archivo antes que el resto de la página.
   Orden: ?edicion=AAAA-MM-DD en la dirección > la que escogiste en el calendario > la más nueva.
   Respaldo: si el archivo de una edición no carga o viene dañado, abre la anterior. */
(function () {
  "use strict";
  var A = window.ARCHIVO || [];
  if (!A.length) return;
  var pedida = null;
  var m = /[?&]edicion=(\d{4}-\d{2}-\d{2})/.exec(location.search);
  if (m) pedida = m[1];
  if (!pedida) {
    try { pedida = sessionStorage.getItem("pulso-edicion"); } catch (e) {}
  }
  var i = 0;
  for (var k = 0; k < A.length; k++) if (A[k].fecha === pedida) { i = k; break; }

  function cargar() {
    window.EDICION_ELEGIDA = A[i];
    window.EDICION_ES_LA_ULTIMA = i === 0;
    // se escribe durante la carga para que la edición exista antes que el resto de scripts
    document.write('<script src="contenido/' + A[i].archivo + '"><\/script><script>PulsoRespaldo()<\/script>');
  }
  window.PulsoRespaldo = function () {
    var E = window.EDICION;
    if (E && E.fechaISO === A[i].fecha && E.notas && E.notas.length) return;
    window.EDICION = undefined;
    if (++i < A.length) cargar();
  };
  cargar();
})();
