/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p.length > s.length) {
        return [];
    }

    var secondTargetArray = [];
    var targetArray = new Array(26).fill(0);
    var window = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        targetArray[p[i].charCodeAt() - 97]++;
        window[s[i].charCodeAt() - 97]++;
    }

    // console.log(targetArray);
    // console.log(window);

    var targetHash = targetArray.join("#");
    // console.log(fillTarget)

    var left = 0;
    var right = p.length - 1;

    while (right <= s.length) {
        var windowHash = window.join("#");
        if (targetHash === windowHash) {
            // return true;
            secondTargetArray.push(left);
        }
        if (right + 1 >= s.length) {
            break;
        }

        right++;
        window[s[right].charCodeAt() - 97]++;
        window[s[left].charCodeAt() - 97]--;
        left++;
    }
    // return false;
    return secondTargetArray;
};