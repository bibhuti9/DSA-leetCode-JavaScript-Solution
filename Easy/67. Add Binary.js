/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function convertBinary(num) {
    var binary = [];
    while (num != 0) {
        binary.push(num % 2);
        num = Math.floor(num / 2);
    }
    return binary.reverse().join("");
}
var addBinary = function (a, b) {

    a = convertBinary(a);
    b = convertBinary(b);

    console.log(a);
    console.log(b);

    // var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    // console.log("the number a is " + parseInt(a, 2));
    // console.log("the number b is " + parseInt(b, 2));
    // console.log("the dec is  " + dec);
    // return dec.toString(2);

};
console.log(addBinary(11, 1));