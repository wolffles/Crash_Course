// there are three types of edits that can be 
// performed on strings: insert a CharacterData, 
// remove a CharacterData, or replace a CharacterData.
// Given two strings, write a function to check if 
// they are one edit (or zero edits) away.

// pale, ple => true
// pales, pale => true
// pale, bale => true
// pale, bae => false

// brute force method is to check each 
// string element of string with other string
// big O(m*n)

// sorting them would reduce it to nlogn.
// keep track of how many are different or increase the difference by one for each value difference 

// count values in Hash(linear time) delete values, or add them if dont exist 
function oneAway(s_one, s_two) {
  if (Math.abs(s_one.length - s_two.length) > 1) {
    return false
  }
  let hash = { "difference": 0 },
    i;
  for (i = s_one.length - 1; i >= 0; i--) {
    hash[s_one[i]] === undefined ? hash[s_one[i]] = 1 : hash[s_one[i]]++
  }
  for (i = s_two.length - 1; i >= 0; i--) {
    if (hash[s_two[i]] === undefined) {
      hash['difference']++
    } else if (hash[s_two[i]] > 0) {
      hash[s_two[i]]--
      if (hash[s_two[i]] == 0) {
        delete hash[s_two[i]]
      }
    }
    if (hash["difference"] > 1) {
      return false
    }
  }
  return Object.keys(hash).length - 1 > 1 ? false : true
}
console.log(oneAway("pale", "plaaae"))
console.log(oneAway("pales", "pale"))
console.log(oneAway("pale", "bale"))
console.log(oneAway("bae", "pale"))
