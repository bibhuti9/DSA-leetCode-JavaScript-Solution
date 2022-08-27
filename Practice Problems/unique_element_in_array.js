function unique_element(arr) {
    let tmp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        tmp = tmp ^ arr[i];
        console.log(tmp);
    }
}
unique_element([1, 2, 4, 3, 2, 1, 3,]);
