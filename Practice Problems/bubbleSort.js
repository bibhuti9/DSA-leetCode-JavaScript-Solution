function insertionSort(arr, array_size) {
    let i, j, value;
    for (i = 1; i < arr.length; i++) {
        value = arr[i];
        j = i;
        while ((j > 0) && (arr[j - 1] > value)) {
            arr[j] = arr[j - 1];
            j = j - 1;

        }
        arr[j] = value;
    }
    return value;
}
console.log(insertionSort([10, 9, 7, 6, 5, 4, 3, 8, 2, 1]));