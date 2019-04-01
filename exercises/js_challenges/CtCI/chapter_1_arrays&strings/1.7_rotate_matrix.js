// Given an image represented by an NxN matrix, where each pixel
// in the image is 4bytes, write a method to rotate the image by 
// 90 degrees. can you do this in place(without making a new)?


function rotateMatrix(matrix) {
  const edge = matrix.length - 1

  var movePixel = (row, col) => {
    let p, // p is pixel to be moved
      temp = null, // holds replaced pixel
      toRow, // new row
      toCol; // new col
    for (let i = 0; i < 4; i++) {
      p = temp == null ? matrix[row][col] : temp // first move or continued
      toRow = col;  //columns turn to rows,
      toCol = edge - row; // rows become columns caluclated by lengt of row - row index
      temp = matrix[toRow][toCol]
      matrix[toRow][toCol] = p
      row = toRow
      col = toCol
    }
    return matrix
  }
  for (let i = 0; i < matrix.length - 1; i++) {
    matrix = movePixel(0, i)
  }
  return matrix
}
var matrix1 = [[0, 1, 1, 0], [4, 0, 0, 2], [4, 0, 0, 2], [0, 3, 3, 0]]
// [[0, 4, 4, 0], [3, 0, 0, 1], [3, 0, 0, 1], [0, 2, 2, 0]]
var matrix = [[4, 1, 1, 1], [4, 0, 0, 2], [4, 0, 0, 2], [3, 3, 3, 2]]
//[[3, 4, 4, 4], [3, 0, 0, 1], [3, 0, 0, 1], [2, 2, 2, 1]]
console.log(rotateMatrix(matrix1))