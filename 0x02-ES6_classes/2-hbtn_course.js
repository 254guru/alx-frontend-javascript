class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateArray(students, 'Students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this._validateString(newName, 'Name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this._validateNumber(newLength, 'Length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this._validateArray(newStudents, 'Students');
  }

  // Helper method to validate string
  _validateString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${fieldName} must be a string`);
    }
    return value;
  }

  // Helper method to validate number
  _validateNumber(value, fieldName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${fieldName} must be a number`);
    }
    return value;
  }

  // Helper method to validate array
  _validateArray(value, fieldName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${fieldName} must be an array`);
    }
    return value;
  }
}

export default HolbertonCourse;
