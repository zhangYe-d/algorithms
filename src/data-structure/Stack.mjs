export default class Stack {
	constructor() {
		this.top = 0
	}

	empty() {
		return this.top === 0
	}

	push(value) {
		this.top += 1
		this[this.top] = value
	}

	pop() {
		if (this.top === 0) {
			throw new Error('stack underflow')
		}

		const item = this[this.top]
		delete this[this.top]
		this.top -= 1
		return item
	}
}

// const stack = new Stack()

// console.log(stack.empty())
// stack.pop()
// stack.push(2)
// stack.push(3)
// console.log(stack)
// stack.pop()
// console.log(stack[1])
