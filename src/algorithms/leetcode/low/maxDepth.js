/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (root === null) {
		return 0
	}

	let maxDepth = 0
	let curDepth = 0

	function dfs(node) {
		if (!node) {
			maxDepth = Math.max(curDepth, maxDepth)
			return
		}

		curDepth++
		dfs(node.left)
		dfs(node.right)
		curDepth--
	}

	dfs(root)

	return maxDepth
}
