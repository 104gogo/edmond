function Otaku (name, age) {
  this.strength = 60;
  this.age = age;

  // return {
  //   name: name,
  //   habit: 'Games'
  // }
}

Otaku.prototype.getAge = function () {};

function objectFactory() {
  var obj = new Object();

  var Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === 'object' ? ret : obj;
}

var person = objectFactory(Otaku, 'Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined
console.log(person.getAge) // undefined

console.log(person instanceof Otaku);