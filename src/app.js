let randomNumber = Math.floor(Math.random() * 100) + 1; // Numero entero aleatorio del 1 al 100
const ATTEMPS = 10; // Intentos permitidos
const guessField = document.querySelector('.guessField'); // Numero digitado por el usuario
const guessSubmit = document.querySelector('.guessSubmit'); // Btn para validar el numero ingresado
// Elementos para mostrar alertas/información
const alerts = document.querySelector('.alerts');
const guesses = document.querySelector('.guesses');
const tries = document.querySelector('.tries');
const lastResult = document.querySelector('.lastResult');
// Variables para validar condiciones
let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    console.log('Random Number -> ', randomNumber);
    let userGuess = guessField.value; // Se obtiene el valor del numero ingresador por el usuario
    // Si no es un numero válido, no se hace nada y se muestra una alerta
    if(!isValidNumber(userGuess)){
        return alert('Debes ingresar un número válido comprendido del 1 al 100');
    }
    // Si es un numero válido, se hacen las consideraciones correspondientes
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
    // Si ya no hay intentos, se ejecuta la funcion que permite reanudar el juego y se muestra alerta correspondiente
    if(!triesLeft()){
        lastResult.textContent = '¡Perdiste! (NO adivinaste el número)';
        lastResult.style.backgroundColor = 'red';
        setGameOver();
    }
}

function isValidNumber(userGuess){
    return userGuess >= 1 && userGuess <= 100;
}

function triesLeft(){
    return guessCount < 10;
}

function isLowOrHi(userGuess){
    lastResult.textContent = '¡Incorrecto! ';
    lastResult.style.backgroundColor = 'orange';
    if (userGuess < randomNumber) {
        lastResult.textContent += '(El número es mayor)';
    } else if (userGuess > randomNumber) {
        lastResult.textContent += '(El número es menor)';
    }
}

function showPreviousNumber(userGuess){
    alerts.style.backgroundColor = 'antiquewhite';
    guesses.textContent = ' Número anterior: ' + userGuess;
    tries.textContent = 'Intento: ' + guessCount;
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
    alerts.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}