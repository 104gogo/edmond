console.log('promise1');
new Promise((resolve) => {
  console.log('1');
  resolve();
}).then(() => {
  console.log('promise11');
  return new Promise(resolve => {
    console.log('promise12');
    resolve();
  }).then(() => {
    console.log('promise13');
  }).then(() => {
    console.log('promise14');
  })
}).then(() => {
  console.log('2');
});
