# 🎰 Casino Midnight Ingenium

> Proyecto académico de desarrollo web — Simulación de plataforma de casino online con arquitectura full stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

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

> Este proyecto es estrictamente académico.
> No maneja dinero real ni transacciones financieras.
> Todos los juegos, saldos y apuestas son simulaciones con fines educativos.

---

## 🗂️ Estructura del Proyecto

```
Casino-Midnight-Ingenium/
│
├── index.html
├── README.md
├── CHANGELOG.md
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
    ├── server.js                   # Punto de entrada del servidor
    ├── .env                        # Variables de entorno (NO subir a Git)
    ├── .env.example                # Plantilla de variables de entorno
    ├── .gitignore
    ├── config/
    │   └── db.js                   # Conexión a MongoDB con Mongoose
    ├── models/
    │   ├── Usuario.js              # Esquema de usuario
    │   ├── Apuesta.js              # Esquema de apuesta / historial
    │   └── Juego.js                # Esquema de sesión de juego
    ├── routes/
    │   ├── usuarios.routes.js
    │   ├── apuestas.routes.js
    │   └── juegos.routes.js
    ├── controllers/
    │   ├── usuarios.controller.js
    │   ├── apuestas.controller.js
    │   └── juegos.controller.js
    ├── services/
    │   ├── auth.service.js         # Lógica de autenticación
    │   └── casino.service.js       # Lógica de negocio del casino
    ├── middlewares/
    │   ├── auth.middleware.js      # Protección de rutas
    │   └── error.middleware.js
    └── utils/
        └── helpers.js
```

---

## 🎯 Justificación Estructural

| Principio | Descripción |
|---|---|
| **Modularidad** | Cada carpeta es un módulo independiente con su propia responsabilidad |
| **Escalabilidad** | Permite integrar backend, base de datos o frameworks en el futuro |
| **Separación de responsabilidades** | HTML → Estructura · CSS → Diseño · JS → Interactividad · Node.js → Servidor |
| **Organización profesional** | Facilita mantenimiento, trabajo colaborativo y control de versiones |
| **Reutilización** | `style.css` y `main.js` compartidos por todos los módulos |

---

## 🛠️ Tecnologías Utilizadas

### Frontend

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

### Backend

| Tecnología | Uso |
|---|---|
| **Node.js** | Entorno de ejecución del servidor |
| **Express.js** | Framework para construir la API REST |
| **MongoDB** | Base de datos NoSQL para persistencia |
| **Mongoose** | Modelado de datos y esquemas |
| **dotenv** | Gestión de variables de entorno |
| **cors** | Comunicación entre frontend y backend |
| **nodemon** | Reinicio automático del servidor en desarrollo |

---

## 🔌 API REST — Documentación de Endpoints

La API corre por defecto en `http://localhost:5000/api`.

---

### 👤 Usuarios — `/api/usuarios`

| Método | Endpoint | Descripción |
|---|---|---|
| `POST` | `/api/usuarios/registro` | Registrar un nuevo usuario |
| `POST` | `/api/usuarios/login` | Iniciar sesión |
| `GET` | `/api/usuarios/:id` | Obtener perfil de un usuario |
| `PUT` | `/api/usuarios/:id` | Actualizar datos del usuario |

**Ejemplo — body `POST /api/usuarios/registro`:**

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "password": "miPassword123"
}
```

**Ejemplo — respuesta `GET /api/usuarios/:id`:**

```json
{
  "_id": "664a1f...",
  "nombre": "Juan Pérez",
  "email": "juan@ejemplo.com",
  "saldo": 1500,
  "fechaRegistro": "2026-03-27T10:00:00.000Z"
}
```

---

### 🎲 Apuestas — `/api/apuestas`

| Método | Endpoint | Descripción |
|---|---|---|
| `POST` | `/api/apuestas` | Registrar una nueva apuesta |
| `GET` | `/api/apuestas` | Obtener todas las apuestas |
| `GET` | `/api/apuestas/:id` | Obtener una apuesta por ID |
| `GET` | `/api/apuestas/usuario/:usuarioId` | Historial de apuestas de un usuario |

**Ejemplo — body `POST /api/apuestas`:**

```json
{
  "usuarioId": "664a1f...",
  "juego": "ruleta",
  "monto": 100,
  "resultado": "ganó",
  "ganancia": 200
}
```

**Ejemplo — respuesta `GET /api/apuestas`:**

```json
[
  {
    "_id": "664b2e...",
    "usuarioId": "664a1f...",
    "juego": "blackjack",
    "monto": 50,
    "resultado": "perdió",
    "ganancia": 0,
    "fecha": "2026-03-27T12:30:00.000Z"
  }
]
```

---

### 🎮 Juegos — `/api/juegos`

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/juegos` | Listar todos los juegos disponibles |
| `GET` | `/api/juegos/:id` | Obtener detalles de un juego |

