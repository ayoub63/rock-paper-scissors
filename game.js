function getComputerChoice() {
  const strings = ["rock", "paper", "scissors"];

  const randNum = Math.floor(Math.random() * 3);

  return strings[randNum].toLowerCase();
}

function getPlayerChoice() {
  finish = true;
  while (finish) {
    let userChoice = prompt("Pick Rock , Paper , or Scissors. ").toLowerCase();

    if (
      userChoice == "rock" ||
      userChoice == "paper" ||
      userChoice == "scissors"
    ) {
      finish = false;
    } else {
      alert("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
    }
  }
  return userChoice;
}

function playRound(getComputerChoice, getPlayerChoice) {
  const getComputerChoice = getComputerChoice();
  const getPlayerChoice = getPlayerChoice();

  if (getComputerChoice == getPlayerChoice) {
    return "It is a tie!";
  } else if (
    (getComputerChoice == "rock" && getPlayerChoice == "paper") ||
    (getComputerChoice == "paper" && getPlayerChoice == "rock") ||
    (getComputerChoice == "scissors" && getPlayerChoice == "paper")
  ) {
    return "Computer wins";
  } else {
    return "Player wins";
  }
}
