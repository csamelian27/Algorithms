class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }

    }

    find(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return current;
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(12);
tree.insert(7);
tree.insert(15);
console.log(tree.find(10));
