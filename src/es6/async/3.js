const fetchData = (data) => new Promise((resolve) => setTimeout(resolve, 1000, data + 1))

const fetchValue1 = async function () {
  var value1 = await fetchData(1);
  var value2 = await fetchData(value1);
  var value3 = await fetchData(value2);
  return value3;
};


function fetchValue() {
  return new Promise((resolve) => {
    Promise.resolve(fetchData(1)).then((value1) => {
      Promise.resolve(fetchData(value1)).then((value2) => {
        Promise.resolve(fetchData(value2)).then((value3) => {
          resolve(value3);
        });
      });
    });
  });
}

const value = fetchValue();
console.log('async/3.js', value);
