function removeMiddle(stack, count, size) {
    if (count === Math.floor(stack.length / 2) + 1) {
        stack.pop();
        return;
    }

    var num = stack[stack.length - 1];
    stack.pop();
    removeMiddle(stack, count + 1, size);
    stack.push(num);
    if (stack.length + 1 == size) {
        console.log(stack);
    }
}
var stack = [1, 2, 3, 4];
removeMiddle(stack, 0, stack.length);