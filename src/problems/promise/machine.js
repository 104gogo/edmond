function machine(name) {
  const obj = {};
  let start = Promise.resolve();
  let arr = [{ type: 'name', oprate: name }];
  const firstArr = [];

  obj.execute = () => {
    const run = ({ type, oprate }) =>
      new Promise((resolve) => {
        if (type === 'name') {
          console.log(`start ${oprate}`);
          resolve();
        } else if (type === 'do') {
          console.log(`${name} ${oprate}`);
          resolve();
        } else {
          setTimeout(() => {
            console.log(`wait ${oprate}s`);
            resolve();
          }, oprate * 1000);
        }
      });

    arr = [...firstArr, ...arr];

    for (let item of arr) {
      start = start.then(() => {
        return run(item);
      });
    }
  };

  obj.do = (oprate) => {
    arr.push({ type: 'do', oprate });
    return obj;
  };

  obj.wait = (time) => {
    arr.push({ type: 'wait', oprate: time });
    return obj;
  };

  obj.waitFirst = (time) => {
    firstArr.push({ type: 'waitFirst', oprate: time });
    return obj;
  };

  return obj;
}

machine('ygy').waitFirst(5).wait(2).do('eat').execute();
