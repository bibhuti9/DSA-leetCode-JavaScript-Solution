class Node {
    constructor(element) {
        this.value = element;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // add
    add(element) {
        var node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    // removeElement
    removeElement(element) {

    }

    indexOf(element) {
        var count = 0;
        var current = this.head;
        while (current != null) {
            if (current.value === element) {
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }

}

var ll = new LinkedList();
ll.add(10);
ll.add(20);
console.log(Array.isArray(ll));