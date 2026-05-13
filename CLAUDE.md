# CLAUDE.md · El Pulso Publicitario

## 📰 Sobre el proyecto

Newsletter diario HTML sobre noticias de publicidad, marketing y advertising tech.

- **URL pública:** https://lorengb37-gif.github.io/mi-periodico-digital/
- **Repositorio:** lorengb37-gif/mi-periodico-digital
- **Frecuencia:** Diaria, a las 8:00 AM (hora Santo Domingo, GMT-4)
- **Audiencia:** Equipos de agencia (planning, medios, creatividad, data)
- **Idioma:** Español (editorial juvenil + profesional)

---

## 🏗️ Estructura técnica del `index.html`

### Tecnologías utilizadas:
- **Framework CSS:** Tailwind via CDN (configurado inline)
- **Fonts:** Bricolage Grotesque + Fraunces + Inter + JetBrains Mono (Google Fonts)
- **JavaScript:** Vanilla JS para filtros interactivos y animaciones
- **Encoding:** UTF-8
- **Responsive:** Mobile-first con breakpoints md/lg

### ⛔ Componentes INTOCABLES (NO MODIFICAR JAMÁS):

#### Bloque `<head>` completo:
- Meta tags (charset, viewport, title)
- Preconnect a Google Fonts
- Link de Google Fonts (Bricolage Grotesque, Fraunces, Inter, JetBrains Mono)
- Script con `tailwind.config` (paleta de colores custom + font families)

#### Bloque `<style>` completo:
- Background y noise filter del body
- Scrollbar custom
- Animaciones: `marquee`, `float-slow`, `wiggle`, `pulse-dot`, `fadeUp`, `spin-slow`
- Clases custom: `.paper-card`, `.tape`, `.link-under`, `.btn-chunk`, `.chip`
- Clases custom: `.fun-dropcap`, `.highlight-sun`, `.highlight-lime`, `.squiggle`
- Clases custom: `.big-num`, `.fchip`, `.vinyl`, `.emoji-xl`, `.bar`
- Rotaciones: `.rot-n2`, `.rot-2`, `.rot-n4`, `.rot-4`
- Smooth scroll y selection styles

#### Bloque `<script>` final (al cierre del `<body>`):
- Lógica de filtros con `data-filter` y `data-category`
- Fechas dinámicas (día, mes, año)
- Cualquier listener de eventos

