//Create program for a movie subscription, given the BasicPlan class bellow

//extend the BasicPlan to include numOfDevices to 2, hasHD to true and price to $10.99 in StandardPlan

//extend it to PremiumPlan to include numOfDevices to 4, hasUHD to true and price to $14.99.

//colsole.log() an instance of each plan.

class BasicPlan {
  constructor(canStream) {
    this.canStream = canStream;
    this.canDownload = true;
    this.numOfDevices = 1;
    this.hasSD = true;
    this.hasHD = false;
    this.hasUHD = false;
    this.price = '$8.99';
  }
}

class StandardPlan extends BasicPlan {
  constructor(canStream, size) {
    super(canStream);
    this.numOfDevices = 2;
    this.hasHD = true;
    this.price = '$10.99';
    this.size = size;
  }
}

class PremiumPlan extends StandardPlan {
  constructor(canStream, size) {
    super(canStream, size);
    this.numOfDevices = 4;
    this.hasUHD = true;
    this.price = '$14.99';
  }
}

let basicPlan = new BasicPlan(true);
let standardPlan = new StandardPlan(true, 34);
let premiumPlan = new PremiumPlan(true, 54);

console.log(basicPlan);
console.log(standardPlan);
console.log(premiumPlan);
