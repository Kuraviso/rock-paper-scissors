let playerScore = 0;
let computerScore = 0;
let playerClickSelection;

const buttons = document.querySelectorAll("button");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const combatArea = document.getElementById("combatArea");
const results = document.createElement("p");
const playerImg = document.createElement("img");
const computerImg = document.createElement("img");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerChoice, computerChoice) {
  let result = "";
  let finalResult = "";
  if (playerChoice === computerChoice) {
    result = "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Player wins";
    playerScore += 1;
    playerScoreDisplay.innerText = `Player: ${playerScore}`;
  } else {
    result = "Computer wins";
    computerScore += 1;
    computerScoreDisplay.innerText = `Computer: ${computerScore}`;
  }
  finalResult = `${result}: \n${playerChoice} vs ${computerChoice}`;
  return finalResult;
}

function playGame(playerClickSelection) {
  const playerSelection = playerClickSelection;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  results.innerText = result;
  results.style.textAlign = "center";
  combatArea.appendChild(results);
  playerImg.setAttribute("src", `./images/${playerClickSelection}.png`);
  computerImg.setAttribute("src", `./images/${computerSelection}.png`);
  combatArea.appendChild(playerImg);
  combatArea.appendChild(computerImg);

  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      results.innerText = "Congratulations you win!";
      results.style.fontSize = "36px";
      buttons.forEach((item) => {
        item.disabled = true;
      });
    } else if (computerScore > playerScore) {
      window.alert("You lost. The computer wins");
    } else {
      window.alert("It's a tie!");
    }
  }
}

rockButton.addEventListener("click", () => {
  playerClickSelection = "rock";
  playGame(playerClickSelection);
});

paperButton.addEventListener("click", () => {
  playerClickSelection = "paper";
  playGame(playerClickSelection);
});

scissorsButton.addEventListener("click", () => {
  playerClickSelection = "scissors";
  playGame(playerClickSelection);
});
