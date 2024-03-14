// Define the printTeacher function
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    var fullName = "".concat(firstLetter, ". ").concat(lastName);
    return fullName;
};
// Define a teacher object
var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
};
// Define a director object
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};
// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(director1);
console.log(teacher3);
