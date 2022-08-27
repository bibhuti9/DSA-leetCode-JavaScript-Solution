/*
    33. Search in Rotated Sorted Array
    https://leetcode.com/problems/search-in-rotated-sorted-array/
    
    https://github.com/bibhuti9/DSA-JavaScript-LeetCode-Solution/blob/main/Medium/33.%20Search%20in%20Rotated%20Sorted%20Array.js

    https://github.com/bibhuti9/DSA-JavaScript-LeetCode-Solution/blob/main/Medium/33.%20Search%20in%20Rotated%20Sorted%20Array.js

*/

/*  TIME COMPLEXITY O(LogN) */


/*

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*  FIND PIVOT ELEMENT */
function find_pivot_element_in_a_sorted_roted_array(arr) {
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] >= arr[0]) {
            first = mid + 1;
        } else {
            last = mid;
        }
    }
    return first;
}

/*  IMPLEMENT BINARY SEARCH */
function binary_search(arr, s, e, target) {
    let first = s;  //s = start index
    let last = e;   // e = last index
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            first = mid + 1
        }
        else {
            last = mid - 1;
        }
    }
    return -1;
}

var search = function (nums, target) {
    let pivot_element = find_pivot_element_in_a_sorted_roted_array(nums);   // Find the pivot element

    // If Our Target Element In A Right Part Then Move To Right Part 
    // Pivot Index To Array Last Index

    // Like [0,1,2] It's a right part array
    if (target >= nums[pivot_element] && target <= nums[nums.length - 1]) {
        return binary_search(nums, pivot_element, nums.length - 1, target);
    } else {

        // If Our Target Element In A Lefr Part Then Move To Left Part
        // 0 Index To Pivot Index
        //Like [4, 5, 6, 7] It's a left part array
        return binary_search(nums, 0, pivot_element - 1, target);
    }

};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
