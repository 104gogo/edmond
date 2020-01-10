// http://jartto.wang/2017/01/23/delicate-handling-of-Amount-of-Money/
var num='12345678';
var str = num.replace(/\d(?=(?:\d{3})+\b)/g,'$&,');
console.log(str); //"12,345,678"

/**
 * 正则：/\d(?=(?:\d{3})+\b)/g
 * 思想：判断当前数字后面剩下的数字能否整除3，如果可以的话，给当前数字加上逗号
 */