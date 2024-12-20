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

	while (queue.length) {
		const nodes = queue.shift()
		if (nodes.length) {
			ans.push(nodes.map(node => node.val))

			const nextNodes = []

			nodes.forEach(node => {
				if (node.left) {
					nextNodes.push(node.left)
				}

				if (node.right) {
					nextNodes.push(node.right)
				}
			})

			queue.push(nextNodes)
		}
	}

	return ans
}
