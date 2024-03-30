const buttons = document.querySelectorAll("button");
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let resultMessage = "";
    let playerChoice = "";
    switch (button.textContent) {
      case "Rock":
        playerChoice = "Rock";
        resultMessage = "You chose Rock";
        break;
      case "Paper":
        playerChoice = "Paper";
        resultMessage = "You chose Paper";
        break;
      case "Scissors":
        playerChoice = "Scissors";
        resultMessage = "You chose Scissors";
        break;
    }

    const computerChoice = getRandomChoice();
    resultMessage += ". Computer chose " + computerChoice + ". ";
    resultMessage += playRound(playerChoice, computerChoice);

    resultsDiv.textContent = resultMessage;
    scoreDiv.textContent =
      "Player: " + playerScore + " | Computer: " + computerScore;

    if (playerScore === 5 || computerScore === 5) {
      announceWinner();
    }
  });
});

function getRandomChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  let resultMessage = "";
  if (
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  ) {
    playerScore++;
    resultMessage = "You win this round!";
  } else if (playerChoice === computerChoice) {
    resultMessage = "It's a tie!";
  } else {
    computerScore++;
    resultMessage = "Computer wins this round!";
  }
  return resultMessage;
}

function announceWinner() {
  let winnerMessage = "";
  if (playerScore === 5) {
    winnerMessage = "Congratulations! You win the game!";
  } else if (computerScore === 5) {
    winnerMessage = "Computer wins the game. Better luck next time!";
  } else {
    winnerMessage = "Error: Unable to determine the winner.";
  }
  resultsDiv.textContent = winnerMessage;
}
