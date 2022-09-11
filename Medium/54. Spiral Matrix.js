/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    var ansArray = [];
    var row = matrix.length;
    var col = matrix[0].length;

    var startingRow = 0;
    var startingCol = 0;
    var endRow = matrix.length - 1;
    var endCol = matrix[0].length - 1;

    var count = 0;
    var total = row * col;
    while (count < total) {
        for (let index = startingCol; count < total && index <= endCol; index++) {
            ansArray.pop(matrix[startingRow][index]);
            count++;
        }
        startingRow++;
        for (let index = startingRow; count < total && index <= endRow; index++) {
            ansArray.push(matrix[index][endCol]);
            count++;
        }
        endCol--;
        for (let index = endCol; count < total && index >= startingCol; index--) {
            ansArray.push(matrix[endRow][index]);
            count++;
        }
        endRow--;
        for (let index = endRow; count < total && index >= startingRow; index--) {
            ansArray.push(matrix[index][startingCol]);
            count++;
        }
        startingCol++;
    }
    console.log(ansArray);
};

spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);