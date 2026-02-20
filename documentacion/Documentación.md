# Midnight Ingenium  
## Bitácora de Desarrollo

Proyecto web desarrollado como parte del módulo de Desarrollo Web (HTML5 y CSS3).

---

# Registro de Avances

---

## Fase 1 – Estructura Base del Proyecto

Se creó la estructura inicial del sitio utilizando HTML5 semántico.

Se implementaron las siguientes etiquetas estructurales:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`

Objetivo de esta fase:
Organizar correctamente el contenido y cumplir con los principios de estructura semántica moderna.

---

## Fase 2 – Diseño Visual Inicial

Se definió la identidad visual del proyecto con estilo tipo casino digital nocturno.

Se aplicaron:

- Fondo oscuro
- Tipografía elegante (Cinzel para títulos y Montserrat para texto)
- Bordes redondeados (`border-radius`)
- Sombras (`box-shadow`)
- Botones con efecto `hover`
- Diseño centrado y limpio

Objetivo de esta fase:
Lograr una apariencia profesional y coherente con la temática del proyecto.

---

## Fase 3 – Implementación de Catálogo de Juegos

Se estructuró el catálogo principal incluyendo:

- Póker
- Blackjack
- Ruleta
- Tragamonedas
- Baccarat

Se organizaron los juegos mediante contenedores con estilos uniformes y diseño adaptable.

Objetivo:
Mostrar visualmente los servicios disponibles dentro de la plataforma.

---

## Fase 4 – Formularios de Usuario

Se desarrollaron las páginas:

- Login
- Verificación de cuenta

Se aplicaron:

- Formularios centrados
- Fondo semitransparente
- Diseño enfocado en la experiencia de usuario
- Campos estilizados con coherencia visual

Objetivo:
Simular interacción básica de usuario dentro de la plataforma.

---

## Fase 5 – Animaciones CSS

Se implementó un fondo dinámico en las páginas internas (Login y Verificación).

En lugar de un fondo sólido, se añadió:

- Catálogo de juegos en gran tamaño
- Movimiento horizontal continuo
- Animación usando `@keyframes`
- Efecto visual elegante y discreto

Ejemplo de animación utilizada:

```css
@keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}
```
