/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

*/

/*
    https://leetcode.com/problems/two-sum/discuss/2388388/100-fastest-solution-java-script-solution-0n

*/

/*  TIME COMPLEXITY IS O(logn) */

/*

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    return nums.map((s,i)=>{
        if ((nums[s] + nums[i]) == target) {    //check the pointer is equal to the target number or not
            return [s, i];  //return if both sum are equal to the target
        }
    })
}
var nums = [3, 2, 4], target = 6;
console.log(twoSum(nums, target));
