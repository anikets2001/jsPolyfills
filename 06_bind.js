let car2 = {
  color: "red",
  company: "ferrari",
};

function myPurchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}-${price}`
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " cannot be bound as it is not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn.call(context, ...args, ...newArgs);
  };
};

const newFunc = myPurchaseCar.myBind(car2);

newFunc("$", 50000);
