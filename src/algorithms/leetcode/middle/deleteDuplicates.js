/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const pre = new ListNode(-1);
  pre.next = head;

  let current = pre;
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      const val = current.next.val;
      while (current.next && current.next.val === val) {
        current.next = current.next.next;
      }
    } else [(current = current.next)];
  }
  return pre.next;
};
