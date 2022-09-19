/* This question is solved but TLE */

/**
 * @param {number[]} heights
 * @return {number}
 */
function reverse(arr, target) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= target) {
            count++;
        } else {
            return count;
        }
    }
    return count;
}
function forward(arr, target) {
    var count = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= target) {
            count++;
        } else {
            return count;
        }
    }
    return count;
}

var largestRectangleArea = function (heights) {
    var map = new Map();
    var max = 0;
    for (let i = 0; i < heights.length; i++) {
        var forwardCount = forward(heights.slice(i + 1), heights[i]);
        var reverseCount = reverse(heights.slice(0, i).reverse(), heights[i]);
        var totalWidth = (parseInt(forwardCount) + parseInt(reverseCount)) * heights[i];
        // console.log(`${heights[i]} ${totalWidth}`);
        if (max < totalWidth) {
            max = totalWidth;
        }
        // console.log(forward(heights.slice(i + 1), heights[i]));
    }
    return max;

};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));

// [2,1,5,6,9,2,3]
// [2,4]
// [1]
// [4,2]