/*
    1047. Remove All Adjacent Duplicates In String
    https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
*/

/*  TIME COMPLEXITY O(N) */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let arrStack = []      // Create a stack whic contain non-repeate element
    for (const ch of s) {
        if (arrStack.length && arrStack[arrStack.length - 1] === ch)    // If the stack top elemt is match to the string character then remove that top element.
            arrStack.pop()
        else arrStack.push(ch)  // if not match add to the array.
    }
    return arrStack.join('')
};

console.log(removeDuplicates("aababaab"));