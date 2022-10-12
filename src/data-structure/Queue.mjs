export default class Queue {
	constructor() {
		this.head = 0
		this.tail = 0
		this.length = 0
	}

	enQueue(value) {
		this[this.tail] = value
		this.tail += 1
		this.length += 1
	}

	deQueue() {
		if (this.length === 0) {
			throw new Error('queue underflow')
		}

		const item = this[this.head]
		delete this[this.head]
		this.head += 1
		this.length -= 1

		return item
	}
}

const queue = new Queue()
queue.enQueue(2)
queue.enQueue(3)
console.log(queue)
queue.deQueue()
console.log(queue)
