/*-- once function
function that runs only once (no matter how many times it's invoked/called)
---*/

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

// if we don't wrap a function inside once it will get called again and again how many times it get invokec
const hello = () => console.log("hello many times");

hello();
hello();
hello();
hello();

const helloOnce = once(() => console.log("hello only once"));

helloOnce();
helloOnce();
helloOnce();
helloOnce();

// with context
const user = {
  name: "Aniket",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};


const greetOnce = once(user.greet, user);
greetOnce(); // Hello, my name is Aniket
greetOnce(); // (nothing happens)
greetOnce(); // (nothing happens)

