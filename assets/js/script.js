let computerChoice;
let playerChoice;
let winner;
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let games = 0;
let buttons = document.getElementsByTagName("button");
let playAgain = document.getElementById("play-again");
let playAgainText = document.getElementsByTagName("p")[1];
let playAgainButton = document.getElementsByTagName("button")[0];
playAgain.style.display = 'none';
let gameArea = document.getElementById("game-area");
let roundResults = document.getElementById("round-results");
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
        roundResults.innerHTML = `You chose ${playerChoice} `;
        roundResults.innerHTML += `The computer chose ${computerChoice} `;
        if(rules[playerChoice].beats.includes(computerChoice)){
            roundResults.innerHTML += "You win this round!";
            roundResults.style.display = 'flex';
            playerWins++;
            games++
        }
        else if(rules[computerChoice].beats.includes(playerChoice)){
            roundResults.innerHTML += "Sorry the computer wins this round!";
            roundResults.style.display = 'flex';
            computerWins++;
            games++
        }
        else{
            roundResults.innerHTML += "This round is a tie try again";
            roundResults.style.display = 'flex';
        }
        if (games === 3){
            gameArea.style.display = 'none';
            playAgain.style.display = 'flex';
            if (computerWins > playerWins){
                playAgainText.innerHTML = `The computer wins the game with ${computerWins} rounds out of 3`;
                }
            else if (playerWins > computerWins){
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
