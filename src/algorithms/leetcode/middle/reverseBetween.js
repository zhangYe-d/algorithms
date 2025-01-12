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

function reverseBetween(head, left, right) {
  if (left === right) return head;
  let index = 0;
  const tempNode = new ListNode(0);
  tempNode.next = head;
  let preNode = tempNode;
  while (index !== left - 1) {
    preNode = preNode.next;
    index++;
  }
  let currentNode = preNode.next;

  while (index < right - 1) {
    const next = currentNode.next;
    currentNode.next = next.next;
    next.next = preNode.next;
    preNode.next = next;
    index++;
  }

  return tempNode.next;
}