#### Atributos críticos en TODOS los elementos:
- Todas las clases CSS (paper-card, vinyl, chip, big-num, btn-chunk, etc.)
- Todos los `data-filter="..."` y `data-category="..."`
- Todos los `id="..."` de las secciones (#medios, #creatividad, #planning, #data, #content)
- La estructura jerárquica de `<section>` → `<div>` → `<article>`
- Los `target="_blank"` y `rel="noopener noreferrer"` en links externos

---

## ✏️ Componentes EDITABLES (sí actualizar diariamente):

### 1. Ticker superior con marquee
- 7 frases flash con emojis (máximo 60 caracteres c/u)
- ⚠️ Las frases están DUPLICADAS en el HTML para loop infinito
- Formato: `<span class="mx-6">[emoji] [frase]</span>`

### 2. Número de edición
- Incrementar +1 cada día
- Formato: `Edición N.º [número]`

### 3. Hero con fecha + nota del director
- Día del mes (mega número)
- Mes/año
- Día de la semana
- Editorial: título + 2 párrafos
- Tono: editorial juvenil + profesional

### 4. Sección Medios (3 noticias)
- Noticia principal (8 columnas)
- Noticia secundaria (4 columnas)
- Banner horizontal (12 columnas)

### 5. Sección Creatividad (2 noticias)
- Noticia principal (campaña del día)
- Tracker o noticia secundaria

### 6. Sección Planning (2 noticias)
- Noticia principal (movimiento de cuenta o pitch)
- Noticia secundaria (señales de mercado)

### 7. Sección Data (1-2 noticias)
- IA, privacy, medición, analytics, regulación

### 8. Sección Content & Social (1 noticia)
- Plataformas sociales, creators, video digital

### 9. Mood board (4 cards)
- 🎬 Card 1 (color verde lima)
- ⚽ Card 2 (color rosa)
- 🎯 Card 3 (color amarillo)
- 🚀 Card 4 (color mint)

### 10. Water cooler talk (4 frases)
- Frases listas para citar en conversaciones
- Cada una con color distinto

### 11. Footer
- Fuentes contadas del día
- Año y créditos

---

## ✅ Reglas de actualización diaria

### DEBES:
- ✅ Conservar TODO el CSS y JavaScript intactos
- ✅ Conservar todas las clases CSS, IDs y data-attributes
- ✅ Solo cambiar el contenido textual dentro de cada `<article>`
- ✅ Buscar noticias reales del día actual con `web_search`
- ✅ Incluir URLs verificadas a fuentes originales
- ✅ Incrementar el número de edición (+1 cada día)
- ✅ Actualizar fecha en el editorial al día de HOY
- ✅ Hacer push directo a `main` (no crear PRs)

### NO DEBES:
- ❌ Modificar `<head>`, `<style>`, scripts
- ❌ Inventar URLs, estadísticas o nombres de personas/empresas
- ❌ Cambiar estructura HTML de las cards
- ❌ Romper los filtros de categorías (data-filter, data-category)
- ❌ Eliminar o duplicar secciones
- ❌ Cambiar fonts, colores o layout
- ❌ Crear pull requests (push directo a main)
- ❌ Agregar dependencias o frameworks nuevos
- ❌ Modificar el favicon o título de la página

---

## 📝 Formato de cada noticia

Cada `<article>` con clase `paper-card` mantiene esta estructura:

```html
<article class="paper-card [otras-clases]" data-category="[categoria]">
  
  <!-- 1. Tape decorativo (opcional) -->
  <div class="tape [tape-color]"></div>
  
  <!-- 2. Chip con categoría -->
  <span class="chip" style="background:[color];">📺 Categoría · Sub-tema</span>
  
  <!-- 3. Titular potente -->
  <h3 class="font-display">
    Titular con <span class="font-editorial italic text-tomato">palabra destacada</span>
  </h3>
  
  <!-- 4. Bajada (2-3 líneas con datos concretos) -->
  <p class="font-editorial">
    Resumen de la noticia con cifras reales y fuente identificable.
  </p>
  
  <!-- 5. Stats visuales (opcional, cuando aplique) -->
  <div class="big-num">300M</div>
  
  <!-- 6. Bloque "Por qué importa" -->
  <p>Análisis estratégico para la agencia y sus clientes.</p>
  
  <!-- 7. Bloque "Acción sugerida" -->
  <div class="bg-sun border-2 border-ink p-5">
    <p>Qué hacer mañana o esta semana de forma concreta.</p>
  </div>
  
  <!-- 8. Links a fuentes reales (target="_blank" obligatorio) -->
  <a href="URL_REAL" target="_blank" rel="noopener noreferrer" class="btn-chunk">
    Leer fuente
  </a>
  
</article>
```

---

## 🎨 Paleta de colores (NO modificar)

```
butter: #FDF6E3  → Fondo principal
cream:  #F6EFE0  → Fondo alternativo
ink:    #141414  → Texto principal
slate:  #3D3D3D  → Texto secundario
stone:  #7A7268  → Texto terciario
rule:   #E5DECA  → Bordes suaves
tomato: #E8412D  → Rojo destacado (urgente, principal)
flame:  #FF6B35  → Naranja secundario
lime:   #C8E85D  → Verde lima (positivo, lead)
sky:    #4F97D1  → Azul (info, B2B)
plum:   #6B4E7D  → Morado (insights, planning)
sun:    #F5B700  → Amarillo (acción, alerta)
mint:   #A8E6CF  → Mint (data, oportunidad)
rose:   #FFB5C5  → Rosa (creatividad, soft)
```

---

## 🔍 Topics relevantes a buscar diariamente

### Siempre relevantes:
- IA en publicidad (ChatGPT, Claude, Gemini, Perplexity, Copilot)
- Plataformas: Meta, Google, TikTok, Amazon, Disney, Netflix
- Streaming + CTV: Prime Video, Tubi, Roku, Pluto TV, Max
- Privacy y regulación (Consent Mode, AI laws, FTC, CCPA)
- Movimientos de cuentas de agencias (pitch wins, RFPs)
- Campañas virales globales
- M&A en agencias y ad tech

### Estacional 2026:

- **Mayo-Junio:** Upfront Week (NBCU, Fox, Disney, WBD, Netflix, YouTube, Amazon)
- **Junio:** Cannes Lions Festival
- **Junio-Julio:** Mundial FIFA 2026 (campañas, sponsorships, derechos)
- **Septiembre:** Advertising Week NY
- **Octubre:** DMEXCO Cologne
- **Noviembre-Diciembre:** Holiday campaigns + Year in Review
- **Enero 2027:** CES Las Vegas + Super Bowl previews

### Topics evergreen para fallback:
- Programmatic advertising trends
- Retail media networks (Walmart Connect, Amazon Ads, Kroger)
- B2B advertising (LinkedIn, Microsoft)
- Creator economy ($)
- Sports media rights
- Brand safety y measurement

---

## 🗞️ Fuentes confiables (en orden de prioridad)

### Tier 1 (priorizar):
- **Ad Age** (adage.com) - Industria USA premium
- **AdWeek** (adweek.com) - Creatividad + medios
- **Campaign** (campaignlive.com) - Global, fuerte UK/Asia
- **The Drum** (thedrum.com) - Creativos y campañas
- **MediaPost** (mediapost.com) - Noticias diarias industria
- **Digiday** (digiday.com) - Tech + media + comerce
- **AdExchanger** (adexchanger.com) - Programmatic + data
- **WARC** (warc.com) - Research + data global

### Tier 2 (complementarias):
- **Marketing Brew** (morningbrew.com/marketing) - Newsletter daily
- **Marketing Dive** (marketingdive.com)
- **Reuters Marketing**
- **WSJ CMO Today**
- **BusinessWire** (press releases)
- **PR Newswire**

### Específicas por región:
- **India:** Exchange4Media, BestMediaInfo, Storyboard18
- **LATAM:** Marketing News LATAM, AdLatina, InformaBTL
- **UK/Europa:** Campaign UK, Marketing Week, Mobile Marketing Magazine
- **Asia:** Marketing-Interactive, Branding in Asia

### Específicas por categoría:
- **Tech/AI:** TechCrunch, The Verge, Wired
- **Streaming:** Variety, The Hollywood Reporter, Deadline
- **Social:** Social Media Today, Mobile Marketer
- **Sports:** Sports Business Journal, Front Office Sports

---

## 🎨 Notas de estilo editorial

### Tono:
- **Profesional pero juvenil** - como una agencia creativa moderna
- **Persona plural** - "hoy vimos", "esta semana arranca", "lo que importa"
- **Directo y accionable** - cada noticia debe tener un "qué hacer"

### Recursos de redacción:
- **Emojis:** Con moderación, máximo 1-2 por sección
- **Frases destacadas:** `<span class="font-editorial italic text-tomato">` para conceptos clave
- **Cifras:** Siempre en `big-num` cuando son protagonistas
- **Citas:** Cortas, máximo 15 palabras, entre comillas
- **Links:** Texto descriptivo, no "click aquí" o "leer más"

### Ejemplos de buenas frases:

#### Para titulares:
- ✅ `Adidas lanza "Backyard Legends": Chalamet + Messi + Bad Bunny`
- ❌ `Adidas tiene nueva campaña`

#### Para "Por qué importa":
- ✅ `El Mundial 2026 generará $10.5B en ad spend adicional global en Q2 (WARC). Las marcas que no activen ya van tarde.`
- ❌ `Es importante para la industria`

#### Para "Acción sugerida":
- ✅ `Workshop creativo de 90 min esta semana: analizar el modelo Backyard Legends con el equipo. Identificar 2-3 clientes que podrían aplicar cast crossover.`
- ❌ `Considerar esta tendencia`

---

## 🚀 Commit format

```
📰 Pulso Publicitario · [DD] de [Mes] 2026

[Opcional] Tema clave del día
```

### Ejemplos:
- `📰 Pulso Publicitario · 13 de Mayo 2026`
- `📰 Pulso Publicitario · 14 de Mayo 2026 · Cannes Lions arranca`
- `📰 Pulso Publicitario · 15 de Mayo 2026 · Disney Upfront ayer`

### Reglas:
- Mensaje en español
- Fecha siempre en formato `DD de [Mes] 2026`
- Push directo a `main` (NO crear pull requests)
- GitHub Pages se actualiza automáticamente en 30-60 segundos

---

## ⏰ Timing y cuota

- **Hora de ejecución programada:** 8:00 AM (Santo Domingo, GMT-4)
- **Tiempo estimado por run:** 5-8 minutos
- **Cuota Pro:** 5 routine runs/día disponibles
- **Uso esperado:** 1 run/día (margen de 4 runs para tests)

---

## 🆘 Troubleshooting

### Si el HTML se rompe en alguna sustitución:
1. NO hacer push
2. Reportar el error en logs de ejecución
3. Mantener la versión anterior del archivo
4. Generar un log claro de qué falló

### Si no hay suficientes noticias frescas:
1. Ampliar búsqueda a "this week" en lugar de "today"
2. Cambiar marcador visual de `🔥 HOY` a `⚡ Semana`
3. Cubrir noticias de los últimos 2-3 días
4. Mantener siempre 100% de las secciones con contenido

### Si GitHub Pages no se actualiza:
1. Verificar Settings → Pages → Source: main branch
2. Verificar que el archivo se llame exactamente `index.html`
3. Forzar deploy desde Actions tab si es necesario
4. Esperar 60 segundos completos antes de refrescar

### Si las búsquedas web fallan:
1. Reintentar con queries más amplias
2. Usar temas evergreen como fallback
3. Reportar en logs y mantener edición de ayer

---

## 📊 Métricas de calidad esperadas

Cada edición debe tener:
- ✅ 10-12 noticias totales distribuidas en 5 secciones
- ✅ 100% de links con URLs reales verificadas
- ✅ 100% de cifras con fuente identificable
- ✅ 4 cards de mood actualizadas
- ✅ 4 frases de water cooler nuevas
- ✅ Ticker con 7 frases del día
- ✅ Editorial coherente con la noticia principal
- ✅ Número de edición incrementado (+1)
- ✅ Fecha actualizada al día de HOY

---

## 🎯 Final check antes de hacer push

Antes de hacer commit, verificar mentalmente:

- [ ] ¿El `<head>` está intacto?
- [ ] ¿El `<style>` está intacto?
- [ ] ¿El `<script>` de filtros está intacto?
- [ ] ¿Cada noticia tiene URL real verificada?
- [ ] ¿El número de edición se incrementó?
- [ ] ¿La fecha del editorial es de HOY?
- [ ] ¿El ticker tiene 7 frases nuevas (duplicadas para el loop)?
- [ ] ¿Las stats vienen de fuentes reales?
- [ ] ¿Las clases CSS y data-attributes están intactos?
- [ ] ¿Los filtros de categoría funcionarían correctamente?

Si todo está OK → hacer commit + push. Si algo falla → NO hacer push, reportar.

---

**Última actualización:** Mayo 2026  
**Mantenido por:** Routine automático de Claude Code  
**Contacto humano:** lorengb37-gif (GitHub)
