function getComputerChoice() {
  const strings = ["rock", "paper", "scissors"];

  const randNum = Math.floor(Math.random() * 3);

  return strings[randNum];
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

