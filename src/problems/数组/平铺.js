// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组


// 方法一，原生函数
const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

ans = Array.from(new Set(arr.toString().split(',').map(Number)));

console.log(ans);


// 方法二，尾递归
function flatten(arr) {
  const newArr = [].concat(...arr);

  if (newArr.some(item => Array.isArray(item))) {
    return flatten(newArr);
  } else {
    return newArr;
  }
}

ans = flatten(arr);

console.log(ans);
