/**
 * call、apply 和 bind 链式调用
 * 我们已经知道了 call apply 的链式调用原理，现在我们再加上 bind 来分析下
 *
 * 首先，看看 bind 转换为 apply 的简化版
 * func.bind({ age: 18 }, a)
 * 相当于
 * function (b) {
 *   func.apply({ age: 18 }, [a, b]);
 * }
 * 规律：将 bind 换成 apply，并且包在一个函数里面，将函数的参数追加到 apply 最后
 *
 * 下面看看 call、apply 和 bind 连用的情况，如下：
 */

Function.apply.bind([].concat, [])

// 转换代码，相当于
function (args) {
  return Function.apply.call([].concat, [], args)
}

// 相当于
function (args) {
  return [].concat.apply([], args)
}

// 相当于
function (args) {
  return [].concat(...args);
}