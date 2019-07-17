// DFS - PreOrder (Recursively)
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
  // 1. Push the value of the node to the variable that stores the values
  // 2. If the node has a left property, call the helper function with the left property on the node
  // 3. If the node has a right property, call the helper function with the right property on the node
// Invoke the helper function with the current variable
// Return the array of values

// DFS - PostOrder (Recursively)
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
  // 2. If the node has a left property, call the helper function with the left property on the node
  // 3. If the node has a right property, call the helper function with the right property on the node
  // 1. Push the value of the node to the variable that stores the values
// Invoke the helper function with the current variable
// Return the array of values

// DFS - IntOrder (Recursively)
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
  // 2. If the node has a left property, call the helper function with the left property on the node
  // 1. Push the value of the node to the variable that stores the values
  // 3. If the node has a right property, call the helper function with the right property on the node
// Invoke the helper function with the current variable
// Return the array of values

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // PreOrder Recursively
  depthFirstSearchPreOrder() {
    let visited = [];

    traverse = (node) => {
      visited.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  // PostOrder Recursively
  depthFirstSearchPostOrder() {
    let visited = [];

    function traverse(node) {
      if(node.left) traverse(this.left);
      if(node.right) traverse(this.right);
      visited.push(node);
    }

    traverse(this.root);
    return visited;
  }

  // InOrder Recursively
  depthFirstSearchInOrder() {
    let visited = [];

    function traverse(node) {
      // alternate way to write without if statements
      node.left && traverse(node.left);
      visited.push(node);
      node.right && traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

}
