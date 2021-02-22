// 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了。
// ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。

// n = 13, 1 , 10 ,11, 12, 13    result = 6;



function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    if(n < 0) return 0;

    let one_count = 0;
    let str = '';
    for(var i = 0; i <= n; i++){
        if(String(i).includes('1')){
            str += i;
        }
    }

    for(var i = 0; i< str.length; i++){
        if(str[i] === '1'){
            one_count ++;
        }
    }

    return one_count;
}


console.log(NumberOf1Between1AndN_Solution(13));
