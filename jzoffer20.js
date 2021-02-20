// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。


const stack1 = []  // 8 9 
const stack2 = []  // 8
function push(node)
{
    // write code here
    if (stack1.length == 0){
        stack1.push(node)
        stack2.push(node)
    }else{
        if (node < stack2[stack2.length-1]){
            stack2.push(node)
        }
        stack1.push(node)
    }
}
function pop()
{
    // write code here
    let res = stack1.pop()
    if (res === stack2[stack2.length-1]) stack2.pop()
    return res
}
function top()
{
    // write code here
    return stack1[stack1.length-1]
}
function min()
{
    // write code here
    return stack2[stack2.length-1]
}
