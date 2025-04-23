

// polyfill
Function.prototype.myApply = function (context = {}, args=[]) {
    if (typeof this !== "function") {
      throw new Error(this + "It is not a function");
    }

    if(!Array.isArray(args)){
        throw new TypeError('CreateListArrayLike called on non-object')
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
  
  myPurchaseCar.myApply(car2, ["$", "50000"]);
  