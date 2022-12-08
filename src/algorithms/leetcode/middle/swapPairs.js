/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**两两交换链表中的节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	const prehead = new ListNode(null)
	prehead.next = head

	let curNode = head
	let preNode = prehead
	while (curNode && curNode.next) {
		const next = curNode.next
		preNode.next = next
		curNode.next = curNode.next.next
		next.next = curNode

		preNode = curNode
		curNode = curNode.next
	}

	return prehead.next
}
