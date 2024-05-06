function getComputerChoice() {
    let rock = Math.random()
    let paper = Math.random()
    let scissors = Math.random()
    if (rock > paper && rock > scissors) {
        return 'rock';
    } else if (paper > rock && paper > scissors) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = '';
    while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        let input = prompt('Choose your weapon: Rock, Paper, Scissors');
        if (input) {
            input = input.toLowerCase().trim();
            if (input === 'rock' || input === 'paper' || input === 'scissors') {
                humanChoice = input;
            } else {
                alert('Invalid choice, please enter Rock, Paper, or Scissors.');
            }
        } else {
            alert('Input cannot be empty. Please enter Rock, Paper, or Scissors.');
        }
    }
    return humanChoice;
}


function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`);
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You won! Rock beats Scissors.');
        return 1; // Human wins
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock.');
        return -1; // Computer wins
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You won! Paper beats Rock.');
        return 1; // Human wins
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Paper.');
        return -1; // Computer wins
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors.');
        return -1; // Computer wins
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You won! Scissors beats Paper.');
        return 1; // Human wins
    } else {
        console.log("It's a tie!");
        return 0; // Tie
    }
}



function playGame() {
    let roundCount = 0, humanScore = 0, computerScore = 0;
    while (roundCount < 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        if (result === 1) {
            humanScore++; // Increment human score on win
        } else if (result === -1) {
            computerScore++; // Increment computer score on loss
        }
        roundCount++;
    }
    console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('Congratulations! You won the game!');
    } else if (humanScore < computerScore) {
        console.log('Sorry! You lost the game.');
    } else {
        console.log('The game is a tie!');
    }
}

playGame();
