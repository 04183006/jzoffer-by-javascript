// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

function FindNumbersWithSum(array, sum) {
  // write code here
  if (array.length === 0) {
    return [];
  }
  let map = new Map();
  let len = array.length;
  let i = 0;
  let finalArr = [];
  while (i < len) {
    let complete = sum - array[i];
    if (map.has(complete)) {
      if (finalArr.length === 0) {
        finalArr.push([complete, array[i]]);
      } else {
        finalArr[0] = complete * array[i] < finalArr[0][0] * finalArr[0][1] ? [complete, array[i]] : finalArr[0];
      }
    } else {
      map.set(array[i], i);
    }

    i++;
  }

  return finalArr;
}

console.log(FindNumbersWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13));
