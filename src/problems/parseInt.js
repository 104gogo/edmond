['1', '2', '3'].map(Number); // 正确

['1', '2', '3'].map(parseInt); // 错误，parseInt 接受两个参数，第二个参数表示进制，第一个参数根据第二个参数确定是什么进制

// 变形
const unary = fn => val => fn(val);
const parse = unary(parseInt);
console.log(['1.1', '2', '0.3'].map(parse));
