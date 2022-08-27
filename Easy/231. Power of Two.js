/*
    231. Power of Two
    https://leetcode.com/problems/power-of-two/
*/

/*  TIME COMPLEXITY O(N) */

/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    while (n > 1) {
        n /= 2;     // Here Java Script always return decimal value if the number is odd
    }
    return n === 1;     // if the number is odd then then number n never became 1 because java script return odd for decimal values;
};
console.log(isPowerOfTwo(8));