/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
	if (root === null) {
		return []
	}

	const ans = []
	const queue = [root]

	while (queue.length) {
		const node = queue.shift()
		ans.push(node.val)

		const { left, right } = node

		if (left) {
			queue.push(left)
		}

		if (right) {
			queue.push(right)
		}
	}

	return ans
}
