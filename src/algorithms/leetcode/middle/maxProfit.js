/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	const len = prices.length

	if (len < 2) {
		return 0
	}

	let max = 0
	let curMinPrice = prices[0]

	for (const price of prices) {
		max = Math.max(max, price - curMinPrice)
		curMinPrice = Math.min(curMinPrice, price)
	}

	return max
}
