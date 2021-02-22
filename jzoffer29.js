// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。

function GetLeastNumbers_Solution(input, k) {
  // write code here
  if (k > input.length || !input || input === []) {
    return [];
  }
  let min_arr = [];
  for (let i in input) {
    let len = min_arr.length;
    if (len < k) {
      min_arr.push(input[i]);
    } else if (input[i] < Math.max(...min_arr)) {
      let index = min_arr.indexOf(Math.max(...min_arr));
      min_arr[index] = input[i];
    }
  }
  return min_arr.sort(compare);
}

function compare(a, b) {
  return a - b;
}

console.log(GetLeastNumbers_Solution([1, 2, 3, 4, 5, 6, 7, 8], 4));
