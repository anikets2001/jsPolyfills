// polyfill for filter

// syntax of filter
// Array.filter((num, i, arr)=> {})

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

// example:
const arr = [1, 2, 3, 4];
const even = arr.myFilter((item, i, arr) => item % 2 === 0);
console.log(even);
// result: [2,4]