// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针
// 左根右

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/


/**
 * 
 * 1. 如果 pNode 有右子树，拿到右子树层次最深的左子树。
 * 2. 如果 pNode 没有右子树，pNode 为自己父亲的左子树，返回父亲节点， pNode不是父亲的左子树，返回他父亲的父亲节点即可。
 * 
 * 3. 特殊点处理   如果pNode Parent.next === null ,return null
 * 4. 最后一个右子树的判断
 *           
 */
function GetNext(pNode)
{
    // write code here
    if(pNode.right){
        pNode = pNode.right;
        while(pNode.left){
            pNode = pNode.left;
        }
        return pNode;
    }else{
        let ParentNode = pNode.next;
        if(ParentNode === null) return null;
        if(pNode === ParentNode.left){
            return ParentNode;
        }else{
            let isLastRight = true;
            while(ParentNode.next){
                if(ParentNode.next.left === ParentNode){
                    isLastRight = false;
                    break;
                }
                ParentNode = ParentNode.next;
            }

            if(isLastRight) return null;
            return ParentNode.next;
        }
    }
}