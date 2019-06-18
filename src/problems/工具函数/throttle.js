/**
 * 节流
 * 如果你持续触发事件，每隔一段时间，只执行一次事件
 */
function throttle(func, wait) {
  var timeout, context, args, result;
  var previous = 0;

  var later = function() {
      previous = +new Date();
      timeout = null;
      func.apply(context, args)
  };

  var throttled = function() {
      var now = +new Date();
      //下次触发 func 剩余的时间
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
       // 如果没有剩余的时间了或者你改了系统时间
      if (remaining <= 0 || remaining > wait) {
          if (timeout) {
              clearTimeout(timeout);
              timeout = null;
          }
          previous = now;
          func.apply(context, args);
      } else if (!timeout) {
          timeout = setTimeout(later, remaining);
      }
  };
  return throttled;
}

const func = throttle(() => console.log(111), 1000);

func(); // 同步执行，打印111
func(); // 同步执行，等待1s，打印111
func(); // 同步执行，被忽略
func(); // 同步执行，被忽略

setTimeout(() => {
  func(); // 同步执行，打印111
  func(); // 同步执行，等待1s，打印111
  func(); // 同步执行，被忽略
  func(); // 同步执行，被忽略
}, 4000);


