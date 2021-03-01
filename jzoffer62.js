// 给定一棵二叉搜索树，请找出其中的第k小的TreeNode结点。
/**
 *
 * 中序遍历是从小到大的有顺序的，每遍历一个节点 k - 1, 直到 k === 1；
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k) {
  // write code here
  let list = [];
  helper(pRoot);
  return list[k - 1];

  function helper(node) {
    if (!node) {
      return;
    }
    if (node.left) {
      helper(node.left);
    }
    list.push(node);
    if (node.right) {
      helper(node.right);
    }
  }
}
