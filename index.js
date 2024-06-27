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

function getHumanChoice(humanPick){
  // humanPick = prompt("Choose one, 1 - Rock, 2 - Scissors, 3 - Paper");
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

const result_div = document.querySelector(".cont-result");
const add_result = document.createElement("p");

function humanWin(human,computer){
  humanScore+=1;
  // console.log("You win, " + human + " beats " + computer )
  add_result.textContent = "You win, " + human + " beats " + computer ;
  result_div.appendChild(add_result);
}
function humanLose(human,computer){
  computerScore+=1;
  // console.log("You lose, " + human + " lost to " + computer )
  add_result.textContent = "You lose, " + human + " lost to " + computer;
  result_div.appendChild(add_result);
}
function humanTied(human,computer){
  // console.log("Tied, You both picked " + human)
  add_result.textContent = "Tied, You both picked " + human;
  result_div.appendChild(add_result);
}

humanScore = 0;
computerScore = 0;

// button event
const overall_result = document.createElement("p");

const btn = document.querySelector('.btn-rock');
btn.addEventListener("click", function (e) {
  human = getHumanChoice(1);
  comp = getComputerChoice();
  playRound(human, comp);
  console.log(humanScore + " " + computerScore)
  if(humanScore >5 || computerScore>5){
    result_div.removeChild(overall_result);
  }
  if(humanScore>4){
    
    overall_result.textContent = "You are the first to scored 5, You win, " + humanScore + " win against " + computerScore;
    result_div.appendChild(overall_result);
    humanScore = 0;
    computerScore = 0;
    
  }
  else if (computerScore>4){
    
    overall_result.textContent = "Computer is the first to scored 5, You lose, " + humanScore + " lost to " + computerScore;
    result_div.appendChild(overall_result);
    humanScore = 0;
    computerScore = 0;
 
  }
});

