class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    const symbolKey = Symbol('clonedCar');
    const clonedCar = new Car();
    Object.getOwnPropertyNames(this).forEach((prop) => {
      if (prop !== '_cloneSymbol') {
        clonedCar[prop] = this[prop];
      }
    });
    clonedCar[symbolKey] = true;
    return clonedCar;
  }
}

export default Car;
