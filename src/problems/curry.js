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
