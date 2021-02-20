// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// F(0) = 0; F(1) = 1; F(2) = 2; F(3) = 3, F(4) = 5  也是一个斐波那契的解法


//递归  
function jumpFloor(number)
{
    // write code here
    if(number === 0) return 0;
    if(number === 1) return 1;
    if(number > 1) {
        return jumpFloor(number-2) + jumpFloor(number-1);
    }
}


// 迭代。。。。。。


