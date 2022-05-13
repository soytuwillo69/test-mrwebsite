Listado de Corrección por orden de aparición

1. Se corrigio el rango del numero aleatorio y se cambio el tipo de variable porque mas adelante se necesitara que la variable randomNumber sea global.
    - (original) let randomNumber = Math.random() * 10;
    - (correción) var randomNumber = parseInt(1 + Math.random() * 100);

2. Se corrigio el numero de intentos 
    -(original) const ATTEMPS = 5;
    -(correción) const ATTEMPS = 10;

3. Se corrigio un error de sintaxis
    -(original) const lowOrHi = document.querySelector('lowOrHi');
    -(corrección) const lowOrHi = document.querySelector('.lowOrHi');

4. Se cambio el tipo de dato de texto a numero entero.
    -(original) let userGuess = guessField.value;
    -(corrección) let userGuess = parseInt(guessField.value);

5. Se cambio el orden de las condiciones del if y se cambio el color de las alertas por un mas adecuado al resultado.
    -(original) 
    if(userGuess === randomNumber) {
      lastResult.textContent = '!!!Pérdistes!!!';
      lastResult.style.backgroundColor = 'black';
      lowOrHi.textContent = '';
      setGameOver();
    } else if(guessCount === ATTEMPS) {
      lastResult.textContent = 'Felicitaciones! adivinaste el número!';
      lastResult.style.backgroundColor = 'red';
      setGameOver();
    } else {
      lastResult.textContent = 'Incorrecto! ';
      lastResult.style.backgroundColor = 'green';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'El número es mayor!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'El número es menor!';
      }
    }

    -(corrección)
    if(guessCount === ATTEMPS) {
        lastResult.textContent = '!!!Pérdistes!!!';      
        //Cambio de color de black a red
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = '';
        setGameOver();
      } else if(userGuess === randomNumber) {
        lastResult.textContent = 'Felicitaciones! adivinaste el número!';      
        //Cambio de color de red a green
        lastResult.style.backgroundColor = 'green';
        setGameOver();
      } else {      
        lastResult.textContent = 'Incorrecto! ';            
        //Cambio de color de green a black    
        lastResult.style.backgroundColor = 'black';       
        if(userGuess < randomNumber) {        
          lowOrHi.textContent = 'El número es mayor!';                        
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'El número es menor!';        
        }
      }

6. Se corrigio un error de sintaxis
    -(original) guessSubmit.addeventListener('click', checkGuess);
                resetButton.addeventListener('click', resetGame);
    -(corrección) guessSubmit.addEventListener('click', checkGuess);
                  resetButton.addEventListener('click', resetGame);

