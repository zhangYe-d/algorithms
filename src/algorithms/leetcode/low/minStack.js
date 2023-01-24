/**
 * initialize your data structure here.
 */
var MinStack = function () {
	this.array = []
	this.minStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	this.array.push(x)

	const prevMin = this.minStack[this.minStack.length - 1] ?? Infinity
	const newMin = x < prevMin ? x : prevMin

	this.minStack.push(newMin)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.array.pop()
	this.minStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	const length = this.array.length
	return this.array[length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
	return this.minStack[this.minStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
