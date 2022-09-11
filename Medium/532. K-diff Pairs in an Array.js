/*

    532. K-diff Pairs in an Array
    https://leetcode.com/problems/k-diff-pairs-in-an-array/discuss/?currentPage=1&orderBy=hot&query=

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  0 <= i, j < nums.length
// i != j
// nums[i] - nums[j] == k

var findPairs = function (nums, k) {
    var map = new Map();    // we make a map to store key pair index value
    var length = nums.length;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            // These are the constraints
            if (
                i >= 0
                && j < length
                && i != j
                && (Math.abs(nums[i] - nums[j]) === k)) {
                if ((!map.has(`${nums[j]}${nums[i]}`) && (!map.has(`${nums[i]}${nums[j]}`)))) {
                    map.set(`${nums[i]}${nums[j]}`, 1);
                }
            }
        }
    }
    // console.log(map);
    return map.size;
};
console.log(findPairs([0, 0, 1, 0, 0], 1));
