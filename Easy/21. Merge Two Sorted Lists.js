/*
* @param { ListNode } list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    /*  THIS SOLUTION FOR ARRAY ONLY IF THE LIST1 AND LIST2 ARE ARRAY WE CAN USE BELLOW METHOD

        return list1.concat(list2).sort((a, b) => { return a - b });
    */

    /* THIS METHOD IS USED FOR ONLY LINKED LIST */
    if (list1 === null) { return list2; }
    else if (list2 === null) { return list1; }
    else if (list2.val < list1.val) { [list1, list2] = [list2, list1]; }

    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));