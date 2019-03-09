# STRINGS PROTOTYPE

## CHARACTER ACCESS
return 'cat'.charAt(1) // return "a"
return 'cat'[0] // returns "c" 

## METHODS
  * string.charAt(index) : returns the character at the specified index
  * string.charCodeAt(index) : returns a number that is the code unit value at the given index.
  * (symbols) string.codePointAt() : returns a nonnegative integer Number that is the code point value of the UTF-16 encoded codepoint starting at the specified index 
  * string.concat(str2[,str3]) : Combines the text of two strings and returns a new string.
  * string.includes(string[,startIDX]) :  method determines wheter one string may be found within another string, true or false.
  * string.endsWith(searchStirng[, lenght]) : returns true/false if the string ends with the character of another string.
  * string.indexOf(searchValue[, fromIndex]) : Returns the index of the first occurance of the value.
  * string.lastIndexOf(value[,fromIndex]) : returns the index of the last occurance of the value. 
  * string.match(regexp) : returns the result of matching a string against a regular expression.
  * string.repeat(count) : returns a string consisting of the elements of the object repeated the given times
  * string.replace(regex|substr, newsubStr| function) : Used to find a match between a regualar expression and a string, and to replace the matched substring with a new substring.
  * string.search(regex) : returns index of the found match. -1 if not found
  * string.slice(startIDX[, EndIDX]) : returns a shallow copy of the string. (end is non inclusive)
  * string.splits([seperator, limit}) a String object into an array of strings by separatingthe string (will stop at limit, will not return the leftovers)
  * string.toLowerCase() : return a new string with all characters lowercased. non mutating. 
  * object.toString() : converts object to string.
  * string.toUpperCase() : converts all string to uppercase
  * string.trim() : removes white space beginning and end of string
  * string.trimStart() & string.trimLeft() removes white space from beginning.
  * string.trimRight() & string.trimEnd() : Trims whitespace form the end of the string. 
  * string.valueOf() Returns the primitive value of the specified object. String Object {'string'}

