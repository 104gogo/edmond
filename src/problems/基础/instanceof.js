function instance_of(L, R) {//L 表示左表达式，R 表示右表达式
  var O = R.prototype;// 取 R 的显示原型

  while (true) {
   L = L.__proto__;
   if (L === null)
    return false;
   if (O === L)// 这里重点：当 O 严格等于 L 时，返回 true
    return true;
  }
}

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
}

var bindFoo = bar.bind(foo, 'daisy'); // bind 返回的函数没有 prototype 属性

var obj = new bindFoo();

console.log(instance_of(obj, bindFoo));
console.log(obj instanceof bindFoo);
console.log(obj.habit);

console.log(instance_of(bindFoo, Function));
console.log(obj instanceof bindFoo);
