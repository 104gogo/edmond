function pipe(num) {
  let total = num;
  const result = {};

  function double() { total = total * 2; return result; }
  Object.defineProperty(result, 'double', { get: double });

  function pow() { total = total * total; return result; }
  Object.defineProperty(result, 'pow', { get: pow });

  function getter() { console.log(total); return total; }
  Object.defineProperty(result, 'get', { get: getter });

  return result;
}

pipe(3).double.pow.get; // 36