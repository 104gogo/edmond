/**
 * https://github.com/pekonchan/Blog/issues/14
 * 防抖函数
 * @param {Function} fn - 实际要执行的函数
 * @param {Number} wait - 规定在什么时间内执行一次函数，单位是秒
 * @param {Boolean} immediate - 是否立即执行，true为立即执行，立即执行指触发监听事件是先执行
 * @return {Function} 经过防抖处理后的要执行的函数
 */
function debounce(fn, wait, immediate) {
  let timerId = null; // 记录定时器id
  wait = +wait || 0; // 如果wait没有传，那么初始化0值
  if (typeof fn !== 'function') {
      throw new Error('debounce的第一个参数请传入函数');
      return;
  }
  // 防抖后的执行函数
  function debounced() {
      timerId && clearTimeout(timerId);
      // 如果是立即执行
      if (immediate) {
          // 如果已经过了规定时间，则执行函数 或 第一次触发监听事件
          !timerId && fn.apply(this, arguments);
          // 规定时间后情况定时器id，表明到达了规定时间
          timerId = setTimeout(() => {
              timerId = null;
          }, wait);
      } else { // 延后执行
          // 只有到达了规定时间后才会执行fn函数
          timerId = setTimeout(() => {
              fn.apply(this, arguments);
              timerId = null;
          }, wait);
      }
  }
  // 手动取消该次设定的防抖时间，取消后当成是“第一次触发”一样
  function cancel() {
      clearTimeout(timerId);
      timerId = null;
  }
  debounced.cancel = cancel;
  return debounced;
}