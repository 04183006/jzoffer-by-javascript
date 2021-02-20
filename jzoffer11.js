// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

//   可以分为两种情况来讨论，

// （1）第一次用一个2*1的小矩形作为第一个格，那么剩下2（n-1）个矩形等待填充。

// （2）第一次用一个1*2的小矩形作为第一个填充的矩形，下面的那个小矩形是必然要进行填充的，那么剩下2（n-2）个小矩形等待填充，所以n = n的情况总的方法为两种情况相加。 return f(n) = f(n-1) + f(n-2)。


function rectCover(number)
{
    // write code here
    if(number <= 2){
        return number;
    }
    var before = 1;
    var after = 2;
    for(i=3; i<=number; i++){
        after = before + after;
        before = after - before;
    }
    return after;
}

