/**
 * @param {number} n
 * @return {boolean}
 */

function recursion(num) {
    var count = 0;
    while (num != 0) {
        count += Math.floor((num % 10) * (num % 10));
        num = Math.floor(num / 10);
    }
    return count;
}
var isHappy = function (n) {
    var hashMap = new Set();

    while (!hashMap.has(n)) {
        n = recursion(n);
        console.log(n);
        if (n == 1) {
            return true;
        }
        hashMap.add(n);
    }
    return false;
};
console.log(isHappy(19));