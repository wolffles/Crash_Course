# Javascript ES6
# ADVANCED NOTES
  * {} objects in javascript are dictionaries, meaning strings keys. a new Map is also an object but a Map object are key/value pairs that have any value

  * +"2345" => 2345
  The + operator returns the numeric representation of the object.

  * regex does not match overlapping values
# ARRAY.PROTOTYPE
## PROPERTIES
  * negative indexes dont work like they do in ruby. 
    `array[-1] is undefined`
    `array.length-1 -=1 if you want to work backwards` 

## METHODS
  * array.reverse()
  * array.map(currentValue[, index[, array]] => { return block})
  ``` 
    array.map((ele,index) => dont need return value if {} needs return value)
  ```
  * forEach() function callback on every element
    ary.forEach(function(element,index,array))
    ```
      ary.forEach((ele,index,array)parameter optional => { code })
    ```

  * .every() is a condition check for everything in the array should return boolean
    arr.every(callback[, thisArg]) => arr.every((ele, i) => {}) 
    ```
      function isBigEnough(element, index, array) {
        return element >= 10;
      }
      [12, 5, 8, 130, 44].every(isBigEnough);   // false
      [12, 54, 18, 130, 44].every(isBigEnough); // true
    ```
  * ary.splice(index,delete_count, ...items) can be used as an insert. or remove
    ```
      // this inserts a removed item depending on position from(item to be moved) & to(item to end up.)

      Array.prototype.move = function(from, to) {
          this.splice(to, 0, this.splice(from, 1)[0]);
          return this;
      };
    ```

  * ary.sort((a,b) => a-b ) small to great b-a is great to small

# OPERATORS 
 * = assigning a variable to another variable will reference that variable. 
  In JavaScript, it’s just NOT possible to have a reference from one variable to another variable. And, only compound values (Object, Array) can be assigned by reference
 ``` 
  function name(blah,foo) {
    let ary = blah
    ary[0] = blah[0]+1
    console.log(blah)
    
    let non = foo
    temp = foo + 1
    console.log(foo)
    
  }
  name([1],1)
 ```
 * == and === compares strings but does not compare the objects like [] or {} but the references. 
  ```
  var a = {};   // The variable a refers to an empty object. 
  var b = a;    // Now b refers to the same object. 
  b.property = 1;     // Mutate the object referred to by variable b. 
  a.property          // => 1: the change is also visible through variable a. 
  a === b       // => true: a and b refer to the same object, so they are equal. 
  ```
# STATEMENTS 
  ## CONDITIONALS 
  If(array) can return if an array is null or undefined if its truthy

  * SWITCH AND CASE 
    If break is omitted, the next code block in the switch statement is executed. 
    ```
      switch(expression){
        case <outcome>:
          //do something
        default:
          // do something.
      }
    ```


  ## LOOPS
  for (<index_var> in enumerable_object) { ...
  }

# INTEGERS/ NUMBERS
  * <var>.toString() cannot do any intger has to be a number. Also try JSON.stringify(23432)
  * '${number_var}', \`123\` ""+123 || variable
  * NUMBER("234") converts string to number

# STRINGS
 * [] works on strings but not numbers
 * string.prototype.repeat(n) the * operator doesn't work like ruby on strings. 


#REGEX
 * refer and read all the rules for regex https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions