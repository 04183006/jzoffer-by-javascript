// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
// n\leq 39n≤39
// F(0) = 0  F(1) = 1  F(2) = 1  F(n) = F(n-2) + F(n-1)

// 迭代
function Fibonacci(n)
{
    // write code here
    let front = 0;
    let end = 1;
    while(n--){
        end = front + end;
        front = end - front;
    }
    
    return front;
}



// 递归
function Fibonacci(n)
{
   if(n === 0) return 0;
   if(n === 1) return 1;

   if(n > 1){
       return Fibonacci(n-2) + Fibonacci(n-1);
   }
}


