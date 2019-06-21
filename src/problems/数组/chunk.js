/**
 * 实现一个 chunk 函数，要求如下：
 * chunk([1,2,3,4]) -> [[1], [2], [3], [4]]
 * chunk([1,2,3,4], 3) -> [[1, 2, 3], [4]]
 */
const chunk = (arr, num = 1) => {
  let ans = [];
  let i = 0;

  while (arr.length > i) {
    ans = [...ans, arr.slice(i, i + num)];
    i += num;
  }

  return ans;
};

console.log(chunk([1, 2, 3, 4], 4));
