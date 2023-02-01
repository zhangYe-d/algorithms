/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, cachedNode = new Map()) {
	if (head === null) {
		return null
	}

	if (!cachedNode.get(head)) {
		cachedNode.set(head, { val: head.val })

		Object.assign(cachedNode.get(head), {
			next: copyRandomList(head.next, cachedNode),
			random: copyRandomList(head.random, cachedNode),
		})
	}

	return cachedNode.get(head)
}
