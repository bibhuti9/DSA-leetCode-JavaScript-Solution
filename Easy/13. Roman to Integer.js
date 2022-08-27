/* 13. Roman to Integer
https://leetcode.com/problems/roman-to-integer/
*/

/*  TIME COMPLEXITY IS O(N) */

/*
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

var romanToInt = function (s) {
    // Create A Map
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = map[s[i]], next = map[s[i + 1]];
        //check that the current indext value is smaller than the next index value or not if the current value smaller than next value return current value as minus(-) value.
        ans += cur < next ? -cur : cur;
    }
    return ans;
};
romanToInt("MCMXCIV");
//Input :MCMXCIV
//Output:1994