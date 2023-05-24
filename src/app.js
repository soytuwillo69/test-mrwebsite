let randomNumber = Math.floor(Math.random() * 100) + 1; // Numero entero aleatorio del 1 al 100
const ATTEMPS = 10; // Intentos permitidos
const guessField = document.querySelector('.guessField'); // Numero digitado por el usuario
const guessSubmit = document.querySelector('.guessSubmit'); // Btn para validar el numero ingresado
// Elementos para mostrar alertas/información
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('lowOrHi');
// Variables para validar condiciones
let guessCount = 0;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = guessField.value; // Se obtiene el valor del numero ingresador por el usuario
    // Si es un numero válido, se hacen las consideraciones correspondientes
    if(isValidNumber(userGuess)){
        guessCount++;

    }
    alert('Debes ingresar un número válido comprendido del 1 al 100');
    
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
}

// Valida si lo que digita el usuario es un numero entero del 1 al 100
function isValidNumber(userGuess){
    return userGuess >= 1 && userGuess <= 100;
}

function showPreviousNumber(userGuess){
    if (guessCount === 1) {
        guesses.textContent = 'Número aleatorio anterior: ';
    }
    guesses.textContent += userGuess + ' ';
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Comienza un nuevo juego';
    document.body.appendChild(resetButton);
    resetButton.addeventListener('click', resetGame);
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
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random()) + 1;
}