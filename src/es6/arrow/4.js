/**
 * this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定
 */

var a = () => {console.log(this)};
var b = function() {console.log(this)}
a.bind({ c: 1 })()