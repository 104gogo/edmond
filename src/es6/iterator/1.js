// 迭代对象的属性。对象是的属性是没有顺序的，next 方法不知道下一个是谁。
// 所以需要自定义顺序。这里使用了 Object.keys()

var obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]: function() {
    var keys = Object.keys(this);
    var index = 0;
    return {
      next() {
        return {
          value: keys[index++],
          done: false,
        };
      }
    };
  }
}

var it = obj[Symbol.iterator]();

console.log(it.next().value);
console.log(it.next().value);
