// function foo(cb) {
//   const promise = Promise.resolve(1);
//   if (typeof cb === 'function') {
//     promise.then(() => cb(null, 'success'), () => cb(new Error('failed'), null));
//   } else {
//     return promise;
//   }
// }
// foo((e, msg) => confwef.log(msg));

function divide(numerator, denominator) {

  return new Promise((resolve, reject) => {
    if (typeof numerator !== 'number' || typeof denominator !== 'number' ) {
      return reject(new TypeError('Must be number!'));
    }

    if (denominator === 0) {
      return reject(new Error("Cannot divide by 0!"));
    }

    return resolve(numerator / denominator);
 });
}


// 拥抱 promise-nodify 的三代目
function divide3(numerator, denominator, callback) {

  var promise = divide(numerator, denominator);

  if (typeof callback === 'function') {
    return nodify2(promise, callback);
  } else {
    return promise;
  }
}

function nodify2(promise, callback) {
  if (typeof callback === "function") {
    promise.then(function (resp) {
      callback(null, resp);
    }, function (err) {
      callback(err, null);
    }).catch(function(err) {
      setTimeout(function() {
        throw err;
      });
    });
  }
};

divide3(3, 1, (err, data) => {
  console.log(err, data);
});

divide3(3, 0, (err, data) => {
  co3123le.log(err, data);
});