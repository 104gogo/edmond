function add(a) {
  const sum = a;
  function temp(b) {
    return add(sum + b);
  }
  temp.toString = () => sum;
  return temp;
}
const total = add(1)(2)(3);
console.log('total', total);
