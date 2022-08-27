/*
    69. Sqrt(x)
    https://leetcode.com/problems/sqrtx/
    
*/

/*  TIME COMPLEXITY O(LogN) */

/*
Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

*/

/**
 * @param {number} x
 * @return {number}
 */

/*  Implement A Binary Search For This Approach */
function binarySearch(x) {
    let first = 0;  // start from 0
    let last = x;   // end number is x
    // like : 0 1 2 3 4 ......... x
    let mid = Math.floor((first + last) / 2);   // Find the middle number
    while (first <= last) {
        let pow = mid * mid;    // Find the power of the middle number
        if (pow == x) {     // if the power number is equal to the x then return mid
            return mid;
        }
        if (pow > x) {      // If the pow is greater-than x then modify the last to mid-1 
            last = mid - 1;
        }
        else {
            first = mid + 1;    // If the pow is less-than the x then modify the first to mid+1 
        }
        mid = Math.floor((first + last) / 2);   // Find the middle number
    }
    return mid;     // Lastly return the mid number
}
var mySqrt = function (x) {
    return binarySearch(x);
};
console.log(mySqrt(36));