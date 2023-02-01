/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
	if (root === null) {
		return []
	}

	const path = []
	const ans = []

	function dfs(node, sum) {
		path.push(node.val)
		sum -= node.val

		if (node.left) {
			dfs(node.left, sum)
		}

		if (node.right) {
			dfs(node.right, sum)
		}

		if (!node.left && !node.right && sum === 0) {
			ans.push([...path])
		}

		path.pop()
	}

	dfs(root, target)

	return ans
}
