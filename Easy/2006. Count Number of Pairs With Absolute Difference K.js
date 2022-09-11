/*
    2006. Count Number of Pairs With Absolute Difference K
    https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*  METHOD 1 TIME COMPLEXITY O(NLogN) */
var countKDifference = function (nums, k) {
    var count = 0;  // Create a count 
    for (let i = 0; i < nums.length; i++) {
        // here if the current index value is 2
        // then 2 + 2 = 4
        // 2 - 2 = 0
        // if 4 and 0 is exists in next slice array then count how many the total number of accurence in that array.
        var val1 = nums[i] - k;
        var val2 = nums[i] + k;
        // slice array and count that number
        nums.slice(i + 1).forEach((v) => ((v == val1 || v == val2) && count++));
    }
    return count;
};

/*  METHOD 2 TIME COMPLEXITY O(NLogN) */
var countKDifference2 = function (nums, k) {
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            // direct check with constraints.
            if (i < j && (Math.abs(nums[i] - nums[j]) == k)) {
                count++;
            }
        }
    }
    return count;
};



console.log(countKDifference([3, 2, 1, 5, 4], 2));