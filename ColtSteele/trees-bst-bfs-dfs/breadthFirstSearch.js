// - Create a queue(FIFO - this can be an array) and a variable to store the values of nodes visited
// - Place the root node in the queue
// - Loop as long as there is anything in the queue
//  - Dequeue a node from the queue(shifting from beginning of array) and push the value of the node into the variable that stores the nodes
//  - If there is a left property on the node dequeued - add it to the queue
//  - If there is a right property on the node dequeued - add it to the queue
// - Return the variable that stores the values

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (current) {
            if (value === current.value) return undefined;
            if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                }
            }
        }
    }

    find(value) {
        let current = this.root;
        while (current) {
            if (current.value === value) return current;
            if (value > current.value) {
                current = current.right
            } else {
                current = current.left;
            }
        }
        return false;
    }

    breadthFirstSearch() {
        let queue = [];
        let visited = [];
        let node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return visited;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(12);
tree.insert(7);
tree.insert(15);
console.log(tree.breadthFirstSearch());
