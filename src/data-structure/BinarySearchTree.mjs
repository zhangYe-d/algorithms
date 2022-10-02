export default class BinarySearchTree {
	constructor() {
		this.root = null
	}
	insert(value) {
		let parentNode = null
		let curNode = this.root
		let insertNode = { value, left: null, right: null }

		while (curNode !== null) {
			parentNode = curNode
			if (value < curNode.value) {
				curNode = curNode.left
			} else {
				curNode = curNode.right
			}
		}

		insertNode.parent = parentNode

		if (parentNode === null) {
			this.root = insertNode
			return
		}

		if (value < parentNode.value) {
			parentNode.left = insertNode
		} else {
			parentNode.right = insertNode
		}
	}

	search(value) {
		let curNode = this.root

		while (curNode !== null) {
			if (value === curNode.value) {
				return curNode
			} else if (value < curNode.value) {
				curNode = curNode.left
			} else {
				curNode = curNode.right
			}
		}

		return null
	}

	max(node) {
		let curNode = node
		if (curNode) {
			while (curNode.right) {
				curNode = curNode.right
			}
		}

		return curNode
	}

	min(node) {
		let curNode = node
		if (curNode) {
			while (curNode.left) {
				curNode = curNode.left
			}
		}

		return curNode
	}

	successor(node) {
		if (node.right) {
			return this.min(node.right)
		}

		let curNode = node
		let parentNode = node.parent
		while (parentNode && parentNode.right === curNode) {
			curNode = parentNode
			parentNode = parentNode.parent
		}

		return parentNode
	}

	transplant(node1, node2) {
		if (node1.parent === null) {
			this.root = node2
		} else if (node1.parent.left === node1) {
			node1.parent.left = node2
		} else {
			node1.parent.right = node2
		}

		if (node2) {
			node2.parent = node1.parent
		}
	}

	delete(value) {
		const node = this.search(value)
		if (node) {
			if (!node.left) {
				this.transplant(node, node.right)
			} else if (!node.right) {
				this.transplant(node, node.left)
			} else {
				const replaceNode = this.successor(node)
				if (replaceNode !== node.right) {
					this.transplant(replaceNode, replaceNode.right)
					replaceNode.right = node.right
					replaceNode.right.parent = replaceNode
				}

				this.transplant(node, replaceNode)
				replaceNode.left = node.left
				replaceNode.left.parent = replaceNode
			}
		}
	}
}

const tree = new BinarySearchTree()
// console.log(tree)
tree.insert(6)
// console.log(tree)
tree.insert(4)
// console.log(tree)
tree.insert(2)
// console.log(tree)
tree.insert(5)
tree.delete(4)
console.log(tree)
