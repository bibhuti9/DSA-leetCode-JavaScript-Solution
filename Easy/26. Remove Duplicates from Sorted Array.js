function removeDuplicates(nums) {
    return Array.from(new Set(nums));
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));