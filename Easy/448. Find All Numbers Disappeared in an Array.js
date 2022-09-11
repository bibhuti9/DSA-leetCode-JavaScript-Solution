/*
    448. Find All Numbers Disappeared in an Array
    https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */


/*
    Method 1 TIME COMPEXITY O(N)
*/
var findDisappearedNumbers = function (nums) {
    var set = new Set(nums);    // make a set
    var ansArray = [];  // create a extra array which store the ans array
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {  // check that if the set contain Ith element then dont't add it to the ans Array
            ansArray.push(i);
        }
    }
    return ansArray;
};

/*  Method 2 TIME COMPLEXITY O(N) */

var findDisappearedNumbers2 = function (nums) {
    var ansArray = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            ansArray.push(i);
        }
    }
    return ansArray;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));