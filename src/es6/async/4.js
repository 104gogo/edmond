async function foo() {
  console.log(1);
  await console.log(2);
  console.log(4);
}

foo();
console.log(3);
