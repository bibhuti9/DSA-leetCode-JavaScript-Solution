/*

    https://leetcode.com/problems/plus-one/discuss/2407481/easy-java-script-solution-with-time-complexity-o1z

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    var num = digits.join("")
    num = BigInt(num) + BigInt(1);
    return num.toString().split("");
};
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));