const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

const gameScore = document.querySelector("#gameScore");

const gameResult = document.querySelector("#gameResult");

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3) + 1;
  if (randomChoice == 1) {
    return "Rock";
  } else if (randomChoice == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return `It is a tie! You both picked ${computerSelection}.`;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

const playGame = (selection) => {
  if (playerScore < 5 && computerScore < 5) {
    console.log(selection);
    const playerSelection = selection;
    const computerSelection = getComputerChoice();
    gameResult.innerText = playRound(playerSelection, computerSelection);
  }
  if (playerScore >= 5) {
    gameResult.innerText = "Congratulations you have won!";
  } else if (computerScore >= 5) {
    gameResult.innerText = "You have lost!";
  }
  gameScore.innerText = `Score: You ${playerScore} | ${computerScore} Computer`;
};

rockButton.addEventListener("click", () => playGame("Rock"));
paperButton.addEventListener("click", () => playGame("Paper"));
scissorsButton.addEventListener("click", () => playGame("Scissors"));
