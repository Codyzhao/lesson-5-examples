/****************************************/
/** create objects with prototype chain */
/****************************************/

// 1) Objects created with syntax constructs

let obj = {a: 1};
// obj ---> Object.prototype ---> null

let arr = ['yo', 'whatsup', '?'];
// arr ---> Array.prototype ---> Object.prototype ---> null

let func = function() {
  return 2;
}
// func ---> Function.prototype ---> Object.prototype ---> null


// 2) With a constructor
// A "constructor" in JavaScript is "just" a function that
// happens to be called with the new operator.

function Func1() {
  this.a = [];
  this.b = [];
}

Func1.prototype = {
  addItem: function(item) {
    this.a.push(item);
  }
};

let instanceOfFunc1 = new Func1();
// instanceOfFunc1 is an object with own properties 'a' and 'b'.
// instanceOfFunc1.[[Prototype]] is the value of Func1.prototype
// when new Func1() is executed.


// 3) With Object.create
// ECMAScript 5 introduced a new method: Object.create().
// Calling this method creates a new object.
// The prototype of this object is the first argument of the function:
let a = {a: 1};
// a ---> Object.prototype ---> null
let b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a);
let c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

let d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype


// With the class keyword
// ECMAScript 2015(ES6) introduced a new set of keywords implementing classes.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 22;
  }
}

class Teacher extends Person {
  constructor(fn, ln) {
    super(fn, ln);
  }
  get yearsToRetired() {
    return 65 - this.age;
  }
  set name(a) {
    this.firstName = a;
  }
  set lName(a) {
    this.lastName = a;
  }
  set newAge(a) {
    this.age = a;
  }
}

const cody = new Teacher('cody', 'zhao');
console.log(cody);
console.log(cody.yearsToRetired);
cody.name = 'Lux';
cody.lName = 'Liu';
cody.newAge = 55;
console.log(cody);

