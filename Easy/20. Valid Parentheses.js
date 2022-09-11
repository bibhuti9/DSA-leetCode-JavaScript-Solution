/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/

*/

/*  TIME COMPLEXITY IS O(N) */
/*
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length == 1) {
        return false;
    }
    var map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    var contain = [];
    for (let i = 0; i < s.length; i++) {
        if ("{" === s[i] || "[" === s[i] || "(" === s[i]) {
            contain.push(s[i]);
        } else {
            if (contain.length == 1) {
                if (contain[0] === map[s[i]]) {
                    contain.splice(0, 1);
                } else { return false }
            } else {
                if (contain[i - 1] === map[s[i]]) {
                    contain.splice(i - 1, 1);
                } else {
                    return false;
                }
            }
        }
    }
    return contain.length > 0 ? "false" : "true";
};
console.log(isValid("({"));