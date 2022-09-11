function removeDuplicates(nums) {
    return Array.from(new Set(nums));
};

/**
 * @param {number[]} nums
 * @return {number}
 */

/*  TIME COMPLEXITY O(N) */

//  nums is sorted in non-decreasing order.

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {  // If the next element is same than remove from the array
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));