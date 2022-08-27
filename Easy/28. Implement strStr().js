/*

    28. Implement strStr()
    https://leetcode.com/problems/implement-strstr/

    https://leetcode.com/problems/implement-strstr/discuss/2400787/java-script-fastest-and-easiest-way-to-solve-this-problem-with-on

*/

/* TIME COMPLEXITY O(logn) */

/*
Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
    for (let i = 0; i < (haystack.length - needle.length) + 1; i++) {
        //Here we use for loop start with 0 to ith window
        if (haystack.slice(i, needle.length + i) === needle) {
            // Return ith window array
            /*
                missi
                issis
                ssiss
                sissi
                issip
                ssipp
                sippi
            */
            /* return one of them ith window array if it's satisfy the condition */
            return i;
        }
    }
    return -1; // Return -1 if non of them satisfy the condition
};
console.log(strStr("mississippi", "issip"));