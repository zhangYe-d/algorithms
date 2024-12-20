/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
	if (root === null) {
		return true
	}

	function depth(node) {
		if (node === null) {
			return 0
		}

		return Math.max(depth(node.left), depth(node.right)) + 1
	}

	const delta = depth(root.left) - depth(root.right)

	const balanced = delta >= -1 && delta <= 1

	return balanced && isBalanced(root.left) && isBalanced(root.right)
}
