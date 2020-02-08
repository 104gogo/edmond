/**
 * https://github.com/pekonchan/Blog/issues/14
 * 节流函数
 * @param {Function} fn - 实际要执行的函数，对其进行节流处理
 * @param {Number} wait - 规定的执行时间间隔
 * @param {Object} option - 用于设置节流的函数的触发时机，
 *                        - 默认是{leading: true, trailing: true}，表示第一次触发监听事件马上执行，停止后最后也执行一次
 *                        - leading为false时，表示第一次触发不马上执行
 *                        - trailing为false时，表示最后停止触发后不执行
 * @return {Function} 返回经过节流处理后的函数
 */
function throttle(fn, wait, option) {
  let timerId = null; // 用于记录定时器的id
  let lastTime = 0; // 上次触发fn的时间戳
  wait = +wait || 0; // 如果wait没有传，那么初始化0值
  option = option || {}; // 如果option没有传，那么初始化{}值
  if (typeof fn !== 'function') {
      throw new Error('throttle的第一个参数请传入函数');
      return;
  }
  if (option.leading === false && option.trailing === false) {
      throw new Error('option的leading 和 trailing不能同时为false');
      return;
  }
  // 节流后的执行函数
  function throttled() {
      let now = +new Date(); // 获取当前时间
      // 如果没有上次触发执行时间（即第一次运行），以及leading设置为false
      !lastTime && option.leading === false && (lastTime = now);
      // 距离到达规定的wait时间剩余时间
      let remainingTime = wait - (now - lastTime);
      // 条件①：如果到达了规定的间隔时间或用户自己设定了系统时间导致的不合理时间差，则立刻执行一次触发函数
      if (remainingTime <= 0 || remainingTime > wait) {
          fn.apply(this, arguments);
          lastTime = now;
          if (timerId) {
              clearTimeout(timerId);
              timerId = null;
          }
          // 条件②：如果未达到规定时间，以及要求停止后延迟执行（trailing=false）
      } else if(!timerId && option.trailing !== false) {
          timerId = setTimeout(() => {
              timerId = null;
              fn.apply(this, arguments);
              lastTime = option.leading === false ? 0 : +new Date();
          }, remainingTime);
      }
  }
  // 手动提前终止节流时间，恢复初始状态
  function cancel() {
      clearTimeout(timerId);
      timerId = null;
      lastTime = 0;
  }
  throttled.cancel = cancel;
  return throttled;
}