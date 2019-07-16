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

  insert(val) {
    let newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if(val === current.val) return undefined;
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if(val > current.val) {
        if(!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if(!this.root) return false;
    if(val === this.root) {
      return true;
    }
    let current = this.root;
    if(val > current.val) {
      if(!this.right) {
        return false;
      }
      current = current.right;
    } else if(val < current.val) {
      if(!this.left) {
        return false;
      }
      current = current.left;
    }
    return true;
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


// Finding Pseudocode:
// Starting at the root
  // Check if there is a root, if not - we're done searching!
  // If there is a root, check if the value of the new node is the value we're looking for. If we found it, we're done!
  // If we don't find it, check to see if the value is greater than or less than the value of the root node
    // If it is greater:
      // Check to see if there is a node to the right
        // If there is, move to that node and repeat these steps
        // If there is not, we're done searching!
    // If it is less:
      // Check to see if there is a node to the left
        // If there is, move to that node and repeat these steps
        // If there is not, we're done searching!
