# // Given a string, write a function to check if it is a
# // permutation of a palindrome.a palindrome is a word
# // or a phrase that is the same forwards and backwards.
# // A permutation is a rearrangement of letters.the
# // palindrome does not need to be limited to just
# // dictionary words.

def palindrome_permutation(string)
  hash = {count:0}
  i = 0 
  while i < string.length
    if (string[i] === ' ') 
    elsif(hash[string[i]] === nil)
      hash[:count] += 1
      hash[string[i]] = true
    else
      hash[:count] -= 1
      hash.delete(string[i])
    end
    i+=1
  end
  puts hash
  return hash[:count] > 1 ? false : true
end
palindrome_permutation('taco cat')

# // it's interesting to note that we did not explore 
# // solutions along the lines of "create all possible
# // permutations and check if they are palinedromes.

# // generating all permutations requires factorial 
# // time which is worst than exponential time.

# // remember to think about what it is you are solving
# // ask questions like how do we know if one is the answer. 
# // math is a good solution of that.
