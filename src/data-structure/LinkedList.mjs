export default class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}

	find(value) {
		let currNode = this.head

		while (currNode) {
			if (typeof value === 'function' && value(currNode.value)) {
				return currNode
			}

			if (currNode.value === value) return currNode
			currNode = currNode.next
		}

		return null
	}

	insert(value) {
		const insertNode = { value, next: this.head, prev: null }

		if (this.head) {
			this.head.prev = insertNode
		}

		if (!this.tail) {
			this.tail = insertNode
		}

		this.head = insertNode

		return this
	}

	delete(value) {
		const node = this.find(value)

		if (node) {
			if (this.head === node) {
				if (this.tail === node) {
					this.head = this.tail = null
				} else {
					node.next.prev = null
					this.head = node.next
				}
			} else {
				if (this.tail === node) {
					node.prev.next = null
					this.tail = node.prev
				} else {
					node.next.prev = node.prev
					node.prev.next = node.next
				}
			}
		}

		return node
	}

	deleteHead() {
		let head = this.head

		if (this.head === this.tail) {
			this.head = this.tail = null
		} else {
			this.head = head.next
			this.head.prev = null
		}

		return head
	}

	deleteTail() {
		let tail = this.tail

		if (this.head === this.tail) {
			this.head = this.tail = null
		} else {
			this.tail = this.tail.prev
			this.tail.next = null
		}

		return tail
	}
}

const L = new LinkedList()

L.insert('哈哈')
L.insert('呵呵')
// console.log(L.find(value => value === '哈哈'))
console.log(L)
L.deleteHead()
console.log(L)

// L.insert('呵呵')
// console.log(L)
// L.delete('哈哈')
// console.log(L)
