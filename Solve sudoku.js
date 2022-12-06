let puzzle = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
              [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
              [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
              [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
              [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
              [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
              [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];

function sudoku(puzzle) {
    var length=puzzle.length; 
  // checking whether zeroes/number in array/matrix row and column and returning bool values
   function checkValidity(row, col, number) {
    // verifying row and column whether its empty or filled
    for (let i = 0; i < length; i++) {
        if (puzzle[row][i] === number || puzzle[i][col] === number) {
        return false;
      }
    }
    // checking the sub grid i.e.., 3*3 grid of matrix
    const miniRow = Math.floor(row / 3) * 3;
    const miniCol = Math.floor(col / 3) * 3;
    for (let j = miniRow; j < miniRow + 3; j++) {
      for (let k = miniCol; k < miniCol + 3; k++) {
        if (puzzle[j][k] === number) {
          return false;
        }
      }
    }
    return true;
  } 
    // solving by taking the row and col values
    function solve(row, col) {
      if (row === length) {
        return true;
      }
      if (puzzle[row][col] !== 0) {
        if (col === length-1) {
          return solve(row + 1, 0);
        } else {
          return solve(row, col + 1);
        }
      }
      for (let number = 1; number <= length; number++) {
          // passing for validation
        if (checkValidity(row, col, number)) {
          puzzle[row][col] = number;
          if (col === length-1) {
            if (solve(row + 1, 0)) {
              return true;
            }
          } else {
            if (solve(row, col + 1)) {
              return true;
            }
          }
          puzzle[row][col] = 0;
        }
      }
    
        return false;
      }

  solve(0, 0);

  return puzzle;
}

let result=sudoku(puzzle);
console.log(result);