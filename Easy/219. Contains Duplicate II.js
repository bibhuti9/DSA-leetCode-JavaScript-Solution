/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/*  TIME COMPLEXITY O(N) */

var containsNearbyDuplicate = function (nums, k) {
    var map = new Map();    // Create a map to store occurences of the index value
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) { // check that if the index value exists in the map or not
            let firstIndex = map.get(nums[i]);  // if the map contain the nums Ith value than find the index of that value in the map 
            if (Math.abs(i - firstIndex) <= k) {
                return true;
            } else {
                map.set(nums[i], i);    // if the condition is not true update the index value to the Ith index value
            }
        } else {
            map.set(nums[i], i);    // set the Ith value into the map 
        }
    }
    return false;   // return false if any of condition is not true.
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));