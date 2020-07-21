document.addEventListener('DOMContentLoaded', startGame)
/*// automatically generate the board!
//write a function to create board object
function createBoard () {
 // the board object must have row, col, isMine, isMarked, and hidden properties.
    var board = {
    cells: [
      {
        row: row,
        col: col,
        //start by simply setting every isMine to true
        isMine: true,
        isMarked:false,
        hidden: true,
        surroundingMines: 0
      },

for (var i=0; i<10; i++) {
  row = grid.insertRow(i);

  for (var j=0; j<10; j++) {
    cell = row.insertCell(j);

    return board;




//later have a random number of mines scattered throughout the board.*/




// Define your `board` object here!
var board = {
cells: [
  {
    row: 0,
    col: 0,
    isMine: true,
    isMarked:false,
    hidden: true,
    surroundingMines: 0
},
{
  row: 0,
  col: 1,
  isMine: false,
  isMarked:false,
  hidden: true,
  surroundingMines: 0
},
{
  row: 0,
  col: 2,
  isMine: false,
  isMarked:false,
  hidden: true,
  surroundingMines: 0
},
{
  row: 1,
  col: 0,
  isMine: true,
  isMarked:false,
  hidden: true,
  surroundingMines: 0
},
{
  row: 1,
  col: 1,
  isMine: false,
  isMarked:false,
  hidden: true,
  surroundingMines: 0
},
{
  row: 1,
  col: 2,
  isMine: true,
  isMarked:false,
  hidden: true,
  surroundingMines: 0
},
{
  row: 2,
  col: 0,
  isMine: false,
  isMarked:false,
  hidden: true,
  surroundingMines: 0
},
{
  row: 2,
  col: 1,
  isMine: false,
  isMarked:false,
  hidden: true,
  surroundingMines: 0
},
{
  row: 2,
  col: 2,
  isMine: true,
  isMarked:false,
  hidden: true,
  surroundingMines: 0
}]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  lib.initBoard()
}
// Define this function to look for a win condition:
document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  
  var youWon = true;
  
  for (i = 0; i < board.cells.length; i++){
  var cell = board.cells[i]
  
    if (cell.isMine && !cell.isMarked) {
    youWon = false
    }
  }
  if (youWon) {
    lib.displayMessage('You win!')
  }
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    var count = 0
    for (var i = 0; i < surrounding.length; i++) {
        if (surrounding[i].isMine) {
        count++
        }
    }
    return count
    }
