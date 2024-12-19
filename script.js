const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');
const gameStatus = document.getElementById('game-status');

let currentPlayer = 'X';
let board = Array(9).fill(null);
let isGameActive = true;

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Handle cell click
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (isGameActive && !board[index]) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      cell.classList.add('taken');
      checkWinner();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

// Check for a winner
function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameStatus.textContent = `${board[a]} wins!`;
      isGameActive = false;
      return;
    }
  }

  if (!board.includes(null)) {
    gameStatus.textContent = "It's a draw!";
    isGameActive = false;
  }
}

// Reset the game
resetButton.addEventListener('click', () => {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  isGameActive = true;
  gameStatus.textContent = '';
  cells.forEach((cell) => {
    cell.textContent = '';
    cell.classList.remove('taken');
  });
});
