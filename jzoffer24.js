// 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

function FindPath(root, expectNumber) {
  // write code here
  let resultArray = [];
  let recordArray = [];
  if(!root) return resultArray;
  dfs(resultArray,recordArray,root,expectNumber);
  return resultArray;
}

function dfs(resultArray,recordArray,root,expectNumber){
    expectNumber = expectNumber - root.val;
    recordArray.push(root.val);
    if(expectNumber === 0 && root.left === null && root.right === null) {
        // 坑点
        resultArray.push(recordArray.slice());
    }
    if(root.left){
        dfs(resultArray,recordArray,root.left,expectNumber)
    }
    if(root.right){
        dfs(resultArray,recordArray,root.right,expectNumber)
    }
    recordArray.pop();
}


 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let newRoot1 = new TreeNode(10);
let newRoot2 = new TreeNode(5);
let newRoot3 = new TreeNode(12);
let newRoot4 = new TreeNode(4);
let newRoot5 = new TreeNode(7);

newRoot1.left = newRoot2;
newRoot1.right = newRoot3;
newRoot2.left = newRoot4;
newRoot2.right = newRoot5;

console.log(FindPath(newRoot1,22));  

