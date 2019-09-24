// super class

class Person {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }

  get remainingYearsToRetirement() {
    return this.calcYearsToRetirement();
  }

  calcYearsToRetirement() {
    return 65 - this.age;
  }

  static getBirthYear(age) {
    return new Date().getFullYear() - age;
  }
}

// Sub classing with extends
class Teacher extends Person {
  // If there is a constructor present in the subclass,
  // it needs to first call super() before using "this".
  constructor(age, gender, name) {
    // call the super class constructor and pass the parameters
    super(age, gender);
    this.name = name;
  }

  teach() {
    console.log(`${this.name} is a ${this.gender} teacher.`);
  }

  calcYearToRetire() {
    // The super keyword is used to call corresponding methods
    // of super class. This is one advantage over prototype-based inheritance.
    const years = super.calcYearsToRetirement();
    console.log(`${this.name} is ${years} years to retire.`);
  }
}

const nick = new Teacher(35, 'male', 'Nick');
nick.teach();
nick.calcYearToRetire();
