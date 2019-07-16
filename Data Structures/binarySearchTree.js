class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// gets initialized with a root and left and right pointers
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// Inserting Pseudocode:
// Create a new node
// Starting at the root: while (true) if > move to .right or if not .left
  // Check if there is a root, if not the root now becomes that new Node
  // If there is a root, check if the value of the new node is greater than or less than the value of the root
  // If it is greater:
    // Check to see if there is a node to the right
      // If there is, move to that node and repeat these steps
       // If there is not, add that node as the right property
 // If it is less:
  // Check to see if there is a node to the left
    // If there is, move to that node and repeat these steps
    // If there is not, add that node as the left property
