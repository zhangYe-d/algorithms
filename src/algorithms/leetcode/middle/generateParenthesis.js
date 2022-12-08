/**括号生成
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let answer = []

	function traceback(cur, open, close, n) {
		if (cur.length === 2 * n) {
			answer.push(cur)
			return
		}

		if (open < n) {
			const next = cur.concat('(')
			traceback(next, open + 1, close, n)
		}

		if (close < open) {
			const next = cur.concat(')')
			traceback(next, open, close + 1, n)
		}
	}

	traceback('', 0, 0, n)

	return answer
}
