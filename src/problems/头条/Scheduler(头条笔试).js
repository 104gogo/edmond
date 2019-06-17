let count = 0;
let index = 2;
const arr = [];

const run = (promiseCreator, resolve) => {
  promiseCreator().then(() => {
    resolve();
    if (index < arr.length) {
      run(...arr[index++]);
    }
  });
};

class Scheduler {
  add(promiseCreator) {
    let resolve;

    count++;

    const promiseWrapper = new Promise((r) => {
      if (count === 1 || count === 2) run(promiseCreator, r);
      resolve = r;
    });

    arr.push([promiseCreator, resolve]);

    return promiseWrapper;
  }
}

const timeout = time => new Promise(resolve => setTimeout(resolve, time));
const sd = new Scheduler();

const addTask = (time, num) => {
  sd.add(() => timeout(time))
    .then(() => console.log(num));
};

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);