/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
	const l = pushed.length
	const stack = []
	for (let i = 0, j = 0; i < l; i++) {
		stack.push(pushed[i])
		while (stack.length && stack[stack.length - 1] === popped[j]) {
			stack.pop()
			j++
		}
	}

	return stack.length === 0
}
