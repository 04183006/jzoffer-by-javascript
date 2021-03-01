// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param matrix string字符串 
 * @param rows int整型 
 * @param cols int整型 
 * @param str string字符串 
 * @return bool布尔型
 */
function hasPath( matrix ,  rows ,  cols ,  str ) {
    // write code here
  if (matrix === null || !matrix.length || !str) return false;
  let list = [];
  let temp = Array.from(matrix);
  let star = 0, end = cols;
  for(let i = 0; i < rows; i++){
    list.push(temp.slice(star, end));
    star += cols;
    end += cols;
  }
 
  function dfs(list, i, j, str, index) {
    if (i < 0 || i >= rows || j < 0 || j >= cols || list[i][j] !== str[index]) {
      return false;
    }
    if (index == str.length - 1) return true;
     
    let temp = list[i][j];
    list[i][j] = null;
    let res = dfs(list, i-1,j, str, index+1) || dfs(list, i+1, j, str, index+1)
        || dfs(list, i, j-1, str, index+1) || dfs(list, i, j+1, str, index+1);
   list[i][j] = temp;
 
    return res;
  }
 
  for (let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++) {
      if (dfs(list, i, j, str, 0)){
        return true;
      }
    }
  }
     
  return false;
}
module.exports = {
    hasPath : hasPath
};