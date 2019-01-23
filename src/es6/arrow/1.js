var id = 1;

function foo() {
  setTimeout(() => {
    console.log(this.id);
  }, 100);
}

foo();
