// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.#serialNumber = "F)K01203-12k-1k09fj423f";
  }

  static getCarInstance() {
    return {};
  }

  getMake() {
    return this.make;
  }
}

var mycar = new Car("Honda", "Accord", 1998);
