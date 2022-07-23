const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
function getComputerChoice() {
	//Creates random number for computer choice
	let randomNum = Math.floor(Math.random() * 3);
	//Array of choices for computer
	return choices[randomNum];
}

//getComputerChoice();

function playRound(computerChoice, playerChoice) {
	console.log(computerChoice);
	console.log(playerChoice);
	console.log("play round");
	let roundOutcome = "";
	if (computerChoice === "rock" && playerChoice === "scissors") {
		roundOutcome = "You lose! Rock beats Scissors";
		computerScore++;
	} else if (computerChoice === "rock" && playerChoice === "paper") {
		roundOutcome = "You win! Paper beats rock!";
		playerScore++;
	} else if (computerChoice === "scissors" && playerChoice === "paper") {
		roundOutcome = "You lose! Scissors beats Paper";
		computerScore++;
	} else if (computerChoice === "paper" && playerChoice === "scissors") {
		roundOutcome = "You win! Scissors beats paper!";
		playerScore++;
	} else if (computerChoice === "scissors" && playerChoice === "rock") {
		roundOutcome = "You win! Rock beats scissors";
		playerScore++;
	} else if (computerChoice === "paper" && playerChoice === "rock") {
		roundOutcome = "You lose! Paper beats rock!";
		computerScore++;
	} else if (computerChoice === "paper" && playerChoice === "paper") {
		retroundOutcome = "Both chose paper!";
	} else if (computerChoice === "rock" && playerChoice === "rock") {
		roundOutcome = "Both chose rock!";
	} else if (computerChoice === "scissors" && playerChoice === "scissors") {
		roundOutcome = "Both chose scissors!";
	} else if (
		playerChoice === null ||
		playerChoice === undefined ||
		choices.includes(playerChoice) === false
	) {
		return "Player entered invalid value";
	}
	return roundOutcome;
}

function getPlayerSelection() {
	playerChoice = prompt("Please enter a rock, paper or scissors")
		.toString()
		.toLowerCase();
	return playerChoice;
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(getComputerChoice(), getPlayerSelection()));
	}
	console.log(computerScore);
	console.log(playerScore);
	if (computerScore > playerScore) {
		console.log("The computer won!");
	} else if (playerScore > computerScore) {
		console.log("You won!");
	} else if (playerScore == computerScore) {
		console.log("Tie!");
	} else {
		console.log("Error!");
	}
}
game();
