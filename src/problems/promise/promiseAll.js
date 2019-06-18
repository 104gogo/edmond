/**
 * 模拟 promise.all 的实现
 * 思路：
 * 1.并发执行所有的 promise
 * 2.收集执行结果
 * 3.当所有的都成功执行了，结束
 */
function promiseAll(arr) {
  const temp = [];
  const len = arr.length;

  return new Promise((resolve, reject) => {
    for (promise of arr) {
      promise.then((result) => {
        temp.push(result);
        if (len === temp.length) {
          resolve(temp);
        }
      }).catch(e => reject(e)); // 要记得使用 reject 处理异常，在异步中 throw 异常，catch 不了
    }
  });
}

promiseAll([
  // new Promise((resolve, reject) => { setTimeout(() => reject(Error('failed')), 1000); }),
  new Promise((resolve) => { setTimeout(() => resolve(1), 1000); }),
  new Promise((resolve) => { setTimeout(() => resolve(2), 1000); }),
]).then(console.log).catch(e => console.log(e.message));
