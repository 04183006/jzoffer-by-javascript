// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// 先打印根结点，左子树和右子树，之后递归调用




function PrintFromTopToBottom(root)
{
    // write code here
    if(root === null) return [];
    let queue = [];
    let result = [];

    queue.push(root);
    while(queue.length){
        let node = queue.shift();
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
        result.push(node.val);
    }
    return result;
}


//      1
//   2     3