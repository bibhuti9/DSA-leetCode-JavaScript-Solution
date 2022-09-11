/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => { return b - a });
    var set = new Set(nums);
    nums = [...set];
    return nums[2] === undefined ? nums[0] : nums[2];

};

console.log(thirdMax([3, 2, 1, 4]));
console.log(thirdMax([2, 2, 3, 1]));
