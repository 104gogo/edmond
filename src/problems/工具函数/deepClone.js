/**
 * 注意：
 * 1.Date 和 RegExp 不能被转为字符串
 * 2.非对象就直接返回
 * 3.使用 WeakMap 解决循环引用的问题，将访问过的对象保存在 WeakMap 里面
 * 4.使用 constructor 创建对应的新对象 temp
 * 5.遍历当前对象，然后递归
 * 6.最后返回新对象 temp
 */
function deepClone(obj, hash = new WeakMap()) {
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object' && typeof obj !== 'function') return obj;

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  const temp = new obj.constructor();

  hash.set(obj, temp);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = deepClone(obj[key], hash);
    }
  }

  return temp;
}

const obj1 = '123';
const obj2 = { a: { b: 2 } };
const obj3 = { a: { b: function() { console.log (2) } } };
const obj4 = { a: { b: new Date(), c: /a/ } };

console.log(deepClone(obj1));
console.log(deepClone(obj2));
console.log(deepClone(obj3));
console.log(deepClone(obj4));

// 循环引用
var obj5 = { a: obj5 };
console.log(deepClone(obj5) === obj5);

