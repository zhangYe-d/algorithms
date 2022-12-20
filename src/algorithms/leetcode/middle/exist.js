/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	let set = new Set()
	const m = board.length
	const n = board[0]?.length

	function check(i, j, k) {
		const key = `${i}${j}`

		if (set.has(key) || i >= m || j >= n || i < 0 || j < 0) {
			return false
		}

		const char = word.charAt(k)
		const equal = char === board[i][j]

		if (!equal) {
			return false
		} else if (k === word.length - 1) {
			return true
		}

		set.add(key)

		let finded =
			check(i - 1, j, k + 1) ||
			check(i + 1, j, k + 1) ||
			check(i, j - 1, k + 1) ||
			check(i, j + 1, k + 1)

		if (!finded) {
			set.delete(key)
		}

		return finded
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			let finded = check(i, j, 0)

			if (finded) {
				return true
			}
		}
	}

	return false
}

exist(
	[
		['A', 'B', 'C', 'E'],
		['S', 'F', 'C', 'S'],
		['A', 'D', 'E', 'E'],
	],
	'ABCCED'
)
