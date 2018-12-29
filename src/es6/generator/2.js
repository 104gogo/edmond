import delay from '../../utils/delay';

async function bar() {
  await delay(1000);
  return 'test2';
}

function *foo() {
  const a = yield bar('generator/2.js');
  console.log('generator/2.js a = ', a);
}

const gen = foo();
gen.next();
gen.next();