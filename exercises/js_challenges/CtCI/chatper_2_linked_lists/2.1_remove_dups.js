// Write code to remove duplicates form an unsorted linked list.

// create a linked list 

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

let list = new Node(5)
list = new Node(4, list)
list = new Node(3, list)
list = new Node(10, list)
list = new Node(3, list)

// keep track of whats been visited. 
// and use a temperary buffer to swap

function remove_next(node) {
  node.next = node.next.next
  return node
}
function remove_dups(head) {
  let hash = {}
  temp = head
  hash[temp.data] = true
  while (temp.next != null) {
    if (hash[temp.next.data] === undefined) {
      hash[temp.next.data] = true
    } else {
      temp = remove_next(temp)
    }
    if(temp.next != null){
      temp = temp.next
    }
  }
  return head
}

remove_dups(list)
console.log(list)
