/* Insert Element At Bottom Of the Stack */

function insertElementAtBotton(stack, count, size, desiredElement) {

    if (count === size) {
        return;
    }
    var num = stack[stack.length - 1];
    console.log(stack.join(" "));
    stack.pop();
    insertElementAtBotton(stack, count + 1, size, desiredElement);
    stack.push(num);
    console.log(stack.join(" "));
}

var stack = [1, 2, 3, 4];
insertElementAtBotton(stack, 0, stack.length, 9);