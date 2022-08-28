/*
    443. String Compression 
    https://leetcode.com/problems/string-compression/
*/

/**
 * @param {character[]} chars
 * @return {number}
 */
/*

Input:
["a"]
Output:
[]
Expected:
["a"]

Input:
["a","a","a","b","b","a","a"]
Output:
["a","5","b","2"]
Expected:
["a","3","b","2","a","2"]

Input:
["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output:
["a","b","12"]
Expected:
["a","b","1","2"]


*/


var compress = function (chars) {
    if (chars.length == 1) {
        return chars.length;
    }
    var currentValue = chars[0];
    var count = 1;
    var arr = [];
    for (let i = 1; i < chars.length; i++) {
        if (currentValue === chars[i]) {
            count++;
        } else {
            arr.push(currentValue);
            if (count > 9) {
                `${count}`.split("").map((value) => {
                    arr.push(value);
                });
            } else {
                if (count != 1) {
                    arr.push(count.toString());
                }
            }
            currentValue = chars[i];
            count = 1;
        }

        if (i == chars.length - 1) {
            arr.push(currentValue);
            if (count > 9) {
                `${count}`.split("").map((value) => {
                    arr.push(value);
                });
            } else {
                if (count != 1) {
                    arr.push(count.toString());
                }
            }
        }
    }
    chars.splice(0);
    for (let i = 0; i < arr.length; i++) {
        chars.push(arr[i]);
    }
    return chars;
};
console.log(compress(["a", "b", "b", "b", "c", "c", "a", "a", "a"]));