// 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为 O(n).

// 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。(子向量的长度至少是1)
// 思路
// 遍历array，对于每一个数字，我们判断，（之前的sum + 这个数字） 和 （这个数字） 比大小，如果（这个数字）自己就比 （之前的sum + 这个数字） 大的话，那么说明不需要再继续加了，直接从这个数字，开始继续，因为它自己已经比之前的sum都大了。

// 反过来，如果 （之前的sum + 这个数字）大于 （这个数字）就继续加下去。

// 利用动态规划做题。
// 只遍历数组一遍，当从头到尾部遍历数组A， 遇到一个数有两种选择 （1）加入之前subArray （2）自己另起一个subArray

// 设状态F[i], 表示以array[i]结尾的最大连续子序列和，状态转移方程如下:

// F[i] = max(F[i-1] + array[i],array[i])

// 从状态转移方程上F[i]只与F[i-1]有关，与其他都无关，因此可以用一个变量来记住前一个的最大连续数组和就可以了。这样就可以节省空间了。




function FindGreatestSumOfSubArray(array)
{
    // write code here
    if(array.length === 0) return 0;

    //这里默认 sum 和 maxSum 均为array 的第一个数  ， 坑
    let sum = array[0];
    let maxSum = array[0];

    for(var i = 1; i < array.length ;i++){
        sum = Math.max(sum + array[i],array[i]);
        maxSum = Math.max(sum,maxSum);
    }

    return maxSum;
}

console.log(FindGreatestSumOfSubArray([-2,-8,-1,-5,-9]));
// {6,-3,-2,7,-15,1,2,2}
// sum = 0; maxSum = 0;
// sum = 6  maxSum = 6;
// sum = 3  maxSum = 6;
// sum = 1 maxSum = 6;
// sum = 8 maxSum = 8;
// sum = -7 maxSum = 8
// .....


