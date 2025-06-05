// debounce function

// function debounce(func, delay) {
//   let timerId;

//   return function (...args) {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// function debounceFunc(e) {
//   console.log(e.target.value);
// }

// const handleInput = debounce(debounceFunc, 2000);
// document.getElementById("search").addEventListener("input", handleInput);

// throttle function

// function throttle(func, delay) {
//   let inThrottle = false;

//   return function (...args) {
//     if (!inThrottle) {
//       func.apply(this, args);
//       inThrottle = true;

//       setTimeout(() => {
//         inThrottle = false;
//       }, delay);
//     }
//   };
// }

// function handleClick() {
//   console.log("clicked");
// }

// const throttledClick = throttle(handleClick, 2000);
// document
//   .getElementById("throttle-btn")
//   .addEventListener("click", throttledClick);

// flatten deeply nested array
// function flattenArray(arr) {
//   if (!Array.isArray(arr)) return arr;

//   let result = [];

//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// }

// const arr = [1, 2, 3, [4, 5, [6, 7, 8]]];
// console.log(flattenArray(arr));

// deepClone function

// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") return obj;

//   let cloned = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       cloned[key] = deepClone(obj[key]);
//     }
//   }

//   return cloned;
// }

// const original = {
//   name: "Aniket",
//   address: {
//     city: "gurgaon",
//     sector: 38,
//   },
// };

// const clonedObj = deepClone(original);
// clonedObj.address.city = "Noida";
// console.log(original);
// console.log(clonedObj);

// polyfills

// map

// Array.prototype.myMap = function (cb) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], i, this));
//   }
//   return result;
// };

// const arr = [1, 2, 3, 4];
// const output = arr.myMap((item) => item * 2);
// console.log(output);

// filter
// Array.prototype.myFilter = function (cb) {
//   let result = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) result.push(this[i]);
//   }

//   return result;
// };

// const arr = [1, 2, 3, 4];
// const output = arr.myFilter((item) => item % 2 === 0);
// console.log(output);

// reduce

// Array.prototype.myReduce = function (cb, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//   }

//   return accumulator;
// };

// const arr = [1, 2, 3, 4];
// const result = arr.myReduce((acc, curr) => acc + curr, 0);

// console.log(result);

// call
// Function.prototype.myCall = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(`${this} must be a function`);
//   }

//   context.fn = this;

//   context.fn(...args);
// };

// const obj = {
//   name: "Aniket",
// };

// function greet(greetingMs, salutation) {
//   console.log(`${greetingMs} ${salutation} ${this.name}`);
// }

// greet.myCall(obj, "Hello", "Mr.");

// Function.prototype.myApply = function (context = {}, args = []) {
//   if (typeof this !== "function") {
//     throw new Error(`${this} must be a function`);
//   }

//   if (!Array.isArray(args)) {
//     throw new TypeError(`${args} must be an array`);
//   }

//   context.fn = this;
//   context.fn(...args);
// };

// const obj = {
//   name: "Aniket",
// };

// function greet(greeting, salutation) {
//   console.log(greeting, salutation, this.name);
// }

// greet.myApply(obj, ["Hello", "Mr."]);

// bind

// Function.prototype.myBind = function (context = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error(`${this} must be a function`);
//   }

//   context.fn = this;

//   return function (...newArgs) {
//     return context.fn.call(context, ...args, ...newArgs);
//   };
// };

// const obj = {
//   name: "Aniket",
// };

// function greet(greeting, salutation) {
//   console.log(`${greeting} ${salutation} ${this.name}!`);
// }

// const returnedFunc = greet.myBind(obj, "Hello", "Mr.");
// returnedFunc();