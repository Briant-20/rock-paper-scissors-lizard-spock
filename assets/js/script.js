let computerChoice;
let playerChoice;
let winner;
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let games = 0;
let buttons = document.getElementsByTagName("button");
let playAgain = document.getElementById("play-again");
let playAgainText = document.getElementsByTagName("p")[3];
let playAgainButton = document.getElementsByTagName("button")[0];
let gameArea = document.getElementById("game-area");
let roundResults = document.getElementsByTagName("p")[0];
let choices = ["rock","paper","scissors","lizard","spock"]
let playerIcon = document.getElementsByTagName("p")[1];
let computerIcon = document.getElementsByTagName("p")[2];
let playerChoiceIcon;
playAgain.style.display = 'none';
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
    computerChoiceIcon = gameArea.querySelectorAll("button");
    computerChoiceIcon = computerChoiceIcon[num].innerHTML;
}

playRound = () => {
    if (games < 3){
        getComputerChoice();
        playerIcon.innerHTML = playerChoiceIcon;
        computerIcon.innerHTML = computerChoiceIcon;
        if(rules[playerChoice].beats.includes(computerChoice)){
            roundResults.innerHTML = "You win this round! ";
            roundResults.innerHTML += `${playerChoice} beats ${computerChoice}`
            roundResults.style.display = 'flex';
            playerWins++;
            games++
        }
        else if(rules[computerChoice].beats.includes(playerChoice)){
            roundResults.innerHTML = "You lose! ";
            roundResults.innerHTML += `${computerChoice} beats ${playerChoice}`
            roundResults.style.display = 'flex';
            computerWins++;
            games++
        }
        else{
            roundResults.innerHTML = "This round is a tie try again";
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
    playerIcon.innerHTML="";
    computerIcon.innerHTML="";
    roundResults.innerHTML = "Best of 3, choose wisely";
    for (let i = 0; i < buttons.length; i++) {
        getPlayerChoice = () => {
        playerChoice = buttons[i].getAttribute("choice");
        playerChoiceIcon = gameArea.querySelectorAll("button");
        playerChoiceIcon = playerChoiceIcon[i-1].innerHTML;
        }
        buttons[i].addEventListener("click", getPlayerChoice);
        buttons[i].addEventListener("click", playRound);
    }
}

playGame();
playAgainButton.addEventListener("click", playGame);
