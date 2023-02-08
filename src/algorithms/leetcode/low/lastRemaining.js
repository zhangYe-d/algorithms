/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
	if (n === 1) {
		return 0
	}

	const x = lastRemaining(n - 1, m)

	return (x + m) % n
}
