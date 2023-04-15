// Initialize variables for game state
let computerChoice;
let playerChoice;
let winner;
let playerWins = 0;
let computerWins = 0;
let tieGames = 0;
let games = 0;
// Get HTML elements for variables
let buttons = document.getElementsByTagName("button");
let playAgain = document.getElementById("play-again");
let playAgainText = document.getElementsByTagName("p")[3];
let playAgainButton = document.getElementsByTagName("button")[0];
let gameArea = document.getElementById("game-area");
let choiceIcons = document.getElementById("choice-icons");
let roundResults = document.getElementsByTagName("p")[0];
let choices = ["rock","paper","scissors","lizard","spock"]
let playerIcon = document.getElementsByTagName("p")[1];
let computerIcon = document.getElementsByTagName("p")[2];
let playerChoiceIcon;
// Hide the play-again button initially
playAgain.style.display = 'none';
// Define rules for which choices beat which other choices
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
// Function to randomly select computer's choice
getComputerChoice = () => {
    let num = Math.floor(Math.random() * 5);
    computerChoice = choices[num];
    computerChoiceIcon = gameArea.querySelectorAll("button");
    computerChoiceIcon = computerChoiceIcon[num].innerHTML;
}

// Function to play a round of the game
playRound = () => {
    // Only play a round if less than 3 rounds have been played
    if (games < 3){
        // Get the computer's choice and the player's choice
        getComputerChoice();
        playerIcon.innerHTML = playerChoiceIcon;
        computerIcon.innerHTML = computerChoiceIcon;
        // Display the round results
        roundResults.style.display = 'flex';
        choiceIcons.style.display = 'flex';
        // Determine the winner of the round based on the rules
        if(rules[playerChoice].beats.includes(computerChoice)){
            roundResults.innerHTML = "You win this round! ";
            roundResults.innerHTML += `${playerChoice} beats ${computerChoice}`
            playerWins++;
            games++
        }
        else if(rules[computerChoice].beats.includes(playerChoice)){
            roundResults.innerHTML = "You lose! ";
            roundResults.innerHTML += `${computerChoice} beats ${playerChoice}`
            computerWins++;
            games++
        }
        else{
            roundResults.innerHTML = "This round is a tie try again";
        }
        // If three rounds have been played, end the game
        if (games === 3){
            gameArea.style.display = 'none';
            playAgain.style.display = 'flex';
            if (computerWins > playerWins){
                playAgainText.innerHTML = `The computer wins the game with ${computerWins} rounds out of 3`;
                }
            else if (playerWins > computerWins){
                playAgainText.innerHTML = `You win the game with ${playerWins} rounds out of 3`;
            }
        }
    }
}


// Function to start a new game
playGame = () => {
    // Reset game state
    games = 0;
    computerWins = 0;
    playerWins = 0;
    playAgain.style.display = 'none';
    gameArea.style.display = 'block';
    choiceIcons.style.display = 'none';
    roundResults.innerHTML = "Best of 3, choose wisely";
     // Set up event listeners for each button
     for (let i = 0; i < buttons.length; i++) {
        getPlayerChoice = () => {
            // Get the player's choice from the button's choice attribute
            playerChoice = buttons[i].getAttribute("choice");

            // Set the playerChoiceIcon variable to the innerHTML of the button
            playerChoiceIcon = gameArea.querySelectorAll("button");
            playerChoiceIcon = playerChoiceIcon[i-1].innerHTML;
        }

        // Add event listeners to the button
        buttons[i].addEventListener("click", getPlayerChoice);
        buttons[i].addEventListener("click", playRound);
    }
}

// Call the playGame function to start the game
playGame();

// Add an event listener to the playAgainButton to start a new game when clicked
playAgainButton.addEventListener("click", playGame);
