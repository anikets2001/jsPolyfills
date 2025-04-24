// custom memoize function

function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const expensiveTask = (num1, num2) => {
  for (let i = 0; i < 1000000; i++) {}

  return num1 * num2;
};

const memoizedFunc = myMemoize(expensiveTask);

console.time("first call");
console.log(memoizedFunc(9456, 7649));
console.timeEnd("first call");

console.time("second call");
console.log(memoizedFunc(9456, 7649));
console.timeEnd("second call");