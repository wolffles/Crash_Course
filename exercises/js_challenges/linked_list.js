// create a linked list and methods for it. 


function Node(data, next = null) {
  this.data = data,
    this.next = next
}


let foo = new Node(1)
foo = new Node(2, foo)
foo = new Node(3, foo)
console.log(foo.next)

function length(head) {
  return head ? 1 + length(head.next) : 0
}
function count(head, data) {
  if (!head) return 0
  return (head.data === data ? 1 : 0) + count(head.next, data)
}

function length(head) {
  let size = 0
  while (head) {
    head = head.next
    size++
  }
  return size
}

function count(head, data) {
  let freq = 0
  while (head) {
    if (head.data === data) { freq++ }
    head = head.next
  }
  return freq
}

function insertNth(head, index, data) {
  if (index === 0) { return new Node(data, head) }
  if (index === 1) {
    let temp = head.next
    head.next = new Node(data, temp)
  } else if (index > 1) { insertNth(head.next, index - 1, data) }
  return head
}