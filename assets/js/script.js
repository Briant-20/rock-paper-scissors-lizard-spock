let computerChoice;
let playerChoice;
let winner;
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let games = 0;
let buttons = document.getElementsByTagName("button");
let playAgain = document.getElementsByTagName("p")[0];
let playAgainBox = document.querySelector('#play-again');
let playAgainButton = playAgainBox.querySelector('button');
playAgainBox.style.display = 'none';
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

playRound = () => {
    if (games < 3){
    computerChoice = getComputerChoice();
    console.log(`The computer chose ${computerChoice}`);
    console.log(`You chose ${playerChoice}`);
    if(rules[playerChoice].beats.includes(computerChoice)){
        console.log("You win this round!");
        playerWins++;
        games++
    }
    else if(rules[computerChoice].beats.includes(playerChoice)){
        console.log("Sorry the computer wins this round!");
        computerWins++;
        games++
    }
    else{
        console.log("This round is a tie try again");
    }
    if (games === 3){
        console.log(games);
        if (computerWins > playerWins){
            playAgainBox.style.display = 'block';
            playAgain.innerHTML = `The computer wins the game with ${computerWins} rounds total out of 3`;
            }
        else if (playerWins > computerWins){
            playAgainBox.style.display = 'block';
            playAgain.innerHTML = `Congrtulations you win the game with ${playerWins} rounds total out of 3`;
        }
    }
}
}
playGame = (event) => {
    games = 0;
    computerWins = 0;
    playerWins = 0;
    playAgainBox.style.display = 'none';
    for (let i = 0; i < buttons.length; i++) {
        getPlayerChoice = (event) => {
        playerChoice = buttons[i].getAttribute("choice");
    }
        buttons[i].addEventListener("click", getPlayerChoice);
        buttons[i].addEventListener("click", playRound);
    }
    }
playGame();
let startGame = document.getElementById("play-again");
startGame.addEventListener("click", playGame);
