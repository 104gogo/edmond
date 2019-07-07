/**
 * 笛卡尔积
 */
var num = [['a', 'b', 'c'], ['d','e','f'], ['g']];

var func = (str, ans) => {
  if (!str) return ans;

  var arr = num[str.slice(0, 1) - 1];
  var newArr = [];

  if (!ans) {
    newArr = arr;
  } else {
    for (var i = 0; i < ans.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        newArr.push(ans[i] + arr[j]);
      }
    }
  }

  return func(str.slice(1), newArr);
};