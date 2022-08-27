/*
    35. Search Insert Position
    https://leetcode.com/problems/search-insert-position/

    https://leetcode.com/problems/search-insert-position/discuss/2403132/easy-solution-with-java-script-in-ologn
*/

/*  TIME COMPLEXITY O( logN ) */

/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let low = 0;
    let heigh = nums.length - 1;
    //Itterate loop with logN time
    while (low <= heigh) {
        let mid = Math.floor((low + heigh) / 2);
        if (target === nums[mid]) {     // check that the target is match to the array elements
            return mid;     // if match return the mid
        }
        if (target > nums[mid]) {
            low = mid + 1;
        }
        else {
            heigh = mid - 1;
        }
    }
    return low;     // Here we return low value for inserting possition
};
console.log(searchInsert([1, 3, 5, 6], 6));