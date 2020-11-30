// A linked list is a collection of nodes - a node stores a piece of data and a reference to the next node

class Node {
    constructor(val) {
        this.val = val;
        // next is a reference to the next new Node() with a val
        this.next = null;
    }
}

// only assigns val and then you can set the next property to another node with a val
let first = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('person');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // first val is the head and the tail, after that assign as tail and set head's next property to the new node
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newHead = new Node(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    // Constant time always, vs an array we have to reindex so it's linear
    shift() {
        if (!this.head) return undefined;
        let shifted = this.head;
        this.head = shifted.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return shifted;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    set(val, index) {
        let currentNode = this.get(index);
        if (!currentNode) return false;
        currentNode.val = val;
        return true;
    }

    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let newNext = prevNode.next;
        prevNode.next = newNode;
        newNode.next = newNext;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prev = this.get(index - 1);
        let removedItem = prev.next;
        prev.next = removedItem.next;
        this.length--;
        return removedItem;
    }

    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let next = null;
        let prev = null;

        while (currentNode) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }

        return this;
    }
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("there");
list.push("you");
list.push("!");

console.log(list.reverse().get(3));
