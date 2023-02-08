/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
	let nth = 0
	let targetNode = null

	function search(node) {
		if (node.right) {
			search(node.right)
		}

		nth++
		if (nth === k) {
			targetNode = node
			return
		}

		if (node.left) {
			search(node.left)
		}
	}

	search(root)

	return targetNode.val
}
