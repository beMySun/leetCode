/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 解法1： 递归
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return root;
  if (root == p) return p;
  if (root == q) return q;

  var left = lowestCommonAncestor(root.left, p, q)
  var right = lowestCommonAncestor(root.right, p, q)

  if (left == null) return right
  if (right == null) return left

  return root
};

// 解法2， 利用二叉搜索树的特性递归
var lowestCommonAncestor = function (root, p, q) {
  // p, q 都小于root, 说明解在左子树
  if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)

  // p, q 都大于root, 说明解在右子树
  if (p.val > root.val && q.val > root.val) return lowestCommonAncestor(root.right, p, q)

  return root
}

// 解法3， 利用二叉搜索树的特性， 非递归
var lowestCommonAncestor = function (root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right
    } else {
      return root
    }
  }
}
