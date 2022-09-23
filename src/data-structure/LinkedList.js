class LinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}

	find(value) {
		let currNode = this.head

		while (currNode) {
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
}

// const L = new LinkedList()

// L.insert('哈哈')
// L.insert('呵呵')
// console.log(L)
// L.delete('哈哈')
// console.log(L)
