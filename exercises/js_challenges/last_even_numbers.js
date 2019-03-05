// https://www.codewars.com/kata/even-numbers-in-an-array/train/javascript

// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
  var answer = [];
  let i = array.length-1
  while((answer.length != number) && ( i != -1)){
    if (array[i] % 2 == 0){answer.unshift(array[i])};
    i -= 1
  }
  return answer
}