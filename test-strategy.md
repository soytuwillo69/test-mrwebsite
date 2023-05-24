# Estrategia de prueba.

## `1.` El código HTML, CSS y JS estaban en el mismo archivo (.html). 
Separé el código poniendo cada tecnología en un directorio correspondiente (`src/style.css` y `src/app.js`) con la intención de tener la estructura, los estilos y la lógica de la app de forma separada para agilizar futuros cambios.

## `2.` No se generaba un número entero del 1 al 100.
El código en realidad generaba un número en el rango de 0 a 10, comprendiendo números decimales.
```javascript
// Antes
let randomNumber = Math.random() * 10;
// Ahora
let randomNumber = Math.floor(Math.random() * 100) + 1;
```
Con este código, se redondea el resultado decimal con la clase `.floor` y dado que `Math.random * 100` genera un número del 0 al 99, adicionando un 1 al resultado, obtendríamos un número entero del 1 al 100.