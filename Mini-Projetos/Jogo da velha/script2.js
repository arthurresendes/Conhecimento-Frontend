let currentPlayer = 'X';
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function playMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementById('game').children[row].children[col].innerText = currentPlayer;
    if (checkWinner(row, col)) {
      alert(currentPlayer + ' venceu!');
      resetBoard();
      return;
    }
    if (checkDraw()) {
      alert('Empate!');
      resetBoard();
      return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWinner(row, col) {
  // Verifica linha
  if (board[row][0] === currentPlayer && board[row][1] === currentPlayer && board[row][2] === currentPlayer) {
    return true;
  }
  // Verifica coluna
  if (board[0][col] === currentPlayer && board[1][col] === currentPlayer && board[2][col] === currentPlayer) {
    return true;
  }
  // Verifica diagonal principal
  if (row === col && board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    return true;
  }
  // Verifica diagonal secundária
  if (row + col === 2 && board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    return true;
  }
  return false;
}

function checkDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === '') {
        return false;
      }
    }
  }
  return true;
}


