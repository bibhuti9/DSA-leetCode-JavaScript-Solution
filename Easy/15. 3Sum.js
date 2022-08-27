/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {

        // skipping the duplicate elements
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;

        // Two sum approach
        while (j < k) {
            let sum = nums[j] + nums[k];

            if (sum == -nums[i]) {
                res.push([nums[i], nums[j], nums[k]]);
                // skipping the duplicate elements
                while (nums[j] == nums[j + 1]) j++;
                while (nums[k] == nums[k - 1]) k--;
                k--;
                j++;
            }
            else if (sum > -nums[i]) {
                k--;
            }
            else {
                j++;
            }
        }
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
