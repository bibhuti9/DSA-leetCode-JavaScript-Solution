/*
    74. Search a 2D Matrix
    https://leetcode.com/problems/search-a-2d-matrix/
*/

/*  TIME COMPLEXITY O(LogN) */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var row = matrix.length;    // how many row in 2D array
    var col = matrix[0].length; // how many column in 2D array

    var start = 0;  // make a start pointer
    var end = row * col - 1;    // make a end pointer
    var mid = Math.floor((start + end) / 2);    // To find mid element
    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        // row = mid / col;
        // col = mid % col;

        var elementIndex = matrix[Math.floor(mid / col)][Math.floor(mid % col)];

        if (elementIndex == target) {
            return true;    // when target is find
        }
        if (elementIndex > target) {
            end = mid - 1;  // when mid element is greater then target
        } else {
            start = mid + 1;
        }
    }
    return false;
};
console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
],
    13));

/*
    Explanation:

    how to find total row = martix.length
    how to find total column = matrinx[0].length

    how to find particular index value with linear array
    (col * i) + j  = linear array index value
    (3*1)+1 = [4] = 5
    like:
    [
          0  1  2
       0 [1, 2, 3],
       1 [4, 5, 6],
       2 [7, 8, 9],
    ];
    [1,2,3,4,5,6,7,8,9]


    how to find 2D array index value with linear array
    like:
    [1,2,3,4,5,6,7,8,9]
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    row = mid / col;
    col = mid % col;

* /

// [1, 2, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60]