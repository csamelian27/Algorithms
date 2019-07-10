// The method to create new objects must be called constructor
// The class keyword creates a constant, so you can not redefine it.
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    // naming doesn't matter, just matters what we set the value to
    this.grade = year;
  }
}

let firstStudent = new Student("Colt", "Steele", 3);
// grade is undefined if not given a param
let secondStudent = new Student("Blue", "Steele");

console.log(firstStudent.firstName);
