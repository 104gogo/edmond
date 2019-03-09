// Promise.resolve() 的参数是一个 promise，会等到里面的 promise 完成之后，再执行后面的 then
import delay from '../../utils/delay';

Promise.resolve(delay(1000)).then(() => console.log('promise/1.js a = 1000'));