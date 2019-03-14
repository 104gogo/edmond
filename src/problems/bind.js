var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

/**
 * 思路：
 * 1.绑定this
 * 2.能接受参数
 * 3.返回一个绑定函数
 * 4.绑定函数能返回值
 * 5.绑定函数能使用 new
 * 6.绑定函数 new 出来对象能继承原函数的属性
 */
Function.prototype.bind2 = function (context) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  function bindFunc() {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof bindFunc ? this : context, args.concat(bindArgs));
  }

  // bindFunc.prototype = Object.create(this.prototype);

  function temp() {}

  temp.prototype = this.prototype; // 这里 temp.prototype.constructor 被替换了
  bindFunc.prototype = new temp();

  return bindFunc;
};

var bindFoo = bar.bind2(foo, 'daisy');

var obj = new bindFoo('18');

console.log(obj.habit);
console.log(obj.constructor);

bindFoo.prototype.friend = 'aaa'; // 修改绑定函数原型属性不会影响原函数的原型属性
console.log(bar.prototype.friend);
console.log(bindFoo.prototype.friend);
console.log(obj.friend);