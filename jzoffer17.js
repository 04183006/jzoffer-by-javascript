// 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
/**
 * 子树：子树的意思是包含了一个结点，就得包含这个结点下的所有节点，一棵大小为n的二叉树有n个子树，就是分别以每个结点为根的子树。子结构的意思是包含了一个结点，可以只取左子树或者右子树，或者都不取。
 * 
 * 解题:
 * 1.在大树中找到和小树根节点相同的节点。
 * 2.然后以此节点为根节点，在大树上往下搜索对比小书左右节点是否相同，不同则返回false.
 * 3.如果2步中最后返回false 回到第一步，从大树的左子树找和小树根节点相同的节点。
 * 4.如果3步中最后返回false 回到第一步，从大树的右子树找和小树根节点相同的节点。
 */


function hasSubtreeHelper(r1,r2){
    if(r2 === null) return true;
    if(r1 === null) return false;
    if(r1.val != r2.val) return false;
    return hasSubtreeHelper(r1.left,r2.left) && hasSubtreeHelper(r1.right,r2.right); 
}


function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(pRoot1 === null || pRoot2 === null){
        return false;
    }

    let flag = false;

    if(pRoot1.val === pRoot2.val){
        flag = hasSubtreeHelper(pRoot1,pRoot2);
    }

    if(!flag) flag = HasSubtree(pRoot1.left,pRoot2);
    if(!flag) flag = HasSubtree(pRoot1.right,pRoot2);

    return flag;
}