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
    let newNode = new Node(val);
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
      oldTail.prev = null;
    }
    length--;
    return oldTail;
  }

  // Removing a node from the beginning of the Doubly Linked List
  shift() {
    if(this.length === 0) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    length++;
    return oldHead;
  }

  // Adding a node to the beginning of the Doubly Linked List
  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
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

// Pop Pseudocode:
// If there is no head, no tail, or the length is 0, return undefined
// Store the current tail in a variable to return later
// If the length is 1, set the head and the tail to be null
// Update the tail to be the previous Node
// Set the newTail's next to null, and the oldTail's prev to null
// Decrement the length
// Return the value removed

// Shift Pseudocode:
// If length is 0, return undefined
// Store the current head property in a variable (oldHead)
// If the length is one, set the head & tail to be null
// Update the head to be the next of the old head
// Set the head's prev property to null
// Set the old head's next to be null
// Decrement the length
// Return the old head

// Unshift Pseudocode:
// Create a new Node with the value passed to the function
// If the length is 0, set the head & tail to be the new Node
// Otherwise, set the prev property on the head of the list to be the new Node
// Set the next property on the new node to be the head property
// Update the head to be the new node
// Increment the length
// Return the list
