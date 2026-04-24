# 🎰 Casino Midnight Ingenium

> Proyecto académico de desarrollo web — Simulación de plataforma de casino online con arquitectura full stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📋 Descripción del Proyecto

**Casino Midnight Ingenium** es una aplicación web desarrollada con fines académicos que simula una plataforma de casino online modular. El sistema integra juegos de azar, apuestas deportivas, gestión de usuarios, sistema de afiliados, promociones, tienda virtual, soporte y configuración de usuario.

El proyecto inicia como una aplicación **frontend estática** desarrollada con HTML5, CSS3 y JavaScript, y evoluciona hacia una arquitectura **full stack**, incorporando un backend basado en Node.js y Express, junto con una base de datos NoSQL MongoDB para la persistencia de datos.

El objetivo principal es aplicar principios de arquitectura web moderna como:

- Separación de responsabilidades
- Modularidad del sistema
- Consumo de API REST
- Persistencia de datos
- Escalabilidad de aplicaciones web

---

## ⚠️ Nota Importante

Este proyecto es estrictamente académico.  
No maneja dinero real ni transacciones financieras.  
Todos los juegos, saldos y apuestas son simulaciones con fines educativos.

---

## 🗂️ Estructura del Proyecto

```bash
Casino-Midnight-Ingenium/
│
├── index.html
├── README.md
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── musica/
│
├── cuenta/
│   ├── login.html
│   ├── registro.html
│   ├── historial.html
│   └── recuperar-password.html
│
├── juegos/
│   ├── index.html
│   ├── ruleta.html
│   ├── blackjack.html
│   ├── slots.html
│   ├── crash.html
│   ├── poker.html
│   ├── baccarat.html
│   ├── dados.html
│   └── en-vivo.html
│
├── apuestas-deportivas/
│   ├── index.html
│   ├── futbol.html
│   ├── baloncesto.html
│   ├── tenis.html
│   ├── esports.html
│   └── apuestas-en-vivo.html
│
├── afiliados/
│   ├── index.html
│   ├── panel.html
│   └── registro-afiliado.html
│
├── promociones/
│   ├── index.html
│   ├── bono-bienvenida.html
│   ├── cashback.html
│   └── programa-vip.html
│
├── tienda/
│   └── index.html
│
├── soporte/
│   └── index.html
│
├── configuracion/
│   └── tema.html
│
├── legal/
│   ├── terminos.html
│   └── privacidad.html
│
└── backend/
    ├── server.js
    ├── config/
    │   └── db.js
    ├── models/
    │   ├── Usuario.js
    │   ├── Apuesta.js
    │   └── Juego.js
    ├── routes/
    │   ├── usuarios.routes.js
    │   ├── apuestas.routes.js
    │   └── juegos.routes.js
    ├── controllers/
    │   ├── usuarios.controller.js
    │   ├── apuestas.controller.js
    │   └── juegos.controller.js
    ├── services/
    │   ├── auth.service.js
    │   └── casino.service.js
    ├── middlewares/
    │   ├── auth.middleware.js
    │   └── error.middleware.js
    └── utils/
        └── helpers.js
```

---

## 🎯 Justificación Estructural

La arquitectura fue diseñada bajo los siguientes principios:

| Principio | Descripción |
|---|---|
| **Modularidad** | Cada carpeta es un módulo independiente con su propia responsabilidad |
| **Escalabilidad** | Permite integrar backend, base de datos o frameworks en el futuro |
| **Separación de responsabilidades** | HTML → Estructura · CSS → Diseño · JS → Interactividad |
| **Organización profesional** | Facilita mantenimiento, trabajo colaborativo y control de versiones |
| **Reutilización** | `style.css` y `main.js` compartidos por todos los módulos |

---

## 📚 Temas del Curso Aplicados (html6.es)

