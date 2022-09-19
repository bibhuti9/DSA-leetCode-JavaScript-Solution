function nextSmallerElement(array) {
    var stack = [-1];
    for (let i = array.length - 1; i >= 0; i--) {
        var current = array[i];
        while (stack[stack.length - 1] >= current) {
            stack.pop();
        }
        array[i] = stack[stack.length - 1];
        stack.push(current)
    }
    console.log(array);
}
nextSmallerElement([2, 1, 4, 3]);