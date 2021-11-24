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
    if (playerSelection === computerSelection) {
        return "D";
    }
    else if ((playerSelection === "Paper" && computerSelection === "Rock") || 
                (playerSelection === "Scissors" && computerSelection === "Paper") || 
                (playerSelection === "Rock" && computerSelection === "Scissors")) {
        return "W";
    }
    else {
        return "L";
    }
}


function game() {
    let playerWins = 0, computerWins = 0;
    for (let i = 1; i < 6; i++) {
        let playerSelection;
        do {
            playerSelection = prompt("Choose move:");
        }
        while (!checkValidPlayerMove(playerSelection));
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        switch(roundResult) {
            case "W":
                console.log("Round " + i + ": You win! " + playerSelection + " beats " + computerSelection + "!");
                playerWins++;
                break;
            case "L":
                console.log("Round " + i + ": You lose! " + computerSelection + " beats " + playerSelection + "!");
                computerWins++;
                break;
            case "D":
                console.log("Round " + i + ": It's a draw! You both chose " + computerSelection + ".");
                break;
        }
        console.log("Player: " + playerWins + ", Computer: " + computerWins);
    }
    announceWinner(playerWins, computerWins);
}

function checkValidPlayerMove(playerInput) {
    return playerInput.toUpperCase() === "ROCK" || playerInput.toUpperCase() === "PAPER" || playerInput.toUpperCase() === "SCISSORS";
}

function capitalise(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function announceWinner(playerScore, computerScore) {
    let resultText;
    if (playerScore > computerScore) {
        resultText = "You won!";
    }
    else if (computerScore > playerScore) {
        resultText = "You lost!";
    }
    else {
        resultText = "It's a draw!";
    }
    console.log(resultText + " Final score: " + playerScore + "-" + computerScore);
}

game();