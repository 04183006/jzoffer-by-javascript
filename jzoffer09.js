// 输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。

function NumberOf1(n)
{
    if(n<0){
        n = n>>>0;
        //get到新技能，该行命令能够获取到负数的补码
    }
    var res = n.toString(2);  // 拿到二进制的字符串形式
    var count = 0;
    for(var i = 0; i <res.length; i++){
        if(res[i] == 1){
            count++;
        }
    }
    return count;
}