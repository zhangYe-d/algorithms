/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
	if (n < 2) {
		return 0
	}

	let arr = new Array(n + 1)
	arr[0] = 0
	arr[1] = 0
	for (let i = 2; i < n + 1; i++) {
		let max = 0
		for (let j = 1; j < i; j++) {
			max = Math.max(j * (i - j), j * arr[i - j], max)
		}

		arr[i] = max
	}

	return arr[n]
}
