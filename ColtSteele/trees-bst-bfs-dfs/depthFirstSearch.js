// DFS - PreOrder (recursively)
// - Create a var to store the values of nodes visited
// - Store the root of the BST in a var called current
// - Write a helper function which accepts a node
//    *- Push the value of the node to the variable that stores the values
//     - If the node has a left property, call the helper function with the left property on the node
//     - If the node has a right property, call the helper function with the right property on the node
//  - Invoke the helper function with the current variable
//  - Return the array of values

// PostOrder is same except starred line comes last in the trio

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

    // Visit a node, visit entire left side, visit entire right side
    DFSPreOrder() {
        let visited = [];

        const traverse = (node) => {
            visited.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }

    // Same as above except we push node after exploring left and right sides, root is pushed last
    DFSPostOrder() {
        let visited = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.value);
        }

        traverse(this.root);
        return visited;
    }

    // Same as above except we push node in the middle of exploring left and right sides
    DFSInOrder() {
        let visited = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);
            visited.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return visited;
    }

    maximumDepth() {
        let leftCounter = 0;
        let rightCounter = 0;

        const traverse = (node) => {
            if (node.left) {
                traverse(node.left)
                leftCounter++;
            };
            if (node.right) {
                traverse(node.right)
                rightCounter++;
            };
            console.log(leftCounter, rightCounter);
        }

        traverse(this.root);
        return leftCounter > rightCounter ? leftCounter : rightCounter;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(12);
tree.insert(7);
tree.insert(15);
tree.insert(9);
tree.insert(17);
tree.insert(20);
tree.insert(25);
tree.insert(2);
tree.insert(11);
tree.insert(13);
tree.insert(14);
console.log(tree.DFSInOrder());
