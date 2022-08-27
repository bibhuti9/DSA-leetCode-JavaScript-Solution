/*
    88. Merge Sorted Array
    https://leetcode.com/problems/merge-sorted-array/
*/

/*  TIME COMPLEXITY O(LogN) */

/*

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let pointer1 = m - 1;   // create a pointer1 which is start from m-1
    let pointer2 = n - 1;   // Same create a pointer2 which is start from n-1;
    let i = (m + n) - 1;    // Here I is a last length of nums1 array
    while (pointer2 >= 0) {     // Check that pointer2 should be greater than 0
        if (pointer1 >= 0 && nums1[pointer1] > nums2[pointer2]) {
            nums1[i--] = nums1[pointer1--];
            // If the pointer1 is greater than pointer2 then changes values.
        } else {
            nums1[i--] = nums2[pointer2--];
        }
    }
    return nums1;
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);