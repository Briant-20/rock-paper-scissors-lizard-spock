let computerChoice;
var playerChoice;
let winner;
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let choices = ["Rock","Paper","Scissors","Lizard","Spock"];

getComputerChoice = () => {
    let num = Math.floor(Math.random() * 5);
    computerChoice = choices[num];
    }

getPlayerChoice = (event) => {
    playerChoice = dataType;
    console.log(playerChoice);
}

let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    getDataType = (event) => {
        dataType = buttons[i].getAttribute("data-type")
    }
    buttons[i].addEventListener("click", getDataType);
    buttons[i].addEventListener("click", getPlayerChoice);
}
