function Otaku (name, age) {
  this.strength = 60;
  this.age = age;

  // return {
  //   name: name,
  //   habit: 'Games'
  // }
}

Otaku.prototype.getAge = function () {};

/**
 * 思路：
 * 1.创建一个新对象
 * 2.获取构造函数
 * 3.链接原型链
 * 4.执行构造函数，绑定 this 为新的对象
 * 5.返回对象或者构造函数的返回值
 */
function objectFactory() {
  var obj = new Object(); // 创建一个新对象

  var Constructor = [].shift.call(arguments); // 获取构造函数

  obj.__proto__ = Constructor.prototype; // 链接原型链

  var ret = Constructor.apply(obj, arguments); // 执行构造函数，绑定 this 为新的对象

  return typeof ret === 'object' ? ret : obj;
}

var person = objectFactory(Otaku, 'Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined
console.log(person.getAge) // undefined

console.log(person instanceof Otaku);