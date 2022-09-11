/*

    how to find total row = martix.length
    how to find total column = matrinx[0].length

    how to find particular index value with linear array
    (col * i) + j  = linear array index value
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

*/

// Print Rom Sum
function PrintSum(arr, row, col) {
    for (let i = 0; i < row; i++) {
        var sum = 0;
        for (let j = 0; j < col; j++) {
            sum += arr[i][j];
        }
        console.log(sum);
    }
}

// Print Col Sum
function PrintSum(arr, row, col) {
    for (let i = 0; i < col; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < row; j++) {
                console.log(arr[j][i]);
            }
        } else {
            for (let j = row - 1; j >= 0; j--) {
                console.log(arr[j][i]);
            }
        }
    }
}

function array2D() {
    var arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 7, 8],
    ];
    // console.log(arr);
    PrintSum(arr, 3, 3);
}
array2D();
