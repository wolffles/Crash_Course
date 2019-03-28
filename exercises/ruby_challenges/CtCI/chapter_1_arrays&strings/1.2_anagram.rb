# // Given two strings write a method to decide if one is 
# // a permutation fo the other

# // confirm with interviewer if comparisons are case sensitive
# // confirm if whitespace is significant.

# // note that if both are different lengths they can not be permutations.

def anagram(strOne, strTwo)
  if(strOne.length != strTwo.length)
    return false
  else 
    sortedOne = strOne.split('').sort().join('')
    sortedTwo = strTwo.split('').sort().join('')
    return sortedOne === sortedTwo
  end
end
# // this algorithm depends on the sort method