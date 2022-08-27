/*
    852. Peak Index in a Mountain Array
    https://leetcode.com/problems/peak-index-in-a-mountain-array/


    https://leetcode.com/problems/peak-index-in-a-mountain-array/discuss/2416281/Java-Script-or-100-Faster-or-Log(N)-or-Easy-and-Simple-Solution

    https://github.com/bibhuti9/DSA-JavaScript-LeetCode-Solution/blob/main/Medium/852.%20Peak%20Index%20in%20a%20Mountain%20Array.js

*/

/*  TIME COMPLEXITY O(LogN) */

/*
Example 1:

Input: arr = [0,1,0]
Output: 1
Example 2:

Input: arr = [0,2,1,0]
Output: 1
Example 3:

Input: arr = [0,10,5,2]
Output: 1
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let first = 0;      //Set a verible as a first index 
    let last = arr.length - 1;  // Set a veriable as last index of as array
    while (first < last) {      // Here We Set the condition as first should be less then last index 
        let mid = Math.floor((first + last) / 2);       // set our mid veriable
        if (arr[mid] < arr[mid + 1]) {      // check the condition that mid should be less then it's next element value.
            first = mid + 1;    // If the condition id true then modify the first veriable value to mid+1
        }
        else {
            last = mid;     // if the condition is false then modify the last index value as mid
        }
    }
    return first;       // return first because it's a mount index;
};
console.log(peakIndexInMountainArray([0, 10, 5, 2]));