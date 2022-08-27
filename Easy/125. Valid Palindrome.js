/*
    125. Valid Palindrome
    https://leetcode.com/problems/valid-palindrome/
*/

/*  TIME COMPLEXITY O(N) */

/*
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

//Create a function to check that the whole string is palindrom or not
//This function is the main function to check our string is valid palindrom or not
function check_palindrom(s) {
    let pointer = s.length - 1; // Make a pointer which is start form length
    for (let i = 0; i < s.length / 2; i++, pointer--) {
        if (s[i] != s[pointer]) {   // Check is the Ith possition value and pointer possition value is equal or not 
            return false;   // return false if any of character is not equal we don't require to itterate whole string
        }
    }
    return true;    // Return true if all condition is satisfy
}

// Method 1
// This Below method is basically used for non-regex method.

var isPalindrome = function (s) {
    // Make a array which is used to store all non-alphanumeric characters.
    s = s.toLowerCase();    // Convert whole string to lower case.
    var ansArray = [];
    for (let i = 0; i < s.length; i++) {
        // The bellow condition is used to check that the number should be a-z or 0-9
        if ((s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) || (s.charCodeAt(i) >= 48 && (s.charCodeAt(i) <= 57))) {
            ansArray.push(s[i]) // If the condition is true then add this value to the array
        }
    }
    // Here The join function is used to convert  array to string.
    return check_palindrom(ansArray.join(""));
};


// Method 2
// Below method is basically used for use regex

var isPalindrome = function (s) {
    // the below replace method is basically used to remove all non-alphanumeric character
    // And the lower function is used for convert whole string to lower case
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Convert whole string to lower case.
    // Here The join function is used to convert  array to string.
    return check_palindrom(s);
};

console.log(isPalindrome("0P"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
// char Code
// a = 97
// z = 122
// A = 65
// Z = 90
// 0 = 48
// 9 = 57
