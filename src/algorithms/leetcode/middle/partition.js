/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (head === null) return null;
  let firstPre = new ListNode(-1),
    secondPre = new ListNode(-1),
    current = head,
    firstCurrent = firstPre,
    secondCurrent = secondPre;

  while (current) {
    if (current.val >= x) {
      firstCurrent.next = current;
      firstCurrent = firstCurrent.next;
    } else {
      secondCurrent.next = current;
      secondCurrent = secondCurrent.next;
    }

    current = current.next;
  }

  secondCurrent.next = firstPre.next;
  firstCurrent.next = null;

  return secondPre.next;
};
