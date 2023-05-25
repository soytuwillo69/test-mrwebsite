let randomNumber = Math.floor(Math.random() * 100) + 1; // Numero entero aleatorio del 1 al 100
const ATTEMPS = 10; // Intentos permitidos
const guessField = document.querySelector('.guessField'); // Numero digitado por el usuario
const guessSubmit = document.querySelector('.guessSubmit'); // Btn para validar el numero ingresado
// Elementos para mostrar alertas/información
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('lowOrHi');
// Variables para validar condiciones
let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    console.log('intento', guessCount)
    let userGuess = guessField.value; // Se obtiene el valor del numero ingresador por el usuario
    // Si no es un numero válido, no se hace nada y se muestra una alerta
    if(!isValidNumber(userGuess)){
        return alert('Debes ingresar un número válido comprendido del 1 al 100');
    }
    if(!triesLeft()){
        setGameOver();
    }
    // Si es un numero válido y hay intentos disponibles, se hacen las consideraciones correspondientes
    if (userGuess != randomNumber) {
        console.log(userGuess);
        console.log(randomNumber);
        console.log('Es diferente al numero random generado');
    }else{
        console.log('Felicitaciones! adivinaste el número!');
        
    }
    guessCount++;
}
    /*
    showPreviousNumber(userGuess);
    
    if (userGuess === randomNumber) {
        lastResult.textContent = '!!!Pérdistes!!!';
        lastResult.style.backgroundColor = 'black';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === ATTEMPS) {
        lastResult.textContent = 'Felicitaciones! adivinaste el número!';
        lastResult.style.backgroundColor = 'red';
        setGameOver();
    } else {
        lastResult.textContent = 'Incorrecto! ';
        lastResult.style.backgroundColor = 'green';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'El número es mayor!';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'El número es menor!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();*/
// Valida si lo que digita el usuario es un numero entero del 1 al 100
/**
 * function showPreviousNumber(userGuess){
    if (guessCount === 1) {
        guesses.textContent = 'Número aleatorio anterior: ';
    }
    guesses.textContent += userGuess + ' ';
}
*/
function isValidNumber(userGuess){
    return userGuess >= 1 && userGuess <= 100;
}

function triesLeft(){
    return guessCount <=10;
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Comienza un nuevo juego';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = 1;
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}