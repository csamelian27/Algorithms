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

  contains(val) {
    if(!this.root) return false;
    let current = this.root;
    let found = false;
    while(current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if(val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  breadthFirstSearch(val) {
    let node = this.root,
        data = [],
        queue = [];
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      // doesn't matter if you do .val or not
      data.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

}
