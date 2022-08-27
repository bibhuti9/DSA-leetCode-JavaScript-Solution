/*
    220. Contains Duplicate III 
    https://leetcode.com/problems/contains-duplicate-iii/
*/

/*  TIME COMPLEXITY O(N) */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate1 = function (nums, k, t) {
    var start = 0;  // Make a pointer which is start from 0
    for (let j = 1; j < nums.length; j++) {
        if (Math.abs(nums[start] - nums[j]) <= t && (Math.abs(start - j) <= k)) {   // check the given condition
            return true;
        }
        if (j === nums.length - 1) {    // check when the j is equal to the nums length we increment the staty and modify the Ith value 
            j = ++start;
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate1([1, 5, 9, 1, 5, 9], 2, 3));