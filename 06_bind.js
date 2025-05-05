/*---
bind method returns a new function after binding this with a given object
we can invoke that returned function later
syntax: const returnedFunc =  fn.bind(obj, comma separated arguments)
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

const obj = {
  name: "Aniket",
};

function greet(greeting, salutation) {
  console.log(`${greeting} ${salutation} ${this.name}!`);
}

const returnedFunc = greet.myBind(obj, "Hello", "Mr.");
returnedFunc();
