/*

    34. Find First and Last Position of Element in Sorted Array
    https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

    https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/discuss/2412819/easy-java-script-solution-with-time-complexity-ologn-with-two-method-solution
*/

//  There are two method are avilable.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/*  METHOD1 AND ⏱️ TIME COMPLEXITY  O(logn)*/


function firstPossition(arr, target) {
    var ans = -1;
    let first = 0;
    let last = arr.length - 1;
    while (first <= last) {
        var mid = Math.floor((first + last) / 2);

        if (arr[mid] === target) {
            ans = mid;
            last = mid - 1;
        }
        else if (target > arr[mid]) {
            first = mid + 1;
        }
        else if (target < arr[mid]) {
            last = mid - 1;
        }
    }
    return ans;
}
function secondPossition(arr, target) {
    var ans = -1;
    let first = 0;
    let last = arr.length - 1;
    while (first <= last) {
        var mid = Math.floor((first + last) / 2);

        if (arr[mid] === target) {
            ans = mid;
            first = mid + 1;
        }
        else if (target > arr[mid]) {
            first = mid + 1;
        }
        else if (target < arr[mid]) {
            last = mid - 1;
        }
    }
    return ans;
}
var searchRange = function (nums, target) {
    return [firstPossition(nums, target), secondPossition(nums, target)];
};



/*  METHOD1 AND ⏱️ TIME COMPLEXITY  O(logn)*/

var searchRange = function (nums, target) {
    // With Inbuild function we can solve this problem by constant time.
    return [nums.indexOf(target), nums.lastIndexOf(target)];
}
console.log(searchRange([0, 1, 2, 2, 2, 2, 3, 4, 4, 5, 6, 6], 2));