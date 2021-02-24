// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
// 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
// 平衡二叉树（Balanced Binary Tree），具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。


function IsBalanced_Solution(pRoot)
{
    // write code here
    let isBalance = true;
    
    function dfs(treeNode){
        if(treeNode === null) return 0;
        let left = dfs(treeNode.left);
        let right = dfs(treeNode.right);
        if(Math.abs(left - right) > 1) isBalance = false;
        return Math.max(left,right) + 1;
    }

    
    dfs(pRoot);
    return isBalance;
}



