/**有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let stack = []

	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i)
		const top = stack.at(-1)
		if (
			(char === ')' && top === '(') ||
			(char === '}' && top === '{') ||
			(char === ']' && top === '[')
		) {
			stack.pop()
			continue
		}
		stack.push(char)
	}

	return stack.length === 0
}
