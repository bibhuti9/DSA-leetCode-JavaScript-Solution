/*
    2351. First Letter to Appear Twice
    https://leetcode.com/problems/first-letter-to-appear-twice/
*/

/*  TIME COMPLEXITY O(N) */

/**
 * @param {string} s
 * @return {character}
 */

var repeatedCharacter = function (s) {
    const set = new Set();  // Create a set which contain all the distinct values
    for (let i = 0; i < s.length; i++) {
        if (set.has(s[i])) {    // check if the string Ith value exists in the set or not
            return s[i];    // return the string Ith value if set has that value.
        } else {
            set.add(s[i]);  // if the value does not exists in the set add that value
        }
    }
};
console.log(repeatedCharacter("abccbaacz"));