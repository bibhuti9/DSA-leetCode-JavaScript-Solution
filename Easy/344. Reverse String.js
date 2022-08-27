/*
    344. Reverse String
    https://leetcode.com/problems/reverse-string/
*/

/*  TIME COMPLEXITY o(LogN) */


/*
    Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let pointer = s.length - 1;     // Make a pointer which is start from length
    for (let i = 0; i < s.length / 2; i++, pointer--) {     // Devide the total length to length/2
        let tmp = s[i];     // Swap the current Ith index to pointer index
        s[i] = s[pointer];
        s[pointer] = tmp;
    }
    return s;       // return the s
};
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
