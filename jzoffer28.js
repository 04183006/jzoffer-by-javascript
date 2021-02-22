// 题目描述
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。


function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    var len = numbers.length;
    var obj = {};
    for(var i = 0; i < len; i++){
        if(obj[numbers[i]]){
            obj[numbers[i]] ++;
        }else{
            obj[numbers[i]] = 1
        }
    }
     
    var result;
    for(let k in obj){
        if(obj[k] > len / 2){
            result = k;
            break;   // 这个 break 重中之重
        }else{
            result = 0;
        }
    }
    return result;
}

console.log(MoreThanHalfNum_Solution([1,2,2,2,1,5,2]));
