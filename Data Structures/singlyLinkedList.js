// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// basic view of a linked list
let first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you?")



// Push method psuedocode: (adding to the tail)
// This function should accept a value.
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// Increment the length by one
// Return the linked list


// Pop method pseudocode: (removing from the tail)
// Define a function called pop that doesn't take in any data.
// If there's nothing in the list, no head, length is zero, return undefined
// Otherwise loop through the entire list til you reach the tail
// Set the next property of the 2nd to last node to be null
// Set the tail to be the 2nd to last Node
// Decrememnt the length of the list by 1
// Return the value of the node removed


// Shifting: (removes a node from the beginning of a linked list)
  // Take head and delete it and move head over to second item
// If there are no nodes, no head, return undefined
// Store the current head property in a variable
// Set the head property to be the current head's next property
// Decrement the length by 1
// Return current head/shifted off head node value


// Unshift: (adds a node to the beginning of the list)
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the newly created node's next property to be the current head property on the list
// Set the head property on the list to be that newly created node
// Increment the length of the list by 1
// Return the linked list

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // one way to traverse a list
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    console.log(current.val, newTail.val);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // swap
      // let oldHead = this.head;
      // this.head = newNode;
      // newNode.next = oldHead;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}


// don't initialize a linked list with any data
let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

list.pop() // returns !
list.pop() // returns GOODBYE
