let random = Math.floor(Math.random() * 100 + 1);
const guesses = document.querySelector('.guesses'),
    lastResult = document.querySelector(".lastResult"),
    lowOrHi = document.querySelector('.lowOrHi'),
    guessSubmit = document.querySelector(".guessSubmit"),
    guessField = document.querySelector(".guessField");
let count = 1;
let resetButton;
function checkGuess() {
    let userGuess = Number(guessField.value);

    if (count === 1) {
        guesses.textContent = "Previous guesses: ";

    }
    guesses.textContent += userGuess + " ";

    if (userGuess === random) {
        lastResult.textContent = "Congradulation! You won!";
        lastResult.style.backgroundcolor = "green";
        lowOrHi.textContent = "";
        gameOver();
    }
    else if (count === 10) {
        lastResult.textContent = "GAME OVER!";
        lastResult.style.backgroundColor = "red";
        gameOver();
        lowOrHi.textContent = "";
    }
    else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess > random) {
            lowOrHi.textContent = "Too high!";
        }
        else if (userGuess < random){
            lowOrHi.textContent = "Too low!";
        }
    }
    count++;
    guessField.value = "";
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

function gameOver() {
  resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.addEventListener("click", resetGame);
}
function resetGame() {
    count = 1;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    const resetParas = document.querySelectorAll(".resultParas");
    for (let i in resetParas) {
        i.textContent = "";
    }
   	 resetButton.parentNode.removeChild(resetButton);
    lastResult.style.backgroundColor = "white";
    random = Math.floor(Math.random() * 100 + 1);
}

