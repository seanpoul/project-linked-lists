function createNode(value) {
    return {
        value: value,
        next: null,
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    append(value) {
        this.length++
        let newNode = createNode(value)

        if (this.tail) {
            this.tail.next = newNode
            this.tail = newNode
            return newNode
        }

        this.tail = newNode
        this.head = this.tail
    }

    prepend(value) {
        this.length++;
        let newNode = createNode(value);

        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }

    size() {

    }

    head() {

    }

    tail() {

    }

    at(index) {

    }

    pop() {
        if (this.tail) {
            this.length--;

            const tailNode = this.tail;

            let currentNode = this.head;

            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }

            const beforeTail = currentNode;
            this.tail = beforeTail;
            this.tail.next = null;

            return tailNode;
        }
        return undefined;
    }

    contains(value) {

    }

    find(value) {

    }

    toString() {

    }

    print() {
        let current = this.head
        while (current) {
            console.log(current.value)
            current = current.next
        }
    }
}
