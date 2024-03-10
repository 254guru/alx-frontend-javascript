import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override the cloneCar method
  cloneCar() {
    const clonedCar = new Car();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      if (prop !== '_cloneSymbol') {
        clonedCar[prop] = this[prop];
      }
    });
    return clonedCar;
  }
}

export default EVCar;
