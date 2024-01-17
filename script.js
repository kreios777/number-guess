const guess = document.querySelector('input');
const submitBtn = document.querySelector('button');
const status = document.querySelector('.status');
const guessList = document.querySelector('.guessList');
const reset = document.querySelector('.reset');
const chanceValue = document.querySelector('.chance');
let guessValue = 0;

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
let chance = 0;
let tries = 10;

function submit(){
    guessValue = guess.value;
    if (guessValue > randomNum){
        chance++;
        tries--;
        chanceValue.textContent = "Chance: " + tries;
        status.textContent = "Number is LOWER Try again";
        status.style.color = "red";
        guessList.textContent += guessValue + " ";
    }
    else if (guessValue < randomNum){
        chance++;
        tries--;
        chanceValue.textContent = "Chance: " + tries;
        status.textContent = "Number is HIGHER. Try again";
        status.style.color = "red";
        guessList.textContent += guessValue + " ";
    } else {
        status.textContent = "Congratulations, you guessed it! The number is " + randomNum;
        status.style.color = "green";
        gameOver();
    }

    if (chance == 10){
        console.log("game over");
        gameOver();
        
    } 
}

function gameOver(){
    guess.disabled = true;
    submitBtn.disabled = true;
    reset.style.display = 'block';

}

function resetGame() {
    resetParas = document.querySelectorAll('p');
    Array.from(resetParas).forEach(element => {
        element.textContent = "";
    });
    guess.disabled = false;
    submitBtn.disabled = false;
    chance = 0;
    randomNum = Math.floor(Math.random() * 100) + 1; // Update the global variable
    console.log(randomNum);
    reset.style.display = 'none';
    guess.value = "";
    tries = 10;

}

