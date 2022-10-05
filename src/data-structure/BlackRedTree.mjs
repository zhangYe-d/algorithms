const BLACK = 'black'
const RED = 'red'

export default class BlackRedTree {
	constructor() {
		this.null = { color: BLACK }
		this.root = this.null
	}

	insert(value) {
		let parentNode = this.null
		let curNode = this.root
		const insertNode = { value, left: this.null, right: this.null, color: RED }

		while (curNode !== this.null) {
			parentNode = curNode
			if (value < curNode.value) {
				curNode = curNode.left
			} else {
				curNode = curNode.right
			}
		}

		insertNode.parent = parentNode

		if ((parentNode = this.null)) {
			this.root = insertNode
		} else if (value < parentNode.value) {
			parentNode.left = insertNode
		} else {
			parentNode.right = insertNode
		}

		this.insertFixup(insertNode)
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

	insertFixup(insertNode) {
		let curNode = insertNode
		while (curNode.parent.color === RED) {
			if (curNode.parent.parent.left === curNode.parent) {
				let parentSibling = curNode.parent.parent.right

				if (parentSibling.color === RED) {
					curNode.parent.color = BLACK
					parentSibling.color = BLACK
					curNode.parent.parent.color = RED
					curNode = curNode.parent.parent
					continue
				} else if (curNode === curNode.parent.right) {
					curNode = curNode.parent
					this.rotate(curNode, 'left')
				}

				curNode.parent.color = BLACK
				curNode.parent.parent.color = RED
				this.rotate(curNode.parent.parent, 'right')
			} else {
				let parentSibling = curNode.parent.parent.left

				if (parentSibling.color === RED) {
					curNode.parent.color = BLACK
					parentSibling.color = BLACK
					curNode.parent.parent.color = RED
					curNode = curNode.parent.parent
					continue
				} else if (curNode === curNode.parent.left) {
					curNode = curNode.parent
					this.rotate(curNode, 'right')
				}

				curNode.parent.color = BLACK
				curNode.parent.parent.color = RED
				this.rotate(curNode.parent.parent, 'left')
			}
		}

		this.root.color = BLACK
	}

	/**
	 * 按指定方向旋转子树
	 * @param {*} node
	 * @param {'left' | 'right'} side
	 */
	rotate(node, side = 'left') {
		const otherSide = side === 'left' ? 'right' : 'left'
		const parentNode = node[otherSide]
		node[otherSide] = parentNode[side]
		if (parentNode[side] !== this.null) {
			parentNode[side].parent = node
		}

		if (node.parent === this.null) {
			this.root = parentNode
		} else if (node === node.parent[side]) {
			node.parent[side] = parentNode
		} else {
			node.parent[otherSide] = parentNode
		}

		parentNode[side] = node
		node.parent = parentNode
	}

	search(value) {
		let curNode = this.root

		while (curNode !== this.root) {
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
}
