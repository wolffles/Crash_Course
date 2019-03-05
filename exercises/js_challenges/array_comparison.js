// https://www.codewars.com/kata/are-they-the-same/train/javascript

// Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


function comp(array1, array2){
  if ( !array1 || !array2 ){
    return false
  }
  if ( array1.length === 0 && array2.length === 0) {
    return true
  }
  var isequal = true
  var x = 0
  for( i in array1){
    array1[i] = array1[i] *array1[i]
  }
  array1 = array1.sort()
  array2 = array2.sort()
  
  while (isequal === true && x < array1.length) {
    if (array1[x] !== array2[x]) {
      isequal = false
    }
    x += 1
  }
  return isequal
}

var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

comp(a1, a2)