// Generates a random choice of 'rock', 'paper', or 'scissors'.

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getPlayerChoice() {
  const validPick = ["rock", "paper", "scissors"];
  let playerSelection;
  do {
    playerSelection = String(
      prompt("Pick your Weapon \nrock, paper or scissors", "")
    ).toLowerCase();
  } while (!validPick.includes(playerSelection));
  return playerSelection;
}

function playRound(playerChoice, computerChoice) {
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Player wins";
    playerScore += 1;
  } else {
    result = "Computer wins";
    computerScore += 1;
  }
  window.alert(
    `${result}: ${playerChoice} vs ${computerChoice} \nThe Score is: \nplayer: ${playerScore} - computer: ${computerScore}`
  );
  return `${result}: ${playerChoice} vs ${computerChoice} \nThe Score is: \nplayer: ${playerScore} - computer: ${computerScore}`;
}

function playGame() {
  for (i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerChoice, computerSelection));
  }

  if (playerScore > computerScore) {
    window.alert("Congratulations you win!");
  } else if (computerScore > playerScore) {
    window.alert("You lost. The computer wins");
  } else {
    window.alert("It's a tie!");
  }
}

let playerScore = 0;
let computerScore = 0;

playGame();
