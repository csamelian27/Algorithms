// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// basic view of a linked list
// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you?")


// Push method psuedocode:
// This function should accept a value.
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// Increment the length by one


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    if(this.length = 0) {
      this.head = val;
      this.tail = val;
    } else {
      this.tail.next = val;
      this.tail = val;
    }
    this.length += 1;
  }

}

// don't initialize a linked list with any data
let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
