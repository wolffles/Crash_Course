// Given a string, write a function to check if it is a
// permutation of a palindrome.a palindrome is a word
// or a phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.the
// palindrome does not need to be limited to just
// dictionary words.

function palindrome_permutation(string) {
  let hash = { "count": 0 },
    i = 0;
  for (i; i < string.length; i++) {
    if (string[i] === ' ') {
    } else if (hash[string[i]] === undefined) {
      hash[string[i]] = true
      hash["count"]++
    } else {
      delete hash[(string[i])]
      hash["count"]--
    }
  }
  return (hash["count"] > 1) ? false : true
}

// it's interesting to note that we did not explore 
// solutions along the lines of "create all possible
// permutations and check if they are palinedromes.

// generating all permutations requires factorial 
// time which is worst than exponential time.

// remember to think about what it is you are solving
// ask questions like how do we know if one is the answer. 
// math is a good solution of that.
