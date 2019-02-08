//Have the function LetterChanges(str) take the str parameter being passed 
//and modify it using the following algorithm. Replace every letter in the 
//string with the letter following it in the alphabet (ie. c becomes d, z 
//becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) 
//and finally return this modified string.

function LetterChanges(str) { 
  
}
   
// keep this function call here 
LetterChanges(readline());                            


// Input:"hello*3"
// Output:"Ifmmp*3"

// Input:"fun times!"
// Output:"gvO Ujnft!"


// needs refactoring
function LetterChanges(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
  str = str.split('')
  return str.map(element => {
    let i = alphabet.indexOf(element)
    ascii_value = element.charCodeAt(0)
    if (ascii_value >= 97 && ascii_value <= 122) {
      if (ascii_value === 122) {
        element = "a"
      }
      else {
        ascii_value++
        element = String.fromCharCode(ascii_value)
      }
    }
    if (["a", "e", "i", "o", "u"].includes(element)) {
      element = element.toUpperCase()
    }
    return element
  }).join("")

}