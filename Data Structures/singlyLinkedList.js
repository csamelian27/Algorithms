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


class SinglyLinkedList {
  constructor() {

  }
}

// don't initialize a linked list with any data
let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
