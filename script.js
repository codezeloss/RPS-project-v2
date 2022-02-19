'use strict';

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

//////////////////////////////////
// Play a round
const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  }
  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock')
  ) {
    playerScore++;
    roundWinner = 'player';
  }
  if (
    (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
    (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
    (computerSelection === 'Paper' && playerSelection === 'Rock')
  ) {
    computerScore++;
    roundWinner = 'computer';
  }
  updateScoreDetail(roundWinner, playerSelection, computerSelection);
};

// Let Computer guess a weapon
const computerPlay = function () {
  let randomWeapon = Math.trunc(Math.random() * 3);
  switch (randomWeapon) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
};

// GAME OVER
const gameOver = function () {
  return playerScore === 10 || computerScore === 10;
};

/////////////////////////////////////////

// UI
const scoreInfo = document.getElementById('score-info');
const scoreDetail = document.getElementById('score-detail');

const playerScore0 = document.getElementById('player-score0');
const computerScore0 = document.getElementById('computer-score0');

const playerDispaly = document.getElementById('player-display');
const computerDisplay = document.getElementById('computer-display');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');

const restartBtn = document.getElementById('restartBtn');

//
const updateChoice = function (playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'Rock':
      playerDispaly.textContent = '👊';
      break;
    case 'Paper':
      playerDispaly.textContent = '✋';
      break;
    case 'Scissor':
      playerDispaly.textContent = '✌️';
      break;
  }

  switch (computerSelection) {
    case 'Rock':
      computerDisplay.textContent = '👊';
      break;
    case 'Paper':
      computerDisplay.textContent = '✋';
      break;
    case 'Scissor':
      computerDisplay.textContent = '✌️';
      break;
  }
};

// Let's the game start  !!!
//
rockBtn.addEventListener('click', function () {
  handleClick('Rock');
});
paperBtn.addEventListener('click', function () {
  handleClick('Paper');
});
scissorBtn.addEventListener('click', function () {
  handleClick('Scissor');
});
restartBtn.addEventListener('click', restartGame);

const handleClick = function (playerSelection) {
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  updateChoice(playerSelection, computerSelection);
  updateScore();

  if (gameOver()) {
    finalMessage();
    restartBtn.classList.remove('hidden');
  }
};

const finalMessage = function () {
  if (playerScore > computerScore) {
    scoreInfo.textContent = 'You won!';
    scoreDetail.textContent = 'GAME  OVER';
  }
  if (playerScore < computerScore) {
    scoreInfo.textContent = 'Oups! You lost!';
    scoreDetail.textContent = 'GAME  OVER';
  }
};

//
const updateScore = function () {
  if (roundWinner === 'tie') {
    scoreInfo.textContent = "It's a tie!";
  } else if (roundWinner === 'player') {
    scoreInfo.textContent = 'You won!';
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'You lost!';
  }

  playerScore0.textContent = `👨 Player: ${playerScore}`;
  computerScore0.textContent = `🤖 Player: ${computerScore}`;
};

const updateScoreDetail = function (
  winner,
  playerSelection,
  computerSelection
) {
  if (winner === 'player') {
    scoreDetail.textContent = `${playerSelection} beats ${computerSelection}`;
    return;
  }
  if (winner === 'computer') {
    scoreDetail.textContent = `${playerSelection} is beating by ${computerSelection}`;
    return;
  } else {
    scoreDetail.textContent = `${playerSelection} ties with ${computerSelection}`;
  }
};

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = 'Choose your weapon ⚔️';
  scoreDetail.textContent = 'First to score 10 points wins the game';
  playerScore0.textContent = '👨 Player: 0';
  computerScore0.textContent = '🤖 Player: 0';
  playerDispaly.textContent = '🔘';
  computerDisplay.textContent = '🔘';
}
