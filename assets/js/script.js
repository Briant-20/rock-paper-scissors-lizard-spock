let computerChoice;
let playerChoice;
let winner;
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let games = 0;
let buttons = document.getElementsByTagName("button");
let playAgain = document.getElementById("play-again");
let playAgainText = document.getElementsByTagName("p")[0];
let playAgainButton = document.getElementsByTagName("button")[0];
playAgain.style.display = 'none';
let gameArea = document.getElementById("game-area");
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
                gameArea.style.display = 'none';
                playAgain.style.display = 'flex';
                playAgainText.innerHTML = `The computer wins the game with ${computerWins} rounds out of 3`;
                }
            else if (playerWins > computerWins){
                gameArea.style.display = 'none';
                playAgain.style.display = 'flex';
                playAgainText.innerHTML = `Congrtulations you win the game with ${playerWins} rounds out of 3`;
            }
        }
    }
}

playGame = () => {
    games = 0;
    computerWins = 0;
    playerWins = 0;
    playAgain.style.display = 'none';
    gameArea.style.display = 'block';
    for (let i = 0; i < buttons.length; i++) {
        getPlayerChoice = () => {
        playerChoice = buttons[i].getAttribute("choice");
        }
        buttons[i].addEventListener("click", getPlayerChoice);
        buttons[i].addEventListener("click", playRound);
    }
}

playGame();
playAgainButton.addEventListener("click", playGame);
