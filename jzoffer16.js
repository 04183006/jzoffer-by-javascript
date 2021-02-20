// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

/**
 * 递归解决问题
 * 1.设置边界条件  当 l1 和 l2 都为空时，返回null
 * 2.l1 = null, 返回l2 ， l2 = null, 返回l1
 * 3.l1 < l2 时，temp = l1，再进行下一轮比较
 */

function Merge(pHead1, pHead2) {
  // write code here
  if (pHead1 === null && pHead2 === null) return null;
  if (pHead1 === null) return pHead2;
  if (pHead2 === null) return pHead1;

  let temp = new ListNode(-1);
  if (pHead1.val < pHead2.val) {
    temp = pHead1;
    temp.next = Merge(pHead1.next, pHead2);
  } else {
    temp = pHead2;
    temp.next = Merge(pHead1, pHead2.next);
  }
  return temp;
}

/**
 * 迭代解决问题
 * 1.如果l1指向的结点值小于等于l2指向的结点值，则将l1指向的结点值链接到cur的next指针，然后l1指向下一个结点值
 * 2.否则，让l2指向下一个结点值
 * 3.循环步骤1,2，直到l1或者l2为null
 * 4.将l1或者l2剩下的部分链接到cur的后面
 */
function Merge(pHead1, pHead2) {
  // write code here
  let temp = new ListNode(-1);
  let curr = temp;

  while (pHead1 && pHead2) {
    if (pHead1.val <= pHead2.val) {
      curr.next = pHead1;
      pHead1 = pHead1.next;
    } else {
      curr.next = pHead2;
      pHead2 = pHead2.next;
    }
    curr = curr.next;
  }

  curr.next = pHead1 ? pHead1: pHead2;
  return temp.next;
}
