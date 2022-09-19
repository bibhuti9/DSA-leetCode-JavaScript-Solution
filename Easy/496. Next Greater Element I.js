/*  
    496. Next Greater Element I
    https://leetcode.com/problems/next-greater-element-i/
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let i = 0, j = 0, numToPush;
    for (i = 0; i < nums1.length; i++) {
        j = nums2.indexOf(nums1[i]);    // Find the nums1 current value index in nums2 array
        numToPush = -1;
        for (j = j + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                numToPush = nums2[j];
                break;
            }
        }
        nums1[i] = numToPush;
    }
    return nums1;
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));