// implement a method to perform basic string 
// compression using the counts of repeated charcters. 
// for example the string aabbcccccaaa would become 
// a2b1c5a3 if the compressed string would not become 
// smaller than the original string, your method should 
// return the original string. you can assume the string 
// has only uppercase and lowercasee letters(a-z).

function stringCompress(string) {
  let i = 0,
    temp = string[i],
    count = 1,
    maxcount,
    newstring = '';
  for (i = 1; i < string.length; i++) {
    if (temp === string[i]) {
      count++
      maxcount = Math.max(count, maxcount)
    } else if (temp !== string[i]) {
      newstring += temp + count
      temp = string[i]
      count = 1
    }
  }
  newstring += temp + count
  maxcount = Math.max(count, maxcount)
  return maxcount === 1 ? string : newstring
}
console.log("aaaaaa", stringCompress("aaaaaa"), "a6");
console.log("aabcccccaaa", stringCompress("aabcccccaaa"), "a2b1c5a3");