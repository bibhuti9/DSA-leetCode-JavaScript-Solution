/*
    136. Single Number
    https://leetcode.com/problems/single-number/

*/

/*  TIME COMPLEXITY  O(N)*/

/*

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1

*/

/*  METHOD 1 */
var singleNumber = function (nums) {
    let s = 0; // Location of first possible suspect
    for (let i = s + 1; i < nums.length; i++) {
        if (nums[i] == nums[s]) { // If we found a duplicate
            nums.splice(i, 1); // Remove the duplicate so it won't confuse us next time we come across it
            s++; // Next suspect's location
            i = s; // Start of next search (i=s+1 in next loop iteration)
        }
    }
    return nums[s];
};

/*  METHOD 2 */
function method2(arr) {
    let ans = 0;
    ans = arr[0]; //Assign the first element to the ans
    for (let i = 0; i < arr.length - 1; i++) {
        ans = ans ^ arr[i + 1];     // compute ans element with arr[ith] elements   
    }
    return ans;

}
console.log(singleNumber([2, 2, 1]));
console.log(method2([2, 2, 1]));