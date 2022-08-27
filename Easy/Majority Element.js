/*
    169. Majority Element
    https://leetcode.com/problems/majority-element/
*/

/*  TIME COMPLEXITY O(N) */

/*
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

var majorityElement = function (nums) {
    var map = new Map();    //Create A New HashMap

    console.log(map);
    for (let i = 0; i < nums.length; i++) { // 0 - nums.length value
        if (map.has(nums[i])) { //Check Array Single Element Present in Map or not
            map.set(nums[i], map.get(nums[i]) + 1); //If Element present in Map than increment key:value number By One 
        }
        else {
            map.set(nums[i], 1); //If the element not present in map than add into the map
        }
    }
    console.log(map);
    let max = Math.max(...map.values());    // Find the maximum value in map
    for (var [key, value] of map.entries()) {   // Check Max Value Key
        if (max == value) {
            return key;
        }
    }
};

console.log(majorityElement([3, 2, 3, 4, 5, 4, 4]));

