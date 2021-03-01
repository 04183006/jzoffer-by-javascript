// 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0
function StrToInt(str) {
  // write code here
  if (str === '-0' || str === '+0') {
    return 0;
  } else {
    let regexp = new RegExp(/^(\+|\-)?\d+$/);
    let flag = regexp.test(str);
    if (flag) {
      if (str[0] === '+') {
        return str.substring(1, str.length);
      } else {
        return str;
      }
    } else {
      return 0;
    }
  }
}

console.log(StrToInt('+123'));
