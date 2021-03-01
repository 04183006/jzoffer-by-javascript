// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

function deleteDuplication(pHead) {
  // write code here
  if (pHead === null) {
    return null;
  }

  let p = new ListNode(Infinity);
  p.next = pHead;
  let pre = p;
  let curr = p;

  while (curr !== null) {
    while (curr.next !== null && curr.val === curr.next.val) {
      curr = curr.next;
    }
    curr = curr.next;
    if (curr !== null && curr.next !== null && curr.val === curr.next.val) {
      continue;
    }

    pre.next = curr;
    pre = pre.next;
  }

  return p.next;
}

function ListNode(x) {
  this.val = x;
  this.next = null;
}

const pre0 = new ListNode(1);
const pre1 = new ListNode(2);
const pre2 = new ListNode(3);
const pre3 = new ListNode(3);
const pre4 = new ListNode(4);
const pre5 = new ListNode(4);
const pre6 = new ListNode(5);

pre0.next = pre1;
pre1.next = pre2;
pre2.next = pre3;
pre3.next = pre4;
pre4.next = pre5;
pre5.next = pre6;
pre6.next = null;

console.log(deleteDuplication(pre0));
