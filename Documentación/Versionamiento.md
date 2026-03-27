# 📝 Historial de Cambios — Midnight Ingenium Casino

Todos los cambios relevantes del proyecto se documentan en este archivo siguiendo el estándar [Keep a Changelog](https://keepachangelog.com/es/).

---

## [2.0.0] - 27-03-2026 — Refactorización Total

> 🚀 **Versión mayor** — Reescritura completa de todos los módulos con estética unificada, juegos funcionales, sistema de apuestas deportivas y cobertura de los 28 temas del curso html6.es.

---

### ✨ Nuevas Funcionalidades

#### 🎰 Juegos de Casino
- **Ruleta Europea** (`juegos/ruleta.html`) — dibujada completamente con **Canvas API**, con animación de giro con easing, 37 números, fichas de apuesta ($1–$500), apuestas externas (rojo/negro, par/impar, docenas) e historial de resultados.
- **Blackjack 21** (`juegos/blackjack.html`) — cartas generadas dinámicamente con **SVG inline**, lógica completa con pedir, plantarse, doblar y Blackjack natural (paga 2.5x).
- **Slots Épicos** (`juegos/slots.html`) — 5 rodillos con animación **CSS @keyframes**, 10 símbolos con pesos de aparición, jackpot progresivo, tabla de pagos y selección de líneas.
- **Crash Game** (`juegos/crash.html`) — gráfica en tiempo real con **Canvas**, curva exponencial animada, auto cash-out, historial de rondas con badges de color y distribución de crash realista.
- **Casino en Vivo** (`juegos/en-vivo.html`) — 4 mesas con **iframe YouTube**, contador de jugadores online simulado con variación dinámica cada 5 segundos.

#### ⚽ Apuestas Deportivas
- **Apuestas en Vivo** (`apuestas-deportivas/apuestas-en-vivo.html`) — 4 eventos multideporte con badge EN VIVO parpadeante, marcadores, cuotas con **fluctuación automática cada 4 segundos** y betslip flotante.
- **Baloncesto** (`apuestas-deportivas/baloncesto.html`) — video de partido NBA real via **iframe YouTube**, marcador animado con actualización automática de puntos, eventos NBA y EuroLeague.
- **eSports** (`apuestas-deportivas/esports.html`) — CS2, LoL, Valorant, Dota 2 y FIFA con **filtros por juego**, tags de color por disciplina y video destacado.

#### 🤝 Afiliados
- **Panel de Afiliado** (`afiliados/panel.html`) — dashboard completo con métricas, barra de progreso de nivel, tabla de referidos, enlace único con botón copiar/compartir (`navigator.clipboard`, `navigator.share`) y solicitud de retiro.
- **Registro Afiliado** (`afiliados/registro-afiliado.html`) — formulario externo **Formspree** con campo de plataforma de promoción, método de pago preferido y validación de contraseñas.
- **Index Afiliados** (`afiliados/index.html`) — presentación con estadísticas, pasos numerados con `position absolute` y tabla de niveles (Bronce → Diamante).

#### ⚙️ Configuración
- **tema.html** (`configuracion/tema.html`) — toggles de preferencias persistidos en **localStorage**, campos de perfil con `contenteditable="true"`, visualizador del storage en tiempo real y opción de reset total.

---

### 🎨 Mejoras de Diseño (UI/UX)

- **Sistema de diseño unificado** — variables CSS globales (`--color-fondo`, `--color-oro`, `--color-verde`, `--color-azul`, `--color-card`, etc.) aplicadas consistentemente en todos los módulos.
- **Topbar** estandarizado en todas las páginas con saldo dinámico, notificaciones y reloj en tiempo real.
- **Navbar** con submenús animados (`position: absolute` + `@keyframes fadeDropdown`) y página activa resaltada.
- **Betslip flotante** implementado en todos los módulos de apuestas — calcula ganancia potencial en tiempo real.
- **Badges EN VIVO** con punto parpadeante (`@keyframes`) en eventos en tiempo real.
- **Page header** consistente en todas las páginas internas.
- **Footer** unificado con enlaces a módulos principales.

---

### 🛠️ Mejoras Técnicas

- **Canvas API** — ruleta con 37 sectores, colores, números y puntero triangular. Crash game con curva exponencial, área rellena bajo la curva y punto cohete/explosión animado.
- **SVG dinámico** — generación programática de cartas de Blackjack con palo, valor y colores correctos. SVG decorativos en catálogo de juegos.
- **localStorage** — sistema centralizado de saldo compartido entre todos los juegos, perfil de usuario y configuración de preferencias.
- **Formspree** — formularios de registro de jugador y afiliado alojados externamente para verificación de datos.
- **IntersectionObserver** — animaciones de entrada al hacer scroll en cards y elementos del dashboard.
- **Web Share API** — botón de compartir enlace de afiliado con fallback a clipboard.
- **setInterval animaciones** — marcador de baloncesto, fluctuación de cuotas, contador de jugadores online y reloj en tiempo real.

---

### 📚 Temas del Curso Completados (html6.es)

| # | Tema | Estado |
|---|---|---|
| T1 | Estructura semántica HTML5 | ✅ |
| T2 | Etiquetas básicas | ✅ |
| T3 | Imágenes, listas, enlaces | ✅ |
| T4 | Introducción a CSS | ✅ |
| T5 | Propiedades CSS más usadas | ✅ |
| T6 | Favicon | ✅ |
| T7 | Bordes redondeados | ✅ |
| T8 | Sombras | ✅ |
| T9 | Imágenes de fondo | ✅ |
| T10 | Tipografías | ✅ |
| T11 | Float | ✅ |
| T12 | Centrar contenido | ✅ |
| T13 | Flexbox | ✅ |
| T14 | Posición de elementos | ✅ |
| T15 | Transform | ✅ |
| T16 | Formularios HTML5 | ✅ |
| T17 | iframe | ✅ |
| T18 | Transiciones | ✅ |
| T19 | Columnas de texto | ✅ |
| T20 | Vídeo HTML5 | ✅ |
| T21 | Audio HTML5 | ✅ |
| T22 | Transparencias y degradados | ✅ |
| T23 | Animaciones CSS | ✅ |
| T24 | SVG | ✅ |
| T25 | Canvas | ✅ |
| T26 | Media Queries | ✅ |
| T27 | Contenido editable | ✅ |
| T28 | localStorage | ✅ |

---

### 🐛 Correcciones

- Corregido typo `colorPalu` → `colorPalo` en función de renderizado de cartas SVG del Blackjack.
- Corregidas rutas relativas `../` en todos los archivos de subcarpetas.
- Corregido desbordamiento del hero video en pantallas pequeñas.
- Ajustada lógica de resultado `bust-dealer` en Blackjack para retornar al estado correcto.

---

## [1.2.1] - 13-03-2026

### 🔧 Correcciones
- Arreglo del tamaño del archivo de música usado en `index.html`.
- Carga y actualización de archivos en repositorio de GitHub.

---

## [1.2.0] - 13-03-2026

### ✨ Nuevas Funcionalidades
- Implementación de **cajas flotantes (float)** para organización de elementos visuales.
- Integración de **contenido multimedia de video** dentro de páginas informativas.
- Incorporación de **audio embebido** para recursos interactivos del sitio.
- Uso de **iframe** para integrar contenido externo dentro de la plataforma.

### 🎨 Mejoras de Diseño (UI/UX)
- Mejora en la **alineación y centrado de contenido** en distintas secciones.
- Implementación de **Flexbox** para organizar elementos de manera eficiente.
- Aplicación de **columnas de texto** para mejorar legibilidad en páginas informativas.
- Mejora en diseño y estructura de **formularios**.

### 🛠️ Mejoras Técnicas
- Implementación de **transiciones CSS** para efectos suaves en elementos interactivos.
- Uso de **transformaciones CSS** para animaciones en tarjetas e imágenes.
- Mejor control del layout con **position relative y absolute**.
- Optimización de estructura CSS con propiedades modernas.

---

## [1.0.0] - 20-02-2026 — Versión Inicial

### ✨ Nuevas Funcionalidades
- Creación del logo principal (`logo-casino.png`) e implementación del favicon.
- Integración de imágenes en tarjetas de categorías (Fútbol, Juegos de Casino).
- Sistema visual para promociones con diseño moderno.
- Formulario base para registro de afiliado.
- Efectos hover en tarjetas (zoom + elevación).
- Estructura responsive para sección de promociones con CSS Grid.

### 🎨 Mejoras de Diseño (UI/UX)
- Estética general de casino oscuro moderno.
- `object-fit: cover` para imágenes proporcionales.
- Bordes redondeados y sombras suaves.
- Alineación de logo y título con Flexbox.
- Unificación visual de botones y tarjetas.

### 🐛 Correcciones
- Corrección de rutas relativas para imágenes (`assets/images/`).
- Ajuste del favicon para carga correcta en todas las páginas.
- Solución al desplazamiento del título causado por el logo.
- Organización coherente de estructura de carpetas.

### 🛠️ Mejoras Técnicas
- Flexbox para alineaciones horizontales.
- CSS Grid para tarjetas responsivas.
- Transiciones CSS suaves.
- Estructura base preparada para escalabilidad futura.

---

## 🔮 Próximas Mejoras Planificadas

- [ ] Navbar responsive con menú hamburguesa para móviles
- [ ] Implementación de juegos faltantes: Poker, Baccarat y Dados
- [ ] Integración de backend para autenticación real
- [ ] Sistema de seguimiento real de afiliados
- [ ] Módulo de pagos y retiros
- [ ] PWA — Progressive Web App para instalación en móviles
- [ ] Modo oscuro/claro con selector persistido

---

© 2026 Midnight Ingenium Casino · Proyecto Académico
