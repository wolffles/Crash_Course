// Implement an algorithm to find the kth to last element of a
// singly linked list.

function Node(data, next = nil){
  this.data = data;
  this.next = next;
}

let list = new Node(5)
list = new Node(4, list)
list = new Node(3, list)
list = new Node(10, list)
list = new Node(3, list)

function kth_last(head, n){
  for(let i = 0; i < n-1; i++){
    if (head.next == null){
      return null
    }
    head = head.next
  }
  return head
}

console.log(kth_last(list,2))