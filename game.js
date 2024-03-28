function getComputerChoice () {
    const strings = ["Rock" , "Paper" , "Scissors"];

    const randNum = Math.floor(Math.random() * 3);
    
    return strings [randNum];

}