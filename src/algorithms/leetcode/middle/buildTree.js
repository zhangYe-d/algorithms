/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	if (preorder.length === 0) {
		return null
	}

	let map = new Map(inorder.map((value, index) => [value, index]))

	function getSubTree(root, left, right) {
		if (left > right) {
			return null
		}

		const node = new TreeNode(preorder[root])
		const i = map.get(preorder[root])

		node.left = getSubTree(root + 1, left, i - 1)
		node.right = getSubTree(root - left + i + 1, i + 1, right)

		return node
	}

	return getSubTree(0, 0, inorder.length - 1)
}
