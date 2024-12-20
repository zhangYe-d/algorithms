/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
	function quickMul(a, b) {
		if (b === 0) {
			return 0
		}

		if (b === 1) {
			return a
		}

		const mul = quickMul(a, b >> 1)

		if (b % 2 === 0) {
			return mul + mul
		} else {
			return a + mul + mul
		}
	}

	return quickMul(n, n + 1) >> 1
}
