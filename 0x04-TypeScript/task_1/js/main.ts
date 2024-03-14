// Define the interface for a Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
}

// Define the interface for a Director, extending Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};

// Define a teacher object
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
};

// Define a director object
const director1: Director = {
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
