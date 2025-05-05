// polyfill for reduce

/*---
  reduce method returns a single value after performing some callback condition on each element of a given array
  syntax: Array.reduce((acc, curr, index, arr)=> {}, initialValue)
---*/

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

// example:
const arr = [1, 2, 3, 4];
const sum = arr.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(sum); //10
