class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adding a node to the end of the Doubly Linked List
  push(val) {
    let newNode = new Node(val)
    if(!head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let previous = this.tail;
      this.tail = newNode;
      this.tail.next = newNode;
      newNode.prev = previous;
    }
    length++;
    return this;
  }

}










// Push Pseudocode:
// Create a new Node with the value passed to the function
// If the head property is null, set the head and tail to be the newly created node
// If not, set the next property on the tail to be that node
// Set the previous property on the newly created node to be the tail
// Set the tail to be the newly created node
// Increment the length
// Return the Doubly Linked List
