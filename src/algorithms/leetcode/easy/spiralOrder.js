/** 顺时针旋转打印矩阵元素
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const row = matrix.length
	const ans = []
	if (row === 0) return ans
	const col = matrix[0].length
	if (col === 0) return ans

	function log(rowStart, colStart, count) {
		if (colStart >= col - count) return
		if (rowStart >= row - count) return
		let i = rowStart,
			j = colStart

		while (j < col - count) {
			ans.push(matrix[i][j])
			j++
		}

		i++
		j--

		if (i >= row - count) return

		while (i < row - count) {
			ans.push(matrix[i][j])
			i++
		}

		j--
		i--

		if (j < colStart) return

		while (j >= colStart) {
			ans.push(matrix[i][j])
			j--
		}

		i--
		j++

		while (i > rowStart) {
			ans.push(matrix[i][j])
			i--
		}

		log(colStart + 1, rowStart + 1, count + 1)
	}

	log(0, 0, 0)

	return ans
}
