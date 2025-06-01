/*---polyfill for map start---*/

/*----
1. map
map function: map returns a new array after iterating on each element and performing some callback condition on each element of a given array
syntax: Array.map((item, index, arr)=> {})
---*/

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

// example:
const arr = [1, 2, 3, 4];
const result = arr.myMap((item, index, arr) => item * 2);
console.log("result of map:", result);

/*---polyfill for map end---*/

/*--- polyfill for filter start ---*/

/*----
2. filter
filter function: filter selects(filter out) one or more elements from a given array based on given callback condition, and return a new array
syntax: Array.filter((item, index, arr)=> {})
---*/

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
};

const filterArr = [1, 2, 3, 4, 5, 6];

const filterResult = filterArr.filter(
  (item, index, filterArr) => item % 2 == 0
);

console.log("result of my filter function", filterResult);

/*--- polyfill for filter end ---*/

/*--- polyfill for reduce start ---*/

/*----
3. reduce
reduce function: reduce returns a single value after performing some callback function operation on each element of given array
syntax: Array.reduce((accumulator,currentValue, index, arr)=> {}, initialValue)
---*/

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const accArr = [1, 2, 3, 4];
const reduceRes = accArr.myReduce((acc, curr, index, accArr) => {
  return acc + curr;
}, 0);

console.log("result of my reduce polyfill:", reduceRes);

/*--- polyfill for reduce end ---*/

/*--- call polyfill start ---*/
/*---
3. call
call function: call function is used to explicity call a function with the given 'this' object context, it takes parameters as comma separated
syntax: func.call(obj, 'arg1',  'arg2', 'arg3')
---*/

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }

  context.fn = this;
  context.fn(...args);
};

const callObj = {
  name: "Aniket",
};

function callFunc(greetingMsg, salutation) {
  console.log(
    `Result of call function: ${greetingMsg} ${salutation} ${this.name}`
  );
}

callFunc.call(callObj, "Hello", "Mr.");

/*--- call polyfill end ---*/

/*--- apply polyfill start ---*/

/*---
3. apply
call function: apply function is used to explicity call a function with the given 'this' object context, it takes parameters as an array
syntax: func.apply(obj, ['arg1',  'arg2', 'arg3'])
---*/

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }

  if (!Array.isArray(args)) {
    throw new TypeError(`${args} must be an array`);
  }

  context.fn = this;
  context.fn(...args);
};

const applyObj = {
  name: "Aniket",
};

function applyFunc(greetingMsg, salutation) {
  console.log(
    `Result of apply function: ${greetingMsg} ${salutation} ${this.name}`
  );
}

applyFunc.myApply(callObj, ["Hello", "Mr."]);

/*--- apply polyfill end ---*/

/*--- bind polyfill start ---*/

/*---
3. bind
bind function: bind function is used to bind  'this' explicitly to a given object and call a function on that object, it returns a function which we can invoke later
syntax: const returnedFunc =  func.bind(obj, 'arg1',  'arg2', 'arg3')
---*/

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn.call(context, ...args, ...newArgs);
  };
};

const bindObj = {
  name: "Aniket",
};

function bindFunc(greeting, salutation) {
  console.log(
    `Result of bind function: ${greeting} ${salutation} ${this.name}!`
  );
}

const returnedFunc = bindFunc.call(bindObj, "Hello", "Mr.");

/*--- bind polyfill end ---*/

/*--- once polyfill start ---*/

// once function prevents a function to be invoked again and again

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello = () => console.log("hello invoked many times");
hello();
hello();
hello();
hello();

const helloOnce = once(() => console.log("hello invoked only once"));
helloOnce();
helloOnce();
helloOnce();
helloOnce();

/*--- once polyfill end ---*/
