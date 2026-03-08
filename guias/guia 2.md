# Documentación – Implementación de Layout, Selectores Avanzados y Diseño Adaptable

## 1. Estructura del Perfil utilizando CSS Grid y Flexbox

Para la estructura del perfil del usuario se implementará una combinación de **CSS Grid y Flexbox**, ya que cada tecnología resuelve diferentes necesidades dentro del diseño de la interfaz.

### Uso de CSS Grid en el contenedor principal

El contenedor principal del perfil utilizará **CSS Grid**, ya que permite organizar el contenido en **filas y columnas**, lo cual es ideal para estructurar la página completa.

En la **vista de escritorio**, el layout estará dividido en **dos columnas principales**:

* **Columna izquierda:**
  Contendrá la **foto de perfil** y el **nombre del usuario**.

* **Columna derecha:**
  Contendrá la **información adicional del perfil** y el **menú de navegación**.

Esta distribución permite separar claramente la información principal del usuario de las opciones de navegación del perfil, facilitando la organización visual y mejorando la experiencia del usuario.

### Uso de Flexbox dentro de la columna derecha

Dentro de la columna derecha se utilizará **Flexbox** para organizar el menú de navegación del perfil.

El menú incluirá opciones como:

* Publicaciones
* Amigos
* Fotos

Flexbox permitirá:

* Colocar los elementos **en una fila horizontal**.
* Mantener **espaciado uniforme entre las opciones**.
* Ajustar fácilmente la alineación de los elementos.

Esta combinación de **Grid para la estructura general** y **Flexbox para los componentes internos** permite un diseño flexible, claro y fácil de mantener.

---

# 2. Estilización utilizando Selectores Avanzados (sin clases ni IDs)

En este ejercicio no se permitirá añadir **clases ni IDs adicionales al HTML**, por lo que se deberán utilizar **selectores avanzados de CSS** para aplicar estilos a los elementos.

Este enfoque permite trabajar con **HTML más limpio y semántico**, aprovechando la estructura del documento para aplicar los estilos.

### Uso de selectores descendientes

Los selectores descendientes permiten aplicar estilos a elementos que se encuentran dentro de otros.

Por ejemplo, para estilizar los enlaces del menú de navegación se utilizará un selector que apunte a los enlaces dentro de una lista:

* Seleccionar los enlaces dentro de los elementos de lista del menú.

Esto permite modificar el estilo de los enlaces del menú sin necesidad de agregar clases adicionales.

---

### Uso de pseudo-clases

Las pseudo-clases permiten aplicar estilos dependiendo del **estado del elemento**.

En el menú de navegación se utilizará la pseudo-clase:

* **hover**

Cuando el usuario pase el cursor sobre un enlace del menú, el color del enlace cambiará para indicar que el elemento es interactivo.

Esto mejora la **experiencia de usuario** y proporciona retroalimentación visual durante la navegación.

---

### Uso de pseudo-elementos

Los pseudo-elementos permiten agregar elementos visuales sin modificar el HTML.

En este proyecto se utilizarán pseudo-elementos como:

* **before**
* **after**

Estos se utilizarán para agregar elementos decorativos, por ejemplo:

* Un pequeño punto antes de cada opción del menú.
* Un ícono decorativo antes de ciertos elementos del perfil.

De esta manera se puede enriquecer el diseño visual **sin añadir más elementos al documento HTML**.

---

# 3. Diseño Adaptable utilizando el enfoque Mobile-First

El diseño del perfil seguirá el enfoque **Mobile-First**, lo que significa que primero se desarrollará la versión para dispositivos móviles y posteriormente se adaptará para pantallas más grandes.

### Diseño base para móviles

En la versión móvil el diseño será **vertical**, donde los elementos del perfil se mostrarán uno debajo del otro.

La estructura será:

1. Foto de perfil
2. Nombre del usuario
3. Menú de navegación
4. Información adicional

Este enfoque permite que la interfaz sea **clara y fácil de utilizar en pantallas pequeñas**.

---

### Adaptación a escritorio mediante Media Queries

Para adaptar el diseño a pantallas más grandes se utilizará una **media query** con el punto de quiebre:

**768px**

Cuando la pantalla alcance o supere este ancho, se aplicará la estructura basada en **CSS Grid con dos columnas**.

Esto permitirá que el diseño pase de una estructura vertical a una estructura horizontal, donde:

* La foto y el nombre se colocarán en la columna izquierda.
* El menú y la información adicional estarán en la columna derecha.

Este método permite que el diseño sea **flexible y adaptable a diferentes dispositivos**.

---

# 4. ¿Cómo se implementará esta estructura en el proyecto?

En el proyecto del perfil de usuario, estas técnicas se aplicarán de la siguiente manera.

### Estructura HTML del perfil

El HTML contendrá únicamente los elementos estructurales necesarios como:

* header
* section
* nav
* ul
* li
* article

Esto permitirá que el documento sea **semántico y fácil de interpretar** tanto por navegadores como por motores de búsqueda.

---

### Implementación del layout

1. El **contenedor principal del perfil** se convertirá en un **Grid** cuando la pantalla alcance el tamaño de escritorio.

2. El **menú de navegación del perfil** se organizará mediante **Flexbox**, permitiendo alinear los elementos horizontalmente con espacios uniformes.

3. Los estilos se aplicarán mediante **selectores descendientes**, pseudo-clases y pseudo-elementos, sin añadir clases ni IDs adicionales.

---

### Beneficios de esta implementación en el proyecto

La aplicación de estas técnicas aportará varias ventajas al proyecto:

**Estructura clara del diseño**
El uso de Grid permite dividir el perfil de forma organizada.

**Componentes flexibles**
Flexbox facilita la alineación y distribución de elementos dentro del menú.

**Código más limpio**
Al utilizar selectores avanzados se evita añadir clases innecesarias.

**Diseño adaptable**
El enfoque Mobile-First garantiza una buena experiencia en dispositivos móviles y de escritorio.
## **Link del video usado para el header usando iframe**
---
[video promo - Guia 2](https://youtu.be/BFIeduBQZsQ) 
---

# Conclusión

La combinación de **CSS Grid, Flexbox, selectores avanzados y el enfoque Mobile-First** permite construir interfaces modernas, flexibles y fáciles de mantener. En este proyecto, estas tecnologías se utilizarán para estructurar el perfil de usuario de forma clara, optimizar la organización del código y garantizar que la interfaz se adapte correctamente a diferentes tamaños de pantalla, mejorando tanto el desarrollo técnico como la experiencia del usuario.
