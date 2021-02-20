// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向
// 下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/


// 非递归方法
function Clone(pHead) {
    if (pHead === null) return null;

    // 对应思路二中的第一步：
    var curr = pHead;
    while (curr !== null) {
        var cloneNode = new RandomListNode(curr.label);
        cloneNode.next = curr.next;
        curr.next = cloneNode;
        curr = cloneNode.next;
    }

    // 对应思路二中的第二步：
    curr = pHead;
    while (curr !== null) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    //拆分，对应思路二中的第三步：        
    var pCloneHead = pHead.next;
    var prev = null;
    curr = pHead;
    while (curr.next !== null) {
        prev = curr.next;
        curr.next = prev.next;
        curr = prev;
    }
    return pCloneHead;
}

// 递归方法
function Clone(pHead)
{
    if(!pHead){
        return null
    }
    let node = new RandomListNode(pHead.label)
    node.random = pHead.random
    node.next = Clone(pHead.next)
    return node
     
}