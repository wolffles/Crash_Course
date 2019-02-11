// Have the function SimpleSymbols(str) take the str parameter being passed 
// and determine if it is an acceptable sequence by either returning the 
// string true or false. The str parameter will be composed of + and = 
// symbols with several letters between them (ie. ++d+===+c++==a) and for 
// the string to be true each letter must be surrounded by a + symbol. So 
// the string to the left would be false. The string will not be empty and 
// will have at least one letter. 

function SimpleSymbols(str) {         
}


Input:"+d+=3=+s+"
Output:"true"

Input:"f++d+"
Output:"false"


function SimpleSymbols(str) { 
  let n_letters = str.match(/[a-zA-Z]/g).length
  let syms = []
  for(let i = 1; i < str.length; i++ ){
      if (str.charAt(i-1)+str.charAt(i)+str.charAt(i+1) === "+"+str.charAt(i)+"+") {
          syms.push("+"+str.charAt(i)+"+")
      }
  }
  return n_letters === syms.length; 
         
}