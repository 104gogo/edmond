async function foo() {
  const a = await '333';
  console.log('async/1.js a = ', a);
}

foo();