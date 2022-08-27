/*
    58. Length of Last Word
    https://leetcode.com/problems/length-of-last-word/

    https://leetcode.com/problems/length-of-last-word/discuss/2407083/easy-java-script-two-way-solution-with-ologn-and-on-time-complexity

*/

/*
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/

/**
 * @param {string} s
 * @return {number}
 */

/* METHOD1 WITH ⏱️ TIME COMPLEXITY O(LogN) */

var lengthOfLastWord = function (s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == " ") {
            if (count == 0) {
                continue;
            } else {
                return count;
            }
        }
        if ((s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) || (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90)) {
            count++;
        }
    }
    return count;
};

/* METHOD2 WITH ⏱️ TIME COMPLEXITY O(N) */

var lengthOfLastWord = function (s) {
    var n = s.trim().split(" "); // O(N);
    return n[n.length - 1].length;
}
console.log(lengthOfLastWord("Hello WorldZ "));