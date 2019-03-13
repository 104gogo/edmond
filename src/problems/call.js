const a = { value: 2 };

function foo(name, age) {
  return {
    value: this.value,
    name,
    age,
  };
};

// foo.call(a);

/**
 * call 和 apply 方法可以转换为如下代码，即：使用 a 来调用 foo
*/
// const a = {
//   value: 1,
//   foo: function() {
//     console.log(this.value);
//   }
// };

// a.foo();

/** es6 call */
// Function.prototype.call2 = function (context, ...args) {
//   context.fn = this;
//   const result = context.fn(...args);
//   delete context.fn;
//   return result;
// }

// const result = foo.call2(a, 'call', 18);

/** es6 apply */
// Function.prototype.apply2 = function (context, arr) {
//   context.fn = this;
//   const result = context.fn(...arr);
//   delete context.fn;
//   return result;
// }

// const result = foo.apply2(a, ['apply', 18]);

/** es5 call */
// Function.prototype.call2 = function (context) {
//   context.fn = this;

//   const args = [];
//   for (let i = 1; i < arguments.length; i++) {
//     args.push('arguments[' + i +']');
//   }

//   const result = eval('context.fn('+ args +')');

//   delete context.fn;
//   return result;
// }

// const result = foo.call2(a, 'call', 18);

/** es5 apply */
Function.prototype.call2 = function (context, arr) {
  context.fn = this;

  const args = [];
  for (let i = 0; i < arr.length; i++) {
    args.push('arr[' + i +']');
  }

  const result = eval('context.fn('+ args +')');

  delete context.fn;
  return result;
}

const result = foo.call2(a, ['apply', 18]);

console.log('result', result);

