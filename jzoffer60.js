// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
  if(!pRoot) return [];
 
  var result = [];
  var que = [pRoot];
   
  while(que.length > 0) {
    var len = que.length;
    var temp = [];
     
    while(len--) {
      var item = que.shift();
      temp.push(item.val);
      if (item.left) {
        que.push(item.left);
      }
      if (item.right) {
        que.push(item.right);
      }
    }
    result.push(temp);
  }
   
  return result;
}