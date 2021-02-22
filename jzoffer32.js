// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。

function PrintMinNumber(numbers) {
  // write code here
  if (numbers.length === 0) {
    return '';
  }
  let newArr = numbers.sort(compare).map(String);
  let sum = newArr[0];
  for (let i = 1; i < numbers.length; i++) {
    sum = Math.min(sum + newArr[i], newArr[i] + sum);
  }

  return sum;
}

function compare(a, b) {
  return a - b;
}

console.log(PrintMinNumber([3, 323, 32123]));
