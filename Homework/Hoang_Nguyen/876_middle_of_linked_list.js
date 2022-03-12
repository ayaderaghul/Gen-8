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
var middleNode = function (head) {
  let slow = head;
  let fast = slow.next;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    } else {
      break;
    }
  }
  return slow;
};
