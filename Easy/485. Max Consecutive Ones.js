/*
    485. Max Consecutive Ones
    https://leetcode.com/problems/max-consecutive-ones/
*/

/*  TIME COMPLEXITY O(N) */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var max = 0;    // Create a max which contain recent count 1 value
    var maxSoFar = 0;   // Create a maxSoFar which contain heighest max value
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {    // if the current value is 1 increment the max
            max++;
        } else {
            if (max > maxSoFar) {   // when the max is greater then the mazSoFar modify the maxSoFar
                maxSoFar = max;
            }
            max = 0; // When the condition is false modify the max to 0
        }
    }
    return max > maxSoFar ? max : maxSoFar; // Here If the max greater then the maxSoFar return max else maxSoFae
};
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));