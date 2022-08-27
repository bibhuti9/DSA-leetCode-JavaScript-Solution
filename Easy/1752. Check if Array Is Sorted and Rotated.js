/*
    1752. Check if Array Is Sorted and Rotated  
    https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

*/

/*  TIME COMPLEXITY O(N) */

/*
Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.ś

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let count = 0;      // Make a count veriable
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {    // Check that if the i-1 index value should be greater then i possition value
            count++;
        }
    }
    if (nums[nums.length - 1] > nums[0]) {      // this condition is basically used for to check last index value to first index value.
        count++;
    }
    return count <= 1;  // return if the count is 0 or 1 then it will true or false.
};
console.log(check([2, 1, 3, 4]));