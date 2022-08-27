/*
    283. Move Zeroes
    https://leetcode.com/problems/move-zeroes/
*/

/*  TIME COMPLEXITY O(N) */

/*

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var start = 0;  // Make a pointer which is start from 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) { // check that the ith value does not equal to zero
            let tmp = nums[i];
            nums[i] = nums[start];      // Swap the elements 
            nums[start] = tmp;
            start++;    // Increase the start pointer by 1
        }
    }
    return nums;    //  return the nums array
};

console.log(moveZeroes([3, 5, 0, 0, 4]))