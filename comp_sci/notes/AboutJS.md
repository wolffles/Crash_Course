# Understanding Javascript mutation and Pure Fuctions
##https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3

## PRIMITIVES AND REFERENCES
* In js there are primitive data types and reference data types. 
* PRIMITIVE: referenced by VALUE
  - boolean
  - Number
  - String
  - Null
  - Undefined 
  - Symbol
* REFERENCES: are a Point to memory address
  - Objects {}
  - Arrays

## PROTOTYPES
* all javascript objects inherit properties and methods from a prototype:
* you can add attributes or methods to the prototype properties
  - attribute and function example
    ```
      function Person(first, last, age, eyecolor) {
        this.firstName = firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
      } 

      Person.prototype.nationailty = 'English'
      Person.prototype.name = function() {
        return this.firstName + " " + this.lastName;
      }
      
      foo = new Person('man', 'woo', 23, 'brown')
      console.log(foo)
      console.log(foo.name())
    ```


