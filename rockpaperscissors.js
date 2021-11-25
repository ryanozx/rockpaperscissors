const scoreline = document.querySelector('.score');
const resultText = document.querySelector('.progresstext');
const buttons = document.querySelectorAll('.actions button');
const actionBox = document.querySelector('.actions');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let chooseComputerMove = Math.floor(Math.random() * 3);
    let computerMove;
    switch(chooseComputerMove) {
        case 0:
            computerMove = 'Rock';
            break;
        case 1:
            computerMove = 'Paper';
            break;
        case 2:
            computerMove = "Scissors";
            break;
    }
    return computerMove;
}

function playRound(playerSelection, computerSelection) {
    let gameResult;
    if (playerSelection === computerSelection) {
        gameResult = "D";
    }
    else if ((playerSelection === "Paper" && computerSelection === "Rock") || 
                (playerSelection === "Scissors" && computerSelection === "Paper") || 
                (playerSelection === "Rock" && computerSelection === "Scissors")) {
        gameResult = "W";
    }
    else {
        gameResult = "L";
    }
    updateScore(playerSelection, computerSelection, gameResult);
}

function updateScore(playerSelection, computerSelection, result) {
    if (result === "W") {
        scoreline.textContent = ++playerScore + " - " + computerScore;
        resultText.textContent = "W - " + playerSelection + " beats " + computerSelection + ".";
    }
    else if (result === "L") {
        scoreline.textContent = playerScore + " - " + ++computerScore;
        resultText.textContent = "L - " + computerSelection + " beats " + playerSelection + ".";
    }
    else {
        resultText.textContent = "D - You both chose " + playerSelection + "."; 
    }
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            resultText.textContent = "You won! Try again?";
        }
        else {
            resultText.textContent = "You lost! Try again?";
        }
        endGame();
    }
}

function capitalise(word) {
    const splitStrArray = word.split("");
    return splitStrArray[0].toUpperCase() + word.slice(1,);
}

function toggleButtonDisplay(mode) {
    const moveButtons = document.getElementsByTagName('button');
    for (let i = 0; i < moveButtons.length; i++) {
        moveButtons[i].style.display = mode;
    }
}

function endGame() {
    toggleButtonDisplay('none');
    const restart = document.createElement('button');
    restart.textContent = "Play again!";
    restart.style.cssText = 'border-radius: 12px; border-color: #ffffff; font-size: 30px; padding: 10px 30px;';
    restart.addEventListener('click', function() {
        playerScore = 0;
        computerScore = 0;
        scoreline.textContent = "0 - 0";
        resultText.textContent = "Pick a move! First to five wins!";
        actionBox.removeChild(restart);
        toggleButtonDisplay('block');
    })
    actionBox.appendChild(restart);
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => playRound(capitalise(e.target.id), computerPlay()));
})

