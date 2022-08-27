/* Reverse Array Using Two Pointer  */

/*  TIME COMPLEXITY O(LogN) */

function reverse_array(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        tmp = arr[i];
        arr[i] = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = tmp;
    }
    console.log(arr);
}

function reverse_Array_With_Mth_Index(arr, m) {
    let end = arr.length - 1;
    for (let i = m; i < arr.length; i++, end--) {
        tmp = arr[i];
        arr[i] = arr[end];
        arr[(arr.length - 1) - i] = tmp;
    }
    console.log(arr);
}
reverse_Array_With_Mth_Index([10, 9, 8, 7, 6], 2);
// reverse_array([11, 7, 3, 12, 4, 5, 8, 10]);