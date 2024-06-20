let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = getComputerChoice();
let playRoundResult = playRound(humanChoice, computerChoice);

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * choices.length);
  
    if (randomChoice === 0) {
        return "Rock";
    } if (randomChoice === 1) {
        return "Paper";
    } if (randomChoice === 2) {
        return "Scissors";
    };
  };
    
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");
    

 function getHumanChoice() {
   
 button1.onclick = () => {
     humanChoice = "Rock";
     playRound();
  };
  button2.onclick = () => {
    humanChoice = "Paper";
    playRound();                  
  };
  button3.onclick = () => {
    humanChoice = "Scissors";
    playRound();
  };
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


  if (humanScore < 5 && computerScore < 5) {
    
}
        console.log(playRoundResult);
        console.log(`Computer: ${computerScore}`);
        console.log(`Player: ${humanScore}`);

        if (humanScore >= 5) {
            console.log('Congrats! You Win!');
        }
        else if (computerScore >= 5) {
            console.log('Sorry! You lose this time!');
        }
    };
    playGame();
