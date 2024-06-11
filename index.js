let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length) + 1;

    if (randomChoice === 1) {
        return "Rock";
    } if (randomChoice === 2) {
        return "Paper";
    } if (randomChoice === 3) {
        return "Scissors"
    }
    };
    

    function getHumanChoice() {
   let answer = prompt("Rock, Paper, or Scissors?").toLowerCase();

   if (answer === "rock") {
    return "Rock";
   } if (answer === "paper") {
    return "Paper"
   } if (answer === "scissors") {
    return "Scissors"
   } else {
    return "Please only use the given choices"
   }
 };
 
   function playRound(humanChoice, computerChoice) {
    
     if (humanChoice === "Rock" && computerChoice === "Scissors"
    || humanChoice === "Paper" && computerChoice === "Rock"
    || humanChoice === "Scissors" && computerChoice === "Paper") {
   console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
   return humanScore++;

    } else if (humanChoice === "Rock" && computerChoice === "Paper"
    || humanChoice === "Paper" && computerChoice === "Scissors"
    || humanChoice === "Scissors" && computerChoice === "Rock") {
     console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
     return computerScore++;
     
    } else {
        console.log("It's a tie! You both had the same choice!")
    }
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);



function playGame() {
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
}
