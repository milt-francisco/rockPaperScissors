let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice (arr) {
  let random = Math.round(Math.random() * (arr.length - 1));
  return arr[random];
}

function playRound(computerSelection, playerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  let rock = 'Rock beats Scissors';
  let paper = 'Paper beats Rock';
  let scissors = 'Scissors beats Paper';

  if(computerSelection === playerChoice) {
    return 'Tie'
  }
  if(computerSelection === 'rock') {
    if(playerChoice === 'paper') {
      console.log('You win!' + paper)
      return true;
    } else {
      console.log('You lose!' + rock)
      return false;
    }
  }
  if (computerSelection === 'paper') {
    if(playerChoice === 'scissors') {
      console.log('You win!' + scissors)
      return true;
    } else {
      console.log('You lose!' + paper)
      return false;
    }
  }
  if (computerSelection === 'scissors') {
    if(playerChoice === 'rock') {
      console.log('You win!' + rock)
      return true;
    } else {
      console.log('You lose!' + scissors)
      return false;
    }
  }
}

function game() {
  let count = 0;
  let playerWin = 0;
  let compWin = 0;
  while(count < 5) {
    let computerSelection = getComputerChoice(choices)
    let playerSelection = prompt('Choose Rock, Paper OR Scissors: ');
    let result = playRound(computerSelection, playerSelection);
    if(result === 'Tie') {
      continue;
    } else if(result) {
      playerWin++;
    } else {
      compWin++;
    }
    count++;
  }
  if(playerWin > compWin) {
    return 'Player beats Computer'
  } else {
    return 'Computer beats Player'
  }
}



console.log(game());


