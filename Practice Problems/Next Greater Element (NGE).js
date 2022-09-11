/*
Next Greater Element (NGE) for every element in given Array

Given an array, print the Next Greater Element (NGE) for every element.

The Next greater Element for an element x is the first greater element on the right side of x in the array. Elements for which no greater element exist, consider the next greater element as -1.

Example:

Input: arr[] = [ 4 , 5 , 2 , 25 ]

Output: 4 –> 5

5 –> 25

2 –> 25

25 –> -1

Explanation: except 25 every element has an element greater than them present on the right side

Input: arr[] = [ 13 , 7, 6 , 12 ]

Output: 13 –> -1

7 –> 12

6 –> 12

12 –> -1

Explanation: 13 and 12 don’t have any element greater than them present on the right side

*/


function NextGreaterElement(arr) {
    var max;
    var soFarMax;
    var map = new Map();
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < soFarMax) {
            map.set(arr[i], soFarMax);
            soFarMax = arr[i];
        } else if (arr[i] < max) {
            map.set(arr[i], max);
            soFarMax = arr[i];
        } else {
            max = arr[i];
            map.set(arr[i], -1);
        }
    }
    console.log(map);
}
NextGreaterElement([1, 2, 1]);