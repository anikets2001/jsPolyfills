// polyfill

/*---
apply function call a function after specifying the current 'this' fot an object and
taking arguments in a array
syntax: fn.apply(context, [arguments])
---*/

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(`${this} is not a function`);
  }

  if (!Array.isArray(args)) {
    throw new Error(`args is not an array`);
  }

  context.fn = this;
  context.fn(...args);
};

const obj = {
  name: "Aniket",
};

function greet(greeting, salutation) {
  console.log(greeting, salutation, this.name);
}

greet.myApply(obj, ["Hello", "Mr."]);
