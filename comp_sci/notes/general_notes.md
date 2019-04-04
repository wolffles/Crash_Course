# General notes to know 
## how does the web work?
  * The web has a bunch of layers (Application, TCP, Internet, Hardware layers) that are all connected. But basically, it works through HTTP. 
  * HTTP works lieka request-response cycle in the client-server model. 
  * We type the google url and the client submits the HTTP request to the server the server returns the HTTP response in that case the response is the HTML from Google's websites. 
  * the client does the request and recieves the response from the server. the client/browser handles the UI and the user interactions. 
  * ther server stores and retrieves data on databases. proces logic on the background(workers/jobs), and alot of other things. 

## Request Response cycle of a full stack application 
  * googling this will explain how most full stack applications work



## Describe the javascript event Loop

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