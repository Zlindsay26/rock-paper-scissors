
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = getComputerChoice();


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
    

 function ButtonClick(choice) {
   
  humanChoice = choice;
  playRound(humanChoice, computerChoice);
  playGame();
 };

 button1.addEventListener('click', () => {
  computerChoice = getComputerChoice(); 
   ButtonClick("Rock");
});
button2.addEventListener('click', () => {
  computerChoice = getComputerChoice();
   ButtonClick("Paper");
});
button3.addEventListener('click', () => {
  computerChoice = getComputerChoice();
   ButtonClick("Scissors");
});

   function playRound(humanChoice, computerChoice) {
    
     if (humanChoice === "Rock" && computerChoice === "Scissors"
    || humanChoice === "Paper" && computerChoice === "Rock"
    || humanChoice === "Scissors" && computerChoice === "Paper") {
   console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
     humanScore++;

    } else if (humanChoice === "Rock" && computerChoice === "Paper"
    || humanChoice === "Paper" && computerChoice === "Scissors"
    || humanChoice === "Scissors" && computerChoice === "Rock") {
     console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
      computerScore++;

    } else {
        alert("This round is a TIE! Please pick again!");
    };
};

function playGame() {

  
  const computerDisplay = document.querySelector('#computer-display');
  computerDisplay.innerHTML = `Computer: ${computerScore}`;
  const humanDisplay = document.querySelector('#human-display');
    humanDisplay.innerHTML = `Player: ${humanScore}`;
  
  
        if (humanScore >= 5) {
            humanDisplay.innerHTML= 'Congrats! You WON the Game! Click the button below to try again!';
        }
        else if (computerScore >= 5) {
            computerDisplay.innerHTML = 'Sorry! The Computer Wins! Click the button below to try again!';
        };
    };

    function newGame() {
      humanScore = 0;
      computerScore = 0;
      updateScoreDisplay();
  };
  
  function updateScoreDisplay() {
    document.getElementById('human-display').innerHTML = humanScore;
    document.getElementById('computerisplay').innerHTML = computerScore;
  }
  
  
  const button4 = document.querySelector("#button-4");
  button4.addEventListener('click', () => {
    newGame();
  });

    

    
