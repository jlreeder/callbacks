Function.prototype.myBind = function(obj){
  //ES6
  return () => {
    this.apply(obj);
  };

  // ES5
  // var that = this;
  //
  // return function() {
  //   that.apply(obj);
  // };

};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);
// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
