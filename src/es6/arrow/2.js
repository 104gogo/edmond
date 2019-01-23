var a = 1;
var o = {
  a: 2,
  func: function() {
    console.log(this.a);
  }
};
o.func(); // 2

var a = 1;
var o = {
  a: 2,
  func: () => console.log(this.a)
};
o.func(); // 1