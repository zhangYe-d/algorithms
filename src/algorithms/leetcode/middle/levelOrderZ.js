/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (root === null) {
		return []
	}

	const ans = []
	const queue = [[root]]
	let left2Rigth = true

	while (queue.length) {
		const nodes = queue.shift()
		const nextNodes = []
		const nextItem = []

		if (nodes.length) {
			nodes.forEach(node => {
				if (left2Rigth) {
					nextItem.push(node.val)
				} else {
					nextItem.unshift(node.val)
				}

				if (node.left) {
					nextNodes.push(node.left)
				}

				if (node.right) {
					nextNodes.push(node.right)
				}
			})

			queue.push(nextNodes)
			ans.push(nextItem)
			left2Rigth = !left2Rigth
		}
	}

	return ans
}
