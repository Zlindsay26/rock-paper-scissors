const humanScore = 0;
const computerScore = 0;



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
    };
    

    function getHumanChoice() {
   let answer = prompt("Rock, Paper, or Scissors?").toLowerCase();

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
 const humanChoice = getHumanChoice();
 const computerChoice = getComputerChoice();
   function playRound(humanChoice, computerChoice) {

     if (humanChoice === "rock" && computerChoice === "Scissors"
    || humanChoice === "paper" && computerChoice === "Rock"
    || humanChoice === "scissors" && computerChoice === "Paper") {
   
   humanScore++;
   console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "Paper"
    || humanChoice === "paper" && computerChoice === "Scissors"
    || humanChoice === "scissors" && computerChoice === "Rock") {

        computerScore++;
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    } else {
        console.log("It's a tie! You both had the same choice!")
    }
};

function playGame() {
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);


}
