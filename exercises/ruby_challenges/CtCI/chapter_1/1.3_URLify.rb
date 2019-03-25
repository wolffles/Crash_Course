
# // Write a method to replace all spaces in a string 
# // with '%20' . you may assume that the string has 
# // sufficient space at the end to hold the additional 
# // characters, and that you are given the "true" length
# // of the string. 


# // for questions like modifying or shifting an existing
# // string multiple times, it's helpful if you can figure
# // out its end result before time, and work backwards.
def URLify(string, length)
  strArr = string.split('')
  spaceCount,i,newLength = 0,0,0
  while(i < length)
    if (strArr[i] === ' ')
      spaceCount+=1
    end
      i += 1
  end
  i -= 1
  newLength = length + spaceCount*2
  while(i >= 0)
    if (strArr[i] === " ")
      strArr[newLength - 1] = '0'
      strArr[newLength - 2] = '2'
      strArr[newLength - 3] = '%'
      newLength -= 3
    else 
      strArr[newLength -1] = strArr[i]
      newLength -= 1
    end
    i-=1
  end
  strArr.join()
end

URLify('Mr John Smith    ', 13) == "Mr%20John%20Smith"