// 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
// 因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
// 跳1级，剩下n-1级，则剩下跳法是f(n-1)
// 跳2级，剩下n-2级，则剩下跳法是f(n-2)
// f(n) = f(n-1) + f(n-2) + ... + f(2) + f(1);
// f(n - 1) = f(n -2) + ... + f(2) + f(1);

// => f(n) = 2*f(n-1)

// 递归
function jumpFloorII(number)
{
    // write code here
    if(number === 0) return 0;
    if(number === 1) return 1;
    if(number > 1){
        return 2*jumpFloorII(number-1)
    }
}






