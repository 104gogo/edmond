/**
 * 思路：
 * 1.返回一个函数 temp
 * 2.temp 函数返回自身
 * 3.当累计的参数等于总参数的时候，才执行柯里化的函数
 */
function curry(func) {
  let args = [];
  function temp() {
    args = [].concat.apply(args, arguments);
    if (func.length === args.length) return func.apply(null, args);
    return temp;
  }
  return temp;
}
function foo(a, b, c) { return a + b + c; }
const add = curry(foo);
const total = add(1, 2)(3);
console.log('total', total);
