/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// 第一种解法， 中序遍历
// 如果是一个合法的二叉搜索数， 一定是左结点 < 根结点 < 右结点
// 这样得到的中序遍历一定是一个升序的，可以用这种方式来验证
var isValidBST = function (root) {
  var stack = [];

  // 中序遍历
  function dfs(root) {
    if (!root) return;
    root.left && dfs(root.left)
    root && stack.push(root.val)
    root.right && dfs(root.right)
  }

  dfs(root)

  for (var i = 0; i < stack.length - 1; i++) {
    if (stack[i] >= stack[i + 1]) return false
  }

  return true;
};

// https://leetcode-cn.com/problems/validate-binary-search-tree/submissions/

var isValidBST = function(root) {
  function isValidBSTxxx(root, min, max) {
    if(root == null) return true;
    if(min != null && root.val <= min) return false;
    if(max != null && root.val >= min) return false;
    return isValidBSTxxx(root.left, min, root.val) && isValidBST(root.right, root.val, max)
  }

  return isValidBSTxxx(root, -Infinity, Infinity)
}

var isValidBST = function (root) {

  function dfs(root) {
    if (root == null) return true

    // BST，需要整个右子树都大于根，整个左子树都小于根
    // 右孩子一定大于根，左孩子一定小于根；
    // 需要再附加条件：任意节点的值必须大于其左子树的最右节点；同时小于右子树的最左节点。
    // 从根节点开始检查，一旦发现不满足则返回false。

    if (root.left) {
      if (root.left.val >= root.val) return false
      let rightest = getRightest(root.left)
      if (rightest && rightest.val >= root.val) return false

    }
    if (root.right) {
      if (root.right.val <= root.val) return false
      let leftest = getLeftest(root.right)
      if (leftest && leftest.val <= root.val) return false
    }

    return dfs(root.left) && dfs(root.right)
  }

  function getRightest(node) {
    while (node && node.right) node = node.right
    return node
  }

  function getLeftest(node) {
    while (node && node.left) node = node.left
    return node
  }

  return dfs(root)
};