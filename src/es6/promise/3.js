// 实现一个函数，既可以返回 promise，又可以传入回调函数
function readFile(cb) {
  const promise = Promise.resolve('README.md');
  if (typeof cb === 'function') {
    promise.then(msg => cb(null, msg), () => cb(new Error('failed'), null));
  } else {
    return promise;
  }
}


// readFile((e, msg) => console.log(msg));

readFile().then(msg => console.log(msg));
