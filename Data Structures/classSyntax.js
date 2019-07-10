// The method to create new objects must be called constructor
// The class keyword creates a constant, so you can not redefine it.
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    // naming doesn't matter, just matters what we set the value to
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  // All instance methods below
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function(a,b){return a+b;})
    return sum/this.scores.length;
  }

  // All class methods below - use static keyword in front of method definition -
  // pertinent to classes themselves, not as much to specific instantiations
  // utility function - needs no information about individual students
  static enrollStudents() {
    return "Enrolling students!!"
  }

}

let firstStudent = new Student("Colt", "Steele", 3);
// grade is undefined if not given a param
let secondStudent = new Student("Blue", "Steele");

console.log(firstStudent.firstName);

Student.enrollStudents(firstStudent, secondStudent);







class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// pass in instances
Point.distance(p1, p2)
