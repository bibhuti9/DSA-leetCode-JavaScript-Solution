/**
 * @param {number[]} nums
 * @return {number[]}
 */


var nextGreaterElements = function (nums) {
    var stack = [];
    for (let i = nums.length - 1; i > 0; i--) {
        stack.push(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        while (stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        if (stack.length <= 0) {
            nums[i] = -1;
        } else {
            nums[i] = stack[stack.length - 1];
        }
    }
    console.log(nums);
};
nextGreaterElements([1, 2, 1]);