---

## 🗄️ Modelos de Datos

### Usuario

```js
{
  nombre:         String,    // requerido
  email:          String,    // único, requerido
  password:       String,    // requerido (hash)
  saldo:          Number,    // default: 1000
  fechaRegistro:  Date       // default: Date.now
}
```

### Apuesta

```js
{
  usuarioId:  ObjectId,   // referencia a Usuario
  juego:      String,     // enum: ['ruleta', 'blackjack', 'slots', 'crash', 'poker', 'baccarat', 'dados']
  monto:      Number,     // requerido
  resultado:  String,     // enum: ['ganó', 'perdió', 'empate']
  ganancia:   Number,     // default: 0
  fecha:      Date        // default: Date.now
}
```

### Juego

```js
{
  nombre:       String,    // requerido
  descripcion:  String,
  activo:       Boolean    // default: true
}
```

---

## 🚀 Guía para Clonar y Ejecutar

### Requisitos Previos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) v18 o superior
- [MongoDB](https://www.mongodb.com/) local o cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Visual Studio Code](https://code.visualstudio.com/) *(recomendado)*
- [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar la API

---

### Paso 1 — Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/Casino-Midnight-Ingenium.git
cd Casino-Midnight-Ingenium
```

---

### Paso 2 — Configurar y levantar el Backend

```bash
cd backend
npm install
```

Crea tu archivo `.env` a partir de la plantilla incluida:

```bash
cp .env.example .env
```

Edita el `.env` con tus valores reales:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/casino_midnight
```

> 💡 Si usas MongoDB Atlas, tu URI se verá así:
> `mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb.net/casino_midnight`

Inicia el servidor:

```bash
# Modo desarrollo (reinicio automático con nodemon)
npm run dev

# Modo producción
npm start
```

El servidor quedará disponible en `http://localhost:5000`.

---

### Paso 3 — Abrir el Frontend

**Opción A — Doble clic:**
Abre directamente `index.html` en tu navegador.

**Opción B — VS Code con Live Server:**

```bash
code .
```

Instala la extensión **Live Server**, clic derecho en `index.html` → *Open with Live Server*.

> 💡 Se recomienda Live Server para evitar restricciones CORS con audio y storage.

---

### Variables de Entorno — `.env.example`

```env
# Puerto en el que corre el servidor
PORT=5000

# URI de conexión a MongoDB
MONGO_URI=mongodb://localhost:27017/casino_midnight
```

> ⚠️ El archivo `.env` real **nunca debe subirse a GitHub**. Está incluido en el `.gitignore`.

---

## 🧪 Pruebas de la API con Postman / Insomnia

| # | Acción | Método | URL |
|---|---|---|---|
| 1 | Registrar usuario | `POST` | `http://localhost:5000/api/usuarios/registro` |
| 2 | Iniciar sesión | `POST` | `http://localhost:5000/api/usuarios/login` |
| 3 | Registrar apuesta | `POST` | `http://localhost:5000/api/apuestas` |
| 4 | Ver todas las apuestas | `GET` | `http://localhost:5000/api/apuestas` |
| 5 | Historial de un usuario | `GET` | `http://localhost:5000/api/apuestas/usuario/:id` |

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
| T16 | Formularios | `cuenta/registro.html`, `afiliados/registro-afiliado.html` |
| T17 | iframe | Hero YouTube en `index.html`, videos en módulos deportivos |
| T18 | Transiciones | `style.css` — `transition` en todos los elementos interactivos |
| T19 | Columnas de texto | `index.html` — sección "Sobre Midnight Ingenium" con `column-count` |
| T20 | Vídeo HTML5 | `index.html` — elemento `<video>` con `controls` |
| T21 | Audio HTML5 | `index.html` — elemento `<audio>` + botón flotante de música |
| T22 | Transparencias y degradados | `style.css` — `rgba`, `linear-gradient` en CTAs y secciones |
| T23 | Animaciones CSS | `style.css` + `juegos/slots.html` — `@keyframes`, rodillos animados |
| T24 | SVG | `juegos/blackjack.html` — cartas SVG · `juegos/index.html` — badges |
| T25 | Canvas | `juegos/ruleta.html` — ruleta · `juegos/crash.html` — gráfica animada |
| T26 | Media Queries | `style.css` — breakpoints 480px, 768px, 1024px |
| T27 | Contenido editable | `configuracion/tema.html` — campos con `contenteditable="true"` |
| T28 | localStorage | `assets/js/main.js` + `configuracion/tema.html` — saldo, perfil, preferencias |

---

## 🎮 Módulos y Funcionalidades

### 🏠 Página Principal (`index.html`)

- Hero con video de fondo via iframe YouTube
- Navbar con submenús desplegables animados
- Sección de juegos destacados con cards animadas
- Texto en columnas (T19), video HTML5 (T20), audio de ambiente (T21)
- CTA con degradado y transparencias (T22)

### 🎰 Juegos (`juegos/`)

| Archivo | Descripción | Tecnología destacada |
|---|---|---|
| `ruleta.html` | Ruleta europea con apuestas múltiples | Canvas (T25) |
| `blackjack.html` | Blackjack 21 con cartas dibujadas | SVG (T24) |
| `slots.html` | Slots con 5 rodillos y jackpot progresivo | Animaciones CSS (T23) |
| `crash.html` | Crash game con gráfica en tiempo real | Canvas animado (T25) |
| `poker.html` | Poker Texas Hold'em | JavaScript |
| `baccarat.html` | Baccarat Punto Banco | JavaScript |
| `dados.html` | Sic Bo / Dados | JavaScript |
| `en-vivo.html` | Casino en vivo con dealers simulados | iframe (T17) |

### ⚽ Apuestas Deportivas (`apuestas-deportivas/`)

- Fútbol, Baloncesto, Tenis y eSports con cuotas reales
- Cuotas con fluctuación automática cada 4 segundos
- Betslip flotante que calcula ganancia potencial en tiempo real
- Videos embed de partidos simulados via YouTube iframe

### 👤 Cuenta (`cuenta/`)

- Login con validación JavaScript
- Registro via Formspree con todos los tipos de input HTML5 (T16)
- Historial de partidas con resultados
- Flujo de recuperación de contraseña

### 🤝 Afiliados (`afiliados/`)

- Dashboard con métricas, barra de progreso de nivel y tabla de referidos
- Formulario externo Formspree con método de pago preferido
- Tabla de niveles Bronce → Diamante

### ⚙️ Configuración (`configuracion/`)

- Toggles de preferencias persistidos en `localStorage` (T28)
- Campos de perfil editables con `contenteditable` (T27)
- Visualizador del storage en tiempo real y opción de reset total

---

## 👥 Equipo de Desarrollo

| Rol | Responsabilidad |
|---|---|
| Desarrollador Frontend | HTML, CSS, JavaScript |
| Desarrollador Backend | Node.js, Express, MongoDB |
| Diseñador UI | Estética, paleta de colores, tipografía |
| QA / Tester | Pruebas en navegadores y Postman |

---

## 📌 Notas Importantes

- El archivo `.env` **nunca debe subirse a GitHub** — usa siempre `.env.example` como referencia
- Los saldos y juegos son **completamente simulados** — no hay transacciones reales
- El formulario de registro usa **Formspree** — reemplaza `YOUR_FORM_ID` con tu ID real en [formspree.io](https://formspree.io)
- Proyecto optimizado para **Chrome, Firefox y Edge** modernos
- Para mejor experiencia de audio, interactúa con la página antes de activar la música *(política de autoplay del navegador)*

---

## 🔮 Próximas Mejoras Planificadas

- [ ] Autenticación con JWT y protección de rutas privadas
- [ ] Saldo dinámico sincronizado desde el backend (reemplazar localStorage)
- [ ] Historial de apuestas consumiendo la API REST
- [ ] Navbar responsive con menú hamburguesa para móviles
- [ ] Poker, Baccarat y Dados completamente funcionales
- [ ] WebSockets para apuestas deportivas en tiempo real
- [ ] PWA — Progressive Web App para instalación en móviles
- [ ] Despliegue en la nube (Railway, Render o MongoDB Atlas)

---

## 📄 Licencia

Proyecto académico — Uso educativo y demostrativo.
© 2026 Midnight Ingenium Casino · Todos los derechos reservados.
