# General notes to know 


## Describe the javascript event Loop
  Javascript 
* Functional programing (Declarative pattern)
  # key principle
    * functional progamming is a programing paradigm a paradigm(model or pattern)
    * All computation is the execution of mathematicals functions
    * functions are essentially a mapping from inputs to outputs, like x|y values in trig/calc 
    * in programming a functional programming can't change the input
    * programming without variable reassignment
    * Immutability. 
  


* programing falls into two general patterns Imperative patterns, and Declarative patterns.
    var books = [
      {name:'JavaScript', pages:450}, 
      {name:'Angular', pages:902},
      {name:'Node', pages:732}
    ];
    /* Imperative Pattern */
    for (var i = 0; i < books.length; i++) {
      books[i].lastRead =  new Date();
    }
    /* Declarative Pattern */
    books.map((book)=> {
      book.lastReadBy = 'me';
      return book;
    });
- Imparative: focuses on describing how a program operates, it consists of commands for the computer to perform.
- Declarative: focuses on what the program should accomplish without specifying how the program should achieve the result.

* 