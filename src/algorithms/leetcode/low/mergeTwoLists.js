/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	const preNode = new ListNode(null)
	let curNode = preNode

	while (l1 || l2) {
		const val1 = l1?.val ?? Infinity
		const val2 = l2?.val ?? Infinity
		if (val1 < val2) {
			curNode.next = l1
			l1 = l1.next
		} else {
			curNode.next = l2
			l2 = l2.next
		}

		curNode = curNode.next
	}

	return preNode.next
}
