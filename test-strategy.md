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

## `3.` El número de intentos no era 10.
El código en realidad permitía solamente cinco intentos, por lo que se hizo el ajuste correspondiente.
```javascript
// Antes
const ATTEMPS = 5;
// Ahora
const ATTEMPS = 10;
```
## `4.` El input permitía ingresar también letras.
Se pretende que el usuario digite un número entero del 1 al 100, pero también se debe validar que lo que se ingresa el usuario es un número como tal, entonces cambié el tipo del input de `text` a `number`.
```html
<!-- Antes -->
<input type="number" id="guessField" class="guessField">
<!-- Ahora -->
<input type="number" id="guessField" class="guessField">
```