/****************************************/
/******** Inheritance "methods" ********/
/****************************************/

let obj1 = {
  a: 2,
  func: function(){
    return this.a + 1;
  }
};

console.log(obj1.func());
// When calling obj1.func in this case, 'this' refers to obj1

let obj2 = Object.create(obj1);
// obj2 is an object that inherits from obj1

obj2.a = 3;
// creates a property 'a' on object2

console.log(obj2.func());
// when obj2.func is called, 'this' refers to obj2.
// So when obj2 inherits the function func of obj1,
// 'this.a' means obj2.a, the property 'a' of obj2
