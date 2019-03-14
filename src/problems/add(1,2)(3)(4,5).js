const sum = (...args) => {
  return args.reduce((total, num) => {
    total += num;
    return total;
  });
}

function add(...args1) {
  const total = sum(...args1);
  function temp(...args2) {
    return add(total, ...args2);
  }
  temp.toString = () => total;
  return temp;
}
const total = add(1, 2)(3)(4, 5);
console.log('total', total);
