// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

// 使用快慢指针
// 快指针每次走2步， 慢指针每次走一步，那么快指针一定比慢指针先进入环，并且快慢指针必定会相遇在慢指针走第二圈之前。
// 判断有环之后，快慢指针停止前进，然后此时头节点 和 相遇的位置距离环的入口节点距离相等。ac


function EntryNodeOfLoop(pHead) {
  // write code here
  if (pHead === null) {
    return null;
  }
  let fast = pHead;
  let slow = pHead;
  let pre = pHead;
  let isHasCircle = false;
  while (slow !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      isHasCircle = true;
      breack;
    } else {
      isHasCircle = false;
    }
  }

  if (isHasCircle) {
    while (pre !== slow) {
      pre = pre.next;
      slow = slow.next;
    }
    return pre;
  } else {
    return null;
  }
}
