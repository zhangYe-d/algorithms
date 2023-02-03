/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
	if (root === null) {
		return null
	}

	let head = null
	let prev = head

	function handleNode(node) {
		if (prev === null) {
			head = node
		} else {
			prev.right = node
			node.left = prev
		}

		prev = node
	}

	function seachAll(node) {
		if (!node) {
			return
		}

		seachAll(node.left)
		handleNode(node)
		seachAll(node.right)
	}

	seachAll(root)
	head.left = prev
	prev.right = head

	return head
}
