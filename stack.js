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
}
