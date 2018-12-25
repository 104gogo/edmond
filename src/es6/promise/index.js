// Promise.resolve() 的参数是一个 promise
var p = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
Promise.resolve(p).then((a) => console.log(a));