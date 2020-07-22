document.addEventListener('DOMContentLoaded', startGame)

function audio() {
  var audio = document.getElementById("gameover")
  audio.play()
}


// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 4,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 3,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 4,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 4,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 4,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 4,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 4,
      col: 4,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }]
}

document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

function startGame() {
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  lib.initBoard()
}
// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

  var youWon = true;

  for (let i = 0; i < board.cells.length; i++) {
    var cell = board.cells[i]

    if (cell.isMine && !cell.isMarked) {
      youWon = false
      return audio()
    }
  }
  if (youWon) {
    lib.displayMessage('You win!')
    
  }
}


// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')


function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++
    }
  }
  return count
}
