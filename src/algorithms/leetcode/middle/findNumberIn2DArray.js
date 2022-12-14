/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
	if (matrix.length === 0) {
		return false
	}

	let x = 0
	let y = matrix[0].length - 1

	while (x < matrix.length && y > -1) {
		const value = matrix[x][y]
		if (value === target) {
			return true
		} else if (value > target) {
			y--
		} else {
			x++
		}
	}

	return false
}
