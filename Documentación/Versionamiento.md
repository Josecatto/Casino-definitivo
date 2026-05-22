# 🎰 Casino Midnight Ingenium

> Proyecto académico de desarrollo web — Plataforma de casino online full stack con arquitectura modular, API REST, persistencia de datos y simulación de juegos de azar.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

---

# 📋 Descripción General

**Casino Midnight Ingenium** es una plataforma web full stack desarrollada con fines académicos que simula un ecosistema completo de casino online moderno.

El proyecto combina:

- Juegos de azar interactivos
- Apuestas deportivas
- Sistema de autenticación
- Gestión de saldo virtual
- Historial de apuestas
- Sistema de afiliados
- Configuración de usuario
- API REST propia
- Persistencia de datos con MongoDB

Inicialmente el sistema fue desarrollado como una aplicación frontend estática utilizando HTML5, CSS3 y JavaScript, evolucionando posteriormente hacia una arquitectura full stack desacoplada mediante Node.js, Express y MongoDB.

---

# 🧠 Arquitectura Full Stack

El sistema implementa una arquitectura cliente-servidor moderna:

```text
Frontend (HTML/CSS/JS)
        │
        ▼
 API REST (Express.js)
        │
        ▼
 Servicios y lógica de negocio
        │
        ▼
 MongoDB (Persistencia)
```

---

# ⚠️ Aviso Importante

> Este proyecto es exclusivamente académico y educativo.
> No utiliza dinero real ni realiza transacciones financieras.
> Todas las apuestas, saldos y juegos son simulaciones.

---

# 🗂️ Estructura Completa del Proyecto

```text
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
│   │   ├── main.js
│   │   ├── auth.js
│   │   ├── apuestas.js
│   │   └── api.js
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── musica/
│
├── cuenta/
│   ├── login.html
│   ├── registro.html
│   ├── historial.html
│   ├── perfil.html
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
│   ├── futbol.html
│   ├── tenis.html
│   ├── baloncesto.html
│   ├── esports.html
│   └── apuestas-en-vivo.html
│
├── promociones/
├── afiliados/
├── soporte/
├── tienda/
├── configuracion/
├── legal/
│
└── backend/
    │
    ├── server.js
    ├── package.json
    ├── .env
    ├── .env.example
    ├── .gitignore
    │
    ├── config/
    │   └── db.js
    │
    ├── routes/
    │   ├── usuarios.routes.js
    │   ├── apuestas.routes.js
    │   ├── juegos.routes.js
    │   ├── auth.routes.js
    │   └── saldo.routes.js
    │
    ├── controllers/
    │   ├── usuarios.controller.js
    │   ├── apuestas.controller.js
    │   ├── juegos.controller.js
    │   ├── auth.controller.js
    │   └── saldo.controller.js
    │
    ├── services/
    │   ├── auth.service.js
    │   ├── casino.service.js
    │   ├── apuestas.service.js
    │   └── saldo.service.js
    │
    ├── middlewares/
    │   ├── auth.middleware.js
    │   ├── error.middleware.js
    │   └── validate.middleware.js
    │
    ├── models/
    │   ├── Usuario.js
    │   ├── Apuesta.js
    │   ├── Juego.js
    │   └── Historial.js
    │
    └── utils/
        ├── helpers.js
        ├── generators.js
        └── validators.js
```

---

# ⚙️ Arquitectura Backend

El backend fue diseñado utilizando principios de arquitectura modular y separación de responsabilidades.

| Capa | Responsabilidad |
|---|---|
| Routes | Definición de endpoints HTTP |
| Controllers | Manejo de requests y responses |
| Services | Lógica de negocio del casino |
| Models | Persistencia MongoDB |
| Middlewares | Seguridad y validaciones |
| Utils | Funciones auxiliares reutilizables |

---

# 🔐 Sistema de Autenticación

El backend implementa:

- Registro de usuarios
- Inicio de sesión
- Validación de credenciales
- Protección de rutas privadas
- Gestión de saldo
- Persistencia de sesión
- Historial de apuestas
- Perfil de usuario

---

# 🎮 Integración Backend de Juegos

Los juegos dejaron de depender únicamente de `localStorage` y ahora consumen una API REST mediante `fetch()`.

Cada apuesta:

1. Se envía al backend
2. Se valida
3. Se procesa
4. Se guarda en MongoDB
5. Retorna saldo actualizado

---

# 🔄 Flujo de una Apuesta

```text
1. Usuario realiza apuesta
2. Frontend envía petición POST
3. Express recibe datos
4. Controller procesa lógica
5. Service calcula resultado
6. MongoDB guarda historial
7. API responde JSON
8. Frontend actualiza interfaz
```

---

# 🎰 Juegos Implementados

