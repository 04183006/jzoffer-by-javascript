// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

function match(s, pattern) {
  // write code here
  if (pattern.length === 0) {
    return s.length === 0;
  }

  let isHeadMatch = s.length !== 0 && (s.charAt(0) === pattern.charAt(0) || pattern.charAt(0) === '.');

  if (pattern.length >= 2 && pattern.charAt(1) === '*') {
    return match(s, pattern.slice(2)) || (isHeadMatch && match(s.slice(1), pattern));
  } else if (isHeadMatch) {
    return match(s.slice(1), pattern.slice(1));
  } else {
    return false;
  }
}



// 解题思路：举个例子  匹配 aaa 和 a*a

