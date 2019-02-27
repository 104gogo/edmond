function debounce(cb, time) {
  var timeout = null;
  return function(...args) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb.apply(this, args);
    }, time);
  };
}

