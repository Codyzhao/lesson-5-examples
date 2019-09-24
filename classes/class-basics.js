// JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over
// JavaScript's existing prototype-based inheritance. The class syntax does not introduce
// a new object-oriented inheritance model to JavaScript.

// Defining classes
// Class declarations
class Person1 {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
}

// Class expressions
//unnamed
let Person2 = class {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
};
//named
let Person3 = class Person3 {
  constructor(age, gender) {
    this.age = age;
    this.gender = gender;
  }
};

console.log(Person1.name);
console.log(Person2.name);
console.log(Person3.name);
