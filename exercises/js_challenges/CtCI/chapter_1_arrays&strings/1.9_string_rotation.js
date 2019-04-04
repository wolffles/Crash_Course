// Assume you have a method isSubstring which checks if one word 
// is a substring of another. Given two Strings, s1 and s2, 
// write code to check if s2 is a roation of s1 using only one call 
// to isSubstring(e.g."waterbottle" is a rotation of "erbottlewat").

var stringRotation = function(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  return (string2 + stirng2).includes(string1);
}

// Approaches:
// a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
// b) look for starting character before moving around and rotating -> starting characters might repeat
// c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);
