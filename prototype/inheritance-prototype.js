/****************************************/
/* Inheritance with the prototype chain */
/****************************************/

// func with its own properties a and b:
let func = function () {
  this.a = 1;
  this.b = 2;
};

// Let's create an object instanceOfObject1 from function
let instanceOfObject1 = new func();

console.log(instanceOfObject1);
// instanceOfObject1 is { a: 1, b: 2 }

// add properties in func function's prototype
func.prototype.b = 3;
func.prototype.c = 4;

// {a:1, b:2} ---> {b:3, c:4} ---> Object.prototype---> null

console.log(instanceOfObject1.a);
// Is there an 'a' own property on instanceOfObject1? Yes, and its value is 1.

console.log(instanceOfObject1.b);
// Is there a 'b' own property on instanceOfObject1? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(instanceOfObject1.c);
// Is there a 'c' own property on instanceOfObject1? No, check its prototype.
// Is there a 'c' own property on instanceOfObject1.[[Prototype]]? Yes, its value is 4.

console.log(instanceOfObject1.d);
// Is there a 'd' own property on instanceOfObject1? No, check its prototype.
// Is there a 'd' own property on instanceOfObject1.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.
