// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
// 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。




let arr=[];
// 读取数据，插入排序，保持递增
function Insert(num) {
    arr.push(num);
    // 排序
    for(let i=arr.length-2;arr[i]>num; i--){
        [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
    }
}
// 计算数据流中的中位数
function GetMedian() {
    const len = arr.length
    if(len%2==1){
        return arr[(len-1)/2]
    }else{
        return (arr[len/2]+arr[len/2-1])/2
    }
}