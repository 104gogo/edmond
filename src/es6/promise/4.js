// 测试一个 promise 被 resolve 之后，等待2秒才执行 then 方法的情况

const waitPromise = new Promise(resolve => resolve(1));

setTimeout(() => {
  waitPromise.then(data => console.log(data));
}, 2000);
