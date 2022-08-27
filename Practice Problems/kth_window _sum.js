// 1
// 12
// 123
// 1234
// 12345
// 123456

// 2
// 23
// 234
// 2345
// 23456

// ....
// 5
// 56

// 6
function windowSum(arr, target) {
    let s = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        for (let j = s; j <= i; j++) {
            sum += arr[j];
        }
        if (i == arr.length - 1) {
            i = s;
            s++;
        }
        if (sum == target) {
            return "true";
        }
    }
    return "false";
}


console.log(windowSum([1, 2, 3, 4, 5, 6], 100));