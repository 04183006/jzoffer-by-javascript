// 操作给定的二叉树，将其变换为源二叉树的镜像。

/**
 * 1.交换根结点的左右子树
 * 2.递归处理左右子树
 */



function Mirror(root)
{
    // write code here
    if(root === null) return null;
    let temp = null;
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);

    return root;
}