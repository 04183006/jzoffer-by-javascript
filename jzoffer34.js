// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）
function FirstNotRepeatingChar(str)
{
    // write code here
    if(str.length === 0) return -1;
    let obj = {};
    for(var i  = 0 ; i < str.length ; i++){
        if(obj[str[i]]) obj[str[i]] ++;
        else obj[str[i]] = 1;
    }

    let result;

    for(let k in obj){
        if(obj[k] === 1){
            result = str.indexOf(k);
            break;
        }else{
            result = -1;
        }
    }

    return result;
}


console.log(FirstNotRepeatingChar('google'));