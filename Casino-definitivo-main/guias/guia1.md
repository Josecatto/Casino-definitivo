# Documentación – Arquitectura y Estructura de una Aplicación Web Moderna  

---

## 1. Propósito y ventajas de la estructura usada en el ejercicio grupal  

En el ejercicio grupal se utilizó una arquitectura basada en el modelo cliente-servidor, lo que permitió dividir claramente las responsabilidades del sistema.

### Propósito
- Organizar el proyecto de manera modular.
- Separar la interfaz de usuario de la lógica de negocio.
- Facilitar el mantenimiento y la escalabilidad.
- Permitir el trabajo colaborativo sin interferencias entre equipos.

### Ventajas
- Mantenibilidad: Es posible realizar cambios en una parte del sistema sin afectar completamente las demás.
- Escalabilidad: Se puede ampliar el servidor o el cliente según las necesidades del sistema.
- Seguridad: La base de datos y la lógica del negocio permanecen protegidas en el servidor.
- Reutilización: El backend puede ser utilizado por diferentes tipos de clientes (web, móvil, etc.).

---

## 2. Importancia de la separación entre cliente y servidor  

En una aplicación web moderna existen dos componentes principales:

- Cliente (Frontend): Parte visible con la que interactúa el usuario.
- Servidor (Backend): Procesa los datos, aplica las reglas de negocio y gestiona la base de datos.

### ¿Por qué es necesaria la separación de responsabilidades?

- Mejora la seguridad del sistema al evitar el acceso directo a la base de datos.
- Permite distribuir la carga de procesamiento.
- Facilita el mantenimiento y la actualización del sistema.
- Permite que distintos equipos trabajen de manera independiente.
- Favorece la escalabilidad de la aplicación.

---

## 3. Componentes esenciales de una aplicación web moderna  

### Cliente (Frontend)
- HTML5  
- CSS3  
- JavaScript  

Puede utilizar frameworks como React, Angular o Vue.js.

Función:
- Renderizar la interfaz.
- Capturar eventos del usuario.
- Enviar solicitudes al servidor.

---

### Servidor (Backend)
Puede utilizar tecnologías como Node.js, Django o Spring Boot.

Función:
- Procesar solicitudes.
- Aplicar reglas de negocio.
- Gestionar autenticación.
- Comunicarse con la base de datos.

---

### Base de Datos
Ejemplos:
- MySQL  
- PostgreSQL  
- MongoDB  

Función:
- Almacenar y gestionar la información del sistema.

---

## 4. ¿Cómo se comunican los componentes?

La comunicación se realiza generalmente mediante:

- HTTP o HTTPS.
- APIs REST.
- Formato de intercambio de datos como JSON.

Flujo básico:
1. El cliente envía una solicitud HTTP al servidor.
2. El servidor procesa la solicitud.
3. Consulta o actualiza la base de datos.
4. Devuelve una respuesta en formato JSON.
5. El cliente actualiza la interfaz con los datos recibidos.

---

## 5. ¿Cómo facilita HTML5 la creación de contenido web estructurado y accesible?

HTML5 introduce mejoras significativas que permiten crear contenido más organizado y accesible.

Características principales:
- Nuevas etiquetas semánticas.
- Soporte nativo para contenido multimedia.
- Formularios más avanzados.
- Mejor compatibilidad con APIs modernas.

Beneficios:
- Mejora el posicionamiento en motores de búsqueda.
- Facilita la accesibilidad para tecnologías asistivas.
- Hace el código más claro y comprensible.
- Reduce la dependencia de plugins externos.

---

## 6. Ventajas de las etiquetas semánticas frente a etiquetas tradicionales como `<div>`

En versiones anteriores de HTML se utilizaban múltiples etiquetas `<div>` sin significado estructural.

HTML5 introduce etiquetas como:
- `<header>`
- `<nav>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`

Diferencias principales:

| `<div>` | Etiquetas semánticas |
|----------|----------------------|
| No aporta significado estructural | Indican el propósito del contenido |
| Menor claridad estructural | Mejor organización del documento |
| Menor optimización para SEO | Mejoran el posicionamiento |
| Menor accesibilidad | Mejoran la accesibilidad |

Ventajas:
- Código más organizado.
- Mejor interpretación por parte de buscadores.
- Mayor claridad para desarrolladores.
- Mejor experiencia para usuarios con tecnologías asistivas.

---

## Conclusión

La separación entre cliente y servidor es fundamental para construir aplicaciones web seguras, escalables y mantenibles. Asimismo, el uso de HTML5 y de etiquetas semánticas permite estructurar mejor el contenido, mejorar la accesibilidad y optimizar la aplicación para motores de búsqueda, fortaleciendo tanto el desarrollo técnico como la experiencia del usuario.

