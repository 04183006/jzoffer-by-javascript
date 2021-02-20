// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

const str = 'We Are Happy.';
// 普通遍历方法

function replaceSpace(str){
    let arr = [];
    for(var i = 0; i < str.length; i++){
        arr.push(str[i] === ' '?'%20':str[i])
    }
    return arr.join('');
}


// 正则
function replaceSpace(str){
    const result = str.replace(/ /img,'%20');
    return result;
}


console.log(replaceSpace(str));
