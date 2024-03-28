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
  let compWin1 = "Computer wins, Computer picked " + getComputerChoice1;
    let playWin2 = "Player wins,  Computer picked " + getComputerChoice1;
  if (getComputerChoice1 == getPlayerChoice2) {
    return "It is a tie!";
  } else if (
    (getComputerChoice1== "rock" && getPlayerChoice2 == "paper") ||
    (getComputerChoice1 == "paper" && getPlayerChoice2 == "rock") ||
    (getComputerChoice1 == "scissors" && getPlayerChoice2 == "paper")
  ) {
    return compWin1;
  } else {
    return playWin2;
  }
}
 


function playGame () {
    let compWin = "Computer wins";
    let playWin = "Player wins";
    countPlayer = 0;
    countCom = 0;
    for (i = 0 ; i < 5 ; i++) {
       let roundResult = playRound();
        if (roundResult.startsWith(compWin)) {
            countCom++;
        }
        else if(roundResult.startsWith(playWin)) {
            countPlayer++;
        }}
        if (countPlayer > countCom) {
            return "Player won over 5 rounds " + "Computer Score: " + countCom + "Player Score: " + countPlayer ;
        }
        else 
        if (countCom > countPlayer) {
            return "Computer won over 5 rounds " + "Computer Score: " + countCom + " Player Score: " + countPlayer ;
        }
       
     return "No winner after 5 rounds. Computer Score: " + countCom + ", Player Score: " + countPlayer;
    
    

}