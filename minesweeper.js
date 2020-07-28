document.addEventListener('DOMContentLoaded', startGame)

//Function to play sounds
function playAudio(id){
  document.getElementById(id).play();
}



document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

function makeBoard() {
  board = {}
  grid = 5
  board.cells = []
  for (let i = 0; i < grid; i++) {
    for(let j = 0; j < grid; j++) {
      let cell = {
        row: i,
        col: j,
        isMine: Math.random() >= 0.8,  
        hidden: true
      }
      
      board.cells.push(cell)
    } 
  }  return board 
}

  makeBoard()

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
      youWon = false;
      playAudio('win')
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

