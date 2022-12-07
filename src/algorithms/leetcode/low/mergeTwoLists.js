/**合并两个升序链表
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	if (list1 === null) {
		return list2
	}

	if (list2 === null) {
		return list1
	}

	let prehead = new ListNode(null)
	let curNode = prehead

	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			curNode.next = list1
			list1 = list1.next
		} else {
			curNode.next = list2
			list2 = list2.next
		}

		curNode = curNode.next
	}

	if (list1 !== null) {
		curNode.next = list1
	}

	if (list2 !== null) {
		curNode.next = list2
	}

	return prehead.next
}
