/*

    https://leetcode.com/problems/roman-to-integer/discuss/2396171/easy-java-script-solution-using-hashmap-with-explanation-on

    https://leetcode.com/problems/remove-element/discuss/2396677/java-script-solution-on2-and-on-two-time-complexity-solution

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/* 
    * METHOD 1 *
   TIME COMPLEXITY O(N2)
    
*/
var removeElement = function (nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

/* 
    * METHOD 2 *
   TIME COMPLEXITY O(N)
    
*/var removeElement = function (nums, val) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index++] = nums[i];
        }
    }
    return index;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));