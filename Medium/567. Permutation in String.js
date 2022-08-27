/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    const target = new Array(26).fill(0); // Time: O(26)
    const window = new Array(26).fill(0); // Time: O(26)


    for (let i = 0; i < s1.length; i++) { // Time: O(s1)
        target[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
        window[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    const targetHash = target.join('#'); // Time: O(26)

    let left = 0;
    let right = s1.length - 1; // This creates a window already of size s1.length from left to right.
    while (right < s2.length) { // Time: O(s2.length - s1.length).

        let windowHash = window.join('#'); // Time: O(26)
        if (targetHash === windowHash) {
            return true;
        }
        if (right + 1 >= s2.length) {
            break;
        }
        right++;
        window[s2[right].charCodeAt() - 'a'.charCodeAt()]++; // We added an item to our window increase count. 
        window[s2[left].charCodeAt() - 'a'.charCodeAt()]--; // We removed an item from our window, so decrease this count.
        left++;
    }
    return false;

};