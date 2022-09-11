/**
 * @param {number[]} nums
 * @return {number[]}
 */



function findMax(currentElement, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (currentElement < arr[i]) {
            return arr[i];
        }
    }
    return -1;
}
var nextGreaterElements = function (nums) {
    let ansArr = [];
    for (let i = 0; i < nums.length; i++) {
        ansArr.push(findMax(nums[i], nums));
    }
    return ansArr;
};
console.log(nextGreaterElements([1, 5, 3, 6, 8]));

// [1, 2, 3, 5,4, 3]=[1, 2, 3, 4, 3  1, 2, 3, 4, 3]
// [1, 2, 1] = [1, 2, 1  1, 2, 1]
// [1, 2, 3, 2, 1] = [1, 2, 3, 2, 1  1, 2, 3, 2, 1]
// [5,4,3,2,1] = [5,4,3,2,1  5,4,3,2,1]
