function insertElementAtBotton(stack, count, size, desiredElement) {

    if (count === size) {
        stack.push(desiredElement);
        return;
    }
    var num = stack[stack.length - 1];
    stack.pop();
    console.log(stack);
    insertElementAtBotton(stack, count + 1, size, desiredElement);
    stack.push(num);
    console.log(stack);
}

var stack = [1, 2, 3, 4];
insertElementAtBotton(stack, 0, stack.length, 9);