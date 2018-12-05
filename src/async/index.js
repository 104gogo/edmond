const fetchData = (data) => new Promise((resolve) => setTimeout(resolve, 1000, data + 1))

const fetchValue = async function () {
    var value1 = await fetchData(1);
    var value2 = await fetchData(value1);
    var value3 = await fetchData(value2);
    console.log(value3)
};

fetchValue();