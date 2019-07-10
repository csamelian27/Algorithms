// The method to create new objects must be called constructor
// The class keyword creates a constant, so you can not redefine it.
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    // naming doesn't matter, just matters what we set the value to
    this.grade = year;
    this.tardies = 0;
  }

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
    
  }
}

let firstStudent = new Student("Colt", "Steele", 3);
// grade is undefined if not given a param
let secondStudent = new Student("Blue", "Steele");

console.log(firstStudent.firstName);



// Instance Methods
