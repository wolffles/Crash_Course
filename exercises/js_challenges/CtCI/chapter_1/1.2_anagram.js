// Given two strings write a method to decide if one is 
// a permutation fo the other

// confirm with interviewer if comparisons are case sensitive
// confirm if whitespace is significant.

// note that if both are different lengths they can not be permutations.

function anagram(stringOne, stringTwo){
  // if different lengths, return false
  if (stringOne.length !== stringTwo.length) {
    return false;
  // else sort and compare 
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne === sortedStringTwo;
  }
};
// this algorithm depends on the sort method