class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract classes cannot be instantiated directly');
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method for evacuationWarningMessage
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
