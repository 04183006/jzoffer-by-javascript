// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

// 对于50\%50%的数据,size\leq 10^4size≤10
// 4

// 对于75\%75%的数据,size\leq 10^5size≤10
// 5

// 对于100\%100%的数据,size\leq 2*10^5size≤2∗10
// 5

// 暴力法;
function InversePairs(data) {
  // write code here
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        count++;
      }
    }
  }

  return count % 1000000007;
}

// console.log(InversePairs([1, 2, 3, 4, 5, 6, 7, 0])); // 7  算法复杂度过大

// 归并排序

function MergeSort(array) {
  let recordArray = [];
  sort(array, 0, array.length - 1, recordArray);
  return array;
}

// 分
function sort(array, left, right, recordArray) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    sort(array, left, mid, recordArray);
    sort(array, mid + 1, right, recordArray);
    merge(array, left, mid, right, recordArray);
  }
}

// 合
function merge(array, left, mid, right, recordArray) {
  let i = left;
  let j = mid + 1;
  let t = 0;
  while (i <= mid && j <= right) {
    if (array[i] <= array[j]) {
      recordArray[t++] = array[i++];
    } else {
      recordArray[t++] = array[j++];
    }
  }
  while (i <= mid) {
    recordArray[t++] = array[i++];
  }
  while (j <= right) {
    recordArray[t++] = array[j++];
  }
  t = 0;

  while (left <= right) {
    array[left++] = recordArray[t++];
  }
}

// console.log(MergeSort([2, 6, 1, 4, 8, 0, 3, 7, 5, 9]));

// 采用归并排序解决
function InversePairs(data) {
  // write code here
  let reg = new Array(data.length);
  return process(data, 0, data.length - 1, reg) % 1000000007;

  function process(arr, start, end, reg) {
    if (start >= end) {
      return 0;
    }

    let num = 0; // 记录逆序对的个数
    const len = end - start + 1;
    const mid = (len >> 1) + start;
    let start1 = start;
    const end1 = mid - 1;
    let start2 = mid;
    const end2 = end;
    num += process(arr, start1, end1, reg);
    num += process(arr, start2, end2, reg);
    let k = start;
    while (start1 <= end1 && start2 <= end2) {
      // 统计逆序对的个数
      if (arr[start1] > arr[start2]) {
        num += end1 - start1 + 1;
      }
      reg[k++] = arr[start1] < arr[start2] ? arr[start1++] : arr[start2++];
    }
    while (start1 <= end1) {
      reg[k++] = arr[start1++];
    }
    while (start2 <= end2) {
      reg[k++] = arr[start2++];
    }
    for (let i = start; i <= end; i++) {
      arr[i] = reg[i];
    }
    return num;
  }
}

