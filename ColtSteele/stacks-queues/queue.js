class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add to end
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

    // remove from beginning
    dequeue() {
        if (!this.first) return null;
        let oldFirst = this.first;
        if (this.first === this.last) {
            this.last = null;
        } 
        this.first = oldFirst.next;
        this.size--;
        return oldFirst.value;
    }
}