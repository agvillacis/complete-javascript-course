// Function constructor

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };
// 
// //function constructors start with capital letter
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
// 
// Person.prototype.calculateAge = function () {
//   console.log(2016 - this.yearOfBirth);
// };
// 
// Person.prototype.lastName = 'Smith';
// 
// 
// var john = new Person('John', 1990, 'teacher');
// 
// john.calculateAge();
// 
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
// 
// jane.calculateAge();
// mark.calculateAge();
// 
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

//The prototype chain in the console

//do this by writing out the john object in the console from the code above

//Creating Objects: Object.create

// var personProto = {
//   calculateAge: function() {
//     console.log(2016 - this.yearOfBirth);
//   }
// };
// 
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
// 
// var jane = Object.create(personProto, 
// {
//   name: {value: 'Jane'},
//   yearOfBirth: {value: 1990},
//   job: {value: 'designer'}
// });


//The difference between Object.create and function constructor
//Object.create builds an object that inherits directly from the one that we pass
//into the first argument
//Function constructor, newly created object inherits from the constructor prototype property

//Primitives vs. Objects






























