// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。
// 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

function movingCount(threshold, rows, cols) {
  let count = 0;
  let check = function (a) {
    let num = 0;
    if (a < 10) {
      return a;
    }
    while (a > 0) {
      num += a % 10;
      a = Math.floor(a / 10);
    }
    return num;
  };
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let total = check(i) + check(j);
      if (total <= threshold) {
        count++;
      } else if (rows == 1 || cols == 1) {
        return count;
      }
    }
  }
  return count;
  // write code here
}