| Juego | Tecnología | Backend |
|---|---|---|
| Ruleta | Canvas API | Registro de apuestas |
| Blackjack | SVG + JS | Historial de rondas |
| Slots | Animaciones CSS | Jackpot y saldo |
| Crash Game | Canvas | Multiplicadores |
| Poker | JavaScript | Preparado para multiplayer |
| Baccarat | JavaScript | Persistencia |
| Dados | JavaScript | Historial |

---

# 🌐 API REST — Endpoints

Base URL:

```text
http://localhost:5000/api
```

---

## 👤 Usuarios

| Método | Endpoint | Descripción |
|---|---|---|
| POST | `/usuarios/registro` | Registrar usuario |
| POST | `/usuarios/login` | Iniciar sesión |
| GET | `/usuarios/:id` | Obtener perfil |
| PUT | `/usuarios/:id` | Actualizar usuario |

### Ejemplo Registro

```json
{
  "nombre": "Juan Pérez",
  "email": "juan@email.com",
  "password": "123456"
}
```

---

## 🎲 Apuestas

| Método | Endpoint |
|---|---|
| POST | `/apuestas` |
| GET | `/apuestas` |
| GET | `/apuestas/:id` |
| GET | `/apuestas/usuario/:id` |

### Ejemplo Apuesta

```json
{
  "usuarioId": "664a1f",
  "juego": "ruleta",
  "monto": 100,
  "resultado": "ganó",
  "ganancia": 200
}
```

---

## 🎮 Juegos

| Método | Endpoint |
|---|---|
| GET | `/juegos` |
| GET | `/juegos/:id` |

---

# 🗄️ Modelos MongoDB

## Usuario

```js
{
  nombre: String,
  email: String,
  password: String,
  saldo: Number,
  fechaRegistro: Date
}
```

## Apuesta

```js
{
  usuarioId: ObjectId,
  juego: String,
  monto: Number,
  resultado: String,
  ganancia: Number,
  fecha: Date
}
```

## Juego

```js
{
  nombre: String,
  descripcion: String,
  activo: Boolean
}
```

---

# 🛠️ Tecnologías Utilizadas

## Frontend

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura |
| CSS3 | Diseño |
| JavaScript | Interactividad |
| Canvas API | Juegos |
| SVG | Cartas y gráficos |
| localStorage | Persistencia temporal |
| Google Fonts | Tipografías |
| Formspree | Formularios |

---

## Backend

| Tecnología | Uso |
|---|---|
| Node.js | Servidor |
| Express.js | API REST |
| MongoDB | Base de datos |
| Mongoose | Modelado |
| dotenv | Variables entorno |
| cors | Comunicación frontend/backend |
| nodemon | Desarrollo |

---

# 📡 Comunicación Frontend ↔ Backend

Ejemplo usando `fetch()`:

```js
async function registrarApuesta(datos) {
  const response = await fetch('http://localhost:5000/api/apuestas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  });

  return await response.json();
}
```

---

# 🔒 Middlewares Implementados

| Middleware | Función |
|---|---|
| auth.middleware.js | Protección rutas |
| error.middleware.js | Manejo errores |
| cors() | Permitir requests |
| express.json() | Procesar JSON |

---

# 🚀 Instalación y Ejecución

## 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/Casino-Midnight-Ingenium.git
cd Casino-Midnight-Ingenium
```

---

## 2. Instalar backend

```bash
cd backend
npm install
```

---

## 3. Configurar `.env`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/casino_midnight
```

---

## 4. Ejecutar backend

```bash
npm run dev
```

o:

```bash
npm start
```

---

## 5. Abrir frontend

Abrir:

```text
index.html
```

o usar Live Server.

---

# ☁️ Deploy

## Frontend

- Vercel

## Backend

- Render
- Railway

## Base de datos

- MongoDB Atlas

---

# 📈 Beneficios de la Arquitectura

| Beneficio | Resultado |
|---|---|
| Modularidad | Código organizado |
| Escalabilidad | Fácil expansión |
| Persistencia | MongoDB |
| API REST | Comunicación desacoplada |
| Reutilización | Servicios reutilizables |
| Mantenimiento | Arquitectura profesional |

---

# 🔮 Próximas Mejoras

- [ ] JWT Authentication
- [ ] WebSockets en tiempo real
- [ ] Multiplayer online
- [ ] Dashboard administrativo
- [ ] Sistema de rankings
- [ ] PWA móvil
- [ ] Dockerización
- [ ] Microservicios

---

# 👥 Equipo de Desarrollo

| Rol | Responsabilidad |
|---|---|
| Frontend Developer | HTML, CSS, JS |
| Backend Developer | Node.js, Express |
| Database Developer | MongoDB |
| UI Designer | Interfaz |
| QA Tester | Testing |

---

# 📄 Licencia

Proyecto académico — Uso educativo y demostrativo.

© 2026 Midnight Ingenium Casino — Todos los derechos reservados.
