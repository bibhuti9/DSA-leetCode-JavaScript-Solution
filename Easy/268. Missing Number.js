/*  
    268. Missing Number
    https://leetcode.com/problems/missing-number/    
*/

/*  TIME COMPLEXITY O(N) */

/**
 * @param {number[]} nums
 * @return {number}
 */
//Method 1
var missingNumber = function (nums) {
    var set = new Set(nums);    // Create a set which contain only
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {  // check if the ith possition value exists in set or not
            return i;
        }
    }
};

//Method 2
var missingNumber2 = function (nums) {
    var set = new Set(nums);
    var totalSum = nums.length * (nums.length + 1) / 2;
    var totalCount = 0;
    for (let i = 0; i < nums.length; i++) {
        totalCount += nums[i];
    }
    return totalSum - totalCount;
};

console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]));