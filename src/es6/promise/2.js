new Promise((resolve, reject) => {
  reject('message');
}).then(() => console.log(1), () => console.log(2))
  .then(() => console.log(3), () => console.log(4))
  .catch(({ message }) => console.log(message));

// 结果和上面一样
new Promise(() => {
  throw new Error('message');
}).then(() => console.log(1), () => console.log(2))
  .then(() => console.log(3), () => console.log(4))
  .catch(({ message }) => console.log(message));

// catch 不获不到异步的 throw 的 Error
new Promise((resolve) => {
  setTimeout(() => {
    throw new Error('message');
  });
  resolve();
}).then(() => console.log(1), () => console.log(2))
  .then(() => console.log(3), () => console.log(4))
  .catch(({ message }) => console.log(message));
