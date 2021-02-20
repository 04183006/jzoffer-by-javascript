// 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

// 保证base和exponent不同时为0


// 循环法
function Power(base, exponent)
{	
1	//指数为0，结果为1
   if (exponent === 0) {
        return 1;
    }
    //质数为1，返回base
    if (exponent === 1) {
        return base;
    }
 	
 	//判断指数是否为负
    const isNegative = exponent < 0; // 是否是负指数
    const absExponent = Math.abs(exponent);
    let result = base;
    for (let i = 1; i < absExponent; ++i) {
        result = result * base;
    }
 
    return isNegative ? 1 / result : result;
}



// 暴力
// Math.Power()