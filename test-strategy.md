# Resumen de los cambios realizados.
Resultado Final [Aquí](https://lestherxm.github.io/test-mrwebsite/)
## `-` El código JavaScript no estaba en la posición correcta dentro del HTML. 
Hice el cambio respectivo. También separé el código de cada tecnología en un directorio diferente (`index.html`, `src/style.css` y `src/app.js`) con la intención de tener la estructura, los estilos y la lógica de la app de forma separada para agilizar mis futuros cambios. 
```html
<!-- Antes -->
</body>
<script> // Codigo JS </script>
```
```html
<!-- Ahora -->
<script type="text/javascript" src="./src/app.js"></script>
</body>
```

## `-` No se generaba un número entero del 1 al 100.
El código en realidad generaba un número en el rango de 0 a 10, comprendiendo números decimales. La función `resetGame()` también usaba esta misma línea de código, por lo que también modifiqué esa parte.
```javascript
// Antes
let randomNumber = Math.random() * 10;
// Ahora
let randomNumber = Math.floor(Math.random() * 100) + 1;
```

## `-` El número de intentos no era 10.
1. El código permitía solamente cinco intentos, por lo que hice el ajuste correspondiente al inicializar esa variable.
```javascript
// Antes
const ATTEMPS = 5;
// Ahora
const ATTEMPS = 10;
```
2. La variable en sí no se utilizaba, por lo que implementé una función para validar si aún quedan intentos disponibles, caso contrario mostrar que el usuario ha perdido.
```javascript
function triesLeft(){
    return guessCount < ATTEMPS;
}
```
De modo que después de validar el número como tal, evalúo si aun quedan intentos con un condicional.
```javascript
    if(!triesLeft()){
        lastResult.textContent = '¡Perdiste! (NO adivinaste el número)';
        lastResult.style.backgroundColor = 'red';
        setGameOver();
    }
```

## `-` El input permitía ingresar también letras.
Cambié el tipo del input de `text` a `number`. También agregué propiedades para que a nivel de HTML se haga esa validación.
```html
<!-- Antes -->
<input type="number" id="guessField" class="guessField">
<!-- Ahora -->
<input type="number" id="guessField" class="guessField" min="1" max="100">
```

## `-` A nivel de JavaScript, NO se validaba el número ingresado por el usuario.
1. Implementé una función
```javascript
function isValidNumber(userGuess){
    return userGuess >= 1 && userGuess <= 100;
}
```
2. Ahora puedo alertar al usuario y NO aumentar el contador de intentos. Tampoco se hace el resto de validaciones.
```javascript
// Dentro de la funcion @checkGuess
    if(!isValidNumber(userGuess)){
        return alert('Debes ingresar un número válido comprendido del 1 al 100');
    }
```

## `-` Errores en las validaciones.
Reformulé la estructura de las validaciones, cuando el usuario no "adivina" el número.

1. Implementé una función para mostrar el No. de intento y el número ingresado anteriormente.
```javascript
function showPreviousNumber(userGuess){
    guesses.textContent = 'Número anterior: ' + userGuess;
    tries.textContent = 'Intento: ' + guessCount;
}
```

2. Implementé una función para mostrar si el número digitado por el usuario es mayor o menor al número random generado.
```javascript
function isLowOrHi(userGuess){
    if (userGuess < randomNumber) {
        lastResult.textContent += '(El número es mayor)';
    } else if (userGuess > randomNumber) {
        lastResult.textContent += '(El número es menor)';
    }
}
```

3. De modo que si el número digitado por el usuario es diferente al número random generado, se muestra la información del intento anterior. Caso contrario, se muestra el mensaje de éxito y se habilita el botón para empezar un nuevo juego.
```javascript
    if (userGuess != randomNumber) {
        showPreviousNumber(userGuess);
        isLowOrHi(userGuess);
    }else{
        lastResult.textContent = '¡Felicitaciones! (SÍ adivinaste el número)';
        lastResult.style.backgroundColor = 'green';
        setGameOver();
    }
```

Y de esta forma logré cubrir todos los requerimientos especificados en el [repositorio]('https://github.com/soytuwillo69/test-mrwebsite'). También agregué ligeros cambios en los estilos, como el centrado de texto y color del Botón.

