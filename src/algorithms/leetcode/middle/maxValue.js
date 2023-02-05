/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
	const length = grid.length
	const width = grid[0].length

	function maxify(i, j, grid) {
		const curValue = grid[i][j]

		if (i === 0 && j === 0) {
			grid[i][j] = curValue
		}

		if (i === 0 && j !== 0) {
			grid[i][j] = grid[i][j - 1] + curValue
		}

		if (i !== 0 && j === 0) {
			grid[i][j] = grid[i - 1][j] + curValue
		}

		if (i !== 0 && j !== 0) {
			grid[i][j] = curValue + Math.max(grid[i][j - 1], grid[i - 1][j])
		}
	}

	for (let i = 0; i < length; i++) {
		for (let j = 0; j < width; j++) {
			maxify(i, j, grid)
		}
	}

	return grid[length - 1][width - 1]
}
