Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
      result = context.fn();
  }
  else {
      var args = [];
      for (var i = 0, len = arr.length; i < len; i++) {
          args.push('arr[' + i + ']');
      }
      result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result;
}

Function.prototype.call = function (context) {
  var context = context || window;
  context.fn = this;

  var args = [];
  for(var i = 1, len = arguments.length; i < len; i++) {
      args.push('arguments[' + i + ']');
  }

  var result = eval('context.fn(' + args +')');

  delete context.fn
  return result;
}

/**
 * call 和 apply 链式调用过程如下，以代码 X.X.X..apply.call.apply(Function, args) 为例。
 * 1.先执行 apply
 * 2.然后执行 eval('context.fn(' + args + ')');
 * 3.变为：eval('this(' + args + ')');
 * 4.再变为：eval('X.X.X.call(' + args + ')');
 * 5.然后执行 call
 * 6.接着执行 eval('context.fn(' + args + ')');
 * 7.变为：eval('this(' + args + ')');
 * 8.重点！！！ 这里的 this 是 Function，而不是下一个 apply，所以这里终止了后面的链式调用
 * 9.最后的执行结果就是 Function(resetArgs)，resetArgs 是被消耗2个剩下的参数
 *
 *
 * 结论：
 * 1.最多执行两次（apply或者call，没有先后顺序）就返回结果，更多的不会执行
 * 2.X.X.X.call.apply(Function, args)，X.X.X 写的再长，其实并不起作用，最后都是执行 Function
 * 3.args 会从左到右依次减一，因为 call 或 apply 每次执行要消耗一个，剩下的继续作为参数
 */

console.log([].concat.call({}, 2, 3)); // [{}, 2, 3]

console.log([].concat.call.apply(Array, [{}, 2, 3])); // [2, 3]

console.log([].concat.call.apply.call(Array, {}, [1, 2, 3])); // [2, 3]