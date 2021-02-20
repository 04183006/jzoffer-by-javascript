// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.

function printMatrix(matrix)
{
    // write code here
    let list = [];
    if(matrix.length === 0){
      return list;
    }
    let x = 0;
    let y = 0;
    let t = 0; // 遍历第几圈
    let count = 0 ; // 已遍历的个数
    let xLen = matrix.length; // x维的长度
    let yLen = matrix[0].length; // y维的长度
    let N = xLen * yLen; // 总个数
    while(count < N){
      // top
      for( ; y < yLen - t && matrix[x][y] !== false;y++){
        list.push(matrix[x][y]);
        matrix[x][y] = false;
        count++;
      }
      y--;
      x++;
      // right
      for(; x < xLen - t && matrix[x][y] !== false;x++){
        list.push(matrix[x][y]);
        matrix[x][y] = false;
        count++;
      }
      x--;
      y--;
      // bottom
      for(; y >= t && matrix[x][y] !== false;y--){
        list.push(matrix[x][y]);
        matrix[x][y] = false;
        count++;
      }
      y++;
      x--;
      // left
      for(; x > t && matrix[x][y] !== false; x--){
        list.push(matrix[x][y]);
        matrix[x][y] = false;
        count++;
      }
      x++;
      y++;
      t++; // 一圈遍历完，圈数 t + 1
    }
  return list;
}

