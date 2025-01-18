/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null) return null;

  const arr = [];

  let current = head;
  while (current) {
    arr.push(current);
    current = current.next;
  }
  k %= arr.length;
  if (k === 0) return head;
  const pre = new ListNode(-1);
  current = pre;
  for (let i = arr.length - k; i < arr.length; i++) {
    current.next = arr[i];
    current = current.next;
  }

  for (let i = 0; i < arr.length - k; i++) {
    current.next = arr[i];
    current = current.next;
  }

  current.next = null;

  return pre.next;
};
