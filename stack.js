// Array implementation
let stack = [];
// push and pop from the end of an array
q.push("FIRST")
q.push("SECOND")
q.push("THIRD")
q.pop()
q.pop()
q.pop()

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    // head, tail, length generally reserved for a linked list, though this is a linked list, it's also a stack
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size
  }

  pop() {
    if(!this.first) return null;
    let oldFirst = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst;
  }

}

// Pushing Pseudocode: Since it's a singly linked list with only unidirectional flow, we push and pop from beginning for constant time, calling it push and pop cause it's a stack but adding and removing from beginning
// The function should accept a value
// Create a new node with that value
// If there are no nodes in the stack, set the first and last property to be the newly created node
// If there is at least one node, create a variable that stores the current first property on the Stack
// Reset the first property to be the newly created node
// Set the next property on the node to be the previously created variable
// Increase size of the stack by 1

// Pop Pseudocode:
// If there are no nodes in the stack, return null
// Create a temporary variable to store the first property on the stack
// If there is only 1 node, set the first and last property to be null
// If there is more than one node, set the first property to be the next property on the current first
// Decrement the size by 1
// Return the value of the removed node
