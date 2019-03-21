# // is unique: Implement an algorithm to determine if a string \
# // has all unique charaters.

# //able to use data structures, we could use an array or a hash set. 
# // if hash or array index = true return false (not unique).
# // also if string is greater than 128 return false
# // time: O(n)(linear) where end is the size of the string. 
# // Space: O(n) where n is the size of the string

def isUnique(string) 
  if (string.length > 128) 
    return false 
  end
    hash = {}
    i = 0
  while (i < string.length)
    if(hash[string[i]] === true) 
      return false
    else 
      hash[string[i]] = true
    end
    i+=1
  end
  return true
end

# // what if you cannot use additional datastructures. 
# // time: O(n^2)(PolyNomial time) where n is the size.
# // space: of O(1) constant 

def isUnique(string) 
  if (string.length > 128) 
    return false
  end
  i = 0
  while i < string.length
    j = i + 1
    while j < string.length
     if(string[i] === string[j])
      return false
     else
      j+=1
     end
     i +=1
    end
    return true
  end
end