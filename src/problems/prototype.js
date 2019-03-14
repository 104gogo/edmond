/**
 * 原型链
 */
function A() {}
function B() {}
Object.prototype.aa = () => console.log('aa');
Function.prototype.bb = () => console.log('bb');

const objA = new A();
const objB = new B();

console.log(objA.aa()); // 'aa'
console.log(A.bb()); // 'bb'
console.log(B.aa()); // 'aa'
console.log(objB.bb()); // Error

// objB.__proto__ -> B.prototype -> Object.prototype -> null
// B.__proto__ -> Function.prototype -> Object.prototype -> null
// objA.__proto__ -> A.prototype -> Object.prototype -> null
