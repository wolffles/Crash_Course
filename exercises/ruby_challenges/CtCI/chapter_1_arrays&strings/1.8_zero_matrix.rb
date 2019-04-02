# Write an algorithm such athat if an element in an MxN matrix 
# is 0 its entire row and column are set to 0

def zero_matrix(matrix) 
    row = []
    col = []
    i=0
  while(i < matrix.length) 
    j = 0
    while(j < matrix[i].length)
      if (matrix[i][j] === 0) 
        row.push(i)
        col.push(j)
      end
      j+=1
    end
    i+=1
  end
  i=0
  while(i < matrix.length)
    j = 0
    if (row.include?(i)) 
      while(j < matrix[i].length)
        matrix[i][j] = 0
        j+=1
      end
    elsif (col.length > 0) 
      while(j < matrix[i].length)
        if (col.include?(j))
          matrix[i][j] = 0
        end
      j+=1
      end
    end
    i+=1
  end
  return matrix
end

matrix = [[1, 1, 1, 1], [1, 1, 1, 0], [1, 1, 1, 1]]
matrix = [[1, 0, 1, 1], [1, 1, 1, 0], [1, 1, 1, 1]]
p zero_matrix(matrix)