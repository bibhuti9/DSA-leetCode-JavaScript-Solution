/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    var ansArray = [];
    for (let i = 0; i < nums.length; i++) {
        ansArray[((i + k) % nums.length)] = nums[i];
    }
    return nums = ansArray
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));