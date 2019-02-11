// Have the function LetterCapitalize(str) take the str parameter being 
// passed and capitalize the first letter of each word.Words will be 
// separated by only one space. 

function LetterCapitalize(str) {

}


// Input: "hello world"
// Output: "Hello World"

// Input: "i ran there"
// Output: "I Ran There"




function LetterCapitalize(str) {
  str = str.split(' ')
  str = str.map((ele) => {
    return ele.charAt(0).toUpperCase() + ele.substring(1)
  })
  return str.join(' ');
}