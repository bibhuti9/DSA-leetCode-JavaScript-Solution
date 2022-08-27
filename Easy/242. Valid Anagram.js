/*
    242. Valid Anagram
    https://leetcode.com/problems/valid-anagram/
*/

/*  TIME COMPLEXITY O(N) */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length > t.length) return false;  // If the s length is greater then t length
    var hasMap = s.split("");   // Convert the string to array
    for (let i = 0; i < t.length; i++) {
        if (hasMap.includes(t[i])) {    // check if the t index value is exists in hasMap or not
            hasMap.splice(hasMap.indexOf(t[i]), 1); // If t index value is exists then delete that particular value
        } else {
            return false;   // return false if the t index value does not exists in hapMap
        }
    }
    return true;
};
console.log(isAnagram("ab", "a"));