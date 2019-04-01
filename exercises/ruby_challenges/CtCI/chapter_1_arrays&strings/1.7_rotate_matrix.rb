# Given an image represented by an NxN matrix, where each pixel
# in the image is 4bytes, write a method to rotate the image by 
# 90 degrees. can you do this in place(without making a new)?


def rotateMatrix(matrix)
  edge = matrix.length - 1
  pix = nil # p is pixel to be moved
  toRow = nil # new row
  toCol= nil # new col
  i = 0
  while(i < matrix.length - 1)
    j = 0
    row = 0
    col = i
    temp = nil# holds replaced pixel
    while (j < 4)
      pix = temp === nil ? matrix[row][col] : temp # first move or continued
      toRow = col;  # columns turn to rows,
      toCol = edge - row; # rows become columns caluclated by lengt of row - row index
      temp = matrix[toRow][toCol]
      matrix[toRow][toCol] = pix
      row = toRow
      col = toCol
      j+=1
    end
    i+=1
  end
  return matrix
end

matrix1 = [[0, 1, 1, 0], [4, 0, 0, 2], [4, 0, 0, 2], [0, 3, 3, 0]]
p rotateMatrix(matrix1) == [[0, 4, 4, 0], [3, 0, 0, 1], [3, 0, 0, 1], [0, 2, 2, 0]]
matrix = [[4, 1, 1, 1], [4, 0, 0, 2], [4, 0, 0, 2], [3, 3, 3, 2]]
p rotateMatrix(matrix) == [[3, 4, 4, 4], [3, 0, 0, 1], [3, 0, 0, 1], [2, 2, 2, 1]]