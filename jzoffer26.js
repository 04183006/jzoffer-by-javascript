// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
function Convert(pRootOfTree)
{
    if(!pRootOfTree) return null;
    let first = null;
    let last = null;
    helper(pRootOfTree);
    return first;

    function helper(root){
        if(root === null) return null;
        helper(root.left);

        if(last){
            last.right = root;
            root.left = last;
        }else{
            first = root;
        }

        last = node;
        helper(root.right);
    }  

}
