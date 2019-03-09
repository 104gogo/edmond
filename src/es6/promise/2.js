// promise 异常处理

// new Promise((resolve, reject) => {
//   reject('message');
// }).then(() => console.log(1), () => console.log(2)) // 2
//   .then(() => console.log(3), () => console.log(4)) // 3
//   .catch((message) => console.log(message)); // 不会执行，因为前一个回调没有 reject

// new Promise(() => {
//   throw new Error('message');
// }).then(() => console.log(1), () => console.log(2)) // 2
//   .then(() => console.log(3), () => console.log(4)) // 3
//   .catch(({ message }) => console.log(message)); // 不会执行，因为前一个回调没有 reject

new Promise((resolve, reject) => {
  throw new Error('message');
  // reject('message');
}).then(() => console.log(1), (message) => { console.log(2); return Promise.reject(message); }) // 2
  .then(() => console.log(3), (message) => { console.log(4); return Promise.reject(message); }) // 4
  .catch(({ message }) => console.log(message)); // 'message'

// catch 获不到异步的 throw 的 Error
// new Promise((resolve) => {
//   setTimeout(() => {
//     throw new Error('message');
//   });
//   resolve();
// }).then(() => console.log(1), () => console.log(2)) // 1
//   .then(() => console.log(3), () => console.log(4)) // 3
//   .catch(({ message }) => console.log(message)); // 获不到异步的 throw 的 Error
