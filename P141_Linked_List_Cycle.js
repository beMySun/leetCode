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
var hasCycle = function(head) {
  while(head) {
    if(head.hasVisited) {
      return true
    }
    head.hasVisited = true
    head = head.next
  }
  return false
};