// 对 apply,call,bind 的综合应用和理解

// 平铺一层
Function.apply.bind([].concat, [])

// 相当于
function (arg) {
  return Function.apply.call([].concat, [], arg)
}

// 相当于
function (arg) {
  return [].concat.apply([], arg)
}

// 应该是
function (arg) {
   return [].concat(...arg)
}