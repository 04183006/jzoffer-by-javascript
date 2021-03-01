// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素
// B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。（注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
// 对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。

function multiply(array) {
  // write code here
  if (array.length <= 1) {
    return [];
  }
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr[i] = helper(i, array);
  }

  function helper(flag, array) {
    let result = 1;
    for (let i = 0; i < array.length; i++) {
      if (flag !== i) {
        result *= array[i];
      }
    }

    return result;
  }

  return newArr;
}

console.log(multiply([1, 2, 3, 4, 5]));
