// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。
// 例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）



// 对于入栈顺序1，2，3，4，5.
// 出栈顺序4，5，3，2，1 合格的入栈出栈顺序如下：
// 1 入栈，2 入栈， 3 入栈， 4 入栈， 4 出栈，5 入栈，5出栈，3出栈，2出栈，1出栈。
// 而对于4，3，5，1，2 很明显1，2不符合栈的先进后出的概念。

// 针对题目解析：
// 我们需要先使用一个辅助栈将pushA中元素全部压入辅助栈中。
// 然后在压入辅助栈的过程中判断辅助栈中栈顶元素是否等于popV中的栈底元素，如果相等，则出栈，并且将标志位j向后移动一位。
// 例如：首先压入1，判断1 = 4 false.
// 压入2 2= 4 false
// 压入 3 3 = 4 false
// 此时辅助栈中为 1 ，2 ，3
// 压入 4 4 =4 true 弹出 这是用辅助栈顶元素和popV中的第二位元素对比。（j依次加1）
// 压入 5 5 = 5 弹出 继续执行while 3 = 3 弹出 2 = 2 弹出 1= 1 弹出。这样栈为空，则符合出栈顺序。


function IsPopOrder(pushV, popV)
{
    // write code here
    if(pushV.length === 0 || popV.length === 0 || pushV.length !== popV.length) return false;

    let newStack = [];
    let j = 0;
    for(var i = 0;  i < pushV.length; i++){
        newStack.push(pushV[i]);
        while(newStack.length !== 0 && newStack[newStack.length - 1] == popV[j]){
            newStack.pop();
            j ++;
        }
    }

    return newStack.length === 0;
}