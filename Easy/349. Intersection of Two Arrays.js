/*
    349. Intersection of Two Arrays
    https://leetcode.com/problems/intersection-of-two-arrays/
*/

/*  TIME COMPLEXITY O(N) */
/* SPACE COMPLEXITY O(1) */


/*
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // First Create a Hash Map with value of nums1 array
    // Because All the duplicate element in nums1 array are removed and only distinct element are in the array
    var hashSet = new Set(nums1);
    var ans = [];       // Create a blank array to store the ans
    nums1 = [...hashSet];   // Convert the hash map to array
    for (let i = 0; i < nums1.length; i++) {        // itterate a loop 0 to length
        if (nums2.includes(nums1[i])) {     // check that if the nums1 index element is exists in the nums2(array2)
            ans.push(nums1[i]); // If the element is exists in the nums2 then add this element to the ans array.
        }
    }
    return ans; // return the ans array
};
intersection([4, 9, 5], [9, 4, 9, 8, 4]);