Object.create = function(o) {
  function F() {}
  F.prototype = o;
  return new F();
};


/**
 * 下面代码中，new 和 Object.create 的区别是什么？
 *
 * 区别1：原型链不一样
 * o1.__proto__ === Bar.prototype
 * o2.__proto__ === Bar
 *
 * 区别2：new 会执行构造函数，绑定 this，而 Object.create 内部执行的是空函数
 * o1.name 为 'gogo'
 * o2.name 为 undefined
 */
function Bar() {
  this.name = 'gogo';
}

var o1 = new Bar();
var o2 = Object.create(Bar);