function *foo() {
  const a = yield '111';
  console.log('generator/1.js a = ', a);
}

const gen = foo();
gen.next();
gen.next();