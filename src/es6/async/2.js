import delay from '../../utils/delay';

async function bar() {
  await delay(1000);
  return 'test1';
}

async function foo() {
  const a = await bar();
  console.log('async/2.js a = ', a);
}

foo();