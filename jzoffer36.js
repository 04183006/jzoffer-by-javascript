// 输入两个链表，找出它们的第一个公共结点。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    if(pHead1 === null || pHead2 === null) return null;
    let p1 = pHead1;
    let p2 = pHead2;

    while(p1 !== p2){
        p1 === null ? p1 = pHead2: p1.next;
        p2 === null ? p2 = pHead1: p2.next;
    }

    return p1;
}



// 做到让两个链表的长度相等