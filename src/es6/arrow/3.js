'use strict';

var name = 'hello';
var count = 1;

(function() {
  count = 2;
  var count;

  setTimeout(() => {
    // console.log(this);
    console.log(this.name);
  }, 0);

  // setTimeout(function() {
  //   // console.log(this);
  //   console.log(this.name);
  // }, 0);

  return function() {
    console.log(count++);
  }
})()();
