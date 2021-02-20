// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。

//暴力解法
function minNumberInRotateArray(rotateArray) {
  // write code here
  if (rotateArray.length === 0) return 0;

  if (rotateArray.length === 1) return rotateArray[0];

  let minNum = rotateArray[0];
  for (var i = 0; i < rotateArray.length; i++) {
    if (minNum > rotateArray[i]) {
      minNum = rotateArray[i];
    }
  }

  return minNum;
}

// 二分法

// 3 4 5 1 2
function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length === 0) return 0;
  if (rotateArray.length === 1) return rotateArray[0];

  let min = rotateArray[0];

  let left = 0;
  let right = rotateArray.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);   

    min = Math.min(min, rotateArray[mid]);  

    if (rotateArray[mid] >= rotateArray[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return min;
}
