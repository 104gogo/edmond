const foo = () => {
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    x + 1
  })
  // .catch((e) => {
  //   console.log('Error:', e.message);
  // })
}

process.on('unhandledRejection', (e, promise) => {
  console.log('unhandledRejection Error:', e.message);

  // promise.catch((e) => {
  //   console.log('catch Error:', e.message);
  // })
});

foo()