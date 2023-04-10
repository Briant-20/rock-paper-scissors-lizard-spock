let computerChoice;
let playerChoice;
let winner;
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let choices = ["rock","paper","scissors","lizard","spock"];
let rules = {
    rock: { 
        beats: ['scissors','lizard'] 
    },
    paper: { 
        beats: ['rock','spock'] 
    },
    scissors: {
         beats: ['paper','lizard'] 
        },
    lizard: {
         beats: ['spock','paper'] 
        },
    spock: {
         beats: ['scissors','rock'] 
        }
  }

getComputerChoice = () => {
    let num = Math.floor(Math.random() * 5);
    computerChoice = choices[num];
    return computerChoice;
    }

playRound = (event) => {
    computerChoice = getComputerChoice();
    console.log(`The computer chose ${computerChoice}`);
    console.log(`You chose ${playerChoice}`);
    if(rules[playerChoice].beats.includes(computerChoice)){
        console.log("You win this round!");
    }
    if(rules[computerChoice].beats.includes(playerChoice)){
        console.log("Sorry the computer wins this round!");
    }
    if(playerChoice === computerChoice){
        console.log("This round is a tie try again");
    }
}
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    getPlayerChoice = (event) => {
        playerChoice = buttons[i].getAttribute("choice");
    }
    buttons[i].addEventListener("click", getPlayerChoice);
    buttons[i].addEventListener("click", playRound);
}
