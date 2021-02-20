// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
// 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

// 解题思路： 找到root 节点，划分左右子树，递归处理即可
// 1.前序遍历的第一个节点就是 root 
// 2.在中序遍历的数组里面找到左右子树的个数

// 1，2 步完成已经划分好了第一个根结点和左右子树，但是得以此确定左右子树的根结点，左右子树，

// 再次递归调用函数处理左右子树



function reConstructBinaryTree(pre, vin)
{
    if(pre.length && vin.length){
        return null;
    }

    let rootIndex = vin.indexOf(pre[0]);
    
    let preLeftChild = pre.slice(1,rootIndex + 1);
    let preRightChild = pre.slice(rootIndex);
    let vinLeftChild = vin.slice(0,rootIndex);
    let vinRightChild = vin.slice(rootIndex+1);

    var node = new TreeNode(vin[rootIndex]);
    node.left = reConstructBinaryTree(preLeftChild,vinLeftChild);
    node.right = reConstructBinaryTree(preRightChild,vinRightChild);
    return node;
    
}


