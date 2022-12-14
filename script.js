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
        console.log(this.length)
    }

    heads() {
        console.log(this.head)
    }

    tails() {
        console.log(this.tail)
    }

    at(index) {
        if (index === 0) {
            return this.head
        }
        let previousNode = null;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        return currentNode
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
        let current = this.head
        while (current) {
            if (current.value === value) return true
            current = current.next
        }
    }

    find(value) {
        let current = this.head
        let index = 0
        while (current) {
            index++
            if (current.value === value) return index
            current = current.next
        }
    }

    toString() {
        let current = this.head
        let result = ""
        while (current) {
            result = result.concat(`( ${current.value} ) --> `)
            current = current.next
        }
        result = result.concat(` null`);
        console.log(result)
    }
}

const linkedList = new LinkedList();

linkedList.append(7);
linkedList.append(true);
linkedList.append(20);
linkedList.append(false);
linkedList.append(99);
linkedList.toString();