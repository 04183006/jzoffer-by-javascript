// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
function FindNumsAppearOnce(array) {
  // write code here
  let obj = {};
  let resultArr = [];

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  while (resultArr.length < 2) {
    for (let k in obj) {
      if (obj[k] === 1) {
        resultArr.push(k);
      }
    }
  }

  return resultArr;
}

console.log(FindNumsAppearOnce([1,1,2,2,3,3,4,4,5,6]));
