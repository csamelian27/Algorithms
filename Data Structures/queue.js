// Array implementation
let q = [];
// unshift and pop OR push and shift -- FIFO
q.unshift("FIRST")
q.unshift("SECOND")
q.unshift("THIRD")
q.pop()
q.pop()
q.pop()
// OR
q.push("FIRST")
q.push("SECOND")
q.push("THIRD")
q.shift()
q.shift()
q.shift()

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push - adds val to end
  enqueue(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // shift - removes val from beginning
  dequeue() {
    if(!this.first) return null;
    let oldFirst = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldFirst.val;
  }

}

// Enqueue Pseudocode: Since it's a singly linked list with only unidirectional flow, we push and pop from beginning for constant time, calling it push and pop cause it's a queue but adding and removing from beginning
// The function should accept a value
// Create a new node with that value
// If there are no nodes in the queue, set the first and last property to be the newly created node
// Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
// Incremement the size of the queue and return that

// Dequeue Pseudocode:
// If there are no nodes in the queue, return null
// Create a temporary variable to store the first property on the queue
// If there is only 1 node, set the first and last property to be null
// If there is more than one node, set the first property to be the next property on the current first
// Decrement the size by 1
// Return the value of the removed node
