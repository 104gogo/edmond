### async 和 generator 代码对比

##### await 传数据赋值，yield 不能
```javascript
// 1.js
async function foo() {
  const a = await 'async/1.js';
  console.log(a);
}

foo();
```
```javascript
// 1.js
function *foo() {
  const a = yield 'generator/1.js';
  console.log(a);
}

const gen = foo();
gen.next();
gen.next();
```

##### await 会等待异步代码，yield 不能
```javascript
// 2.js
function bar(str) {
  return new Promise(resolve => setTimeout(() => resolve(str), 1000));
}

async function foo() {
  const a = await bar('async/2.js');
  console.log(a);
}

foo();
```
```javascript
// 2.js
function bar(str) {
  return new Promise(resolve => setTimeout(() => resolve(str), 1000));
}

function *foo() {
  const a = yield bar('generator/2.js');
  console.log(a);
}

const gen = foo();
gen.next();
gen.next();
```