| # | Tema | Dónde se aplica |
|---|---|---|
| T1 | Estructura semántica HTML5 | `index.html` — `header`, `nav`, `main`, `section`, `article`, `footer` |
| T2 | Etiquetas básicas | Todos los archivos — `h1`-`h3`, `p`, `a`, `ul`, `li`, `strong` |
| T3 | Imágenes, listas y enlaces | `index.html`, `juegos/index.html`, navegación general |
| T4 | Introducción a CSS | `style.css` — variables CSS, selectores, reset |
| T5 | Propiedades CSS más usadas | `style.css` — `color`, `padding`, `margin`, `font-size` |
| T6 | Favicon | Todos los `<head>` — `logo-casino.png` |
| T7 | Bordes redondeados | `style.css` — `.rounded`, `.card`, `.btn-glow` |
| T8 | Sombras | `style.css` — `text-shadow`, `box-shadow` en cards y botones |
| T9 | Imágenes de fondo | `style.css` — `.bg-pattern`, hero overlay |
| T10 | Tipografías | Google Fonts — `Cinzel` (títulos) + `Rajdhani` (texto) |
| T11 | Float | `style.css` — `.topbar` con `float: left/right` |
| T12 | Centrar contenido | `style.css` — `.center-wrap`, `margin: auto` |
| T13 | Flexbox | `style.css` — navbar, cards, controles de juegos |
| T14 | Posición de elementos | Hero video, navbar sticky, submenús con `position: absolute` |
| T15 | Transform | Hover en cards, botones — `translateY`, `scale` |
| T16 | Formularios | `cuenta/registro.html`, `afiliados/registro-afiliado.html` — todos los tipos de input |
| T17 | iframe | Hero YouTube en `index.html`, videos en `baloncesto.html`, `esports.html`, `juegos/en-vivo.html` |
| T18 | Transiciones | `style.css` — `transition` en todos los elementos interactivos |
| T19 | Columnas de texto | `index.html` — sección "Sobre Midnight Ingenium" con `column-count` |
| T20 | Vídeo HTML5 | `index.html` — elemento `<video>` con `controls` |
| T21 | Audio HTML5 | `index.html` — elemento `<audio>` + botón flotante de música |
| T22 | Transparencias y degradados | `style.css` — `rgba`, `linear-gradient` en CTAs y secciones |
| T23 | Animaciones CSS | `style.css` + `juegos/slots.html` — `@keyframes`, rodillos animados |
| T24 | SVG | `juegos/blackjack.html` — cartas SVG · `juegos/index.html` — badges decorativos |
| T25 | Canvas | `juegos/ruleta.html` — ruleta dibujada · `juegos/crash.html` — gráfica animada |
| T26 | Media Queries | `style.css` — breakpoints 480px, 768px, 1024px |
| T27 | Contenido editable | `configuracion/tema.html` — campos con `contenteditable="true"` |
| T28 | localStorage (Storage) | `assets/js/main.js` + `configuracion/tema.html` — saldo, perfil, preferencias |

---

## 🎮 Módulos y Funcionalidades

### 🏠 Página Principal (`index.html`)
- Hero con video de fondo via iframe YouTube
- Navbar con submenús desplegables
- Sección de juegos destacados con cards animadas
- Texto en columnas (T19)
- Reproductor de video HTML5 (T20)
- Audio de ambiente con botón flotante (T21)
- CTA con degradado y transparencias (T22)

### 🎰 Juegos (`juegos/`)
| Archivo | Descripción | Tecnología destacada |
|---|---|---|
| `ruleta.html` | Ruleta europea completa con apuestas múltiples | Canvas (T25) |
| `blackjack.html` | Blackjack 21 con cartas dibujadas | SVG (T24) |
| `slots.html` | Slots con 5 rodillos y jackpot progresivo | Animaciones CSS (T23) |
| `crash.html` | Crash game con gráfica en tiempo real | Canvas animado (T25) |
| `poker.html` | Poker Texas Hold'em | JavaScript |
| `baccarat.html` | Baccarat Punto Banco | JavaScript |
| `dados.html` | Sic Bo / Dados | JavaScript |
| `en-vivo.html` | Casino en vivo con dealers simulados | iframe (T17) |

