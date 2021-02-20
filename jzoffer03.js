// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。

function printListFromTailToHead(head)
{
    if(!head){
        return [];
    }

    let resultArr = [];

    while(head){
        resultArr.push(head.val);
        head = head.next;
    }

    return resultArr.reverse();
}