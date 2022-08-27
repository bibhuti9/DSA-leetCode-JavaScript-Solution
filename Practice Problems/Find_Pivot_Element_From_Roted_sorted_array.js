function find_pivot_element_in_a_sorted_roted_array(arr) {
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] >= arr[0]) {
            first = mid + 1;
        } else {
            last = mid;
        }
    }
    return first;
}
console.log(find_pivot_element_in_a_sorted_roted_array([4, 5, 6, 7, 0, 1, 2]))