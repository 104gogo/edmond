/**
 * 防抖：触发完事件 time 秒内不再触发事件，才执行
 */
function debounce(cb, time) {
  var timeout = null;
  return function(...args) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb.apply(this, args);
    }, time);
  };
}

