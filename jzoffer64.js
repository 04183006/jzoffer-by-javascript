// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
// 那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
// {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
// 窗口大于数组长度的时候，返回空

function maxInWindows(num, size) {
    var maxArr = [];   //存储每个片段里面最大元素数组
    var scorllArr = [];   //滚动片段数组
    var max = null;   //最大值

    for (let i = 0; i < num.length; i++) {
        if (size > 0) {     //片段长度 > 0
            if (scorllArr.length < size) {
                scorllArr.push(num[i])  
            }  //如果片段的长度小于size就继续给数组中推入元素
            if (scorllArr.length == size) {
                maxArr.push(Math.max(...scorllArr));  
                scorllArr.shift();
            }  //如果片段的长度等于size  1.计算长度  2.删除片段首部元素
        }
    }

    return maxArr;   //返回自己的数组
}
