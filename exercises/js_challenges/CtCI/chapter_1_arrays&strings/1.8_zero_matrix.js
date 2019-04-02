// Write an algorithm such athat if an element in an MxN matrix 
// is 0 its entire row and column are set to 0

// #1 loop through matrix (polynomial time N*M)
// if zero do another for loop at the length of the longer (width or hieght)
// and convert (i,y) and (x,i) where x,y is the value of the index of 0

// what is a bit vector in javascript 

function zero_matrix(matrix) {
  let row = [],
    col = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i)
        col.push(j)
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (row.includes(i)) {
      for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0
      }
    }
    else if (col.length > 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (col.includes(j)) {
          matrix[i][j] = 0
        }
      }
    }
  }
  return matrix
}

matrix = [[1, 1, 1, 1], [1, 1, 1, 0], [1, 1, 1, 1]]
matrix = [[1, 0, 1, 1], [1, 1, 1, 0], [1, 1, 1, 1]]

console.log(zero_matrix(matrix))