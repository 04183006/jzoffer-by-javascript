// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
// 队列 先进先出


// stack01  1 2 3 4     stack02   4,3,2,1
// stack01 负责存储数据, 栈后进先出[1,2,3,4]，存储进stack02的时候顺序[4,3,2,1],出栈即可。





let stack01 = [];
let stack02 = [];
function push(node)
{
    // write code here
    stack01.push(node);
}

function pop()
{
    // write code here
    while(stack01.length){
        stack02.push(stack01.pop());
    }

    var result = stack02.pop();
    while(stack02.length){
        stack01.push(stack02.pop());
    }

    return result;
}




