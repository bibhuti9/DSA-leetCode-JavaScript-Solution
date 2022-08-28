/*
    121. Best Time to Buy and Sell Stock
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

*/

/**
 * @param {number[]} prices
 * @return {number}
 */

// This is the solution but Time Limit Exceeded

/*Method 1 */
/*  TIME COMPLEXITY O(N) */

var maxProfit2 = function (prices) {
    var minimumSofar = prices[0]; // Create a minimum veriable to store the minimux value in the array
    var maxProfit = 0;  // Create a maximum veriable to store the maximun value
    for (let i = 0; i < prices.length; i++) {
        {
            if (minimumSofar > prices[i]) { // Check that the Ith possitino value is less then the minimum value if condition is true modify the minimum value to new value.
                minimumSofar = prices[i];
            }

            if ((prices[i] - minimumSofar) > maxProfit) {   // check Ith possition value minus minimum value profit is greater then the MaxProfit if condition is true then modify our maxProfit
                maxProfit = (prices[i] - minimumSofar);
            }
        }
    }
    return maxProfit;
}

/*Method 2 */
/*  TIME COMPLEXITY O(N2) */

var maxProfit1 = function (prices) {
    var max = 0;
    var start = 0;
    for (let i = 1; i < prices.length; i++) {
        if ((prices[start] < prices[i]) && (prices[i] - prices[start]) > max) {
            max = prices[i] - prices[start];
        }
        if (i == prices.length - 1) {
            i = ++start;
        }
    }
    return max;

}
console.log(maxProfit2([7, 1, 5, 3, 6, 4]));