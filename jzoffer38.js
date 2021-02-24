// 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。


//1. 辅助数据结构 队列 Queue  BFS 广度优先搜索
//2. 转化为树有多少层的问题
//3. 如何判断每一层所有节点已经遍历完成
//4. 如何判断所有节点已经遍历结束


// 递归
function TreeDepth(pRoot){
    if(pRoot === null) return 0;
    let left = TreeDepth(pRoot.left);
    let right = TreeDepth(pRoot.right);

    return Math.max(left,right) + 1;
}

// 递归思想有点反人类
// 迭代法


function TreeDepth(pRoot)
{
    // write code here
    if(pRoot === null) return 0;
    let queue = [];
    let depth = 0,
        size = 0;
    queue.push(pRoot);

    while(queue.length !== 0){
        size = queue.size();
        while(size > 0){
            let TreeNode = queue.shift();
            size --;
            if(TreeNode.left) queue.push(TreeNode.left);
            if(TreeNode.right) queue.push(TreeNode.right);
        }
        depth ++;
    }
    return depth;
}