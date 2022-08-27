/*
    217. Contains Duplicate
    https://leetcode.com/problems/contains-duplicate/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*  METHOD 1 Without Space Complexity  */
/*  TIME COMPLEXITY O(N) */
var containsDuplicate = function (nums) {
    let s = 0;  // Make a pointer which is start from 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[s] == nums[i]) {   // check that if Sth possition value equal to the Ith possition value or not 
            return true;
        }
        if (s == nums.length) {     // If the s is equal to the nums length then return false means we check all the value of this array
            return false;
        }
        if (i == nums.length - 1) { // check if the i value equal to the nums.length then increase both i and s
            i = ++s;
        }
    }
    return false;   // return false if all case are false
};

/*  METHOD 2 Use Space Complexity  */
/*  TIME COMPLEXITY O(N) */

var containsDuplicate = function (nums) {
    if (nums.length == 1)
        return false;
    let set = new Set(nums);
    // Create a Set which is only contain the distinct value
    // The logic behid is that when we create a Set it remove all duplicate value from nums
    // And just simply check if the nums length is equal to the set length
    // If the nums length is greater then set length return true.
    if (nums.length > set.size)
        return true;
    return false;
}
console.log(containsDuplicate([2, 14, 18, 22, 22]));