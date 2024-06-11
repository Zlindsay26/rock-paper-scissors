let playRoundResult;
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

function playGame() {
    if (playRoundResult == "It's a tie! You both had the same choice!") {
        computerScore += 0;
      } else if (playRoundResult == `You win this round! ${humanChoice} beats ${computerChoice}`) {
        playerScore++;
      } else if (playRoundResult == `You lose this round! ${computerChoice} beats ${humanChoice}`) {
        computerScore++;
      }
    
}
for(var i=0;i<5;i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
console.log(`Computer: ${computerScore}`);
console.log(`Player: ${humanScore}`);
};