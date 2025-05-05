// polyfill for filter

/*---
 filter method selects(filer) the elements from an array those are passing the callback condition provided
 it returns a new array
 syntax: Array.filter((item, i, arr)=> {})
---*/

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
