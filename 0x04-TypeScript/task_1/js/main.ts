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
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
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

// Interface describing the constructor parameters for StudentClass
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the StudentClass
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student1 = new Student({ firstName: 'John', lastName: 'Doe' });
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student1.displayName()); // Output: John

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Logging director1 and teacher3
console.log(director1);
console.log(teacher3);
