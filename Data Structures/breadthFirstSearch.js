// Steps – Iteratively:
//   Create a queue (this can be an array) and a variable to store the values of nodes visited
//   Place the root node in the queue
//   Loop as long as there is anything in the queue
//     Dequeue a node from the queue and push the value the value of the node into the variable that stores the nodes
//     If there is a left property on the node dequeued – add it to the queue
//     If there is a right property on the node dequeued – add it to the queue
//   Return the variable that stores the values

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

  breadthFirstSearch() {
    let node = this.root,
        visited = [],
        queue = [];
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      // doesn't matter if you do .val or notg
      visited.push(node);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return visited;
  }

}
