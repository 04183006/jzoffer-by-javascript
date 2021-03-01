// 请实现一个函数，用来判断一棵二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

/**
 * 思路：采用递归
 * 递归终止条件， root1， root2 为空， root1 && root2 == null ,返回true， 否则返回false；
 * 递归比较，根结点的 val， root1.left.val === root2.right.val .....
 */



function isSymmetrical(pRoot) {
    // write code here
    function isSame(pRoot1,pRoot2){
        if(!pRoot1 && !pRoot2) return true;
        if(!pRoot1 || !pRoot2) return false;
        
        
        
        return pRoot1.val === pRoot2.val && isSame(pRoot1.left,pRoot2.right)
        && isSame(pRoot1.right, pRoot2.left)
        
    }
      
      return isSame(pRoot,pRoot)
  }




