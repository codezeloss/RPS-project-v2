//

function playRound(userInput, computerChoice) {
  if (userInput === computerChoice) {
    return "It's a tie!";
  } else if (userInput == "rock" && computerChoice == "paper") {
    return "You lose! Paper beats rock";
  } else if (userInput == "rock" && computerChoice == "scissors") {
    return "You win! Rock beats Scissors";
  } else if (userInput == "paper" && computerChoice == "rock") {
    return "You win! Paper beats rock";
  } else if (userInput == "paper" && computerChoice == "scissors") {
    return "You lose! Scissors beats paper";
  } else if (userInput == "scissors" && computerChoice == "paper") {
    return "You win! Scissors beats paper";
  } else if (userInput == "scissors" && computerChoice == "rock") {
    return "You lose! Rock beats scissors";
  }
}

console.log(playRound("paper", "rock"));
