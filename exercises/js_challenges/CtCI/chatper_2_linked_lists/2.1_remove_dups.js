// Write code to remove duplicates form an unsorted linked ListeningStateChangedEvent.

// create a linked list 

function Node(data, next = null){
  this.data = data;
  this.next = next;
}

let list = new Node(5)
list = new Node(4, list)
list = new Node(3, list)
list = new Node(10, list)
list = new Node(3,list)

