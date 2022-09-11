/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    var ansArr = [[]];
    for (let i = 0; i < intervals.length - 1; i++) {

        if (intervals[i][0] >= intervals[i + 1][0]) {
            intervals[i][0] = intervals[i + 1][0];
            intervals.splice(i + 1, 1);
        }
        else if (intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i][1] = intervals[i + 1][1];
            intervals.splice(i + 1, 1);
        }
    }
    return intervals;
};
merge([[1, 4], [0, 4]]);