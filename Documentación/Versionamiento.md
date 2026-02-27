# 📝 Historial de Cambios – Midnight Ingenium Casino

Todos los cambios relevantes del proyecto se documentan en este archivo.

---

## [1.0.0] - 20-02-2026

###  Nuevas Funcionalidades

- Se agregó el logo principal del proyecto (`logo-casino.png`) en la raíz.
- Se implementó el favicon utilizando el logo del casino.
- Se integraron imágenes en las tarjetas de categorías (ej: Fútbol, Juegos de Casino).
- Se añadieron imágenes a las tarjetas de promociones.
- Se implementó estructura visual para las promociones con diseño moderno.
- Se creó un sistema visual consistente para formularios (registro afiliado).
- Se añadió diseño flexible en el header para alinear logo y título correctamente.
- Se implementaron efectos hover en tarjetas (zoom + elevación).
- Se estructuró diseño responsive para sección de promociones usando CSS Grid.

---

### Mejoras de Diseño (UI/UX)

- Mejora estética general con estilo casino oscuro moderno.
- Ajuste de tamaño y proporción de imágenes usando `object-fit: cover`.
- Implementación de bordes redondeados y sombras suaves.
- Efectos de animación suave en imágenes al pasar el cursor.
- Mejora en alineación del logo junto al título usando Flexbox.
- Unificación visual de botones y tarjetas.
- Optimización de distribución para adaptarse a dispositivos móviles.

---

### 🛠 Correcciones

- Corrección de rutas relativas para imágenes (`assets/images`).
- Ajuste del favicon para correcta carga en todas las páginas.
- Solución al desplazamiento del título causado por el logo.
- Corrección de referencias `../` en páginas dentro de subcarpetas.
- Organización coherente de estructura de carpetas.

---

###  Estructura Actual del Proyecto
Midnight-Ingenium-Casino/
│
├── index.html                      → Inicio / Página principal
│
├── logo-casino.png                 → Logo global + Favicon
│
├── cuenta/
│   ├── index.html                  → Panel del usuario
│   ├── login.html
│   ├── registro.html
│   ├── recuperar-password.html
│   ├── verificacion.html
│   └── historial.html
│
├── juegos/
│   ├── index.html
│   ├── slots.html
│   ├── ruleta.html
│   ├── blackjack.html
│   ├── poker.html
│   ├── baccarat.html
│   ├── crash.html
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
├── torneos/
│   ├── index.html
│   └── ranking.html
│
├── promociones/
│   ├── index.html
│   ├── bono-bienvenida.html
│   ├── cashback.html
│   └── programa-vip.html
│
├── tienda/
│   ├── index.html
│   ├── comprar-fichas.html
│   ├── metodos-pago.html
│   └── retiros.html
│
├── soporte/
│   ├── index.html
│   ├── faq.html
│   ├── contacto.html
│   └── chat.html
│
├── quienes-somos/
│   ├── index.html
│   ├── mision-vision.html
│   ├── equipo.html
│   └── licencias.html
│
├── configuracion/
│   ├── index.html
│   ├── perfil.html
│   ├── seguridad.html
│   ├── notificaciones.html
│   ├── limites-apuesta.html
│   ├── idioma.html
│   ├── tema.html
│   └── privacidad.html
│
├── legal/
│   ├── terminos-condiciones.html
│   ├── politica-privacidad.html
│   ├── juego-responsable.html
│   └── cookies.html
│
├── afiliados/
│   ├── index.html
│   └── registro-afiliado.html
│
├── notificaciones/
│   └── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js               → Scripts futuros
│   │
│   ├── images/
│   │   ├── futbol.jpeg
│   │   ├── blackjack.png
│   │   ├── ruleta.png
│   │   ├── poker.png
│   │   ├── slots.png
│   │   ├── bonos.jpeg
│   │   ├── cashback.jpeg
│   │   ├── vip.jpeg
│   │   └── otros-recursos
│   │
│   ├── icons/
│   │
│   └── fonts/
│
└── README.md



---

###  Mejoras Técnicas Implementadas

- Uso de Flexbox para alineaciones horizontales.
- Uso de CSS Grid para tarjetas responsivas.
- Implementación de transiciones CSS suaves.
- Organización visual consistente entre secciones.
- Preparación de estructura base para escalabilidad futura.

---

##  Próximas Mejoras Planificadas

- Implementación completa de navbar responsive.
- Header fijo (sticky) con efecto blur.
- Integración de backend para autenticación.
- Sistema de seguimiento de afiliados.
- Módulo de pagos.
- Mejora visual con efectos neon profesionales.

---

© 2026 Midnight Ingenium Casino
