/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let fastNode = head.next,
    slowNode = head;

  while (fastNode !== slowNode) {
    if (fastNode === null || fastNode.next === null) {
      return false;
    }

    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
  }
  return true;
};
