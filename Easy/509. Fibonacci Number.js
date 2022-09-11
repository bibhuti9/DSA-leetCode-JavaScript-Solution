/*
    509. Fibonacci Number
    https://leetcode.com/problems/fibonacci-number/

*/

/*  TIME COMPLEXITY O(N) */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n == 0) return 0;   // 1 Base case. 
    if (n == 1) return 1;   // 2 Base case.
    return fib(n - 1) + fib(n - 2);
};
console.log(fib(1));