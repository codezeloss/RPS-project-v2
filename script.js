'use strict';

// UI
const scoreInfo = document.getElementById('score-info');
const scoreDetail = document.getElementById('score-detail');

const playerScore0 = document.getElementById('player-score0');
const computerScore0 = document.getElementById('computer-score0');

const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');

const weapons = document.querySelectorAll('.weapon');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');

const restartBtn = document.getElementById('restartBtn');

let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;
let result;

weapons.forEach(weapon =>
  weapon.addEventListener('click', e => {
    if (e.target.id === 'rock') {
      playerChoice = '👊';
    }
    if (e.target.id === 'paper') {
      playerChoice = '✋';
    }
    if (e.target.id === 'scissor') {
      playerChoice = '✌️';
    }
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
    gameOver();
    restartBtn.addEventListener('click', restartGame);
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = '👊';
  }
  if (randomNumber === 2) {
    computerChoice = '✋';
  }
  if (randomNumber === 3) {
    computerChoice = '✌️';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = "It's a draw!";
  }
  if (
    (computerChoice === '👊' && playerChoice === '✋') ||
    (computerChoice === '✌️' && playerChoice === '👊') ||
    (computerChoice === '✋' && playerChoice === '✌️')
  ) {
    playerScore++;
    result = 'You win!';
  }

  if (
    (computerChoice === '👊' && playerChoice === '✌️') ||
    (computerChoice === '✋' && playerChoice === '👊') ||
    (computerChoice === '✌️' && playerChoice === '✋')
  ) {
    computerScore++;
    result = 'You lost!';
  }

  scoreInfo.innerHTML = result;
  playerScore0.textContent = `👨 Player: ${playerScore}`;
  computerScore0.textContent = `🤖 Player: ${computerScore}`;
}

function gameOver() {
  if (playerScore === 10) {
    scoreInfo.innerHTML = 'Yupi! You win the Game (:';
    scoreDetail.innerHTML = 'GAME OVER';
    restartBtn.classList.remove('hidden');
    playerScore0.classList.add('win');
  }
  if (computerScore === 10) {
    scoreInfo.innerHTML = 'Oups! You lost the Game ):';
    scoreDetail.innerHTML = 'GAME OVER';
    restartBtn.classList.remove('hidden');
    computerScore0.classList.add('win');
  }
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = 'Choose your weapon ⚔️';
  scoreDetail.textContent = 'Note: First to score 10 points wins the game';
  playerScore0.textContent = '👨 Player: 0';
  computerScore0.textContent = '🤖 Player: 0';
  playerChoiceDisplay.textContent = '🔘';
  computerChoiceDisplay.textContent = '🔘';
  restartBtn.classList.add('hidden');
  playerScore0.classList.remove('win');
  computerScore0.classList.remove('win');
}
