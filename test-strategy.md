# Estrategia de prueba.

## `-` El código JavaScript no estaba en la posición correcta dentro del HTML. 
Por ende, hice el cambio respectivo. También separé el código de cada tecnología en un directorio diferente (`index.html`, `src/style.css` y `src/app.js`) con la intención de tener la estructura, los estilos y la lógica de la app de forma separada para agilizar mis futuros cambios. 
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
El código permitía solamente cinco intentos, por lo que hice el ajuste correspondiente al inicializar esa variable.
```javascript
// Antes
const ATTEMPS = 5;
// Ahora
const ATTEMPS = 10;
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
Dentro de la función `checkGuess`, antes de hacer el resto de lógica necesaria, validé que sea un número entero comprendido del 1 al 100 a través de la siguiente función. De esta forma puedo alertar al usuario y NO aumentar el contador de intentos.
```javascript
function isValidNumber(userGuess){
    return userGuess >= 1 && userGuess <= 100;
}

// Dentro de la funcion checkGuess
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

2. Implementé una función para mostrar si el número es mayor o menor, 
```javascript
function isLowOrHi(userGuess){
    if (userGuess < randomNumber) {
        lastResult.textContent += '(El número es mayor)';
    } else if (userGuess > randomNumber) {
        lastResult.textContent += '(El número es menor)';
    }
}
```

3. De modo que si el número digitado por el usuario es diferente al número random generado, se muestra la información del intento anterior. Caso contrario, se mostraa el mensaje de éxito y se habilita el botón para empezar un nuevo juego.
```javascript
    if (userGuess != randomNumber) {
        showPreviousNumber(userGuess);
        isLowOrHi(userGuess);
        guessCount++;
        guessField.focus();
    }else{
        lastResult.textContent = '¡Felicitaciones! (SÍ adivinaste el número)';
        lastResult.style.backgroundColor = 'green';
        setGameOver();
    }
```

