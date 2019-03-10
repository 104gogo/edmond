function *foo() {
  const a = yield '111';
  console.log('generator/1.js a = ', a);
}

const gen = foo();
var a = gen.next().value;
gen.next(a);