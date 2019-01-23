id = 1;
// var id = 1;

(function() {
  setTimeout(() => {
    console.log(this.id);
  }, 0);
})();
