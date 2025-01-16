/**
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
  const arr = [];
  const pre = new ListNode(-1);
  pre.next = head;

  let current = pre;
  while (current) {
    arr.push(current);
    current = current.next;
  }

  const before = arr[arr.length - n - 1];
  before.next = before.next.next;

  return pre.next;
};
