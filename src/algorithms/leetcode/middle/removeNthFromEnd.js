/**删除链表倒数第N个节点
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let nulNode = new ListNode(null)
	nulNode.next = head
	let first = nulNode,
		second = nulNode

	let size = 0

	while (first !== null) {
		if (size > n) {
			second = second.next
		}
		first = first.next
		size++
	}

	second.next = second.next.next

	return nulNode.next
}
