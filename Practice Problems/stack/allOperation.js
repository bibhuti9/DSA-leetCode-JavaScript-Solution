class Stack {
    constructor() {
        this.item = [];
    }
    add(element) {
        this.item.push(element);
    }
    remove() {
        this.item.pop();
    }
    printStack() {
        return this.item;
    }
}

var stack = new Stack();
stack.add(10);
stack.add(30);
stack.add(60);
console.log(stack.printStack());
stack.remove();
console.log(stack.printStack());