/*  This question is solved but by mathmatically */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var fb = Number.MIN_VALUE, sb = Number.MIN_VALUE;
    var fs = 0, ss = 0;
    for (let i = 0; i < prices.length; i++) {
        fb = Math.max(fb, -prices[i]);
        fs = Math.max(fs, parseInt(fb) + parseInt(prices[i]));

        sb = Math.max(sb, parseInt(fs) - parseInt(prices[i]));
        ss = Math.max(ss, parseInt(sb) + parseInt(prices[i]));
    }
    return ss;
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));