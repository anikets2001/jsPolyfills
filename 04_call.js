// polyfill for call()

/*---
call function call a function after specifying the current 'this' to an object and taking arguments as comma separated
syntax: fn.call(context, comma separated arguments)
---*/

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }

  context.fn = this;
  context.fn(...args);
};

const obj = {
  name: "Aniket",
};

function greet(greeting) {
  console.log(`${greeting} ${this.name}!`);
}

greet.myCall(obj, "hello");
