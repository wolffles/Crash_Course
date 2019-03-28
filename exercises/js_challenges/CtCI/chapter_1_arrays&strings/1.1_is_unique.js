// is unique: Implement an algorithm to determine if a string \
// has all unique charaters.

//able to use data structures, we could use an array or a hash set. 
// if hash or array index = true return false (not unique).
// also if string is greater than 128 return false
// time: O(n)(linear) where end is the size of the string. 
// Space: O(n) where n is the size of the string

function isUnique(string) {
  if (string.length > 128) { return false }
  let hash = {}
  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]] === "true") {
      return false
    } else {
      hash[string[i]] = "true"
    }
  }
  return true
}

// what if you cannot use additional datastructures. 
// time: O(n^2)(PolyNomial time) where n is the size.
// space: of O(1) constant 

function isUnique(string) {
  if (string.length > 128) { return false }
  for(let i = 0; i < string.length; i++) {
    for(let j = i+1; j < string.length; j++){
      if (string[i] === string[j]) {
        return false
      }
    }
  }
  return true
}
