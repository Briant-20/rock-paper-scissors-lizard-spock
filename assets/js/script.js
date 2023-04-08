let computerChoice;
let winner;
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let choices = ["Rock","Paper","Scissors","Lizard","Spock"];

getComputerChoice = () => {
    let num = Math.floor(Math.random() * 5);
    computerChoice = choices[num];
    }
