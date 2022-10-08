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

		if (parentNode === this.null) {
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
			while (curNode.right !== this.null) {
				curNode = curNode.right
			}
		}

		return curNode
	}

	min(node) {
		let curNode = node
		if (curNode !== this.null) {
			while (curNode.left) {
				curNode = curNode.left
			}
		}

		return curNode
	}

	successor(node) {
		if (node.right !== this.null) {
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

		parentNode.parent = node.parent

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

	transplant(node1, node2) {
		if (node1.parent === this.null) {
			this.root = node2
		} else if (node1.parent.left === node1) {
			node1.parent.left = node2
		} else {
			node1.parent.right = node2
		}

		if (node2 !== this.null) {
			node2.parent = node1.parent
		}
	}

	delete(value) {
		const node = this.search(value)
		let originColor
		let replaceNode

		if (node) {
			originColor = node.color
			if (node.left !== this.null) {
				replaceNode = node.right
				this.transplant(node, replaceNode)
			} else if (node.right !== this.null) {
				replaceNode = node.left
				this.transplant(node, node.left)
			} else {
				replaceNode = this.successor(node.right)
				this.transplant(node, replaceNode)
				originColor = replaceNode.color

				if (replaceNode !== node.right) {
					this.transplant(replaceNode, replaceNode.right)
					replaceNode.right = node.right
					replaceNode.right.parent = replaceNode
				}

				replaceNode.left = node.left
				replaceNode.left.parent = replaceNode
			}
		}

		if (originColor === BLACK) {
			this.deleteFixup(replaceNode)
		}
	}

	deleteFixup(node) {
		let curNode = node

		while (curNode !== this.root && curNode.color === BLACK) {
			if (curNode === curNode.parent.left) {
				let siblingNode = curNode.parent.right
				if (siblingNode.color === RED) {
					siblingNode.color = BLACK
					curNode.parent.color = RED
					this.rotate(curNode.parent, 'left')
					siblingNode = curNode.parent.right
				}

				if (
					siblingNode.left.color === BLACK &&
					siblingNode.right.color === BLACK
				) {
					siblingNode.color = RED
					curNode = curNode.parent
				} else if (siblingNode.right.color === BLACK) {
					siblingNode.color = RED
					siblingNode.left = BLACK
					this.rotate(siblingNode, 'right')
					siblingNode = curNode.parent.right
				} else {
					siblingNode.color = curNode.parent.color
					curNode.parent.color = BLACK
					siblingNode.right.color = BLACK
					this.rotate(curNode.parent, 'left')
					curNode = this.root
				}
			} else {
				let siblingNode = curNode.parent.left
				if (siblingNode.color === RED) {
					siblingNode.color = BLACK
					curNode.parent.color = RED
					this.rotate(curNode.parent, 'right')
					siblingNode = curNode.parent.left
				}

				if (
					siblingNode.left.color === BLACK &&
					siblingNode.right.color === BLACK
				) {
					siblingNode.color = RED
					curNode = curNode.parent
				} else if (siblingNode.left.color === BLACK) {
					siblingNode.color = RED
					siblingNode.right = BLACK
					this.rotate(siblingNode, 'left')
					siblingNode = curNode.parent.left
				} else {
					siblingNode.color = curNode.parent.color
					curNode.parent.color = BLACK
					siblingNode.left.color = BLACK
					this.rotate(curNode.parent, 'right')
					curNode = this.root
				}
			}
		}
		curNode.color = BLACK
	}
}

const tree = new BlackRedTree()
;[41, 38, 31, 12, 19, 8].forEach(item => {
	tree.insert(item)
})
// console.log(tree)

// ;[41, 38, 31].forEach(item => {
// 	tree.insert(item)
// 	console.log(tree)
// })
// console.log(tree)
;[(8, 12, 19, 31, 38, 41)].forEach(item => tree.delete(item))
console.log(tree)
