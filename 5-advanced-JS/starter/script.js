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

//Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
// 
// //Objects
// var obj1 = {
//   name: 'John',
//   age: 26
// };
// 
// var obj2 = obj1;
// obj1.age = 30;
// 
// console.log(obj1.age);
// console.log(obj2.age);
// //both print 30 since they are both referencing the
// //exact same object in memory 
// 
// //Functions
// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };
// 
// function change(a, b) {
//   a = 30;
//   b.city = 'San Francisco';
// }
// 
// change(age, obj);
// 
// console.log(age); //age did not change although change was called because it's a primitive
// console.log(obj.city);

/****First Class Functions: Passing functions as arguments****/
// 
// var years = [1990, 1965, 1937, 2005, 1998];
// 
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
// 
// //callback function here because it gets called
// //inside the arrayCalc function
// function calculateAge(el) {
//   return 2016 - el;
// }
// 
// //el is short for element
// function isFullAge(el) {
//   return el >= 18;
// }
// 
// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return -1;
//   }
// }
// 
// //below doesn't have the parenthesis because
// //we don't want it to be called now but later
// var ages = arrayCalc(years, calculateAge);
// 
// var fullAges = arrayCalc(ages, isFullAge);
// 
// var rates = arrayCalc(ages, maxHeartRate);
// 
// console.log(ages);
// console.log(fullAges);
// console.log(rates);

/*****First Class Functions: Functions Returning Functions*****/
// 
// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if (job === 'teacher') {
//     return function(name) {
//       console.log('What subject do you teach, ' + name + '?');
//     }
//   } else {
//     return function(name) {
//       console.log('Hello ' + name + ', what do you do?');
//     }
//   }
// 
// }
// 
// var teacherQuestion = interviewQuestion('teacher');
// 
// var designerQuestion = interviewQuestion('designer');
// 
// // teacherQuestion('John');
// // designerQuestion('Mark');
// 
// //this below works because it works from left to right
// //the left part gets called and returns a function and then 
// //the right part ('Mark') gets passed into that returned function
// interviewQuestion('teacher')('Mark');

/****Immediately invoked function expressions (iife)****/

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

//below is the iife approach

// (function () {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
// 
// //can't see scope cuz of data privacy. The parenthesis accomplishes this
// // console.log(score);
// 
// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);

/*****Closures*****/

























