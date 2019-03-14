/**
 * ES6继承在寄生组合继承的基础上，添加了构造函数静态方法的继承
 * 思路：
 * 1.修改 Child.prototype.__proto__ 的原型对象为 Parent.prototype。原来是 Object.prototype
 * 2.修改 Child.__proto__ 的原型对象为 Parent。原来是 Function.prototype
 * 3.执行 Parent 的构造函数，传参和获取 this 上面的属性
 */
function extend(subClass, superClass) {
  // subClass.prototype.__proto__ === superClass.prototype
  subClass.prototype = Object.create(superClass.prototype);

  // subClass.__proto__ === Parent
  Object.setPrototypeOf(subClass, superClass);
}

// 父类
function Parent(name) {
  this.name = name;
}

Parent.getAge = function () {
  return 18;
}

Parent.prototype.getName = function () {
  return this.name;
}

// 子类
function Child(name) {
  Parent.call(this, name);
}

extend(Child, Parent);

const child = new Child('gogo');

console.log('name:', child.getName());
console.log('age:', Child.getAge());
