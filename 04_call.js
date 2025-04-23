// polyfill for call()

// example of call()
// let car1 = {
//     color: 'red',
//     company: 'ferrari'
// }

// function purchaseCar(currency, price){
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}-${price}`)
// }

// purchaseCar.call(car1, "$", "50000")

// polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "It is not a function");
  }

  context.fn = this;
  context.fn(...args);
};

let car2 = {
  color: "red",
  company: "ferrari",
};

function myPurchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}-${price}`
  );
}

myPurchaseCar.myCall(car2, "$", "50000");
