// Given two sorted singly linked lists, merge them without altering the original lists. 
// The merged linked list should be in sorted order. Some initial steps to solving the problem have been provided for you.
// Hint: Don’t overthink the problem! A solution can be implemented for this problem in roughly 15 lines of code.

// Example: 
// In: (list1: 1 -> 4 -> 7 -> 10 -> 12, null,  list2: 1 -> 2 -> 5 -> 7 -> 10,null)
// Out: (mergedList3: 1 -> 1-> 2 -> 4 -> 5 -> 7 -> 7 -> 10 -> 10 -> 12, null)

// Definition of a LinkedList Node

/**
 * function Node(data, next=null) {
 *     this.data = data;
 *     this.next = next;
 * }
 **/

//Starter Code
var mergeLinkedLists = function (list1, list2, merged = null) {
  merged;
  // iterate list1 and 2 each stop compare 
  //	mergedlist => new node 
  //once both list1 and 2 are null
  //return merged list
  if (list1.data === null && list2.data === null) {
    return merged
  } else if (list1.data <= list2.data) {
    merged = new Node(list1.data)
    return mergedLinkedLists(list1.next, list2, merged)
  } else {
    merged = new Node(list2.data)
    return mergedLinkedList(list1, list2.next, merged)
  }

}





//Implement an algorithm to determine if a string has all unique characters.
// isUnique("hello"); false
// isUnique("nike"); true
function isUnique(string, i = 0) {
  let regex = new RegExp(string[i], 'gi')
  if (i > string.length - 1) {
    return true
  } else if (string.match(regex).length > 1) {
    return false
  } else {
    return isUnique(string, i + 1)
  }
}