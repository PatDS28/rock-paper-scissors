function getComputerChoice(){
  randomNumber = Math.random();
  if (randomNumber<=0.33){
    return "Rock";
  }
  else if(randomNumber<=0.66){
    return "Scissors";
  }
  else{
    return "Paper";
  }
}

function getHumanChoice(){
  humanPick = prompt("Choose one, 1 - Rock, 2 - Scissors, 3 - Paper");
  if(humanPick == 1){
    return "Rock"
  }
  else if (humanPick == 2){
    return "Scissors";
  }
  else{
    return "Paper"
  }
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Rock"){
    if(computerChoice == "Scissors"){
      humanWin(humanChoice, computerChoice)
    }
    else if (computerChoice == "Paper"){
      humanLose(humanChoice, computerChoice)
    }
    else{
      humanTied(humanChoice, computerChoice)
    }
  }
  else if(humanChoice == "Scissors"){
    if(computerChoice == "Paper"){
      humanWin(humanChoice, computerChoice)
    }
    else if (computerChoice == "Rock"){
      humanLose(humanChoice, computerChoice)
    }
    else{
      humanTied(humanChoice, computerChoice)
    }
  }
  else{
    if(computerChoice == "Rock"){
      humanWin(humanChoice, computerChoice)
    }
    else if (computerChoice == "Scissors"){
      humanLose(humanChoice, computerChoice)
    }
    else{
      humanTied(humanChoice, computerChoice)
    }
  }
}

function humanWin(human,computer){
  humanScore+=1;
  console.log("You win, " + human + " beats " + computer )
}
function humanLose(human,computer){
  computerScore+=1;
  console.log("You lose, " + human + " lost to " + computer )
}
function humanTied(human,computer){
  console.log("Tied, You both picked " + human)
}

humanScore = 0;
computerScore = 0;

function playGame(){
  for(var i = 1;i<=5;i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore){
    console.log("You win, You scored " + humanScore + " vs " + computerScore)
  }
  else if (humanScore < computerScore){
    console.log("You lose, You scored " + humanScore + " vs " + computerScore)
  }
  else{
    console.log("Tied, " + humanScore + " vs " + computerScore)
  }
}

playGame()