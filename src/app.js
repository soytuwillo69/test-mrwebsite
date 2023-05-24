let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


const ATTEMPS = 5;


const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {

    let userGuess = guessField.value;
    if (guessCount === 1) {
        guesses.textContent = 'Número aleatorio anterior: ';
    }
    guesses.textContent += userGuess + ' ';

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
    guessField.focus();
}
guessSubmit.addeventListener('click', checkGuess);

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