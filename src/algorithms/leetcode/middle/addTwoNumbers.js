/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1, l2) {
  const pre = new ListNode(-1);
  let carry = 0;
  let current = pre;

  while (l1 || l2) {
    let first = 0,
      seccond = 0;
    if (l1) {
      first = l1.val;
      l1 = l1.next;
    }

    if (l2) {
      seccond = l2.val;
      l2 = l2.next;
    }
    current.next = new ListNode((first + seccond + carry) % 10);
    carry = Math.floor((first + seccond + carry) / 10);
    current = current.next;
  }

  if (carry !== 0) {
    current.next = new ListNode(carry);
  }

  return pre.next;
}
