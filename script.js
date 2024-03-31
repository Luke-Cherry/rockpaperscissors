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
    return `You Win! ${playerSelection} beats ${computerSelection}.`
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`
  }
};

const playGame = () => {
    const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

playGame();