### ⚽ Apuestas Deportivas (`apuestas-deportivas/`)
- **Fútbol, Baloncesto, Tenis, eSports:** eventos con cuotas reales
- **En Vivo:** cuotas con fluctuación automática cada 4 segundos
- **Betslip flotante** en todos los módulos — calcula ganancia potencial en tiempo real
- **Videos embed** de partidos simulados via YouTube iframe
- **Marcador animado** en baloncesto que actualiza puntos automáticamente

### 👤 Cuenta (`cuenta/`)
- **Login:** formulario con validación JS
- **Registro:** formulario externo via Formspree — todos los tipos de input HTML5 (T16)
- **Historial:** tabla de partidas con resultados
- **Recuperar contraseña:** flujo de recuperación

### 🤝 Afiliados (`afiliados/`)
- **index.html:** presentación del programa con estadísticas y tabla de niveles
- **panel.html:** dashboard con métricas, barra de progreso de nivel, tabla de referidos y retiro
- **registro-afiliado.html:** formulario externo Formspree con plataforma y método de pago

### ⚙️ Configuración (`configuracion/`)
- Toggles de preferencias guardados en `localStorage` (T28)
- Campos de perfil editables directamente con `contenteditable` (T27)
- Visualizador del storage en tiempo real
- Opción de borrar todos los datos

### 📄 Legal (`legal/`)
- Términos y Condiciones
- Política de Privacidad

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica de todas las páginas |
| **CSS3** | Estilos, animaciones, variables, grid y flexbox |
| **JavaScript (ES6+)** | Interactividad, juegos, localStorage, DOM |
| **Canvas API** | Ruleta y gráfica del Crash Game |
| **SVG** | Cartas del Blackjack y elementos decorativos |
| **Google Fonts** | Tipografías Cinzel y Rajdhani |
| **Formspree** | Alojamiento externo de formularios |
| **YouTube iframe API** | Videos de fondo y partidos deportivos |
| **localStorage** | Persistencia de saldo, perfil y configuración |

---

## 🚀 Guía para Clonar y Ejecutar

### Requisitos Previos
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) *(recomendado)*
- Navegador web *(Google Chrome recomendado)*

### Paso 1 — Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/Casino-Midnight-Ingenium.git
```

### Paso 2 — Entrar a la carpeta
```bash
cd Casino-Midnight-Ingenium
```

### Paso 3 — Abrir el proyecto

**Opción A — Doble clic:**
Abre directamente el archivo `index.html` en tu navegador.

**Opción B — VS Code con Live Server:**
```bash
code .
```
Instala la extensión **Live Server**, clic derecho en `index.html` → *Open with Live Server*.

> 💡 Se recomienda Live Server para evitar restricciones CORS con audio y storage.

---

## 👥 Equipo de Desarrollo

| Rol | Responsabilidad |
|---|---|
| Desarrollador Frontend | HTML, CSS, JavaScript |
| Diseñador UI | Estética, paleta de colores, tipografía |
| QA / Tester | Pruebas en distintos navegadores y dispositivos |

---

## 📌 Notas Importantes

- El formulario de registro usa **Formspree** — reemplaza `YOUR_FORM_ID` con tu ID real en [formspree.io](https://formspree.io)
- Los saldos y juegos son **completamente simulados** — no hay transacciones reales
- El proyecto está optimizado para **Chrome, Firefox y Edge** modernos
- Para mejor experiencia de audio, interactúa con la página antes de activar la música *(política de autoplay del navegador)*

---

## 📄 Licencia

Proyecto académico — Uso educativo y demostrativo.  
© 2026 Midnight Ingenium Casino · Todos los derechos reservados.
