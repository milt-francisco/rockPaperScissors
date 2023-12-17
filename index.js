let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const container = document.querySelector('.container');
const playerScoreDiv = document.querySelector('.player-score');
const computerScoreDiv = document.querySelector('.computer-score');
const runningScoreDiv = document.querySelector('.running-score');
const p = document.createElement('p');
const h2 = document.createElement('h2');
let gameComplete = false;

function getComputerChoice() {
  let arr = ['rock', 'paper', 'scissors'];
  let random = Math.round(Math.random() * (arr.length - 1));
  return arr[random];
}

function playRound(computerSelection, playerSelection) {
  const outcomeDiv = document.querySelector('.outcome');
  let playerChoice = playerSelection.toLowerCase();
  let rock = 'Rock beats Scissors';
  let paper = 'Paper beats Rock';
  let scissors = 'Scissors beats Paper';


  if (computerSelection === playerChoice) {
    p.innerText = 'Tie!'
  }
  else if (computerSelection === 'rock') {
    if (playerChoice === 'paper') {
      p.innerText = ('You win! ' + paper)
      playerScore++;
    } else {
      p.innerText = ('You lose! ' + rock)
      computerScore++;
    }
  }
  else if (computerSelection === 'paper') {
    if (playerChoice === 'scissors') {
      p.innerText = ('You win! ' + scissors)
      playerScore++;
    } else {
      p.innerText = ('You lose! ' + paper)
      computerScore++;
    }
  }
  else if (computerSelection === 'scissors') {
    if (playerChoice === 'rock') {
      p.innnerText = ('You win! ' + rock)
      playerScore++;
    } else {
      p.innerText = ('You lose! ' + scissors)
      computerScore++;
    }
  }
  outcomeDiv.appendChild(p);
}

function checkWinner(playerScore, computerScore) {

  if (playerScore === 5) {
    h2.innerText = `Congratulations You Won!!! ${playerScore} to ${computerScore}`
    gameComplete = true;
    container.appendChild(h2);
  }
  else if (computerScore === 5) {
    h2.innerText = `Unfortunate, You Lose... ${computerScore} to ${playerScore}`
    gameComplete = true;
    container.appendChild(h2);
  }

  
}

function updateScore(playerScore, computerScore) {
  playerScoreDiv.innerText = `Player Score: ${playerScore}`
  computerScoreDiv.innerText = `Computer Score: ${computerScore}`
}

if (!gameComplete) {
  rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
  })

  paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
  })

  scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    checkWinner(playerScore, computerScore);
    updateScore(playerScore, computerScore);
  })
} else {
  p.innerText = '';
  computerScore = 0;
  playerScore = 0;
  updateScore(0, 0);
  scissorsButton.removeEventListener('click');
  paperButton.removeEventListener('click');
  rockButton.removeEventListener('click');
}