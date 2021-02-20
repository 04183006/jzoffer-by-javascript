// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则返回true,否则返回false。假设输入的数组的任意两个数字都互不相同。

/**
 * 
 * 二叉搜索树的后续遍历的最后一个元素为 root 节点的值 ，左子树全部小于 root.val   右子树全部大于 root.val
 */


// 后序遍历  后(根)序遍历（左右根）
function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length === 0) return false;
    return isResult(0, sequence.length -1, sequence)
}

function isResult(start,end,array){
    if(end <= start) return true;
    for(var i = start; i < end; i++){   // 闭包 坑点
        if(array[i] > array[end]){
            break;
        }
    }

    for(var j = i; j  < end; j++){
        if(array[j] < array[end]){
            return false;
        }
    }

    return isResult(start, i - 1,array) &&  isResult(i, end -1, array);
}
