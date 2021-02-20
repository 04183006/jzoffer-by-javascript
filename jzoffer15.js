// 翻转链表



// 操作指针做法
function ReverseList(pHead)
{
    // write code here
   let prev = null;
   let curr = pHead;
   let tail = pHead;
    
   while(curr !== null){
       tail = curr.next;
       curr.next = prev;
       prev = curr;
       curr = tail;
   }
    
    return prev;
}




// 操作数组做法
function ReverseList(pHead){
    // 把指针的val 存放进栈 stack 中，然后遍历栈生成一个新的链表 return 出来
}