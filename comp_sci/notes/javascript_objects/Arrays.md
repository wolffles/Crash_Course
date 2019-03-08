# ARRAY OBJECT
  * You can shallow copy an array buy using .slice() not SPlICE
  ``` 
    num = [1,2,3]
    foo = num.slice()
    num.shift()
    console.log(num) // [2,3]
    console.log(foo) // [1,2,3]
  ```
  * increasing the length property will apply undefined array indexes
  * also decreacing the length property will delete elements
  * calling `Object.keys(array)` // returns index(keys) of the array. 

#ARRAY.PROTOTYPE METHODS
  more details in javascript_notes.md
## MUTATOR METHODS
  * Array.copyWithin(target[,start_index[,end_index]]) : copies part of an array to another location in the same array and returns it, without  modifying its size. 
  * Array.fill(value[, start_index[, non_inclusive_end]]) : fills all the elements of an array from start index to an end index with a static value.
  * Array.pop() : Removes the last element from an array and returns that element.
  * Array.push(value) : appends value to end of array. returns the length of the array. 
  * Array.reverse() : Reverses teh order of the elements of an array in place.
  * array.shift() : removes the first element in the array and returns it
  * array.unshift(value) appends value to the first index of the array. 
  * array.sort([compareFunction]) : Sorts the elements of an array in place and returns the array.
  * array.splice(start_index, deleteCount[,item1[,item2[,...]]]) : adds or removes element from array 

##  ACCESSOR METHODS (do not modify the array; returns some representation of the array)
  * array.concat([array1[,array2[,3...]]]) : merges two or more arrays together.
  * array.includes(value[,from_index]) : returns true/false if value is found
  * array.indexOf(value[,fromIndex]) : Returns the first index of an element within the array equal to the specified value, or -1 if none is found.
  * array.join([separator]) : joins all elements of an array into a string.
  * array.lastIndexOf(value[,fromIndex]) : returns last index of an element within the array equal to the value, or -1 if none.
  * array.slice(startIdx[,endIdx]) : extracts a section of an array and returns a new array
  * array.toString() : returns a string representation of array. like join()
  * array.toLocaleString([locales[,options]]) : locales are methods that require location or geographical area, such as Dates and Times. 

## Iteration methods 

  * array.entries() : returns a new Array iterator object that contains the key/value pairs for each index in the array.
  * array.values() : returns a new array Iterator object that contains the values for each index in the array
  * array.every(ele[,idx,array,thisArg]=> {}) : returns true if every eleent in array satisfies the provied test
  * array.filter(ele[,idx[,array[,thisArg]]]=>{}) creates a new array with all the elements of this array that the filtering function returns true.
  * array.find(ele[,idx,array,thisArg] => {}) : returns the first found value in the array, 
  * array.findIndex(ele[,idx,array,thisArg] => {}) : returns the index of the first element in the array that satisfied the provided testing function. Otherwise it returns -1.
  * array.forEach(ele[,index,array] => {}[,thisArg]) : Method executes a provided function once for each array element. non mutating
  * array.map(ele[,index,array] => {}[,thisArg]) Creates a new array witht he results of calling a provided function on every element in this array. 
  * array.reduce(accumulator, ele[, idx, array] => {}[,initalValue]) : Apply a function against an accumulator and each value of the array from left to right. 
  * array.reduceRight(accumulator, ele[, idx, array] => {}[,initalValue]) :Apply a function against an accumulator and each value of the array from right to left. 
  * array.some(ele[,idx, array]=> {}[,thisArg]) : returns true if at least one element in this array satisfies the provided testing function.
  