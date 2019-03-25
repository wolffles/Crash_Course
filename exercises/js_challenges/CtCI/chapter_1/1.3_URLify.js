// Write a method to replace all spaces in a string 
// with '%20' . you may assume that the string has 
// sufficient space at the end to hold the additional 
// characters, and that you are given the "true" length
// of the string. 


// for questions like modifying or shifting an existing
// string multiple times, it's helpful if you can figure
// out its end result before time, and work backwards.

var urlify = function (str, length) {
  var strArr = str.split('');
  var i, newlength, spacecount = 0;
  // calculate the amount of spaces, to use as the
  // pointer to the end of the array
  for (i = 0; i < length; i++) {
    if (str[i] === ' ') {
      spacecount++
    }
  }
  // newlength the length of the new string
  newlength = length + spacecount * 2
  //remember that length here is not the length of index.
  for (i = length-1; i >= 0; i--) {
    if (strArr[i] === ' ') {
      strArr[newlength - 1] = '0'
      strArr[newlength - 2] = '2'
      strArr[newlength - 3] = '%'
      newlength = newlength - 3;
    } else {
      strArr[newlength - 1] = str[i];
      newlength = newlength - 1;
    }
  }
  return strArr.join('');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');