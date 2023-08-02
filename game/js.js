let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

let checkButton = document.querySelector(".check");
let guess = document.querySelector(".guess");
let mainNumber = document.querySelector(".number");
let body = document.querySelector("body");
let highScoreElement = document.querySelector(".highScore");
let scoreElement = document.querySelector(".score");
let again = document.querySelector(".again");

checkButton.addEventListener("click", function () {
    let userGuess = Number(guess.value);
    if (!userGuess) {
        displayMessage("No number");
    }
    if (userGuess > 20) {
        displayMessage("Please enter a number below 20");
    } else {
        if (userGuess === secretNumber) {
            displayMessage("Correct Number");
            mainNumber.textContent = secretNumber;
            body.style.backgroundColor = "green";

            if (score > highScore) {
                highScore = score;
                highScoreElement.textContent = highScore;
            }
        } else if (userGuess !== secretNumber) {
            if (score > 1) {
                displayMessage(userGuess < secretNumber ? "Number is too low" : "Number is too high");
                score--;
                scoreElement.textContent = score;
            } else {
                displayMessage("You have lost the game");
            }
        }
    }
});

again.addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage("Start guessing...");
    body.style.backgroundColor = "#222";
    mainNumber.textContent = "?";
    scoreElement.textContent = score;
    guess.value = "";
});