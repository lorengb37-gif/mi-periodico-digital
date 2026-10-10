# CLAUDE.md · El Pulso Publicitario

Boletín diario de publicidad, mercadeo y ad tech para la gente de agencia en República Dominicana.

- **URL pública:** https://lorengb37-gif.github.io/mi-periodico-digital/
- **Repositorio:** lorengb37-gif/mi-periodico-digital (GitHub Pages publica la rama `main` tal cual)
- **Frecuencia:** diaria, 8:00 AM hora de Santo Domingo (GMT-4)
- **Idioma y tono:** español dominicano como el de Remolacha.net: criollo, con chispa y de tú a tú («pa'», «to'», «un chin», «¿Y eso en qué nos toca?»), pero **nunca vulgar**: sin malas palabras, sin doble sentido y sin burlas. Detalles y ejemplos en «Cómo se escribe» de `GUIA-EDITORIAL.md`.

## Cómo está armado

El diseño ya no se escribe a mano cada día. La página lee los datos de la edición desde un archivo y pinta todo sola.

```
index.html, app.js, estilos.css, calendario.js,
interactivos.js, interactivos.css, comun/, fuentes/, vendor/   ← diseño: NO SE TOCAN
contenido/archivo.js                ← lista de ediciones, la más nueva ARRIBA
contenido/ediciones/AAAA-MM-DD.js   ← una edición por día: window.EDICION = { ... }
herramientas/validar-edicion.js     ← revisa la edición antes de subirla
GUIA-EDITORIAL.md                   ← qué noticias van en cada departamento y dónde buscarlas
```

La edición del **2026-09-11** es la referencia completa: trae todos los campos, notas de Zoom a RD con `para` y los seis interactivos. Las ediciones del 12 de septiembre al 9 de octubre se migraron del diseño anterior y traen menos campos. **Usa como plantilla la del 11 de septiembre**, y la más reciente solo para no repetir noticias.

## Lo que se hace cada día

1. `git checkout main` y `git pull origin main`.
2. Lee `GUIA-EDITORIAL.md` completa y `contenido/ediciones/2026-09-11.js` (plantilla de estructura y tono).
3. **Busca noticias reales** de las últimas 24 a 72 horas, departamento por departamento. Usa las «Fuentes de siempre» y las «Búsquedas base» de la guía (las mismas del periódico anterior), más las fuentes propias de cada departamento:
   - **Content:** las tendencias de la semana en TikTok, Instagram, YouTube y X, y las funciones nuevas de las plataformas.
   - **Creatividad:** campañas destacadas, tendencias creativas y premios.
   - **Medios:** inventario, compra y medición.
   - **Planning:** consumidor, temporadas y datos.
   - **Data:** privacidad, regulación y medición.
   - **Zoom a RD:** solo mercado dominicano y **solo fuentes dominicanas** (las de la guía: Diario Libre, Listín, Remolacha, El Dinero, Revista Mercado, ADECC, Mitur, Banco Central…). Vale hasta una semana atrás. Cada nota lleva `para`, con los departamentos a los que les sirve.
4. **Abre cada fuente** con WebFetch para confirmar el dato, la fecha y la URL directa del artículo. Si no puedes abrir las fuentes (por ejemplo, la red falla), **no publiques**: deja la edición anterior, no hagas commit y reporta el error.
5. Crea `contenido/ediciones/<hoy AAAA-MM-DD>.js` con la misma estructura de la plantilla:
   - `numero` es el **día del año** de hoy: 1 de enero = 1, 31 de diciembre = 365 (366 en año bisiesto). Ejemplo: el 11 de octubre de 2026 es la 284.
   - `fechaISO` es la fecha de hoy. `fecha` va como «Domingo 11 de octubre 2026» y `fechaCorta` como «11 oct 2026».
   - En `notas`, cada nota trae `id` único sin espacios, `dep`, `peso` (una `principal` por departamento, las demás `secundaria`), `titular`, `corto` (titular corto de pizarra), `cuerpo`, `toca`, `hacer` (obligatorio en las principales), `cifras` si las hay y `fuentes` con enlaces `https` directos al artículo.
   - `pizarra` lleva los ids de las notas principales. Titular corto + «Lo que toca hacer» de todas debe leerse en 60 segundos o menos.
   - `consejo`: `tesis` (una frase de 150 caracteres o menos), `largo`, `corto` y `porDep` con un consejo por departamento.
   - `departamentos`: los mismos nombres y oficios de la plantilla; el `resumen` de cada uno con los temas del día.
   - 4 `frases`, la `encuesta` con una opción por departamento, y los `interactivos`.
6. Arma los `interactivos` **solo con datos de las notas de hoy**. Si no hay material para alguno, omítelo:
   - `etiqueta` (Medios): la `nota` debe tener `cifras`.
   - `raspadito` (Creatividad): no necesita datos.
   - `hoja` (Planning): `mes` y `revela`.
   - `secreto` (Data): un `texto` con los datos clave entre `[[ ]]`.
   - `prompt` (Content): solo si alguna nota trae una herramienta de IA; lleva `intro`, `opciones` y `cierre`.
   - `pregunta` (Zoom a RD): una sola pregunta, con 3 `opciones`, `correcta` (0, 1 o 2) y `explicacion`.
7. Agrega **arriba** de la lista en `contenido/archivo.js` la línea de hoy:
   `{ fecha: "2026-10-11", numero: 284, archivo: "ediciones/2026-10-11.js", portada: "Titular corto de la nota principal" },`
8. Corre `node herramientas/validar-edicion.js`. Si muestra errores, corrígelos y vuelve a correrlo. **No hagas commit mientras haya errores.**
9. `git add contenido/` y luego `git commit -m "📰 Pulso Publicitario · <día> de <Mes> <año> · <titular corto>"` y `git push origin main`.

## Reglas

**Debes:**
- Usar solo noticias reales con su fuente. Ni cifras, ni citas, ni fechas, ni nombres inventados.
- Escribir en dominicano, como Remolacha.net pero sin vulgaridad, y sin expresiones de otros países (nada de «comprá», «vale», «tío»).
- Escribir un «Lo que toca hacer» concreto para esta semana.
- Subir directo a `main`.

**No debes:**
- Modificar el diseño (`index.html`, `*.css`, `*.js` fuera de `contenido/`, `comun/`, `fuentes/`, `vendor/`).
- Borrar ni editar ediciones de días anteriores ni sus líneas en `archivo.js`, porque son el archivo del calendario.
- Crear ramas ni pull requests.
- Poner avisos sobre el número de edición.

## Si algo sale mal

- Si la página no puede cargar la edición más nueva, abre sola la anterior. Aun así, nunca subas una edición sin pasar el validador.
- Si el push a `main` falla, reporta el error y no crees una rama alternativa.
