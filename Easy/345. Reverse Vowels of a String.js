/*
    345. Reverse Vowels of a String
    https://leetcode.com/problems/reverse-vowels-of-a-string/

*/

/*  TIME COMPLEXITY O(LogN) */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let pointer = s.length - 1;     // Create A Pointer Which Is Start From End Of The Array.
    let ansStr = s.split("");   // Convert String To Array That Will More Easy To Solve This Problem.
    let i = 0;      // Create A I Veriable That Start From Array Index Of 0
    var voewls = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];  // Create a All Vowels That Will Help To Check The Value Is Vowel Or Not.
    // You can use regex like: /[a|e|i|o|u]/gi
    while (i < pointer) {   // Check Condition That I Should Be Less Then Pointer This Condition Devide The Time Complexity To O(N) To O(LogN).

        if (voewls.includes(ansStr[i]) && voewls.includes(ansStr[pointer])) {   // Here we check the condition that our I possition value and Pointer possition value should be vowel
            let tmp = ansStr[i];    // If condition is true then swap this possition value respectively you can create a extra swap function.
            ansStr[i++] = ansStr[pointer];
            ansStr[pointer--] = tmp;
        } else {
            if (voewls.includes(ansStr[i])) {   // If the Ith possition value is vowel then we decrement the Pointer Possition value to -1;
                pointer--;
            } else {
                i++;    // If the Ith possition value does not a vowel then increment the Ith possition by +1
            }
        }
    }
    return ansStr.join("");     // Here we convert the array to string
};
console.log(reverseVowels("Marge, let's \"went.\" I await news telegram."));