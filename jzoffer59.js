// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */



/**
 * 总结： 按之字形顺序打印二叉树，需要两个栈。当我们在打印某一行的结点时，把下一层的结点保存到相应的栈中。
 * 如果当前打印的是奇数层，则先保存左子结点再保存右子结点到一个栈中；如果当前打印的是偶数层，则先保存右子结点再保存左子结点到另一个栈中。 
 */
function Print(pRoot) {
  const lists = [];

  if (pRoot === null) {
    return lists;
  }

  const stack1 = [];
  const stack2 = [];

  stack2.push(pRoot);
  let isUnevenNum = true;
  while (stack1.length !== 0 || stack2.length !== 0) {
    const list = [];

    // 为奇数层
    if (isUnevenNum) {
      while (stack2.length !== 0) {
        const tmp = stack2[stack2.length - 1];
        stack2.pop();
        list.push(tmp.val);
        if (tmp.left !== null) {
          stack1.push(tmp.left);
        }
        if (tmp.right !== null) {
          stack1.push(tmp.right);
        }
      }
      isUnevenNum = false;
    }
    // 为偶数层
    else {
      while (stack1.length !== 0) {
        const tmp = stack1[stack1.length - 1];
        stack1.pop();
        list.push(tmp.val);
        if (tmp.right !== null) {
          stack2.push(tmp.right);
        }
        if (tmp.left !== null) {
          stack2.push(tmp.left);
        }
      }
      isUnevenNum = true;
    }
    lists.push(list);
  }
  return lists;
}
