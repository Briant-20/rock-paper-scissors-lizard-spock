/* jshint esversion: 11 */
// Initialize variables for game state
let computerChoice;
let playerChoice;
let playerWins = 0;
let computerWins = 0;
let games = 0;
let playerChoiceIcon;
let computerChoiceIcon;
// Get HTML elements for variables
let buttons = document.getElementsByTagName("button");
let playAgain = document.getElementById("play-again");
let playAgainText = document.getElementById("p4")
let playAgainButton = document.getElementById("play-again-button");
let gameArea = document.getElementById("game-area");
let choiceIcons = document.getElementById("choice-icons");
let roundResults = document.getElementById("p1");
let choices = ["Rock","Paper","Scissors","Lizard","Spock"];
let playerIcon = document.getElementById("p2");
let computerIcon = document.getElementById("p3");
let rulesModal = document.getElementById("rules-modal");
let rulesButton = document.getElementById("rules-button");
let closeButton = document.getElementById("close-button");
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
};

// Function to randomly select computer's choice
let getComputerChoice = () => {
    let num = Math.floor(Math.random() * 5);
    computerChoice = choices[num];
    computerChoiceIcon = gameArea.querySelectorAll("button");
    computerChoiceIcon = computerChoiceIcon[num].innerHTML;
};

// Function to play a round of the game
let playRound = () => {
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
        if(rules[playerChoice.toLowerCase()].beats.includes(computerChoice.toLowerCase())){
            roundResults.innerHTML = "You win this round! ";
            roundResults.innerHTML += `${playerChoice} beats ${computerChoice}`;
            playerWins++;
            games++;
        }
        else if(rules[computerChoice.toLowerCase()].beats.includes(playerChoice.toLowerCase())){
            roundResults.innerHTML = "You lose! ";
            roundResults.innerHTML += `${computerChoice} beats ${playerChoice}`;
            computerWins++;
            games++;
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
};

// Function to get the palyers choice
let getPlayerChoice = (i) => {
    return function() {
    // Get the player's choice from the button's attribute
    playerChoice = buttons[i].getAttribute("data-type");
    // Reset the variable i to 3 if it is equal to 1 to avoid a TypeError 
    if (i === 1 ){
        i = 3
    }
    // Set the playerChoiceIcon variable to the innerHTML of the button
    playerChoiceIcon = gameArea.querySelectorAll("button")[i-2].innerHTML;
    };
}; 
// Function to start a new game
let playGame = () => {
    // Reset game state
    games = 0;
    computerWins = 0;
    playerWins = 0;
    playAgain.style.display = 'none';
    gameArea.style.display = 'block';
    choiceIcons.style.display = 'none';
    roundResults.innerHTML = "Best of 3, choose wisely";
    // Set up event listeners for each button
    for (let i = 1; i < buttons.length; i++) {
    // Add event listeners to the button
    buttons[i].addEventListener("click", getPlayerChoice(i));
    buttons[i].addEventListener("click", playRound);
}
};

// Function to display the rules modal
let displayRules = () => {
    rulesModal.style.display = "block";
  }
// Calls the displayRules function when the rulesButton is clicked 
rulesButton.addEventListener("click",displayRules)
// Function to hide the rules modal
let hideRules = () => {
    rulesModal.style.display = "none";
  }
// Calls the displayRules function when the closeButton is clicked
closeButton.addEventListener("click",hideRules)

// Call the playGame function to start the game
playGame();

// Add an event listener to the playAgainButton to start a new game when clicked
playAgainButton.addEventListener("click", playGame);
