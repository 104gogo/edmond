function run(cb) {
  const gen = cb();

  return new Promise((resolve, reject) => {
    function auto(value, key) {
      let info;
      try {
        info = gen[key](value);
      } catch (e) {
        reject(e);
        return;
      }

      if (info.done) {
        resolve(info.value);
        return;
      }

      Promise.resolve(info.value).then(value => auto(value, 'next'), value => auto(value, 'throw'));
    }

    auto(undefined, 'next');
  });
}

const wait = value => new Promise(resolve => setTimeout(() => resolve(value), 2000));

// run(function* () {
//   const a = yield wait('1');
//   console.log(a); // 等2s，显示 '1'
//   const b = yield wait('2');
//   console.log(b); // 等2s，显示 '2'
// }).then(() => console.log('3'));

const getData = () => Promise.reject(Error('error'));

run(function* () {
  try {
    yield getData();
  } catch (e) {
    console.log('内部捕获:', e.message);  // 内部捕获: error
  }
  yield getData();
  console.log('end'); // 不输出
}).catch((e) => console.log('外部捕获:', e.message));  // 外部捕获: error