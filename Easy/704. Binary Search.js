/*
    704. Binary Search
    https://leetcode.com/problems/binary-search/

*/

/*  TIME COMPLEXITY O(LogN) */

/*
Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let first = 0;  //start index
    let last = nums.length;   // last index
    while (first <= last) {     // Check First element should be less than or equal to last
        let mid = Math.floor((first + last) / 2);  // Find the middle element
        if (nums[mid] == target) {      // check with our target
            return mid;
        }
        else if (nums[mid] < target) {      // if the middle element value is less then the target value then modify the first element to mid + 1
            first = mid + 1
        }
        else {
            last = mid - 1;     // if the mid is greater then the target value then modify the last element to mod -1
        }
    }
    return -1;      // return -1 if the target value does not find
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
