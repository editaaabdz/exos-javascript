// you can write js here
console.log('exo-3');

var rock;
var paper;
var scissors;

var userInput = prompt('Quelle est votre choix ?');

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case 'rock':
            console.log(userInput);
            break;
        case 'paper':
            console.log(userInput);
            break;
        case 'scissors':
            console.log(userInput);
            break;
        case 'bomb':
            console.log(userInput);
            break;

        default:
            console.log('error');

    }
    return userInput;
}

function getComputerChoice() {
    var computerInput = Math.floor(Math.random(0, 2));
    if (computerInput === 0) {
        return 'rock';
    } else if (computerInput === 1) {
        return 'paper';
    } else if (computerInput === 2) {
        return 'scissors';
    }
}

function determineWinner(UserChoice, ComputerChoice) {
    if (UserChoice === ComputerChoice) {
        return 'Tied';
    } else if (UserChoice === 'rock' && ComputerChoice === 'scissors') {
        return 'Won';
    } else if (UserChoice === 'scissors' && ComputerChoice === 'paper') {
        return 'Won';
    } else if (UserChoice === 'paper' && ComputerChoice === 'rock') {
        return 'Won';
    } else if (UserChoice === 'bomb') {
        return 't\'as gagné bg';
    } else {
        return 'Lost';
    }
}

function playGame() {

    var uChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
    console.log(determineWinner(getUserChoice(userInput), getComputerChoice()));
}

playGame();