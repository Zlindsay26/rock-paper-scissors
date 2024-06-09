function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length) + 1;

    if (randomChoice === 1) {
        return "Rock";
    } if (randomChoice === 2) {
        return "Paper";
    } if (randomChoice === 3) {
        return "Scissors"
    }
    }
    
    function getHumanChoice() {
   let answer = prompt("Rock, Paper, or Scissors?");

   if (answer === "Rock") {
    return "Rock";
   } if (answer === "Paper") {
    return "Paper"
   } if (answer === "Scissors") {
    return "Scissors"
   } else {
    return "Please only use the given choices"
   }

    };
    