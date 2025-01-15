/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head, memoizedNode = new Map()) {
  if (head === null) return null;
  if (!memoizedNode.has(head)) {
    memoizedNode.set(head, { val: head.val });
    Object.assign(memoizedNode.get(head), {
      next: copyRandomList(head.next, memoizedNode),
      random: copyRandomList(head.random, memoizedNode),
    });
  }

  return memoizedNode.get(head);
};
