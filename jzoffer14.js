// 输入一个链表，输出该链表中倒数第k个结点。

// 数组方法
function FindKthToTail(head, k) {
  var node_Arr = [];
  if (head == null || k < 0) {
    return false;
  } else {
    while (head) {
      node_Arr.push(head);
      head = head.next;
    }
  }
  return node_Arr[node_Arr.length - k];
}

// 指针方法
function FindKthToTail(head, k) {
  let p = head;
  let listWidth = 0;
  while (p !== null) {
    p = p.next;
    listWidth += 1;
  }
  p = head;

  let curr = listWidth - k;
  if (curr < 0) return null;
  while (curr--) {
    p = p.next;
  }
  return p;
}
