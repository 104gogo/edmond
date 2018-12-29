// Promise.resolve() 的参数是一个 promise
import delay from '../../utils/delay';

Promise.resolve(delay(1000)).then(() => console.log('promise/1.js a = 1000'));