const arr = [1, 2, 3];

// 不能中断循环
arr.forEach((x) => {
  if (x === 1) {
    console.log('forEach return success!');
    return;
  }
  console.log('forEach return failed!');
});

// 不能中断循环，并且报错
arr.forEach((x) => {
  if (x === 1) {
    console.log('forEach break success!');
    // break; // SyntaxError: Illegal break statement
  }
  console.log('forEach break failed!');
});

// 不能中断循环
arr.map((x) => {
  if (x === 1) {
    console.log('map return success!');
    return;
  }
  console.log('map return failed!');
});

// 不能中断循环，并且报错
arr.map((x) => {
  if (x === 1) {
    console.log('map return success!');
    // break; // SyntaxError: Illegal break statement
  }
  console.log('map return failed!');
});


// for of 可以对循环进行中断
for (let y of arr) {
  if (y === 1) {
    console.log('for of break success!');
    break;
  }
  console.log('for of break failed!');
}

for (let x of arr) {
  if (x === 1) {
    console.log('for of return success!');
    return;
  }
  console.log('for of return failed!');
}

