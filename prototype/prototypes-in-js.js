/****************************************/
/********* use prototypes in JS *********/
/****************************************/

const func1 = function() {};
function func2() {};
console.log(func1.prototype);
console.log(func2.prototype);
//  It does not matter how you declare the function, a
//  function in JavaScript will always have a default
//  prototype property.

// Example default function prototype
// {
//   constructor: ƒ doSomething(),
//   __proto__: {
//     constructor: ƒ Object(),
//     hasOwnProperty: ƒ hasOwnProperty(),
//     isPrototypeOf: ƒ isPrototypeOf(),
//     propertyIsEnumerable: ƒ propertyIsEnumerable(),
//     toLocaleString: ƒ toLocaleString(),
//     toString: ƒ toString(),use prototypes in JS
//     valueOf: ƒ valueOf()
//   }
// }

func1.prototype.createdBy = 'Cody';
console.log(func1.prototype);
// Example default function prototype
// {
//   createdBy: "Cody",
//   constructor: ƒ doSomething(),
//   __proto__: {
//     constructor: ƒ Object(),
//     hasOwnProperty: ƒ hasOwnProperty(),
//     isPrototypeOf: ƒ isPrototypeOf(),
//     propertyIsEnumerable: ƒ propertyIsEnumerable(),
//     toLocaleString: ƒ toLocaleString(),
//     toString: ƒ toString(),
//     valueOf: ƒ valueOf()
//   }
// }


let instanceOfFunc1 = new func1();
instanceOfFunc1.modifiedBy = 'Nick';
console.log(instanceOfFunc1);
// Example default function prototype
// {
//   modifiedBy: "Nick",
//   __proto__: {
//   creatBy: "cody",
//   constructor: ƒ doSomething(),
//   __proto__: {
//     constructor: ƒ Object(),
//       hasOwnProperty: ƒ hasOwnProperty(),
//       isPrototypeOf: ƒ isPrototypeOf(),
//       propertyIsEnumerable: ƒ propertyIsEnumerable(),
//       toLocaleString: ƒ toLocaleString(),
//       toString: ƒ toString(),
//       valueOf: ƒ valueOf()
//     }
//   }
// }
console.log("instanceOfFunc1.modifiedBy ", instanceOfFunc1.modifiedBy);
console.log("instanceOfFunc1.createdBy ", instanceOfFunc1.createdBy);
console.log("func1.modifiedBy ", func1.modifiedBy);
console.log("func1.createdBy ", func1.createdBy);
console.log("func1.prototype.modifiedBy ", func1.prototype.modifiedBy);
console.log("func1.prototype.createdBy ", func1.prototype.createdBy);
