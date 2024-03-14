// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
const renderTable = (students: Student[]) => {
  const table = document.createElement("table");
  
  // Create table header
  const headerRow = table.insertRow();
  const header1 = headerRow.insertCell(0);
  const header2 = headerRow.insertCell(1);
  header1.textContent = "First Name";
  header2.textContent = "Location";
  
  // Create table rows for each student
  students.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });
  
  // Append table to the document body
  document.body.appendChild(table);
};

// Call renderTable function with studentsList
renderTable(studentsList);
