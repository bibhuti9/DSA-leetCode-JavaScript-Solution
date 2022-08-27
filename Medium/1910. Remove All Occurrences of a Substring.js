/*
    1910. Remove All Occurrences of a Substring
    https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
*/

/*  TIME COMPLEXITY O(N) */

/*
Example 1:

Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"
Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc".
Example 2:

Input: s = "axxxxyyyyb", part = "xy"
Output: "ab"
Explanation: The following operations are done:
- s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
- s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
- s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
- s = "axyb", remove "xy" starting at index 1 so s = "ab".
Now s has no occurrences of "xy".

*/

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    var ansArray = s.split(""); // create a array which is used to store the string element as array.
    //['d', 'a', 'a', 'b', 'c', 'b', 'a', 'a', 'b', 'c', 'b', 'c'];
    var n = ((ansArray.length - part.length) + 1);
    for (var i = 0; i < n;) {
        if (ansArray.slice(i, i + part.length).join("") == part) {
            // Here is the main condition is that first
            // we slice the element the slice method is basically return the Ith possition value to i+part.length value 
            ansArray.splice(i, part.length);        // then we delete that match value into our array
            i = 0;  //And then modify i to 0 because may be the array again contain same element
        } else {
            i++;
        }
    }
    return ansArray.join("");   // return the array as string
};
console.log(removeOccurrences("daabcbaabcbc", "abc"));
/* 
daa
aab
abc
bcb
cba
bab

*/
