// You run an e - commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log.i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.

function Node(data = null, next = null) {
  this.data = data;
  this.next = next
}
var order_log = new Node()
order_log = new Node(345, order_log)
order_log = new Node(123, order_log)
order_log = new Node(999, order_log)

function get_last(i, order_log) {
  ary = "";
  while (i > 0) {
    ary += order_log.data + ", "
    order_log = order_log.next
    i--
  }
  return ary
}

console.log(get_last(4, order_log))