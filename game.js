function getComputerChoice() {
  const strings = ["rock", "paper", "scissors"];

  const randNum = Math.floor(Math.random() * 3);

  return strings[randNum].toLowerCase();
}

function getPlayerChoice() {
  finish = true;
  let userChoice;
  while (finish) {
    userChoice = prompt("Pick Rock , Paper , or Scissors. ").toLowerCase();

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

function playRound() {
  const getComputerChoice1 = getComputerChoice();
  const getPlayerChoice2 = getPlayerChoice();

  if (getComputerChoice1 == getPlayerChoice2) {
    return "It is a tie!";
  } else if (
    (getComputerChoice1== "rock" && getPlayerChoice2 == "paper") ||
    (getComputerChoice1 == "paper" && getPlayerChoice2 == "rock") ||
    (getComputerChoice1 == "scissors" && getPlayerChoice2 == "paper")
  ) {
    return "Computer wins, Computer picked " + getComputerChoice1;
  } else {
    return "Player wins,  Computer picked " + getComputerChoice1;
  }
}


