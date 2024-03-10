class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Custom toString method to return the airport code
  toString() {
    return `[${this._code}]`;
  }
}

export default Airport;
