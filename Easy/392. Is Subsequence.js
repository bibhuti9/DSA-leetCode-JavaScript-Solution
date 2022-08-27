/*
    392. Is Subsequence
    https://leetcode.com/problems/is-subsequence/
*/

/*  TIME COMPLEXITY O(N) */

/*

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let Sindex = 0;     // Sindex for s string which is start from 0
    for (let j = 0; j < t.length; j++) {
        if (s[Sindex] == t[j]) {    // here we check if s of Sindex i sequal to t of j index then increment Sindex by one
            Sindex++
        }
    }
    return s.length == Sindex;  // If s.length is equal to Sindex then it's true or false.
};

console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("abc", "ahbgdc"))
