// DFS - PreOrder (Recursively)
// Create a variable to store the values of nodes visited
// Store the root of the BST in a variable called current
// Write a helper function which accepts a node
  // Push the value of the node to the variable that stores the values
  // If the node has a left property, call the helper function with the left property on the node
  // If the node has a right property, call the helper function with the right property on the node
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

  depthFirstSearch() {
    let visited = [],
        current = this.root;

    if(current.left) {
      traverse(current);
      visited.push(current)
    }
    if(current.right) {
      traverse(current);
      visited.push(current)
    }

    return visited;
  }

  traverse(node) {
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
  }

}
