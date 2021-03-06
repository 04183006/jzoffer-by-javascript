// LL今天心情特别好,因为他去买了一副扑克牌,发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽
// 到顺子,如果抽到的话,他决定去买体育彩票,嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....
// LL不高兴了,他想了想,决定大\小 王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。LL决定去买体育彩票啦。
// 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 如果牌能组成顺子就输出true，否则就输出false。为了方便起见,你可以认为大小王是0。

function IsContinuous(numbers) {
  // write code here
  let len = numbers.length;
  let set = new Set();
  let zeroCount = 0;

  // 去重
  for (let i = 0; i < len; i++) {
    if (numbers[i] !== 0) {
      set.add(numbers[i]);
    } else {
      zeroCount++;
    }
  }

  if (len !== zeroCount + set.size) {
    return false;
  }

  if (Math.max(...set) - Math.min(...set) > 4) {
    return false;
  } else {
    return true;
  }
}

console.log(IsContinuous([1,3,2,6,4]));
