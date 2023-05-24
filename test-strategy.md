# Estrategia de prueba.

## `1.` El código JavaScript no estaba en la posición correcta dentro de HTML. 
Se colocó en la posición incorrecta. Lo siguiente no era un problema como tal, pero separé el código de cada tecnología en un directorio diferente (`index.html`, `src/style.css` y `src/app.js`) con la intención de tener la estructura, los estilos y la lógica de la app de forma separada para agilizar mis futuros cambios. 
```html
<!-- Antes -->
</body>
<script>
    // Código JS
</script>
```
```html
<!-- Ahora -->
<script type="text/javascript" src="./src/app.js"></script>
</body>
```
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

## `4.` Se utilizaba incorrectamente el método `addEventListener()`
Era simplemente un error de escritura, hice el cambio correspondiente.
```javascript
// Antes
guessSubmit.addeventListener('click', checkGuess);
// Ahora
guessSubmit.addEventListener('click', checkGuess);
```

## `5.` El input permitía ingresar también letras.
Se pretende que el usuario digite un número entero del 1 al 100, pero también se debe validar que el usuario digite un número como tal, entonces cambié el tipo del input de `text` a `number`. También agregué propiedades para que a nivel de HTML se haga esa validación.
```html
<!-- Antes -->
<input type="number" id="guessField" class="guessField">
<!-- Ahora -->
<input type="number" id="guessField" class="guessField" min="1" max="100">
```

## `6.` A nivel de JavaScript, NO se validaba el número ingresado por el usuario.
Dentro de la función `checkGuess`, antes de hacer el resto de lógica necesaria, primero validé que sea un número entero comprendido del 1 al 100 a través de la siguiente función.
```javascript
function isValidNumber(userGuess){
    return userGuess >= 1 && userGuess <= 100;
}
```
Esta validación fue importante ya que si no se cumplía la condición, tampoco se debía de incrementar el intento del usuario, mostrando únicamente una alerta.
```javascript
function checkGuess() {
    let userGuess = guessField.value; // Se obtiene el valor del numero ingresador por el usuario
    // Si es un numero válido, se hacen las consideraciones correspondientes
    if(isValidNumber(userGuess)){
        guessCount++;
        // resto de código a validar
    }
    alert('Debes ingresar un número válido comprendido del 1 al 100');
```

