/*
14. Longest Common Prefix

https://leetcode.com/problems/longest-common-prefix/

https://leetcode.com/problems/longest-common-prefix/discuss/2396181/easiest-java-script-solution-on2
*/

/*  TIME COMPLEXITY IS O(N2) */

/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var firstIndexStr = strs[0], ans = "";
    if (strs[0] == "") return "";   //if string contain blank
    if (strs.length == 1) return strs[0]    //return if string contain only one word
    for (let i = 0; i < firstIndexStr.length; i++) {    //this loop is used for check the firstWord all character with it's respective to other word character.
        var count = 1;  //use count veriable to check that all character satisfy with all word character or not.
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] == firstIndexStr[i]) {   //here we check string First Word with other character words
                count++;    //if the character match with other character than increment to +1
            }
        }
        if (count == strs.length) { //check that all word character satisfy with all character or not.
            ans += firstIndexStr[i];
        } else {
            return ans.length > 0 ? ans : ""; //chect that the ans length should be greater than 1 than return ans otherwise return "";
        }
    }
    return ans;
};
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));