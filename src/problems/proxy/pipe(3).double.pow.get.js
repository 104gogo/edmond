/**
 * 思路1：
 * 使用 Object.defineProperty 代理对象上面的属性
 * 兼容到 IE9。IE8不完全支持，如下：
 * Also supported in Internet Explorer 8, but only on DOM objects and with some non-standard behaviors.
 */
function pipe1(num) {
  let total = num;
  const result = {};

  function double() { total = total * 2; return result; }
  Object.defineProperty(result, 'double', { get: double });

  function pow() { total = total * total; return result; }
  Object.defineProperty(result, 'pow', { get: pow });

  function getter() { console.log(total); return total; }
  Object.defineProperty(result, 'get', { get: getter });

  return result;
}

/**
 * 思路2：
 * 使用 Proxy 代理对象，而不是代理具体的属性
 * IE 浏览器不支持，babel 也不支持转换
 */
function pipe2(num) {
  const arr = [];
  let total = num;

  const options = {
    double: result => result * 2,
    pow : result => result * result,
  }

  const proxyObj = new Proxy({}, {
    get(obj, prop) {
      if (prop === 'get') {
        total = arr.reduce((prev, cur, index) => arr[index](prev), total);
        console.log(total);
        return proxyObj;
      }

      arr.push(options[prop]);
      return proxyObj;
    },
  });
  return proxyObj;
}

pipe1(3).double.pow.get; // 36
pipe1(3).pow.double.get; // 18

