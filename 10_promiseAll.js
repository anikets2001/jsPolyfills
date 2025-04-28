// promise.all polyfill

// promises
function promiseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseOne get resovled");
    }, 1000);
  });
}

function promiseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseTwo get resovled");
    }, 1000);
  });
}

function promiseThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("promiseThree get rejected");
    }, 1000);
  });
}

Promise.allPolyfill = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];

    if (!promises.length) {
      resolve(results);
      return;
    }

    let pending = promises.length;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = res;

          pending--;

          if (pending === 0) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.allPolyfill([promiseOne(), promiseTwo(), promiseThree()])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
