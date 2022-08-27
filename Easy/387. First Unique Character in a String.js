/**
 * @param {string} s
 * @return {number}
 */

// METHOD 1
// TIME COMPLEXITY O(N)
var firstUniqChar = function (s) {
    var map = new Map();    // Create A map which store the occurence of the element
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {    // if the S Ith index value exists in the map then increment the map element value by 1
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);   // if the element does not exists in the map then add/push to the map
        }
    }
    // This is the important method
    //here we itterate all the map value and check which map key value is 1
    // 1 means that key only exists in one time
    for (var [key, val] of map.entries()) {
        if (val == 1) return s.indexOf(key);    // if the map value equal to 1 return the sth index
    }
    return -1;
};

// METHOD 2
// TIME COMPLEXITY O(N)
var firstUniqChar = function (s) {
    for (i = 0; i < s.length; i++) {
        // This is the very simple solution
        // the indexOf method return the first index value and the lastIndexOf return the last index to the particular index value
        // If the duplicate value exists in the string the indexOf and lastIndexOf value does not equal
        // Our task is to find indexOf and lastIndexOf are diffrent.
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            // console.log(`${s[i]} ${s.indexOf(s[i])} ${s.lastIndexOf(s[i])}`);
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));