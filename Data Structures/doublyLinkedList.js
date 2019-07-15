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
    if(!this.head) {
      this.head = newNode;
      // this.tail = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    length++;
    return this;
  }

  // Removing a node from the end of the Doubly Linked List
  pop() {
    if(!this.tail) return undefined;
    let oldTail = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      // we want to sever all lingering connections
      this.tail.prev = null;
    }
    length--;
    return oldTail;
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

// Pop Pseudocode:
// If there is no head, no tail, or the length is 0, return undefined
// Store the current tail in a variable to return later
// If the length is 1, set the head and the tail to be null
// Update the tail to be the previous Node
// Set the newTail's next & prev to null
// Decrement the length
// Return the value removed

// Shift Pseudocode:
